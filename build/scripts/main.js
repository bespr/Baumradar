function init(a){NProgress.start(),$("#splashscreen .ani").each(function(a,b){$(b).css("animation-name",Math.random()<5?"ani1":"ani2")}),state.desktop=document.documentElement.clientWidth>=800?!0:!1,state.desktop||($("#map").css("height",$("#map").height()+"px"),$("#geolocation").css("top",$("#map").height()-114+"px"),$("#mapchange").css("top",$("#map").height()-114+"px"));var b=[];b.push(new Promise(initMap)),a&&b.push(new Promise(initLocation)),Promise.all(b).then(function(){panTo(state.user.location,!0),state.layers.map.setVisible(!0),initUser(),Promise.all([new Promise(refreshTrees),state.tilesLoadEnd]).then(finishInit)}),initEvents()}function finishInit(a){NProgress.done();var b=a[0];if(!b.length)return panTo(state.user.defaultLocation,!0),state.geolocation=!1,$("#geolocation").remove(),void new Promise(refreshTrees).then(finishInit);var c=sortByDist(b)[0];highlightTree([c.lon,c.lat]),details(c.Baumnummer),$("#splashscreen").addClass("hide"),state.autoRefresh=!0}function refreshTrees(a,b){var c=calcTileExtents(),d=[];c.forEach(function(a){-1==state.reqTiles.indexOf(a[0]+"-"+a[1])&&(state.reqTiles.push(a[0]+"-"+a[1]),d.push(new Promise(function(b,c){getTreeTile(b,c,a,a[0]+"-"+a[1])})))}),Promise.all(d).then(function(b){var c=[].concat.apply([],b);updateTrees(c),a&&a(c)})}function calcTileExtents(){var a=map.getView().calculateExtent(map.getSize()),b=proj4("EPSG:21781","EPSG:4326",[a[0],a[1]]),c=proj4("EPSG:21781","EPSG:4326",[a[2],a[3]]);a=[b[0],b[1],c[0],c[1]],console.log(a),a.forEach(function(b,c){a[c]=b-b%state.tileSize});var d=[a[0],a[2]];if(!(d[1]-d[0])/state.tileSize)d=[d[0]];else for(var e=1;e<(d[1]-d[0])/state.tileSize;e++)d.push(d[0]+state.tileSize*e);var f=[a[1],a[3]];if(!(f[1]-f[0])/state.tileSize)f=[f[0]];else for(var e=1;e<(f[1]-f[0])/state.tileSize;e++)f.push(f[0]+state.tileSize*e);var g=[],h=[];return console.log(d),console.log(f),d.forEach(function(a){f.forEach(function(b){var c=[a,b],d=[a+state.tileSize,b+state.tileSize];g.push([c[0],c[1],d[0],d[1]]),h.push([a,b,a+state.tileSize,b+state.tileSize])})}),console.log(JSON.stringify(g)),console.log(JSON.stringify(h)),g}function hideSearch(){state.search=!state.search,$("header, #results, #trees").removeClass("search")}function initEvents(){$("#geolocation").click(function(){state.watchposition=!0,state.ready&&(panTo(state.user.location),updateUser())}),$("#mapchange").click(function(){$(this).toggleClass("map"),toggleLayers()}),$("#splashscreen").on("transitionend",function(){$(this).remove()}),$("#splashscreen .text").on("transitionend",function(a){a.stopPropagation()}),$("#splashscreen .ani").on("transitionend",function(a){a.stopPropagation()}),$("header .btBack").click(function(){state.search=!state.search,$("header, #results, #trees").toggleClass("search"),state.search&&($("header .search").removeClass("hide"),$("header .input").focus(),$("header .input").html(""))}),$("header .btOpt").click(function(){$("#info").toggleClass("active")}),$("#info .close").click(function(){$("#info").removeClass("active")}),$("header .input").click(function(){state.search=!0,$("header .search").removeClass("hide"),$("header .input").html(""),$("header, #results, #trees").addClass("search")}),$("header .input").on("keyup",function(){var a=$(this).html();a?($("header .search").addClass("hide"),searchFor(a.replace(/\&nbsp;/g," "))):($("header .search").removeClass("hide"),$("#results #rInner").html(""))}),$("#imgDetail .close").click(function(){$("#imgDetail").removeClass("active")})}function goToFail(a){alert(a)}function initMap(a,b){state.layers.trees=new ol.layer.Vector,state.layers.user=new ol.layer.Vector;var c=ol.proj.get("EPSG:21781");c.setExtent([42e4,3e4,9e5,35e4]),map=new ol.Map({target:"map",view:new ol.View({projection:c,center:proj4("EPSG:4326","EPSG:21781",state.user.location),zoom:12,minZoom:10,maxZoom:15}),interactions:ol.interaction.defaults({pinchRotate:!1,doubleClickZoom:!1}),controls:[]}),initMapEvents(),new Promise(function(a,b){getWmtsLayers(a,b,config.url.wmtsXml)}).then(function(){[state.layers.map,state.layers.aerial,state.layers.user,state.layers.trees].forEach(function(a){map.addLayer(a)}),a()})}function initUser(){state.layers.user.setSource(new ol.source.Vector),state.geolocation?(features.user=new ol.Feature({geometry:new ol.geom.Point(proj4("EPSG:4326","EPSG:21781",state.user.location))}),features.user.setStyle(new ol.style.Style({image:new ol.style.Icon({src:state.compass?"icons/user-dir-accent.svg":"icons/user-accent.svg",size:[40,40]})})),state.layers.user.getSource().addFeature(features.user)):($("#geolocation, .left, .border").remove(),$(".right").css("margin","0px")),state.ready=!0}function updateUser(){features.user.getStyle().getImage().setRotation(state.user.heading*(Math.PI/180)),features.user.setGeometry(new ol.geom.Point(proj4("EPSG:4326","EPSG:21781",state.user.location)))}function updateTrees(a){features.trees||(features.trees=[],state.styles.treeMap=new ol.style.Style({image:new ol.style.Icon({src:"icons/tree-green.png",opacity:.7,scale:.5})}),state.styles.treeMapHighlight=new ol.style.Style({image:new ol.style.Icon({src:"icons/tree-green-active.png",scale:.5})}),state.styles.treeAerial=new ol.style.Style({image:new ol.style.Icon({src:"icons/tree-white.png",opacity:.8,scale:.5})}),state.styles.treeAerialHighlight=new ol.style.Style({image:new ol.style.Icon({src:"icons/tree-white-active.png",scale:.5})}),state.layers.trees.setSource(new ol.source.Vector({})));var b=[];a.forEach(function(a){var c=new ol.Feature({geometry:new ol.geom.Point(proj4("EPSG:4326","EPSG:21781",[a.lon,a.lat])),dist:parseInt(a.distance),Baumnummer:a.Baumnummer});c.setStyle(state.aerial?state.styles.treeAerial:state.styles.treeMap),features.trees.push(c),b.push(c)}),state.layers.trees.getSource().addFeatures(b)}function toggleLayers(){state.aerial=!state.aerial,state.layers.map.setVisible(!state.aerial),state.layers.aerial.setVisible(state.aerial),features.trees.forEach(function(a){a.setStyle(state.aerial?state.styles.treeAerial:state.styles.treeMap)}),state.highlight.tree.setStyle(state.aerial?state.styles.treeAerialHighlight:state.styles.treeMapHighlight)}function initMapEvents(){map.on("click",function(a){var b,c;map.forEachFeatureAtPixel(a.pixel,function(d,e){var f=map.getPixelFromCoordinate(d.getGeometry().getCoordinates()),g=(a.pixel[0]-f[0])*(a.pixel[0]-f[0])+(a.pixel[1]-f[1])*(a.pixel[1]-f[1]);(!c||c>g)&&(c=g,b=d)}),b&&b.getProperties().Baumnummer&&(state.watchposition=!1,highlightTree(proj4("EPSG:21781","EPSG:4326",b.getGeometry().getCoordinates()),!0),details(b.getProperties().Baumnummer))}),map.on("pointerdrag",function(){state.watchposition=!1}),map.on("moveend",function(){state.autoRefresh&&refreshTrees(proj4("EPSG:21781","EPSG:4326",map.getView().getCenter()))})}function getWmtsLayers(a,b,c){$.get(c).success(function(b){var c=(new ol.format.WMTSCapabilities).read(b);delete c.OperationsMetadata.GetTile,c.Contents.Layer.forEach(function(a,b){if("Luftbild_2011"==a.Identifier||"UebersichtsplanAktuell"==a.Identifier){console.log(a);var d=ol.source.WMTS.optionsFromCapabilities(c,{layer:a.Identifier});state.layers["UebersichtsplanAktuell"==a.Identifier?"map":"aerial"]=new ol.layer.Tile({source:new ol.source.WMTS(d),opacity:"UebersichtsplanAktuell"==a.Identifier?.4:1,visible:!1})}}),state.tilesLoadEnd=new Promise(function(a,b){state.tilesLoadEndResolve=a}),state.layers.map.getSource().on("tileloadstart",function(a){state.tileCount++}),state.layers.map.getSource().on("tileloadend",function(a){state.tileCount--,state.tileCount||state.tilesLoadEndResolve()}),state.layers.map.getSource().on("tileloaderror",function(a){localStorage.setItem("geo","outofbounds"),location.reload()}),a()}).fail(function(){goToFail("Kartenmaterial konnte nicht geladen, bitte später erneut versuchen")})}function panTo(a,b){if(!b){var c=ol.animation.pan({duration:400,source:map.getView().getCenter()});map.beforeRender(c)}map.getView().setCenter(proj4("EPSG:4326","EPSG:21781",a))}function highlightTree(a,b){state.tree=a,state.highlight.tree&&state.layers.trees.getSource().removeFeature(state.highlight.tree),state.highlight.tree=new ol.Feature({geometry:new ol.geom.Point(proj4("EPSG:4326","EPSG:21781",a))}),state.highlight.tree.setStyle(state.aerial?state.styles.treeAerialHighlight:state.styles.treeMapHighlight),state.layers.trees.getSource().addFeature(state.highlight.tree),b&&panTo(a)}function getTreeTile(a,b,c){var d="http://api.flaneur.io/baumkataster/area/";d+=c.join("/"),$.get(d).success(function(b){a(JSON.parse(b))}).fail(function(){state.reqTiles.splice(state.reqTiles.indexOf(c[0]+"-"+c[1]),1),a()})}function getDetails(a,b,c){var d="http://api.flaneur.io/baumkataster/tree/"+c;$.get(d).success(function(b){a(JSON.parse(b)[0])}).fail(function(){goToFail("Details konnten nicht geladen werden, bitte später erneut versuchen."),b()})}function getWiki(a,b,c){var d=[];d.push(new Promise(function(a,b){var d=state.proxy+"https://commons.wikimedia.org/w/api.php?action=query&format=json&list=categorymembers&rawcontinue&cmtype=file&cmtitle=Category:";d+=c,$.get(d,function(b){var c="";b.query.categorymembers.forEach(function(a,b){c+=c?"|"+a.title:a.title});var d=state.proxy+"https://commons.wikimedia.org/w/api.php?action=query&titles="+c+"&prop=imageinfo&iiprop=url|size|extmetadata&format=json&rawcontinue";$.get(d,function(b){if(!b.query)return void a();var c=[];$.each(b.query.pages,function(a,b){var d=b.imageinfo[0];d.extmetadata.Artist&&c.push({url:d.url,descriptionurl:d.descriptionurl,height:d.height,width:d.width,artist:cleanArtist(d.extmetadata.Artist.value),licence:d.extmetadata.LicenseShortName.value})}),a(c)})})})),d.push(new Promise(function(a,b){var d=state.proxy+"https://de.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&explaintext=&iwurl=&rawcontinue=&titles="+c+"&redirects=";$.get(d,function(b){a({url:"https://de.wikipedia.org/wiki/"+b.query.pages[Object.keys(b.query.pages)[0]].title,extract:b.query.pages[Object.keys(b.query.pages)[0]].extract,title:b.query.pages[Object.keys(b.query.pages)[0]].title})})})),Promise.all(d).then(function(b){a({imgs:b[0],extract:b[1]})})}function getByUrl(a,b,c,d){!d&&(d={}),$.get(d.proxy?state.proxy+c:c,function(b){a(d.parse?JSON.parse(b):b)})}function searchTrees(a,b,c){$.get(url,function(b){a(JSON.parse(b))})}function searchAddresses(a,b,c){var d="http://api.flaneur.io/zadressen/search/"+c+"/limit=15";$.get(d,function(b){a(JSON.parse(b))})}function initLocation(a,b){"geolocation"in navigator?navigator.geolocation.watchPosition(function(b){b.coords.longitude>8.398302613481356&&b.coords.longitude<8.633312509540968&&b.coords.latitude>47.29709259053008&&b.coords.latitude<47.46115331797573&&(state.user.location=[b.coords.longitude,b.coords.latitude],state.geolocation=!0,state.ready&&(state.watchposition&&panTo(state.user.location),updateUser(),updateDirection())),a()},function(b){goToFail("Ihr aktueller Aufenthaltsort konnte nicht ermittelt werden"),localStorage.removeItem("geo"),a()}):(goToFail("Ihr aktueller Aufenthaltsort konnte nicht ermittelt werden"),localStorage.removeItem("geo"),a()),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",function(a){var b;event.webkitCompassHeading&&(state.compass||(state.compass=!0,features.user&&features.user.setStyle(new ol.style.Style({image:new ol.style.Icon({src:"icons/user-dir-accent.svg",size:[40,40]})}))),b=event.webkitCompassHeading,b!=state.user.heading&&(state.user.heading=b,state.ready&&(updateUser(),updateDirection())))})}function details(a){$("#trees .tree").removeClass("active"),new Promise(function(b,c){getDetails(b,c,a)}).then(function(a){createDetails(a),initOverview(a),a.wikimediaCat=getWikimediaCat(a),state.wiki[a.wikimediaCat]?addWikiDetails(a.Baumnummer,state.wiki[a.wikimediaCat]):new Promise(function(b,c){getWiki(b,c,a.wikimediaCat)}).then(function(b){state.wiki[a.wikimediaCat]={imgs:b.imgs,extract:b.extract},addWikiDetails(a.Baumnummer,b)})})}function createDetails(a){cleanDetails(a);var b=state.geolocation?template(detailDom.titleGeo,a):template(detailDom.title,a),c=template(detailDom.details,a),d=$(template(detailDom.container,a));$(b+c).insertBefore(d.children(".images")),$("#trees").html($(d)),updateDirection()}function addWikiDetails(a,b){if($("#"+a).length){if(b.imgs){if(b.imgs.length>2)var c={img1:wikiThumb(b.imgs[0]),imgf1:wikiThumb(b.imgs[0],!0),lurl1:b.imgs[0].descriptionurl,artist1:b.imgs[0].artist,licence1:b.imgs[0].licence,img2:wikiThumb(b.imgs[1]),imgf2:wikiThumb(b.imgs[1],!0),lurl2:b.imgs[1].descriptionurl,artist2:b.imgs[1].artist,licence2:b.imgs[1].licence,img3:wikiThumb(b.imgs[2]),imgf3:wikiThumb(b.imgs[2],!0),lurl3:b.imgs[2].descriptionurl,artist3:b.imgs[2].artist,licence3:b.imgs[2].licence},d=template(detailDom.images,c);else var c={img1:wikiThumb(b.imgs[0]),lurl1:b.imgs[0].descriptionurl,artist1:b.imgs[0].artist,licence1:b.imgs[0].licence},d=template(detailDom.singleImage,c);$("#"+a+" .images").html(d),$("#"+a+" .images .img").click(function(){$("#imgDetail").css("background-image","url("+$(this).attr("attr-bg")+")"),$("#imgDetail").addClass("active"),$("#imgDetail .licence a").html("Image by "+$(this).attr("attr-artist")+"<br/>Licence: "+$(this).attr("attr-licence")),$("#imgDetail .licence a").attr("href",$(this).attr("attr-lurl"))})}else $("#"+a+" .images").hide();if(b.extract.extract){var e=template(detailDom.extract,b.extract);$("#"+a+" .wiki").html(e)}else $("#"+a+" .wiki").hide()}$("#trees .tree").addClass("active")}function getWikimediaCat(a){var b=a.Baumgattung+"_"+a.Baumart_LAT;return b.replace(/ /g,"_").replace(/_x_/g,"_×_")}function cleanDetails(a){switch(a.number="",a.height=a.width="-",a.Baumtyp.split(",")[0]){case"Höhe:>20m":a.height="über 20m";break;case"Höhe:10-20m":a.height="10-20m";break;case"Höhe:<10m":a.height="bis 10m"}switch(a.Baumtyp.split(",")[1]){case" Breite:>10m":a.width="über 10m";break;case" Breite:<10m":a.width="bis 10m"}a.distance="-",0==a.Pflanzjahr&&(a.Pflanzjahr="-")}function initOverview(a){var b=[];b.push(new Promise(function(b,c){getByUrl(b,c,"http://api.flaneur.io/baumkataster/trees/Baumname_LAT="+a.Baumname_LAT,{parse:!0})})),b.push(new Promise(function(a,b){getByUrl(a,b,"https://data.stadt-zuerich.ch/storage/f/stadtkreis/stadtkreis.json",{proxy:!0})})),b.push(new Promise(function(a,b){getByUrl(a,b,"data/Zuerichsee.json")})),Promise.all(b).then(function(b){var c=b[0],d=b[1],e=b[2],f=[new ol.style.Style({stroke:new ol.style.Stroke({color:"#CCCCCC",width:.5})})],g=([new ol.style.Style({stroke:new ol.style.Stroke({color:"#FF4E92",width:.5})})],[new ol.style.Style({stroke:new ol.style.Stroke({color:"#CCCCCC",width:.5}),fill:new ol.style.Fill({color:"#EEEEEE"})})]),h=new ol.source.Vector({features:(new ol.format.GeoJSON).readFeatures(d,{featureProjection:"EPSG:3857"}),projection:"EPSG:3857"}),i=new ol.layer.Vector({source:h,projection:"EPSG:3857",style:f}),j=new ol.source.Vector({features:(new ol.format.GeoJSON).readFeatures(e,{featureProjection:"EPSG:3857"}),projection:"EPSG:3857"}),k=new ol.layer.Vector({source:j,projection:"EPSG:3857",style:g}),l=new ol.layer.Vector;overview=new ol.Map({layers:[i,k,l],target:"overview",view:new ol.View({center:[8.536999947103082,47.37367243001017],projection:"EPSG:3857"}),interactions:[],controls:[]}),overview.getView().fit(h.getExtent(),overview.getSize()),l.setSource(createTreeLayer(c,a))})}function createTreeLayer(a,b){var c=new ol.style.Style({image:new ol.style.Icon({src:"icons/tree-min.png",opacity:.5,scale:.5})}),d=new ol.style.Style({image:new ol.style.Icon({src:"icons/overview-center.png",scale:.5})}),e=[];a.forEach(function(a){var b=new ol.Feature({geometry:new ol.geom.Point(proj4("EPSG:4326","EPSG:3857",[a.lon,a.lat]))});b.setStyle(c),e.push(b)});var f=new ol.Feature({geometry:new ol.geom.Point(proj4("EPSG:21781","EPSG:3857",map.getView().getCenter()))});f.setStyle(d),e.push(f);var g=new ol.source.Vector({features:e});return g}function searchFor(a){state.searchPromises=[],state.searchPromises.push(new Promise(function(b,c){getByUrl(b,c,"http://api.flaneur.io/baumkataster/search/"+a+"/limit=15&lon="+state.user.location[0]+"&lat="+state.user.location[1],{parse:!0})})),state.searchPromises.push(new Promise(function(b,c){getByUrl(b,c,"http://api.flaneur.io/zadressen/search/"+a+"/limit=15",{parse:!0})})),Promise.all(state.searchPromises).then(function(a){showResults(a)})}function showResults(a){$("#results #rInner").html(""),a[0].forEach(function(a){a.dist=formatDist(a.dist),$("#results #rInner").append(template(config.dom.resultTree,a))}),a[1].forEach(function(a){a.dist=formatDist(getDistanceFromLatLonInM([a.lon,a.lat],state.user.location)),$("#results #rInner").append(template(config.dom.resultAddress,a))}),$(".rTreeItem").click(function(){state.watchposition=!1,highlightTree([$(this).attr("lon"),$(this).attr("lat")],!0),details($(this).attr("treeId")),hideSearch()}),$(".rAddressItem").click(function(){state.watchposition=!1,activeAddress&&state.layers.user.getSource().removeFeature(activeAddress),activeAddress=new ol.Feature({geometry:new ol.geom.Point(proj4("EPSG:4326","EPSG:21781",[$(this).attr("lon"),$(this).attr("lat")]))}),style=new ol.style.Style({image:new ol.style.Icon({src:"icons/user-accent.svg",size:[40,40]})}),activeAddress.setStyle(style),state.layers.user.getSource().addFeature(activeAddress),panTo([$(this).attr("lon"),$(this).attr("lat")]),hideSearch()})}function getDistanceFromLatLonInM(a,b){var c=6371,d=deg2rad(b[1]-a[1]),e=deg2rad(b[0]-a[0]),f=Math.sin(d/2)*Math.sin(d/2)+Math.cos(deg2rad(a[1]))*Math.cos(deg2rad(b[1]))*Math.sin(e/2)*Math.sin(e/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),h=c*g*1e3;return Math.round(h)}function deg2rad(a){return a*(Math.PI/180)}function template(a,b){return a.replace(/{(\w+)}/g,function(a,c){return b[c]})}function cleanArtist(a){return-1!=a.indexOf("</a>")?a.split('">')[1].split("</a>")[0]:a}function wikiThumb(a,b){var c=Math.round(window.devicePixelRatio*(!state.desktop||b?window.innerWidth:360));if(a.width<=c)return a.url;var d=a.url.split("/commons/").join("/commons/thumb/").split("/");return d.push(c+"px-"+d[d.length-1]),d.join("/")}function updateDirection(){var a={x:state.tree[1],y:state.tree[0]},b={x:state.user.location[1],y:state.user.location[0]},c=180*Math.atan2(a.y-b.y,a.x-b.x)/Math.PI;c-=state.user.heading,$("#trees .tree .left .dir").css("transform","rotate("+c+"deg)");var d=getDistanceFromLatLonInM(state.user.location,state.tree);d=1e3>d?d+"m":Math.round(d/100)/10+"km",$("#trees .tree .left .dist").html(d)}function sortByDist(a){return a.forEach(function(a){a.dist=getDistanceFromLatLonInM([a.lon,a.lat],state.user.location)}),a.sort(function(a,b){return a.dist<b.dist?-1:a.dist>b.dist?1:0}),a}function formatDist(a){return 1e3>a?a+"m":Math.round(a/100)/10+"km"}var config={url:{wmtsXml:"https://cors-proxy.xiala.net/http://www.gis.stadt-zuerich.ch/wmts/wmts-zh-stzh-ogd.xml",wmtsXmlLocal:"wmts.xml",searchTrees:"http://api.flaneur.io/baumkataster/search/{query}/limit=15&lon={lon}&lat={lat}",searchAddresses:"http://api.flaneur.io/zadressen/search/{query}/limit=15"},dom:{resultTree:'<div class="rTreeItem" treeId="{Baumnummer}" lon="{lon}" lat="{lat}"><div class="rTitle">{Baumname_D}</div><div class="rLat">{Baumname_LAT}</div><div class="rDetails">{dist} · {Strasse} · {Quartier}</div></div>',resultAddress:'<div class="rAddressItem" lon="{lon}" lat="{lat}"><div class="rTitle">{Adresse}</div><div class="rDetails">{dist} · {PLZ} · {StatQuartier}</div></div>'}},state={watchposition:!0,geolocation:!1,compass:!1,user:{location:[8.545079,47.366989],defaultLocation:[8.545079,47.366989],heading:0},lastRequest:[8.545953265970327,47.364551977441565],tree:[8.545953265970327,47.364551977441565],params:{r:250},trees:{},treeList:[],wiki:{},proxy:"https://cors-proxy.xiala.net/",aerial:!1,search:!1,searchTreesP:void 0,searchAddressesP:void 0,tileSize:.002,tileCount:0,reqTiles:[],ready:!1,autoRefresh:!1,highlight:{},layers:{},styles:{}};$(function(){localStorage.getItem("geo")?($("#splashscreen .text").hide(),"outofbounds"==localStorage.getItem("geo")?(localStorage.removeItem("geo"),goToFail("Ihr aktueller Aufenthaltsort ist ausserhalb von Zürich"),init(!1)):init(!0)):($("#allowgeo").click(function(){init(!0),$("#splashscreen .text").css("opacity",0),localStorage.setItem("geo",!0)}),$("#denygeo").click(function(){$("#splashscreen .text").css("opacity",0),init(!1)}))});var map,features={},activeAddress,detailDom={container:'<div id="{Baumnummer}" class="tree"><div class="images"></div><div class="wiki"></div><div id="overviewTitle">Vorkommen</div><div id="overview"></div>',titleGeo:'<div class="title"><div class="left"><div class="dir"></div><div class="num">{number}</div><div class="dist">{distance}</div></div><div class="border"></div><div class="right geo"><div class="ger">{Baumname_D}</div><div class="lat">{Baumname_LAT}</div></div></div>',title:'<div class="title"><div class="right"><div class="ger">{Baumname_D}</div><div class="lat">{Baumname_LAT}</div></div></div>',details:'<div class="details">	<div class="detail year">{Pflanzjahr}</div>	<div class="detail height">{height}</div>	<div class="detail width">{width}</div>	<div class="detail baumnum">{Baumnummer}</div></div><div class="location"><div>{Strasse}, {Quartier}</div></div></div>',images:'<div class="img1 img" style="background-image:url({img1})" attr-bg="{imgf1}" attr-artist="{artist1}" attr-licence="{licence1}" attr-lurl="{lurl1}"></div><div class="img2 img" style="background-image:url({img2})" attr-bg="{imgf2}" attr-artist="{artist2}" attr-licence="{licence2}" attr-lurl="{lurl2}"></div><div class="img3 img" style="background-image:url({img3})" attr-bg="{imgf3}" attr-artist="{artist3}" attr-licence="{licence3}" attr-lurl="{lurl3}"></div>',singleImage:'<div class="simg img" style="background-image:url({img1})" attr-bg="{imgf1}" attr-artist="{artist1}" attr-licence="{licence1}" attr-lurl="{lurl1}"></div>',extract:'{extract} <a target="_blank" href="{url}">Wikipedia</a>'},overview;