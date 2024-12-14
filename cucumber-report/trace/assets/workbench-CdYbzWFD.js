import {
  r as h,
  j as e,
  f as O,
  k as qt,
  l as Yt,
  n as Jt,
  o as St,
  m as B,
  T as ot,
  P as Q,
  C as Kt,
  L as Qt,
  p as Zt,
  u as dt,
  q as Ct,
  G as te,
  v as ee,
  w as se,
  x as ie,
  y as ne,
  h as wt,
  z as ae,
  A as re,
  B as ce,
  N as le,
  S as Nt,
  D as oe,
  E as bt,
  I as he,
  F as de,
} from "./inspectorTab-DdpLd2bb.js";
const yt = new Map();
function ue({
  name: t,
  rootItem: s,
  render: i,
  title: a,
  icon: u,
  isError: c,
  isVisible: r,
  selectedItem: n,
  onAccepted: d,
  onSelected: l,
  onHighlighted: o,
  treeState: x,
  setTreeState: m,
  noItemsMessage: j,
  dataTestId: N,
  autoExpandDepth: y,
}) {
  const T = h.useMemo(
      () => me(s, n, x.expandedItems, y || 0, r),
      [s, n, x, y, r],
    ),
    C = h.useRef(null),
    [k, L] = h.useState(),
    [S, w] = h.useState(!1);
  h.useEffect(() => {
    o == null || o(k);
  }, [o, k]),
    h.useEffect(() => {
      const v = C.current;
      if (!v) return;
      const b = () => {
        yt.set(t, v.scrollTop);
      };
      return (
        v.addEventListener("scroll", b, { passive: !0 }),
        () => v.removeEventListener("scroll", b)
      );
    }, [t]),
    h.useEffect(() => {
      C.current && (C.current.scrollTop = yt.get(t) || 0);
    }, [t]);
  const R = h.useCallback(
    (v) => {
      const { expanded: b } = T.get(v);
      if (b) {
        for (let M = n; M; M = M.parent)
          if (M === v) {
            l == null || l(v);
            break;
          }
        x.expandedItems.set(v.id, !1);
      } else x.expandedItems.set(v.id, !0);
      m({ ...x });
    },
    [T, n, l, x, m],
  );
  return e.jsx("div", {
    className: O("tree-view vbox", t + "-tree-view"),
    role: "tree",
    "data-testid": N || t + "-tree",
    children: e.jsxs("div", {
      className: O("tree-view-content"),
      tabIndex: 0,
      onKeyDown: (v) => {
        if (n && v.key === "Enter") {
          d == null || d(n);
          return;
        }
        if (
          v.key !== "ArrowDown" &&
          v.key !== "ArrowUp" &&
          v.key !== "ArrowLeft" &&
          v.key !== "ArrowRight"
        )
          return;
        if (
          (v.stopPropagation(), v.preventDefault(), n && v.key === "ArrowLeft")
        ) {
          const { expanded: M, parent: p } = T.get(n);
          M
            ? (x.expandedItems.set(n.id, !1), m({ ...x }))
            : p && (l == null || l(p));
          return;
        }
        if (n && v.key === "ArrowRight") {
          n.children.length && (x.expandedItems.set(n.id, !0), m({ ...x }));
          return;
        }
        let b = n;
        if (
          (v.key === "ArrowDown" &&
            (n ? (b = T.get(n).next) : T.size && (b = [...T.keys()][0])),
          v.key === "ArrowUp")
        ) {
          if (n) b = T.get(n).prev;
          else if (T.size) {
            const M = [...T.keys()];
            b = M[M.length - 1];
          }
        }
        o == null || o(void 0), b && (w(!0), l == null || l(b)), L(void 0);
      },
      ref: C,
      children: [
        j &&
          T.size === 0 &&
          e.jsx("div", { className: "tree-view-empty", children: j }),
        s.children.map(
          (v) =>
            T.get(v) &&
            e.jsx(
              Lt,
              {
                item: v,
                treeItems: T,
                selectedItem: n,
                onSelected: l,
                onAccepted: d,
                isError: c,
                toggleExpanded: R,
                highlightedItem: k,
                setHighlightedItem: L,
                render: i,
                icon: u,
                title: a,
                isKeyboardNavigation: S,
                setIsKeyboardNavigation: w,
              },
              v.id,
            ),
        ),
      ],
    }),
  });
}
function Lt({
  item: t,
  treeItems: s,
  selectedItem: i,
  onSelected: a,
  highlightedItem: u,
  setHighlightedItem: c,
  isError: r,
  onAccepted: n,
  toggleExpanded: d,
  render: l,
  title: o,
  icon: x,
  isKeyboardNavigation: m,
  setIsKeyboardNavigation: j,
}) {
  const N = h.useId(),
    y = h.useRef(null);
  h.useEffect(() => {
    i === t && m && y.current && (qt(y.current), j(!1));
  }, [t, i, m, j]);
  const T = s.get(t),
    C = T.depth,
    k = T.expanded;
  let L = "codicon-blank";
  typeof k == "boolean" &&
    (L = k ? "codicon-chevron-down" : "codicon-chevron-right");
  const S = l(t),
    w = k && t.children.length ? t.children : [],
    R = o == null ? void 0 : o(t),
    v = (x == null ? void 0 : x(t)) || "codicon-blank";
  return e.jsxs("div", {
    ref: y,
    role: "treeitem",
    "aria-selected": t === i,
    "aria-expanded": k,
    "aria-controls": N,
    title: R,
    className: "vbox",
    style: { flex: "none" },
    children: [
      e.jsxs("div", {
        onDoubleClick: () => (n == null ? void 0 : n(t)),
        className: O(
          "tree-view-entry",
          i === t && "selected",
          u === t && "highlighted",
          (r == null ? void 0 : r(t)) && "error",
        ),
        onClick: () => (a == null ? void 0 : a(t)),
        onMouseEnter: () => c(t),
        onMouseLeave: () => c(void 0),
        children: [
          C
            ? new Array(C)
                .fill(0)
                .map((b, M) =>
                  e.jsx(
                    "div",
                    { className: "tree-view-indent" },
                    "indent-" + M,
                  ),
                )
            : void 0,
          e.jsx("div", {
            "aria-hidden": "true",
            className: "codicon " + L,
            style: { minWidth: 16, marginRight: 4 },
            onDoubleClick: (b) => {
              b.preventDefault(), b.stopPropagation();
            },
            onClick: (b) => {
              b.stopPropagation(), b.preventDefault(), d(t);
            },
          }),
          x &&
            e.jsx("div", {
              className: "codicon " + v,
              style: { minWidth: 16, marginRight: 4 },
              "aria-label": "[" + v.replace("codicon", "icon") + "]",
            }),
          typeof S == "string"
            ? e.jsx("div", {
                style: { textOverflow: "ellipsis", overflow: "hidden" },
                children: S,
              })
            : S,
        ],
      }),
      !!w.length &&
        e.jsx("div", {
          id: N,
          role: "group",
          children: w.map(
            (b) =>
              s.get(b) &&
              e.jsx(
                Lt,
                {
                  item: b,
                  treeItems: s,
                  selectedItem: i,
                  onSelected: a,
                  onAccepted: n,
                  isError: r,
                  toggleExpanded: d,
                  highlightedItem: u,
                  setHighlightedItem: c,
                  render: l,
                  title: o,
                  icon: x,
                  isKeyboardNavigation: m,
                  setIsKeyboardNavigation: j,
                },
                b.id,
              ),
          ),
        }),
    ],
  });
}
function me(t, s, i, a, u) {
  const c = new Map(),
    r = new Set();
  for (let l = s == null ? void 0 : s.parent; l; l = l.parent) r.add(l.id);
  let n = null;
  const d = (l, o) => {
    if (!(u && !u(l)))
      for (const x of l.children) {
        const m = r.has(x.id) || i.get(x.id),
          j = a > o && c.size < 25 && m !== !1,
          N = x.children.length ? (m ?? j) : void 0,
          y = {
            depth: o,
            expanded: N,
            parent: t === l ? null : l,
            next: null,
            prev: n,
          };
        n && (c.get(n).next = x), (n = x), c.set(x, y), N && d(x, o + 1);
      }
  };
  return d(t, 0), c;
}
const xe = ue,
  fe = ({
    actions: t,
    selectedAction: s,
    selectedTime: i,
    setSelectedTime: a,
    sdkLanguage: u,
    onSelected: c,
    onHighlighted: r,
    revealConsole: n,
    revealAttachment: d,
    isLive: l,
  }) => {
    const [o, x] = h.useState({ expandedItems: new Map() }),
      { rootItem: m, itemMap: j } = h.useMemo(() => Yt(t), [t]),
      { selectedItem: N } = h.useMemo(
        () => ({ selectedItem: s ? j.get(s.callId) : void 0 }),
        [j, s],
      ),
      y = h.useCallback((w) => {
        var R, v;
        return !!(
          (v = (R = w.action) == null ? void 0 : R.error) != null && v.message
        );
      }, []),
      T = h.useCallback(
        (w) => a({ minimum: w.action.startTime, maximum: w.action.endTime }),
        [a],
      ),
      C = h.useCallback(
        (w) =>
          ut(w.action, {
            sdkLanguage: u,
            revealConsole: n,
            revealAttachment: d,
            isLive: l,
            showDuration: !0,
            showBadges: !0,
          }),
        [l, n, d, u],
      ),
      k = h.useCallback(
        (w) =>
          !i ||
          !w.action ||
          (w.action.startTime <= i.maximum && w.action.endTime >= i.minimum),
        [i],
      ),
      L = h.useCallback(
        (w) => {
          c == null || c(w.action);
        },
        [c],
      ),
      S = h.useCallback(
        (w) => {
          r == null || r(w == null ? void 0 : w.action);
        },
        [r],
      );
    return e.jsxs("div", {
      className: "vbox",
      children: [
        i &&
          e.jsxs("div", {
            className: "action-list-show-all",
            onClick: () => a(void 0),
            children: [
              e.jsx("span", { className: "codicon codicon-triangle-left" }),
              "Show all",
            ],
          }),
        e.jsx(xe, {
          name: "actions",
          rootItem: m,
          treeState: o,
          setTreeState: x,
          selectedItem: N,
          onSelected: L,
          onHighlighted: S,
          onAccepted: T,
          isError: y,
          isVisible: k,
          render: C,
        }),
      ],
    });
  },
  ut = (t, s) => {
    var j;
    const {
        sdkLanguage: i,
        revealConsole: a,
        revealAttachment: u,
        isLive: c,
        showDuration: r,
        showBadges: n,
      } = s,
      { errors: d, warnings: l } = Jt(t),
      o = t.params.selector ? St(i || "javascript", t.params.selector) : void 0,
      x = !!((j = t.attachments) != null && j.length) && !!u;
    let m = "";
    return (
      t.endTime
        ? (m = B(t.endTime - t.startTime))
        : t.error
          ? (m = "Timed out")
          : c || (m = "-"),
      e.jsxs(e.Fragment, {
        children: [
          e.jsxs("div", {
            className: "action-title",
            title: t.apiName,
            children: [
              e.jsx("span", { children: t.apiName }),
              o &&
                e.jsx("div", {
                  className: "action-selector",
                  title: o,
                  children: o,
                }),
              t.method === "goto" &&
                t.params.url &&
                e.jsx("div", {
                  className: "action-url",
                  title: t.params.url,
                  children: t.params.url,
                }),
              t.class === "APIRequestContext" &&
                t.params.url &&
                e.jsx("div", {
                  className: "action-url",
                  title: t.params.url,
                  children: pe(t.params.url),
                }),
            ],
          }),
          (r || n || x) && e.jsx("div", { className: "spacer" }),
          x &&
            e.jsx(ot, {
              icon: "attach",
              title: "Open Attachment",
              onClick: () => u(t.attachments[0]),
            }),
          r &&
            e.jsx("div", {
              className: "action-duration",
              children:
                m || e.jsx("span", { className: "codicon codicon-loading" }),
            }),
          n &&
            e.jsxs("div", {
              className: "action-icons",
              onClick: () => (a == null ? void 0 : a()),
              children: [
                !!d &&
                  e.jsxs("div", {
                    className: "action-icon",
                    children: [
                      e.jsx("span", { className: "codicon codicon-error" }),
                      e.jsx("span", {
                        className: "action-icon-value",
                        children: d,
                      }),
                    ],
                  }),
                !!l &&
                  e.jsxs("div", {
                    className: "action-icon",
                    children: [
                      e.jsx("span", { className: "codicon codicon-warning" }),
                      e.jsx("span", {
                        className: "action-icon-value",
                        children: l,
                      }),
                    ],
                  }),
              ],
            }),
        ],
      })
    );
  };
