import {
  M as f,
  r,
  b as y,
  t as E,
  j as o,
  a as k,
  c as x,
} from "./assets/inspectorTab-DdpLd2bb.js";
import { W as M } from "./assets/workbench-CdYbzWFD.js";
function S(t, e) {
  t &&
    window.parent.postMessage(
      { method: "openExternal", params: { url: t, target: e } },
      "*",
    );
}
function j({ file: t, line: e, column: a }) {
  window.parent.postMessage(
    { method: "openSourceLocation", params: { file: t, line: e, column: a } },
    "*",
  );
}
const L = () => {
    const [t, e] = r.useState([]),
      [a, g] = r.useState(h),
      [c, l] = r.useState({ done: 0, total: 0 }),
      [d, m] = r.useState(null);
    return (
      r.useEffect(() => {
        window.addEventListener(
          "message",
          async ({ data: { method: s, params: n } }) => {
            s === "loadTraceRequested"
              ? (e(n.traceUrl ? [n.traceUrl] : []), m(null))
              : s === "applyTheme" && y() !== n.theme && E();
          },
        ),
          window.parent.postMessage({ type: "loaded" }, "*");
      }, []),
      r.useEffect(() => {
        (async () => {
          if (t.length) {
            const s = (i) => {
              i.data.method === "progress" && l(i.data.params);
            };
            navigator.serviceWorker.addEventListener("message", s),
              l({ done: 0, total: 1 });
            const n = [];
            for (let i = 0; i < t.length; i++) {
              const v = t[i],
                p = new URLSearchParams();
              p.set("trace", v), p.set("limit", String(t.length));
              const w = await fetch(`contexts?${p.toString()}`);
              if (!w.ok) {
                m((await w.json()).error);
                return;
              }
              n.push(...(await w.json()));
            }
            navigator.serviceWorker.removeEventListener("message", s);
            const u = new f(n);
            l({ done: 0, total: 0 }), g(u);
          } else g(h);
        })();
      }, [t]),
      r.useEffect(() => {
        var s;
        d &&
          ((s = window.parent) == null ||
            s.postMessage(
              { method: "showErrorMessage", params: { message: d } },
              "*",
            ));
      }, [d]),
      o.jsxs("div", {
        className: "vbox workbench-loader",
        children: [
          o.jsx("div", {
            className: "progress",
            children: o.jsx("div", {
              className: "inner-progress",
              style: { width: c.total ? (100 * c.done) / c.total + "%" : 0 },
            }),
          }),
          o.jsx(M, { model: a, openPage: S, onOpenExternally: j }),
          !t.length &&
            o.jsx("div", {
              className: "empty-state",
              children: o.jsx("div", {
                className: "title",
                children: "Select test to see the trace",
              }),
            }),
        ],
      })
    );
  },
  h = new f([]);
(async () => {
  k();
  const t = (e) => {
    var a;
    e.isTrusted &&
      ((a = window.parent) == null ||
        a.postMessage(
          {
            type: e.type,
            key: e.key,
            keyCode: e.keyCode,
            code: e.code,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            repeat: e.repeat,
          },
          "*",
        ));
  };
  if (
    (window.addEventListener("keydown", t),
    window.addEventListener("keyup", t),
    window.location.protocol !== "file:")
  ) {
    if (!navigator.serviceWorker)
      throw new Error(`Service workers are not supported.
Make sure to serve the Trace Viewer (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js"),
      navigator.serviceWorker.controller ||
        (await new Promise((e) => {
          navigator.serviceWorker.oncontrollerchange = () => e();
        })),
      setInterval(function () {
        fetch("ping");
      }, 1e4);
  }
  x(document.querySelector("#root")).render(o.jsx(L, {}));
})();
