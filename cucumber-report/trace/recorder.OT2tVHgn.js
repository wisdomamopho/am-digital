var H = Object.defineProperty;
var U = (t, e, s) =>
  e in t
    ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (t[e] = s);
var w = (t, e, s) => U(t, typeof e != "symbol" ? e + "" : e, s);
import {
  j as a,
  r as n,
  M as W,
  H as z,
  o as D,
  L as $,
  g as J,
  T as f,
  J as K,
  K as q,
  t as G,
  S as C,
  E as y,
  z as Q,
  A as X,
  h as Y,
  B as Z,
  N as ee,
  O as te,
  Q as se,
  U as oe,
  I as re,
  F as ae,
  a as ce,
  c as ne,
} from "./assets/inspectorTab-DdpLd2bb.js";
const ie = ({ sources: t, fileId: e, setFileId: s }) =>
  a.jsx("select", {
    className: "source-chooser",
    hidden: !t.length,
    title: "Source chooser",
    value: e,
    onChange: (r) => {
      s(r.target.selectedOptions[0].value);
    },
    children: le(t),
  });
function le(t) {
  const e = (o) => o.replace(/.*[/\\]([^/\\]+)/, "$1"),
    s = (o) => a.jsx("option", { value: o.id, children: e(o.label) }, o.id),
    r = new Map();
  for (const o of t) {
    let i = r.get(o.group || "Debugger");
    i || ((i = []), r.set(o.group || "Debugger", i)), i.push(o);
  }
  return [...r.entries()].map(([o, i]) =>
    a.jsx(
      "optgroup",
      {
        label: o,
        children: i
          .filter((c) => (c.group || "Debugger") === o)
          .map((c) => s(c)),
      },
      o,
    ),
  );
}
const v = n.createContext(void 0),
  ue = ({ trace: t, children: e }) => {
    const [s, r] = n.useState(),
      [o, i] = n.useState(0),
      c = n.useRef(null);
    return (
      n.useEffect(
        () => (
          c.current && clearTimeout(c.current),
          (c.current = setTimeout(async () => {
            try {
              const u = await de(t);
              u.sha1 !== (s == null ? void 0 : s.sha1) && r(u);
            } catch {
              r(void 0);
            } finally {
              i(o + 1);
            }
          }, 500)),
          () => {
            c.current && clearTimeout(c.current);
          }
        ),
        [o, s, t],
      ),
      a.jsx(v.Provider, { value: s == null ? void 0 : s.model, children: e })
    );
  };