function pe(t) {
  try {
    const s = new URL(t);
    return s.pathname + s.search;
  } catch {
    return t;
  }
}
const ge = ({ action: t, sdkLanguage: s }) => {
  if (!t) return e.jsx(Q, { text: "No action selected" });
  const i = { ...t.params };
  delete i.info;
  const a = Object.keys(i),
    u = t.startTime + (t.context.wallTime - t.context.startTime),
    c = new Date(u).toLocaleString(),
    r = t.endTime ? B(t.endTime - t.startTime) : "Timed Out";
  return e.jsxs("div", {
    className: "call-tab",
    children: [
      e.jsx("div", { className: "call-line", children: t.apiName }),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx("div", { className: "call-section", children: "Time" }),
          c &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "wall time:",
                e.jsx("span", {
                  className: "call-value datetime",
                  title: c,
                  children: c,
                }),
              ],
            }),
          e.jsxs("div", {
            className: "call-line",
            children: [
              "duration:",
              e.jsx("span", {
                className: "call-value datetime",
                title: r,
                children: r,
              }),
            ],
          }),
        ],
      }),
      !!a.length &&
        e.jsx("div", { className: "call-section", children: "Parameters" }),
      !!a.length && a.map((n, d) => Tt(kt(t, n, i[n], s), "param-" + d)),
      !!t.result &&
        e.jsx("div", { className: "call-section", children: "Return value" }),
      !!t.result &&
        Object.keys(t.result).map((n, d) =>
          Tt(kt(t, n, t.result[n], s), "result-" + d),
        ),
    ],
  });
};
function Tt(t, s) {
  let i = t.text.replace(/\n/g, "↵");
  return (
    t.type === "string" && (i = `"${i}"`),
    e.jsxs(
      "div",
      {
        className: "call-line",
        children: [
          t.name,
          ":",
          e.jsx("span", {
            className: O("call-value", t.type),
            title: t.text,
            children: i,
          }),
          ["string", "number", "object", "locator"].includes(t.type) &&
            e.jsx(Kt, { value: t.text }),
        ],
      },
      s,
    )
  );
}
function kt(t, s, i, a) {
  const u = t.method.includes("eval") || t.method === "waitForFunction";
  if (s === "files") return { text: "<files>", type: "string", name: s };
  if (
    ((s === "eventInit" || s === "expectedValue" || (s === "arg" && u)) &&
      (i = et(i.value, new Array(10).fill({ handle: "<handle>" }))),
    ((s === "value" && u) || (s === "received" && t.method === "expect")) &&
      (i = et(i, new Array(10).fill({ handle: "<handle>" }))),
    s === "selector")
  )
    return {
      text: St(a || "javascript", t.params.selector),
      type: "locator",
      name: "locator",
    };
  const c = typeof i;
  return c !== "object" || i === null
    ? { text: String(i), type: c, name: s }
    : i.guid
      ? { text: "<handle>", type: "handle", name: s }
      : { text: JSON.stringify(i).slice(0, 1e3), type: "object", name: s };
}
function et(t, s) {
  if (t.n !== void 0) return t.n;
  if (t.s !== void 0) return t.s;
  if (t.b !== void 0) return t.b;
  if (t.v !== void 0) {
    if (t.v === "undefined") return;
    if (t.v === "null") return null;
    if (t.v === "NaN") return NaN;
    if (t.v === "Infinity") return 1 / 0;
    if (t.v === "-Infinity") return -1 / 0;
    if (t.v === "-0") return -0;
  }
  if (t.d !== void 0) return new Date(t.d);
  if (t.r !== void 0) return new RegExp(t.r.p, t.r.f);
  if (t.a !== void 0) return t.a.map((i) => et(i, s));
  if (t.o !== void 0) {
    const i = {};
    for (const { k: a, v: u } of t.o) i[a] = et(u, s);
    return i;
  }
  return t.h !== void 0 ? (s === void 0 ? "<object>" : s[t.h]) : "<object>";
}
const ve = Qt,
  je = ({ action: t, isLive: s }) => {
    const i = h.useMemo(() => {
      var r;
      if (!t || !t.log.length) return [];
      const a = t.log,
        u = t.context.wallTime - t.context.startTime,
        c = [];
      for (let n = 0; n < a.length; ++n) {
        let d = "";
        if (a[n].time !== -1) {
          const l = (r = a[n]) == null ? void 0 : r.time;
          n + 1 < a.length
            ? (d = B(a[n + 1].time - l))
            : t.endTime > 0
              ? (d = B(t.endTime - l))
              : s
                ? (d = B(Date.now() - u - l))
                : (d = "-");
        }
        c.push({ message: a[n].message, time: d });
      }
      return c;
    }, [t, s]);
    return i.length
      ? e.jsx(ve, {
          name: "log",
          items: i,
          render: (a) =>
            e.jsxs("div", {
              className: "log-list-item",
              children: [
                e.jsx("span", {
                  className: "log-list-duration",
                  children: a.time,
                }),
                a.message,
              ],
            }),
          notSelectable: !0,
        })
      : e.jsx(Q, { text: "No log entries" });
  },
  we = ({ error: t }) => {
    const s = h.useMemo(() => Zt(t), [t]);
    return e.jsx("div", {
      className: "error-message",
      dangerouslySetInnerHTML: { __html: s || "" },
    });
  };
