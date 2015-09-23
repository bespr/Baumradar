(function() {
    function k(a) {
        return function() {
            return this[a]
        }
    }
    function ba(a) {
        return function() {
            return a
        }
    }
    var m, ca = ca || {}, p = this;
    function da() {}
    function fa(a) {
        a.va = function() {
            return a.Vd ? a.Vd : a.Vd = new a
        }
    }
    function ga(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}
function s(a) {
    return void 0 !== a
}
function ia(a) {
    return "array" == ga(a)
}
function ja(a) {
    var b = ga(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
    return "string" == typeof a
}
function ka(a) {
    return "number" == typeof a
}
function la(a) {
    return "function" == ga(a)
}
function ma(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
function x(a) {
    return a[na] || (a[na]=++oa)
}
var na = "closure_uid_" + (1E9 * Math.random()>>>0), oa = 0;
function pa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function qa(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
function y(a, b, c) {
    y = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
    return y.apply(null, arguments)
}
function ra(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
var sa = Date.now || function() {
    return + new Date
};
function C(a, b) {
    var c = a.split("."), d = p;
    c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
}
function E(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.F = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
function ta(a) {
    Error.captureStackTrace ? Error.captureStackTrace(this, ta) : this.stack = Error().stack || "";
    a && (this.message = String(a))
}
E(ta, Error);
ta.prototype.name = "CustomError";
function ua(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function wa(a) {
    if (!xa.test(a))
        return a;
    - 1 != a.indexOf("\x26") && (a = a.replace(ya, "\x26amp;"));
    - 1 != a.indexOf("\x3c") && (a = a.replace(za, "\x26lt;"));
    - 1 != a.indexOf("\x3e") && (a = a.replace(Aa, "\x26gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(Ba, "\x26quot;"));
    return a
}
var ya = /&/g, za = /</g, Aa = />/g, Ba = /\"/g, xa = /[&<>\"]/;
function Ca(a) {
    a = s(void 0) ? a.toFixed(void 0) : String(a);
    var b = a.indexOf(".");
    - 1 == b && (b = a.length);
    b = Math.max(0, 2 - b);
    return Array(b + 1).join("0") + a
};
var Da = Array.prototype, Fa = Da.indexOf ? function(a, b, c) {
    return Da.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (u(a))
        return u(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, Ga = Da.forEach ? function(a, b, c) {
    Da.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Ha = Da.filter ? function(a, b, c) {
    return Da.filter.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = [], f =
    0, g = u(a) ? a.split("") : a, h = 0; h < d; h++)
        if (h in g) {
            var l = g[h];
            b.call(c, l, h, a) && (e[f++] = l)
        }
    return e
}, Ka = Da.map ? function(a, b, c) {
    return Da.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, La = Da.some ? function(a, b, c) {
    return Da.some.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return !0;
    return !1
};
function Ma(a, b) {
    var c = Na(a, b, void 0);
    return 0 > c ? null : u(a) ? a.charAt(c) : a[c]
}
function Na(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
        if (f in e && b.call(c, e[f], f, a))
            return f;
    return - 1
}
function Oa(a, b) {
    var c = Fa(a, b), d;
    (d = 0 <= c) && Da.splice.call(a, c, 1);
    return d
}
function Qa(a) {
    return Da.concat.apply(Da, arguments)
}
function Ra(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}
function Sa(a, b, c, d) {
    Da.splice.apply(a, Ta(arguments, 1))
}
function Ta(a, b, c) {
    return 2 >= arguments.length ? Da.slice.call(a, b) : Da.slice.call(a, b, c)
}
function Ua(a, b) {
    Da.sort.call(a, b || Va)
}
function Va(a, b) {
    return a > b ? 1 : a < b?-1 : 0
}
function Wa(a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
        var e = a[d], f = b.call(void 0, e, d, a);
        s(f) && (c[f] || (c[f] = [])).push(e)
    }
    return c
};
function Xa(a, b, c) {
    this.z = a;
    this.x = b;
    this.y = c
}
function Ya(a) {
    a = a.split("/");
    a = Ka(a, function(a) {
        return parseInt(a, 10)
    });
    return new Xa(a[0], a[1], a[2])
}
function Za(a, b, c) {
    return a + "/" + b + "/" + c
}
Xa.prototype.a = function(a) {
    return s(a) ? (a[0] = this.z, a[1] = this.x, a[2] = this.y, a) : [this.z, this.x, this.y]
};
function $a(a) {
    var b = Array(a.z), c = 1<<a.z - 1, d, e;
    for (d = 0; d < a.z; ++d)
        e = 48, a.x & c && (e += 1), a.y & c && (e += 2), b[d] = String.fromCharCode(e), c>>=1;
    return b.join("")
}
Xa.prototype.toString = function() {
    return Za(this.z, this.x, this.y)
};
function ab(a, b, c, d) {
    this.a = a;
    this.d = b;
    this.c = c;
    this.b = d
}
function bb(a, b, c, d, e) {
    return s(e) ? (e.a = a, e.d = b, e.c = c, e.b = d, e) : new ab(a, b, c, d)
}
ab.prototype.contains = function(a) {
    return this.a <= a.x && a.x <= this.d && this.c <= a.y && a.y <= this.b
};
function cb(a) {
    this.b = a.html;
    this.a = s(a.tileRanges) ? a.tileRanges : null
};
function db() {
    0 != eb && (this.Ug = Error().stack, fb[x(this)] = this)
}
var eb = 0, fb = {};
db.prototype.$b=!1;
db.prototype.pc = function() {
    if (!this.$b && (this.$b=!0, this.v(), 0 != eb)) {
        var a = x(this);
        delete fb[a]
    }
};
function gb(a, b) {
    var c = ra(hb, b);
    a.V || (a.V = []);
    a.V.push(y(c, void 0))
}
db.prototype.v = function() {
    if (this.V)
        for (; this.V.length;)
            this.V.shift()()
};
function hb(a) {
    a && "function" == typeof a.pc && a.pc()
};
function ib(a, b) {
    this.type = a;
    this.c = this.target = b
}
m = ib.prototype;
m.pc = function() {};
m.jb=!1;
m.Te=!1;
m.ie=!0;
m.rb = function() {
    this.jb=!0
};
m.U = function() {
    this.Te=!0;
    this.ie=!1
};
function jb(a) {
    a.rb()
}
function kb(a) {
    a.U()
};
var lb, mb, nb, ob, pb, qb, rb;
function sb() {
    return p.navigator ? p.navigator.userAgent : null
}
function tb() {
    return p.navigator
}
ob = nb = mb = lb=!1;
var ub;
if (ub = sb()) {
    var vb = tb();
    lb = 0 == ub.lastIndexOf("Opera", 0);
    mb=!lb && ( - 1 != ub.indexOf("MSIE")||-1 != ub.indexOf("Trident"));
    nb=!lb&&-1 != ub.indexOf("WebKit");
    ob=!lb&&!nb&&!mb && "Gecko" == vb.product
}
var wb = lb, G = mb, xb = ob, yb = nb, zb, Ab = tb();
zb = Ab && Ab.platform || "";
pb =- 1 != zb.indexOf("Mac");
qb =- 1 != zb.indexOf("Win");
rb =- 1 != zb.indexOf("Linux");
var Cb=!!tb()&&-1 != (tb().appVersion || "").indexOf("X11");
function Db() {
    var a = p.document;
    return a ? a.documentMode : void 0
}
var Eb;
a: {
    var Gb = "", Hb;
    if (wb && p.opera)
        var Ib = p.opera.version, Gb = "function" == typeof Ib ? Ib(): Ib;
    else if (xb ? Hb = /rv\:([^\);]+)(\)|;)/ : G ? Hb = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : yb && (Hb = /WebKit\/(\S+)/), Hb)
        var Jb = Hb.exec(sb()), Gb = Jb ? Jb[1]: "";
    if (G) {
        var Kb = Db();
        if (Kb > parseFloat(Gb)) {
            Eb = String(Kb);
            break a
        }
    }
    Eb = Gb
}
var Lb = {};
function Mb(a) {
    var b;
    if (!(b = Lb[a])) {
        b = 0;
        for (var c = ua(String(Eb)).split("."), d = ua(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "", h = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = l.exec(g) || ["", "", ""], r = n.exec(h) || ["", "", ""];
                if (0 == q[0].length && 0 == r[0].length)
                    break;
                b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10))?-1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == q[2].length) <
                (0 == r[2].length)?-1 : (0 == q[2].length) > (0 == r[2].length) ? 1 : 0) || (q[2] < r[2]?-1 : q[2] > r[2] ? 1 : 0)
            }
            while (0 == b)
            }
        b = Lb[a] = 0 <= b
    }
    return b
}
var Nb = p.document, Ob = Nb && G ? Db() || ("CSS1Compat" == Nb.compatMode ? parseInt(Eb, 10) : 5): void 0;
var Pb=!G || G && 9 <= Ob, Qb=!G || G && 9 <= Ob, Rb = G&&!Mb("9");
!yb || Mb("528");
xb && Mb("1.9b") || G && Mb("8") || wb && Mb("9.5") || yb && Mb("528");
xb&&!Mb("8") || G && Mb("9");
function Sb(a) {
    Sb[" "](a);
    return a
}
Sb[" "] = da;
function Tb(a, b) {
    a && Ub(this, a, b)
}
E(Tb, ib);
var Vb = [1, 4, 2];
m = Tb.prototype;
m.target = null;
m.Se = null;
m.Ld = 0;
m.Md = 0;
m.clientX = 0;
m.clientY = 0;
m.gd = 0;
m.hd = 0;
m.Re = 0;
m.Va = 0;
m.ed = 0;
m.Qb=!1;
m.wa=!1;
m.Wa=!1;
m.fd=!1;
m.Gb=!1;
m.fa = null;
function Ub(a, b, c) {
    var d = a.type = b.type;
    ib.call(a, d);
    a.target = b.target || b.srcElement;
    a.c = c;
    if (c = b.relatedTarget) {
        if (xb) {
            var e;
            a:
            {
                try {
                    Sb(c.nodeName);
                    e=!0;
                    break a
                } catch (f) {}
                e=!1
            }
            e || (c = null)
        }
    } else 
        "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
    a.Se = c;
    a.Ld = yb || void 0 !== b.offsetX ? b.offsetX : b.layerX;
    a.Md = yb || void 0 !== b.offsetY ? b.offsetY : b.layerY;
    a.clientX = void 0 !== b.clientX ? b.clientX : b.pageX;
    a.clientY = void 0 !== b.clientY ? b.clientY : b.pageY;
    a.gd = b.screenX || 0;
    a.hd = b.screenY || 0;
    a.Re = b.button;
    a.Va =
    b.keyCode || 0;
    a.ed = b.charCode || ("keypress" == d ? b.keyCode : 0);
    a.Qb = b.ctrlKey;
    a.wa = b.altKey;
    a.Wa = b.shiftKey;
    a.fd = b.metaKey;
    a.Gb = pb ? b.metaKey : b.ctrlKey;
    a.a = b.state;
    a.fa = b;
    b.defaultPrevented && a.U();
    delete a.jb
}
function Wb(a) {
    return (Pb ? 0 == a.fa.button : "click" == a.type?!0 : !!(a.fa.button & Vb[0]))&&!(yb && pb && a.Qb)
}
m.rb = function() {
    Tb.F.rb.call(this);
    this.fa.stopPropagation ? this.fa.stopPropagation() : this.fa.cancelBubble=!0
};
m.U = function() {
    Tb.F.U.call(this);
    var a = this.fa;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, Rb)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (b) {}
};
m.Ge = k("fa");
var Xb = "closure_listenable_" + (1E6 * Math.random() | 0);
function cc(a) {
    return !(!a ||!a[Xb])
}
var dc = 0;
function ec(a, b, c, d, e, f) {
    this.Oa = a;
    this.a = b;
    this.src = c;
    this.type = d;
    this.capture=!!e;
    this.tb = f;
    this.key=++dc;
    this.Za = this.Ab=!1
}
function fc(a) {
    a.Za=!0;
    a.Oa = null;
    a.a = null;
    a.src = null;
    a.tb = null
};
function gc(a, b) {
    for (var c in a)
        b.call(void 0, a[c], c, a)
}
function hc(a, b) {
    var c = {}, d;
    for (d in a)
        b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c
}
function ic(a) {
    var b = 0, c;
    for (c in a)
        b++;
    return b
}
function jc(a) {
    for (var b in a)
        return b
}
function kc(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}
function lc(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}
function mc(a) {
    var b = qc, c;
    for (c in b)
        if (a.call(void 0, b[c], c, b))
            return c
}
function rc(a) {
    for (var b in a)
        return !1;
    return !0
}
function sc(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}
var tc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function I(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < tc.length; f++)
            c = tc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var uc = {}, vc = {}, wc = {}, xc = {};
function J(a, b, c, d, e) {
    if (ia(b)) {
        for (var f = 0; f < b.length; f++)
            J(a, b[f], c, d, e);
        return null
    }
    c = yc(c);
    return cc(a) ? a.Xa(b, c, d, e) : zc(a, b, c, !1, d, e)
}
function zc(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    e=!!e;
    var g = vc;
    b in g || (g[b] = {
        u: 0
    });
    g = g[b];
    e in g || (g[e] = {
        u: 0
    }, g.u++);
    var g = g[e], h = x(a), l;
    if (g[h]) {
        l = g[h];
        for (var n = 0; n < l.length; n++)
            if (g = l[n], g.Oa == c && g.tb == f) {
                if (g.Za)
                    break;
                    d || (l[n].Ab=!1);
                    return l[n]
            }
    } else 
        l = g[h] = [], g.u++;
    n = Ac();
    g = new ec(c, n, a, b, e, f);
    g.Ab = d;
    n.src = a;
    n.Oa = g;
    l.push(g);
    wc[h] || (wc[h] = []);
    wc[h].push(g);
    a.addEventListener ? a.addEventListener(b, n, e) : a.attachEvent(b in xc ? xc[b] : xc[b] = "on" + b, n);
    return uc[g.key] = g
}
function Ac() {
    var a = Bc, b = Qb ? function(c) {
        return a.call(b.src, b.Oa, c)
    }
    : function(c) {
        c = a.call(b.src, b.Oa, c);
        if (!c)
            return c
    };
    return b
}
function Cc(a, b, c, d, e) {
    if (ia(b)) {
        for (var f = 0; f < b.length; f++)
            Cc(a, b[f], c, d, e);
        return null
    }
    c = yc(c);
    return cc(a) ? a.Ia.add(b, c, !0, d, e) : zc(a, b, c, !0, d, e)
}
function Dc(a, b, c, d, e) {
    if (ia(b))
        for (var f = 0; f < b.length; f++)
            Dc(a, b[f], c, d, e);
    else if (c = yc(c), cc(a))
        a.ud(b, c, d, e);
    else if (d=!!d, a = Ec(a, b, d))
        for (f = 0; f < a.length; f++)
            if (a[f].Oa == c && a[f].capture == d && a[f].tb == e) {
                Fc(a[f]);
                break
            }
}
function Fc(a) {
    if (ka(a) ||!a || a.Za)
        return !1;
    var b = a.src;
    if (cc(b))
        return Gc(b.Ia, a);
    var c = a.type, d = a.a, e = a.capture;
    b.removeEventListener ? b.removeEventListener(c, d, e) : b.detachEvent && b.detachEvent(c in xc ? xc[c] : xc[c] = "on" + c, d);
    b = x(b);
    wc[b] && (d = wc[b], Oa(d, a), 0 == d.length && delete wc[b]);
    fc(a);
    if (d = vc[c][e][b])
        Oa(d, a), 0 == d.length && (delete vc[c][e][b], vc[c][e].u--), 0 == vc[c][e].u && (delete vc[c][e], vc[c].u--), 0 == vc[c].u && delete vc[c];
    delete uc[a.key];
    return !0
}
function Ec(a, b, c) {
    var d = vc;
    return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : null
}
function Ic(a, b, c) {
    var d = 1;
    b = x(b);
    if (a[b])
        for (a = Ra(a[b]), b = 0; b < a.length; b++) {
            var e = a[b];
            e&&!e.Za && (d&=!1 !== Jc(e, c))
        }
    return Boolean(d)
}
function Jc(a, b) {
    var c = a.Oa, d = a.tb || a.src;
    a.Ab && Fc(a);
    return c.call(d, b)
}
function Bc(a, b) {
    if (a.Za)
        return !0;
    var c = a.type, d = vc;
    if (!(c in d))
        return !0;
    var d = d[c], e, f;
    if (!Qb) {
        if (!(c = b))
            a: {
            for (var c = ["window", "event"], g = p; e = c.shift();)
                if (null != g[e])
                    g = g[e];
                else {
                    c = null;
                    break a
                }
                c = g
        }
        e = c;
        c=!0 in d;
        g=!1 in d;
        if (c) {
            if (0 > e.keyCode || void 0 != e.returnValue)
                return !0;
            a:
            {
                var h=!1;
                if (0 == e.keyCode)
                    try {
                        e.keyCode =- 1;
                        break a
                } catch (l) {
                    h=!0
                }
                if (h || void 0 == e.returnValue)
                    e.returnValue=!0
            }
        }
        h = new Tb;
        Ub(h, e, this);
        e=!0;
        try {
            if (c) {
                for (var n = [], q = h.c; q; q = q.parentNode)
                    n.push(q);
                f = d[!0];
                for (var r = n.length -
                1; !h.jb && 0 <= r; r--)
                    h.c = n[r], e&=Ic(f, n[r], h);
                if (g)
                    for (f = d[!1], r = 0; !h.jb && r < n.length; r++)
                        h.c = n[r], e&=Ic(f, n[r], h)
                    } else 
                        e = Jc(a, h)
                    } finally {
            n && (n.length = 0)
        }
        return e
    }
    d = new Tb(b, this);
    return e = Jc(a, d)
}
var Kc = "__closure_events_fn_" + (1E9 * Math.random()>>>0);
function yc(a) {
    return la(a) ? a : a[Kc] || (a[Kc] = function(b) {
        return a.handleEvent(b)
    })
};
function Lc(a) {
    this.src = a;
    this.a = {};
    this.b = 0
}
Lc.prototype.add = function(a, b, c, d, e) {
    var f = this.a[a];
    f || (f = this.a[a] = [], this.b++);
    var g = Mc(f, b, d, e);
    - 1 < g ? (a = f[g], c || (a.Ab=!1)) : (a = new ec(b, null, this.src, a, !!d, e), a.Ab = c, f.push(a));
    return a
};
Lc.prototype.remove = function(a, b, c, d) {
    if (!(a in this.a))
        return !1;
    var e = this.a[a];
    b = Mc(e, b, c, d);
    return - 1 < b ? (fc(e[b]), Da.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
};
function Gc(a, b) {
    var c = b.type;
    if (!(c in a.a))
        return !1;
    var d = Oa(a.a[c], b);
    d && (fc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    return d
}
function Mc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Za && f.Oa == b && f.capture==!!c && f.tb == d)
            return e
    }
    return - 1
};
function Nc() {
    db.call(this);
    this.Ia = new Lc(this);
    this.Sc = this
}
E(Nc, db);
Nc.prototype[Xb]=!0;
m = Nc.prototype;
m.od = null;
m.removeEventListener = function(a, b, c, d) {
    Dc(this, a, b, c, d)
};
function K(a, b) {
    var c, d = a.od;
    if (d)
        for (c = []; d; d = d.od)
            c.push(d);
    var d = a.Sc, e = b, f = e.type || e;
    if (u(e))
        e = new ib(e, d);
    else if (e instanceof ib)
        e.target = e.target || d;
    else {
        var g = e, e = new ib(f, d);
        I(e, g)
    }
    var g=!0, h;
    if (c)
        for (var l = c.length - 1; !e.jb && 0 <= l; l--)
            h = e.c = c[l], g = Oc(h, f, !0, e) && g;
    e.jb || (h = e.c = d, g = Oc(h, f, !0, e) && g, e.jb || (g = Oc(h, f, !1, e) && g));
    if (c)
        for (l = 0; !e.jb && l < c.length; l++)
            h = e.c = c[l], g = Oc(h, f, !1, e) && g;
    return g
}
m.v = function() {
    Nc.F.v.call(this);
    if (this.Ia) {
        var a = this.Ia, b = 0, c;
        for (c in a.a) {
            for (var d = a.a[c], e = 0; e < d.length; e++)
                ++b, d[e].Za=!0;
            delete a.a[c];
            a.b--
        }
    }
    this.od = null
};
m.Xa = function(a, b, c, d) {
    return this.Ia.add(a, b, !1, c, d)
};
m.ud = function(a, b, c, d) {
    return this.Ia.remove(a, b, c, d)
};
function Oc(a, b, c, d) {
    b = a.Ia.a[b];
    if (!b)
        return !0;
    b = Ra(b);
    for (var e=!0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g&&!g.Za && g.capture == c) {
            var h = g.Oa, l = g.tb || g.src;
            g.Ab && Gc(a.Ia, g);
            e=!1 !== h.call(l, d) && e
        }
    }
    return e&&!1 != d.ie
};
function M(a) {
    Nc.call(this);
    this.q = {};
    s(a) && this.Zb(a)
}
E(M, Nc);
var Pc = {}, Qc = {}, Rc = {};
function Sc(a) {
    return a.substr(0, 1).toUpperCase() + a.substr(1)
}
function Tc(a) {
    return a.ol_accessors_ || (a.ol_accessors_ = {})
}
function Uc(a) {
    return Pc.hasOwnProperty(a) ? Pc[a] : Pc[a] = "change:" + a.toLowerCase()
}
function Vc(a) {
    return a.ol_bindings_ || (a.ol_bindings_ = {})
}
m = M.prototype;
m.Ae = function(a, b, c) {
    c = c || a;
    this.td(a);
    var d = Uc(c);
    Vc(this)[a] = J(b, d, function() {
        Wc(this, a)
    }, void 0, this);
    Tc(this)[a] = {
        target: b,
        key: c
    };
    Wc(this, a)
};
m.get = function(a) {
    var b, c = Tc(this);
    c.hasOwnProperty(a) ? (b = c[a], a = b.target, b = b.key, c = Qc.hasOwnProperty(b) ? Qc[b] : Qc[b] = "get" + Sc(b), b = a[c] ? a[c]() : a.get(b)) : this.q.hasOwnProperty(a) && (b = this.q[a]);
    return b
};
m.Ka = function() {
    for (var a = lc(Tc(this)).concat(lc(this.q)), b = {}, c = 0, d = 0; d < a.length;) {
        var e = a[d++], f = ma(e) ? "o" + x(e): (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(b, f) || (b[f]=!0, a[c++] = e)
    }
    a.length = c;
    return a
};
m.Zd = function(a) {
    var b = Tc(this);
    b.hasOwnProperty(a) ? (a = b[a], a.target.Zd(a.key)) : Wc(this, a)
};
function Wc(a, b) {
    var c = Uc(b);
    K(a, c);
    K(a, "change")
}
m.Gf = function(a, b, c) {
    return J(this, a, b, !1, c)
};
m.If = function(a, b, c) {
    return Cc(this, a, b, !1, c)
};
m.l = function(a, b) {
    var c = Tc(this);
    if (c.hasOwnProperty(a)) {
        var d = c[a], c = d.target, d = d.key, e = Rc.hasOwnProperty(d) ? Rc[d]: Rc[d] = "set" + Sc(d);
        if (c[e])
            c[e](b);
        else 
            c.l(d, b)
    } else 
        this.q[a] = b, Wc(this, a)
};
m.Zb = function(a) {
    var b, c, d;
    for (b in a)
        if (c = a[b], d = Rc.hasOwnProperty(b) ? Rc[b] : Rc[b] = "set" + Sc(b), this[d])
            this[d](c);
        else 
            this.l(b, c)
};
m.td = function(a) {
    var b = Vc(this), c = b[a];
    c && (delete b[a], Fc(c), b = this.get(a), delete Tc(this)[a], this.q[a] = b)
};
m.Wf = function(a, b, c) {
    Dc(this, a, b, !1, c)
};
m.Xf = function(a) {
    Fc(a)
};
m.Yf = function() {
    for (var a in Vc(this))
        this.td(a)
};
function Xc(a, b, c) {
    ib.call(this, a, c);
    this.a = b
}
E(Xc, ib);
Xc.prototype.b = k("a");
function N(a) {
    M.call(this);
    this.a = a || [];
    Yc(this)
}
E(N, M);
m = N.prototype;
m.clear = function() {
    for (; 0 < this.xc();)
        this.pop()
};
m.Cf = function(a) {
    var b, c;
    b = 0;
    for (c = a.length; b < c; ++b)
        this.push(a[b]);
    return this
};
m.forEach = function(a, b) {
    Ga(this.a, a, b)
};
m.Df = k("a");
m.Fe = function(a) {
    return this.a[a]
};
m.xc = function() {
    return this.get("length")
};
m.Ec = function(a, b) {
    Sa(this.a, a, 0, b);
    Yc(this);
    K(this, new Xc("add", b, this))
};
m.pop = function() {
    return this.qd(this.xc() - 1)
};
m.push = function(a) {
    var b = this.a.length;
    this.Ec(b, a);
    return b
};
m.remove = function(a) {
    var b = this.a, c, d;
    c = 0;
    for (d = b.length; c < d; ++c)
        if (b[c] === a)
            return this.qd(c)
};
m.qd = function(a) {
    var b = this.a[a];
    Da.splice.call(this.a, a, 1);
    Yc(this);
    K(this, new Xc("remove", b, this));
    return b
};
m.Qf = function(a, b) {
    var c = this.xc();
    if (a < c)
        c = this.a[a], this.a[a] = b, K(this, new Xc("remove", c, this)), K(this, new Xc("add", b, this));
    else {
        for (; c < a; ++c)
            this.Ec(c, void 0);
        this.Ec(a, b)
    }
};
function Yc(a) {
    a.l("length", a.a.length)
};
function Zc(a, b, c) {
    return Math.min(Math.max(a, b), c)
}
function $c(a, b) {
    var c = a%b;
    return 0 > c * b ? c + b : c
}
function ad(a) {
    return a * Math.PI / 180
};
function fd(a) {
    M.call(this);
    a = s(a) ? a : {};
    this.a = null;
    J(this, Uc("tracking"), this.i, !1, this);
    this.b(s(a.tracking) ? a.tracking : !1)
}
E(fd, M);
fd.prototype.v = function() {
    this.b(!1);
    fd.F.v.call(this)
};
var gd = "DeviceOrientationEvent"in p;
fd.SUPPORTED = gd;
fd.prototype.k = function(a) {
    a = a.fa;
    if (null != a.alpha) {
        var b = ad(a.alpha);
        this.l("alpha", b);
        "boolean" == typeof a.absolute && a.absolute ? this.l("heading", b) : null != a.webkitCompassHeading && (null != a.webkitCompassAccuracy&&-1 != a.webkitCompassAccuracy) && this.l("heading", ad(a.webkitCompassHeading))
    }
    null != a.beta && this.l("beta", ad(a.beta));
    null != a.gamma && this.l("gamma", ad(a.gamma))
};
fd.prototype.d = function() {
    return this.get("alpha")
};
fd.prototype.getAlpha = fd.prototype.d;
fd.prototype.e = function() {
    return this.get("beta")
};
fd.prototype.getBeta = fd.prototype.e;
fd.prototype.f = function() {
    return this.get("gamma")
};
fd.prototype.getGamma = fd.prototype.f;
fd.prototype.g = function() {
    return this.get("heading")
};
fd.prototype.getHeading = fd.prototype.g;
fd.prototype.c = function() {
    return this.get("tracking")
};
fd.prototype.getTracking = fd.prototype.c;
fd.prototype.i = function() {
    if (gd) {
        var a = this.c();
        a && null === this.a ? this.a = J(p, "deviceorientation", this.k, !1, this) : a || null === this.a || (Fc(this.a), this.a = null)
    }
};
fd.prototype.b = function(a) {
    this.l("tracking", a)
};
fd.prototype.setTracking = fd.prototype.b;
function hd(a, b) {
    a[0] += b[0];
    a[1] += b[1]
}
function id(a, b) {
    var c = $c(a + 180, 360) - 180, d = Math.abs(Math.round(3600 * c));
    return Math.floor(d / 3600) + "\u00b0 " + Math.floor(d / 60%60) + "\u2032 " + Math.floor(d%60) + "\u2033 " + b.charAt(0 > c ? 1 : 0)
}
function jd(a, b) {
    var c = Math.cos(b), d = Math.sin(b), e = a[1] * c + a[0] * d;
    a[0] = a[0] * c - a[1] * d;
    a[1] = e
}
function kd(a, b) {
    var c = a[0] - b[0], d = a[1] - b[1];
    return c * c + d * d
}
function ld(a, b) {
    if (s(a)) {
        var c = b || 0;
        return a[0].toFixed(c) + ", " + a[1].toFixed(c)
    }
    return ""
}
function md(a, b) {
    var c = b.charAt(0);
    return "n" === c || "s" === c ? [a[1], a[0]] : a
};
function nd(a) {
    var b = od(), c = a.length, d;
    for (d = 0; d < c; ++d) {
        var e = b, f = a[d];
        f[0] < e[0] && (e[0] = f[0]);
        f[0] > e[2] && (e[2] = f[0]);
        f[1] < e[1] && (e[1] = f[1]);
        f[1] > e[3] && (e[3] = f[1])
    }
    return b
}
function pd(a, b, c) {
    var d = Math.min.apply(null, a);
    a = Math.max.apply(null, a);
    var e = Math.min.apply(null, b);
    b = Math.max.apply(null, b);
    return qd(d, a, e, b, c)
}
function rd(a, b) {
    return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
}
function sd(a, b) {
    return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
}
function od() {
    return [Infinity, Infinity, - Infinity, - Infinity]
}
function qd(a, b, c, d, e) {
    return s(e) ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
}
function td(a, b) {
    return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
}
function ud(a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[2] > a[2] && (a[2] = b[2]);
    b[1] < a[1] && (a[1] = b[1]);
    b[3] > a[3] && (a[3] = b[3])
}
function vd(a) {
    return [a[0], a[1]]
}
function wd(a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
}
function xd(a, b, c, d) {
    var e = b * d[0] / 2;
    d = b * d[1] / 2;
    b = Math.cos(c);
    c = Math.sin(c);
    e = [ - e, - e, e, e];
    d = [ - d, d, - d, d];
    var f, g, h;
    for (f = 0; 4 > f; ++f)
        g = e[f], h = d[f], e[f] = a[0] + g * b - h * c, d[f] = a[1] + g * c + h * b;
    return pd(e, d, void 0)
}
function yd(a) {
    return [a[0], a[3]]
}
function zd(a, b) {
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
}
function Ad(a, b) {
    return zd(a, b) && (a[0] == b[2] || a[2] == b[0] || a[1] == b[3] || a[3] == b[1])
}
function Bd(a, b, c) {
    a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
    b(a, a, 2);
    return pd([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
};
function Cd(a) {
    a = a ? a : {};
    this.coordinates = [];
    this.b = [];
    this.c = [];
    this.za = a.dimension || 2;
    this.a = a.offset || null
}
Cd.prototype.add = function(a) {
    for (var b = this.coordinates.length, c = this.a, d = this.za, e = a.length, f, g, h = 0; h < e; ++h) {
        f = a[h];
        g = b + h * d;
        for (var l = 0; l < d; ++l)
            this.coordinates[g + l] = f[l] - (c ? c[l] : 0)
    }
    a = this.b.push(b);
    this.c.push(e);
    return a - 1
};
Cd.prototype.get = function(a, b, c) {
    a = this.coordinates[this.b[a] + b * this.za + c];
    this.a && (a += this.a[c]);
    return a
};
Cd.prototype.T = function(a) {
    return this.c[a]
};
function Dd() {
    this.a = null
}
Dd.prototype.ea = function() {
    var a = new this.constructor(this.s());
    a.Sa = this.Sa;
    a.dimension = this.dimension;
    return a
};
var Ed = {
    Sg: "point",
    Dg: "linestring",
    Cg: "linearring",
    Tg: "polygon",
    Ng: "multipoint",
    Lg: "multilinestring",
    Og: "multipolygon",
    wg: "geometrycollection"
};
function O(a) {
    M.call(this, a);
    this.a = "default";
    this.c = null
}
E(O, M);
m = O.prototype;
m.ob = function() {
    var a = this.Ka(), b = a.length, c = {}, d, e;
    for (d = 0; d < b; ++d)
        e = a[d], c[e] = this.get(e);
    return c
};
m.Je = k("Ja");
m.G = function() {
    return s(this.b) ? this.get(this.b) : null
};
m.Cb = k("c");
m.l = function(a, b) {
    !s(this.b) && b instanceof Dd && (this.b = a);
    O.F.l.call(this, a, b)
};
m.Ea = function(a) {
    s(this.b) || (this.b = "geometry");
    this.l(this.b, a)
}; /*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
function Fd(a) {
    this.a = a
}
function Gd(a, b, c) {
    var d = ad(b[1]), e = ad(c[1]), f = (e - d) / 2;
    b = ad(c[0] - b[0]) / 2;
    d = Math.sin(f) * Math.sin(f) + Math.sin(b) * Math.sin(b) * Math.cos(d) * Math.cos(e);
    return 2 * a.a * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
}
Fd.prototype.offset = function(a, b, c) {
    var d = ad(a[1]);
    b/=this.a;
    var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
    return [180 * (ad(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
};
var Hd = new Fd(6370997);
var Id = "object" == typeof Proj4js, Jd = {
    oe: "degrees",
    vg: "ft",
    Gg: "m"
}, Kd = {};
Kd.degrees = 2 * Math.PI * Hd.a / 360;
Kd.ft = 0.3048;
Kd.m = 1;
function Ld(a) {
    this.bb = a.code;
    this.Kb = a.units;
    this.g = s(a.extent) ? a.extent : null;
    this.d = s(a.axisOrientation) ? a.axisOrientation : "enu";
    this.Kd = s(a.global) ? a.global : !1;
    this.e = null
}
Ld.prototype.ba = k("g");
Ld.prototype.a = function() {
    return Kd[this.Kb]
};
function Md(a) {
    return a.d
}
function Nd(a, b) {
    var c = {
        units: a.units,
        axisOrientation: a.axis
    };
    I(c, b);
    Ld.call(this, c);
    this.f = a;
    this.c = null
}
E(Nd, Ld);
Nd.prototype.a = function() {
    var a = this.f.to_meter;
    s(a) || (a = Kd[this.Kb]);
    return a
};
Nd.prototype.b = function(a, b) {
    if ("degrees" == this.Kb)
        return a;
    null === this.c && (this.c = Od(this, Pd({
        code: "EPSG:4326",
        extent: null
    })));
    var c = [b[0] - a / 2, b[1], b[0] + a / 2, b[1], b[0], b[1] - a / 2, b[0], b[1] + a / 2], c = this.c(c, c, 2), d = Gd(Hd, c.slice(0, 2), c.slice(2, 4)), c = Gd(Hd, c.slice(4, 6), c.slice(6, 8)), d = (d + c) / 2;
    "ft" == this.Kb && (d/=0.3048);
    return d
};
function Qd(a) {
    return a.f
}
var Rd = {}, Sd = {}, Td = {};
function Ud(a) {
    Vd(a);
    Ga(a, function(b) {
        Ga(a, function(a) {
            b !== a && Wd(b, a, Xd)
        })
    })
}
function Yd() {
    var a = Zd, b = fe, c = ge;
    Ga(he, function(d) {
        Ga(a, function(a) {
            Wd(d, a, b);
            Wd(a, d, c)
        })
    })
}
function ie(a) {
    Sd[a.bb] = a;
    Wd(a, a, Xd)
}
function Vd(a) {
    Ga(a, function(a) {
        ie(a)
    })
}
function je(a) {
    return null != a ? u(a) ? ke(a) : a : ke("EPSG:3857")
}
function Wd(a, b, c) {
    a = a.bb;
    b = b.bb;
    a in Td || (Td[a] = {});
    Td[a][b] = c
}
function ke(a) {
    var b;
    a instanceof Ld ? b = a : u(a) ? (b = Sd[a], Id&&!s(b) && (b = Pd({
        code: a,
        extent: null
    })), s(b) || (b = null)) : b = null;
    return b
}
function Pd(a) {
    var b = a.code, c = Rd[b];
    if (!s(c)) {
        var d = new Proj4js.Proj(b), e = d.srsCode, c = Rd[e];
        s(c) || (a = sc(a), a.code = e, c = new Nd(d, a), Rd[e] = c);
        Rd[b] = c
    }
    return c
}
function le(a, b) {
    var c = ke(a), d = ke(b);
    return Od(c, d)
}
function Od(a, b) {
    var c = a.bb, d = b.bb, e;
    c in Td && d in Td[c] && (e = Td[c][d]);
    if (Id&&!s(e)) {
        var f = Qd(a instanceof Nd ? a : Pd({
            code: c,
            extent: null
        })), g = Qd(b instanceof Nd ? b : Pd({
            code: d,
            extent: null
        }));
        e = function(a, b, c) {
            var d = a.length;
            c = 1 < c ? c : 2;
            s(b) || (b = 2 < c ? a.slice() : Array(d));
            for (var e, w = 0; w < d; w += c)
                e = new Proj4js.Point(a[w], a[w + 1]), e = Proj4js.transform(f, g, e), b[w] = e.x, b[w + 1] = e.y;
            return b
        };
        Wd(a, b, e)
    }
    s(e) || (e = me);
    return e
}
function me(a, b) {
    if (s(b) && a !== b) {
        for (var c = 0, d = a.length; c < d; ++c)
            b[c] = a[c];
        a = b
    }
    return a
}
function Xd(a, b) {
    var c;
    if (s(b)) {
        c = 0;
        for (var d = a.length; c < d; ++c)
            b[c] = a[c];
        c = b
    } else 
        c = a.slice();
    return c
};
function Q(a) {
    M.call(this);
    a = s(a) ? a : {};
    this.a = null;
    this.c = me;
    this.b = void 0;
    J(this, Uc("projection"), this.R, !1, this);
    J(this, Uc("tracking"), this.W, !1, this);
    s(a.projection) && this.g(ke(a.projection));
    s(a.trackingOptions) && this.i(a.trackingOptions);
    this.d(s(a.tracking) ? a.tracking : !1)
}
E(Q, M);
Q.prototype.v = function() {
    this.d(!1);
    Q.F.v.call(this)
};
Q.prototype.R = function() {
    var a = this.ga();
    null != a && (this.c = Od(ke("EPSG:4326"), a), null === this.a || this.l("position", this.c(this.a)))
};
Q.prototype.W = function() {
    if (ne) {
        var a = this.f();
        a&&!s(this.b) ? this.b = p.navigator.geolocation.watchPosition(y(this.la, this), y(this.ia, this), this.e()) : !a && s(this.b) && (p.navigator.geolocation.clearWatch(this.b), this.b = void 0)
    }
};
var ne = "geolocation"in p.navigator;
Q.SUPPORTED = ne;
Q.prototype.la = function(a) {
    a = a.coords;
    this.l("accuracy", a.accuracy);
    this.l("altitude", null === a.altitude ? void 0 : a.altitude);
    this.l("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
    this.l("heading", null === a.heading ? void 0 : ad(a.heading));
    null === this.a ? this.a = [a.longitude, a.latitude] : (this.a[0] = a.longitude, this.a[1] = a.latitude);
    this.l("position", this.c(this.a));
    this.l("speed", null === a.speed ? void 0 : a.speed)
};
Q.prototype.ia = function(a) {
    a.type = "error";
    K(this, a)
};
Q.prototype.k = function() {
    return this.get("accuracy")
};
Q.prototype.getAccuracy = Q.prototype.k;
Q.prototype.p = function() {
    return this.get("altitude")
};
Q.prototype.getAltitude = Q.prototype.p;
Q.prototype.r = function() {
    return this.get("altitudeAccuracy")
};
Q.prototype.getAltitudeAccuracy = Q.prototype.r;
Q.prototype.C = function() {
    return this.get("heading")
};
Q.prototype.getHeading = Q.prototype.C;
Q.prototype.K = function() {
    return this.get("position")
};
Q.prototype.getPosition = Q.prototype.K;
Q.prototype.ga = function() {
    return this.get("projection")
};
Q.prototype.getProjection = Q.prototype.ga;
Q.prototype.t = function() {
    return this.get("speed")
};
Q.prototype.getSpeed = Q.prototype.t;
Q.prototype.f = function() {
    return this.get("tracking")
};
Q.prototype.getTracking = Q.prototype.f;
Q.prototype.e = function() {
    return this.get("trackingOptions")
};
Q.prototype.getTrackingOptions = Q.prototype.e;
Q.prototype.g = function(a) {
    this.l("projection", a)
};
Q.prototype.setProjection = Q.prototype.g;
Q.prototype.d = function(a) {
    this.l("tracking", a)
};
Q.prototype.setTracking = Q.prototype.d;
Q.prototype.i = function(a) {
    this.l("trackingOptions", a)
};
Q.prototype.setTrackingOptions = Q.prototype.i;
function oe(a, b) {
    Nc.call(this);
    this.H = a;
    this.a = b
}
E(oe, Nc);
oe.prototype.b = function() {
    return x(this).toString()
};
oe.prototype.g = k("H");
function pe(a, b, c, d, e) {
    oe.call(this, a, b);
    this.f = c;
    this.c = new Image;
    null !== d && (this.c.crossOrigin = d);
    this.e = {};
    this.d = null;
    this.i = e
}
E(pe, oe);
pe.prototype.ca = function(a) {
    if (s(a)) {
        var b = x(a);
        if (b in this.e)
            return this.e[b];
        a = rc(this.e) ? this.c : this.c.cloneNode(!1);
        return this.e[b] = a
    }
    return this.c
};
pe.prototype.b = k("f");
pe.prototype.q = function() {
    this.a = 3;
    Ga(this.d, Fc);
    this.d = null;
    K(this, "change")
};
pe.prototype.k = function() {
    this.a = this.c.naturalWidth && this.c.naturalHeight ? 2 : 4;
    Ga(this.d, Fc);
    this.d = null;
    K(this, "change")
};
function qe(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)
        this[b] = a[b] || 0
}
qe.prototype.a = 4;
qe.prototype.b = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
        this[b + c] = a[c]
};
qe.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (qe.BYTES_PER_ELEMENT = 4, qe.prototype.BYTES_PER_ELEMENT = qe.prototype.a, qe.prototype.set = qe.prototype.b, qe.prototype.toString = qe.prototype.toString, C("Float32Array", qe));
function re(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)
        this[b] = a[b] || 0
}
re.prototype.a = 8;
re.prototype.b = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)
        this[b + c] = a[c]
};
re.prototype.toString = Array.prototype.join;
if ("undefined" == typeof Float64Array) {
    try {
        re.BYTES_PER_ELEMENT = 8
    } catch (se) {}
    re.prototype.BYTES_PER_ELEMENT = re.prototype.a;
    re.prototype.set = re.prototype.b;
    re.prototype.toString = re.prototype.toString;
    C("Float64Array", re)
};
function te(a, b, c, d, e) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e
};
function ue() {
    var a = Array(16);
    ve(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    return a
}
function we() {
    var a = Array(16);
    ve(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return a
}
function ve(a, b, c, d, e, f, g, h, l, n, q, r, w, t, A, B, v) {
    a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e;
    a[4] = f;
    a[5] = g;
    a[6] = h;
    a[7] = l;
    a[8] = n;
    a[9] = q;
    a[10] = r;
    a[11] = w;
    a[12] = t;
    a[13] = A;
    a[14] = B;
    a[15] = v
}
function xe(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    a[4] = b[4];
    a[5] = b[5];
    a[6] = b[6];
    a[7] = b[7];
    a[8] = b[8];
    a[9] = b[9];
    a[10] = b[10];
    a[11] = b[11];
    a[12] = b[12];
    a[13] = b[13];
    a[14] = b[14];
    a[15] = b[15]
}
function ye(a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1
}
function ze(a, b, c) {
    var d = a[0], e = a[1], f = a[2], g = a[3], h = a[4], l = a[5], n = a[6], q = a[7], r = a[8], w = a[9], t = a[10], A = a[11], B = a[12], v = a[13], z = a[14];
    a = a[15];
    var H = b[0], D = b[1], R = b[2], U = b[3], P = b[4], F = b[5], L = b[6], aa = b[7], va = b[8], ea = b[9], ha = b[10], Z = b[11], Pa = b[12], Ea = b[13], Bb = b[14];
    b = b[15];
    c[0] = d * H + h * D + r * R + B * U;
    c[1] = e * H + l * D + w * R + v * U;
    c[2] = f * H + n * D + t * R + z * U;
    c[3] = g * H + q * D + A * R + a * U;
    c[4] = d * P + h * F + r * L + B * aa;
    c[5] = e * P + l * F + w * L + v * aa;
    c[6] = f * P + n * F + t * L + z * aa;
    c[7] = g * P + q * F + A * L + a * aa;
    c[8] = d * va + h * ea + r * ha + B * Z;
    c[9] = e * va + l * ea + w * ha + v * Z;
    c[10] = f * va +
    n * ea + t * ha + z * Z;
    c[11] = g * va + q * ea + A * ha + a * Z;
    c[12] = d * Pa + h * Ea + r * Bb + B * b;
    c[13] = e * Pa + l * Ea + w * Bb + v * b;
    c[14] = f * Pa + n * Ea + t * Bb + z * b;
    c[15] = g * Pa + q * Ea + A * Bb + a * b
}
function Ae(a, b) {
    return a.length == b.length && a[0] == b[0] && a[1] == b[1] && a[2] == b[2] && a[3] == b[3] && a[4] == b[4] && a[5] == b[5] && a[6] == b[6] && a[7] == b[7] && a[8] == b[8] && a[9] == b[9] && a[10] == b[10] && a[11] == b[11] && a[12] == b[12] && a[13] == b[13] && a[14] == b[14] && a[15] == b[15]
}
function Be(a, b, c) {
    var d = b[0], e = b[1];
    b = b[2];
    c[0] = d * a[0] + e * a[4] + b * a[8] + a[12];
    c[1] = d * a[1] + e * a[5] + b * a[9] + a[13];
    c[2] = d * a[2] + e * a[6] + b * a[10] + a[14]
}
function Ce(a, b, c) {
    var d = a[1] * b + a[5] * c + 0 * a[9] + a[13], e = a[2] * b + a[6] * c + 0 * a[10] + a[14], f = a[3] * b + a[7] * c + 0 * a[11] + a[15];
    a[12] = a[0] * b + a[4] * c + 0 * a[8] + a[12];
    a[13] = d;
    a[14] = e;
    a[15] = f
}
function De(a, b, c) {
    ve(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15])
}
function Ee(a, b) {
    var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], l = a[6], n = a[7], q = Math.cos(b), r = Math.sin(b);
    a[0] = c * q + g * r;
    a[1] = d * q + h * r;
    a[2] = e * q + l * r;
    a[3] = f * q + n * r;
    a[4] = c*-r + g * q;
    a[5] = d*-r + h * q;
    a[6] = e*-r + l * q;
    a[7] = f*-r + n * q
}
new Float64Array(3);
new Float64Array(3);
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
function Fe(a, b) {
    this.f = a;
    this.e = b;
    this.a = [];
    this.b = [];
    this.c = {}
}
Fe.prototype.clear = function() {
    this.a.length = 0;
    this.b.length = 0;
    var a = this.c, b;
    for (b in a)
        delete a[b]
};
function Ge(a) {
    var b = a.a, c = a.b, d = b[0];
    1 == b.length ? (b.length = 0, c.length = 0) : (b[0] = b.pop(), c[0] = c.pop(), He(a, 0));
    b = a.e(d);
    delete a.c[b];
    return d
}
function Ie(a, b) {
    var c = a.f(b);
    Infinity != c && (a.a.push(b), a.b.push(c), a.c[a.e(b)]=!0, Je(a, 0, a.a.length - 1))
}
Fe.prototype.T = function() {
    return this.a.length
};
Fe.prototype.vb = function() {
    return 0 === this.a.length
};
function He(a, b) {
    for (var c = a.a, d = a.b, e = c.length, f = c[b], g = d[b], h = b; b < e>>1;) {
        var l = 2 * b + 1, n = 2 * b + 2, l = n < e && d[n] < d[l] ? n: l;
        c[b] = c[l];
        d[b] = d[l];
        b = l
    }
    c[b] = f;
    d[b] = g;
    Je(a, h, b)
}
function Je(a, b, c) {
    var d = a.a;
    a = a.b;
    for (var e = d[c], f = a[c]; c > b;) {
        var g = c - 1>>1;
        if (a[g] > f)
            d[c] = d[g], a[c] = a[g], c = g;
        else 
            break
    }
    d[c] = e;
    a[c] = f
}
function Ke(a) {
    var b = a.f, c = a.a, d = a.b, e = 0, f = c.length, g, h, l;
    for (h = 0; h < f; ++h)
        g = c[h], l = b(g), Infinity == l ? delete a.c[a.e(g)] : (d[e] = l, c[e++] = g);
    c.length = e;
    d.length = e;
    for (b = (a.a.length>>1) - 1; 0 <= b; b--)
        He(a, b)
};
function Le(a, b) {
    Fe.call(this, function(b) {
        return a.apply(null, b)
    }, function(a) {
        return a[0].b()
    });
    this.V = b;
    this.d = 0
}
E(Le, Fe);
Le.prototype.g = function() {
    --this.d;
    this.V()
};
function S(a) {
    M.call(this);
    a = sc(a);
    a.brightness = s(a.brightness) ? a.brightness : 0;
    a.contrast = s(a.contrast) ? a.contrast : 1;
    a.hue = s(a.hue) ? a.hue : 0;
    a.opacity = s(a.opacity) ? a.opacity : 1;
    a.saturation = s(a.saturation) ? a.saturation : 1;
    a.visible = s(a.visible) ? a.visible : !0;
    a.maxResolution = s(a.maxResolution) ? a.maxResolution : Infinity;
    a.minResolution = s(a.minResolution) ? a.minResolution : 0;
    this.Zb(a);
    J(this, [Uc("brightness"), Uc("contrast"), Uc("hue"), Uc("opacity"), Uc("saturation"), Uc("maxResolution"), Uc("minResolution")],
    this.Cc, !1, this);
    J(this, Uc("visible"), this.Td, !1, this)
}
E(S, M);
function Me(a) {
    K(a, "change")
}
S.prototype.e = function() {
    return this.get("brightness")
};
S.prototype.getBrightness = S.prototype.e;
S.prototype.f = function() {
    return this.get("contrast")
};
S.prototype.getContrast = S.prototype.f;
S.prototype.g = function() {
    return this.get("hue")
};
S.prototype.getHue = S.prototype.g;
function Ne(a) {
    var b = a.e(), c = a.f(), d = a.g(), e = a.r(), f = a.Ma(), g = a.p(), h = a.b(), l = a.i();
    a = a.k();
    return {
        brightness: s(b) ? Zc(b, - 1, 1): 0,
        contrast: s(c) ? Math.max(c, 0): 1,
        hue: s(d) ? d: 0,
        opacity: s(e) ? Zc(e, 0, 1): 1,
        Mc: f,
        saturation: s(g) ? Math.max(g, 0): 1,
        visible: s(h)?!!h: !0,
        maxResolution: s(l) ? l: Infinity,
        minResolution: s(a) ? Math.max(a,
        0): 0
    }
}
S.prototype.i = function() {
    return this.get("maxResolution")
};
S.prototype.getMaxResolution = S.prototype.i;
S.prototype.k = function() {
    return this.get("minResolution")
};
S.prototype.getMinResolution = S.prototype.k;
S.prototype.r = function() {
    return this.get("opacity")
};
S.prototype.getOpacity = S.prototype.r;
S.prototype.p = function() {
    return this.get("saturation")
};
S.prototype.getSaturation = S.prototype.p;
S.prototype.b = function() {
    return this.get("visible")
};
S.prototype.getVisible = S.prototype.b;
S.prototype.Cc = function() {
    this.b() && this.Ma() && Me(this)
};
S.prototype.Td = function() {
    this.Ma() && Me(this)
};
S.prototype.R = function(a) {
    this.l("brightness", a)
};
S.prototype.setBrightness = S.prototype.R;
S.prototype.W = function(a) {
    this.l("contrast", a)
};
S.prototype.setContrast = S.prototype.W;
S.prototype.la = function(a) {
    this.l("hue", a)
};
S.prototype.setHue = S.prototype.la;
S.prototype.ia = function(a) {
    this.l("maxResolution", a)
};
S.prototype.setMaxResolution = S.prototype.ia;
S.prototype.sa = function(a) {
    this.l("minResolution", a)
};
S.prototype.setMinResolution = S.prototype.sa;
S.prototype.K = function(a) {
    this.l("opacity", a)
};
S.prototype.setOpacity = S.prototype.K;
S.prototype.Ra = function(a) {
    this.l("saturation", a)
};
S.prototype.setSaturation = S.prototype.Ra;
S.prototype.lb = function(a) {
    this.l("visible", a)
};
S.prototype.setVisible = S.prototype.lb;
function Oe(a) {
    return function() {
        return a
    }
}
var Pe = Oe(!1), Qe = Oe(!0), Re = Oe(null);
function Se(a) {
    return function() {
        throw a;
    }
}
function Te(a) {
    var b;
    b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
}
function Ue(a) {
    var b = arguments, c = b.length;
    return function() {
        for (var a, e = 0; e < c; e++)
            a = b[e].apply(this, arguments);
        return a
    }
}
function Ve(a) {
    var b = arguments, c = b.length;
    return function() {
        for (var a = 0; a < c; a++)
            if (!b[a].apply(this, arguments))
                return !1;
        return !0
    }
};
function We(a) {
    Nc.call(this);
    this.q = ke(a.projection);
    this.g = s(a.extent) ? a.extent : s(a.projection) ? this.q.ba() : null;
    this.d = s(a.attributions) ? a.attributions : null;
    this.f = a.logo;
    this.c = 0
}
E(We, Nc);
function Xe(a) {
    ++a.c;
    K(a, "change")
}
We.prototype.ba = k("g");
We.prototype.ga = k("q");
We.prototype.Ma = Qe;
function Ye(a) {
    var b = sc(a);
    delete b.source;
    S.call(this, b);
    this.t = a.source;
    J(this.t, "change", this.mf, !1, this)
}
E(Ye, S);
m = Ye.prototype;
m.Ob = function(a) {
    a = s(a) ? a : [];
    a.push(this);
    return a
};
m.bd = function(a) {
    a = s(a) ? a : {
        layers: [],
        qa: []
    };
    a.layers.push(this);
    a.qa.push(Ne(this));
    return a
};
m.ja = k("t");
m.mf = function() {
    Me(this)
};
m.Ma = function() {
    return this.ja().Ma()
};
function Ze() {
    M.call(this);
    this.e = [0, 0]
}
E(Ze, M);
function $e(a, b) {
    a.e[1] += b
};
function af(a) {
    return 1 - Math.pow(1 - a, 3)
};
function bf(a) {
    return 3 * a * a - 2 * a * a * a
}
function cf(a) {
    return a
}
function df(a) {
    return 0.5 > a ? bf(2 * a) : 1 - bf(2 * (a - 0.5))
};
function ef(a) {
    var b = a.resolution, c = s(a.start) ? a.start: sa(), d = s(a.duration) ? a.duration: 1E3, e = s(a.easing) ? a.easing: df;
    return function(a, g) {
        if (g.time < c)
            return g.ta=!0, g.L[0] += 1, !0;
        if (g.time < c + d) {
            var h = e((g.time - c) / d), l = b - g.A.resolution;
            g.ta=!0;
            g.A.resolution += h * l;
            g.L[0] += 1;
            return !0
        }
        return !1
    }
}
function tf(a) {
    var b = a.source, c = s(a.start) ? a.start: sa(), d = b[0], e = b[1], f = s(a.duration) ? a.duration: 1E3, g = s(a.easing) ? a.easing: bf;
    return function(a, b) {
        if (b.time < c)
            return b.ta=!0, b.L[0] += 1, !0;
        if (b.time < c + f) {
            var n = 1 - g((b.time - c) / f), q = d - b.A.center[0], r = e - b.A.center[1];
            b.ta=!0;
            b.A.center[0] += n * q;
            b.A.center[1] += n * r;
            b.L[0] += 1;
            return !0
        }
        return !1
    }
}
function uf(a) {
    var b = a.rotation, c = s(a.start) ? a.start: sa(), d = s(a.duration) ? a.duration: 1E3, e = s(a.easing) ? a.easing: bf;
    return function(a, g) {
        if (g.time < c)
            return g.ta=!0, g.L[0] += 1, !0;
        if (g.time < c + d) {
            var h = 1 - e((g.time - c) / d), l = b - g.A.rotation;
            g.ta=!0;
            g.A.rotation += h * l;
            g.L[0] += 1;
            return !0
        }
        return !1
    }
}
function vf(a) {
    var b = a.resolution, c = s(a.start) ? a.start: sa(), d = s(a.duration) ? a.duration: 1E3, e = s(a.easing) ? a.easing: bf;
    return function(a, g) {
        if (g.time < c)
            return g.ta=!0, g.L[0] += 1, !0;
        if (g.time < c + d) {
            var h = 1 - e((g.time - c) / d), l = b - g.A.resolution;
            g.ta=!0;
            g.A.resolution += h * l;
            g.L[0] += 1;
            return !0
        }
        return !1
    }
};
function wf(a, b, c) {
    this.e = a;
    this.d = b;
    this.f = c;
    this.a = [];
    this.b = this.c = 0
}
function xf(a) {
    var b = sa() - a.f, c = a.a.length - 3;
    if (a.a[c + 2] < b)
        return !1;
    for (var d = c - 3; 0 <= d && a.a[d + 2] > b;)
        d -= 3;
    if (0 <= d) {
        var b = a.a[c + 2] - a.a[d + 2], e = a.a[c] - a.a[d], c = a.a[c + 1] - a.a[d + 1];
        a.c = Math.atan2(c, e);
        a.b = Math.sqrt(e * e + c * c) / b;
        return a.b > a.d
    }
    return !1
}
function yf(a, b) {
    var c = a.e, d = a.b, e = a.d, f = Math.log(a.d / a.b) / a.e;
    return tf({
        source: b,
        duration: f,
        easing: function(a) {
            return d * (Math.exp(c * a * f) - 1) / (e - d)
        }
    })
};
function zf(a) {
    if ("function" == typeof a.La)
        return a.La();
    if (u(a))
        return a.split("");
    if (ja(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return kc(a)
}
function Af(a, b, c) {
    if ("function" == typeof a.forEach)
        a.forEach(b, c);
    else if (ja(a) || u(a))
        Ga(a, b, c);
    else {
        var d;
        if ("function" == typeof a.Ka)
            d = a.Ka();
        else if ("function" != typeof a.La)
            if (ja(a) || u(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++)
                    d.push(f)
            } else 
                d = lc(a);
        else 
            d = void 0;
        for (var e = zf(a), f = e.length, g = 0; g < f; g++)
            b.call(c, e[g], d && d[g], a)
    }
};
function Bf(a, b) {
    this.b = {};
    this.a = [];
    var c = arguments.length;
    if (1 < c) {
        if (c%2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            Cf(this, arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof Bf ? (c = a.Ka(), d = a.La()) : (c = lc(a), d = kc(a));
        for (var e = 0; e < c.length; e++)
            Cf(this, c[e], d[e])
    }
}
m = Bf.prototype;
m.u = 0;
m.xd = 0;
m.T = k("u");
m.La = function() {
    Df(this);
    for (var a = [], b = 0; b < this.a.length; b++)
        a.push(this.b[this.a[b]]);
    return a
};
m.Ka = function() {
    Df(this);
    return this.a.concat()
};
m.vb = function() {
    return 0 == this.u
};
m.clear = function() {
    this.b = {};
    this.xd = this.u = this.a.length = 0
};
m.remove = function(a) {
    return Ef(this.b, a) ? (delete this.b[a], this.u--, this.xd++, this.a.length > 2 * this.u && Df(this), !0) : !1
};
function Df(a) {
    if (a.u != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            Ef(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.u != a.a.length) {
        for (var e = {}, c = b = 0; b < a.a.length;)
            d = a.a[b], Ef(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        a.a.length = c
    }
}
m.get = function(a, b) {
    return Ef(this.b, a) ? this.b[a] : b
};
function Cf(a, b, c) {
    Ef(a.b, b) || (a.u++, a.a.push(b), a.xd++);
    a.b[b] = c
}
m.ea = function() {
    return new Bf(this)
};
function Ef(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var Ff = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Gf(a) {
    if (Hf) {
        Hf=!1;
        var b = p.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = Gf(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname)
                throw Hf=!0, Error();
        }
    }
    return a.match(Ff)
}
var Hf = yb;
function If(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
}
function Jf(a, b, c) {
    if (ia(b))
        for (var d = 0; d < b.length; d++)
            Jf(a, String(b[d]), c);
    else 
        null != b && c.push("\x26", a, "" === b ? "" : "\x3d", encodeURIComponent(String(b)))
}
function Kf(a, b) {
    for (var c in b)
        Jf(c, b[c], a);
    return a
};
function Lf(a, b) {
    var c;
    if (a instanceof Lf)
        this.pb = s(b) ? b : a.pb, Mf(this, a.Ib), c = a.Rc, Nf(this), this.Rc = c, c = a.Mb, Nf(this), this.Mb = c, Of(this, a.Lc), c = a.Kc, Nf(this), this.Kc = c, Pf(this, a.a.ea()), c = a.vc, Nf(this), this.vc = c;
    else if (a && (c = Gf(String(a)))) {
        this.pb=!!b;
        Mf(this, c[1] || "", !0);
        var d = c[2] || "";
        Nf(this);
        this.Rc = d ? decodeURIComponent(d) : "";
        d = c[3] || "";
        Nf(this);
        this.Mb = d ? decodeURIComponent(d) : "";
        Of(this, c[4]);
        d = c[5] || "";
        Nf(this);
        this.Kc = d ? decodeURIComponent(d) : "";
        Pf(this, c[6] || "", !0);
        c = c[7] || "";
        Nf(this);
        this.vc =
        c ? decodeURIComponent(c) : ""
    } else 
        this.pb=!!b, this.a = new Qf(null, 0, this.pb)
}
m = Lf.prototype;
m.Ib = "";
m.Rc = "";
m.Mb = "";
m.Lc = null;
m.Kc = "";
m.vc = "";
m.xf=!1;
m.pb=!1;
m.toString = function() {
    var a = [], b = this.Ib;
    b && a.push(Rf(b, Sf), ":");
    if (b = this.Mb) {
        a.push("//");
        var c = this.Rc;
        c && a.push(Rf(c, Sf), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.Lc;
        null != b && a.push(":", String(b))
    }
    if (b = this.Kc)
        this.Mb && "/" != b.charAt(0) && a.push("/"), a.push(Rf(b, "/" == b.charAt(0) ? Tf : Uf));
    (b = this.a.toString()) && a.push("?", b);
    (b = this.vc) && a.push("#", Rf(b, Vf));
    return a.join("")
};
m.ea = function() {
    return new Lf(this)
};
function Mf(a, b, c) {
    Nf(a);
    a.Ib = c ? b ? decodeURIComponent(b) : "" : b;
    a.Ib && (a.Ib = a.Ib.replace(/:$/, ""))
}
function Of(a, b) {
    Nf(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.Lc = b
    } else 
        a.Lc = null
}
function Pf(a, b, c) {
    Nf(a);
    b instanceof Qf ? (a.a = b, Wf(a.a, a.pb)) : (c || (b = Rf(b, Xf)), a.a = new Qf(b, 0, a.pb))
}
function Yf(a, b, c) {
    Nf(a);
    ia(c) || (c = [String(c)]);
    Zf(a.a, b, c)
}
function Nf(a) {
    if (a.xf)
        throw Error("Tried to modify a read-only Uri");
}
function Rf(a, b) {
    return u(a) ? encodeURI(a).replace(b, $f) : null
}
function $f(a) {
    a = a.charCodeAt(0);
    return "%" + (a>>4 & 15).toString(16) + (a & 15).toString(16)
}
var Sf = /[#\/\?@]/g, Uf = /[\#\?:]/g, Tf = /[\#\?]/g, Xf = /[\#\?@]/g, Vf = /#/g;
function Qf(a, b, c) {
    this.a = a || null;
    this.b=!!c
}
function ag(a) {
    if (!a.$ && (a.$ = new Bf, a.u = 0, a.a))
        for (var b = a.a.split("\x26"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("\x3d"), e = null, f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = decodeURIComponent(e.replace(/\+/g, " "));
            e = bg(a, e);
            a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
}
m = Qf.prototype;
m.$ = null;
m.u = null;
m.T = function() {
    ag(this);
    return this.u
};
m.add = function(a, b) {
    ag(this);
    this.a = null;
    a = bg(this, a);
    var c = this.$.get(a);
    c || Cf(this.$, a, c = []);
    c.push(b);
    this.u++;
    return this
};
m.remove = function(a) {
    ag(this);
    a = bg(this, a);
    return Ef(this.$.b, a) ? (this.a = null, this.u -= this.$.get(a).length, this.$.remove(a)) : !1
};
m.clear = function() {
    this.$ = this.a = null;
    this.u = 0
};
m.vb = function() {
    ag(this);
    return 0 == this.u
};
function cg(a, b) {
    ag(a);
    b = bg(a, b);
    return Ef(a.$.b, b)
}
m.Ka = function() {
    ag(this);
    for (var a = this.$.La(), b = this.$.Ka(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++)
            c.push(b[d]);
    return c
};
m.La = function(a) {
    ag(this);
    var b = [];
    if (a)
        cg(this, a) && (b = Qa(b, this.$.get(bg(this, a))));
    else {
        a = this.$.La();
        for (var c = 0; c < a.length; c++)
            b = Qa(b, a[c])
    }
    return b
};
m.get = function(a, b) {
    var c = a ? this.La(a): [];
    return 0 < c.length ? String(c[0]) : b
};
function Zf(a, b, c) {
    a.remove(b);
    0 < c.length && (a.a = null, Cf(a.$, bg(a, b), Ra(c)), a.u += c.length)
}
m.toString = function() {
    if (this.a)
        return this.a;
    if (!this.$)
        return "";
    for (var a = [], b = this.$.Ka(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.La(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "\x3d" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
    return this.a = a.join("\x26")
};
m.ea = function() {
    var a = new Qf;
    a.a = this.a;
    this.$ && (a.$ = this.$.ea(), a.u = this.u);
    return a
};
function bg(a, b) {
    var c = String(b);
    a.b && (c = c.toLowerCase());
    return c
}
function Wf(a, b) {
    b&&!a.b && (ag(a), a.a = null, Af(a.$, function(a, b) {
        var e = b.toLowerCase();
        b != e && (this.remove(b), Zf(this, e, a))
    }, a));
    a.b = b
};
function dg(a, b, c) {
    db.call(this);
    this.d = a;
    this.c = c;
    this.a = b || window;
    this.b = y(this.dd, this)
}
E(dg, db);
m = dg.prototype;
m.P = null;
m.wd=!1;
m.start = function() {
    eg(this);
    this.wd=!1;
    var a = fg(this), b = gg(this);
    a&&!b && this.a.mozRequestAnimationFrame ? (this.P = J(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.wd=!0) : this.P = a && b ? a.call(this.a, this.b) : this.a.setTimeout(Te(this.b), 20)
};
function eg(a) {
    if (null != a.P) {
        var b = fg(a), c = gg(a);
        b&&!c && a.a.mozRequestAnimationFrame ? Fc(a.P) : b && c ? c.call(a.a, a.P) : a.a.clearTimeout(a.P)
    }
    a.P = null
}
m.dd = function() {
    this.wd && this.P && Fc(this.P);
    this.P = null;
    this.d.call(this.c, sa())
};
m.v = function() {
    eg(this);
    dg.F.v.call(this)
};
function fg(a) {
    a = a.a;
    return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || null
}
function gg(a) {
    a = a.a;
    return a.cancelRequestAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || null
};
function hg(a, b, c) {
    if (la(a))
        c && (a = y(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = y(a.handleEvent, a);
    else 
        throw Error("Invalid listener argument");
    return 2147483647 < b?-1 : p.setTimeout(a, b || 0)
};
function ig(a, b, c) {
    db.call(this);
    this.a = a;
    this.d = b || 0;
    this.b = c;
    this.c = y(this.e, this)
}
E(ig, db);
ig.prototype.P = 0;
ig.prototype.v = function() {
    ig.F.v.call(this);
    0 != this.P && p.clearTimeout(this.P);
    this.P = 0;
    delete this.a;
    delete this.b
};
ig.prototype.start = function(a) {
    0 != this.P && p.clearTimeout(this.P);
    this.P = 0;
    this.P = hg(this.c, s(a) ? a : this.d)
};
ig.prototype.e = function() {
    this.P = 0;
    this.a && this.a.call(this.b)
};
var jg, kg=!G || G && 9 <= Ob;
!xb&&!G || G && G && 9 <= Ob || xb && Mb("1.9.1");
G && Mb("9");
function lg(a) {
    a = a.className;
    return u(a) && a.match(/\S+/g) || []
}
function mg(a, b) {
    for (var c = lg(a), d = Ta(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++)
        0 <= Fa(f, d[g]) || f.push(d[g]);
    a.className = c.join(" ");
    return c.length == e
}
function ng(a, b, c) {
    for (var d = lg(a), e=!1, f = 0; f < d.length; f++)
        d[f] == b && (Sa(d, f--, 1), e=!0);
    e && (d.push(c), a.className = d.join(" "))
};
function og(a, b) {
    this.x = s(a) ? a : 0;
    this.y = s(b) ? b : 0
}
m = og.prototype;
m.ea = function() {
    return new og(this.x, this.y)
};
m.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
m.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
m.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
m.scale = function(a, b) {
    var c = ka(b) ? b: a;
    this.x*=a;
    this.y*=c;
    return this
};
function pg(a, b) {
    this.width = a;
    this.height = b
}
m = pg.prototype;
m.ea = function() {
    return new pg(this.width, this.height)
};
m.vb = function() {
    return !(this.width * this.height)
};
m.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
m.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
m.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
m.scale = function(a, b) {
    var c = ka(b) ? b: a;
    this.width*=a;
    this.height*=c;
    return this
};
function qg(a) {
    return a ? new rg(sg(a)) : jg || (jg = new rg)
}
function tg(a, b) {
    gc(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in ug ? a.setAttribute(ug[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var ug = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
function vg(a) {
    a = a.document.documentElement;
    return new pg(a.clientWidth, a.clientHeight)
}
function wg(a, b, c) {
    var d = arguments, e = document, f = d[0], g = d[1];
    if (!kg && g && (g.name || g.type)) {
        f = ["\x3c", f];
        g.name && f.push(' name\x3d"', wa(g.name), '"');
        if (g.type) {
            f.push(' type\x3d"', wa(g.type), '"');
            var h = {};
            I(h, g);
            delete h.type;
            g = h
        }
        f.push("\x3e");
        f = f.join("")
    }
    f = e.createElement(f);
    g && (u(g) ? f.className = g : ia(g) ? mg.apply(null, [f].concat(g)) : tg(f, g));
    2 < d.length && xg(e, f, d, 2);
    return f
}
function xg(a, b, c, d) {
    function e(c) {
        c && b.appendChild(u(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !ja(f) || ma(f) && 0 < f.nodeType ? e(f) : Ga(yg(f) ? Ra(f) : f, e)
    }
}
function zg(a) {
    return document.createElement(a)
}
function Ag(a, b) {
    xg(sg(a), a, arguments, 1)
}
function Bg(a) {
    for (var b; b = a.firstChild;)
        a.removeChild(b)
}
function Cg(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function Dg(a, b) {
    a.insertBefore(b, a.childNodes[0] || null)
}
function Eg(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}
function Fg(a) {
    if (void 0 != a.firstElementChild)
        a = a.firstElementChild;
    else 
        for (a = a.firstChild; a && 1 != a.nodeType;)
            a = a.nextSibling;
    return a
}
function sg(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function yg(a) {
    if (a && "number" == typeof a.length) {
        if (ma(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (la(a))
            return "function" == typeof a.item
    }
    return !1
}
function rg(a) {
    this.a = a || p.document || document
}
rg.prototype.createTextNode = function(a) {
    return this.a.createTextNode(String(a))
};
function Gg() {
    return !0
}
function Ig(a) {
    var b = a.a;
    a = yb ? b.body : b.documentElement;
    b = b.parentWindow || b.defaultView;
    return G && Mb("10") && b.pageYOffset != a.scrollTop ? new og(a.scrollLeft, a.scrollTop) : new og(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
rg.prototype.appendChild = function(a, b) {
    a.appendChild(b)
};
rg.prototype.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
};
function Jg(a) {
    Nc.call(this);
    this.hc = a || window;
    this.Ac = J(this.hc, "resize", this.kf, !1, this);
    this.qb = vg(this.hc || window)
}
E(Jg, Nc);
m = Jg.prototype;
m.Ac = null;
m.hc = null;
m.qb = null;
m.v = function() {
    Jg.F.v.call(this);
    this.Ac && (Fc(this.Ac), this.Ac = null);
    this.qb = this.hc = null
};
m.kf = function() {
    var a = vg(this.hc || window);
    a == this.qb || a && this.qb && a.width == this.qb.width && a.height == this.qb.height || (this.qb = a, K(this, "resize"))
};
function ph(a, b, c, d, e) {
    if (!(G || yb && Mb("525")))
        return !0;
    if (pb && e)
        return qh(a);
    if (e&&!d ||!c && (17 == b || 18 == b || pb && 91 == b))
        return !1;
    if (yb && d && c)
        switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
        }
    if (G && d && b == a)
        return !1;
    switch (a) {
    case 13:
        return !(G && G && 9 <= Ob);
    case 27:
        return !yb
    }
    return qh(a)
}
function qh(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || yb && 0 == a)
        return !0;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
        return !0;
    default:
        return !1
    }
}
function rh(a) {
    switch (a) {
    case 61:
        return 187;
    case 59:
        return 186;
    case 224:
        return 91;
    case 0:
        return 224;
    default:
        return a
    }
};
function sh(a, b) {
    Nc.call(this);
    a && th(this, a, b)
}
E(sh, Nc);
m = sh.prototype;
m.Rb = null;
m.Fc = null;
m.jd = null;
m.Gc = null;
m.pa =- 1;
m.fb =- 1;
m.Tc=!1;
var uh = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}, vh = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
}, wh = G || yb && Mb("525"), xh = pb && xb;
sh.prototype.a = function(a) {
    yb && (17 == this.pa&&!a.Qb || 18 == this.pa&&!a.wa || pb && 91 == this.pa&&!a.fd) && (this.fb = this.pa =- 1);
    - 1 == this.pa && (a.Qb && 17 != a.Va ? this.pa = 17 : a.wa && 18 != a.Va ? this.pa = 18 : a.fd && 91 != a.Va && (this.pa = 91));
    wh&&!ph(a.Va, this.pa, a.Wa, a.Qb, a.wa) ? this.handleEvent(a) : (this.fb = xb ? rh(a.Va) : a.Va, xh && (this.Tc = a.wa))
};
sh.prototype.b = function(a) {
    this.fb = this.pa =- 1;
    this.Tc = a.wa
};
sh.prototype.handleEvent = function(a) {
    var b = a.fa, c, d, e = b.altKey;
    G && "keypress" == a.type ? (c = this.fb, d = 13 != c && 27 != c ? b.keyCode : 0) : yb && "keypress" == a.type ? (c = this.fb, d = 0 <= b.charCode && 63232 > b.charCode && qh(c) ? b.charCode : 0) : wb ? (c = this.fb, d = qh(c) ? b.keyCode : 0) : (c = b.keyCode || this.fb, d = b.charCode || 0, xh && (e = this.Tc), pb && (63 == d && 224 == c) && (c = 191));
    var f = c, g = b.keyIdentifier;
    c ? 63232 <= c && c in uh ? f = uh[c] : 25 == c && a.Wa && (f = 9) : g && g in vh && (f = vh[g]);
    a = f == this.pa;
    this.pa = f;
    b = new yh(f, d, a, b);
    b.wa = e;
    K(this, b)
};
function th(a, b, c) {
    a.Gc && zh(a);
    a.Rb = b;
    a.Fc = J(a.Rb, "keypress", a, c);
    a.jd = J(a.Rb, "keydown", a.a, c, a);
    a.Gc = J(a.Rb, "keyup", a.b, c, a)
}
function zh(a) {
    a.Fc && (Fc(a.Fc), Fc(a.jd), Fc(a.Gc), a.Fc = null, a.jd = null, a.Gc = null);
    a.Rb = null;
    a.pa =- 1;
    a.fb =- 1
}
sh.prototype.v = function() {
    sh.F.v.call(this);
    zh(this)
};
function yh(a, b, c, d) {
    d && Ub(this, d, void 0);
    this.type = "key";
    this.Va = a;
    this.ed = b;
    this.b = c
}
E(yh, Tb);
function Ah(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
m = Ah.prototype;
m.ea = function() {
    return new Ah(this.top, this.right, this.bottom, this.left)
};
m.contains = function(a) {
    return this && a ? a instanceof Ah ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
m.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
m.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
m.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
m.scale = function(a, b) {
    var c = ka(b) ? b: a;
    this.left*=a;
    this.right*=a;
    this.top*=c;
    this.bottom*=c;
    return this
};
function Bh(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
m = Bh.prototype;
m.ea = function() {
    return new Bh(this.left, this.top, this.width, this.height)
};
m.contains = function(a) {
    return a instanceof Bh ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
m.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
m.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
m.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
m.scale = function(a, b) {
    var c = ka(b) ? b: a;
    this.left*=a;
    this.width*=a;
    this.top*=c;
    this.height*=c;
    return this
};
function Ch(a, b) {
    var c = sg(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Dh(a, b) {
    return Ch(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}
function Eh(a, b, c) {
    var d, e = xb && (pb || Cb) && Mb("1.9");
    b instanceof og ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Fh(d, e);
    a.style.top = Fh(b, e)
}
function Gh(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    G && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function Hh(a) {
    if (G&&!(G && 8 <= Ob))
        return a.offsetParent;
    var b = sg(a), c = Dh(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Dh(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}
function Ih(a) {
    var b, c = sg(a), d = Dh(a, "position"), e = xb && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new og(0, 0), g;
    b = c ? sg(c) : document;
    g=!G || G && 9 <= Ob || Gg(qg(b)) ? b.documentElement : b.body;
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = Gh(a), a = Ig(qg(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y +=
            b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (yb && "fixed" == Dh(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (wb || yb && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = Hh(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, wb && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}
function Jh(a, b) {
    var c = Kh(a), d = Kh(b);
    return new og(c.x - d.x, c.y - d.y)
}
function Kh(a) {
    if (1 == a.nodeType) {
        var b;
        if (a.getBoundingClientRect)
            b = Gh(a), b = new og(b.left, b.top);
        else {
            b = Ig(qg(a));
            var c = Ih(a);
            b = new og(c.x - b.x, c.y - b.y)
        }
        if (xb&&!Mb(12)) {
            var d;
            G ? d = "-ms-transform" : yb ? d = "-webkit-transform" : wb ? d = "-o-transform" : xb && (d = "-moz-transform");
            var e;
            d && (e = Dh(a, d));
            e || (e = Dh(a, "transform"));
            a = e ? (a = e.match(Lh)) ? new og(parseFloat(a[1]), parseFloat(a[2])) : new og(0, 0) : new og(0, 0);
            a = new og(b.x + a.x, b.y + a.y)
        } else 
            a = b;
        return a
    }
    d = la(a.Ge);
    e = a;
    a.targetTouches ? e = a.targetTouches[0] : d && a.fa.targetTouches &&
    (e = a.fa.targetTouches[0]);
    return new og(e.clientX, e.clientY)
}
function Fh(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function Mh(a) {
    var b = Nh;
    if ("none" != Dh(a, "display"))
        return b(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}
function Nh(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = yb&&!b&&!c;
    return s(b)&&!d ||!a.getBoundingClientRect ? new pg(b, c) : (a = Gh(a), new pg(a.right - a.left, a.bottom - a.top))
}
function Oh(a, b) {
    var c = a.style;
    "opacity"in c ? c.opacity = b : "MozOpacity"in c ? c.MozOpacity = b : "filter"in c && (c.filter = "" === b ? "" : "alpha(opacity\x3d" + 100 * b + ")")
}
function Ph(a, b) {
    a.style.display = b ? "" : "none"
}
function Qh(a) {
    return "rtl" == Dh(a, "direction")
}
function Rh(a, b) {
    var c = Gg(qg(sg(a)));
    if (!G || c && Mb("8")) {
        var d = a.style;
        xb ? d.MozBoxSizing = "border-box" : yb ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box";
        d.width = Math.max(b.width, 0) + "px";
        d.height = Math.max(b.height, 0) + "px"
    } else if (d = a.style, c) {
        var c = Sh(a, "padding"), e = Th(a);
        d.pixelWidth = b.width - e.left - c.left - c.right - e.right;
        d.pixelHeight = b.height - e.top - c.top - c.bottom - e.bottom
    } else 
        d.pixelWidth = b.width, d.pixelHeight = b.height
}
function Uh(a, b, c, d) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var e = a.style[c], f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
}
function Vh(a, b) {
    var c = a.currentStyle ? a.currentStyle[b]: null;
    return c ? Uh(a, c, "left", "pixelLeft") : 0
}
function Sh(a, b) {
    if (G) {
        var c = Vh(a, b + "Left"), d = Vh(a, b + "Right"), e = Vh(a, b + "Top"), f = Vh(a, b + "Bottom");
        return new Ah(e, d, f, c)
    }
    c = Ch(a, b + "Left");
    d = Ch(a, b + "Right");
    e = Ch(a, b + "Top");
    f = Ch(a, b + "Bottom");
    return new Ah(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
}
var Wh = {
    thin: 2,
    medium: 4,
    thick: 6
};
function Xh(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"]: null;
    return c in Wh ? Wh[c] : Uh(a, c, "left", "pixelLeft")
}
function Th(a) {
    if (G) {
        var b = Xh(a, "borderLeft"), c = Xh(a, "borderRight"), d = Xh(a, "borderTop");
        a = Xh(a, "borderBottom");
        return new Ah(d, c, a, b)
    }
    b = Ch(a, "borderLeftWidth");
    c = Ch(a, "borderRightWidth");
    d = Ch(a, "borderTopWidth");
    a = Ch(a, "borderBottomWidth");
    return new Ah(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Lh = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function Yh(a, b) {
    Nc.call(this);
    this.a = a;
    var c = ma(this.a) && 1 == this.a.nodeType ? this.a: this.a ? this.a.body: null;
    this.e=!!c && Qh(c);
    this.b = J(this.a, xb ? "DOMMouseScroll" : "mousewheel", this, b)
}
E(Yh, Nc);
Yh.prototype.handleEvent = function(a) {
    var b = 0, c = 0, d = 0;
    a = a.fa;
    if ("mousewheel" == a.type) {
        c = 1;
        if (G || yb && (qb || Mb("532.0")))
            c = 40;
        d = Zh( - a.wheelDelta, c);
        s(a.wheelDeltaX) ? (b = Zh( - a.wheelDeltaX, c), c = Zh( - a.wheelDeltaY, c)) : c = d
    } else 
        d = a.detail, 100 < d ? d = 3 : - 100 > d && (d =- 3), s(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    ka(this.c) && (b = Zc(b, - this.c, this.c));
    ka(this.d) && (c = Zc(c, - this.d, this.d));
    this.e && (b =- b);
    b = new $h(d, a, b, c);
    K(this, b)
};
function Zh(a, b) {
    return yb && (pb || rb) && 0 != a%b ? a : a / b
}
Yh.prototype.v = function() {
    Yh.F.v.call(this);
    Fc(this.b);
    this.b = null
};
function $h(a, b, c, d) {
    b && Ub(this, b, void 0);
    this.type = "mousewheel";
    this.b = a;
    this.na = c;
    this.ma = d
}
E($h, Tb);
var ai = p.document && "ontouchstart"in p.document.documentElement||!!p.navigator.msPointerEnabled;
function bi(a, b, c) {
    ib.call(this, a);
    this.map = b;
    this.b = s(c) ? c : null
}
E(bi, ib);
function ci(a, b, c, d) {
    bi.call(this, a, b, d);
    this.a = c;
    this.g = this.f = null
}
E(ci, bi);
ci.prototype.d = function() {
    null === this.f && (this.f = di(this.map, this.e()));
    return this.f
};
ci.prototype.e = function() {
    if (null === this.g) {
        var a = Jh(this.a, this.map.b);
        this.g = [a.x, a.y]
    }
    return this.g
};
ci.prototype.U = function() {
    ci.F.U.call(this);
    this.a.U()
};
ci.prototype.rb = function() {
    ci.F.rb.call(this);
    this.a.rb()
};
function ei(a) {
    Nc.call(this);
    this.a = a;
    this.c=!1;
    this.b = this.g = this.d = this.e = this.f = null;
    a = this.a.b;
    this.e = [J(a, ["click", "dblclick"], this.Bd, !1, this), J(a, "mousedown", this.cf, !1, this), J(a, "mousemove", this.pd, !1, this), J(a, "mouseout", this.pd, !1, this), J(a, "contextmenu", this.pd, !1, this)];
    this.g = [J(a, ["touchstart", "MSPointerDown"], this.rf, !1, this), J(p.document, ["touchmove", "MSPointerMove"], this.qf, !1, this), J(p.document, ["touchend", "MSPointerUp"], this.pf, !1, this)]
}
E(ei, Nc);
m = ei.prototype;
m.Bd = function(a) {
    if (!this.c) {
        var b = a.type;
        K(this, 0 === this.f || "dblclick" == b ? new ci(fi, this.a, a) : new ci(gi, this.a, a))
    }
};
m.ef = function(a) {
    this.b && (this.b = null, Ga(this.d, Fc), this.d = null, this.c && K(this, new ci(hi, this.a, a)))
};
m.cf = function(a) {
    K(this, new ci(ii, this.a, a));
    this.b || (this.b = a, this.c=!1, this.d = [J(p.document, "mousemove", this.df, !1, this), J(p.document, "mouseup", this.ef, !1, this)], a.U())
};
m.df = function(a) {
    var b;
    this.c || (this.c=!0, b = new ci(ji, this.a, this.b), K(this, b));
    b = new ci(ki, this.a, a);
    K(this, b)
};
m.pd = function(a) {
    K(this, new ci(a.type, this.a, a))
};
m.rf = function(a) {
    a.U();
    this.b = a;
    this.c=!1;
    K(this, new ci(li, this.a, a))
};
m.qf = function(a) {
    this.b && (this.c=!0, K(this, new ci(mi, this.a, a)))
};
m.pf = function(a) {
    K(this, new ci(ni, this.a, a));
    this.c || (a = sa(), this.f=!this.f || 250 < a - this.f ? a : 0, null === this.b || this.Bd(this.b));
    this.b = null
};
m.v = function() {
    null !== this.e && (Ga(this.e, Fc), this.e = null);
    null !== this.d && (Ga(this.d, Fc), this.d = null);
    null !== this.g && (Ga(this.g, Fc), this.g = null);
    ei.F.v.call(this)
};
var gi = "click", fi = "dblclick", ii = "down", ji = "dragstart", ki = "drag", hi = "dragend", li = "touchstart", mi = "touchmove", ni = "touchend", oi = {
    kg: gi,
    mg: fi,
    pg: ii,
    sg: ji,
    qg: ki,
    rg: hi,
    bh: li,
    ah: mi,
    $g: ni,
    Jg: "mousemove",
    Kg: "mouseout",
    lg: "contextmenu"
};
function pi(a, b, c) {
    var d = a.length;
    if (a[0] <= b)
        return 0;
    if (!(b <= a[d - 1]))
        if (0 < c)
            for (c = 1; c < d; ++c) {
                if (a[c] < b)
                    return c - 1
            } else if (0 > c)
                for (c = 1; c < d; ++c) {
                    if (a[c] <= b)
                        return c
                } else 
                    for (c = 1; c < d; ++c) {
                        if (a[c] == b)
                            return c;
                            if (a[c] < b)
                                return a[c - 1] - b < b - a[c] ? c - 1 : c
                    }
    return d - 1
};
function qi(a) {
    return function(b, c, d) {
        if (s(b))
            return b = pi(a, b, d), b = Zc(b + c, 0, a.length - 1), a[b]
    }
}
function ri(a, b, c) {
    return function(d, e, f) {
        if (s(d))
            return f = 0 < f ? 0 : 0 > f ? 1 : 0.5, d = Math.floor(Math.log(b / d) / Math.log(a) + f), e = Math.max(d + e, 0), s(c) && (e = Math.min(e, c)), b / Math.pow(a, e)
    }
};
function si() {
    return function(a, b) {
        if (s(a))
            return 0.1 >= Math.abs(a + b) ? 0 : a + b
    }
};
function ti(a) {
    var b = si();
    this.resolution = a;
    this.rotation = b
};
function T(a) {
    Ze.call(this);
    a = a || {};
    var b = {};
    b.center = s(a.center) ? a.center : null;
    b.projection = je(a.projection);
    var c, d, e;
    if (s(a.resolutions))
        c = a.resolutions, d = c[0], e = c[c.length - 1], c = qi(c);
    else {
        d = a.maxResolution;
        s(d) || (d = a.projection, e = je(d).ba(), d = (null === e ? 360 * Kd.degrees / Kd[d.Kb] : Math.max(e[2] - e[0], e[3] - e[1])) / 256);
        c = a.maxZoom;
        s(c) || (c = 28);
        var f = a.zoomFactor;
        s(f) || (f = 2);
        e = d / Math.pow(f, c);
        c = ri(f, d, c)
    }
    this.b = d;
    this.f = e;
    this.g = new ti(c);
    s(a.resolution) ? b.resolution = a.resolution : s(a.zoom) && (b.resolution =
    this.Ha(this.b, a.zoom));
    b.rotation = s(a.rotation) ? a.rotation : 0;
    this.Zb(b)
}
E(T, Ze);
function ui(a, b, c) {
    var d, e = a.a();
    s(e) && (d = [e[0] - c[0], e[1] - c[1]], jd(d, b - a.c()), hd(d, c));
    return d
}
function vi(a, b, c) {
    var d, e = a.a();
    a = a.D();
    s(e) && s(a) && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
    return d
}
T.prototype.Ha = function(a, b, c) {
    return this.g.resolution(a, b || 0, c || 0)
};
T.prototype.lc = function(a, b) {
    return this.g.rotation(a, b || 0)
};
T.prototype.a = function() {
    return this.get("center")
};
T.prototype.getCenter = T.prototype.a;
T.prototype.i = function(a) {
    var b = this.a(), c = this.D();
    return [b[0] - c * a[0] / 2, b[1] - c * a[1] / 2, b[0] + c * a[0] / 2, b[1] + c * a[1] / 2]
};
T.prototype.ga = function() {
    return this.get("projection")
};
T.prototype.getProjection = T.prototype.ga;
T.prototype.D = function() {
    return this.get("resolution")
};
T.prototype.getResolution = T.prototype.D;
function wi(a) {
    var b = a.b, c = Math.log(b / a.f) / Math.log(2);
    return function(a) {
        return b / Math.pow(2, a * c)
    }
}
T.prototype.c = function() {
    return this.get("rotation")
};
T.prototype.getRotation = T.prototype.c;
function xi(a) {
    var b = a.b, c = Math.log(b / a.f) / Math.log(2);
    return function(a) {
        return Math.log(b / a) / Math.log(2) / c
    }
}
m = T.prototype;
m.O = function() {
    return this
};
function yi(a) {
    var b = a.a(), c = a.ga(), d = a.D();
    a = a.c();
    return {
        center: b.slice(),
        projection: s(c) ? c: null,
        resolution: d,
        rotation: s(a) ? a: 0
    }
}
m.Qe = function() {
    var a, b = this.D();
    if (s(b)) {
        var c, d = 0;
        do {
            c = this.Ha(this.b, d);
            if (c == b) {
                a = d;
                break
            }
            ++d
        }
        while (c > this.f)
        }
    return a
};
m.$c = function(a, b) {
    this.Da(wd(a));
    var c = Math.max((a[2] - a[0]) / b[0], (a[3] - a[1]) / b[1]), c = this.Ha(c, 0, 0);
    this.kb(c)
};
m.Wb = function() {
    return null != this.a() && s(this.D())
};
m.Da = function(a) {
    this.l("center", a)
};
T.prototype.setCenter = T.prototype.Da;
T.prototype.k = function(a) {
    this.l("projection", a)
};
T.prototype.setProjection = T.prototype.k;
T.prototype.kb = function(a) {
    this.l("resolution", a)
};
T.prototype.setResolution = T.prototype.kb;
T.prototype.d = function(a) {
    this.l("rotation", a)
};
T.prototype.setRotation = T.prototype.d;
T.prototype.p = function(a) {
    a = this.Ha(this.b, a, 0);
    this.kb(a)
};
function zi(a) {
    M.call(this);
    this.element = s(a.element) ? a.element : null;
    this.p = a.target;
    this.a = null;
    this.e = []
}
E(zi, M);
zi.prototype.v = function() {
    Eg(this.element);
    zi.F.v.call(this)
};
zi.prototype.W = k("a");
zi.prototype.d = da;
zi.prototype.setMap = function(a) {
    null === this.a || Eg(this.element);
    0 != this.e.length && (Ga(this.e, Fc), this.e.length = 0);
    this.a = a;
    null !== this.a && ((s(this.p) ? this.p : a.K).appendChild(this.element), this.d !== da && this.e.push(J(a, "postrender", this.d, !1, this)))
};
function Ai(a) {
    a = s(a) ? a : {};
    this.g = zg("UL");
    var b = wg("DIV", {
        "class": (s(a.className) ? a.className : "ol-attribution") + " ol-unselectable"
    }, this.g);
    zi.call(this, {
        element: b,
        target: a.target
    });
    this.f=!0;
    this.c = {};
    this.b = {}
}
E(Ai, zi);
Ai.prototype.d = function(a) {
    a = a.b;
    if (null === a)
        this.f && (Ph(this.element, !1), this.f=!1);
    else {
        var b, c, d, e, f, g, h, l, n, q = a.Hc, r = sc(a.attributions), w = {};
        b = 0;
        for (c = q.length; b < c; b++)
            if (d = q[b].ja(), n = x(d).toString(), l = d.d, null !== l)
                for (d = 0, e = l.length; d < e; d++)
                    if (g = l[d], h = x(g).toString(), !(h in r)) {
                        f = a.gc[n];
                        var t;
                        if (t = s(f))
                            a: if (null === g.a)
                                t=!0;
                            else {
                                var A = t = void 0, B = void 0, v = void 0;
                                for (v in f)
                                    if (v in g.a)
                                        for (B = f[v], t = 0, A = g.a[v].length; t < A; ++t)
                                            if (g.a[v][t].a <= B.d && g.a[v][t].d >= B.a && g.a[v][t].c <= B.b && g.a[v][t].b >=
                                            B.c) {
                                                t=!0;
                                                break a
                                            }
                                            t=!1
                            }
                            t ? (h in w && delete w[h], r[h] = g) : w[h] = g
                    }
        b = [r, w];
        a = b[0];
        b = b[1];
        for (var z in this.c)
            z in a ? (this.b[z] || (Ph(this.c[z], !0), this.b[z]=!0), delete a[z]) : z in b ? (this.b[z] && (Ph(this.c[z], !1), delete this.b[z]), delete b[z]) : (Eg(this.c[z]), delete this.c[z], delete this.b[z]);
        for (z in a)
            c = zg("LI"), c.innerHTML = a[z].b, this.g.appendChild(c), this.c[z] = c, this.b[z]=!0;
        for (z in b)
            c = zg("LI"), c.innerHTML = b[z].b, Ph(c, !1), this.g.appendChild(c), this.c[z] = c;
        z=!rc(this.b);
        this.f != z && (Ph(this.element, z),
        this.f = z)
    }
};
function Bi(a) {
    a = s(a) ? a : {};
    this.c = zg("UL");
    var b = wg("DIV", {
        "class": (s(a.className) ? a.className : "ol-logo") + " ol-unselectable"
    }, this.c);
    zi.call(this, {
        element: b,
        target: a.target
    });
    this.b=!0;
    this.f = {}
}
E(Bi, zi);
Bi.prototype.d = function(a) {
    a = a.b;
    if (null === a)
        this.b && (Ph(this.element, !1), this.b=!1);
    else {
        var b;
        a = a.Wd;
        var c = this.f;
        for (b in c)
            b in a || (Eg(c[b]), delete c[b]);
        var d, e;
        for (b in a)
            b in c || (d = new Image, d.src = b, e = zg("LI"), e.appendChild(d), this.c.appendChild(e), c[b] = e);
        b=!rc(a);
        this.b != b && (Ph(this.element, b), this.b = b)
    }
};
function Ci(a) {
    a = s(a) ? a : {};
    var b = s(a.className) ? a.className: "ol-zoom", c = s(a.delta) ? a.delta: 1, d = wg("A", {
        href: "#zoomIn",
        "class": b + "-in"
    });
    J(d, ["touchend", "click"], ra(Ci.prototype.b, c), !1, this);
    var e = wg("A", {
        href: "#zoomOut",
        "class": b + "-out"
    });
    J(e, ["touchend", "click"], ra(Ci.prototype.b, - c), !1, this);
    b = wg("DIV", b + " ol-unselectable", d, e);
    zi.call(this, {
        element: b,
        target: a.target
    })
}
E(Ci, zi);
Ci.prototype.b = function(a, b) {
    b.U();
    var c = this.a, d = c.a().O(), e = d.D();
    s(e) && (c.Ga(vf({
        resolution: e,
        duration: 250,
        easing: af
    })), c = d.Ha(e, a), d.kb(c))
};
function Di(a) {
    a = s(a) ? a : {};
    var b = new N;
    (s(a.attribution) ? a.attribution : 1) && b.push(new Ai(s(a.attributionOptions) ? a.attributionOptions : void 0));
    (s(a.logo) ? a.logo : 1) && b.push(new Bi(s(a.logoOptions) ? a.logoOptions : void 0));
    (s(a.zoom) ? a.zoom : 1) && b.push(new Ci(s(a.zoomOptions) ? a.zoomOptions : void 0));
    return b
};
function Ei() {}
function Fi(a, b, c, d, e) {
    if (null != c) {
        var f = b.c(), g = b.a();
        s(f) && (s(g) && s(e)) && (a.Ga(uf({
            rotation: f,
            duration: e,
            easing: af
        })), s(d) && a.Ga(tf({
            source: g,
            duration: e,
            easing: af
        })));
        if (null != d) {
            var h = ui(b, c, d);
            Gi(a, function() {
                b.Da(h);
                b.d(c)
            })
        } else 
            b.d(c)
    }
}
function Hi(a, b, c, d, e) {
    var f = b.D();
    c = b.Ha(f, c, 0);
    Ii(a, b, c, d, e)
}
function Ii(a, b, c, d, e) {
    if (null != c) {
        var f = b.D(), g = b.a();
        s(f) && (s(g) && s(e)) && (a.Ga(vf({
            resolution: f,
            duration: e,
            easing: af
        })), s(d) && a.Ga(tf({
            source: g,
            duration: e,
            easing: af
        })));
        if (null != d) {
            var h = vi(b, c, d);
            Gi(a, function() {
                b.Da(h);
                b.kb(c)
            })
        } else 
            b.kb(c)
    }
};
function Ji(a) {
    a = s(a) ? a : {};
    this.a = s(a.delta) ? a.delta : 1
}
E(Ji, Ei);
Ji.prototype.xb = function(a) {
    var b=!1, c = a.a;
    if (a.type == fi && (ai || Wb(a.a))) {
        var b = a.map, d = a.d(), c = c.Wa?-this.a : this.a, e = b.a().O();
        Hi(b, e, c, d, 250);
        a.U();
        b=!0
    }
    return !b
};
function Ki(a) {
    a = a.a;
    return a.wa&&!a.Gb && a.Wa
}
function Li(a) {
    return "click" == a.a.type
}
function Mi(a) {
    a = a.a;
    return !a.wa&&!a.Gb&&!a.Wa
}
function Ni(a) {
    a = a.a;
    return !a.wa&&!a.Gb && a.Wa
}
function Oi(a) {
    a = a.a.target.tagName;
    return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
};
function Pi() {
    this.c=!1;
    this.q = this.i = this.e = this.d = 0;
    this.fc = this.g = null
}
E(Pi, Ei);
m = Pi.prototype;
m.Bc = da;
m.Tb = da;
m.Ub = Pe;
m.Sd = da;
m.xb = function(a) {
    var b = a.map;
    if (!b.Wb())
        return !0;
    var c=!1, b = b.a(), d = a.a;
    a.type == ii && this.Sd(a);
    if (this.c)
        a.type == ki ? (this.na = d.clientX - this.d, this.ma = d.clientY - this.e, this.Bc(a)) : a.type == hi && (this.na = d.clientX - this.d, this.ma = d.clientY - this.e, this.Tb(a), $e(b, - 1), this.c=!1);
    else if (a.type == ji) {
        var e = yi(b.O());
        this.d = d.clientX;
        this.e = d.clientY;
        this.ma = this.na = 0;
        this.g = e.center;
        this.fc = a.d();
        this.Ub(a) && ($e(b, 1), this.c=!0, a.U(), c=!0)
    }
    return !c
};
function Qi(a) {
    Pi.call(this);
    a = s(a) ? a : {};
    this.f = s(a.condition) ? a.condition : Mi;
    this.a = a.kinetic;
    this.b = null
}
E(Qi, Pi);
Qi.prototype.Bc = function(a) {
    this.a && this.a.a.push(a.a.clientX, a.a.clientY, sa());
    a = a.map;
    var b = a.a(), c = yi(b), d = [ - c.resolution * this.na, c.resolution * this.ma];
    jd(d, c.rotation);
    hd(d, this.g);
    Ri(a);
    b.Da(d)
};
Qi.prototype.Tb = function(a) {
    a = a.map;
    var b = a.a().O();
    if (this.a && xf(this.a)) {
        var c = yi(b), d = (this.a.d - this.a.b) / this.a.e, e = this.a.c;
        this.b = yf(this.a, c.center);
        a.Ga(this.b);
        c = Si(a, c.center);
        d = di(a, [c[0] - d * Math.cos(e), c[1] - d * Math.sin(e)]);
        b.Da(d)
    }
    Ri(a)
};
Qi.prototype.Ub = function(a) {
    var b = a.a;
    if (Wb(b) && this.f(a)) {
        if (this.a) {
            var c = this.a;
            c.a.length = 0;
            c.c = 0;
            c.b = 0;
            this.a.a.push(b.clientX, b.clientY, sa())
        }
        Ri(a.map);
        return !0
    }
    return !1
};
Qi.prototype.Sd = function(a) {
    var b = a.map, c = b.a();
    null !== this.b && Oa(b.g, this.b) && (Ri(b), c.Da(a.b.A.center), this.b = null)
};
function Ti(a) {
    a = s(a) ? a : {};
    Pi.call(this);
    this.b = s(a.condition) ? a.condition : Ki;
    this.a = void 0
}
E(Ti, Pi);
Ti.prototype.Bc = function(a) {
    var b = a.map, c = b.c();
    a = a.e();
    c = Math.atan2(c[1] / 2 - a[1], a[0] - c[0] / 2);
    if (s(this.a)) {
        a = c - this.a;
        var d = b.a().O(), e = yi(d);
        Ri(b);
        Fi(b, d, e.rotation - a)
    }
    this.a = c
};
Ti.prototype.Tb = function(a) {
    a = a.map;
    var b = a.a().O(), c = yi(b).rotation, c = b.lc(c, 0);
    Fi(a, b, c, void 0, 250)
};
Ti.prototype.Ub = function(a) {
    return Wb(a.a) && this.b(a) ? (Ri(a.map), this.a = void 0, !0) : !1
};
function Ui(a) {
    var b = wg("DIV", "ol-dragbox");
    this.b = null;
    this.c = a.fc;
    zi.call(this, {
        element: b
    })
}
E(Ui, zi);
Ui.prototype.setMap = function(a) {
    Ui.F.setMap.call(this, a);
    null !== a && (this.b = Si(a, this.c), Eh(this.element, this.b[0], this.b[1]), Rh(this.element, new pg(0, 0)), this.e.push(J(a, ki, this.f, !1, this)))
};
Ui.prototype.f = function(a) {
    var b = this.a;
    a = a.d();
    b = Si(b, a);
    Eh(this.element, Math.min(b[0], this.b[0]), Math.min(b[1], this.b[1]));
    Rh(this.element, new pg(Math.abs(b[0] - this.b[0]), Math.abs(b[1] - this.b[1])))
};
function Vi(a) {
    Pi.call(this);
    a = s(a) ? a : {};
    this.b = s(a.condition) ? a.condition : Ni;
    this.a = null
}
E(Vi, Pi);
Vi.prototype.Tb = function(a) {
    this.a.setMap(null);
    this.a = null;
    if (64 <= this.na * this.na + this.ma * this.ma) {
        var b = a.map, c = nd([this.fc, a.d()]);
        Gi(b, function() {
            var a = b.a(), e = b.c();
            a.$c(c, e);
            a.d(0)
        })
    }
};
Vi.prototype.Ub = function(a) {
    return Wb(a.a) && this.b(a) ? (this.a = new Ui({
        fc: this.fc
    }), this.a.setMap(a.map), !0) : !1
};
function Wi(a) {
    a = s(a) ? a : {};
    this.a = s(a.condition) ? a.condition : Ve(Mi, Oi);
    this.b = s(a.delta) ? a.delta : 128
}
E(Wi, Ei);
Wi.prototype.xb = function(a) {
    var b=!1;
    if ("key" == a.type) {
        var c = a.a.Va;
        if (this.a(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
            var b = a.map, d = b.a(), e = yi(d), f = e.resolution * this.b, g = 0, h = 0;
            40 == c ? h =- f : 37 == c ? g =- f : 39 == c ? g = f : h = f;
            c = [g, h];
            jd(c, e.rotation);
            e = d.a();
            s(e) && (s(100) && b.Ga(tf({
                source: e,
                duration: 100,
                easing: cf
            })), d.Da([e[0] + c[0], e[1] + c[1]]));
            a.U();
            b=!0
        }
    }
    return !b
};
function Xi(a) {
    a = s(a) ? a : {};
    this.b = s(a.condition) ? a.condition : Oi;
    this.a = s(a.delta) ? a.delta : 1
}
E(Xi, Ei);
Xi.prototype.xb = function(a) {
    var b=!1;
    if ("key" == a.type) {
        var c = a.a.ed;
        if (this.b(a) && (43 == c || 45 == c)) {
            b = a.map;
            c = 43 == c ? this.a : - this.a;
            Ri(b);
            var d = b.a().O();
            Hi(b, d, c, void 0, 100);
            a.U();
            b=!0
        }
    }
    return !b
};
function Yi() {
    this.a = 0;
    this.c = null;
    this.d = this.b = void 0
}
E(Yi, Ei);
Yi.prototype.xb = function(a) {
    var b=!1;
    if ("mousewheel" == a.type) {
        var b = a.map, c = a.a;
        this.c = a.d();
        this.a += c.ma / 3;
        s(this.b) || (this.b = sa());
        c = Math.max(80 - (sa() - this.b), 0);
        p.clearTimeout(this.d);
        this.d = p.setTimeout(y(this.e, this, b), c);
        a.U();
        b=!0
    }
    return !b
};
Yi.prototype.e = function(a) {
    var b = Zc(this.a, - 1, 1), c = a.a().O();
    Ri(a);
    Hi(a, c, - b, this.c, 250);
    this.a = 0;
    this.c = null;
    this.d = this.b = void 0
};
function Zi() {
    this.c=!1;
    this.i = {};
    this.targetTouches = []
}
E(Zi, Ei);
function $i(a) {
    for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)
        c += a[e].clientX, d += a[e].clientY;
    return [c / b, d / b]
}
Zi.prototype.f = da;
Zi.prototype.e = Pe;
Zi.prototype.g = Pe;
Zi.prototype.xb = function(a) {
    var b = a.map.a(), c = a.type;
    if (c === li || c === mi || c === ni)
        c = a.a.fa, s(c.targetTouches) ? this.targetTouches = c.targetTouches : s(c.pointerId) && (a.type == ni ? delete this.i[c.pointerId] : this.i[c.pointerId] = c, this.targetTouches = kc(this.i));
    this.c && (a.type == mi ? this.f(a) : a.type == ni && ((this.c = this.e(a)) || $e(b, - 1)));
    a.type == li && (a = this.g(a), !this.c && a && $e(b, 1), this.c = a);
    return !0
};
function aj(a) {
    Zi.call(this);
    this.a = (s(a) ? a : {}).kinetic;
    this.b = this.d = null;
    this.V=!1
}
E(aj, Zi);
aj.prototype.f = function(a) {
    var b = $i(this.targetTouches);
    if (null !== this.b) {
        this.a && this.a.a.push(b[0], b[1], sa());
        var c = this.b[0] - b[0], d = b[1] - this.b[1];
        a = a.map;
        var e = a.a().O(), f = yi(e), c = [c, d], d = f.resolution;
        c[0]*=d;
        c[1]*=d;
        jd(c, f.rotation);
        hd(c, f.center);
        Ri(a);
        e.Da(c)
    }
    this.b = b
};
aj.prototype.e = function(a) {
    a = a.map;
    var b = a.a();
    if (0 === this.targetTouches.length) {
        if (!this.V && this.a && xf(this.a)) {
            var c = (this.a.d - this.a.b) / this.a.e, d = this.a.c, e = b.a();
            this.d = yf(this.a, e);
            a.Ga(this.d);
            e = Si(a, e);
            c = di(a, [e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
            b.Da(c)
        }
        Ri(a);
        return !1
    }
    this.b = null;
    return !0
};
aj.prototype.g = function(a) {
    if (0 < this.targetTouches.length) {
        var b = a.map, c = b.a();
        this.b = null;
        Ri(b);
        null !== this.d && Oa(b.g, this.d) && (c.Da(a.b.A.center), this.d = null);
        this.a && (a = this.a, a.a.length = 0, a.c = 0, a.b = 0);
        this.V = 1 < this.targetTouches.length;
        return !0
    }
    return !1
};
function bj(a) {
    Zi.call(this);
    a = s(a) ? a : {};
    this.b = null;
    this.d = void 0;
    this.a=!1;
    this.V = 0;
    this.q = s(a.threshold) ? a.threshold : 0.3
}
E(bj, Zi);
bj.prototype.f = function(a) {
    var b = 0, c = this.targetTouches[0], d = this.targetTouches[1], c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
    s(this.d) && (b = c - this.d, this.V += b, !this.a && Math.abs(this.V) > this.q && (this.a=!0));
    this.d = c;
    a = a.map;
    c = Kh(a.b);
    d = $i(this.targetTouches);
    d[0] -= c.x;
    d[1] -= c.y;
    this.b = di(a, d);
    this.a && (c = a.a().O(), d = yi(c), Ri(a), Fi(a, c, d.rotation + b, this.b))
};
bj.prototype.e = function(a) {
    if (2 > this.targetTouches.length) {
        a = a.map;
        var b = a.a().O(), c = yi(b);
        if (this.a) {
            var c = c.rotation, d = this.b, c = b.lc(c, 0);
            Fi(a, b, c, d, 250)
        }
        return !1
    }
    return !0
};
bj.prototype.g = function(a) {
    return 2 <= this.targetTouches.length ? (a = a.map, this.b = null, this.d = void 0, this.a=!1, this.V = 0, Ri(a), !0) : !1
};
function cj() {
    Zi.call(this);
    this.b = null;
    this.a = void 0;
    this.d = 1
}
E(cj, Zi);
cj.prototype.f = function(a) {
    var b = 1, c = this.targetTouches[0], d = this.targetTouches[1], e = c.clientX - d.clientX, c = c.clientY - d.clientY, e = Math.sqrt(e * e + c * c);
    s(this.a) && (b = this.a / e);
    this.a = e;
    1 != b && (this.d = b);
    a = a.map;
    var e = a.a().O(), c = yi(e), d = Kh(a.b), f = $i(this.targetTouches);
    f[0] -= d.x;
    f[1] -= d.y;
    this.b = di(a, f);
    Ri(a);
    Ii(a, e, c.resolution * b, this.b)
};
cj.prototype.e = function(a) {
    if (2 > this.targetTouches.length) {
        a = a.map;
        var b = a.a().O(), c = yi(b).resolution, d = this.b, c = b.Ha(c, 0, this.d - 1);
        Ii(a, b, c, d, 400);
        return !1
    }
    return !0
};
cj.prototype.g = function(a) {
    return 2 <= this.targetTouches.length ? (a = a.map, this.b = null, this.a = void 0, this.d = 1, Ri(a), !0) : !1
};
function dj(a) {
    a = s(a) ? a : {};
    var b = new N, c = new wf( - 0.005, 0.05, 100);
    (s(a.altShiftDragRotate) ? a.altShiftDragRotate : 1) && b.push(new Ti);
    (s(a.doubleClickZoom) ? a.doubleClickZoom : 1) && b.push(new Ji({
        delta: a.zoomDelta
    }));
    (s(a.touchPan) ? a.touchPan : 1) && b.push(new aj({
        kinetic: c
    }));
    (s(a.touchRotate) ? a.touchRotate : 1) && b.push(new bj);
    (s(a.touchZoom) ? a.touchZoom : 1) && b.push(new cj);
    (s(a.dragPan) ? a.dragPan : 1) && b.push(new Qi({
        kinetic: c
    }));
    if (s(a.keyboard) ? a.keyboard : 1)
        b.push(new Wi), b.push(new Xi({
            delta: a.zoomDelta
        }));
    (s(a.mouseWheelZoom) ? a.mouseWheelZoom : 1) && b.push(new Yi);
    (s(a.shiftDragZoom) ? a.shiftDragZoom : 1) && b.push(new Vi);
    return b
};
function ej(a) {
    var b = s(a) ? a: {};
    a = sc(b);
    delete a.layers;
    b = b.layers;
    S.call(this, a);
    this.a = null;
    J(this, Uc("layers"), this.$e, !1, this);
    s(b) ? ia(b) && (b = new N(Ra(b))) : b = new N;
    this.c(b)
}
E(ej, S);
m = ej.prototype;
m.Cc = function() {
    this.b() && Me(this)
};
m.Td = function() {
    Me(this)
};
m.$e = function() {
    null !== this.a && (Ga(kc(this.a), Fc), this.a = null);
    var a = this.gb();
    if (null != a) {
        this.a = {
            add: J(a, "add", this.Ze, !1, this),
            remove: J(a, "remove", this.af, !1, this)
        };
        var a = a.a, b, c, d;
        b = 0;
        for (c = a.length; b < c; b++)
            d = a[b], this.a[x(d).toString()] = J(d, "change", this.Cc, !1, this)
    }
    Me(this)
};
m.Ze = function(a) {
    a = a.a;
    this.a[x(a).toString()] = J(a, "change", this.Cc, !1, this);
    Me(this)
};
m.af = function(a) {
    a = x(a.a).toString();
    Fc(this.a[a]);
    delete this.a[a];
    Me(this)
};
m.gb = function() {
    return this.get("layers")
};
ej.prototype.getLayers = ej.prototype.gb;
ej.prototype.c = function(a) {
    this.l("layers", a)
};
ej.prototype.setLayers = ej.prototype.c;
ej.prototype.Ob = function(a) {
    var b = s(a) ? a: [];
    this.gb().forEach(function(a) {
        a.Ob(b)
    });
    return b
};
ej.prototype.bd = function(a) {
    var b = s(a) ? a: {
        layers: [],
        qa: []
    }, c = b.layers.length;
    this.gb().forEach(function(a) {
        a.bd(b)
    });
    a = Ne(this);
    var d, e;
    for (d = b.qa.length; c < d; c++)
        e = b.qa[c], e.brightness = Zc(e.brightness + a.brightness, - 1, 1), e.contrast*=a.contrast, e.hue += a.hue, e.opacity*=a.opacity, e.saturation*=a.saturation, e.visible = e.visible && a.visible, e.maxResolution = Math.min(e.maxResolution, a.maxResolution), e.minResolution = Math.max(e.minResolution, a.minResolution);
    return b
};
ej.prototype.Ma = function() {
    return null === Ma(this.gb().a, function(a) {
        return !a.Ma()
    })
};
function fj(a) {
    return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
};
function gj(a) {
    Ld.call(this, {
        code: a,
        units: "m",
        extent: hj,
        global: !0
    })
}
E(gj, Ld);
var ij = 6378137 * Math.PI, hj = [ - ij, - ij, ij, ij], Zd = Ka(["EPSG:3857", "EPSG:102100", "EPSG:102113", "EPSG:900913", "urn:ogc:def:crs:EPSG:6.18:3:3857"], function(a) {
    return new gj(a)
});
function fe(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    s(b) || (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c)
        b[e] = 6378137 * Math.PI * a[e] / 180, b[e + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
    return b
}
function ge(a, b, c) {
    var d = a.length;
    c = 1 < c ? c : 2;
    s(b) || (b = 2 < c ? a.slice() : Array(d));
    for (var e = 0; e < d; e += c)
        b[e] = 180 * a[e] / (6378137 * Math.PI), b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
    return b
}
gj.prototype.b = function(a, b) {
    return a / ((Math.exp(b[1] / 6378137) + Math.exp( - (b[1] / 6378137))) / 2)
};
function jj(a, b) {
    Ld.call(this, {
        code: a,
        units: "degrees",
        extent: kj,
        axisOrientation: b,
        global: !0
    })
}
E(jj, Ld);
var kj = [ - 180, - 90, 180, 90], he = [new jj("CRS:84"), new jj("EPSG:4326", "neu"), new jj("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new jj("urn:ogc:def:crs:OGC:1.3:CRS84"), new jj("urn:ogc:def:crs:OGC:2:84"), new jj("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new jj("urn:x-ogc:def:crs:EPSG:4326", "neu")];
jj.prototype.b = function(a) {
    return a
};
function lj() {
    Ud(Zd);
    Ud(he);
    Yd()
};
function mj(a, b, c, d, e) {
    Nc.call(this);
    this.e = e;
    this.f = a;
    this.i = c;
    this.g = b;
    this.b = new Image;
    null !== d && (this.b.crossOrigin = d);
    this.d = {};
    this.c = null;
    this.a = 0
}
E(mj, Nc);
mj.prototype.ba = k("f");
function nj(a, b) {
    if (s(b)) {
        var c, d = x(b);
        if (d in a.d)
            return a.d[d];
        c = rc(a.d) ? a.b : a.b.cloneNode(!1);
        return a.d[d] = c
    }
    return a.b
}
mj.prototype.D = k("g");
mj.prototype.q = function() {
    this.a = 3;
    Ga(this.c, Fc);
    this.c = null;
    K(this, "change")
};
mj.prototype.k = function() {
    this.a = 2;
    Ga(this.c, Fc);
    this.c = null;
    K(this, "change")
};
function oj(a) {
    0 == a.a && (a.a = 1, a.c = [Cc(a.b, "error", a.q, !1, a), Cc(a.b, "load", a.k, !1, a)], a.b.src = a.i)
};
function pj(a) {
    this.minZoom = s(a.minZoom) ? a.minZoom : 0;
    this.a = a.resolutions;
    this.maxZoom = this.a.length - 1;
    this.d = s(a.origin) ? a.origin : null;
    this.f = null;
    s(a.origins) && (this.f = a.origins);
    this.b = null;
    s(a.tileSizes) && (this.b = a.tileSizes);
    this.e = s(a.tileSize) ? a.tileSize : null === this.b ? [256, 256] : null
}
var qj = new Xa(0, 0, 0);
m = pj.prototype;
m.uc = function(a, b, c, d, e) {
    e = rj(this, a, e);
    for (a = a.z - 1; a >= this.minZoom;) {
        if (b.call(c, a, sj(this, e, a, d)))
            return !0;
        --a
    }
    return !1
};
m.Le = k("minZoom");
m.Fb = function(a) {
    return null === this.d ? this.f[a] : this.d
};
m.D = function(a) {
    return this.a[a]
};
m.Pb = k("a");
m.yc = function(a, b, c) {
    return a.z < this.maxZoom ? (c = rj(this, a, c), sj(this, c, a.z + 1, b)) : null
};
function tj(a, b, c, d) {
    Sj(a, b[0], b[1], c, !1, qj);
    var e = qj.x, f = qj.y;
    Sj(a, b[2], b[3], c, !0, qj);
    return bb(e, qj.x, f, qj.y, d)
}
function sj(a, b, c, d) {
    c = a.D(c);
    return tj(a, b, c, d)
}
function Tj(a, b) {
    var c = a.Fb(b.z), d = a.D(b.z), e = a.Ba(b.z);
    return [c[0] + (b.x + 0.5) * e[0] * d, c[1] + (b.y + 0.5) * e[1] * d]
}
function rj(a, b, c) {
    var d = a.Fb(b.z), e = a.D(b.z);
    a = a.Ba(b.z);
    var f = d[0] + b.x * a[0] * e;
    b = d[1] + b.y * a[1] * e;
    return qd(f, f + a[0] * e, b, b + a[1] * e, c)
}
function Sj(a, b, c, d, e, f) {
    var g = pi(a.a, d, 0), h = d / a.D(g), l = a.Fb(g);
    a = a.Ba(g);
    b = h * (b - l[0]) / (d * a[0]);
    c = h * (c - l[1]) / (d * a[1]);
    e ? (b = Math.ceil(b) - 1, c = Math.ceil(c) - 1) : (b = Math.floor(b), c = Math.floor(c));
    e = b;
    s(f) ? (f.z = g, f.x = e, f.y = c) : f = new Xa(g, e, c);
    return f
}
function Uj(a, b, c) {
    c = a.D(c);
    return Sj(a, b[0], b[1], c, !1, void 0)
}
m.Ba = function(a) {
    return null === this.e ? this.b[a] : this.e
};
function Vj(a) {
    var b = a.e;
    if (null === b) {
        for (var b = a.ba(), c = null === b ? 360 * Kd.degrees / a.a() : Math.max(b[2] - b[0], b[3] - b[1]), d = s(void 0) ? void 0 : [256, 256], e = Array((s(void 0) ? NaN : 42) + 1), c = c / Math.max(d[0], d[1]), f = 0, g = e.length; f < g; ++f)
            e[f] = c / Math.pow(2, f);
        b = new pj({
            origin: null === b ? [0, 0]: vd(b),
            resolutions: e,
            tileSize: d
        });
        a.e = b
    }
    return b
};
function Wj(a) {
    We.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        projection: a.projection
    });
    this.C = s(a.opaque) ? a.opaque : !1;
    this.tileGrid = s(a.tileGrid) ? a.tileGrid : null
}
E(Wj, We);
m = Wj.prototype;
m.nd = Pe;
m.Zc = function(a, b, c, d) {
    var e=!0, f, g, h, l;
    for (h = d.a; h <= d.d; ++h)
        for (l = d.c; l <= d.b; ++l)
            g = this.eb(c, h, l), a[c] && a[c][g] || (f = b(c, h, l), null === f ? e=!1 : (a[c] || (a[c] = {}), a[c][g] = f));
    return e
};
m.eb = Za;
m.Pb = function() {
    return this.tileGrid.Pb()
};
m.Oe = k("tileGrid");
m.ne = da;
function Xj(a, b) {
    db.call(this);
    this.a = a;
    this.b = b
}
E(Xj, db);
Xj.prototype.Ta = function(a, b, c) {
    var d = this.b, e = d.ja();
    la(e.Ta) && e.Ta(a, this.a.f, function(a) {
        b(a, d)
    }, c)
};
Xj.prototype.k = function(a) {
    2 === a.target.a && (a = this.b, a.b() && a.Ma() && Yj(this.a.f))
};
function Zj(a, b) {
    b.nd() && a.ib.push(ra(function(a, b, e) {
        b = x(a).toString();
        a.Nb(e.gc[b])
    }, b))
}
function ak(a, b) {
    if (null != b) {
        var c, d, e;
        d = 0;
        for (e = b.length; d < e; ++d)
            c = b[d], a[x(c).toString()] = c
    }
}
function bk(a, b) {
    var c = b.f;
    s(c) && (a.Wd[c]=!0)
}
function ck(a, b, c, d) {
    b = x(b).toString();
    c = c.toString();
    b in a ? c in a[b] ? (a = a[b][c], d.a < a.a && (a.a = d.a), d.d > a.d && (a.d = d.d), d.c < a.c && (a.c = d.c), d.b > a.b && (a.b = d.b)) : a[b][c] = d : (a[b] = {}, a[b][c] = d)
}
function dk(a, b, c) {
    return function(d, e, f) {
        d = b.Db(d, e, f, c);
        return a(d) ? d : null
    }
}
function ek(a, b, c) {
    return [b * (Math.round(a[0] / b) + c[0]%2 / 2), b * (Math.round(a[1] / b) + c[1]%2 / 2)]
}
function fk(a, b, c, d, e, f, g, h, l) {
    var n = x(b).toString();
    n in a.Lb || (a.Lb[n] = {});
    var q = a.Lb[n];
    a = a.Uf;
    var r = c.minZoom, w, t, A, B, v, z;
    for (z = f; z >= r; --z)
        for (t = sj(c, e, z), A = c.D(z), B = t.a; B <= t.d; ++B)
            for (v = t.c; v <= t.b; ++v)
                f - z <= g ? (w = b.Db(z, B, v, d), 0 == w.a && (q[w.H.toString()]=!0, w.b()in a.c || Ie(a, [w, n, Tj(c, w.H), A])), s(h) && h.call(l, w)) : b.ne(z, B, v)
};
function gk(a, b) {
    db.call(this);
    this.f = b;
    this.d = {}
}
E(gk, db);
function hk(a) {
    var b = a.A, c = a.Dd;
    ye(c);
    Ce(c, a.size[0] / 2, a.size[1] / 2);
    De(c, 1 / b.resolution, - 1 / b.resolution);
    Ee(c, - b.rotation);
    Ce(c, - b.center[0], - b.center[1]);
    a = a.ee;
    var b = c[0], d = c[1], e = c[2], f = c[3], g = c[4], h = c[5], l = c[6], n = c[7], q = c[8], r = c[9], w = c[10], t = c[11], A = c[12], B = c[13], v = c[14], c = c[15], z = b * h - d * g, H = b * l - e * g, D = b * n - f * g, R = d * l - e * h, U = d * n - f * h, P = e * n - f * l, F = q * B - r * A, L = q * v - w * A, aa = q * c - t * A, va = r * v - w * B, ea = r * c - t * B, ha = w * c - t * v, Z = z * ha - H * ea + D * va + R * aa - U * L + P * F;
    0 != Z && (Z = 1 / Z, a[0] = (h * ha - l * ea + n * va) * Z, a[1] = ( - d * ha + e * ea - f * va) * Z, a[2] =
    (B * P - v * U + c * R) * Z, a[3] = ( - r * P + w * U - t * R) * Z, a[4] = ( - g * ha + l * aa - n * L) * Z, a[5] = (b * ha - e * aa + f * L) * Z, a[6] = ( - A * P + v * D - c * H) * Z, a[7] = (q * P - w * D + t * H) * Z, a[8] = (g * ea - h * aa + n * F) * Z, a[9] = ( - b * ea + d * aa - f * F) * Z, a[10] = (A * U - B * D + c * z) * Z, a[11] = ( - q * U + r * D - t * z) * Z, a[12] = ( - g * va + h * L - l * F) * Z, a[13] = (b * va - d * L + e * F) * Z, a[14] = ( - A * R + B * H - v * z) * Z, a[15] = (q * R - r * H + w * z) * Z)
}
m = gk.prototype;
m.mc = function(a) {
    return new Xj(this, a)
};
m.v = function() {
    gc(this.d, function(a) {
        hb(a)
    });
    gk.F.v.call(this)
};
m.wc = Re;
m.Ta = function(a, b, c, d) {
    function e(a, d) {
        g[Fa(b, d)] = a;
        --f;
        f || c(g)
    }
    for (var f = b.length, g = Array(f), h, l = 0; l < f; ++l)
        h = b[l], h = ik(this, h), la(h.Ta) ? h.Ta(a, e, d) : --f
};
function jk(a, b, c, d, e) {
    function f(a, b) {
        h[Fa(c, b)] = a;
        --g;
        g || d(h)
    }
    for (var g = c.length, h = Array(g), l, n = 0; n < g; ++n)
        l = c[n], l = ik(a, l), la(l.md) ? l.md(b, f, e) : --g
}
function ik(a, b) {
    var c = x(b).toString();
    if (c in a.d)
        return a.d[c];
    var d = a.mc(b);
    return a.d[c] = d
}
m.Jc = da;
m.Nf = function(a, b) {
    for (var c in this.d)
        if (!(null !== b && c in b.qa)) {
            var d = this.d[c];
            delete this.d[c];
            hb(d)
        }
};
function kk(a, b) {
    for (var c in a.d)
        if (!(c in b.qa)) {
            b.ib.push(y(a.Nf, a));
            break
        }
};
var lk = function() {
    if (!("HTMLCanvasElement"in p))
        return !1;
    try {
        return null !== zg("CANVAS").getContext("2d")
    } catch (a) {
        return !1
    }
}();
function mk(a, b) {
    var c = nk;
    return function(d, e, f) {
        return c(a, b, d, e, f)
    }
}
function ok() {};
function pk(a) {
    We.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        projection: a.projection
    });
    this.Eb = s(a.Eb) ? a.Eb : ok;
    this.i = s(a.crossOrigin) ? a.crossOrigin : null;
    this.b = s(a.resolutions) ? a.resolutions : null
}
E(pk, We);
function qk(a, b, c, d, e) {
    var f = null;
    d = a.Eb(b, d, e);
    s(d) && (f = new mj(b, c, d, a.i, a.d));
    return f
};
function rk(a) {
    Ye.call(this, a)
}
E(rk, Ye);
function sk(a) {
    Ye.call(this, a);
    this.C(s(a.preload) ? a.preload : 0)
}
E(sk, Ye);
sk.prototype.c = function() {
    return this.get("preload")
};
sk.prototype.getPreload = sk.prototype.c;
sk.prototype.C = function(a) {
    this.l("preload", a)
};
sk.prototype.setPreload = sk.prototype.C;
function tk() {}
function uk(a, b) {
    this.c = a;
    this.b = b
}
E(uk, tk);
uk.prototype.a = function(a, b, c) {
    var d = this.c.a(null != b ? b : a);
    if (!d ||!la(d))
        throw Error("Expected function but found " + d);
    for (var e = s(c) ? c : {}, f = this.b.length, g = Array(f), h = 0; h < f; ++h)
        g[h] = this.b[h].a(a, b, c);
    return d.apply(e, g)
};
var vk = {
    ug: "\x3d\x3d",
    Qg: "!\x3d",
    Vg: "\x3d\x3d\x3d",
    Wg: "!\x3d\x3d",
    xg: "\x3e",
    Eg: "\x3c",
    yg: "\x3e\x3d",
    Fg: "\x3c\x3d"
};
function wk(a, b, c) {
    this.b = a;
    this.Na = b;
    this.Qa = c
}
E(wk, tk);
var xk = function() {
    var a = {}, b;
    for (b in vk)
        a[vk[b]]=!0;
    return function(b) {
        return !!a[b]
    }
}();
wk.prototype.a = function(a, b, c) {
    var d;
    d = this.Qa.a(a, b, c);
    a = this.Na.a(a, b, c);
    b = this.b;
    if ("\x3d\x3d" === b)
        d = a == d;
    else if ("!\x3d" === b)
        d = a != d;
    else if ("\x3d\x3d\x3d" === b)
        d = a === d;
    else if ("!\x3d\x3d" === b)
        d = a !== d;
    else if ("\x3e" === b)
        d = a > d;
    else if ("\x3c" === b)
        d = a < d;
    else if ("\x3e\x3d" === b)
        d = a >= d;
    else if ("\x3c\x3d" === b)
        d = a <= d;
    else 
        throw Error("Unsupported comparison operator: " + this.b);
    return d
};
function yk(a) {
    this.b = a
}
E(yk, tk);
yk.prototype.a = function(a) {
    if (null == a)
        throw Error("Attempt to evaluate identifier with no scope");
    return a[this.b]
};
function V(a) {
    this.$a = a
}
E(V, tk);
V.prototype.a = k("$a");
var zk = {
    fg: "\x26\x26",
    Rg: "||"
};
function Ak(a, b, c) {
    this.b = a;
    this.Na = b;
    this.Qa = c
}
E(Ak, tk);
var Bk = function() {
    var a = {}, b;
    for (b in zk)
        a[zk[b]]=!0;
    return function(b) {
        return !!a[b]
    }
}();
Ak.prototype.a = function(a, b, c) {
    var d;
    d = this.Qa.a(a, b, c);
    a = this.Na.a(a, b, c);
    if ("\x26\x26" === this.b)
        d = a && d;
    else if ("||" === this.b)
        d = a || d;
    else 
        throw Error("Unsupported logical operator: " + this.b);
    return d
};
var Ck = {
    eg: "+",
    Xg: "-",
    Mg: "*",
    ng: "/",
    Ig: "%"
};
function Dk(a, b, c) {
    this.b = a;
    this.Na = b;
    this.Qa = c
}
E(Dk, tk);
var Ek = function() {
    var a = {}, b;
    for (b in Ck)
        a[Ck[b]]=!0;
    return function(b) {
        return !!a[b]
    }
}();
Dk.prototype.a = function(a, b, c) {
    var d;
    d = this.Qa.a(a, b, c);
    a = this.Na.a(a, b, c);
    b = this.b;
    if ("+" === b)
        d = a + d;
    else if ("-" === b)
        d = Number(a) - Number(d);
    else if ("*" === b)
        d = Number(a) * Number(d);
    else if ("/" === b)
        d = Number(a) / Number(d);
    else if ("%" === b)
        d = Number(a)%Number(d);
    else 
        throw Error("Unsupported math operator: " + this.b);
    return d
};
function Fk(a, b) {
    this.b = a;
    this.c = b
}
E(Fk, tk);
Fk.prototype.a = function(a, b, c) {
    a = this.b.a(a, b, c);
    if (!ma(a))
        throw Error("Expected member expression to evaluate to an object but got " + a);
    return this.c.a(a)
};
function Gk(a) {
    this.b = a
}
E(Gk, tk);
Gk.prototype.a = function(a, b, c) {
    return !this.b.a(a, b, c)
};
function Hk(a) {
    this.b = a;
    this.c = a.length;
    this.d = this.a = 0
}
function Ik(a, b) {
    if (!a.match(b))
        throw new Jk({
            type: "Unknown",
            value: a.b[a.a],
            index: a.a
        });
    a.a = a.d
}
function Kk(a, b) {
    a.a += b
}
function Lk(a) {
    return 48 <= a && 57 >= a
}
function Mk(a) {
    return 36 === a || 95 === a || 65 <= a && 90 >= a || 97 <= a && 122 >= a
}
function Nk(a) {
    return a.b.charCodeAt(a.a + 0)
}
Hk.prototype.match = function(a) {
    var b = Ok(this);
    return "Punctuator" === b.type && b.value === a
};
function Pk(a) {
    var b;
    for (b = NaN; a.a < a.c;)
        if (b = Nk(a), 32 === b || 9 === b || 11 === b || 12 === b || 160 === b || 5760 <= b && 0 < "\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005" + "\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\ufeff".indexOf(String.fromCharCode(b)))
            Kk(a, 1);
        else 
            break;
    if (a.a >= a.c)
        a = {
            type: "\x3cend\x3e",
            value: null,
            index: a.a
        };
    else if (40 === b || 41 === b)
        a = Qk(a, b);
    else if (39 === b || 34 === b) {
        var c = a.a;
        Kk(a, 1);
        for (var d = "", e; a.a < a.c;) {
            e = Nk(a);
            Kk(a, 1);
            if (e === b) {
                b = 0;
                break
            }
            92 === e ? (d += a.b[a.a], Kk(a, 1)) : d += String.fromCharCode(e)
        }
        if (0 !==
        b)
            throw new Jk(Ok(a));
        a = {
            type: "String",
            value: d,
            index: c
        }
    } else if (Mk(b)) {
        c = b;
        b = a.a;
        for (Kk(a, 1);
        a.a < a.c;
        )if (c = Nk(a), Mk(c) || 48 <= c && 57 >= c)
            Kk(a, 1);
        else 
            break;
        a = a.b.slice(b, a.a);
        a = {
            type: 1 === a.length ? "Identifier": "break" === a || "case" === a || "catch" === a || "continue" === a || "debugger" === a || "default" === a || "delete" === a || "do" === a || "else" === a || "finally" === a || "for" === a || "function" === a || "if" === a || "in" === a || "instanceof" === a || "new" === a || "return" === a || "switch" === a || "this" === a || "throw" === a || "try" === a || "typeof" === a || "var" ===
            a || "void" === a || "while" === a || "with" === a ? "Keyword": "null" === a ? "Null": "true" === a || "false" === a ? "Boolean": "Identifier",
            value: a,
            index: b
        }
    } else 
        a = 46 === b ? Lk(a.b.charCodeAt(a.a + 1)) ? Rk(a, b) : Qk(a, b) : Lk(b) ? Rk(a, b) : Qk(a, b);
    return a
}
function Ok(a) {
    var b = a.a, c = Pk(a);
    a.d = a.a;
    a.a = b;
    return c
}
function Rk(a, b) {
    var c = "", d = a.a;
    if (46 !== b) {
        if (48 === b) {
            var e = a.b.charCodeAt(a.a + 1);
            if (88 === e || 120 === e) {
                Kk(a, 2);
                c = Nk(a);
                d = "";
                for (e = a.a - 2; a.a < a.c && (Lk(c) || 97 <= c && 102 >= c || 65 <= c && 70 >= c);)
                    d += String.fromCharCode(c), Kk(a, 1), c = Nk(a);
                if (0 === d.length || Mk(c))
                    throw new Jk({
                        type: "Unknown",
                        value: String.fromCharCode(c),
                        index: a.a
                    });
                return {
                    type: "Numeric",
                    value: parseInt("0x" + d, 16),
                    index: e
                }
            }
            if (48 <= e && 55 >= e) {
                Kk(a, 1);
                d = "0" + String.fromCharCode(e);
                e = a.a - 1;
                for (Kk(a, 1);
                a.a < a.c;
                ) {
                    c = Nk(a);
                    if (!(48 <= c && 55 >= c))
                        break;
                    d += String.fromCharCode(c);
                    Kk(a, 1)
                }
                c = Nk(a);
                if (Mk(c) || Lk(c))
                    throw new Jk({
                        type: "Unknown",
                        value: String.fromCharCode(c),
                        index: a.a
                    });
                return {
                    type: "Numeric",
                    value: parseInt(d, 8),
                    index: e
                }
            }
            if (Lk(e))
                throw new Jk({
                    type: "Unknown",
                    value: String.fromCharCode(e),
                    index: a.a
                });
        }
        for (; Lk(b);)
            c += String.fromCharCode(b), Kk(a, 1), b = Nk(a)
    }
    if (46 === b)
        for (c += String.fromCharCode(b), Kk(a, 1), b = Nk(a); Lk(b);)
            c += String.fromCharCode(b), Kk(a, 1), b = Nk(a);
    if (69 === b || 101 === b) {
        c += "E";
        Kk(a, 1);
        b = Nk(a);
        if (43 === b || 45 === b)
            c += String.fromCharCode(b), Kk(a, 1), b = Nk(a);
        if (!Lk(b))
            throw new Jk({
                type: "Unknown",
                value: String.fromCharCode(b),
                index: a.a
            });
        for (; Lk(b);)
            c += String.fromCharCode(b), Kk(a, 1), b = Nk(a)
    }
    if (Mk(b))
        throw new Jk({
            type: "Unknown",
            value: String.fromCharCode(b),
            index: a.a
        });
    return {
        type: "Numeric",
        value: parseFloat(c),
        index: d
    }
}
function Qk(a, b) {
    var c = a.a;
    if (46 === b || 40 === b || 41 === b || 44 === b || 43 === b || 45 === b || 42 === b || 47 === b || 37 === b || 126 === b)
        return Kk(a, 1), {
            type: "Punctuator",
            value: String.fromCharCode(b),
            index: c
        };
    var d = a.b.charCodeAt(a.a + 1);
    if (61 === d) {
        if (33 === b || 61 === b)
            return Kk(a, 2), 61 === Nk(a) ? (Kk(a, 1), {
                type: "Punctuator",
                value: String.fromCharCode(b) + "\x3d\x3d",
                index: c
            }) : {
                type: "Punctuator",
                value: String.fromCharCode(b) + "\x3d",
                index: c
            };
        if (62 === b || 60 === b)
            return Kk(a, 2), {
                type: "Punctuator",
                value: String.fromCharCode(b) + "\x3d",
                index: c
            }
    }
    if (b ===
    d && (124 === b || 38 === b))
        return Kk(a, 2), d = String.fromCharCode(b), {
            type: "Punctuator",
            value: d + d,
            index: c
        };
    if (62 === b || 60 === b || 33 === b || 38 === b || 124 === b)
        return Kk(a, 1), {
            type: "Punctuator",
            value: String.fromCharCode(b),
            index: c
        };
    throw new Jk({
        type: "Unknown",
        value: String.fromCharCode(b),
        index: a.a
    });
}
function Jk(a, b) {
    ta.call(this, s(b) ? b : "Unexpected token " + a.value + " at index " + a.index);
    this.a = a
}
E(Jk, ta);
Jk.prototype.name = "UnexpectedToken";
function Sk() {}
function Tk(a) {
    var b = 0;
    if ("Punctuator" !== a.type)
        return b;
    switch (a.value) {
    case "||":
        b = 1;
        break;
    case "\x26\x26":
        b = 2;
        break;
    case "\x3d\x3d":
    case "!\x3d":
    case "\x3d\x3d\x3d":
    case "!\x3d\x3d":
        b = 3;
        break;
    case "\x3e":
    case "\x3c":
    case "\x3e\x3d":
    case "\x3c\x3d":
        b = 4;
        break;
    case "+":
    case "-":
        b = 5;
        break;
    case "*":
    case "/":
    case "%":
        b = 6
    }
    return b
}
function Uk(a, b, c) {
    if (xk(a))
        a = new wk(a, b, c);
    else if (Bk(a))
        a = new Ak(a, b, c);
    else if (Ek(a))
        a = new Dk(a, b, c);
    else 
        throw Error("Unsupported binary operator: " + a);
    return a
}
function Vk(a) {
    return new V(a)
}
function Wk(a) {
    var b = new Hk(a);
    a = Xk(new Sk, b);
    b = Ok(b);
    if ("\x3cend\x3e" !== b.type)
        throw new Jk(b);
    return a
}
function Xk(a, b) {
    var c = Yk(a, b), d = Ok(b), e = Tk(d);
    if (0 === e)
        return c;
    b.a = b.d;
    for (var f = Yk(a, b), g = [c, d, f], e = Tk(Ok(b)); 0 < e;) {
        for (; 2 < g.length && e <= Tk(g[g.length - 2]);)
            f = g.pop(), d = g.pop(), c = g.pop(), g.push(Uk(d.value, c, f));
        g.push(Pk(b));
        g.push(Yk(a, b));
        e = Tk(Ok(b))
    }
    c = g.length - 1;
    for (d = g[c]; 1 < c;)
        d = Uk(g[c - 1].value, g[c - 2], d), c -= 2;
    return d
}
function Zk(a, b) {
    var c;
    c = Ok(b);
    if ("(" === c.value)
        Ik(b, "("), c = Xk(a, b), Ik(b, ")");
    else {
        b.a = b.d;
        var d = c.type;
        if ("Identifier" === d)
            c = new yk(c.value);
        else if ("String" === d || "Numeric" === d)
            c = Vk(c.value);
        else if ("Boolean" === d)
            c = Vk("true" === c.value);
        else if ("Null" === d)
            c = Vk(null);
        else 
            throw new Jk(c);
    }
    d = Ok(b);
    if ("(" === d.value) {
        if (!(c instanceof yk))
            throw new Jk(d);
        d = [];
        Ik(b, "(");
        if (!b.match(")"))
            for (; ;) {
                d.push(Xk(a, b));
                if (b.match(")"))
                    break;
                    Ik(b, ",")
                }
        b.a = b.d;
        c = new uk(c, d)
    } else 
        for (; "." === d.value;) {
            d = b;
            Ik(d, ".");
            d = Pk(d);
            if ("Identifier" !== d.type && "Keyword" !== d.type && "Boolean" !== d.type && "Null" !== d.type)
                throw new Jk(d);
                c = new Fk(c, new yk(String(d.value)));
                d = Ok(b)
        }
    return c
}
function Yk(a, b) {
    var c, d = Ok(b);
    if ("Punctuator" !== d.type)
        c = Zk(a, b);
    else if ("!" === d.value || "-" === d.value || "+" === d.value) {
        b.a = b.d;
        c = Yk(a, b);
        if ("!" === d.value)
            d = new Gk(c);
        else if (c instanceof V)
            d = "+" === d.value ? Vk( + c.a()) : Vk( - c.a());
        else 
            throw new Jk(d);
        c = d
    } else 
        c = Zk(a, b);
    return c
};
function $k(a, b) {
    return s(b) ? a.a(b.ob(), al, b) : a.a()
}
var al = {
    concat: function(a) {
        for (var b = "", c = 0, d = arguments.length; c < d; ++c)
            b += String(arguments[c]);
        return b
    },
    extent: function(a, b, c, d, e, f) {
        e=!1;
        (f = s(f) ? this.get(f) : this.G()) && (e = zd(f.ua(), [a, b, c, d]));
        return e
    },
    fid: function(a) {
        var b=!1, c = this.Ja;
        if (s(c))
            for (var d = 0, e = arguments.length; d < e; ++d)
                if (arguments[d] === c) {
                    b=!0;
                    break
                }
        return b
    },
    like: function(a, b, c, d, e, f) {
        if ("." == c)
            throw Error('"." is an unsupported wildCard character for the "like" function');
        c = s(c) ? c : "*";
        d = s(d) ? d : ".";
        e = s(e) ? e : "!";
        b = b.replace(RegExp("\\" +
        e + "(.|$)", "g"), "\\$1");
        b = b.replace(RegExp("\\" + d, "g"), ".");
        b = b.replace(RegExp("\\" + c, "g"), ".*");
        b = b.replace(RegExp("\\\\.\\*", "g"), "\\" + c);
        b = b.replace(RegExp("\\\\\\.", "g"), "\\" + d);
        return RegExp(b, !1 === f ? "gi" : "g").test(a)
    },
    ieq: function(a, b) {
        return u(a) && u(b) ? a.toUpperCase() == b.toUpperCase() : a == b
    },
    ineq: function(a, b) {
        return u(a) && u(b) ? a.toUpperCase() != b.toUpperCase() : a != b
    },
    geometryType: function(a) {
        var b=!1, c = this.G();
        c && (b = c.N() === a);
        return b
    },
    renderIntent: function(a) {
        return this.a == a
    },
    intersects: function() {
        throw Error("Spatial function not implemented: intersects");
    },
    within: function() {
        throw Error("Spatial function not implemented: within");
    },
    contains: function() {
        throw Error("Spatial function not implemented: contains");
    },
    dwithin: function() {
        throw Error("Spatial function not implemented: dwithin");
    }
};
function bl() {}
bl.prototype.a = null;
function cl(a) {
    var b;
    (b = a.a) || (b = {}, dl(a) && (b[0]=!0, b[1]=!0), b = a.a = b);
    return b
};
var el;
function fl() {}
E(fl, bl);
function gl(a) {
    return (a = dl(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function dl(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.b = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b
}
el = new fl;
function hl(a) {
    Nc.call(this);
    this.la = new Bf;
    this.q = a || null;
    this.b=!1;
    this.i = this.a = null;
    this.ia = this.r = "";
    this.d = 0;
    this.f = "";
    this.c = this.C = this.p = this.k=!1;
    this.g = 0;
    this.e = null;
    this.R = il;
    this.t = this.sa=!1
}
E(hl, Nc);
var il = "", jl = /^https?$/i, kl = ["POST", "PUT"], ll = [];
function ml(a, b) {
    var c = new hl;
    ll.push(c);
    b && c.Xa("complete", b);
    c.Ia.add("ready", c.W, !0, void 0, void 0);
    nl(c, a, void 0, void 0, void 0)
}
hl.prototype.W = function() {
    this.pc();
    Oa(ll, this)
};
function nl(a, b, c, d, e) {
    if (a.a)
        throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + a.r + "; newUri\x3d" + b);
    c = c ? c.toUpperCase() : "GET";
    a.r = b;
    a.f = "";
    a.d = 0;
    a.ia = c;
    a.k=!1;
    a.b=!0;
    a.a = a.q ? gl(a.q) : gl(el);
    a.i = a.q ? cl(a.q) : cl(el);
    a.a.onreadystatechange = y(a.K, a);
    try {
        a.C=!0, a.a.open(c, b, !0), a.C=!1
    } catch (f) {
        pl(a, f);
        return 
    }
    b = d || "";
    var g = a.la.ea();
    e && Af(e, function(a, b) {
        Cf(g, b, a)
    });
    e = Ma(g.Ka(), ql);
    d = p.FormData && b instanceof p.FormData;
    !(0 <= Fa(kl, c)) || (e || d) || Cf(g, "Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
    Af(g, function(a, b) {
        this.a.setRequestHeader(b, a)
    }, a);
    a.R && (a.a.responseType = a.R);
    "withCredentials"in a.a && (a.a.withCredentials = a.sa);
    try {
        rl(a), 0 < a.g && (a.t = G && Mb(9) && ka(a.a.timeout) && s(a.a.ontimeout), a.t ? (a.a.timeout = a.g, a.a.ontimeout = y(a.yb, a)) : a.e = hg(a.yb, a.g, a)), a.p=!0, a.a.send(b), a.p=!1
    } catch (h) {
        pl(a, h)
    }
}
function ql(a) {
    return "content-type" == a.toLowerCase()
}
hl.prototype.yb = function() {
    "undefined" != typeof ca && this.a && (this.f = "Timed out after " + this.g + "ms, aborting", this.d = 8, K(this, "timeout"), this.a && this.b && (this.b=!1, this.c=!0, this.a.abort(), this.c=!1, this.d = 8, K(this, "complete"), K(this, "abort"), sl(this)))
};
function pl(a, b) {
    a.b=!1;
    a.a && (a.c=!0, a.a.abort(), a.c=!1);
    a.f = b;
    a.d = 5;
    tl(a);
    sl(a)
}
function tl(a) {
    a.k || (a.k=!0, K(a, "complete"), K(a, "error"))
}
hl.prototype.v = function() {
    this.a && (this.b && (this.b=!1, this.c=!0, this.a.abort(), this.c=!1), sl(this, !0));
    hl.F.v.call(this)
};
hl.prototype.K = function() {
    if (!this.$b && this.b && "undefined" != typeof ca && (!this.i[1] || 4 != ul(this) || 2 != vl(this)))
        if (this.p && 4 == ul(this))
            hg(this.K, 0, this);
        else if (K(this, "readystatechange"), 4 == ul(this)) {
            this.b=!1;
            try {
                if (wl(this))
                    K(this, "complete"), K(this, "success");
                else {
                    this.d = 6;
                    var a;
                    try {
                        a = 2 < ul(this) ? this.a.statusText : ""
                    } catch (b) {
                        a = ""
                    }
                    this.f = a + " [" + vl(this) + "]";
                    tl(this)
                }
            } finally {
                sl(this)
            }
    }
};
function sl(a, b) {
    if (a.a) {
        rl(a);
        var c = a.a, d = a.i[0] ? da: null;
        a.a = null;
        a.i = null;
        b || K(a, "ready");
        try {
            c.onreadystatechange = d
        } catch (e) {}
    }
}
function rl(a) {
    a.a && a.t && (a.a.ontimeout = null);
    ka(a.e) && (p.clearTimeout(a.e), a.e = null)
}
function wl(a) {
    var b = vl(a), c;
    a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        c=!0;
        break a;
    default:
        c=!1
    }
    if (!c) {
        if (b = 0 === b)
            a = Gf(String(a.r))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b=!jl.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}
function ul(a) {
    return a.a ? a.a.readyState : 0
}
function vl(a) {
    try {
        return 2 < ul(a) ? a.a.status : - 1
    } catch (b) {
        return - 1
    }
}
function xl(a) {
    try {
        return a.a ? a.a.responseText : ""
    } catch (b) {
        return ""
    }
};
function yl(a) {
    this.b = s(a.data) ? a.data : null;
    this.a = 0;
    this.i = s(a.parser) ? a.parser : null;
    this.e = a.url;
    We.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        projection: a.projection
    })
}
E(yl, We);
function zl(a, b, c, d) {
    s(a.e) && 0 == a.a ? (a.a = 1, ml(a.e, y(function(a) {
        a = a.target;
        wl(a) ? (Al(b, xl(a), this.i, c), this.a = 2, s(d) && d()) : this.a = 3
    }, a))) : null !== a.b && (Al(b, a.b, a.i, c), a.b = null, a.a = 2);
    return a.a
};
function Bl(a) {
    this.c = s(a) ? a : 6;
    this.a = Math.floor(this.c / 2);
    this.b = {
        extent: od(),
        n: []
    }
}
function Cl(a) {
    var b = a.n.length, c = a.extent;
    if (0 === b)
        c[0] = c[1] = Infinity, c[2] = c[3] =- Infinity;
    else {
        var d = a.n[0].extent;
        c[0] = d[0];
        c[2] = d[2];
        c[1] = d[1];
        c[3] = d[3];
        for (d = 1; d < b; ++d)
            ud(c, a.n[d].extent)
    }
}
function Dl(a, b, c) {
    var d = (a + b) / 2;
    a*=b;
    return a * c / (a / (d * d))
}
function El(a, b, c) {
    var d;
    if (0 === c.n.length)
        c.extent = b.extent.slice(), c.n.push(b);
    else {
        var e =- 1, f = [], g;
        f.push(c);
        c = c.n;
        do {
            - 1 != e && (f.push(c[e]), c = c[e].n, e =- 1);
            for (var h = c.length - 1; 0 <= h; --h) {
                var l = c[h];
                if (s(l.wb)) {
                    e =- 1;
                    break
                }
                var n = Dl(l.extent[2] - l.extent[0], l.extent[3] - l.extent[1], l.n.length + 1), l = Dl((l.extent[2] > b.extent[2] ? l.extent[2] : b.extent[2]) - (l.extent[0] < b.extent[0] ? l.extent[0] : b.extent[0]), (l.extent[3] > b.extent[3] ? l.extent[3] : b.extent[3]) - (l.extent[1] < b.extent[1] ? l.extent[1] : b.extent[1]), l.n.length +
                2);
                if (0 > e || Math.abs(l - n) < g)
                    g = Math.abs(l - n), e = h
            }
        }
        while ( - 1 != e);
        do {
            if (d && s(d.n) && 0 === d.n.length)
                for (e = d, d = f.pop(), g = 0, c = d.n.length; g < c; ++g) {
                    if (d.n[g] === e || 0 === d.n[g].n.length) {
                        d.n.splice(g, 1);
                        break
                    }
                } else 
                    d = f.pop();
            e = ia(b);
            if (s(b.wb) || s(b.n) || e) {
                if (e) {
                    e = 0;
                    for (g = b.length; e < g; ++e)
                        ud(d.extent, b[e].extent);
                    d.n = d.n.concat(b)
                } else 
                    ud(d.extent, b.extent), d.n.push(b);
                if (d.n.length <= a.c)
                    b = {
                        extent: d.extent.slice()
                    };
                else {
                    b = a;
                    g = e = d.n;
                    c = g.length - 1;
                    for (var h = 0, n = g.length - 1, l = 0, q = void 0, r = void 0, q = g.length - 2; 0 <= q; --q)
                        r =
                        g[q], r.extent[0] > g[h].extent[0] ? h = q : r.extent[2] < g[c].extent[1] && (c = q), r.extent[1] > g[l].extent[1] ? l = q : r.extent[3] < g[n].extent[3] && (n = q);
                    Math.abs(g[c].extent[2] - g[h].extent[0]) > Math.abs(g[n].extent[3] - g[l].extent[1]) ? c > h ? (q = g.splice(c, 1)[0], r = g.splice(h, 1)[0]) : (r = g.splice(h, 1)[0], q = g.splice(c, 1)[0]) : n > l ? (q = g.splice(n, 1)[0], r = g.splice(l, 1)[0]) : (r = g.splice(l, 1)[0], q = g.splice(n, 1)[0]);
                    for (g = [{
                        extent: q.extent.slice(),
                        n: [q]
                    }, {
                        extent: r.extent.slice(),
                        n: [r]
                    }
                    ]; 0 < e.length;) {
                        c = b;
                        for (var h = e, n = g[0], l = g[1], r = Dl(n.extent[2] -
                        n.extent[0], n.extent[3] - n.extent[1], n.n.length + 1), w = Dl(l.extent[2] - l.extent[0], l.extent[3] - l.extent[1], l.n.length + 1), t = void 0, A = void 0, q = void 0, B = h.length - 1; 0 <= B; --B) {
                            var v = h[B], z = [n.extent[0] < v.extent[0] ? n.extent[0]: v.extent[0], n.extent[2] > v.extent[2] ? n.extent[2]: v.extent[2], n.extent[1] < v.extent[1] ? n.extent[1]: v.extent[1], n.extent[3] > v.extent[3] ? n.extent[3]: v.extent[3]], z = Math.abs(Dl(z[1] - z[0], z[3] - z[2], n.n.length + 2) - r), v = [l.extent[0] < v.extent[0] ? l.extent[0]: v.extent[0], l.extent[2] > v.extent[2] ? l.extent[2]:
                            v.extent[2], l.extent[1] < v.extent[1] ? l.extent[1]: v.extent[1], l.extent[3] > v.extent[3] ? l.extent[3]: v.extent[3]], v = Math.abs(Dl(v[1] - v[0], v[3] - v[2], l.n.length + 2) - w), H = Math.abs(v - z);
                            if (!A ||!t || H < t)
                                A = B, t = H, q = v < z ? l : n
                        }
                        r = h.splice(A, 1)[0];
                        n.n.length + h.length + 1 <= c.a ? (n.n.push(r), ud(n.extent, r.extent)) : l.n.length + h.length + 1 <= c.a ? (l.n.push(r), ud(l.extent, r.extent)) : (q.n.push(r), ud(q.extent, r.extent))
                    }
                    b = e = g;
                    1 > f.length && (d.n.push(e[0]), f.push(d), b = e[1])
                }
            } else 
                ud(d.extent, b.extent), b = {
                    extent: d.extent.slice()
                }
        }
        while (0 <
        f.length)
        }
}
Bl.prototype.remove = function(a, b) {
    arguments[0] = {
        extent: a
    };
    switch (arguments.length) {
    case 1:
        arguments[1]=!1;
    case 2:
        arguments[2] = this.b;
    default:
        arguments.length = 3
    }
    if (!1 === arguments[1]) {
        var c = 0, d = [];
        do 
            c = d.length, d = d.concat(this.d.apply(this, arguments));
        while (c != d.length);
        return d
    }
    return this.d.apply(this, arguments)
};
Bl.prototype.d = function(a, b, c) {
    var d = [], e = [], f = [];
    if (!a ||!zd(a.extent, c.extent))
        return f;
    a = a.extent.slice();
    var g;
    e.push(c.n.length);
    d.push(c);
    do {
        c = d.pop();
        var h = e.pop() - 1;
        if (s(b))
            for (; 0 <= h;) {
                var l = c.n[h];
                if (zd(a, l.extent))
                    if (b && s(l.wb) && l.wb === b ||!b && (s(l.wb) || sd(a, l.extent))) {
                        s(l.n) ? (f = Fl(l, !0, [], l), c.n.splice(h, 1)) : f = c.n.splice(h, 1);
                        Cl(c);
                        b = void 0;
                        c.n.length < this.a && (g = Fl(c, !0, [], c));
                        break
                    } else 
                        s(l.n) && (e.push(h), d.push(c), c = l, h = l.n.length);
                        h -= 1
            } else if (s(g)) {
            c.n.splice(h + 1, 1);
            0 < c.n.length && Cl(c);
            h = 0;
            for (l = g.length; h < l; ++h)
                El(this, g[h], c);
            g.length = 0;
            0 === d.length && 1 >= c.n.length ? (g = Fl(c, !0, g, c), c.n.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.n.length < this.a ? (g = Fl(c, !0, g, c), c.n.length = 0) : g = void 0
        } else 
            Cl(c)
    }
    while (0 < d.length);
    return f
};
function Fl(a, b, c, d, e, f) {
    var g = {}, h = [];
    if (!zd(a.extent, d.extent))
        return c;
    h.push(d.n);
    do {
        d = h.pop();
        for (var l = d.length - 1; 0 <= l; --l) {
            var n = d[l];
            zd(a.extent, n.extent) && (s(n.n) ? h.push(n.n) : s(n.wb) && (b ? c.push(n) : s(e) && n.type != e || (n = n.wb, s(f) ? g[x(n).toString()] = n : c.push(n))))
        }
    }
    while (0 < h.length);
    return s(f) ? g : c
};
function Gl() {};
function Hl(a) {
    this.fillColor = a.fillColor;
    this.oa = a.oa;
    this.strokeColor = a.strokeColor;
    this.ra = a.ra;
    this.Fa = a.Fa
}
E(Hl, Gl);
Hl.prototype.a = function(a) {
    return this.fillColor == a.fillColor && this.oa == a.oa && this.strokeColor == a.strokeColor && this.ra == a.ra && this.Fa == a.Fa
};
function Il() {};
function Jl(a) {
    a = a || {};
    this.a = null != a.color ? a.color instanceof tk ? a.color : new V(a.color) : new V(Kl);
    this.b = null != a.opacity ? a.opacity instanceof tk ? a.opacity : new V(a.opacity) : new V(Ll)
}
E(Jl, Il);
Jl.prototype.cb = function(a) {
    var b;
    a instanceof O && (b = a, a = (a = b.G()) ? a.N() : null);
    var c = null;
    if ("polygon" === a || "multipolygon" === a)
        a = $k(this.a, b), b = Number($k(this.b, b)), c = new Hl({
            fillColor: a,
            oa: b
        });
    return c
};
var Kl = "#ffffff", Ll = 0.4;
function Ml(a) {
    var b = null;
    s(a.filter) && (b = u(a.filter) ? Wk(a.filter) : a.filter);
    this.a = b;
    this.b = s(a.symbolizers) ? a.symbolizers : []
}
Ml.prototype.Cb = k("b");
function Nl() {}
E(Nl, Gl);
var Ol = {
    jg: "circle"
};
function Pl(a) {
    this.type = a.type;
    this.size = a.size;
    this.fillColor = a.fillColor;
    this.oa = a.oa;
    this.strokeColor = a.strokeColor;
    this.ra = a.ra;
    this.Fa = a.Fa
}
E(Pl, Nl);
Pl.prototype.a = function(a) {
    return this.type == a.type && this.size == a.size && this.fillColor == a.fillColor && this.oa == a.oa && this.strokeColor == a.strokeColor && this.ra == a.ra && this.Fa == a.Fa
};
function Ql(a) {
    this.color = a.color;
    this.opacity = a.opacity;
    this.width = a.width
}
E(Ql, Gl);
Ql.prototype.a = function(a) {
    return this.color == a.color && this.opacity == a.opacity && this.width == a.width
};
function Rl(a) {
    a = a || {};
    this.a = null != a.color ? a.color instanceof tk ? a.color : new V(a.color) : new V(Sl);
    this.b = null != a.opacity ? a.opacity instanceof tk ? a.opacity : new V(a.opacity) : new V(Tl);
    this.c = null != a.width ? a.width instanceof tk ? a.width : new V(a.width) : new V(Ul)
}
E(Rl, Il);
Rl.prototype.cb = function(a) {
    var b;
    a instanceof O && (b = a, a = (a = b.G()) ? a.N() : null);
    var c = $k(this.a, b), d = Number($k(this.b, b));
    b = Number($k(this.c, b));
    var e = null;
    if ("linestring" === a || "multilinestring" === a)
        e = new Ql({
            color: c,
            opacity: d,
            width: b
        });
    else if ("polygon" === a || "multipolygon" === a)
        e = new Hl({
            strokeColor: c,
            ra: d,
            Fa: b
        });
    return e
};
var Sl = "#696969", Tl = 0.75, Ul = 1.5;
function Vl(a) {
    this.c = s(a.type) ? a.type : Wl;
    this.d = null != a.size ? a.size instanceof tk ? a.size : new V(a.size) : new V(Xl);
    this.b = null != a.fill ? a.fill : null;
    this.a = null != a.stroke ? a.stroke : null
}
Vl.prototype.cb = function(a) {
    var b;
    a instanceof O && (b = a, a = (a = b.G()) ? a.N() : null);
    var c = null;
    if ("point" === a || "multipoint" === a) {
        a = Number($k(this.d, b));
        var d, e;
        null !== this.b && (d = $k(this.b.a, b), e = Number($k(this.b.b, b)));
        var f, g, h;
        null !== this.a && (f = $k(this.a.a, b), g = Number($k(this.a.b, b)), h = Number($k(this.a.c, b)));
        c = new Pl({
            type: this.c,
            size: a,
            fillColor: d,
            oa: e,
            strokeColor: f,
            ra: g,
            Fa: h
        })
    }
    return c
};
Vl.prototype.N = k("c");
var Wl = "circle", Xl = 5;
function Yl(a) {
    this.b = s(a.rules) ? a.rules : [];
    this.a = s(a.symbolizers) ? a.symbolizers : []
}
var Zl = null;
function $l(a, b) {
    for (var c = a.length, d = Array(c), e = 0; e < c; ++e)
        d[e] = a[e].cb(b);
    for (var c = [], f, g, h, l, n = 0, q = d.length; n < q; ++n)
        if (e = d[n], e instanceof Hl)
            if (s(e.strokeColor)&&!s(e.fillColor))
                if (g) {
                    for (h in e)
                        l = e[h], s(l) && (g[h] = l);
                        g = null
                } else 
                    f = e, c.push(f);
            else if (s(e.fillColor)&&!s(e.strokeColor))
                if (f) {
                    for (h in e)
                        l = e[h], s(l) && (f[h] = l);
                        f = null
                } else 
                    g = e, c.push(g);
            else 
                c.push(e);
    else 
        e && c.push(e);
    return c
};
function am(a) {
    this.color = a.color;
    this.fontFamily = a.fontFamily;
    this.fontSize = a.fontSize;
    this.text = a.text;
    this.opacity = a.opacity
}
E(am, Gl);
am.prototype.a = function(a) {
    return this.color == a.color && this.fontFamily == a.fontFamily && this.fontSize == a.fontSize && this.opacity == a.opacity
};
function bm() {
    this.clear()
}
bm.prototype.clear = function() {
    this.a = {};
    var a = {}, b;
    for (b in Ed)
        a[Ed[b]] = {};
    this.b = a;
    this.c = new Bl
};
bm.prototype.add = function(a) {
    var b = x(a).toString(), c = a.G();
    this.a[b] = a;
    if (null !== c) {
        var d = c.N();
        this.b[d][b] = a;
        b = this.c;
        a = {
            extent: c.ua(),
            wb: a
        };
        s(d) && (a.type = d);
        El(b, a, b.b)
    }
};
bm.prototype.remove = function(a) {
    var b = x(a).toString(), c = a.G();
    delete this.a[b];
    null !== c && (delete this.b[c.N()][b], this.c.remove(c.ua(), a))
};
function cm(a) {
    Ye.call(this, a);
    this.c = s(a.style) ? a.style : null;
    this.a = new bm;
    this.Vf = s(a.transformFeatureInfo) ? a.transformFeatureInfo : dm;
    this.ac = new Cd;
    this.Yb = new Cd;
    this.bc = new Cd;
    this.C=!1
}
E(cm, Ye);
function em(a, b) {
    for (var c = od(), d, e = 0, f = b.length; e < f; ++e)
        d = b[e], a.a.add(d), d = d.G(), null === d || ud(c, d.ua());
    K(a, {
        extent: c,
        features: b,
        type: "add"
    })
}
cm.prototype.clear = function() {
    this.a.clear();
    K(this, {
        type: "change"
    })
};
function fm(a, b, c, d, e) {
    return 1 == zl(a.ja(), a, c, e) ? null : s(d) && rc(a.a.b[d]) ? {} : Fl({
        extent: b
    }, !1, [], a.a.c.b, d, !0)
}
function Al(a, b, c, d) {
    function e(a) {
        var b = a.features, c = this.ja().ga();
        null === c && (c = a.metadata.projection);
        a = le(c, d);
        a(this.ac.coordinates, this.ac.coordinates, this.ac.za);
        a(this.Yb.coordinates, this.Yb.coordinates, this.Yb.za);
        a(this.bc.coordinates, this.bc.coordinates, this.bc.za);
        em(this, b)
    }
    var f = {};
    f.point = a.ac;
    f.linestring = a.Yb;
    f.polygon = a.bc;
    f.multipoint = a.ac;
    f.multilinestring = a.Yb;
    f.multipolygon = a.bc;
    var g = {
        aa: function(a, b) {
            return f[b]
        }
    };
    if (u(b))
        la(c.ge) ? c.ge(b, y(e, a), g) : (b = c.dc(b, g), e.call(a, b));
    else if (ma(b))
        la(c.fe) ? c.fe(b, y(e, a), g) : (b = c.cc(b, g), e.call(a, b));
    else 
        throw Error("Data type not supported: " + b);
}
cm.prototype.d = function(a, b) {
    var c;
    if (s(b))
        c = b;
    else {
        var d = this.a, e;
        if (s(void 0)) {
            if (!s(e)) {
                var d = d.a, f;
                e = {};
                for (c in d)
                    f = d[c], $k(void 0, f) && (e[c] = f)
                }
        } else 
            e = d.a;
        c = kc(e)
    }
    e = od();
    for (d = c.length - 1; 0 <= d; --d)
        f = c[d], f.a = a, f = f.G(), null === f || ud(e, f.ua());
    K(this, {
        extent: e,
        features: c,
        type: "intentchange"
    })
};
function dm(a) {
    return Ka(a, function(a) {
        return x(a)
    }).join(", ")
};
function gm(a, b) {
    Xj.call(this, a, b)
}
E(gm, Xj);
function hm(a, b) {
    Xj.call(this, a, b);
    this.c = null;
    this.d = ue()
}
E(hm, gm);
hm.prototype.ca = function() {
    return null === this.c ? null : nj(this.c, this)
};
hm.prototype.cd = k("d");
hm.prototype.Pa = function(a) {
    var b = a.A, c = b.center, d = b.resolution, e = b.rotation, f = this.b.ja(), g = a.L;
    g[0] || g[1] || (b = f.ca(a.extent, d, b.projection), null !== b && (g = b.a, 0 == g ? (Cc(b, "change", this.k, !1, this), oj(b)) : 2 == g && (this.c = b)));
    if (null !== this.c) {
        var b = this.c, g = b.ba(), h = b.D(), l = this.d;
        ye(l);
        Ce(l, a.size[0] / 2, a.size[1] / 2);
        Ee(l, e);
        De(l, h / d, h / d);
        Ce(l, (g[0] - c[0]) / h, (c[1] - g[3]) / h);
        ak(a.attributions, b.e);
        bk(a, f)
    }
};
function im(a, b) {
    Xj.call(this, a, b);
    this.q = this.d = this.f = null;
    this.p = ue();
    this.t = NaN;
    this.i = this.c = null
}
E(im, gm);
im.prototype.ca = k("f");
im.prototype.cd = k("p");
im.prototype.Pa = function(a) {
    var b = a.A, c = b.projection, d = this.b, e = d.ja(), f = e.tileGrid;
    null === f && (f = Vj(c));
    var g = pi(f.a, b.resolution, 0), h = f.Ba(g), l = f.D(g), n = b.center, q;
    l == b.resolution ? (n = ek(n, l, a.size), q = xd(n, l, b.rotation, a.size)) : q = a.extent;
    var r = tj(f, q, l), w = h[0] * (r.d - r.a + 1), t = h[1] * (r.b - r.c + 1), A, B;
    null === this.f ? (A = zg("CANVAS"), A.width = w, A.height = t, B = A.getContext("2d"), this.f = A, this.d = [w, t], this.q = B) : (A = this.f, B = this.q, this.d[0] < w || this.d[1] < t ? (A.width = w, A.height = t, this.d = [w, t], this.c = null) : (w = this.d[0],
    t = this.d[1], g == this.t && this.c.a <= r.a && r.d <= this.c.d && this.c.c <= r.c && r.b <= this.c.b || (this.c = null)));
    var v, z;
    null === this.c ? (w/=h[0], t/=h[1], v = r.a - Math.floor((w - (r.d - r.a + 1)) / 2), z = r.c - Math.floor((t - (r.b - r.c + 1)) / 2), this.t = g, this.c = new ab(v, v + w - 1, z, z + t - 1), this.i = Array(w * t), t = this.c) : (t = this.c, w = t.d - t.a + 1);
    A = {};
    A[g] = {};
    var H = [], D = y(e.Zc, e, A, dk(function(a) {
        return null !== a && 2 == a.a
    }, e, c)), R = od(), U = new ab(0, 0, 0, 0), P, F, L;
    for (z = r.a; z <= r.d; ++z)
        for (L = r.c; L <= r.b; ++L)
            F = e.Db(g, z, L, c), v = F.a, 2 == v || 4 == v || 3 == v ? A[g][F.H.toString()] =
            F : (P = f.uc(F.H, D, null, U, R), P || (H.push(F), P = f.yc(F.H, U, R), null === P || D(g + 1, P)));
    D = 0;
    for (P = H.length; D < P; ++D)
        F = H[D], z = h[0] * (F.H.x - t.a), L = h[1] * (t.b - F.H.y), B.clearRect(z, L, h[0], h[1]);
    var aa = Ka(lc(A), Number);
    Ua(aa);
    var va = e.C, H = yd(rj(f, new Xa(g, t.a, t.b), R)), ea, ha, Z, Pa, Ea, Bb, D = 0;
    for (P = aa.length; D < P; ++D)
        if (ea = aa[D], h = f.Ba(ea), Pa = A[ea], ea == g)
            for (Z in Pa)
                F = Pa[Z], ha = (F.H.y - t.c) * w + (F.H.x - t.a), this.i[ha] != F && (z = h[0] * (F.H.x - t.a), L = h[1] * (t.b - F.H.y), v = F.a, 4 != v && 3 != v && va || B.clearRect(z, L, h[0], h[1]), 2 == v && B.drawImage(F.ca(),
                z, L), this.i[ha] = F);
        else 
            for (Z in ea = f.D(ea) / l, Pa)
                for (F = Pa[Z], ha = rj(f, F.H, R), z = (ha[0] - H[0]) / l, L = (H[1] - ha[3]) / l, Bb = ea * h[0], Ea = ea * h[1], v = F.a, 4 != v && va || B.clearRect(z, L, Bb, Ea), 2 == v && B.drawImage(F.ca(), z, L, Bb, Ea), F = sj(f, ha, g, U), v = Math.max(F.a, t.a), L = Math.min(F.d, t.d), z = Math.max(F.c, t.c), F = Math.min(F.b, t.b); v <= L; ++v)
                    for (Ea = z; Ea <= F; ++Ea)
                        ha = (Ea - t.c) * w + (v - t.a), this.i[ha] = void 0;
    ck(a.gc, e, g, r);
    fk(a, e, f, c, q, g, d.c());
    Zj(a, e);
    bk(a, e);
    c = this.p;
    ye(c);
    Ce(c, a.size[0] / 2, a.size[1] / 2);
    Ee(c, b.rotation);
    De(c, l / b.resolution,
    l / b.resolution);
    Ce(c, (H[0] - n[0]) / l, (n[1] - H[1]) / l)
};
function jm() {
    this.u = 0;
    this.c = {};
    this.b = this.a = null
}
m = jm.prototype;
m.clear = function() {
    this.u = 0;
    this.c = {};
    this.b = this.a = null
};
function km(a, b) {
    return a.c.hasOwnProperty(b)
}
m.forEach = function(a, b) {
    for (var c = this.a; null !== c;)
        a.call(b, c.$a, c.Xb, this), c = c.Ca
};
m.get = function(a) {
    a = this.c[a];
    if (a === this.b)
        return a.$a;
    a === this.a ? (this.a = this.a.Ca, this.a.hb = null) : (a.Ca.hb = a.hb, a.hb.Ca = a.Ca);
    a.Ca = null;
    a.hb = this.b;
    this.b = this.b.Ca = a;
    return a.$a
};
m.T = k("u");
m.Ka = function() {
    var a = Array(this.u), b = 0, c;
    for (c = this.b; null !== c; c = c.hb)
        a[b++] = c.Xb;
    return a
};
m.La = function() {
    var a = Array(this.u), b = 0, c;
    for (c = this.b; null !== c; c = c.hb)
        a[b++] = c.$a;
    return a
};
m.pop = function() {
    var a = this.a;
    delete this.c[a.Xb];
    null !== a.Ca && (a.Ca.hb = null);
    this.a = a.Ca;
    null === this.a && (this.b = null);
    --this.u;
    return a.$a
};
function lm(a, b, c) {
    c = {
        Xb: b,
        Ca: null,
        hb: a.b,
        $a: c
    };
    null === a.b ? a.a = c : a.b.Ca = c;
    a.b = c;
    a.c[b] = c;
    ++a.u
};
function mm(a) {
    jm.call(this);
    this.d = s(a) ? a : 2048
}
E(mm, jm);
mm.prototype.Nb = function(a) {
    for (var b, c; this.T() > this.d&&!(b = this.a.$a, c = b.H.z.toString(), c in a && a[c].contains(b.H));)
        this.pop()
};
function nm() {
    this.bounds = this.o = this.a = null
}
E(nm, Dd);
nm.prototype.ua = function() {
    if (null === this.bounds) {
        for (var a = od(), b = this.o, c = 0, d = b.length; c < d; ++c)
            ud(a, b[c].ua());
        this.bounds = a
    }
    return this.bounds
};
nm.prototype.s = function() {
    for (var a = this.o.length, b = Array(a), c = 0; c < a; ++c)
        b[c] = this.o[c].s();
    return b
};
function om(a, b) {
    this.a = null;
    var c = b;
    s(c) || (c = a[0].length, c = new Cd({
        dimension: c
    }));
    this.a = c;
    this.d = c.add(a);
    this.dimension = c.za;
    this.Sa = null
}
E(om, Dd);
m = om.prototype;
m.get = function(a, b) {
    return this.a.get(this.d, a, b)
};
m.s = function() {
    for (var a = this.T(), b = Array(a), c, d = 0; d < a; ++d) {
        c = Array(this.dimension);
        for (var e = 0; e < this.dimension; ++e)
            c[e] = this.get(d, e);
        b[d] = c
    }
    return b
};
m.T = function() {
    return this.a.T(this.d)
};
m.ua = function() {
    if (null === this.Sa) {
        var a = this.dimension, b = this.a, c = this.d, d = b.T(c), e = b.b[c], d = e + d * a, b = b.coordinates, f, g, h, l, n, c = f = b[e];
        g = h = b[e + 1];
        for (n = e + a; n < d; n += a)
            e = b[n], l = b[n + 1], e < c ? c = e : e > f && (f = e), l < g ? g = l : l > h && (h = l);
        this.Sa = [c, g, f, h]
    }
    return this.Sa
};
m.N = ba("linestring");
m.qc = function(a) {
    for (var b = this.s(), c = Infinity, d = 0, e = 1, f = b.length; e < f; d = e++) {
        var g = [b[d], b[e]], d = g[0], g = g[1], h = kd(d, g);
        0 === h ? d = kd(a, d) : (h = ((a[0] - d[0]) * (g[0] - d[0]) + (a[1] - d[1]) * (g[1] - d[1])) / h, d = 0 > h ? kd(a, d) : 1 < h ? kd(a, g) : kd(a, [d[0] + h * (g[0] - d[0]), d[1] + h * (g[1] - d[1])]));
        c = Math.min(c, d)
    }
    return Math.sqrt(c)
};
function pm(a, b) {
    nm.call(this);
    var c = b;
    s(c) || (c = a[0][0].length, c = new Cd({
        dimension: c
    }));
    var d = a.length;
    this.o = Array(d);
    for (var e = 0; e < d; ++e)
        this.o[e] = new om(a[e], c);
    this.dimension = c.za
}
E(pm, nm);
pm.prototype.N = ba("multilinestring");
pm.prototype.qc = function(a) {
    for (var b = Infinity, c = 0, d = this.o.length; c < d; ++c)
        b = Math.min(b, this.o[c].qc(a));
    return b
};
function qm(a, b) {
    this.a = null;
    var c = b;
    s(c) || (c = a.length, c = new Cd({
        dimension: c
    }));
    this.a = c;
    this.d = c.add([a]);
    this.dimension = c.za;
    this.Sa = null
}
E(qm, Dd);
qm.prototype.get = function(a) {
    return this.a.get(this.d, 0, a)
};
qm.prototype.ua = function() {
    if (null === this.Sa) {
        var a = this.get(0), b = this.get(1);
        this.Sa = [a, b, a, b]
    }
    return this.Sa
};
qm.prototype.s = function() {
    for (var a = Array(this.dimension), b = 0; b < this.dimension; ++b)
        a[b] = this.get(b);
    return a
};
qm.prototype.N = ba("point");
function rm(a, b) {
    nm.call(this);
    var c = b;
    s(c) || (c = a[0].length, c = new Cd({
        dimension: c
    }));
    this.a = c;
    var d = a.length;
    this.o = Array(d);
    for (var e = 0; e < d; ++e)
        this.o[e] = new qm(a[e], c);
    this.dimension = c.za
}
E(rm, nm);
rm.prototype.N = ba("multipoint");
function sm(a, b) {
    om.call(this, a, b)
}
E(sm, om);
function tm(a) {
    for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], f, g, h = 0; h < b; ++h)
        g = a[h], f = g[0], g = g[1], c += (f - e) * (g + d), e = f, d = g;
    return 0 < c
}
sm.prototype.N = ba("linearring");
sm.prototype.mb = function(a) {
    var b = a[0];
    a = a[1];
    var c = this.s(), d=!1, e, f, g, h, l = c.length, n = 0;
    for (h = l - 1; n < l; h = n++)
        e = c[n][0], f = c[n][1], g = c[h][0], h = c[h][1], (e = f > a != h > a && b < (g - e) * (a - f) / (h - f) + e) && (d=!d);
    return d
};
function um(a, b) {
    this.a = null;
    var c = b;
    s(c) || (c = a[0][0].length, c = new Cd({
        dimension: c
    }));
    this.c = null;
    this.a = c;
    var d = a.length;
    this.b = Array(d);
    for (var e, f = 0; f < d; ++f)
        e = a[f], 0 === f ? tm(e) || e.reverse() : tm(e) && e.reverse(), this.b[f] = new sm(e, c);
    this.dimension = c.za
}
E(um, Dd);
um.prototype.ua = function() {
    return this.b[0].ua()
};
um.prototype.s = function() {
    for (var a = this.b.length, b = Array(a), c = 0; c < a; ++c)
        b[c] = this.b[c].s();
    return b
};
um.prototype.N = ba("polygon");
um.prototype.mb = function(a) {
    for (var b = this.b, c, d = 0, e = b.length; d < e && (c = b[d].mb(a), 0 < d && (c=!c), c); ++d);
    return c
};
function vm(a, b) {
    nm.call(this);
    var c = b;
    s(c) || (c = a[0][0][0].length, c = new Cd({
        dimension: c
    }));
    var d = a.length;
    this.o = Array(d);
    for (var e = 0; e < d; ++e)
        this.o[e] = new um(a[e], c);
    this.dimension = c.za
}
E(vm, nm);
vm.prototype.N = ba("multipolygon");
vm.prototype.mb = function(a) {
    for (var b=!1, c = 0, d = this.o.length; c < d; ++c)
        if (this.o[c].mb(a)) {
            b=!0;
            break
        }
    return b
};
function wm(a) {
    this.url = a.url;
    this.width = a.width;
    this.height = a.height;
    this.opacity = a.opacity;
    this.rotation = a.rotation;
    this.xOffset = a.xOffset;
    this.yOffset = a.yOffset
}
E(wm, Nl);
wm.prototype.a = function(a) {
    return this.url == a.url && this.width == a.width && this.height == a.height && this.opacity == a.opacity && this.rotation == a.rotation && this.xOffset == a.xOffset && this.yOffset == a.yOffset
};
function xm(a, b, c) {
    a = a.getContext("2d");
    this.e = b;
    var d = [1, 0, 0], e = d[0], f = d[1], g = d[2];
    d[0] = e * b[0] + f * b[4] + g * b[8];
    d[1] = e * b[1] + f * b[5] + g * b[9];
    d[2] = e * b[2] + f * b[6] + g * b[10];
    this.b = 1 / Math.sqrt(d[0] * d[0] + d[1] * d[1]);
    this.d = a;
    this.g = c;
    this.a = {};
    this.f = {};
    this.c = [0, 0]
}
function ym(a) {
    if (a instanceof nm) {
        a = a.o;
        for (var b = a.length, c = [], d = 0; d < b; ++d)
            c.push.apply(c, ym(a[d]));
        return c
    }
    c = a.N();
    if ("point" == c)
        return [[a.get(0), a.get(1), 0]];
    if ("polygon" == c) {
        if (null === a.c) {
            var c = wd(a.ua())[1], e = a.b[0].s(), d = [], f = 0, g, h, l;
            for (g = e.length - 1; 1 <= g; --g)
                if (h = e[g], l = e[g - 1], h[1] >= c && l[1] <= c || h[1] <= c && l[1] >= c)
                    h = (c - h[1]) / (l[1] - h[1]) * (l[0] - h[0]) + h[0], d.push(h);
            d.sort();
            for (g = d.length - 1; 1 <= g; --g)
                e = Math.abs(d[g] - d[g - 1]), e > f && (h = (d[g] + d[g - 1]) / 2, a.mb([h, c]) && (f = e, b = h));
            a.c = [b, c]
        }
        a = a.c;
        return [[a[0],
        a[1], 0]]
    }
    throw Error("Label rendering not implemented for geometry type: " + c);
}
function zm(a, b) {
    var c = a.url, d = Am[c], e=!1;
    if (!s(d))
        e=!0, d = zg("IMG"), Cc(d, "error", y(Bm, null, b), !1, zm), Cc(d, "load", y(Cm, null, b), !1, zm), d.setAttribute("src", c);
    else if (null !== d) {
        var c = a.width, f = a.height;
        s(c) && s(f) ? (d.width = c, d.height = f) : s(c) ? (d.height*=c / d.width, d.width = c) : s(f) && (d.width*=f / d.height, d.height = f)
    }
    return e ? null : d
}
var Am = {};
function Bm(a, b) {
    if (s(b)) {
        var c = b.target.getAttribute("src");
        Am[c] = null;
        Cm(a, b)
    }
}
function Cm(a, b) {
    if (s(b)) {
        var c = b.target.getAttribute("src");
        Am[c] = b.target
    }
    s(a) && a()
};
function Dm(a, b) {
    Xj.call(this, a, b);
    this.i = zg("CANVAS");
    this.ia = this.i.getContext("2d");
    this.C = ue();
    this.sa = zg("CANVAS");
    this.Ra = ue();
    this.c = new mm(Em);
    J(b, ["add", "change", "remove", "intentchange"], this.We, !1, this);
    this.d = null;
    this.la = "point multipoint linestring multilinestring polygon multipolygon".split(" ");
    this.K = null;
    this.p = this.q=!1;
    this.f = null;
    this.W = new ab(NaN, NaN, NaN, NaN);
    this.t = y(function() {
        this.q=!0;
        Ri(a.f)
    }, this)
}
E(Dm, gm);
m = Dm.prototype;
m.ca = k("i");
m.cd = k("C");
m.Ta = function(a, b) {
    this.md(a, function(a, d) {
        b((0, d.Vf)(a), d)
    })
};
m.md = function(a, b, c) {
    var d = this.a.f, e = [], f = this.b;
    a = di(d, a);
    var g = Uj(this.f, a, 0).toString();
    if (km(this.c, g)) {
        var h = this.c.get(g), g = h[1], l = h[2], h = h[3], n = l[0] / 2, l = l[1] / 2, l = nd([[a[0] - n, a[1] - l], [a[0] + n, a[1] + l]]), d = fm(f, l, d.a().O().ga());
        if (null === d) {
            s(c) && p.setTimeout(function() {
                c()
            }, 0);
            return 
        }
        var q, r, w, t;
        for (t in d)
            if (l = d[t], n = l.G(), q = n.N(), "point" === q || "multipoint" === q)
                for (r = x(l), q = g[r], r = h[r], w = q[0] / 2, q = q[1] / 2, q = nd([[a[0] - w - r[0], a[1] - q + r[1]], [a[0] + w - r[0], a[1] + q + r[1]]]), n = n.s(), ia(n[0]) || (n = [n]), r =
                n.length - 1; 0 <= r; --r) {
                    if (rd(q, n[r])) {
                        e.push(l);
                        break
                    }
                } else 
                    la(n.mb) ? n.mb(a) && e.push(l) : la(n.qc) && 2 * n.qc(a) <= g[x(l)][0] && e.push(l)
    }
    p.setTimeout(function() {
        b(e, f)
    }, 0)
};
m.We = function(a) {
    var b = a.extent;
    a = this.c;
    if (s(b))
        for (var b = sj(this.f, b, 0), c = a.T(), d; c--;)
            d = a.a.Xb, b.contains(Ya(d)) ? a.pop() : a.get(d);
    else 
        a.clear();
    this.t()
};
m.Pa = function(a) {
    var b = a.A, c = b.resolution, d = b.projection, e = a.extent, f = this.b, g = this.f, h = [512, 512], l=!a.L[0]&&!a.L[1];
    if (l) {
        var n = 0.14929107086948487, q = d.a();
        q && (n/=q);
        var r = Math.max(c, n);
        r !== this.R && (g = new pj({
            origin: [0, 0],
            projection: d,
            resolutions: [r],
            tileSize: h
        }), this.c.clear(), this.f = g)
    }
    if (null !== g) {
        var w = g.D(0);
        l && tj(g, e, w, this.W);
        var t = this.C, A = this.W, B, v = g, z = v.Fb(0), H = v.D(0), D = v.Ba(0);
        B = qd(z[0] + A.a * D[0] * H, z[0] + (A.d + 1) * D[0] * H, z[1] + A.c * D[1] * H, z[1] + (A.b + 1) * D[1] * H, void 0);
        var R = yd(B);
        ye(t);
        Ce(t,
        a.size[0] / 2, a.size[1] / 2);
        De(t, w / c, w / c);
        Ee(t, b.rotation);
        Ce(t, (R[0] - b.center[0]) / w, (b.center[1] - R[1]) / w);
        if (this.q || this.R !== w ||!td(this.K, B)) {
            null === this.d && (this.d = zg("CANVAS"), this.d.width = h[0], this.d.height = h[1]);
            var U = this.sa, P = h[0] * (A.d - A.a + 1), F = h[1] * (A.b - A.c + 1), L = this.Ra, aa = P / 2, va = F / 2;
            ye(L);
            Ce(L, aa, va);
            De(L, 1 / w, - 1 / w);
            Ce(L, - (R[0] + aa * w), - (R[1] - va * w));
            U.width = P;
            U.height = F;
            var ea = new xm(U, L, this.t), ha = this.i;
            ha.width = P;
            ha.height = F;
            var Z = this.ia, Pa = {}, Ea = {}, Bb = {}, Hg = 15 * w, ff, Yb, nc, Kg, Lg, on = this.la,
            Fr = on.length, uj=!1, pn=!1, Mg, Hc, Zb, vj, Ng, Og, qn, Pg, Qg;
            Kg = A.a;
            a:
            for (; Kg <= A.d; ++Kg)
                for (Lg = A.c; Lg <= A.b; ++Lg)
                    if (Yb = new Xa(0, Kg, Lg), nc = Yb.toString(), km(this.c, nc))
                        Ea[nc] = Yb;
                    else if (l) {
                        Zb = rj(g, Yb);
                        Zb[0] -= Hg;
                        Zb[2] += Hg;
                        Zb[1] -= Hg;
                        Zb[3] += Hg;
                        Qg=!1;
                        for (Mg = 0; Mg < Fr; ++Mg) {
                            Hc = on[Mg];
                            s(Pa[Hc]) || (Pa[Hc] = {});
                            Pg = fm(f, Zb, d, Hc, this.t);
                            if (null === Pg) {
                                uj=!0;
                                break a
                            }
                            Qg = Qg ||!rc(Pg);
                            I(Pa[Hc], Pg)
                        }
                        Qg && (Bb[nc] = Yb)
                    } else 
                        pn=!0;
            this.q = pn;
            a:
            for (Hc in Pa) {
                var rn = Pa[Hc], gf = {}, hf = [], wj = f.c, sn = void 0, jf = void 0, tn = void 0, kf = void 0, xj = void 0,
                lf = void 0, un = void 0, $d = void 0, yj = void 0, Rg = void 0, zj = void 0;
                for (sn in rn) {
                    kf = rn[sn];
                    xj = kf.Cb();
                    if (null === xj) {
                        null === wj && (null === Zl && (Zl = new Yl({
                            rules: [new Ml({
                                filter: new uk(new yk("renderIntent"), [new V("select")]),
                                symbolizers: [new Vl({
                                    fill: new Jl({
                                        color: "#ffffff",
                                        opacity: 0.7
                                    }),
                                    stroke: new Rl({
                                        color: "#696969",
                                        opacity: 0.9,
                                        width: 2
                                    })
                                }), new Jl({
                                    color: "#ffffff",
                                    opacity: 0.7
                                }), new Rl({
                                    color: "#696969",
                                    opacity: 0.9,
                                    width: 2
                                })]
                            })],
                            symbolizers: [new Vl({
                                fill: new Jl,
                                stroke: new Rl
                            }), new Jl, new Rl]
                        })), wj = Zl);
                        for (var vn =
                        wj, wn = kf, xn = vn.b, Sg = [], yn=!1, Tg = void 0, Aj = 0, Gr = xn.length; Aj < Gr; ++Aj)
                            if (Tg = xn[Aj], null === Tg.a || $k(Tg.a, wn))
                                yn=!0, Sg.push.apply(Sg, Tg.Cb());
                        yn || (Sg = vn.a);
                        lf = $l(Sg, wn)
                    } else 
                        lf = $l(xj, kf);
                    un = lf.length;
                    for (jf = 0; jf < un; ++jf) {
                        $d = lf[jf];
                        for (tn in gf)
                            if (yj = hf[gf[tn]][1], $d.a(yj)) {
                                $d = yj;
                                break
                            }
                        Rg = x($d);
                        Rg in gf || (gf[Rg] = hf.length, hf.push([[], $d, []]));
                        zj = hf[gf[Rg]];
                        zj[0].push(kf);
                        $d instanceof am && zj[2].push(lf[jf].text)
                    }
                }
                vj = hf;
                qn = vj.length;
                for (Og = 0; Og < qn; ++Og) {
                    Ng = vj[Og];
                    var Ug = ea, zn = Hc, Vg = Ng[0], oc = Ng[1], Bj=!1;
                    if (oc instanceof am) {
                        var An = Ug, Bn = Vg, mf = oc, Hr = Ng[2], bd = An.d, Cj = void 0, Dj = void 0, nf = void 0;
                        bd.fillStyle !== mf.color && (bd.fillStyle = mf.color);
                        bd.font = mf.fontSize + "px " + mf.fontFamily;
                        bd.globalAlpha = mf.opacity;
                        bd.textAlign = "center";
                        bd.textBaseline = "middle";
                        for (var Wg = 0, Ir = Bn.length; Wg < Ir; ++Wg)
                            if (Cj = Bn[Wg], "hidden" !== Cj.a)
                                for (var Dj = ym(Cj.G()), Ej = 0, Jr = Dj.length; Ej < Jr; ++Ej)
                                    nf = Dj[Ej], Be(An.e, nf, nf), bd.fillText(Hr[Wg], nf[0], nf[1])
                                } else 
                                    switch (zn) {
                                    case "point":
                                    case "multipoint":
                                        var Ia = Ug, Cn = Vg, $b = oc, of = Ia.d,
                                        ac = void 0, Fj = void 0, Xg = void 0, Dn = void 0, Yg = void 0, ae = void 0, Zg = void 0, $g = void 0, Gj = void 0, ah = void 0, En = void 0, Hj = void 0, pf = void 0, bh = 0, ch = 0;
                                        if ($b instanceof Pl) {
                                            var Fn = void 0;
                                            if ("circle" === $b.type) {
                                                var cd = $b, Gn = cd.Fa || 0, Ij = cd.size + 2 * Gn + 1, Hn = Ij / 2, dh = zg("CANVAS"), Fb = dh.getContext("2d"), Jj = cd.fillColor, Kj = cd.strokeColor, Kr = 2 * Math.PI;
                                                dh.height = Ij;
                                                dh.width = Ij;
                                                Jj && (Fb.fillStyle = Jj);
                                                Kj && (Fb.lineWidth = Gn, Fb.strokeStyle = Kj, Fb.lineCap = "round", Fb.lineJoin = "round");
                                                Fb.beginPath();
                                                Fb.arc(Hn, Hn, cd.size / 2, 0, Kr,
                                                !0);
                                                Jj && (Fb.globalAlpha = cd.oa, Fb.fill());
                                                Kj && (Fb.globalAlpha = cd.ra, Fb.stroke());
                                                Fn = dh
                                            } else 
                                                throw Error("Unsupported shape type: " + $b);
                                                ac = Fn;
                                                Fj = 1
                                        } else if ($b instanceof wm)
                                            ac = zm($b, Ia.g), Fj = $b.opacity, bh = $b.xOffset, ch = $b.yOffset;
                                        else 
                                            throw Error("Unsupported symbolizer: " + $b);
                                            if (null === ac)
                                                Bj=!0;
                                            else {
                                                var Lr = ac.width / 2, Mr = ac.height / 2, In = ac.width * Ia.b, Jn = ac.height * Ia.b, Nr = bh * Ia.b, Or = ch * Ia.b;
                                                of.save();
                                                of.setTransform(1, 0, 0, 1, - Lr, - Mr);
                                                of.globalAlpha = Fj;
                                                Xg = 0;
                                                for (Dn = Cn.length; Xg < Dn; ++Xg)
                                                    if (Yg = Cn[Xg], "hidden" !==
                                                    Yg.a)
                                                        for (ae = x(Yg), Zg = Ia.a[ae], Ia.a[ae] = s(Zg) ? [Math.max(Zg[0], In), Math.max(Zg[1], Jn)] : [In, Jn], Ia.f[ae] = [bh * Ia.b, ch * Ia.b], Ia.c = [Math.max(Ia.c[0], Ia.a[ae][0] + 2 * Math.abs(Nr)), Math.max(Ia.c[1], Ia.a[ae][1] + 2 * Math.abs(Or))], $g = Yg.G(), Gj = $g instanceof qm ? [$g] : $g.o, ah = 0, En = Gj.length; ah < En; ++ah)
                                                            Hj = Gj[ah], pf = [Hj.get(0), Hj.get(1), 0], Be(Ia.e, pf, pf), of.drawImage(ac, pf[0] + bh, pf[1] + ch, ac.width, ac.height);
                                                            of.restore();
                                                            Bj=!1
                                            }
                                            break;
                                        case "linestring":
                                        case "multilinestring":
                                            var pc = Ug, Kn = Vg, Lj = oc, bc = pc.d, eh = void 0, Ln =
                                            void 0, fh = void 0, gh = void 0, be = void 0, hh = void 0, Mj = void 0, ih = void 0, Mn = void 0, jh = void 0, ce = void 0, Nn = void 0, dd = void 0, On = void 0;
                                            bc.globalAlpha = Lj.opacity;
                                            bc.strokeStyle = Lj.color;
                                            bc.lineWidth = Lj.width;
                                            bc.lineCap = "round";
                                            bc.lineJoin = "round";
                                            On = bc.lineWidth * pc.b;
                                            bc.beginPath();
                                            eh = 0;
                                            for (Ln = Kn.length; eh < Ln; ++eh)
                                                if (fh = Kn[eh], "hidden" !== fh.a)
                                                    for (gh = x(fh), be = s(pc.a[gh]) ? pc.a[gh] : [0], be[0] = Math.max(be[0], On), pc.a[gh] = be, pc.c = [Math.max(be[0], pc.c[0]), Math.max(be[0], pc.c[1])], hh = fh.G(), Mj = hh instanceof om ? [hh] :
                                                    hh.o, ih = 0, Mn = Mj.length; ih < Mn; ++ih)
                                                        for (jh = Mj[ih], ce = 0, Nn = jh.T(); ce < Nn; ++ce)
                                                            dd = [jh.get(ce, 0), jh.get(ce, 1), 0], Be(pc.e, dd, dd), 0 === ce ? bc.moveTo(dd[0], dd[1]) : bc.lineTo(dd[0], dd[1]);
                                                            bc.stroke();
                                                            break;
                                                        case "polygon":
                                                        case "multipolygon":
                                                            var Pn = Ug, Qn = Vg, Ja = Pn.d, kh = oc.strokeColor, Rn = oc.Fa, lh = oc.ra, qf = oc.fillColor, mh = oc.oa, de = void 0, rf = void 0, Nj = void 0, nh = void 0, Oj = void 0, sf = void 0, Pj = void 0, Sn = void 0, Qj = void 0, Tn = void 0, oh = void 0, ee = void 0, Un = void 0, ed = void 0, Rj = void 0;
                                                            kh && (Ja.strokeStyle = kh, Rn && (Ja.lineWidth =
                                                            Rn), Ja.lineCap = "round", Ja.lineJoin = "round");
                                                            qf && (Ja.fillStyle = qf);
                                                            Ja.beginPath();
                                                            rf = 0;
                                                            for (Nj = Qn.length; rf < Nj; ++rf)
                                                                if (Rj = Qn[rf], "hidden" !== Rj.a)
                                                                    for (nh = Rj.G(), Oj = nh instanceof um ? [nh] : nh.o, sf = 0, Pj = Oj.length; sf < Pj; ++sf)
                                                                        if (Sn = Oj[sf], Qj = Sn.b, Tn = Qj.length, 0 < Tn) {
                                                                            oh = Qj[0];
                                                                            ee = 0;
                                                                            for (Un = oh.T(); ee < Un; ++ee)
                                                                                ed = [oh.get(ee, 0), oh.get(ee, 1), 0], Be(Pn.e, ed, ed), 0 === ee ? Ja.moveTo(ed[0], ed[1]) : Ja.lineTo(ed[0], ed[1]);
                                                                                qf && kh && (mh !== de && (de = Ja.globalAlpha = mh), Ja.fill(), lh !== de && (de = Ja.globalAlpha = lh), Ja.stroke(), (rf < Nj - 1 ||
                                                                                sf < Pj - 1) && Ja.beginPath())
                                                                        }
                                                                        qf && kh || (qf ? (mh !== de && (Ja.globalAlpha = mh), Ja.fill()) : (lh !== de && (Ja.globalAlpha = lh), Ja.stroke()));
                                                                        break;
                                                                    default:
                                                                        throw Error("Rendering not implemented for geometry type: " + zn);
                                    }
                    if (uj = Bj)
                        break a
                }
            }
            uj || I(Ea, Bb);
            var Pr = ea.a, Qr = ea.c, Rr = ea.f;
            for (nc in Ea)
                Yb = Ea[nc], km(this.c, nc) ? ff = this.c.get(nc)[0] : (ff = this.d.cloneNode(!1), ff.getContext("2d").drawImage(U, (A.a - Yb.x) * h[0], (Yb.y - A.b) * h[1]), lm(this.c, nc, [ff, Pr, Qr, Rr])), Z.drawImage(ff, h[0] * (Yb.x - A.a), h[1] * (A.b - Yb.y));
            this.R = w;
            this.K =
            B;
            this.p || (this.p=!0, a.ib.push(y(this.Jf, this)))
        }
    }
};
m.Jf = function() {
    for (; this.c.T() > this.c.d;)
        this.c.pop();
    this.p=!1
};
var Em = 128;
function Fm(a, b) {
    gk.call(this, 0, b);
    this.b = zg("CANVAS");
    this.b.height = a.clientHeight;
    this.b.width = a.clientWidth;
    this.b.className = "ol-unselectable";
    Dg(a, this.b);
    this.c=!0;
    this.e = [a.clientHeight, a.clientWidth];
    this.g = this.b.getContext("2d")
}
E(Fm, gk);
Fm.prototype.mc = function(a) {
    return a instanceof rk ? new hm(this, a) : a instanceof sk ? new im(this, a) : a instanceof cm ? new Dm(this, a) : null
};
Fm.prototype.wc = k("b");
Fm.prototype.Jc = function(a) {
    if (null === a)
        this.c && (Ph(this.b, !1), this.c=!1);
    else {
        var b = a.size;
        if (this.e[0] != b[0] || this.e[1] != b[1])
            this.b.width = b[0], this.b.height = b[1], this.e = b;
        var c = this.g;
        c.clearRect(0, 0, b[0], b[1]);
        hk(a);
        var b = a.qa, d = a.Hc, e = a.A.resolution, f, g, h, l, n;
        f = 0;
        for (g = d.length; f < g; ++f)
            h = d[f], l = ik(this, h), n = b[x(h)], !n.visible || (!n.Mc || e >= n.maxResolution || e < n.minResolution) || (l.Pa(a, n), h = l.ca(), null !== h && (l = l.cd(), c.globalAlpha = n.opacity, 0 === a.A.rotation ? c.drawImage(h, 0, 0, h.width, h.height, l[12],
            l[13], h.width * l[0], h.height * l[5]) : (c.setTransform(l[0], l[1], l[4], l[5], l[12], l[13]), c.drawImage(h, 0, 0), c.setTransform(1, 0, 0, 1, 0, 0))));
        this.c || (Ph(this.b, !0), this.c=!0);
        kk(this, a)
    }
};
function Gm(a, b) {
    var c;
    if (s(6)) {
        var d = Array(16);
        for (c = 0; 16 > c; ++c)
            d[c] = b[c].toFixed(6);
        c = d.join(",")
    } else 
        c = b.join(",");
    c = "matrix3d(" + c + ")";
    d = a.style;
    d.WebkitTransform = c;
    d.MozTransform = c;
    d.a = c;
    d.transform = c
};
function Hm(a, b, c) {
    Xj.call(this, a, b);
    this.target = c
}
E(Hm, Xj);
function Im(a, b) {
    var c = zg("DIV");
    c.style.position = "absolute";
    Hm.call(this, a, b, c);
    this.c = null;
    this.d = we()
}
E(Im, Hm);
Im.prototype.Pa = function(a) {
    var b = a.A, c = b.center, d = b.resolution, e = b.rotation, f = this.c, g = this.b.ja(), h = a.L;
    h[0] || h[1] || (b = g.ca(a.extent, d, b.projection), null !== b && (h = b.a, 0 == h ? (Cc(b, "change", this.k, !1, this), oj(b)) : 2 == h && (f = b)));
    if (null !== f) {
        var h = f.ba(), l = f.D(), b = ue();
        ye(b);
        Ce(b, a.size[0] / 2, a.size[1] / 2);
        Ee(b, e);
        De(b, l / d, l / d);
        Ce(b, (h[0] - c[0]) / l, (c[1] - h[3]) / l);
        f != this.c && (c = nj(f, this), c.style.maxWidth = "none", c.style.position = "absolute", Bg(this.target), this.target.appendChild(c), this.c = f);
        Ae(b, this.d) ||
        (Gm(this.target, b), xe(this.d, b));
        ak(a.attributions, f.e);
        bk(a, g)
    }
};
function Jm(a, b) {
    var c = zg("DIV");
    c.style.position = "absolute";
    Hm.call(this, a, b, c);
    this.d=!0;
    this.i = 1;
    this.f = 0;
    this.c = {}
}
E(Jm, Hm);
Jm.prototype.Pa = function(a, b) {
    if (b.visible) {
        var c = a.A, d = c.projection, e = this.b, f = e.ja(), g = f.tileGrid;
        null === g && (g = Vj(d));
        var h = pi(g.a, c.resolution, 0), l = g.D(h), n = c.center, q;
        l == c.resolution ? (n = ek(n, l, a.size), q = xd(n, l, c.rotation, a.size)) : q = a.extent;
        var l = tj(g, q, l), r = {};
        r[h] = {};
        var w = y(f.Zc, f, r, dk(function(a) {
            return null !== a && 2 == a.a
        }, f, d)), t = od(), A = new ab(0, 0, 0, 0), B, v, z, H;
        for (z = l.a; z <= l.d; ++z)
            for (H = l.c; H <= l.b; ++H)
                B = f.Db(h, z, H, d), v = B.a, 2 == v ? r[h][B.H.toString()] = B : 3 != v && 4 != v && (v = g.uc(B.H, w, null, A, t), v ||
                (B = g.yc(B.H, A, t), null === B || w(h + 1, B)));
        var D;
        if (this.f != f.c) {
            for (D in this.c)
                t = this.c[ + D], Eg(t.target);
            this.c = {};
            this.f = f.c
        }
        z = Ka(lc(r), Number);
        Ua(z);
        var w = {}, R;
        H = 0;
        for (B = z.length; H < B; ++H) {
            D = z[H];
            D in this.c ? t = this.c[D] : (t = Uj(g, n, D), t = new Km(g, t), w[D]=!0, this.c[D] = t);
            D = r[D];
            for (R in D)
                Lm(t, D[R]);
            Mm(t)
        }
        R = Ka(lc(this.c), Number);
        Ua(R);
        var U;
        B = ue();
        z = 0;
        for (H = R.length; z < H; ++z)
            if (D = R[z], t = this.c[D], D in r)
                if (U = t.D(), v = t.f, ye(B), Ce(B, a.size[0] / 2, a.size[1] / 2), Ee(B, c.rotation), De(B, U / c.resolution, U / c.resolution),
                Ce(B, (v[0] - n[0]) / U, (n[1] - v[1]) / U), Nm(t, B), D in w) {
                    for (D -= 1; 0 <= D; --D)
                        if (D in this.c) {
                            Cg(t.target, this.c[D].target);
                            break
                        }
                        0 > D && Dg(this.target, t.target)
                } else 
                    a.L[0] || a.L[1] || Om(t, q, A);
            else 
                Eg(t.target), delete this.c[D];
        b.opacity != this.i && (Oh(this.target, b.opacity), this.i = b.opacity);
        b.visible&&!this.d && (Ph(this.target, !0), this.d=!0);
        ck(a.gc, f, h, l);
        fk(a, f, g, d, q, h, e.c());
        Zj(a, f);
        bk(a, f)
    } else 
        this.d && (Ph(this.target, !1), this.d=!1)
};
function Km(a, b) {
    this.target = zg("DIV");
    this.target.style.position = "absolute";
    this.d = a;
    this.c = b;
    this.f = yd(rj(a, b));
    this.g = a.D(b.z);
    this.b = {};
    this.a = null;
    this.e = we()
}
function Lm(a, b) {
    var c = b.H, d = c.toString();
    if (!(d in a.b)) {
        var e = a.d.Ba(c.z), f = b.ca(a), g = f.style;
        g.maxWidth = "none";
        g.position = "absolute";
        g.left = (c.x - a.c.x) * e[0] + "px";
        g.top = (a.c.y - c.y) * e[1] + "px";
        null === a.a && (a.a = document.createDocumentFragment());
        a.a.appendChild(f);
        a.b[d] = b
    }
}
function Mm(a) {
    null !== a.a && (a.target.appendChild(a.a), a.a = null)
}
Km.prototype.D = k("g");
function Om(a, b, c) {
    var d = sj(a.d, b, a.c.z, c);
    b = [];
    for (var e in a.b)
        c = a.b[e], d.contains(c.H) || b.push(c);
    var f, d = 0;
    for (f = b.length; d < f; ++d)
        c = b[d], e = c.H.toString(), Eg(c.ca(a)), delete a.b[e]
}
function Nm(a, b) {
    Ae(b, a.e) || (Gm(a.target, b), xe(a.e, b))
};
function Pm(a, b) {
    gk.call(this, 0, b);
    this.b = zg("DIV");
    this.b.className = "ol-unselectable";
    var c = this.b.style;
    c.position = "absolute";
    c.width = "100%";
    c.height = "100%";
    Dg(a, this.b);
    this.c=!0
}
E(Pm, gk);
Pm.prototype.mc = function(a) {
    if (a instanceof sk)
        a = new Jm(this, a);
    else if (a instanceof rk)
        a = new Im(this, a);
    else 
        return null;
    this.b.appendChild(a.target);
    return a
};
Pm.prototype.Jc = function(a) {
    if (null === a)
        this.c && (Ph(this.b, !1), this.c=!1);
    else {
        var b = a.qa, c = a.Hc, d, e, f, g;
        d = 0;
        for (e = c.length; d < e; ++d)
            f = c[d], g = ik(this, f), f = a.qa[x(f)], f.Mc && g.Pa(a, f);
        for (var h in this.d)
            h in b || (g = this.d[h], Eg(g.target));
        this.c || (Ph(this.b, !0), this.c=!0);
        hk(a);
        kk(this, a)
    }
};
var Qm = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
function Rm(a, b) {
    var c, d, e = Qm.length;
    for (d = 0; d < e; ++d)
        try {
            if (c = a.getContext(Qm[d], b), null !== c)
                return c
    } catch (f) {}
    return null
}
var Sm = function() {
    if (!("WebGLRenderingContext"in p))
        return !1;
    try {
        var a = zg("CANVAS");
        return null !== Rm(a)
    } catch (b) {
        return !1
    }
}();
C("ol.webgl.SUPPORTED", Sm);
function Tm(a, b) {
    var c = od(), d = a.a;
    Um(a, function(a, f) {
        for (var g, h, l = a; l < f; l += b)
            g = d[l], h = d[l + 1], c[0] = Math.min(c[0], g), c[1] = Math.min(c[1], h), c[2] = Math.max(c[2], g), c[3] = Math.max(c[3], h)
    });
    return c
}
function Vm(a, b, c, d) {
    var e = c.length, f, g, h;
    for (f = 0; f < e; ++f)
        for (h = c[f], g = 0; g < d; ++g)
            a[b++] = h[g];
    return b
};
function Wm(a) {
    this.a = s(a) ? a : []
}
function Xm(a, b, c) {
    if (b != c) {
        var d = a.a, e = d.length, f;
        for (f = 0; f < e; f += 2)
            if (b <= d[f]) {
                d.splice(f, 0, b, c);
                Ym(a);
                return 
            }
        d.push(b, c);
        Ym(a)
    }
}
Wm.prototype.clear = function() {
    this.a.length = 0
};
function Ym(a) {
    a = a.a;
    var b = a.length, c = 0, d;
    for (d = 0; d < b; d += 2)
        a[d] != a[d + 1] && (0 < c && a[c - 2] <= a[d] && a[d] <= a[c - 1] ? a[c - 1] = Math.max(a[c - 1], a[d + 1]) : (a[c++] = a[d], a[c++] = a[d + 1]));
    a.length = c
}
function Zm(a, b) {
    var c = a.a, d = c.length, e;
    for (e = 0; e < d; e += 2)
        b.call(void 0, c[e], c[e + 1])
}
Wm.prototype.vb = function() {
    return 0 === this.a.length
};
function $m(a, b, c) {
    var d = a.a, e = d.length, f;
    for (f = 0; f < e; f += 2)
        if (!(c < d[f] || d[f + 1] < b)) {
            if (d[f] > c)
                break;
                if (b < d[f])
                    if (c == d[f])
                        break;
                    else if (c < d[f + 1]) {
                        d[f] = Math.max(d[f], c);
                        break
                    } else 
                        d.splice(f, 2), f -= 2, e -= 2;
        else if (b == d[f])
            if (c < d[f + 1]) {
                d[f] = c;
                break
            } else if (c == d[f + 1]) {
                d.splice(f, 2);
                break
            } else 
                d.splice(f, 2), f -= 2, e -= 2;
        else if (c < d[f + 1]) {
            d.splice(f, 2, d[f], b, c, d[f + 1]);
            break
        } else if (c == d[f + 1]) {
            d[f + 1] = b;
            break
        } else 
            d[f + 1] = b
    }
    Ym(a)
};
function an(a, b, c) {
    this.a = s(a) ? a : [];
    this.b = [];
    this.c = new Wm;
    a = s(b) ? b : this.a.length;
    a < this.a.length && Xm(this.c, a, this.a.length);
    this.e = this.f = null;
    this.d = s(c) ? c : 35044
}
function bn(a, b) {
    var c;
    a: {
        c = a.c.a;
        var d = c.length, e =- 1, f, g, h;
        for (g = 0; g < d; g += 2) {
            h = c[g + 1] - c[g];
            if (h == b) {
                c = c[g];
                break a
            }
            h > b && ( - 1 == e || h < f) && (e = c[g], f = h)
        }
        c = e
    }
    $m(a.c, c, c + b);
    return c
}
an.prototype.add = function(a) {
    var b = a.length, c = bn(this, b), d;
    for (d = 0; d < b; ++d)
        this.a[c + d] = a[d];
    a = 0;
    for (d = this.b.length; a < d; ++a)
        Xm(this.b[a], c, c + b);
    return c
};
function Um(a, b) {
    if (0 !== a.a.length) {
        var c = a.a.length, d = a.c.a, e = d.length;
        if (0 === e)
            b.call(void 0, 0, c);
        else {
            0 < d[0] && b.call(void 0, 0, d[0]);
            var f;
            for (f = 1; f < e - 1; f += 2)
                b.call(void 0, d[f], d[f + 1]);
            d[e - 1] < c && b.call(void 0, d[e - 1], c)
        }
    }
}
an.prototype.T = function() {
    var a = this.c.a, b = a.length, c = 0, d;
    for (d = 0; d < b; d += 2)
        c += a[d + 1] - a[d];
    return this.a.length - c
};
an.prototype.remove = function(a, b) {
    var c, d;
    Xm(this.c, b, b + a);
    c = 0;
    for (d = this.b.length; c < d; ++c)
        $m(this.b[c], b, b + a)
};
function cn(a, b, c) {
    this.da = a;
    this.a = s(b) ? b : {};
    this.b = s(c) ? c : 2
}
m = cn.prototype;
m.add = function(a) {
    var b = a.length * this.b, c = bn(this.da, b);
    this.a[c + ""] = c + b;
    Vm(this.da.a, c, a, this.b);
    return c
};
m.get = function(a) {
    for (var b = this.da.a, c = this.a[a + ""], d = this.b, e = Array((c - a) / d), f = 0; a < c; a += d)
        e[f++] = b.slice(a, a + d);
    return e
};
m.T = function() {
    return ic(this.a)
};
m.ba = function() {
    return Tm(this.da, this.b)
};
m.remove = function(a) {
    this.da.remove(this.a[a + ""] - a, a);
    delete this.a[a + ""]
};
function dn(a, b) {
    this.da = a;
    this.a = s(b) ? b : 2
}
m = dn.prototype;
m.add = function(a) {
    return this.da.add(a)
};
m.get = function(a) {
    return this.da.a.slice(a, a + this.a)
};
m.T = function() {
    return this.da.T() / this.a
};
m.ba = function() {
    return Tm(this.da, this.a)
};
m.remove = function(a) {
    this.da.remove(this.a, a)
};
function en(a) {
    We.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        projection: a.projection
    });
    this.b = s(a.pointCollections) ? a.pointCollections : [];
    this.a = s(a.Af) ? a.Af : []
}
E(en, We);
function fn(a) {
    Ye.call(this, a)
}
E(fn, Ye);
function gn(a, b, c) {
    var d = b[0];
    b = b[1];
    c[0] = d * a[0] + b * a[4] + a[12];
    c[1] = d * a[1] + b * a[5] + a[13];
    return c
};
function hn(a, b) {
    Xj.call(this, a, b);
    this.i = this.xa = null;
    this.q = void 0;
    this.e = ue();
    this.r = we();
    this.K = new Float32Array(16);
    this.C = void 0;
    this.t = new Float32Array(16);
    this.W = void 0;
    this.R = new Float32Array(16);
    this.ia = void 0;
    this.la = new Float32Array(16);
    this.lb = void 0;
    this.Ra = new Float32Array(16)
}
E(hn, Xj);
function jn(a, b, c) {
    var d = a.a.a;
    if (s(a.q) && a.q == c)
        d.bindFramebuffer(36160, a.i);
    else {
        b.ib.push(ra(function(a, b, c) {
            a.isContextLost() || (a.deleteFramebuffer(b), a.deleteTexture(c))
        }, d, a.i, a.xa));
        b = d.createTexture();
        d.bindTexture(3553, b);
        d.texImage2D(3553, 0, 6408, c, c, 0, 6408, 5121, null);
        d.texParameteri(3553, 10240, 9729);
        d.texParameteri(3553, 10241, 9729);
        var e = d.createFramebuffer();
        d.bindFramebuffer(36160, e);
        d.framebufferTexture2D(36160, 36064, 3553, b, 0);
        a.xa = b;
        a.i = e;
        a.q = c
    }
}
function kn(a, b, c, d, e) {
    var f=!1;
    b !== a.C && (f = a.t, ye(f), f[12] = b, f[13] = b, f[14] = b, f[15] = 1, a.C = b, f=!0);
    c !== a.W && (b = a.R, ye(b), b[0] = c, b[5] = c, b[10] = c, b[15] = 1, f =- 0.5 * c + 0.5, b[12] = f, b[13] = f, b[14] = f, b[15] = 1, a.W = c, f=!0);
    d !== a.ia && (c = Math.cos(d), b = Math.sin(d), ve(a.la, 0.213 + 0.787 * c - 0.213 * b, 0.213 - 0.213 * c + 0.143 * b, 0.213 - 0.213 * c - 0.787 * b, 0, 0.715 - 0.715 * c - 0.715 * b, 0.715 + 0.285 * c + 0.14 * b, 0.715 - 0.715 * c + 0.715 * b, 0, 0.072 - 0.072 * c + 0.928 * b, 0.072 - 0.072 * c - 0.283 * b, 0.072 + 0.928 * c + 0.072 * b, 0, 0, 0, 0, 1), a.ia = d, f=!0);
    e !== a.lb && (ve(a.Ra, 0.213 +
    0.787 * e, 0.213 - 0.213 * e, 0.213 - 0.213 * e, 0, 0.715 - 0.715 * e, 0.715 + 0.285 * e, 0.715 - 0.715 * e, 0, 0.072 - 0.072 * e, 0.072 - 0.072 * e, 0.072 + 0.928 * e, 0, 0, 0, 0, 1), a.lb = e, f=!0);
    f && (d = a.K, ye(d), ze(d, a.R, d), ze(d, a.t, d), ze(d, a.Ra, d), ze(d, a.la, d));
    return a.K
}
hn.prototype.g = function() {
    this.i = this.xa = null;
    this.q = void 0
};
function ln(a, b) {
    hn.call(this, a, b);
    this.c = null
}
E(ln, hn);
function mn(a, b) {
    var c = nj(b, a), d = a.a.a, e = d.createTexture();
    d.bindTexture(3553, e);
    d.texImage2D(3553, 0, 6408, 6408, 5121, c);
    d.texParameteri(3553, 10242, 33071);
    d.texParameteri(3553, 10243, 33071);
    d.texParameteri(3553, 10241, 9729);
    d.texParameteri(3553, 10240, 9729);
    return e
}
ln.prototype.Pa = function(a) {
    var b = this.a.a, c = a.A, d = c.center, e = c.resolution, f = c.rotation, g = this.c, h = this.xa, l = this.b.ja(), n = a.L;
    n[0] || n[1] || (c = l.ca(a.extent, e, c.projection), null !== c && (n = c.a, 0 == n ? (Cc(c, "change", this.k, !1, this), oj(c)) : 2 == n && (g = c, h = mn(this, c), null === this.xa || a.ib.push(ra(function(a, b) {
        a.isContextLost() || a.deleteTexture(b)
    }, b, this.xa)))));
    null !== g && (b = this.a.wc(), nn(this, b.width, b.height, d, e, f, g.ba()), d = this.e, ye(d), De(d, 1, - 1), Ce(d, 0, - 1), this.c = g, this.xa = h, ak(a.attributions, g.e), bk(a,
    l))
};
function nn(a, b, c, d, e, f, g) {
    b*=e;
    c*=e;
    a = a.r;
    ye(a);
    De(a, 2 / b, 2 / c);
    Ee(a, - f);
    Ce(a, g[0] - d[0], g[1] - d[1]);
    De(a, (g[2] - g[0]) / 2, (g[3] - g[1]) / 2);
    Ce(a, 1, 1)
};
function Vn(a) {
    this.a = a
}
Vn.prototype.ja = k("a");
function Wn(a) {
    this.a = a
}
E(Wn, Vn);
Wn.prototype.N = ba(35632);
function Xn(a) {
    this.a = a
}
E(Xn, Vn);
Xn.prototype.N = ba(35633);
function Yn() {
    this.a = "precision mediump float;varying vec2 a;uniform sampler2D c;void main(){gl_FragColor\x3dtexture2D(c,a);}"
}
E(Yn, Wn);
fa(Yn);
function Zn() {
    this.a = "varying vec2 a;attribute vec2 c,d;uniform vec4 b;void main(){gl_Position\x3dvec4(c*b.xy+b.zw,0,1);a\x3dd;}"
}
E(Zn, Xn);
fa(Zn);
function $n(a, b) {
    this.d = a.getUniformLocation(b, "b");
    this.c = a.getUniformLocation(b, "c");
    this.a = a.getAttribLocation(b, "c");
    this.b = a.getAttribLocation(b, "d")
};
function ao(a, b) {
    hn.call(this, a, b);
    this.ic = Yn.va();
    this.Sc = Zn.va();
    this.c = null;
    this.sa = new an([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
    this.p = this.d = null;
    this.f =- 1
}
E(ao, hn);
ao.prototype.v = function() {
    var a = this.a, b = a.a, c = x(this.sa), d = a.e[c];
    Oa(d.da.b, d.oc);
    b.isContextLost() || b.deleteBuffer(d.buffer);
    delete a.e[c];
    ao.F.v.call(this)
};
ao.prototype.g = function() {
    ao.F.g.call(this);
    this.c = null
};
ao.prototype.Pa = function(a) {
    var b = this.a, c = b.a, d = a.A, e = d.projection, f = this.b, g = f.ja(), h = g.tileGrid;
    null === h && (h = Vj(e));
    var l = pi(h.a, d.resolution, 0), n = h.D(l), q = d.center, r;
    n == d.resolution ? (q = ek(q, n, a.size), r = xd(q, n, d.rotation, a.size)) : r = a.extent;
    var w = tj(h, r, n);
    if (null !== this.d && this.d.a == w.a && (this.d.c == w.c && this.d.d == w.d && this.d.b == w.b) && this.f == g.c)
        n = this.p;
    else {
        var t = [w.d - w.a + 1, w.b - w.c + 1], A = h.Ba(l), t = Math.max(t[0] * A[0], t[1] * A[1]), B = fj(t), t = n * B, v = h.Fb(l), z = v[0] + w.a * A[0] * n, n = v[1] + w.c * A[1] * n, n = [z,
        n, z + t, n + t];
        jn(this, a, B);
        c.viewport(0, 0, B, B);
        c.clearColor(0, 0, 0, 0);
        c.clear(16384);
        c.disable(3042);
        A = bo(b, this.ic, this.Sc);
        c.useProgram(A);
        null === this.c && (this.c = new $n(c, A));
        co(b, this.sa);
        c.enableVertexAttribArray(this.c.a);
        c.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 0);
        c.enableVertexAttribArray(this.c.b);
        c.vertexAttribPointer(this.c.b, 2, 5126, !1, 16, 8);
        c.uniform1i(this.c.c, 0);
        A = {};
        A[l] = {};
        var H = y(g.Zc, g, A, dk(function(a) {
            return null !== a && 2 == a.a && km(b.b, a.b())
        }, g, e)), B=!0, z = od(), D = new ab(0, 0, 0, 0), R, U,
        P;
        for (U = w.a; U <= w.d; ++U)
            for (P = w.c; P <= w.b; ++P) {
                v = g.Db(l, U, P, e);
                R = v.a;
                if (2 == R) {
                    if (km(b.b, v.b())) {
                        A[l][v.H.toString()] = v;
                        continue
                    }
                } else if (3 == R || 4 == R)
                    continue;
                    B=!1;
                    R = h.uc(v.H, H, null, D, z);
                    R || (v = h.yc(v.H, D, z), null === v || H(l + 1, v))
                }
        H = Ka(lc(A), Number);
        Ua(H);
        var D = new Float32Array(4), F, L, aa, va, ea;
        U = 0;
        for (P = H.length; U < P; ++U)
            for (aa in va = A[H[U]], va)
                v = va[aa], L = rj(h, v.H, z), R = 2 * (L[2] - L[0]) / t, F = 2 * (L[3] - L[1]) / t, ea = 2 * (L[0] - n[0]) / t - 1, L = 2 * (L[1] - n[1]) / t - 1, te(D, R, F, ea, L), c.uniform4fv(this.c.d, D), eo(b, v), c.drawArrays(5,
                0, 4);
        B ? (this.d = w, this.p = n, this.f = g.c) : (this.p = this.d = null, this.f =- 1, a.ta=!0)
    }
    ck(a.gc, g, l, w);
    var ha = b.k;
    fk(a, g, h, e, r, l, f.c(), function(a) {
        var c;
        (c = 2 != a.a) || (c = km(b.b, a.b())) || (c = a.b()in ha.c);
        c || Ie(ha, [a, Tj(h, a.H), h.D(a.H.z)])
    }, this);
    Zj(a, g);
    bk(a, g);
    c = this.e;
    ye(c);
    Ce(c, (q[0] - n[0]) / (n[2] - n[0]), (q[1] - n[1]) / (n[3] - n[1]));
    Ee(c, d.rotation);
    De(c, a.size[0] * d.resolution / (n[2] - n[0]), a.size[1] * d.resolution / (n[3] - n[1]));
    Ce(c, - 0.5, - 0.5)
};
function fo() {
    this.a = "precision mediump float;uniform vec4 b;void main(){gl_FragColor\x3db;}"
}
E(fo, Wn);
fa(fo);
function go() {
    this.a = "attribute vec2 b;uniform mat4 a;void main(){gl_Position\x3da*vec4(b,0,1);}"
}
E(go, Xn);
fa(go);
function ho(a, b) {
    this.c = a.getUniformLocation(b, "a");
    this.b = a.getUniformLocation(b, "b");
    this.a = a.getAttribLocation(b, "b")
};
function io() {
    this.a = "precision mediump float;uniform vec4 c;void main(){gl_FragColor\x3dc;}"
}
E(io, Wn);
fa(io);
function jo() {
    this.a = "attribute vec2 c;uniform float a;uniform mat4 b;void main(){gl_Position\x3db*vec4(c,0,1);gl_PointSize\x3da;}"
}
E(jo, Xn);
fa(jo);
function ko(a, b) {
    this.d = a.getUniformLocation(b, "a");
    this.c = a.getUniformLocation(b, "b");
    this.b = a.getUniformLocation(b, "c");
    this.a = a.getAttribLocation(b, "c")
};
function lo(a, b) {
    hn.call(this, a, b);
    ye(this.r);
    this.f = we();
    this.c = this.d = null
}
E(lo, hn);
lo.prototype.g = function() {
    lo.F.g.call(this);
    this.c = null
};
lo.prototype.Pa = function(a) {
    var b = this.a.a, c = a.A, d = this.b.ja(), e = a.size, f = fj(Math.max(e[0], e[1]));
    jn(this, a, f);
    b.viewport(0, 0, f, f);
    b.clearColor(0, 0, 0, 0);
    b.clear(16384);
    b.enable(3042);
    ye(this.f);
    0 !== c.rotation && Ee(this.f, - c.rotation);
    De(this.f, 2 / (f * c.resolution), 2 / (f * c.resolution));
    Ce(this.f, - c.center[0], - c.center[1]);
    a = d.b;
    0 < a.length && mo(this, a);
    d = d.a;
    if (0 < d.length) {
        a = this.a;
        var b = a.a, c = fo.va(), g = go.va(), c = bo(a, c, g);
        b.useProgram(c);
        null === this.d && (this.d = new ho(b, c));
        b.uniformMatrix4fv(this.d.c, !1,
        this.f);
        for (var h, l, g = 0; g < d.length; ++g) {
            l = d[g];
            h = l.da;
            c = l.b;
            co(a, h);
            h = l;
            l = h.b;
            var n = Ka(lc(h.a), Number);
            Ua(n);
            for (var q = n.length, r = [], w = void 0, t = void 0, A = void 0, A = t = void 0, w = 0; w < q; ++w)
                for (t = n[w], A = h.a[t], A = A / l - 1, t = t / l; t < A; ++t)
                    r.push(t, t + 1);
            l = new Uint16Array(r);
            h = b.createBuffer();
            b.bindBuffer(34963, h);
            b.bufferData(34963, l, 35048);
            b.enableVertexAttribArray(this.d.a);
            b.vertexAttribPointer(this.d.a, 2, 5126, !1, 4 * c, 0);
            b.uniform4fv(this.d.b, [1, 1, 0, 0.75]);
            b.drawElements(1, l.length, 5123, 0);
            b.bindBuffer(34963,
            null);
            b.deleteBuffer(h)
        }
    }
    ye(this.e);
    Ce(this.e, 0.5, 0.5);
    De(this.e, e[0] / f, e[1] / f);
    Ce(this.e, - 0.5, - 0.5)
};
function mo(a, b) {
    var c = a.a, d = c.a, e = io.va(), f = jo.va(), e = bo(c, e, f);
    d.useProgram(e);
    null === a.c && (a.c = new ko(d, e));
    d.uniformMatrix4fv(a.c.c, !1, a.f);
    for (var g, h, f = 0; f < b.length; ++f)
        h = b[f], e = h.da, g = h.a, co(c, e), d.enableVertexAttribArray(a.c.a), d.vertexAttribPointer(a.c.a, 2, 5126, !1, 4 * g, 0), d.uniform4fv(a.c.b, [1, 0, 0, 0.75]), d.uniform1f(a.c.d, 3), Um(e, function(a, b) {
            d.drawArrays(0, a / g, (b - a) / g)
        })
};
function no() {
    this.a = "precision mediump float;varying vec2 a;uniform mat4 d;uniform float e;uniform sampler2D f;void main(){vec4 g\x3dtexture2D(f,a);gl_FragColor.rgb\x3d(d*vec4(g.rgb,1)).rgb;gl_FragColor.a\x3dg.a*e;}"
}
E(no, Wn);
fa(no);
function oo() {
    this.a = "varying vec2 a;attribute vec2 d,e;uniform mat4 b,c;void main(){gl_Position\x3dc*vec4(d,0,1);a\x3d(b*vec4(e,0,1)).st;}"
}
E(oo, Xn);
fa(oo);
function po(a, b) {
    this.f = a.getUniformLocation(b, "b");
    this.e = a.getUniformLocation(b, "c");
    this.g = a.getUniformLocation(b, "d");
    this.d = a.getUniformLocation(b, "e");
    this.c = a.getUniformLocation(b, "f");
    this.a = a.getAttribLocation(b, "d");
    this.b = a.getAttribLocation(b, "e")
};
function qo() {
    this.a = "precision mediump float;varying vec2 a;uniform float d;uniform sampler2D e;void main(){vec4 f\x3dtexture2D(e,a);gl_FragColor.rgb\x3df.rgb;gl_FragColor.a\x3df.a*d;}"
}
E(qo, Wn);
fa(qo);
function ro() {
    this.a = "varying vec2 a;attribute vec2 d,e;uniform mat4 b,c;void main(){gl_Position\x3dc*vec4(d,0,1);a\x3d(b*vec4(e,0,1)).st;}"
}
E(ro, Xn);
fa(ro);
function so(a, b) {
    this.f = a.getUniformLocation(b, "b");
    this.e = a.getUniformLocation(b, "c");
    this.d = a.getUniformLocation(b, "d");
    this.c = a.getUniformLocation(b, "e");
    this.a = a.getAttribLocation(b, "d");
    this.b = a.getAttribLocation(b, "e")
};
function to(a, b) {
    gk.call(this, 0, b);
    this.c = zg("CANVAS");
    this.c.height = a.clientHeight;
    this.c.width = a.clientWidth;
    this.c.className = "ol-unselectable";
    Dg(a, this.c);
    this.t=!0;
    this.C = [a.clientHeight, a.clientWidth];
    this.a = Rm(this.c, {
        antialias: !0,
        depth: !1,
        preserveDrawingBuffer: !1,
        stencil: !1
    });
    J(this.c, "webglcontextlost", this.Ff, !1, this);
    J(this.c, "webglcontextrestored", this.uf, !1, this);
    this.r = this.p = null;
    this.W = new an([ - 1, - 1, 0, 0, 1, - 1, 1, 0, - 1, 1, 0, 1, 1, 1, 1, 1]);
    this.e = {};
    this.i = {};
    this.g = {};
    this.b = new jm;
    this.K =
    null;
    this.k = new Fe(y(function(a) {
        var b = a[1];
        a = a[2];
        var e = b[0] - this.K[0], b = b[1] - this.K[1];
        return 65536 * Math.log(a) + Math.sqrt(e * e + b * b) / a
    }, this), function(a) {
        return a[0].b()
    });
    this.R = y(function() {
        if (!this.k.vb()) {
            Ke(this.k);
            var a = Ge(this.k)[0];
            eo(this, a)
        }
    }, this);
    this.q = 0;
    uo(this)
}
E(to, gk);
function co(a, b) {
    var c = a.a, d = b.a, e = x(b);
    if (e in a.e)
        e = a.e[e], c.bindBuffer(34962, e.buffer), Zm(e.oc, function(a, b) {
            var e = d.slice(a, b);
            c.bufferSubData(34962, a, new Float32Array(e))
        }), e.oc.clear();
    else {
        var f = c.createBuffer();
        c.bindBuffer(34962, f);
        c.bufferData(34962, new Float32Array(d), b.d);
        var g = new Wm;
        b.b.push(g);
        a.e[e] = {
            da: b,
            buffer: f,
            oc: g
        }
    }
}
function eo(a, b) {
    var c = a.a, d = b.b();
    if (km(a.b, d))
        d = a.b.get(d), c.bindTexture(3553, d.xa), 9729 != d.Xd && (c.texParameteri(3553, 10240, 9729), d.Xd = 9729), 9729 != d.Yd && (c.texParameteri(3553, 10240, 9729), d.Yd = 9729);
    else {
        var e = c.createTexture();
        c.bindTexture(3553, e);
        c.texImage2D(3553, 0, 6408, 6408, 5121, b.ca());
        c.texParameteri(3553, 10240, 9729);
        c.texParameteri(3553, 10241, 9729);
        c.texParameteri(3553, 10242, 33071);
        c.texParameteri(3553, 10243, 33071);
        lm(a.b, d, {
            xa: e,
            Xd: 9729,
            Yd: 9729
        })
    }
}
m = to.prototype;
m.mc = function(a) {
    return a instanceof sk ? new ao(this, a) : a instanceof rk ? new ln(this, a) : a instanceof fn ? new lo(this, a) : null
};
m.v = function() {
    var a = this.a;
    gc(this.e, function(a) {
        Oa(a.da.b, a.oc)
    });
    a.isContextLost() || (gc(this.e, function(b) {
        a.deleteBuffer(b.buffer)
    }), gc(this.g, function(b) {
        a.deleteProgram(b)
    }), gc(this.i, function(b) {
        a.deleteShader(b)
    }), this.b.forEach(function(b) {
        null === b || a.deleteTexture(b.xa)
    }));
    to.F.v.call(this)
};
m.De = function(a, b) {
    for (var c = this.a, d; 1024 < this.b.T() - this.q;) {
        d = this.b.a.$a;
        if (null === d)
            if ( + this.b.a.Xb == b.index)
                break;
            else 
                --this.q;
        else 
            c.deleteTexture(d.xa);
        this.b.pop()
    }
};
m.wc = k("c");
function bo(a, b, c) {
    var d = x(b) + "/" + x(c);
    if (d in a.g)
        return a.g[d];
    var e = a.a, f = e.createProgram();
    e.attachShader(f, vo(a, b));
    e.attachShader(f, vo(a, c));
    e.linkProgram(f);
    return a.g[d] = f
}
function vo(a, b) {
    var c = x(b);
    if (c in a.i)
        return a.i[c];
    var d = a.a, e = d.createShader(b.N());
    d.shaderSource(e, b.ja());
    d.compileShader(e);
    return a.i[c] = e
}
m.Ff = function(a) {
    a.U();
    this.r = this.p = null;
    this.e = {};
    this.i = {};
    this.g = {};
    this.b.clear();
    this.q = 0;
    gc(this.d, function(a) {
        a.g()
    })
};
m.uf = function() {
    uo(this);
    Yj(this.f)
};
function uo(a) {
    a = a.a;
    a.activeTexture(33984);
    a.blendFuncSeparate(770, 771, 1, 771);
    a.disable(2884);
    a.disable(2929);
    a.disable(3089)
}
m.Jc = function(a) {
    var b = this.a;
    if (b.isContextLost())
        return !1;
    if (null === a)
        return this.t && (Ph(this.c, !1), this.t=!1), !1;
    this.K = a.focus;
    lm(this.b, ( - a.index).toString(), null);
    ++this.q;
    var c = a.Hc, d = a.A.resolution, e, f, g, h, l;
    e = 0;
    for (f = c.length; e < f; ++e)
        g = c[e], h = ik(this, g), l = a.qa[x(g)], l.visible && (l.Mc && d < l.maxResolution && d >= l.minResolution) && h.Pa(a, l);
    e = a.size;
    if (this.C[0] != e[0] || this.C[1] != e[1])
        this.c.width = e[0], this.c.height = e[1], this.C = e;
    b.bindFramebuffer(36160, null);
    b.clearColor(0, 0, 0, 0);
    b.clear(16384);
    b.enable(3042);
    b.viewport(0, 0, e[0], e[1]);
    co(this, this.W);
    var n = null, q;
    e = 0;
    for (f = c.length; e < f; ++e)
        if (g = c[e], l = a.qa[x(g)], l.visible && l.Mc&&!(d >= l.maxResolution || d < l.minResolution)) {
            var r = l.brightness || 1 != l.contrast || l.hue || 1 != l.saturation, w;
            r ? (h = no.va(), w = oo.va()) : (h = qo.va(), w = ro.va());
            h = bo(this, h, w);
            h != n && (b.useProgram(h), n = h, r ? null === this.p ? this.p = q = new po(b, h) : q = this.p : null === this.r ? this.r = q = new so(b, h) : q = this.r, b.enableVertexAttribArray(q.a), b.vertexAttribPointer(q.a, 2, 5126, !1, 16, 0), b.enableVertexAttribArray(q.b),
            b.vertexAttribPointer(q.b, 2, 5126, !1, 16, 8), b.uniform1i(q.c, 0));
            h = ik(this, g);
            b.uniformMatrix4fv(q.f, !1, h.e);
            b.uniformMatrix4fv(q.e, !1, h.r);
            r && b.uniformMatrix4fv(q.g, !1, kn(h, l.brightness, l.contrast, l.hue, l.saturation));
            b.uniform1f(q.d, l.opacity);
            b.bindTexture(3553, h.xa);
            b.drawArrays(5, 0, 4)
        }
    this.t || (Ph(this.c, !0), this.t=!0);
    hk(a);
    1024 < this.b.T() - this.q && a.ib.push(y(this.De, this));
    this.k.vb() || (a.ib.push(this.R), a.ta=!0);
    kk(this, a)
};
var wo = {}, xo = {
    ig: "canvas",
    og: "dom",
    fh: "webgl"
}, yo = ["webgl", "canvas", "dom"];
function W(a) {
    M.call(this);
    a = zo(a);
    this.e = new dg(this.Of, void 0, this);
    gb(this, this.e);
    this.re = ue();
    this.ue = ue();
    this.se = 0;
    this.d = null;
    this.f = 0;
    this.t=!1;
    this.r = this.W = null;
    this.b = wg("DIV", "ol-viewport");
    this.b.style.position = "relative";
    this.b.style.overflow = "hidden";
    this.b.style.width = "100%";
    this.b.style.height = "100%";
    this.b.style.msTouchAction = "none";
    ai && (this.b.className = "ol-touch");
    this.K = wg("DIV", "ol-overlaycontainer");
    J(this.K, ["click", "dblclick", ai ? "touchstart": "mousedown"], jb);
    this.b.appendChild(this.K);
    var b = new ei(this);
    J(b, kc(oi), this.$d, !1, this);
    gb(this, b);
    this.p = new sh;
    J(this.p, "key", this.Rd, !1, this);
    gb(this, this.p);
    b = new Yh(this.b);
    J(b, "mousewheel", this.Rd, !1, this);
    gb(this, b);
    this.k = a.controls;
    this.Ra = a.interactions;
    this.R = a.overlays;
    this.i = new a.Pf(this.b, this);
    gb(this, this.i);
    this.xe = new Jg;
    J(this.xe, "resize", this.sa, !1, this);
    this.C = null;
    this.g = [];
    this.lb = [];
    this.ia = new ig(this.jf, 0, this);
    this.ic = new Le(y(this.Pe, this), y(this.of, this));
    J(this, Uc("layergroup"), this.Xe, !1, this);
    J(this, Uc("view"),
    this.sf, !1, this);
    J(this, Uc("size"), this.lf, !1, this);
    J(this, Uc("target"), this.nf, !1, this);
    this.Zb(a.Zf);
    this.k.forEach(function(a) {
        a.setMap(this)
    }, this);
    this.R.forEach(function(a) {
        a.d(this)
    }, this)
}
E(W, M);
m = W.prototype;
m.ye = function(a) {
    this.k.push(a);
    a.setMap(this)
};
m.yd = function(a) {
    this.Ua().gb().push(a)
};
m.ze = function(a) {
    this.R.push(a);
    a.d(this)
};
m.Ga = function(a) {
    Ri(this);
    Array.prototype.push.apply(this.g, arguments)
};
m.v = function() {
    Eg(this.b);
    hb(this.ia);
    W.F.v.call(this)
};
m.Ne = k("i");
m.Ic = function() {
    return this.get("target")
};
W.prototype.getTarget = W.prototype.Ic;
function di(a, b) {
    var c = a.d;
    if (null === c)
        return null;
    var d = b.slice();
    return gn(c.ee, d, d)
}
m = W.prototype;
m.He = k("k");
m.Me = k("R");
m.Ie = function(a) {
    var b = null != a.layers ? a.layers: this.Ua().Ob();
    this.i.Ta(a.pixel, b, a.success, a.error)
};
m.Jd = function(a) {
    var b = null != a.layers ? a.layers: this.Ua().Ob();
    jk(this.i, a.pixel, b, a.success, a.error)
};
m.Ke = k("Ra");
m.Ua = function() {
    return this.get("layergroup")
};
W.prototype.getLayerGroup = W.prototype.Ua;
W.prototype.te = function() {
    return this.Ua().gb()
};
function Si(a, b) {
    var c = a.d;
    if (null === c)
        return null;
    var d = b.slice(0, 2);
    return gn(c.Dd, d, d)
}
W.prototype.c = function() {
    return this.get("size")
};
W.prototype.getSize = W.prototype.c;
W.prototype.a = function() {
    return this.get("view")
};
W.prototype.getView = W.prototype.a;
m = W.prototype;
m.Pe = function(a, b, c, d) {
    var e = this.d;
    if (!(null !== e && b in e.Lb && e.Lb[b][a.H.toString()]))
        return Infinity;
    a = c[0] - e.focus[0];
    c = c[1] - e.focus[1];
    return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
};
m.Rd = function(a, b) {
    this.$d(new ci(b || a.type, this, a))
};
m.$d = function(a) {
    if (null !== this.d) {
        "mouseout" == a.type || "touchend" == a.type ? this.C = null : this.C = a.d();
        a.b = this.d;
        var b = this.Ra.a, c;
        if (!1 !== K(this, a))
            for (c = b.length - 1; 0 <= c && b[c].xb(a); c--);
    }
};
m.jf = function() {
    var a = this.d, b = this.ic;
    if (!b.vb()) {
        var c = 16, d = c;
        if (null !== a) {
            var e = a.L;
            if (e[0] || e[1])
                c = 8, d = 2
        }
        e = ic(a.Lb);
        c*=e;
        d*=e;
        if (b.d < c) {
            Ke(b);
            c = Math.min(c - b.d, d, b.T());
            for (d = 0; d < c; ++d)
                e = Ge(b)[0], Cc(e, "change", b.g, !1, b), 0 == e.a && (e.a = 1, e.d = [Cc(e.c, "error", e.q, !1, e), Cc(e.c, "load", e.k, !1, e)], e.i(e, e.f));
            b.d += c
        }
    }
    b = this.lb;
    c = 0;
    for (d = b.length; c < d; ++c)
        b[c](this, a);
    b.length = 0
};
m.lf = function() {
    Yj(this)
};
m.nf = function() {
    var a = this.Ic(), a = s(a) ? u(a) ? document.getElementById(a): a: null;
    zh(this.p);
    null === a ? Eg(this.b) : (a.appendChild(this.b), th(this.p, a));
    this.sa()
};
m.of = function() {
    Ri(this)
};
m.tf = function() {
    Yj(this)
};
m.sf = function() {
    null !== this.W && (Fc(this.W), this.W = null);
    var a = this.a();
    null != a && (this.W = J(a, "change", this.tf, !1, this));
    Yj(this)
};
m.Ye = function() {
    Yj(this)
};
m.Xe = function() {
    null !== this.r && (Fc(this.r), this.r = null);
    var a = this.Ua();
    null != a && (this.r = J(a, "change", this.Ye, !1, this));
    Yj(this)
};
m.Wb = function() {
    var a = this.a(), b;
    if (b = s(a)) {
        if (a = a.Wb())
            a = null != this.c();
        b = a
    }
    return b
};
function Yj(a) {
    null == a.e.P && (0 === a.f ? (a = a.e, eg(a), a.dd()) : a.t=!0)
}
function Ri(a) {
    0 === a.f ? null != a.e.P || a.e.start() : a.t=!0
}
m.Kf = function(a) {
    if (s(this.k.remove(a)))
        return a.setMap(null), a
};
m.he = function(a) {
    return this.Ua().gb().remove(a)
};
m.Lf = function(a) {
    if (s(this.R.remove(a)))
        return a.d(null), a
};
m.Of = function(a) {
    var b, c, d;
    if (0 === this.f) {
        var e = this.c();
        b = this.a();
        var f = s(b) ? this.a().O(): void 0, g = null;
        if (s(e) && s(f) && f.Wb()) {
            g = Ra(b.e);
            b = this.Ua().bd();
            var h = b.layers;
            d = b.qa;
            var l = {}, n;
            b = 0;
            for (c = h.length; b < c; ++b)
                n = h[b], l[x(n)] = d[b];
            d = yi(f);
            g = {
                ta: !1,
                attributions: {},
                Dd: this.re,
                extent: null,
                focus: null === this.C ? d.center: this.C,
                index: this.se++,
                Hc: h,
                qa: l,
                Wd: {},
                ee: this.ue,
                ib: [],
                size: e,
                Uf: this.ic,
                time: a,
                gc: {},
                A: d,
                L: g,
                Lb: {}
            }
        }
        a = this.g;
        b = e = 0;
        for (c = a.length; b < c; ++b)
            f = a[b], f(this, g) && (a[e++] = f);
        a.length = e;
        null !== g && (g.extent = xd(d.center, d.resolution, d.rotation, g.size));
        this.d = g;
        this.i.Jc(g);
        this.t=!1;
        null !== g && (g.ta && Ri(this), Array.prototype.push.apply(this.lb, g.ib), 0 != this.g.length || (g.ta || g.L[0] || g.L[1]) || K(this, new bi("moveend", this)));
        K(this, new bi("postrender", this, g));
        0 != this.ia.P || this.ia.start()
    }
};
m.Rf = function(a) {
    this.l("layergroup", a)
};
W.prototype.setLayerGroup = W.prototype.Rf;
W.prototype.la = function(a) {
    this.l("size", a)
};
W.prototype.setSize = W.prototype.la;
W.prototype.ve = function(a) {
    this.l("target", a)
};
W.prototype.setTarget = W.prototype.ve;
W.prototype.we = function(a) {
    this.l("view", a)
};
W.prototype.setView = W.prototype.we;
W.prototype.sa = function() {
    var a = this.Ic(), a = s(a) ? u(a) ? document.getElementById(a): a: null;
    null === a ? this.la(void 0) : (a = Mh(a), this.la([a.width, a.height]))
};
function Gi(a, b) {
    ++a.f;
    try {
        b.call(void 0)
    } finally {
        if (0===--a.f && a.t) {
            var c = a.e;
            eg(c);
            c.dd()
        }
    }
}
function zo(a) {
    var b = {}, c = a.layers instanceof ej ? a.layers: new ej({
        layers: a.layers
    });
    b.layergroup = c;
    b.target = a.target;
    b.view = s(a.view) ? a.view : new T;
    var c = gk, d;
    d = s(a.renderers) ? a.renderers : s(a.renderer) ? [a.renderer] : yo;
    var e = d.length, f, g;
    for (f = 0; f < e; ++f)
        if (g = d[f], "canvas" == g) {
            if (lk) {
                c = Fm;
                break
            }
        } else if ("dom" == g) {
            c = Pm;
            break
        } else if ("webgl" == g && Sm) {
            c = to;
            break
        }
    d = s(a.controls) ? ia(a.controls) ? new N(Ra(a.controls)) : a.controls : Di();
    e = s(a.interactions) ? a.interactions : dj();
    a = s(a.overlays) ? ia(a.overlays) ? new N(Ra(a.overlays)) :
    a.overlays : new N;
    return {
        controls: d,
        interactions: e,
        overlays: a,
        Pf: c,
        Zf: b
    }
}
wo.Ce = function(a) {
    var b = p.location.search.substring(1);
    a = s(a) ? a : new Qf(b);
    return cg(a, "renderers") ? a.get("renderers").split(",") : cg(a, "renderer") ? [a.get("renderer")] : yo
};
lj();
var Ao = {
    gg: "bottom-left",
    hg: "bottom-right",
    Yg: "top-left",
    Zg: "top-right"
};
function Bo(a) {
    M.call(this);
    this.b = zg("DIV");
    this.b.style.position = "absolute";
    this.a = {
        kc: "",
        Na: "",
        Qa: "",
        Qc: "",
        visible: !0
    };
    this.c = null;
    J(this, Uc("element"), this.Ve, !1, this);
    J(this, Uc("map"), this.bf, !1, this);
    J(this, Uc("position"), this.gf, !1, this);
    J(this, Uc("positioning"), this.hf, !1, this);
    s(a.element) && this.ke(a.element);
    s(a.position) && this.k(a.position);
    s(a.positioning) && this.l("positioning", a.positioning)
}
E(Bo, M);
Bo.prototype.g = function() {
    return this.get("element")
};
Bo.prototype.getElement = Bo.prototype.g;
Bo.prototype.e = function() {
    return this.get("map")
};
Bo.prototype.getMap = Bo.prototype.e;
Bo.prototype.i = function() {
    return this.get("position")
};
Bo.prototype.getPosition = Bo.prototype.i;
Bo.prototype.f = function() {
    return this.get("positioning")
};
Bo.prototype.getPositioning = Bo.prototype.f;
m = Bo.prototype;
m.Ve = function() {
    Bg(this.b);
    var a = this.g();
    null != a && Ag(this.b, a)
};
m.bf = function() {
    null !== this.c && (Eg(this.b), Fc(this.c), this.c = null);
    var a = this.e();
    null != a && (this.c = J(a, "postrender", this.Ef, !1, this), Co(this), Ag(a.K, this.b))
};
m.Ef = function() {
    Co(this)
};
m.gf = function() {
    Co(this)
};
m.hf = function() {
    Co(this)
};
m.ke = function(a) {
    this.l("element", a)
};
Bo.prototype.setElement = Bo.prototype.ke;
Bo.prototype.d = function(a) {
    this.l("map", a)
};
Bo.prototype.setMap = Bo.prototype.d;
Bo.prototype.k = function(a) {
    this.l("position", a)
};
Bo.prototype.setPosition = Bo.prototype.k;
function Co(a) {
    var b = a.e(), c = a.i();
    if (s(b) && b.Wb() && s(c)) {
        var c = Si(b, c), d = b.c(), b = a.b.style, e = a.f();
        if ("bottom-right" == e || "top-right" == e) {
            "" !== a.a.Na && (a.a.Na = b.left = "");
            var f = Math.round(d[0] - c[0]) + "px";
            a.a.Qa != f && (a.a.Qa = b.right = f)
        } else 
            "" !== a.a.Qa && (a.a.Qa = b.right = ""), f = Math.round(c[0]) + "px", a.a.Na != f && (a.a.Na = b.left = f);
        "top-left" == e || "top-right" == e ? ("" !== a.a.kc && (a.a.kc = b.bottom = ""), c = Math.round(c[1]) + "px", a.a.Qc != c && (a.a.Qc = b.top = c)) : ("" !== a.a.Qc && (a.a.Qc = b.top = ""), c = Math.round(d[1] - c[1]) + "px",
        a.a.kc != c && (a.a.kc = b.bottom = c));
        a.a.visible || (Ph(a.b, !0), a.a.visible=!0)
    } else 
        a.a.visible && (Ph(a.b, !1), a.a.visible=!1)
};
var Do;
Do=!1;
var Eo = sb();
Eo && ( - 1 != Eo.indexOf("Firefox")||-1 != Eo.indexOf("Camino")||-1 != Eo.indexOf("iPhone")||-1 != Eo.indexOf("iPod")||-1 != Eo.indexOf("iPad")||-1 != Eo.indexOf("Android")||-1 != Eo.indexOf("Chrome") && (Do=!0));
var Fo = Do;
var Go = yb ? "webkitfullscreenchange": "mozfullscreenchange";
function Ho() {
    var a = qg().a, b = a.body;
    return !!b.webkitRequestFullScreen||!!b.mozRequestFullScreen && a.mozFullScreenEnabled
}
function Io() {
    var a = qg().a;
    return !!a.webkitIsFullScreen||!!a.mozFullScreen
};
function Jo(a) {
    a = s(a) ? a : {};
    this.b = s(a.className) ? a.className : "ol-full-screen";
    var b = wg("A", {
        href: "#fullScreen",
        "class": this.b + "-" + Io()
    });
    J(b, ["click", "touchend"], this.c, !1, this);
    J(p.document, Go, this.f, !1, this);
    b = wg("DIV", {
        "class": this.b + " ol-unselectable " + (Ho() ? "" : "ol-unsupported")
    }, b);
    zi.call(this, {
        element: b,
        target: a.target
    });
    this.g = s(a.keys) ? a.keys : !1
}
E(Jo, zi);
Jo.prototype.c = function(a) {
    Ho() && (a.U(), a = this.a, null !== a && (Io() ? (a = qg().a, a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen && a.mozCancelFullScreen()) : (a = a.Ic(), a = u(a) ? document.getElementById(a) : a, this.g ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullScreen && a.ALLOW_KEYBOARD_INPUT && Fo ? a.webkitRequestFullScreen(a.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.mozRequestFullScreen && a.mozRequestFullScreen() : a.webkitRequestFullScreen ?
    a.webkitRequestFullScreen() : a.mozRequestFullScreen && a.mozRequestFullScreen())))
};
Jo.prototype.f = function() {
    var a = this.b + "-true", b = this.b + "-false", c = Fg(this.element);
    Io() ? ng(c, b, a) : ng(c, a, b)
};
function Ko(a) {
    a = s(a) ? a : {};
    var b = wg("DIV", {
        "class": s(a.className) ? a.className: "ol-mouse-position"
    });
    zi.call(this, {
        element: b,
        target: a.target
    });
    J(this, Uc("projection"), this.K, !1, this);
    s(a.coordinateFormat) && this.r(a.coordinateFormat);
    s(a.projection) && this.k(ke(a.projection));
    this.R = s(a.undefinedHTML) ? a.undefinedHTML : "";
    this.g = b.innerHTML;
    this.f = this.c = this.b = null
}
E(Ko, zi);
Ko.prototype.d = function(a) {
    a = a.b;
    null === a ? this.b = null : this.b != a.A.projection && (this.b = a.A.projection, this.c = null);
    Lo(this, this.f)
};
Ko.prototype.K = function() {
    this.c = null
};
Ko.prototype.i = function() {
    return this.get("coordinateFormat")
};
Ko.prototype.getCoordinateFormat = Ko.prototype.i;
Ko.prototype.ga = function() {
    return this.get("projection")
};
Ko.prototype.getProjection = Ko.prototype.ga;
Ko.prototype.t = function(a) {
    a = Jh(a, this.a.b);
    this.f = [a.x, a.y];
    Lo(this, this.f)
};
Ko.prototype.C = function() {
    Lo(this, null);
    this.f = null
};
Ko.prototype.setMap = function(a) {
    Ko.F.setMap.call(this, a);
    null !== a && (a = a.b, this.e.push(J(a, "mousemove", this.t, !1, this), J(a, "mouseout", this.C, !1, this)))
};
Ko.prototype.r = function(a) {
    this.l("coordinateFormat", a)
};
Ko.prototype.setCoordinateFormat = Ko.prototype.r;
Ko.prototype.k = function(a) {
    this.l("projection", a)
};
Ko.prototype.setProjection = Ko.prototype.k;
function Lo(a, b) {
    var c = a.R;
    if (null !== b && null !== a.b) {
        if (null === a.c) {
            var d = a.ga();
            a.c = s(d) ? Od(a.b, d) : me
        }
        d = di(a.a, b);
        null !== d && (a.c(d, d), c = a.i(), c = s(c) ? c(d) : d.toString())
    }
    s(a.g) && c == a.g || (a.element.innerHTML = c, a.g = c)
};
var Mo = {
    oe: "degrees",
    Bg: "imperial",
    Pg: "nautical",
    Hg: "metric",
    dh: "us"
};
function No(a) {
    a = a || {};
    var b = s(a.className) ? a.className: "ol-scale-line";
    this.f = wg("DIV", {
        "class": b + "-inner"
    });
    this.g = wg("DIV", {
        "class": b + " ol-unselectable"
    }, this.f);
    this.k = null;
    this.i = s(a.minWidth) ? a.minWidth : 64;
    this.c=!1;
    this.C = void 0;
    this.r = "";
    this.b = null;
    zi.call(this, {
        element: this.g,
        target: a.target
    });
    J(this, Uc("units"), this.R, !1, this);
    this.K(a.units || "metric")
}
E(No, zi);
var Oo = [1, 2, 5];
No.prototype.t = function() {
    return this.get("units")
};
No.prototype.getUnits = No.prototype.t;
No.prototype.d = function(a) {
    a = a.b;
    null === a ? this.k = null : this.k = a.A;
    Po(this)
};
No.prototype.R = function() {
    Po(this)
};
No.prototype.K = function(a) {
    this.l("units", a)
};
No.prototype.setUnits = No.prototype.K;
function Po(a) {
    var b = a.k;
    if (null === b)
        a.c && (Ph(a.g, !1), a.c=!1);
    else {
        var c = b.center, d = b.projection, b = d.b(b.resolution, c), e = d.Kb, f = a.t();
        "degrees" != e || "metric" != f && "imperial" != f ? "ft" != e && "m" != e || "degrees" != f ? a.b = null : (null === a.b && (a.b = Od(d, ke("EPSG:4326"))), c = Math.cos(ad(a.b(c)[1])), d = Hd.a, "ft" == e && (d/=0.3048), b*=180 / (Math.PI * c * d)) : (a.b = null, c = Math.cos(ad(c[1])), b*=Math.PI * c * Hd.a / 180);
        c = a.i * b;
        e = "";
        "degrees" == f ? c < 1 / 60 ? (e = "\u2033", b*=3600) : 1 > c ? (e = "\u2032", b*=60) : e = "\u00b0" : "imperial" == f ? 0.9144 > c ? (e = "in",
        b/=0.0254) : 1609.344 > c ? (e = "ft", b/=0.3048) : (e = "mi", b/=1609.344) : "nautical" == f ? (b/=1852, e = "nm") : "metric" == f ? 1 > c ? (e = "mm", b*=1E3) : 1E3 > c ? e = "m" : (e = "km", b/=1E3) : "us" == f && (0.9144 > c ? (e = "in", b*=39.37) : 1609.344 > c ? (e = "ft", b/=0.30480061) : (e = "mi", b/=1609.3472));
        for (var f = 3 * Math.floor(Math.log(a.i * b) / Math.log(10)), g, h; ;) {
            g = Oo[f%3] * Math.pow(10, Math.floor(f / 3));
            h = Math.round(g / b);
            if (h >= a.i)
                break;
            ++f
        }
        g = g + e;
        a.r != g && (a.f.innerHTML = g, a.r = g);
        a.C != h && (a.f.style.width = h + "px", a.C = h);
        a.c || (Ph(a.g, !0), a.c=!0)
    }
};
function Qo(a) {
    db.call(this);
    this.b = a;
    this.a = {}
}
E(Qo, db);
var Ro = [];
Qo.prototype.Xa = function(a, b, c, d, e) {
    ia(b) || (Ro[0] = b, b = Ro);
    for (var f = 0; f < b.length; f++) {
        var g = J(a, b[f], c || this, d ||!1, e || this.b || this);
        this.a[g.key] = g
    }
    return this
};
Qo.prototype.ud = function(a, b, c, d, e) {
    if (ia(b))
        for (var f = 0; f < b.length; f++)
            this.ud(a, b[f], c, d, e);
    else {
        a:
        if (e = e || this.b || this, d=!!d, c = yc(c || this), cc(a))
            a = a.Ia.a[b], b =- 1, a && (b = Mc(a, c, d, e)), e =- 1 < b ? a[b] : null;
        else {
            if (a = Ec(a, b, d))
                for (b = 0; b < a.length; b++)
                    if (!a[b].Za && a[b].Oa == c && a[b].capture == d && a[b].tb == e) {
                        e = a[b];
                        break a
                    }
            e = null
        }
        e && (Fc(e), delete this.a[e.key])
    }
    return this
};
function So(a) {
    gc(a.a, Fc);
    a.a = {}
}
Qo.prototype.v = function() {
    Qo.F.v.call(this);
    So(this)
};
Qo.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};
function To(a, b, c) {
    Nc.call(this);
    this.target = a;
    this.d = b || a;
    this.b = c || new Bh(NaN, NaN, NaN, NaN);
    this.c = sg(a);
    this.a = new Qo(this);
    gb(this, this.a);
    J(this.d, ["touchstart", "mousedown"], this.me, !1, this)
}
E(To, Nc);
var Uo = G || xb && Mb("1.9.3");
m = To.prototype;
m.clientX = 0;
m.clientY = 0;
m.Nd = 0;
m.Od = 0;
m.Pd = 0;
m.Qd = 0;
m.na = 0;
m.ma = 0;
m.Ed=!0;
m.sb=!1;
m.Ud = 0;
m.Bf = 0;
m.wf=!1;
m.vd=!1;
m.v = function() {
    To.F.v.call(this);
    Dc(this.d, ["touchstart", "mousedown"], this.me, !1, this);
    So(this.a);
    Uo && this.c.releaseCapture();
    this.d = this.target = null
};
function Vo(a) {
    s(a.f) || (a.f = Qh(a.target));
    return a.f
}
m.me = function(a) {
    var b = "mousedown" == a.type;
    if (!this.Ed || this.sb || b&&!Wb(a))
        K(this, "earlycancel");
    else {
        Wo(a);
        if (0 == this.Ud)
            if (K(this, new Xo("start", this, a.clientX, a.clientY, a)))
                this.sb=!0, a.U();
            else 
                return;
        else 
            a.U();
        var b = this.c, c = b.documentElement, d=!Uo;
        this.a.Xa(b, ["touchmove", "mousemove"], this.ff, d);
        this.a.Xa(b, ["touchend", "mouseup"], this.rc, d);
        Uo ? (c.setCapture(!1), this.a.Xa(c, "losecapture", this.rc)) : this.a.Xa(b ? b.parentWindow || b.defaultView : window, "blur", this.rc);
        G && this.wf && this.a.Xa(b, "dragstart",
        kb);
        this.g && this.a.Xa(this.g, "scroll", this.Hf, d);
        this.clientX = this.Pd = a.clientX;
        this.clientY = this.Qd = a.clientY;
        this.Nd = a.gd;
        this.Od = a.hd;
        this.vd ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, c || "fixed" != Dh(a, "position") || (c = sg(a).documentElement), c ? (xb ? (d = Th(c), b += d.left) : G && 8 <= Ob && (d = Th(c), b -= d.left), a = Qh(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
        this.na = a;
        this.ma = this.target.offsetTop;
        this.e = Ig(qg(this.c));
        this.Bf = sa()
    }
};
m.rc = function(a, b) {
    So(this.a);
    Uo && this.c.releaseCapture();
    if (this.sb) {
        Wo(a);
        this.sb=!1;
        var c = Yo(this, this.na), d = Zo(this, this.ma);
        K(this, new Xo("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
    } else 
        K(this, "earlycancel")
};
function Wo(a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? Ub(a, a.fa.targetTouches[0], a.c) : "touchend" != b && "touchcancel" != b || Ub(a, a.fa.changedTouches[0], a.c)
}
m.ff = function(a) {
    if (this.Ed) {
        Wo(a);
        var b = (this.vd && Vo(this)?-1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.Nd = a.gd;
        this.Od = a.hd;
        if (!this.sb) {
            var d = this.Pd - this.clientX, e = this.Qd - this.clientY;
            if (d * d + e * e > this.Ud)
                if (K(this, new Xo("start", this, a.clientX, a.clientY, a)))
                    this.sb=!0;
                else {
                    this.$b || this.rc(a);
                    return 
                }
        }
        c = $o(this, b, c);
        b = c.x;
        c = c.y;
        this.sb && K(this, new Xo("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (ap(this, a, b, c), a.U())
    }
};
function $o(a, b, c) {
    var d = Ig(qg(a.c));
    b += d.x - a.e.x;
    c += d.y - a.e.y;
    a.e = d;
    a.na += b;
    a.ma += c;
    b = Yo(a, a.na);
    a = Zo(a, a.ma);
    return new og(b, a)
}
m.Hf = function(a) {
    var b = $o(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    ap(this, a, b.x, b.y)
};
function ap(a, b, c, d) {
    a.vd && Vo(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
    a.target.style.top = d + "px";
    K(a, new Xo("drag", a, b.clientX, b.clientY, b, c, d))
}
function Yo(a, b) {
    var c = a.b, d = isNaN(c.left) ? null: c.left, c = isNaN(c.width) ? 0: c.width;
    return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : - Infinity, b))
}
function Zo(a, b) {
    var c = a.b, d = isNaN(c.top) ? null: c.top, c = isNaN(c.height) ? 0: c.height;
    return Math.min(null != d ? d + c : Infinity, Math.max(null != d ? d : - Infinity, b))
}
function Xo(a, b, c, d, e, f, g, h) {
    ib.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.d = e;
    this.left = s(f) ? f : b.na;
    this.top = s(g) ? g : b.ma;
    this.b = b;
    this.a=!!h
}
E(Xo, ib);
function bp(a) {
    a = s(a) ? a : {};
    this.b = void 0;
    this.c = cp;
    this.i=!1;
    this.f = null;
    a = s(a.className) ? a.className : "ol-zoomslider";
    a = wg("DIV", a + " ol-unselectable", wg("DIV", a + "-thumb ol-unselectable"));
    null !== this.f && (Ga(this.f, Fc), this.f = null);
    var b = new To(a.childNodes[0]);
    this.f = [J(b, ["drag", "end"], this.r, void 0, this)];
    this.g = b;
    J(a, ["touchend", "click"], this.k, !1, this);
    zi.call(this, {
        element: a
    })
}
E(bp, zi);
var cp = 0;
bp.prototype.setMap = function(a) {
    bp.F.setMap.call(this, a);
    null === a || Yj(a)
};
bp.prototype.d = function(a) {
    if (null !== a.b) {
        if (!this.i) {
            var b = this.element, c = Fg(b);
            var d = sg(b), e = G && b.currentStyle;
            e && Gg(qg(d)) && "auto" != e.width && "auto" != e.height&&!e.boxSizing ? (d = Uh(b, e.width, "width", "pixelWidth"), b = Uh(b, e.height, "height", "pixelHeight"), b = new pg(d, b)) : (e = new pg(b.offsetWidth, b.offsetHeight), d = Sh(b, "padding"), b = Th(b), b = new pg(e.width - b.left - d.left - d.right - b.right, e.height - b.top - d.top - d.bottom - b.bottom));
            var e = Ih(c), d = Mh(c), e = new Bh(e.x, e.y, d.width, d.height), d = Sh(c, "margin"), f = Th(c),
            c = b.width - d.left - d.right - f.left - f.right - e.width, e = b.height - d.top - d.bottom - f.top - f.bottom - e.height;
            b.width > b.height ? (this.c = 1, c = new Bh(0, 0, c, 0)) : (this.c = cp, c = new Bh(0, 0, 0, e));
            this.g.b = c || new Bh(NaN, NaN, NaN, NaN);
            this.i=!0
        }
        a = a.b.A.resolution;
        a !== this.b && (this.b = a, a =- 1 * (xi(this.a.a().O())(a) - 1), c = this.g, b = Fg(this.element), 1 == this.c ? Eh(b, c.b.left + c.b.width * a) : Eh(b, c.b.left, c.b.top + c.b.height * a))
    }
};
bp.prototype.k = function() {};
bp.prototype.r = function(a) {
    var b = this.a, c = b.a().O();
    if ("drag" === a.type) {
        var b = this.g.b, d = 0, d = 1 === this.c ? (a.left - b.left) / b.width: (a.top - b.top) / b.height;
        a =- 1 * (Zc(d, 0, 1) - 1);
        a = wi(this.a.a().O())(a);
        a !== this.b && (this.b = a, c.kb(a))
    } else 
        b.Ga(vf({
            resolution: this.b,
            duration: 200,
            easing: af
        })), a = c.Ha(this.b), c.kb(a)
};
function dp(a) {
    a = s(a) ? a : {};
    this.b = s(a.extent) ? a.extent : null;
    var b = wg("DIV", {
        "class": (s(a.className) ? a.className : "ol-zoom-extent") + " ol-unselectable"
    }), c = wg("A", {
        href: "#zoomExtent"
    });
    b.appendChild(c);
    J(b, ["touchend", "click"], this.c, !1, this);
    zi.call(this, {
        element: b,
        target: a.target
    })
}
E(dp, zi);
dp.prototype.c = function(a) {
    a.U();
    a = this.a;
    var b = a.a().O(), c = null === this.b ? b.ga().ba(): this.b;
    b.$c(c, a.c())
};
function ep(a) {
    M.call(this);
    this.a = a;
    J(this.a, "change", this.k, !1, this);
    J(this, Uc("value"), this.r, !1, this);
    J(this, Uc("valueAsNumber"), this.p, !1, this);
    J(this, Uc("checked"), this.i, !1, this)
}
E(ep, M);
ep.prototype.b = function() {
    return this.get("checked")
};
ep.prototype.getChecked = ep.prototype.b;
ep.prototype.d = function() {
    return this.get("value")
};
ep.prototype.getValue = ep.prototype.d;
ep.prototype.c = function() {
    return this.get("valueAsNumber")
};
ep.prototype.getValueAsNumber = ep.prototype.c;
ep.prototype.f = function(a) {
    this.l("value", a)
};
ep.prototype.setValue = ep.prototype.f;
ep.prototype.g = function(a) {
    this.l("valueAsNumber", a)
};
ep.prototype.setValueAsNumber = ep.prototype.g;
ep.prototype.e = function(a) {
    this.l("checked", a)
};
ep.prototype.setChecked = ep.prototype.e;
ep.prototype.k = function() {
    "checkbox" === this.a.type || "radio" === this.a.type ? this.e(this.a.checked) : (this.f(this.a.value), this.g(this.a.valueAsNumber))
};
ep.prototype.i = function() {
    this.a.checked = this.b() ? "checked" : void 0
};
ep.prototype.r = function() {
    this.a.value = this.d()
};
ep.prototype.p = function() {
    this.a.value = this.c()
};
function fp(a, b) {
    this.x = a;
    this.y = b
}
E(fp, og);
fp.prototype.ea = function() {
    return new fp(this.x, this.y)
};
fp.prototype.scale = og.prototype.scale;
fp.prototype.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
function gp(a) {
    a = s(a) ? a : {};
    Pi.call(this);
    this.V = s(a.condition) ? a.condition : Ni;
    this.a = this.b = void 0;
    this.f = 0
}
E(gp, Pi);
gp.prototype.Bc = function(a) {
    var b = a.a;
    a = a.map;
    var c = a.c(), c = new fp(b.Ld - c[0] / 2, c[1] / 2 - b.Md), b = Math.atan2(c.y, c.x), c = Math.sqrt(c.x * c.x + c.y * c.y), d = a.a().O(), e = yi(d);
    Ri(a);
    s(this.b) && Fi(a, d, e.rotation - (b - this.b));
    this.b = b;
    s(this.a) && Ii(a, d, this.a * (e.resolution / c));
    s(this.a) && (this.f = this.a / c);
    this.a = c
};
gp.prototype.Tb = function(a) {
    var b = a.map, c = b.a().O(), d = yi(c), e = this.f - 1;
    Gi(b, function() {
        var a = d.rotation, a = c.lc(a, 0);
        Fi(b, c, a, void 0, void 0);
        a = d.resolution;
        a = c.Ha(a, 0, e);
        Ii(b, c, a, void 0, 400)
    });
    this.f = 0;
    return !0
};
gp.prototype.Ub = function(a) {
    return this.V(a) ? (this.a = this.b = void 0, !0) : !1
};
function hp(a) {
    a = s(a) ? a : {};
    this.d = s(a.condition) ? a.condition : Li;
    this.b = {};
    this.a = {};
    this.c = s(a.layerFilter) ? a.layerFilter : null
}
E(hp, Ei);
hp.prototype.xb = function(a) {
    if (this.d(a)) {
        var b = a.map, c = b.Ua().Ob();
        null === this.c || (c = Ha(c, this.c));
        var d=!Ni(a), e = this;
        b.Jd({
            layers: c,
            pixel: a.e(),
            success: function(a) {
                var g = c, h = x(b);
                h in e.a || (e.a[h] = {
                    map: b,
                    layers: {}
                });
                for (var l = 0, n = a.length; l < n; ++l) {
                    var q = g[l], r = x(q), w = e.a[h].layers[r];
                    s(w) || (w = new cm({
                        source: new yl({
                            parser: null
                        }),
                        style: q instanceof cm ? q.c: null
                    }), w.C=!0, b.yd(w), e.a[h].layers[r] = w, e.b[r] = {});
                    var t, A;
                    la(q.d) && (t = [], A = []);
                    var B = a[l], v = B.length, z = [], H = [], D = e.b[r], R = D;
                    if (d) {
                        for (var U in D)
                            s(A) &&
                            A.push(q.a.a[U]), H.push(D[U]);
                        D = {};
                        e.b[r] = D
                    }
                    for (var P = 0; P < v; ++P) {
                        var F = B[P], L = x(F), aa = D[L];
                        aa ? (s(A) && A.push(F), delete D[L], H.push(aa)) : L in R || (aa = new O(F.ob()), aa.Ea(F.G().ea()), aa.Ja = F.Ja, aa.c = F.Cb(), aa.a = "selected", D[L] = aa, s(t) && t.push(F), z.push(aa))
                    }
                    la(q.d) && (q.d("hidden", t), q.d("default", A));
                    q = w;
                    B = od();
                    P = P = void 0;
                    v = 0;
                    for (R = H.length; v < R; ++v)
                        P = H[v], q.a.remove(P), P = P.G(), null === P || ud(B, P.ua());
                    K(q, {
                        extent: B,
                        features: H,
                        type: "remove"
                    });
                    em(w, z);
                    0 == ic(D) && (b.he(w), delete e.a[h].layers[r], delete e.b[r])
                }
            }
        })
    }
    return !0
};
function ip(a) {
    if ("undefined" != typeof DOMParser)
        return (new DOMParser).parseFromString(a, "application/xml");
    if ("undefined" != typeof ActiveXObject) {
        var b = new ActiveXObject("MSXML2.DOMDocument");
        if (b) {
            b.resolveExternals=!1;
            b.validateOnParse=!1;
            try {
                b.setProperty("ProhibitDTD", !0), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
            } catch (c) {}
        }
        b.loadXML(a);
        return b
    }
    throw Error("Your browser does not support loading xml documents");
}
function jp(a) {
    if ("undefined" != typeof XMLSerializer)
        return (new XMLSerializer).serializeToString(a);
    if (a = a.xml)
        return a;
    throw Error("Your browser does not support serializing XML documents");
};
function kp() {};
function lp() {
    p.ActiveXObject && (this.b = new ActiveXObject("Microsoft.XMLDOM"));
    this.S = {
        ya: /^\s*|\s*$/g,
        Mf: /\s*/g,
        Jb: /\s+/,
        sd: /\s*,\s*/g
    }
}
E(lp, kp);
m = lp.prototype;
m.Ya = function(a, b) {
    b || (b = {});
    var c = this.j[a.namespaceURI] || this.j[this.B];
    if (c) {
        var d = a.localName || a.nodeName.split(":").pop();
        (c = c[d] || c["*"]) && c.apply(this, [a, b])
    }
    return b
};
function X(a, b, c) {
    c || (c = {});
    b = b.childNodes;
    for (var d, e = 0, f = b.length; e < f; ++e)
        d = b[e], 1 == d.nodeType && a.Ya(d, c)
}
function Y(a) {
    var b = "";
    if (a)
        for (a = a.firstChild; a; a = a.nextSibling)
            switch (a.nodeType) {
            case 3:
            case 4:
                b += a.nodeValue
            }
    return b
}
m.getAttributeNS = function(a, b, c) {
    var d = "";
    if (a.getAttributeNS)
        d = a.getAttributeNS(b, c) || "";
    else {
        var e = null;
        if (a.getAttributeNodeNS)
            e = a.getAttributeNodeNS(b, c);
        else {
            a = a.attributes;
            for (var f, g, h = 0, l = a.length; h < l; ++h)
                if (f = a[h], f.namespaceURI == b && (g = f.prefix ? f.prefix + ":" + c : c, g == f.nodeName)) {
                    e = f;
                    break
                }
        }
        if (b = e)
            d = b.nodeValue
    }
    return d
};
m.createElementNS = function(a, b) {
    var c = b ? b: this.B;
    return this.b ? this.b.createNode(1, a, c) : document.createElementNS(c, a)
};
function $(a, b, c, d, e) {
    var f = null;
    s(a.a) && (f = a.a[d ? d: a.B][b].apply(a, [c]), e && f && e.appendChild(f));
    return f
}
m.createTextNode = function(a) {
    return this.b ? this.b.createTextNode(a) : document.createTextNode(a)
};
m.setAttributeNS = function(a, b, c, d) {
    if (a.setAttributeNS)
        a.setAttributeNS(b, c, d);
    else if (this.b)
        b ? (b = a.ownerDocument.createNode(2, c, b), b.nodeValue = d, a.setAttributeNode(b)) : a.setAttribute(c, d);
    else 
        throw Error("setAttributeNS not implemented");
};
function mp(a, b) {
    if (a.b)
        return b.xml;
    if (1 == b.nodeType) {
        var c = document.implementation.createDocument("", "", null);
        c.importNode ? c.appendChild(c.importNode(b, !0)) : c.appendChild(b);
        return jp(c)
    }
    return jp(b)
}
m.createDocumentFragment = function() {
    return this.b ? this.b.createDocumentFragment() : document.createDocumentFragment()
};
function np(a) {
    a = s(a) ? a : {};
    this.extractAttributes = s(a.extractAttributes) ? a.extractAttributes : !0;
    this.extractWaypoints = s(a.extractWaypoints) ? a.extractWaypoints : !0;
    this.extractTracks = s(a.extractTracks) ? a.extractTracks : !0;
    this.extractRoutes = s(a.extractRoutes) ? a.extractRoutes : !0;
    this.creator = s(a.creator) ? a.creator : "OpenLayers";
    this.defaultDesc = s(a.defaultDesc) ? a.defaultDesc : "No description available";
    this.B = "http://www.topografix.com/GPX/1/1";
    this.schemaLocation = "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd";
    this.j = {
        "http://www.topografix.com/GPX/1/1": {
            gpx: function(a, c) {
                s(c.features) || (c.features = []);
                X(this, a, c)
            },
            wpt: function(a, c) {
                if (this.extractWaypoints) {
                    var d = {}, e = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
                    X(this, a, d);
                    var d = new O(d), f;
                    if (this.ha) {
                        var g = this.ha.aa;
                        g && (f = g(d, "point"))
                    }
                    e = new qm(e, f);
                    d.Ea(e);
                    c.features.push(d)
                }
            },
            rte: function(a, c) {
                if (this.extractRoutes || c.Ee) {
                    var d = {
                        properties: {},
                        geometry: {
                            type: "linestring",
                            coordinates: []
                        }
                    };
                    X(this, a, d);
                    var e = new O(d.properties),
                    f;
                    if (this.ha) {
                        var g = this.ha.aa;
                        g && (f = g(e, "linestring"))
                    }
                    d = new om(d.geometry.coordinates, f);
                    e.Ea(d);
                    c.features.push(e)
                }
            },
            rtept: function(a, c) {
                var d = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
                c.geometry.coordinates.push(d)
            },
            trk: function(a, c) {
                if (this.extractTracks) {
                    var d = this.j[this.B];
                    c.Ee=!0;
                    d.rte.apply(this, arguments)
                }
            },
            trkseg: function(a, c) {
                X(this, a, c)
            },
            trkpt: function(a, c) {
                this.j[this.B].rtept.apply(this, arguments)
            },
            "*": function(a, c) {
                if (!0 === this.extractAttributes) {
                    var d =
                    a.childNodes.length;
                    1 !== d && 2 !== d || 3 !== a.firstChild.nodeType && 4 !== a.firstChild.nodeType || this.j[this.B]._attribute.apply(this, arguments)
                }
            },
            _attribute: function(a, c) {
                var d = a.localName || a.nodeName.split(":").pop(), e = Y(a);
                c.properties ? c.properties[d] = e.replace(this.S.ya, "") : c[d] = e.replace(this.S.ya, "")
            }
        }
    };
    this.j["http://www.topografix.com/GPX/1/0"] = this.j[this.B];
    this.a = {
        "http://www.topografix.com/GPX/1/1": {
            _feature: function(a) {
                var c = a.G();
                if (c instanceof qm)
                    return $(this, "wpt", a);
                if (c instanceof om ||
                c instanceof pm || c instanceof um)
                    return $(this, "trk", a)
            },
            wpt: function(a) {
                var c = this.createElementNS("wpt"), d = a.G().s();
                c.setAttribute("lon", d[0]);
                c.setAttribute("lat", d[1]);
                d = a.ob();
                a = d.name || x(a).toString();
                $(this, "name", a, void 0, c);
                $(this, "desc", d.description || this.defaultDesc, void 0, c);
                return c
            },
            trk: function(a) {
                var c = a.ob(), d = this.createElementNS("trk"), e = c.name || x(a).toString();
                $(this, "name", e, void 0, d);
                $(this, "desc", c.description || this.defaultDesc, void 0, d);
                c = a.G();
                if (c instanceof om)
                    $(this,
                    "trkseg", a.G(), void 0, d);
                else if (c instanceof pm)
                    for (a = 0, e = c.o.length; a < e; ++a)
                        $(this, "trkseg", c.o[a], void 0, d);
                else if (c instanceof um)
                    for (a = 0, e = c.b.length; a < e; ++a)
                        $(this, "trkseg", c.b[a], void 0, d);
                return d
            },
            trkseg: function(a) {
                var c = this.createElementNS("trkseg");
                a = a.s();
                for (var d = 0, e = a.length; d < e; ++d)
                    $(this, "trkpt", a[d], void 0, c);
                return c
            },
            trkpt: function(a) {
                var c = this.createElementNS("trkpt");
                c.setAttribute("lon", a[0]);
                c.setAttribute("lat", a[1]);
                return c
            },
            metadata: function(a) {
                var c = this.createElementNS("metadata");
                s(a.name) && $(this, "name", a.name, void 0, c);
                s(a.desc) && $(this, "desc", a.desc, void 0, c);
                s(a.author) && $(this, "author", a.author, void 0, c);
                return c
            },
            name: function(a) {
                var c = this.createElementNS("name");
                c.appendChild(this.createTextNode(a));
                return c
            },
            desc: function(a) {
                var c = this.createElementNS("desc");
                c.appendChild(this.createTextNode(a));
                return c
            },
            author: function(a) {
                var c = this.createElementNS("author");
                c.appendChild(this.createTextNode(a));
                return c
            }
        }
    };
    lp.call(this)
}
E(np, lp);
np.prototype.Q = function(a) {
    u(a) && (a = ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var b = {
        metadata: {
            projection: "EPSG:4326"
        }
    };
    this.Ya(a, b);
    return b
};
np.prototype.dc = function(a, b) {
    this.ha = b;
    return this.Q(a)
};
np.prototype.cc = function(a, b) {
    this.ha = b;
    return this.Q(a)
};
np.prototype.write = function(a) {
    var b = ia(a.features) ? a.features: [a.features], c = this.createElementNS("gpx");
    c.setAttribute("version", "1.1");
    c.setAttribute("creator", this.creator);
    this.setAttributeNS(c, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    s(a.metadata) && $(this, "metadata", a.metadata, void 0, c);
    a = 0;
    for (var d = b.length; a < d; a++)
        $(this, "_feature", b[a], void 0, c);
    return mp(this, c)
};
function op(a) {
    nm.call(this);
    this.o = a;
    for (var b = 0, c = 0, d = a.length; c < d; ++c)
        s(b) && (b = a[c].dimension);
    this.dimension = b
}
E(op, nm);
op.prototype.N = ba("geometrycollection");
function pp() {}
E(pp, kp);
fa(pp);
pp.prototype.Q = function(a) {
    a = JSON.parse(a);
    return qp(this, a)
};
pp.prototype.dc = function(a, b) {
    var c = JSON.parse(a);
    return rp(this, c, b)
};
pp.prototype.cc = function(a, b) {
    return rp(this, a, b)
};
function qp(a, b, c) {
    if ("FeatureCollection" === b.type) {
        a = b.features;
        b = a.length;
        var d = Array(b), e;
        for (e = 0; e < b; ++e)
            d[e] = sp(a[e], c);
        c = d
    } else if ("Feature" === b.type)
        c = sp(b, c);
    else if ("GeometryCollection" === b.type) {
        b = b.geometries;
        d = b.length;
        e = Array(d);
        var f;
        for (f = 0; f < d; ++f)
            e[f] = qp(a, b[f], c);
        c = e
    } else 
        c = sp({
            type: "Feature",
            geometry: b
        }, c).G();
    return c
}
function rp(a, b, c) {
    c = qp(a, b, c);
    a = [];
    var d;
    if (c instanceof O)
        a = [c];
    else if (c instanceof Dd)
        d = new O, d.Ea(c), a = [d];
    else if (ia(c))
        for (var e, f, g = 0, h = c.length; g < h; ++g)
            if (e = c[g], f = f || e instanceof Dd)
                d = new O, d.Ea(e), a[g] = d;
            else {
                a = c;
                break
            }
    f = "EPSG:4326";
    null != b.crs && (b = b.crs, "name" === b.type && (f = b.properties.name));
    return {
        features: a,
        metadata: {
            projection: f
        }
    }
}
function sp(a, b) {
    var c = a.geometry, d = null, e = b || {}, f = new O(a.properties);
    s(a.id) && (f.Ja = a.id);
    if (c) {
        var d = c.type, e = e.aa, g;
        e && (g = e(f, qc[d]));
        switch (d) {
        case "Point":
            d = new qm(c.coordinates, g);
            break;
        case "LineString":
            d = new om(c.coordinates, g);
            break;
        case "Polygon":
            d = new um(c.coordinates, g);
            break;
        case "MultiPoint":
            d = new rm(c.coordinates, g);
            break;
        case "MultiLineString":
            d = new pm(c.coordinates, g);
            break;
        case "MultiPolygon":
            d = new vm(c.coordinates, g);
            break;
        default:
            throw Error("Bad geometry type: " + d);
        }
        f.Ea(d)
    }
    return f
}
function tp(a) {
    var b = a.N();
    return {
        type: mc(function(a) {
            return a === b
        }),
        coordinates: a.s()
    }
}
function up(a) {
    var b = a.G();
    a = a.ob();
    return {
        type: "Feature",
        properties: hc(a, function(a) {
            return !(a instanceof Dd)
        }),
        geometry: tp(b)
    }
}
pp.prototype.write = function(a) {
    var b;
    if (a instanceof op) {
        b = [];
        for (var c = 0, d = a.o.length; c < d; ++c)
            b.push(tp(a.o[c]));
        b = {
            type: "GeometryCollection",
            geometries: b
        }
    } else if (a instanceof Dd)
        b = tp(a);
    else if (a instanceof O)
        b = up(a);
    else if (ia(a)) {
        b = [];
        c = 0;
        for (d = a.length; c < d; ++c)
            b.push(up(a[c]));
        b = {
            type: "FeatureCollection",
            features: b
        }
    }
    return JSON.stringify(b)
};
var qc = {
    Point: "point",
    LineString: "linestring",
    Polygon: "polygon",
    MultiPoint: "multipoint",
    MultiLineString: "multilinestring",
    MultiPolygon: "multipolygon",
    GeometryCollection: "geometrycollection"
}; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function vp(a, b) {
    this.c = [];
    this.k = a;
    this.g = b || null
}
m = vp.prototype;
m.nb=!1;
m.Sb=!1;
m.Uc=!1;
m.Be=!1;
m.rd=!1;
m.Vc = 0;
m.cancel = function(a) {
    if (this.nb)
        this.b instanceof vp && this.b.cancel();
    else {
        if (this.a) {
            var b = this.a;
            delete this.a;
            a ? b.cancel(a) : (b.Vc--, 0 >= b.Vc && b.cancel())
        }
        this.k ? this.k.call(this.g, this) : this.rd=!0;
        this.nb || this.Bb(new wp(this))
    }
};
m.Cd = function(a, b) {
    this.Uc=!1;
    xp(this, a, b)
};
function xp(a, b, c) {
    a.nb=!0;
    a.b = c;
    a.Sb=!b;
    yp(a)
}
function zp(a) {
    if (a.nb) {
        if (!a.rd)
            throw new Ap(a);
        a.rd=!1
    }
}
m.aa = function(a) {
    zp(this);
    xp(this, !0, a)
};
m.Bb = function(a) {
    zp(this);
    xp(this, !1, a)
};
function Bp(a, b, c) {
    return Cp(a, b, null, c)
}
function Cp(a, b, c, d) {
    a.c.push([b, c, d]);
    a.nb && yp(a);
    return a
}
function Dp(a) {
    return La(a.c, function(a) {
        return la(a[1])
    })
}
function yp(a) {
    a.f && (a.nb && Dp(a)) && (p.clearTimeout(a.f), delete a.f);
    a.a && (a.a.Vc--, delete a.a);
    for (var b = a.b, c=!1, d=!1; a.c.length&&!a.Uc;) {
        var e = a.c.shift(), f = e[0], g = e[1], e = e[2];
        if (f = a.Sb ? g : f)
            try {
                var h = f.call(e || a.g, b);
                s(h) && (a.Sb = a.Sb && (h == b || h instanceof Error), a.b = b = h);
                b instanceof vp && (d=!0, a.Uc=!0)
            } catch (l) {
            b = l, a.Sb=!0, Dp(a) || (c=!0)
        }
    }
    a.b = b;
    d && (Cp(b, y(a.Cd, a, !0), y(a.Cd, a, !1)), b.Be=!0);
    c && (a.f = p.setTimeout(Se(b), 0))
}
function Ap(a) {
    ta.call(this);
    this.a = a
}
E(Ap, ta);
Ap.prototype.message = "Deferred has already fired";
Ap.prototype.name = "AlreadyCalledError";
function wp(a) {
    ta.call(this);
    this.a = a
}
E(wp, ta);
wp.prototype.message = "Deferred was canceled";
wp.prototype.name = "CanceledError";
function Ep(a, b, c, d, e, f) {
    vp.call(this, e, f);
    this.e = a;
    this.d = [];
    this.V=!!b;
    this.r=!!c;
    this.p=!!d;
    for (b = this.q = 0; b < a.length; b++)
        Cp(a[b], y(this.i, this, b, !0), y(this.i, this, b, !1));
    0 != a.length || this.V || this.aa(this.d)
}
E(Ep, vp);
Ep.prototype.i = function(a, b, c) {
    this.q++;
    this.d[a] = [b, c];
    this.nb || (this.V && b ? this.aa([a, c]) : this.r&&!b ? this.Bb(c) : this.q == this.e.length && this.aa(this.d));
    this.p&&!b && (c = null);
    return c
};
Ep.prototype.Bb = function(a) {
    Ep.F.Bb.call(this, a);
    for (a = 0; a < this.e.length; a++)
        this.e[a].cancel()
};
function Fp(a) {
    return Bp(new Ep(a, !1, !0), function(a) {
        for (var c = [], d = 0; d < a.length; d++)
            c[d] = a[d][1];
        return c
    })
};
var Gp;
Gp = {
    e: ["BC", "AD"],
    d: ["Before Christ", "Anno Domini"],
    g: "JFMAMJJASOND".split(""),
    $b: "JFMAMJJASOND".split(""),
    f: "January February March April May June July August September October November December".split(" "),
    r: "January February March April May June July August September October November December".split(" "),
    q: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    C: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
    la: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    R: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
    p: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    K: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
    V: "SMTWTFS".split(""),
    t: "SMTWTFS".split(""),
    k: ["Q1", "Q2", "Q3", "Q4"],
    i: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    a: ["AM", "PM"],
    b: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
    W: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
    c: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
    pe: 6,
    ia: [5, 6],
    qe: 5
};
var Hp = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/, Ip = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/, Jp = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
function Kp(a, b, c, d, e, f) {
    u(a) ? (this.f = a == Lp ? b : 0, this.d = a == Mp ? b : 0, this.a = a == Np ? b : 0, this.b = a == Op ? b : 0, this.c = a == Pp ? b : 0, this.e = a == Qp ? b : 0) : (this.f = a || 0, this.d = b || 0, this.a = c || 0, this.b = d || 0, this.c = e || 0, this.e = f || 0)
}
Kp.prototype.ea = function() {
    return new Kp(this.f, this.d, this.a, this.b, this.c, this.e)
};
var Lp = "y", Mp = "m", Np = "d", Op = "h", Pp = "n", Qp = "s";
Kp.prototype.add = function(a) {
    this.f += a.f;
    this.d += a.d;
    this.a += a.a;
    this.b += a.b;
    this.c += a.c;
    this.e += a.e
};
function Rp(a, b, c) {
    ka(a) ? (this.a = new Date(a, b || 0, c || 1), Sp(this, c || 1)) : ma(a) ? (this.a = new Date(a.getFullYear(), a.getMonth(), a.getDate()), Sp(this, a.getDate())) : (this.a = new Date(sa()), this.a.setHours(0), this.a.setMinutes(0), this.a.setSeconds(0), this.a.setMilliseconds(0))
}
m = Rp.prototype;
m.sc = Gp.pe;
m.tc = Gp.qe;
m.ea = function() {
    var a = new Rp(this.a);
    a.sc = this.sc;
    a.tc = this.tc;
    return a
};
m.getFullYear = function() {
    return this.a.getFullYear()
};
m.getMonth = function() {
    return this.a.getMonth()
};
m.getDate = function() {
    return this.a.getDate()
};
m.getTime = function() {
    return this.a.getTime()
};
function Tp(a) {
    a = a.a.getTimezoneOffset();
    if (0 == a)
        a = "Z";
    else {
        var b = Math.abs(a) / 60, c = Math.floor(b), b = 60 * (b - c);
        a = (0 < a ? "-" : "+") + Ca(c) + ":" + Ca(b)
    }
    return a
}
m.add = function(a) {
    if (a.f || a.d) {
        var b = this.getMonth() + a.d + 12 * a.f, c = this.getFullYear() + Math.floor(b / 12), b = b%12;
        0 > b && (b += 12);
        var d;
        a:
        {
            switch (b) {
            case 1:
                d = 0 != c%4 || 0 == c%100 && 0 != c%400 ? 28 : 29;
                break a;
            case 5:
            case 8:
            case 10:
            case 3:
                d = 30;
                break a
            }
            d = 31
        }
        d = Math.min(d, this.getDate());
        this.a.setDate(1);
        this.a.setFullYear(c);
        this.a.setMonth(b);
        this.a.setDate(d)
    }
    a.a && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.a), this.a.setDate(1), this.a.setFullYear(a.getFullYear()),
    this.a.setMonth(a.getMonth()), this.a.setDate(a.getDate()), Sp(this, a.getDate()))
};
m.zc = function(a, b) {
    return [this.getFullYear(), Ca(this.getMonth() + 1), Ca(this.getDate())].join(a ? "-" : "") + (b ? Tp(this) : "")
};
m.toString = function() {
    return this.zc()
};
function Sp(a, b) {
    a.getDate() != b && a.a.setUTCHours(a.a.getUTCHours() + (a.getDate() < b ? 1 : - 1))
}
m.valueOf = function() {
    return this.a.valueOf()
};
function Up(a, b, c, d, e, f, g) {
    this.a = ka(a) ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a ? a.getTime() : sa())
}
E(Up, Rp);
Up.prototype.add = function(a) {
    Rp.prototype.add.call(this, a);
    a.b && this.a.setHours(this.a.getHours() + a.b);
    a.c && this.a.setMinutes(this.a.getMinutes() + a.c);
    a.e && this.a.setSeconds(this.a.getSeconds() + a.e)
};
Up.prototype.zc = function(a, b) {
    var c = Rp.prototype.zc.call(this, a);
    return a ? c + " " + Ca(this.a.getHours()) + ":" + Ca(this.a.getMinutes()) + ":" + Ca(this.a.getSeconds()) + (b ? Tp(this) : "") : c + "T" + Ca(this.a.getHours()) + Ca(this.a.getMinutes()) + Ca(this.a.getSeconds()) + (b ? Tp(this) : "")
};
Up.prototype.toString = function() {
    return this.zc()
};
Up.prototype.ea = function() {
    var a = new Up(this.a);
    a.sc = this.sc;
    a.tc = this.tc;
    return a
};
function Vp(a) {
    this.d = a.url instanceof tk ? a.url : new V(a.url);
    this.b = s(a.width) ? a.width instanceof tk ? a.width : new V(a.width) : null;
    this.a = s(a.height) ? a.height instanceof tk ? a.height : new V(a.height) : null;
    this.c = s(a.opacity) ? a.opacity instanceof tk ? a.opacity : new V(a.opacity) : new V(Wp);
    this.e = s(a.rotation) ? a.rotation instanceof tk ? a.rotation : new V(a.rotation) : new V(Xp);
    this.f = s(a.xOffset) ? a.xOffset instanceof tk ? a.xOffset : new V(a.xOffset) : new V(Yp);
    this.g = s(a.yOffset) ? a.yOffset instanceof tk ? a.yOffset :
    new V(a.yOffset) : new V(Zp)
}
Vp.prototype.cb = function(a) {
    var b;
    a instanceof O && (b = a, a = (a = b.G()) ? a.N() : null);
    var c = null;
    if ("point" === a || "multipoint" === a) {
        a = $k(this.d, b);
        var d;
        null === this.b || (d = Number($k(this.b, b)));
        var e;
        null === this.a || (e = Number($k(this.a, b)));
        var c = Number($k(this.c, b)), f = Number($k(this.e, b)), g = Number($k(this.f, b));
        b = Number($k(this.g, b));
        c = new wm({
            url: a,
            width: d,
            height: e,
            opacity: c,
            rotation: f,
            xOffset: g,
            yOffset: b
        })
    }
    return c
};
var Wp = 1, Xp = 0, Yp = 0, Zp = 0;
function $p(a) {
    a = s(a) ? a : {};
    this.extractAttributes = s(a.extractAttributes) ? a.extractAttributes : !0;
    this.extractStyles = s(a.extractStyles) ? a.extractStyles : !1;
    this.schemaLocation = "http://www.opengis.net/kml/2.2 http://schemas.opengis.net/kml/2.2.0/ogckml22.xsd";
    this.dimension = s(a.dimension) ? a.dimension : 3;
    this.maxDepth = s(a.maxDepth) ? a.maxDepth : 0;
    this.trackAttributes = s(a.trackAttributes) ? a.trackAttributes : null;
    this.B = "http://www.opengis.net/kml/2.2";
    this.j = {
        "http://www.opengis.net/kml/2.2": {
            kml: function(a,
            c) {
                s(c.features) || (c.features = []);
                s(c.links) || (c.links = []);
                X(this, a, c)
            },
            Document: function(a, c) {
                X(this, a, c)
            },
            "*": function(a, c) {
                if (!0 === this.extractAttributes) {
                    var d = a.childNodes.length;
                    1 !== d && 2 !== d || 3 !== a.firstChild.nodeType && 4 !== a.firstChild.nodeType || this.j[this.B]._attribute.apply(this, arguments)
                }
            },
            NetworkLink: function(a, c) {
                var d = {};
                X(this, a, d);
                c.links.push(d)
            },
            Link: function(a, c) {
                X(this, a, c)
            },
            _attribute: function(a, c) {
                var d = a.localName || a.nodeName.split(":").pop(), e = Y(a);
                c.properties ? c.properties[d] =
                e.replace(this.S.ya, "") : c[d] = e.replace(this.S.ya, "")
            },
            Placemark: function(a, c) {
                var d = {
                    properties: {}
                }, e, f, g = a.getAttribute("id");
                X(this, a, d);
                if (s(d.ka)) {
                    var h = d.ka, l;
                    delete d.ka;
                    for (var n = 0, q = h.zb.length; n < q; ++n) {
                        if (this.trackAttributes)
                            for (l = 0, e = this.trackAttributes.length; l < e; ++l)
                                f = this.trackAttributes[l], d.properties[f] = h.attributes[f][n];
                        d.properties.when = h.zb[n];
                        s(h.ab[n]) && (d.properties.heading = parseFloat(h.ab[n][0]), d.properties.tilt = parseFloat(h.ab[n][1]), d.properties.roll = parseFloat(h.ab[n][2]));
                        3 === h.Hb[n].coordinates.length && (d.properties.altitude = h.Hb[n].coordinates[2]);
                        l = new O(d.properties);
                        null !== g && (l.Ja = g);
                        var r = h.Hb[n];
                        r && (e = void 0, this.ha && (f = this.ha.aa) && (e = f(l, r.type)), e = aq(this, {
                            geometry: r
                        }, e), s(e) && l.Ea(e));
                        c.features.push(l)
                    }
                } else 
                    s(d.geometry) && (h = d.properties.styleUrl, s(h) && (0 == h.lastIndexOf("#", 0) || c.links.push({
                        href: h
                    })), l = new O(d.properties), null !== g && (l.Ja = g), d.geometry && (e = void 0, this.ha && (f = this.ha.aa) && (e = f(l, d.geometry.type)), e = aq(this, d, e), s(e) && l.Ea(e)), g = void 0,
                s(d.Oc) && (g = d.Oc[0].symbolizers), bq(l, c.styles, g), c.features.push(l))
            },
            MultiGeometry: function(a, c) {
                var d = [];
                X(this, a, d);
                var e = Wa(d, function(a) {
                    return a.type
                }), f;
                if (1 === ic(e))
                    switch (jc(e)) {
                    case "point":
                        f = {
                            type: "multipoint",
                            M: d
                        };
                        break;
                    case "linestring":
                        f = {
                            type: "multilinestring",
                            M: d
                        };
                        break;
                    case "polygon":
                        f = {
                            type: "multipolygon",
                            M: d
                        }
                    } else 
                        f = {
                            type: "geometrycollection",
                            M: d
                        };
                ia(c) ? c.push(f) : c.geometry = f
            },
            Point: function(a, c) {
                var d = [];
                X(this, a, d);
                d = {
                    type: "point",
                    coordinates: d[0][0]
                };
                ia(c) ? c.push(d) : c.geometry =
                d
            },
            Polygon: function(a, c) {
                var d = [];
                X(this, a, d);
                d = {
                    type: "polygon",
                    coordinates: d
                };
                ia(c) ? c.push(d) : c.geometry = d
            },
            LineString: function(a, c) {
                var d = [];
                X(this, a, d);
                d = {
                    type: "linestring",
                    coordinates: d[0]
                };
                ia(c) ? c.push(d) : c.geometry = d
            },
            outerBoundaryIs: function(a, c) {
                X(this, a, c)
            },
            LinearRing: function(a, c) {
                X(this, a, c)
            },
            coordinates: function(a, c) {
                for (var d = this.S, e = Y(a).replace(d.ya, "").split(d.Jb), f = [], g = 0, h = e.length; g < h; g++) {
                    for (var l = e[g].replace(d.Mf, "").split(","), n = [], q = Math.min(l.length, this.dimension), r = 0; r <
                    q; r++)
                        n.push(parseFloat(l[r]));
                    f.push(n)
                }
                c.push(f)
            },
            innerBoundaryIs: function(a, c) {
                X(this, a, c)
            },
            Folder: function(a, c) {
                X(this, a, c)
            },
            ExtendedData: function(a, c) {
                X(this, a, c.properties)
            },
            SchemaData: function(a, c) {
                X(this, a, c)
            },
            SimpleData: function(a, c) {
                c[a.getAttribute("name")] = Y(a)
            },
            Data: function(a, c) {
                var d = {};
                X(this, a, d);
                c[a.getAttribute("name")] = d.value
            },
            when: function(a, c) {
                var d = Y(a), e = d.split("T");
                2 === e.length && 2 === e[1].split("-").length && (d += ":00");
                var e = d, d = new Up(2E3), e = ua(e), e = e.split( - 1 == e.indexOf("T") ?
                " " : "T"), f;
                var g = e[0].match(Hp);
                if (g) {
                    var h = Number(g[2]), l = Number(g[3]), n = Number(g[4]);
                    f = Number(g[5]);
                    var q = Number(g[6]) || 1;
                    d.a.setFullYear(Number(g[1]));
                    n ? (d.a.setDate(1), d.a.setMonth(0), d.add(new Kp(Np, n - 1))) : f ? (d.a.setMonth(0), d.a.setDate(1), g = d.a.getDay() || 7, d.add(new Kp(Np, (4 >= g ? 1 - g : 8 - g) + (Number(q) + 7 * (Number(f) - 1)) - 1))) : (h && (d.a.setDate(1), d.a.setMonth(h - 1)), l && d.a.setDate(l));
                    f=!0
                } else 
                    f=!1;
                f&&!(f = 2 > e.length) && (e = e[1], f = e.match(Jp), q = 0, f && ("Z" != f[0] && (q = 60 * f[2] + Number(f[3]), q*="-" == f[1] ? 1 : - 1),
                q -= d.a.getTimezoneOffset(), e = e.substr(0, e.length - f[0].length)), (f = e.match(Ip)) ? (d.a.setHours(Number(f[1])), d.a.setMinutes(Number(f[2]) || 0), d.a.setSeconds(Number(f[3]) || 0), d.a.setMilliseconds(f[4] ? 1E3 * f[4] : 0), 0 != q && d.a.setTime(d.getTime() + 6E4 * q), f=!0) : f=!1);
                d = f ? d : null;
                null === d || (d = new Date(d.getTime()));
                c.zb.push(d)
            },
            _trackPointAttribute: function(a, c) {
                var d = a.nodeName.split(":").pop();
                c.attributes[d].push(Y(a))
            },
            Style: function(a, c) {
                if (!0 === this.extractStyles) {
                    c.styles || (c.styles = []);
                    var d = {
                        symbolizers: [],
                        ids: []
                    }, e = a.getAttribute("id");
                    null === e || (d.id = e);
                    X(this, a, d);
                    c.styles.push(d)
                }
            },
            LineStyle: function(a, c) {
                var d = {}, e = {};
                X(this, a, d);
                d.color && (e.color = d.color.color, e.opacity = d.color.opacity);
                d.width && (e.width = parseFloat(d.width));
                c.ids.push(a.getAttribute("id"));
                c.symbolizers.push(new Rl(e))
            },
            PolyStyle: function(a, c) {
                var d = {}, e = {};
                X(this, a, d);
                "0" !== d.fill && "false" !== d.fill && (d.color ? (e.color = d.color.color, e.opacity = d.color.opacity) : (e.color = "#ffffff", e.opacity = 1), c.symbolizers.push(new Jl(e)));
                "0" !==
                d.outline && "false" !== d.outline && (d.color ? (e.color = d.color.color, e.opacity = d.color.opacity) : (e.color = "#ffffff", e.opacity = 1), c.symbolizers.push(new Rl(e)));
                c.ids.push(a.getAttribute("id"))
            },
            fill: function(a, c) {
                c.fill = Y(a)
            },
            outline: function(a, c) {
                c.outline = Y(a)
            },
            scale: function(a, c) {
                c.scale = parseFloat(Y(a))
            },
            Icon: function(a, c) {
                c.ub = {};
                X(this, a, c.ub)
            },
            href: function(a, c) {
                c.href = Y(a)
            },
            w: function(a, c) {
                c.ag = Y(a)
            },
            h: function(a, c) {
                c.Ue = Y(a)
            },
            x: function(a, c) {
                c.x = Y(a)
            },
            y: function(a, c) {
                c.y = Y(a)
            },
            hotSpot: function(a,
            c) {
                c.Vb = {
                    x: parseFloat(a.getAttribute("x")),
                    y: parseFloat(a.getAttribute("y")),
                    cg: a.getAttribute("xunits"),
                    dg: a.getAttribute("yunits")
                }
            },
            IconStyle: function(a, c) {
                var d = {}, e = {};
                X(this, a, d);
                var f = d.scale || 1, g = 32 * f, h = 32 * f, l, n;
                if (s(d.ub) && (l = d.ub.href, s(l))) {
                    n = d.ub.ag;
                    var q = d.ub.Ue;
                    0 != l.lastIndexOf("http://maps.google.com/mapfiles/kml", 0) || (s(n) || s(q)) || (q = n = 64, f/=2);
                    n = n || q;
                    q = q || n;
                    n && (g = parseInt(n, 10) * f);
                    q && (h = parseInt(q, 10) * f);
                    if (n = l.match(this.S.zf)) {
                        var q = n[1], r = n[2];
                        l = d.ub.x;
                        n = d.ub.y;
                        l = "http://maps.google.com/mapfiles/kml/pal" +
                        q + "/icon" + (8 * (n ? 7 - n / 32 : 7) + (l ? l / 32 : 0)) + r
                    }
                    e.opacity = 1;
                    e.url = l
                }
                s(d.Vb) && (l = d.Vb.x, n = d.Vb.y, q = d.Vb.cg, d = d.Vb.dg, "pixels" === q ? e.xOffset =- l * f : "insetPixels" === q ? e.xOffset =- g + l * f : "fraction" === q && (e.xOffset =- g * l), "pixels" == d ? e.yOffset =- h + n * f + 1 : "insetPixels" == d ? e.yOffset =- (n * f) + 1 : "fraction" == d && (e.yOffset =- h * (1 - n) + 1));
                e.width = g;
                e.height = h;
                c.ids.push(a.getAttribute("id"));
                c.symbolizers.push(new Vp(e))
            },
            color: function(a, c) {
                var d = Y(a);
                d && (d = d.match(this.S.yf)) && (c.color = {
                    color: "#" + d[4] + d[3] + d[2],
                    opacity: parseInt(d[1],
                    16) / 255
                })
            },
            width: function(a, c) {
                c.width = Y(a)
            }
        },
        "http://www.google.com/kml/ext/2.2": {
            Track: function(a, c) {
                c.ka = {
                    zb: [],
                    Hb: [],
                    ab: []
                };
                if (this.trackAttributes) {
                    var d;
                    c.ka.attributes = {};
                    for (var e = 0, f = this.trackAttributes.length; e < f; ++e) {
                        d = this.trackAttributes[e];
                        c.ka.attributes[d] = [];
                        var g = this.j[this.B];
                        d in g || (g[d] = g._trackPointAttribute)
                    }
                }
                X(this, a, c.ka);
                if (c.ka.zb.length !== c.ka.Hb.length)
                    throw Error("gx:Track with unequal number of when (" + c.ka.zb.length + ") and gx:coord (" + c.ka.Hb.length + ") elements.");
                if (0 < c.ka.ab.length && c.ka.zb.length !== c.ka.ab.length)
                    throw Error("gx:Track with unequal number of when (" + c.ka.zb.length + ") and gx:angles (" + c.ka.ab.length + ") elements.");
            },
            coord: function(a, c) {
                for (var d = Y(a).replace(this.S.ya, "").split(/\s+/), e = 0, f = this.dimension; e < f; ++e)
                    d[e] = parseFloat(d[e]);
                c.Hb.push({
                    type: "point",
                    coordinates: d
                })
            },
            angles: function(a, c) {
                var d = Y(a).replace(this.S.ya, "").split(/\s+/);
                c.ab.push(d)
            }
        }
    };
    this.a = {
        "http://www.opengis.net/kml/2.2": {
            kml: function(a) {
                var c = this.createElementNS("kml");
                $(this, "Document", a, null, c);
                return c
            },
            Document: function(a) {
                var c = this.createElementNS("Document"), d;
                for (d in a)
                    if (a.hasOwnProperty(d) && u(a[d])) {
                        var e = this.createElementNS(d);
                        e.appendChild(this.createTextNode(a[d]));
                        c.appendChild(e)
                    }
                if (s(a.Oc))
                    for (d = 0, e = a.Oc.length; d < e; ++d)
                        $(this, "_style", a.Oc[d], null, c);
                d = 0;
                for (e = a.features.length; d < e; ++d)
                    $(this, "_feature", a.features[d], null, c);
                return c
            },
            _style: function(a) {
                var c = this.createElementNS("Style");
                s(a.id) && this.setAttributeNS(c, null, "id", a.id);
                for (var d =
                0, e = a.symbolizers.length; d < e; ++d)
                    $(this, "_symbolizer", {
                        Pc: a.symbolizers[d],
                        id: a.vf ? a.vf[d]: void 0
                    }, null, c);
                return c
            },
            _symbolizer: function(a) {
                var c = a.Pc;
                if (c instanceof Vp)
                    return $(this, "IconStyle", a);
                if (c instanceof Rl)
                    return $(this, "LineStyle", a);
                if (c instanceof Jl)
                    return $(this, "PolyStyle", a)
            },
            PolyStyle: function(a) {
                var c = this.createElementNS("PolyStyle");
                a.id && this.setAttributeNS(c, null, "id", a.id);
                a = a.Pc.cb("polygon");
                var d, e;
                0 !== a.oa ? ($(this, "fill", "1", null, c), d = a.fillColor, e = a.oa) : $(this, "fill",
                "0", null, c);
                a.ra ? ($(this, "outline", "1", null, c), d = d || a.strokeColor, e = e || a.ra) : $(this, "outline", "0", null, c);
                d && e && $(this, "color", {
                    color: d.substring(1),
                    opacity: e
                }, null, c);
                return c
            },
            fill: function(a) {
                var c = this.createElementNS("fill");
                c.appendChild(this.createTextNode(a));
                return c
            },
            outline: function(a) {
                var c = this.createElementNS("outline");
                c.appendChild(this.createTextNode(a));
                return c
            },
            LineStyle: function(a) {
                var c = this.createElementNS("LineStyle");
                a.id && this.setAttributeNS(c, null, "id", a.id);
                a = a.Pc.cb("linestring");
                $(this, "color", {
                    color: a.color.substring(1),
                    opacity: a.opacity
                }, null, c);
                $(this, "width", a.width, null, c);
                return c
            },
            color: function(a) {
                var c = a.color;
                a = (255 * a.opacity).toString(16) + c.substring(4, 6) + c.substring(2, 4) + c.substring(0, 2);
                c = this.createElementNS("color");
                c.appendChild(this.createTextNode(a));
                return c
            },
            width: function(a) {
                var c = this.createElementNS("width");
                c.appendChild(this.createTextNode(a));
                return c
            },
            IconStyle: function(a) {
                var c = this.createElementNS("IconStyle");
                this.setAttributeNS(c, null, "id",
                a.id);
                $(this, "Icon", a.Pc.cb("point").url, null, c);
                return c
            },
            Icon: function(a) {
                var c = this.createElementNS("Icon");
                $(this, "href", a, null, c);
                return c
            },
            href: function(a) {
                var c = this.createElementNS("href");
                c.appendChild(this.createTextNode(a));
                return c
            },
            _feature: function(a) {
                var c = this.createElementNS("Placemark"), d = a.Ja;
                s(d) && c.setAttribute("id", d);
                $(this, "name", a, null, c);
                $(this, "description", a, null, c);
                s(a.get("styleUrl")) ? $(this, "styleUrl", a, null, c) : (d = a.Cb(), null === d || $(this, "_style", {
                    symbolizers: d
                }, null,
                c));
                $(this, "_geometry", a.G(), null, c);
                return c
            },
            name: function(a) {
                a = a.get("name");
                if (s(a)) {
                    var c = this.createElementNS("name");
                    c.appendChild(this.createTextNode(a));
                    return c
                }
            },
            description: function(a) {
                a = a.get("description");
                if (s(a)) {
                    var c = this.createElementNS("description");
                    c.appendChild(this.createTextNode(a));
                    return c
                }
            },
            styleUrl: function(a) {
                a = a.get("styleUrl");
                var c = this.createElementNS("styleUrl");
                c.appendChild(this.createTextNode(a));
                return c
            },
            _geometry: function(a) {
                if (a instanceof qm)
                    return $(this,
                    "Point", a);
                if (a instanceof om)
                    return $(this, "LineString", a);
                if (a instanceof um)
                    return $(this, "Polygon", a);
                if (a instanceof nm)
                    return $(this, "MultiGeometry", a)
            },
            MultiGeometry: function(a) {
                for (var c = this.createElementNS("MultiGeometry"), d = 0, e = a.o.length; d < e; ++d)
                    $(this, "_geometry", a.o[d], null, c);
                return c
            },
            Point: function(a) {
                var c = this.createElementNS("Point");
                a = a.s();
                $(this, "coordinates", [a], null, c);
                return c
            },
            LineString: function(a) {
                var c = this.createElementNS("LineString");
                $(this, "coordinates", a.s(), null,
                c);
                return c
            },
            Polygon: function(a) {
                var c = this.createElementNS("Polygon");
                a = a.s();
                $(this, "outerBoundaryIs", a[0], null, c);
                for (var d = 1, e = a.length; d < e; ++d)
                    $(this, "innerBoundaryIs", a[d], null, c);
                return c
            },
            outerBoundaryIs: function(a) {
                var c = this.createElementNS("outerBoundaryIs");
                $(this, "LinearRing", a, null, c);
                return c
            },
            innerBoundaryIs: function(a) {
                var c = this.createElementNS("innerBoundaryIs");
                $(this, "LinearRing", a, null, c);
                return c
            },
            LinearRing: function(a) {
                var c = this.createElementNS("LinearRing");
                $(this, "coordinates",
                a, null, c);
                return c
            },
            coordinates: function(a) {
                for (var c = this.createElementNS("coordinates"), d = "", e = 0, f = a.length; e < f; ++e) {
                    for (var g = 0, h = a[e].length; g < h; ++g)
                        d += a[e][g], g < h - 1 && (d += ",");
                    e < f - 1 && (d += " ")
                }
                c.appendChild(this.createTextNode(d));
                return c
            }
        }
    };
    lp.call(this);
    I(this.S, {
        yf: /(\w{2})(\w{2})(\w{2})(\w{2})/,
        zf: /root:\/\/icons\/palette-(\d+)(\.\w+)/,
        a: /\$\[(.*?)\]/g
    })
}
E($p, lp);
m = $p.prototype;
m.fe = function(a, b, c) {
    this.ha = c;
    this.Q(a, b)
};
m.ge = function(a, b, c) {
    this.ha = c;
    this.Q(a, b)
};
m.dc = function(a, b) {
    this.ha = b;
    return this.Q(a)
};
m.cc = function(a, b) {
    this.ha = b;
    return this.Q(a)
};
function cq(a, b, c, d) {
    var e;
    if (a.c < a.maxDepth) {
        a.c++;
        for (var f = 0, g = c.links.length; f < g; ++f) {
            var h = c.links[f];
            if (!0 !== h.$f) {
                e=!0;
                var l = new vp, n = new hl, q = a;
                J(n, "complete", function(a) {
                    if (wl(a.target)) {
                        var e;
                        var f = a.target;
                        try {
                            e = f.a ? f.a.responseXML : null
                        } catch (g) {
                            e = null
                        }
                        e = e || xl(a.target);
                        u(e) && (e = ip(e));
                        hb(a.target);
                        e && (9 == e.nodeType && (e = e.documentElement), q.Ya(e, c));
                        cq(q, b, c, d);
                        this.aa(e)
                    }
                }, !1, l);
                b.push(l);
                nl(n, h.href);
                h.$f=!0
            }
        }
    }
    !0 !== e&&!0 !== a.zd && d.call(a)
}
m.Q = function(a, b) {
    u(a) && (a = ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var c = {
        metadata: {
            projection: "EPSG:4326"
        }
    };
    this.Ya(a, c);
    if (s(b)) {
        var d = [];
        this.c = 0;
        this.zd=!1;
        cq(this, d, c, function() {
            this.zd=!0;
            Cp(Fp(d), function() {
                for (var a = 0, d = c.features.length; a < d; ++a)
                    bq(c.features[a], c.styles);
                b.call(null, c)
            }, function() {
                throw Error("KML: parsing of NetworkLinks failed");
            }, this)
        })
    } else 
        return c
};
function bq(a, b, c) {
    var d, e;
    if (a.get("styleUrl") && null === a.Cb()) {
        var f = a.get("styleUrl"), f = f.substring(f.indexOf("#") + 1);
        if (s(b))
            for (d = 0, e = b.length; d < e; ++d)
                if (b[d].id === f) {
                    c = b[d].symbolizers;
                    break
                }
    }
    s(c) && (a.c = c)
}
function aq(a, b, c) {
    var d = null, e;
    switch (b.geometry.type) {
    case "point":
        d = new qm(b.geometry.coordinates, c);
        break;
    case "linestring":
        d = new om(b.geometry.coordinates, c);
        break;
    case "polygon":
        d = new um(b.geometry.coordinates, c);
        break;
    case "multipoint":
        a = [];
        d = 0;
        for (e = b.geometry.M.length; d < e; d++)
            a.push(b.geometry.M[d].coordinates);
        d = new rm(a, c);
        break;
    case "multilinestring":
        a = [];
        d = 0;
        for (e = b.geometry.M.length; d < e; d++)
            a.push(b.geometry.M[d].coordinates);
        d = new pm(a, c);
        break;
    case "multipolygon":
        a = [];
        d = 0;
        for (e = b.geometry.M.length; d <
        e; d++)
            a.push(b.geometry.M[d].coordinates);
        d = new vm(a, c);
        break;
    case "geometrycollection":
        var f = [], d = 0;
        for (e = b.geometry.M.length; d < e; d++)
            f.push(aq(a, {
                geometry: b.geometry.M[d]
            }, c));
        d = new op(f)
    }
    return d
}
m.write = function(a) {
    a = $(this, "kml", a);
    this.setAttributeNS(a, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    return mp(this, a)
};
function dq() {
    this.a = new O
}
E(dq, kp);
fa(dq);
function eq(a, b) {
    for (var c = [], d, e = 0, f = a.length; e < f; ++e)
        d = a[e], 0 < e && c.pop(), d = 0 <= d ? b[d] : b[~d].slice().reverse(), c.push.apply(c, d);
    return c
}
dq.prototype.Q = function(a) {
    a = JSON.parse(a);
    return this.cc(a).features
};
dq.prototype.dc = function(a, b) {
    var c = JSON.parse(a);
    if ("Topology" !== c.type)
        throw Error('Not a "Topology" type object');
    return {
        features: fq(this, c, b),
        metadata: {
            projection: "EPSG:4326"
        }
    }
};
dq.prototype.cc = function(a, b) {
    if ("Topology" !== a.type)
        throw Error('Not a "Topology" type object');
    return {
        features: fq(this, a, b),
        metadata: {
            projection: "EPSG:4326"
        }
    }
};
function gq(a, b, c, d, e, f) {
    var g = b.type;
    if ("Point" === g) {
        c = b.coordinates;
        hq(c, d, e);
        f = f && f.aa;
        var h;
        f && (h = f(a.a, "point"));
        a = new qm(c, h)
    } else if ("LineString" === g) {
        c = eq(b.arcs, c);
        f = f && f.aa;
        var l;
        f && (l = f(a.a, "linestring"));
        a = new om(c, l)
    } else if ("Polygon" === g) {
        var n = b.arcs;
        d = n.length;
        var q = Array(d);
        for (e = 0; e < d; ++e)
            q[e] = eq(n[e], c);
        f = f && f.aa;
        var r;
        f && (r = f(a.a, "polygon"));
        a = new um(q, r)
    } else if ("MultiPoint" === g) {
        c = b.coordinates;
        q = 0;
        for (r = c.length; q < r; ++q)
            hq(c[q], d, e);
        f = f && f.aa;
        var w;
        f && (w = f(a.a, "multipoint"));
        a = new rm(c, w)
    } else if ("MultiLineString" === g) {
        r = b.arcs;
        d = r.length;
        q = Array(d);
        for (e = 0; e < d; ++e)
            q[e] = eq(r[e], c);
        (f = f && f.aa) && (n = f(a.a, "multilinestring"));
        a = new pm(q, n)
    } else if ("MultiPolygon" === g) {
        n = b.arcs;
        d = n.length;
        r = Array(d);
        for (g = 0; g < d; ++g) {
            e = n[g];
            w = e.length;
            h = Array(w);
            for (l = 0; l < w; ++l)
                h[l] = eq(e[l], c);
            r[g] = h
        }(f = f && f.aa) && (q = f(a.a, "multipolygon"));
        a = new vm(r, q)
    } else 
        throw Error("Unsupported geometry type: " + g);
    f = new O;
    f.Ea(a);
    s(b.id) && (f.Ja = String(b.id));
    return f
}
function iq(a, b, c, d, e, f) {
    b = b.geometries;
    for (var g = b.length, h = Array(g), l = 0; l < g; ++l)
        h[l] = gq(a, b[l], c, d, e, f);
    return h
}
function fq(a, b, c) {
    for (var d = b.transform, e = d.scale, d = d.translate, f = b.arcs, g = 0, h = f.length; g < h; ++g)
        for (var l = f[g], n = e, q = d, r = 0, w = 0, t = void 0, A = 0, B = l.length; A < B; ++A)
            t = l[A], r += t[0], w += t[1], t[0] = r, t[1] = w, hq(t, n, q);
    b = b.objects;
    var g = [], v;
    for (v in b)
        "GeometryCollection" === b[v].type ? g.push.apply(g, iq(a, b[v], f, e, d, c)) : g.push(gq(a, b[v], f, e, d, c));
    return g
}
function hq(a, b, c) {
    a[0] = a[0] * b[0] + c[0];
    a[1] = a[1] * b[1] + c[1]
};
function jq() {}
E(jq, kp);
fa(jq);
var kq = /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/, lq = /\s+/, mq = /\)\s*,\s*\(/, nq = /\)\s*\)\s*,\s*\(\s*\(/, oq = /^\s*\(?(.*?)\)?\s*$/, pq = /,\s*([A-Za-z])/g, qq = /[\n\r]/g;
m = jq.prototype;
m.ld = function(a) {
    a = ua(a).split(lq);
    return new qm(Ka(a, parseFloat))
};
m.kd = function(a) {
    a = ua(a).split(",");
    for (var b = [], c = 0, d = a.length; c < d; ++c)
        b.push(this.ld.apply(this, [a[c]]).s());
    return new om(b)
};
m.be = function(a) {
    var b;
    a = ua(a).split(mq);
    for (var c = [], d = 0, e = a.length; d < e; ++d)
        b = a[d].replace(oq, "$1"), b = this.kd.apply(this, [b]).s(), c.push(b);
    return new um(c)
};
m.Fd = function(a) {
    a = a.s();
    return a[0] + " " + a[1]
};
m.Xc = function(a) {
    a = a.s();
    for (var b = [], c = 0, d = a.length; c < d; ++c)
        b.push(a[c][0] + " " + a[c][1]);
    return b.join(",")
};
m.Gd = function(a) {
    for (var b = [], c = 0, d = a.b.length; c < d; ++c)
        b.push("(" + this.Xc.apply(this, [a.b[c]]) + ")");
    return b.join(",")
};
m.ce = function(a) {
    a = a.replace(qq, " ");
    a = kq.exec(a);
    var b;
    if (a)
        switch (b = a[1].toLowerCase(), a = a[2], b) {
        case "point":
            b = this.ld(a);
            break;
        case "multipoint":
            var c = ua(a).split(",");
            a = [];
            for (var d = 0, e = c.length; d < e; ++d)
                b = c[d].replace(oq, "$1"), a.push(this.ld.apply(this, [b]));
                b = a.length;
                c = Array(b);
                for (d = 0; d < b; ++d)
                    c[d] = a[d].s();
                    b = new rm(c, void 0);
                    break;
                case "linestring":
                    b = this.kd(a);
                    break;
                case "multilinestring":
                    c = ua(a).split(mq);
                    a = [];
                    d = 0;
                    for (e = c.length; d < e; ++d)
                        b = c[d].replace(oq, "$1"), a.push(this.kd.apply(this,
                        [b]));
                        b = a.length;
                        c = Array(b);
                        for (d = 0; d < b; ++d)
                            c[d] = a[d].s();
                            b = new pm(c, void 0);
                            break;
                        case "polygon":
                            b = this.be(a);
                            break;
                        case "multipolygon":
                            c = ua(a).split(nq);
                            a = [];
                            d = 0;
                            for (e = c.length; d < e; ++d)
                                b = c[d].replace(oq, "$1"), a.push(this.be.apply(this, [b]));
                                b = a.length;
                                c = Array(b);
                                for (d = 0; d < b; ++d)
                                    c[d] = a[d].s();
                                    b = new vm(c, void 0);
                                    break;
                                case "geometrycollection":
                                    a = a.replace(pq, "|$1");
                                    a = ua(a).split("|");
                                    b = [];
                                    c = 0;
                                    for (d = a.length; c < d; ++c)
                                        b.push(this.ce.apply(this, [a[c]]));
                                        b = new op(b);
                                        break;
                                    default:
                                        throw Error("Bad geometry type: " +
                                        b);
        }
    return b
};
m.ae = function(a) {
    var b = a.N(), c = b.toUpperCase() + "(";
    if (a instanceof qm)
        c += this.Fd(a);
    else if (a instanceof rm) {
        for (var b = c, c = [], d = 0, e = a.o.length; d < e; ++d)
            c.push("(" + this.Fd.apply(this, [a.o[d]]) + ")");
        c = b + c.join(",")
    } else if (a instanceof om)
        c += this.Xc(a);
    else if (a instanceof pm) {
        b = c;
        c = [];
        d = 0;
        for (e = a.o.length; d < e; ++d)
            c.push("(" + this.Xc.apply(this, [a.o[d]]) + ")");
        c = b + c.join(",")
    } else if (a instanceof um)
        c += this.Gd(a);
    else if (a instanceof vm) {
        b = c;
        c = [];
        d = 0;
        for (e = a.o.length; d < e; ++d)
            c.push("(" + this.Gd.apply(this, [a.o[d]]) +
            ")");
        c = b + c.join(",")
    } else if (a instanceof op) {
        b = c;
        c = [];
        d = 0;
        for (e = a.o.length; d < e; ++d)
            c.push(this.ae.apply(this, [a.o[d]]));
        c = b + c.join(",")
    } else 
        throw Error("Bad geometry type: " + b);
    return c + ")"
};
m.Q = function(a) {
    return this.ce(a)
};
m.write = function(a) {
    return this.ae(a)
};
function rq(a) {
    var b = s(a) ? a: {};
    this.extractAttributes = s(b.extractAttributes) ? b.extractAttributes : !0;
    this.surface = s(b.surface) ? b.surface : !1;
    this.curve = s(b.curve) ? b.curve : !1;
    this.multiCurve = s(b.multiCurve) ? b.multiCurve : !0;
    this.multiSurface = s(b.multiSurface) ? b.multiSurface : !0;
    this.readOptions = b.readOptions;
    this.writeOptions = b.writeOptions;
    s(b.schemaLocation) && (this.schemaLocation = b.schemaLocation);
    s(b.featureNS) && (this.featureNS = b.featureNS);
    s(b.featureType) && (this.featureType = b.featureType);
    this.Sf =
    !s(a) || u(a.featureType);
    this.B = "http://www.opengis.net/gml";
    this.j = {
        "http://www.opengis.net/wfs": {
            FeatureCollection: function(a, b) {
                X(this, a, b)
            }
        },
        "http://www.opengis.net/gml": {
            _inherit: function(a) {
                var b;
                s(this.srsName) || (b = this.srsName = a.getAttribute("srsName"));
                s(this.axisOrientation) || (this.axisOrientation = null != b ? Md(ke(b)) : "enu")
            },
            name: function(a, b) {
                b.name = Y(a)
            },
            featureMember: function(a, b) {
                X(this, a, b)
            },
            featureMembers: function(a, b) {
                X(this, a, b)
            },
            GeometryCollection: function(a, b) {
                var e = [];
                this.j[this.B]._inherit.apply(this,
                [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "geometrycollection",
                    M: e
                }
            },
            geometryMember: function(a, b) {
                X(this, a, b)
            },
            MultiPoint: function(a, b) {
                var e = [];
                this.j[this.B]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "multipoint",
                    M: e
                }
            },
            pointMember: function(a, b) {
                X(this, a, b)
            },
            MultiLineString: function(a, b) {
                var e = [];
                this.j[this.B]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "multilinestring",
                    M: e
                }
            },
            lineStringMember: function(a, b) {
                X(this, a, b)
            },
            MultiPolygon: function(a, b) {
                var e = [];
                this.j[this.B]._inherit.apply(this,
                [a, e, b]);
                X(this, a, e);
                b.geometry = {
                    type: "multipolygon",
                    M: e
                }
            },
            polygonMember: function(a, b) {
                X(this, a, b)
            },
            Point: function(a, b) {
                var e = [];
                this.j[this.B]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                e = {
                    type: "point",
                    coordinates: e[0][0]
                };
                ia(b) ? b.push(e) : b.geometry = e
            },
            LineString: function(a, b) {
                var e = [];
                this.j[this.B]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                e = {
                    type: "linestring",
                    coordinates: e[0]
                };
                ia(b) ? b.push(e) : b.geometry = e
            },
            Polygon: function(a, b) {
                var e = {
                    de: null,
                    Dc: []
                };
                this.j[this.B]._inherit.apply(this, [a, e, b]);
                X(this,
                a, e);
                e.Dc.unshift(e.de);
                e = {
                    type: "polygon",
                    coordinates: e.Dc
                };
                ia(b) ? b.push(e) : b.geometry = e
            },
            LinearRing: function(a, b) {
                var e = [];
                this.j[this.B]._inherit.apply(this, [a, e, b]);
                X(this, a, e);
                ia(b) ? b.push(e) : b.geometry = {
                    type: "linearring",
                    coordinates: e[0]
                }
            },
            coordinates: function(a, b) {
                for (var e = Y(a).replace(this.S.ya, ""), e = e.replace(this.S.sd, ","), f = a.getAttribute("cs") || ",", g = a.getAttribute("ts") || this.S.Jb, g = e.split(g), h = g.length, l = Array(h), n = 0; n < h; ++n)
                    e = Ka(g[n].split(f), parseFloat), "en" === this.axisOrientation.substr(0,
                    2) ? l[n] = e : 2 === e.length ? l[n] = e.reverse() : 3 === e.length && (l[n] = [e[1], e[0], e[2]]);
                b.push(l)
            },
            coord: function(a, b) {
                var e = {};
                0 === b.length && b.push([]);
                X(this, a, e);
                s(e.z) ? b.push([e.x, e.y, e.z]) : b[0].push([e.x, e.y])
            },
            X: function(a, b) {
                b.x = parseFloat(Y(a))
            },
            Y: function(a, b) {
                b.y = parseFloat(Y(a))
            },
            Z: function(a, b) {
                b.z = parseFloat(Y(a))
            }
        }
    };
    this.d = {
        "*": function(a, b) {
            var e, f = a.localName || a.nodeName.split(":").pop();
            b.features ? this.Sf||-1 === Fa(this.featureType, f) ? f === this.featureType && (e = "_typeName") : e = "_typeName" : 0 ===
            a.childNodes.length || 1 === a.childNodes.length && 3 === a.firstChild.nodeType ? this.extractAttributes && (e = "_attribute") : e = "_geometry";
            e && this.j[this.featureNS][e].apply(this, [a, b])
        },
        _typeName: function(a, b) {
            var e = {
                properties: {}
            };
            X(this, a, e);
            e.name && (e.properties.name = e.name);
            var f = new O(e.properties);
            if (e = e.geometry) {
                var g = void 0;
                if (this.ha) {
                    var h = this.ha.aa;
                    h && (g = h(f, e.type))
                }
                e = sq(this, {
                    geometry: e
                }, g);
                s(e) && f.Ea(e)
            }
            e = a.getAttribute("fid") || this.getAttributeNS(a, this.B, "id");
            null !== e && (f.Ja = e);
            b.features.push(f)
        },
        _geometry: function(a, b) {
            this.geometryName || (this.geometryName = a.nodeName.split(":").pop());
            X(this, a, b)
        },
        _attribute: function(a, b) {
            var e = a.localName || a.nodeName.split(":").pop();
            b.properties[e] = Y(a)
        }
    };
    s(this.featureNS) && (this.j[this.featureNS] = this.d);
    this.a = {
        "http://www.opengis.net/gml": {
            featureMember: function(a) {
                var b = this.createElementNS("gml:featureMember");
                $(this, "_typeName", a, this.featureNS, b);
                return b
            },
            MultiPoint: function(a) {
                for (var b = this.createElementNS("gml:MultiPoint"), e = 0, f = a.o.length; e <
                f; ++e)
                    $(this, "pointMember", a.o[e], null, b);
                return b
            },
            pointMember: function(a) {
                var b = this.createElementNS("gml:pointMember");
                $(this, "Point", a, null, b);
                return b
            },
            MultiLineString: function(a) {
                for (var b = this.createElementNS("gml:MultiLineString"), e = 0, f = a.o.length; e < f; ++e)
                    $(this, "lineStringMember", a.o[e], null, b);
                return b
            },
            lineStringMember: function(a) {
                var b = this.createElementNS("gml:lineStringMember");
                $(this, "LineString", a, null, b);
                return b
            },
            MultiPolygon: function(a) {
                for (var b = this.createElementNS("gml:MultiPolygon"),
                e = 0, f = a.o.length; e < f; ++e)
                    $(this, "polygonMember", a.o[e], null, b);
                return b
            },
            polygonMember: function(a) {
                var b = this.createElementNS("gml:polygonMember");
                $(this, "Polygon", a, null, b);
                return b
            },
            GeometryCollection: function(a) {
                for (var b = this.createElementNS("gml:GeometryCollection"), e = 0, f = a.o.length; e < f; ++e)
                    $(this, "geometryMember", a.o[e], null, b);
                return b
            },
            geometryMember: function(a) {
                var b = this.createElementNS("gml:geometryMember");
                a = $(this, "_geometry", a, this.featureNS);
                b.appendChild(a.firstChild);
                return b
            }
        },
        "http://www.opengis.net/wfs": {
            FeatureCollection: function(a) {
                for (var b =
                this.createElementNS("wfs:FeatureCollection", "http://www.opengis.net/wfs"), e = 0, f = a.length; e < f; ++e)
                    $(this, "featureMember", a[e], null, b);
                return b
            }
        }
    };
    this.c = {
        _typeName: function(a) {
            var b = this.createElementNS("feature:" + this.featureType, this.featureNS), e = a.Ja;
            s(e) && this.setAttributeNS(b, this.B, "fid", e);
            null !== a.G() && $(this, "_geometry", a.G(), this.featureNS, b);
            a = a.ob();
            for (var f in a)
                e = a[f], null == e || e instanceof Dd || $(this, "_attribute", {
                    name: f,
                    value: e
                }, this.featureNS, b);
            return b
        },
        _geometry: function(a) {
            var b =
            this.createElementNS("feature:" + this.geometryName, this.featureNS), e = a.N(), f;
            "point" === e ? f = $(this, "Point", a, null, b) : "multipoint" === e ? f = $(this, "MultiPoint", a, null, b) : "linearring" === e ? f = $(this, "LinearRing", a.s(), null, b) : "linestring" === e ? f = $(this, "LineString", a, null, b) : "multilinestring" === e ? f = $(this, "MultiLineString", a, null, b) : "polygon" === e ? f = $(this, "Polygon", a, null, b) : "multipolygon" === e ? f = $(this, "MultiPolygon", a, null, b) : "geometrycollection" === e && (f = $(this, "GeometryCollection", a, null, b));
            null != this.srsName &&
            this.setAttributeNS(f, null, "srsName", this.srsName);
            return b
        },
        _attribute: function(a) {
            var b = this.createElementNS("feature:" + a.name, this.featureNS);
            b.appendChild(this.createTextNode(a.value));
            return b
        }
    };
    s(this.featureNS) && (this.a[this.featureNS] = this.c);
    lp.call(this)
}
E(rq, lp);
rq.prototype.Q = function(a, b) {
    var c;
    s(b) && s(b.srsName) ? c = b.srsName : s(this.readOptions) && s(this.readOptions.srsName) && (c = this.readOptions.srsName);
    s(c) && (this.srsName = u(c) ? c : c.bb);
    s(b) && s(b.axisOrientation) ? this.axisOrientation = b.axisOrientation : s(this.readOptions) && s(this.readOptions.axisOrientation) && (this.axisOrientation = this.readOptions.axisOrientation);
    "string" == typeof a && (a = ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    c = {
        features: [],
        metadata: {}
    };
    this.Ya(a, c, !0);
    c.metadata.projection = this.srsName;
    delete this.srsName;
    delete this.axisOrientation;
    return c
};
rq.prototype.Ya = function(a, b, c) {
    !0 === c&&!0 === this.e && (this.featureType = null, delete this.j[this.featureNS], delete this.a[this.featureNS], this.featureNS = null);
    this.featureNS || (a.namespaceURI in this.j || a.parentNode.namespaceURI != this.B ||!/^(.*:)?featureMembers?$/.test(a.parentNode.nodeName)) || (this.featureType = a.nodeName.split(":").pop(), this.j[a.namespaceURI] = this.d, this.a[a.namespaceURI] = this.c, this.featureNS = a.namespaceURI, this.e=!0);
    return lp.prototype.Ya.apply(this, [a, b])
};
function sq(a, b, c) {
    var d = null, e;
    switch (b.geometry.type) {
    case "point":
        d = new qm(b.geometry.coordinates, c);
        break;
    case "linearring":
        d = new sm(b.geometry.coordinates, c);
        break;
    case "linestring":
        d = new om(b.geometry.coordinates, c);
        break;
    case "polygon":
        d = new um(b.geometry.coordinates, c);
        break;
    case "multipoint":
        a = [];
        d = 0;
        for (e = b.geometry.M.length; d < e; d++)
            a.push(b.geometry.M[d].coordinates);
        d = new rm(a, c);
        break;
    case "multilinestring":
        a = [];
        d = 0;
        for (e = b.geometry.M.length; d < e; d++)
            a.push(b.geometry.M[d].coordinates);
        d = new pm(a, c);
        break;
    case "multipolygon":
        a = [];
        d = 0;
        for (e = b.geometry.M.length; d < e; d++)
            a.push(b.geometry.M[d].coordinates);
        d = new vm(a, c);
        break;
    case "geometrycollection":
        var f = [], d = 0;
        for (e = b.geometry.M.length; d < e; d++)
            f.push(sq(a, {
                geometry: b.geometry.M[d]
            }, c));
        d = new op(f)
    }
    return d
}
rq.prototype.dc = function(a, b) {
    this.ha = b;
    return this.Q(a)
};
function tq(a, b, c) {
    var d;
    s(c) && s(c.srsName) ? d = c.srsName : s(a.writeOptions) && s(a.writeOptions.srsName) ? d = a.writeOptions.srsName : s(b.metadata) && (d = b.metadata.projection);
    a.srsName = u(d) ? d : d.bb;
    a.axisOrientation = s(c) && s(c.axisOrientation) ? c.axisOrientation : s(a.writeOptions) && s(a.writeOptions.axisOrientation) ? a.writeOptions.axisOrientation : Md(ke(a.srsName))
};
function uq(a) {
    this.schemaLocation = "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd";
    rq.call(this, a);
    I(this.j["http://www.opengis.net/gml"], {
        outerBoundaryIs: function(a, c) {
            var d = [];
            X(this, a, d);
            c.outer = d[0][0]
        },
        innerBoundaryIs: function(a, c) {
            var d = [];
            X(this, a, d);
            c.Dc.push(d[0][0])
        },
        Box: function(a, c) {
            var d = [];
            this.j[this.B]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            c.projection = a.getAttribute("srsName");
            c.bounds = [d[0][0][0], d[0][0][1], d[0][1][0], d[0][1][1]]
        }
    });
    I(this.a["http://www.opengis.net/gml"],
    {
        Point: function(a) {
            var c = this.createElementNS("gml:Point");
            $(this, "coordinates", [a.s()], null, c);
            return c
        },
        coordinates: function(a) {
            for (var c = a.length, d = Array(c), e = 0; e < c; ++e) {
                var f = a[e], g = Qa(f);
                "en" !== this.axisOrientation.substr(0, 2) && (g[0] = f[1], g[1] = f[0]);
                d[e] = g.join(",")
            }
            a = d.join(" ");
            c = this.createElementNS("gml:coordinates");
            this.setAttributeNS(c, null, "decimal", ".");
            this.setAttributeNS(c, null, "cs", ",");
            this.setAttributeNS(c, null, "ts", " ");
            c.appendChild(this.createTextNode(a));
            return c
        },
        LineString: function(a) {
            var c =
            this.createElementNS("gml:LineString");
            $(this, "coordinates", a.s(), null, c);
            return c
        },
        Polygon: function(a) {
            var c = this.createElementNS("gml:Polygon");
            a = a.s();
            $(this, "outerBoundaryIs", a[0].reverse(), null, c);
            for (var d = 1; d < a.length; ++d)
                $(this, "innerBoundaryIs", a[d].reverse(), null, c);
            return c
        },
        outerBoundaryIs: function(a) {
            var c = this.createElementNS("gml:outerBoundaryIs");
            $(this, "LinearRing", a, null, c);
            return c
        },
        innerBoundaryIs: function(a) {
            var c = this.createElementNS("gml:innerBoundaryIs");
            $(this, "LinearRing",
            a, null, c);
            return c
        },
        LinearRing: function(a) {
            var c = this.createElementNS("gml:LinearRing");
            $(this, "coordinates", a, null, c);
            return c
        },
        Box: function(a) {
            var c = this.createElementNS("gml:Box");
            $(this, "coordinates", [[a[0], a[1]], [a[2], a[3]]], null, c);
            null != this.srsName && c.setAttribute("srsName", this.srsName);
            return c
        }
    })
}
E(uq, rq);
uq.prototype.write = function(a, b) {
    tq(this, a, b);
    var c = $(this, "FeatureCollection", a.features, "http://www.opengis.net/wfs");
    this.setAttributeNS(c, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    c = mp(this, c);
    delete this.srsName;
    delete this.axisOrientation;
    return c
};
function vq(a) {
    this.schemaLocation = "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
    rq.call(this, a);
    this.c._geometry = function(a) {
        var c = this.createElementNS("feature:" + this.geometryName, this.featureNS), d = a.N(), e;
        "point" === d ? e = $(this, "Point", a, null, c) : "multipoint" === d ? e = $(this, "MultiPoint", a, null, c) : "linestring" === d ? e=!0 === this.curve ? $(this, "Curve", a, null, c) : $(this, "LineString", a, null, c) : "linearring" === d ? e = $(this, "LinearRing", a.s(), null, c) : "multilinestring" ===
        d ? e=!1 === this.multiCurve ? $(this, "MultiLineString", a, null, c) : $(this, "MultiCurve", a, null, c) : "polygon" === d ? e=!0 === this.surface ? $(this, "Surface", a, null, c) : $(this, "Polygon", a, null, c) : "multipolygon" === d ? e=!1 === this.multiSurface ? $(this, "MultiPolygon", a, null, c) : $(this, "MultiSurface", a, null, c) : "geometrycollection" === d && (e = $(this, "MultiGeometry", a, null, c));
        null != this.srsName && this.setAttributeNS(e, null, "srsName", this.srsName);
        return c
    };
    I(this.j["http://www.opengis.net/gml"], {
        _inherit: Ue(this.j["http://www.opengis.net/gml"]._inherit,
        function(a, c, d) {
            if (a = parseInt(a.getAttribute("srsDimension"), 10) || d && d.le)
                c.le = a
        }),
        featureMembers: function(a, c) {
            X(this, a, c)
        },
        Curve: function(a, c) {
            var d = [];
            this.j[this.B]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            d = {
                type: "linestring",
                coordinates: d[0]
            };
            ia(c) ? c.push(d) : c.geometry = d
        },
        segments: function(a, c) {
            X(this, a, c)
        },
        LineStringSegment: function(a, c) {
            var d = [];
            X(this, a, d);
            c.push(d[0])
        },
        pos: function(a, c) {
            var d = Y(a).replace(this.S.ya, ""), d = Ka(d.split(this.S.Jb), parseFloat);
            "en" === this.axisOrientation.substr(0,
            2) ? c.push([d]) : 2 === d.length ? c.push([d.reverse()]) : 3 === d.length && c.push([[d[1], d[0], d[2]]])
        },
        posList: function(a, c) {
            for (var d = Y(a).replace(this.S.ya, "").split(this.S.Jb), e = c.le || parseInt(a.getAttribute("srsDimension") || a.getAttribute("dimension"), 10) || 2, f, g, h = Array(d.length / e), l = 0, n = d.length; l < n; l += e) {
                f = parseFloat(d[l]);
                g = parseFloat(d[l + 1]);
                var q = "en" === this.axisOrientation.substr(0, 2);
                3 === e ? h[l / e] = q ? [f, g, parseFloat(d[l + 2])] : [g, f, parseFloat(d[l + 2])] : 2 === e && (h[l / e] = q ? [f, g] : [g, f])
            }
            c.push(h)
        },
        Surface: function(a,
        c) {
            X(this, a, c)
        },
        patches: function(a, c) {
            X(this, a, c)
        },
        PolygonPatch: function(a, c) {
            this.j[this.B].Polygon.apply(this, [a, c])
        },
        exterior: function(a, c) {
            var d = [];
            X(this, a, d);
            c.de = d[0][0]
        },
        interior: function(a, c) {
            var d = [];
            X(this, a, d);
            c.Dc.push(d[0][0])
        },
        MultiCurve: function(a, c) {
            var d = [];
            this.j[this.B]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            c.geometry = {
                type: "multilinestring",
                M: d
            }
        },
        curveMember: function(a, c) {
            X(this, a, c)
        },
        MultiSurface: function(a, c) {
            var d = [];
            this.j[this.B]._inherit.apply(this, [a, d, c]);
            X(this, a,
            d);
            c.geometry = {
                type: "multipolygon",
                M: d
            }
        },
        surfaceMember: function(a, c) {
            X(this, a, c)
        },
        surfaceMembers: function(a, c) {
            X(this, a, c)
        },
        pointMembers: function(a, c) {
            X(this, a, c)
        },
        lineStringMembers: function(a, c) {
            X(this, a, c)
        },
        polygonMembers: function(a, c) {
            X(this, a, c)
        },
        geometryMembers: function(a, c) {
            X(this, a, c)
        },
        Envelope: function(a, c) {
            var d = [];
            this.j[this.B]._inherit.apply(this, [a, d, c]);
            X(this, a, d);
            c.projection = a.getAttribute("srsName");
            c.bounds = [d[0][0], d[0][1], d[1][0], d[1][1]]
        },
        lowerCorner: function(a, c) {
            var d = [];
            this.j[this.B].pos.apply(this,
            [a, d]);
            c.push(d[0][0])
        },
        upperCorner: function(a, c) {
            var d = [];
            this.j[this.B].pos.apply(this, [a, d]);
            c.push(d[0][0])
        }
    });
    I(this.a["http://www.opengis.net/gml"], {
        featureMembers: function(a) {
            for (var c = this.createElementNS("gml:featureMembers"), d = 0, e = a.length; d < e; ++d)
                $(this, "_typeName", a[d], this.featureNS, c);
            return c
        },
        Point: function(a) {
            var c = this.createElementNS("gml:Point");
            $(this, "pos", a.s(), null, c);
            return c
        },
        pos: function(a) {
            a = "en" === this.axisOrientation.substr(0, 2) ? a[0] + " " + a[1] : a[1] + " " + a[0];
            var c = this.createElementNS("gml:pos");
            c.appendChild(this.createTextNode(a));
            return c
        },
        LineString: function(a) {
            var c = this.createElementNS("gml:LineString");
            $(this, "posList", a.s(), null, c);
            return c
        },
        Curve: function(a) {
            var c = this.createElementNS("gml:Curve");
            $(this, "segments", a, null, c);
            return c
        },
        segments: function(a) {
            var c = this.createElementNS("gml:segments");
            $(this, "LineStringSegment", a, null, c);
            return c
        },
        LineStringSegment: function(a) {
            var c = this.createElementNS("gml:LineStringSegment");
            $(this, "posList", a.s(), null, c);
            return c
        },
        posList: function(a) {
            for (var c =
            a.length, d = Array(c), e, f = 0; f < c; ++f)
                e = a[f], d[f] = "en" === this.axisOrientation.substr(0, 2) ? e[0] + " " + e[1] : e[1] + " " + e[0];
            a = this.createElementNS("gml:posList");
            a.appendChild(this.createTextNode(d.join(" ")));
            return a
        },
        Surface: function(a) {
            var c = this.createElementNS("gml:Surface");
            $(this, "patches", a, null, c);
            return c
        },
        patches: function(a) {
            var c = this.createElementNS("gml:patches");
            $(this, "PolygonPatch", a, null, c);
            return c
        },
        PolygonPatch: function(a) {
            var c = this.createElementNS("gml:PolygonPatch");
            c.setAttribute("interpolation",
            "planar");
            a = a.s();
            $(this, "exterior", a[0].reverse(), null, c);
            for (var d = 1, e = a.length; d < e; ++d)
                $(this, "interior", a[d].reverse(), null, c);
            return c
        },
        Polygon: function(a) {
            var c = this.createElementNS("gml:Polygon");
            a = a.s();
            $(this, "exterior", a[0].reverse(), null, c);
            for (var d = 1, e = a.length; d < e; ++d)
                $(this, "interior", a[d].reverse(), null, c);
            return c
        },
        exterior: function(a) {
            var c = this.createElementNS("gml:exterior");
            $(this, "LinearRing", a, null, c);
            return c
        },
        interior: function(a) {
            var c = this.createElementNS("gml:interior");
            $(this, "LinearRing", a, null, c);
            return c
        },
        LinearRing: function(a) {
            var c = this.createElementNS("gml:LinearRing");
            $(this, "posList", a, null, c);
            return c
        },
        MultiCurve: function(a) {
            for (var c = this.createElementNS("gml:MultiCurve"), d = 0, e = a.o.length; d < e; ++d)
                $(this, "curveMember", a.o[d], null, c);
            return c
        },
        curveMember: function(a) {
            var c = this.createElementNS("gml:curveMember");
            this.curve ? $(this, "Curve", a, null, c) : $(this, "LineString", a, null, c);
            return c
        },
        MultiSurface: function(a) {
            for (var c = this.createElementNS("gml:MultiSurface"),
            d = 0, e = a.o.length; d < e; ++d)
                $(this, "surfaceMember", a.o[d], null, c);
            return c
        },
        surfaceMember: function(a) {
            var c = this.createElementNS("gml:surfaceMember");
            this.surface ? $(this, "Surface", a, null, c) : $(this, "Polygon", a, null, c);
            return c
        },
        Envelope: function(a) {
            var c = this.createElementNS("gml:Envelope");
            $(this, "lowerCorner", a, null, c);
            $(this, "upperCorner", a, null, c);
            s(this.srsName) && c.setAttribute("srsName", this.srsName);
            return c
        },
        lowerCorner: function(a) {
            a = "en" === this.axisOrientation.substr(0, 2) ? a[0] + " " + a[1] : a[1] +
            " " + a[0];
            var c = this.createElementNS("gml:lowerCorner");
            c.appendChild(this.createTextNode(a));
            return c
        },
        upperCorner: function(a) {
            a = "en" === this.axisOrientation.substr(0, 2) ? a[2] + " " + a[3] : a[3] + " " + a[2];
            var c = this.createElementNS("gml:upperCorner");
            c.appendChild(this.createTextNode(a));
            return c
        }
    })
}
E(vq, rq);
vq.prototype.write = function(a, b) {
    tq(this, a, b);
    var c = $(this, "featureMembers", a.features);
    this.setAttributeNS(c, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
    c = mp(this, c);
    delete this.srsName;
    delete this.axisOrientation;
    return c
};
function wq() {
    function a(a, b) {
        b.Tf.push(Y(a))
    }
    function b(a, b) {
        var e = {
            code: a.getAttribute("exceptionCode"),
            hh: a.getAttribute("locator"),
            Tf: []
        };
        b.Id.push(e);
        X(this, a, e)
    }
    this.j = {
        "http://www.opengis.net/ogc": {
            ServiceExceptionReport: function(a, b) {
                b.exceptionReport = {};
                b.exceptionReport.exceptions = [];
                X(this, a, b.exceptionReport)
            },
            ServiceException: function(a, b) {
                var e = {};
                e.code = a.getAttribute("code");
                e.locator = a.getAttribute("locator");
                e.text = Y(a);
                b.exceptions.push(e)
            }
        },
        "http://www.opengis.net/ows": {
            ExceptionReport: function(a,
            b) {
                b.success=!1;
                b.Yc = {
                    version: a.getAttribute("version"),
                    language: a.getAttribute("language"),
                    Id: []
                };
                X(this, a, b.Yc)
            },
            Exception: function(a, d) {
                b.apply(this, arguments)
            },
            ExceptionText: function(b, d) {
                a.apply(this, arguments)
            }
        },
        "http://www.opengis.net/ows/1.1": {
            ExceptionReport: function(a, b) {
                b.Yc = {
                    version: a.getAttribute("version"),
                    language: a.getAttribute("xml:lang"),
                    Id: []
                };
                X(this, a, b.Yc)
            },
            Exception: function(a, d) {
                b.apply(this, arguments)
            },
            ExceptionText: function(b, d) {
                a.apply(this, arguments)
            }
        }
    };
    lp.call(this)
}
E(wq, lp);
wq.prototype.Q = function(a) {
    u(a) && (a = ip(a));
    var b = {
        exceptionReport: null
    };
    a && X(this, a, b);
    return b
};
function xq(a) {
    this.b = a = s(a) ? a : {};
    this.nc = a.nc || null;
    this.version = a.version;
    this.profile = a.profile;
    s(a.jc) ? this.jc = a.jc : this.jc=!1;
    s(a.Nc) ? this.Nc = a.Nc : this.Nc=!1
}
function yq(a, b, c) {
    b ? (c = a.version, c || (c = b.getAttribute("version"), c || (c = a.nc))) : c = c && c.version || a.version || a.nc;
    return c
}
function zq(a, b) {
    b = b || a.nc;
    var c = a.profile ? "_" + a.profile: "";
    if (!a.parser || a.parser.VERSION != b) {
        var d = a.a["v" + b.replace(/\./g, "_") + c];
        if (!d && ("" !== c && a.jc && (c = "", d = a.a["v" + b.replace(/\./g, "_") + c]), !d))
            throw "Can't find a parser for version " + b + c;
        a.parser = new d(a.b)
    }
    return a.parser
}
xq.prototype.write = function(a, b) {
    var c = yq(this, null, b);
    this.parser = zq(this, c);
    c = this.parser.write(a, b);
    return !1 === this.Nc ? c : jp(c)
};
xq.prototype.Q = function(a, b) {
    u(a) && (a = ip(a));
    var c = yq(this, a.documentElement);
    this.parser = zq(this, c);
    var d = this.parser.Q(a, b), e = this.parser.Hd || null;
    null !== e && void 0 === d[e] && (e = new wq, d.error = e.Q(a));
    d.version = c;
    return d
};
function Aq() {
    this.B = "http://www.opengis.net/wms";
    this.Hd = "service";
    this.j = {
        "http://www.opengis.net/wms": {
            Service: function(a, b) {
                b.service = {};
                X(this, a, b.service)
            },
            Name: function(a, b) {
                b.name = Y(a)
            },
            Title: function(a, b) {
                b.title = Y(a)
            },
            Abstract: function(a, b) {
                b["abstract"] = Y(a)
            },
            BoundingBox: function(a) {
                var b = {};
                b.bbox = [parseFloat(a.getAttribute("minx")), parseFloat(a.getAttribute("miny")), parseFloat(a.getAttribute("maxx")), parseFloat(a.getAttribute("maxy"))];
                a = {
                    x: parseFloat(a.getAttribute("resx")),
                    y: parseFloat(a.getAttribute("resy"))
                };
                isNaN(a.x) && isNaN(a.y) || (b.res = a);
                return b
            },
            OnlineResource: function(a, b) {
                b.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            ContactInformation: function(a, b) {
                b.contactInformation = {};
                X(this, a, b.contactInformation)
            },
            ContactPersonPrimary: function(a, b) {
                b.personPrimary = {};
                X(this, a, b.personPrimary)
            },
            ContactPerson: function(a, b) {
                b.person = Y(a)
            },
            ContactOrganization: function(a, b) {
                b.organization = Y(a)
            },
            ContactPosition: function(a, b) {
                b.position = Y(a)
            },
            ContactAddress: function(a, b) {
                b.contactAddress =
                {};
                X(this, a, b.contactAddress)
            },
            AddressType: function(a, b) {
                b.type = Y(a)
            },
            Address: function(a, b) {
                b.address = Y(a)
            },
            City: function(a, b) {
                b.city = Y(a)
            },
            StateOrProvince: function(a, b) {
                b.stateOrProvince = Y(a)
            },
            PostCode: function(a, b) {
                b.postcode = Y(a)
            },
            Country: function(a, b) {
                b.country = Y(a)
            },
            ContactVoiceTelephone: function(a, b) {
                b.phone = Y(a)
            },
            ContactFacsimileTelephone: function(a, b) {
                b.fax = Y(a)
            },
            ContactElectronicMailAddress: function(a, b) {
                b.email = Y(a)
            },
            Fees: function(a, b) {
                var c = Y(a);
                c && "none" != c.toLowerCase() && (b.fees = c)
            },
            AccessConstraints: function(a, b) {
                var c = Y(a);
                c && "none" != c.toLowerCase() && (b.accessConstraints = c)
            },
            Capability: function(a, b) {
                b.capability = {};
                b.capability.nestedLayers = [];
                b.capability.layers = [];
                X(this, a, b.capability)
            },
            Request: function(a, b) {
                b.request = {};
                X(this, a, b.request)
            },
            GetCapabilities: function(a, b) {
                b.getcapabilities = {};
                b.getcapabilities.formats = [];
                X(this, a, b.getcapabilities)
            },
            Format: function(a, b) {
                ia(b.formats) ? b.formats.push(Y(a)) : b.format = Y(a)
            },
            DCPType: function(a, b) {
                X(this, a, b)
            },
            HTTP: function(a, b) {
                X(this,
                a, b)
            },
            Get: function(a, b) {
                b.get = {};
                X(this, a, b.get)
            },
            Post: function(a, b) {
                b.post = {};
                X(this, a, b.post)
            },
            GetMap: function(a, b) {
                b.getmap = {};
                b.getmap.formats = [];
                X(this, a, b.getmap)
            },
            GetFeatureInfo: function(a, b) {
                b.getfeatureinfo = {};
                b.getfeatureinfo.formats = [];
                X(this, a, b.getfeatureinfo)
            },
            Exception: function(a, b) {
                b.exception = {};
                b.exception.formats = [];
                X(this, a, b.exception)
            },
            Layer: function(a, b) {
                var c, d;
                b.capability ? (d = b.capability, c = b) : d = b;
                var e = a.getAttributeNode("queryable"), f = e && e.specified ? a.getAttribute("queryable"):
                null, g = (e = a.getAttributeNode("cascaded")) && e.specified ? a.getAttribute("cascaded"): null, h = (e = a.getAttributeNode("opaque")) && e.specified ? a.getAttribute("opaque"): null, l = a.getAttribute("noSubsets"), n = a.getAttribute("fixedWidth"), q = a.getAttribute("fixedHeight"), e = c || {}, f = {
                    nestedLayers: [],
                    styles: c ? [].concat(c.styles): [],
                    srs: {},
                    metadataURLs: [],
                    bbox: {},
                    llbbox: e.llbbox,
                    dimensions: {},
                    authorityURLs: {},
                    identifiers: {},
                    keywords: [],
                    queryable: f && "" !== f ? "1" === f || "true" === f: e.queryable ||!1,
                    cascaded: null !== g ? parseInt(g,
                    10): e.cascaded || 0,
                    opaque: h ? "1" === h || "true" === h: e.opaque ||!1,
                    noSubsets: null !== l ? "1" === l || "true" === l: e.noSubsets ||!1,
                    fixedWidth: null !== n ? parseInt(n, 10): e.fixedWidth || 0,
                    fixedHeight: null !== q ? parseInt(q, 10): e.fixedHeight || 0,
                    minScale: e.minScale,
                    maxScale: e.maxScale,
                    attribution: e.attribution
                };
                c && (I(f.srs, e.srs), I(f.bbox, e.bbox), I(f.dimensions, e.dimensions), I(f.authorityURLs, e.authorityURLs));
                b.nestedLayers.push(f);
                f.capability = d;
                X(this, a, f);
                delete f.capability;
                f.name && (c = f.name.split(":"), g = d.request, e = g.getfeatureinfo,
                0 < c.length && (f.prefix = c[0]), d.layers.push(f), s(f.formats) || (f.formats = g.getmap.formats), !s(f.infoFormats) && e && (f.infoFormats = e.formats))
            },
            Attribution: function(a, b) {
                b.attribution = {};
                X(this, a, b.attribution)
            },
            LogoURL: function(a, b) {
                b.logo = {
                    width: a.getAttribute("width"),
                    height: a.getAttribute("height")
                };
                X(this, a, b.logo)
            },
            Style: function(a, b) {
                var c = {};
                b.styles.push(c);
                X(this, a, c)
            },
            LegendURL: function(a, b) {
                var c = {
                    width: a.getAttribute("width"),
                    height: a.getAttribute("height")
                };
                b.legend = c;
                X(this, a, c)
            },
            MetadataURL: function(a,
            b) {
                var c = {
                    type: a.getAttribute("type")
                };
                b.metadataURLs.push(c);
                X(this, a, c)
            },
            DataURL: function(a, b) {
                b.dataURL = {};
                X(this, a, b.dataURL)
            },
            FeatureListURL: function(a, b) {
                b.featureListURL = {};
                X(this, a, b.featureListURL)
            },
            AuthorityURL: function(a, b) {
                var c = a.getAttribute("name"), d = {};
                X(this, a, d);
                b.authorityURLs[c] = d.href
            },
            Identifier: function(a, b) {
                var c = a.getAttribute("authority");
                b.identifiers[c] = Y(a)
            },
            KeywordList: function(a, b) {
                X(this, a, b)
            },
            SRS: function(a, b) {
                b.srs[Y(a)]=!0
            }
        }
    };
    lp.call(this)
}
E(Aq, lp);
Aq.prototype.Q = function(a) {
    u(a) && (a = ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var b = {};
    this.Ya(a, b);
    return b
};
function Bq() {
    Aq.call(this);
    var a = this.j["http://www.opengis.net/wms"].BoundingBox;
    I(this.j["http://www.opengis.net/wms"], {
        WMT_MS_Capabilities: function(a, c) {
            X(this, a, c)
        },
        Keyword: function(a, c) {
            c.keywords && c.keywords.push({
                value: Y(a)
            })
        },
        DescribeLayer: function(a, c) {
            c.describelayer = {
                formats: []
            };
            X(this, a, c.describelayer)
        },
        GetLegendGraphic: function(a, c) {
            c.getlegendgraphic = {
                formats: []
            };
            X(this, a, c.getlegendgraphic)
        },
        GetStyles: function(a, c) {
            c.getstyles = {
                formats: []
            };
            X(this, a, c.getstyles)
        },
        PutStyles: function(a,
        c) {
            c.putstyles = {
                formats: []
            };
            X(this, a, c.putstyles)
        },
        UserDefinedSymbolization: function(a, c) {
            var d = {
                supportSLD: 1 == parseInt(a.getAttribute("SupportSLD"), 10),
                userLayer: 1 == parseInt(a.getAttribute("UserLayer"), 10),
                userStyle: 1 == parseInt(a.getAttribute("UserStyle"), 10),
                remoteWFS: 1 == parseInt(a.getAttribute("RemoteWFS"), 10)
            };
            c.userSymbols = d
        },
        LatLonBoundingBox: function(a, c) {
            c.llbbox = [parseFloat(a.getAttribute("minx")), parseFloat(a.getAttribute("miny")), parseFloat(a.getAttribute("maxx")), parseFloat(a.getAttribute("maxy"))]
        },
        BoundingBox: function(b, c) {
            var d = a.apply(this, arguments);
            d.srs = b.getAttribute("SRS");
            c.bbox[d.srs] = d
        },
        ScaleHint: function(a, c) {
            var d = parseFloat(a.getAttribute("min")), e = parseFloat(a.getAttribute("max")), f = Math.pow(2, 0.5), g = 25.4 / 0.28;
            0 !== d && (c.maxScale = parseFloat(39.37 * (d / f) * g));
            Infinity != e && (c.minScale = parseFloat(39.37 * (e / f) * g))
        },
        Dimension: function(a, c) {
            var d = {
                name: a.getAttribute("name").toLowerCase(),
                units: a.getAttribute("units"),
                unitsymbol: a.getAttribute("unitSymbol")
            };
            c.dimensions[d.name] = d
        },
        Extent: function(a,
        c) {
            var d = a.getAttribute("name").toLowerCase();
            d in c.dimensions && (d = c.dimensions[d], d.nearestVal = "1" === a.getAttribute("nearestValue"), d.multipleVal = "1" === a.getAttribute("multipleValues"), d.current = "1" === a.getAttribute("current"), d["default"] = a.getAttribute("default") || "", d.values = Y(a).split(","))
        }
    })
}
E(Bq, Aq);
function Cq() {
    Bq.call(this);
    this.version = "1.1.0";
    I(this.j["http://www.opengis.net/wms"], {
        SRS: function(a, b) {
            for (var c = Y(a).split(/ +/), d = 0, e = c.length; d < e; d++)
                b.srs[c[d]]=!0
        }
    })
}
E(Cq, Bq);
function Dq() {
    Bq.call(this);
    this.version = "1.1.1";
    I(this.j["http://www.opengis.net/wms"], {
        SRS: function(a, b) {
            b.srs[Y(a)]=!0
        }
    })
}
E(Dq, Bq);
function Eq() {
    Dq.call(this);
    this.profile = "WMSC";
    I(this.j["http://www.opengis.net/wms"], {
        VendorSpecificCapabilities: function(a, b) {
            b.vendorSpecific = {
                tileSets: []
            };
            X(this, a, b.vendorSpecific)
        },
        TileSet: function(a, b) {
            var c = {
                srs: {},
                bbox: {},
                resolutions: []
            };
            X(this, a, c);
            b.ih.push(c)
        },
        Resolutions: function(a, b) {
            for (var c = Y(a).split(" "), d = 0, e = c.length; d < e; d++)
                "" !== c[d] && b.resolutions.push(parseFloat(c[d]))
        },
        Width: function(a, b) {
            b.width = parseInt(Y(a), 10)
        },
        Height: function(a, b) {
            b.height = parseInt(Y(a), 10)
        },
        Layers: function(a,
        b) {
            b.layers = Y(a)
        },
        Styles: function(a, b) {
            b.styles = Y(a)
        }
    })
}
E(Eq, Dq);
function Fq() {
    Aq.call(this);
    var a = this.j["http://www.opengis.net/wms"].BoundingBox;
    I(this.j["http://www.opengis.net/wms"], {
        WMS_Capabilities: function(a, c) {
            X(this, a, c)
        },
        LayerLimit: function(a, c) {
            c.layerLimit = parseInt(Y(a), 10)
        },
        MaxWidth: function(a, c) {
            c.maxWidth = parseInt(Y(a), 10)
        },
        MaxHeight: function(a, c) {
            c.maxHeight = parseInt(Y(a), 10)
        },
        BoundingBox: function(b, c) {
            var d = a.apply(this, arguments);
            d.srs = b.getAttribute("CRS");
            c.bbox[d.srs] = d
        },
        CRS: function(a, c) {
            this.j["http://www.opengis.net/wms"].SRS.apply(this,
            arguments)
        },
        EX_GeographicBoundingBox: function(a, c) {
            c.llbbox = [];
            X(this, a, c.llbbox)
        },
        westBoundLongitude: function(a, c) {
            c[0] = Y(a)
        },
        eastBoundLongitude: function(a, c) {
            c[2] = Y(a)
        },
        southBoundLatitude: function(a, c) {
            c[1] = Y(a)
        },
        northBoundLatitude: function(a, c) {
            c[3] = Y(a)
        },
        MinScaleDenominator: function(a, c) {
            c.maxScale = parseFloat(Y(a)).toPrecision(16)
        },
        MaxScaleDenominator: function(a, c) {
            c.minScale = parseFloat(Y(a)).toPrecision(16)
        },
        Dimension: function(a, c) {
            var d = {
                name: a.getAttribute("name").toLowerCase(),
                units: a.getAttribute("units"),
                unitsymbol: a.getAttribute("unitSymbol"),
                nearestVal: "1" === a.getAttribute("nearestValue"),
                multipleVal: "1" === a.getAttribute("multipleValues"),
                "default": a.getAttribute("default") || "",
                current: "1" === a.getAttribute("current"),
                values: Y(a).split(",")
            };
            c.dimensions[d.name] = d
        },
        Keyword: function(a, c) {
            var d = {
                value: Y(a),
                vocabulary: a.getAttribute("vocabulary")
            };
            c.keywords && c.keywords.push(d)
        }
    });
    this.j.sld = {
        UserDefinedSymbolization: function(a, c) {
            this.j["http://www.opengis.net/wms"].eh.apply(this, arguments);
            var d =
            a.getAttribute("InlineFeature");
            c.userSymbols.inlineFeature = 1 == parseInt(d, 10);
            d = a.getAttribute("RemoteWCS");
            c.userSymbols.remoteWCS = 1 == parseInt(d, 10)
        },
        DescribeLayer: function(a, c) {
            this.j["http://www.opengis.net/wms"].tg.apply(this, arguments)
        },
        GetLegendGraphic: function(a, c) {
            this.j["http://www.opengis.net/wms"].zg.apply(this, arguments)
        }
    }
}
E(Fq, Aq);
function Gq(a) {
    a = a || {};
    a.defaultVersion = "1.1.1";
    this.a = {};
    this.a.v1_1_0 = Cq;
    this.a.v1_1_1 = Dq;
    this.a.v1_1_1_WMSC = Eq;
    this.a.v1_3_0 = Fq;
    xq.call(this, a)
}
E(Gq, xq);
function Hq() {
    this.j = {
        "http://www.opengis.net/ows": {
            ServiceIdentification: function(a, b) {
                b.serviceIdentification = {};
                X(this, a, b.serviceIdentification)
            },
            Title: function(a, b) {
                b.title = Y(a)
            },
            Abstract: function(a, b) {
                b["abstract"] = Y(a)
            },
            Keywords: function(a, b) {
                b.keywords = {};
                X(this, a, b.keywords)
            },
            Keyword: function(a, b) {
                b[Y(a)]=!0
            },
            ServiceType: function(a, b) {
                b.serviceType = {
                    codeSpace: a.getAttribute("codeSpace"),
                    value: Y(a)
                }
            },
            ServiceTypeVersion: function(a, b) {
                b.serviceTypeVersion = Y(a)
            },
            Fees: function(a, b) {
                b.fees = Y(a)
            },
            AccessConstraints: function(a, b) {
                b.accessConstraints = Y(a)
            },
            ServiceProvider: function(a, b) {
                b.serviceProvider = {};
                X(this, a, b.serviceProvider)
            },
            ProviderName: function(a, b) {
                b.providerName = Y(a)
            },
            ProviderSite: function(a, b) {
                b.providerSite = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            ServiceContact: function(a, b) {
                b.serviceContact = {};
                X(this, a, b.serviceContact)
            },
            IndividualName: function(a, b) {
                b.individualName = Y(a)
            },
            PositionName: function(a, b) {
                b.positionName = Y(a)
            },
            ContactInfo: function(a, b) {
                b.contactInfo =
                {};
                X(this, a, b.contactInfo)
            },
            Phone: function(a, b) {
                b.phone = {};
                X(this, a, b.phone)
            },
            Voice: function(a, b) {
                b.voice = Y(a)
            },
            Address: function(a, b) {
                b.address = {};
                X(this, a, b.address)
            },
            DeliveryPoint: function(a, b) {
                b.deliveryPoint = Y(a)
            },
            City: function(a, b) {
                b.city = Y(a)
            },
            AdministrativeArea: function(a, b) {
                b.administrativeArea = Y(a)
            },
            PostalCode: function(a, b) {
                b.postalCode = Y(a)
            },
            Country: function(a, b) {
                b.country = Y(a)
            },
            ElectronicMailAddress: function(a, b) {
                b.electronicMailAddress = Y(a)
            },
            Role: function(a, b) {
                b.role = Y(a)
            },
            OperationsMetadata: function(a,
            b) {
                b.operationsMetadata = {};
                X(this, a, b.operationsMetadata)
            },
            Operation: function(a, b) {
                var c = a.getAttribute("name");
                b[c] = {};
                X(this, a, b[c])
            },
            DCP: function(a, b) {
                b.dcp = {};
                X(this, a, b.dcp)
            },
            HTTP: function(a, b) {
                b.http = {};
                X(this, a, b.http)
            },
            Get: function(a, b) {
                b.get || (b.get = []);
                var c = {
                    url: this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
                };
                X(this, a, c);
                b.get.push(c)
            },
            Post: function(a, b) {
                b.post || (b.post = []);
                var c = {
                    url: this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
                };
                X(this, a, c);
                b.post.push(c)
            },
            Parameter: function(a, b) {
                b.parameters || (b.parameters = {});
                var c = a.getAttribute("name");
                b.parameters[c] = {};
                X(this, a, b.parameters[c])
            },
            Constraint: function(a, b) {
                b.constraints || (b.constraints = {});
                var c = a.getAttribute("name");
                b.constraints[c] = {};
                X(this, a, b.constraints[c])
            },
            Value: function(a, b) {
                b[Y(a)]=!0
            },
            OutputFormat: function(a, b) {
                b.formats.push({
                    value: Y(a)
                });
                X(this, a, b)
            },
            WGS84BoundingBox: function(a, b) {
                var c = {};
                c.crs = a.getAttribute("crs");
                b.BoundingBox ? b.BoundingBox.push(c) : (b.projection = c.crs, c = b);
                X(this,
                a, c)
            },
            BoundingBox: function(a, b) {
                this.j[a.namespaceURI].WGS84BoundingBox.apply(this, [a, b])
            },
            LowerCorner: function(a, b) {
                var c = Y(a).replace(this.S.ya, ""), c = c.replace(this.S.sd, ","), c = c.split(this.S.Jb);
                b.left = c[0];
                b.bottom = c[1]
            },
            UpperCorner: function(a, b) {
                var c = Y(a).replace(this.S.ya, ""), c = c.replace(this.S.sd, ","), c = c.split(this.S.Jb);
                b.right = c[0];
                b.top = c[1];
                b.bounds = [parseFloat(b.left), parseFloat(b.right), parseFloat(b.bottom), parseFloat(b.top)];
                delete b.left;
                delete b.bottom;
                delete b.right;
                delete b.top
            },
            Language: function(a, b) {
                b.language = Y(a)
            }
        }
    };
    lp.call(this)
}
E(Hq, lp);
function Iq() {
    Hq.call(this);
    this.j["http://www.opengis.net/ows/1.1"] = this.j["http://www.opengis.net/ows"];
    I(this.j["http://www.opengis.net/ows/1.1"], {
        AllowedValues: function(a, b) {
            b.allowedValues = {};
            X(this, a, b.allowedValues)
        },
        AnyValue: function(a, b) {
            b.anyValue=!0
        },
        DataType: function(a, b) {
            b.dataType = Y(a)
        },
        Range: function(a, b) {
            b.range = {};
            X(this, a, b.range)
        },
        MinimumValue: function(a, b) {
            b.minValue = Y(a)
        },
        MaximumValue: function(a, b) {
            b.maxValue = Y(a)
        },
        Identifier: function(a, b) {
            b.identifier = Y(a)
        },
        SupportedCRS: function(a,
        b) {
            b.supportedCRS = Y(a)
        }
    })
}
E(Iq, Hq);
function Jq() {
    this.B = "http://www.opengis.net/wmts/1.0";
    this.Hd = "serviceIdentification";
    this.j = {
        "http://www.opengis.net/wmts/1.0": {
            Capabilities: function(a, c) {
                X(this, a, c)
            },
            Contents: function(a, c) {
                c.contents = {};
                c.contents.layers = [];
                c.contents.tileMatrixSets = {};
                X(this, a, c.contents)
            },
            Layer: function(a, c) {
                var d = {
                    styles: [],
                    formats: [],
                    dimensions: [],
                    tileMatrixSetLinks: [],
                    layers: []
                };
                X(this, a, d);
                c.layers.push(d)
            },
            Style: function(a, c) {
                var d = {};
                d.isDefault = "true" === a.getAttribute("isDefault");
                X(this, a, d);
                c.styles.push(d)
            },
            Format: function(a, c) {
                c.formats.push(Y(a))
            },
            TileMatrixSetLink: function(a, c) {
                var d = {};
                X(this, a, d);
                c.tileMatrixSetLinks.push(d)
            },
            TileMatrixSet: function(a, c) {
                if (c.layers) {
                    var d = {
                        matrixIds: []
                    };
                    X(this, a, d);
                    c.tileMatrixSets[d.identifier] = d
                } else 
                    c.tileMatrixSet = Y(a)
            },
            TileMatrix: function(a, c) {
                var d = {
                    supportedCRS: c.supportedCRS
                };
                X(this, a, d);
                c.matrixIds.push(d)
            },
            ScaleDenominator: function(a, c) {
                c.scaleDenominator = parseFloat(Y(a))
            },
            TopLeftCorner: function(a, c) {
                var d = Y(a).split(" "), e = Md(ke(c.supportedCRS));
                c.topLeftCorner =
                md([parseFloat(d[0]), parseFloat(d[1])], e)
            },
            TileWidth: function(a, c) {
                c.tileWidth = parseInt(Y(a), 10)
            },
            TileHeight: function(a, c) {
                c.tileHeight = parseInt(Y(a), 10)
            },
            MatrixWidth: function(a, c) {
                c.matrixWidth = parseInt(Y(a), 10)
            },
            MatrixHeight: function(a, c) {
                c.matrixHeight = parseInt(Y(a), 10)
            },
            ResourceURL: function(a, c) {
                var d = a.getAttribute("resourceType"), e = a.getAttribute("format"), f = a.getAttribute("template");
                c.resourceUrls || (c.resourceUrls = {});
                c.resourceUrls[d] || (c.resourceUrls[d] = {});
                c.resourceUrls[d][e] || (c.resourceUrls[d][e] =
                []);
                c.resourceUrls[d][e].push(f)
            },
            WSDL: function(a, c) {
                c.wsdl = {};
                c.wsdl.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            ServiceMetadataURL: function(a, c) {
                c.serviceMetadataUrl = {};
                c.serviceMetadataUrl.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href")
            },
            LegendURL: function(a, c) {
                c.legend = {};
                c.legend.href = this.getAttributeNS(a, "http://www.w3.org/1999/xlink", "href");
                c.legend.format = a.getAttribute("format")
            },
            Dimension: function(a, c) {
                var d = {
                    values: []
                };
                X(this, a, d);
                c.dimensions.push(d)
            },
            Default: function(a, c) {
                c["default"] = Y(a)
            },
            Value: function(a, c) {
                c.values.push(Y(a))
            }
        }
    };
    var a = new Iq;
    this.j["http://www.opengis.net/ows/1.1"] = a.j["http://www.opengis.net/ows/1.1"];
    lp.call(this)
}
E(Jq, lp);
Jq.prototype.Q = function(a) {
    u(a) && (a = ip(a));
    a && 9 == a.nodeType && (a = a.documentElement);
    var b = {};
    this.Ya(a, b);
    return b
};
function Kq(a) {
    a = a || {};
    a.defaultVersion = "1.0.0";
    this.a = {};
    this.a.v1_0_0 = Jq;
    xq.call(this, a)
}
E(Kq, xq);
function Lq(a, b) {
    var c = b || {}, d = c.document || document, e = zg("SCRIPT"), f = {
        je: e,
        yb: void 0
    }, g = new vp(Mq, f), h = null, l = null != c.timeout ? c.timeout: 5E3;
    0 < l && (h = window.setTimeout(function() {
        Nq(e, !0);
        g.Bb(new Oq(Pq, "Timeout reached for loading script " + a))
    }, l), f.yb = h);
    e.onload = e.onreadystatechange = function() {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Nq(e, c.Ad ||!1, h), g.aa(null))
    };
    e.onerror = function() {
        Nq(e, !0, h);
        g.Bb(new Oq(Qq, "Error while loading script " + a))
    };
    tg(e, {
        type: "text/javascript",
        charset: "UTF-8",
        src: a
    });
    Rq(d).appendChild(e);
    return g
}
function Rq(a) {
    var b = a.getElementsByTagName("HEAD");
    return b && 0 != b.length ? b[0] : a.documentElement
}
function Mq() {
    if (this && this.je) {
        var a = this.je;
        a && "SCRIPT" == a.tagName && Nq(a, !0, this.yb)
    }
}
function Nq(a, b, c) {
    null != c && p.clearTimeout(c);
    a.onload = da;
    a.onerror = da;
    a.onreadystatechange = da;
    b && window.setTimeout(function() {
        Eg(a)
    }, 0)
}
var Qq = 0, Pq = 1;
function Oq(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    ta.call(this, c);
    this.code = a
}
E(Oq, ta);
function Sq(a, b) {
    this.b = new Lf(a);
    this.a = b ? b : "callback";
    this.yb = 5E3
}
var Tq = 0;
Sq.prototype.cancel = function(a) {
    a && (a.Wc && a.Wc.cancel(), a.P && Uq(a.P, !1))
};
function Vq(a) {
    return function() {
        Uq(a, !1)
    }
}
function Wq(a, b) {
    return function(c) {
        Uq(a, !0);
        b.apply(void 0, arguments)
    }
}
function Uq(a, b) {
    p._callbacks_[a] && (b ? delete p._callbacks_[a] : p._callbacks_[a] = da)
};
function Xq(a) {
    return function(b) {
        return null === b ? void 0 : a.replace("{z}", "" + b.z).replace("{x}", "" + b.x).replace("{y}", "" + b.y)
    }
}
function Yq(a) {
    return Zq(Ka(a, Xq))
}
function Zq(a) {
    return 1 === a.length ? a[0] : function(b, c) {
        return null === b ? void 0 : a[$c((b.x<<b.z) + b.y, a.length)].call(this, b, c)
    }
}
function $q(a, b) {
    var c = nk, d = od();
    return function(e, f) {
        if (null !== e) {
            var g = this.tileGrid;
            null === g && (g = Vj(f));
            var h = g.Ba(e.z), g = rj(g, e, d);
            return c.call(this, a, b, g, h, f)
        }
    }
}
function ar() {}
function br(a, b) {
    var c = new Xa(0, 0, 0);
    return function(d, e) {
        return null === d ? void 0 : b.call(this, a.call(this, d, e, c), e)
    }
}
function cr(a) {
    var b = [], c = /\{(\d)-(\d)\}/.exec(a) || /\{([a-z])-([a-z])\}/.exec(a);
    if (c) {
        var d = c[2].charCodeAt(0), e;
        for (e = c[1].charCodeAt(0); e <= d; ++e)
            b.push(a.replace(c[0], String.fromCharCode(e)))
    } else 
        b.push(a);
    return b
};
function dr(a) {
    Wj.call(this, {
        attributions: a.attributions,
        extent: a.extent,
        logo: a.logo,
        opaque: a.opaque,
        projection: a.projection,
        tileGrid: a.tileGrid
    });
    this.tileUrlFunction = s(a.tileUrlFunction) ? a.tileUrlFunction : ar;
    this.k = s(a.crossOrigin) ? a.crossOrigin : null;
    this.a = new mm;
    this.p = s(a.tileLoadFunction) ? a.tileLoadFunction : er
}
E(dr, Wj);
function er(a, b) {
    a.ca().src = b
}
m = dr.prototype;
m.nd = function() {
    return this.a.T() > this.a.d
};
m.Nb = function(a) {
    this.a.Nb(a)
};
m.Db = function(a, b, c, d) {
    var e = this.eb(a, b, c);
    if (km(this.a, e))
        return this.a.get(e);
    a = new Xa(a, b, c);
    d = this.tileUrlFunction(a, d);
    d = new pe(a, s(d) ? 0 : 4, s(d) ? d : "", this.k, this.p);
    lm(this.a, e, d);
    return d
};
m.ec = function(a) {
    this.a.clear();
    this.tileUrlFunction = a;
    Xe(this)
};
m.ne = function(a, b, c) {
    a = this.eb(a, b, c);
    km(this.a, a) && this.a.get(a)
};
function fr(a) {
    var b = Array(a.maxZoom + 1), c, d = 2 * ij / 256;
    for (c = 0; c <= a.maxZoom; ++c)
        b[c] = d / Math.pow(2, c);
    pj.call(this, {
        minZoom: a.minZoom,
        origin: [ - ij, ij],
        resolutions: b,
        tileSize: [256, 256]
    })
}
E(fr, pj);
function gr(a, b) {
    var c = s(b) ? b: {}, d = a.minZoom, e = a.maxZoom, f = s(c.bg) ? c.bg: !0, g = new Xa(0, 0, 0), h = null;
    if (s(c.extent)) {
        var h = Array(e + 1), l;
        for (l = 0; l <= e; ++l)
            h[l] = l < d ? null : sj(a, c.extent, l)
    }
    return function(a, b, c) {
        b = a.z;
        if (b < d || e < b)
            return null;
        var l = Math.pow(2, b), t = a.x;
        if (f)
            t = $c(t, l);
        else if (0 > t || l <= t)
            return null;
        a = a.y;
        return a<-l||-1 < a || null !== h && (g.z = b, g.x = t, g.y = a, !h[b].contains(g)) ? null : s(c) ? (c.z = b, c.x = t, c.y =- a - 1, c) : new Xa(b, t, - a - 1)
    }
}
fr.prototype.yc = function(a, b) {
    return a.z < this.maxZoom ? bb(2 * a.x, 2 * (a.x + 1), 2 * a.y, 2 * (a.y + 1), b) : null
};
fr.prototype.uc = function(a, b, c, d) {
    d = bb(0, a.x, 0, a.y, d);
    for (a = a.z - 1; a >= this.minZoom; --a)
        if (d.a = d.d>>=1, d.c = d.b>>=1, b.call(c, a, d))
            return !0;
    return !1
};
function hr(a) {
    dr.call(this, {
        crossOrigin: "anonymous",
        opaque: !0,
        projection: ke("EPSG:3857")
    });
    this.e = s(a.culture) ? a.culture : "en-us";
    this.b=!1;
    var b = new Lf("//dev.virtualearth.net/REST/v1/Imagery/Metadata/" + a.style), b = new Sq(b, "jsonp"), c = {
        include: "ImageryProviders",
        key: a.key
    };
    a = y(this.i, this);
    var d = c || null, c = "_" + (Tq++).toString(36) + sa().toString(36);
    p._callbacks_ || (p._callbacks_ = {});
    var e = b.b.ea();
    if (d)
        for (var f in d)
            d.hasOwnProperty&&!d.hasOwnProperty(f) || Yf(e, f, d[f]);
    a && (p._callbacks_[c] = Wq(c, a), Yf(e,
    b.a, "_callbacks_." + c));
    f = Lq(e.toString(), {
        timeout: b.yb,
        Ad: !0
    });
    Cp(f, null, Vq(c), void 0)
}
E(hr, dr);
hr.prototype.i = function(a) {
    var b = a.brandLogoUri, c = a.resourceSets[0].resources[0], d = new fr({
        minZoom: c.zoomMin,
        maxZoom: c.zoomMax,
        tileSize: [c.imageWidth, c.imageHeight]
    });
    this.tileGrid = d;
    var e = this.e;
    this.tileUrlFunction = br(gr(d), Zq(Ka(c.imageUrlSubdomains, function(a) {
        var b = c.imageUrl.replace("{subdomain}", a).replace("{culture}", e);
        return function(a) {
            return null === a ? void 0 : b.replace("{quadkey}", $a(a))
        }
    })));
    var f = Od(ke("EPSG:4326"), this.ga());
    this.d = Ka(c.imageryProviders, function(a) {
        var b = a.attribution,
        c = {};
        Ga(a.coverageAreas, function(a) {
            var b = a.zoomMin, e = a.zoomMax;
            a = a.bbox;
            a = Bd([a[1], a[3], a[0], a[2]], f);
            var g, h;
            for (g = b; g <= e; ++g)
                h = g.toString(), b = sj(d, a, g), h in c ? c[h].push(b) : c[h] = [b]
        });
        return new cb({
            html: b,
            tileRanges: c
        })
    });
    this.f = b;
    this.b=!0;
    Xe(this)
};
hr.prototype.Ma = k("b");
function ir(a) {
    var b = jr(a.url), c = a.imageExtent, d = a.imageSize, e = (c[3] - c[1]) / d[1], f = ke(a.projection);
    pk.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        projection: a.projection,
        Eb: b,
        resolutions: [e]
    });
    this.a = qk(this, c, e, d, f)
}
E(ir, pk);
ir.prototype.ca = function(a) {
    return zd(a, this.a.ba()) ? this.a : null
};
function jr(a) {
    return function() {
        return a
    }
};
function nk(a, b, c, d, e) {
    d = {
        SERVICE: "WMS",
        VERSION: "1.3.0",
        REQUEST: "GetMap",
        FORMAT: "image/png",
        TRANSPARENT: !0,
        WIDTH: Math.round(d[0]),
        HEIGHT: Math.round(d[1])
    };
    I(d, b);
    d.STYLES = b.STYLES || new String("");
    b = "1.3" < d.VERSION;
    d[b ? "CRS": "SRS"] = e.bb;
    e = e.d;
    d.BBOX = (b && "ne" == e.substr(0, 2) ? [c[1], c[0], c[3], c[2]] : [c[0], c[1], c[2], c[3]]).join(",");
    return If(Kf([a], d))
}
function kr(a, b, c, d, e) {
    a = a.replace("REQUEST\x3dGetMap", "REQUEST\x3dGetFeatureInfo").replace(lr, "LAYERS\x3d$1\x26QUERY_LAYERS\x3d$1");
    c = s(c) ? sc(c) : {};
    var f = {
        method: "iframe",
        params: {}
    };
    I(f, c);
    c = {
        INFO_FORMAT: "text/html"
    };
    var g = parseFloat(a.match(mr)[1]), h = Math.round(b[0]);
    b = Math.round(b[1]);
    1.3 <= g ? I(c, {
        I: h,
        J: b
    }) : I(c, {
        X: h,
        Y: b
    });
    I(c, f.params);
    a = If(Kf([a], c));
    "iframe" == f.method ? p.setTimeout(function() {
        d('\x3ciframe seamless src\x3d"' + a + '"\x3e\x3c/iframe\x3e')
    }, 0) : "xhr_get" == f.method && ml(a, function(a) {
        a =
        a.target;
        wl(a) ? d(xl(a)) : s(e) && e()
    })
}
var lr = /LAYERS=([^&]+)/, mr = /VERSION=([^&]+)/;
function nr(a) {
    this.e = a.params;
    pk.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        projection: a.projection,
        resolutions: a.resolutions,
        Eb: s(a.url) ? mk(a.url, this.e): ok
    });
    this.k = s(a.ad) ? a.ad : {};
    this.a = null;
    this.t = s(a.ratio) ? a.ratio : 1.5
}
E(nr, pk);
nr.prototype.p = k("e");
nr.prototype.ca = function(a, b, c) {
    null === this.b || (b = this.b[pi(this.b, b, 0)]);
    var d = this.a;
    if (null !== d && d.D() == b && sd(d.ba(), a))
        return d;
    var d = a = a.slice(), e = this.t, f = (d[2] - d[0]) / 2 * (e - 1), e = (d[3] - d[1]) / 2 * (e - 1);
    d[0] -= f;
    d[2] += f;
    d[1] -= e;
    d[3] += e;
    return this.a = qk(this, a, b, [(a[2] - a[0]) / b, (a[3] - a[1]) / b], c)
};
nr.prototype.Ta = function(a, b, c, d) {
    var e = b.a().O().ga(), f = b.c(), g = di(b, [0, f[1]]);
    b = di(b, [f[0], 0]);
    e = this.Eb([g[0], b[0], g[1], b[1]], f, e);
    kr(e, a, this.k, c, d)
};
nr.prototype.r = function(a) {
    I(this.e, a);
    this.a = null;
    Xe(this)
};
function or(a) {
    var b = a.projection || ke("EPSG:3857"), c = new fr({
        maxZoom: s(a.maxZoom) ? a.maxZoom: 18
    });
    dr.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        logo: a.logo,
        projection: b,
        tileGrid: c,
        tileLoadFunction: a.tileLoadFunction,
        tileUrlFunction: ar
    });
    this.e = gr(c, {
        extent: a.extent
    });
    s(a.tileUrlFunction) ? this.ec(a.tileUrlFunction) : s(a.urls) ? this.ec(Yq(a.urls)) : s(a.url) && this.b(a.url)
}
E(or, dr);
or.prototype.ec = function(a) {
    or.F.ec.call(this, br(this.e, a))
};
or.prototype.b = function(a) {
    this.ec(Yq(cr(a)))
};
function pr(a) {
    a = s(a) ? a : {};
    or.call(this, {
        attributions: s(a.attributions) ? a.attributions: s(a.attribution) ? [a.attribution]: qr,
        crossOrigin: "anonymous",
        opaque: !0,
        maxZoom: a.maxZoom,
        url: s(a.url) ? a.url: "http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    })
}
E(pr, or);
var rr = new cb({
    html: 'Data \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://www.openstreetmap.org/copyright"\x3eODbL\x3c/a\x3e'
}), sr = new cb({
    html: 'Tiles \x26copy; \x3ca href\x3d"http://www.openstreetmap.org/"\x3eOpenStreetMap\x3c/a\x3e contributors, \x3ca href\x3d"http://creativecommons.org/licenses/by-sa/2.0/"\x3eCC BY-SA\x3c/a\x3e'
}), qr = [sr, rr];
function tr() {
    or.call(this, {
        attributions: [new cb({
            html: 'Tiles Courtesy of \x3ca href\x3d"http://www.mapquest.com/" target\x3d"_blank"\x3eMapQuest\x3c/a\x3e'
        }), rr],
        crossOrigin: "anonymous",
        logo: "http://developer.mapquest.com/content/osm/mq_logo.png",
        opaque: !0,
        maxZoom: 28,
        url: "http://otile{1-4}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg"
    })
}
E(tr, or);
function ur() {
    or.call(this, {
        attributions: [new cb({
            html: 'Tiles Courtesy of \x3ca href\x3d"http://www.mapquest.com/" target\x3d"_blank"\x3eMapQuest\x3c/a\x3e'
        }), new cb({
            html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"
        })],
        crossOrigin: "anonymous",
        logo: "http://developer.mapquest.com/content/osm/mq_logo.png",
        maxZoom: 18,
        opaque: !0,
        url: "http://oatile{1-4}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg"
    })
}
E(ur, or);
var vr = {
    terrain: {
        Aa: "jpg",
        opaque: !0
    },
    "terrain-background": {
        Aa: "jpg",
        opaque: !0
    },
    "terrain-labels": {
        Aa: "png",
        opaque: !1
    },
    "terrain-lines": {
        Aa: "png",
        opaque: !1
    },
    "toner-background": {
        Aa: "png",
        opaque: !0
    },
    toner: {
        Aa: "png",
        opaque: !0
    },
    "toner-hybrid": {
        Aa: "png",
        opaque: !1
    },
    "toner-labels": {
        Aa: "png",
        opaque: !1
    },
    "toner-lines": {
        Aa: "png",
        opaque: !1
    },
    "toner-lite": {
        Aa: "png",
        opaque: !0
    },
    watercolor: {
        Aa: "jpg",
        opaque: !0
    }
}, wr = {
    terrain: {
        minZoom: 4,
        maxZoom: 18
    },
    toner: {
        minZoom: 0,
        maxZoom: 20
    },
    watercolor: {
        minZoom: 3,
        maxZoom: 16
    }
};
function xr(a) {
    var b = a.layer.indexOf("-"), b =- 1 == b ? a.layer : a.layer.slice(0, b), c = vr[a.layer];
    or.call(this, {
        attributions: yr,
        crossOrigin: "anonymous",
        maxZoom: wr[b].maxZoom,
        opaque: c.opaque,
        url: s(a.url) ? a.url: "http://{a-d}.tile.stamen.com/" + a.layer + "/{z}/{x}/{y}." + c.Aa
    })
}
E(xr, or);
var yr = [new cb({
    html: 'Map tiles by \x3ca href\x3d"http://stamen.com/"\x3eStamen Design\x3c/a\x3e, under \x3ca href\x3d"http://creativecommons.org/licenses/by/3.0/"\x3eCC BY 3.0\x3c/a\x3e.'
}), rr];
function zr(a, b) {
    oe.call(this, a, 2);
    this.e = a;
    this.d = b.Ba(a.z);
    this.c = {}
}
E(zr, oe);
zr.prototype.ca = function(a) {
    a = s(a) ? x(a) : - 1;
    if (a in this.c)
        return this.c[a];
    var b = this.d, c = zg("CANVAS");
    c.width = b[0];
    c.height = b[1];
    var d = c.getContext("2d");
    d.strokeStyle = "black";
    d.strokeRect(0.5, 0.5, b[0] + 0.5, b[1] + 0.5);
    d.fillStyle = "black";
    d.textAlign = "center";
    d.textBaseline = "middle";
    d.font = "24px sans-serif";
    d.fillText(this.e.toString(), b[0] / 2, b[1] / 2);
    return this.c[a] = c
};
function Ar(a) {
    Wj.call(this, {
        extent: a.extent,
        opaque: !1,
        projection: a.projection,
        tileGrid: a.tileGrid
    });
    this.a = new mm
}
E(Ar, Wj);
Ar.prototype.nd = function() {
    return this.a.T() > this.a.d
};
Ar.prototype.Nb = function(a) {
    this.a.Nb(a)
};
Ar.prototype.Db = function(a, b, c) {
    var d = this.eb(a, b, c);
    if (km(this.a, d))
        return this.a.get(d);
    a = new zr(new Xa(a, b, c), this.tileGrid);
    lm(this.a, d, a);
    return a
};
var Br = [];
C("grid", function(a) {
    Br.push(a)
});
function Cr(a) {
    dr.call(this, {
        crossOrigin: a.crossOrigin,
        projection: ke("EPSG:3857")
    });
    this.b=!1;
    this.Wc = Lq(a.url, {
        Ad: !0
    });
    Bp(this.Wc, this.e, this)
}
E(Cr, dr);
Cr.prototype.e = function() {
    var a = Br.pop(), b = ke("EPSG:4326"), c;
    if (s(a.bounds)) {
        var d = Od(b, this.ga());
        this.g = c = Bd(a.bounds, d)
    }
    var e = a.minzoom || 0, d = a.maxzoom || 22, f = new fr({
        maxZoom: d,
        minZoom: e
    });
    this.tileGrid = f;
    this.tileUrlFunction = br(gr(f, {
        extent: c
    }), Yq(a.tiles));
    if (s(a.attribution)) {
        b = s(c) ? c : b.ba();
        c = {};
        for (var g; e <= d; ++e)
            g = e.toString(), c[g] = [sj(f, b, e)];
        this.d = [new cb({
            html: a.attribution,
            tileRanges: c
        })]
    }
    this.b=!0;
    Xe(this)
};
Cr.prototype.Ma = k("b");
function Dr(a) {
    var b = ar, c = a.urls;
    !s(c) && s(a.url) && (c = cr(a.url));
    this.b = a.params;
    this.e = "";
    Er(this);
    s(c) && (b = Ka(c, function(a) {
        return $q(a, this.b)
    }, this), b = Zq(b));
    var d = a.extent;
    dr.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: d,
        tileGrid: a.tileGrid,
        opaque: !(s(a.params.TRANSPARENT) ? a.params.TRANSPARENT : 1),
        projection: a.projection,
        tileUrlFunction: br(function(a, b) {
            var c = this.tileGrid;
            null === c && (c = Vj(b));
            if (c.Pb().length <= a.z)
                return null;
            var h = a.x, l = rj(c, a), n = b.ba();
            d = s(d) ? d : n;
            null !== d && (b.Kd && d[0] === n[0] && d[2] === n[2]) && (l = Math.ceil((d[2] - d[0]) / (l[2] - l[0])), h = $c(h, l), l = rj(c, new Xa(a.z, h, a.y)));
            return null === d || zd(l, d)&&!Ad(l, d) ? new Xa(a.z, h, a.y) : null
        }, b)
    });
    this.i = s(a.ad) ? a.ad : {}
}
E(Dr, dr);
Dr.prototype.eb = function(a, b, c) {
    return this.e + Dr.F.eb.call(this, a, b, c)
};
Dr.prototype.r = k("b");
Dr.prototype.Ta = function(a, b, c, d) {
    var e = di(b, a), f = b.a().O(), g = f.ga(), h = null === this.tileGrid ? Vj(g): this.tileGrid, f = f.D(), e = Sj(h, e[0], e[1], f, !1, void 0), h = rj(h, e);
    b = Si(b, yd(h));
    g = this.tileUrlFunction(e, g);
    kr(g, [a[0] - b[0], a[1] - b[1]], this.i, c, d)
};
function Er(a) {
    var b = 0, c = [], d;
    for (d in a.b)
        c[b++] = d + "-" + a.b[d];
    a.e = c.join("/")
}
Dr.prototype.t = function(a) {
    I(this.b, a);
    Er(this);
    Xe(this)
};
function Sr(a) {
    this.c = a.matrixIds;
    pj.call(this, {
        origin: a.origin,
        origins: a.origins,
        resolutions: a.resolutions,
        tileSize: a.tileSize,
        tileSizes: a.tileSizes
    })
}
E(Sr, pj);
Sr.prototype.g = k("c");
function Tr(a) {
    var b = [], c = [], d = [], e = [], f = ke(a.supportedCRS).a();
    Ua(a.matrixIds, function(a, b) {
        return b.scaleDenominator - a.scaleDenominator
    });
    Ga(a.matrixIds, function(a) {
        c.push(a.identifier);
        d.push(a.topLeftCorner);
        b.push(2.8E-4 * a.scaleDenominator / f);
        e.push([a.tileWidth, a.tileHeight])
    });
    return new Sr({
        origins: d,
        resolutions: b,
        matrixIds: c,
        tileSizes: e
    })
};
var Ur = "KVP";
function Vr(a) {
    function b(a) {
        a = e == Ur ? If(Kf([a], g)) : a.replace(/\{(\w+?)\}/g, function(a, b) {
            return b in g ? g[b] : a
        });
        return function(b) {
            if (null !== b) {
                var c = {
                    TileMatrix: f.c[b.z],
                    TileCol: b.x,
                    TileRow: b.y
                };
                I(c, this.b);
                b = a;
                return b = e == Ur ? If(Kf([b], c)) : b.replace(/\{(\w+?)\}/g, function(a, b) {
                    return c[b]
                })
            }
        }
    }
    var c = s(a.version) ? a.version: "1.0.0", d = s(a.format) ? a.format: "image/jpeg";
    this.b = a.dimensions || {};
    this.e = "";
    Wr(this);
    var e = s(a.requestEncoding) ? a.requestEncoding: Ur, f = a.tileGrid, g = {
        Layer: a.layer,
        style: a.style,
        Style: a.style,
        TileMatrixSet: a.matrixSet
    };
    e == Ur && I(g, {
        Service: "WMTS",
        Request: "GetTile",
        Version: c,
        Format: d
    });
    c = ar;
    d = a.urls;
    !s(d) && s(a.url) && (d = cr(a.url));
    s(d) && (c = Zq(Ka(d, b)));
    var h = od(), l = new Xa(0, 0, 0), c = br(function(b, c) {
        var d = this.tileGrid;
        if (d.Pb().length <= b.z)
            return null;
        var e = b.x, f =- b.y - 1, g = rj(d, b), B = c.ba(), v = s(a.extent) ? a.extent : B;
        null !== v && (c.Kd && v[0] === B[0] && v[2] === B[2]) && (g = Math.ceil((v[2] - v[0]) / (g[2] - g[0])), e = $c(e, g), l.z = b.z, l.x = e, l.y = b.y, g = rj(d, l, h));
        return !zd(g, v) || Ad(g, v) ? null : new Xa(b.z,
        e, f)
    }, c);
    dr.call(this, {
        attributions: a.attributions,
        crossOrigin: a.crossOrigin,
        extent: a.extent,
        projection: a.projection,
        tileGrid: f,
        tileUrlFunction: c
    })
}
E(Vr, dr);
Vr.prototype.i = k("b");
Vr.prototype.eb = function(a, b, c) {
    return this.e + Vr.F.eb.call(this, a, b, c)
};
function Wr(a) {
    var b = 0, c = [], d;
    for (d in a.b)
        c[b++] = d + "-" + a.b[d];
    a.e = c.join("/")
}
Vr.prototype.r = function(a) {
    I(this.b, a);
    Wr(this);
    Xe(this)
};
function Xr(a) {
    this.c = s(a.color) ? a.color instanceof tk ? a.color : new V(a.color) : new V(Yr);
    this.a = s(a.fontFamily) ? a.fontFamily instanceof tk ? a.fontFamily : new V(a.fontFamily) : new V(Zr);
    this.b = s(a.fontSize) ? a.fontSize instanceof tk ? a.fontSize : new V(a.fontSize) : new V($r);
    this.e = a.text instanceof tk ? a.text : new V(a.text);
    this.d = s(a.opacity) ? a.opacity instanceof tk ? a.opacity : new V(a.opacity) : new V(as)
}
E(Xr, Il);
Xr.prototype.cb = function(a) {
    var b;
    a instanceof O && (b = a, b.G());
    a = $k(this.c, b);
    var c = $k(this.a, b), d = Number($k(this.b, b)), e = $k(this.e, b);
    b = Number($k(this.d, b));
    return new am({
        color: a,
        fontFamily: c,
        fontSize: d,
        text: e,
        opacity: b
    })
};
var Yr = "#000", Zr = "sans-serif", $r = 10, as = 1;
function bs(a) {
    null != a && (a.html = a.html, a.tileRanges = a.tileRanges);
    cb.call(this, a)
}
E(bs, cb);
C("ol.Attribution", bs);
C("ol.Collection", N);
N.prototype.clear = N.prototype.clear;
N.prototype.extend = N.prototype.Cf;
N.prototype.forEach = N.prototype.forEach;
N.prototype.getArray = N.prototype.Df;
N.prototype.getAt = N.prototype.Fe;
N.prototype.getLength = N.prototype.xc;
N.prototype.insertAt = N.prototype.Ec;
N.prototype.pop = N.prototype.pop;
N.prototype.push = N.prototype.push;
N.prototype.remove = N.prototype.remove;
N.prototype.removeAt = N.prototype.qd;
N.prototype.setAt = N.prototype.Qf;
Xc.prototype.getElement = Xc.prototype.b;
function cs(a) {
    null != a && (a.tracking = a.tracking);
    fd.call(this, a)
}
E(cs, fd);
C("ol.DeviceOrientation", cs);
C("ol.Feature", O);
O.prototype.getAttributes = O.prototype.ob;
O.prototype.getGeometry = O.prototype.G;
O.prototype.getId = O.prototype.Je;
O.prototype.set = O.prototype.l;
O.prototype.setGeometry = O.prototype.Ea;
function ds(a) {
    null != a && (a.projection = a.projection, a.tracking = a.tracking, a.trackingOptions = a.trackingOptions);
    Q.call(this, a)
}
E(ds, Q);
C("ol.Geolocation", ds);
pe.prototype.getImage = pe.prototype.ca;
C("ol.Kinetic", wf);
function es(a) {
    null != a && (a.controls = a.controls, a.interactions = a.interactions, a.layers = a.layers, a.overlays = a.overlays, a.renderer = a.renderer, a.renderers = a.renderers, a.target = a.target, a.view = a.view);
    W.call(this, a)
}
E(es, W);
C("ol.Map", es);
W.prototype.addControl = W.prototype.ye;
W.prototype.addLayer = W.prototype.yd;
W.prototype.addOverlay = W.prototype.ze;
W.prototype.beforeRender = W.prototype.Ga;
W.prototype.getControls = W.prototype.He;
W.prototype.getFeatureInfo = W.prototype.Ie;
W.prototype.getFeatures = W.prototype.Jd;
W.prototype.getInteractions = W.prototype.Ke;
W.prototype.getLayers = W.prototype.te;
W.prototype.getOverlays = W.prototype.Me;
W.prototype.getRenderer = W.prototype.Ne;
W.prototype.removeControl = W.prototype.Kf;
W.prototype.removeLayer = W.prototype.he;
W.prototype.removeOverlay = W.prototype.Lf;
W.prototype.updateSize = W.prototype.sa;
ci.prototype.getCoordinate = ci.prototype.d;
ci.prototype.getPixel = ci.prototype.e;
ci.prototype.preventDefault = ci.prototype.U;
ci.prototype.stopPropagation = ci.prototype.rb;
C("ol.Object", M);
M.prototype.bindTo = M.prototype.Ae;
M.prototype.get = M.prototype.get;
M.prototype.notify = M.prototype.Zd;
M.prototype.on = M.prototype.Gf;
M.prototype.once = M.prototype.If;
M.prototype.set = M.prototype.l;
M.prototype.setValues = M.prototype.Zb;
M.prototype.un = M.prototype.Wf;
M.prototype.unByKey = M.prototype.Xf;
M.prototype.unbind = M.prototype.td;
M.prototype.unbindAll = M.prototype.Yf;
function fs(a) {
    null != a && (a.element = a.element, a.position = a.position, a.positioning = a.positioning);
    Bo.call(this, a)
}
E(fs, Bo);
C("ol.Overlay", fs);
C("ol.OverlayPositioning", Ao);
Ao.BOTTOM_LEFT = "bottom-left";
Ao.BOTTOM_RIGHT = "bottom-right";
Ao.TOP_LEFT = "top-left";
Ao.TOP_RIGHT = "top-right";
C("ol.RendererHint", xo);
xo.CANVAS = "canvas";
xo.DOM = "dom";
xo.WEBGL = "webgl";
C("ol.RendererHints", wo);
wo.createFromQueryData = wo.Ce;
oe.prototype.getTileCoord = oe.prototype.g;
Xa.prototype.getZXY = Xa.prototype.a;
function gs(a) {
    null != a && (a.center = a.center, a.maxResolution = a.maxResolution, a.maxZoom = a.maxZoom, a.projection = a.projection, a.resolution = a.resolution, a.resolutions = a.resolutions, a.rotation = a.rotation, a.zoom = a.zoom, a.zoomFactor = a.zoomFactor);
    T.call(this, a)
}
E(gs, T);
C("ol.View2D", gs);
T.prototype.calculateExtent = T.prototype.i;
T.prototype.constrainResolution = T.prototype.Ha;
T.prototype.constrainRotation = T.prototype.lc;
T.prototype.fitExtent = T.prototype.$c;
T.prototype.getView2D = T.prototype.O;
T.prototype.getZoom = T.prototype.Qe;
T.prototype.setZoom = T.prototype.p;
C("ol.animation.bounce", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.resolution = a.resolution, a.start = a.start);
    return ef(a)
});
C("ol.animation.pan", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.source = a.source, a.start = a.start);
    return tf(a)
});
C("ol.animation.rotate", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.rotation = a.rotation, a.start = a.start);
    return uf(a)
});
C("ol.animation.zoom", function(a) {
    null != a && (a.duration = a.duration, a.easing = a.easing, a.resolution = a.resolution, a.start = a.start);
    return vf(a)
});
function hs(a) {
    null != a && (a.className = a.className, a.target = a.target);
    Ai.call(this, a)
}
E(hs, Ai);
C("ol.control.Attribution", hs);
Ai.prototype.setMap = Ai.prototype.setMap;
function is(a) {
    null != a && (a.element = a.element, a.target = a.target);
    zi.call(this, a)
}
E(is, zi);
C("ol.control.Control", is);
zi.prototype.getMap = zi.prototype.W;
zi.prototype.setMap = zi.prototype.setMap;
function js(a) {
    null != a && (a.className = a.className, a.keys = a.keys, a.target = a.target);
    Jo.call(this, a)
}
E(js, Jo);
C("ol.control.FullScreen", js);
function ks(a) {
    null != a && (a.className = a.className, a.target = a.target);
    Bi.call(this, a)
}
E(ks, Bi);
C("ol.control.Logo", ks);
Bi.prototype.setMap = Bi.prototype.setMap;
function ls(a) {
    null != a && (a.className = a.className, a.coordinateFormat = a.coordinateFormat, a.projection = a.projection, a.target = a.target, a.undefinedHTML = a.undefinedHTML);
    Ko.call(this, a)
}
E(ls, Ko);
C("ol.control.MousePosition", ls);
Ko.prototype.setMap = Ko.prototype.setMap;
function ms(a) {
    null != a && (a.className = a.className, a.minWidth = a.minWidth, a.target = a.target, a.units = a.units);
    No.call(this, a)
}
E(ms, No);
C("ol.control.ScaleLine", ms);
No.prototype.setMap = No.prototype.setMap;
C("ol.control.ScaleLineUnits", Mo);
Mo.DEGREES = "degrees";
Mo.IMPERIAL = "imperial";
Mo.METRIC = "metric";
Mo.NAUTICAL = "nautical";
Mo.US = "us";
function ns(a) {
    null != a && (a.className = a.className, a.delta = a.delta, a.target = a.target);
    Ci.call(this, a)
}
E(ns, Ci);
C("ol.control.Zoom", ns);
Ci.prototype.setMap = Ci.prototype.setMap;
function os(a) {
    null != a && (a.className = a.className, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution);
    bp.call(this, a)
}
E(os, bp);
C("ol.control.ZoomSlider", os);
function ps(a) {
    null != a && (a.className = a.className, a.extent = a.extent, a.target = a.target);
    dp.call(this, a)
}
E(ps, dp);
C("ol.control.ZoomToExtent", ps);
C("ol.control.defaults", function(a) {
    if (null != a) {
        a.attribution = a.attribution;
        var b = a.attributionOptions;
        null != a.attributionOptions && (b.className = a.attributionOptions.className, b.target = a.attributionOptions.target);
        a.attributionOptions = b;
        a.logo = a.logo;
        b = a.logoOptions;
        null != a.logoOptions && (b.className = a.logoOptions.className, b.target = a.logoOptions.target);
        a.logoOptions = b;
        a.zoom = a.zoom;
        b = a.zoomOptions;
        null != a.zoomOptions && (b.className = a.zoomOptions.className, b.delta = a.zoomOptions.delta, b.target = a.zoomOptions.target);
        a.zoomOptions = b
    }
    return Di(a)
});
C("ol.coordinate.createStringXY", function(a) {
    return function(b) {
        return ld(b, a)
    }
});
C("ol.coordinate.fromProjectedArray", md);
C("ol.coordinate.toStringHDMS", function(a) {
    return s(a) ? id(a[1], "NS") + " " + id(a[0], "EW") : ""
});
C("ol.coordinate.toStringXY", ld);
C("ol.dom.Input", ep);
C("ol.easing.bounce", function(a) {
    a < 1 / 2.75 ? a*=7.5625 * a : a < 2 / 2.75 ? (a -= 1.5 / 2.75, a = 7.5625 * a * a + 0.75) : a < 2.5 / 2.75 ? (a -= 2.25 / 2.75, a = 7.5625 * a * a + 0.9375) : (a -= 2.625 / 2.75, a = 7.5625 * a * a + 0.984375);
    return a
});
C("ol.easing.easeIn", function(a) {
    return a * a * a
});
C("ol.easing.easeOut", af);
C("ol.easing.elastic", function(a) {
    return Math.pow(2, - 10 * a) * Math.sin((a - 0.075) * 2 * Math.PI / 0.3) + 1
});
C("ol.easing.inAndOut", bf);
C("ol.easing.linear", cf);
C("ol.easing.upAndDown", df);
C("ol.expr.parse", function(a) {
    return Wk(a)
});
C("ol.expr.register", function(a, b) {
    al[a] = b
});
C("ol.extent.boundingExtent", nd);
C("ol.extent.containsCoordinate", rd);
C("ol.extent.containsExtent", sd);
C("ol.extent.equals", td);
C("ol.extent.extend", ud);
C("ol.extent.getBottomLeft", vd);
C("ol.extent.getBottomRight", function(a) {
    return [a[2], a[1]]
});
C("ol.extent.getCenter", wd);
C("ol.extent.getHeight", function(a) {
    return a[3] - a[1]
});
C("ol.extent.getSize", function(a) {
    return [a[2] - a[0], a[3] - a[1]]
});
C("ol.extent.getTopLeft", yd);
C("ol.extent.getTopRight", function(a) {
    return [a[2], a[3]]
});
C("ol.extent.getWidth", function(a) {
    return a[2] - a[0]
});
C("ol.extent.intersects", zd);
C("ol.extent.isEmpty", function(a) {
    return a[2] < a[0] || a[3] < a[1]
});
C("ol.extent.transform", Bd);
C("ol.geom.Geometry", Dd);
C("ol.geom.GeometryType", Ed);
Ed.GEOMETRYCOLLECTION = "geometrycollection";
Ed.LINEARRING = "linearring";
Ed.LINESTRING = "linestring";
Ed.MULTILINESTRING = "multilinestring";
Ed.MULTIPOINT = "multipoint";
Ed.MULTIPOLYGON = "multipolygon";
Ed.POINT = "point";
Ed.POLYGON = "polygon";
C("ol.geom.LineString", om);
om.prototype.getCoordinates = om.prototype.s;
C("ol.geom.MultiLineString", pm);
pm.prototype.getCoordinates = pm.prototype.s;
C("ol.geom.MultiPoint", rm);
rm.prototype.getCoordinates = rm.prototype.s;
C("ol.geom.MultiPolygon", vm);
vm.prototype.getCoordinates = vm.prototype.s;
C("ol.geom.Point", qm);
qm.prototype.getCoordinates = qm.prototype.s;
C("ol.geom.Polygon", um);
um.prototype.getCoordinates = um.prototype.s;
C("ol.geom2.LineStringCollection", cn);
C("ol.geom2.LineStringCollection.pack", function(a, b, c) {
    var d = a.length;
    c = s(c) ? c : 0 < d ? a[0][0].length : 2;
    var e;
    if (s(b))
        e = b;
    else 
        for (b = e = 0; b < d; ++b)
            e += a[b].length;
    var f = Array(e * c);
    e = {};
    var g = 0, h;
    for (b = 0; b < d; ++b)
        h = g, g = Vm(f, g, a[b], c), e[h + ""] = g;
    a = new an(f, g);
    return new cn(a, e, c)
});
C("ol.geom2.PointCollection", dn);
C("ol.geom2.PointCollection.createEmpty", function(a, b) {
    var c = s(b) ? b: 2, d = new an(Array(a * c), 0);
    return new dn(d, c)
});
C("ol.geom2.PointCollection.pack", function(a, b, c) {
    var d = a.length;
    c = s(c) ? c : 0 < d ? a[0].length : 2;
    b = Array(s(b) ? b : d * c);
    Vm(b, 0, a, c);
    a = new an(b, d * c);
    return new dn(a, c)
});
dn.prototype.add = dn.prototype.add;
C("ol.inherits", E);
function qs(a) {
    null != a && (a.delta = a.delta);
    Ji.call(this, a)
}
E(qs, Ji);
C("ol.interaction.DoubleClickZoom", qs);
function rs(a) {
    null != a && (a.condition = a.condition, a.kinetic = a.kinetic);
    Qi.call(this, a)
}
E(rs, Qi);
C("ol.interaction.DragPan", rs);
function ss(a) {
    null != a && (a.condition = a.condition);
    Ti.call(this, a)
}
E(ss, Ti);
C("ol.interaction.DragRotate", ss);
function ts(a) {
    null != a && (a.condition = a.condition);
    gp.call(this, a)
}
E(ts, gp);
C("ol.interaction.DragRotateAndZoom", ts);
function us(a) {
    null != a && (a.condition = a.condition);
    Vi.call(this, a)
}
E(us, Vi);
C("ol.interaction.DragZoom", us);
function vs(a) {
    null != a && (a.condition = a.condition, a.pixelDelta = a.pixelDelta);
    Wi.call(this, a)
}
E(vs, Wi);
C("ol.interaction.KeyboardPan", vs);
function ws(a) {
    null != a && (a.condition = a.condition, a.delta = a.delta);
    Xi.call(this, a)
}
E(ws, Xi);
C("ol.interaction.KeyboardZoom", ws);
C("ol.interaction.MouseWheelZoom", Yi);
function xs(a) {
    null != a && (a.condition = a.condition, a.layerFilter = a.layerFilter);
    hp.call(this, a)
}
E(xs, hp);
C("ol.interaction.Select", xs);
function ys(a) {
    null != a && (a.kinetic = a.kinetic);
    aj.call(this, a)
}
E(ys, aj);
C("ol.interaction.TouchPan", ys);
function zs(a) {
    null != a && (a.threshold = a.threshold);
    bj.call(this, a)
}
E(zs, bj);
C("ol.interaction.TouchRotate", zs);
C("ol.interaction.TouchZoom", cj);
C("ol.interaction.condition.altKeyOnly", function(a) {
    a = a.a;
    return a.wa&&!a.Gb&&!a.Wa
});
C("ol.interaction.condition.altShiftKeysOnly", Ki);
C("ol.interaction.condition.always", Qe);
C("ol.interaction.condition.noModifierKeys", Mi);
C("ol.interaction.condition.platformModifierKeyOnly", function(a) {
    a = a.a;
    return !a.wa && a.Gb&&!a.Wa
});
C("ol.interaction.condition.shiftKeyOnly", Ni);
C("ol.interaction.condition.targetNotEditable", Oi);
C("ol.interaction.defaults", function(a) {
    null != a && (a.altShiftDragRotate = a.altShiftDragRotate, a.doubleClickZoom = a.doubleClickZoom, a.dragPan = a.dragPan, a.keyboard = a.keyboard, a.mouseWheelZoom = a.mouseWheelZoom, a.shiftDragZoom = a.shiftDragZoom, a.touchPan = a.touchPan, a.touchRotate = a.touchRotate, a.touchZoom = a.touchZoom, a.zoomDelta = a.zoomDelta);
    return dj(a)
});
function As(a) {
    null != a && (a.brightness = a.brightness, a.contrast = a.contrast, a.hue = a.hue, a.layers = a.layers, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.saturation = a.saturation, a.visible = a.visible);
    ej.call(this, a)
}
E(As, ej);
C("ol.layer.Group", As);
function Bs(a) {
    null != a && (a.brightness = a.brightness, a.contrast = a.contrast, a.hue = a.hue, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.saturation = a.saturation, a.source = a.source, a.visible = a.visible);
    Ye.call(this, a)
}
E(Bs, rk);
C("ol.layer.Image", Bs);
C("ol.layer.Layer", Ye);
Ye.prototype.getSource = Ye.prototype.ja;
function Cs(a) {
    null != a && (a.brightness = a.brightness, a.contrast = a.contrast, a.hue = a.hue, a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.preload = a.preload, a.saturation = a.saturation, a.source = a.source, a.visible = a.visible);
    sk.call(this, a)
}
E(Cs, sk);
C("ol.layer.Tile", Cs);
function Ds(a) {
    null != a && (a.maxResolution = a.maxResolution, a.minResolution = a.minResolution, a.opacity = a.opacity, a.source = a.source, a.style = a.style, a.transformFeatureInfo = a.transformFeatureInfo, a.visible = a.visible);
    cm.call(this, a)
}
E(Ds, cm);
C("ol.layer.Vector", Ds);
C("ol.layer.Vector2", fn);
C("ol.parser.GPX", np);
C("ol.parser.GeoJSON", pp);
C("ol.parser.KML", $p);
C("ol.parser.TopoJSON", dq);
C("ol.parser.WKT", jq);
jq.read = function(a) {
    return jq.va().Q(a)
};
jq.write = function(a) {
    return jq.va().write(a)
};
jq.prototype.read = jq.prototype.Q;
jq.prototype.write = jq.prototype.write;
C("ol.parser.ogc.GML_v2", uq);
uq.prototype.read = uq.prototype.Q;
uq.prototype.write = uq.prototype.write;
C("ol.parser.ogc.GML_v3", vq);
vq.prototype.read = vq.prototype.Q;
vq.prototype.write = vq.prototype.write;
C("ol.parser.ogc.WMSCapabilities", Gq);
Gq.prototype.read = Gq.prototype.Q;
C("ol.parser.ogc.WMTSCapabilities", Kq);
Kq.prototype.read = Kq.prototype.Q;
function Es(a) {
    null != a && (a.axisOrientation = a.axisOrientation, a.code = a.code, a.extent = a.extent, a.global = a.global, a.units = a.units);
    Ld.call(this, a)
}
E(Es, Ld);
C("ol.proj.Projection", Es);
Ld.prototype.getExtent = Ld.prototype.ba;
C("ol.proj.Units", Jd);
Jd.DEGREES = "degrees";
Jd.FEET = "ft";
Jd.METERS = "m";
C("ol.proj.addProjection", ie);
C("ol.proj.common.add", lj);
C("ol.proj.configureProj4jsProjection", function(a) {
    return Pd(a)
});
C("ol.proj.get", ke);
C("ol.proj.getTransform", le);
C("ol.proj.getTransformFromProjections", Od);
C("ol.proj.transform", function(a, b, c) {
    return le(b, c)(a)
});
C("ol.proj.transformWithProjections", function(a, b, c) {
    return Od(b, c)(a)
});
Fm.prototype.getCanvas = Fm.prototype.wc;
function Fs(a) {
    null != a && (a.culture = a.culture, a.key = a.key, a.style = a.style);
    hr.call(this, a)
}
E(Fs, hr);
C("ol.source.BingMaps", Fs);
function Gs(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.imageExtent = a.imageExtent, a.imageSize = a.imageSize, a.projection = a.projection, a.url = a.url);
    ir.call(this, a)
}
E(Gs, ir);
C("ol.source.ImageStatic", Gs);
function Hs(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.params = a.params, a.projection = a.projection, a.ratio = a.ratio, a.resolutions = a.resolutions, a.url = a.url);
    nr.call(this, a)
}
E(Hs, nr);
C("ol.source.ImageWMS", Hs);
nr.prototype.getParams = nr.prototype.p;
nr.prototype.updateParams = nr.prototype.r;
C("ol.source.MapQuestOSM", tr);
C("ol.source.MapQuestOpenAerial", ur);
C("ol.source.OSM", pr);
pr.DATA_ATTRIBUTION = rr;
pr.TILE_ATTRIBUTION = sr;
We.prototype.getExtent = We.prototype.ba;
function Is(a) {
    null != a && (a.layer = a.layer, a.maxZoom = a.maxZoom, a.minZoom = a.minZoom, a.opaque = a.opaque, a.url = a.url);
    xr.call(this, a)
}
E(Is, xr);
C("ol.source.Stamen", Is);
C("ol.source.Tile", Wj);
Wj.prototype.getTileGrid = Wj.prototype.Oe;
function Js(a) {
    null != a && (a.extent = a.extent, a.projection = a.projection, a.tileGrid = a.tileGrid);
    Ar.call(this, a)
}
E(Js, Ar);
C("ol.source.TileDebug", Js);
function Ks(a) {
    null != a && (a.crossOrigin = a.crossOrigin, a.url = a.url);
    Cr.call(this, a)
}
E(Ks, Cr);
C("ol.source.TileJSON", Ks);
function Ls(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.maxZoom = a.maxZoom, a.params = a.params, a.projection = a.projection, a.tileGrid = a.tileGrid, a.url = a.url, a.urls = a.urls);
    Dr.call(this, a)
}
E(Ls, Dr);
C("ol.source.TileWMS", Ls);
Dr.prototype.getParams = Dr.prototype.r;
Dr.prototype.updateParams = Dr.prototype.t;
function Ms(a) {
    console.log(a)
    null != a && (a.attributions = a.attributions, a.data = a.data, a.extent = a.extent, a.logo = a.logo, a.parser = a.parser, a.projection = a.projection, a.url = a.url);
    yl.call(this, a)
}
E(Ms, yl);
C("ol.source.Vector", Ms);
C("ol.source.Vector2", en);
C("ol.source.WMSGetFeatureInfoMethod", {
    Ag: "iframe",
    gh: "xhr_get"
});
function Ns(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.dimensions = a.dimensions, a.extent = a.extent, a.format = a.format, a.layer = a.layer, a.matrixSet = a.matrixSet, a.maxZoom = a.maxZoom, a.projection = a.projection, a.requestEncoding = a.requestEncoding, a.style = a.style, a.tileGrid = a.tileGrid, a.url = a.url, a.urls = a.urls, a.version = a.version);
    Vr.call(this, a)
}
E(Ns, Vr);
C("ol.source.WMTS", Ns);
C("ol.source.WMTS.optionsFromCapabilities", function(a, b) {
    var c = Ma(a.contents.layers, function(a) {
        return a.identifier == b
    }), d = c.tileMatrixSetLinks[0].tileMatrixSet, e = c.formats[0], f = Na(c.styles, function(a) {
        return a.isDefault
    });
    0 > f && (f = 0);
    var f = c.styles[f].identifier, g = {};
    Ga(c.dimensions, function(a) {
        var b = a.identifier, c = a["default"];
        s(c) || (c = a.values[0]);
        g[b] = c
    });
    var h = a.contents.tileMatrixSets[d], l = Tr(h), h = ke(h.supportedCRS), n = a.operationsMetadata.GetTile.dcp.http.get, q, r;
    switch (lc(n[0].constraints.GetEncoding.allowedValues)[0]) {
    case "REST":
    case "RESTful":
        r =
        "REST";
        q = c.resourceUrls.tile[e];
        break;
    case "KVP":
        r = Ur, q = [], Ga(n, function(a) {
            a.constraints.GetEncoding.allowedValues.hasOwnProperty(Ur) && q.push(a.url)
        })
    }
    return {
        urls: q,
        layer: b,
        matrixSet: d,
        format: e,
        projection: h,
        requestEncoding: r,
        tileGrid: l,
        style: f,
        dimensions: g
    }
});
Vr.prototype.getDimensions = Vr.prototype.i;
Vr.prototype.updateDimensions = Vr.prototype.r;
function Os(a) {
    null != a && (a.attributions = a.attributions, a.crossOrigin = a.crossOrigin, a.extent = a.extent, a.logo = a.logo, a.maxZoom = a.maxZoom, a.minZoom = a.minZoom, a.projection = a.projection, a.tileLoadFunction = a.tileLoadFunction, a.tileUrlFunction = a.tileUrlFunction, a.url = a.url, a.urls = a.urls);
    or.call(this, a)
}
E(Os, or);
C("ol.source.XYZ", Os);
or.prototype.setUrl = or.prototype.b;
function Ps(a) {
    null != a && (a.color = a.color, a.opacity = a.opacity);
    Jl.call(this, a)
}
E(Ps, Jl);
C("ol.style.Fill", Ps);
function Qs(a) {
    null != a && (a.height = a.height, a.opacity = a.opacity, a.rotation = a.rotation, a.url = a.url, a.width = a.width, a.xOffset = a.xOffset, a.yOffset = a.yOffset);
    Vp.call(this, a)
}
E(Qs, Vp);
C("ol.style.Icon", Qs);
function Rs(a) {
    null != a && (a.filter = a.filter, a.symbolizers = a.symbolizers);
    Ml.call(this, a)
}
E(Rs, Ml);
C("ol.style.Rule", Rs);
function Ss(a) {
    null != a && (a.fill = a.fill, a.size = a.size, a.stroke = a.stroke, a.type = a.type);
    Vl.call(this, a)
}
E(Ss, Vl);
C("ol.style.Shape", Ss);
C("ol.style.ShapeType", Ol);
Ol.CIRCLE = "circle";
function Ts(a) {
    null != a && (a.color = a.color, a.opacity = a.opacity, a.width = a.width);
    Rl.call(this, a)
}
E(Ts, Rl);
C("ol.style.Stroke", Ts);
function Us(a) {
    null != a && (a.rules = a.rules, a.symbolizers = a.symbolizers);
    Yl.call(this, a)
}
E(Us, Yl);
C("ol.style.Style", Us);
function Vs(a) {
    null != a && (a.color = a.color, a.fontFamily = a.fontFamily, a.fontSize = a.fontSize, a.opacity = a.opacity, a.text = a.text);
    Xr.call(this, a)
}
E(Vs, Xr);
C("ol.style.Text", Vs);
function Ws(a) {
    null != a && (a.minZoom = a.minZoom, a.origin = a.origin, a.origins = a.origins, a.resolutions = a.resolutions, a.tileSize = a.tileSize, a.tileSizes = a.tileSizes);
    pj.call(this, a)
}
E(Ws, pj);
C("ol.tilegrid.TileGrid", Ws);
pj.prototype.getMinZoom = pj.prototype.Le;
pj.prototype.getOrigin = pj.prototype.Fb;
pj.prototype.getResolutions = pj.prototype.Pb;
pj.prototype.getTileSize = pj.prototype.Ba;
function Xs(a) {
    null != a && (a.matrixIds = a.matrixIds, a.origin = a.origin, a.origins = a.origins, a.resolutions = a.resolutions, a.tileSize = a.tileSize, a.tileSizes = a.tileSizes);
    Sr.call(this, a)
}
E(Xs, Sr);
C("ol.tilegrid.WMTS", Xs);
Sr.prototype.getMatrixIds = Sr.prototype.g;
function Ys(a) {
    null != a && (a.maxZoom = a.maxZoom);
    fr.call(this, a)
}
E(Ys, fr);
C("ol.tilegrid.XYZ", Ys);
})();