async function de(t) {
  const e = new URLSearchParams();
  e.set("trace", t), e.set("limit", "1");
  const r = await (await fetch(`contexts?${e.toString()}`)).json(),
    o = [];
  for (const i of r)
    i.actions.forEach((c) =>
      o.push(c.type + "@" + c.startTime + "-" + c.endTime),
    ),
      i.events.forEach((c) => o.push(c.type + "@" + c.time));
  return { model: new W(r), sha1: await z(o.join("|")) };
}
function me(t, e) {
  return [...t, e].join(" >> internal:control=enter-frame >> ");
}
const b = 5e3;
function pe(t) {
  const { action: e } = t;
  switch (e.name) {
    case "navigate":
      return { method: "goto", apiName: "page.goto", params: { url: e.url } };
    case "openPage":
    case "closePage":
      throw new Error("Not reached");
  }
  const s = me(t.frame.framePath, e.selector);
  switch (e.name) {
    case "click":
      return {
        method: "click",
        apiName: "locator.click",
        params: {
          selector: s,
          strict: !0,
          modifiers: P(e.modifiers),
          button: e.button,
          clickCount: e.clickCount,
          position: e.position,
        },
      };
    case "press":
      return {
        method: "press",
        apiName: "locator.press",
        params: {
          selector: s,
          strict: !0,
          key: [...P(e.modifiers), e.key].join("+"),
        },
      };
    case "fill":
      return {
        method: "fill",
        apiName: "locator.fill",
        params: { selector: s, strict: !0, value: e.text },
      };
    case "setInputFiles":
      return {
        method: "setInputFiles",
        apiName: "locator.setInputFiles",
        params: { selector: s, strict: !0, localPaths: e.files },
      };
    case "check":
      return {
        method: "check",
        apiName: "locator.check",
        params: { selector: s, strict: !0 },
      };
    case "uncheck":
      return {
        method: "uncheck",
        apiName: "locator.uncheck",
        params: { selector: s, strict: !0 },
      };
    case "select":
      return {
        method: "selectOption",
        apiName: "locator.selectOption",
        params: {
          selector: s,
          strict: !0,
          options: e.options.map((o) => ({ value: o })),
        },
      };
    case "assertChecked":
      return {
        method: "expect",
        apiName: "expect.toBeChecked",
        params: {
          selector: e.selector,
          expression: "to.be.checked",
          isNot: !e.checked,
          timeout: b,
        },
      };
    case "assertText":
      return {
        method: "expect",
        apiName: "expect.toContainText",
        params: {
          selector: s,
          expression: "to.have.text",
          expectedText: [],
          isNot: !1,
          timeout: b,
        },
      };
    case "assertValue":
      return {
        method: "expect",
        apiName: "expect.toHaveValue",
        params: {
          selector: s,
          expression: "to.have.value",
          expectedValue: void 0,
          isNot: !1,
          timeout: b,
        },
      };
    case "assertVisible":
      return {
        method: "expect",
        apiName: "expect.toBeVisible",
        params: {
          selector: s,
          expression: "to.be.visible",
          isNot: !1,
          timeout: b,
        },
      };
    case "assertSnapshot":
      return {
        method: "expect",
        apiName: "expect.toMatchAriaSnapshot",
        params: {
          selector: s,
          expression: "to.match.snapshot",
          expectedText: [],
          isNot: !1,
          timeout: b,
        },
      };
  }
}
function P(t) {
  const e = [];
  return (
    t & 1 && e.push("Alt"),
    t & 2 && e.push("ControlOrMeta"),
    t & 4 && e.push("ControlOrMeta"),
    t & 8 && e.push("Shift"),
    e
  );
}
const he = $,
  xe = ({
    sdkLanguage: t,
    actions: e,
    selectedAction: s,
    onSelectedAction: r,
  }) => {
    const o = n.useCallback((i) => ge(t, i), [t]);
    return a.jsx("div", {
      className: "vbox",
      children: a.jsx(he, {
        name: "actions",
        items: e,
        selectedItem: s,
        onSelected: r,
        render: o,
      }),
    });
  },
  ge = (t, e) => {
    const { method: s, apiName: r, params: o } = pe(e),
      i = o.selector ? D(t || "javascript", o.selector) : void 0;
    return a.jsx(a.Fragment, {
      children: a.jsxs("div", {
        className: "action-title",
        title: r,
        children: [
          a.jsx("span", { children: r }),
          i &&
            a.jsx("div", {
              className: "action-selector",
              title: i,
              children: i,
            }),
          s === "goto" &&
            o.url &&
            a.jsx("div", {
              className: "action-url",
              title: o.url,
              children: o.url,
            }),
        ],
      }),
    });
  },
  I = n.createContext(void 0),
  fe = ({ guid: t, children: e }) => {
    const [s, r] = n.useState(void 0),
      [o, i] = n.useState("none"),
      [c, u] = n.useState({ actions: [], sources: [] }),
      p = n.useRef({ setMode: i, setActions: u });
    n.useEffect(() => {
      const d = new URL(`../${t}`, window.location.toString());
      d.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const x = new WebSocket(d.toString());
      return (
        r(new we(x, p.current)),
        () => {
          x.close();
        }
      );
    }, [t]);
    const h = n.useMemo(
      () =>
        s
          ? { mode: o, actions: c.actions, sources: c.sources, connection: s }
          : void 0,
      [c, o, s],
    );
    return a.jsx(I.Provider, { value: h, children: e });
  };