function Ne(t) {
  return h.useMemo(() => {
    if (!t) return { errors: new Map() };
    const s = new Map();
    for (const i of t.errorDescriptors) s.set(i.message, i);
    return { errors: s };
  }, [t]);
}
const be = ({ errorsModel: t, sdkLanguage: s, revealInSource: i }) =>
    t.errors.size
      ? e.jsx("div", {
          className: "fill",
          style: { overflow: "auto" },
          children: [...t.errors.entries()].map(([a, u]) => {
            var d;
            let c, r;
            const n = (d = u.stack) == null ? void 0 : d[0];
            return (
              n &&
                ((c = n.file.replace(/.*[/\\](.*)/, "$1") + ":" + n.line),
                (r = n.file + ":" + n.line)),
              e.jsxs(
                "div",
                {
                  children: [
                    e.jsxs("div", {
                      className: "hbox",
                      style: {
                        alignItems: "center",
                        padding: "5px 10px",
                        minHeight: 36,
                        fontWeight: "bold",
                        color: "var(--vscode-errorForeground)",
                      },
                      children: [
                        u.action && ut(u.action, { sdkLanguage: s }),
                        c &&
                          e.jsxs("div", {
                            className: "action-location",
                            children: [
                              "@ ",
                              e.jsx("span", {
                                title: r,
                                onClick: () => i(u),
                                children: c,
                              }),
                            ],
                          }),
                      ],
                    }),
                    e.jsx(we, { error: a }),
                  ],
                },
                a,
              )
            );
          }),
        })
      : e.jsx(Q, { text: "No errors" }),
  zt = { width: 200, height: 45 },
  q = 2.5,
  ye = zt.height + q * 2,
  Te = ({ model: t, boundaries: s, previewPoint: i }) => {
    var o, x;
    const [a, u] = dt(),
      c = h.useRef(null);
    let r = 0;
    if (c.current && i) {
      const m = c.current.getBoundingClientRect();
      r = ((i.clientY - m.top + c.current.scrollTop) / ye) | 0;
    }
    const n =
      (x = (o = t == null ? void 0 : t.pages) == null ? void 0 : o[r]) == null
        ? void 0
        : x.screencastFrames;
    let d, l;
    if (i !== void 0 && n && n.length) {
      const m = s.minimum + ((s.maximum - s.minimum) * i.x) / a.width;
      d = n[Ct(n, m, Rt) - 1];
      const j = {
        width: Math.min(800, (window.innerWidth / 2) | 0),
        height: Math.min(800, (window.innerHeight / 2) | 0),
      };
      l = d ? Dt({ width: d.width, height: d.height }, j) : void 0;
    }
    return e.jsxs("div", {
      className: "film-strip",
      ref: u,
      children: [
        e.jsx("div", {
          className: "film-strip-lanes",
          ref: c,
          children:
            t == null
              ? void 0
              : t.pages.map((m, j) =>
                  m.screencastFrames.length
                    ? e.jsx(ke, { boundaries: s, page: m, width: a.width }, j)
                    : null,
                ),
        }),
        (i == null ? void 0 : i.x) !== void 0 &&
          e.jsxs("div", {
            className: "film-strip-hover",
            style: {
              top: a.bottom + 5,
              left: Math.min(i.x, a.width - (l ? l.width : 0) - 10),
            },
            children: [
              i.action &&
                e.jsx("div", {
                  className: "film-strip-hover-title",
                  children: ut(i.action, i),
                }),
              d &&
                l &&
                e.jsx("div", {
                  style: { width: l.width, height: l.height },
                  children: e.jsx("img", {
                    src: `sha1/${d.sha1}`,
                    width: l.width,
                    height: l.height,
                  }),
                }),
            ],
          }),
      ],
    });
  },
  ke = ({ boundaries: t, page: s, width: i }) => {
    const a = { width: 0, height: 0 },
      u = s.screencastFrames;
    for (const y of u)
      (a.width = Math.max(a.width, y.width)),
        (a.height = Math.max(a.height, y.height));
    const c = Dt(a, zt),
      r = u[0].timestamp,
      n = u[u.length - 1].timestamp,
      d = t.maximum - t.minimum,
      l = ((r - t.minimum) / d) * i,
      o = ((t.maximum - n) / d) * i,
      m = ((((n - r) / d) * i) / (c.width + 2 * q)) | 0,
      j = (n - r) / m,
      N = [];
    for (let y = 0; r && j && y < m; ++y) {
      const T = r + j * y,
        C = Ct(u, T, Rt) - 1;
      N.push(
        e.jsx(
          "div",
          {
            className: "film-strip-frame",
            style: {
              width: c.width,
              height: c.height,
              backgroundImage: `url(sha1/${u[C].sha1})`,
              backgroundSize: `${c.width}px ${c.height}px`,
              margin: q,
              marginRight: q,
            },
          },
          y,
        ),
      );
    }
    return (
      N.push(
        e.jsx(
          "div",
          {
            className: "film-strip-frame",
            style: {
              width: c.width,
              height: c.height,
              backgroundImage: `url(sha1/${u[u.length - 1].sha1})`,
              backgroundSize: `${c.width}px ${c.height}px`,
              margin: q,
              marginRight: q,
            },
          },
          N.length,
        ),
      ),
      e.jsx("div", {
        className: "film-strip-lane",
        style: { marginLeft: l + "px", marginRight: o + "px" },
        children: N,
      })
    );
  };
