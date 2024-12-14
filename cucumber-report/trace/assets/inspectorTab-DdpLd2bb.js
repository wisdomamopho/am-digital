const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./codeMirrorModule-KatbITLF.js",
      "../codeMirrorModule.ez37Vkbh.css",
    ]),
) => i.map((i) => d[i]);
var Fp = Object.defineProperty;
var Hp = (e, t, n) =>
  t in e
    ? Fp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var H = (e, t, n) => Hp(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var tw =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function Up(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Vc = { exports: {} },
  Es = {},
  Bc = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xr = Symbol.for("react.element"),
  Vp = Symbol.for("react.portal"),
  Bp = Symbol.for("react.fragment"),
  qp = Symbol.for("react.strict_mode"),
  Wp = Symbol.for("react.profiler"),
  Qp = Symbol.for("react.provider"),
  Kp = Symbol.for("react.context"),
  Gp = Symbol.for("react.forward_ref"),
  Xp = Symbol.for("react.suspense"),
  Jp = Symbol.for("react.memo"),
  Yp = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function Zp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wc = Object.assign,
  Qc = {};
function Kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qc),
    (this.updater = n || qc);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kc() {}
Kc.prototype = Kn.prototype;
function Dl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qc),
    (this.updater = n || qc);
}
var Fl = (Dl.prototype = new Kc());
Fl.constructor = Dl;
Wc(Fl, Kn.prototype);
Fl.isPureReactComponent = !0;
var tu = Array.isArray,
  Gc = Object.prototype.hasOwnProperty,
  Hl = { current: null },
  Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jc(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Gc.call(t, r) && !Xc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Xr,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Hl.current,
  };
}
function eg(e, t) {
  return {
    $$typeof: Xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ul(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xr;
}
function tg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? tg("" + e.key)
    : t.toString(36);
}
function bi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xr:
          case Vp:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Qs(o, 0) : r),
      tu(i)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          bi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ul(i) &&
            (i = eg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(nu, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Qs(s, l);
      o += bi(s, t, n, a, i);
    }
  else if (((a = Zp(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Qs(s, l++)), (o += bi(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function si(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    bi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function ng(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  Ai = { transition: null },
  rg = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: Ai,
    ReactCurrentOwner: Hl,
  };
j.Children = {
  map: si,
  forEach: function (e, t, n) {
    si(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      si(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      si(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ul(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
j.Component = Kn;
j.Fragment = Bp;
j.Profiler = Wp;
j.PureComponent = Dl;
j.StrictMode = qp;
j.Suspense = Xp;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rg;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Wc({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Hl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Gc.call(t, a) &&
        !Xc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Xr, type: e.type, key: i, ref: s, props: r, _owner: o };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qp, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Jc;
j.createFactory = function (e) {
  var t = Jc.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: Gp, render: e };
};
j.isValidElement = Ul;
j.lazy = function (e) {
  return { $$typeof: Yp, _payload: { _status: -1, _result: e }, _init: ng };
};
j.memo = function (e, t) {
  return { $$typeof: Jp, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Ai.transition;
  Ai.transition = {};
  try {
    e();
  } finally {
    Ai.transition = t;
  }
};
j.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ke.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
j.useId = function () {
  return ke.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return ke.current.useRef(e);
};
j.useState = function (e) {
  return ke.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return ke.current.useTransition();
};
j.version = "18.2.0";
Bc.exports = j;
var M = Bc.exports;
const et = Up(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ig = M,
  sg = Symbol.for("react.element"),
  og = Symbol.for("react.fragment"),
  lg = Object.prototype.hasOwnProperty,
  ag = ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ug = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) lg.call(t, r) && !ug.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: sg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ag.current,
  };
}
Es.Fragment = og;
Es.jsx = Yc;
Es.jsxs = Yc;
Vc.exports = Es;
var w = Vc.exports;
function cg(e, t, n, r) {
  const [i, s] = et.useState(n);
  return (
    et.useEffect(() => {
      let o = !1;
      return (
        e().then((l) => {
          o || s(l);
        }),
        () => {
          o = !0;
        }
      );
    }, t),
    i
  );
}
function ks() {
  const e = et.useRef(null),
    [t, n] = et.useState(new DOMRect(0, 0, 10, 10));
  return (
    et.useLayoutEffect(() => {
      const r = e.current;
      if (!r) return;
      const i = new ResizeObserver((s) => {
        const o = s[s.length - 1];
        o && o.contentRect && n(o.contentRect);
      });
      return i.observe(r), () => i.disconnect();
    }, [e]),
    [t, e]
  );
}
function Ro(e) {
  if (e < 0 || !isFinite(e)) return "-";
  if (e === 0) return "0";
  if (e < 1e3) return e.toFixed(0) + "ms";
  const t = e / 1e3;
  if (t < 60) return t.toFixed(1) + "s";
  const n = t / 60;
  if (n < 60) return n.toFixed(1) + "m";
  const r = n / 60;
  return r < 24 ? r.toFixed(1) + "h" : (r / 24).toFixed(1) + "d";
}
function dg(e) {
  if (e < 0 || !isFinite(e)) return "-";
  if (e === 0) return "0";
  if (e < 1e3) return e.toFixed(0);
  const t = e / 1024;
  if (t < 1e3) return t.toFixed(1) + "K";
  const n = t / 1024;
  return n < 1e3 ? n.toFixed(1) + "M" : (n / 1024).toFixed(1) + "G";
}
function nw(e, t, n, r, i) {
  let s = 0,
    o = i !== void 0 ? i : e.length;
  for (; s < o; ) {
    const l = (s + o) >> 1;
    n(t, e[l]) >= 0 ? (s = l + 1) : (o = l);
  }
  return o;
}
function fg(e) {
  const t = document.createElement("textarea");
  (t.style.position = "absolute"),
    (t.style.zIndex = "-1000"),
    (t.value = e),
    document.body.appendChild(t),
    t.select(),
    document.execCommand("copy"),
    t.remove();
}
function ru(e, t) {
  e && (t = Yt.getObject(e, t));
  const [n, r] = et.useState(t),
    i = et.useCallback(
      (s) => {
        e ? Yt.setObject(e, s) : r(s);
      },
      [e, r],
    );
  return (
    et.useEffect(() => {
      if (e) {
        const s = () => r(Yt.getObject(e, t));
        return (
          Yt.onChangeEmitter.addEventListener(e, s),
          () => Yt.onChangeEmitter.removeEventListener(e, s)
        );
      }
    }, [t, e]),
    [n, i]
  );
}
class hg {
  constructor() {
    this.onChangeEmitter = new EventTarget();
  }
  getString(t, n) {
    return localStorage[t] || n;
  }
  setString(t, n) {
    var r;
    (localStorage[t] = n),
      this.onChangeEmitter.dispatchEvent(new Event(t)),
      (r = window.saveSettings) == null || r.call(window);
  }
  getObject(t, n) {
    if (!localStorage[t]) return n;
    try {
      return JSON.parse(localStorage[t]);
    } catch {
      return n;
    }
  }
  setObject(t, n) {
    var r;
    (localStorage[t] = JSON.stringify(n)),
      this.onChangeEmitter.dispatchEvent(new Event(t)),
      (r = window.saveSettings) == null || r.call(window);
  }
}
const Yt = new hg();
function tt(...e) {
  return e.filter(Boolean).join(" ");
}
async function rw(e) {
  const t = new TextEncoder().encode(e);
  return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1", t)))
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("");
}
function pg(e) {
  e &&
    (e != null && e.scrollIntoViewIfNeeded
      ? e.scrollIntoViewIfNeeded(!1)
      : e == null || e.scrollIntoView());
}
const iu = "\\u0000-\\u0020\\u007f-\\u009f",
  gg = new RegExp(
    "(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s" +
      iu +
      '"]{2,}[^\\s' +
      iu +
      `"')}\\],:;.!?]`,
    "ug",
  );
function iw() {
  if (document.playwrightThemeInitialized) return;
  (document.playwrightThemeInitialized = !0),
    document.defaultView.addEventListener(
      "focus",
      (n) => {
        n.target.document.nodeType === Node.DOCUMENT_NODE &&
          document.body.classList.remove("inactive");
      },
      !1,
    ),
    document.defaultView.addEventListener(
      "blur",
      (n) => {
        document.body.classList.add("inactive");
      },
      !1,
    );
  const e = Yt.getString("theme", "light-mode"),
    t = window.matchMedia("(prefers-color-scheme: dark)");
  (e === "dark-mode" || t.matches) && document.body.classList.add("dark-mode");
}
const Vl = new Set();
function mg() {
  const e = $o(),
    t = e === "dark-mode" ? "light-mode" : "dark-mode";
  e && document.body.classList.remove(e),
    document.body.classList.add(t),
    Yt.setString("theme", t);
  for (const n of Vl) n(t);
}
function sw(e) {
  Vl.add(e);
}
function ow(e) {
  Vl.delete(e);
}
function $o() {
  return document.body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";
}
function lw() {
  const [e, t] = et.useState($o() === "dark-mode");
  return [
    e,
    (n) => {
      ($o() === "dark-mode") !== n && mg(), t(n);
    },
  ];
}
var Zc = { exports: {} },
  De = {},
  ed = { exports: {} },
  td = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, R) {
    var $ = L.length;
    L.push(R);
    e: for (; 0 < $; ) {
      var Y = ($ - 1) >>> 1,
        oe = L[Y];
      if (0 < i(oe, R)) (L[Y] = R), (L[$] = oe), ($ = Y);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var R = L[0],
      $ = L.pop();
    if ($ !== R) {
      L[0] = $;
      e: for (var Y = 0, oe = L.length, ri = oe >>> 1; Y < ri; ) {
        var Qt = 2 * (Y + 1) - 1,
          Ws = L[Qt],
          Kt = Qt + 1,
          ii = L[Kt];
        if (0 > i(Ws, $))
          Kt < oe && 0 > i(ii, Ws)
            ? ((L[Y] = ii), (L[Kt] = $), (Y = Kt))
            : ((L[Y] = Ws), (L[Qt] = $), (Y = Qt));
        else if (Kt < oe && 0 > i(ii, $)) (L[Y] = ii), (L[Kt] = $), (Y = Kt);
        else break e;
      }
    }
    return R;
  }
  function i(L, R) {
    var $ = L.sortIndex - R.sortIndex;
    return $ !== 0 ? $ : L.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    m = !1,
    y = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(L) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= L)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function x(L) {
    if (((y = !1), v(L), !m))
      if (n(a) !== null) (m = !0), er(E);
      else {
        var R = n(u);
        R !== null && tr(x, R.startTime - L);
      }
  }
  function E(L, R) {
    (m = !1), y && ((y = !1), p(b), (b = -1)), (g = !0);
    var $ = d;
    try {
      for (
        v(R), f = n(a);
        f !== null && (!(f.expirationTime > R) || (L && !O()));

      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var oe = Y(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof oe == "function" ? (f.callback = oe) : f === n(a) && r(a),
            v(R);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ri = !0;
      else {
        var Qt = n(u);
        Qt !== null && tr(x, Qt.startTime - R), (ri = !1);
      }
      return ri;
    } finally {
      (f = null), (d = $), (g = !1);
    }
  }
  var C = !1,
    N = null,
    b = -1,
    S = 5,
    I = -1;
  function O() {
    return !(e.unstable_now() - I < S);
  }
  function T() {
    if (N !== null) {
      var L = e.unstable_now();
      I = L;
      var R = !0;
      try {
        R = N(!0, L);
      } finally {
        R ? P() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var P;
  if (typeof h == "function")
    P = function () {
      h(T);
    };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(),
      st = J.port2;
    (J.port1.onmessage = T),
      (P = function () {
        st.postMessage(null);
      });
  } else
    P = function () {
      _(T, 0);
    };
  function er(L) {
    (N = L), C || ((C = !0), P());
  }
  function tr(L, R) {
    b = _(function () {
      L(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || g || ((m = !0), er(E));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (S = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = d;
      }
      var $ = d;
      d = R;
      try {
        return L();
      } finally {
        d = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, R) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var $ = d;
      d = L;
      try {
        return R();
      } finally {
        d = $;
      }
    }),
    (e.unstable_scheduleCallback = function (L, R, $) {
      var Y = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? Y + $ : Y))
          : ($ = Y),
        L)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = $ + oe),
        (L = {
          id: c++,
          callback: R,
          priorityLevel: L,
          startTime: $,
          expirationTime: oe,
          sortIndex: -1,
        }),
        $ > Y
          ? ((L.sortIndex = $),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (y ? (p(b), (b = -1)) : (y = !0), tr(x, $ - Y)))
          : ((L.sortIndex = oe), t(a, L), m || g || ((m = !0), er(E))),
        L
      );
    }),
    (e.unstable_shouldYield = O),
    (e.unstable_wrapCallback = function (L) {
      var R = d;
      return function () {
        var $ = d;
        d = R;
        try {
          return L.apply(this, arguments);
        } finally {
          d = $;
        }
      };
    });
})(td);
ed.exports = td;
var vg = ed.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = M,
  je = vg;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rd = new Set(),
  Mr = {};
function hn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (Mr[e] = t, e = 0; e < t.length; e++) rd.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Oo = Object.prototype.hasOwnProperty,
  yg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  su = {},
  ou = {};
function wg(e) {
  return Oo.call(ou, e)
    ? !0
    : Oo.call(su, e)
      ? !1
      : yg.test(e)
        ? (ou[e] = !0)
        : ((su[e] = !0), !1);
}
function _g(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xg(e, t, n, r) {
  if (t === null || typeof t > "u" || _g(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bl = /[\-:]([a-z])/g;
function ql(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bl, ql);
    fe[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bl, ql);
    fe[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bl, ql);
  fe[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wl(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xg(t, n, i, r) && (n = null),
    r || i === null
      ? wg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oi = Symbol.for("react.element"),
  xn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  Ql = Symbol.for("react.strict_mode"),
  jo = Symbol.for("react.profiler"),
  id = Symbol.for("react.provider"),
  sd = Symbol.for("react.context"),
  Kl = Symbol.for("react.forward_ref"),
  zo = Symbol.for("react.suspense"),
  Do = Symbol.for("react.suspense_list"),
  Gl = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  od = Symbol.for("react.offscreen"),
  lu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  Ks;
function gr(e) {
  if (Ks === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ks = (t && t[1]) || "";
    }
  return (
    `
` +
    Ks +
    e
  );
}
var Gs = !1;
function Xs(e, t) {
  if (!e || Gs) return "";
  Gs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Gs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function Sg(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xs(e.type, !1)), e;
    case 11:
      return (e = Xs(e.type.render, !1)), e;
    case 1:
      return (e = Xs(e.type, !0)), e;
    default:
      return "";
  }
}
function Fo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case xn:
      return "Portal";
    case jo:
      return "Profiler";
    case Ql:
      return "StrictMode";
    case zo:
      return "Suspense";
    case Do:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sd:
        return (e.displayName || "Context") + ".Consumer";
      case id:
        return (e._context.displayName || "Context") + ".Provider";
      case Kl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gl:
        return (
          (t = e.displayName || null), t !== null ? t : Fo(e.type) || "Memo"
        );
      case Ct:
        (t = e._payload), (e = e._init);
        try {
          return Fo(e(t));
        } catch {}
    }
  return null;
}
function Eg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fo(t);
    case 8:
      return t === Ql ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ut(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ld(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function kg(e) {
  var t = ld(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function li(e) {
  e._valueTracker || (e._valueTracker = kg(e));
}
function ad(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ld(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ho(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ud(e, t) {
  (t = t.checked), t != null && Wl(e, "checked", t, !1);
}
function Uo(e, t) {
  ud(e, t);
  var n = Ut(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vo(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vo(e, t, n) {
  (t !== "number" || Qi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mr = Array.isArray;
function Rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function cd(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ai,
  fd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ai = ai || document.createElement("div"),
          ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ai.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Er = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Er).forEach(function (e) {
  Tg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Er[t] = Er[e]);
  });
});
function hd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Er.hasOwnProperty(e) && Er[e])
      ? ("" + t).trim()
      : t + "px";
}
function pd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = hd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Cg = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Wo(e, t) {
  if (t) {
    if (Cg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Qo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ko = null;
function Xl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Go = null,
  $n = null,
  On = null;
function fu(e) {
  if ((e = Zr(e))) {
    if (typeof Go != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = As(t)), Go(e.stateNode, e.type, t));
  }
}
function gd(e) {
  $n ? (On ? On.push(e) : (On = [e])) : ($n = e);
}
function md() {
  if ($n) {
    var e = $n,
      t = On;
    if (((On = $n = null), fu(e), t)) for (e = 0; e < t.length; e++) fu(t[e]);
  }
}
function vd(e, t) {
  return e(t);
}
function yd() {}
var Js = !1;
function wd(e, t, n) {
  if (Js) return e(t, n);
  Js = !0;
  try {
    return vd(e, t, n);
  } finally {
    (Js = !1), ($n !== null || On !== null) && (yd(), md());
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = As(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Xo = !1;
if (_t)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        Xo = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    Xo = !1;
  }
function Ng(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var kr = !1,
  Ki = null,
  Gi = !1,
  Jo = null,
  bg = {
    onError: function (e) {
      (kr = !0), (Ki = e);
    },
  };
function Ag(e, t, n, r, i, s, o, l, a) {
  (kr = !1), (Ki = null), Ng.apply(bg, arguments);
}
function Lg(e, t, n, r, i, s, o, l, a) {
  if ((Ag.apply(this, arguments), kr)) {
    if (kr) {
      var u = Ki;
      (kr = !1), (Ki = null);
    } else throw Error(k(198));
    Gi || ((Gi = !0), (Jo = u));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _d(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hu(e) {
  if (pn(e) !== e) throw Error(k(188));
}
function Ig(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return hu(i), e;
        if (s === r) return hu(i), t;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function xd(e) {
  return (e = Ig(e)), e !== null ? Sd(e) : null;
}
function Sd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ed = je.unstable_scheduleCallback,
  pu = je.unstable_cancelCallback,
  Mg = je.unstable_shouldYield,
  Pg = je.unstable_requestPaint,
  Z = je.unstable_now,
  Rg = je.unstable_getCurrentPriorityLevel,
  Jl = je.unstable_ImmediatePriority,
  kd = je.unstable_UserBlockingPriority,
  Xi = je.unstable_NormalPriority,
  $g = je.unstable_LowPriority,
  Td = je.unstable_IdlePriority,
  Ts = null,
  ct = null;
function Og(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(Ts, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : Dg,
  jg = Math.log,
  zg = Math.LN2;
function Dg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jg(e) / zg) | 0)) | 0;
}
var ui = 64,
  ci = 4194304;
function vr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ji(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = vr(l)) : ((s &= o), s !== 0 && (r = vr(s)));
  } else (o = n & ~i), o !== 0 ? (r = vr(o)) : s !== 0 && (r = vr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Fg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - nt(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = Fg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Yo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cd() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function Ys(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nt(t)),
    (e[t] = n);
}
function Ug(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - nt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Yl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var D = 0;
function Nd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bd,
  Zl,
  Ad,
  Ld,
  Id,
  Zo = !1,
  di = [],
  Rt = null,
  $t = null,
  Ot = null,
  $r = new Map(),
  Or = new Map(),
  Lt = [],
  Vg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      Ot = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Zr(t)), t !== null && Zl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Bg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Rt = ir(Rt, e, t, n, r, i)), !0;
    case "dragenter":
      return ($t = ir($t, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ot = ir(Ot, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return $r.set(s, ir($r.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Or.set(s, ir(Or.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Md(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _d(n)), t !== null)) {
          (e.blockedOn = t),
            Id(e.priority, function () {
              Ad(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Li(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ko = r), n.target.dispatchEvent(r), (Ko = null);
    } else return (t = Zr(n)), t !== null && Zl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  Li(e) && n.delete(t);
}
function qg() {
  (Zo = !1),
    Rt !== null && Li(Rt) && (Rt = null),
    $t !== null && Li($t) && ($t = null),
    Ot !== null && Li(Ot) && (Ot = null),
    $r.forEach(mu),
    Or.forEach(mu);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zo ||
      ((Zo = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, qg)));
}
function jr(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < di.length) {
    sr(di[0], e);
    for (var n = 1; n < di.length; n++) {
      var r = di[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rt !== null && sr(Rt, e),
      $t !== null && sr($t, e),
      Ot !== null && sr(Ot, e),
      $r.forEach(t),
      Or.forEach(t),
      n = 0;
    n < Lt.length;
    n++
  )
    (r = Lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
    Md(n), n.blockedOn === null && Lt.shift();
}
var jn = kt.ReactCurrentBatchConfig,
  Yi = !0;
function Wg(e, t, n, r) {
  var i = D,
    s = jn.transition;
  jn.transition = null;
  try {
    (D = 1), ea(e, t, n, r);
  } finally {
    (D = i), (jn.transition = s);
  }
}
function Qg(e, t, n, r) {
  var i = D,
    s = jn.transition;
  jn.transition = null;
  try {
    (D = 4), ea(e, t, n, r);
  } finally {
    (D = i), (jn.transition = s);
  }
}
function ea(e, t, n, r) {
  if (Yi) {
    var i = el(e, t, n, r);
    if (i === null) ao(e, t, r, Zi, n), gu(e, r);
    else if (Bg(i, e, t, n, r)) r.stopPropagation();
    else if ((gu(e, r), t & 4 && -1 < Vg.indexOf(e))) {
      for (; i !== null; ) {
        var s = Zr(i);
        if (
          (s !== null && bd(s),
          (s = el(e, t, n, r)),
          s === null && ao(e, t, r, Zi, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ao(e, t, r, null, n);
  }
}
var Zi = null;
function el(e, t, n, r) {
  if (((Zi = null), (e = Xl(r)), (e = Zt(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _d(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zi = e), null;
}
function Pd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rg()) {
        case Jl:
          return 1;
        case kd:
          return 4;
        case Xi:
        case $g:
          return 16;
        case Td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null,
  ta = null,
  Ii = null;
function Rd() {
  if (Ii) return Ii;
  var e,
    t = ta,
    n = t.length,
    r,
    i = "value" in Mt ? Mt.value : Mt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ii = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Mi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fi() {
  return !0;
}
function vu() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? fi
        : vu),
      (this.isPropagationStopped = vu),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fi));
      },
      persist: function () {},
      isPersistent: fi,
    }),
    t
  );
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  na = Fe(Gn),
  Yr = G({}, Gn, { view: 0, detail: 0 }),
  Kg = Fe(Yr),
  Zs,
  eo,
  or,
  Cs = G({}, Yr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ra,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== or &&
            (or && e.type === "mousemove"
              ? ((Zs = e.screenX - or.screenX), (eo = e.screenY - or.screenY))
              : (eo = Zs = 0),
            (or = e)),
          Zs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : eo;
    },
  }),
  yu = Fe(Cs),
  Gg = G({}, Cs, { dataTransfer: 0 }),
  Xg = Fe(Gg),
  Jg = G({}, Yr, { relatedTarget: 0 }),
  to = Fe(Jg),
  Yg = G({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zg = Fe(Yg),
  em = G({}, Gn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  tm = Fe(em),
  nm = G({}, Gn, { data: 0 }),
  wu = Fe(nm),
  rm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  im = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  sm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function om(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1;
}
function ra() {
  return om;
}
var lm = G({}, Yr, {
    key: function (e) {
      if (e.key) {
        var t = rm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Mi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? im[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ra,
    charCode: function (e) {
      return e.type === "keypress" ? Mi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Mi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  am = Fe(lm),
  um = G({}, Cs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _u = Fe(um),
  cm = G({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ra,
  }),
  dm = Fe(cm),
  fm = G({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hm = Fe(fm),
  pm = G({}, Cs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  gm = Fe(pm),
  mm = [9, 13, 27, 32],
  ia = _t && "CompositionEvent" in window,
  Tr = null;
_t && "documentMode" in document && (Tr = document.documentMode);
var vm = _t && "TextEvent" in window && !Tr,
  $d = _t && (!ia || (Tr && 8 < Tr && 11 >= Tr)),
  xu = " ",
  Su = !1;
function Od(e, t) {
  switch (e) {
    case "keyup":
      return mm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function jd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function ym(e, t) {
  switch (e) {
    case "compositionend":
      return jd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Su = !0), xu);
    case "textInput":
      return (e = t.data), e === xu && Su ? null : e;
    default:
      return null;
  }
}
function wm(e, t) {
  if (En)
    return e === "compositionend" || (!ia && Od(e, t))
      ? ((e = Rd()), (Ii = ta = Mt = null), (En = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $d && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _m = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_m[e.type] : t === "textarea";
}
function zd(e, t, n, r) {
  gd(r),
    (t = es(t, "onChange")),
    0 < t.length &&
      ((n = new na("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cr = null,
  zr = null;
function xm(e) {
  Gd(e, 0);
}
function Ns(e) {
  var t = Cn(e);
  if (ad(t)) return e;
}
function Sm(e, t) {
  if (e === "change") return t;
}
var Dd = !1;
if (_t) {
  var no;
  if (_t) {
    var ro = "oninput" in document;
    if (!ro) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"),
        (ro = typeof ku.oninput == "function");
    }
    no = ro;
  } else no = !1;
  Dd = no && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  Cr && (Cr.detachEvent("onpropertychange", Fd), (zr = Cr = null));
}
function Fd(e) {
  if (e.propertyName === "value" && Ns(zr)) {
    var t = [];
    zd(t, zr, e, Xl(e)), wd(xm, t);
  }
}
function Em(e, t, n) {
  e === "focusin"
    ? (Tu(), (Cr = t), (zr = n), Cr.attachEvent("onpropertychange", Fd))
    : e === "focusout" && Tu();
}
function km(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ns(zr);
}
function Tm(e, t) {
  if (e === "click") return Ns(t);
}
function Cm(e, t) {
  if (e === "input" || e === "change") return Ns(t);
}
function Nm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : Nm;
function Dr(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Oo.call(t, i) || !it(e[i], t[i])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nu(e, t) {
  var n = Cu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cu(n);
  }
}
function Hd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Hd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ud() {
  for (var e = window, t = Qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qi(e.document);
  }
  return t;
}
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function bm(e) {
  var t = Ud(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Nu(n, s));
        var o = Nu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Am = _t && "documentMode" in document && 11 >= document.documentMode,
  kn = null,
  tl = null,
  Nr = null,
  nl = !1;
function bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nl ||
    kn == null ||
    kn !== Qi(r) ||
    ((r = kn),
    "selectionStart" in r && sa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Nr && Dr(Nr, r)) ||
      ((Nr = r),
      (r = es(tl, "onSelect")),
      0 < r.length &&
        ((t = new na("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kn))));
}
function hi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tn = {
    animationend: hi("Animation", "AnimationEnd"),
    animationiteration: hi("Animation", "AnimationIteration"),
    animationstart: hi("Animation", "AnimationStart"),
    transitionend: hi("Transition", "TransitionEnd"),
  },
  io = {},
  Vd = {};
_t &&
  ((Vd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  "TransitionEvent" in window || delete Tn.transitionend.transition);
function bs(e) {
  if (io[e]) return io[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vd) return (io[e] = t[n]);
  return e;
}
var Bd = bs("animationend"),
  qd = bs("animationiteration"),
  Wd = bs("animationstart"),
  Qd = bs("transitionend"),
  Kd = new Map(),
  Au =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Bt(e, t) {
  Kd.set(e, t), hn(t, [e]);
}
for (var so = 0; so < Au.length; so++) {
  var oo = Au[so],
    Lm = oo.toLowerCase(),
    Im = oo[0].toUpperCase() + oo.slice(1);
  Bt(Lm, "on" + Im);
}
Bt(Bd, "onAnimationEnd");
Bt(qd, "onAnimationIteration");
Bt(Wd, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(Qd, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Mm = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function Lu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lg(r, t, void 0, e), (e.currentTarget = null);
}
function Gd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Lu(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Lu(i, l, u), (s = a);
        }
    }
  }
  if (Gi) throw ((e = Jo), (Gi = !1), (Jo = null), e);
}
function U(e, t) {
  var n = t[ll];
  n === void 0 && (n = t[ll] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xd(t, e, 2, !1), n.add(r));
}
function lo(e, t, n) {
  var r = 0;
  t && (r |= 4), Xd(n, e, r, t);
}
var pi = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[pi]) {
    (e[pi] = !0),
      rd.forEach(function (n) {
        n !== "selectionchange" && (Mm.has(n) || lo(n, !1, e), lo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pi] || ((t[pi] = !0), lo("selectionchange", !1, t));
  }
}
function Xd(e, t, n, r) {
  switch (Pd(t)) {
    case 1:
      var i = Wg;
      break;
    case 4:
      i = Qg;
      break;
    default:
      i = ea;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Xo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function ao(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Zt(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  wd(function () {
    var u = s,
      c = Xl(n),
      f = [];
    e: {
      var d = Kd.get(e);
      if (d !== void 0) {
        var g = na,
          m = e;
        switch (e) {
          case "keypress":
            if (Mi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = am;
            break;
          case "focusin":
            (m = "focus"), (g = to);
            break;
          case "focusout":
            (m = "blur"), (g = to);
            break;
          case "beforeblur":
          case "afterblur":
            g = to;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Xg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = dm;
            break;
          case Bd:
          case qd:
          case Wd:
            g = Zg;
            break;
          case Qd:
            g = hm;
            break;
          case "scroll":
            g = Kg;
            break;
          case "wheel":
            g = gm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = tm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = _u;
        }
        var y = (t & 4) !== 0,
          _ = !y && e === "scroll",
          p = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              p !== null && ((x = Rr(h, p)), x != null && y.push(Hr(h, x, v)))),
            _)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new g(d, m, null, n, c)), f.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Ko &&
            (m = n.relatedTarget || n.fromElement) &&
            (Zt(m) || m[xt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((m = n.relatedTarget || n.toElement),
              (g = u),
              (m = m ? Zt(m) : null),
              m !== null &&
                ((_ = pn(m)), m !== _ || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((g = null), (m = u)),
          g !== m)
        ) {
          if (
            ((y = yu),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = _u),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (_ = g == null ? d : Cn(g)),
            (v = m == null ? d : Cn(m)),
            (d = new y(x, h + "leave", g, n, c)),
            (d.target = _),
            (d.relatedTarget = v),
            (x = null),
            Zt(c) === u &&
              ((y = new y(p, h + "enter", m, n, c)),
              (y.target = v),
              (y.relatedTarget = _),
              (x = y)),
            (_ = x),
            g && m)
          )
            t: {
              for (y = g, p = m, h = 0, v = y; v; v = mn(v)) h++;
              for (v = 0, x = p; x; x = mn(x)) v++;
              for (; 0 < h - v; ) (y = mn(y)), h--;
              for (; 0 < v - h; ) (p = mn(p)), v--;
              for (; h--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = mn(y)), (p = mn(p));
              }
              y = null;
            }
          else y = null;
          g !== null && Iu(f, d, g, y, !1),
            m !== null && _ !== null && Iu(f, _, m, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Cn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var E = Sm;
        else if (Eu(d))
          if (Dd) E = Cm;
          else {
            E = km;
            var C = Em;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = Tm);
        if (E && (E = E(e, u))) {
          zd(f, E, n, c);
          break e;
        }
        C && C(e, d, u),
          e === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            Vo(d, "number", d.value);
      }
      switch (((C = u ? Cn(u) : window), e)) {
        case "focusin":
          (Eu(C) || C.contentEditable === "true") &&
            ((kn = C), (tl = u), (Nr = null));
          break;
        case "focusout":
          Nr = tl = kn = null;
          break;
        case "mousedown":
          nl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nl = !1), bu(f, n, c);
          break;
        case "selectionchange":
          if (Am) break;
        case "keydown":
        case "keyup":
          bu(f, n, c);
      }
      var N;
      if (ia)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        En
          ? Od(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        ($d &&
          n.locale !== "ko" &&
          (En || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && En && (N = Rd())
            : ((Mt = c),
              (ta = "value" in Mt ? Mt.value : Mt.textContent),
              (En = !0))),
        (C = es(u, b)),
        0 < C.length &&
          ((b = new wu(b, e, null, n, c)),
          f.push({ event: b, listeners: C }),
          N ? (b.data = N) : ((N = jd(n)), N !== null && (b.data = N)))),
        (N = vm ? ym(e, n) : wm(e, n)) &&
          ((u = es(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new wu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    Gd(f, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Rr(e, n)),
      s != null && r.unshift(Hr(e, s, i)),
      (s = Rr(e, t)),
      s != null && r.push(Hr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Iu(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Rr(n, s)), a != null && o.unshift(Hr(n, a, l)))
        : i || ((a = Rr(n, s)), a != null && o.push(Hr(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Pm = /\r\n?/g,
  Rm = /\u0000|\uFFFD/g;
function Mu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Pm,
      `
`,
    )
    .replace(Rm, "");
}
function gi(e, t, n) {
  if (((t = Mu(t)), Mu(e) !== t && n)) throw Error(k(425));
}
function ts() {}
var rl = null,
  il = null;
function sl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ol = typeof setTimeout == "function" ? setTimeout : void 0,
  $m = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pu = typeof Promise == "function" ? Promise : void 0,
  Om =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pu < "u"
        ? function (e) {
            return Pu.resolve(null).then(e).catch(jm);
          }
        : ol;
function jm(e) {
  setTimeout(function () {
    throw e;
  });
}
function uo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  jr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ru(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + Xn,
  Ur = "__reactProps$" + Xn,
  xt = "__reactContainer$" + Xn,
  ll = "__reactEvents$" + Xn,
  zm = "__reactListeners$" + Xn,
  Dm = "__reactHandles$" + Xn;
function Zt(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ru(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = Ru(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zr(e) {
  return (
    (e = e[ut] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function As(e) {
  return e[Ur] || null;
}
var al = [],
  Nn = -1;
function qt(e) {
  return { current: e };
}
function V(e) {
  0 > Nn || ((e.current = al[Nn]), (al[Nn] = null), Nn--);
}
function F(e, t) {
  Nn++, (al[Nn] = e.current), (e.current = t);
}
var Vt = {},
  we = qt(Vt),
  Ie = qt(!1),
  ln = Vt;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function ns() {
  V(Ie), V(we);
}
function $u(e, t, n) {
  if (we.current !== Vt) throw Error(k(168));
  F(we, t), F(Ie, n);
}
function Jd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Eg(e) || "Unknown", i));
  return G({}, n, r);
}
function rs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (ln = we.current),
    F(we, e),
    F(Ie, Ie.current),
    !0
  );
}
function Ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Jd(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(Ie),
      V(we),
      F(we, e))
    : V(Ie),
    F(Ie, n);
}
var gt = null,
  Ls = !1,
  co = !1;
function Yd(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function Fm(e) {
  (Ls = !0), Yd(e);
}
function Wt() {
  if (!co && gt !== null) {
    co = !0;
    var e = 0,
      t = D;
    try {
      var n = gt;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Ls = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), Ed(Jl, Wt), i);
    } finally {
      (D = t), (co = !1);
    }
  }
  return null;
}
var bn = [],
  An = 0,
  is = null,
  ss = 0,
  He = [],
  Ue = 0,
  an = null,
  mt = 1,
  vt = "";
function Gt(e, t) {
  (bn[An++] = ss), (bn[An++] = is), (is = e), (ss = t);
}
function Zd(e, t, n) {
  (He[Ue++] = mt), (He[Ue++] = vt), (He[Ue++] = an), (an = e);
  var r = mt;
  e = vt;
  var i = 32 - nt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - nt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (mt = (1 << (32 - nt(t) + i)) | (n << i) | r),
      (vt = s + e);
  } else (mt = (1 << s) | (n << i) | r), (vt = e);
}
function oa(e) {
  e.return !== null && (Gt(e, 1), Zd(e, 1, 0));
}
function la(e) {
  for (; e === is; )
    (is = bn[--An]), (bn[An] = null), (ss = bn[--An]), (bn[An] = null);
  for (; e === an; )
    (an = He[--Ue]),
      (He[Ue] = null),
      (vt = He[--Ue]),
      (He[Ue] = null),
      (mt = He[--Ue]),
      (He[Ue] = null);
}
var Oe = null,
  $e = null,
  W = !1,
  Ye = null;
function ef(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), ($e = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), ($e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = an !== null ? { id: mt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            ($e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cl(e) {
  if (W) {
    var t = $e;
    if (t) {
      var n = t;
      if (!ju(e, t)) {
        if (ul(e)) throw Error(k(418));
        t = jt(n.nextSibling);
        var r = Oe;
        t && ju(e, t)
          ? ef(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Oe = e));
      }
    } else {
      if (ul(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Oe = e);
    }
  }
}
function zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function mi(e) {
  if (e !== Oe) return !1;
  if (!W) return zu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps))),
    t && (t = $e))
  ) {
    if (ul(e)) throw (tf(), Error(k(418)));
    for (; t; ) ef(e, t), (t = jt(t.nextSibling));
  }
  if ((zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else $e = Oe ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function tf() {
  for (var e = $e; e; ) e = jt(e.nextSibling);
}
function Vn() {
  ($e = Oe = null), (W = !1);
}
function aa(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Hm = kt.ReactCurrentBatchConfig;
function Xe(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var os = qt(null),
  ls = null,
  Ln = null,
  ua = null;
function ca() {
  ua = Ln = ls = null;
}
function da(e) {
  var t = os.current;
  V(os), (e._currentValue = t);
}
function dl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  (ls = e),
    (ua = Ln = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (ua !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ln === null)) {
      if (ls === null) throw Error(k(308));
      (Ln = e), (ls.dependencies = { lanes: 0, firstContext: e });
    } else Ln = Ln.next = e;
  return t;
}
var en = null;
function fa(e) {
  en === null ? (en = [e]) : en.push(e);
}
function nf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), fa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function ha(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), fa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function Pi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
  }
}
function Du(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  Nt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = e,
            y = l;
          switch (((d = t), (g = n), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                f = m.call(g, f, d);
                break e;
              }
              f = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = y.payload),
                (d = typeof m == "function" ? m.call(g, f, d) : m),
                d == null)
              )
                break e;
              f = G({}, f, d);
              break e;
            case 2:
              Nt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (cn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Fu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var sf = new nd.Component().refs;
function fl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Is = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Ft(e),
      s = wt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = zt(e, s, i)),
      t !== null && (rt(t, e, i, r), Pi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Ft(e),
      s = wt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = zt(e, s, i)),
      t !== null && (rt(t, e, i, r), Pi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Ft(e),
      i = wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = zt(e, i, r)),
      t !== null && (rt(t, e, r, n), Pi(t, e, r));
  },
};
function Hu(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Dr(n, r) || !Dr(i, s)
        : !0
  );
}
function of(e, t, n) {
  var r = !1,
    i = Vt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Qe(s))
      : ((i = Me(t) ? ln : we.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Un(e, i) : Vt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Is),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Is.enqueueReplaceState(t, t.state, null);
}
function hl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = sf), ha(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Qe(s))
    : ((s = Me(t) ? ln : we.current), (i.context = Un(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (fl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Is.enqueueReplaceState(i, i.state, null),
      as(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === sf && (l = i.refs = {}),
              o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function vi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Vu(e) {
  var t = e._init;
  return t(e._payload);
}
function lf(e) {
  function t(p, h) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [h]), (p.flags |= 16)) : v.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ht(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((p.flags |= 2), h) : v)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, v, x) {
    return h === null || h.tag !== 6
      ? ((h = yo(v, p.mode, x)), (h.return = p), h)
      : ((h = i(h, v)), (h.return = p), h);
  }
  function a(p, h, v, x) {
    var E = v.type;
    return E === Sn
      ? c(p, h, v.props.children, x, v.key)
      : h !== null &&
          (h.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Ct &&
              Vu(E) === h.type))
        ? ((x = i(h, v.props)), (x.ref = lr(p, h, v)), (x.return = p), x)
        : ((x = Di(v.type, v.key, v.props, null, p.mode, x)),
          (x.ref = lr(p, h, v)),
          (x.return = p),
          x);
  }
  function u(p, h, v, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = wo(v, p.mode, x)), (h.return = p), h)
      : ((h = i(h, v.children || [])), (h.return = p), h);
  }
  function c(p, h, v, x, E) {
    return h === null || h.tag !== 7
      ? ((h = sn(v, p.mode, x, E)), (h.return = p), h)
      : ((h = i(h, v)), (h.return = p), h);
  }
  function f(p, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = yo("" + h, p.mode, v)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case oi:
          return (
            (v = Di(h.type, h.key, h.props, null, p.mode, v)),
            (v.ref = lr(p, null, h)),
            (v.return = p),
            v
          );
        case xn:
          return (h = wo(h, p.mode, v)), (h.return = p), h;
        case Ct:
          var x = h._init;
          return f(p, x(h._payload), v);
      }
      if (mr(h) || nr(h))
        return (h = sn(h, p.mode, v, null)), (h.return = p), h;
      vi(p, h);
    }
    return null;
  }
  function d(p, h, v, x) {
    var E = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : l(p, h, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case oi:
          return v.key === E ? a(p, h, v, x) : null;
        case xn:
          return v.key === E ? u(p, h, v, x) : null;
        case Ct:
          return (E = v._init), d(p, h, E(v._payload), x);
      }
      if (mr(v) || nr(v)) return E !== null ? null : c(p, h, v, x, null);
      vi(p, v);
    }
    return null;
  }
  function g(p, h, v, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(v) || null), l(h, p, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case oi:
          return (p = p.get(x.key === null ? v : x.key) || null), a(h, p, x, E);
        case xn:
          return (p = p.get(x.key === null ? v : x.key) || null), u(h, p, x, E);
        case Ct:
          var C = x._init;
          return g(p, h, v, C(x._payload), E);
      }
      if (mr(x) || nr(x)) return (p = p.get(v) || null), c(h, p, x, E, null);
      vi(h, x);
    }
    return null;
  }
  function m(p, h, v, x) {
    for (
      var E = null, C = null, N = h, b = (h = 0), S = null;
      N !== null && b < v.length;
      b++
    ) {
      N.index > b ? ((S = N), (N = null)) : (S = N.sibling);
      var I = d(p, N, v[b], x);
      if (I === null) {
        N === null && (N = S);
        break;
      }
      e && N && I.alternate === null && t(p, N),
        (h = s(I, h, b)),
        C === null ? (E = I) : (C.sibling = I),
        (C = I),
        (N = S);
    }
    if (b === v.length) return n(p, N), W && Gt(p, b), E;
    if (N === null) {
      for (; b < v.length; b++)
        (N = f(p, v[b], x)),
          N !== null &&
            ((h = s(N, h, b)), C === null ? (E = N) : (C.sibling = N), (C = N));
      return W && Gt(p, b), E;
    }
    for (N = r(p, N); b < v.length; b++)
      (S = g(N, p, b, v[b], x)),
        S !== null &&
          (e && S.alternate !== null && N.delete(S.key === null ? b : S.key),
          (h = s(S, h, b)),
          C === null ? (E = S) : (C.sibling = S),
          (C = S));
    return (
      e &&
        N.forEach(function (O) {
          return t(p, O);
        }),
      W && Gt(p, b),
      E
    );
  }
  function y(p, h, v, x) {
    var E = nr(v);
    if (typeof E != "function") throw Error(k(150));
    if (((v = E.call(v)), v == null)) throw Error(k(151));
    for (
      var C = (E = null), N = h, b = (h = 0), S = null, I = v.next();
      N !== null && !I.done;
      b++, I = v.next()
    ) {
      N.index > b ? ((S = N), (N = null)) : (S = N.sibling);
      var O = d(p, N, I.value, x);
      if (O === null) {
        N === null && (N = S);
        break;
      }
      e && N && O.alternate === null && t(p, N),
        (h = s(O, h, b)),
        C === null ? (E = O) : (C.sibling = O),
        (C = O),
        (N = S);
    }
    if (I.done) return n(p, N), W && Gt(p, b), E;
    if (N === null) {
      for (; !I.done; b++, I = v.next())
        (I = f(p, I.value, x)),
          I !== null &&
            ((h = s(I, h, b)), C === null ? (E = I) : (C.sibling = I), (C = I));
      return W && Gt(p, b), E;
    }
    for (N = r(p, N); !I.done; b++, I = v.next())
      (I = g(N, p, b, I.value, x)),
        I !== null &&
          (e && I.alternate !== null && N.delete(I.key === null ? b : I.key),
          (h = s(I, h, b)),
          C === null ? (E = I) : (C.sibling = I),
          (C = I));
    return (
      e &&
        N.forEach(function (T) {
          return t(p, T);
        }),
      W && Gt(p, b),
      E
    );
  }
  function _(p, h, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Sn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case oi:
          e: {
            for (var E = v.key, C = h; C !== null; ) {
              if (C.key === E) {
                if (((E = v.type), E === Sn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = i(C, v.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ct &&
                    Vu(E) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, v.props)),
                    (h.ref = lr(p, C, v)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            v.type === Sn
              ? ((h = sn(v.props.children, p.mode, x, v.key)),
                (h.return = p),
                (p = h))
              : ((x = Di(v.type, v.key, v.props, null, p.mode, x)),
                (x.ref = lr(p, h, v)),
                (x.return = p),
                (p = x));
          }
          return o(p);
        case xn:
          e: {
            for (C = v.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, v.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = wo(v, p.mode, x)), (h.return = p), (p = h);
          }
          return o(p);
        case Ct:
          return (C = v._init), _(p, h, C(v._payload), x);
      }
      if (mr(v)) return m(p, h, v, x);
      if (nr(v)) return y(p, h, v, x);
      vi(p, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, v)), (h.return = p), (p = h))
          : (n(p, h), (h = yo(v, p.mode, x)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return _;
}
var Bn = lf(!0),
  af = lf(!1),
  ei = {},
  dt = qt(ei),
  Vr = qt(ei),
  Br = qt(ei);
function tn(e) {
  if (e === ei) throw Error(k(174));
  return e;
}
function pa(e, t) {
  switch ((F(Br, t), F(Vr, e), F(dt, ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qo(t, e));
  }
  V(dt), F(dt, t);
}
function qn() {
  V(dt), V(Vr), V(Br);
}
function uf(e) {
  tn(Br.current);
  var t = tn(dt.current),
    n = qo(t, e.type);
  t !== n && (F(Vr, e), F(dt, n));
}
function ga(e) {
  Vr.current === e && (V(dt), V(Vr));
}
var Q = qt(0);
function us(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fo = [];
function ma() {
  for (var e = 0; e < fo.length; e++)
    fo[e]._workInProgressVersionPrimary = null;
  fo.length = 0;
}
var Ri = kt.ReactCurrentDispatcher,
  ho = kt.ReactCurrentBatchConfig,
  un = 0,
  K = null,
  ie = null,
  le = null,
  cs = !1,
  br = !1,
  qr = 0,
  Um = 0;
function he() {
  throw Error(k(321));
}
function va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function ya(e, t, n, r, i, s) {
  if (
    ((un = s),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ri.current = e === null || e.memoizedState === null ? Wm : Qm),
    (e = n(r, i)),
    br)
  ) {
    s = 0;
    do {
      if (((br = !1), (qr = 0), 25 <= s)) throw Error(k(301));
      (s += 1),
        (le = ie = null),
        (t.updateQueue = null),
        (Ri.current = Km),
        (e = n(r, i));
    } while (br);
  }
  if (
    ((Ri.current = ds),
    (t = ie !== null && ie.next !== null),
    (un = 0),
    (le = ie = K = null),
    (cs = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function wa() {
  var e = qr !== 0;
  return (qr = 0), e;
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le;
}
function Ke() {
  if (ie === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null) (le = t), (ie = e);
  else {
    if (e === null) throw Error(k(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      le === null ? (K.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function po(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((un & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (o = r)) : (a = a.next = f),
          (K.lanes |= c),
          (cn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      it(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (K.lanes |= s), (cn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function go(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    it(s, t.memoizedState) || (Le = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function cf() {}
function df(e, t) {
  var n = K,
    r = Ke(),
    i = t(),
    s = !it(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Le = !0)),
    (r = r.queue),
    _a(pf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, hf.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(k(349));
    un & 30 || ff(n, t, i);
  }
  return i;
}
function ff(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gf(t) && mf(e);
}
function pf(e, t, n) {
  return n(function () {
    gf(t) && mf(e);
  });
}
function gf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function mf(e) {
  var t = St(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function Bu(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vf() {
  return Ke().memoizedState;
}
function $i(e, t, n, r) {
  var i = lt();
  (K.flags |= e),
    (i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ms(e, t, n, r) {
  var i = Ke();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ie !== null) {
    var o = ie.memoizedState;
    if (((s = o.destroy), r !== null && va(r, o.deps))) {
      i.memoizedState = Qr(t, n, s, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Qr(1 | t, n, s, r));
}
function qu(e, t) {
  return $i(8390656, 8, e, t);
}
function _a(e, t) {
  return Ms(2048, 8, e, t);
}
function yf(e, t) {
  return Ms(4, 2, e, t);
}
function wf(e, t) {
  return Ms(4, 4, e, t);
}
function _f(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ms(4, 4, _f.bind(null, t, e), n)
  );
}
function xa() {}
function Sf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ef(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kf(e, t, n) {
  return un & 21
    ? (it(n, t) || ((n = Cd()), (K.lanes |= n), (cn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Vm(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ho.transition;
  ho.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (ho.transition = r);
  }
}
function Tf() {
  return Ke().memoizedState;
}
function Bm(e, t, n) {
  var r = Ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cf(e))
  )
    Nf(t, n);
  else if (((n = nf(e, t, n, r)), n !== null)) {
    var i = Ee();
    rt(n, e, r, i), bf(n, t, r);
  }
}
function qm(e, t, n) {
  var r = Ft(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cf(e)) Nf(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), it(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), fa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = nf(e, t, i, r)),
      n !== null && ((i = Ee()), rt(n, e, r, i), bf(n, t, r));
  }
}
function Cf(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Nf(e, t) {
  br = cs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yl(e, n);
  }
}
var ds = {
    readContext: Qe,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Wm = {
    readContext: Qe,
    useCallback: function (e, t) {
      return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $i(4194308, 4, _f.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bm.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bu,
    useDebugValue: xa,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bu(!1),
        t = e[0];
      return (e = Vm.bind(null, e[1])), (lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = lt();
      if (W) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(k(349));
        un & 30 || ff(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        qu(pf.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Qr(9, hf.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = ae.identifierPrefix;
      if (W) {
        var n = vt,
          r = mt;
        (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Um++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qm = {
    readContext: Qe,
    useCallback: Sf,
    useContext: Qe,
    useEffect: _a,
    useImperativeHandle: xf,
    useInsertionEffect: yf,
    useLayoutEffect: wf,
    useMemo: Ef,
    useReducer: po,
    useRef: vf,
    useState: function () {
      return po(Wr);
    },
    useDebugValue: xa,
    useDeferredValue: function (e) {
      var t = Ke();
      return kf(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = po(Wr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: cf,
    useSyncExternalStore: df,
    useId: Tf,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: Qe,
    useCallback: Sf,
    useContext: Qe,
    useEffect: _a,
    useImperativeHandle: xf,
    useInsertionEffect: yf,
    useLayoutEffect: wf,
    useMemo: Ef,
    useReducer: go,
    useRef: vf,
    useState: function () {
      return go(Wr);
    },
    useDebugValue: xa,
    useDeferredValue: function (e) {
      var t = Ke();
      return ie === null ? (t.memoizedState = e) : kf(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = go(Wr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: cf,
    useSyncExternalStore: df,
    useId: Tf,
    unstable_isNewReconciler: !1,
  };
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function mo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gm = typeof WeakMap == "function" ? WeakMap : Map;
function Af(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hs || ((hs = !0), (kl = r)), pl(e, t);
    }),
    n
  );
}
function Lf(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        pl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        pl(e, t),
          typeof r != "function" &&
            (Dt === null ? (Dt = new Set([this])) : Dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Wu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gm();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = uv.bind(null, e, t, n)), t.then(e, e));
}
function Qu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ku(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xm = kt.ReactCurrentOwner,
  Le = !1;
function _e(e, t, n, r) {
  t.child = e === null ? af(t, null, n, r) : Bn(t, e.child, n, r);
}
function Gu(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    zn(t, i),
    (r = ya(e, t, n, r, s, i)),
    (n = wa()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Et(e, t, i))
      : (W && n && oa(t), (t.flags |= 1), _e(e, t, r, i), t.child)
  );
}
function Xu(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Aa(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), If(e, t, s, r, i))
      : ((e = Di(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(o, r) && e.ref === t.ref)
    )
      return Et(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ht(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function If(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Dr(s, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Et(e, t, i);
  }
  return gl(e, t, n, r, i);
}
function Mf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Mn, Re),
        (Re |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Mn, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        F(Mn, Re),
        (Re |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Mn, Re),
      (Re |= r);
  return _e(e, t, i, n), t.child;
}
function Pf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gl(e, t, n, r, i) {
  var s = Me(n) ? ln : we.current;
  return (
    (s = Un(t, s)),
    zn(t, i),
    (n = ya(e, t, n, r, s, i)),
    (r = wa()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Et(e, t, i))
      : (W && r && oa(t), (t.flags |= 1), _e(e, t, n, i), t.child)
  );
}
function Ju(e, t, n, r, i) {
  if (Me(n)) {
    var s = !0;
    rs(t);
  } else s = !1;
  if ((zn(t, i), t.stateNode === null))
    Oi(e, t), of(t, n, r), hl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Qe(u))
      : ((u = Me(n) ? ln : we.current), (u = Un(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Uu(t, o, r, u)),
      (Nt = !1);
    var d = t.memoizedState;
    (o.state = d),
      as(t, r, o, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ie.current || Nt
        ? (typeof c == "function" && (fl(t, n, c, r), (a = t.memoizedState)),
          (l = Nt || Hu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      rf(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Xe(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Qe(a))
        : ((a = Me(n) ? ln : we.current), (a = Un(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Uu(t, o, r, a)),
      (Nt = !1),
      (d = t.memoizedState),
      (o.state = d),
      as(t, r, o, i);
    var m = t.memoizedState;
    l !== f || d !== m || Ie.current || Nt
      ? (typeof g == "function" && (fl(t, n, g, r), (m = t.memoizedState)),
        (u = Nt || Hu(t, n, u, r, d, m, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, m, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, m, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (o.props = r),
        (o.state = m),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ml(e, t, n, r, s, i);
}
function ml(e, t, n, r, i, s) {
  Pf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Ou(t, n, !1), Et(e, t, s);
  (r = t.stateNode), (Xm.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Bn(t, e.child, null, s)), (t.child = Bn(t, null, l, s)))
      : _e(e, t, l, s),
    (t.memoizedState = r.state),
    i && Ou(t, n, !0),
    t.child
  );
}
function Rf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $u(e, t.context, !1),
    pa(e, t.containerInfo);
}
function Yu(e, t, n, r, i) {
  return Vn(), aa(i), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function yl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $f(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(Q, i & 1),
    e === null)
  )
    return (
      cl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = $s(o, r, 0, null)),
              (e = sn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = yl(n)),
              (t.memoizedState = vl),
              e)
            : Sa(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Jm(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ht(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Ht(l, s)) : ((s = sn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? yl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = vl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ht(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Sa(e, t) {
  return (
    (t = $s({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yi(e, t, n, r) {
  return (
    r !== null && aa(r),
    Bn(t, e.child, null, n),
    (e = Sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jm(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mo(Error(k(422)))), yi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = $s({ mode: "visible", children: r.children }, i, 0, null)),
          (s = sn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Bn(t, e.child, null, o),
          (t.child.memoizedState = yl(o)),
          (t.memoizedState = vl),
          s);
  if (!(t.mode & 1)) return yi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(k(419))), (r = mo(s, r, void 0)), yi(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Le || l)) {
    if (((r = ae), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), St(e, i), rt(r, e, i, -1));
    }
    return ba(), (r = mo(Error(k(421)))), yi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      ($e = jt(i.nextSibling)),
      (Oe = t),
      (W = !0),
      (Ye = null),
      e !== null &&
        ((He[Ue++] = mt),
        (He[Ue++] = vt),
        (He[Ue++] = an),
        (mt = e.id),
        (vt = e.overflow),
        (an = t)),
      (t = Sa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), dl(e.return, t, n);
}
function vo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Of(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((_e(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zu(e, n, t);
        else if (e.tag === 19) Zu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && us(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          vo(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && us(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        vo(t, !0, n, null, s);
        break;
      case "together":
        vo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Oi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ym(e, t, n) {
  switch (t.tag) {
    case 3:
      Rf(t), Vn();
      break;
    case 5:
      uf(t);
      break;
    case 1:
      Me(t.type) && rs(t);
      break;
    case 4:
      pa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F(os, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? $f(e, t, n)
            : (F(Q, Q.current & 1),
              (e = Et(e, t, n)),
              e !== null ? e.sibling : null);
      F(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Of(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mf(e, t, n);
  }
  return Et(e, t, n);
}
var jf, wl, zf, Df;
jf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wl = function () {};
zf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), tn(dt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Ho(e, i)), (r = Ho(e, r)), (s = []);
        break;
      case "select":
        (i = G({}, i, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Bo(e, i)), (r = Bo(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ts);
    }
    Wo(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Mr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Mr.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && U("scroll", e),
                    s || l === a || (s = []))
                  : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Df = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Zm(e, t, n) {
  var r = t.pendingProps;
  switch ((la(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Me(t.type) && ns(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qn(),
        V(Ie),
        V(we),
        ma(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Nl(Ye), (Ye = null)))),
        wl(e, t),
        pe(t),
        null
      );
    case 5:
      ga(t);
      var i = tn(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return pe(t), null;
        }
        if (((e = tn(dt.current)), mi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ut] = t), (r[Ur] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < yr.length; i++) U(yr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              au(r, s), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              cu(r, s), U("invalid", r);
          }
          Wo(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      gi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      gi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Mr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              li(r), uu(r, s, !0);
              break;
            case "textarea":
              li(r), du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ts);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = dd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[ut] = t),
            (e[Ur] = r),
            jf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Qo(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < yr.length; i++) U(yr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                au(e, r), (i = Ho(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = G({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                cu(e, r), (i = Bo(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            Wo(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? pd(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && fd(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Pr(e, a)
                        : typeof a == "number" && Pr(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Mr.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && U("scroll", e)
                          : a != null && Wl(e, s, a, o));
              }
            switch (n) {
              case "input":
                li(e), uu(e, r, !1);
                break;
              case "textarea":
                li(e), du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Rn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ts);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = tn(Br.current)), tn(dt.current), mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (s = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                gi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (V(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && $e !== null && t.mode & 1 && !(t.flags & 128))
          tf(), Vn(), (t.flags |= 98560), (s = !1);
        else if (((s = mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(k(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(k(317));
            s[ut] = t;
          } else
            Vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (s = !1);
        } else Ye !== null && (Nl(Ye), (Ye = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? se === 0 && (se = 3) : ba())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        qn(), wl(e, t), e === null && Fr(t.stateNode.containerInfo), pe(t), null
      );
    case 10:
      return da(t.type._context), pe(t), null;
    case 17:
      return Me(t.type) && ns(), pe(t), null;
    case 19:
      if ((V(Q), (s = t.memoizedState), s === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ar(s, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = us(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ar(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Z() > Qn &&
            ((t.flags |= 128), (r = !0), ar(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = us(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !W)
            )
              return pe(t), null;
          } else
            2 * Z() - s.renderingStartTime > Qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Z()),
          (t.sibling = null),
          (n = Q.current),
          F(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Na(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function ev(e, t) {
  switch ((la(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && ns(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qn(),
        V(Ie),
        V(we),
        ma(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ga(t), null;
    case 13:
      if ((V(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Vn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(Q), null;
    case 4:
      return qn(), null;
    case 10:
      return da(t.type._context), null;
    case 22:
    case 23:
      return Na(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wi = !1,
  me = !1,
  tv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function In(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function _l(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ec = !1;
function nv(e, t) {
  if (((rl = Yi), (e = Ud()), sa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = o),
                d === s && ++c === r && (a = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (il = { focusedElem: e, selectionRange: n }, Yi = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    _ = m.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Xe(t.type, y),
                      _,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          X(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (m = ec), (ec = !1), m;
}
function Ar(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && _l(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ps(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ff(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ff(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[Ur], delete t[ll], delete t[zm], delete t[Dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Sl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ts));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sl(e, t, n), e = e.sibling; e !== null; ) Sl(e, t, n), (e = e.sibling);
}
function El(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (El(e, t, n), e = e.sibling; e !== null; ) El(e, t, n), (e = e.sibling);
}
var ue = null,
  Je = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) Uf(e, t, n), (n = n.sibling);
}
function Uf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(Ts, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || In(n, t);
    case 6:
      var r = ue,
        i = Je;
      (ue = null),
        Tt(e, t, n),
        (ue = r),
        (Je = i),
        ue !== null &&
          (Je
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Je
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? uo(e.parentNode, n)
              : e.nodeType === 1 && uo(e, n),
            jr(e))
          : uo(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (i = Je),
        (ue = n.stateNode.containerInfo),
        (Je = !0),
        Tt(e, t, n),
        (ue = r),
        (Je = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && _l(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (In(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), Tt(e, t, n), (me = r))
        : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tv()),
      t.forEach(function (r) {
        var i = dv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ue = l.stateNode), (Je = !1);
              break e;
            case 3:
              (ue = l.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (ue = l.stateNode.containerInfo), (Je = !0);
              break e;
          }
          l = l.return;
        }
        if (ue === null) throw Error(k(160));
        Uf(s, o, i), (ue = null), (Je = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vf(t, e), (t = t.sibling);
}
function Vf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), ot(e), r & 4)) {
        try {
          Ar(3, e, e.return), Ps(3, e);
        } catch (y) {
          X(e, e.return, y);
        }
        try {
          Ar(5, e, e.return);
        } catch (y) {
          X(e, e.return, y);
        }
      }
      break;
    case 1:
      Ge(t, e), ot(e), r & 512 && n !== null && In(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        ot(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Pr(i, "");
        } catch (y) {
          X(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && ud(i, s),
              Qo(l, o);
            var u = Qo(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                f = a[o + 1];
              c === "style"
                ? pd(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? fd(i, f)
                  : c === "children"
                    ? Pr(i, f)
                    : Wl(i, c, f, u);
            }
            switch (l) {
              case "input":
                Uo(i, s);
                break;
              case "textarea":
                cd(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Rn(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Rn(i, !!s.multiple, s.defaultValue, !0)
                      : Rn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ur] = s;
          } catch (y) {
            X(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          X(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jr(t.containerInfo);
        } catch (y) {
          X(e, e.return, y);
        }
      break;
    case 4:
      Ge(t, e), ot(e);
      break;
    case 13:
      Ge(t, e),
        ot(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ta = Z())),
        r & 4 && nc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ge(t, e), (me = u)) : Ge(t, e),
        ot(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((d = A), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ar(4, d, d.return);
                  break;
                case 1:
                  In(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (y) {
                      X(r, n, y);
                    }
                  }
                  break;
                case 5:
                  In(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ic(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (A = g)) : ic(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = hd("display", o)));
              } catch (y) {
                X(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                X(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), ot(e), r & 4 && nc(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), ot(e);
  }
}
function ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Pr(i, ""), (r.flags &= -33));
          var s = tc(e);
          El(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = tc(e);
          Sl(e, l, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rv(e, t, n) {
  (A = e), Bf(e);
}
function Bf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || wi;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || me;
        l = wi;
        var u = me;
        if (((wi = o), (me = a) && !u))
          for (A = i; A !== null; )
            (o = A),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? sc(i)
                : a !== null
                  ? ((a.return = o), (A = a))
                  : sc(i);
        for (; s !== null; ) (A = s), Bf(s), (s = s.sibling);
        (A = i), (wi = l), (me = u);
      }
      rc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : rc(e);
  }
}
function rc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Ps(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Fu(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fu(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && jr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        me || (t.flags & 512 && xl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function ic(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function sc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ps(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var s = t.return;
          try {
            xl(t);
          } catch (a) {
            X(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            xl(t);
          } catch (a) {
            X(t, o, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var iv = Math.ceil,
  fs = kt.ReactCurrentDispatcher,
  Ea = kt.ReactCurrentOwner,
  We = kt.ReactCurrentBatchConfig,
  z = 0,
  ae = null,
  ne = null,
  de = 0,
  Re = 0,
  Mn = qt(0),
  se = 0,
  Kr = null,
  cn = 0,
  Rs = 0,
  ka = 0,
  Lr = null,
  Ne = null,
  Ta = 0,
  Qn = 1 / 0,
  pt = null,
  hs = !1,
  kl = null,
  Dt = null,
  _i = !1,
  Pt = null,
  ps = 0,
  Ir = 0,
  Tl = null,
  ji = -1,
  zi = 0;
function Ee() {
  return z & 6 ? Z() : ji !== -1 ? ji : (ji = Z());
}
function Ft(e) {
  return e.mode & 1
    ? z & 2 && de !== 0
      ? de & -de
      : Hm.transition !== null
        ? (zi === 0 && (zi = Cd()), zi)
        : ((e = D),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Pd(e.type))),
          e)
    : 1;
}
function rt(e, t, n, r) {
  if (50 < Ir) throw ((Ir = 0), (Tl = null), Error(k(185)));
  Jr(e, n, r),
    (!(z & 2) || e !== ae) &&
      (e === ae && (!(z & 2) && (Rs |= n), se === 4 && It(e, de)),
      Pe(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Qn = Z() + 500), Ls && Wt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Hg(e, t);
  var r = Ji(e, e === ae ? de : 0);
  if (r === 0)
    n !== null && pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pu(n), t === 1))
      e.tag === 0 ? Fm(oc.bind(null, e)) : Yd(oc.bind(null, e)),
        Om(function () {
          !(z & 6) && Wt();
        }),
        (n = null);
    else {
      switch (Nd(r)) {
        case 1:
          n = Jl;
          break;
        case 4:
          n = kd;
          break;
        case 16:
          n = Xi;
          break;
        case 536870912:
          n = Td;
          break;
        default:
          n = Xi;
      }
      n = Yf(n, qf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qf(e, t) {
  if (((ji = -1), (zi = 0), z & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Dn() && e.callbackNode !== n) return null;
  var r = Ji(e, e === ae ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gs(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var s = Qf();
    (ae !== e || de !== t) && ((pt = null), (Qn = Z() + 500), rn(e, t));
    do
      try {
        lv();
        break;
      } catch (l) {
        Wf(e, l);
      }
    while (!0);
    ca(),
      (fs.current = s),
      (z = i),
      ne !== null ? (t = 0) : ((ae = null), (de = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Yo(e)), i !== 0 && ((r = i), (t = Cl(e, i)))), t === 1)
    )
      throw ((n = Kr), rn(e, 0), It(e, r), Pe(e, Z()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !sv(i) &&
          ((t = gs(e, r)),
          t === 2 && ((s = Yo(e)), s !== 0 && ((r = s), (t = Cl(e, s)))),
          t === 1))
      )
        throw ((n = Kr), rn(e, 0), It(e, r), Pe(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Xt(e, Ne, pt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = Ta + 500 - Z()), 10 < t))
          ) {
            if (Ji(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ol(Xt.bind(null, e, Ne, pt), t);
            break;
          }
          Xt(e, Ne, pt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - nt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * iv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ol(Xt.bind(null, e, Ne, pt), r);
            break;
          }
          Xt(e, Ne, pt);
          break;
        case 5:
          Xt(e, Ne, pt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, Z()), e.callbackNode === n ? qf.bind(null, e) : null;
}
function Cl(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    (e = gs(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && Nl(t)),
    e
  );
}
function Nl(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function sv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!it(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function It(e, t) {
  for (
    t &= ~ka,
      t &= ~Rs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function oc(e) {
  if (z & 6) throw Error(k(327));
  Dn();
  var t = Ji(e, 0);
  if (!(t & 1)) return Pe(e, Z()), null;
  var n = gs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yo(e);
    r !== 0 && ((t = r), (n = Cl(e, r)));
  }
  if (n === 1) throw ((n = Kr), rn(e, 0), It(e, t), Pe(e, Z()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xt(e, Ne, pt),
    Pe(e, Z()),
    null
  );
}
function Ca(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((Qn = Z() + 500), Ls && Wt());
  }
}
function dn(e) {
  Pt !== null && Pt.tag === 0 && !(z & 6) && Dn();
  var t = z;
  z |= 1;
  var n = We.transition,
    r = D;
  try {
    if (((We.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (We.transition = n), (z = t), !(z & 6) && Wt();
  }
}
function Na() {
  (Re = Mn.current), V(Mn);
}
function rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $m(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((la(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ns();
          break;
        case 3:
          qn(), V(Ie), V(we), ma();
          break;
        case 5:
          ga(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          V(Q);
          break;
        case 19:
          V(Q);
          break;
        case 10:
          da(r.type._context);
          break;
        case 22:
        case 23:
          Na();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ne = e = Ht(e.current, null)),
    (de = Re = t),
    (se = 0),
    (Kr = null),
    (ka = Rs = cn = 0),
    (Ne = Lr = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function Wf(e, t) {
  do {
    var n = ne;
    try {
      if ((ca(), (Ri.current = ds), cs)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        cs = !1;
      }
      if (
        ((un = 0),
        (le = ie = K = null),
        (br = !1),
        (qr = 0),
        (Ea.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (Kr = t), (ne = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = de),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Qu(o);
          if (g !== null) {
            (g.flags &= -257),
              Ku(g, o, l, s, t),
              g.mode & 1 && Wu(s, u, t),
              (t = g),
              (a = u);
            var m = t.updateQueue;
            if (m === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else m.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Wu(s, u, t), ba();
              break e;
            }
            a = Error(k(426));
          }
        } else if (W && l.mode & 1) {
          var _ = Qu(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Ku(_, o, l, s, t),
              aa(Wn(a, l));
            break e;
          }
        }
        (s = a = Wn(a, l)),
          se !== 4 && (se = 2),
          Lr === null ? (Lr = [s]) : Lr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Af(s, a, t);
              Du(s, p);
              break e;
            case 1:
              l = a;
              var h = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Dt === null || !Dt.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var x = Lf(s, l, t);
                Du(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Gf(n);
    } catch (E) {
      (t = E), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qf() {
  var e = fs.current;
  return (fs.current = ds), e === null ? ds : e;
}
function ba() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(cn & 268435455) && !(Rs & 268435455)) || It(ae, de);
}
function gs(e, t) {
  var n = z;
  z |= 2;
  var r = Qf();
  (ae !== e || de !== t) && ((pt = null), rn(e, t));
  do
    try {
      ov();
      break;
    } catch (i) {
      Wf(e, i);
    }
  while (!0);
  if ((ca(), (z = n), (fs.current = r), ne !== null)) throw Error(k(261));
  return (ae = null), (de = 0), se;
}
function ov() {
  for (; ne !== null; ) Kf(ne);
}
function lv() {
  for (; ne !== null && !Mg(); ) Kf(ne);
}
function Kf(e) {
  var t = Jf(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gf(e) : (ne = t),
    (Ea.current = null);
}
function Gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ev(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (ne = null);
        return;
      }
    } else if (((n = Zm(n, t, Re)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Xt(e, t, n) {
  var r = D,
    i = We.transition;
  try {
    (We.transition = null), (D = 1), av(e, t, n, r);
  } finally {
    (We.transition = i), (D = r);
  }
  return null;
}
function av(e, t, n, r) {
  do Dn();
  while (Pt !== null);
  if (z & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Ug(e, s),
    e === ae && ((ne = ae = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _i ||
      ((_i = !0),
      Yf(Xi, function () {
        return Dn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = We.transition), (We.transition = null);
    var o = D;
    D = 1;
    var l = z;
    (z |= 4),
      (Ea.current = null),
      nv(e, n),
      Vf(n, e),
      bm(il),
      (Yi = !!rl),
      (il = rl = null),
      (e.current = n),
      rv(n),
      Pg(),
      (z = l),
      (D = o),
      (We.transition = s);
  } else e.current = n;
  if (
    (_i && ((_i = !1), (Pt = e), (ps = i)),
    (s = e.pendingLanes),
    s === 0 && (Dt = null),
    Og(n.stateNode),
    Pe(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (hs) throw ((hs = !1), (e = kl), (kl = null), e);
  return (
    ps & 1 && e.tag !== 0 && Dn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Tl ? Ir++ : ((Ir = 0), (Tl = e))) : (Ir = 0),
    Wt(),
    null
  );
}
function Dn() {
  if (Pt !== null) {
    var e = Nd(ps),
      t = We.transition,
      n = D;
    try {
      if (((We.transition = null), (D = 16 > e ? 16 : e), Pt === null))
        var r = !1;
      else {
        if (((e = Pt), (Pt = null), (ps = 0), z & 6)) throw Error(k(331));
        var i = z;
        for (z |= 4, A = e.current; A !== null; ) {
          var s = A,
            o = s.child;
          if (A.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ar(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (A = f);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var d = c.sibling,
                        g = c.return;
                      if ((Ff(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (A = d);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var _ = y.sibling;
                    (y.sibling = null), (y = _);
                  } while (y !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (A = o);
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ar(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (A = p);
                break e;
              }
              A = s.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          o = A;
          var v = o.child;
          if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (A = v);
          else
            e: for (o = h; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(9, l);
                  }
                } catch (E) {
                  X(l, l.return, E);
                }
              if (l === o) {
                A = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (A = x);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((z = i), Wt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(Ts, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (We.transition = t);
    }
  }
  return !1;
}
function lc(e, t, n) {
  (t = Wn(n, t)),
    (t = Af(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = Ee()),
    e !== null && (Jr(e, 1, t), Pe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Dt === null || !Dt.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = Lf(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = Ee()),
            t !== null && (Jr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function uv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (de & n) === n &&
      (se === 4 || (se === 3 && (de & 130023424) === de && 500 > Z() - Ta)
        ? rn(e, 0)
        : (ka |= n)),
    Pe(e, t);
}
function Xf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1));
  var n = Ee();
  (e = St(e, t)), e !== null && (Jr(e, t, n), Pe(e, n));
}
function cv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xf(e, n);
}
function dv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Xf(e, n);
}
var Jf;
Jf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Ym(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), W && t.flags & 1048576 && Zd(t, ss, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Oi(e, t), (e = t.pendingProps);
      var i = Un(t, we.current);
      zn(t, n), (i = ya(null, t, r, e, i, n));
      var s = wa();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((s = !0), rs(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ha(t),
            (i.updater = Is),
            (t.stateNode = i),
            (i._reactInternals = t),
            hl(t, r, e, n),
            (t = ml(null, t, r, !0, s, n)))
          : ((t.tag = 0), W && s && oa(t), _e(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Oi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = hv(r)),
          (e = Xe(r, e)),
          i)
        ) {
          case 0:
            t = gl(null, t, r, e, n);
            break e;
          case 1:
            t = Ju(null, t, r, e, n);
            break e;
          case 11:
            t = Gu(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        gl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Ju(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Rf(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          rf(e, t),
          as(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Wn(Error(k(423)), t)), (t = Yu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Wn(Error(k(424)), t)), (t = Yu(e, t, r, n, i));
            break e;
          } else
            for (
              $e = jt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                W = !0,
                Ye = null,
                n = af(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Vn(), r === i)) {
            t = Et(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        uf(t),
        e === null && cl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        sl(r, i) ? (o = null) : s !== null && sl(r, s) && (t.flags |= 32),
        Pf(e, t),
        _e(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && cl(t), null;
    case 13:
      return $f(e, t, n);
    case 4:
      return (
        pa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bn(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Gu(e, t, r, i, n)
      );
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          F(os, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (it(s.value, o)) {
            if (s.children === i.children && !Ie.current) {
              t = Et(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = wt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      dl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  dl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        _e(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (i = Qe(i)),
        (r = r(i)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Xe(r, t.pendingProps)),
        (i = Xe(r.type, i)),
        Xu(e, t, r, i, n)
      );
    case 15:
      return If(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Oi(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), rs(t)) : (e = !1),
        zn(t, n),
        of(t, r, i),
        hl(t, r, i, n),
        ml(null, t, r, !0, e, n)
      );
    case 19:
      return Of(e, t, n);
    case 22:
      return Mf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Yf(e, t) {
  return Ed(e, t);
}
function fv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new fv(e, t, n, r);
}
function Aa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hv(e) {
  if (typeof e == "function") return Aa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kl)) return 11;
    if (e === Gl) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Di(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Aa(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Sn:
        return sn(n.children, i, s, t);
      case Ql:
        (o = 8), (i |= 8);
        break;
      case jo:
        return (
          (e = Be(12, n, t, i | 2)), (e.elementType = jo), (e.lanes = s), e
        );
      case zo:
        return (e = Be(13, n, t, i)), (e.elementType = zo), (e.lanes = s), e;
      case Do:
        return (e = Be(19, n, t, i)), (e.elementType = Do), (e.lanes = s), e;
      case od:
        return $s(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case id:
              o = 10;
              break e;
            case sd:
              o = 9;
              break e;
            case Kl:
              o = 11;
              break e;
            case Gl:
              o = 14;
              break e;
            case Ct:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function sn(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function $s(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = od),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yo(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function wo(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ys(0)),
    (this.expirationTimes = Ys(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ys(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function La(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new pv(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Be(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ha(s),
    e
  );
}
function gv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Zf(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return Jd(e, n, t);
  }
  return t;
}
function eh(e, t, n, r, i, s, o, l, a) {
  return (
    (e = La(n, r, !0, e, i, s, o, l, a)),
    (e.context = Zf(null)),
    (n = e.current),
    (r = Ee()),
    (i = Ft(n)),
    (s = wt(r, i)),
    (s.callback = t ?? null),
    zt(n, s, i),
    (e.current.lanes = i),
    Jr(e, i, r),
    Pe(e, r),
    e
  );
}
function Os(e, t, n, r) {
  var i = t.current,
    s = Ee(),
    o = Ft(i);
  return (
    (n = Zf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = zt(i, t, o)),
    e !== null && (rt(e, i, o, s), Pi(e, i, o)),
    o
  );
}
function ms(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ac(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ia(e, t) {
  ac(e, t), (e = e.alternate) && ac(e, t);
}
function mv() {
  return null;
}
var th =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ma(e) {
  this._internalRoot = e;
}
js.prototype.render = Ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Os(e, t, null, null);
};
js.prototype.unmount = Ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dn(function () {
      Os(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function js(e) {
  this._internalRoot = e;
}
js.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ld();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    Lt.splice(n, 0, e), n === 0 && Md(e);
  }
};
function Pa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function uc() {}
function vv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ms(o);
        s.call(u);
      };
    }
    var o = eh(t, r, e, 0, null, !1, !1, "", uc);
    return (
      (e._reactRootContainer = o),
      (e[xt] = o.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      dn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ms(a);
      l.call(u);
    };
  }
  var a = La(e, 0, !1, null, null, !1, !1, "", uc);
  return (
    (e._reactRootContainer = a),
    (e[xt] = a.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    dn(function () {
      Os(t, a, n, r);
    }),
    a
  );
}
function Ds(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = ms(o);
        l.call(a);
      };
    }
    Os(t, o, e, i);
  } else o = vv(n, t, e, i, r);
  return ms(o);
}
bd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vr(t.pendingLanes);
        n !== 0 &&
          (Yl(t, n | 1), Pe(t, Z()), !(z & 6) && ((Qn = Z() + 500), Wt()));
      }
      break;
    case 13:
      dn(function () {
        var r = St(e, 1);
        if (r !== null) {
          var i = Ee();
          rt(r, e, 1, i);
        }
      }),
        Ia(e, 1);
  }
};
Zl = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Ee();
      rt(t, e, 134217728, n);
    }
    Ia(e, 134217728);
  }
};
Ad = function (e) {
  if (e.tag === 13) {
    var t = Ft(e),
      n = St(e, t);
    if (n !== null) {
      var r = Ee();
      rt(n, e, t, r);
    }
    Ia(e, t);
  }
};
Ld = function () {
  return D;
};
Id = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Go = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Uo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = As(r);
            if (!i) throw Error(k(90));
            ad(r), Uo(r, i);
          }
        }
      }
      break;
    case "textarea":
      cd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Rn(e, !!n.multiple, t, !1);
  }
};
vd = Ca;
yd = dn;
var yv = { usingClientEntryPoint: !1, Events: [Zr, Cn, As, gd, md, Ca] },
  ur = {
    findFiberByHostInstance: Zt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wv = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || mv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xi.isDisabled && xi.supportsFiber)
    try {
      (Ts = xi.inject(wv)), (ct = xi);
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pa(t)) throw Error(k(200));
  return gv(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!Pa(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = th;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = La(e, 1, !1, null, null, n, !1, r, i)),
    (e[xt] = t.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new Ma(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = xd(t)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
  return dn(e);
};
De.hydrate = function (e, t, n) {
  if (!zs(t)) throw Error(k(200));
  return Ds(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!Pa(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = th;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = eh(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[xt] = t.current),
    Fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new js(t);
};
De.render = function (e, t, n) {
  if (!zs(t)) throw Error(k(200));
  return Ds(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!zs(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (dn(function () {
        Ds(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Ca;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zs(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ds(e, t, n, !1, r);
};
De.version = "18.2.0-next-9e3b772b8-20220608";
function nh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh);
    } catch (e) {
      console.error(e);
    }
}
nh(), (Zc.exports = De);
var _v = Zc.exports,
  xv,
  cc = _v;
(xv = cc.createRoot), cc.hydrateRoot;
const fn = ({
    children: e,
    title: t = "",
    icon: n,
    disabled: r = !1,
    toggled: i = !1,
    onClick: s = () => {},
    style: o,
    testId: l,
    className: a,
    ariaLabel: u,
  }) =>
    w.jsxs("button", {
      className: tt(a, "toolbar-button", n, i && "toggled"),
      onMouseDown: dc,
      onClick: s,
      onDoubleClick: dc,
      title: t,
      disabled: !!r,
      style: o,
      "data-testid": l,
      "aria-label": u || t,
      children: [
        n &&
          w.jsx("span", {
            className: `codicon codicon-${n}`,
            style: e ? { marginRight: 5 } : {},
          }),
        e,
      ],
    }),
  aw = ({ style: e }) =>
    w.jsx("div", { className: "toolbar-separator", style: e }),
  dc = (e) => {
    e.stopPropagation(), e.preventDefault();
  },
  wr = Symbol("context"),
  rh = Symbol("next"),
  ih = Symbol("prev"),
  fc = Symbol("events");
class uw {
  constructor(t) {
    H(this, "startTime");
    H(this, "endTime");
    H(this, "browserName");
    H(this, "channel");
    H(this, "platform");
    H(this, "wallTime");
    H(this, "title");
    H(this, "options");
    H(this, "pages");
    H(this, "actions");
    H(this, "events");
    H(this, "stdio");
    H(this, "errors");
    H(this, "errorDescriptors");
    H(this, "hasSource");
    H(this, "hasStepData");
    H(this, "sdkLanguage");
    H(this, "testIdAttributeName");
    H(this, "sources");
    H(this, "resources");
    t.forEach((r) => Sv(r));
    const n = t.find((r) => r.origin === "library");
    (this.browserName = (n == null ? void 0 : n.browserName) || ""),
      (this.sdkLanguage = n == null ? void 0 : n.sdkLanguage),
      (this.channel = n == null ? void 0 : n.channel),
      (this.testIdAttributeName = n == null ? void 0 : n.testIdAttributeName),
      (this.platform = (n == null ? void 0 : n.platform) || ""),
      (this.title = (n == null ? void 0 : n.title) || ""),
      (this.options = (n == null ? void 0 : n.options) || {}),
      (this.actions = Ev(t)),
      (this.pages = [].concat(...t.map((r) => r.pages))),
      (this.wallTime = t
        .map((r) => r.wallTime)
        .reduce(
          (r, i) => Math.min(r || Number.MAX_VALUE, i),
          Number.MAX_VALUE,
        )),
      (this.startTime = t
        .map((r) => r.startTime)
        .reduce((r, i) => Math.min(r, i), Number.MAX_VALUE)),
      (this.endTime = t
        .map((r) => r.endTime)
        .reduce((r, i) => Math.max(r, i), Number.MIN_VALUE)),
      (this.events = [].concat(...t.map((r) => r.events))),
      (this.stdio = [].concat(...t.map((r) => r.stdio))),
      (this.errors = [].concat(...t.map((r) => r.errors))),
      (this.hasSource = t.some((r) => r.hasSource)),
      (this.hasStepData = t.some((r) => r.origin === "testRunner")),
      (this.resources = [...t.map((r) => r.resources)].flat()),
      this.events.sort((r, i) => r.time - i.time),
      this.resources.sort((r, i) => r._monotonicTime - i._monotonicTime),
      (this.errorDescriptors = this.hasStepData
        ? this._errorDescriptorsFromTestRunner()
        : this._errorDescriptorsFromActions()),
      (this.sources = Iv(this.actions, this.errorDescriptors));
  }
  failedAction() {
    return this.actions.findLast((t) => t.error);
  }
  _errorDescriptorsFromActions() {
    var n;
    const t = [];
    for (const r of this.actions || [])
      (n = r.error) != null &&
        n.message &&
        t.push({ action: r, stack: r.stack, message: r.error.message });
    return t;
  }
  _errorDescriptorsFromTestRunner() {
    const t = [];
    for (const n of this.errors || [])
      n.message && t.push({ stack: n.stack, message: n.message });
    return t;
  }
}
function Sv(e) {
  for (const n of e.pages) n[wr] = e;
  for (let n = 0; n < e.actions.length; ++n) {
    const r = e.actions[n];
    r[wr] = e;
  }
  let t;
  for (let n = e.actions.length - 1; n >= 0; n--) {
    const r = e.actions[n];
    (r[rh] = t), r.apiName.includes("route.") || (t = r);
  }
  for (const n of e.events) n[wr] = e;
  for (const n of e.resources) n[wr] = e;
}
function Ev(e) {
  const t = new Map();
  for (const i of e) {
    const s = i.traceUrl;
    let o = t.get(s);
    o || ((o = []), t.set(s, o)), o.push(i);
  }
  const n = [];
  let r = 0;
  for (const [, i] of t) {
    t.size > 1 && kv(i, ++r);
    const s = Tv(i);
    n.push(...s);
  }
  n.sort((i, s) =>
    s.parentId === i.callId
      ? -1
      : i.parentId === s.callId
        ? 1
        : i.startTime - s.startTime,
  );
  for (let i = 1; i < n.length; ++i) n[i][ih] = n[i - 1];
  return n;
}
function kv(e, t) {
  for (const n of e)
    for (const r of n.actions)
      r.callId && (r.callId = `${t}:${r.callId}`),
        r.parentId && (r.parentId = `${t}:${r.parentId}`);
}
function Tv(e) {
  const t = new Map(),
    n = e.filter((l) => l.origin === "library"),
    r = e.filter((l) => l.origin === "testRunner");
  if (!r.length || !n.length)
    return e.map((l) => l.actions.map((a) => ({ ...a, context: l }))).flat();
  const i = n.some((l) => l.actions.some((a) => !!a.stepId));
  for (const l of n)
    for (const a of l.actions) {
      const u = i ? a.stepId : `${a.apiName}@${a.wallTime}`;
      t.set(u, { ...a, context: l });
    }
  const s = Nv(r, t, i);
  s && Cv(n, s);
  const o = new Map();
  for (const l of r)
    for (const a of l.actions) {
      const u = i ? a.callId : `${a.apiName}@${a.wallTime}`,
        c = t.get(u);
      if (c) {
        o.set(a.callId, c.callId),
          a.error && (c.error = a.error),
          a.attachments && (c.attachments = a.attachments),
          a.parentId && (c.parentId = o.get(a.parentId) ?? a.parentId),
          (c.startTime = a.startTime),
          (c.endTime = a.endTime);
        continue;
      }
      a.parentId && (a.parentId = o.get(a.parentId) ?? a.parentId),
        t.set(u, { ...a, context: l });
    }
  return [...t.values()];
}
function Cv(e, t) {
  for (const n of e) {
    (n.startTime += t), (n.endTime += t);
    for (const r of n.actions)
      r.startTime && (r.startTime += t), r.endTime && (r.endTime += t);
    for (const r of n.events) r.time += t;
    for (const r of n.stdio) r.timestamp += t;
    for (const r of n.pages)
      for (const i of r.screencastFrames) i.timestamp += t;
    for (const r of n.resources) r._monotonicTime && (r._monotonicTime += t);
  }
}
function Nv(e, t, n) {
  for (const r of e)
    for (const i of r.actions) {
      if (!i.startTime) continue;
      const s = n ? i.callId : `${i.apiName}@${i.wallTime}`,
        o = t.get(s);
      if (o) return i.startTime - o.startTime;
    }
  return 0;
}
function cw(e) {
  const t = new Map();
  for (const r of e)
    t.set(r.callId, { id: r.callId, parent: void 0, children: [], action: r });
  const n = { id: "", parent: void 0, children: [] };
  for (const r of t.values()) {
    const i = (r.action.parentId && t.get(r.action.parentId)) || n;
    i.children.push(r), (r.parent = i);
  }
  return { rootItem: n, itemMap: t };
}
function vs(e) {
  return e[wr];
}
function bv(e) {
  return e[rh];
}
function Av(e) {
  return e[ih];
}
function dw(e) {
  let t = 0,
    n = 0;
  for (const r of Lv(e)) {
    if (r.type === "console") {
      const i = r.messageType;
      i === "warning" ? ++n : i === "error" && ++t;
    }
    r.type === "event" && r.method === "pageError" && ++t;
  }
  return { errors: t, warnings: n };
}
function Lv(e) {
  let t = e[fc];
  if (t) return t;
  const n = bv(e);
  return (
    (t = vs(e).events.filter(
      (r) => r.time >= e.startTime && (!n || r.time < n.startTime),
    )),
    (e[fc] = t),
    t
  );
}
function Iv(e, t) {
  var r;
  const n = new Map();
  for (const i of e)
    for (const s of i.stack || []) {
      let o = n.get(s.file);
      o || ((o = { errors: [], content: void 0 }), n.set(s.file, o));
    }
  for (const i of t) {
    const { action: s, stack: o, message: l } = i;
    !s ||
      !o ||
      (r = n.get(o[0].file)) == null ||
      r.errors.push({ line: o[0].line || 0, message: l });
  }
  return n;
}
const _o = new Set([
  "page.route",
  "page.routefromhar",
  "page.unroute",
  "page.unrouteall",
  "browsercontext.route",
  "browsercontext.routefromhar",
  "browsercontext.unroute",
  "browsercontext.unrouteall",
]);
{
  for (const e of [..._o]) _o.add(e + "async");
  for (const e of [
    "page.route_from_har",
    "page.unroute_all",
    "context.route_from_har",
    "context.unroute_all",
  ])
    _o.add(e);
}
const Mv = 50,
  sh = ({
    sidebarSize: e,
    sidebarHidden: t = !1,
    sidebarIsFirst: n = !1,
    orientation: r = "vertical",
    minSidebarSize: i = Mv,
    settingName: s,
    sidebar: o,
    main: l,
  }) => {
    const a = Math.max(i, e) * window.devicePixelRatio,
      [u, c] = ru(s ? s + "." + r + ":size" : void 0, a),
      [f, d] = ru(s ? s + "." + r + ":size" : void 0, a),
      [g, m] = M.useState(null),
      [y, _] = ks();
    let p;
    r === "vertical"
      ? ((p = f / window.devicePixelRatio),
        y && y.height < p && (p = y.height - 10))
      : ((p = u / window.devicePixelRatio),
        y && y.width < p && (p = y.width - 10)),
      (document.body.style.userSelect = g ? "none" : "inherit");
    let h = {};
    return (
      r === "vertical"
        ? n
          ? (h = {
              top: g ? 0 : p - 4,
              bottom: g ? 0 : void 0,
              height: g ? "initial" : 8,
            })
          : (h = {
              bottom: g ? 0 : p - 4,
              top: g ? 0 : void 0,
              height: g ? "initial" : 8,
            })
        : n
          ? (h = {
              left: g ? 0 : p - 4,
              right: g ? 0 : void 0,
              width: g ? "initial" : 8,
            })
          : (h = {
              right: g ? 0 : p - 4,
              left: g ? 0 : void 0,
              width: g ? "initial" : 8,
            }),
      w.jsxs("div", {
        className: tt("split-view", r, n && "sidebar-first"),
        ref: _,
        children: [
          w.jsx("div", { className: "split-view-main", children: l }),
          !t &&
            w.jsx("div", {
              style: { flexBasis: p },
              className: "split-view-sidebar",
              children: o,
            }),
          !t &&
            w.jsx("div", {
              style: h,
              className: "split-view-resizer",
              onMouseDown: (v) =>
                m({
                  offset: r === "vertical" ? v.clientY : v.clientX,
                  size: p,
                }),
              onMouseUp: () => m(null),
              onMouseMove: (v) => {
                if (!v.buttons) m(null);
                else if (g) {
                  const E =
                      (r === "vertical" ? v.clientY : v.clientX) - g.offset,
                    C = n ? g.size + E : g.size - E,
                    b = v.target.parentElement.getBoundingClientRect(),
                    S = Math.min(
                      Math.max(i, C),
                      (r === "vertical" ? b.height : b.width) - i,
                    );
                  r === "vertical"
                    ? d(S * window.devicePixelRatio)
                    : c(S * window.devicePixelRatio);
                }
              },
            }),
        ],
      })
    );
  };
function Fs(e, t = "'") {
  const n = JSON.stringify(e),
    r = n.substring(1, n.length - 1).replace(/\\"/g, '"');
  if (t === "'") return t + r.replace(/[']/g, "\\'") + t;
  if (t === '"') return t + r.replace(/["]/g, '\\"') + t;
  if (t === "`") return t + r.replace(/[`]/g, "`") + t;
  throw new Error("Invalid escape char");
}
function ys(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
function oh(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}
function Ve(e) {
  let t = "";
  for (let n = 0; n < e.length; n++) t += Pv(e, n);
  return t;
}
function cr(e) {
  return `"${Ve(e).replace(/\\ /g, " ")}"`;
}
function Pv(e, t) {
  const n = e.charCodeAt(t);
  return n === 0
    ? "�"
    : (n >= 1 && n <= 31) ||
        (n >= 48 && n <= 57 && (t === 0 || (t === 1 && e.charCodeAt(0) === 45)))
      ? "\\" + n.toString(16) + " "
      : t === 0 && n === 45 && e.length === 1
        ? "\\" + e.charAt(t)
        : n >= 128 ||
            n === 45 ||
            n === 95 ||
            (n >= 48 && n <= 57) ||
            (n >= 65 && n <= 90) ||
            (n >= 97 && n <= 122)
          ? e.charAt(t)
          : "\\" + e.charAt(t);
}
let Jt;
function Rv() {
  Jt = new Map();
}
function ze(e) {
  let t = Jt == null ? void 0 : Jt.get(e);
  return (
    t === void 0 &&
      ((t = e
        .replace(/\u200b/g, "")
        .trim()
        .replace(/\s+/g, " ")),
      Jt == null || Jt.set(e, t)),
    t
  );
}
function Hs(e) {
  return e.replace(/(^|[^\\])(\\\\)*\\(['"`])/g, "$1$2$3");
}
function lh(e) {
  return e.unicode || e.unicodeSets
    ? String(e)
    : String(e)
        .replace(/(^|[^\\])(\\\\)*(["'`])/g, "$1$2\\$3")
        .replace(/>>/g, "\\>\\>");
}
function qe(e, t) {
  return typeof e != "string" ? lh(e) : `${JSON.stringify(e)}${t ? "s" : "i"}`;
}
function xe(e, t) {
  return typeof e != "string"
    ? lh(e)
    : `"${e.replace(/\\/g, "\\\\").replace(/["]/g, '\\"')}"${t ? "s" : "i"}`;
}
function $v(e, t, n = "") {
  if (e.length <= t) return e;
  const r = [...e];
  return r.length > t ? r.slice(0, t - n.length).join("") + n : r.join("");
}
function hc(e, t) {
  return $v(e, t, "…");
}
function bl(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Ov(e, t) {
  const n = e.length,
    r = t.length;
  let i = 0,
    s = 0;
  const o = Array(n + 1)
    .fill(null)
    .map(() => Array(r + 1).fill(0));
  for (let l = 1; l <= n; l++)
    for (let a = 1; a <= r; a++)
      e[l - 1] === t[a - 1] &&
        ((o[l][a] = o[l - 1][a - 1] + 1),
        o[l][a] > i && ((i = o[l][a]), (s = l)));
  return e.slice(s - i, s);
}
const te = function (e, t, n) {
  return e >= t && e <= n;
};
function Ce(e) {
  return te(e, 48, 57);
}
function pc(e) {
  return Ce(e) || te(e, 65, 70) || te(e, 97, 102);
}
function jv(e) {
  return te(e, 65, 90);
}
function zv(e) {
  return te(e, 97, 122);
}
function Dv(e) {
  return jv(e) || zv(e);
}
function Fv(e) {
  return e >= 128;
}
function Fi(e) {
  return Dv(e) || Fv(e) || e === 95;
}
function gc(e) {
  return Fi(e) || Ce(e) || e === 45;
}
function Hv(e) {
  return te(e, 0, 8) || e === 11 || te(e, 14, 31) || e === 127;
}
function Hi(e) {
  return e === 10;
}
function ft(e) {
  return Hi(e) || e === 9 || e === 32;
}
const Uv = 1114111;
class Ra extends Error {
  constructor(t) {
    super(t), (this.name = "InvalidCharacterError");
  }
}
function Vv(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (
      (r === 13 && e.charCodeAt(n + 1) === 10 && ((r = 10), n++),
      (r === 13 || r === 12) && (r = 10),
      r === 0 && (r = 65533),
      te(r, 55296, 56319) && te(e.charCodeAt(n + 1), 56320, 57343))
    ) {
      const i = r - 55296,
        s = e.charCodeAt(n + 1) - 56320;
      (r = Math.pow(2, 16) + i * Math.pow(2, 10) + s), n++;
    }
    t.push(r);
  }
  return t;
}
function re(e) {
  if (e <= 65535) return String.fromCharCode(e);
  e -= Math.pow(2, 16);
  const t = Math.floor(e / Math.pow(2, 10)) + 55296,
    n = (e % Math.pow(2, 10)) + 56320;
  return String.fromCharCode(t) + String.fromCharCode(n);
}
function Bv(e) {
  const t = Vv(e);
  let n = -1;
  const r = [];
  let i;
  const s = function (T) {
      return T >= t.length ? -1 : t[T];
    },
    o = function (T) {
      if ((T === void 0 && (T = 1), T > 3))
        throw "Spec Error: no more than three codepoints of lookahead.";
      return s(n + T);
    },
    l = function (T) {
      return T === void 0 && (T = 1), (n += T), (i = s(n)), !0;
    },
    a = function () {
      return (n -= 1), !0;
    },
    u = function (T) {
      return T === void 0 && (T = i), T === -1;
    },
    c = function () {
      if ((f(), l(), ft(i))) {
        for (; ft(o()); ) l();
        return new Al();
      } else {
        if (i === 34) return m();
        if (i === 35)
          if (gc(o()) || p(o(1), o(2))) {
            const T = new Sh("");
            return v(o(1), o(2), o(3)) && (T.type = "id"), (T.value = N()), T;
          } else return new ge(i);
        else
          return i === 36
            ? o() === 61
              ? (l(), new Kv())
              : new ge(i)
            : i === 39
              ? m()
              : i === 40
                ? new vh()
                : i === 41
                  ? new yh()
                  : i === 42
                    ? o() === 61
                      ? (l(), new Gv())
                      : new ge(i)
                    : i === 43
                      ? C()
                        ? (a(), d())
                        : new ge(i)
                      : i === 44
                        ? new hh()
                        : i === 45
                          ? C()
                            ? (a(), d())
                            : o(1) === 45 && o(2) === 62
                              ? (l(2), new ch())
                              : x()
                                ? (a(), g())
                                : new ge(i)
                          : i === 46
                            ? C()
                              ? (a(), d())
                              : new ge(i)
                            : i === 58
                              ? new dh()
                              : i === 59
                                ? new fh()
                                : i === 60
                                  ? o(1) === 33 && o(2) === 45 && o(3) === 45
                                    ? (l(3), new uh())
                                    : new ge(i)
                                  : i === 64
                                    ? v(o(1), o(2), o(3))
                                      ? new xh(N())
                                      : new ge(i)
                                    : i === 91
                                      ? new mh()
                                      : i === 92
                                        ? h()
                                          ? (a(), g())
                                          : new ge(i)
                                        : i === 93
                                          ? new Ll()
                                          : i === 94
                                            ? o() === 61
                                              ? (l(), new Qv())
                                              : new ge(i)
                                            : i === 123
                                              ? new ph()
                                              : i === 124
                                                ? o() === 61
                                                  ? (l(), new Wv())
                                                  : o() === 124
                                                    ? (l(), new wh())
                                                    : new ge(i)
                                                : i === 125
                                                  ? new gh()
                                                  : i === 126
                                                    ? o() === 61
                                                      ? (l(), new qv())
                                                      : new ge(i)
                                                    : Ce(i)
                                                      ? (a(), d())
                                                      : Fi(i)
                                                        ? (a(), g())
                                                        : u()
                                                          ? new Vi()
                                                          : new ge(i);
      }
    },
    f = function () {
      for (; o(1) === 47 && o(2) === 42; )
        for (l(2); ; )
          if ((l(), i === 42 && o() === 47)) {
            l();
            break;
          } else if (u()) return;
    },
    d = function () {
      const T = b();
      if (v(o(1), o(2), o(3))) {
        const P = new Xv();
        return (
          (P.value = T.value),
          (P.repr = T.repr),
          (P.type = T.type),
          (P.unit = N()),
          P
        );
      } else if (o() === 37) {
        l();
        const P = new Ch();
        return (P.value = T.value), (P.repr = T.repr), P;
      } else {
        const P = new Th();
        return (P.value = T.value), (P.repr = T.repr), (P.type = T.type), P;
      }
    },
    g = function () {
      const T = N();
      if (T.toLowerCase() === "url" && o() === 40) {
        for (l(); ft(o(1)) && ft(o(2)); ) l();
        return o() === 34 || o() === 39
          ? new Bi(T)
          : ft(o()) && (o(2) === 34 || o(2) === 39)
            ? new Bi(T)
            : y();
      } else return o() === 40 ? (l(), new Bi(T)) : new _h(T);
    },
    m = function (T) {
      T === void 0 && (T = i);
      let P = "";
      for (; l(); ) {
        if (i === T || u()) return new Eh(P);
        if (Hi(i)) return a(), new ah();
        i === 92 ? u(o()) || (Hi(o()) ? l() : (P += re(_()))) : (P += re(i));
      }
      throw new Error("Internal error");
    },
    y = function () {
      const T = new kh("");
      for (; ft(o()); ) l();
      if (u(o())) return T;
      for (; l(); ) {
        if (i === 41 || u()) return T;
        if (ft(i)) {
          for (; ft(o()); ) l();
          return o() === 41 || u(o()) ? (l(), T) : (I(), new Ui());
        } else {
          if (i === 34 || i === 39 || i === 40 || Hv(i)) return I(), new Ui();
          if (i === 92)
            if (h()) T.value += re(_());
            else return I(), new Ui();
          else T.value += re(i);
        }
      }
      throw new Error("Internal error");
    },
    _ = function () {
      if ((l(), pc(i))) {
        const T = [i];
        for (let J = 0; J < 5 && pc(o()); J++) l(), T.push(i);
        ft(o()) && l();
        let P = parseInt(
          T.map(function (J) {
            return String.fromCharCode(J);
          }).join(""),
          16,
        );
        return P > Uv && (P = 65533), P;
      } else return u() ? 65533 : i;
    },
    p = function (T, P) {
      return !(T !== 92 || Hi(P));
    },
    h = function () {
      return p(i, o());
    },
    v = function (T, P, J) {
      return T === 45
        ? Fi(P) || P === 45 || p(P, J)
        : Fi(T)
          ? !0
          : T === 92
            ? p(T, P)
            : !1;
    },
    x = function () {
      return v(i, o(1), o(2));
    },
    E = function (T, P, J) {
      return T === 43 || T === 45
        ? !!(Ce(P) || (P === 46 && Ce(J)))
        : T === 46
          ? !!Ce(P)
          : !!Ce(T);
    },
    C = function () {
      return E(i, o(1), o(2));
    },
    N = function () {
      let T = "";
      for (; l(); )
        if (gc(i)) T += re(i);
        else if (h()) T += re(_());
        else return a(), T;
      throw new Error("Internal parse error");
    },
    b = function () {
      let T = "",
        P = "integer";
      for ((o() === 43 || o() === 45) && (l(), (T += re(i))); Ce(o()); )
        l(), (T += re(i));
      if (o(1) === 46 && Ce(o(2)))
        for (l(), T += re(i), l(), T += re(i), P = "number"; Ce(o()); )
          l(), (T += re(i));
      const J = o(1),
        st = o(2),
        er = o(3);
      if ((J === 69 || J === 101) && Ce(st))
        for (l(), T += re(i), l(), T += re(i), P = "number"; Ce(o()); )
          l(), (T += re(i));
      else if ((J === 69 || J === 101) && (st === 43 || st === 45) && Ce(er))
        for (
          l(), T += re(i), l(), T += re(i), l(), T += re(i), P = "number";
          Ce(o());

        )
          l(), (T += re(i));
      const tr = S(T);
      return { type: P, value: tr, repr: T };
    },
    S = function (T) {
      return +T;
    },
    I = function () {
      for (; l(); ) {
        if (i === 41 || u()) return;
        h() && _();
      }
    };
  let O = 0;
  for (; !u(o()); )
    if ((r.push(c()), O++, O > t.length * 2))
      throw new Error("I'm infinite-looping!");
  return r;
}
class ee {
  constructor() {
    this.tokenType = "";
  }
  toJSON() {
    return { token: this.tokenType };
  }
  toString() {
    return this.tokenType;
  }
  toSource() {
    return "" + this;
  }
}
class ah extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "BADSTRING");
  }
}
class Ui extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "BADURL");
  }
}
class Al extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "WHITESPACE");
  }
  toString() {
    return "WS";
  }
  toSource() {
    return " ";
  }
}
class uh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "CDO");
  }
  toSource() {
    return "<!--";
  }
}
class ch extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "CDC");
  }
  toSource() {
    return "-->";
  }
}
class dh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = ":");
  }
}
class fh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = ";");
  }
}
class hh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = ",");
  }
}
class Jn extends ee {
  constructor() {
    super(...arguments), (this.value = ""), (this.mirror = "");
  }
}
class ph extends Jn {
  constructor() {
    super(), (this.tokenType = "{"), (this.value = "{"), (this.mirror = "}");
  }
}
class gh extends Jn {
  constructor() {
    super(), (this.tokenType = "}"), (this.value = "}"), (this.mirror = "{");
  }
}
class mh extends Jn {
  constructor() {
    super(), (this.tokenType = "["), (this.value = "["), (this.mirror = "]");
  }
}
class Ll extends Jn {
  constructor() {
    super(), (this.tokenType = "]"), (this.value = "]"), (this.mirror = "[");
  }
}
class vh extends Jn {
  constructor() {
    super(), (this.tokenType = "("), (this.value = "("), (this.mirror = ")");
  }
}
class yh extends Jn {
  constructor() {
    super(), (this.tokenType = ")"), (this.value = ")"), (this.mirror = "(");
  }
}
class qv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "~=");
  }
}
class Wv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "|=");
  }
}
class Qv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "^=");
  }
}
class Kv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "$=");
  }
}
class Gv extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "*=");
  }
}
class wh extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "||");
  }
}
class Vi extends ee {
  constructor() {
    super(...arguments), (this.tokenType = "EOF");
  }
  toSource() {
    return "";
  }
}
class ge extends ee {
  constructor(t) {
    super(),
      (this.tokenType = "DELIM"),
      (this.value = ""),
      (this.value = re(t));
  }
  toString() {
    return "DELIM(" + this.value + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
  toSource() {
    return this.value === "\\"
      ? `\\
`
      : this.value;
  }
}
class Yn extends ee {
  constructor() {
    super(...arguments), (this.value = "");
  }
  ASCIIMatch(t) {
    return this.value.toLowerCase() === t.toLowerCase();
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
}
class _h extends Yn {
  constructor(t) {
    super(), (this.tokenType = "IDENT"), (this.value = t);
  }
  toString() {
    return "IDENT(" + this.value + ")";
  }
  toSource() {
    return ti(this.value);
  }
}
class Bi extends Yn {
  constructor(t) {
    super(),
      (this.tokenType = "FUNCTION"),
      (this.value = t),
      (this.mirror = ")");
  }
  toString() {
    return "FUNCTION(" + this.value + ")";
  }
  toSource() {
    return ti(this.value) + "(";
  }
}
class xh extends Yn {
  constructor(t) {
    super(), (this.tokenType = "AT-KEYWORD"), (this.value = t);
  }
  toString() {
    return "AT(" + this.value + ")";
  }
  toSource() {
    return "@" + ti(this.value);
  }
}
class Sh extends Yn {
  constructor(t) {
    super(),
      (this.tokenType = "HASH"),
      (this.value = t),
      (this.type = "unrestricted");
  }
  toString() {
    return "HASH(" + this.value + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.type = this.type), t;
  }
  toSource() {
    return this.type === "id" ? "#" + ti(this.value) : "#" + Jv(this.value);
  }
}
class Eh extends Yn {
  constructor(t) {
    super(), (this.tokenType = "STRING"), (this.value = t);
  }
  toString() {
    return '"' + Nh(this.value) + '"';
  }
}
class kh extends Yn {
  constructor(t) {
    super(), (this.tokenType = "URL"), (this.value = t);
  }
  toString() {
    return "URL(" + this.value + ")";
  }
  toSource() {
    return 'url("' + Nh(this.value) + '")';
  }
}
class Th extends ee {
  constructor() {
    super(),
      (this.tokenType = "NUMBER"),
      (this.type = "integer"),
      (this.repr = "");
  }
  toString() {
    return this.type === "integer"
      ? "INT(" + this.value + ")"
      : "NUMBER(" + this.value + ")";
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.value = this.value), (t.type = this.type), (t.repr = this.repr), t
    );
  }
  toSource() {
    return this.repr;
  }
}
class Ch extends ee {
  constructor() {
    super(), (this.tokenType = "PERCENTAGE"), (this.repr = "");
  }
  toString() {
    return "PERCENTAGE(" + this.value + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.repr = this.repr), t;
  }
  toSource() {
    return this.repr + "%";
  }
}
class Xv extends ee {
  constructor() {
    super(),
      (this.tokenType = "DIMENSION"),
      (this.type = "integer"),
      (this.repr = ""),
      (this.unit = "");
  }
  toString() {
    return "DIM(" + this.value + "," + this.unit + ")";
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (
      (t.value = this.value),
      (t.type = this.type),
      (t.repr = this.repr),
      (t.unit = this.unit),
      t
    );
  }
  toSource() {
    const t = this.repr;
    let n = ti(this.unit);
    return (
      n[0].toLowerCase() === "e" &&
        (n[1] === "-" || te(n.charCodeAt(1), 48, 57)) &&
        (n = "\\65 " + n.slice(1, n.length)),
      t + n
    );
  }
}
function ti(e) {
  e = "" + e;
  let t = "";
  const n = e.charCodeAt(0);
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    if (i === 0) throw new Ra("Invalid character: the input contains U+0000.");
    te(i, 1, 31) ||
    i === 127 ||
    (r === 0 && te(i, 48, 57)) ||
    (r === 1 && te(i, 48, 57) && n === 45)
      ? (t += "\\" + i.toString(16) + " ")
      : i >= 128 ||
          i === 45 ||
          i === 95 ||
          te(i, 48, 57) ||
          te(i, 65, 90) ||
          te(i, 97, 122)
        ? (t += e[r])
        : (t += "\\" + e[r]);
  }
  return t;
}
function Jv(e) {
  e = "" + e;
  let t = "";
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Ra("Invalid character: the input contains U+0000.");
    r >= 128 ||
    r === 45 ||
    r === 95 ||
    te(r, 48, 57) ||
    te(r, 65, 90) ||
    te(r, 97, 122)
      ? (t += e[n])
      : (t += "\\" + r.toString(16) + " ");
  }
  return t;
}
function Nh(e) {
  e = "" + e;
  let t = "";
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new Ra("Invalid character: the input contains U+0000.");
    te(r, 1, 31) || r === 127
      ? (t += "\\" + r.toString(16) + " ")
      : r === 34 || r === 92
        ? (t += "\\" + e[n])
        : (t += e[n]);
  }
  return t;
}
class be extends Error {}
function Yv(e, t) {
  let n;
  try {
    (n = Bv(e)), n[n.length - 1] instanceof Vi || n.push(new Vi());
  } catch (S) {
    const I = S.message + ` while parsing selector "${e}"`,
      O = (S.stack || "").indexOf(S.message);
    throw (
      (O !== -1 &&
        (S.stack =
          S.stack.substring(0, O) +
          I +
          S.stack.substring(O + S.message.length)),
      (S.message = I),
      S)
    );
  }
  const r = n.find(
    (S) =>
      S instanceof xh ||
      S instanceof ah ||
      S instanceof Ui ||
      S instanceof wh ||
      S instanceof uh ||
      S instanceof ch ||
      S instanceof fh ||
      S instanceof ph ||
      S instanceof gh ||
      S instanceof kh ||
      S instanceof Ch,
  );
  if (r)
    throw new be(
      `Unsupported token "${r.toSource()}" while parsing selector "${e}"`,
    );
  let i = 0;
  const s = new Set();
  function o() {
    return new be(
      `Unexpected token "${n[i].toSource()}" while parsing selector "${e}"`,
    );
  }
  function l() {
    for (; n[i] instanceof Al; ) i++;
  }
  function a(S = i) {
    return n[S] instanceof _h;
  }
  function u(S = i) {
    return n[S] instanceof Eh;
  }
  function c(S = i) {
    return n[S] instanceof Th;
  }
  function f(S = i) {
    return n[S] instanceof hh;
  }
  function d(S = i) {
    return n[S] instanceof vh;
  }
  function g(S = i) {
    return n[S] instanceof yh;
  }
  function m(S = i) {
    return n[S] instanceof Bi;
  }
  function y(S = i) {
    return n[S] instanceof ge && n[S].value === "*";
  }
  function _(S = i) {
    return n[S] instanceof Vi;
  }
  function p(S = i) {
    return n[S] instanceof ge && [">", "+", "~"].includes(n[S].value);
  }
  function h(S = i) {
    return f(S) || g(S) || _(S) || p(S) || n[S] instanceof Al;
  }
  function v() {
    const S = [x()];
    for (; l(), !!f(); ) i++, S.push(x());
    return S;
  }
  function x() {
    return l(), c() || u() ? n[i++].value : E();
  }
  function E() {
    const S = { simples: [] };
    for (
      l(),
        p()
          ? S.simples.push({
              selector: { functions: [{ name: "scope", args: [] }] },
              combinator: "",
            })
          : S.simples.push({ selector: C(), combinator: "" });
      ;

    ) {
      if ((l(), p()))
        (S.simples[S.simples.length - 1].combinator = n[i++].value), l();
      else if (h()) break;
      S.simples.push({ combinator: "", selector: C() });
    }
    return S;
  }
  function C() {
    let S = "";
    const I = [];
    for (; !h(); )
      if (a() || y()) S += n[i++].toSource();
      else if (n[i] instanceof Sh) S += n[i++].toSource();
      else if (n[i] instanceof ge && n[i].value === ".")
        if ((i++, a())) S += "." + n[i++].toSource();
        else throw o();
      else if (n[i] instanceof dh)
        if ((i++, a()))
          if (!t.has(n[i].value.toLowerCase())) S += ":" + n[i++].toSource();
          else {
            const O = n[i++].value.toLowerCase();
            I.push({ name: O, args: [] }), s.add(O);
          }
        else if (m()) {
          const O = n[i++].value.toLowerCase();
          if (
            (t.has(O)
              ? (I.push({ name: O, args: v() }), s.add(O))
              : (S += `:${O}(${N()})`),
            l(),
            !g())
          )
            throw o();
          i++;
        } else throw o();
      else if (n[i] instanceof mh) {
        for (S += "[", i++; !(n[i] instanceof Ll) && !_(); )
          S += n[i++].toSource();
        if (!(n[i] instanceof Ll)) throw o();
        (S += "]"), i++;
      } else throw o();
    if (!S && !I.length) throw o();
    return { css: S || void 0, functions: I };
  }
  function N() {
    let S = "",
      I = 1;
    for (; !_() && ((d() || m()) && I++, g() && I--, !!I); )
      S += n[i++].toSource();
    return S;
  }
  const b = v();
  if (!_()) throw o();
  if (b.some((S) => typeof S != "object" || !("simples" in S)))
    throw new be(`Error while parsing selector "${e}"`);
  return { selector: b, names: Array.from(s) };
}
const Il = new Set([
    "internal:has",
    "internal:has-not",
    "internal:and",
    "internal:or",
    "internal:chain",
    "left-of",
    "right-of",
    "above",
    "below",
    "near",
  ]),
  Zv = new Set(["left-of", "right-of", "above", "below", "near"]),
  bh = new Set([
    "not",
    "is",
    "where",
    "has",
    "scope",
    "light",
    "visible",
    "text",
    "text-matches",
    "text-is",
    "has-text",
    "above",
    "below",
    "right-of",
    "left-of",
    "near",
    "nth-match",
  ]);
function Us(e) {
  const t = n0(e),
    n = [];
  for (const r of t.parts) {
    if (r.name === "css" || r.name === "css:light") {
      r.name === "css:light" && (r.body = ":light(" + r.body + ")");
      const i = Yv(r.body, bh);
      n.push({ name: "css", body: i.selector, source: r.body });
      continue;
    }
    if (Il.has(r.name)) {
      let i, s;
      try {
        const u = JSON.parse("[" + r.body + "]");
        if (
          !Array.isArray(u) ||
          u.length < 1 ||
          u.length > 2 ||
          typeof u[0] != "string"
        )
          throw new be(`Malformed selector: ${r.name}=` + r.body);
        if (((i = u[0]), u.length === 2)) {
          if (typeof u[1] != "number" || !Zv.has(r.name))
            throw new be(`Malformed selector: ${r.name}=` + r.body);
          s = u[1];
        }
      } catch {
        throw new be(`Malformed selector: ${r.name}=` + r.body);
      }
      const o = {
          name: r.name,
          source: r.body,
          body: { parsed: Us(i), distance: s },
        },
        l = [...o.body.parsed.parts]
          .reverse()
          .find(
            (u) => u.name === "internal:control" && u.body === "enter-frame",
          ),
        a = l ? o.body.parsed.parts.indexOf(l) : -1;
      a !== -1 &&
        e0(o.body.parsed.parts.slice(0, a + 1), n.slice(0, a + 1)) &&
        o.body.parsed.parts.splice(0, a + 1),
        n.push(o);
      continue;
    }
    n.push({ ...r, source: r.body });
  }
  if (Il.has(n[0].name))
    throw new be(`"${n[0].name}" selector cannot be first`);
  return { capture: t.capture, parts: n };
}
function e0(e, t) {
  return yt({ parts: e }) === yt({ parts: t });
}
function yt(e, t) {
  return typeof e == "string"
    ? e
    : e.parts
        .map((n, r) => {
          let i = !0;
          !t &&
            r !== e.capture &&
            (n.name === "css" ||
              (n.name === "xpath" && n.source.startsWith("//")) ||
              n.source.startsWith("..")) &&
            (i = !1);
          const s = i ? n.name + "=" : "";
          return `${r === e.capture ? "*" : ""}${s}${n.source}`;
        })
        .join(" >> ");
}
function t0(e, t) {
  const n = (r, i) => {
    for (const s of r.parts) t(s, i), Il.has(s.name) && n(s.body.parsed, !0);
  };
  n(e, !1);
}
function n0(e) {
  let t = 0,
    n,
    r = 0;
  const i = { parts: [] },
    s = () => {
      const l = e.substring(r, t).trim(),
        a = l.indexOf("=");
      let u, c;
      a !== -1 &&
      l
        .substring(0, a)
        .trim()
        .match(/^[a-zA-Z_0-9-+:*]+$/)
        ? ((u = l.substring(0, a).trim()), (c = l.substring(a + 1)))
        : (l.length > 1 && l[0] === '"' && l[l.length - 1] === '"') ||
            (l.length > 1 && l[0] === "'" && l[l.length - 1] === "'")
          ? ((u = "text"), (c = l))
          : /^\(*\/\//.test(l) || l.startsWith("..")
            ? ((u = "xpath"), (c = l))
            : ((u = "css"), (c = l));
      let f = !1;
      if (
        (u[0] === "*" && ((f = !0), (u = u.substring(1))),
        i.parts.push({ name: u, body: c }),
        f)
      ) {
        if (i.capture !== void 0)
          throw new be(
            "Only one of the selectors can capture using * modifier",
          );
        i.capture = i.parts.length - 1;
      }
    };
  if (!e.includes(">>")) return (t = e.length), s(), i;
  const o = () => {
    const a = e.substring(r, t).match(/^\s*text\s*=(.*)$/);
    return !!a && !!a[1];
  };
  for (; t < e.length; ) {
    const l = e[t];
    l === "\\" && t + 1 < e.length
      ? (t += 2)
      : l === n
        ? ((n = void 0), t++)
        : !n && (l === '"' || l === "'" || l === "`") && !o()
          ? ((n = l), t++)
          : !n && l === ">" && e[t + 1] === ">"
            ? (s(), (t += 2), (r = t))
            : t++;
  }
  return s(), i;
}
function on(e, t) {
  let n = 0,
    r = e.length === 0;
  const i = () => e[n] || "",
    s = () => {
      const _ = i();
      return ++n, (r = n >= e.length), _;
    },
    o = (_) => {
      throw r
        ? new be(`Unexpected end of selector while parsing selector \`${e}\``)
        : new be(
            `Error while parsing selector \`${e}\` - unexpected symbol "${i()}" at position ${n}` +
              (_ ? " during " + _ : ""),
          );
    };
  function l() {
    for (; !r && /\s/.test(i()); ) s();
  }
  function a(_) {
    return (
      _ >= "" ||
      (_ >= "0" && _ <= "9") ||
      (_ >= "A" && _ <= "Z") ||
      (_ >= "a" && _ <= "z") ||
      (_ >= "0" && _ <= "9") ||
      _ === "_" ||
      _ === "-"
    );
  }
  function u() {
    let _ = "";
    for (l(); !r && a(i()); ) _ += s();
    return _;
  }
  function c(_) {
    let p = s();
    for (p !== _ && o("parsing quoted string"); !r && i() !== _; )
      i() === "\\" && s(), (p += s());
    return i() !== _ && o("parsing quoted string"), (p += s()), p;
  }
  function f() {
    s() !== "/" && o("parsing regular expression");
    let _ = "",
      p = !1;
    for (; !r; ) {
      if (i() === "\\") (_ += s()), r && o("parsing regular expression");
      else if (p && i() === "]") p = !1;
      else if (!p && i() === "[") p = !0;
      else if (!p && i() === "/") break;
      _ += s();
    }
    s() !== "/" && o("parsing regular expression");
    let h = "";
    for (; !r && i().match(/[dgimsuy]/); ) h += s();
    try {
      return new RegExp(_, h);
    } catch (v) {
      throw new be(`Error while parsing selector \`${e}\`: ${v.message}`);
    }
  }
  function d() {
    let _ = "";
    return (
      l(),
      i() === "'" || i() === '"' ? (_ = c(i()).slice(1, -1)) : (_ = u()),
      _ || o("parsing property path"),
      _
    );
  }
  function g() {
    l();
    let _ = "";
    return (
      r || (_ += s()),
      !r && _ !== "=" && (_ += s()),
      ["=", "*=", "^=", "$=", "|=", "~="].includes(_) || o("parsing operator"),
      _
    );
  }
  function m() {
    s();
    const _ = [];
    for (_.push(d()), l(); i() === "."; ) s(), _.push(d()), l();
    if (i() === "]")
      return (
        s(),
        {
          name: _.join("."),
          jsonPath: _,
          op: "<truthy>",
          value: null,
          caseSensitive: !1,
        }
      );
    const p = g();
    let h,
      v = !0;
    if ((l(), i() === "/")) {
      if (p !== "=")
        throw new be(
          `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with regular expression`,
        );
      h = f();
    } else if (i() === "'" || i() === '"')
      (h = c(i()).slice(1, -1)),
        l(),
        i() === "i" || i() === "I"
          ? ((v = !1), s())
          : (i() === "s" || i() === "S") && ((v = !0), s());
    else {
      for (h = ""; !r && (a(i()) || i() === "+" || i() === "."); ) h += s();
      h === "true"
        ? (h = !0)
        : h === "false"
          ? (h = !1)
          : t || ((h = +h), Number.isNaN(h) && o("parsing attribute value"));
    }
    if (
      (l(),
      i() !== "]" && o("parsing attribute value"),
      s(),
      p !== "=" && typeof h != "string")
    )
      throw new be(
        `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with non-string matching value - ${h}`,
      );
    return {
      name: _.join("."),
      jsonPath: _,
      op: p,
      value: h,
      caseSensitive: v,
    };
  }
  const y = { name: "", attributes: [] };
  for (y.name = u(), l(); i() === "["; ) y.attributes.push(m()), l();
  if ((r || o(void 0), !y.name && !y.attributes.length))
    throw new be(
      `Error while parsing selector \`${e}\` - selector cannot be empty`,
    );
  return y;
}
function Fn(e, t, n = !1) {
  return Ah(e, t, n)[0];
}
function Ah(e, t, n = !1, r = 20, i) {
  try {
    return _n(new u0[e](i), Us(t), n, r);
  } catch {
    return [t];
  }
}
function _n(e, t, n = !1, r = 20) {
  const i = [...t.parts],
    s = [];
  let o = n ? "frame-locator" : "page";
  for (let l = 0; l < i.length; l++) {
    const a = i[l],
      u = o;
    if (((o = "locator"), a.name === "nth")) {
      a.body === "0"
        ? s.push([
            e.generateLocator(u, "first", ""),
            e.generateLocator(u, "nth", "0"),
          ])
        : a.body === "-1"
          ? s.push([
              e.generateLocator(u, "last", ""),
              e.generateLocator(u, "nth", "-1"),
            ])
          : s.push([e.generateLocator(u, "nth", a.body)]);
      continue;
    }
    if (a.name === "internal:text") {
      const { exact: m, text: y } = dr(a.body);
      s.push([e.generateLocator(u, "text", y, { exact: m })]);
      continue;
    }
    if (a.name === "internal:has-text") {
      const { exact: m, text: y } = dr(a.body);
      if (!m) {
        s.push([e.generateLocator(u, "has-text", y, { exact: m })]);
        continue;
      }
    }
    if (a.name === "internal:has-not-text") {
      const { exact: m, text: y } = dr(a.body);
      if (!m) {
        s.push([e.generateLocator(u, "has-not-text", y, { exact: m })]);
        continue;
      }
    }
    if (a.name === "internal:has") {
      const m = _n(e, a.body.parsed, !1, r);
      s.push(m.map((y) => e.generateLocator(u, "has", y)));
      continue;
    }
    if (a.name === "internal:has-not") {
      const m = _n(e, a.body.parsed, !1, r);
      s.push(m.map((y) => e.generateLocator(u, "hasNot", y)));
      continue;
    }
    if (a.name === "internal:and") {
      const m = _n(e, a.body.parsed, !1, r);
      s.push(m.map((y) => e.generateLocator(u, "and", y)));
      continue;
    }
    if (a.name === "internal:or") {
      const m = _n(e, a.body.parsed, !1, r);
      s.push(m.map((y) => e.generateLocator(u, "or", y)));
      continue;
    }
    if (a.name === "internal:chain") {
      const m = _n(e, a.body.parsed, !1, r);
      s.push(m.map((y) => e.generateLocator(u, "chain", y)));
      continue;
    }
    if (a.name === "internal:label") {
      const { exact: m, text: y } = dr(a.body);
      s.push([e.generateLocator(u, "label", y, { exact: m })]);
      continue;
    }
    if (a.name === "internal:role") {
      const m = on(a.body, !0),
        y = { attrs: [] };
      for (const _ of m.attributes)
        _.name === "name"
          ? ((y.exact = _.caseSensitive), (y.name = _.value))
          : (_.name === "level" &&
              typeof _.value == "string" &&
              (_.value = +_.value),
            y.attrs.push({
              name: _.name === "include-hidden" ? "includeHidden" : _.name,
              value: _.value,
            }));
      s.push([e.generateLocator(u, "role", m.name, y)]);
      continue;
    }
    if (a.name === "internal:testid") {
      const m = on(a.body, !0),
        { value: y } = m.attributes[0];
      s.push([e.generateLocator(u, "test-id", y)]);
      continue;
    }
    if (a.name === "internal:attr") {
      const m = on(a.body, !0),
        { name: y, value: _, caseSensitive: p } = m.attributes[0],
        h = _,
        v = !!p;
      if (y === "placeholder") {
        s.push([e.generateLocator(u, "placeholder", h, { exact: v })]);
        continue;
      }
      if (y === "alt") {
        s.push([e.generateLocator(u, "alt", h, { exact: v })]);
        continue;
      }
      if (y === "title") {
        s.push([e.generateLocator(u, "title", h, { exact: v })]);
        continue;
      }
    }
    if (a.name === "internal:control" && a.body === "enter-frame") {
      const m = s[s.length - 1],
        y = i[l - 1],
        _ = m.map((p) =>
          e.chainLocators([p, e.generateLocator(u, "frame", "")]),
        );
      ["xpath", "css"].includes(y.name) &&
        _.push(
          e.generateLocator(u, "frame-locator", yt({ parts: [y] })),
          e.generateLocator(u, "frame-locator", yt({ parts: [y] }, !0)),
        ),
        m.splice(0, m.length, ..._),
        (o = "frame-locator");
      continue;
    }
    const c = i[l + 1],
      f = yt({ parts: [a] }),
      d = e.generateLocator(u, "default", f);
    if (c && ["internal:has-text", "internal:has-not-text"].includes(c.name)) {
      const { exact: m, text: y } = dr(c.body);
      if (!m) {
        const _ = e.generateLocator(
            "locator",
            c.name === "internal:has-text" ? "has-text" : "has-not-text",
            y,
            { exact: m },
          ),
          p = {};
        c.name === "internal:has-text" ? (p.hasText = y) : (p.hasNotText = y);
        const h = e.generateLocator(u, "default", f, p);
        s.push([e.chainLocators([d, _]), h]), l++;
        continue;
      }
    }
    let g;
    if (["xpath", "css"].includes(a.name)) {
      const m = yt({ parts: [a] }, !0);
      g = e.generateLocator(u, "default", m);
    }
    s.push([d, g].filter(Boolean));
  }
  return r0(e, s, r);
}
function r0(e, t, n) {
  const r = t.map(() => ""),
    i = [],
    s = (o) => {
      if (o === t.length) return i.push(e.chainLocators(r)), r.length < n;
      for (const l of t[o]) if (((r[o] = l), !s(o + 1))) return !1;
      return !0;
    };
  return s(0), i;
}
function dr(e) {
  let t = !1;
  const n = e.match(/^\/(.*)\/([igm]*)$/);
  return n
    ? { text: new RegExp(n[1], n[2]) }
    : (e.endsWith('"')
        ? ((e = JSON.parse(e)), (t = !0))
        : e.endsWith('"s')
          ? ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !0))
          : e.endsWith('"i') &&
            ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !1)),
      { exact: t, text: e });
}
class i0 {
  constructor(t) {
    this.preferredQuote = t;
  }
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, { hasText: ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, { hasNotText: ${this.toHasText(i.hasNotText)} })`
            : `locator(${this.quote(r)})`;
      case "frame-locator":
        return `frameLocator(${this.quote(r)})`;
      case "frame":
        return "contentFrame()";
      case "nth":
        return `nth(${r})`;
      case "first":
        return "first()";
      case "last":
        return "last()";
      case "role":
        const s = [];
        ce(i.name)
          ? s.push(`name: ${this.regexToSourceString(i.name)}`)
          : typeof i.name == "string" &&
            (s.push(`name: ${this.quote(i.name)}`),
            i.exact && s.push("exact: true"));
        for (const { name: l, value: a } of i.attrs)
          s.push(`${l}: ${typeof a == "string" ? this.quote(a) : a}`);
        const o = s.length ? `, { ${s.join(", ")} }` : "";
        return `getByRole(${this.quote(r)}${o})`;
      case "has-text":
        return `filter({ hasText: ${this.toHasText(r)} })`;
      case "has-not-text":
        return `filter({ hasNotText: ${this.toHasText(r)} })`;
      case "has":
        return `filter({ has: ${r} })`;
      case "hasNot":
        return `filter({ hasNot: ${r} })`;
      case "and":
        return `and(${r})`;
      case "or":
        return `or(${r})`;
      case "chain":
        return `locator(${r})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact("getByText", r, !!i.exact);
      case "alt":
        return this.toCallWithExact("getByAltText", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact("getByPlaceholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact("getByLabel", r, !!i.exact);
      case "title":
        return this.toCallWithExact("getByTitle", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToSourceString(t) {
    return Hs(String(t));
  }
  toCallWithExact(t, n, r) {
    return ce(n)
      ? `${t}(${this.regexToSourceString(n)})`
      : r
        ? `${t}(${this.quote(n)}, { exact: true })`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return ce(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToSourceString(t) : this.quote(t);
  }
  quote(t) {
    return Fs(t, this.preferredQuote ?? "'");
  }
}
class s0 {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, has_text=${this.toHasText(i.hasText)})`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, has_not_text=${this.toHasText(i.hasNotText)})`
            : `locator(${this.quote(r)})`;
      case "frame-locator":
        return `frame_locator(${this.quote(r)})`;
      case "frame":
        return "content_frame";
      case "nth":
        return `nth(${r})`;
      case "first":
        return "first";
      case "last":
        return "last";
      case "role":
        const s = [];
        ce(i.name)
          ? s.push(`name=${this.regexToString(i.name)}`)
          : typeof i.name == "string" &&
            (s.push(`name=${this.quote(i.name)}`),
            i.exact && s.push("exact=True"));
        for (const { name: l, value: a } of i.attrs) {
          let u = typeof a == "string" ? this.quote(a) : a;
          typeof a == "boolean" && (u = a ? "True" : "False"),
            s.push(`${oh(l)}=${u}`);
        }
        const o = s.length ? `, ${s.join(", ")}` : "";
        return `get_by_role(${this.quote(r)}${o})`;
      case "has-text":
        return `filter(has_text=${this.toHasText(r)})`;
      case "has-not-text":
        return `filter(has_not_text=${this.toHasText(r)})`;
      case "has":
        return `filter(has=${r})`;
      case "hasNot":
        return `filter(has_not=${r})`;
      case "and":
        return `and_(${r})`;
      case "or":
        return `or_(${r})`;
      case "chain":
        return `locator(${r})`;
      case "test-id":
        return `get_by_test_id(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact("get_by_text", r, !!i.exact);
      case "alt":
        return this.toCallWithExact("get_by_alt_text", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact("get_by_placeholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact("get_by_label", r, !!i.exact);
      case "title":
        return this.toCallWithExact("get_by_title", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToString(t) {
    const n = t.flags.includes("i") ? ", re.IGNORECASE" : "";
    return `re.compile(r"${Hs(t.source).replace(/\\\//, "/").replace(/"/g, '\\"')}"${n})`;
  }
  toCallWithExact(t, n, r) {
    return ce(n)
      ? `${t}(${this.regexToString(n)})`
      : r
        ? `${t}(${this.quote(n)}, exact=True)`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return ce(t) ? this.regexToString(t) : `${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return Fs(t, '"');
  }
}
class o0 {
  generateLocator(t, n, r, i = {}) {
    let s;
    switch (t) {
      case "page":
        s = "Page";
        break;
      case "frame-locator":
        s = "FrameLocator";
        break;
      case "locator":
        s = "Locator";
        break;
    }
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `locator(${this.quote(r)}, new ${s}.LocatorOptions().setHasText(${this.toHasText(i.hasText)}))`
          : i.hasNotText !== void 0
            ? `locator(${this.quote(r)}, new ${s}.LocatorOptions().setHasNotText(${this.toHasText(i.hasNotText)}))`
            : `locator(${this.quote(r)})`;
      case "frame-locator":
        return `frameLocator(${this.quote(r)})`;
      case "frame":
        return "contentFrame()";
      case "nth":
        return `nth(${r})`;
      case "first":
        return "first()";
      case "last":
        return "last()";
      case "role":
        const o = [];
        ce(i.name)
          ? o.push(`.setName(${this.regexToString(i.name)})`)
          : typeof i.name == "string" &&
            (o.push(`.setName(${this.quote(i.name)})`),
            i.exact && o.push(".setExact(true)"));
        for (const { name: a, value: u } of i.attrs)
          o.push(`.set${ys(a)}(${typeof u == "string" ? this.quote(u) : u})`);
        const l = o.length ? `, new ${s}.GetByRoleOptions()${o.join("")}` : "";
        return `getByRole(AriaRole.${oh(r).toUpperCase()}${l})`;
      case "has-text":
        return `filter(new ${s}.FilterOptions().setHasText(${this.toHasText(r)}))`;
      case "has-not-text":
        return `filter(new ${s}.FilterOptions().setHasNotText(${this.toHasText(r)}))`;
      case "has":
        return `filter(new ${s}.FilterOptions().setHas(${r}))`;
      case "hasNot":
        return `filter(new ${s}.FilterOptions().setHasNot(${r}))`;
      case "and":
        return `and(${r})`;
      case "or":
        return `or(${r})`;
      case "chain":
        return `locator(${r})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact(s, "getByText", r, !!i.exact);
      case "alt":
        return this.toCallWithExact(s, "getByAltText", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact(s, "getByPlaceholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact(s, "getByLabel", r, !!i.exact);
      case "title":
        return this.toCallWithExact(s, "getByTitle", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToString(t) {
    const n = t.flags.includes("i") ? ", Pattern.CASE_INSENSITIVE" : "";
    return `Pattern.compile(${this.quote(Hs(t.source))}${n})`;
  }
  toCallWithExact(t, n, r, i) {
    return ce(r)
      ? `${n}(${this.regexToString(r)})`
      : i
        ? `${n}(${this.quote(r)}, new ${t}.${ys(n)}Options().setExact(true))`
        : `${n}(${this.quote(r)})`;
  }
  toHasText(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return Fs(t, '"');
  }
}
class l0 {
  generateLocator(t, n, r, i = {}) {
    switch (n) {
      case "default":
        return i.hasText !== void 0
          ? `Locator(${this.quote(r)}, new() { ${this.toHasText(i.hasText)} })`
          : i.hasNotText !== void 0
            ? `Locator(${this.quote(r)}, new() { ${this.toHasNotText(i.hasNotText)} })`
            : `Locator(${this.quote(r)})`;
      case "frame-locator":
        return `FrameLocator(${this.quote(r)})`;
      case "frame":
        return "ContentFrame";
      case "nth":
        return `Nth(${r})`;
      case "first":
        return "First";
      case "last":
        return "Last";
      case "role":
        const s = [];
        ce(i.name)
          ? s.push(`NameRegex = ${this.regexToString(i.name)}`)
          : typeof i.name == "string" &&
            (s.push(`Name = ${this.quote(i.name)}`),
            i.exact && s.push("Exact = true"));
        for (const { name: l, value: a } of i.attrs)
          s.push(`${ys(l)} = ${typeof a == "string" ? this.quote(a) : a}`);
        const o = s.length ? `, new() { ${s.join(", ")} }` : "";
        return `GetByRole(AriaRole.${ys(r)}${o})`;
      case "has-text":
        return `Filter(new() { ${this.toHasText(r)} })`;
      case "has-not-text":
        return `Filter(new() { ${this.toHasNotText(r)} })`;
      case "has":
        return `Filter(new() { Has = ${r} })`;
      case "hasNot":
        return `Filter(new() { HasNot = ${r} })`;
      case "and":
        return `And(${r})`;
      case "or":
        return `Or(${r})`;
      case "chain":
        return `Locator(${r})`;
      case "test-id":
        return `GetByTestId(${this.toTestIdValue(r)})`;
      case "text":
        return this.toCallWithExact("GetByText", r, !!i.exact);
      case "alt":
        return this.toCallWithExact("GetByAltText", r, !!i.exact);
      case "placeholder":
        return this.toCallWithExact("GetByPlaceholder", r, !!i.exact);
      case "label":
        return this.toCallWithExact("GetByLabel", r, !!i.exact);
      case "title":
        return this.toCallWithExact("GetByTitle", r, !!i.exact);
      default:
        throw new Error("Unknown selector kind " + n);
    }
  }
  chainLocators(t) {
    return t.join(".");
  }
  regexToString(t) {
    const n = t.flags.includes("i") ? ", RegexOptions.IgnoreCase" : "";
    return `new Regex(${this.quote(Hs(t.source))}${n})`;
  }
  toCallWithExact(t, n, r) {
    return ce(n)
      ? `${t}(${this.regexToString(n)})`
      : r
        ? `${t}(${this.quote(n)}, new() { Exact = true })`
        : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return ce(t)
      ? `HasTextRegex = ${this.regexToString(t)}`
      : `HasText = ${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return ce(t) ? this.regexToString(t) : this.quote(t);
  }
  toHasNotText(t) {
    return ce(t)
      ? `HasNotTextRegex = ${this.regexToString(t)}`
      : `HasNotText = ${this.quote(t)}`;
  }
  quote(t) {
    return Fs(t, '"');
  }
}
class a0 {
  generateLocator(t, n, r, i = {}) {
    return JSON.stringify({ kind: n, body: r, options: i });
  }
  chainLocators(t) {
    const n = t.map((r) => JSON.parse(r));
    for (let r = 0; r < n.length - 1; ++r) n[r].next = n[r + 1];
    return JSON.stringify(n[0]);
  }
}
const u0 = { javascript: i0, python: s0, java: o0, csharp: l0, jsonl: a0 };
function ce(e) {
  return e instanceof RegExp;
}
const c0 = ({ value: e, description: t }) => {
    const [n, r] = M.useState("copy"),
      i = M.useCallback(() => {
        (typeof e == "function" ? e() : Promise.resolve(e)).then(
          (o) => {
            navigator.clipboard.writeText(o).then(
              () => {
                r("check"),
                  setTimeout(() => {
                    r("copy");
                  }, 3e3);
              },
              () => {
                r("close");
              },
            );
          },
          () => {
            r("close");
          },
        );
      }, [e]);
    return w.jsx(fn, { title: t || "Copy", icon: n, onClick: i });
  },
  mc = ({ value: e, description: t }) => {
    const n = M.useCallback(async () => {
      const r = typeof e == "function" ? await e() : e;
      await navigator.clipboard.writeText(r);
    }, [e]);
    return w.jsx(fn, {
      title: t,
      onClick: n,
      className: "copy-to-clipboard-text-button",
      children: t,
    });
  },
  Lh = ({ text: e }) =>
    w.jsx("div", {
      className: "fill",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: "bold",
        opacity: 0.5,
      },
      children: e,
    }),
  vc = new Map();
function $a({
  name: e,
  items: t = [],
  id: n,
  render: r,
  icon: i,
  isError: s,
  isWarning: o,
  isInfo: l,
  selectedItem: a,
  onAccepted: u,
  onSelected: c,
  onHighlighted: f,
  onIconClicked: d,
  noItemsMessage: g,
  dataTestId: m,
  notSelectable: y,
}) {
  const _ = M.useRef(null),
    [p, h] = M.useState();
  return (
    M.useEffect(() => {
      f == null || f(p);
    }, [f, p]),
    M.useEffect(() => {
      const v = _.current;
      if (!v) return;
      const x = () => {
        vc.set(e, v.scrollTop);
      };
      return (
        v.addEventListener("scroll", x, { passive: !0 }),
        () => v.removeEventListener("scroll", x)
      );
    }, [e]),
    M.useEffect(() => {
      _.current && (_.current.scrollTop = vc.get(e) || 0);
    }, [e]),
    w.jsx("div", {
      className: tt("list-view vbox", e + "-list-view"),
      role: t.length > 0 ? "list" : void 0,
      "data-testid": m || e + "-list",
      children: w.jsxs("div", {
        className: tt("list-view-content", y && "not-selectable"),
        tabIndex: 0,
        onKeyDown: (v) => {
          var N;
          if (a && v.key === "Enter") {
            u == null || u(a, t.indexOf(a));
            return;
          }
          if (v.key !== "ArrowDown" && v.key !== "ArrowUp") return;
          v.stopPropagation(), v.preventDefault();
          const x = a ? t.indexOf(a) : -1;
          let E = x;
          v.key === "ArrowDown" &&
            (x === -1 ? (E = 0) : (E = Math.min(x + 1, t.length - 1))),
            v.key === "ArrowUp" &&
              (x === -1 ? (E = t.length - 1) : (E = Math.max(x - 1, 0)));
          const C = (N = _.current) == null ? void 0 : N.children.item(E);
          pg(C || void 0),
            f == null || f(void 0),
            c == null || c(t[E], E),
            h(void 0);
        },
        ref: _,
        children: [
          g &&
            t.length === 0 &&
            w.jsx("div", { className: "list-view-empty", children: g }),
          t.map((v, x) => {
            const E = r(v, x);
            return w.jsxs(
              "div",
              {
                onDoubleClick: () => (u == null ? void 0 : u(v, x)),
                role: "listitem",
                className: tt(
                  "list-view-entry",
                  a === v && "selected",
                  !y && p === v && "highlighted",
                  (s == null ? void 0 : s(v, x)) && "error",
                  (o == null ? void 0 : o(v, x)) && "warning",
                  (l == null ? void 0 : l(v, x)) && "info",
                ),
                onClick: () => (c == null ? void 0 : c(v, x)),
                onMouseEnter: () => h(v),
                onMouseLeave: () => h(void 0),
                children: [
                  i &&
                    w.jsx("div", {
                      className: "codicon " + (i(v, x) || "codicon-blank"),
                      style: { minWidth: 16, marginRight: 4 },
                      onDoubleClick: (C) => {
                        C.preventDefault(), C.stopPropagation();
                      },
                      onClick: (C) => {
                        C.stopPropagation(),
                          C.preventDefault(),
                          d == null || d(v, x);
                      },
                    }),
                  typeof E == "string"
                    ? w.jsx("div", {
                        style: { textOverflow: "ellipsis", overflow: "hidden" },
                        children: E,
                      })
                    : E,
                ],
              },
              (n == null ? void 0 : n(v, x)) || x,
            );
          }),
        ],
      }),
    })
  );
}
function ws(e, t) {
  const n = /(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g,
    r = [];
  let i,
    s = {},
    o = !1,
    l = t == null ? void 0 : t.fg,
    a = t == null ? void 0 : t.bg;
  for (; (i = n.exec(e)) !== null; ) {
    const [, , u, , c] = i;
    if (u) {
      const f = +u;
      switch (f) {
        case 0:
          s = {};
          break;
        case 1:
          s["font-weight"] = "bold";
          break;
        case 2:
          s.opacity = "0.8";
          break;
        case 3:
          s["font-style"] = "italic";
          break;
        case 4:
          s["text-decoration"] = "underline";
          break;
        case 7:
          o = !0;
          break;
        case 8:
          s.display = "none";
          break;
        case 9:
          s["text-decoration"] = "line-through";
          break;
        case 22:
          delete s["font-weight"],
            delete s["font-style"],
            delete s.opacity,
            delete s["text-decoration"];
          break;
        case 23:
          delete s["font-weight"], delete s["font-style"], delete s.opacity;
          break;
        case 24:
          delete s["text-decoration"];
          break;
        case 27:
          o = !1;
          break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
          l = yc[f - 30];
          break;
        case 39:
          l = t == null ? void 0 : t.fg;
          break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          a = yc[f - 40];
          break;
        case 49:
          a = t == null ? void 0 : t.bg;
          break;
        case 53:
          s["text-decoration"] = "overline";
          break;
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
          l = wc[f - 90];
          break;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
          a = wc[f - 100];
          break;
      }
    } else if (c) {
      const f = { ...s },
        d = o ? a : l;
      d !== void 0 && (f.color = d);
      const g = o ? l : a;
      g !== void 0 && (f["background-color"] = g),
        r.push(`<span style="${f0(f)}">${d0(c)}</span>`);
    }
  }
  return r.join("");
}
const yc = {
    0: "var(--vscode-terminal-ansiBlack)",
    1: "var(--vscode-terminal-ansiRed)",
    2: "var(--vscode-terminal-ansiGreen)",
    3: "var(--vscode-terminal-ansiYellow)",
    4: "var(--vscode-terminal-ansiBlue)",
    5: "var(--vscode-terminal-ansiMagenta)",
    6: "var(--vscode-terminal-ansiCyan)",
    7: "var(--vscode-terminal-ansiWhite)",
  },
  wc = {
    0: "var(--vscode-terminal-ansiBrightBlack)",
    1: "var(--vscode-terminal-ansiBrightRed)",
    2: "var(--vscode-terminal-ansiBrightGreen)",
    3: "var(--vscode-terminal-ansiBrightYellow)",
    4: "var(--vscode-terminal-ansiBrightBlue)",
    5: "var(--vscode-terminal-ansiBrightMagenta)",
    6: "var(--vscode-terminal-ansiBrightCyan)",
    7: "var(--vscode-terminal-ansiBrightWhite)",
  };
function d0(e) {
  return e.replace(
    /[&"<>]/g,
    (t) => ({ "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" })[t],
  );
}
function f0(e) {
  return Object.entries(e)
    .map(([t, n]) => `${t}: ${n}`)
    .join("; ");
}
const h0 = $a;
function fw(e, t) {
  const { entries: n } = M.useMemo(() => {
    if (!e) return { entries: [] };
    const i = [];
    for (const s of e.events) {
      if (s.type === "console") {
        const o = s.args && s.args.length ? p0(s.args) : Ih(s.text),
          l = s.location.url,
          u = `${l ? l.substring(l.lastIndexOf("/") + 1) : "<anonymous>"}:${s.location.lineNumber}`;
        i.push({
          browserMessage: { body: o, location: u },
          isError: s.messageType === "error",
          isWarning: s.messageType === "warning",
          timestamp: s.time,
        });
      }
      s.type === "event" &&
        s.method === "pageError" &&
        i.push({
          browserError: s.params.error,
          isError: !0,
          isWarning: !1,
          timestamp: s.time,
        });
    }
    for (const s of e.stdio) {
      let o = "";
      s.text && (o = ws(s.text.trim()) || ""),
        s.base64 && (o = ws(atob(s.base64).trim()) || ""),
        i.push({
          nodeMessage: { html: o },
          isError: s.type === "stderr",
          isWarning: !1,
          timestamp: s.timestamp,
        });
    }
    return i.sort((s, o) => s.timestamp - o.timestamp), { entries: i };
  }, [e]);
  return {
    entries: M.useMemo(
      () =>
        t
          ? n.filter(
              (i) => i.timestamp >= t.minimum && i.timestamp <= t.maximum,
            )
          : n,
      [n, t],
    ),
  };
}
const hw = ({
  consoleModel: e,
  boundaries: t,
  onEntryHovered: n,
  onAccepted: r,
}) =>
  e.entries.length
    ? w.jsx("div", {
        className: "console-tab",
        children: w.jsx(h0, {
          name: "console",
          onAccepted: r,
          onHighlighted: n,
          items: e.entries,
          isError: (i) => i.isError,
          isWarning: (i) => i.isWarning,
          render: (i) => {
            const s = Ro(i.timestamp - t.minimum),
              o = w.jsx("span", { className: "console-time", children: s }),
              l = i.isError
                ? "status-error"
                : i.isWarning
                  ? "status-warning"
                  : "status-none",
              a =
                i.browserMessage || i.browserError
                  ? w.jsx("span", {
                      className: tt("codicon", "codicon-browser", l),
                      title: "Browser message",
                    })
                  : w.jsx("span", {
                      className: tt("codicon", "codicon-file", l),
                      title: "Runner message",
                    });
            let u, c, f, d;
            const { browserMessage: g, browserError: m, nodeMessage: y } = i;
            if ((g && ((u = g.location), (c = g.body)), m)) {
              const { error: _, value: p } = m;
              _ ? ((c = _.message), (d = _.stack)) : (c = String(p));
            }
            return (
              y && (f = y.html),
              w.jsxs("div", {
                className: "console-line",
                children: [
                  o,
                  a,
                  u &&
                    w.jsx("span", {
                      className: "console-location",
                      children: u,
                    }),
                  c &&
                    w.jsx("span", {
                      className: "console-line-message",
                      children: c,
                    }),
                  f &&
                    w.jsx("span", {
                      className: "console-line-message",
                      dangerouslySetInnerHTML: { __html: f },
                    }),
                  d &&
                    w.jsx("div", { className: "console-stack", children: d }),
                ],
              })
            );
          },
        }),
      })
    : w.jsx(Lh, { text: "No console entries" });
function p0(e) {
  if (e.length === 1) return Ih(e[0].preview);
  const t = typeof e[0].value == "string" && e[0].value.includes("%"),
    n = t ? e[0].value : "",
    r = t ? e.slice(1) : e;
  let i = 0;
  const s = /%([%sdifoOc])/g;
  let o;
  const l = [];
  let a = [];
  l.push(w.jsx("span", { children: a }));
  let u = 0;
  for (; (o = s.exec(n)) !== null; ) {
    const c = n.substring(u, o.index);
    a.push(w.jsx("span", { children: c })), (u = o.index + 2);
    const f = o[0][1];
    if (f === "%") a.push(w.jsx("span", { children: "%" }));
    else if (
      f === "s" ||
      f === "o" ||
      f === "O" ||
      f === "d" ||
      f === "i" ||
      f === "f"
    ) {
      const d = r[i++],
        g = {};
      typeof (d == null ? void 0 : d.value) != "string" &&
        (g.color = "var(--vscode-debugTokenExpression-number)"),
        a.push(
          w.jsx("span", {
            style: g,
            children: (d == null ? void 0 : d.preview) || "",
          }),
        );
    } else if (f === "c") {
      a = [];
      const d = r[i++],
        g = d ? g0(d.preview) : {};
      l.push(w.jsx("span", { style: g, children: a }));
    }
  }
  for (
    u < n.length && a.push(w.jsx("span", { children: n.substring(u) }));
    i < r.length;
    i++
  ) {
    const c = r[i],
      f = {};
    a.length && a.push(w.jsx("span", { children: " " })),
      typeof (c == null ? void 0 : c.value) != "string" &&
        (f.color = "var(--vscode-debugTokenExpression-number)"),
      a.push(
        w.jsx("span", {
          style: f,
          children: (c == null ? void 0 : c.preview) || "",
        }),
      );
  }
  return l;
}
function Ih(e) {
  return [w.jsx("span", { dangerouslySetInnerHTML: { __html: ws(e.trim()) } })];
}
function g0(e) {
  try {
    const t = {},
      n = e.split(";");
    for (const r of n) {
      const i = r.trim();
      if (!i) continue;
      let [s, o] = i.split(":");
      if (((s = s.trim()), (o = o.trim()), !m0(s))) continue;
      const l = s.replace(/-([a-z])/g, (a) => a[1].toUpperCase());
      t[l] = o;
    }
    return t;
  } catch {
    return {};
  }
}
function m0(e) {
  return [
    "background",
    "border",
    "color",
    "font",
    "line",
    "margin",
    "padding",
    "text",
  ].some((n) => e.startsWith(n));
}
const Oa = ({
    noShadow: e,
    children: t,
    noMinHeight: n,
    className: r,
    sidebarBackground: i,
    onClick: s,
  }) =>
    w.jsx("div", {
      className: tt(
        "toolbar",
        e && "no-shadow",
        n && "no-min-height",
        r,
        i && "toolbar-sidebar-background",
      ),
      onClick: s,
      children: t,
    }),
  v0 = ({
    tabs: e,
    selectedTab: t,
    setSelectedTab: n,
    leftToolbar: r,
    rightToolbar: i,
    dataTestId: s,
    mode: o,
  }) => {
    const l = M.useId();
    return (
      t || (t = e[0].id),
      o || (o = "default"),
      w.jsx("div", {
        className: "tabbed-pane",
        "data-testid": s,
        children: w.jsxs("div", {
          className: "vbox",
          children: [
            w.jsxs(Oa, {
              children: [
                r &&
                  w.jsxs("div", {
                    style: {
                      flex: "none",
                      display: "flex",
                      margin: "0 4px",
                      alignItems: "center",
                    },
                    children: [...r],
                  }),
                o === "default" &&
                  w.jsx("div", {
                    style: {
                      flex: "auto",
                      display: "flex",
                      height: "100%",
                      overflow: "hidden",
                    },
                    role: "tablist",
                    children: [
                      ...e.map((a) =>
                        w.jsx(
                          Mh,
                          {
                            id: a.id,
                            ariaControls: `${l}-${a.id}`,
                            title: a.title,
                            count: a.count,
                            errorCount: a.errorCount,
                            selected: t === a.id,
                            onSelect: n,
                          },
                          a.id,
                        ),
                      ),
                    ],
                  }),
                o === "select" &&
                  w.jsx("div", {
                    style: {
                      flex: "auto",
                      display: "flex",
                      height: "100%",
                      overflow: "hidden",
                    },
                    role: "tablist",
                    children: w.jsx("select", {
                      style: {
                        width: "100%",
                        background: "none",
                        cursor: "pointer",
                      },
                      onChange: (a) => {
                        n == null || n(e[a.currentTarget.selectedIndex].id);
                      },
                      children: e.map((a) => {
                        let u = "";
                        return (
                          a.count && (u = ` (${a.count})`),
                          a.errorCount && (u = ` (${a.errorCount})`),
                          w.jsxs(
                            "option",
                            {
                              value: a.id,
                              selected: a.id === t,
                              role: "tab",
                              "aria-controls": `${l}-${a.id}`,
                              children: [a.title, u],
                            },
                            a.id,
                          )
                        );
                      }),
                    }),
                  }),
                i &&
                  w.jsxs("div", {
                    style: {
                      flex: "none",
                      display: "flex",
                      alignItems: "center",
                    },
                    children: [...i],
                  }),
              ],
            }),
            e.map((a) => {
              const u = "tab-content tab-" + a.id;
              if (a.component)
                return w.jsx(
                  "div",
                  {
                    id: `${l}-${a.id}`,
                    role: "tabpanel",
                    "aria-label": a.title,
                    className: u,
                    style: { display: t === a.id ? "inherit" : "none" },
                    children: a.component,
                  },
                  a.id,
                );
              if (t === a.id)
                return w.jsx(
                  "div",
                  {
                    id: `${l}-${a.id}`,
                    role: "tabpanel",
                    "aria-label": a.title,
                    className: u,
                    children: a.render(),
                  },
                  a.id,
                );
            }),
          ],
        }),
      })
    );
  },
  Mh = ({
    id: e,
    title: t,
    count: n,
    errorCount: r,
    selected: i,
    onSelect: s,
    ariaControls: o,
  }) =>
    w.jsxs("div", {
      className: tt("tabbed-pane-tab", i && "selected"),
      onClick: () => (s == null ? void 0 : s(e)),
      role: "tab",
      title: t,
      "aria-controls": o,
      children: [
        w.jsx("div", { className: "tabbed-pane-tab-label", children: t }),
        !!n &&
          w.jsx("div", { className: "tabbed-pane-tab-counter", children: n }),
        !!r &&
          w.jsx("div", {
            className: "tabbed-pane-tab-counter error",
            children: r,
          }),
      ],
    }),
  y0 = "modulepreload",
  w0 = function (e, t) {
    return new URL(e, t).href;
  },
  _c = {},
  _0 = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const o = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        a =
          (l == null ? void 0 : l.nonce) ||
          (l == null ? void 0 : l.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((u) => {
          if (((u = w0(u, r)), u in _c)) return;
          _c[u] = !0;
          const c = u.endsWith(".css"),
            f = c ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let m = o.length - 1; m >= 0; m--) {
              const y = o[m];
              if (y.href === u && (!c || y.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${f}`)) return;
          const g = document.createElement("link");
          if (
            ((g.rel = c ? "stylesheet" : y0),
            c || (g.as = "script"),
            (g.crossOrigin = ""),
            (g.href = u),
            a && g.setAttribute("nonce", a),
            document.head.appendChild(g),
            c)
          )
            return new Promise((m, y) => {
              g.addEventListener("load", m),
                g.addEventListener("error", () =>
                  y(new Error(`Unable to preload CSS for ${u}`)),
                );
            });
        }),
      );
    }
    function s(o) {
      const l = new Event("vite:preloadError", { cancelable: !0 });
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const l of o || []) l.status === "rejected" && s(l.reason);
      return t().catch(s);
    });
  },
  pw = 20,
  Vs = ({
    text: e,
    language: t,
    mimeType: n,
    linkify: r,
    readOnly: i,
    highlight: s,
    revealLine: o,
    lineNumbers: l,
    isFocused: a,
    focusOnChange: u,
    wrapLines: c,
    onChange: f,
    dataTestId: d,
    placeholder: g,
  }) => {
    const [m, y] = ks(),
      [_] = M.useState(
        _0(
          () => import("./codeMirrorModule-KatbITLF.js"),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ).then((x) => x.default),
      ),
      p = M.useRef(null),
      [h, v] = M.useState();
    return (
      M.useEffect(() => {
        (async () => {
          var b, S;
          const x = await _;
          S0(x);
          const E = y.current;
          if (!E) return;
          const C = k0(t) || E0(n) || (r ? "text/linkified" : "");
          if (
            p.current &&
            C === p.current.cm.getOption("mode") &&
            !!i === p.current.cm.getOption("readOnly") &&
            l === p.current.cm.getOption("lineNumbers") &&
            c === p.current.cm.getOption("lineWrapping") &&
            g === p.current.cm.getOption("placeholder")
          )
            return;
          (S = (b = p.current) == null ? void 0 : b.cm) == null ||
            S.getWrapperElement().remove();
          const N = x(E, {
            value: "",
            mode: C,
            readOnly: !!i,
            lineNumbers: l,
            lineWrapping: c,
            placeholder: g,
          });
          return (p.current = { cm: N }), a && N.focus(), v(N), N;
        })();
      }, [_, h, y, t, n, r, l, c, i, a, g]),
      M.useEffect(() => {
        p.current && p.current.cm.setSize(m.width, m.height);
      }, [m]),
      M.useLayoutEffect(() => {
        var C;
        if (!h) return;
        let x = !1;
        if (
          (h.getValue() !== e &&
            (h.setValue(e),
            (x = !0),
            u && (h.execCommand("selectAll"), h.focus())),
          x || JSON.stringify(s) !== JSON.stringify(p.current.highlight))
        ) {
          for (const S of p.current.highlight || [])
            h.removeLineClass(S.line - 1, "wrap");
          for (const S of s || [])
            h.addLineClass(S.line - 1, "wrap", `source-line-${S.type}`);
          for (const S of p.current.widgets || []) h.removeLineWidget(S);
          for (const S of p.current.markers || []) S.clear();
          const N = [],
            b = [];
          for (const S of s || []) {
            if (S.type !== "subtle-error" && S.type !== "error") continue;
            const I =
              (C = p.current) == null ? void 0 : C.cm.getLine(S.line - 1);
            if (I) {
              const O = {};
              (O.title = S.message || ""),
                b.push(
                  h.markText(
                    { line: S.line - 1, ch: 0 },
                    { line: S.line - 1, ch: S.column || I.length },
                    { className: "source-line-error-underline", attributes: O },
                  ),
                );
            }
            if (S.type === "error") {
              const O = document.createElement("div");
              (O.innerHTML = ws(S.message || "")),
                (O.className = "source-line-error-widget"),
                N.push(
                  h.addLineWidget(S.line, O, { above: !0, coverGutter: !1 }),
                );
            }
          }
          (p.current.highlight = s),
            (p.current.widgets = N),
            (p.current.markers = b);
        }
        typeof o == "number" &&
          p.current.cm.lineCount() >= o &&
          h.scrollIntoView({ line: Math.max(0, o - 1), ch: 0 }, 50);
        let E;
        return (
          f && ((E = () => f(h.getValue())), h.on("change", E)),
          () => {
            E && h.off("change", E);
          }
        );
      }, [h, e, s, o, u, f]),
      w.jsx("div", {
        "data-testid": d,
        className: "cm-wrapper",
        ref: y,
        onClick: x0,
      })
    );
  };
function x0(e) {
  var n;
  if (!(e.target instanceof HTMLElement)) return;
  let t;
  e.target.classList.contains("cm-linkified")
    ? (t = e.target.textContent)
    : e.target.classList.contains("cm-link") &&
      (n = e.target.nextElementSibling) != null &&
      n.classList.contains("cm-url") &&
      (t = e.target.nextElementSibling.textContent.slice(1, -1)),
    t && (e.preventDefault(), e.stopPropagation(), window.open(t, "_blank"));
}
let xc = !1;
function S0(e) {
  xc ||
    ((xc = !0),
    e.defineSimpleMode("text/linkified", {
      start: [{ regex: gg, token: "linkified" }],
    }));
}
function E0(e) {
  if (e) {
    if (e.includes("javascript") || e.includes("json")) return "javascript";
    if (e.includes("python")) return "python";
    if (e.includes("csharp")) return "text/x-csharp";
    if (e.includes("java")) return "text/x-java";
    if (e.includes("markdown")) return "markdown";
    if (e.includes("html") || e.includes("svg")) return "htmlmixed";
    if (e.includes("css")) return "css";
  }
}
function k0(e) {
  if (e)
    return {
      javascript: "javascript",
      jsonl: "javascript",
      python: "python",
      csharp: "text/x-csharp",
      java: "text/x-java",
      markdown: "markdown",
      html: "htmlmixed",
      css: "css",
      yaml: "yaml",
    }[e];
}
async function T0(e) {
  const t = navigator.platform.includes("Win") ? "win" : "unix";
  let n = [];
  const r = new Set([
    "accept-encoding",
    "host",
    "method",
    "path",
    "scheme",
    "version",
    "authority",
    "protocol",
  ]);
  function i(f) {
    const d = '^"';
    return (
      d +
      f
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`]/g, "^$&")
        .replace(/%(?=[a-zA-Z0-9_])/g, "%^")
        .replace(
          /\r?\n/g,
          `^

`,
        ) +
      d
    );
  }
  function s(f) {
    function d(g) {
      let y = g.charCodeAt(0).toString(16);
      for (; y.length < 4; ) y = "0" + y;
      return "\\u" + y;
    }
    return /[\0-\x1F\x7F-\x9F!]|\'/.test(f)
      ? "$'" +
          f
            .replace(/\\/g, "\\\\")
            .replace(/\'/g, "\\'")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/[\0-\x1F\x7F-\x9F!]/g, d) +
          "'"
      : "'" + f + "'";
  }
  const o = t === "win" ? i : s;
  n.push(o(e.request.url).replace(/[[{}\]]/g, "\\$&"));
  let l = "GET";
  const a = [],
    u = await Ph(e);
  u && (a.push("--data-raw " + o(u)), r.add("content-length"), (l = "POST")),
    e.request.method !== l && n.push("-X " + o(e.request.method));
  const c = e.request.headers;
  for (let f = 0; f < c.length; f++) {
    const d = c[f],
      g = d.name.replace(/^:/, "");
    r.has(g.toLowerCase()) ||
      (d.value.trim()
        ? n.push("-H " + o(g + ": " + d.value))
        : n.push("-H " + o(g + ";")));
  }
  return (
    (n = n.concat(a)),
    "curl " +
      n.join(
        n.length >= 3
          ? t === "win"
            ? ` ^
  `
            : ` \\
  `
          : " ",
      )
  );
}
async function C0(e, t = 0) {
  const n = new Set([
      "method",
      "path",
      "scheme",
      "version",
      "accept-charset",
      "accept-encoding",
      "access-control-request-headers",
      "access-control-request-method",
      "connection",
      "content-length",
      "cookie",
      "cookie2",
      "date",
      "dnt",
      "expect",
      "host",
      "keep-alive",
      "origin",
      "referer",
      "te",
      "trailer",
      "transfer-encoding",
      "upgrade",
      "via",
      "user-agent",
    ]),
    r = new Set(["cookie", "authorization"]),
    i = JSON.stringify(e.request.url),
    s = e.request.headers,
    o = s.reduce((m, y) => {
      const _ = y.name;
      return (
        !n.has(_.toLowerCase()) && !_.includes(":") && m.append(_, y.value), m
      );
    }, new Headers()),
    l = {};
  for (const m of o) l[m[0]] = m[1];
  const a =
      e.request.cookies.length ||
      s.some(({ name: m }) => r.has(m.toLowerCase()))
        ? "include"
        : "omit",
    u = s.find(({ name: m }) => m.toLowerCase() === "referer"),
    c = u ? u.value : void 0,
    f = await Ph(e),
    d = {
      headers: Object.keys(l).length ? l : void 0,
      referrer: c,
      body: f,
      method: e.request.method,
      mode: "cors",
    };
  if (t === 1) {
    const m = s.find((_) => _.name.toLowerCase() === "cookie"),
      y = {};
    delete d.mode,
      m && (y.cookie = m.value),
      c && (delete d.referrer, (y.Referer = c)),
      Object.keys(y).length && (d.headers = { ...l, ...y });
  } else d.credentials = a;
  const g = JSON.stringify(d, null, 2);
  return `fetch(${i}, ${g});`;
}
async function Ph(e) {
  var t, n;
  return (t = e.request.postData) != null && t._sha1
    ? await fetch(`sha1/${e.request.postData._sha1}`).then((r) => r.text())
    : (n = e.request.postData) == null
      ? void 0
      : n.text;
}
const N0 = ({ resource: e, onClose: t }) => {
    const [n, r] = M.useState("request");
    return w.jsx(v0, {
      dataTestId: "network-request-details",
      leftToolbar: [
        w.jsx(fn, { icon: "close", title: "Close", onClick: t }, "close"),
      ],
      tabs: [
        {
          id: "request",
          title: "Request",
          render: () => w.jsx(b0, { resource: e }),
        },
        {
          id: "response",
          title: "Response",
          render: () => w.jsx(A0, { resource: e }),
        },
        { id: "body", title: "Body", render: () => w.jsx(L0, { resource: e }) },
      ],
      selectedTab: n,
      setSelectedTab: r,
    });
  },
  b0 = ({ resource: e }) => {
    const [t, n] = M.useState(null);
    return (
      M.useEffect(() => {
        (async () => {
          if (e.request.postData) {
            const i = e.request.headers.find(
                (o) => o.name.toLowerCase() === "content-type",
              ),
              s = i ? i.value : "";
            if (e.request.postData._sha1) {
              const o = await fetch(`sha1/${e.request.postData._sha1}`);
              n({ text: Ml(await o.text(), s), mimeType: s });
            } else n({ text: Ml(e.request.postData.text, s), mimeType: s });
          } else n(null);
        })();
      }, [e]),
      w.jsxs("div", {
        className: "network-request-details-tab",
        children: [
          w.jsx("div", {
            className: "network-request-details-header",
            children: "General",
          }),
          w.jsx("div", {
            className: "network-request-details-url",
            children: `URL: ${e.request.url}`,
          }),
          w.jsx("div", {
            className: "network-request-details-general",
            children: `Method: ${e.request.method}`,
          }),
          e.response.status !== -1 &&
            w.jsxs("div", {
              className: "network-request-details-general",
              style: { display: "flex" },
              children: [
                "Status Code: ",
                w.jsx("span", {
                  className: M0(e.response.status),
                  style: { display: "inline-flex" },
                  children: `${e.response.status} ${e.response.statusText}`,
                }),
              ],
            }),
          e.request.queryString.length
            ? w.jsxs(w.Fragment, {
                children: [
                  w.jsx("div", {
                    className: "network-request-details-header",
                    children: "Query String Parameters",
                  }),
                  w.jsx("div", {
                    className: "network-request-details-headers",
                    children: e.request.queryString.map(
                      (r) => `${r.name}: ${r.value}`,
                    ).join(`
`),
                  }),
                ],
              })
            : null,
          w.jsx("div", {
            className: "network-request-details-header",
            children: "Request Headers",
          }),
          w.jsx("div", {
            className: "network-request-details-headers",
            children: e.request.headers.map((r) => `${r.name}: ${r.value}`)
              .join(`
`),
          }),
          w.jsxs("div", {
            className: "network-request-details-copy",
            children: [
              w.jsx(mc, { description: "Copy as cURL", value: () => T0(e) }),
              w.jsx(mc, { description: "Copy as Fetch", value: () => C0(e) }),
            ],
          }),
          t &&
            w.jsx("div", {
              className: "network-request-details-header",
              children: "Request Body",
            }),
          t &&
            w.jsx(Vs, {
              text: t.text,
              mimeType: t.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  A0 = ({ resource: e }) =>
    w.jsxs("div", {
      className: "network-request-details-tab",
      children: [
        w.jsx("div", {
          className: "network-request-details-header",
          children: "Response Headers",
        }),
        w.jsx("div", {
          className: "network-request-details-headers",
          children: e.response.headers.map((t) => `${t.name}: ${t.value}`)
            .join(`
`),
        }),
      ],
    }),
  L0 = ({ resource: e }) => {
    const [t, n] = M.useState(null);
    return (
      M.useEffect(() => {
        (async () => {
          if (e.response.content._sha1) {
            const i = e.response.content.mimeType.includes("image"),
              s = e.response.content.mimeType.includes("font"),
              o = await fetch(`sha1/${e.response.content._sha1}`);
            if (i) {
              const l = await o.blob(),
                a = new FileReader(),
                u = new Promise((c) => (a.onload = c));
              a.readAsDataURL(l), n({ dataUrl: (await u).target.result });
            } else if (s) {
              const l = await o.arrayBuffer();
              n({ font: l });
            } else {
              const l = Ml(await o.text(), e.response.content.mimeType);
              n({ text: l, mimeType: e.response.content.mimeType });
            }
          } else n(null);
        })();
      }, [e]),
      w.jsxs("div", {
        className: "network-request-details-tab",
        children: [
          !e.response.content._sha1 &&
            w.jsx("div", {
              children: "Response body is not available for this request.",
            }),
          t && t.font && w.jsx(I0, { font: t.font }),
          t &&
            t.dataUrl &&
            w.jsx("img", { draggable: "false", src: t.dataUrl }),
          t &&
            t.text &&
            w.jsx(Vs, {
              text: t.text,
              mimeType: t.mimeType,
              readOnly: !0,
              lineNumbers: !0,
            }),
        ],
      })
    );
  },
  I0 = ({ font: e }) => {
    const [t, n] = M.useState(!1);
    return (
      M.useEffect(() => {
        let r;
        try {
          (r = new FontFace("font-preview", e)),
            r.status === "loaded" && document.fonts.add(r),
            r.status === "error" && n(!0);
        } catch {
          n(!0);
        }
        return () => {
          document.fonts.delete(r);
        };
      }, [e]),
      t
        ? w.jsx("div", {
            className: "network-font-preview-error",
            children: "Could not load font preview",
          })
        : w.jsxs("div", {
            className: "network-font-preview",
            children: [
              "ABCDEFGHIJKLM",
              w.jsx("br", {}),
              "NOPQRSTUVWXYZ",
              w.jsx("br", {}),
              "abcdefghijklm",
              w.jsx("br", {}),
              "nopqrstuvwxyz",
              w.jsx("br", {}),
              "1234567890",
            ],
          })
    );
  };
function M0(e) {
  return e < 300 || e === 304
    ? "green-circle"
    : e < 400
      ? "yellow-circle"
      : "red-circle";
}
function Ml(e, t) {
  if (e === null) return "Loading...";
  const n = e;
  if (n === "") return "<Empty>";
  if (t.includes("application/json"))
    try {
      return JSON.stringify(JSON.parse(n), null, 2);
    } catch {
      return n;
    }
  return t.includes("application/x-www-form-urlencoded")
    ? decodeURIComponent(n)
    : n;
}
const P0 = ({
    cursor: e,
    onPaneMouseMove: t,
    onPaneMouseUp: n,
    onPaneDoubleClick: r,
  }) => (
    et.useEffect(() => {
      const i = document.createElement("div");
      return (
        (i.style.position = "fixed"),
        (i.style.top = "0"),
        (i.style.right = "0"),
        (i.style.bottom = "0"),
        (i.style.left = "0"),
        (i.style.zIndex = "9999"),
        (i.style.cursor = e),
        document.body.appendChild(i),
        t && i.addEventListener("mousemove", t),
        n && i.addEventListener("mouseup", n),
        r && document.body.addEventListener("dblclick", r),
        () => {
          t && i.removeEventListener("mousemove", t),
            n && i.removeEventListener("mouseup", n),
            r && document.body.removeEventListener("dblclick", r),
            document.body.removeChild(i);
        }
      );
    }, [e, t, n, r]),
    w.jsx(w.Fragment, {})
  ),
  R0 = { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 },
  $0 = ({
    orientation: e,
    offsets: t,
    setOffsets: n,
    resizerColor: r,
    resizerWidth: i,
    minColumnWidth: s,
  }) => {
    const o = s || 0,
      [l, a] = et.useState(null),
      [u, c] = ks(),
      f = {
        position: "absolute",
        right: e === "horizontal" ? void 0 : 0,
        bottom: e === "horizontal" ? 0 : void 0,
        width: e === "horizontal" ? 7 : void 0,
        height: e === "horizontal" ? void 0 : 7,
        borderTopWidth: e === "horizontal" ? void 0 : (7 - i) / 2,
        borderRightWidth: e === "horizontal" ? (7 - i) / 2 : void 0,
        borderBottomWidth: e === "horizontal" ? void 0 : (7 - i) / 2,
        borderLeftWidth: e === "horizontal" ? (7 - i) / 2 : void 0,
        borderColor: "transparent",
        borderStyle: "solid",
        cursor: e === "horizontal" ? "ew-resize" : "ns-resize",
      };
    return w.jsxs("div", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: -(7 - i) / 2,
        zIndex: 100,
        pointerEvents: "none",
      },
      ref: c,
      children: [
        !!l &&
          w.jsx(P0, {
            cursor: e === "horizontal" ? "ew-resize" : "ns-resize",
            onPaneMouseUp: () => a(null),
            onPaneMouseMove: (d) => {
              if (!d.buttons) a(null);
              else if (l) {
                const g =
                    e === "horizontal"
                      ? d.clientX - l.clientX
                      : d.clientY - l.clientY,
                  m = l.offset + g,
                  y = l.index > 0 ? t[l.index - 1] : 0,
                  _ = e === "horizontal" ? u.width : u.height,
                  p = Math.min(Math.max(y + o, m), _ - o) - t[l.index];
                for (let h = l.index; h < t.length; ++h) t[h] = t[h] + p;
                n([...t]);
              }
            },
          }),
        t.map((d, g) =>
          w.jsx(
            "div",
            {
              style: {
                ...f,
                top: e === "horizontal" ? 0 : d,
                left: e === "horizontal" ? d : 0,
                pointerEvents: "initial",
              },
              onMouseDown: (m) =>
                a({
                  clientX: m.clientX,
                  clientY: m.clientY,
                  offset: d,
                  index: g,
                }),
              children: w.jsx("div", { style: { ...R0, background: r } }),
            },
            g,
          ),
        ),
      ],
    });
  };
function O0(e) {
  const [t, n] = M.useState([]);
  M.useEffect(() => {
    const s = [];
    for (let o = 0; o < e.columns.length - 1; ++o) {
      const l = e.columns[o];
      s[o] = (s[o - 1] || 0) + e.columnWidths.get(l);
    }
    n(s);
  }, [e.columns, e.columnWidths]);
  function r(s) {
    const o = new Map(e.columnWidths.entries());
    for (let l = 0; l < s.length; ++l) {
      const a = s[l] - (s[l - 1] || 0),
        u = e.columns[l];
      o.set(u, a);
    }
    e.setColumnWidths(o);
  }
  const i = M.useCallback(
    (s) => {
      var o, l;
      (l = e.setSorting) == null ||
        l.call(e, {
          by: s,
          negate:
            ((o = e.sorting) == null ? void 0 : o.by) === s
              ? !e.sorting.negate
              : !1,
        });
    },
    [e],
  );
  return w.jsxs("div", {
    className: `grid-view ${e.name}-grid-view`,
    children: [
      w.jsx($0, {
        orientation: "horizontal",
        offsets: t,
        setOffsets: r,
        resizerColor: "var(--vscode-panel-border)",
        resizerWidth: 1,
        minColumnWidth: 25,
      }),
      w.jsxs("div", {
        className: "vbox",
        children: [
          w.jsx("div", {
            className: "grid-view-header",
            children: e.columns.map((s, o) =>
              w.jsxs(
                "div",
                {
                  className: "grid-view-header-cell " + j0(s, e.sorting),
                  style: {
                    width:
                      o < e.columns.length - 1 ? e.columnWidths.get(s) : void 0,
                  },
                  onClick: () => e.setSorting && i(s),
                  children: [
                    w.jsx("span", {
                      className: "grid-view-header-cell-title",
                      children: e.columnTitle(s),
                    }),
                    w.jsx("span", { className: "codicon codicon-triangle-up" }),
                    w.jsx("span", {
                      className: "codicon codicon-triangle-down",
                    }),
                  ],
                },
                e.columnTitle(s),
              ),
            ),
          }),
          w.jsx($a, {
            name: e.name,
            items: e.items,
            id: e.id,
            render: (s, o) =>
              w.jsx(w.Fragment, {
                children: e.columns.map((l, a) => {
                  const { body: u, title: c } = e.render(s, l, o);
                  return w.jsx(
                    "div",
                    {
                      className: `grid-view-cell grid-view-column-${String(l)}`,
                      title: c,
                      style: {
                        width:
                          a < e.columns.length - 1
                            ? e.columnWidths.get(l)
                            : void 0,
                      },
                      children: u,
                    },
                    e.columnTitle(l),
                  );
                }),
              }),
            icon: e.icon,
            isError: e.isError,
            isWarning: e.isWarning,
            isInfo: e.isInfo,
            selectedItem: e.selectedItem,
            onAccepted: e.onAccepted,
            onSelected: e.onSelected,
            onHighlighted: e.onHighlighted,
            onIconClicked: e.onIconClicked,
            noItemsMessage: e.noItemsMessage,
            dataTestId: e.dataTestId,
            notSelectable: e.notSelectable,
          }),
        ],
      }),
    ],
  });
}
function j0(e, t) {
  return e === (t == null ? void 0 : t.by)
    ? " filter-" + (t.negate ? "negative" : "positive")
    : "";
}
const z0 = ["All", "Fetch", "HTML", "JS", "CSS", "Font", "Image"],
  D0 = { searchValue: "", resourceType: "All" },
  F0 = ({ filterState: e, onFilterStateChange: t }) =>
    w.jsxs("div", {
      className: "network-filters",
      children: [
        w.jsx("input", {
          type: "search",
          placeholder: "Filter network",
          spellCheck: !1,
          value: e.searchValue,
          onChange: (n) => t({ ...e, searchValue: n.target.value }),
        }),
        w.jsx("div", {
          className: "network-filters-resource-types",
          children: z0.map((n) =>
            w.jsx(
              "div",
              {
                title: n,
                onClick: () => t({ ...e, resourceType: n }),
                className: `network-filters-resource-type ${e.resourceType === n ? "selected" : ""}`,
                children: n,
              },
              n,
            ),
          ),
        }),
      ],
    }),
  H0 = O0;
function gw(e, t) {
  const n = M.useMemo(
      () =>
        ((e == null ? void 0 : e.resources) || []).filter((o) =>
          t
            ? !!o._monotonicTime &&
              o._monotonicTime >= t.minimum &&
              o._monotonicTime <= t.maximum
            : !0,
        ),
      [e, t],
    ),
    r = M.useMemo(() => new W0(e), [e]);
  return { resources: n, contextIdMap: r };
}
const mw = ({ boundaries: e, networkModel: t, onEntryHovered: n }) => {
    const [r, i] = M.useState(void 0),
      [s, o] = M.useState(void 0),
      [l, a] = M.useState(D0),
      { renderedEntries: u } = M.useMemo(() => {
        const m = t.resources
          .map((y) => Q0(y, e, t.contextIdMap))
          .filter(Y0(l));
        return r && G0(m, r), { renderedEntries: m };
      }, [t.resources, t.contextIdMap, l, r, e]),
      [c, f] = M.useState(() => new Map(Rh().map((m) => [m, V0(m)]))),
      d = M.useCallback((m) => {
        a(m), o(void 0);
      }, []);
    if (!t.resources.length) return w.jsx(Lh, { text: "No network calls" });
    const g = w.jsx(H0, {
      name: "network",
      items: u,
      selectedItem: s,
      onSelected: (m) => o(m),
      onHighlighted: (m) =>
        n == null ? void 0 : n(m == null ? void 0 : m.resource),
      columns: B0(!!s, u),
      columnTitle: U0,
      columnWidths: c,
      setColumnWidths: f,
      isError: (m) => m.status.code >= 400 || m.status.code === -1,
      isInfo: (m) => !!m.route,
      render: (m, y) => q0(m, y),
      sorting: r,
      setSorting: i,
    });
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx(F0, { filterState: l, onFilterStateChange: d }),
        !s && g,
        s &&
          w.jsx(sh, {
            sidebarSize: c.get("name"),
            sidebarIsFirst: !0,
            orientation: "horizontal",
            settingName: "networkResourceDetails",
            main: w.jsx(N0, { resource: s.resource, onClose: () => o(void 0) }),
            sidebar: g,
          }),
      ],
    });
  },
  U0 = (e) =>
    e === "contextId"
      ? "Source"
      : e === "name"
        ? "Name"
        : e === "method"
          ? "Method"
          : e === "status"
            ? "Status"
            : e === "contentType"
              ? "Content Type"
              : e === "duration"
                ? "Duration"
                : e === "size"
                  ? "Size"
                  : e === "start"
                    ? "Start"
                    : e === "route"
                      ? "Route"
                      : "",
  V0 = (e) =>
    e === "name"
      ? 200
      : e === "method" || e === "status"
        ? 60
        : e === "contentType"
          ? 200
          : e === "contextId"
            ? 60
            : 100;
function B0(e, t) {
  if (e) {
    const r = ["name"];
    return Sc(t) && r.unshift("contextId"), r;
  }
  let n = Rh();
  return Sc(t) || (n = n.filter((r) => r !== "contextId")), n;
}
function Rh() {
  return [
    "contextId",
    "name",
    "method",
    "status",
    "contentType",
    "duration",
    "size",
    "start",
    "route",
  ];
}
const q0 = (e, t) =>
  t === "contextId"
    ? { body: e.contextId, title: e.name.url }
    : t === "name"
      ? { body: e.name.name, title: e.name.url }
      : t === "method"
        ? { body: e.method }
        : t === "status"
          ? {
              body: e.status.code > 0 ? e.status.code : "",
              title: e.status.text,
            }
          : t === "contentType"
            ? { body: e.contentType }
            : t === "duration"
              ? { body: Ro(e.duration) }
              : t === "size"
                ? { body: dg(e.size) }
                : t === "start"
                  ? { body: Ro(e.start) }
                  : t === "route"
                    ? { body: e.route }
                    : { body: "" };
class W0 {
  constructor(t) {
    H(this, "_pagerefToShortId", new Map());
    H(this, "_contextToId", new Map());
    H(this, "_lastPageId", 0);
    H(this, "_lastApiRequestContextId", 0);
  }
  contextId(t) {
    return t.pageref
      ? this._pageId(t.pageref)
      : t._apiRequest
        ? this._apiRequestContextId(t)
        : "";
  }
  _pageId(t) {
    let n = this._pagerefToShortId.get(t);
    return (
      n ||
        (++this._lastPageId,
        (n = "page#" + this._lastPageId),
        this._pagerefToShortId.set(t, n)),
      n
    );
  }
  _apiRequestContextId(t) {
    const n = vs(t);
    if (!n) return "";
    let r = this._contextToId.get(n);
    return (
      r ||
        (++this._lastApiRequestContextId,
        (r = "api#" + this._lastApiRequestContextId),
        this._contextToId.set(n, r)),
      r
    );
  }
}
function Sc(e) {
  const t = new Set();
  for (const n of e) if ((t.add(n.contextId), t.size > 1)) return !0;
  return !1;
}
const Q0 = (e, t, n) => {
  const r = K0(e);
  let i;
  try {
    const l = new URL(e.request.url);
    (i = l.pathname.substring(l.pathname.lastIndexOf("/") + 1)),
      i || (i = l.host);
  } catch {
    i = e.request.url;
  }
  let s = e.response.content.mimeType;
  const o = s.match(/^(.*);\s*charset=.*$/);
  return (
    o && (s = o[1]),
    {
      name: { name: i, url: e.request.url },
      method: e.request.method,
      status: { code: e.response.status, text: e.response.statusText },
      contentType: s,
      duration: e.time,
      size:
        e.response._transferSize > 0
          ? e.response._transferSize
          : e.response.bodySize,
      start: e._monotonicTime - t.minimum,
      route: r,
      resource: e,
      contextId: n.contextId(e),
    }
  );
};
function K0(e) {
  return e._wasAborted
    ? "aborted"
    : e._wasContinued
      ? "continued"
      : e._wasFulfilled
        ? "fulfilled"
        : e._apiRequest
          ? "api"
          : "";
}
function G0(e, t) {
  const n = X0(t == null ? void 0 : t.by);
  n && e.sort(n), t.negate && e.reverse();
}
function X0(e) {
  if (e === "start") return (t, n) => t.start - n.start;
  if (e === "duration") return (t, n) => t.duration - n.duration;
  if (e === "status") return (t, n) => t.status.code - n.status.code;
  if (e === "method")
    return (t, n) => {
      const r = t.method,
        i = n.method;
      return r.localeCompare(i);
    };
  if (e === "size") return (t, n) => t.size - n.size;
  if (e === "contentType")
    return (t, n) => t.contentType.localeCompare(n.contentType);
  if (e === "name") return (t, n) => t.name.name.localeCompare(n.name.name);
  if (e === "route") return (t, n) => t.route.localeCompare(n.route);
  if (e === "contextId")
    return (t, n) => t.contextId.localeCompare(n.contextId);
}
const J0 = {
  All: () => !0,
  Fetch: (e) => e === "application/json",
  HTML: (e) => e === "text/html",
  CSS: (e) => e === "text/css",
  JS: (e) => e.includes("javascript"),
  Font: (e) => e.includes("font"),
  Image: (e) => e.includes("image"),
};
function Y0({ searchValue: e, resourceType: t }) {
  return (n) => {
    const r = J0[t];
    return (
      r(n.contentType) && n.name.url.toLowerCase().includes(e.toLowerCase())
    );
  };
}
const Ec = {
  queryAll(e, t) {
    t.startsWith("/") && e.nodeType !== Node.DOCUMENT_NODE && (t = "." + t);
    const n = [],
      r = e.ownerDocument || e;
    if (!r) return n;
    const i = r.evaluate(t, e, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    for (let s = i.iterateNext(); s; s = i.iterateNext())
      s.nodeType === Node.ELEMENT_NODE && n.push(s);
    return n;
  },
};
let $h = "";
function Z0(e) {
  $h = e;
}
function Bs(e, t) {
  for (; t; ) {
    if (e.contains(t)) return !0;
    t = jh(t);
  }
  return !1;
}
function Se(e) {
  if (e.parentElement) return e.parentElement;
  if (e.parentNode && e.parentNode.nodeType === 11 && e.parentNode.host)
    return e.parentNode.host;
}
function Oh(e) {
  let t = e;
  for (; t.parentNode; ) t = t.parentNode;
  if (t.nodeType === 11 || t.nodeType === 9) return t;
}
function jh(e) {
  for (; e.parentElement; ) e = e.parentElement;
  return Se(e);
}
function _r(e, t, n) {
  for (; e; ) {
    const r = e.closest(t);
    if (n && r !== n && r != null && r.contains(n)) return;
    if (r) return r;
    e = jh(e);
  }
}
function gn(e, t) {
  return e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView.getComputedStyle(e, t)
    : void 0;
}
function zh(e, t) {
  if (((t = t ?? gn(e)), !t)) return !0;
  if (Element.prototype.checkVisibility && $h !== "webkit") {
    if (!e.checkVisibility()) return !1;
  } else {
    const n = e.closest("details,summary");
    if (n !== e && (n == null ? void 0 : n.nodeName) === "DETAILS" && !n.open)
      return !1;
  }
  return t.visibility === "visible";
}
function nn(e) {
  const t = gn(e);
  if (!t) return !0;
  if (t.display === "contents") {
    for (let r = e.firstChild; r; r = r.nextSibling)
      if ((r.nodeType === 1 && nn(r)) || (r.nodeType === 3 && Dh(r))) return !0;
    return !1;
  }
  if (!zh(e, t)) return !1;
  const n = e.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function Dh(e) {
  const t = e.ownerDocument.createRange();
  t.selectNode(e);
  const n = t.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function ve(e) {
  return e instanceof HTMLFormElement ? "FORM" : e.tagName.toUpperCase();
}
function kc(e) {
  return e.hasAttribute("aria-label") || e.hasAttribute("aria-labelledby");
}
const Tc =
    "article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]",
  ey = new Map([
    ["aria-atomic", void 0],
    ["aria-busy", void 0],
    ["aria-controls", void 0],
    ["aria-current", void 0],
    ["aria-describedby", void 0],
    ["aria-details", void 0],
    ["aria-dropeffect", void 0],
    ["aria-flowto", void 0],
    ["aria-grabbed", void 0],
    ["aria-hidden", void 0],
    ["aria-keyshortcuts", void 0],
    [
      "aria-label",
      new Set([
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript",
      ]),
    ],
    [
      "aria-labelledby",
      new Set([
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript",
      ]),
    ],
    ["aria-live", void 0],
    ["aria-owns", void 0],
    ["aria-relevant", void 0],
    ["aria-roledescription", new Set(["generic"])],
  ]);
function Fh(e, t) {
  return [...ey].some(
    ([n, r]) => !(r != null && r.has(t || "")) && e.hasAttribute(n),
  );
}
function Hh(e) {
  return !Number.isNaN(Number(String(e.getAttribute("tabindex"))));
}
function ty(e) {
  return !ep(e) && (ny(e) || Hh(e));
}
function ny(e) {
  const t = ve(e);
  return ["BUTTON", "DETAILS", "SELECT", "TEXTAREA"].includes(t)
    ? !0
    : t === "A" || t === "AREA"
      ? e.hasAttribute("href")
      : t === "INPUT"
        ? !e.hidden
        : !1;
}
const xo = {
    A: (e) => (e.hasAttribute("href") ? "link" : null),
    AREA: (e) => (e.hasAttribute("href") ? "link" : null),
    ARTICLE: () => "article",
    ASIDE: () => "complementary",
    BLOCKQUOTE: () => "blockquote",
    BUTTON: () => "button",
    CAPTION: () => "caption",
    CODE: () => "code",
    DATALIST: () => "listbox",
    DD: () => "definition",
    DEL: () => "deletion",
    DETAILS: () => "group",
    DFN: () => "term",
    DIALOG: () => "dialog",
    DT: () => "term",
    EM: () => "emphasis",
    FIELDSET: () => "group",
    FIGURE: () => "figure",
    FOOTER: (e) => (_r(e, Tc) ? null : "contentinfo"),
    FORM: (e) => (kc(e) ? "form" : null),
    H1: () => "heading",
    H2: () => "heading",
    H3: () => "heading",
    H4: () => "heading",
    H5: () => "heading",
    H6: () => "heading",
    HEADER: (e) => (_r(e, Tc) ? null : "banner"),
    HR: () => "separator",
    HTML: () => "document",
    IMG: (e) =>
      e.getAttribute("alt") === "" &&
      !e.getAttribute("title") &&
      !Fh(e) &&
      !Hh(e)
        ? "presentation"
        : "img",
    INPUT: (e) => {
      const t = e.type.toLowerCase();
      if (t === "search")
        return e.hasAttribute("list") ? "combobox" : "searchbox";
      if (["email", "tel", "text", "url", ""].includes(t)) {
        const n = ni(e, e.getAttribute("list"))[0];
        return n && ve(n) === "DATALIST" ? "combobox" : "textbox";
      }
      return t === "hidden" ? null : ay[t] || "textbox";
    },
    INS: () => "insertion",
    LI: () => "listitem",
    MAIN: () => "main",
    MARK: () => "mark",
    MATH: () => "math",
    MENU: () => "list",
    METER: () => "meter",
    NAV: () => "navigation",
    OL: () => "list",
    OPTGROUP: () => "group",
    OPTION: () => "option",
    OUTPUT: () => "status",
    P: () => "paragraph",
    PROGRESS: () => "progressbar",
    SECTION: (e) => (kc(e) ? "region" : null),
    SELECT: (e) =>
      e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox",
    STRONG: () => "strong",
    SUB: () => "subscript",
    SUP: () => "superscript",
    SVG: () => "img",
    TABLE: () => "table",
    TBODY: () => "rowgroup",
    TD: (e) => {
      const t = _r(e, "table"),
        n = t ? _s(t) : "";
      return n === "grid" || n === "treegrid" ? "gridcell" : "cell";
    },
    TEXTAREA: () => "textbox",
    TFOOT: () => "rowgroup",
    TH: (e) => {
      if (e.getAttribute("scope") === "col") return "columnheader";
      if (e.getAttribute("scope") === "row") return "rowheader";
      const t = _r(e, "table"),
        n = t ? _s(t) : "";
      return n === "grid" || n === "treegrid" ? "gridcell" : "cell";
    },
    THEAD: () => "rowgroup",
    TIME: () => "time",
    TR: () => "row",
    UL: () => "list",
  },
  ry = {
    DD: ["DL", "DIV"],
    DIV: ["DL"],
    DT: ["DL", "DIV"],
    LI: ["OL", "UL"],
    TBODY: ["TABLE"],
    TD: ["TR"],
    TFOOT: ["TABLE"],
    TH: ["TR"],
    THEAD: ["TABLE"],
    TR: ["THEAD", "TBODY", "TFOOT", "TABLE"],
  };
function Cc(e) {
  var r;
  const t = ((r = xo[ve(e)]) == null ? void 0 : r.call(xo, e)) || "";
  if (!t) return null;
  let n = e;
  for (; n; ) {
    const i = Se(n),
      s = ry[ve(n)];
    if (!s || !i || !s.includes(ve(i))) break;
    const o = _s(i);
    if ((o === "none" || o === "presentation") && !Uh(i, o)) return o;
    n = i;
  }
  return t;
}
const iy = [
  "alert",
  "alertdialog",
  "application",
  "article",
  "banner",
  "blockquote",
  "button",
  "caption",
  "cell",
  "checkbox",
  "code",
  "columnheader",
  "combobox",
  "complementary",
  "contentinfo",
  "definition",
  "deletion",
  "dialog",
  "directory",
  "document",
  "emphasis",
  "feed",
  "figure",
  "form",
  "generic",
  "grid",
  "gridcell",
  "group",
  "heading",
  "img",
  "insertion",
  "link",
  "list",
  "listbox",
  "listitem",
  "log",
  "main",
  "mark",
  "marquee",
  "math",
  "meter",
  "menu",
  "menubar",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "navigation",
  "none",
  "note",
  "option",
  "paragraph",
  "presentation",
  "progressbar",
  "radio",
  "radiogroup",
  "region",
  "row",
  "rowgroup",
  "rowheader",
  "scrollbar",
  "search",
  "searchbox",
  "separator",
  "slider",
  "spinbutton",
  "status",
  "strong",
  "subscript",
  "superscript",
  "switch",
  "tab",
  "table",
  "tablist",
  "tabpanel",
  "term",
  "textbox",
  "time",
  "timer",
  "toolbar",
  "tooltip",
  "tree",
  "treegrid",
  "treeitem",
];
function _s(e) {
  return (
    (e.getAttribute("role") || "")
      .split(" ")
      .map((n) => n.trim())
      .find((n) => iy.includes(n)) || null
  );
}
function Uh(e, t) {
  return Fh(e, t) || ty(e);
}
function ye(e) {
  const t = _s(e);
  if (!t) return Cc(e);
  if (t === "none" || t === "presentation") {
    const n = Cc(e);
    if (Uh(e, n)) return n;
  }
  return t;
}
function Vh(e) {
  return e === null ? void 0 : e.toLowerCase() === "true";
}
function Bh(e) {
  return ["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"].includes(ve(e));
}
function Ze(e) {
  if (Bh(e)) return !0;
  const t = gn(e),
    n = e.nodeName === "SLOT";
  if ((t == null ? void 0 : t.display) === "contents" && !n) {
    for (let i = e.firstChild; i; i = i.nextSibling)
      if ((i.nodeType === 1 && !Ze(i)) || (i.nodeType === 3 && Dh(i)))
        return !1;
    return !0;
  }
  return !(e.nodeName === "OPTION" && !!e.closest("select")) && !n && !zh(e, t)
    ? !0
    : qh(e);
}
function qh(e) {
  let t = bt == null ? void 0 : bt.get(e);
  if (t === void 0) {
    if (
      ((t = !1),
      e.parentElement &&
        e.parentElement.shadowRoot &&
        !e.assignedSlot &&
        (t = !0),
      !t)
    ) {
      const n = gn(e);
      t =
        !n || n.display === "none" || Vh(e.getAttribute("aria-hidden")) === !0;
    }
    if (!t) {
      const n = Se(e);
      n && (t = qh(n));
    }
    bt == null || bt.set(e, t);
  }
  return t;
}
function ni(e, t) {
  if (!t) return [];
  const n = Oh(e);
  if (!n) return [];
  try {
    const r = t.split(" ").filter((s) => !!s),
      i = new Set();
    for (const s of r) {
      const o = n.querySelector("#" + CSS.escape(s));
      o && i.add(o);
    }
    return [...i];
  } catch {
    return [];
  }
}
function ht(e) {
  return e.trim();
}
function qi(e) {
  return e
    .split(" ")
    .map((t) =>
      t
        .replace(
          /\r\n/g,
          `
`,
        )
        .replace(/\s\s*/g, " "),
    )
    .join(" ")
    .trim();
}
function Nc(e, t) {
  const n = [...e.querySelectorAll(t)];
  for (const r of ni(e, e.getAttribute("aria-owns")))
    r.matches(t) && n.push(r), n.push(...r.querySelectorAll(t));
  return n;
}
function xs(e, t) {
  const n = t === "::before" ? Qa : Ka;
  if (n != null && n.has(e)) return (n == null ? void 0 : n.get(e)) || "";
  const r = gn(e, t),
    i = sy(r);
  return n && n.set(e, i), i;
}
function sy(e) {
  if (!e || e.display === "none" || e.visibility === "hidden") return "";
  const t = e.content;
  if (
    (t[0] === "'" && t[t.length - 1] === "'") ||
    (t[0] === '"' && t[t.length - 1] === '"')
  ) {
    const n = t.substring(1, t.length - 1);
    return (e.display || "inline") !== "inline" ? " " + n + " " : n;
  }
  return "";
}
function Wh(e) {
  const t = e.getAttribute("aria-labelledby");
  return t === null ? null : ni(e, t);
}
function oy(e, t) {
  const n = [
      "button",
      "cell",
      "checkbox",
      "columnheader",
      "gridcell",
      "heading",
      "link",
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio",
      "option",
      "radio",
      "row",
      "rowheader",
      "switch",
      "tab",
      "tooltip",
      "treeitem",
    ].includes(e),
    r =
      t &&
      [
        "",
        "caption",
        "code",
        "contentinfo",
        "definition",
        "deletion",
        "emphasis",
        "insertion",
        "list",
        "listitem",
        "mark",
        "none",
        "paragraph",
        "presentation",
        "region",
        "row",
        "rowgroup",
        "section",
        "strong",
        "subscript",
        "superscript",
        "table",
        "term",
        "time",
      ].includes(e);
  return n || r;
}
function Gr(e, t) {
  const n = t ? Ba : Va;
  let r = n == null ? void 0 : n.get(e);
  return (
    r === void 0 &&
      ((r = ""),
      [
        "caption",
        "code",
        "definition",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "mark",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "suggestion",
        "superscript",
        "term",
        "time",
      ].includes(ye(e) || "") ||
        (r = qi(
          at(e, {
            includeHidden: t,
            visitedElements: new Set(),
            embeddedInTargetElement: "self",
          }),
        )),
      n == null || n.set(e, r)),
    r
  );
}
function bc(e, t) {
  const n = t ? Wa : qa;
  let r = n == null ? void 0 : n.get(e);
  if (r === void 0) {
    if (((r = ""), e.hasAttribute("aria-describedby"))) {
      const i = ni(e, e.getAttribute("aria-describedby"));
      r = qi(
        i
          .map((s) =>
            at(s, {
              includeHidden: t,
              visitedElements: new Set(),
              embeddedInDescribedBy: { element: s, hidden: Ze(s) },
            }),
          )
          .join(" "),
      );
    } else
      e.hasAttribute("aria-description")
        ? (r = qi(e.getAttribute("aria-description") || ""))
        : (r = qi(e.getAttribute("title") || ""));
    n == null || n.set(e, r);
  }
  return r;
}
function at(e, t) {
  var a, u, c, f;
  if (t.visitedElements.has(e)) return "";
  const n = {
    ...t,
    embeddedInTargetElement:
      t.embeddedInTargetElement === "self"
        ? "descendant"
        : t.embeddedInTargetElement,
  };
  if (!t.includeHidden) {
    const d =
      !!((a = t.embeddedInLabelledBy) != null && a.hidden) ||
      !!((u = t.embeddedInDescribedBy) != null && u.hidden) ||
      !!((c = t.embeddedInNativeTextAlternative) != null && c.hidden) ||
      !!((f = t.embeddedInLabel) != null && f.hidden);
    if (Bh(e) || (!d && Ze(e))) return t.visitedElements.add(e), "";
  }
  const r = Wh(e);
  if (!t.embeddedInLabelledBy) {
    const d = (r || [])
      .map((g) =>
        at(g, {
          ...t,
          embeddedInLabelledBy: { element: g, hidden: Ze(g) },
          embeddedInDescribedBy: void 0,
          embeddedInTargetElement: void 0,
          embeddedInLabel: void 0,
          embeddedInNativeTextAlternative: void 0,
        }),
      )
      .join(" ");
    if (d) return d;
  }
  const i = ye(e) || "",
    s = ve(e);
  if (
    t.embeddedInLabel ||
    t.embeddedInLabelledBy ||
    t.embeddedInTargetElement === "descendant"
  ) {
    const d = [...(e.labels || [])].includes(e),
      g = (r || []).includes(e);
    if (!d && !g) {
      if (i === "textbox")
        return (
          t.visitedElements.add(e),
          s === "INPUT" || s === "TEXTAREA" ? e.value : e.textContent || ""
        );
      if (["combobox", "listbox"].includes(i)) {
        t.visitedElements.add(e);
        let m;
        if (s === "SELECT")
          (m = [...e.selectedOptions]),
            !m.length && e.options.length && m.push(e.options[0]);
        else {
          const y =
            i === "combobox" ? Nc(e, "*").find((_) => ye(_) === "listbox") : e;
          m = y
            ? Nc(y, '[aria-selected="true"]').filter((_) => ye(_) === "option")
            : [];
        }
        return !m.length && s === "INPUT"
          ? e.value
          : m.map((y) => at(y, n)).join(" ");
      }
      if (
        ["progressbar", "scrollbar", "slider", "spinbutton", "meter"].includes(
          i,
        )
      )
        return (
          t.visitedElements.add(e),
          e.hasAttribute("aria-valuetext")
            ? e.getAttribute("aria-valuetext") || ""
            : e.hasAttribute("aria-valuenow")
              ? e.getAttribute("aria-valuenow") || ""
              : e.getAttribute("value") || ""
        );
      if (["menu"].includes(i)) return t.visitedElements.add(e), "";
    }
  }
  const o = e.getAttribute("aria-label") || "";
  if (ht(o)) return t.visitedElements.add(e), o;
  if (!["presentation", "none"].includes(i)) {
    if (s === "INPUT" && ["button", "submit", "reset"].includes(e.type)) {
      t.visitedElements.add(e);
      const d = e.value || "";
      return ht(d)
        ? d
        : e.type === "submit"
          ? "Submit"
          : e.type === "reset"
            ? "Reset"
            : e.getAttribute("title") || "";
    }
    if (s === "INPUT" && e.type === "image") {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length && !t.embeddedInLabelledBy) return Si(d, t);
      const g = e.getAttribute("alt") || "";
      if (ht(g)) return g;
      const m = e.getAttribute("title") || "";
      return ht(m) ? m : "Submit";
    }
    if (!r && s === "BUTTON") {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length) return Si(d, t);
    }
    if (!r && s === "OUTPUT") {
      t.visitedElements.add(e);
      const d = e.labels || [];
      return d.length ? Si(d, t) : e.getAttribute("title") || "";
    }
    if (!r && (s === "TEXTAREA" || s === "SELECT" || s === "INPUT")) {
      t.visitedElements.add(e);
      const d = e.labels || [];
      if (d.length) return Si(d, t);
      const g =
          (s === "INPUT" &&
            ["text", "password", "search", "tel", "email", "url"].includes(
              e.type,
            )) ||
          s === "TEXTAREA",
        m = e.getAttribute("placeholder") || "",
        y = e.getAttribute("title") || "";
      return !g || y ? y : m;
    }
    if (!r && s === "FIELDSET") {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (ve(g) === "LEGEND")
          return at(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: Ze(g) },
          });
      return e.getAttribute("title") || "";
    }
    if (!r && s === "FIGURE") {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (ve(g) === "FIGCAPTION")
          return at(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: Ze(g) },
          });
      return e.getAttribute("title") || "";
    }
    if (s === "IMG") {
      t.visitedElements.add(e);
      const d = e.getAttribute("alt") || "";
      return ht(d) ? d : e.getAttribute("title") || "";
    }
    if (s === "TABLE") {
      t.visitedElements.add(e);
      for (let g = e.firstElementChild; g; g = g.nextElementSibling)
        if (ve(g) === "CAPTION")
          return at(g, {
            ...n,
            embeddedInNativeTextAlternative: { element: g, hidden: Ze(g) },
          });
      const d = e.getAttribute("summary") || "";
      if (d) return d;
    }
    if (s === "AREA") {
      t.visitedElements.add(e);
      const d = e.getAttribute("alt") || "";
      return ht(d) ? d : e.getAttribute("title") || "";
    }
    if (s === "SVG" || e.ownerSVGElement) {
      t.visitedElements.add(e);
      for (let d = e.firstElementChild; d; d = d.nextElementSibling)
        if (ve(d) === "TITLE" && d.ownerSVGElement)
          return at(d, {
            ...n,
            embeddedInLabelledBy: { element: d, hidden: Ze(d) },
          });
    }
    if (e.ownerSVGElement && s === "A") {
      const d = e.getAttribute("xlink:title") || "";
      if (ht(d)) return t.visitedElements.add(e), d;
    }
  }
  const l = s === "SUMMARY" && !["presentation", "none"].includes(i);
  if (
    oy(i, t.embeddedInTargetElement === "descendant") ||
    l ||
    t.embeddedInLabelledBy ||
    t.embeddedInDescribedBy ||
    t.embeddedInLabel ||
    t.embeddedInNativeTextAlternative
  ) {
    t.visitedElements.add(e);
    const d = ly(e, n);
    if (t.embeddedInTargetElement === "self" ? ht(d) : d) return d;
  }
  if (!["presentation", "none"].includes(i) || s === "IFRAME") {
    t.visitedElements.add(e);
    const d = e.getAttribute("title") || "";
    if (ht(d)) return d;
  }
  return t.visitedElements.add(e), "";
}
function ly(e, t) {
  const n = [],
    r = (s, o) => {
      var l;
      if (!(o && s.assignedSlot))
        if (s.nodeType === 1) {
          const a = ((l = gn(s)) == null ? void 0 : l.display) || "inline";
          let u = at(s, t);
          (a !== "inline" || s.nodeName === "BR") && (u = " " + u + " "),
            n.push(u);
        } else s.nodeType === 3 && n.push(s.textContent || "");
    };
  n.push(xs(e, "::before"));
  const i = e.nodeName === "SLOT" ? e.assignedNodes() : [];
  if (i.length) for (const s of i) r(s, !1);
  else {
    for (let s = e.firstChild; s; s = s.nextSibling) r(s, !0);
    if (e.shadowRoot)
      for (let s = e.shadowRoot.firstChild; s; s = s.nextSibling) r(s, !0);
    for (const s of ni(e, e.getAttribute("aria-owns"))) r(s, !0);
  }
  return n.push(xs(e, "::after")), n.join("");
}
const ja = [
  "gridcell",
  "option",
  "row",
  "tab",
  "rowheader",
  "columnheader",
  "treeitem",
];
function Qh(e) {
  return ve(e) === "OPTION"
    ? e.selected
    : ja.includes(ye(e) || "")
      ? Vh(e.getAttribute("aria-selected")) === !0
      : !1;
}
const za = [
  "checkbox",
  "menuitemcheckbox",
  "option",
  "radio",
  "switch",
  "menuitemradio",
  "treeitem",
];
function Kh(e) {
  const t = Gh(e, !0);
  return t === "error" ? !1 : t;
}
function Gh(e, t) {
  const n = ve(e);
  if (t && n === "INPUT" && e.indeterminate) return "mixed";
  if (n === "INPUT" && ["checkbox", "radio"].includes(e.type)) return e.checked;
  if (za.includes(ye(e) || "")) {
    const r = e.getAttribute("aria-checked");
    return r === "true" ? !0 : t && r === "mixed" ? "mixed" : !1;
  }
  return "error";
}
const Da = ["button"];
function Xh(e) {
  if (Da.includes(ye(e) || "")) {
    const t = e.getAttribute("aria-pressed");
    if (t === "true") return !0;
    if (t === "mixed") return "mixed";
  }
  return !1;
}
const Fa = [
  "application",
  "button",
  "checkbox",
  "combobox",
  "gridcell",
  "link",
  "listbox",
  "menuitem",
  "row",
  "rowheader",
  "tab",
  "treeitem",
  "columnheader",
  "menuitemcheckbox",
  "menuitemradio",
  "rowheader",
  "switch",
];
function Jh(e) {
  if (ve(e) === "DETAILS") return e.open;
  if (Fa.includes(ye(e) || "")) {
    const t = e.getAttribute("aria-expanded");
    return t === null ? void 0 : t === "true";
  }
}
const Ha = ["heading", "listitem", "row", "treeitem"];
function Yh(e) {
  const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[ve(e)];
  if (t) return t;
  if (Ha.includes(ye(e) || "")) {
    const n = e.getAttribute("aria-level"),
      r = n === null ? Number.NaN : Number(n);
    if (Number.isInteger(r) && r >= 1) return r;
  }
  return 0;
}
const Zh = [
  "application",
  "button",
  "composite",
  "gridcell",
  "group",
  "input",
  "link",
  "menuitem",
  "scrollbar",
  "separator",
  "tab",
  "checkbox",
  "columnheader",
  "combobox",
  "grid",
  "listbox",
  "menu",
  "menubar",
  "menuitemcheckbox",
  "menuitemradio",
  "option",
  "radio",
  "radiogroup",
  "row",
  "rowheader",
  "searchbox",
  "select",
  "slider",
  "spinbutton",
  "switch",
  "tablist",
  "textbox",
  "toolbar",
  "tree",
  "treegrid",
  "treeitem",
];
function Ua(e) {
  return ep(e) || np(e);
}
function ep(e) {
  return (
    ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTION", "OPTGROUP"].includes(
      e.tagName,
    ) &&
    (e.hasAttribute("disabled") || tp(e))
  );
}
function tp(e) {
  return e
    ? ve(e) === "FIELDSET" && e.hasAttribute("disabled")
      ? !0
      : tp(e.parentElement)
    : !1;
}
function np(e) {
  if (!e) return !1;
  if (Zh.includes(ye(e) || "")) {
    const t = (e.getAttribute("aria-disabled") || "").toLowerCase();
    if (t === "true") return !0;
    if (t === "false") return !1;
  }
  return np(Se(e));
}
function Si(e, t) {
  return [...e]
    .map((n) =>
      at(n, {
        ...t,
        embeddedInLabel: { element: n, hidden: Ze(n) },
        embeddedInNativeTextAlternative: void 0,
        embeddedInLabelledBy: void 0,
        embeddedInDescribedBy: void 0,
        embeddedInTargetElement: void 0,
      }),
    )
    .filter((n) => !!n)
    .join(" ");
}
let Va,
  Ba,
  qa,
  Wa,
  bt,
  Qa,
  Ka,
  rp = 0;
function Ga() {
  ++rp,
    Va ?? (Va = new Map()),
    Ba ?? (Ba = new Map()),
    qa ?? (qa = new Map()),
    Wa ?? (Wa = new Map()),
    bt ?? (bt = new Map()),
    Qa ?? (Qa = new Map()),
    Ka ?? (Ka = new Map());
}
function Xa() {
  --rp ||
    ((Va = void 0),
    (Ba = void 0),
    (qa = void 0),
    (Wa = void 0),
    (bt = void 0),
    (Qa = void 0),
    (Ka = void 0));
}
const ay = {
  button: "button",
  checkbox: "checkbox",
  image: "button",
  number: "spinbutton",
  radio: "radio",
  range: "slider",
  reset: "button",
  submit: "button",
};
function ip(e, t) {
  for (const n of t.jsonPath) e != null && (e = e[n]);
  return sp(e, t);
}
function sp(e, t) {
  const n = typeof e == "string" && !t.caseSensitive ? e.toUpperCase() : e,
    r =
      typeof t.value == "string" && !t.caseSensitive
        ? t.value.toUpperCase()
        : t.value;
  return t.op === "<truthy>"
    ? !!n
    : t.op === "="
      ? r instanceof RegExp
        ? typeof n == "string" && !!n.match(r)
        : n === r
      : typeof n != "string" || typeof r != "string"
        ? !1
        : t.op === "*="
          ? n.includes(r)
          : t.op === "^="
            ? n.startsWith(r)
            : t.op === "$="
              ? n.endsWith(r)
              : t.op === "|="
                ? n === r || n.startsWith(r + "-")
                : t.op === "~="
                  ? n.split(" ").includes(r)
                  : !1;
}
function Ja(e) {
  const t = e.ownerDocument;
  return (
    e.nodeName === "SCRIPT" ||
    e.nodeName === "NOSCRIPT" ||
    e.nodeName === "STYLE" ||
    (t.head && t.head.contains(e))
  );
}
function Ae(e, t) {
  let n = e.get(t);
  if (n === void 0) {
    if (((n = { full: "", normalized: "", immediate: [] }), !Ja(t))) {
      let r = "";
      if (
        t instanceof HTMLInputElement &&
        (t.type === "submit" || t.type === "button")
      )
        n = { full: t.value, normalized: ze(t.value), immediate: [t.value] };
      else {
        for (let i = t.firstChild; i; i = i.nextSibling)
          i.nodeType === Node.TEXT_NODE
            ? ((n.full += i.nodeValue || ""), (r += i.nodeValue || ""))
            : (r && n.immediate.push(r),
              (r = ""),
              i.nodeType === Node.ELEMENT_NODE && (n.full += Ae(e, i).full));
        r && n.immediate.push(r),
          t.shadowRoot && (n.full += Ae(e, t.shadowRoot).full),
          n.full && (n.normalized = ze(n.full));
      }
    }
    e.set(t, n);
  }
  return n;
}
function qs(e, t, n) {
  if (Ja(t) || !n(Ae(e, t))) return "none";
  for (let r = t.firstChild; r; r = r.nextSibling)
    if (r.nodeType === Node.ELEMENT_NODE && n(Ae(e, r)))
      return "selfAndChildren";
  return t.shadowRoot && n(Ae(e, t.shadowRoot)) ? "selfAndChildren" : "self";
}
function op(e, t) {
  const n = Wh(t);
  if (n) return n.map((s) => Ae(e, s));
  const r = t.getAttribute("aria-label");
  if (r !== null && r.trim())
    return [{ full: r, normalized: ze(r), immediate: [r] }];
  const i = t.nodeName === "INPUT" && t.type !== "hidden";
  if (
    ["BUTTON", "METER", "OUTPUT", "PROGRESS", "SELECT", "TEXTAREA"].includes(
      t.nodeName,
    ) ||
    i
  ) {
    const s = t.labels;
    if (s) return [...s].map((o) => Ae(e, o));
  }
  return [];
}
function Ac(e) {
  return e.displayName || e.name || "Anonymous";
}
function uy(e) {
  if (e.type)
    switch (typeof e.type) {
      case "function":
        return Ac(e.type);
      case "string":
        return e.type;
      case "object":
        return e.type.displayName || (e.type.render ? Ac(e.type.render) : "");
    }
  if (e._currentElement) {
    const t = e._currentElement.type;
    if (typeof t == "string") return t;
    if (typeof t == "function") return t.displayName || t.name || "Anonymous";
  }
  return "";
}
function cy(e) {
  var t;
  return e.key ?? ((t = e._currentElement) == null ? void 0 : t.key);
}
function dy(e) {
  if (e.child) {
    const n = [];
    for (let r = e.child; r; r = r.sibling) n.push(r);
    return n;
  }
  if (!e._currentElement) return [];
  const t = (n) => {
    var i;
    const r = (i = n._currentElement) == null ? void 0 : i.type;
    return typeof r == "function" || typeof r == "string";
  };
  if (e._renderedComponent) {
    const n = e._renderedComponent;
    return t(n) ? [n] : [];
  }
  return e._renderedChildren
    ? [...Object.values(e._renderedChildren)].filter(t)
    : [];
}
function fy(e) {
  var r;
  const t =
    e.memoizedProps || ((r = e._currentElement) == null ? void 0 : r.props);
  if (!t || typeof t == "string") return t;
  const n = { ...t };
  return delete n.children, n;
}
function lp(e) {
  var r;
  const t = {
      key: cy(e),
      name: uy(e),
      children: dy(e).map(lp),
      rootElements: [],
      props: fy(e),
    },
    n =
      e.stateNode ||
      e._hostNode ||
      ((r = e._renderedComponent) == null ? void 0 : r._hostNode);
  if (n instanceof Element) t.rootElements.push(n);
  else for (const i of t.children) t.rootElements.push(...i.rootElements);
  return t;
}
function ap(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) ap(r, t, n);
  return n;
}
function up(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
  do {
    const i = r.currentNode,
      s = i,
      o = Object.keys(s).find(
        (a) => a.startsWith("__reactContainer") && s[a] !== null,
      );
    if (o) t.push(s[o].stateNode.current);
    else {
      const a = "_reactRootContainer";
      s.hasOwnProperty(a) &&
        s[a] !== null &&
        t.push(s[a]._internalRoot.current);
    }
    if (i instanceof Element && i.hasAttribute("data-reactroot"))
      for (const a of Object.keys(i))
        (a.startsWith("__reactInternalInstance") ||
          a.startsWith("__reactFiber")) &&
          t.push(i[a]);
    const l = i instanceof Element ? i.shadowRoot : null;
    l && up(l, t);
  } while (r.nextNode());
  return t;
}
const hy = {
  queryAll(e, t) {
    const { name: n, attributes: r } = on(t, !1),
      o = up(e.ownerDocument || e)
        .map((a) => lp(a))
        .map((a) =>
          ap(a, (u) => {
            const c = u.props ?? {};
            if (
              (u.key !== void 0 && (c.key = u.key),
              (n && u.name !== n) || u.rootElements.some((f) => !Bs(e, f)))
            )
              return !1;
            for (const f of r) if (!ip(c, f)) return !1;
            return !0;
          }),
        )
        .flat(),
      l = new Set();
    for (const a of o) for (const u of a.rootElements) l.add(u);
    return [...l];
  },
};
function cp(e, t) {
  const n = e.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
  let r = n.substring(n.lastIndexOf("/") + 1);
  return r.endsWith(t) && (r = r.substring(0, r.length - t.length)), r;
}
function py(e, t) {
  return t ? t.toUpperCase() : "";
}
const gy = /(?:^|[-_/])(\w)/g,
  dp = (e) => e && e.replace(gy, py);
function my(e) {
  function t(c) {
    const f = c.name || c._componentTag || c.__playwright_guessedName;
    if (f) return f;
    const d = c.__file;
    if (d) return dp(cp(d, ".vue"));
  }
  function n(c, f) {
    return (c.type.__playwright_guessedName = f), f;
  }
  function r(c) {
    var d, g, m, y;
    const f = t(c.type || {});
    if (f) return f;
    if (c.root === c) return "Root";
    for (const _ in (g = (d = c.parent) == null ? void 0 : d.type) == null
      ? void 0
      : g.components)
      if (((m = c.parent) == null ? void 0 : m.type.components[_]) === c.type)
        return n(c, _);
    for (const _ in (y = c.appContext) == null ? void 0 : y.components)
      if (c.appContext.components[_] === c.type) return n(c, _);
    return "Anonymous Component";
  }
  function i(c) {
    return c._isBeingDestroyed || c.isUnmounted;
  }
  function s(c) {
    return c.subTree.type.toString() === "Symbol(Fragment)";
  }
  function o(c) {
    const f = [];
    return (
      c.component && f.push(c.component),
      c.suspense && f.push(...o(c.suspense.activeBranch)),
      Array.isArray(c.children) &&
        c.children.forEach((d) => {
          d.component ? f.push(d.component) : f.push(...o(d));
        }),
      f.filter((d) => {
        var g;
        return !i(d) && !((g = d.type.devtools) != null && g.hide);
      })
    );
  }
  function l(c) {
    return s(c) ? a(c.subTree) : [c.subTree.el];
  }
  function a(c) {
    if (!c.children) return [];
    const f = [];
    for (let d = 0, g = c.children.length; d < g; d++) {
      const m = c.children[d];
      m.component ? f.push(...l(m.component)) : m.el && f.push(m.el);
    }
    return f;
  }
  function u(c) {
    return {
      name: r(c),
      children: o(c.subTree).map(u),
      rootElements: l(c),
      props: c.props,
    };
  }
  return u(e);
}
function vy(e) {
  function t(s) {
    const o = s.displayName || s.name || s._componentTag;
    if (o) return o;
    const l = s.__file;
    if (l) return dp(cp(l, ".vue"));
  }
  function n(s) {
    const o = t(s.$options || s.fnOptions || {});
    return o || (s.$root === s ? "Root" : "Anonymous Component");
  }
  function r(s) {
    return s.$children
      ? s.$children
      : Array.isArray(s.subTree.children)
        ? s.subTree.children
            .filter((o) => !!o.component)
            .map((o) => o.component)
        : [];
  }
  function i(s) {
    return {
      name: n(s),
      children: r(s).map(i),
      rootElements: [s.$el],
      props: s._props,
    };
  }
  return i(e);
}
function fp(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) fp(r, t, n);
  return n;
}
function hp(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT),
    i = new Set();
  do {
    const s = r.currentNode;
    s.__vue__ && i.add(s.__vue__.$root),
      s.__vue_app__ &&
        s._vnode &&
        s._vnode.component &&
        t.push({ root: s._vnode.component, version: 3 });
    const o = s instanceof Element ? s.shadowRoot : null;
    o && hp(o, t);
  } while (r.nextNode());
  for (const s of i) t.push({ version: 2, root: s });
  return t;
}
const yy = {
    queryAll(e, t) {
      const n = e.ownerDocument || e,
        { name: r, attributes: i } = on(t, !1),
        l = hp(n)
          .map((u) => (u.version === 3 ? my(u.root) : vy(u.root)))
          .map((u) =>
            fp(u, (c) => {
              if ((r && c.name !== r) || c.rootElements.some((f) => !Bs(e, f)))
                return !1;
              for (const f of i) if (!ip(c.props, f)) return !1;
              return !0;
            }),
          )
          .flat(),
        a = new Set();
      for (const u of l) for (const c of u.rootElements) a.add(c);
      return [...a];
    },
  },
  pp = [
    "selected",
    "checked",
    "pressed",
    "expanded",
    "level",
    "disabled",
    "name",
    "include-hidden",
  ];
pp.sort();
function fr(e, t, n) {
  if (!t.includes(n))
    throw new Error(
      `"${e}" attribute is only supported for roles: ${t
        .slice()
        .sort()
        .map((r) => `"${r}"`)
        .join(", ")}`,
    );
}
function vn(e, t) {
  if (e.op !== "<truthy>" && !t.includes(e.value))
    throw new Error(
      `"${e.name}" must be one of ${t.map((n) => JSON.stringify(n)).join(", ")}`,
    );
}
function yn(e, t) {
  if (!t.includes(e.op))
    throw new Error(`"${e.name}" does not support "${e.op}" matcher`);
}
function wy(e, t) {
  const n = { role: t };
  for (const r of e)
    switch (r.name) {
      case "checked": {
        fr(r.name, za, t),
          vn(r, [!0, !1, "mixed"]),
          yn(r, ["<truthy>", "="]),
          (n.checked = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "pressed": {
        fr(r.name, Da, t),
          vn(r, [!0, !1, "mixed"]),
          yn(r, ["<truthy>", "="]),
          (n.pressed = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "selected": {
        fr(r.name, ja, t),
          vn(r, [!0, !1]),
          yn(r, ["<truthy>", "="]),
          (n.selected = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "expanded": {
        fr(r.name, Fa, t),
          vn(r, [!0, !1]),
          yn(r, ["<truthy>", "="]),
          (n.expanded = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "level": {
        if (
          (fr(r.name, Ha, t),
          typeof r.value == "string" && (r.value = +r.value),
          r.op !== "=" || typeof r.value != "number" || Number.isNaN(r.value))
        )
          throw new Error('"level" attribute must be compared to a number');
        n.level = r.value;
        break;
      }
      case "disabled": {
        vn(r, [!0, !1]),
          yn(r, ["<truthy>", "="]),
          (n.disabled = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      case "name": {
        if (r.op === "<truthy>")
          throw new Error('"name" attribute must have a value');
        if (typeof r.value != "string" && !(r.value instanceof RegExp))
          throw new Error(
            '"name" attribute must be a string or a regular expression',
          );
        (n.name = r.value), (n.nameOp = r.op), (n.exact = r.caseSensitive);
        break;
      }
      case "include-hidden": {
        vn(r, [!0, !1]),
          yn(r, ["<truthy>", "="]),
          (n.includeHidden = r.op === "<truthy>" ? !0 : r.value);
        break;
      }
      default:
        throw new Error(
          `Unknown attribute "${r.name}", must be one of ${pp.map((i) => `"${i}"`).join(", ")}.`,
        );
    }
  return n;
}
function _y(e, t, n) {
  const r = [],
    i = (o) => {
      if (
        ye(o) === t.role &&
        !(t.selected !== void 0 && Qh(o) !== t.selected) &&
        !(t.checked !== void 0 && Kh(o) !== t.checked) &&
        !(t.pressed !== void 0 && Xh(o) !== t.pressed) &&
        !(t.expanded !== void 0 && Jh(o) !== t.expanded) &&
        !(t.level !== void 0 && Yh(o) !== t.level) &&
        !(t.disabled !== void 0 && Ua(o) !== t.disabled) &&
        !(!t.includeHidden && Ze(o))
      ) {
        if (t.name !== void 0) {
          const l = ze(Gr(o, !!t.includeHidden));
          if (
            (typeof t.name == "string" && (t.name = ze(t.name)),
            n && !t.exact && t.nameOp === "=" && (t.nameOp = "*="),
            !sp(l, {
              name: "",
              jsonPath: [],
              op: t.nameOp || "=",
              value: t.name,
              caseSensitive: !!t.exact,
            }))
          )
            return;
        }
        r.push(o);
      }
    },
    s = (o) => {
      const l = [];
      o.shadowRoot && l.push(o.shadowRoot);
      for (const a of o.querySelectorAll("*"))
        i(a), a.shadowRoot && l.push(a.shadowRoot);
      l.forEach(s);
    };
  return s(e), r;
}
function Lc(e) {
  return {
    queryAll: (t, n) => {
      const r = on(n, !0),
        i = r.name.toLowerCase();
      if (!i) throw new Error("Role must not be empty");
      const s = wy(r.attributes, i);
      Ga();
      try {
        return _y(t, s, e);
      } finally {
        Xa();
      }
    },
  };
}
function xy(e, t, n) {
  const r = e.left - t.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function Sy(e, t, n) {
  const r = t.left - e.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function Ey(e, t, n) {
  const r = t.top - e.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function ky(e, t, n) {
  const r = e.top - t.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function Ty(e, t, n) {
  const r = n === void 0 ? 50 : n;
  let i = 0;
  return (
    e.left - t.right >= 0 && (i += e.left - t.right),
    t.left - e.right >= 0 && (i += t.left - e.right),
    t.top - e.bottom >= 0 && (i += t.top - e.bottom),
    e.top - t.bottom >= 0 && (i += e.top - t.bottom),
    i > r ? void 0 : i
  );
}
const Cy = ["left-of", "right-of", "above", "below", "near"];
function gp(e, t, n, r) {
  const i = t.getBoundingClientRect(),
    s = { "left-of": Sy, "right-of": xy, above: Ey, below: ky, near: Ty }[e];
  let o;
  for (const l of n) {
    if (l === t) continue;
    const a = s(i, l.getBoundingClientRect(), r);
    a !== void 0 && (o === void 0 || a < o) && (o = a);
  }
  return o;
}
class Ny {
  constructor(t) {
    (this._engines = new Map()),
      (this._cacheQueryCSS = new Map()),
      (this._cacheMatches = new Map()),
      (this._cacheQuery = new Map()),
      (this._cacheMatchesSimple = new Map()),
      (this._cacheMatchesParents = new Map()),
      (this._cacheCallMatches = new Map()),
      (this._cacheCallQuery = new Map()),
      (this._cacheQuerySimple = new Map()),
      (this._cacheText = new Map()),
      (this._retainCacheCounter = 0);
    for (const [i, s] of t) this._engines.set(i, s);
    this._engines.set("not", Ly),
      this._engines.set("is", xr),
      this._engines.set("where", xr),
      this._engines.set("has", by),
      this._engines.set("scope", Ay),
      this._engines.set("light", Iy),
      this._engines.set("visible", My),
      this._engines.set("text", Py),
      this._engines.set("text-is", Ry),
      this._engines.set("text-matches", $y),
      this._engines.set("has-text", Oy),
      this._engines.set("right-of", hr("right-of")),
      this._engines.set("left-of", hr("left-of")),
      this._engines.set("above", hr("above")),
      this._engines.set("below", hr("below")),
      this._engines.set("near", hr("near")),
      this._engines.set("nth-match", jy);
    const n = [...this._engines.keys()];
    n.sort();
    const r = [...bh];
    if ((r.sort(), n.join("|") !== r.join("|")))
      throw new Error(
        `Please keep customCSSNames in sync with evaluator engines: ${n.join("|")} vs ${r.join("|")}`,
      );
  }
  begin() {
    ++this._retainCacheCounter;
  }
  end() {
    --this._retainCacheCounter,
      this._retainCacheCounter ||
        (this._cacheQueryCSS.clear(),
        this._cacheMatches.clear(),
        this._cacheQuery.clear(),
        this._cacheMatchesSimple.clear(),
        this._cacheMatchesParents.clear(),
        this._cacheCallMatches.clear(),
        this._cacheCallQuery.clear(),
        this._cacheQuerySimple.clear(),
        this._cacheText.clear());
  }
  _cached(t, n, r, i) {
    t.has(n) || t.set(n, []);
    const s = t.get(n),
      o = s.find((a) => r.every((u, c) => a.rest[c] === u));
    if (o) return o.result;
    const l = i();
    return s.push({ rest: r, result: l }), l;
  }
  _checkSelector(t) {
    if (
      !(
        typeof t == "object" &&
        t &&
        (Array.isArray(t) || ("simples" in t && t.simples.length))
      )
    )
      throw new Error(`Malformed selector "${t}"`);
    return t;
  }
  matches(t, n, r) {
    const i = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheMatches,
        t,
        [i, r.scope, r.pierceShadow, r.originalScope],
        () =>
          Array.isArray(i)
            ? this._matchesEngine(xr, t, i, r)
            : (this._hasScopeClause(i) &&
                (r = this._expandContextForScopeMatching(r)),
              this._matchesSimple(
                t,
                i.simples[i.simples.length - 1].selector,
                r,
              )
                ? this._matchesParents(t, i, i.simples.length - 2, r)
                : !1),
      );
    } finally {
      this.end();
    }
  }
  query(t, n) {
    const r = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheQuery,
        r,
        [t.scope, t.pierceShadow, t.originalScope],
        () => {
          if (Array.isArray(r)) return this._queryEngine(xr, t, r);
          this._hasScopeClause(r) &&
            (t = this._expandContextForScopeMatching(t));
          const i = this._scoreMap;
          this._scoreMap = new Map();
          let s = this._querySimple(
            t,
            r.simples[r.simples.length - 1].selector,
          );
          return (
            (s = s.filter((o) =>
              this._matchesParents(o, r, r.simples.length - 2, t),
            )),
            this._scoreMap.size &&
              s.sort((o, l) => {
                const a = this._scoreMap.get(o),
                  u = this._scoreMap.get(l);
                return a === u
                  ? 0
                  : a === void 0
                    ? 1
                    : u === void 0
                      ? -1
                      : a - u;
              }),
            (this._scoreMap = i),
            s
          );
        },
      );
    } finally {
      this.end();
    }
  }
  _markScore(t, n) {
    this._scoreMap && this._scoreMap.set(t, n);
  }
  _hasScopeClause(t) {
    return t.simples.some((n) =>
      n.selector.functions.some((r) => r.name === "scope"),
    );
  }
  _expandContextForScopeMatching(t) {
    if (t.scope.nodeType !== 1) return t;
    const n = Se(t.scope);
    return n
      ? { ...t, scope: n, originalScope: t.originalScope || t.scope }
      : t;
  }
  _matchesSimple(t, n, r) {
    return this._cached(
      this._cacheMatchesSimple,
      t,
      [n, r.scope, r.pierceShadow, r.originalScope],
      () => {
        if (t === r.scope || (n.css && !this._matchesCSS(t, n.css))) return !1;
        for (const i of n.functions)
          if (!this._matchesEngine(this._getEngine(i.name), t, i.args, r))
            return !1;
        return !0;
      },
    );
  }
  _querySimple(t, n) {
    return n.functions.length
      ? this._cached(
          this._cacheQuerySimple,
          n,
          [t.scope, t.pierceShadow, t.originalScope],
          () => {
            let r = n.css;
            const i = n.functions;
            r === "*" && i.length && (r = void 0);
            let s,
              o = -1;
            r !== void 0
              ? (s = this._queryCSS(t, r))
              : ((o = i.findIndex(
                  (l) => this._getEngine(l.name).query !== void 0,
                )),
                o === -1 && (o = 0),
                (s = this._queryEngine(
                  this._getEngine(i[o].name),
                  t,
                  i[o].args,
                )));
            for (let l = 0; l < i.length; l++) {
              if (l === o) continue;
              const a = this._getEngine(i[l].name);
              a.matches !== void 0 &&
                (s = s.filter((u) => this._matchesEngine(a, u, i[l].args, t)));
            }
            for (let l = 0; l < i.length; l++) {
              if (l === o) continue;
              const a = this._getEngine(i[l].name);
              a.matches === void 0 &&
                (s = s.filter((u) => this._matchesEngine(a, u, i[l].args, t)));
            }
            return s;
          },
        )
      : this._queryCSS(t, n.css || "*");
  }
  _matchesParents(t, n, r, i) {
    return r < 0
      ? !0
      : this._cached(
          this._cacheMatchesParents,
          t,
          [n, r, i.scope, i.pierceShadow, i.originalScope],
          () => {
            const { selector: s, combinator: o } = n.simples[r];
            if (o === ">") {
              const l = Ei(t, i);
              return !l || !this._matchesSimple(l, s, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (o === "+") {
              const l = So(t, i);
              return !l || !this._matchesSimple(l, s, i)
                ? !1
                : this._matchesParents(l, n, r - 1, i);
            }
            if (o === "") {
              let l = Ei(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === "") break;
                }
                l = Ei(l, i);
              }
              return !1;
            }
            if (o === "~") {
              let l = So(t, i);
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === "~") break;
                }
                l = So(l, i);
              }
              return !1;
            }
            if (o === ">=") {
              let l = t;
              for (; l; ) {
                if (this._matchesSimple(l, s, i)) {
                  if (this._matchesParents(l, n, r - 1, i)) return !0;
                  if (n.simples[r - 1].combinator === "") break;
                }
                l = Ei(l, i);
              }
              return !1;
            }
            throw new Error(`Unsupported combinator "${o}"`);
          },
        );
  }
  _matchesEngine(t, n, r, i) {
    if (t.matches) return this._callMatches(t, n, r, i);
    if (t.query) return this._callQuery(t, r, i).includes(n);
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _queryEngine(t, n, r) {
    if (t.query) return this._callQuery(t, r, n);
    if (t.matches)
      return this._queryCSS(n, "*").filter((i) =>
        this._callMatches(t, i, r, n),
      );
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _callMatches(t, n, r, i) {
    return this._cached(
      this._cacheCallMatches,
      n,
      [t, i.scope, i.pierceShadow, i.originalScope, ...r],
      () => t.matches(n, r, i, this),
    );
  }
  _callQuery(t, n, r) {
    return this._cached(
      this._cacheCallQuery,
      t,
      [r.scope, r.pierceShadow, r.originalScope, ...n],
      () => t.query(r, n, this),
    );
  }
  _matchesCSS(t, n) {
    return t.matches(n);
  }
  _queryCSS(t, n) {
    return this._cached(
      this._cacheQueryCSS,
      n,
      [t.scope, t.pierceShadow, t.originalScope],
      () => {
        let r = [];
        function i(s) {
          if (((r = r.concat([...s.querySelectorAll(n)])), !!t.pierceShadow)) {
            s.shadowRoot && i(s.shadowRoot);
            for (const o of s.querySelectorAll("*"))
              o.shadowRoot && i(o.shadowRoot);
          }
        }
        return i(t.scope), r;
      },
    );
  }
  _getEngine(t) {
    const n = this._engines.get(t);
    if (!n) throw new Error(`Unknown selector engine "${t}"`);
    return n;
  }
}
const xr = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      return t.some((i) => r.matches(e, i, n));
    },
    query(e, t, n) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      let r = [];
      for (const i of t) r = r.concat(n.query(e, i));
      return t.length === 1 ? r : mp(r);
    },
  },
  by = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"has" engine expects non-empty selector list');
      return r.query({ ...n, scope: e }, t).length > 0;
    },
  },
  Ay = {
    matches(e, t, n, r) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const i = n.originalScope || n.scope;
      return i.nodeType === 9 ? e === i.documentElement : e === i;
    },
    query(e, t, n) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      const r = e.originalScope || e.scope;
      if (r.nodeType === 9) {
        const i = r.documentElement;
        return i ? [i] : [];
      }
      return r.nodeType === 1 ? [r] : [];
    },
  },
  Ly = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"not" engine expects non-empty selector list');
      return !r.matches(e, t, n);
    },
  },
  Iy = {
    query(e, t, n) {
      return n.query({ ...e, pierceShadow: !1 }, t);
    },
    matches(e, t, n, r) {
      return r.matches(e, t, { ...n, pierceShadow: !1 });
    },
  },
  My = {
    matches(e, t, n, r) {
      if (t.length) throw new Error('"visible" engine expects no arguments');
      return nn(e);
    },
  },
  Py = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"text" engine expects a single string');
      const i = ze(t[0]).toLowerCase(),
        s = (o) => o.normalized.toLowerCase().includes(i);
      return qs(r._cacheText, e, s) === "self";
    },
  },
  Ry = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"text-is" engine expects a single string');
      const i = ze(t[0]),
        s = (o) =>
          !i && !o.immediate.length ? !0 : o.immediate.some((l) => ze(l) === i);
      return qs(r._cacheText, e, s) !== "none";
    },
  },
  $y = {
    matches(e, t, n, r) {
      if (
        t.length === 0 ||
        typeof t[0] != "string" ||
        t.length > 2 ||
        (t.length === 2 && typeof t[1] != "string")
      )
        throw new Error(
          '"text-matches" engine expects a regexp body and optional regexp flags',
        );
      const i = new RegExp(t[0], t.length === 2 ? t[1] : void 0),
        s = (o) => i.test(o.full);
      return qs(r._cacheText, e, s) === "self";
    },
  },
  Oy = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != "string")
        throw new Error('"has-text" engine expects a single string');
      if (Ja(e)) return !1;
      const i = ze(t[0]).toLowerCase();
      return ((o) => o.normalized.toLowerCase().includes(i))(
        Ae(r._cacheText, e),
      );
    },
  };
function hr(e) {
  return {
    matches(t, n, r, i) {
      const s =
          n.length && typeof n[n.length - 1] == "number"
            ? n[n.length - 1]
            : void 0,
        o = s === void 0 ? n : n.slice(0, n.length - 1);
      if (n.length < 1 + (s === void 0 ? 0 : 1))
        throw new Error(
          `"${e}" engine expects a selector list and optional maximum distance in pixels`,
        );
      const l = i.query(r, o),
        a = gp(e, t, l, s);
      return a === void 0 ? !1 : (i._markScore(t, a), !0);
    },
  };
}
const jy = {
  query(e, t, n) {
    let r = t[t.length - 1];
    if (t.length < 2)
      throw new Error(
        '"nth-match" engine expects non-empty selector list and an index argument',
      );
    if (typeof r != "number" || r < 1)
      throw new Error(
        '"nth-match" engine expects a one-based index as the last argument',
      );
    const i = xr.query(e, t.slice(0, t.length - 1), n);
    return r--, r < i.length ? [i[r]] : [];
  },
};
function Ei(e, t) {
  if (e !== t.scope) return t.pierceShadow ? Se(e) : e.parentElement || void 0;
}
function So(e, t) {
  if (e !== t.scope) return e.previousElementSibling || void 0;
}
function mp(e) {
  const t = new Map(),
    n = [],
    r = [];
  function i(o) {
    let l = t.get(o);
    if (l) return l;
    const a = Se(o);
    return (
      a ? i(a).children.push(o) : n.push(o),
      (l = { children: [], taken: !1 }),
      t.set(o, l),
      l
    );
  }
  for (const o of e) i(o).taken = !0;
  function s(o) {
    const l = t.get(o);
    if ((l.taken && r.push(o), l.children.length > 1)) {
      const a = new Set(l.children);
      l.children = [];
      let u = o.firstElementChild;
      for (; u && l.children.length < a.size; )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
      for (
        u = o.shadowRoot ? o.shadowRoot.firstElementChild : null;
        u && l.children.length < a.size;

      )
        a.has(u) && l.children.push(u), (u = u.nextElementSibling);
    }
    l.children.forEach(s);
  }
  return n.forEach(s), r;
}
const Pl = new Map(),
  Rl = new Map(),
  vp = 10,
  Zn = vp / 2,
  Ic = 1,
  zy = 2,
  Dy = 10,
  Fy = 50,
  yp = 100,
  wp = 120,
  _p = 140,
  xp = 160,
  $l = 180,
  Sp = 200,
  Hy = 250,
  Uy = yp + Zn,
  Vy = wp + Zn,
  By = _p + Zn,
  qy = xp + Zn,
  Wy = $l + Zn,
  Qy = Sp + Zn,
  Ky = 300,
  Gy = 500,
  Xy = 510,
  Eo = 520,
  Ep = 530,
  kp = 1e4,
  Jy = 1e7,
  Yy = 1e3;
function Mc(e, t, n) {
  e._evaluator.begin(), Ga();
  try {
    let r = [];
    if (n.forTextExpect) {
      let o = ki(e, t.ownerDocument.documentElement, n);
      for (let l = t; l; l = Se(l)) {
        const a = wn(e, l, { ...n, noText: !0 });
        if (!a) continue;
        if (At(a) <= Yy) {
          o = a;
          break;
        }
      }
      r = [Wi(o)];
    } else {
      if (!t.matches("input,textarea,select") && !t.isContentEditable) {
        const o = _r(
          t,
          "button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]",
          n.root,
        );
        o && nn(o) && (t = o);
      }
      if (n.multiple) {
        const o = wn(e, t, n),
          l = wn(e, t, { ...n, noText: !0 });
        let a = [o, l];
        if (
          (Pl.clear(),
          Rl.clear(),
          o && ko(o) && a.push(wn(e, t, { ...n, noCSSId: !0 })),
          l && ko(l) && a.push(wn(e, t, { ...n, noText: !0, noCSSId: !0 })),
          (a = a.filter(Boolean)),
          !a.length)
        ) {
          const u = ki(e, t, n);
          a.push(u), ko(u) && a.push(ki(e, t, { ...n, noCSSId: !0 }));
        }
        r = [...new Set(a.map((u) => Wi(u)))];
      } else {
        const o = wn(e, t, n) || ki(e, t, n);
        r = [Wi(o)];
      }
    }
    const i = r[0],
      s = e.parseSelector(i);
    return {
      selector: i,
      selectors: r,
      elements: e.querySelectorAll(s, n.root ?? t.ownerDocument),
    };
  } finally {
    Pl.clear(), Rl.clear(), Xa(), e._evaluator.end();
  }
}
function Pc(e) {
  return e.filter((t) => t[0].selector[0] !== "/");
}
function wn(e, t, n) {
  if (n.root && !Bs(n.root, t))
    throw new Error("Target element must belong to the root's subtree");
  if (t === n.root) return [{ engine: "css", selector: ":scope", score: 1 }];
  if (t.ownerDocument.documentElement === t)
    return [{ engine: "css", selector: "html", score: 1 }];
  const r = (s, o) => {
      const l = s === t;
      let a = o ? e1(e, s, s === t) : [];
      s !== t && (a = Pc(a));
      const u = Zy(e, s, n)
        .filter(
          (d) => !n.omitInternalEngines || !d.engine.startsWith("internal:"),
        )
        .map((d) => [d]);
      let c = Rc(e, n.root ?? t.ownerDocument, s, [...a, ...u], l);
      a = Pc(a);
      const f = (d) => {
        const g = o && !d.length,
          m = [...d, ...u].filter((_) => (c ? At(_) < At(c) : !0));
        let y = m[0];
        if (y)
          for (let _ = Se(s); _ && _ !== n.root; _ = Se(_)) {
            const p = i(_, g);
            if (!p || (c && At([...p, ...y]) >= At(c))) continue;
            if (((y = Rc(e, _, s, m, l)), !y)) return;
            const h = [...p, ...y];
            (!c || At(h) < At(c)) && (c = h);
          }
      };
      return f(a), s === t && a.length && f([]), c;
    },
    i = (s, o) => {
      const l = o ? Pl : Rl;
      let a = l.get(s);
      return a === void 0 && ((a = r(s, o)), l.set(s, a)), a;
    };
  return r(t, !n.noText);
}
function Zy(e, t, n) {
  const r = [];
  {
    for (const o of ["data-testid", "data-test-id", "data-test"])
      o !== n.testIdAttributeName &&
        t.getAttribute(o) &&
        r.push({
          engine: "css",
          selector: `[${o}=${cr(t.getAttribute(o))}]`,
          score: zy,
        });
    if (!n.noCSSId) {
      const o = t.getAttribute("id");
      o && !t1(o) && r.push({ engine: "css", selector: Tp(o), score: Gy });
    }
    r.push({
      engine: "css",
      selector: Ve(t.nodeName.toLowerCase()),
      score: Ep,
    });
  }
  if (t.nodeName === "IFRAME") {
    for (const o of ["name", "title"])
      t.getAttribute(o) &&
        r.push({
          engine: "css",
          selector: `${Ve(t.nodeName.toLowerCase())}[${o}=${cr(t.getAttribute(o))}]`,
          score: Dy,
        });
    return (
      t.getAttribute(n.testIdAttributeName) &&
        r.push({
          engine: "css",
          selector: `[${n.testIdAttributeName}=${cr(t.getAttribute(n.testIdAttributeName))}]`,
          score: Ic,
        }),
      Ol([r]),
      r
    );
  }
  if (
    (t.getAttribute(n.testIdAttributeName) &&
      r.push({
        engine: "internal:testid",
        selector: `[${n.testIdAttributeName}=${xe(t.getAttribute(n.testIdAttributeName), !0)}]`,
        score: Ic,
      }),
    t.nodeName === "INPUT" || t.nodeName === "TEXTAREA")
  ) {
    const o = t;
    if (o.placeholder) {
      r.push({
        engine: "internal:attr",
        selector: `[placeholder=${xe(o.placeholder, !0)}]`,
        score: Uy,
      });
      for (const l of Pn(o.placeholder))
        r.push({
          engine: "internal:attr",
          selector: `[placeholder=${xe(l.text, !1)}]`,
          score: yp - l.scoreBouns,
        });
    }
  }
  const i = op(e._evaluator._cacheText, t);
  for (const o of i) {
    const l = o.normalized;
    r.push({ engine: "internal:label", selector: qe(l, !0), score: Vy });
    for (const a of Pn(l))
      r.push({
        engine: "internal:label",
        selector: qe(a.text, !1),
        score: wp - a.scoreBouns,
      });
  }
  const s = ye(t);
  return (
    s &&
      !["none", "presentation"].includes(s) &&
      r.push({ engine: "internal:role", selector: s, score: Xy }),
    t.getAttribute("name") &&
      [
        "BUTTON",
        "FORM",
        "FIELDSET",
        "FRAME",
        "IFRAME",
        "INPUT",
        "KEYGEN",
        "OBJECT",
        "OUTPUT",
        "SELECT",
        "TEXTAREA",
        "MAP",
        "META",
        "PARAM",
      ].includes(t.nodeName) &&
      r.push({
        engine: "css",
        selector: `${Ve(t.nodeName.toLowerCase())}[name=${cr(t.getAttribute("name"))}]`,
        score: Eo,
      }),
    ["INPUT", "TEXTAREA"].includes(t.nodeName) &&
      t.getAttribute("type") !== "hidden" &&
      t.getAttribute("type") &&
      r.push({
        engine: "css",
        selector: `${Ve(t.nodeName.toLowerCase())}[type=${cr(t.getAttribute("type"))}]`,
        score: Eo,
      }),
    ["INPUT", "TEXTAREA", "SELECT"].includes(t.nodeName) &&
      t.getAttribute("type") !== "hidden" &&
      r.push({
        engine: "css",
        selector: Ve(t.nodeName.toLowerCase()),
        score: Eo + 1,
      }),
    Ol([r]),
    r
  );
}
function e1(e, t, n) {
  if (t.nodeName === "SELECT") return [];
  const r = [],
    i = t.getAttribute("title");
  if (i) {
    r.push([
      { engine: "internal:attr", selector: `[title=${xe(i, !0)}]`, score: Qy },
    ]);
    for (const a of Pn(i))
      r.push([
        {
          engine: "internal:attr",
          selector: `[title=${xe(a.text, !1)}]`,
          score: Sp - a.scoreBouns,
        },
      ]);
  }
  const s = t.getAttribute("alt");
  if (s && ["APPLET", "AREA", "IMG", "INPUT"].includes(t.nodeName)) {
    r.push([
      { engine: "internal:attr", selector: `[alt=${xe(s, !0)}]`, score: qy },
    ]);
    for (const a of Pn(s))
      r.push([
        {
          engine: "internal:attr",
          selector: `[alt=${xe(a.text, !1)}]`,
          score: xp - a.scoreBouns,
        },
      ]);
  }
  const o = Ae(e._evaluator._cacheText, t).normalized;
  if (o) {
    const a = Pn(o);
    if (n) {
      o.length <= 80 &&
        r.push([{ engine: "internal:text", selector: qe(o, !0), score: Wy }]);
      for (const c of a)
        r.push([
          {
            engine: "internal:text",
            selector: qe(c.text, !1),
            score: $l - c.scoreBouns,
          },
        ]);
    }
    const u = {
      engine: "css",
      selector: Ve(t.nodeName.toLowerCase()),
      score: Ep,
    };
    for (const c of a)
      r.push([
        u,
        {
          engine: "internal:has-text",
          selector: qe(c.text, !1),
          score: $l - c.scoreBouns,
        },
      ]);
    if (o.length <= 80) {
      const c = new RegExp("^" + bl(o) + "$");
      r.push([
        u,
        { engine: "internal:has-text", selector: qe(c, !1), score: Hy },
      ]);
    }
  }
  const l = ye(t);
  if (l && !["none", "presentation"].includes(l)) {
    const a = Gr(t, !1);
    if (a) {
      r.push([
        {
          engine: "internal:role",
          selector: `${l}[name=${xe(a, !0)}]`,
          score: By,
        },
      ]);
      for (const u of Pn(a))
        r.push([
          {
            engine: "internal:role",
            selector: `${l}[name=${xe(u.text, !1)}]`,
            score: _p - u.scoreBouns,
          },
        ]);
    }
  }
  return Ol(r), r;
}
function Tp(e) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(e) ? "#" + e : `[id="${Ve(e)}"]`;
}
function ko(e) {
  return e.some(
    (t) =>
      t.engine === "css" &&
      (t.selector.startsWith("#") || t.selector.startsWith('[id="')),
  );
}
function ki(e, t, n) {
  const r = n.root ?? t.ownerDocument,
    i = [];
  function s(l) {
    const a = i.slice();
    l && a.unshift(l);
    const u = a.join(" > "),
      c = e.parseSelector(u);
    return e.querySelector(c, r, !1) === t ? u : void 0;
  }
  function o(l) {
    const a = { engine: "css", selector: l, score: Jy },
      u = e.parseSelector(l),
      c = e.querySelectorAll(u, r);
    if (c.length === 1) return [a];
    const f = { engine: "nth", selector: String(c.indexOf(t)), score: kp };
    return [a, f];
  }
  for (let l = t; l && l !== r; l = Se(l)) {
    const a = l.nodeName.toLowerCase();
    let u = "";
    if (l.id && !n.noCSSId) {
      const d = Tp(l.id),
        g = s(d);
      if (g) return o(g);
      u = d;
    }
    const c = l.parentNode,
      f = [...l.classList];
    for (let d = 0; d < f.length; ++d) {
      const g = "." + Ve(f.slice(0, d + 1).join(".")),
        m = s(g);
      if (m) return o(m);
      !u && c && c.querySelectorAll(g).length === 1 && (u = g);
    }
    if (c) {
      const d = [...c.children],
        m =
          d.filter((_) => _.nodeName.toLowerCase() === a).indexOf(l) === 0
            ? Ve(a)
            : `${Ve(a)}:nth-child(${1 + d.indexOf(l)})`,
        y = s(m);
      if (y) return o(y);
      u || (u = m);
    } else u || (u = Ve(a));
    i.unshift(u);
  }
  return o(s());
}
function Ol(e) {
  for (const t of e)
    for (const n of t)
      n.score > Fy &&
        n.score < Ky &&
        (n.score += Math.min(vp, (n.selector.length / 10) | 0));
}
function Wi(e) {
  const t = [];
  let n = "";
  for (const { engine: r, selector: i } of e)
    t.length &&
      (n !== "css" || r !== "css" || i.startsWith(":nth-match(")) &&
      t.push(">>"),
      (n = r),
      r === "css" ? t.push(i) : t.push(`${r}=${i}`);
  return t.join(" ");
}
function At(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n].score * (e.length - n);
  return t;
}
function Rc(e, t, n, r, i) {
  const s = r.map((l) => ({ tokens: l, score: At(l) }));
  s.sort((l, a) => l.score - a.score);
  let o = null;
  for (const { tokens: l } of s) {
    const a = e.parseSelector(Wi(l)),
      u = e.querySelectorAll(a, t);
    if (u[0] === n && u.length === 1) return l;
    const c = u.indexOf(n);
    if (!i || o || c === -1 || u.length > 5) continue;
    const f = { engine: "nth", selector: String(c), score: kp };
    o = [...l, f];
  }
  return o;
}
function t1(e) {
  let t,
    n = 0;
  for (let r = 0; r < e.length; ++r) {
    const i = e[r];
    let s;
    if (!(i === "-" || i === "_")) {
      if (
        (i >= "a" && i <= "z"
          ? (s = "lower")
          : i >= "A" && i <= "Z"
            ? (s = "upper")
            : i >= "0" && i <= "9"
              ? (s = "digit")
              : (s = "other"),
        s === "lower" && t === "upper")
      ) {
        t = s;
        continue;
      }
      t && t !== s && ++n, (t = s);
    }
  }
  return n >= e.length / 4;
}
function Ti(e, t) {
  if (e.length <= t) return e;
  e = e.substring(0, t);
  const n = e.match(/^(.*)\b(.+?)$/);
  return n ? n[1].trimEnd() : "";
}
function Pn(e) {
  let t = [];
  {
    const n = e.match(/^([\d.,]+)[^.,\w]/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = Ti(e.substring(r).trimStart(), 80);
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  {
    const n = e.match(/[^.,\w]([\d.,]+)$/),
      r = n ? n[1].length : 0;
    if (r) {
      const i = Ti(e.substring(0, e.length - r).trimEnd(), 80);
      t.push({ text: i, scoreBouns: i.length <= 30 ? 2 : 1 });
    }
  }
  return (
    e.length <= 30
      ? t.push({ text: e, scoreBouns: 0 })
      : (t.push({ text: Ti(e, 80), scoreBouns: 0 }),
        t.push({ text: Ti(e, 30), scoreBouns: 1 })),
    (t = t.filter((n) => n.text)),
    t.length || t.push({ text: e.substring(0, 80), scoreBouns: 0 }),
    t
  );
}
const $c =
  ":host{font-size:13px;font-family:system-ui,Ubuntu,Droid Sans,sans-serif;color:#333}svg{position:absolute;height:0}x-pw-tooltip{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:#fff;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:none;font-size:12.8px;font-weight:400;left:0;line-height:1.5;max-width:600px;position:absolute;top:0;padding:0;flex-direction:column;overflow:hidden}x-pw-tooltip-line{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;cursor:pointer}x-pw-tooltip-line.selectable:hover{background-color:#f2f2f2;overflow:hidden}x-pw-tooltip-footer{display:flex;max-width:600px;padding:6px;-webkit-user-select:none;user-select:none;color:#777}x-pw-dialog{background-color:#fff;pointer-events:auto;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:flex;flex-direction:column;position:absolute;width:400px;height:150px;z-index:10;font-size:13px}x-pw-dialog-body{display:flex;flex-direction:column;flex:auto}x-pw-dialog-body label{margin:5px 8px;display:flex;flex-direction:row;align-items:center}x-pw-highlight{position:absolute;top:0;left:0;width:0;height:0}x-pw-action-point{position:absolute;width:20px;height:20px;background:red;border-radius:10px;margin:-10px 0 0 -10px;z-index:2}x-pw-separator{height:1px;margin:6px 9px;background:#949494e5}x-pw-tool-gripper{height:28px;width:24px;margin:2px 0;cursor:grab}x-pw-tool-gripper:active{cursor:grabbing}x-pw-tool-gripper>x-div{width:16px;height:16px;margin:6px 4px;clip-path:url(#icon-gripper);background-color:#555}x-pw-tools-list>label{display:flex;align-items:center;margin:0 10px;-webkit-user-select:none;user-select:none}x-pw-tools-list{display:flex;width:100%;border-bottom:1px solid #dddddd}x-pw-tool-item{pointer-events:auto;cursor:pointer;height:28px;width:28px;border-radius:3px}x-pw-tool-item:not(.disabled):hover{background-color:#dbdbdb}x-pw-tool-item.active{background-color:#8acae480}x-pw-tool-item.active:not(.disabled):hover{background-color:#8acae4c4}x-pw-tool-item>x-div{width:16px;height:16px;margin:6px;background-color:#3a3a3a}x-pw-tool-item.disabled>x-div{background-color:#61616180;cursor:default}x-pw-tool-item.record.active{background-color:transparent}x-pw-tool-item.record.active:hover{background-color:#dbdbdb}x-pw-tool-item.record.active>x-div{background-color:#a1260d}x-pw-tool-item.accept>x-div{background-color:#388a34}x-pw-tool-item.record>x-div{clip-path:url(#icon-circle-large-filled)}x-pw-tool-item.pick-locator>x-div{clip-path:url(#icon-inspect)}x-pw-tool-item.text>x-div{clip-path:url(#icon-whole-word)}x-pw-tool-item.visibility>x-div{clip-path:url(#icon-eye)}x-pw-tool-item.value>x-div{clip-path:url(#icon-symbol-constant)}x-pw-tool-item.snapshot>x-div{clip-path:url(#icon-gist)}x-pw-tool-item.accept>x-div{clip-path:url(#icon-check)}x-pw-tool-item.cancel>x-div{clip-path:url(#icon-close)}x-pw-tool-item.succeeded>x-div{clip-path:url(#icon-pass);background-color:#388a34!important}x-pw-overlay{position:absolute;top:0;max-width:min-content;z-index:2147483647;background:transparent;pointer-events:auto}x-pw-overlay x-pw-tools-list{background-color:#fffd;box-shadow:#0000001a 0 5px 5px;border-radius:3px;border-bottom:none}x-pw-overlay x-pw-tool-item{margin:2px}textarea.text-editor{font-family:system-ui,Ubuntu,Droid Sans,sans-serif;flex:auto;border:none;margin:6px 10px;color:#333;outline:1px solid transparent!important;resize:none;padding:0;font-size:13px}textarea.text-editor.does-not-match{outline:1px solid red!important}x-div{display:block}x-spacer{flex:auto}*{box-sizing:border-box}*[hidden]{display:none!important}x-locator-editor{flex:none;width:100%;height:60px;padding:4px;border-bottom:1px solid #dddddd;outline:1px solid transparent}x-locator-editor.does-not-match{outline:1px solid red}.CodeMirror{width:100%!important;height:100%!important}";
class To {
  constructor(t) {
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._language = "javascript"),
      (this._injectedScript = t);
    const n = t.document;
    (this._isUnderTest = t.isUnderTest),
      (this._glassPaneElement = n.createElement("x-pw-glass")),
      (this._glassPaneElement.style.position = "fixed"),
      (this._glassPaneElement.style.top = "0"),
      (this._glassPaneElement.style.right = "0"),
      (this._glassPaneElement.style.bottom = "0"),
      (this._glassPaneElement.style.left = "0"),
      (this._glassPaneElement.style.zIndex = "2147483646"),
      (this._glassPaneElement.style.pointerEvents = "none"),
      (this._glassPaneElement.style.display = "flex"),
      (this._glassPaneElement.style.backgroundColor = "transparent");
    for (const r of [
      "click",
      "auxclick",
      "dragstart",
      "input",
      "keydown",
      "keyup",
      "pointerdown",
      "pointerup",
      "mousedown",
      "mouseup",
      "mouseleave",
      "focus",
      "scroll",
    ])
      this._glassPaneElement.addEventListener(r, (i) => {
        i.stopPropagation(),
          i.stopImmediatePropagation(),
          i.type === "click" &&
            i.button === 0 &&
            this._highlightOptions.tooltipListItemSelected &&
            this._highlightOptions.tooltipListItemSelected(void 0);
      });
    if (
      ((this._actionPointElement = n.createElement("x-pw-action-point")),
      this._actionPointElement.setAttribute("hidden", "true"),
      (this._glassPaneShadow = this._glassPaneElement.attachShadow({
        mode: this._isUnderTest ? "open" : "closed",
      })),
      typeof this._glassPaneShadow.adoptedStyleSheets.push == "function")
    ) {
      const r = new this._injectedScript.window.CSSStyleSheet();
      r.replaceSync($c), this._glassPaneShadow.adoptedStyleSheets.push(r);
    } else {
      const r = this._injectedScript.document.createElement("style");
      (r.textContent = $c), this._glassPaneShadow.appendChild(r);
    }
    this._glassPaneShadow.appendChild(this._actionPointElement);
  }
  install() {
    this._injectedScript.document.documentElement &&
      !this._injectedScript.document.documentElement.contains(
        this._glassPaneElement,
      ) &&
      this._injectedScript.document.documentElement.appendChild(
        this._glassPaneElement,
      );
  }
  setLanguage(t) {
    this._language = t;
  }
  runHighlightOnRaf(t) {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this.updateHighlight(
        this._injectedScript.querySelectorAll(
          t,
          this._injectedScript.document.documentElement,
        ),
        { tooltipText: Fn(this._language, yt(t)) },
      ),
      (this._rafRequest = this._injectedScript.builtinRequestAnimationFrame(
        () => this.runHighlightOnRaf(t),
      ));
  }
  uninstall() {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this._glassPaneElement.remove();
  }
  showActionPoint(t, n) {
    (this._actionPointElement.style.top = n + "px"),
      (this._actionPointElement.style.left = t + "px"),
      (this._actionPointElement.hidden = !1);
  }
  hideActionPoint() {
    this._actionPointElement.hidden = !0;
  }
  clearHighlight() {
    var t, n;
    for (const r of this._highlightEntries)
      (t = r.highlightElement) == null || t.remove(),
        (n = r.tooltipElement) == null || n.remove();
    (this._highlightEntries = []),
      (this._highlightOptions = {}),
      (this._glassPaneElement.style.pointerEvents = "none");
  }
  updateHighlight(t, n) {
    this._innerUpdateHighlight(t, n);
  }
  maskElements(t, n) {
    this._innerUpdateHighlight(t, { color: n });
  }
  _innerUpdateHighlight(t, n) {
    let r = n.color;
    if (
      (r || (r = t.length > 1 ? "#f6b26b7f" : "#6fa8dc7f"),
      !this._highlightIsUpToDate(t, n))
    ) {
      this.clearHighlight(),
        (this._highlightOptions = n),
        (this._glassPaneElement.style.pointerEvents = n.tooltipListItemSelected
          ? "initial"
          : "none");
      for (let i = 0; i < t.length; ++i) {
        const s = this._createHighlightElement();
        this._glassPaneShadow.appendChild(s);
        let o;
        if (n.tooltipList || n.tooltipText || n.tooltipFooter) {
          (o = this._injectedScript.document.createElement("x-pw-tooltip")),
            this._glassPaneShadow.appendChild(o),
            (o.style.top = "0"),
            (o.style.left = "0"),
            (o.style.display = "flex");
          let l = [];
          if (n.tooltipList) l = n.tooltipList;
          else if (n.tooltipText) {
            const a = t.length > 1 ? ` [${i + 1} of ${t.length}]` : "";
            l = [n.tooltipText + a];
          }
          for (let a = 0; a < l.length; a++) {
            const u =
              this._injectedScript.document.createElement("x-pw-tooltip-line");
            (u.textContent = l[a]),
              o.appendChild(u),
              n.tooltipListItemSelected &&
                (u.classList.add("selectable"),
                u.addEventListener("click", () => {
                  var c;
                  return (c = n.tooltipListItemSelected) == null
                    ? void 0
                    : c.call(n, a);
                }));
          }
          if (n.tooltipFooter) {
            const a = this._injectedScript.document.createElement(
              "x-pw-tooltip-footer",
            );
            (a.textContent = n.tooltipFooter), o.appendChild(a);
          }
        }
        this._highlightEntries.push({
          targetElement: t[i],
          tooltipElement: o,
          highlightElement: s,
        });
      }
      for (const i of this._highlightEntries) {
        if (
          ((i.box = i.targetElement.getBoundingClientRect()), !i.tooltipElement)
        )
          continue;
        const { anchorLeft: s, anchorTop: o } = this.tooltipPosition(
          i.box,
          i.tooltipElement,
        );
        (i.tooltipTop = o), (i.tooltipLeft = s);
      }
      for (const i of this._highlightEntries) {
        i.tooltipElement &&
          ((i.tooltipElement.style.top = i.tooltipTop + "px"),
          (i.tooltipElement.style.left = i.tooltipLeft + "px"));
        const s = i.box;
        (i.highlightElement.style.backgroundColor = r),
          (i.highlightElement.style.left = s.x + "px"),
          (i.highlightElement.style.top = s.y + "px"),
          (i.highlightElement.style.width = s.width + "px"),
          (i.highlightElement.style.height = s.height + "px"),
          (i.highlightElement.style.display = "block"),
          this._isUnderTest &&
            console.error(
              "Highlight box for test: " +
                JSON.stringify({
                  x: s.x,
                  y: s.y,
                  width: s.width,
                  height: s.height,
                }),
            );
      }
    }
  }
  firstBox() {
    var t;
    return (t = this._highlightEntries[0]) == null ? void 0 : t.box;
  }
  tooltipPosition(t, n) {
    const r = n.offsetWidth,
      i = n.offsetHeight,
      s = this._glassPaneElement.offsetWidth,
      o = this._glassPaneElement.offsetHeight;
    let l = t.left;
    l + r > s - 5 && (l = s - r - 5);
    let a = t.bottom + 5;
    return (
      a + i > o - 5 && (t.top > i + 5 ? (a = t.top - i - 5) : (a = o - 5 - i)),
      { anchorLeft: l, anchorTop: a }
    );
  }
  _highlightIsUpToDate(t, n) {
    var r, i;
    if (
      n.tooltipText !== this._highlightOptions.tooltipText ||
      n.tooltipListItemSelected !==
        this._highlightOptions.tooltipListItemSelected ||
      n.tooltipFooter !== this._highlightOptions.tooltipFooter ||
      ((r = n.tooltipList) == null ? void 0 : r.length) !==
        ((i = this._highlightOptions.tooltipList) == null ? void 0 : i.length)
    )
      return !1;
    if (n.tooltipList && this._highlightOptions.tooltipList) {
      for (let s = 0; s < n.tooltipList.length; s++)
        if (n.tooltipList[s] !== this._highlightOptions.tooltipList[s])
          return !1;
    }
    if (t.length !== this._highlightEntries.length) return !1;
    for (let s = 0; s < this._highlightEntries.length; ++s) {
      if (t[s] !== this._highlightEntries[s].targetElement) return !1;
      const o = this._highlightEntries[s].box;
      if (!o) return !1;
      const l = t[s].getBoundingClientRect();
      if (
        l.top !== o.top ||
        l.right !== o.right ||
        l.bottom !== o.bottom ||
        l.left !== o.left
      )
        return !1;
    }
    return !0;
  }
  _createHighlightElement() {
    return this._injectedScript.document.createElement("x-pw-highlight");
  }
  appendChild(t) {
    this._glassPaneShadow.appendChild(t);
  }
}
function n1(e) {
  return Cp(e) ? "'" + e.replace(/'/g, "''") + "'" : e;
}
function Oc(e) {
  return Cp(e)
    ? '"' +
        e.replace(/[\\"\x00-\x1f\x7f-\x9f]/g, (t) => {
          switch (t) {
            case "\\":
              return "\\\\";
            case '"':
              return '\\"';
            case "\b":
              return "\\b";
            case "\f":
              return "\\f";
            case `
`:
              return "\\n";
            case "\r":
              return "\\r";
            case "	":
              return "\\t";
            default:
              return "\\x" + t.charCodeAt(0).toString(16).padStart(2, "0");
          }
        }) +
        '"'
    : e;
}
function Cp(e) {
  return !!(
    e.length === 0 ||
    /^\s|\s$/.test(e) ||
    /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/.test(e) ||
    /^-\s/.test(e) ||
    /^[&*].*/.test(e) ||
    /:(\s|$)/.test(e) ||
    /\s#/.test(e) ||
    /[\n\r]/.test(e) ||
    /^[?!]/.test(e) ||
    /^[>|]/.test(e) ||
    /^["']/.test(e) ||
    /[{}`]/.test(e)
  );
}
function Ya(e) {
  const t = new Set(),
    n = (s, o) => {
      if (t.has(o)) return;
      if ((t.add(o), o.nodeType === Node.TEXT_NODE && o.nodeValue)) {
        o.nodeValue && s.children.push(o.nodeValue || "");
        return;
      }
      if (o.nodeType !== Node.ELEMENT_NODE) return;
      const l = o;
      if (Ze(l)) return;
      const a = [];
      if (l.hasAttribute("aria-owns")) {
        const c = l.getAttribute("aria-owns").split(/\s+/);
        for (const f of c) {
          const d = e.ownerDocument.getElementById(f);
          d && a.push(d);
        }
      }
      const u = r1(l);
      u && s.children.push(u), r(u || s, l, a);
    };
  function r(s, o, l = []) {
    var f;
    const u =
      (((f = gn(o)) == null ? void 0 : f.display) || "inline") !== "inline" ||
      o.nodeName === "BR"
        ? " "
        : "";
    u && s.children.push(u), s.children.push(xs(o, "::before"));
    const c = o.nodeName === "SLOT" ? o.assignedNodes() : [];
    if (c.length) for (const d of c) n(s, d);
    else {
      for (let d = o.firstChild; d; d = d.nextSibling)
        d.assignedSlot || n(s, d);
      if (o.shadowRoot)
        for (let d = o.shadowRoot.firstChild; d; d = d.nextSibling) n(s, d);
    }
    for (const d of l) n(s, d);
    s.children.push(xs(o, "::after")),
      u && s.children.push(u),
      s.children.length === 1 && s.name === s.children[0] && (s.children = []);
  }
  Ga();
  const i = { role: "fragment", name: "", children: [], element: e };
  try {
    n(i, e);
  } finally {
    Xa();
  }
  return s1(i), i;
}
function r1(e) {
  const t = ye(e);
  if (!t || t === "presentation" || t === "none") return null;
  const n = Gr(e, !1) || "",
    r = { role: t, name: n, children: [], element: e };
  return (
    za.includes(t) && (r.checked = Kh(e)),
    Zh.includes(t) && (r.disabled = Ua(e)),
    Fa.includes(t) && (r.expanded = Jh(e)),
    Ha.includes(t) && (r.level = Yh(e)),
    Da.includes(t) && (r.pressed = Xh(e)),
    ja.includes(t) && (r.selected = Qh(e)),
    (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) &&
      (r.children = [e.value]),
    r
  );
}
function i1(e, t) {
  return jl(Ya(e), t);
}
function s1(e) {
  const t = (r, i) => {
      if (!r.length) return;
      const s = o1(r.join("")).trim();
      s && i.push(s), (r.length = 0);
    },
    n = (r) => {
      const i = [],
        s = [];
      for (const o of r.children || [])
        typeof o == "string" ? s.push(o) : (t(s, i), n(o), i.push(o));
      t(s, i),
        (r.children = i.length ? i : []),
        r.children.length === 1 &&
          r.children[0] === r.name &&
          (r.children = []);
    };
  n(e);
}
const o1 = (e) => e.replace(/[\u200b\s\t\r\n]+/g, " ");
function Np(e, t) {
  return t ? (e ? (typeof t == "string" ? e === t : !!e.match(t)) : !1) : !0;
}
function l1(e, t) {
  return Np(e, t.text);
}
function a1(e, t) {
  return Np(e, t.name);
}
function u1(e, t) {
  const n = Ya(e);
  return {
    matches: Ap(n, t, !1),
    received: { raw: jl(n, { mode: "raw" }), regex: jl(n, { mode: "regex" }) },
  };
}
function c1(e, t) {
  const n = Ya(e);
  return Ap(n, t, !0).map((i) => i.element);
}
function bp(e, t, n) {
  return typeof e == "string" && t.kind === "text"
    ? l1(e, t)
    : typeof e == "object" && t.kind === "role"
      ? !(
          (t.role !== "fragment" && t.role !== e.role) ||
          (t.checked !== void 0 && t.checked !== e.checked) ||
          (t.disabled !== void 0 && t.disabled !== e.disabled) ||
          (t.expanded !== void 0 && t.expanded !== e.expanded) ||
          (t.level !== void 0 && t.level !== e.level) ||
          (t.pressed !== void 0 && t.pressed !== e.pressed) ||
          (t.selected !== void 0 && t.selected !== e.selected) ||
          !a1(e.name, t) ||
          !d1(e.children || [], t.children || [])
        )
      : !1;
}
function d1(e, t, n) {
  if (t.length > e.length) return !1;
  const r = e.slice(),
    i = t.slice();
  for (const s of i) {
    let o = r.shift();
    for (; o && !bp(o, s); ) o = r.shift();
    if (!o) return !1;
  }
  return !0;
}
function Ap(e, t, n) {
  const r = [],
    i = (s) => {
      if (bp(s, t)) return r.push(s), !n;
      if (typeof s == "string") return !1;
      for (const o of s.children || []) if (i(o)) return !0;
      return !1;
    };
  return i(e), r;
}
function jl(e, t) {
  const n = [],
    r = (t == null ? void 0 : t.mode) === "regex" ? h1 : () => !0,
    i = (t == null ? void 0 : t.mode) === "regex" ? f1 : (o) => o,
    s = (o, l, a) => {
      if (typeof o == "string") {
        if (l && !r(l, o)) return;
        const f = Oc(i(o));
        f && n.push(a + "- text: " + f);
        return;
      }
      let u = o.role;
      if (o.name && o.name.length <= 900) {
        const f = i(o.name);
        if (f) {
          const d =
            f.startsWith("/") && f.endsWith("/") ? f : JSON.stringify(f);
          u += " " + d;
        }
      }
      o.checked === "mixed" && (u += " [checked=mixed]"),
        o.checked === !0 && (u += " [checked]"),
        o.disabled && (u += " [disabled]"),
        o.expanded && (u += " [expanded]"),
        o.level && (u += ` [level=${o.level}]`),
        o.pressed === "mixed" && (u += " [pressed=mixed]"),
        o.pressed === !0 && (u += " [pressed]"),
        o.selected === !0 && (u += " [selected]");
      const c = a + "- " + n1(u);
      if (!o.children.length) n.push(c);
      else if (o.children.length === 1 && typeof o.children[0] == "string") {
        const f = r(o, o.children[0]) ? i(o.children[0]) : null;
        f ? n.push(c + ": " + Oc(f)) : n.push(c);
      } else {
        n.push(c + ":");
        for (const f of o.children || []) s(f, o, a + "  ");
      }
    };
  if (e.role === "fragment") for (const o of e.children || []) s(o, e, "");
  else s(e, null, "");
  return n.join(`
`);
}
function f1(e) {
  const t = [
    { regex: /\b[\d,.]+[bkmBKM]+\b/, replacement: "[\\d,.]+[bkmBKM]+" },
    { regex: /\b\d+[hmsp]+\b/, replacement: "\\d+[hmsp]+" },
    { regex: /\b[\d,.]+[hmsp]+\b/, replacement: "[\\d,.]+[hmsp]+" },
    { regex: /\b\d+,\d+\b/, replacement: "\\d+,\\d+" },
    { regex: /\b\d+\.\d{2,}\b/, replacement: "\\d+\\.\\d+" },
    { regex: /\b\d{2,}\.\d+\b/, replacement: "\\d+\\.\\d+" },
    { regex: /\b\d{2,}\b/, replacement: "\\d+" },
  ];
  let n = "",
    r = 0;
  const i = new RegExp(t.map((s) => "(" + s.regex.source + ")").join("|"), "g");
  return (
    e.replace(i, (s, ...o) => {
      const l = o[o.length - 2],
        a = o.slice(0, -2);
      n += bl(e.slice(r, l));
      for (let u = 0; u < a.length; u++)
        if (a[u]) {
          const { replacement: c } = t[u];
          n += c;
          break;
        }
      return (r = l + s.length), s;
    }),
    n ? ((n += bl(e.slice(r))), String(new RegExp(n))) : e
  );
}
function h1(e, t) {
  if (!t.length) return !1;
  if (!e.name) return !0;
  if (e.name.length > t.length) return !1;
  const n = t.length <= 200 && e.name.length <= 200 ? Ov(t, e.name) : "";
  let r = t;
  for (; n && r.includes(n); ) r = r.replace(n, "");
  return r.trim().length / t.length > 0.1;
}
function p1(e) {
  const t = { kind: "role", role: "fragment" };
  return Lp(t, e), t.children && t.children.length === 1 ? t.children[0] : t;
}
function Lp(e, t) {
  for (const n of t) {
    if (typeof n == "string") {
      const r = Ss.parse(n);
      (e.children = e.children || []), e.children.push(r);
      continue;
    }
    for (const r of Object.keys(n)) {
      e.children = e.children || [];
      const i = n[r];
      if (r === "text") {
        e.children.push({ kind: "text", text: Co(i) });
        continue;
      }
      const s = Ss.parse(r);
      if (s.kind === "text") {
        e.children.push({ kind: "text", text: Co(i) });
        continue;
      }
      if (typeof i == "string") {
        e.children.push({ ...s, children: [{ kind: "text", text: Co(i) }] });
        continue;
      }
      e.children.push(s), Lp(s, i);
    }
  }
}
function g1(e) {
  return e.replace(/[\r\n\s\t]+/g, " ").trim();
}
function Co(e) {
  return e.startsWith("/") && e.endsWith("/")
    ? new RegExp(e.slice(1, -1))
    : g1(e);
}
class Ss {
  static parse(t) {
    return new Ss(t)._parse();
  }
  constructor(t) {
    (this._input = t), (this._pos = 0), (this._length = t.length);
  }
  _peek() {
    return this._input[this._pos] || "";
  }
  _next() {
    return this._pos < this._length ? this._input[this._pos++] : null;
  }
  _eof() {
    return this._pos >= this._length;
  }
  _isWhitespace() {
    return !this._eof() && /\s/.test(this._peek());
  }
  _skipWhitespace() {
    for (; this._isWhitespace(); ) this._pos++;
  }
  _readIdentifier(t) {
    this._eof() &&
      this._throwError(`Unexpected end of input when expecting ${t}`);
    const n = this._pos;
    for (; !this._eof() && /[a-zA-Z]/.test(this._peek()); ) this._pos++;
    return this._input.slice(n, this._pos);
  }
  _readString() {
    let t = "",
      n = !1;
    for (; !this._eof(); ) {
      const r = this._next();
      if (n) (t += r), (n = !1);
      else if (r === "\\") n = !0;
      else {
        if (r === '"') return t;
        t += r;
      }
    }
    this._throwError("Unterminated string");
  }
  _throwError(t, n) {
    throw new m1(t, this._input, n || this._pos);
  }
  _readRegex() {
    let t = "",
      n = !1,
      r = !1;
    for (; !this._eof(); ) {
      const i = this._next();
      if (n) (t += i), (n = !1);
      else if (i === "\\") (n = !0), (t += i);
      else {
        if (i === "/" && !r) return t;
        i === "["
          ? ((r = !0), (t += i))
          : i === "]" && r
            ? ((t += i), (r = !1))
            : (t += i);
      }
    }
    this._throwError("Unterminated regex");
  }
  _readStringOrRegex() {
    const t = this._peek();
    return t === '"'
      ? (this._next(), this._readString())
      : t === "/"
        ? (this._next(), new RegExp(this._readRegex()))
        : null;
  }
  _readAttributes(t) {
    let n = this._pos;
    for (; this._skipWhitespace(), this._peek() === "["; ) {
      this._next(), this._skipWhitespace(), (n = this._pos);
      const r = this._readIdentifier("attribute");
      this._skipWhitespace();
      let i = "";
      if (this._peek() === "=")
        for (
          this._next(), this._skipWhitespace(), n = this._pos;
          this._peek() !== "]" && !this._isWhitespace() && !this._eof();

        )
          i += this._next();
      this._skipWhitespace(),
        this._peek() !== "]" && this._throwError("Expected ]"),
        this._next(),
        this._applyAttribute(t, r, i || "true", n);
    }
  }
  _parse() {
    this._skipWhitespace();
    const t = this._readIdentifier("role");
    this._skipWhitespace();
    const n = this._readStringOrRegex() || "",
      r = { kind: "role", role: t, name: n };
    return (
      this._readAttributes(r),
      this._skipWhitespace(),
      this._eof() || this._throwError("Unexpected input"),
      r
    );
  }
  _applyAttribute(t, n, r, i) {
    if (n === "checked") {
      this._assert(
        r === "true" || r === "false" || r === "mixed",
        'Value of "checked" attribute must be a boolean or "mixed"',
        i,
      ),
        (t.checked = r === "true" ? !0 : r === "false" ? !1 : "mixed");
      return;
    }
    if (n === "disabled") {
      this._assert(
        r === "true" || r === "false",
        'Value of "disabled" attribute must be a boolean',
        i,
      ),
        (t.disabled = r === "true");
      return;
    }
    if (n === "expanded") {
      this._assert(
        r === "true" || r === "false",
        'Value of "expanded" attribute must be a boolean',
        i,
      ),
        (t.expanded = r === "true");
      return;
    }
    if (n === "level") {
      this._assert(
        !isNaN(Number(r)),
        'Value of "level" attribute must be a number',
        i,
      ),
        (t.level = Number(r));
      return;
    }
    if (n === "pressed") {
      this._assert(
        r === "true" || r === "false" || r === "mixed",
        'Value of "pressed" attribute must be a boolean or "mixed"',
        i,
      ),
        (t.pressed = r === "true" ? !0 : r === "false" ? !1 : "mixed");
      return;
    }
    if (n === "selected") {
      this._assert(
        r === "true" || r === "false",
        'Value of "selected" attribute must be a boolean',
        i,
      ),
        (t.selected = r === "true");
      return;
    }
    this._assert(!1, `Unsupported attribute [${n}]`, i);
  }
  _assert(t, n, r) {
    t || this._throwError(n || "Assertion error", r);
  }
}
class m1 extends Error {
  constructor(t, n, r) {
    super(
      t +
        `:

` +
        n +
        `
` +
        " ".repeat(r) +
        `^
`,
    ),
      (this.shortMessage = t),
      (this.pos = r),
      (this.stack = void 0);
  }
}
class Ip {
  constructor(t, n, r, i, s, o, l) {
    (this.onGlobalListenersRemoved = new Set()),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen =
        "data-testid"),
      (this.utils = {
        asLocator: Fn,
        cacheNormalizedWhitespaces: Rv,
        elementText: Ae,
        getAriaRole: ye,
        getElementAccessibleDescription: bc,
        getElementAccessibleName: Gr,
        isElementVisible: nn,
        isInsideScope: Bs,
        normalizeWhiteSpace: ze,
        parseYamlTemplate: p1,
      }),
      (this.window = t),
      (this.document = t.document),
      (this.isUnderTest = n),
      (this._sdkLanguage = r),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen = i),
      (this._evaluator = new Ny(new Map())),
      (this._engines = new Map()),
      this._engines.set("xpath", Ec),
      this._engines.set("xpath:light", Ec),
      this._engines.set("_react", hy),
      this._engines.set("_vue", yy),
      this._engines.set("role", Lc(!1)),
      this._engines.set("text", this._createTextEngine(!0, !1)),
      this._engines.set("text:light", this._createTextEngine(!1, !1)),
      this._engines.set("id", this._createAttributeEngine("id", !0)),
      this._engines.set("id:light", this._createAttributeEngine("id", !1)),
      this._engines.set(
        "data-testid",
        this._createAttributeEngine("data-testid", !0),
      ),
      this._engines.set(
        "data-testid:light",
        this._createAttributeEngine("data-testid", !1),
      ),
      this._engines.set(
        "data-test-id",
        this._createAttributeEngine("data-test-id", !0),
      ),
      this._engines.set(
        "data-test-id:light",
        this._createAttributeEngine("data-test-id", !1),
      ),
      this._engines.set(
        "data-test",
        this._createAttributeEngine("data-test", !0),
      ),
      this._engines.set(
        "data-test:light",
        this._createAttributeEngine("data-test", !1),
      ),
      this._engines.set("css", this._createCSSEngine()),
      this._engines.set("nth", { queryAll: () => [] }),
      this._engines.set("visible", this._createVisibleEngine()),
      this._engines.set("internal:control", this._createControlEngine()),
      this._engines.set("internal:has", this._createHasEngine()),
      this._engines.set("internal:has-not", this._createHasNotEngine()),
      this._engines.set("internal:and", { queryAll: () => [] }),
      this._engines.set("internal:or", { queryAll: () => [] }),
      this._engines.set("internal:chain", this._createInternalChainEngine()),
      this._engines.set("internal:label", this._createInternalLabelEngine()),
      this._engines.set("internal:text", this._createTextEngine(!0, !0)),
      this._engines.set(
        "internal:has-text",
        this._createInternalHasTextEngine(),
      ),
      this._engines.set(
        "internal:has-not-text",
        this._createInternalHasNotTextEngine(),
      ),
      this._engines.set("internal:attr", this._createNamedAttributeEngine()),
      this._engines.set("internal:testid", this._createNamedAttributeEngine()),
      this._engines.set("internal:role", Lc(!0));
    for (const { name: a, engine: u } of l) this._engines.set(a, u);
    (this._stableRafCount = s),
      (this._browserName = o),
      Z0(o),
      this._setupGlobalListenersRemovalDetection(),
      this._setupHitTargetInterceptors(),
      n && (this.window.__injectedScript = this);
  }
  builtinSetTimeout(t, n) {
    var r;
    return (r = this.window.__pwClock) != null && r.builtin
      ? this.window.__pwClock.builtin.setTimeout(t, n)
      : this.window.setTimeout(t, n);
  }
  builtinClearTimeout(t) {
    var n;
    return (n = this.window.__pwClock) != null && n.builtin
      ? this.window.__pwClock.builtin.clearTimeout(t)
      : this.window.clearTimeout(t);
  }
  builtinRequestAnimationFrame(t) {
    var n;
    return (n = this.window.__pwClock) != null && n.builtin
      ? this.window.__pwClock.builtin.requestAnimationFrame(t)
      : this.window.requestAnimationFrame(t);
  }
  eval(t) {
    return this.window.eval(t);
  }
  testIdAttributeNameForStrictErrorAndConsoleCodegen() {
    return this._testIdAttributeNameForStrictErrorAndConsoleCodegen;
  }
  parseSelector(t) {
    const n = Us(t);
    return (
      t0(n, (r) => {
        if (!this._engines.has(r.name))
          throw this.createStacklessError(
            `Unknown engine "${r.name}" while parsing selector ${t}`,
          );
      }),
      n
    );
  }
  generateSelector(t, n) {
    return Mc(this, t, n);
  }
  generateSelectorSimple(t, n) {
    return Mc(this, t, {
      ...n,
      testIdAttributeName:
        this._testIdAttributeNameForStrictErrorAndConsoleCodegen,
    }).selector;
  }
  querySelector(t, n, r) {
    const i = this.querySelectorAll(t, n);
    if (r && i.length > 1) throw this.strictModeViolationError(t, i);
    return i[0];
  }
  _queryNth(t, n) {
    const r = [...t];
    let i = +n.body;
    return i === -1 && (i = r.length - 1), new Set(r.slice(i, i + 1));
  }
  _queryLayoutSelector(t, n, r) {
    const i = n.name,
      s = n.body,
      o = [],
      l = this.querySelectorAll(s.parsed, r);
    for (const a of t) {
      const u = gp(i, a, l, s.distance);
      u !== void 0 && o.push({ element: a, score: u });
    }
    return (
      o.sort((a, u) => a.score - u.score), new Set(o.map((a) => a.element))
    );
  }
  ariaSnapshot(t, n) {
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError(
        "Can only capture aria snapshot of Element nodes.",
      );
    return i1(t, n);
  }
  getAllByAria(t, n) {
    return c1(t.documentElement, n);
  }
  querySelectorAll(t, n) {
    if (t.capture !== void 0) {
      if (t.parts.some((i) => i.name === "nth"))
        throw this.createStacklessError(
          "Can't query n-th element in a request with the capture.",
        );
      const r = { parts: t.parts.slice(0, t.capture + 1) };
      if (t.capture < t.parts.length - 1) {
        const i = { parts: t.parts.slice(t.capture + 1) },
          s = { name: "internal:has", body: { parsed: i }, source: yt(i) };
        r.parts.push(s);
      }
      return this.querySelectorAll(r, n);
    }
    if (!n.querySelectorAll)
      throw this.createStacklessError("Node is not queryable.");
    if (t.capture !== void 0)
      throw this.createStacklessError(
        "Internal error: there should not be a capture in the selector.",
      );
    if (
      n.nodeType === 11 &&
      t.parts.length === 1 &&
      t.parts[0].name === "css" &&
      t.parts[0].source === ":scope"
    )
      return [n];
    this._evaluator.begin();
    try {
      let r = new Set([n]);
      for (const i of t.parts)
        if (i.name === "nth") r = this._queryNth(r, i);
        else if (i.name === "internal:and") {
          const s = this.querySelectorAll(i.body.parsed, n);
          r = new Set(s.filter((o) => r.has(o)));
        } else if (i.name === "internal:or") {
          const s = this.querySelectorAll(i.body.parsed, n);
          r = new Set(mp(new Set([...r, ...s])));
        } else if (Cy.includes(i.name)) r = this._queryLayoutSelector(r, i, n);
        else {
          const s = new Set();
          for (const o of r) {
            const l = this._queryEngineAll(i, o);
            for (const a of l) s.add(a);
          }
          r = s;
        }
      return [...r];
    } finally {
      this._evaluator.end();
    }
  }
  _queryEngineAll(t, n) {
    const r = this._engines.get(t.name).queryAll(n, t.body);
    for (const i of r)
      if (!("nodeName" in i))
        throw this.createStacklessError(
          `Expected a Node but got ${Object.prototype.toString.call(i)}`,
        );
    return r;
  }
  _createAttributeEngine(t, n) {
    const r = (i) => [
      {
        simples: [
          {
            selector: { css: `[${t}=${JSON.stringify(i)}]`, functions: [] },
            combinator: "",
          },
        ],
      },
    ];
    return {
      queryAll: (i, s) =>
        this._evaluator.query({ scope: i, pierceShadow: n }, r(s)),
    };
  }
  _createCSSEngine() {
    return {
      queryAll: (t, n) =>
        this._evaluator.query({ scope: t, pierceShadow: !0 }, n),
    };
  }
  _createTextEngine(t, n) {
    return {
      queryAll: (i, s) => {
        const { matcher: o, kind: l } = Ni(s, n),
          a = [];
        let u = null;
        const c = (d) => {
          if (l === "lax" && u && u.contains(d)) return !1;
          const g = qs(this._evaluator._cacheText, d, o);
          g === "none" && (u = d),
            (g === "self" ||
              (g === "selfAndChildren" && l === "strict" && !n)) &&
              a.push(d);
        };
        i.nodeType === Node.ELEMENT_NODE && c(i);
        const f = this._evaluator._queryCSS({ scope: i, pierceShadow: t }, "*");
        for (const d of f) c(d);
        return a;
      },
    };
  }
  _createInternalHasTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = Ae(this._evaluator._cacheText, r),
          { matcher: s } = Ni(n, !0);
        return s(i) ? [r] : [];
      },
    };
  }
  _createInternalHasNotTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          i = Ae(this._evaluator._cacheText, r),
          { matcher: s } = Ni(n, !0);
        return s(i) ? [] : [r];
      },
    };
  }
  _createInternalLabelEngine() {
    return {
      queryAll: (t, n) => {
        const { matcher: r } = Ni(n, !0);
        return this._evaluator
          ._queryCSS({ scope: t, pierceShadow: !0 }, "*")
          .filter((s) => op(this._evaluator._cacheText, s).some((o) => r(o)));
      },
    };
  }
  _createNamedAttributeEngine() {
    return {
      queryAll: (n, r) => {
        const i = on(r, !0);
        if (i.name || i.attributes.length !== 1)
          throw new Error("Malformed attribute selector: " + r);
        const { name: s, value: o, caseSensitive: l } = i.attributes[0],
          a = l ? null : o.toLowerCase();
        let u;
        return (
          o instanceof RegExp
            ? (u = (f) => !!f.match(o))
            : l
              ? (u = (f) => f === o)
              : (u = (f) => f.toLowerCase().includes(a)),
          this._evaluator
            ._queryCSS({ scope: n, pierceShadow: !0 }, `[${s}]`)
            .filter((f) => u(f.getAttribute(s)))
        );
      },
    };
  }
  _createControlEngine() {
    return {
      queryAll(t, n) {
        if (n === "enter-frame") return [];
        if (n === "return-empty") return [];
        if (n === "component")
          return t.nodeType !== 1
            ? []
            : [t.childElementCount === 1 ? t.firstElementChild : t];
        throw new Error(
          `Internal error, unknown internal:control selector ${n}`,
        );
      },
    };
  }
  _createHasEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(r.parsed, n, !1)
            ? [n]
            : [],
    };
  }
  _createHasNotEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(r.parsed, n, !1)
            ? []
            : [n],
    };
  }
  _createVisibleEngine() {
    return {
      queryAll: (n, r) => (n.nodeType !== 1 ? [] : nn(n) === !!r ? [n] : []),
    };
  }
  _createInternalChainEngine() {
    return { queryAll: (n, r) => this.querySelectorAll(r.parsed, n) };
  }
  extend(t, n) {
    const r = this.window.eval(`
    (() => {
      const module = {};
      ${t}
      return module.exports.default();
    })()`);
    return new r(this, n);
  }
  async viewportRatio(t) {
    return await new Promise((n) => {
      const r = new IntersectionObserver((i) => {
        n(i[0].intersectionRatio), r.disconnect();
      });
      r.observe(t), this.builtinRequestAnimationFrame(() => {});
    });
  }
  getElementBorderWidth(t) {
    if (
      t.nodeType !== Node.ELEMENT_NODE ||
      !t.ownerDocument ||
      !t.ownerDocument.defaultView
    )
      return { left: 0, top: 0 };
    const n = t.ownerDocument.defaultView.getComputedStyle(t);
    return {
      left: parseInt(n.borderLeftWidth || "", 10),
      top: parseInt(n.borderTopWidth || "", 10),
    };
  }
  describeIFrameStyle(t) {
    if (!t.ownerDocument || !t.ownerDocument.defaultView)
      return "error:notconnected";
    const n = t.ownerDocument.defaultView;
    for (let i = t; i; i = Se(i))
      if (n.getComputedStyle(i).transform !== "none") return "transformed";
    const r = n.getComputedStyle(t);
    return {
      left:
        parseInt(r.borderLeftWidth || "", 10) +
        parseInt(r.paddingLeft || "", 10),
      top:
        parseInt(r.borderTopWidth || "", 10) + parseInt(r.paddingTop || "", 10),
    };
  }
  retarget(t, n) {
    let r = t.nodeType === Node.ELEMENT_NODE ? t : t.parentElement;
    return r
      ? (n === "none" ||
          (!r.matches("input, textarea, select") &&
            !r.isContentEditable &&
            (n === "button-link"
              ? (r = r.closest("button, [role=button], a, [role=link]") || r)
              : (r =
                  r.closest(
                    "button, [role=button], [role=checkbox], [role=radio]",
                  ) || r)),
          n === "follow-label" &&
            (!r.matches(
              "a, input, textarea, button, select, [role=link], [role=button], [role=checkbox], [role=radio]",
            ) &&
              !r.isContentEditable &&
              (r = r.closest("label") || r),
            r.nodeName === "LABEL" && (r = r.control || r))),
        r)
      : null;
  }
  async checkElementStates(t, n) {
    if (n.includes("stable")) {
      const r = await this._checkElementIsStable(t);
      if (r === !1) return { missingState: "stable" };
      if (r === "error:notconnected") return r;
    }
    for (const r of n)
      if (r !== "stable") {
        const i = this.elementState(t, r);
        if (i === !1) return { missingState: r };
        if (i === "error:notconnected") return i;
      }
  }
  async _checkElementIsStable(t) {
    const n = Symbol("continuePolling");
    let r,
      i = 0,
      s = 0;
    const o = () => {
      const f = this.retarget(t, "no-follow-label");
      if (!f) return "error:notconnected";
      const d = performance.now();
      if (this._stableRafCount > 1 && d - s < 15) return n;
      s = d;
      const g = f.getBoundingClientRect(),
        m = { x: g.top, y: g.left, width: g.width, height: g.height };
      if (r) {
        if (
          !(
            m.x === r.x &&
            m.y === r.y &&
            m.width === r.width &&
            m.height === r.height
          )
        )
          return !1;
        if (++i >= this._stableRafCount) return !0;
      }
      return (r = m), n;
    };
    let l, a;
    const u = new Promise((f, d) => {
        (l = f), (a = d);
      }),
      c = () => {
        try {
          const f = o();
          f !== n ? l(f) : this.builtinRequestAnimationFrame(c);
        } catch (f) {
          a(f);
        }
      };
    return this.builtinRequestAnimationFrame(c), u;
  }
  elementState(t, n) {
    const r = this.retarget(
      t,
      ["stable", "visible", "hidden"].includes(n) ? "none" : "follow-label",
    );
    if (!r || !r.isConnected) return n === "hidden" ? !0 : "error:notconnected";
    if (n === "visible") return nn(r);
    if (n === "hidden") return !nn(r);
    const i = Ua(r);
    if (n === "disabled") return i;
    if (n === "enabled") return !i;
    const s = !(
      ["INPUT", "TEXTAREA", "SELECT"].includes(r.nodeName) &&
      r.hasAttribute("readonly")
    );
    if (n === "editable") return !i && s;
    if (n === "checked" || n === "unchecked") {
      const o = n === "checked",
        l = Gh(r, !1);
      if (l === "error")
        throw this.createStacklessError("Not a checkbox or radio button");
      return o === l;
    }
    throw this.createStacklessError(`Unexpected element state "${n}"`);
  }
  selectOptions(t, n) {
    const r = this.retarget(t, "follow-label");
    if (!r) return "error:notconnected";
    if (r.nodeName.toLowerCase() !== "select")
      throw this.createStacklessError("Element is not a <select> element");
    const i = r,
      s = [...i.options],
      o = [];
    let l = n.slice();
    for (let a = 0; a < s.length; a++) {
      const u = s[a],
        c = (f) => {
          if (f instanceof Node) return u === f;
          let d = !0;
          return (
            f.valueOrLabel !== void 0 &&
              (d =
                d &&
                (f.valueOrLabel === u.value || f.valueOrLabel === u.label)),
            f.value !== void 0 && (d = d && f.value === u.value),
            f.label !== void 0 && (d = d && f.label === u.label),
            f.index !== void 0 && (d = d && f.index === a),
            d
          );
        };
      if (l.some(c))
        if ((o.push(u), i.multiple)) l = l.filter((f) => !c(f));
        else {
          l = [];
          break;
        }
    }
    return l.length
      ? "error:optionsnotfound"
      : ((i.value = void 0),
        o.forEach((a) => (a.selected = !0)),
        i.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
        i.dispatchEvent(new Event("change", { bubbles: !0 })),
        o.map((a) => a.value));
  }
  fill(t, n) {
    const r = this.retarget(t, "follow-label");
    if (!r) return "error:notconnected";
    if (r.nodeName.toLowerCase() === "input") {
      const i = r,
        s = i.type.toLowerCase(),
        o = new Set([
          "color",
          "date",
          "time",
          "datetime-local",
          "month",
          "range",
          "week",
        ]);
      if (
        !new Set([
          "",
          "email",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "url",
        ]).has(s) &&
        !o.has(s)
      )
        throw this.createStacklessError(
          `Input of type "${s}" cannot be filled`,
        );
      if (s === "number" && ((n = n.trim()), isNaN(Number(n))))
        throw this.createStacklessError(
          "Cannot type text into input[type=number]",
        );
      if (o.has(s)) {
        if (((n = n.trim()), i.focus(), (i.value = n), i.value !== n))
          throw this.createStacklessError("Malformed value");
        return (
          r.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
          r.dispatchEvent(new Event("change", { bubbles: !0 })),
          "done"
        );
      }
    } else if (r.nodeName.toLowerCase() !== "textarea") {
      if (!r.isContentEditable)
        throw this.createStacklessError(
          "Element is not an <input>, <textarea> or [contenteditable] element",
        );
    }
    return this.selectText(r), "needsinput";
  }
  selectText(t) {
    const n = this.retarget(t, "follow-label");
    if (!n) return "error:notconnected";
    if (n.nodeName.toLowerCase() === "input") {
      const s = n;
      return s.select(), s.focus(), "done";
    }
    if (n.nodeName.toLowerCase() === "textarea") {
      const s = n;
      return (
        (s.selectionStart = 0),
        (s.selectionEnd = s.value.length),
        s.focus(),
        "done"
      );
    }
    const r = n.ownerDocument.createRange();
    r.selectNodeContents(n);
    const i = n.ownerDocument.defaultView.getSelection();
    return i && (i.removeAllRanges(), i.addRange(r)), n.focus(), "done";
  }
  _activelyFocused(t) {
    const n = t.getRootNode().activeElement,
      r = n === t && !!t.ownerDocument && t.ownerDocument.hasFocus();
    return { activeElement: n, isFocused: r };
  }
  focusNode(t, n) {
    if (!t.isConnected) return "error:notconnected";
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    const { activeElement: r, isFocused: i } = this._activelyFocused(t);
    if (
      (t.isContentEditable && !i && r && r.blur && r.blur(),
      t.focus(),
      t.focus(),
      n && !i && t.nodeName.toLowerCase() === "input")
    )
      try {
        t.setSelectionRange(0, 0);
      } catch {}
    return "done";
  }
  blurNode(t) {
    if (!t.isConnected) return "error:notconnected";
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    return t.blur(), "done";
  }
  setInputFiles(t, n) {
    if (t.nodeType !== Node.ELEMENT_NODE)
      return "Node is not of type HTMLElement";
    const r = t;
    if (r.nodeName !== "INPUT") return "Not an <input> element";
    const i = r;
    if ((i.getAttribute("type") || "").toLowerCase() !== "file")
      return "Not an input[type=file] element";
    const o = n.map((a) => {
        const u = Uint8Array.from(atob(a.buffer), (c) => c.charCodeAt(0));
        return new File([u], a.name, {
          type: a.mimeType,
          lastModified: a.lastModifiedMs,
        });
      }),
      l = new DataTransfer();
    for (const a of o) l.items.add(a);
    (i.files = l.files),
      i.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })),
      i.dispatchEvent(new Event("change", { bubbles: !0 }));
  }
  expectHitTarget(t, n) {
    const r = [];
    let i = n;
    for (; i; ) {
      const c = Oh(i);
      if (!c || (r.push(c), c.nodeType === 9)) break;
      i = c.host;
    }
    let s;
    for (let c = r.length - 1; c >= 0; c--) {
      const f = r[c],
        d = f.elementsFromPoint(t.x, t.y),
        g = f.elementFromPoint(t.x, t.y);
      if (g && d[0] && Se(g) === d[0]) {
        const y = this.window.getComputedStyle(g);
        (y == null ? void 0 : y.display) === "contents" && d.unshift(g);
      }
      d[0] && d[0].shadowRoot === f && d[1] === g && d.shift();
      const m = d[0];
      if (!m || ((s = m), c && m !== r[c - 1].host)) break;
    }
    const o = [];
    for (; s && s !== n; ) o.push(s), (s = Se(s));
    if (s === n) return "done";
    const l = this.previewNode(o[0] || this.document.documentElement);
    let a,
      u = n;
    for (; u; ) {
      const c = o.indexOf(u);
      if (c !== -1) {
        c > 1 && (a = this.previewNode(o[c - 1]));
        break;
      }
      u = Se(u);
    }
    return a
      ? { hitTargetDescription: `${l} from ${a} subtree` }
      : { hitTargetDescription: l };
  }
  setupHitTargetInterceptor(t, n, r, i) {
    const s = this.retarget(t, "button-link");
    if (!s || !s.isConnected) return "error:notconnected";
    if (r) {
      const c = this.expectHitTarget(r, s);
      if (c !== "done") return c.hitTargetDescription;
    }
    if (n === "drag") return { stop: () => "done" };
    const o = { hover: Mp, tap: Pp, mouse: Rp }[n];
    let l;
    const a = (c) => {
        if (!o.has(c.type) || !c.isTrusted) return;
        const f =
          this.window.TouchEvent && c instanceof this.window.TouchEvent
            ? c.touches[0]
            : c;
        l === void 0 &&
          f &&
          (l = this.expectHitTarget({ x: f.clientX, y: f.clientY }, s)),
          (i || (l !== "done" && l !== void 0)) &&
            (c.preventDefault(),
            c.stopPropagation(),
            c.stopImmediatePropagation());
      },
      u = () => (
        this._hitTargetInterceptor === a &&
          (this._hitTargetInterceptor = void 0),
        l || "done"
      );
    return (this._hitTargetInterceptor = a), { stop: u };
  }
  dispatchEvent(t, n, r) {
    let i;
    switch (
      ((r = { bubbles: !0, cancelable: !0, composed: !0, ...r }), w1.get(n))
    ) {
      case "mouse":
        i = new MouseEvent(n, r);
        break;
      case "keyboard":
        i = new KeyboardEvent(n, r);
        break;
      case "touch":
        i = new TouchEvent(n, r);
        break;
      case "pointer":
        i = new PointerEvent(n, r);
        break;
      case "focus":
        i = new FocusEvent(n, r);
        break;
      case "drag":
        i = new DragEvent(n, r);
        break;
      case "wheel":
        i = new WheelEvent(n, r);
        break;
      case "deviceorientation":
        try {
          i = new DeviceOrientationEvent(n, r);
        } catch {
          const {
            bubbles: s,
            cancelable: o,
            alpha: l,
            beta: a,
            gamma: u,
            absolute: c,
          } = r;
          (i = this.document.createEvent("DeviceOrientationEvent")),
            i.initDeviceOrientationEvent(n, s, o, l, a, u, c);
        }
        break;
      case "devicemotion":
        try {
          i = new DeviceMotionEvent(n, r);
        } catch {
          const {
            bubbles: s,
            cancelable: o,
            acceleration: l,
            accelerationIncludingGravity: a,
            rotationRate: u,
            interval: c,
          } = r;
          (i = this.document.createEvent("DeviceMotionEvent")),
            i.initDeviceMotionEvent(n, s, o, l, a, u, c);
        }
        break;
      default:
        i = new Event(n, r);
        break;
    }
    t.dispatchEvent(i);
  }
  previewNode(t) {
    if (t.nodeType === Node.TEXT_NODE) return Ci(`#text=${t.nodeValue || ""}`);
    if (t.nodeType !== Node.ELEMENT_NODE)
      return Ci(`<${t.nodeName.toLowerCase()} />`);
    const n = t,
      r = [];
    for (let a = 0; a < n.attributes.length; a++) {
      const { name: u, value: c } = n.attributes[a];
      u !== "style" &&
        (!c && y1.has(u) ? r.push(` ${u}`) : r.push(` ${u}="${c}"`));
    }
    r.sort((a, u) => a.length - u.length);
    const i = hc(r.join(""), 500);
    if (v1.has(n.nodeName)) return Ci(`<${n.nodeName.toLowerCase()}${i}/>`);
    const s = n.childNodes;
    let o = !1;
    if (s.length <= 5) {
      o = !0;
      for (let a = 0; a < s.length; a++)
        o = o && s[a].nodeType === Node.TEXT_NODE;
    }
    const l = o ? n.textContent || "" : s.length ? "…" : "";
    return Ci(
      `<${n.nodeName.toLowerCase()}${i}>${hc(l, 50)}</${n.nodeName.toLowerCase()}>`,
    );
  }
  strictModeViolationError(t, n) {
    const r = n
        .slice(0, 10)
        .map((s) => ({
          preview: this.previewNode(s),
          selector: this.generateSelectorSimple(s),
        })),
      i = r.map(
        (s, o) => `
    ${o + 1}) ${s.preview} aka ${Fn(this._sdkLanguage, s.selector)}`,
      );
    return (
      r.length < n.length &&
        i.push(`
    ...`),
      this
        .createStacklessError(`strict mode violation: ${Fn(this._sdkLanguage, yt(t))} resolved to ${n.length} elements:${i.join("")}
`)
    );
  }
  createStacklessError(t) {
    if (this._browserName === "firefox") {
      const r = new Error("Error: " + t);
      return (r.stack = ""), r;
    }
    const n = new Error(t);
    return delete n.stack, n;
  }
  createHighlight() {
    return new To(this);
  }
  maskSelectors(t, n) {
    this._highlight && this.hideHighlight(),
      (this._highlight = new To(this)),
      this._highlight.install();
    const r = [];
    for (const i of t)
      r.push(this.querySelectorAll(i, this.document.documentElement));
    this._highlight.maskElements(r.flat(), n);
  }
  highlight(t) {
    this._highlight ||
      ((this._highlight = new To(this)), this._highlight.install()),
      this._highlight.runHighlightOnRaf(t);
  }
  hideHighlight() {
    this._highlight && (this._highlight.uninstall(), delete this._highlight);
  }
  markTargetElements(t, n) {
    var o, l;
    ((o = this._markedElements) == null ? void 0 : o.callId) !== n &&
      (this._markedElements = void 0);
    const r =
        ((l = this._markedElements) == null ? void 0 : l.elements) || new Set(),
      i = new CustomEvent("__playwright_unmark_target__", {
        bubbles: !0,
        cancelable: !0,
        detail: n,
        composed: !0,
      });
    for (const a of r) t.has(a) || a.dispatchEvent(i);
    const s = new CustomEvent("__playwright_mark_target__", {
      bubbles: !0,
      cancelable: !0,
      detail: n,
      composed: !0,
    });
    for (const a of t) r.has(a) || a.dispatchEvent(s);
    this._markedElements = { callId: n, elements: t };
  }
  _setupGlobalListenersRemovalDetection() {
    const t = "__playwright_global_listeners_check__";
    let n = !1;
    const r = () => (n = !0);
    this.window.addEventListener(t, r),
      new MutationObserver((i) => {
        if (
          i.some((o) =>
            Array.from(o.addedNodes).includes(this.document.documentElement),
          ) &&
          ((n = !1), this.window.dispatchEvent(new CustomEvent(t)), !n)
        ) {
          this.window.addEventListener(t, r);
          for (const o of this.onGlobalListenersRemoved) o();
        }
      }).observe(this.document, { childList: !0 });
  }
  _setupHitTargetInterceptors() {
    const t = (r) => {
        var i;
        return (i = this._hitTargetInterceptor) == null
          ? void 0
          : i.call(this, r);
      },
      n = () => {
        for (const r of _1)
          this.window.addEventListener(r, t, { capture: !0, passive: !1 });
      };
    n(), this.onGlobalListenersRemoved.add(n);
  }
  async expect(t, n, r) {
    return n.expression === "to.have.count" || n.expression.endsWith(".array")
      ? this.expectArray(r, n)
      : t
        ? await this.expectSingleElement(t, n)
        : !n.isNot && n.expression === "to.be.hidden"
          ? { matches: !0 }
          : n.isNot && n.expression === "to.be.visible"
            ? { matches: !1 }
            : !n.isNot && n.expression === "to.be.detached"
              ? { matches: !0 }
              : n.isNot && n.expression === "to.be.attached"
                ? { matches: !1 }
                : n.isNot && n.expression === "to.be.in.viewport"
                  ? { matches: !1 }
                  : { matches: n.isNot, missingReceived: !0 };
  }
  async expectSingleElement(t, n) {
    var i;
    const r = n.expression;
    {
      let s;
      if (
        (r === "to.have.attribute"
          ? (s = t.hasAttribute(n.expressionArg))
          : r === "to.be.checked"
            ? (s = this.elementState(t, "checked"))
            : r === "to.be.unchecked"
              ? (s = this.elementState(t, "unchecked"))
              : r === "to.be.disabled"
                ? (s = this.elementState(t, "disabled"))
                : r === "to.be.editable"
                  ? (s = this.elementState(t, "editable"))
                  : r === "to.be.readonly"
                    ? (s = !this.elementState(t, "editable"))
                    : r === "to.be.empty"
                      ? t.nodeName === "INPUT" || t.nodeName === "TEXTAREA"
                        ? (s = !t.value)
                        : (s = !((i = t.textContent) != null && i.trim()))
                      : r === "to.be.enabled"
                        ? (s = this.elementState(t, "enabled"))
                        : r === "to.be.focused"
                          ? (s = this._activelyFocused(t).isFocused)
                          : r === "to.be.hidden"
                            ? (s = this.elementState(t, "hidden"))
                            : r === "to.be.visible"
                              ? (s = this.elementState(t, "visible"))
                              : r === "to.be.attached"
                                ? (s = !0)
                                : r === "to.be.detached" && (s = !1),
        s !== void 0)
      ) {
        if (s === "error:notcheckbox")
          throw this.createStacklessError("Element is not a checkbox");
        if (s === "error:notconnected")
          throw this.createStacklessError("Element is not connected");
        return { received: s, matches: s };
      }
    }
    if (r === "to.have.property") {
      let s = t;
      const o = n.expressionArg.split(".");
      for (let u = 0; u < o.length - 1; u++) {
        if (typeof s != "object" || !(o[u] in s))
          return { received: void 0, matches: !1 };
        s = s[o[u]];
      }
      const l = s[o[o.length - 1]],
        a = zl(l, n.expectedValue);
      return { received: l, matches: a };
    }
    if (r === "to.be.in.viewport") {
      const s = await this.viewportRatio(t);
      return {
        received: `viewport ratio ${s}`,
        matches: s > 0 && s > (n.expectedNumber ?? 0) - 1e-9,
      };
    }
    if (r === "to.have.values") {
      if (
        ((t = this.retarget(t, "follow-label")),
        t.nodeName !== "SELECT" || !t.multiple)
      )
        throw this.createStacklessError(
          "Not a select element with a multiple attribute",
        );
      const s = [...t.selectedOptions].map((o) => o.value);
      return s.length !== n.expectedText.length
        ? { received: s, matches: !1 }
        : {
            received: s,
            matches: s
              .map((o, l) => new No(n.expectedText[l]).matches(o))
              .every(Boolean),
          };
    }
    if (r === "to.match.aria") {
      const s = u1(t, n.expectedValue);
      return { received: s.received, matches: !!s.matches.length };
    }
    {
      let s;
      if (r === "to.have.attribute.value") {
        const o = t.getAttribute(n.expressionArg);
        if (o === null) return { received: null, matches: !1 };
        s = o;
      } else if (r === "to.have.class") s = t.classList.toString();
      else if (r === "to.have.css")
        s = this.window.getComputedStyle(t).getPropertyValue(n.expressionArg);
      else if (r === "to.have.id") s = t.id;
      else if (r === "to.have.text")
        s = n.useInnerText ? t.innerText : Ae(new Map(), t).full;
      else if (r === "to.have.accessible.name") s = Gr(t, !1);
      else if (r === "to.have.accessible.description") s = bc(t, !1);
      else if (r === "to.have.role") s = ye(t) || "";
      else if (r === "to.have.title") s = this.document.title;
      else if (r === "to.have.url") s = this.document.location.href;
      else if (r === "to.have.value") {
        if (
          ((t = this.retarget(t, "follow-label")),
          t.nodeName !== "INPUT" &&
            t.nodeName !== "TEXTAREA" &&
            t.nodeName !== "SELECT")
        )
          throw this.createStacklessError("Not an input element");
        s = t.value;
      }
      if (s !== void 0 && n.expectedText) {
        const o = new No(n.expectedText[0]);
        return { received: s, matches: o.matches(s) };
      }
    }
    throw this.createStacklessError("Unknown expect matcher: " + r);
  }
  expectArray(t, n) {
    const r = n.expression;
    if (r === "to.have.count") {
      const s = t.length,
        o = s === n.expectedNumber;
      return { received: s, matches: o };
    }
    let i;
    if (
      (r === "to.have.text.array" || r === "to.contain.text.array"
        ? (i = t.map((s) =>
            n.useInnerText ? s.innerText : Ae(new Map(), s).full,
          ))
        : r === "to.have.class.array" &&
          (i = t.map((s) => s.classList.toString())),
      i && n.expectedText)
    ) {
      const s = r !== "to.contain.text.array";
      if (!(i.length === n.expectedText.length || !s))
        return { received: i, matches: !1 };
      const l = n.expectedText.map((c) => new No(c));
      let a = 0,
        u = 0;
      for (; a < l.length && u < i.length; ) l[a].matches(i[u]) && ++a, ++u;
      return { received: i, matches: a === l.length };
    }
    throw this.createStacklessError("Unknown expect matcher: " + r);
  }
}
const v1 = new Set([
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "MENUITEM",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR",
  ]),
  y1 = new Set(["checked", "selected", "disabled", "readonly", "multiple"]);
function Ci(e) {
  return e.replace(/\n/g, "↵").replace(/\t/g, "⇆");
}
const w1 = new Map([
    ["auxclick", "mouse"],
    ["click", "mouse"],
    ["dblclick", "mouse"],
    ["mousedown", "mouse"],
    ["mouseeenter", "mouse"],
    ["mouseleave", "mouse"],
    ["mousemove", "mouse"],
    ["mouseout", "mouse"],
    ["mouseover", "mouse"],
    ["mouseup", "mouse"],
    ["mouseleave", "mouse"],
    ["mousewheel", "mouse"],
    ["keydown", "keyboard"],
    ["keyup", "keyboard"],
    ["keypress", "keyboard"],
    ["textInput", "keyboard"],
    ["touchstart", "touch"],
    ["touchmove", "touch"],
    ["touchend", "touch"],
    ["touchcancel", "touch"],
    ["pointerover", "pointer"],
    ["pointerout", "pointer"],
    ["pointerenter", "pointer"],
    ["pointerleave", "pointer"],
    ["pointerdown", "pointer"],
    ["pointerup", "pointer"],
    ["pointermove", "pointer"],
    ["pointercancel", "pointer"],
    ["gotpointercapture", "pointer"],
    ["lostpointercapture", "pointer"],
    ["focus", "focus"],
    ["blur", "focus"],
    ["drag", "drag"],
    ["dragstart", "drag"],
    ["dragend", "drag"],
    ["dragover", "drag"],
    ["dragenter", "drag"],
    ["dragleave", "drag"],
    ["dragexit", "drag"],
    ["drop", "drag"],
    ["wheel", "wheel"],
    ["deviceorientation", "deviceorientation"],
    ["deviceorientationabsolute", "deviceorientation"],
    ["devicemotion", "devicemotion"],
  ]),
  Mp = new Set(["mousemove"]),
  Pp = new Set([
    "pointerdown",
    "pointerup",
    "touchstart",
    "touchend",
    "touchcancel",
  ]),
  Rp = new Set([
    "mousedown",
    "mouseup",
    "pointerdown",
    "pointerup",
    "click",
    "auxclick",
    "dblclick",
    "contextmenu",
  ]),
  _1 = new Set([...Mp, ...Pp, ...Rp]);
function x1(e) {
  if (((e = e.substring(1, e.length - 1)), !e.includes("\\"))) return e;
  const t = [];
  let n = 0;
  for (; n < e.length; )
    e[n] === "\\" && n + 1 < e.length && n++, t.push(e[n++]);
  return t.join("");
}
function Ni(e, t) {
  if (e[0] === "/" && e.lastIndexOf("/") > 0) {
    const i = e.lastIndexOf("/"),
      s = new RegExp(e.substring(1, i), e.substring(i + 1));
    return { matcher: (o) => s.test(o.full), kind: "regex" };
  }
  const n = t ? JSON.parse.bind(JSON) : x1;
  let r = !1;
  return (
    e.length > 1 && e[0] === '"' && e[e.length - 1] === '"'
      ? ((e = n(e)), (r = !0))
      : t &&
          e.length > 1 &&
          e[0] === '"' &&
          e[e.length - 2] === '"' &&
          e[e.length - 1] === "i"
        ? ((e = n(e.substring(0, e.length - 1))), (r = !1))
        : t &&
            e.length > 1 &&
            e[0] === '"' &&
            e[e.length - 2] === '"' &&
            e[e.length - 1] === "s"
          ? ((e = n(e.substring(0, e.length - 1))), (r = !0))
          : e.length > 1 &&
            e[0] === "'" &&
            e[e.length - 1] === "'" &&
            ((e = n(e)), (r = !0)),
    (e = ze(e)),
    r
      ? t
        ? { kind: "strict", matcher: (s) => s.normalized === e }
        : {
            matcher: (s) =>
              !e && !s.immediate.length
                ? !0
                : s.immediate.some((o) => ze(o) === e),
            kind: "strict",
          }
      : ((e = e.toLowerCase()),
        { kind: "lax", matcher: (i) => i.normalized.toLowerCase().includes(e) })
  );
}
class No {
  constructor(t) {
    if (
      ((this._normalizeWhiteSpace = t.normalizeWhiteSpace),
      (this._ignoreCase = t.ignoreCase),
      (this._string = t.matchSubstring ? void 0 : this.normalize(t.string)),
      (this._substring = t.matchSubstring ? this.normalize(t.string) : void 0),
      t.regexSource)
    ) {
      const n = new Set((t.regexFlags || "").split(""));
      t.ignoreCase === !1 && n.delete("i"),
        t.ignoreCase === !0 && n.add("i"),
        (this._regex = new RegExp(t.regexSource, [...n].join("")));
    }
  }
  matches(t) {
    return (
      this._regex || (t = this.normalize(t)),
      this._string !== void 0
        ? t === this._string
        : this._substring !== void 0
          ? t.includes(this._substring)
          : this._regex
            ? !!this._regex.test(t)
            : !1
    );
  }
  normalize(t) {
    return (
      t &&
      (this._normalizeWhiteSpace && (t = ze(t)),
      this._ignoreCase && (t = t.toLocaleLowerCase()),
      t)
    );
  }
}
function zl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    if (Array.isArray(e)) {
      if (e.length !== t.length) return !1;
      for (let r = 0; r < e.length; ++r) if (!zl(e[r], t[r])) return !1;
      return !0;
    }
    if (e instanceof RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; ++r) if (!t.hasOwnProperty(n[r])) return !1;
    for (const r of n) if (!zl(e[r], t[r])) return !1;
    return !0;
  }
  return typeof e == "number" && typeof t == "number"
    ? isNaN(e) && isNaN(t)
    : !1;
}
const S1 = {
  tagName: "svg",
  children: [
    {
      tagName: "defs",
      children: [
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-gripper",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-circle-large-filled",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-inspect",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-whole-word",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0 11H1V13H15V11H16V14H15H1H0V11Z",
              },
            },
            {
              tagName: "path",
              attrs: {
                d: "M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z",
              },
            },
            {
              tagName: "path",
              attrs: {
                d: "M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-eye",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-symbol-constant",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M4 6h8v1H4V6zm8 3H4v1h8V9z",
              },
            },
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-check",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-close",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-pass",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                d: "M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z",
              },
            },
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z",
              },
            },
          ],
        },
        {
          tagName: "clipPath",
          attrs: {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            id: "icon-gist",
          },
          children: [
            {
              tagName: "path",
              attrs: {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M10.57 1.14l3.28 3.3.15.36v9.7l-.5.5h-11l-.5-.5v-13l.5-.5h7.72l.35.14zM10 5h3l-3-3v3zM3 2v12h10V6H9.5L9 5.5V2H3zm2.062 7.533l1.817-1.828L6.17 7 4 9.179v.707l2.171 2.174.707-.707-1.816-1.82zM8.8 7.714l.7-.709 2.189 2.175v.709L9.5 12.062l-.705-.709 1.831-1.82L8.8 7.714z",
              },
            },
          ],
        },
      ],
    },
  ],
};
class jc {
  cursor() {
    return "default";
  }
}
class bo {
  constructor(t, n) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null),
      (this._recorder = t),
      (this._assertVisibility = n);
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._hoveredSelectors = null);
  }
  onClick(t) {
    var n;
    q(t),
      t.button === 0 &&
        (n = this._hoveredModel) != null &&
        n.selector &&
        this._commit(this._hoveredModel.selector, this._hoveredModel);
  }
  onContextMenu(t) {
    if (
      this._hoveredModel &&
      !this._hoveredModel.tooltipListItemSelected &&
      this._hoveredSelectors &&
      this._hoveredSelectors.length > 1
    ) {
      q(t);
      const n = this._hoveredSelectors,
        r = this._hoveredModel;
      (this._hoveredModel.tooltipFooter = void 0),
        (this._hoveredModel.tooltipList = n.map((i) =>
          this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            i,
          ),
        )),
        (this._hoveredModel.tooltipListItemSelected = (i) => {
          i === void 0 ? this._reset(!0) : this._commit(n[i], r);
        }),
        this._recorder.updateHighlight(this._hoveredModel, !0);
    }
  }
  onPointerDown(t) {
    q(t);
  }
  onPointerUp(t) {
    q(t);
  }
  onMouseDown(t) {
    q(t);
  }
  onMouseUp(t) {
    q(t);
  }
  onMouseMove(t) {
    var s;
    q(t);
    let n = this._recorder.deepEventTarget(t);
    if ((n.isConnected || (n = null), this._hoveredElement === n)) return;
    this._hoveredElement = n;
    let r = null,
      i = [];
    if (this._hoveredElement) {
      const o = this._recorder.injectedScript.generateSelector(
        this._hoveredElement,
        {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
          multiple: !1,
        },
      );
      (i = o.selectors),
        (r = {
          selector: o.selector,
          elements: o.elements,
          tooltipText: this._recorder.injectedScript.utils.asLocator(
            this._recorder.state.language,
            o.selector,
          ),
          tooltipFooter:
            i.length > 1
              ? "Click to select, right-click for more options"
              : void 0,
          color: this._assertVisibility ? "#8acae480" : void 0,
        });
    }
    ((s = this._hoveredModel) == null ? void 0 : s.selector) !==
      (r == null ? void 0 : r.selector) &&
      ((this._hoveredModel = r),
      (this._hoveredSelectors = i),
      this._recorder.updateHighlight(r, !0));
  }
  onMouseEnter(t) {
    q(t);
  }
  onMouseLeave(t) {
    q(t);
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      this._reset(!0);
  }
  onKeyDown(t) {
    var n;
    q(t),
      t.key === "Escape" &&
        ((n = this._hoveredModel) != null && n.tooltipListItemSelected
          ? this._reset(!0)
          : this._assertVisibility && this._recorder.setMode("recording"));
  }
  onKeyUp(t) {
    q(t);
  }
  onScroll(t) {
    this._reset(!1);
  }
  _commit(t, n) {
    var r;
    this._assertVisibility
      ? (this._recorder.recordAction({
          name: "assertVisible",
          selector: t,
          signals: [],
        }),
        this._recorder.setMode("recording"),
        (r = this._recorder.overlay) == null ||
          r.flashToolSucceeded("assertingVisibility"))
      : this._recorder.elementPicked(t, n);
  }
  _reset(t) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._hoveredSelectors = null),
      this._recorder.updateHighlight(null, t);
  }
}
class E1 {
  constructor(t) {
    (this._performingActions = new Set()),
      (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1),
      (this._recorder = t);
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1);
  }
  onClick(t) {
    if (
      Po(this._hoveredElement) ||
      (t.button === 2 && t.type === "auxclick") ||
      this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel)
    )
      return;
    const n = Mo(this._recorder.deepEventTarget(t));
    if (n) {
      this._performAction({
        name: n.checked ? "check" : "uncheck",
        selector: this._hoveredModel.selector,
        signals: [],
      });
      return;
    }
    this._cancelPendingClickAction(),
      t.detail === 1 &&
        (this._pendingClickAction = {
          action: {
            name: "click",
            selector: this._hoveredModel.selector,
            position: Io(t),
            signals: [],
            button: zc(t),
            modifiers: Lo(t),
            clickCount: t.detail,
          },
          timeout: this._recorder.injectedScript.builtinSetTimeout(
            () => this._commitPendingClickAction(),
            200,
          ),
        });
  }
  onDblClick(t) {
    Po(this._hoveredElement) ||
      this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel) ||
      (this._cancelPendingClickAction(),
      this._performAction({
        name: "click",
        selector: this._hoveredModel.selector,
        position: Io(t),
        signals: [],
        button: zc(t),
        modifiers: Lo(t),
        clickCount: t.detail,
      }));
  }
  _commitPendingClickAction() {
    this._pendingClickAction &&
      this._performAction(this._pendingClickAction.action),
      this._cancelPendingClickAction();
  }
  _cancelPendingClickAction() {
    this._pendingClickAction && clearTimeout(this._pendingClickAction.timeout),
      (this._pendingClickAction = void 0);
  }
  onContextMenu(t) {
    this._shouldIgnoreMouseEvent(t) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel) ||
      this._performAction({
        name: "click",
        selector: this._hoveredModel.selector,
        position: Io(t),
        signals: [],
        button: "right",
        modifiers: 0,
        clickCount: 0,
      });
  }
  onPointerDown(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingActions.size || q(t);
  }
  onPointerUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingActions.size || q(t);
  }
  onMouseDown(t) {
    this._shouldIgnoreMouseEvent(t) ||
      (this._performingActions.size || q(t),
      (this._activeModel = this._hoveredModel));
  }
  onMouseUp(t) {
    this._shouldIgnoreMouseEvent(t) || this._performingActions.size || q(t);
  }
  onMouseMove(t) {
    const n = this._recorder.deepEventTarget(t);
    this._hoveredElement !== n &&
      ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  onMouseLeave(t) {
    const n = this._recorder.injectedScript.window;
    n.top !== n &&
      this._recorder.deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      ((this._hoveredElement = null), this._updateModelForHoveredElement());
  }
  onFocus(t) {
    this._onFocus(!0);
  }
  onInput(t) {
    const n = this._recorder.deepEventTarget(t);
    if (n.nodeName === "INPUT" && n.type.toLowerCase() === "file") {
      this._recorder.recordAction({
        name: "setInputFiles",
        selector: this._activeModel.selector,
        signals: [],
        files: [...(n.files || [])].map((r) => r.name),
      });
      return;
    }
    if (Po(n)) {
      this._recorder.recordAction({
        name: "fill",
        selector: this._hoveredModel.selector,
        signals: [],
        text: n.value,
      });
      return;
    }
    if (["INPUT", "TEXTAREA"].includes(n.nodeName) || n.isContentEditable) {
      if (
        (n.nodeName === "INPUT" &&
          ["checkbox", "radio"].includes(n.type.toLowerCase())) ||
        this._consumedDueWrongTarget(t)
      )
        return;
      this._recorder.recordAction({
        name: "fill",
        selector: this._activeModel.selector,
        signals: [],
        text: n.isContentEditable ? n.innerText : n.value,
      });
    }
    if (n.nodeName === "SELECT") {
      const r = n;
      if (this._actionInProgress(t)) return;
      this._performAction({
        name: "select",
        selector: this._activeModel.selector,
        options: [...r.selectedOptions].map((i) => i.value),
        signals: [],
      });
    }
  }
  onKeyDown(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (this._actionInProgress(t)) {
        this._expectProgrammaticKeyUp = !0;
        return;
      }
      if (!this._consumedDueWrongTarget(t)) {
        if (t.key === " ") {
          const n = Mo(this._recorder.deepEventTarget(t));
          if (n) {
            this._performAction({
              name: n.checked ? "uncheck" : "check",
              selector: this._activeModel.selector,
              signals: [],
            });
            return;
          }
        }
        this._performAction({
          name: "press",
          selector: this._activeModel.selector,
          signals: [],
          key: t.key,
          modifiers: Lo(t),
        });
      }
    }
  }
  onKeyUp(t) {
    if (this._shouldGenerateKeyPressFor(t)) {
      if (!this._expectProgrammaticKeyUp) {
        q(t);
        return;
      }
      this._expectProgrammaticKeyUp = !1;
    }
  }
  onScroll(t) {
    (this._hoveredModel = null),
      (this._hoveredElement = null),
      this._recorder.updateHighlight(null, !1);
  }
  _onFocus(t) {
    const n = N1(this._recorder.document);
    if (t && n === this._recorder.document.body) return;
    const r = n
      ? this._recorder.injectedScript.generateSelector(n, {
          testIdAttributeName: this._recorder.state.testIdAttributeName,
        })
      : null;
    (this._activeModel = r && r.selector ? r : null),
      t && ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  _shouldIgnoreMouseEvent(t) {
    const n = this._recorder.deepEventTarget(t),
      r = n.nodeName;
    return !!(
      r === "SELECT" ||
      r === "OPTION" ||
      (r === "INPUT" && ["date", "range"].includes(n.type))
    );
  }
  _actionInProgress(t) {
    const n = t instanceof KeyboardEvent,
      r = t instanceof MouseEvent || t instanceof PointerEvent;
    for (const i of this._performingActions)
      if (
        (n && i.name === "press" && t.key === i.key) ||
        (r &&
          (i.name === "click" || i.name === "check" || i.name === "uncheck"))
      )
        return !0;
    return q(t), !1;
  }
  _consumedDueToNoModel(t, n) {
    return n ? !1 : (q(t), !0);
  }
  _consumedDueWrongTarget(t) {
    return this._activeModel &&
      this._activeModel.elements[0] === this._recorder.deepEventTarget(t)
      ? !1
      : (q(t), !0);
  }
  _performAction(t) {
    (this._hoveredElement = null),
      (this._hoveredModel = null),
      (this._activeModel = null),
      this._recorder.updateHighlight(null, !1),
      this._performingActions.add(t),
      this._recorder.performAction(t).then(() => {
        this._performingActions.delete(t),
          this._onFocus(!1),
          this._recorder.injectedScript.isUnderTest &&
            console.error(
              "Action performed for test: " +
                JSON.stringify({
                  hovered: this._hoveredModel
                    ? this._hoveredModel.selector
                    : null,
                  active: this._activeModel ? this._activeModel.selector : null,
                }),
            );
      });
  }
  _shouldGenerateKeyPressFor(t) {
    if (
      (t.key === "Enter" &&
        (this._recorder.deepEventTarget(t).nodeName === "TEXTAREA" ||
          this._recorder.deepEventTarget(t).isContentEditable)) ||
      ["Backspace", "Delete", "AltGraph"].includes(t.key) ||
      (t.key === "@" && t.code === "KeyL")
    )
      return !1;
    if (navigator.platform.includes("Mac")) {
      if (t.key === "v" && t.metaKey) return !1;
    } else if (
      (t.key === "v" && t.ctrlKey) ||
      (t.key === "Insert" && t.shiftKey)
    )
      return !1;
    if (["Shift", "Control", "Meta", "Alt", "Process"].includes(t.key))
      return !1;
    const n = t.ctrlKey || t.altKey || t.metaKey;
    return t.key.length === 1 && !n
      ? !!Mo(this._recorder.deepEventTarget(t))
      : !0;
  }
  _updateModelForHoveredElement() {
    if (this._performingActions.size) return;
    if (!this._hoveredElement || !this._hoveredElement.isConnected) {
      (this._hoveredModel = null),
        (this._hoveredElement = null),
        this._recorder.updateHighlight(null, !0);
      return;
    }
    const { selector: t, elements: n } =
      this._recorder.injectedScript.generateSelector(this._hoveredElement, {
        testIdAttributeName: this._recorder.state.testIdAttributeName,
      });
    (this._hoveredModel && this._hoveredModel.selector === t) ||
      ((this._hoveredModel = t
        ? { selector: t, elements: n, color: "#dc6f6f7f" }
        : null),
      this._recorder.updateHighlight(this._hoveredModel, !0));
  }
}
class Ao {
  constructor(t, n) {
    (this._hoverHighlight = null),
      (this._action = null),
      (this._textCache = new Map()),
      (this._recorder = t),
      (this._kind = n),
      (this._dialog = new C1(t));
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._dialog.close(), (this._hoverHighlight = null);
  }
  onClick(t) {
    q(t),
      this._kind === "value"
        ? this._commitAssertValue()
        : this._dialog.isShowing() || this._showDialog();
  }
  onMouseDown(t) {
    const n = this._recorder.deepEventTarget(t);
    this._elementHasValue(n) && t.preventDefault();
  }
  onPointerUp(t) {
    var r;
    const n = (r = this._hoverHighlight) == null ? void 0 : r.elements[0];
    this._kind === "value" &&
      n &&
      (n.nodeName === "INPUT" || n.nodeName === "SELECT") &&
      n.disabled &&
      this._commitAssertValue();
  }
  onMouseMove(t) {
    var r;
    if (this._dialog.isShowing()) return;
    const n = this._recorder.deepEventTarget(t);
    ((r = this._hoverHighlight) == null ? void 0 : r.elements[0]) !== n &&
      (this._kind === "text" || this._kind === "snapshot"
        ? (this._hoverHighlight =
            this._recorder.injectedScript.utils.elementText(this._textCache, n)
              .full
              ? { elements: [n], selector: "" }
              : null)
        : (this._hoverHighlight = this._elementHasValue(n)
            ? this._recorder.injectedScript.generateSelector(n, {
                testIdAttributeName: this._recorder.state.testIdAttributeName,
              })
            : null),
      this._hoverHighlight && (this._hoverHighlight.color = "#8acae480"),
      this._recorder.updateHighlight(this._hoverHighlight, !0));
  }
  onKeyDown(t) {
    t.key === "Escape" && this._recorder.setMode("recording"), q(t);
  }
  onScroll(t) {
    this._recorder.updateHighlight(this._hoverHighlight, !1);
  }
  _elementHasValue(t) {
    return (
      t.nodeName === "TEXTAREA" ||
      t.nodeName === "SELECT" ||
      (t.nodeName === "INPUT" &&
        !["button", "image", "reset", "submit"].includes(t.type))
    );
  }
  _generateAction() {
    var n;
    this._textCache.clear();
    const t = (n = this._hoverHighlight) == null ? void 0 : n.elements[0];
    if (!t) return null;
    if (this._kind === "value") {
      if (!this._elementHasValue(t)) return null;
      const { selector: r } = this._recorder.injectedScript.generateSelector(
        t,
        { testIdAttributeName: this._recorder.state.testIdAttributeName },
      );
      return t.nodeName === "INPUT" &&
        ["checkbox", "radio"].includes(t.type.toLowerCase())
        ? {
            name: "assertChecked",
            selector: r,
            signals: [],
            checked: !t.checked,
          }
        : { name: "assertValue", selector: r, signals: [], value: t.value };
    } else
      return this._kind === "snapshot"
        ? ((this._hoverHighlight =
            this._recorder.injectedScript.generateSelector(t, {
              testIdAttributeName: this._recorder.state.testIdAttributeName,
              forTextExpect: !0,
            })),
          (this._hoverHighlight.color = "#8acae480"),
          this._recorder.updateHighlight(this._hoverHighlight, !0),
          {
            name: "assertSnapshot",
            selector: this._hoverHighlight.selector,
            signals: [],
            snapshot: this._recorder.injectedScript.ariaSnapshot(t, {
              mode: "regex",
            }),
          })
        : ((this._hoverHighlight =
            this._recorder.injectedScript.generateSelector(t, {
              testIdAttributeName: this._recorder.state.testIdAttributeName,
              forTextExpect: !0,
            })),
          (this._hoverHighlight.color = "#8acae480"),
          this._recorder.updateHighlight(this._hoverHighlight, !0),
          {
            name: "assertText",
            selector: this._hoverHighlight.selector,
            signals: [],
            text: this._recorder.injectedScript.utils.elementText(
              this._textCache,
              t,
            ).normalized,
            substring: !0,
          });
  }
  _renderValue(t) {
    return (t == null ? void 0 : t.name) === "assertText"
      ? this._recorder.injectedScript.utils.normalizeWhiteSpace(t.text)
      : (t == null ? void 0 : t.name) === "assertChecked"
        ? String(t.checked)
        : (t == null ? void 0 : t.name) === "assertValue"
          ? t.value
          : (t == null ? void 0 : t.name) === "assertSnapshot"
            ? t.snapshot
            : "";
  }
  _commit() {
    !this._action ||
      !this._dialog.isShowing() ||
      (this._dialog.close(),
      this._recorder.recordAction(this._action),
      this._recorder.setMode("recording"));
  }
  _showDialog() {
    var t, n, r, i;
    (t = this._hoverHighlight) != null &&
      t.elements[0] &&
      ((this._action = this._generateAction()),
      ((n = this._action) == null ? void 0 : n.name) === "assertText"
        ? this._showTextDialog(this._action)
        : ((r = this._action) == null ? void 0 : r.name) === "assertSnapshot" &&
          (this._recorder.recordAction(this._action),
          this._recorder.setMode("recording"),
          (i = this._recorder.overlay) == null ||
            i.flashToolSucceeded("assertingSnapshot")));
  }
  _showTextDialog(t) {
    const n = this._recorder.document.createElement("textarea");
    n.setAttribute("spellcheck", "false"),
      (n.value = this._renderValue(t)),
      n.classList.add("text-editor");
    const r = () => {
      var f;
      const l = this._recorder.injectedScript.utils.normalizeWhiteSpace(
          n.value,
        ),
        a = (f = this._hoverHighlight) == null ? void 0 : f.elements[0];
      if (!a) return;
      t.text = l;
      const u = this._recorder.injectedScript.utils.elementText(
          this._textCache,
          a,
        ).normalized,
        c = l && u.includes(l);
      n.classList.toggle("does-not-match", !c);
    };
    n.addEventListener("input", r);
    const s = this._dialog.show({
        label: "Assert that element contains text",
        body: n,
        onCommit: () => this._commit(),
      }),
      o = this._recorder.highlight.tooltipPosition(
        this._recorder.highlight.firstBox(),
        s,
      );
    this._dialog.moveTo(o.anchorTop, o.anchorLeft), n.focus();
  }
  _commitAssertValue() {
    var n;
    if (this._kind !== "value") return;
    const t = this._generateAction();
    t &&
      (this._recorder.recordAction(t),
      this._recorder.setMode("recording"),
      (n = this._recorder.overlay) == null ||
        n.flashToolSucceeded("assertingValue"));
  }
}
class k1 {
  constructor(t) {
    (this._listeners = []),
      (this._offsetX = 0),
      (this._measure = { width: 0, height: 0 }),
      (this._recorder = t);
    const n = this._recorder.document;
    this._overlayElement = n.createElement("x-pw-overlay");
    const r = n.createElement("x-pw-tools-list");
    this._overlayElement.appendChild(r),
      (this._dragHandle = n.createElement("x-pw-tool-gripper")),
      this._dragHandle.appendChild(n.createElement("x-div")),
      r.appendChild(this._dragHandle),
      (this._recordToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._recordToggle.title = "Record"),
      this._recordToggle.classList.add("record"),
      this._recordToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._recordToggle),
      (this._pickLocatorToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._pickLocatorToggle.title = "Pick locator"),
      this._pickLocatorToggle.classList.add("pick-locator"),
      this._pickLocatorToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._pickLocatorToggle),
      (this._assertVisibilityToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertVisibilityToggle.title = "Assert visibility"),
      this._assertVisibilityToggle.classList.add("visibility"),
      this._assertVisibilityToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._assertVisibilityToggle),
      (this._assertTextToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertTextToggle.title = "Assert text"),
      this._assertTextToggle.classList.add("text"),
      this._assertTextToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._assertTextToggle),
      (this._assertValuesToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertValuesToggle.title = "Assert value"),
      this._assertValuesToggle.classList.add("value"),
      this._assertValuesToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._assertValuesToggle),
      (this._assertSnapshotToggle =
        this._recorder.document.createElement("x-pw-tool-item")),
      (this._assertSnapshotToggle.title = "Assert snapshot"),
      this._assertSnapshotToggle.classList.add("snapshot"),
      this._assertSnapshotToggle.appendChild(
        this._recorder.document.createElement("x-div"),
      ),
      r.appendChild(this._assertSnapshotToggle),
      this._updateVisualPosition(),
      this._refreshListeners();
  }
  _refreshListeners() {
    $p(this._listeners),
      (this._listeners = [
        B(this._dragHandle, "mousedown", (t) => {
          this._dragState = {
            offsetX: this._offsetX,
            dragStart: { x: t.clientX, y: 0 },
          };
        }),
        B(this._recordToggle, "click", () => {
          this._recorder.setMode(
            this._recorder.state.mode === "none" ||
              this._recorder.state.mode === "standby" ||
              this._recorder.state.mode === "inspecting"
              ? "recording"
              : "standby",
          );
        }),
        B(this._pickLocatorToggle, "click", () => {
          const t = {
            inspecting: "standby",
            none: "inspecting",
            standby: "inspecting",
            recording: "recording-inspecting",
            "recording-inspecting": "recording",
            assertingText: "recording-inspecting",
            assertingVisibility: "recording-inspecting",
            assertingValue: "recording-inspecting",
            assertingSnapshot: "recording-inspecting",
          };
          this._recorder.setMode(t[this._recorder.state.mode]);
        }),
        B(this._assertVisibilityToggle, "click", () => {
          this._assertVisibilityToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingVisibility"
                ? "recording"
                : "assertingVisibility",
            );
        }),
        B(this._assertTextToggle, "click", () => {
          this._assertTextToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingText"
                ? "recording"
                : "assertingText",
            );
        }),
        B(this._assertValuesToggle, "click", () => {
          this._assertValuesToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingValue"
                ? "recording"
                : "assertingValue",
            );
        }),
        B(this._assertSnapshotToggle, "click", () => {
          this._assertSnapshotToggle.classList.contains("disabled") ||
            this._recorder.setMode(
              this._recorder.state.mode === "assertingSnapshot"
                ? "recording"
                : "assertingSnapshot",
            );
        }),
      ]);
  }
  install() {
    this._recorder.highlight.appendChild(this._overlayElement),
      this._refreshListeners(),
      this._updateVisualPosition();
  }
  contains(t) {
    return this._recorder.injectedScript.utils.isInsideScope(
      this._overlayElement,
      t,
    );
  }
  setUIState(t) {
    this._recordToggle.classList.toggle(
      "active",
      t.mode === "recording" ||
        t.mode === "assertingText" ||
        t.mode === "assertingVisibility" ||
        t.mode === "assertingValue" ||
        t.mode === "recording-inspecting",
    ),
      this._pickLocatorToggle.classList.toggle(
        "active",
        t.mode === "inspecting" || t.mode === "recording-inspecting",
      ),
      this._assertVisibilityToggle.classList.toggle(
        "active",
        t.mode === "assertingVisibility",
      ),
      this._assertVisibilityToggle.classList.toggle(
        "disabled",
        t.mode === "none" || t.mode === "standby" || t.mode === "inspecting",
      ),
      this._assertTextToggle.classList.toggle(
        "active",
        t.mode === "assertingText",
      ),
      this._assertTextToggle.classList.toggle(
        "disabled",
        t.mode === "none" || t.mode === "standby" || t.mode === "inspecting",
      ),
      this._assertValuesToggle.classList.toggle(
        "active",
        t.mode === "assertingValue",
      ),
      this._assertValuesToggle.classList.toggle(
        "disabled",
        t.mode === "none" || t.mode === "standby" || t.mode === "inspecting",
      ),
      this._assertSnapshotToggle.classList.toggle(
        "active",
        t.mode === "assertingSnapshot",
      ),
      this._assertSnapshotToggle.classList.toggle(
        "disabled",
        t.mode === "none" || t.mode === "standby" || t.mode === "inspecting",
      ),
      this._offsetX !== t.overlay.offsetX &&
        ((this._offsetX = t.overlay.offsetX), this._updateVisualPosition()),
      t.mode === "none" ? this._hideOverlay() : this._showOverlay();
  }
  flashToolSucceeded(t) {
    let n;
    t === "assertingVisibility"
      ? (n = this._assertVisibilityToggle)
      : t === "assertingSnapshot"
        ? (n = this._assertSnapshotToggle)
        : (n = this._assertValuesToggle),
      n.classList.add("succeeded"),
      this._recorder.injectedScript.builtinSetTimeout(
        () => n.classList.remove("succeeded"),
        2e3,
      );
  }
  _hideOverlay() {
    this._overlayElement.setAttribute("hidden", "true");
  }
  _showOverlay() {
    this._overlayElement.hasAttribute("hidden") &&
      (this._overlayElement.removeAttribute("hidden"),
      this._updateVisualPosition());
  }
  _updateVisualPosition() {
    (this._measure = this._overlayElement.getBoundingClientRect()),
      (this._overlayElement.style.left =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 +
        this._offsetX +
        "px");
  }
  onMouseMove(t) {
    if (!t.buttons) return (this._dragState = void 0), !1;
    if (this._dragState) {
      this._offsetX =
        this._dragState.offsetX + t.clientX - this._dragState.dragStart.x;
      const n =
        (this._recorder.injectedScript.window.innerWidth -
          this._measure.width) /
          2 -
        10;
      return (
        (this._offsetX = Math.max(-n, Math.min(n, this._offsetX))),
        this._updateVisualPosition(),
        this._recorder.setOverlayState({ offsetX: this._offsetX }),
        q(t),
        !0
      );
    }
    return !1;
  }
  onMouseUp(t) {
    return this._dragState ? (q(t), !0) : !1;
  }
  onClick(t) {
    return this._dragState ? ((this._dragState = void 0), q(t), !0) : !1;
  }
  onDblClick(t) {
    return !1;
  }
}
class T1 {
  constructor(t) {
    (this._listeners = []),
      (this._lastHighlightedSelector = void 0),
      (this._lastHighlightedAriaTemplateJSON = "undefined"),
      (this.state = {
        mode: "none",
        testIdAttributeName: "data-testid",
        language: "javascript",
        overlay: { offsetX: 0 },
      }),
      (this._delegate = {}),
      (this.document = t.document),
      (this.injectedScript = t),
      (this.highlight = t.createHighlight()),
      (this._tools = {
        none: new jc(),
        standby: new jc(),
        inspecting: new bo(this, !1),
        recording: new E1(this),
        "recording-inspecting": new bo(this, !1),
        assertingText: new Ao(this, "text"),
        assertingVisibility: new bo(this, !0),
        assertingValue: new Ao(this, "value"),
        assertingSnapshot: new Ao(this, "snapshot"),
      }),
      (this._currentTool = this._tools.none),
      t.window.top === t.window &&
        ((this.overlay = new k1(this)), this.overlay.setUIState(this.state)),
      (this._stylesheet = new t.window.CSSStyleSheet()),
      this._stylesheet.replaceSync(`
      body[data-pw-cursor=pointer] *, body[data-pw-cursor=pointer] *::after { cursor: pointer !important; }
      body[data-pw-cursor=text] *, body[data-pw-cursor=text] *::after { cursor: text !important; }
    `),
      this.installListeners(),
      t.utils.cacheNormalizedWhitespaces(),
      t.isUnderTest && console.error("Recorder script ready for test");
  }
  installListeners() {
    var r;
    $p(this._listeners),
      (this._listeners = [
        B(this.document, "click", (i) => this._onClick(i), !0),
        B(this.document, "auxclick", (i) => this._onClick(i), !0),
        B(this.document, "dblclick", (i) => this._onDblClick(i), !0),
        B(this.document, "contextmenu", (i) => this._onContextMenu(i), !0),
        B(this.document, "dragstart", (i) => this._onDragStart(i), !0),
        B(this.document, "input", (i) => this._onInput(i), !0),
        B(this.document, "keydown", (i) => this._onKeyDown(i), !0),
        B(this.document, "keyup", (i) => this._onKeyUp(i), !0),
        B(this.document, "pointerdown", (i) => this._onPointerDown(i), !0),
        B(this.document, "pointerup", (i) => this._onPointerUp(i), !0),
        B(this.document, "mousedown", (i) => this._onMouseDown(i), !0),
        B(this.document, "mouseup", (i) => this._onMouseUp(i), !0),
        B(this.document, "mousemove", (i) => this._onMouseMove(i), !0),
        B(this.document, "mouseleave", (i) => this._onMouseLeave(i), !0),
        B(this.document, "mouseenter", (i) => this._onMouseEnter(i), !0),
        B(this.document, "focus", (i) => this._onFocus(i), !0),
        B(this.document, "scroll", (i) => this._onScroll(i), !0),
      ]),
      this.highlight.install();
    let t;
    const n = () => {
      this.highlight.install(),
        (t = this.injectedScript.builtinSetTimeout(n, 500));
    };
    (t = this.injectedScript.builtinSetTimeout(n, 500)),
      this._listeners.push(() => this.injectedScript.builtinClearTimeout(t)),
      this.highlight.appendChild(Op(this.document, S1)),
      (r = this.overlay) == null || r.install(),
      this.document.adoptedStyleSheets.push(this._stylesheet);
  }
  _switchCurrentTool() {
    var n, r, i;
    const t = this._tools[this.state.mode];
    t !== this._currentTool &&
      ((r = (n = this._currentTool).cleanup) == null || r.call(n),
      this.clearHighlight(),
      (this._currentTool = t),
      (i = this.injectedScript.document.body) == null ||
        i.setAttribute("data-pw-cursor", t.cursor()));
  }
  setUIState(t, n) {
    var s;
    (this._delegate = n),
      (t.actionPoint &&
        this.state.actionPoint &&
        t.actionPoint.x === this.state.actionPoint.x &&
        t.actionPoint.y === this.state.actionPoint.y) ||
        (!t.actionPoint && !this.state.actionPoint) ||
        (t.actionPoint
          ? this.highlight.showActionPoint(t.actionPoint.x, t.actionPoint.y)
          : this.highlight.hideActionPoint()),
      (this.state = t),
      this.highlight.setLanguage(t.language),
      this._switchCurrentTool(),
      (s = this.overlay) == null || s.setUIState(t);
    let r = "noop";
    if (t.actionSelector !== this._lastHighlightedSelector) {
      this._lastHighlightedSelector = t.actionSelector;
      const o = t.actionSelector
        ? b1(this.injectedScript, t.actionSelector, this.document)
        : null;
      r = o != null && o.elements.length ? o : "clear";
    }
    const i = JSON.stringify(t.ariaTemplate);
    if (this._lastHighlightedAriaTemplateJSON !== i) {
      this._lastHighlightedAriaTemplateJSON = i;
      const o = t.ariaTemplate
          ? this.injectedScript.utils.parseYamlTemplate(t.ariaTemplate)
          : void 0,
        l = o ? this.injectedScript.getAllByAria(this.document, o) : [];
      l.length ? (r = { elements: l }) : (r = "clear");
    }
    r === "clear"
      ? this.clearHighlight()
      : r !== "noop" && this.updateHighlight(r, !1);
  }
  clearHighlight() {
    var t, n;
    (n = (t = this._currentTool).cleanup) == null || n.call(t),
      this.updateHighlight(null, !1);
  }
  _onClick(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onClick(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onClick) == null ||
        i.call(r, t));
  }
  _onDblClick(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onDblClick(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onDblClick) == null ||
        i.call(r, t));
  }
  _onContextMenu(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onContextMenu) == null ||
        r.call(n, t));
  }
  _onDragStart(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onDragStart) == null ||
        r.call(n, t));
  }
  _onPointerDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerDown) == null ||
        r.call(n, t));
  }
  _onPointerUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onPointerUp) == null ||
        r.call(n, t));
  }
  _onMouseDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseDown) == null ||
        r.call(n, t));
  }
  _onMouseUp(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseUp(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseUp) == null ||
        i.call(r, t));
  }
  _onMouseMove(t) {
    var n, r, i;
    t.isTrusted &&
      (((n = this.overlay) != null && n.onMouseMove(t)) ||
        this._ignoreOverlayEvent(t) ||
        (i = (r = this._currentTool).onMouseMove) == null ||
        i.call(r, t));
  }
  _onMouseEnter(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseEnter) == null ||
        r.call(n, t));
  }
  _onMouseLeave(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onMouseLeave) == null ||
        r.call(n, t));
  }
  _onFocus(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onFocus) == null ||
        r.call(n, t));
  }
  _onScroll(t) {
    var n, r;
    t.isTrusted &&
      ((this._lastHighlightedSelector = void 0),
      (this._lastHighlightedAriaTemplateJSON = "undefined"),
      this.highlight.hideActionPoint(),
      (r = (n = this._currentTool).onScroll) == null || r.call(n, t));
  }
  _onInput(t) {
    var n, r;
    this._ignoreOverlayEvent(t) ||
      (r = (n = this._currentTool).onInput) == null ||
      r.call(n, t);
  }
  _onKeyDown(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyDown) == null ||
        r.call(n, t));
  }
  _onKeyUp(t) {
    var n, r;
    t.isTrusted &&
      (this._ignoreOverlayEvent(t) ||
        (r = (n = this._currentTool).onKeyUp) == null ||
        r.call(n, t));
  }
  updateHighlight(t, n) {
    var i, s;
    let r = t == null ? void 0 : t.tooltipText;
    r === void 0 &&
      !(t != null && t.tooltipList) &&
      t != null &&
      t.selector &&
      (r = this.injectedScript.utils.asLocator(
        this.state.language,
        t.selector,
      )),
      this.highlight.updateHighlight((t == null ? void 0 : t.elements) || [], {
        ...t,
        tooltipText: r,
      }),
      n && ((s = (i = this._delegate).highlightUpdated) == null || s.call(i));
  }
  _ignoreOverlayEvent(t) {
    return t
      .composedPath()
      .some((n) => (n.nodeName || "").toLowerCase() === "x-pw-glass");
  }
  deepEventTarget(t) {
    var n;
    for (const r of t.composedPath())
      if (!((n = this.overlay) != null && n.contains(r))) return r;
    return t.composedPath()[0];
  }
  setMode(t) {
    var n, r;
    (r = (n = this._delegate).setMode) == null || r.call(n, t);
  }
  async performAction(t) {
    var n, r;
    await ((r = (n = this._delegate).performAction) == null
      ? void 0
      : r.call(n, t).catch(() => {}));
  }
  recordAction(t) {
    var n, r;
    (r = (n = this._delegate).recordAction) == null || r.call(n, t);
  }
  setOverlayState(t) {
    var n, r;
    (r = (n = this._delegate).setOverlayState) == null || r.call(n, t);
  }
  elementPicked(t, n) {
    var i, s;
    const r = this.injectedScript.ariaSnapshot(n.elements[0]);
    (s = (i = this._delegate).elementPicked) == null ||
      s.call(i, { selector: t, ariaSnapshot: r });
  }
}
class C1 {
  constructor(t) {
    (this._dialogElement = null), (this._recorder = t);
  }
  isShowing() {
    return !!this._dialogElement;
  }
  show(t) {
    const n = this._recorder.document.createElement("x-pw-tool-item");
    (n.title = "Accept"),
      n.classList.add("accept"),
      n.appendChild(this._recorder.document.createElement("x-div")),
      n.addEventListener("click", () => t.onCommit());
    const r = this._recorder.document.createElement("x-pw-tool-item");
    (r.title = "Close"),
      r.classList.add("cancel"),
      r.appendChild(this._recorder.document.createElement("x-div")),
      r.addEventListener("click", () => {
        var l;
        this.close(), (l = t.onCancel) == null || l.call(t);
      }),
      (this._dialogElement =
        this._recorder.document.createElement("x-pw-dialog")),
      (this._keyboardListener = (l) => {
        var a;
        if (l.key === "Escape") {
          this.close(), (a = t.onCancel) == null || a.call(t);
          return;
        }
        if (l.key === "Enter" && (l.ctrlKey || l.metaKey)) {
          this._dialogElement && t.onCommit();
          return;
        }
      }),
      this._recorder.document.addEventListener(
        "keydown",
        this._keyboardListener,
        !0,
      );
    const i = this._recorder.document.createElement("x-pw-tools-list"),
      s = this._recorder.document.createElement("label");
    (s.textContent = t.label),
      i.appendChild(s),
      i.appendChild(this._recorder.document.createElement("x-spacer")),
      i.appendChild(n),
      i.appendChild(r),
      this._dialogElement.appendChild(i);
    const o = this._recorder.document.createElement("x-pw-dialog-body");
    return (
      o.appendChild(t.body),
      this._dialogElement.appendChild(o),
      this._recorder.highlight.appendChild(this._dialogElement),
      this._dialogElement
    );
  }
  moveTo(t, n) {
    this._dialogElement &&
      ((this._dialogElement.style.top = t + "px"),
      (this._dialogElement.style.left = n + "px"));
  }
  close() {
    this._dialogElement &&
      (this._dialogElement.remove(),
      this._recorder.document.removeEventListener(
        "keydown",
        this._keyboardListener,
      ),
      (this._dialogElement = null));
  }
}
function N1(e) {
  let t = e.activeElement;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Lo(e) {
  return (
    (e.altKey ? 1 : 0) |
    (e.ctrlKey ? 2 : 0) |
    (e.metaKey ? 4 : 0) |
    (e.shiftKey ? 8 : 0)
  );
}
function zc(e) {
  switch (e.which) {
    case 1:
      return "left";
    case 2:
      return "middle";
    case 3:
      return "right";
  }
  return "left";
}
function Io(e) {
  if (e.target.nodeName === "CANVAS") return { x: e.offsetX, y: e.offsetY };
}
function q(e) {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}
function Mo(e) {
  if (!e || e.nodeName !== "INPUT") return null;
  const t = e;
  return ["checkbox", "radio"].includes(t.type) ? t : null;
}
function Po(e) {
  return !e || e.nodeName !== "INPUT" ? !1 : e.type.toLowerCase() === "range";
}
function B(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function $p(e) {
  for (const t of e) t();
  e.splice(0, e.length);
}
function b1(e, t, n) {
  try {
    const r = e.parseSelector(t);
    return { selector: t, elements: e.querySelectorAll(r, n) };
  } catch {
    return { selector: t, elements: [] };
  }
}
function Op(e, { tagName: t, attrs: n, children: r }) {
  const i = e.createElementNS("http://www.w3.org/2000/svg", t);
  if (n) for (const [s, o] of Object.entries(n)) i.setAttribute(s, o);
  if (r) for (const s of r) i.appendChild(Op(e, s));
  return i;
}
function Za(e, t, n) {
  return `internal:attr=[${e}=${xe(t, (n == null ? void 0 : n.exact) || !1)}]`;
}
function A1(e, t) {
  return `internal:testid=[${e}=${xe(t, !0)}]`;
}
function L1(e, t) {
  return "internal:label=" + qe(e, !!(t != null && t.exact));
}
function I1(e, t) {
  return Za("alt", e, t);
}
function M1(e, t) {
  return Za("title", e, t);
}
function P1(e, t) {
  return Za("placeholder", e, t);
}
function R1(e, t) {
  return "internal:text=" + qe(e, !!(t != null && t.exact));
}
function $1(e, t = {}) {
  const n = [];
  return (
    t.checked !== void 0 && n.push(["checked", String(t.checked)]),
    t.disabled !== void 0 && n.push(["disabled", String(t.disabled)]),
    t.selected !== void 0 && n.push(["selected", String(t.selected)]),
    t.expanded !== void 0 && n.push(["expanded", String(t.expanded)]),
    t.includeHidden !== void 0 &&
      n.push(["include-hidden", String(t.includeHidden)]),
    t.level !== void 0 && n.push(["level", String(t.level)]),
    t.name !== void 0 && n.push(["name", xe(t.name, !!t.exact)]),
    t.pressed !== void 0 && n.push(["pressed", String(t.pressed)]),
    `internal:role=${e}${n.map(([r, i]) => `[${r}=${i}]`).join("")}`
  );
}
const pr = Symbol("selector"),
  O1 = class Sr {
    constructor(t, n, r) {
      if (
        (r != null &&
          r.hasText &&
          (n += ` >> internal:has-text=${qe(r.hasText, !1)}`),
        r != null &&
          r.hasNotText &&
          (n += ` >> internal:has-not-text=${qe(r.hasNotText, !1)}`),
        r != null &&
          r.has &&
          (n += " >> internal:has=" + JSON.stringify(r.has[pr])),
        r != null &&
          r.hasNot &&
          (n += " >> internal:has-not=" + JSON.stringify(r.hasNot[pr])),
        (this[pr] = n),
        n)
      ) {
        const o = t.parseSelector(n);
        (this.element = t.querySelector(o, t.document, !1)),
          (this.elements = t.querySelectorAll(o, t.document));
      }
      const i = n,
        s = this;
      (s.locator = (o, l) => new Sr(t, i ? i + " >> " + o : o, l)),
        (s.getByTestId = (o) =>
          s.locator(
            A1(t.testIdAttributeNameForStrictErrorAndConsoleCodegen(), o),
          )),
        (s.getByAltText = (o, l) => s.locator(I1(o, l))),
        (s.getByLabel = (o, l) => s.locator(L1(o, l))),
        (s.getByPlaceholder = (o, l) => s.locator(P1(o, l))),
        (s.getByText = (o, l) => s.locator(R1(o, l))),
        (s.getByTitle = (o, l) => s.locator(M1(o, l))),
        (s.getByRole = (o, l = {}) => s.locator($1(o, l))),
        (s.filter = (o) => new Sr(t, n, o)),
        (s.first = () => s.locator("nth=0")),
        (s.last = () => s.locator("nth=-1")),
        (s.nth = (o) => s.locator(`nth=${o}`)),
        (s.and = (o) =>
          new Sr(t, i + " >> internal:and=" + JSON.stringify(o[pr]))),
        (s.or = (o) =>
          new Sr(t, i + " >> internal:or=" + JSON.stringify(o[pr])));
    }
  };
let j1 = O1;
class z1 {
  constructor(t) {
    (this._injectedScript = t),
      !this._injectedScript.window.playwright &&
        ((this._injectedScript.window.playwright = {
          $: (n, r) => this._querySelector(n, !!r),
          $$: (n) => this._querySelectorAll(n),
          inspect: (n) => this._inspect(n),
          selector: (n) => this._selector(n),
          generateLocator: (n, r) => this._generateLocator(n, r),
          ariaSnapshot: (n) => {
            const r = this._injectedScript.ariaSnapshot(
              n || this._injectedScript.document.body,
            );
            console.log(r);
          },
          resume: () => this._resume(),
          ...new j1(t, ""),
        }),
        delete this._injectedScript.window.playwright.filter,
        delete this._injectedScript.window.playwright.first,
        delete this._injectedScript.window.playwright.last,
        delete this._injectedScript.window.playwright.nth,
        delete this._injectedScript.window.playwright.and,
        delete this._injectedScript.window.playwright.or);
  }
  _querySelector(t, n) {
    if (typeof t != "string")
      throw new Error("Usage: playwright.query('Playwright >> selector').");
    const r = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelector(
      r,
      this._injectedScript.document,
      n,
    );
  }
  _querySelectorAll(t) {
    if (typeof t != "string")
      throw new Error("Usage: playwright.$$('Playwright >> selector').");
    const n = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelectorAll(
      n,
      this._injectedScript.document,
    );
  }
  _inspect(t) {
    if (typeof t != "string")
      throw new Error("Usage: playwright.inspect('Playwright >> selector').");
    this._injectedScript.window.inspect(this._querySelector(t, !1));
  }
  _selector(t) {
    if (!(t instanceof Element))
      throw new Error("Usage: playwright.selector(element).");
    return this._injectedScript.generateSelectorSimple(t);
  }
  _generateLocator(t, n) {
    if (!(t instanceof Element))
      throw new Error("Usage: playwright.locator(element).");
    const r = this._injectedScript.generateSelectorSimple(t);
    return Fn(n || "javascript", r);
  }
  _resume() {
    this._injectedScript.window.__pw_resume().catch(() => {});
  }
}
function D1(e, t) {
  e = e
    .replace(/AriaRole\s*\.\s*([\w]+)/g, (s, o) => o.toLowerCase())
    .replace(
      /(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g,
      (s, o, l) => `${o}(${l.toLowerCase()}`,
    );
  const n = [];
  let r = "";
  for (let s = 0; s < e.length; ++s) {
    const o = e[s];
    if (o !== '"' && o !== "'" && o !== "`" && o !== "/") {
      r += o;
      continue;
    }
    const l = e[s - 1] === "r" || e[s] === "/";
    ++s;
    let a = "";
    for (; s < e.length; ) {
      if (e[s] === "\\") {
        l
          ? (e[s + 1] !== o && (a += e[s]), ++s, (a += e[s]))
          : (++s,
            e[s] === "n"
              ? (a += `
`)
              : e[s] === "r"
                ? (a += "\r")
                : e[s] === "t"
                  ? (a += "	")
                  : (a += e[s])),
          ++s;
        continue;
      }
      if (e[s] !== o) {
        a += e[s++];
        continue;
      }
      break;
    }
    n.push({ quote: o, text: a }),
      (r += (o === "/" ? "r" : "") + "$" + n.length);
  }
  r = r
    .toLowerCase()
    .replace(/get_by_alt_text/g, "getbyalttext")
    .replace(/get_by_test_id/g, "getbytestid")
    .replace(/get_by_([\w]+)/g, "getby$1")
    .replace(/has_not_text/g, "hasnottext")
    .replace(/has_text/g, "hastext")
    .replace(/has_not/g, "hasnot")
    .replace(/frame_locator/g, "framelocator")
    .replace(/content_frame/g, "contentframe")
    .replace(/[{}\s]/g, "")
    .replace(/new\(\)/g, "")
    .replace(/new[\w]+\.[\w]+options\(\)/g, "")
    .replace(/\.set/g, ",set")
    .replace(/\.or_\(/g, "or(")
    .replace(/\.and_\(/g, "and(")
    .replace(/:/g, "=")
    .replace(/,re\.ignorecase/g, "i")
    .replace(/,pattern.case_insensitive/g, "i")
    .replace(/,regexoptions.ignorecase/g, "i")
    .replace(/re.compile\(([^)]+)\)/g, "$1")
    .replace(/pattern.compile\(([^)]+)\)/g, "r$1")
    .replace(/newregex\(([^)]+)\)/g, "r$1")
    .replace(/string=/g, "=")
    .replace(/regex=/g, "=")
    .replace(/,,/g, ",");
  const i = n.map((s) => s.quote).filter((s) => "'\"`".includes(s))[0];
  return { selector: jp(r, n, t), preferredQuote: i };
}
function Dc(e) {
  return [...e.matchAll(/\$\d+/g)].length;
}
function Fc(e, t) {
  return e.replace(/\$(\d+)/g, (n, r) => `$${r - t}`);
}
function jp(e, t, n) {
  for (;;) {
    const i = e.match(/filter\(,?(has=|hasnot=|sethas\(|sethasnot\()/);
    if (!i) break;
    const s = i.index + i[0].length;
    let o = 0,
      l = s;
    for (
      ;
      l < e.length && (e[l] === "(" ? o++ : e[l] === ")" && o--, !(o < 0));
      l++
    );
    let a = e.substring(0, s),
      u = 0;
    ["sethas(", "sethasnot("].includes(i[1]) &&
      ((u = 1),
      (a = a.replace(/sethas\($/, "has=").replace(/sethasnot\($/, "hasnot=")));
    const c = Dc(e.substring(0, s)),
      f = Fc(e.substring(s, l), c),
      d = Dc(f),
      g = t.slice(c, c + d),
      m = JSON.stringify(jp(f, g, n));
    e = a.replace(/=$/, "2=") + `$${c + 1}` + Fc(e.substring(l + u), d - 1);
    const y = t.slice(0, c),
      _ = t.slice(c + d);
    t = y.concat([{ quote: '"', text: m }]).concat(_);
  }
  e = e
    .replace(
      /\,set([\w]+)\(([^)]+)\)/g,
      (i, s, o) => "," + s.toLowerCase() + "=" + o.toLowerCase(),
    )
    .replace(/framelocator\(([^)]+)\)/g, "$1.internal:control=enter-frame")
    .replace(/contentframe(\(\))?/g, "internal:control=enter-frame")
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      "locator($1).internal:has-text=$2",
    )
    .replace(
      /locator\(([^)]+),hasnottext=([^),]+)\)/g,
      "locator($1).internal:has-not-text=$2",
    )
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      "locator($1).internal:has-text=$2",
    )
    .replace(/locator\(([^)]+)\)/g, "$1")
    .replace(/getbyrole\(([^)]+)\)/g, "internal:role=$1")
    .replace(/getbytext\(([^)]+)\)/g, "internal:text=$1")
    .replace(/getbylabel\(([^)]+)\)/g, "internal:label=$1")
    .replace(/getbytestid\(([^)]+)\)/g, `internal:testid=[${n}=$1]`)
    .replace(
      /getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g,
      "internal:attr=[$1=$2]",
    )
    .replace(/first(\(\))?/g, "nth=0")
    .replace(/last(\(\))?/g, "nth=-1")
    .replace(/nth\(([^)]+)\)/g, "nth=$1")
    .replace(/filter\(,?hastext=([^)]+)\)/g, "internal:has-text=$1")
    .replace(/filter\(,?hasnottext=([^)]+)\)/g, "internal:has-not-text=$1")
    .replace(/filter\(,?has2=([^)]+)\)/g, "internal:has=$1")
    .replace(/filter\(,?hasnot2=([^)]+)\)/g, "internal:has-not=$1")
    .replace(/,exact=false/g, "")
    .replace(/,exact=true/g, "s")
    .replace(/\,/g, "][");
  const r = e.split(".");
  for (let i = 0; i < r.length - 1; i++)
    if (
      r[i] === "internal:control=enter-frame" &&
      r[i + 1].startsWith("nth=")
    ) {
      const [s] = r.splice(i, 1);
      r.splice(i + 1, 0, s);
    }
  return r
    .map((i) =>
      !i.startsWith("internal:") || i === "internal:control"
        ? i.replace(/\$(\d+)/g, (s, o) => t[+o - 1].text)
        : ((i = i.includes("[") ? i.replace(/\]/, "") + "]" : i),
          (i = i
            .replace(/(?:r)\$(\d+)(i)?/g, (s, o, l) => {
              const a = t[+o - 1];
              return i.startsWith("internal:attr") ||
                i.startsWith("internal:testid") ||
                i.startsWith("internal:role")
                ? xe(new RegExp(a.text), !1) + (l || "")
                : qe(new RegExp(a.text, l), !1);
            })
            .replace(/\$(\d+)(i|s)?/g, (s, o, l) => {
              const a = t[+o - 1];
              return i.startsWith("internal:has=") ||
                i.startsWith("internal:has-not=")
                ? a.text
                : i.startsWith("internal:testid")
                  ? xe(a.text, !0)
                  : i.startsWith("internal:attr") ||
                      i.startsWith("internal:role")
                    ? xe(a.text, l === "s")
                    : qe(a.text, l === "s");
            })),
          i),
    )
    .join(" >> ");
}
function F1(e, t, n) {
  try {
    return Us(t), t;
  } catch {}
  try {
    const { selector: r, preferredQuote: i } = D1(t, n),
      s = Ah(e, r, void 0, void 0, i),
      o = Hc(e, t);
    if (s.some((l) => Hc(e, l) === o)) return r;
  } catch {}
  return "";
}
function Hc(e, t) {
  return (
    (t = t.replace(/\s/g, "")),
    e === "javascript" && (t = t.replace(/\\?["`]/g, "'")),
    t
  );
}
const H1 = ({ url: e }) =>
    w.jsxs("div", {
      className: "browser-frame-header",
      children: [
        w.jsxs("div", {
          style: { whiteSpace: "nowrap" },
          children: [
            w.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(242, 95, 88)" },
            }),
            w.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(251, 190, 60)" },
            }),
            w.jsx("span", {
              className: "browser-frame-dot",
              style: { backgroundColor: "rgb(88, 203, 66)" },
            }),
          ],
        }),
        w.jsx("div", {
          className: "browser-frame-address-bar",
          title: e || "about:blank",
          children: e || "about:blank",
        }),
        w.jsx("div", {
          style: { marginLeft: "auto" },
          children: w.jsxs("div", {
            children: [
              w.jsx("span", { className: "browser-frame-menu-bar" }),
              w.jsx("span", { className: "browser-frame-menu-bar" }),
              w.jsx("span", { className: "browser-frame-menu-bar" }),
            ],
          }),
        }),
      ],
    }),
  vw = ({
    action: e,
    sdkLanguage: t,
    testIdAttributeName: n,
    isInspecting: r,
    setIsInspecting: i,
    highlightedLocator: s,
    setHighlightedLocator: o,
    openPage: l,
  }) => {
    const [a, u] = M.useState("action"),
      c = M.useMemo(() => q1(e), [e]),
      f = M.useMemo(() => {
        const d = c[a];
        return d ? Q1(d) : void 0;
      }, [c, a]);
    return w.jsxs("div", {
      className: "snapshot-tab vbox",
      children: [
        w.jsxs(Oa, {
          children: [
            w.jsx(fn, {
              className: "pick-locator",
              title: "Pick locator",
              icon: "target",
              toggled: r,
              onClick: () => i(!r),
            }),
            ["action", "before", "after"].map((d) =>
              w.jsx(
                Mh,
                {
                  id: d,
                  title: B1(d),
                  selected: a === d,
                  onSelect: () => u(d),
                },
                d,
              ),
            ),
            w.jsx("div", { style: { flex: "auto" } }),
            w.jsx(fn, {
              icon: "link-external",
              title: "Open snapshot in a new tab",
              disabled: !(f != null && f.popoutUrl),
              onClick: () => {
                l || (l = window.open);
                const d = l((f == null ? void 0 : f.popoutUrl) || "", "_blank");
                d == null ||
                  d.addEventListener("DOMContentLoaded", () => {
                    const g = new Ip(d, !1, t, n, 1, "chromium", []);
                    new z1(g);
                  });
              },
            }),
          ],
        }),
        w.jsx(U1, {
          snapshotUrls: f,
          sdkLanguage: t,
          testIdAttributeName: n,
          isInspecting: r,
          setIsInspecting: i,
          highlightedLocator: s,
          setHighlightedLocator: o,
        }),
      ],
    });
  },
  U1 = ({
    snapshotUrls: e,
    sdkLanguage: t,
    testIdAttributeName: n,
    isInspecting: r,
    setIsInspecting: i,
    highlightedLocator: s,
    setHighlightedLocator: o,
  }) => {
    const l = M.useRef(null),
      a = M.useRef(null),
      [u, c] = M.useState({ viewport: Dp, url: "" }),
      f = M.useRef({ iteration: 0, visibleIframe: 0 });
    return (
      M.useEffect(() => {
        (async () => {
          const d = f.current.iteration + 1,
            g = 1 - f.current.visibleIframe;
          f.current.iteration = d;
          const m = await K1(e == null ? void 0 : e.snapshotInfoUrl);
          if (f.current.iteration !== d) return;
          const y = [l, a][g].current;
          if (y) {
            let _ = () => {};
            const p = new Promise((h) => (_ = h));
            try {
              y.addEventListener("load", _), y.addEventListener("error", _);
              const h = (e == null ? void 0 : e.snapshotUrl) || G1;
              y.contentWindow
                ? y.contentWindow.location.replace(h)
                : (y.src = h),
                await p;
            } catch {
            } finally {
              y.removeEventListener("load", _),
                y.removeEventListener("error", _);
            }
          }
          f.current.iteration === d && ((f.current.visibleIframe = g), c(m));
        })();
      }, [e]),
      w.jsxs("div", {
        className: "vbox",
        tabIndex: 0,
        onKeyDown: (d) => {
          d.key === "Escape" && r && i(!1);
        },
        children: [
          w.jsx(Uc, {
            isInspecting: r,
            sdkLanguage: t,
            testIdAttributeName: n,
            highlightedLocator: s,
            setHighlightedLocator: o,
            iframe: l.current,
            iteration: f.current.iteration,
          }),
          w.jsx(Uc, {
            isInspecting: r,
            sdkLanguage: t,
            testIdAttributeName: n,
            highlightedLocator: s,
            setHighlightedLocator: o,
            iframe: a.current,
            iteration: f.current.iteration,
          }),
          w.jsx(V1, {
            snapshotInfo: u,
            children: w.jsxs("div", {
              className: "snapshot-switcher",
              children: [
                w.jsx("iframe", {
                  ref: l,
                  name: "snapshot",
                  title: "DOM Snapshot",
                  className: tt(
                    f.current.visibleIframe === 0 && "snapshot-visible",
                  ),
                }),
                w.jsx("iframe", {
                  ref: a,
                  name: "snapshot",
                  title: "DOM Snapshot",
                  className: tt(
                    f.current.visibleIframe === 1 && "snapshot-visible",
                  ),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  V1 = ({ snapshotInfo: e, children: t }) => {
    const [n, r] = ks(),
      s = { width: e.viewport.width, height: e.viewport.height + 40 },
      o = Math.min(n.width / s.width, n.height / s.height, 1),
      l = { x: (n.width - s.width) / 2, y: (n.height - s.height) / 2 };
    return w.jsx("div", {
      ref: r,
      className: "snapshot-wrapper",
      children: w.jsxs("div", {
        className: "snapshot-container",
        style: {
          width: s.width + "px",
          height: s.height + "px",
          transform: `translate(${l.x}px, ${l.y}px) scale(${o})`,
        },
        children: [w.jsx(H1, { url: e.url }), t],
      }),
    });
  };
function B1(e) {
  return e === "before"
    ? "Before"
    : e === "after"
      ? "After"
      : e === "action"
        ? "Action"
        : e;
}
const Uc = ({
  iframe: e,
  isInspecting: t,
  sdkLanguage: n,
  testIdAttributeName: r,
  highlightedLocator: i,
  setHighlightedLocator: s,
  iteration: o,
}) => (
  M.useEffect(() => {
    const l = [],
      a =
        new URLSearchParams(window.location.search).get("isUnderTest") ===
        "true";
    try {
      zp(l, n, r, a, "", e == null ? void 0 : e.contentWindow);
    } catch {}
    for (const { recorder: u, frameSelector: c } of l) {
      const f = F1(n, i, r);
      u.setUIState(
        {
          mode: t ? "inspecting" : "none",
          actionSelector: f.startsWith(c)
            ? f.substring(c.length).trim()
            : void 0,
          language: n,
          testIdAttributeName: r,
          overlay: { offsetX: 0 },
        },
        {
          async elementPicked(d) {
            s(Fn(n, c + d.selector));
          },
          highlightUpdated() {
            for (const d of l) d.recorder !== u && d.recorder.clearHighlight();
          },
        },
      );
    }
  }, [e, t, i, s, n, r, o]),
  w.jsx(w.Fragment, {})
);
function zp(e, t, n, r, i, s) {
  if (!s) return;
  const o = s;
  if (!o._recorder) {
    const l = new Ip(s, r, t, n, 1, "chromium", []),
      a = new T1(l);
    (o._injectedScript = l),
      (o._recorder = { recorder: a, frameSelector: i }),
      r &&
        ((window._weakRecordersForTest =
          window._weakRecordersForTest || new Set()),
        window._weakRecordersForTest.add(new WeakRef(a)));
  }
  e.push(o._recorder);
  for (let l = 0; l < s.frames.length; ++l) {
    const a = s.frames[l],
      u = a.frameElement
        ? o._injectedScript.generateSelectorSimple(a.frameElement, {
            omitInternalEngines: !0,
            testIdAttributeName: n,
          }) + " >> internal:control=enter-frame >> "
        : "";
    zp(e, t, n, r, i + u, a);
  }
}
function q1(e) {
  if (!e) return {};
  let t = e.beforeSnapshot
      ? { action: e, snapshotName: e.beforeSnapshot }
      : void 0,
    n = e;
  for (; !t && n; )
    (n = Av(n)),
      (t =
        n != null && n.afterSnapshot
          ? { action: n, snapshotName: n == null ? void 0 : n.afterSnapshot }
          : void 0);
  const r = e.afterSnapshot ? { action: e, snapshotName: e.afterSnapshot } : t,
    i = e.inputSnapshot
      ? { action: e, snapshotName: e.inputSnapshot, hasInputTarget: !0 }
      : r;
  return i && (i.point = e.point), { action: i, before: t, after: r };
}
const W1 = new URLSearchParams(window.location.search).has("isUnderTest");
function Q1(e) {
  const t = new URLSearchParams();
  t.set("trace", vs(e.action).traceUrl),
    t.set("name", e.snapshotName),
    W1 && t.set("isUnderTest", "true"),
    e.point &&
      (t.set("pointX", String(e.point.x)),
      t.set("pointY", String(e.point.y)),
      e.hasInputTarget && t.set("hasInputTarget", "1"));
  const n = new URL(
      `snapshot/${e.action.pageId}?${t.toString()}`,
      window.location.href,
    ).toString(),
    r = new URL(
      `snapshotInfo/${e.action.pageId}?${t.toString()}`,
      window.location.href,
    ).toString(),
    i = new URLSearchParams();
  i.set("r", n),
    i.set("trace", vs(e.action).traceUrl),
    e.point &&
      (i.set("pointX", String(e.point.x)),
      i.set("pointY", String(e.point.y)),
      e.hasInputTarget && t.set("hasInputTarget", "1"));
  const s = new URL(
    `snapshot.html?${i.toString()}`,
    window.location.href,
  ).toString();
  return { snapshotInfoUrl: r, snapshotUrl: n, popoutUrl: s };
}
async function K1(e) {
  const t = { url: "", viewport: Dp, timestamp: void 0, wallTime: void 0 };
  if (e) {
    const r = await (await fetch(e)).json();
    r.error ||
      ((t.url = r.url),
      (t.viewport = r.viewport),
      (t.timestamp = r.timestamp),
      (t.wallTime = r.wallTime));
  }
  return t;
}
const Dp = { width: 1280, height: 720 },
  G1 = 'data:text/html,<body style="background: #ddd"></body>',
  X1 = $a,
  J1 = ({ stack: e, setSelectedFrame: t, selectedFrame: n }) => {
    const r = e || [];
    return w.jsx(X1, {
      name: "stack-trace",
      items: r,
      selectedItem: r[n],
      render: (i) => {
        const s = i.file[1] === ":" ? "\\" : "/";
        return w.jsxs(w.Fragment, {
          children: [
            w.jsx("span", {
              className: "stack-trace-frame-function",
              children: i.function || "(anonymous)",
            }),
            w.jsx("span", {
              className: "stack-trace-frame-location",
              children: i.file.split(s).pop(),
            }),
            w.jsx("span", {
              className: "stack-trace-frame-line",
              children: ":" + i.line,
            }),
          ],
        });
      },
      onSelected: (i) => t(r.indexOf(i)),
    });
  },
  yw = ({
    stack: e,
    sources: t,
    rootDir: n,
    fallbackLocation: r,
    stackFrameLocation: i,
    onOpenExternally: s,
  }) => {
    const [o, l] = M.useState(),
      [a, u] = M.useState(0);
    M.useEffect(() => {
      o !== e && (l(e), u(0));
    }, [e, o, l, u]);
    const {
        source: c,
        highlight: f,
        targetLine: d,
        fileName: g,
        location: m,
      } = cg(
        async () => {
          var I, O, T, P;
          const h = e == null ? void 0 : e[a],
            v = !(h != null && h.file);
          if (v && !r)
            return {
              source: { file: "", errors: [], content: void 0 },
              targetLine: 0,
              highlight: [],
            };
          const x = v ? r.file : h.file;
          let E = t.get(x);
          E ||
            ((E = {
              errors:
                ((I = r == null ? void 0 : r.source) == null
                  ? void 0
                  : I.errors) || [],
              content:
                (O = r == null ? void 0 : r.source) == null
                  ? void 0
                  : O.content,
            }),
            t.set(x, E));
          const C = v ? r : h,
            N = v
              ? (r == null ? void 0 : r.line) ||
                ((T = E.errors[0]) == null ? void 0 : T.line) ||
                0
              : h.line,
            b = n && x.startsWith(n) ? x.substring(n.length + 1) : x,
            S = E.errors.map((J) => ({
              type: "error",
              line: J.line,
              message: J.message,
            }));
          if (
            (S.push({ line: N, type: "running" }),
            ((P = r == null ? void 0 : r.source) == null
              ? void 0
              : P.content) !== void 0)
          )
            E.content = r.source.content;
          else if (E.content === void 0 || v) {
            const J = await Y1(x);
            try {
              let st = await fetch(`sha1/src@${J}.txt`);
              st.status === 404 &&
                (st = await fetch(`file?path=${encodeURIComponent(x)}`)),
                st.status >= 400
                  ? (E.content = `<Unable to read "${x}">`)
                  : (E.content = await st.text());
            } catch {
              E.content = `<Unable to read "${x}">`;
            }
          }
          return {
            source: E,
            highlight: S,
            targetLine: N,
            fileName: b,
            location: C,
          };
        },
        [e, a, n, r],
        { source: { errors: [], content: "Loading…" }, highlight: [] },
      ),
      y = M.useCallback(() => {
        m &&
          (s
            ? s(m)
            : (window.location.href = `vscode://file//${m.file}:${m.line}`));
      }, [s, m]),
      _ = ((e == null ? void 0 : e.length) ?? 0) > 1,
      p = Z1(g);
    return w.jsx(sh, {
      sidebarSize: 200,
      orientation: i === "bottom" ? "vertical" : "horizontal",
      sidebarHidden: !_,
      main: w.jsxs("div", {
        className: "vbox",
        "data-testid": "source-code",
        children: [
          g &&
            w.jsxs(Oa, {
              children: [
                w.jsx("div", {
                  className: "source-tab-file-name",
                  title: g,
                  children: w.jsx("div", { children: p }),
                }),
                w.jsx(c0, { description: "Copy filename", value: p }),
                m &&
                  w.jsx(fn, {
                    icon: "link-external",
                    title: "Open in VS Code",
                    onClick: y,
                  }),
              ],
            }),
          w.jsx(Vs, {
            text: c.content || "",
            language: "javascript",
            highlight: f,
            revealLine: d,
            readOnly: !0,
            lineNumbers: !0,
            dataTestId: "source-code-mirror",
          }),
        ],
      }),
      sidebar: w.jsx(J1, { stack: e, selectedFrame: a, setSelectedFrame: u }),
    });
  };
async function Y1(e) {
  const t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest("SHA-1", t),
    r = [],
    i = new DataView(n);
  for (let s = 0; s < i.byteLength; s += 1) {
    const o = i.getUint8(s).toString(16).padStart(2, "0");
    r.push(o);
  }
  return r.join("");
}
function Z1(e) {
  if (!e) return "";
  const t = e != null && e.includes("/") ? "/" : "\\";
  return (e == null ? void 0 : e.split(t).pop()) ?? "";
}
const ww = ({
  sdkLanguage: e,
  setIsInspecting: t,
  highlightedLocator: n,
  setHighlightedLocator: r,
}) =>
  w.jsxs("div", {
    className: "vbox",
    style: { backgroundColor: "var(--vscode-sideBar-background)" },
    children: [
      w.jsx("div", {
        style: {
          margin: "10px 0px 10px 10px",
          color: "var(--vscode-editorCodeLens-foreground)",
          flex: "none",
        },
        children: "Locator",
      }),
      w.jsx("div", {
        style: { margin: "0 10px 10px", flex: "auto" },
        children: w.jsx(Vs, {
          text: n,
          language: e,
          focusOnChange: !0,
          isFocused: !0,
          wrapLines: !0,
          onChange: (i) => {
            r(i), t(!1);
          },
        }),
      }),
      w.jsx("div", {
        style: { position: "absolute", right: 5, top: 5 },
        children: w.jsx(fn, {
          icon: "files",
          title: "Copy locator",
          onClick: () => {
            fg(n);
          },
        }),
      }),
    ],
  });
export {
  gw as A,
  hw as B,
  c0 as C,
  vw as D,
  v0 as E,
  yw as F,
  P0 as G,
  rw as H,
  ww as I,
  aw as J,
  fg as K,
  $a as L,
  uw as M,
  mw as N,
  q1 as O,
  Lh as P,
  Q1 as Q,
  et as R,
  sh as S,
  fn as T,
  U1 as U,
  tw as V,
  Up as W,
  _0 as _,
  iw as a,
  $o as b,
  xv as c,
  sw as d,
  ow as e,
  tt as f,
  Oa as g,
  ru as h,
  lw as i,
  w as j,
  pg as k,
  cw as l,
  Ro as m,
  dw as n,
  Fn as o,
  ws as p,
  nw as q,
  M as r,
  Yt as s,
  mg as t,
  ks as u,
  $0 as v,
  gg as w,
  pw as x,
  Vs as y,
  fw as z,
};