class we {
  constructor(e, s) {
    w(this, "_lastId", 0);
    w(this, "_webSocket");
    w(this, "_callbacks", new Map());
    w(this, "_options");
    (this._webSocket = e),
      (this._callbacks = new Map()),
      (this._options = s),
      this._webSocket.addEventListener("message", (r) => {
        const o = JSON.parse(r.data),
          { id: i, result: c, error: u, method: p, params: h } = o;
        if (i) {
          const d = this._callbacks.get(i);
          if (!d) return;
          this._callbacks.delete(i), u ? d.reject(new Error(u)) : d.resolve(c);
        } else this._dispatchEvent(p, h);
      });
  }
  setMode(e) {
    this._sendMessageNoReply("setMode", { mode: e });
  }
  async _sendMessage(e, s) {
    const r = ++this._lastId,
      o = { id: r, method: e, params: s };
    return (
      this._webSocket.send(JSON.stringify(o)),
      new Promise((i, c) => {
        this._callbacks.set(r, { resolve: i, reject: c });
      })
    );
  }
  _sendMessageNoReply(e, s) {
    this._sendMessage(e, s).catch(() => {});
  }
  _dispatchEvent(e, s) {
    if (e === "setMode") {
      const { mode: r } = s;
      this._options.setMode(r);
    }
    if (e === "setActions") {
      const { actions: r, sources: o } = s;
      this._options.setActions({
        actions: r.filter(
          (i) => i.action.name !== "openPage" && i.action.name !== "closePage",
        ),
        sources: o,
      }),
        (window.playwrightSourcesEchoForTest = o);
    }
  }
}
const be = () => {
    const t = new URLSearchParams(window.location.search),
      e = t.get("ws"),
      s = t.get("trace") + ".json";
    return a.jsx(fe, {
      guid: e,
      children: a.jsx(ue, { trace: s, children: a.jsx(ve, {}) }),
    });
  },
  ve = () => {
    const t = n.useContext(I),
      e = n.useContext(v),
      [s, r] = n.useState(),
      [o, i] = n.useState(void 0),
      [c, u] = n.useState(!1),
      [p, h] = n.useState(""),
      [d, x] = n.useState(""),
      [T, S] = n.useState(),
      j = n.useCallback((l) => {
        i(l == null ? void 0 : l.startTime);
      }, []),
      g = n.useMemo(
        () => (t == null ? void 0 : t.actions.find((l) => l.startTime === o)),
        [t == null ? void 0 : t.actions, o],
      );
    n.useEffect(() => {
      var N;
      const l =
        (N =
          e == null
            ? void 0
            : e.actions.find(
                (M) =>
                  M.endTime && M.endTime === (g == null ? void 0 : g.endTime),
              )) == null
          ? void 0
          : N.callId;
      l && S(l);
    }, [e, g]);
    const m = n.useMemo(
        () =>
          (t == null ? void 0 : t.sources.find((l) => l.id === s)) ||
          (t == null ? void 0 : t.sources[0]),
        [t == null ? void 0 : t.sources, s],
      ),
      L = n.useMemo(
        () =>
          m
            ? {
                file: "",
                line: 0,
                column: 0,
                source: { errors: [], content: m.text },
              }
            : void 0,
        [m],
      ),
      k = (m == null ? void 0 : m.language) || "javascript",
      { boundaries: _ } = n.useMemo(() => {
        const l = {
          minimum: (e == null ? void 0 : e.startTime) || 0,
          maximum: (e == null ? void 0 : e.endTime) || 3e4,
        };
        return (
          l.minimum > l.maximum && ((l.minimum = 0), (l.maximum = 3e4)),
          (l.maximum += (l.maximum - l.minimum) / 20),
          { boundaries: l }
        );
      }, [e]),
      A = n.useCallback((l) => {
        h(l), x(""), u(!1);
      }, []),
      E = n.useCallback((l) => {
        x(l), h(l);
      }, []),
      V = {
        id: "actions",
        title: "Actions",
        component: a.jsx(xe, {
          sdkLanguage: k,
          actions: (t == null ? void 0 : t.actions) || [],
          selectedAction: g,
          onSelectedAction: j,
        }),
      },
      F = a.jsxs(J, {
        sidebarBackground: !0,
        children: [
          a.jsx("div", { style: { width: 4 } }),
          a.jsx(f, {
            icon: "inspect",
            title: "Pick locator",
            toggled: c,
            onClick: () => {
              u(!c);
            },
          }),
          a.jsx(f, {
            icon: "eye",
            title: "Assert visibility",
            onClick: () => {},
          }),
          a.jsx(f, {
            icon: "whole-word",
            title: "Assert text",
            onClick: () => {},
          }),
          a.jsx(f, {
            icon: "symbol-constant",
            title: "Assert value",
            onClick: () => {},
          }),
          a.jsx(K, {}),
          a.jsx(f, {
            icon: "files",
            title: "Copy",
            disabled: !m || !m.text,
            onClick: () => {
              m != null && m.text && q(m.text);
            },
          }),
          a.jsx("div", { style: { flex: "auto" } }),
          a.jsx("div", { children: "Target:" }),
          a.jsx(ie, {
            fileId: s,
            sources: (t == null ? void 0 : t.sources) || [],
            setFileId: (l) => {
              r(l);
            },
          }),
          a.jsx(f, {
            icon: "color-mode",
            title: "Toggle color mode",
            toggled: !1,
            onClick: () => G(),
          }),
        ],
      }),
      R = a.jsx(y, { tabs: [V] }),
      O = a.jsx(Se, {
        sdkLanguage: k,
        callId: T,
        isInspecting: c,
        setIsInspecting: u,
        highlightedLocator: d,
        setHighlightedLocator: A,
      }),
      B = a.jsx(Te, {
        sdkLanguage: k,
        boundaries: _,
        setIsInspecting: u,
        highlightedLocator: p,
        setHighlightedLocator: E,
        sourceLocation: L,
      });
    return a.jsx("div", {
      className: "vbox workbench",
      children: a.jsx(C, {
        sidebarSize: 250,
        orientation: "horizontal",
        settingName: "recorderActionListSidebar",
        sidebarIsFirst: !0,
        main: a.jsx(C, {
          sidebarSize: 250,
          orientation: "vertical",
          settingName: "recorderPropertiesSidebar",
          main: a.jsxs("div", { className: "vbox", children: [F, O] }),
          sidebar: B,
        }),
        sidebar: R,
      }),
    });
  },
  Te = ({
    sdkLanguage: t,
    boundaries: e,
    setIsInspecting: s,
    highlightedLocator: r,
    setHighlightedLocator: o,
    sourceLocation: i,
  }) => {
    const c = n.useContext(v),
      u = Q(c, e),
      p = X(c, e),
      h = n.useRef(new Map()),
      [d, x] = Y("recorderPropertiesTab", "source"),
      T = {
        id: "inspector",
        title: "Locator",
        render: () =>
          a.jsx(re, {
            sdkLanguage: t,
            setIsInspecting: s,
            highlightedLocator: r,
            setHighlightedLocator: o,
          }),
      },
      S = {
        id: "source",
        title: "Source",
        render: () =>
          a.jsx(ae, {
            sources: h.current,
            stackFrameLocation: "right",
            fallbackLocation: i,
          }),
      },
      j = {
        id: "console",
        title: "Console",
        count: u.entries.length,
        render: () => a.jsx(Z, { boundaries: e, consoleModel: u }),
      },
      g = {
        id: "network",
        title: "Network",
        count: p.resources.length,
        render: () => a.jsx(ee, { boundaries: e, networkModel: p }),
      },
      m = [S, T, j, g];
    return a.jsx(y, { tabs: m, selectedTab: d, setSelectedTab: x });
  },
  Se = ({
    sdkLanguage: t,
    callId: e,
    isInspecting: s,
    setIsInspecting: r,
    highlightedLocator: o,
    setHighlightedLocator: i,
  }) => {
    const c = n.useContext(v),
      u = n.useMemo(
        () => (c == null ? void 0 : c.actions.find((d) => d.callId === e)),
        [c, e],
      ),
      p = n.useMemo(() => {
        const d = te(u);
        return d.action || d.after || d.before;
      }, [u]),
      h = n.useMemo(() => (p ? se(p) : void 0), [p]);
    return a.jsx(oe, {
      sdkLanguage: t,
      testIdAttributeName: "data-testid",
      isInspecting: s,
      setIsInspecting: r,
      highlightedLocator: o,
      setHighlightedLocator: i,
      snapshotUrls: h,
    });
  };
(async () => {
  if ((ce(), window.location.protocol !== "file:")) {
    if (!navigator.serviceWorker)
      throw new Error(`Service workers are not supported.
Make sure to serve the Recorder (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js"),
      navigator.serviceWorker.controller ||
        (await new Promise((t) => {
          navigator.serviceWorker.oncontrollerchange = () => t();
        })),
      setInterval(function () {
        fetch("ping");
      }, 1e4);
  }
  ne(document.querySelector("#root")).render(a.jsx(be, {}));
})();