function Rt(t, s) {
  return t - s.timestamp;
}
function Dt(t, s) {
  const i = Math.max(t.width / s.width, t.height / s.height);
  return { width: (t.width / i) | 0, height: (t.height / i) | 0 };
}
const Me = ({
  model: t,
  boundaries: s,
  consoleEntries: i,
  onSelected: a,
  highlightedAction: u,
  highlightedEntry: c,
  highlightedConsoleEntry: r,
  selectedTime: n,
  setSelectedTime: d,
  sdkLanguage: l,
}) => {
  const [o, x] = dt(),
    [m, j] = h.useState(),
    [N, y] = h.useState(),
    {
      offsets: T,
      curtainLeft: C,
      curtainRight: k,
    } = h.useMemo(() => {
      let p = n || s;
      if (m && m.startX !== m.endX) {
        const W = X(o.width, s, m.startX),
          P = X(o.width, s, m.endX);
        p = { minimum: Math.min(W, P), maximum: Math.max(W, P) };
      }
      const f = A(o.width, s, p.minimum),
        D = A(o.width, s, s.maximum) - A(o.width, s, p.maximum);
      return { offsets: Se(o.width, s), curtainLeft: f, curtainRight: D };
    }, [n, s, m, o]),
    L = h.useMemo(() => {
      const p = [];
      for (const f of (t == null ? void 0 : t.actions) || [])
        f.class !== "Test" &&
          p.push({
            action: f,
            leftTime: f.startTime,
            rightTime: f.endTime || s.maximum,
            leftPosition: A(o.width, s, f.startTime),
            rightPosition: A(o.width, s, f.endTime || s.maximum),
            active: !1,
            error: !!f.error,
          });
      for (const f of (t == null ? void 0 : t.resources) || []) {
        const z = f._monotonicTime,
          D = f._monotonicTime + f.time;
        p.push({
          resource: f,
          leftTime: z,
          rightTime: D,
          leftPosition: A(o.width, s, z),
          rightPosition: A(o.width, s, D),
          active: !1,
          error: !1,
        });
      }
      for (const f of i || [])
        p.push({
          consoleMessage: f,
          leftTime: f.timestamp,
          rightTime: f.timestamp,
          leftPosition: A(o.width, s, f.timestamp),
          rightPosition: A(o.width, s, f.timestamp),
          active: !1,
          error: f.isError,
        });
      return p;
    }, [t, i, s, o]);
  h.useMemo(() => {
    for (const p of L)
      u
        ? (p.active = p.action === u)
        : c
          ? (p.active = p.resource === c)
          : r
            ? (p.active = p.consoleMessage === r)
            : (p.active = !1);
  }, [L, u, c, r]);
  const S = h.useCallback(
      (p) => {
        if ((y(void 0), !x.current)) return;
        const f = p.clientX - x.current.getBoundingClientRect().left,
          z = X(o.width, s, f),
          D = n ? A(o.width, s, n.minimum) : 0,
          W = n ? A(o.width, s, n.maximum) : 0;
        n && Math.abs(f - D) < 10
          ? j({ startX: W, endX: f, type: "resize" })
          : n && Math.abs(f - W) < 10
            ? j({ startX: D, endX: f, type: "resize" })
            : n &&
                z > n.minimum &&
                z < n.maximum &&
                p.clientY - x.current.getBoundingClientRect().top < 20
              ? j({ startX: D, endX: W, pivot: f, type: "move" })
              : j({ startX: f, endX: f, type: "resize" });
      },
      [s, o, x, n],
    ),
    w = h.useCallback(
      (p) => {
        if (!x.current) return;
        const f = p.clientX - x.current.getBoundingClientRect().left,
          z = X(o.width, s, f),
          D = t == null ? void 0 : t.actions.findLast((F) => F.startTime <= z);
        if (!p.buttons) {
          j(void 0);
          return;
        }
        if ((D && a(D), !m)) return;
        let W = m;
        if (m.type === "resize") W = { ...m, endX: f };
        else {
          const F = f - m.pivot;
          let I = m.startX + F,
            $ = m.endX + F;
          I < 0 && ((I = 0), ($ = I + (m.endX - m.startX))),
            $ > o.width && (($ = o.width), (I = $ - (m.endX - m.startX))),
            (W = { ...m, startX: I, endX: $, pivot: f });
        }
        j(W);
        const P = X(o.width, s, W.startX),
          H = X(o.width, s, W.endX);
        P !== H && d({ minimum: Math.min(P, H), maximum: Math.max(P, H) });
      },
      [s, m, o, t, a, x, d],
    ),
    R = h.useCallback(() => {
      if ((y(void 0), !!m)) {
        if (m.startX !== m.endX) {
          const p = X(o.width, s, m.startX),
            f = X(o.width, s, m.endX);
          d({ minimum: Math.min(p, f), maximum: Math.max(p, f) });
        } else {
          const p = X(o.width, s, m.startX),
            f =
              t == null ? void 0 : t.actions.findLast((z) => z.startTime <= p);
          f && a(f), d(void 0);
        }
        j(void 0);
      }
    }, [s, m, o, t, d, a]),
    v = h.useCallback(
      (p) => {
        if (!x.current) return;
        const f = p.clientX - x.current.getBoundingClientRect().left,
          z = X(o.width, s, f),
          D = t == null ? void 0 : t.actions.findLast((W) => W.startTime <= z);
        y({ x: f, clientY: p.clientY, action: D, sdkLanguage: l });
      },
      [s, o, t, x, l],
    ),
    b = h.useCallback(() => {
      y(void 0);
    }, []),
    M = h.useCallback(() => {
      d(void 0);
    }, [d]);
  return e.jsxs("div", {
    style: {
      flex: "none",
      borderBottom: "1px solid var(--vscode-panel-border)",
    },
    children: [
      !!m &&
        e.jsx(te, {
          cursor:
            (m == null ? void 0 : m.type) === "resize" ? "ew-resize" : "grab",
          onPaneMouseUp: R,
          onPaneMouseMove: w,
          onPaneDoubleClick: M,
        }),
      e.jsxs("div", {
        ref: x,
        className: "timeline-view",
        onMouseDown: S,
        onMouseMove: v,
        onMouseLeave: b,
        children: [
          e.jsx("div", {
            className: "timeline-grid",
            children: T.map((p, f) =>
              e.jsx(
                "div",
                {
                  className: "timeline-divider",
                  style: { left: p.position + "px" },
                  children: e.jsx("div", {
                    className: "timeline-time",
                    children: B(p.time - s.minimum),
                  }),
                },
                f,
              ),
            ),
          }),
          e.jsx("div", { style: { height: 8 } }),
          e.jsx(Te, { model: t, boundaries: s, previewPoint: N }),
          e.jsx("div", {
            className: "timeline-bars",
            children: L.map((p, f) =>
              e.jsx(
                "div",
                {
                  className: O(
                    "timeline-bar",
                    p.action && "action",
                    p.resource && "network",
                    p.consoleMessage && "console-message",
                    p.active && "active",
                    p.error && "error",
                  ),
                  style: {
                    left: p.leftPosition,
                    width: Math.max(5, p.rightPosition - p.leftPosition),
                    top: Ce(p),
                    bottom: 0,
                  },
                },
                f,
              ),
            ),
          }),
          e.jsx("div", {
            className: "timeline-marker",
            style: {
              display: N !== void 0 ? "block" : "none",
              left: ((N == null ? void 0 : N.x) || 0) + "px",
            },
          }),
          n &&
            e.jsxs("div", {
              className: "timeline-window",
              children: [
                e.jsx("div", {
                  className: "timeline-window-curtain left",
                  style: { width: C },
                }),
                e.jsx("div", {
                  className: "timeline-window-resizer",
                  style: { left: -5 },
                }),
                e.jsx("div", {
                  className: "timeline-window-center",
                  children: e.jsx("div", { className: "timeline-window-drag" }),
                }),
                e.jsx("div", {
                  className: "timeline-window-resizer",
                  style: { left: 5 },
                }),
                e.jsx("div", {
                  className: "timeline-window-curtain right",
                  style: { width: k },
                }),
              ],
            }),
        ],
      }),
    ],
  });
};
function Se(t, s) {
  let a = t / 64;
  const u = s.maximum - s.minimum,
    c = t / u;
  let r = u / a;
  const n = Math.ceil(Math.log(r) / Math.LN10);
  (r = Math.pow(10, n)),
    r * c >= 5 * 64 && (r = r / 5),
    r * c >= 2 * 64 && (r = r / 2);
  const d = s.minimum;
  let l = s.maximum;
  (l += 64 / c), (a = Math.ceil((l - d) / r)), r || (a = 0);
  const o = [];
  for (let x = 0; x < a; ++x) {
    const m = d + r * x;
    o.push({ position: A(t, s, m), time: m });
  }
  return o;
}
function A(t, s, i) {
  return ((i - s.minimum) / (s.maximum - s.minimum)) * t;
}
function X(t, s, i) {
  return (i / t) * (s.maximum - s.minimum) + s.minimum;
}
function Ce(t) {
  return t.resource ? 25 : 20;
}
const Le = ({ model: t }) => {
  var s, i;
  return t
    ? e.jsxs("div", {
        "data-testid": "metadata-view",
        className: "vbox",
        style: { flexShrink: 0 },
        children: [
          e.jsx("div", {
            className: "call-section",
            style: { paddingTop: 2 },
            children: "Time",
          }),
          !!t.wallTime &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "start time:",
                e.jsx("span", {
                  className: "call-value datetime",
                  title: new Date(t.wallTime).toLocaleString(),
                  children: new Date(t.wallTime).toLocaleString(),
                }),
              ],
            }),
          e.jsxs("div", {
            className: "call-line",
            children: [
              "duration:",
              e.jsx("span", {
                className: "call-value number",
                title: B(t.endTime - t.startTime),
                children: B(t.endTime - t.startTime),
              }),
            ],
          }),
          e.jsx("div", { className: "call-section", children: "Browser" }),
          e.jsxs("div", {
            className: "call-line",
            children: [
              "engine:",
              e.jsx("span", {
                className: "call-value string",
                title: t.browserName,
                children: t.browserName,
              }),
            ],
          }),
          t.channel &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "channel:",
                e.jsx("span", {
                  className: "call-value string",
                  title: t.channel,
                  children: t.channel,
                }),
              ],
            }),
          t.platform &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "platform:",
                e.jsx("span", {
                  className: "call-value string",
                  title: t.platform,
                  children: t.platform,
                }),
              ],
            }),
          t.options.userAgent &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "user agent:",
                e.jsx("span", {
                  className: "call-value datetime",
                  title: t.options.userAgent,
                  children: t.options.userAgent,
                }),
              ],
            }),
          t.options.baseURL &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("div", {
                  className: "call-section",
                  style: { paddingTop: 2 },
                  children: "Config",
                }),
                e.jsxs("div", {
                  className: "call-line",
                  children: [
                    "baseURL:",
                    e.jsx("a", {
                      className: "call-value string",
                      href: t.options.baseURL,
                      title: t.options.baseURL,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: t.options.baseURL,
                    }),
                  ],
                }),
              ],
            }),
          e.jsx("div", { className: "call-section", children: "Viewport" }),
          t.options.viewport &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "width:",
                e.jsx("span", {
                  className: "call-value number",
                  title: String(
                    !!((s = t.options.viewport) != null && s.width),
                  ),
                  children: t.options.viewport.width,
                }),
              ],
            }),
          t.options.viewport &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "height:",
                e.jsx("span", {
                  className: "call-value number",
                  title: String(
                    !!((i = t.options.viewport) != null && i.height),
                  ),
                  children: t.options.viewport.height,
                }),
              ],
            }),
          e.jsxs("div", {
            className: "call-line",
            children: [
              "is mobile:",
              e.jsx("span", {
                className: "call-value boolean",
                title: String(!!t.options.isMobile),
                children: String(!!t.options.isMobile),
              }),
            ],
          }),
          t.options.deviceScaleFactor &&
            e.jsxs("div", {
              className: "call-line",
              children: [
                "device scale:",
                e.jsx("span", {
                  className: "call-value number",
                  title: String(t.options.deviceScaleFactor),
                  children: String(t.options.deviceScaleFactor),
                }),
              ],
            }),
          e.jsx("div", { className: "call-section", children: "Counts" }),
          e.jsxs("div", {
            className: "call-line",
            children: [
              "pages:",
              e.jsx("span", {
                className: "call-value number",
                children: t.pages.length,
              }),
            ],
          }),
          e.jsxs("div", {
            className: "call-line",
            children: [
              "actions:",
              e.jsx("span", {
                className: "call-value number",
                children: t.actions.length,
              }),
            ],
          }),
          e.jsxs("div", {
            className: "call-line",
            children: [
              "events:",
              e.jsx("span", {
                className: "call-value number",
                children: t.events.length,
              }),
            ],
          }),
        ],
      })
    : e.jsx(e.Fragment, {});
};
async function lt(t) {
  const s = new Image();
  return (
    t &&
      ((s.src = t),
      await new Promise((i, a) => {
        (s.onload = i), (s.onerror = i);
      })),
    s
  );
}
const ht = {
    backgroundImage: `linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
    boxShadow: `rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`,
  },
  ze = ({ diff: t, noTargetBlank: s, hideDetails: i }) => {
    const [a, u] = h.useState(t.diff ? "diff" : "actual"),
      [c, r] = h.useState(!1),
      [n, d] = h.useState(null),
      [l, o] = h.useState("Expected"),
      [x, m] = h.useState(null),
      [j, N] = h.useState(null),
      [y, T] = dt();
    h.useEffect(() => {
      (async () => {
        var M, p, f, z;
        d(await lt((M = t.expected) == null ? void 0 : M.attachment.path)),
          o(((p = t.expected) == null ? void 0 : p.title) || "Expected"),
          m(await lt((f = t.actual) == null ? void 0 : f.attachment.path)),
          N(await lt((z = t.diff) == null ? void 0 : z.attachment.path));
      })();
    }, [t]);
    const C = n && x && j,
      k = C ? Math.max(n.naturalWidth, x.naturalWidth, 200) : 500,
      L = C ? Math.max(n.naturalHeight, x.naturalHeight, 200) : 500,
      S = Math.min(1, (y.width - 30) / k),
      w = Math.min(1, (y.width - 50) / k / 2),
      R = k * S,
      v = L * S,
      b = {
        flex: "none",
        margin: "0 10px",
        cursor: "pointer",
        userSelect: "none",
      };
    return e.jsx("div", {
      "data-testid": "test-result-image-mismatch",
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "auto",
      },
      ref: T,
      children:
        C &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsxs("div", {
              "data-testid": "test-result-image-mismatch-tabs",
              style: { display: "flex", margin: "10px 0 20px" },
              children: [
                t.diff &&
                  e.jsx("div", {
                    style: { ...b, fontWeight: a === "diff" ? 600 : "initial" },
                    onClick: () => u("diff"),
                    children: "Diff",
                  }),
                e.jsx("div", {
                  style: { ...b, fontWeight: a === "actual" ? 600 : "initial" },
                  onClick: () => u("actual"),
                  children: "Actual",
                }),
                e.jsx("div", {
                  style: {
                    ...b,
                    fontWeight: a === "expected" ? 600 : "initial",
                  },
                  onClick: () => u("expected"),
                  children: l,
                }),
                e.jsx("div", {
                  style: { ...b, fontWeight: a === "sxs" ? 600 : "initial" },
                  onClick: () => u("sxs"),
                  children: "Side by side",
                }),
                e.jsx("div", {
                  style: { ...b, fontWeight: a === "slider" ? 600 : "initial" },
                  onClick: () => u("slider"),
                  children: "Slider",
                }),
              ],
            }),
            e.jsxs("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                flex: "auto",
                minHeight: v + 60,
              },
              children: [
                t.diff &&
                  a === "diff" &&
                  e.jsx(U, {
                    image: j,
                    alt: "Diff",
                    hideSize: i,
                    canvasWidth: R,
                    canvasHeight: v,
                    scale: S,
                  }),
                t.diff &&
                  a === "actual" &&
                  e.jsx(U, {
                    image: x,
                    alt: "Actual",
                    hideSize: i,
                    canvasWidth: R,
                    canvasHeight: v,
                    scale: S,
                  }),
                t.diff &&
                  a === "expected" &&
                  e.jsx(U, {
                    image: n,
                    alt: l,
                    hideSize: i,
                    canvasWidth: R,
                    canvasHeight: v,
                    scale: S,
                  }),
                t.diff &&
                  a === "slider" &&
                  e.jsx(Re, {
                    expectedImage: n,
                    actualImage: x,
                    hideSize: i,
                    canvasWidth: R,
                    canvasHeight: v,
                    scale: S,
                    expectedTitle: l,
                  }),
                t.diff &&
                  a === "sxs" &&
                  e.jsxs("div", {
                    style: { display: "flex" },
                    children: [
                      e.jsx(U, {
                        image: n,
                        title: l,
                        hideSize: i,
                        canvasWidth: w * k,
                        canvasHeight: w * L,
                        scale: w,
                      }),
                      e.jsx(U, {
                        image: c ? j : x,
                        title: c ? "Diff" : "Actual",
                        onClick: () => r(!c),
                        hideSize: i,
                        canvasWidth: w * k,
                        canvasHeight: w * L,
                        scale: w,
                      }),
                    ],
                  }),
                !t.diff &&
                  a === "actual" &&
                  e.jsx(U, {
                    image: x,
                    title: "Actual",
                    hideSize: i,
                    canvasWidth: R,
                    canvasHeight: v,
                    scale: S,
                  }),
                !t.diff &&
                  a === "expected" &&
                  e.jsx(U, {
                    image: n,
                    title: l,
                    hideSize: i,
                    canvasWidth: R,
                    canvasHeight: v,
                    scale: S,
                  }),
                !t.diff &&
                  a === "sxs" &&
                  e.jsxs("div", {
                    style: { display: "flex" },
                    children: [
                      e.jsx(U, {
                        image: n,
                        title: l,
                        canvasWidth: w * k,
                        canvasHeight: w * L,
                        scale: w,
                      }),
                      e.jsx(U, {
                        image: x,
                        title: "Actual",
                        canvasWidth: w * k,
                        canvasHeight: w * L,
                        scale: w,
                      }),
                    ],
                  }),
              ],
            }),
            !i &&
              e.jsxs("div", {
                style: {
                  alignSelf: "start",
                  lineHeight: "18px",
                  marginLeft: "15px",
                },
                children: [
                  e.jsx("div", {
                    children:
                      t.diff &&
                      e.jsx("a", {
                        target: "_blank",
                        href: t.diff.attachment.path,
                        rel: "noreferrer",
                        children: t.diff.attachment.name,
                      }),
                  }),
                  e.jsx("div", {
                    children: e.jsx("a", {
                      target: s ? "" : "_blank",
                      href: t.actual.attachment.path,
                      rel: "noreferrer",
                      children: t.actual.attachment.name,
                    }),
                  }),
                  e.jsx("div", {
                    children: e.jsx("a", {
                      target: s ? "" : "_blank",
                      href: t.expected.attachment.path,
                      rel: "noreferrer",
                      children: t.expected.attachment.name,
                    }),
                  }),
                ],
              }),
          ],
        }),
    });
  },
  Re = ({
    expectedImage: t,
    actualImage: s,
    canvasWidth: i,
    canvasHeight: a,
    scale: u,
    expectedTitle: c,
    hideSize: r,
  }) => {
    const n = { position: "absolute", top: 0, left: 0 },
      [d, l] = h.useState(i / 2),
      o =
        t.naturalWidth === s.naturalWidth &&
        t.naturalHeight === s.naturalHeight;
    return e.jsxs("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        userSelect: "none",
      },
      children: [
        !r &&
          e.jsxs("div", {
            style: { margin: 5 },
            children: [
              !o &&
                e.jsx("span", {
                  style: { flex: "none", margin: "0 5px" },
                  children: "Expected ",
                }),
              e.jsx("span", { children: t.naturalWidth }),
              e.jsx("span", {
                style: { flex: "none", margin: "0 5px" },
                children: "x",
              }),
              e.jsx("span", { children: t.naturalHeight }),
              !o &&
                e.jsx("span", {
                  style: { flex: "none", margin: "0 5px 0 15px" },
                  children: "Actual ",
                }),
              !o && e.jsx("span", { children: s.naturalWidth }),
              !o &&
                e.jsx("span", {
                  style: { flex: "none", margin: "0 5px" },
                  children: "x",
                }),
              !o && e.jsx("span", { children: s.naturalHeight }),
            ],
          }),
        e.jsxs("div", {
          style: {
            position: "relative",
            width: i,
            height: a,
            margin: 15,
            ...ht,
          },
          children: [
            e.jsx(ee, {
              orientation: "horizontal",
              offsets: [d],
              setOffsets: (x) => l(x[0]),
              resizerColor: "#57606a80",
              resizerWidth: 6,
            }),
            e.jsx("img", {
              alt: c,
              style: { width: t.naturalWidth * u, height: t.naturalHeight * u },
              draggable: "false",
              src: t.src,
            }),
            e.jsx("div", {
              style: { ...n, bottom: 0, overflow: "hidden", width: d, ...ht },
              children: e.jsx("img", {
                alt: "Actual",
                style: {
                  width: s.naturalWidth * u,
                  height: s.naturalHeight * u,
                },
                draggable: "false",
                src: s.src,
              }),
            }),
          ],
        }),
      ],
    });
  },
  U = ({
    image: t,
    title: s,
    alt: i,
    hideSize: a,
    canvasWidth: u,
    canvasHeight: c,
    scale: r,
    onClick: n,
  }) =>
    e.jsxs("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      },
      children: [
        !a &&
          e.jsxs("div", {
            style: { margin: 5 },
            children: [
              s &&
                e.jsx("span", {
                  style: { flex: "none", margin: "0 5px" },
                  children: s,
                }),
              e.jsx("span", { children: t.naturalWidth }),
              e.jsx("span", {
                style: { flex: "none", margin: "0 5px" },
                children: "x",
              }),
              e.jsx("span", { children: t.naturalHeight }),
            ],
          }),
        e.jsx("div", {
          style: {
            display: "flex",
            flex: "none",
            width: u,
            height: c,
            margin: 15,
            ...ht,
          },
          children: e.jsx("img", {
            width: t.naturalWidth * r,
            height: t.naturalHeight * r,
            alt: s || i,
            style: { cursor: n ? "pointer" : "initial" },
            draggable: "false",
            src: t.src,
            onClick: n,
          }),
        }),
      ],
    });
function De(t) {
  return !!t.match(
    /^(text\/.*?|application\/(json|(x-)?javascript|xml.*?|ecmascript|graphql|x-www-form-urlencoded)|image\/svg(\+xml)?|application\/.*?(\+json|\+xml))(;\s*charset=.*)?$/,
  );
}
const We = ({
  title: t,
  children: s,
  setExpanded: i,
  expanded: a,
  expandOnTitleClick: u,
}) => {
  const c = h.useId();
  return e.jsxs("div", {
    className: O("expandable", a && "expanded"),
    children: [
      e.jsxs("div", {
        role: "button",
        "aria-expanded": a,
        "aria-controls": c,
        className: "expandable-title",
        onClick: () => u && i(!a),
        children: [
          e.jsx("div", {
            className: O(
              "codicon",
              a ? "codicon-chevron-down" : "codicon-chevron-right",
            ),
            style: {
              cursor: "pointer",
              color: "var(--vscode-foreground)",
              marginLeft: "5px",
            },
            onClick: () => !u && i(!a),
          }),
          t,
        ],
      }),
      a &&
        e.jsx("div", {
          id: c,
          role: "region",
          style: { marginLeft: 25 },
          children: s,
        }),
    ],
  });
};
function Wt(t) {
  const s = [];
  let i = 0,
    a;
  for (; (a = se.exec(t)) !== null; ) {
    const c = t.substring(i, a.index);
    c && s.push(c);
    const r = a[0];
    s.push(Ae(r)), (i = a.index + r.length);
  }
  const u = t.substring(i);
  return u && s.push(u), s;
}
function Ae(t) {
  let s = t;
  return (
    s.startsWith("www.") && (s = "https://" + s),
    e.jsx("a", {
      href: s,
      target: "_blank",
      rel: "noopener noreferrer",
      children: t,
    })
  );
}
const Ee = ({ attachment: t, reveal: s, highlight: i }) => {
    const [a, u] = h.useState(!1),
      [c, r] = h.useState(null),
      [n, d] = h.useState(null),
      l = h.useRef(null),
      o = De(t.contentType),
      x = !!t.sha1 || !!t.path;
    h.useEffect(() => {
      var N;
      s &&
        ((N = l.current) == null || N.scrollIntoView({ behavior: "smooth" }));
    }, [s]),
      h.useEffect(() => {
        a &&
          c === null &&
          n === null &&
          (d("Loading ..."),
          fetch(mt(t))
            .then((N) => N.text())
            .then((N) => {
              r(N), d(null);
            })
            .catch((N) => {
              d("Failed to load: " + N.message);
            }));
      }, [a, c, n, t]);
    const m = h.useMemo(() => {
        const N = c
          ? c.split(`
`).length
          : 0;
        return Math.min(Math.max(5, N), 20) * ie;
      }, [c]),
      j = e.jsxs("span", {
        style: { marginLeft: 5 },
        ref: l,
        "aria-label": t.name,
        children: [
          e.jsx("span", {
            className: O(i && "attachment-title-highlight"),
            children: Wt(t.name),
          }),
          x &&
            e.jsx("a", {
              style: { marginLeft: 5 },
              href: tt(t),
              children: "download",
            }),
        ],
      });
    return !o || !x
      ? e.jsx("div", { style: { marginLeft: 20 }, children: j })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx(We, {
              title: j,
              expanded: a,
              setExpanded: u,
              expandOnTitleClick: !0,
              children: n && e.jsx("i", { children: n }),
            }),
            a &&
              c !== null &&
              e.jsx("div", {
                className: "vbox",
                style: { height: m },
                children: e.jsx(ne, {
                  text: c,
                  readOnly: !0,
                  mimeType: t.contentType,
                  linkify: !0,
                  lineNumbers: !0,
                  wrapLines: !1,
                }),
              }),
          ],
        });
  },
  Ie = ({ model: t, selectedAction: s, revealedAttachment: i }) => {
    const {
      diffMap: a,
      screenshots: u,
      attachments: c,
    } = h.useMemo(() => {
      const r = new Set(),
        n = new Set();
      for (const l of (t == null ? void 0 : t.actions) || []) {
        const o = l.context.traceUrl;
        for (const x of l.attachments || []) r.add({ ...x, traceUrl: o });
      }
      const d = new Map();
      for (const l of r) {
        if (!l.path && !l.sha1) continue;
        const o = l.name.match(/^(.*)-(expected|actual|diff)\.png$/);
        if (o) {
          const x = o[1],
            m = o[2],
            j = d.get(x) || { expected: void 0, actual: void 0, diff: void 0 };
          (j[m] = l), d.set(x, j), r.delete(l);
        } else l.contentType.startsWith("image/") && (n.add(l), r.delete(l));
      }
      return { diffMap: d, attachments: r, screenshots: n };
    }, [t]);
    return !a.size && !u.size && !c.size
      ? e.jsx(Q, { text: "No attachments" })
      : e.jsxs("div", {
          className: "attachments-tab",
          children: [
            [...a.values()].map(({ expected: r, actual: n, diff: d }) =>
              e.jsxs(e.Fragment, {
                children: [
                  r &&
                    n &&
                    e.jsx("div", {
                      className: "attachments-section",
                      children: "Image diff",
                    }),
                  r &&
                    n &&
                    e.jsx(ze, {
                      noTargetBlank: !0,
                      diff: {
                        name: "Image diff",
                        expected: {
                          attachment: { ...r, path: tt(r) },
                          title: "Expected",
                        },
                        actual: { attachment: { ...n, path: tt(n) } },
                        diff: d
                          ? { attachment: { ...d, path: tt(d) } }
                          : void 0,
                      },
                    }),
                ],
              }),
            ),
            u.size
              ? e.jsx("div", {
                  className: "attachments-section",
                  children: "Screenshots",
                })
              : void 0,
            [...u.values()].map((r, n) => {
              const d = mt(r);
              return e.jsxs(
                "div",
                {
                  className: "attachment-item",
                  children: [
                    e.jsx("div", {
                      children: e.jsx("img", { draggable: "false", src: d }),
                    }),
                    e.jsx("div", {
                      children: e.jsx("a", {
                        target: "_blank",
                        href: d,
                        rel: "noreferrer",
                        children: r.name,
                      }),
                    }),
                  ],
                },
                `screenshot-${n}`,
              );
            }),
            c.size
              ? e.jsx("div", {
                  className: "attachments-section",
                  children: "Attachments",
                })
              : void 0,
            [...c.values()].map((r, n) => {
              var d;
              return e.jsx(
                "div",
                {
                  className: "attachment-item",
                  children: e.jsx(Ee, {
                    attachment: r,
                    highlight:
                      ((d = s == null ? void 0 : s.attachments) == null
                        ? void 0
                        : d.some((l) => Mt(r, l))) ?? !1,
                    reveal: !!i && Mt(r, i),
                  }),
                },
                Xe(r, n),
              );
            }),
          ],
        });
  };
function Mt(t, s) {
  return t.name === s.name && t.path === s.path && t.sha1 === s.sha1;
}
function mt(t, s = {}) {
  const i = new URLSearchParams(s);
  return t.sha1
    ? (i.set("trace", t.traceUrl), "sha1/" + t.sha1 + "?" + i.toString())
    : (i.set("path", t.path), "file?" + i.toString());
}
function tt(t) {
  const s = { dn: t.name };
  return t.contentType && (s.dct = t.contentType), mt(t, s);
}
function Xe(t, s) {
  return s + "-" + (t.sha1 ? "sha1-" + t.sha1 : "path-" + t.path);
}
const Pe = ({ annotations: t }) =>
  t.length
    ? e.jsx("div", {
        className: "annotations-tab",
        children: t.map((s, i) =>
          e.jsxs(
            "div",
            {
              className: "annotation-item",
              children: [
                e.jsx("span", {
                  style: { fontWeight: "bold" },
                  children: s.type,
                }),
                s.description &&
                  e.jsxs("span", { children: [": ", Wt(s.description)] }),
              ],
            },
            `annotation-${i}`,
          ),
        ),
      })
    : e.jsx(Q, { text: "No annotations" });
function He(t) {
  return t === "scheduled"
    ? "codicon-clock"
    : t === "running"
      ? "codicon-loading"
      : t === "failed"
        ? "codicon-error"
        : t === "passed"
          ? "codicon-check"
          : t === "skipped"
            ? "codicon-circle-slash"
            : "codicon-circle-outline";
}
function Fe(t) {
  return t === "scheduled"
    ? "Pending"
    : t === "running"
      ? "Running"
      : t === "failed"
        ? "Failed"
        : t === "passed"
          ? "Passed"
          : t === "skipped"
            ? "Skipped"
            : "Did not run";
}
const Be = ({
  model: t,
  showSourcesFirst: s,
  rootDir: i,
  fallbackLocation: a,
  isLive: u,
  hideTimeline: c,
  status: r,
  annotations: n,
  inert: d,
  openPage: l,
  onOpenExternally: o,
  revealSource: x,
}) => {
  var jt;
  const [m, j] = h.useState(void 0),
    [N, y] = h.useState(void 0),
    [T, C] = h.useState(void 0),
    [k, L] = h.useState(),
    [S, w] = h.useState(),
    [R, v] = h.useState(),
    [b, M] = h.useState("actions"),
    [p, f] = wt("propertiesTab", s ? "source" : "call"),
    [z, D] = h.useState(!1),
    [W, P] = h.useState(""),
    [H, F] = h.useState(),
    [I, $] = wt("propertiesSidebarLocation", "bottom"),
    st = h.useCallback((g) => {
      j(g == null ? void 0 : g.callId), y(void 0);
    }, []),
    it = h.useMemo(
      () => (t == null ? void 0 : t.actions.find((g) => g.callId === k)),
      [t, k],
    ),
    nt = h.useCallback((g) => {
      L(g == null ? void 0 : g.callId);
    }, []),
    At = h.useMemo(() => (t == null ? void 0 : t.sources) || new Map(), [t]);
  h.useEffect(() => {
    F(void 0), y(void 0);
  }, [t]);
  const Y = h.useMemo(() => {
      if (m) {
        const K = t == null ? void 0 : t.actions.find((_) => _.callId === m);
        if (K) return K;
      }
      const g = t == null ? void 0 : t.failedAction();
      if (g) return g;
      if (t != null && t.actions.length) {
        let K = t.actions.length - 1;
        for (let _ = 0; _ < t.actions.length; ++_)
          if (t.actions[_].apiName === "After Hooks" && _) {
            K = _ - 1;
            break;
          }
        return t.actions[K];
      }
    }, [t, m]),
    V = h.useMemo(() => it || Y, [Y, it]),
    Et = h.useMemo(() => (N ? N.stack : V == null ? void 0 : V.stack), [V, N]),
    xt = h.useCallback(
      (g) => {
        st(g), nt(void 0);
      },
      [st, nt],
    ),
    E = h.useCallback(
      (g) => {
        f(g), g !== "inspector" && D(!1);
      },
      [f],
    ),
    ft = h.useCallback(
      (g) => {
        !z && g && E("inspector"), D(g);
      },
      [D, E, z],
    ),
    It = h.useCallback(
      (g) => {
        P(g), E("inspector");
      },
      [E],
    ),
    Xt = h.useCallback(
      (g) => {
        E("attachments"), C(g);
      },
      [E],
    );
  h.useEffect(() => {
    x && E("source");
  }, [x, E]);
  const at = ae(t, H),
    pt = re(t, H),
    gt = Ne(t),
    Pt = h.useMemo(
      () =>
        (t == null
          ? void 0
          : t.actions.map((g) => g.attachments || []).flat()) || [],
      [t],
    ),
    G = (t == null ? void 0 : t.sdkLanguage) || "javascript",
    Ht = {
      id: "inspector",
      title: "Locator",
      render: () =>
        e.jsx(he, {
          sdkLanguage: G,
          setIsInspecting: ft,
          highlightedLocator: W,
          setHighlightedLocator: P,
        }),
    },
    Ft = {
      id: "call",
      title: "Call",
      render: () => e.jsx(ge, { action: V, sdkLanguage: G }),
    },
    Ut = {
      id: "log",
      title: "Log",
      render: () => e.jsx(je, { action: V, isLive: u }),
    },
    Bt = {
      id: "errors",
      title: "Errors",
      errorCount: gt.errors.size,
      render: () =>
        e.jsx(be, {
          errorsModel: gt,
          sdkLanguage: G,
          revealInSource: (g) => {
            g.action ? st(g.action) : y(g), E("source");
          },
        }),
    };
  let vt;
  !Y && a && (vt = (jt = a.source) == null ? void 0 : jt.errors.length);
  const rt = {
      id: "source",
      title: "Source",
      errorCount: vt,
      render: () =>
        e.jsx(de, {
          stack: Et,
          sources: At,
          rootDir: i,
          stackFrameLocation: I === "bottom" ? "right" : "bottom",
          fallbackLocation: a,
          onOpenExternally: o,
        }),
    },
    Ot = {
      id: "console",
      title: "Console",
      count: at.entries.length,
      render: () =>
        e.jsx(ce, {
          consoleModel: at,
          boundaries: ct,
          selectedTime: H,
          onAccepted: (g) => F({ minimum: g.timestamp, maximum: g.timestamp }),
          onEntryHovered: v,
        }),
    },
    $t = {
      id: "network",
      title: "Network",
      count: pt.resources.length,
      render: () =>
        e.jsx(le, { boundaries: ct, networkModel: pt, onEntryHovered: w }),
    },
    Vt = {
      id: "attachments",
      title: "Attachments",
      count: Pt.length,
      render: () =>
        e.jsx(Ie, { model: t, selectedAction: Y, revealedAttachment: T }),
    },
    J = [Ht, Ft, Ut, Bt, Ot, $t, rt, Vt];
  if (n !== void 0) {
    const g = {
      id: "annotations",
      title: "Annotations",
      count: n.length,
      render: () => e.jsx(Pe, { annotations: n }),
    };
    J.push(g);
  }
  if (s) {
    const g = J.indexOf(rt);
    J.splice(g, 1), J.splice(1, 0, rt);
  }
  const { boundaries: ct } = h.useMemo(() => {
    const g = {
      minimum: (t == null ? void 0 : t.startTime) || 0,
      maximum: (t == null ? void 0 : t.endTime) || 3e4,
    };
    return (
      g.minimum > g.maximum && ((g.minimum = 0), (g.maximum = 3e4)),
      (g.maximum += (g.maximum - g.minimum) / 20),
      { boundaries: g }
    );
  }, [t]);
  let Z = 0;
  !u && t && t.endTime >= 0
    ? (Z = t.endTime - t.startTime)
    : t && t.wallTime && (Z = Date.now() - t.wallTime);
  const _t = {
      id: "actions",
      title: "Actions",
      component: e.jsxs("div", {
        className: "vbox",
        children: [
          r &&
            e.jsxs("div", {
              className: "workbench-run-status",
              children: [
                e.jsx("span", { className: O("codicon", He(r)) }),
                e.jsx("div", { children: Fe(r) }),
                e.jsx("div", { className: "spacer" }),
                e.jsx("div", {
                  className: "workbench-run-duration",
                  children: Z ? B(Z) : "",
                }),
              ],
            }),
          e.jsx(fe, {
            sdkLanguage: G,
            actions: (t == null ? void 0 : t.actions) || [],
            selectedAction: t ? Y : void 0,
            selectedTime: H,
            setSelectedTime: F,
            onSelected: xt,
            onHighlighted: nt,
            revealAttachment: Xt,
            revealConsole: () => E("console"),
            isLive: u,
          }),
        ],
      }),
    },
    Gt = {
      id: "metadata",
      title: "Metadata",
      component: e.jsx(Le, { model: t }),
    };
  return e.jsxs("div", {
    className: "vbox workbench",
    ...(d ? { inert: "true" } : {}),
    children: [
      !c &&
        e.jsx(Me, {
          model: t,
          consoleEntries: at.entries,
          boundaries: ct,
          highlightedAction: it,
          highlightedEntry: S,
          highlightedConsoleEntry: R,
          onSelected: xt,
          sdkLanguage: G,
          selectedTime: H,
          setSelectedTime: F,
        }),
      e.jsx(Nt, {
        sidebarSize: 250,
        orientation: I === "bottom" ? "vertical" : "horizontal",
        settingName: "propertiesSidebar",
        main: e.jsx(Nt, {
          sidebarSize: 250,
          orientation: "horizontal",
          sidebarIsFirst: !0,
          settingName: "actionListSidebar",
          main: e.jsx(oe, {
            action: V,
            model: t,
            sdkLanguage: G,
            testIdAttributeName:
              (t == null ? void 0 : t.testIdAttributeName) || "data-testid",
            isInspecting: z,
            setIsInspecting: ft,
            highlightedLocator: W,
            setHighlightedLocator: It,
            openPage: l,
          }),
          sidebar: e.jsx(bt, {
            tabs: [_t, Gt],
            selectedTab: b,
            setSelectedTab: M,
          }),
        }),
        sidebar: e.jsx(bt, {
          tabs: J,
          selectedTab: p,
          setSelectedTab: E,
          rightToolbar: [
            I === "bottom"
              ? e.jsx(ot, {
                  title: "Dock to right",
                  icon: "layout-sidebar-right-off",
                  onClick: () => {
                    $("right");
                  },
                })
              : e.jsx(ot, {
                  title: "Dock to bottom",
                  icon: "layout-panel-off",
                  onClick: () => {
                    $("bottom");
                  },
                }),
          ],
          mode: I === "bottom" ? "default" : "select",
        }),
      }),
    ],
  });
};
export { We as E, ue as T, Be as W, He as t };
