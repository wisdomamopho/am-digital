import {
  M as k,
  r as o,
  j as e,
  T as W,
  t as D,
  a as M,
  c as C,
} from "./assets/inspectorTab-DdpLd2bb.js";
import { W as F } from "./assets/workbench-CdYbzWFD.js";
import { T as O, W as A } from "./assets/testServerConnection-DeE2kSzz.js";
const I = () => {
    const [i, N] = o.useState(!1),
      [c, p] = o.useState([]),
      [u, E] = o.useState([]),
      [f, S] = o.useState(L),
      [v, m] = o.useState({ done: 0, total: 0 }),
      [T, g] = o.useState(!1),
      [y, w] = o.useState(null),
      [x, U] = o.useState(null),
      h = o.useCallback((t) => {
        const r = [],
          a = [],
          s = new URL(window.location.href);
        for (let n = 0; n < t.length; n++) {
          const l = t.item(n);
          if (!l) continue;
          const b = URL.createObjectURL(l);
          r.push(b),
            a.push(l.name),
            s.searchParams.append("trace", b),
            s.searchParams.append("traceFileName", l.name);
        }
        const d = s.toString();
        window.history.pushState({}, "", d), p(r), E(a), g(!1), w(null);
      }, []);
    o.useEffect(() => {
      const t = async (r) => {
        var a;
        if ((a = r.clipboardData) != null && a.files.length) {
          for (const s of r.clipboardData.files)
            if (s.type !== "application/zip") return;
          r.preventDefault(), h(r.clipboardData.files);
        }
      };
      return (
        document.addEventListener("paste", t),
        () => document.removeEventListener("paste", t)
      );
    });
    const P = o.useCallback(
        (t) => {
          t.preventDefault(), h(t.dataTransfer.files);
        },
        [h],
      ),
      R = o.useCallback(
        (t) => {
          t.preventDefault(), t.target.files && h(t.target.files);
        },
        [h],
      );
    o.useEffect(() => {
      const t = new URL(window.location.href).searchParams,
        r = t.getAll("trace");
      N(t.has("isServer"));
      for (const a of r)
        if (a.startsWith("file:")) {
          U(a || null);
          return;
        }
      if (t.has("isServer")) {
        const a = new URLSearchParams(window.location.search).get("ws"),
          s = new URL(`../${a}`, window.location.toString());
        s.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        const d = new O(new A(s));
        d.onLoadTraceRequested(async (n) => {
          p(n.traceUrl ? [n.traceUrl] : []), g(!1), w(null);
        }),
          d.initialize({}).catch(() => {});
      } else r.some((a) => a.startsWith("blob:")) || p(r);
    }, []),
      o.useEffect(() => {
        (async () => {
          if (c.length) {
            const t = (s) => {
              s.data.method === "progress" && m(s.data.params);
            };
            navigator.serviceWorker.addEventListener("message", t),
              m({ done: 0, total: 1 });
            const r = [];
            for (let s = 0; s < c.length; s++) {
              const d = c[s],
                n = new URLSearchParams();
              n.set("trace", d),
                u.length && n.set("traceFileName", u[s]),
                n.set("limit", String(c.length));
              const l = await fetch(`contexts?${n.toString()}`);
              if (!l.ok) {
                i || p([]), w((await l.json()).error);
                return;
              }
              r.push(...(await l.json()));
            }
            navigator.serviceWorker.removeEventListener("message", t);
            const a = new k(r);
            m({ done: 0, total: 0 }), S(a);
          } else S(L);
        })();
      }, [i, c, u]);
    const j = !!(!i && !T && !x && (!c.length || y));
    return e.jsxs("div", {
      className: "vbox workbench-loader",
      onDragOver: (t) => {
        t.preventDefault(), g(!0);
      },
      children: [
        e.jsxs("div", {
          className: "hbox header",
          ...(j ? { inert: "true" } : {}),
          children: [
            e.jsx("div", {
              className: "logo",
              children: e.jsx("img", {
                src: "playwright-logo.svg",
                alt: "Playwright logo",
              }),
            }),
            e.jsx("div", { className: "product", children: "Playwright" }),
            f.title && e.jsx("div", { className: "title", children: f.title }),
            e.jsx("div", { className: "spacer" }),
            e.jsx(W, {
              icon: "color-mode",
              title: "Toggle color mode",
              toggled: !1,
              onClick: () => D(),
            }),
          ],
        }),
        e.jsx("div", {
          className: "progress",
          children: e.jsx("div", {
            className: "inner-progress",
            style: { width: v.total ? (100 * v.done) / v.total + "%" : 0 },
          }),
        }),
        e.jsx(F, { model: f, inert: j }),
        x &&
          e.jsxs("div", {
            className: "drop-target",
            children: [
              e.jsx("div", {
                children:
                  "Trace Viewer uses Service Workers to show traces. To view trace:",
              }),
              e.jsxs("div", {
                style: { paddingTop: 20 },
                children: [
                  e.jsxs("div", {
                    children: [
                      "1. Click ",
                      e.jsx("a", { href: x, children: "here" }),
                      " to put your trace into the download shelf",
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      "2. Go to ",
                      e.jsx("a", {
                        href: "https://trace.playwright.dev",
                        children: "trace.playwright.dev",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    children:
                      "3. Drop the trace from the download shelf into the page",
                  }),
                ],
              }),
            ],
          }),
        j &&
          e.jsxs("div", {
            className: "drop-target",
            children: [
              e.jsx("div", {
                className: "processing-error",
                role: "alert",
                children: y,
              }),
              e.jsx("div", {
                className: "title",
                role: "heading",
                "aria-level": 1,
                children: "Drop Playwright Trace to load",
              }),
              e.jsx("div", { children: "or" }),
              e.jsx("button", {
                onClick: () => {
                  const t = document.createElement("input");
                  (t.type = "file"),
                    (t.multiple = !0),
                    t.click(),
                    t.addEventListener("change", (r) => R(r));
                },
                type: "button",
                children: "Select file(s)",
              }),
              e.jsx("div", {
                style: { maxWidth: 400 },
                children:
                  "Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally.",
              }),
            ],
          }),
        i &&
          !c.length &&
          e.jsx("div", {
            className: "drop-target",
            children: e.jsx("div", {
              className: "title",
              children: "Select test to see the trace",
            }),
          }),
        T &&
          e.jsx("div", {
            className: "drop-target",
            onDragLeave: () => {
              g(!1);
            },
            onDrop: (t) => P(t),
            children: e.jsx("div", {
              className: "title",
              children: "Release to analyse the Playwright Trace",
            }),
          }),
      ],
    });
  },
  L = new k([]);
(async () => {
  if ((M(), window.location.protocol !== "file:")) {
    if (
      (window.location.href.includes("isUnderTest=true") &&
        (await new Promise((i) => setTimeout(i, 1e3))),
      !navigator.serviceWorker)
    )
      throw new Error(`Service workers are not supported.
Make sure to serve the Trace Viewer (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js"),
      navigator.serviceWorker.controller ||
        (await new Promise((i) => {
          navigator.serviceWorker.oncontrollerchange = () => i();
        })),
      setInterval(function () {
        fetch("ping");
      }, 1e4);
  }
  C(document.querySelector("#root")).render(e.jsx(I, {}));
})();
