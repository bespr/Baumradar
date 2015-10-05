function makeSearch(query) {
	state.searchTreesP = new Promise(function(resolve, reject) {
		searchTrees(resolve, reject, query)
	})

	state.searchAddressesP = new Promise(function(resolve, reject) {
		searchAddresses(resolve, reject, query)
	})

	Promise.all([state.searchTreesP, state.searchAddressesP]).then(function(data) {
		handleResults(data)
	})
}

function handleResults(data) {
	$("#results #rInner").html("")

	var resultTemplate = '<div class="rTreeItem" treeId="{Baumnummer}" lon="{lon}" lat="{lat}"><div class="rTitle">{Baumname_D}</div><div class="rLat">{Baumname_LAT}</div><div class="rDetails">{distance} · {Strasse} · {Quartier}</div></div>'
	data[0].forEach(function(tree) {

		tree.distance = tree.dist < 1000 ? tree.dist + "m" : (Math.round(tree.dist / 100)) / 10 + "km"

		$("#results #rInner").append(template(resultTemplate, tree))
	})

	$(".rTreeItem").click(function() {

		state.tree = [$(this).attr("lon"), $(this).attr("lat")]

		details($(this).attr("treeId"))

		createSearchTree([$(this).attr("lon"), $(this).attr("lat")])

		selectedFeature.setStyle(state.satelite ? treeStyles.lwhite : treeStyles.lgreen)


		// selectedFeature = feature
		// feature.setStyle(state.satelite ? treeStyles.white : treeStyles.green)

		var pan = ol.animation.pan({
			duration: 400,
			source: /** @type {ol.Coordinate} */ (map.getView().getCenter())
		});
		map.beforeRender(pan);
		centerMap([$(this).attr("lon"), $(this).attr("lat")]);
		hideSearch()

	})

	var resultTemplate = '<div class="rAddressItem" lon="{lon}" lat="{lat}"><div class="rTitle">{Adresse}</div><div class="rDetails">{distance} · {PLZ} · {StatQuartier}</div></div>'
	data[1].forEach(function(address) {

		var dist = getDistanceFromLatLonInM([address.lon, address.lat], state.user.location)
		address.distance = dist < 1000 ? dist + "m" : (Math.round(dist / 100)) / 10 + "km"

		$("#results #rInner").append(template(resultTemplate, address))
	})

	$(".rAddressItem").click(function() {
		if (activeAddress) {
			userLayer.getSource().removeFeature(activeAddress)
		}

		activeAddress = new ol.Feature({
			geometry: new ol.geom.Point(proj4('EPSG:4326', 'EPSG:21781', [$(this).attr("lon"), $(this).attr("lat")]))
		});

		style = new ol.style.Style({
			image: new ol.style.Icon(({
				src: 'svg/user-accent.svg'
			}))
		});

		activeAddress.setStyle(style)

		userLayer.getSource().addFeature(activeAddress)

		var pan = ol.animation.pan({
			duration: 400,
			source: /** @type {ol.Coordinate} */ (map.getView().getCenter())
		});
		map.beforeRender(pan);
		centerMap([$(this).attr("lon"), $(this).attr("lat")]);
		hideSearch()
	})
}