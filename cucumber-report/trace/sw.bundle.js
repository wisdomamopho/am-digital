var Ns = Object.defineProperty;
var Ls = (n, t, e) =>
  t in n
    ? Ns(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var L = (n, t, e) => Ls(n, typeof t != "symbol" ? t + "" : t, e);
function Us(n, t) {
  const e = new Array(t.length).fill(0);
  return new Array(t.length).fill(0).map((s, r) => (i, a) => {
    (e[r] = (i / a) * t[r] * 1e3),
      n(
        e.reduce((l, u) => l + u, 0),
        1e3,
      );
  });
}
const Tn = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
function vs(n) {
  return n.replace(/[&<>"']/gu, (t) => Tn[t]);
}
function Fs(n) {
  return n.replace(/[&<]/gu, (t) => Tn[t]);
}
function Ot(n, t, e) {
  return n.find((s, r) => {
    if (r === n.length - 1) return !0;
    const i = n[r + 1];
    return Math.abs(t(s) - e) < Math.abs(t(i) - e);
  });
}
function Sn(n) {
  return Array.isArray(n) && typeof n[0] == "string";
}
function Ms(n) {
  return Array.isArray(n) && Array.isArray(n[0]);
}
class Hs {
  constructor(t, e, s, r, i) {
    L(this, "_htmlCache");
    L(this, "_snapshots");
    L(this, "_index");
    L(this, "snapshotName");
    L(this, "_resources");
    L(this, "_snapshot");
    L(this, "_callId");
    L(this, "_screencastFrames");
    (this._htmlCache = t),
      (this._resources = e),
      (this._snapshots = s),
      (this._index = i),
      (this._snapshot = s[i]),
      (this._callId = s[i].callId),
      (this._screencastFrames = r),
      (this.snapshotName = s[i].snapshotName);
  }
  snapshot() {
    return this._snapshots[this._index];
  }
  viewport() {
    return this._snapshots[this._index].viewport;
  }
  closestScreenshot() {
    var r;
    const { wallTime: t, timestamp: e } = this.snapshot(),
      s =
        t && (r = this._screencastFrames[0]) != null && r.frameSwapWallTime
          ? Ot(this._screencastFrames, (i) => i.frameSwapWallTime, t)
          : Ot(this._screencastFrames, (i) => i.timestamp, e);
    return s == null ? void 0 : s.sha1;
  }
  render() {
    const t = [],
      e = (i, a, l, u) => {
        if (typeof i == "string") {
          l === "STYLE" || l === "style" ? t.push(Gs(i)) : t.push(Fs(i));
          return;
        }
        if (Ms(i)) {
          const d = a - i[0][0];
          if (d >= 0 && d <= a) {
            const h = Bs(this._snapshots[d]),
              p = i[0][1];
            if (p >= 0 && p < h.length) return e(h[p], d, l, u);
          }
        } else if (Sn(i)) {
          const [d, h, ...p] = i,
            b = d === "NOSCRIPT" ? "X-NOSCRIPT" : d,
            y = Object.entries(h || {});
          t.push("<", b);
          const x = "__playwright_current_src__",
            c = b === "IFRAME" || b === "FRAME",
            o = b === "A",
            f = b === "IMG",
            _ = f && y.some((m) => m[0] === x),
            g =
              b === "SOURCE" &&
              l === "PICTURE" &&
              (u == null ? void 0 : u.some((m) => m[0] === x));
          for (const [m, E] of y) {
            let w = m;
            c && m.toLowerCase() === "src" && (w = "__playwright_src__"),
              f && m === x && (w = "src"),
              ["src", "srcset"].includes(m.toLowerCase()) &&
                (_ || g) &&
                (w = "_" + w);
            let T = E;
            o && m.toLowerCase() === "href"
              ? (T = "link://" + E)
              : (m.toLowerCase() === "href" ||
                  m.toLowerCase() === "src" ||
                  m === x) &&
                (T = Qe(E)),
              t.push(" ", w, '="', vs(T), '"');
          }
          t.push(">");
          for (const m of p) e(m, a, b, y);
          Ws.has(b) || t.push("</", b, ">");
          return;
        } else return;
      },
      s = this._snapshot;
    return {
      html: this._htmlCache.getOrCompute(this, () => {
        e(s.html, this._index, void 0, void 0);
        const a =
          (s.doctype ? `<!DOCTYPE ${s.doctype}>` : "") +
          [
            "<style>*,*::before,*::after { visibility: hidden }</style>",
            `<script>${js(this._callId, this.snapshotName)}<\/script>`,
          ].join("") +
          t.join("");
        return { value: a, size: a.length };
      }),
      pageId: s.pageId,
      frameId: s.frameId,
      index: this._index,
    };
  }
  resourceByUrl(t, e) {
    const s = this._snapshot;
    let r, i;
    for (const l of this._resources) {
      if (
        typeof l._monotonicTime == "number" &&
        l._monotonicTime >= s.timestamp
      )
        break;
      l.response.status !== 304 &&
        l.request.url === t &&
        l.request.method === e &&
        (l._frameref === s.frameId ? (r = l) : (i = l));
    }
    let a = r ?? i;
    if (a && e.toUpperCase() === "GET") {
      for (const l of s.resourceOverrides)
        if (t === l.url && l.sha1) {
          a = {
            ...a,
            response: {
              ...a.response,
              content: { ...a.response.content, _sha1: l.sha1 },
            },
          };
          break;
        }
    }
    return a;
  }
}
const Ws = new Set([
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
]);
function Bs(n) {
  if (!n._nodes) {
    const t = [],
      e = (s) => {
        if (typeof s == "string") t.push(s);
        else if (Sn(s)) {
          const [, , ...r] = s;
          for (const i of r) e(i);
          t.push(s);
        }
      };
    e(n.html), (n._nodes = t);
  }
  return n._nodes;
}
function js(...n) {
  function t(e, ...s) {
    const r = new URLSearchParams(location.search).has("isUnderTest"),
      i =
        "Recorded click position in absolute coordinates did not match the center of the clicked element. This is likely due to a difference between the test runner and the trace viewer operating systems.",
      a = [],
      l = [],
      u = [],
      d = [],
      h = (y) => {
        for (const x of y.querySelectorAll("[__playwright_scroll_top_]"))
          a.push(x);
        for (const x of y.querySelectorAll("[__playwright_scroll_left_]"))
          l.push(x);
        for (const x of y.querySelectorAll("[__playwright_value_]")) {
          const c = x;
          c.type !== "file" &&
            (c.value = c.getAttribute("__playwright_value_")),
            x.removeAttribute("__playwright_value_");
        }
        for (const x of y.querySelectorAll("[__playwright_checked_]"))
          (x.checked = x.getAttribute("__playwright_checked_") === "true"),
            x.removeAttribute("__playwright_checked_");
        for (const x of y.querySelectorAll("[__playwright_selected_]"))
          (x.selected = x.getAttribute("__playwright_selected_") === "true"),
            x.removeAttribute("__playwright_selected_");
        for (const x of s)
          for (const c of y.querySelectorAll(
            `[__playwright_target__="${x}"]`,
          )) {
            const o = c.style;
            (o.outline = "2px solid #006ab1"),
              (o.backgroundColor = "#6fa8dc7f"),
              u.push(c);
          }
        for (const x of y.querySelectorAll("iframe, frame")) {
          const c = x.getAttribute("__playwright_src__");
          if (!c)
            x.setAttribute(
              "src",
              'data:text/html,<body style="background: #ddd"></body>',
            );
          else {
            const o = new URL(e(window.location.href)),
              f = o.pathname.lastIndexOf("/snapshot/");
            f !== -1 && (o.pathname = o.pathname.substring(0, f + 1)),
              (o.pathname += c.substring(1)),
              x.setAttribute("src", o.toString());
          }
        }
        {
          const x = y.querySelector("body[__playwright_custom_elements__]");
          if (x && window.customElements) {
            const c = (
              x.getAttribute("__playwright_custom_elements__") || ""
            ).split(",");
            for (const o of c)
              window.customElements.define(o, class extends HTMLElement {});
          }
        }
        for (const x of y.querySelectorAll(
          "template[__playwright_shadow_root_]",
        )) {
          const c = x,
            o = c.parentElement.attachShadow({ mode: "open" });
          o.appendChild(c.content), c.remove(), h(o);
        }
        if ("adoptedStyleSheets" in y) {
          const x = [...y.adoptedStyleSheets];
          for (const c of y.querySelectorAll(
            "template[__playwright_style_sheet_]",
          )) {
            const o = c,
              f = new CSSStyleSheet();
            f.replaceSync(o.getAttribute("__playwright_style_sheet_")),
              x.push(f);
          }
          y.adoptedStyleSheets = x;
        }
        d.push(...y.querySelectorAll("canvas"));
      },
      p = () => {
        window.removeEventListener("load", p);
        for (const c of a)
          (c.scrollTop = +c.getAttribute("__playwright_scroll_top_")),
            c.removeAttribute("__playwright_scroll_top_");
        for (const c of l)
          (c.scrollLeft = +c.getAttribute("__playwright_scroll_left_")),
            c.removeAttribute("__playwright_scroll_left_");
        document.styleSheets[0].disabled = !0;
        const y = new URL(window.location.href).searchParams,
          x = window.location.pathname.match(/\/page@[a-z0-9]+$/);
        if (y.get("pointX") && y.get("pointY")) {
          const c = +y.get("pointX"),
            o = +y.get("pointY"),
            f = y.has("hasInputTarget"),
            _ = u.length > 0,
            g = document.documentElement ? [document.documentElement] : [];
          for (const m of _ ? u : g) {
            const E = document.createElement("x-pw-pointer");
            if (
              ((E.style.position = "fixed"),
              (E.style.backgroundColor = "#f44336"),
              (E.style.width = "20px"),
              (E.style.height = "20px"),
              (E.style.borderRadius = "10px"),
              (E.style.margin = "-10px 0 0 -10px"),
              (E.style.zIndex = "2147483646"),
              (E.style.display = "flex"),
              (E.style.alignItems = "center"),
              (E.style.justifyContent = "center"),
              _)
            ) {
              const w = m.getBoundingClientRect(),
                T = w.left + w.width / 2,
                R = w.top + w.height / 2;
              if (
                ((E.style.left = T + "px"),
                (E.style.top = R + "px"),
                x && (Math.abs(T - c) >= 10 || Math.abs(R - o) >= 10))
              ) {
                const A = document.createElement("x-pw-pointer-warning");
                (A.textContent = "⚠"),
                  (A.style.fontSize = "19px"),
                  (A.style.color = "white"),
                  (A.style.marginTop = "-3.5px"),
                  (A.style.userSelect = "none"),
                  E.appendChild(A),
                  E.setAttribute("title", i);
              }
              document.documentElement.appendChild(E);
            } else
              x &&
                !f &&
                ((E.style.left = c + "px"),
                (E.style.top = o + "px"),
                document.documentElement.appendChild(E));
          }
        }
        if (d.length > 0) {
          let c = function (f, _) {
            function g() {
              const m = document.createElement("canvas");
              (m.width = m.width / Math.floor(m.width / 24)),
                (m.height = m.height / Math.floor(m.height / 24));
              const E = m.getContext("2d");
              return (
                (E.fillStyle = "lightgray"),
                E.fillRect(0, 0, m.width, m.height),
                (E.fillStyle = "white"),
                E.fillRect(0, 0, m.width / 2, m.height / 2),
                E.fillRect(m.width / 2, m.height / 2, m.width, m.height),
                E.createPattern(m, "repeat")
              );
            }
            (f.fillStyle = g()), f.fillRect(0, 0, _.width, _.height);
          };
          if (!x) {
            for (const f of d) {
              const _ = f.getContext("2d");
              c(_, f),
                (f.title =
                  "Playwright displays canvas contents on a best-effort basis. It doesn't support canvas elements inside an iframe yet. If this impacts your workflow, please open an issue so we can prioritize.");
            }
            return;
          }
          const o = new Image();
          (o.onload = () => {
            for (const f of d) {
              const _ = f.getContext("2d"),
                g = f.getAttribute("__playwright_bounding_rect__");
              if ((f.removeAttribute("__playwright_bounding_rect__"), !g))
                continue;
              let m;
              try {
                m = JSON.parse(g);
              } catch {
                continue;
              }
              const E = m.right > 1 || m.bottom > 1;
              if (m.left > 1 || m.top > 1) {
                f.title =
                  "Playwright couldn't capture canvas contents because it's located outside the viewport.";
                continue;
              }
              c(_, f),
                _.drawImage(
                  o,
                  m.left * o.width,
                  m.top * o.height,
                  (m.right - m.left) * o.width,
                  (m.bottom - m.top) * o.height,
                  0,
                  0,
                  f.width,
                  f.height,
                ),
                r &&
                  console.log(
                    "canvas drawn:",
                    JSON.stringify(
                      [m.left, m.top, m.right - m.left, m.bottom - m.top].map(
                        (T) => Math.floor(T * 100),
                      ),
                    ),
                  ),
                E
                  ? (f.title =
                      "Playwright couldn't capture full canvas contents because it's located partially outside the viewport.")
                  : (f.title =
                      "Canvas contents are displayed on a best-effort basis based on viewport screenshots taken during test execution.");
            }
          }),
            (o.onerror = () => {
              for (const f of d) {
                const _ = f.getContext("2d");
                c(_, f),
                  (f.title =
                    "Playwright couldn't show canvas contents because the screenshot failed to load.");
              }
            }),
            (o.src = location.href.replace("/snapshot", "/closest-screenshot"));
        }
      },
      b = () => h(document);
    window.addEventListener("load", p),
      window.addEventListener("DOMContentLoaded", b);
  }
  return `
(${t.toString()})(${ze.toString()}${n.map((e) => `, "${e}"`).join("")})`;
}
const Rn = [
    "about:",
    "blob:",
    "data:",
    "file:",
    "ftp:",
    "http:",
    "https:",
    "mailto:",
    "sftp:",
    "ws:",
    "wss:",
  ],
  kt = "http://playwright.bloburl/#";
function Qe(n) {
  n.startsWith(kt) && (n = n.substring(kt.length));
  try {
    const t = new URL(n);
    if (t.protocol === "javascript:" || t.protocol === "vbscript:")
      return "javascript:void(0)";
    const e = t.protocol === "blob:",
      s = t.protocol === "file:";
    if (!e && !s && Rn.includes(t.protocol)) return n;
    const r = "pw-" + t.protocol.slice(0, t.protocol.length - 1);
    return (
      s || (t.protocol = "https:"),
      (t.hostname = t.hostname ? `${r}--${t.hostname}` : r),
      s && (t.protocol = "https:"),
      t.toString()
    );
  } catch {
    return n;
  }
}
const qs = /url\(['"]?([\w-]+:)\/\//gi;
function Gs(n) {
  return n.replace(qs, (t, e) =>
    !(e === "blob:") && !(e === "file:") && Rn.includes(e)
      ? t
      : t.replace(e + "//", `https://pw-${e.slice(0, -1)}--`),
  );
}
function ze(n) {
  const t = new URL(n);
  return t.pathname.endsWith("/snapshot.html") ? t.searchParams.get("r") : n;
}
class Ys {
  constructor(t, e) {
    L(this, "_snapshotStorage");
    L(this, "_resourceLoader");
    L(this, "_snapshotIds", new Map());
    (this._snapshotStorage = t), (this._resourceLoader = e);
  }
  serveSnapshot(t, e, s) {
    const r = this._snapshot(t.substring(9), e);
    if (!r) return new Response(null, { status: 404 });
    const i = r.render();
    return (
      this._snapshotIds.set(s, r),
      new Response(i.html, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      })
    );
  }
  async serveClosestScreenshot(t, e) {
    const s = this._snapshot(t.substring(19), e),
      r = s == null ? void 0 : s.closestScreenshot();
    return r
      ? new Response(await this._resourceLoader(r))
      : new Response(null, { status: 404 });
  }
  serveSnapshotInfo(t, e) {
    const s = this._snapshot(t.substring(13), e);
    return this._respondWithJson(
      s
        ? {
            viewport: s.viewport(),
            url: s.snapshot().frameUrl,
            timestamp: s.snapshot().timestamp,
            wallTime: s.snapshot().wallTime,
          }
        : { error: "No snapshot found" },
    );
  }
  _snapshot(t, e) {
    const s = e.get("name");
    return this._snapshotStorage.snapshotByName(t.slice(1), s);
  }
  _respondWithJson(t) {
    return new Response(JSON.stringify(t), {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=31536000",
        "Content-Type": "application/json",
      },
    });
  }
  async serveResource(t, e, s) {
    let r;
    const i = this._snapshotIds.get(s);
    for (const y of t)
      if (((r = i == null ? void 0 : i.resourceByUrl(Vs(y), e)), r)) break;
    if (!r) return new Response(null, { status: 404 });
    const a = r.response.content._sha1,
      l = a ? (await this._resourceLoader(a)) || new Blob([]) : new Blob([]);
    let u = r.response.content.mimeType;
    /^text\/|^application\/(javascript|json)/.test(u) &&
      !u.includes("charset") &&
      (u = `${u}; charset=utf-8`);
    const h = new Headers();
    u !== "x-unknown" && h.set("Content-Type", u);
    for (const { name: y, value: x } of r.response.headers) h.set(y, x);
    h.delete("Content-Encoding"),
      h.delete("Access-Control-Allow-Origin"),
      h.set("Access-Control-Allow-Origin", "*"),
      h.delete("Content-Length"),
      h.set("Content-Length", String(l.size)),
      h.set("Cache-Control", "public, max-age=31536000");
    const { status: p } = r.response,
      b = p === 101 || p === 204 || p === 205 || p === 304;
    return new Response(b ? null : l, {
      headers: h,
      status: r.response.status,
      statusText: r.response.statusText,
    });
  }
}
function Vs(n) {
  try {
    const t = new URL(n);
    return (t.hash = ""), t.toString();
  } catch {
    return n;
  }
}
function Zs(n) {
  const t = new Map(),
    { files: e, stacks: s } = n;
  for (const r of s) {
    const [i, a] = r;
    t.set(
      `call@${i}`,
      a.map((l) => ({
        file: e[l[0]],
        line: l[1],
        column: l[2],
        function: l[3],
      })),
    );
  }
  return t;
}
class Ks {
  constructor(t) {
    L(this, "_maxSize");
    L(this, "_map");
    L(this, "_size");
    (this._maxSize = t), (this._map = new Map()), (this._size = 0);
  }
  getOrCompute(t, e) {
    if (this._map.has(t)) {
      const r = this._map.get(t);
      return this._map.delete(t), this._map.set(t, r), r.value;
    }
    const s = e();
    for (; this._map.size && this._size + s.size > this._maxSize; ) {
      const [r, i] = this._map.entries().next().value;
      (this._size -= i.size), this._map.delete(r);
    }
    return this._map.set(t, s), (this._size += s.size), s.value;
  }
}
class Xs {
  constructor() {
    L(this, "_resources", []);
    L(this, "_frameSnapshots", new Map());
    L(this, "_cache", new Ks(1e8));
  }
  addResource(t) {
    (t.request.url = Qe(t.request.url)), this._resources.push(t);
  }
  addFrameSnapshot(t, e) {
    for (const i of t.resourceOverrides) i.url = Qe(i.url);
    let s = this._frameSnapshots.get(t.frameId);
    s ||
      ((s = { raw: [], renderers: [] }),
      this._frameSnapshots.set(t.frameId, s),
      t.isMainFrame && this._frameSnapshots.set(t.pageId, s)),
      s.raw.push(t);
    const r = new Hs(this._cache, this._resources, s.raw, e, s.raw.length - 1);
    return s.renderers.push(r), r;
  }
  snapshotByName(t, e) {
    const s = this._frameSnapshots.get(t);
    return s == null ? void 0 : s.renderers.find((r) => r.snapshotName === e);
  }
  snapshotsForTest() {
    return [...this._frameSnapshots.keys()];
  }
  finalize() {
    this._resources.sort(
      (t, e) => (t._monotonicTime || 0) - (e._monotonicTime || 0),
    );
  }
}
class An extends Error {
  constructor(t) {
    super(t), (this.name = "TraceVersionError");
  }
}
const It = 7;
class $s {
  constructor(t, e) {
    L(this, "_contextEntry");
    L(this, "_snapshotStorage");
    L(this, "_actionMap", new Map());
    L(this, "_version");
    L(this, "_pageEntries", new Map());
    L(this, "_jsHandles", new Map());
    L(this, "_consoleObjects", new Map());
    (this._contextEntry = t), (this._snapshotStorage = e);
  }
  appendTrace(t) {
    for (const e of t.split(`
`))
      this._appendEvent(e);
  }
  actions() {
    return [...this._actionMap.values()];
  }
  _pageEntry(t) {
    let e = this._pageEntries.get(t);
    return (
      e ||
        ((e = { pageId: t, screencastFrames: [] }),
        this._pageEntries.set(t, e),
        this._contextEntry.pages.push(e)),
      e
    );
  }
  _appendEvent(t) {
    if (!t) return;
    const e = this._modernize(JSON.parse(t));
    for (const s of e) this._innerAppendEvent(s);
  }
  _innerAppendEvent(t) {
    const e = this._contextEntry;
    switch (t.type) {
      case "context-options": {
        if (t.version > It)
          throw new An(
            "The trace was created by a newer version of Playwright and is not supported by this version of the viewer. Please use latest Playwright to open the trace.",
          );
        (this._version = t.version),
          (e.origin = t.origin),
          (e.browserName = t.browserName),
          (e.channel = t.channel),
          (e.title = t.title),
          (e.platform = t.platform),
          (e.wallTime = t.wallTime),
          (e.startTime = t.monotonicTime),
          (e.sdkLanguage = t.sdkLanguage),
          (e.options = t.options),
          (e.testIdAttributeName = t.testIdAttributeName);
        break;
      }
      case "screencast-frame": {
        this._pageEntry(t.pageId).screencastFrames.push(t);
        break;
      }
      case "before": {
        this._actionMap.set(t.callId, {
          ...t,
          type: "action",
          endTime: 0,
          log: [],
        });
        break;
      }
      case "input": {
        const s = this._actionMap.get(t.callId);
        (s.inputSnapshot = t.inputSnapshot), (s.point = t.point);
        break;
      }
      case "log": {
        const s = this._actionMap.get(t.callId);
        if (!s) return;
        s.log.push({ time: t.time, message: t.message });
        break;
      }
      case "after": {
        const s = this._actionMap.get(t.callId);
        (s.afterSnapshot = t.afterSnapshot),
          (s.endTime = t.endTime),
          (s.result = t.result),
          (s.error = t.error),
          (s.attachments = t.attachments),
          t.point && (s.point = t.point);
        break;
      }
      case "action": {
        this._actionMap.set(t.callId, { ...t, log: [] });
        break;
      }
      case "event": {
        e.events.push(t);
        break;
      }
      case "stdout": {
        e.stdio.push(t);
        break;
      }
      case "stderr": {
        e.stdio.push(t);
        break;
      }
      case "error": {
        e.errors.push(t);
        break;
      }
      case "console": {
        e.events.push(t);
        break;
      }
      case "resource-snapshot":
        this._snapshotStorage.addResource(t.snapshot),
          e.resources.push(t.snapshot);
        break;
      case "frame-snapshot":
        this._snapshotStorage.addFrameSnapshot(
          t.snapshot,
          this._pageEntry(t.snapshot.pageId).screencastFrames,
        );
        break;
    }
    "pageId" in t && t.pageId && this._pageEntry(t.pageId),
      (t.type === "action" || t.type === "before") &&
        (e.startTime = Math.min(e.startTime, t.startTime)),
      (t.type === "action" || t.type === "after") &&
        (e.endTime = Math.max(e.endTime, t.endTime)),
      t.type === "event" &&
        ((e.startTime = Math.min(e.startTime, t.time)),
        (e.endTime = Math.max(e.endTime, t.time))),
      t.type === "screencast-frame" &&
        ((e.startTime = Math.min(e.startTime, t.timestamp)),
        (e.endTime = Math.max(e.endTime, t.timestamp)));
  }
  _processedContextCreatedEvent() {
    return this._version !== void 0;
  }
  _modernize(t) {
    let e = this._version || t.version;
    if (e === void 0) return [t];
    let s = [t];
    for (; e < It; ++e) s = this[`_modernize_${e}_to_${e + 1}`].call(this, s);
    return s;
  }
  _modernize_0_to_1(t) {
    for (const e of t)
      e.type === "action" &&
        typeof e.metadata.error == "string" &&
        (e.metadata.error = {
          error: { name: "Error", message: e.metadata.error },
        });
    return t;
  }
  _modernize_1_to_2(t) {
    var e;
    for (const s of t)
      s.type !== "frame-snapshot" ||
        !s.snapshot.isMainFrame ||
        (s.snapshot.viewport = ((e = this._contextEntry.options) == null
          ? void 0
          : e.viewport) || { width: 1280, height: 720 });
    return t;
  }
  _modernize_2_to_3(t) {
    for (const e of t) {
      if (e.type !== "resource-snapshot" || e.snapshot.request) continue;
      const s = e.snapshot;
      e.snapshot = {
        _frameref: s.frameId,
        request: {
          url: s.url,
          method: s.method,
          headers: s.requestHeaders,
          postData: s.requestSha1 ? { _sha1: s.requestSha1 } : void 0,
        },
        response: {
          status: s.status,
          headers: s.responseHeaders,
          content: { mimeType: s.contentType, _sha1: s.responseSha1 },
        },
        _monotonicTime: s.timestamp,
      };
    }
    return t;
  }
  _modernize_3_to_4(t) {
    const e = [];
    for (const s of t) {
      const r = this._modernize_event_3_to_4(s);
      r && e.push(r);
    }
    return e;
  }
  _modernize_event_3_to_4(t) {
    var s, r, i, a;
    if (t.type !== "action" && t.type !== "event") return t;
    const e = t.metadata;
    return e.internal || e.method.startsWith("tracing")
      ? null
      : t.type === "event"
        ? e.method === "__create__" && e.type === "ConsoleMessage"
          ? {
              type: "object",
              class: e.type,
              guid: e.params.guid,
              initializer: e.params.initializer,
            }
          : {
              type: "event",
              time: e.startTime,
              class: e.type,
              method: e.method,
              params: e.params,
              pageId: e.pageId,
            }
        : {
            type: "action",
            callId: e.id,
            startTime: e.startTime,
            endTime: e.endTime,
            apiName: e.apiName || e.type + "." + e.method,
            class: e.type,
            method: e.method,
            params: e.params,
            wallTime: e.wallTime || Date.now(),
            log: e.log,
            beforeSnapshot:
              (s = e.snapshots.find((l) => l.title === "before")) == null
                ? void 0
                : s.snapshotName,
            inputSnapshot:
              (r = e.snapshots.find((l) => l.title === "input")) == null
                ? void 0
                : r.snapshotName,
            afterSnapshot:
              (i = e.snapshots.find((l) => l.title === "after")) == null
                ? void 0
                : i.snapshotName,
            error: (a = e.error) == null ? void 0 : a.error,
            result: e.result,
            point: e.point,
            pageId: e.pageId,
          };
  }
  _modernize_4_to_5(t) {
    const e = [];
    for (const s of t) {
      const r = this._modernize_event_4_to_5(s);
      r && e.push(r);
    }
    return e;
  }
  _modernize_event_4_to_5(t) {
    var e, s;
    if (
      (t.type === "event" &&
        t.method === "__create__" &&
        t.class === "JSHandle" &&
        this._jsHandles.set(t.params.guid, t.params.initializer),
      t.type === "object")
    ) {
      if (t.class !== "ConsoleMessage") return null;
      const r =
        (e = t.initializer.args) == null
          ? void 0
          : e.map((i) => {
              if (i.guid) {
                const a = this._jsHandles.get(i.guid);
                return {
                  preview: (a == null ? void 0 : a.preview) || "",
                  value: "",
                };
              }
              return { preview: i.preview || "", value: i.value || "" };
            });
      return (
        this._consoleObjects.set(t.guid, {
          type: t.initializer.type,
          text: t.initializer.text,
          location: t.initializer.location,
          args: r,
        }),
        null
      );
    }
    if (t.type === "event" && t.method === "console") {
      const r = this._consoleObjects.get(
        ((s = t.params.message) == null ? void 0 : s.guid) || "",
      );
      return r
        ? {
            type: "console",
            time: t.time,
            pageId: t.pageId,
            messageType: r.type,
            text: r.text,
            args: r.args,
            location: r.location,
          }
        : null;
    }
    return t;
  }
  _modernize_5_to_6(t) {
    const e = [];
    for (const s of t)
      if ((e.push(s), !(s.type !== "after" || !s.log.length)))
        for (const r of s.log)
          e.push({ type: "log", callId: s.callId, message: r, time: -1 });
    return e;
  }
  _modernize_6_to_7(t) {
    const e = [];
    if (
      !this._processedContextCreatedEvent() &&
      t[0].type !== "context-options"
    ) {
      const s = {
        type: "context-options",
        origin: "testRunner",
        version: 7,
        browserName: "",
        options: {},
        platform: process.platform,
        wallTime: 0,
        monotonicTime: 0,
        sdkLanguage: "javascript",
      };
      e.push(s);
    }
    for (const s of t) {
      if (s.type === "context-options") {
        e.push({ ...s, monotonicTime: 0, origin: "library" });
        continue;
      }
      !this._contextEntry.wallTime &&
        s.type === "before" &&
        (this._contextEntry.wallTime = s.wallTime),
        !this._contextEntry.startTime &&
          s.type === "before" &&
          (this._contextEntry.startTime = s.startTime),
        e.push(s);
    }
    return e;
  }
}
class Js {
  constructor() {
    L(this, "contextEntries", []);
    L(this, "_snapshotStorage");
    L(this, "_backend");
    L(this, "_resourceToContentType", new Map());
  }
  async load(t, e) {
    var l, u;
    this._backend = t;
    const s = [];
    let r = !1;
    for (const d of await this._backend.entryNames()) {
      const h = d.match(/(.+)\.trace/);
      h && s.push(h[1] || ""), d.includes("src@") && (r = !0);
    }
    if (!s.length) throw new Error("Cannot find .trace file");
    this._snapshotStorage = new Xs();
    const i = s.length * 3;
    let a = 0;
    for (const d of s) {
      const h = Qs();
      (h.traceUrl = t.traceURL()), (h.hasSource = r);
      const p = new $s(h, this._snapshotStorage),
        b = (await this._backend.readText(d + ".trace")) || "";
      p.appendTrace(b), e(++a, i);
      const y = (await this._backend.readText(d + ".network")) || "";
      if (
        (p.appendTrace(y),
        e(++a, i),
        (h.actions = p.actions().sort((c, o) => c.startTime - o.startTime)),
        !t.isLive())
      ) {
        for (const c of h.actions.slice().reverse())
          if (!c.endTime && !c.error)
            for (const o of h.actions)
              o.parentId === c.callId &&
                c.endTime < o.endTime &&
                (c.endTime = o.endTime);
      }
      const x = await this._backend.readText(d + ".stacks");
      if (x) {
        const c = Zs(JSON.parse(x));
        for (const o of h.actions) o.stack = o.stack || c.get(o.callId);
      }
      e(++a, i);
      for (const c of h.resources)
        (l = c.request.postData) != null &&
          l._sha1 &&
          this._resourceToContentType.set(
            c.request.postData._sha1,
            Dt(c.request.postData.mimeType),
          ),
          (u = c.response.content) != null &&
            u._sha1 &&
            this._resourceToContentType.set(
              c.response.content._sha1,
              Dt(c.response.content.mimeType),
            );
      this.contextEntries.push(h);
    }
    this._snapshotStorage.finalize();
  }
  async hasEntry(t) {
    return this._backend.hasEntry(t);
  }
  async resourceForSha1(t) {
    const e = await this._backend.readBlob("resources/" + t),
      s = this._resourceToContentType.get(t);
    return !e || s === void 0 || s === "x-unknown"
      ? e
      : new Blob([e], { type: s });
  }
  storage() {
    return this._snapshotStorage;
  }
}
function Dt(n) {
  const t = n.match(/^(.*);\s*charset=.*$/);
  return t ? t[1] : n;
}
function Qs() {
  return {
    origin: "testRunner",
    traceUrl: "",
    startTime: Number.MAX_SAFE_INTEGER,
    wallTime: Number.MAX_SAFE_INTEGER,
    endTime: 0,
    browserName: "",
    options: {
      deviceScaleFactor: 1,
      isMobile: !1,
      viewport: { width: 1280, height: 800 },
    },
    pages: [],
    resources: [],
    actions: [],
    events: [],
    errors: [],
    stdio: [],
    hasSource: !1,
  };
}
const zs = 15,
  U = 0,
  z = 1,
  er = 2,
  V = -2,
  W = -3,
  Pt = -4,
  ee = -5,
  Z = [
    0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
    65535,
  ],
  Cn = 1440,
  tr = 0,
  nr = 4,
  sr = 9,
  rr = 5,
  ir = [
    96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48,
    0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0,
    8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8,
    120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8,
    8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227,
    83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36,
    0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0,
    8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0,
    8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80,
    7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9,
    196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66,
    0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0,
    8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8,
    138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7,
    51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9,
    172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30,
    0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110,
    0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256,
    0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194,
    80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0,
    9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8,
    57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8,
    137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7,
    43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
    170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29,
    0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109,
    0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0,
    8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81,
    7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9,
    230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8,
    59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8,
    139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7,
    51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9,
    174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31,
    0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111,
    0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256,
    0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193,
    80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0,
    9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8,
    56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8,
    136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7,
    43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9,
    169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28,
    0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108,
    0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0,
    8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81,
    7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9,
    229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8,
    58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8,
    138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7,
    51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9,
    173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30,
    0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110,
    0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256,
    0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195,
    80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0,
    9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8,
    57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8,
    137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7,
    43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
    171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29,
    0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109,
    0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0,
    8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81,
    7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9,
    231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8,
    59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8,
    139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7,
    51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9,
    175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31,
    0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111,
    0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
  ],
  ar = [
    80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5,
    65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9,
    90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91,
    5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5,
    769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5,
    24577,
  ],
  or = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
    83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
  ],
  cr = [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 112, 112,
  ],
  lr = [
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
    769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
  ],
  fr = [
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13,
  ],
  te = 15;
function et() {
  const n = this;
  let t, e, s, r, i, a;
  function l(d, h, p, b, y, x, c, o, f, _, g) {
    let m, E, w, T, R, A, S, C, I, O, N, P, k, M, v;
    (O = 0), (R = p);
    do s[d[h + O]]++, O++, R--;
    while (R !== 0);
    if (s[0] == p) return (c[0] = -1), (o[0] = 0), U;
    for (C = o[0], A = 1; A <= te && s[A] === 0; A++);
    for (S = A, C < A && (C = A), R = te; R !== 0 && s[R] === 0; R--);
    for (w = R, C > R && (C = R), o[0] = C, M = 1 << A; A < R; A++, M <<= 1)
      if ((M -= s[A]) < 0) return W;
    if ((M -= s[R]) < 0) return W;
    for (s[R] += M, a[1] = A = 0, O = 1, k = 2; --R !== 0; )
      (a[k] = A += s[O]), k++, O++;
    (R = 0), (O = 0);
    do (A = d[h + O]) !== 0 && (g[a[A]++] = R), O++;
    while (++R < p);
    for (
      p = a[w], a[0] = R = 0, O = 0, T = -1, P = -C, i[0] = 0, N = 0, v = 0;
      S <= w;
      S++
    )
      for (m = s[S]; m-- !== 0; ) {
        for (; S > P + C; ) {
          if (
            (T++,
            (P += C),
            (v = w - P),
            (v = v > C ? C : v),
            (E = 1 << (A = S - P)) > m + 1 && ((E -= m + 1), (k = S), A < v))
          )
            for (; ++A < v && !((E <<= 1) <= s[++k]); ) E -= s[k];
          if (((v = 1 << A), _[0] + v > Cn)) return W;
          (i[T] = N = _[0]),
            (_[0] += v),
            T !== 0
              ? ((a[T] = R),
                (r[0] = A),
                (r[1] = C),
                (A = R >>> (P - C)),
                (r[2] = N - i[T - 1] - A),
                f.set(r, (i[T - 1] + A) * 3))
              : (c[0] = N);
        }
        for (
          r[1] = S - P,
            O >= p
              ? (r[0] = 192)
              : g[O] < b
                ? ((r[0] = g[O] < 256 ? 0 : 96), (r[2] = g[O++]))
                : ((r[0] = x[g[O] - b] + 16 + 64), (r[2] = y[g[O++] - b])),
            E = 1 << (S - P),
            A = R >>> P;
          A < v;
          A += E
        )
          f.set(r, (N + A) * 3);
        for (A = 1 << (S - 1); R & A; A >>>= 1) R ^= A;
        for (R ^= A, I = (1 << P) - 1; (R & I) != a[T]; )
          T--, (P -= C), (I = (1 << P) - 1);
      }
    return M !== 0 && w != 1 ? ee : U;
  }
  function u(d) {
    let h;
    for (
      t ||
        ((t = []),
        (e = []),
        (s = new Int32Array(te + 1)),
        (r = []),
        (i = new Int32Array(te)),
        (a = new Int32Array(te + 1))),
        e.length < d && (e = []),
        h = 0;
      h < d;
      h++
    )
      e[h] = 0;
    for (h = 0; h < te + 1; h++) s[h] = 0;
    for (h = 0; h < 3; h++) r[h] = 0;
    i.set(s.subarray(0, te), 0), a.set(s.subarray(0, te + 1), 0);
  }
  (n.inflate_trees_bits = function (d, h, p, b, y) {
    let x;
    return (
      u(19),
      (t[0] = 0),
      (x = l(d, 0, 19, 19, null, null, p, h, b, t, e)),
      x == W
        ? (y.msg = "oversubscribed dynamic bit lengths tree")
        : (x == ee || h[0] === 0) &&
          ((y.msg = "incomplete dynamic bit lengths tree"), (x = W)),
      x
    );
  }),
    (n.inflate_trees_dynamic = function (d, h, p, b, y, x, c, o, f) {
      let _;
      return (
        u(288),
        (t[0] = 0),
        (_ = l(p, 0, d, 257, or, cr, x, b, o, t, e)),
        _ != U || b[0] === 0
          ? (_ == W
              ? (f.msg = "oversubscribed literal/length tree")
              : _ != Pt &&
                ((f.msg = "incomplete literal/length tree"), (_ = W)),
            _)
          : (u(288),
            (_ = l(p, d, h, 0, lr, fr, c, y, o, t, e)),
            _ != U || (y[0] === 0 && d > 257)
              ? (_ == W
                  ? (f.msg = "oversubscribed distance tree")
                  : _ == ee
                    ? ((f.msg = "incomplete distance tree"), (_ = W))
                    : _ != Pt &&
                      ((f.msg = "empty distance tree with lengths"), (_ = W)),
                _)
              : U)
      );
    });
}
et.inflate_trees_fixed = function (n, t, e, s) {
  return (n[0] = sr), (t[0] = rr), (e[0] = ir), (s[0] = ar), U;
};
const ke = 0,
  Nt = 1,
  Lt = 2,
  Ut = 3,
  vt = 4,
  Ft = 5,
  Mt = 6,
  qe = 7,
  Ht = 8,
  Ie = 9;
function ur() {
  const n = this;
  let t,
    e = 0,
    s,
    r = 0,
    i = 0,
    a = 0,
    l = 0,
    u = 0,
    d = 0,
    h = 0,
    p,
    b = 0,
    y,
    x = 0;
  function c(o, f, _, g, m, E, w, T) {
    let R, A, S, C, I, O, N, P, k, M, v, be, D, fe, F, H;
    (N = T.next_in_index),
      (P = T.avail_in),
      (I = w.bitb),
      (O = w.bitk),
      (k = w.write),
      (M = k < w.read ? w.read - k - 1 : w.end - k),
      (v = Z[o]),
      (be = Z[f]);
    do {
      for (; O < 20; ) P--, (I |= (T.read_byte(N++) & 255) << O), (O += 8);
      if (
        ((R = I & v), (A = _), (S = g), (H = (S + R) * 3), (C = A[H]) === 0)
      ) {
        (I >>= A[H + 1]), (O -= A[H + 1]), (w.win[k++] = A[H + 2]), M--;
        continue;
      }
      do {
        if (((I >>= A[H + 1]), (O -= A[H + 1]), C & 16)) {
          for (C &= 15, D = A[H + 2] + (I & Z[C]), I >>= C, O -= C; O < 15; )
            P--, (I |= (T.read_byte(N++) & 255) << O), (O += 8);
          (R = I & be), (A = m), (S = E), (H = (S + R) * 3), (C = A[H]);
          do
            if (((I >>= A[H + 1]), (O -= A[H + 1]), C & 16)) {
              for (C &= 15; O < C; )
                P--, (I |= (T.read_byte(N++) & 255) << O), (O += 8);
              if (
                ((fe = A[H + 2] + (I & Z[C])),
                (I >>= C),
                (O -= C),
                (M -= D),
                k >= fe)
              )
                (F = k - fe),
                  k - F > 0 && 2 > k - F
                    ? ((w.win[k++] = w.win[F++]),
                      (w.win[k++] = w.win[F++]),
                      (D -= 2))
                    : (w.win.set(w.win.subarray(F, F + 2), k),
                      (k += 2),
                      (F += 2),
                      (D -= 2));
              else {
                F = k - fe;
                do F += w.end;
                while (F < 0);
                if (((C = w.end - F), D > C)) {
                  if (((D -= C), k - F > 0 && C > k - F))
                    do w.win[k++] = w.win[F++];
                    while (--C !== 0);
                  else
                    w.win.set(w.win.subarray(F, F + C), k),
                      (k += C),
                      (F += C),
                      (C = 0);
                  F = 0;
                }
              }
              if (k - F > 0 && D > k - F)
                do w.win[k++] = w.win[F++];
                while (--D !== 0);
              else
                w.win.set(w.win.subarray(F, F + D), k),
                  (k += D),
                  (F += D),
                  (D = 0);
              break;
            } else if (!(C & 64))
              (R += A[H + 2]), (R += I & Z[C]), (H = (S + R) * 3), (C = A[H]);
            else
              return (
                (T.msg = "invalid distance code"),
                (D = T.avail_in - P),
                (D = O >> 3 < D ? O >> 3 : D),
                (P += D),
                (N -= D),
                (O -= D << 3),
                (w.bitb = I),
                (w.bitk = O),
                (T.avail_in = P),
                (T.total_in += N - T.next_in_index),
                (T.next_in_index = N),
                (w.write = k),
                W
              );
          while (!0);
          break;
        }
        if (C & 64)
          return C & 32
            ? ((D = T.avail_in - P),
              (D = O >> 3 < D ? O >> 3 : D),
              (P += D),
              (N -= D),
              (O -= D << 3),
              (w.bitb = I),
              (w.bitk = O),
              (T.avail_in = P),
              (T.total_in += N - T.next_in_index),
              (T.next_in_index = N),
              (w.write = k),
              z)
            : ((T.msg = "invalid literal/length code"),
              (D = T.avail_in - P),
              (D = O >> 3 < D ? O >> 3 : D),
              (P += D),
              (N -= D),
              (O -= D << 3),
              (w.bitb = I),
              (w.bitk = O),
              (T.avail_in = P),
              (T.total_in += N - T.next_in_index),
              (T.next_in_index = N),
              (w.write = k),
              W);
        if (
          ((R += A[H + 2]),
          (R += I & Z[C]),
          (H = (S + R) * 3),
          (C = A[H]) === 0)
        ) {
          (I >>= A[H + 1]), (O -= A[H + 1]), (w.win[k++] = A[H + 2]), M--;
          break;
        }
      } while (!0);
    } while (M >= 258 && P >= 10);
    return (
      (D = T.avail_in - P),
      (D = O >> 3 < D ? O >> 3 : D),
      (P += D),
      (N -= D),
      (O -= D << 3),
      (w.bitb = I),
      (w.bitk = O),
      (T.avail_in = P),
      (T.total_in += N - T.next_in_index),
      (T.next_in_index = N),
      (w.write = k),
      U
    );
  }
  (n.init = function (o, f, _, g, m, E) {
    (t = ke), (d = o), (h = f), (p = _), (b = g), (y = m), (x = E), (s = null);
  }),
    (n.proc = function (o, f, _) {
      let g,
        m,
        E,
        w = 0,
        T = 0,
        R = 0,
        A,
        S,
        C,
        I;
      for (
        R = f.next_in_index,
          A = f.avail_in,
          w = o.bitb,
          T = o.bitk,
          S = o.write,
          C = S < o.read ? o.read - S - 1 : o.end - S;
        ;

      )
        switch (t) {
          case ke:
            if (
              C >= 258 &&
              A >= 10 &&
              ((o.bitb = w),
              (o.bitk = T),
              (f.avail_in = A),
              (f.total_in += R - f.next_in_index),
              (f.next_in_index = R),
              (o.write = S),
              (_ = c(d, h, p, b, y, x, o, f)),
              (R = f.next_in_index),
              (A = f.avail_in),
              (w = o.bitb),
              (T = o.bitk),
              (S = o.write),
              (C = S < o.read ? o.read - S - 1 : o.end - S),
              _ != U)
            ) {
              t = _ == z ? qe : Ie;
              break;
            }
            (i = d), (s = p), (r = b), (t = Nt);
          case Nt:
            for (g = i; T < g; ) {
              if (A !== 0) _ = U;
              else
                return (
                  (o.bitb = w),
                  (o.bitk = T),
                  (f.avail_in = A),
                  (f.total_in += R - f.next_in_index),
                  (f.next_in_index = R),
                  (o.write = S),
                  o.inflate_flush(f, _)
                );
              A--, (w |= (f.read_byte(R++) & 255) << T), (T += 8);
            }
            if (
              ((m = (r + (w & Z[g])) * 3),
              (w >>>= s[m + 1]),
              (T -= s[m + 1]),
              (E = s[m]),
              E === 0)
            ) {
              (a = s[m + 2]), (t = Mt);
              break;
            }
            if (E & 16) {
              (l = E & 15), (e = s[m + 2]), (t = Lt);
              break;
            }
            if (!(E & 64)) {
              (i = E), (r = m / 3 + s[m + 2]);
              break;
            }
            if (E & 32) {
              t = qe;
              break;
            }
            return (
              (t = Ie),
              (f.msg = "invalid literal/length code"),
              (_ = W),
              (o.bitb = w),
              (o.bitk = T),
              (f.avail_in = A),
              (f.total_in += R - f.next_in_index),
              (f.next_in_index = R),
              (o.write = S),
              o.inflate_flush(f, _)
            );
          case Lt:
            for (g = l; T < g; ) {
              if (A !== 0) _ = U;
              else
                return (
                  (o.bitb = w),
                  (o.bitk = T),
                  (f.avail_in = A),
                  (f.total_in += R - f.next_in_index),
                  (f.next_in_index = R),
                  (o.write = S),
                  o.inflate_flush(f, _)
                );
              A--, (w |= (f.read_byte(R++) & 255) << T), (T += 8);
            }
            (e += w & Z[g]),
              (w >>= g),
              (T -= g),
              (i = h),
              (s = y),
              (r = x),
              (t = Ut);
          case Ut:
            for (g = i; T < g; ) {
              if (A !== 0) _ = U;
              else
                return (
                  (o.bitb = w),
                  (o.bitk = T),
                  (f.avail_in = A),
                  (f.total_in += R - f.next_in_index),
                  (f.next_in_index = R),
                  (o.write = S),
                  o.inflate_flush(f, _)
                );
              A--, (w |= (f.read_byte(R++) & 255) << T), (T += 8);
            }
            if (
              ((m = (r + (w & Z[g])) * 3),
              (w >>= s[m + 1]),
              (T -= s[m + 1]),
              (E = s[m]),
              E & 16)
            ) {
              (l = E & 15), (u = s[m + 2]), (t = vt);
              break;
            }
            if (!(E & 64)) {
              (i = E), (r = m / 3 + s[m + 2]);
              break;
            }
            return (
              (t = Ie),
              (f.msg = "invalid distance code"),
              (_ = W),
              (o.bitb = w),
              (o.bitk = T),
              (f.avail_in = A),
              (f.total_in += R - f.next_in_index),
              (f.next_in_index = R),
              (o.write = S),
              o.inflate_flush(f, _)
            );
          case vt:
            for (g = l; T < g; ) {
              if (A !== 0) _ = U;
              else
                return (
                  (o.bitb = w),
                  (o.bitk = T),
                  (f.avail_in = A),
                  (f.total_in += R - f.next_in_index),
                  (f.next_in_index = R),
                  (o.write = S),
                  o.inflate_flush(f, _)
                );
              A--, (w |= (f.read_byte(R++) & 255) << T), (T += 8);
            }
            (u += w & Z[g]), (w >>= g), (T -= g), (t = Ft);
          case Ft:
            for (I = S - u; I < 0; ) I += o.end;
            for (; e !== 0; ) {
              if (
                C === 0 &&
                (S == o.end &&
                  o.read !== 0 &&
                  ((S = 0), (C = S < o.read ? o.read - S - 1 : o.end - S)),
                C === 0 &&
                  ((o.write = S),
                  (_ = o.inflate_flush(f, _)),
                  (S = o.write),
                  (C = S < o.read ? o.read - S - 1 : o.end - S),
                  S == o.end &&
                    o.read !== 0 &&
                    ((S = 0), (C = S < o.read ? o.read - S - 1 : o.end - S)),
                  C === 0))
              )
                return (
                  (o.bitb = w),
                  (o.bitk = T),
                  (f.avail_in = A),
                  (f.total_in += R - f.next_in_index),
                  (f.next_in_index = R),
                  (o.write = S),
                  o.inflate_flush(f, _)
                );
              (o.win[S++] = o.win[I++]), C--, I == o.end && (I = 0), e--;
            }
            t = ke;
            break;
          case Mt:
            if (
              C === 0 &&
              (S == o.end &&
                o.read !== 0 &&
                ((S = 0), (C = S < o.read ? o.read - S - 1 : o.end - S)),
              C === 0 &&
                ((o.write = S),
                (_ = o.inflate_flush(f, _)),
                (S = o.write),
                (C = S < o.read ? o.read - S - 1 : o.end - S),
                S == o.end &&
                  o.read !== 0 &&
                  ((S = 0), (C = S < o.read ? o.read - S - 1 : o.end - S)),
                C === 0))
            )
              return (
                (o.bitb = w),
                (o.bitk = T),
                (f.avail_in = A),
                (f.total_in += R - f.next_in_index),
                (f.next_in_index = R),
                (o.write = S),
                o.inflate_flush(f, _)
              );
            (_ = U), (o.win[S++] = a), C--, (t = ke);
            break;
          case qe:
            if (
              (T > 7 && ((T -= 8), A++, R--),
              (o.write = S),
              (_ = o.inflate_flush(f, _)),
              (S = o.write),
              (C = S < o.read ? o.read - S - 1 : o.end - S),
              o.read != o.write)
            )
              return (
                (o.bitb = w),
                (o.bitk = T),
                (f.avail_in = A),
                (f.total_in += R - f.next_in_index),
                (f.next_in_index = R),
                (o.write = S),
                o.inflate_flush(f, _)
              );
            t = Ht;
          case Ht:
            return (
              (_ = z),
              (o.bitb = w),
              (o.bitk = T),
              (f.avail_in = A),
              (f.total_in += R - f.next_in_index),
              (f.next_in_index = R),
              (o.write = S),
              o.inflate_flush(f, _)
            );
          case Ie:
            return (
              (_ = W),
              (o.bitb = w),
              (o.bitk = T),
              (f.avail_in = A),
              (f.total_in += R - f.next_in_index),
              (f.next_in_index = R),
              (o.write = S),
              o.inflate_flush(f, _)
            );
          default:
            return (
              (_ = V),
              (o.bitb = w),
              (o.bitk = T),
              (f.avail_in = A),
              (f.total_in += R - f.next_in_index),
              (f.next_in_index = R),
              (o.write = S),
              o.inflate_flush(f, _)
            );
        }
    }),
    (n.free = function () {});
}
const Wt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  _e = 0,
  Ge = 1,
  Bt = 2,
  jt = 3,
  qt = 4,
  Gt = 5,
  De = 6,
  Pe = 7,
  Yt = 8,
  ue = 9;
function dr(n, t) {
  const e = this;
  let s = _e,
    r = 0,
    i = 0,
    a = 0,
    l;
  const u = [0],
    d = [0],
    h = new ur();
  let p = 0,
    b = new Int32Array(Cn * 3);
  const y = 0,
    x = new et();
  (e.bitk = 0),
    (e.bitb = 0),
    (e.win = new Uint8Array(t)),
    (e.end = t),
    (e.read = 0),
    (e.write = 0),
    (e.reset = function (c, o) {
      o && (o[0] = y),
        s == De && h.free(c),
        (s = _e),
        (e.bitk = 0),
        (e.bitb = 0),
        (e.read = e.write = 0);
    }),
    e.reset(n, null),
    (e.inflate_flush = function (c, o) {
      let f, _, g;
      return (
        (_ = c.next_out_index),
        (g = e.read),
        (f = (g <= e.write ? e.write : e.end) - g),
        f > c.avail_out && (f = c.avail_out),
        f !== 0 && o == ee && (o = U),
        (c.avail_out -= f),
        (c.total_out += f),
        c.next_out.set(e.win.subarray(g, g + f), _),
        (_ += f),
        (g += f),
        g == e.end &&
          ((g = 0),
          e.write == e.end && (e.write = 0),
          (f = e.write - g),
          f > c.avail_out && (f = c.avail_out),
          f !== 0 && o == ee && (o = U),
          (c.avail_out -= f),
          (c.total_out += f),
          c.next_out.set(e.win.subarray(g, g + f), _),
          (_ += f),
          (g += f)),
        (c.next_out_index = _),
        (e.read = g),
        o
      );
    }),
    (e.proc = function (c, o) {
      let f, _, g, m, E, w, T, R;
      for (
        m = c.next_in_index,
          E = c.avail_in,
          _ = e.bitb,
          g = e.bitk,
          w = e.write,
          T = w < e.read ? e.read - w - 1 : e.end - w;
        ;

      ) {
        let A, S, C, I, O, N, P, k;
        switch (s) {
          case _e:
            for (; g < 3; ) {
              if (E !== 0) o = U;
              else
                return (
                  (e.bitb = _),
                  (e.bitk = g),
                  (c.avail_in = E),
                  (c.total_in += m - c.next_in_index),
                  (c.next_in_index = m),
                  (e.write = w),
                  e.inflate_flush(c, o)
                );
              E--, (_ |= (c.read_byte(m++) & 255) << g), (g += 8);
            }
            switch (((f = _ & 7), (p = f & 1), f >>> 1)) {
              case 0:
                (_ >>>= 3),
                  (g -= 3),
                  (f = g & 7),
                  (_ >>>= f),
                  (g -= f),
                  (s = Ge);
                break;
              case 1:
                (A = []),
                  (S = []),
                  (C = [[]]),
                  (I = [[]]),
                  et.inflate_trees_fixed(A, S, C, I),
                  h.init(A[0], S[0], C[0], 0, I[0], 0),
                  (_ >>>= 3),
                  (g -= 3),
                  (s = De);
                break;
              case 2:
                (_ >>>= 3), (g -= 3), (s = jt);
                break;
              case 3:
                return (
                  (_ >>>= 3),
                  (g -= 3),
                  (s = ue),
                  (c.msg = "invalid block type"),
                  (o = W),
                  (e.bitb = _),
                  (e.bitk = g),
                  (c.avail_in = E),
                  (c.total_in += m - c.next_in_index),
                  (c.next_in_index = m),
                  (e.write = w),
                  e.inflate_flush(c, o)
                );
            }
            break;
          case Ge:
            for (; g < 32; ) {
              if (E !== 0) o = U;
              else
                return (
                  (e.bitb = _),
                  (e.bitk = g),
                  (c.avail_in = E),
                  (c.total_in += m - c.next_in_index),
                  (c.next_in_index = m),
                  (e.write = w),
                  e.inflate_flush(c, o)
                );
              E--, (_ |= (c.read_byte(m++) & 255) << g), (g += 8);
            }
            if (((~_ >>> 16) & 65535) != (_ & 65535))
              return (
                (s = ue),
                (c.msg = "invalid stored block lengths"),
                (o = W),
                (e.bitb = _),
                (e.bitk = g),
                (c.avail_in = E),
                (c.total_in += m - c.next_in_index),
                (c.next_in_index = m),
                (e.write = w),
                e.inflate_flush(c, o)
              );
            (r = _ & 65535),
              (_ = g = 0),
              (s = r !== 0 ? Bt : p !== 0 ? Pe : _e);
            break;
          case Bt:
            if (
              E === 0 ||
              (T === 0 &&
                (w == e.end &&
                  e.read !== 0 &&
                  ((w = 0), (T = w < e.read ? e.read - w - 1 : e.end - w)),
                T === 0 &&
                  ((e.write = w),
                  (o = e.inflate_flush(c, o)),
                  (w = e.write),
                  (T = w < e.read ? e.read - w - 1 : e.end - w),
                  w == e.end &&
                    e.read !== 0 &&
                    ((w = 0), (T = w < e.read ? e.read - w - 1 : e.end - w)),
                  T === 0)))
            )
              return (
                (e.bitb = _),
                (e.bitk = g),
                (c.avail_in = E),
                (c.total_in += m - c.next_in_index),
                (c.next_in_index = m),
                (e.write = w),
                e.inflate_flush(c, o)
              );
            if (
              ((o = U),
              (f = r),
              f > E && (f = E),
              f > T && (f = T),
              e.win.set(c.read_buf(m, f), w),
              (m += f),
              (E -= f),
              (w += f),
              (T -= f),
              (r -= f) !== 0)
            )
              break;
            s = p !== 0 ? Pe : _e;
            break;
          case jt:
            for (; g < 14; ) {
              if (E !== 0) o = U;
              else
                return (
                  (e.bitb = _),
                  (e.bitk = g),
                  (c.avail_in = E),
                  (c.total_in += m - c.next_in_index),
                  (c.next_in_index = m),
                  (e.write = w),
                  e.inflate_flush(c, o)
                );
              E--, (_ |= (c.read_byte(m++) & 255) << g), (g += 8);
            }
            if (((i = f = _ & 16383), (f & 31) > 29 || ((f >> 5) & 31) > 29))
              return (
                (s = ue),
                (c.msg = "too many length or distance symbols"),
                (o = W),
                (e.bitb = _),
                (e.bitk = g),
                (c.avail_in = E),
                (c.total_in += m - c.next_in_index),
                (c.next_in_index = m),
                (e.write = w),
                e.inflate_flush(c, o)
              );
            if (((f = 258 + (f & 31) + ((f >> 5) & 31)), !l || l.length < f))
              l = [];
            else for (R = 0; R < f; R++) l[R] = 0;
            (_ >>>= 14), (g -= 14), (a = 0), (s = qt);
          case qt:
            for (; a < 4 + (i >>> 10); ) {
              for (; g < 3; ) {
                if (E !== 0) o = U;
                else
                  return (
                    (e.bitb = _),
                    (e.bitk = g),
                    (c.avail_in = E),
                    (c.total_in += m - c.next_in_index),
                    (c.next_in_index = m),
                    (e.write = w),
                    e.inflate_flush(c, o)
                  );
                E--, (_ |= (c.read_byte(m++) & 255) << g), (g += 8);
              }
              (l[Wt[a++]] = _ & 7), (_ >>>= 3), (g -= 3);
            }
            for (; a < 19; ) l[Wt[a++]] = 0;
            if (((u[0] = 7), (f = x.inflate_trees_bits(l, u, d, b, c)), f != U))
              return (
                (o = f),
                o == W && ((l = null), (s = ue)),
                (e.bitb = _),
                (e.bitk = g),
                (c.avail_in = E),
                (c.total_in += m - c.next_in_index),
                (c.next_in_index = m),
                (e.write = w),
                e.inflate_flush(c, o)
              );
            (a = 0), (s = Gt);
          case Gt:
            for (; (f = i), !(a >= 258 + (f & 31) + ((f >> 5) & 31)); ) {
              let M, v;
              for (f = u[0]; g < f; ) {
                if (E !== 0) o = U;
                else
                  return (
                    (e.bitb = _),
                    (e.bitk = g),
                    (c.avail_in = E),
                    (c.total_in += m - c.next_in_index),
                    (c.next_in_index = m),
                    (e.write = w),
                    e.inflate_flush(c, o)
                  );
                E--, (_ |= (c.read_byte(m++) & 255) << g), (g += 8);
              }
              if (
                ((f = b[(d[0] + (_ & Z[f])) * 3 + 1]),
                (v = b[(d[0] + (_ & Z[f])) * 3 + 2]),
                v < 16)
              )
                (_ >>>= f), (g -= f), (l[a++] = v);
              else {
                for (
                  R = v == 18 ? 7 : v - 14, M = v == 18 ? 11 : 3;
                  g < f + R;

                ) {
                  if (E !== 0) o = U;
                  else
                    return (
                      (e.bitb = _),
                      (e.bitk = g),
                      (c.avail_in = E),
                      (c.total_in += m - c.next_in_index),
                      (c.next_in_index = m),
                      (e.write = w),
                      e.inflate_flush(c, o)
                    );
                  E--, (_ |= (c.read_byte(m++) & 255) << g), (g += 8);
                }
                if (
                  ((_ >>>= f),
                  (g -= f),
                  (M += _ & Z[R]),
                  (_ >>>= R),
                  (g -= R),
                  (R = a),
                  (f = i),
                  R + M > 258 + (f & 31) + ((f >> 5) & 31) ||
                    (v == 16 && R < 1))
                )
                  return (
                    (l = null),
                    (s = ue),
                    (c.msg = "invalid bit length repeat"),
                    (o = W),
                    (e.bitb = _),
                    (e.bitk = g),
                    (c.avail_in = E),
                    (c.total_in += m - c.next_in_index),
                    (c.next_in_index = m),
                    (e.write = w),
                    e.inflate_flush(c, o)
                  );
                v = v == 16 ? l[R - 1] : 0;
                do l[R++] = v;
                while (--M !== 0);
                a = R;
              }
            }
            if (
              ((d[0] = -1),
              (O = []),
              (N = []),
              (P = []),
              (k = []),
              (O[0] = 9),
              (N[0] = 6),
              (f = i),
              (f = x.inflate_trees_dynamic(
                257 + (f & 31),
                1 + ((f >> 5) & 31),
                l,
                O,
                N,
                P,
                k,
                b,
                c,
              )),
              f != U)
            )
              return (
                f == W && ((l = null), (s = ue)),
                (o = f),
                (e.bitb = _),
                (e.bitk = g),
                (c.avail_in = E),
                (c.total_in += m - c.next_in_index),
                (c.next_in_index = m),
                (e.write = w),
                e.inflate_flush(c, o)
              );
            h.init(O[0], N[0], b, P[0], b, k[0]), (s = De);
          case De:
            if (
              ((e.bitb = _),
              (e.bitk = g),
              (c.avail_in = E),
              (c.total_in += m - c.next_in_index),
              (c.next_in_index = m),
              (e.write = w),
              (o = h.proc(e, c, o)) != z)
            )
              return e.inflate_flush(c, o);
            if (
              ((o = U),
              h.free(c),
              (m = c.next_in_index),
              (E = c.avail_in),
              (_ = e.bitb),
              (g = e.bitk),
              (w = e.write),
              (T = w < e.read ? e.read - w - 1 : e.end - w),
              p === 0)
            ) {
              s = _e;
              break;
            }
            s = Pe;
          case Pe:
            if (
              ((e.write = w),
              (o = e.inflate_flush(c, o)),
              (w = e.write),
              (T = w < e.read ? e.read - w - 1 : e.end - w),
              e.read != e.write)
            )
              return (
                (e.bitb = _),
                (e.bitk = g),
                (c.avail_in = E),
                (c.total_in += m - c.next_in_index),
                (c.next_in_index = m),
                (e.write = w),
                e.inflate_flush(c, o)
              );
            s = Yt;
          case Yt:
            return (
              (o = z),
              (e.bitb = _),
              (e.bitk = g),
              (c.avail_in = E),
              (c.total_in += m - c.next_in_index),
              (c.next_in_index = m),
              (e.write = w),
              e.inflate_flush(c, o)
            );
          case ue:
            return (
              (o = W),
              (e.bitb = _),
              (e.bitk = g),
              (c.avail_in = E),
              (c.total_in += m - c.next_in_index),
              (c.next_in_index = m),
              (e.write = w),
              e.inflate_flush(c, o)
            );
          default:
            return (
              (o = V),
              (e.bitb = _),
              (e.bitk = g),
              (c.avail_in = E),
              (c.total_in += m - c.next_in_index),
              (c.next_in_index = m),
              (e.write = w),
              e.inflate_flush(c, o)
            );
        }
      }
    }),
    (e.free = function (c) {
      e.reset(c, null), (e.win = null), (b = null);
    }),
    (e.set_dictionary = function (c, o, f) {
      e.win.set(c.subarray(o, o + f), 0), (e.read = e.write = f);
    }),
    (e.sync_point = function () {
      return s == Ge ? 1 : 0;
    });
}
const hr = 32,
  _r = 8,
  pr = 0,
  Vt = 1,
  Zt = 2,
  Kt = 3,
  Xt = 4,
  $t = 5,
  Ye = 6,
  ye = 7,
  Jt = 12,
  ne = 13,
  mr = [0, 0, 255, 255];
function wr() {
  const n = this;
  (n.mode = 0),
    (n.method = 0),
    (n.was = [0]),
    (n.need = 0),
    (n.marker = 0),
    (n.wbits = 0);
  function t(e) {
    return !e || !e.istate
      ? V
      : ((e.total_in = e.total_out = 0),
        (e.msg = null),
        (e.istate.mode = ye),
        e.istate.blocks.reset(e, null),
        U);
  }
  (n.inflateEnd = function (e) {
    return n.blocks && n.blocks.free(e), (n.blocks = null), U;
  }),
    (n.inflateInit = function (e, s) {
      return (
        (e.msg = null),
        (n.blocks = null),
        s < 8 || s > 15
          ? (n.inflateEnd(e), V)
          : ((n.wbits = s), (e.istate.blocks = new dr(e, 1 << s)), t(e), U)
      );
    }),
    (n.inflate = function (e, s) {
      let r, i;
      if (!e || !e.istate || !e.next_in) return V;
      const a = e.istate;
      for (s = s == nr ? ee : U, r = ee; ; )
        switch (a.mode) {
          case pr:
            if (e.avail_in === 0) return r;
            if (
              ((r = s),
              e.avail_in--,
              e.total_in++,
              ((a.method = e.read_byte(e.next_in_index++)) & 15) != _r)
            ) {
              (a.mode = ne),
                (e.msg = "unknown compression method"),
                (a.marker = 5);
              break;
            }
            if ((a.method >> 4) + 8 > a.wbits) {
              (a.mode = ne), (e.msg = "invalid win size"), (a.marker = 5);
              break;
            }
            a.mode = Vt;
          case Vt:
            if (e.avail_in === 0) return r;
            if (
              ((r = s),
              e.avail_in--,
              e.total_in++,
              (i = e.read_byte(e.next_in_index++) & 255),
              ((a.method << 8) + i) % 31 !== 0)
            ) {
              (a.mode = ne), (e.msg = "incorrect header check"), (a.marker = 5);
              break;
            }
            if (!(i & hr)) {
              a.mode = ye;
              break;
            }
            a.mode = Zt;
          case Zt:
            if (e.avail_in === 0) return r;
            (r = s),
              e.avail_in--,
              e.total_in++,
              (a.need =
                ((e.read_byte(e.next_in_index++) & 255) << 24) & 4278190080),
              (a.mode = Kt);
          case Kt:
            if (e.avail_in === 0) return r;
            (r = s),
              e.avail_in--,
              e.total_in++,
              (a.need +=
                ((e.read_byte(e.next_in_index++) & 255) << 16) & 16711680),
              (a.mode = Xt);
          case Xt:
            if (e.avail_in === 0) return r;
            (r = s),
              e.avail_in--,
              e.total_in++,
              (a.need += ((e.read_byte(e.next_in_index++) & 255) << 8) & 65280),
              (a.mode = $t);
          case $t:
            return e.avail_in === 0
              ? r
              : ((r = s),
                e.avail_in--,
                e.total_in++,
                (a.need += e.read_byte(e.next_in_index++) & 255),
                (a.mode = Ye),
                er);
          case Ye:
            return (
              (a.mode = ne), (e.msg = "need dictionary"), (a.marker = 0), V
            );
          case ye:
            if (((r = a.blocks.proc(e, r)), r == W)) {
              (a.mode = ne), (a.marker = 0);
              break;
            }
            if ((r == U && (r = s), r != z)) return r;
            (r = s), a.blocks.reset(e, a.was), (a.mode = Jt);
          case Jt:
            return (e.avail_in = 0), z;
          case ne:
            return W;
          default:
            return V;
        }
    }),
    (n.inflateSetDictionary = function (e, s, r) {
      let i = 0,
        a = r;
      if (!e || !e.istate || e.istate.mode != Ye) return V;
      const l = e.istate;
      return (
        a >= 1 << l.wbits && ((a = (1 << l.wbits) - 1), (i = r - a)),
        l.blocks.set_dictionary(s, i, a),
        (l.mode = ye),
        U
      );
    }),
    (n.inflateSync = function (e) {
      let s, r, i, a, l;
      if (!e || !e.istate) return V;
      const u = e.istate;
      if (
        (u.mode != ne && ((u.mode = ne), (u.marker = 0)),
        (s = e.avail_in) === 0)
      )
        return ee;
      for (r = e.next_in_index, i = u.marker; s !== 0 && i < 4; )
        e.read_byte(r) == mr[i]
          ? i++
          : e.read_byte(r) !== 0
            ? (i = 0)
            : (i = 4 - i),
          r++,
          s--;
      return (
        (e.total_in += r - e.next_in_index),
        (e.next_in_index = r),
        (e.avail_in = s),
        (u.marker = i),
        i != 4
          ? W
          : ((a = e.total_in),
            (l = e.total_out),
            t(e),
            (e.total_in = a),
            (e.total_out = l),
            (u.mode = ye),
            U)
      );
    }),
    (n.inflateSyncPoint = function (e) {
      return !e || !e.istate || !e.istate.blocks
        ? V
        : e.istate.blocks.sync_point();
    });
}
function On() {}
On.prototype = {
  inflateInit(n) {
    const t = this;
    return (t.istate = new wr()), n || (n = zs), t.istate.inflateInit(t, n);
  },
  inflate(n) {
    const t = this;
    return t.istate ? t.istate.inflate(t, n) : V;
  },
  inflateEnd() {
    const n = this;
    if (!n.istate) return V;
    const t = n.istate.inflateEnd(n);
    return (n.istate = null), t;
  },
  inflateSync() {
    const n = this;
    return n.istate ? n.istate.inflateSync(n) : V;
  },
  inflateSetDictionary(n, t) {
    const e = this;
    return e.istate ? e.istate.inflateSetDictionary(e, n, t) : V;
  },
  read_byte(n) {
    return this.next_in[n];
  },
  read_buf(n, t) {
    return this.next_in.subarray(n, n + t);
  },
};
function gr(n) {
  const t = this,
    e = new On(),
    s = n && n.chunkSize ? Math.floor(n.chunkSize * 2) : 128 * 1024,
    r = tr,
    i = new Uint8Array(s);
  let a = !1;
  e.inflateInit(),
    (e.next_out = i),
    (t.append = function (l, u) {
      const d = [];
      let h,
        p,
        b = 0,
        y = 0,
        x = 0;
      if (l.length !== 0) {
        (e.next_in_index = 0), (e.next_in = l), (e.avail_in = l.length);
        do {
          if (
            ((e.next_out_index = 0),
            (e.avail_out = s),
            e.avail_in === 0 && !a && ((e.next_in_index = 0), (a = !0)),
            (h = e.inflate(r)),
            a && h === ee)
          ) {
            if (e.avail_in !== 0) throw new Error("inflating: bad input");
          } else if (h !== U && h !== z) throw new Error("inflating: " + e.msg);
          if ((a || h === z) && e.avail_in === l.length)
            throw new Error("inflating: bad input");
          e.next_out_index &&
            (e.next_out_index === s
              ? d.push(new Uint8Array(i))
              : d.push(i.subarray(0, e.next_out_index))),
            (x += e.next_out_index),
            u &&
              e.next_in_index > 0 &&
              e.next_in_index != b &&
              (u(e.next_in_index), (b = e.next_in_index));
        } while (e.avail_in > 0 || e.avail_out === 0);
        return (
          d.length > 1
            ? ((p = new Uint8Array(x)),
              d.forEach(function (c) {
                p.set(c, y), (y += c.length);
              }))
            : (p = d[0] ? new Uint8Array(d[0]) : new Uint8Array()),
          p
        );
      }
    }),
    (t.flush = function () {
      e.inflateEnd();
    });
}
const de = 4294967295,
  ae = 65535,
  br = 8,
  yr = 0,
  xr = 99,
  Er = 67324752,
  Tr = 134695760,
  Qt = 33639248,
  Sr = 101010256,
  zt = 101075792,
  Rr = 117853008,
  pe = 22,
  Ve = 20,
  Ze = 56,
  Ar = 1,
  Cr = 39169,
  Or = 10,
  kr = 1,
  Ir = 21589,
  Dr = 28789,
  Pr = 25461,
  Nr = 6534,
  en = 1,
  Lr = 6,
  tn = 8,
  nn = 2048,
  sn = 16,
  Ur = "/",
  $ = void 0,
  Ue = "undefined",
  kn = "function";
class rn {
  constructor(t) {
    return class extends TransformStream {
      constructor(e, s) {
        const r = new t(s);
        super({
          transform(i, a) {
            a.enqueue(r.append(i));
          },
          flush(i) {
            const a = r.flush();
            a && i.enqueue(a);
          },
        });
      }
    };
  }
}
const vr = 64;
let In = 2;
try {
  typeof navigator != Ue &&
    navigator.hardwareConcurrency &&
    (In = navigator.hardwareConcurrency);
} catch {}
const Fr = {
    chunkSize: 512 * 1024,
    maxWorkers: In,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: !0,
    useCompressionStream: !0,
    workerScripts: $,
    CompressionStreamNative:
      typeof CompressionStream != Ue && CompressionStream,
    DecompressionStreamNative:
      typeof DecompressionStream != Ue && DecompressionStream,
  },
  oe = Object.assign({}, Fr);
function Dn() {
  return oe;
}
function Mr(n) {
  return Math.max(n.chunkSize, vr);
}
function Pn(n) {
  const {
    baseURL: t,
    chunkSize: e,
    maxWorkers: s,
    terminateWorkerTimeout: r,
    useCompressionStream: i,
    useWebWorkers: a,
    Deflate: l,
    Inflate: u,
    CompressionStream: d,
    DecompressionStream: h,
    workerScripts: p,
  } = n;
  if (
    (se("baseURL", t),
    se("chunkSize", e),
    se("maxWorkers", s),
    se("terminateWorkerTimeout", r),
    se("useCompressionStream", i),
    se("useWebWorkers", a),
    l && (oe.CompressionStream = new rn(l)),
    u && (oe.DecompressionStream = new rn(u)),
    se("CompressionStream", d),
    se("DecompressionStream", h),
    p !== $)
  ) {
    const { deflate: b, inflate: y } = p;
    if (((b || y) && (oe.workerScripts || (oe.workerScripts = {})), b)) {
      if (!Array.isArray(b))
        throw new Error("workerScripts.deflate must be an array");
      oe.workerScripts.deflate = b;
    }
    if (y) {
      if (!Array.isArray(y))
        throw new Error("workerScripts.inflate must be an array");
      oe.workerScripts.inflate = y;
    }
  }
}
function se(n, t) {
  t !== $ && (oe[n] = t);
}
function Hr() {
  return "application/octet-stream";
}
const Nn = [];
for (let n = 0; n < 256; n++) {
  let t = n;
  for (let e = 0; e < 8; e++)
    t & 1 ? (t = (t >>> 1) ^ 3988292384) : (t = t >>> 1);
  Nn[n] = t;
}
class ve {
  constructor(t) {
    this.crc = t || -1;
  }
  append(t) {
    let e = this.crc | 0;
    for (let s = 0, r = t.length | 0; s < r; s++)
      e = (e >>> 8) ^ Nn[(e ^ t[s]) & 255];
    this.crc = e;
  }
  get() {
    return ~this.crc;
  }
}
class Ln extends TransformStream {
  constructor() {
    let t;
    const e = new ve();
    super({
      transform(s, r) {
        e.append(s), r.enqueue(s);
      },
      flush() {
        const s = new Uint8Array(4);
        new DataView(s.buffer).setUint32(0, e.get()), (t.value = s);
      },
    }),
      (t = this);
  }
}
function Wr(n) {
  if (typeof TextEncoder > "u") {
    n = unescape(encodeURIComponent(n));
    const t = new Uint8Array(n.length);
    for (let e = 0; e < t.length; e++) t[e] = n.charCodeAt(e);
    return t;
  } else return new TextEncoder().encode(n);
}
const Y = {
    concat(n, t) {
      if (n.length === 0 || t.length === 0) return n.concat(t);
      const e = n[n.length - 1],
        s = Y.getPartial(e);
      return s === 32
        ? n.concat(t)
        : Y._shiftRight(t, s, e | 0, n.slice(0, n.length - 1));
    },
    bitLength(n) {
      const t = n.length;
      if (t === 0) return 0;
      const e = n[t - 1];
      return (t - 1) * 32 + Y.getPartial(e);
    },
    clamp(n, t) {
      if (n.length * 32 < t) return n;
      n = n.slice(0, Math.ceil(t / 32));
      const e = n.length;
      return (
        (t = t & 31),
        e > 0 &&
          t &&
          (n[e - 1] = Y.partial(t, n[e - 1] & (2147483648 >> (t - 1)), 1)),
        n
      );
    },
    partial(n, t, e) {
      return n === 32 ? t : (e ? t | 0 : t << (32 - n)) + n * 1099511627776;
    },
    getPartial(n) {
      return Math.round(n / 1099511627776) || 32;
    },
    _shiftRight(n, t, e, s) {
      for (s === void 0 && (s = []); t >= 32; t -= 32) s.push(e), (e = 0);
      if (t === 0) return s.concat(n);
      for (let a = 0; a < n.length; a++)
        s.push(e | (n[a] >>> t)), (e = n[a] << (32 - t));
      const r = n.length ? n[n.length - 1] : 0,
        i = Y.getPartial(r);
      return s.push(Y.partial((t + i) & 31, t + i > 32 ? e : s.pop(), 1)), s;
    },
  },
  Fe = {
    bytes: {
      fromBits(n) {
        const e = Y.bitLength(n) / 8,
          s = new Uint8Array(e);
        let r;
        for (let i = 0; i < e; i++)
          i & 3 || (r = n[i / 4]), (s[i] = r >>> 24), (r <<= 8);
        return s;
      },
      toBits(n) {
        const t = [];
        let e,
          s = 0;
        for (e = 0; e < n.length; e++)
          (s = (s << 8) | n[e]), (e & 3) === 3 && (t.push(s), (s = 0));
        return e & 3 && t.push(Y.partial(8 * (e & 3), s)), t;
      },
    },
  },
  Un = {};
Un.sha1 = class {
  constructor(n) {
    const t = this;
    (t.blockSize = 512),
      (t._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
      (t._key = [1518500249, 1859775393, 2400959708, 3395469782]),
      n
        ? ((t._h = n._h.slice(0)),
          (t._buffer = n._buffer.slice(0)),
          (t._length = n._length))
        : t.reset();
  }
  reset() {
    const n = this;
    return (n._h = n._init.slice(0)), (n._buffer = []), (n._length = 0), n;
  }
  update(n) {
    const t = this;
    typeof n == "string" && (n = Fe.utf8String.toBits(n));
    const e = (t._buffer = Y.concat(t._buffer, n)),
      s = t._length,
      r = (t._length = s + Y.bitLength(n));
    if (r > 9007199254740991)
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    const i = new Uint32Array(e);
    let a = 0;
    for (
      let l = t.blockSize + s - ((t.blockSize + s) & (t.blockSize - 1));
      l <= r;
      l += t.blockSize
    )
      t._block(i.subarray(16 * a, 16 * (a + 1))), (a += 1);
    return e.splice(0, 16 * a), t;
  }
  finalize() {
    const n = this;
    let t = n._buffer;
    const e = n._h;
    t = Y.concat(t, [Y.partial(1, 1)]);
    for (let s = t.length + 2; s & 15; s++) t.push(0);
    for (
      t.push(Math.floor(n._length / 4294967296)), t.push(n._length | 0);
      t.length;

    )
      n._block(t.splice(0, 16));
    return n.reset(), e;
  }
  _f(n, t, e, s) {
    if (n <= 19) return (t & e) | (~t & s);
    if (n <= 39) return t ^ e ^ s;
    if (n <= 59) return (t & e) | (t & s) | (e & s);
    if (n <= 79) return t ^ e ^ s;
  }
  _S(n, t) {
    return (t << n) | (t >>> (32 - n));
  }
  _block(n) {
    const t = this,
      e = t._h,
      s = Array(80);
    for (let d = 0; d < 16; d++) s[d] = n[d];
    let r = e[0],
      i = e[1],
      a = e[2],
      l = e[3],
      u = e[4];
    for (let d = 0; d <= 79; d++) {
      d >= 16 && (s[d] = t._S(1, s[d - 3] ^ s[d - 8] ^ s[d - 14] ^ s[d - 16]));
      const h =
        (t._S(5, r) +
          t._f(d, i, a, l) +
          u +
          s[d] +
          t._key[Math.floor(d / 20)]) |
        0;
      (u = l), (l = a), (a = t._S(30, i)), (i = r), (r = h);
    }
    (e[0] = (e[0] + r) | 0),
      (e[1] = (e[1] + i) | 0),
      (e[2] = (e[2] + a) | 0),
      (e[3] = (e[3] + l) | 0),
      (e[4] = (e[4] + u) | 0);
  }
};
const vn = {};
vn.aes = class {
  constructor(n) {
    const t = this;
    (t._tables = [
      [[], [], [], [], []],
      [[], [], [], [], []],
    ]),
      t._tables[0][0][0] || t._precompute();
    const e = t._tables[0][4],
      s = t._tables[1],
      r = n.length;
    let i,
      a,
      l,
      u = 1;
    if (r !== 4 && r !== 6 && r !== 8) throw new Error("invalid aes key size");
    for (t._key = [(a = n.slice(0)), (l = [])], i = r; i < 4 * r + 28; i++) {
      let d = a[i - 1];
      (i % r === 0 || (r === 8 && i % r === 4)) &&
        ((d =
          (e[d >>> 24] << 24) ^
          (e[(d >> 16) & 255] << 16) ^
          (e[(d >> 8) & 255] << 8) ^
          e[d & 255]),
        i % r === 0 &&
          ((d = (d << 8) ^ (d >>> 24) ^ (u << 24)),
          (u = (u << 1) ^ ((u >> 7) * 283)))),
        (a[i] = a[i - r] ^ d);
    }
    for (let d = 0; i; d++, i--) {
      const h = a[d & 3 ? i : i - 4];
      i <= 4 || d < 4
        ? (l[d] = h)
        : (l[d] =
            s[0][e[h >>> 24]] ^
            s[1][e[(h >> 16) & 255]] ^
            s[2][e[(h >> 8) & 255]] ^
            s[3][e[h & 255]]);
    }
  }
  encrypt(n) {
    return this._crypt(n, 0);
  }
  decrypt(n) {
    return this._crypt(n, 1);
  }
  _precompute() {
    const n = this._tables[0],
      t = this._tables[1],
      e = n[4],
      s = t[4],
      r = [],
      i = [];
    let a, l, u, d;
    for (let h = 0; h < 256; h++)
      i[(r[h] = (h << 1) ^ ((h >> 7) * 283)) ^ h] = h;
    for (let h = (a = 0); !e[h]; h ^= l || 1, a = i[a] || 1) {
      let p = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4);
      (p = (p >> 8) ^ (p & 255) ^ 99),
        (e[h] = p),
        (s[p] = h),
        (d = r[(u = r[(l = r[h])])]);
      let b = (d * 16843009) ^ (u * 65537) ^ (l * 257) ^ (h * 16843008),
        y = (r[p] * 257) ^ (p * 16843008);
      for (let x = 0; x < 4; x++)
        (n[x][h] = y = (y << 24) ^ (y >>> 8)),
          (t[x][p] = b = (b << 24) ^ (b >>> 8));
    }
    for (let h = 0; h < 5; h++) (n[h] = n[h].slice(0)), (t[h] = t[h].slice(0));
  }
  _crypt(n, t) {
    if (n.length !== 4) throw new Error("invalid aes block size");
    const e = this._key[t],
      s = e.length / 4 - 2,
      r = [0, 0, 0, 0],
      i = this._tables[t],
      a = i[0],
      l = i[1],
      u = i[2],
      d = i[3],
      h = i[4];
    let p = n[0] ^ e[0],
      b = n[t ? 3 : 1] ^ e[1],
      y = n[2] ^ e[2],
      x = n[t ? 1 : 3] ^ e[3],
      c = 4,
      o,
      f,
      _;
    for (let g = 0; g < s; g++)
      (o =
        a[p >>> 24] ^
        l[(b >> 16) & 255] ^
        u[(y >> 8) & 255] ^
        d[x & 255] ^
        e[c]),
        (f =
          a[b >>> 24] ^
          l[(y >> 16) & 255] ^
          u[(x >> 8) & 255] ^
          d[p & 255] ^
          e[c + 1]),
        (_ =
          a[y >>> 24] ^
          l[(x >> 16) & 255] ^
          u[(p >> 8) & 255] ^
          d[b & 255] ^
          e[c + 2]),
        (x =
          a[x >>> 24] ^
          l[(p >> 16) & 255] ^
          u[(b >> 8) & 255] ^
          d[y & 255] ^
          e[c + 3]),
        (c += 4),
        (p = o),
        (b = f),
        (y = _);
    for (let g = 0; g < 4; g++)
      (r[t ? 3 & -g : g] =
        (h[p >>> 24] << 24) ^
        (h[(b >> 16) & 255] << 16) ^
        (h[(y >> 8) & 255] << 8) ^
        h[x & 255] ^
        e[c++]),
        (o = p),
        (p = b),
        (b = y),
        (y = x),
        (x = o);
    return r;
  }
};
const Br = {
    getRandomValues(n) {
      const t = new Uint32Array(n.buffer),
        e = (s) => {
          let r = 987654321;
          const i = 4294967295;
          return function () {
            return (
              (r = (36969 * (r & 65535) + (r >> 16)) & i),
              (s = (18e3 * (s & 65535) + (s >> 16)) & i),
              ((((r << 16) + s) & i) / 4294967296 + 0.5) *
                (Math.random() > 0.5 ? 1 : -1)
            );
          };
        };
      for (let s = 0, r; s < n.length; s += 4) {
        const i = e((r || Math.random()) * 4294967296);
        (r = i() * 987654071), (t[s / 4] = (i() * 4294967296) | 0);
      }
      return n;
    },
  },
  Fn = {};
Fn.ctrGladman = class {
  constructor(n, t) {
    (this._prf = n), (this._initIv = t), (this._iv = t);
  }
  reset() {
    this._iv = this._initIv;
  }
  update(n) {
    return this.calculate(this._prf, n, this._iv);
  }
  incWord(n) {
    if (((n >> 24) & 255) === 255) {
      let t = (n >> 16) & 255,
        e = (n >> 8) & 255,
        s = n & 255;
      t === 255
        ? ((t = 0), e === 255 ? ((e = 0), s === 255 ? (s = 0) : ++s) : ++e)
        : ++t,
        (n = 0),
        (n += t << 16),
        (n += e << 8),
        (n += s);
    } else n += 1 << 24;
    return n;
  }
  incCounter(n) {
    (n[0] = this.incWord(n[0])) === 0 && (n[1] = this.incWord(n[1]));
  }
  calculate(n, t, e) {
    let s;
    if (!(s = t.length)) return [];
    const r = Y.bitLength(t);
    for (let i = 0; i < s; i += 4) {
      this.incCounter(e);
      const a = n.encrypt(e);
      (t[i] ^= a[0]),
        (t[i + 1] ^= a[1]),
        (t[i + 2] ^= a[2]),
        (t[i + 3] ^= a[3]);
    }
    return Y.clamp(t, r);
  }
};
const he = {
  importKey(n) {
    return new he.hmacSha1(Fe.bytes.toBits(n));
  },
  pbkdf2(n, t, e, s) {
    if (((e = e || 1e4), s < 0 || e < 0))
      throw new Error("invalid params to pbkdf2");
    const r = ((s >> 5) + 1) << 2;
    let i, a, l, u, d;
    const h = new ArrayBuffer(r),
      p = new DataView(h);
    let b = 0;
    const y = Y;
    for (t = Fe.bytes.toBits(t), d = 1; b < (r || 1); d++) {
      for (i = a = n.encrypt(y.concat(t, [d])), l = 1; l < e; l++)
        for (a = n.encrypt(a), u = 0; u < a.length; u++) i[u] ^= a[u];
      for (l = 0; b < (r || 1) && l < i.length; l++)
        p.setInt32(b, i[l]), (b += 4);
    }
    return h.slice(0, s / 8);
  },
};
he.hmacSha1 = class {
  constructor(n) {
    const t = this,
      e = (t._hash = Un.sha1),
      s = [[], []];
    t._baseHash = [new e(), new e()];
    const r = t._baseHash[0].blockSize / 32;
    n.length > r && (n = new e().update(n).finalize());
    for (let i = 0; i < r; i++)
      (s[0][i] = n[i] ^ 909522486), (s[1][i] = n[i] ^ 1549556828);
    t._baseHash[0].update(s[0]),
      t._baseHash[1].update(s[1]),
      (t._resultHash = new e(t._baseHash[0]));
  }
  reset() {
    const n = this;
    (n._resultHash = new n._hash(n._baseHash[0])), (n._updated = !1);
  }
  update(n) {
    const t = this;
    (t._updated = !0), t._resultHash.update(n);
  }
  digest() {
    const n = this,
      t = n._resultHash.finalize(),
      e = new n._hash(n._baseHash[1]).update(t).finalize();
    return n.reset(), e;
  }
  encrypt(n) {
    if (this._updated)
      throw new Error("encrypt on already updated hmac called!");
    return this.update(n), this.digest(n);
  }
};
const jr = typeof crypto < "u" && typeof crypto.getRandomValues == "function",
  dt = "Invalid password",
  ht = "Invalid signature",
  _t = "zipjs-abort-check-password";
function Mn(n) {
  return jr ? crypto.getRandomValues(n) : Br.getRandomValues(n);
}
const me = 16,
  qr = "raw",
  Hn = { name: "PBKDF2" },
  Gr = { name: "HMAC" },
  Yr = "SHA-1",
  Vr = Object.assign({ hash: Gr }, Hn),
  tt = Object.assign({ iterations: 1e3, hash: { name: Yr } }, Hn),
  Zr = ["deriveBits"],
  Te = [8, 12, 16],
  xe = [16, 24, 32],
  re = 10,
  Kr = [0, 0, 0, 0],
  Wn = "undefined",
  Bn = "function",
  We = typeof crypto != Wn,
  Ce = We && crypto.subtle,
  jn = We && typeof Ce != Wn,
  J = Fe.bytes,
  Xr = vn.aes,
  $r = Fn.ctrGladman,
  Jr = he.hmacSha1;
let an = We && jn && typeof Ce.importKey == Bn,
  on = We && jn && typeof Ce.deriveBits == Bn;
class Qr extends TransformStream {
  constructor({
    password: t,
    signed: e,
    encryptionStrength: s,
    checkPasswordOnly: r,
  }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((i) => (this.resolveReady = i)),
          password: t,
          signed: e,
          strength: s - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(i, a) {
        const l = this,
          { password: u, strength: d, resolveReady: h, ready: p } = l;
        u
          ? (await ei(l, d, u, X(i, 0, Te[d] + 2)),
            (i = X(i, Te[d] + 2)),
            r ? a.error(new Error(_t)) : h())
          : await p;
        const b = new Uint8Array(i.length - re - ((i.length - re) % me));
        a.enqueue(qn(l, i, b, 0, re, !0));
      },
      async flush(i) {
        const { signed: a, ctr: l, hmac: u, pending: d, ready: h } = this;
        if (u && l) {
          await h;
          const p = X(d, 0, d.length - re),
            b = X(d, d.length - re);
          let y = new Uint8Array();
          if (p.length) {
            const x = Re(J, p);
            u.update(x);
            const c = l.update(x);
            y = Se(J, c);
          }
          if (a) {
            const x = X(Se(J, u.digest()), 0, re);
            for (let c = 0; c < re; c++) if (x[c] != b[c]) throw new Error(ht);
          }
          i.enqueue(y);
        }
      },
    });
  }
}
class zr extends TransformStream {
  constructor({ password: t, encryptionStrength: e }) {
    let s;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((r) => (this.resolveReady = r)),
          password: t,
          strength: e - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(r, i) {
        const a = this,
          { password: l, strength: u, resolveReady: d, ready: h } = a;
        let p = new Uint8Array();
        l ? ((p = await ti(a, u, l)), d()) : await h;
        const b = new Uint8Array(p.length + r.length - (r.length % me));
        b.set(p, 0), i.enqueue(qn(a, r, b, p.length, 0));
      },
      async flush(r) {
        const { ctr: i, hmac: a, pending: l, ready: u } = this;
        if (a && i) {
          await u;
          let d = new Uint8Array();
          if (l.length) {
            const h = i.update(Re(J, l));
            a.update(h), (d = Se(J, h));
          }
          (s.signature = Se(J, a.digest()).slice(0, re)),
            r.enqueue(pt(d, s.signature));
        }
      },
    }),
      (s = this);
  }
}
function qn(n, t, e, s, r, i) {
  const { ctr: a, hmac: l, pending: u } = n,
    d = t.length - r;
  u.length && ((t = pt(u, t)), (e = ri(e, d - (d % me))));
  let h;
  for (h = 0; h <= d - me; h += me) {
    const p = Re(J, X(t, h, h + me));
    i && l.update(p);
    const b = a.update(p);
    i || l.update(b), e.set(Se(J, b), h + s);
  }
  return (n.pending = X(t, h)), e;
}
async function ei(n, t, e, s) {
  const r = await Gn(n, t, e, X(s, 0, Te[t])),
    i = X(s, Te[t]);
  if (r[0] != i[0] || r[1] != i[1]) throw new Error(dt);
}
async function ti(n, t, e) {
  const s = Mn(new Uint8Array(Te[t])),
    r = await Gn(n, t, e, s);
  return pt(s, r);
}
async function Gn(n, t, e, s) {
  n.password = null;
  const r = Wr(e),
    i = await ni(qr, r, Vr, !1, Zr),
    a = await si(Object.assign({ salt: s }, tt), i, 8 * (xe[t] * 2 + 2)),
    l = new Uint8Array(a),
    u = Re(J, X(l, 0, xe[t])),
    d = Re(J, X(l, xe[t], xe[t] * 2)),
    h = X(l, xe[t] * 2);
  return (
    Object.assign(n, {
      keys: { key: u, authentication: d, passwordVerification: h },
      ctr: new $r(new Xr(u), Array.from(Kr)),
      hmac: new Jr(d),
    }),
    h
  );
}
async function ni(n, t, e, s, r) {
  if (an)
    try {
      return await Ce.importKey(n, t, e, s, r);
    } catch {
      return (an = !1), he.importKey(t);
    }
  else return he.importKey(t);
}
async function si(n, t, e) {
  if (on)
    try {
      return await Ce.deriveBits(n, t, e);
    } catch {
      return (on = !1), he.pbkdf2(t, n.salt, tt.iterations, e);
    }
  else return he.pbkdf2(t, n.salt, tt.iterations, e);
}
function pt(n, t) {
  let e = n;
  return (
    n.length + t.length &&
      ((e = new Uint8Array(n.length + t.length)),
      e.set(n, 0),
      e.set(t, n.length)),
    e
  );
}
function ri(n, t) {
  if (t && t > n.length) {
    const e = n;
    (n = new Uint8Array(t)), n.set(e, 0);
  }
  return n;
}
function X(n, t, e) {
  return n.subarray(t, e);
}
function Se(n, t) {
  return n.fromBits(t);
}
function Re(n, t) {
  return n.toBits(t);
}
const we = 12;
class ii extends TransformStream {
  constructor({ password: t, passwordVerification: e, checkPasswordOnly: s }) {
    super({
      start() {
        Object.assign(this, { password: t, passwordVerification: e }),
          Yn(this, t);
      },
      transform(r, i) {
        const a = this;
        if (a.password) {
          const l = cn(a, r.subarray(0, we));
          if (((a.password = null), l[we - 1] != a.passwordVerification))
            throw new Error(dt);
          r = r.subarray(we);
        }
        s ? i.error(new Error(_t)) : i.enqueue(cn(a, r));
      },
    });
  }
}
class ai extends TransformStream {
  constructor({ password: t, passwordVerification: e }) {
    super({
      start() {
        Object.assign(this, { password: t, passwordVerification: e }),
          Yn(this, t);
      },
      transform(s, r) {
        const i = this;
        let a, l;
        if (i.password) {
          i.password = null;
          const u = Mn(new Uint8Array(we));
          (u[we - 1] = i.passwordVerification),
            (a = new Uint8Array(s.length + u.length)),
            a.set(ln(i, u), 0),
            (l = we);
        } else (a = new Uint8Array(s.length)), (l = 0);
        a.set(ln(i, s), l), r.enqueue(a);
      },
    });
  }
}
function cn(n, t) {
  const e = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s++) (e[s] = Vn(n) ^ t[s]), mt(n, e[s]);
  return e;
}
function ln(n, t) {
  const e = new Uint8Array(t.length);
  for (let s = 0; s < t.length; s++) (e[s] = Vn(n) ^ t[s]), mt(n, t[s]);
  return e;
}
function Yn(n, t) {
  const e = [305419896, 591751049, 878082192];
  Object.assign(n, { keys: e, crcKey0: new ve(e[0]), crcKey2: new ve(e[2]) });
  for (let s = 0; s < t.length; s++) mt(n, t.charCodeAt(s));
}
function mt(n, t) {
  let [e, s, r] = n.keys;
  n.crcKey0.append([t]),
    (e = ~n.crcKey0.get()),
    (s = fn(Math.imul(fn(s + Zn(e)), 134775813) + 1)),
    n.crcKey2.append([s >>> 24]),
    (r = ~n.crcKey2.get()),
    (n.keys = [e, s, r]);
}
function Vn(n) {
  const t = n.keys[2] | 2;
  return Zn(Math.imul(t, t ^ 1) >>> 8);
}
function Zn(n) {
  return n & 255;
}
function fn(n) {
  return n & 4294967295;
}
const un = "deflate-raw";
class oi extends TransformStream {
  constructor(
    t,
    { chunkSize: e, CompressionStream: s, CompressionStreamNative: r },
  ) {
    super({});
    const {
        compressed: i,
        encrypted: a,
        useCompressionStream: l,
        zipCrypto: u,
        signed: d,
        level: h,
      } = t,
      p = this;
    let b,
      y,
      x = Kn(super.readable);
    (!a || u) && d && ((b = new Ln()), (x = Q(x, b))),
      i && (x = $n(x, l, { level: h, chunkSize: e }, r, s)),
      a && (u ? (x = Q(x, new ai(t))) : ((y = new zr(t)), (x = Q(x, y)))),
      Xn(p, x, () => {
        let c;
        a && !u && (c = y.signature),
          (!a || u) && d && (c = new DataView(b.value.buffer).getUint32(0)),
          (p.signature = c);
      });
  }
}
class ci extends TransformStream {
  constructor(
    t,
    { chunkSize: e, DecompressionStream: s, DecompressionStreamNative: r },
  ) {
    super({});
    const {
      zipCrypto: i,
      encrypted: a,
      signed: l,
      signature: u,
      compressed: d,
      useCompressionStream: h,
    } = t;
    let p,
      b,
      y = Kn(super.readable);
    a && (i ? (y = Q(y, new ii(t))) : ((b = new Qr(t)), (y = Q(y, b)))),
      d && (y = $n(y, h, { chunkSize: e }, r, s)),
      (!a || i) && l && ((p = new Ln()), (y = Q(y, p))),
      Xn(this, y, () => {
        if ((!a || i) && l) {
          const x = new DataView(p.value.buffer);
          if (u != x.getUint32(0, !1)) throw new Error(ht);
        }
      });
  }
}
function Kn(n) {
  return Q(
    n,
    new TransformStream({
      transform(t, e) {
        t && t.length && e.enqueue(t);
      },
    }),
  );
}
function Xn(n, t, e) {
  (t = Q(t, new TransformStream({ flush: e }))),
    Object.defineProperty(n, "readable", {
      get() {
        return t;
      },
    });
}
function $n(n, t, e, s, r) {
  try {
    const i = t && s ? s : r;
    n = Q(n, new i(un, e));
  } catch (i) {
    if (t) n = Q(n, new r(un, e));
    else throw i;
  }
  return n;
}
function Q(n, t) {
  return n.pipeThrough(t);
}
const li = "message",
  fi = "start",
  ui = "pull",
  dn = "data",
  di = "ack",
  hi = "close",
  _i = "deflate",
  Jn = "inflate";
class pi extends TransformStream {
  constructor(t, e) {
    super({});
    const s = this,
      { codecType: r } = t;
    let i;
    r.startsWith(_i) ? (i = oi) : r.startsWith(Jn) && (i = ci);
    let a = 0;
    const l = new i(t, e),
      u = super.readable,
      d = new TransformStream({
        transform(h, p) {
          h && h.length && ((a += h.length), p.enqueue(h));
        },
        flush() {
          const { signature: h } = l;
          Object.assign(s, { signature: h, size: a });
        },
      });
    Object.defineProperty(s, "readable", {
      get() {
        return u.pipeThrough(l).pipeThrough(d);
      },
    });
  }
}
const mi = typeof Worker != Ue;
class Ke {
  constructor(
    t,
    { readable: e, writable: s },
    {
      options: r,
      config: i,
      streamOptions: a,
      useWebWorkers: l,
      transferStreams: u,
      scripts: d,
    },
    h,
  ) {
    const { signal: p } = a;
    return (
      Object.assign(t, {
        busy: !0,
        readable: e.pipeThrough(new wi(e, a, i), { signal: p }),
        writable: s,
        options: Object.assign({}, r),
        scripts: d,
        transferStreams: u,
        terminate() {
          const { worker: b, busy: y } = t;
          b && !y && (b.terminate(), (t.interface = null));
        },
        onTaskFinished() {
          (t.busy = !1), h(t);
        },
      }),
      (l && mi ? bi : gi)(t, i)
    );
  }
}
class wi extends TransformStream {
  constructor(
    t,
    { onstart: e, onprogress: s, size: r, onend: i },
    { chunkSize: a },
  ) {
    let l = 0;
    super(
      {
        start() {
          e && Xe(e, r);
        },
        async transform(u, d) {
          (l += u.length), s && (await Xe(s, l, r)), d.enqueue(u);
        },
        flush() {
          (t.size = l), i && Xe(i, l);
        },
      },
      { highWaterMark: 1, size: () => a },
    );
  }
}
async function Xe(n, ...t) {
  try {
    await n(...t);
  } catch {}
}
function gi(n, t) {
  return { run: () => yi(n, t) };
}
function bi(n, { baseURL: t, chunkSize: e }) {
  return (
    n.interface ||
      Object.assign(n, {
        worker: Ti(n.scripts[0], t, n),
        interface: { run: () => xi(n, { chunkSize: e }) },
      }),
    n.interface
  );
}
async function yi(
  { options: n, readable: t, writable: e, onTaskFinished: s },
  r,
) {
  const i = new pi(n, r);
  try {
    await t.pipeThrough(i).pipeTo(e, { preventClose: !0, preventAbort: !0 });
    const { signature: a, size: l } = i;
    return { signature: a, size: l };
  } finally {
    s();
  }
}
async function xi(n, t) {
  let e, s;
  const r = new Promise((b, y) => {
    (e = b), (s = y);
  });
  Object.assign(n, {
    reader: null,
    writer: null,
    resolveResult: e,
    rejectResult: s,
    result: r,
  });
  const { readable: i, options: a, scripts: l } = n,
    { writable: u, closed: d } = Ei(n.writable);
  nt(
    {
      type: fi,
      scripts: l.slice(1),
      options: a,
      config: t,
      readable: i,
      writable: u,
    },
    n,
  ) || Object.assign(n, { reader: i.getReader(), writer: u.getWriter() });
  const p = await r;
  try {
    await u.getWriter().close();
  } catch {}
  return await d, p;
}
function Ei(n) {
  const t = n.getWriter();
  let e;
  const s = new Promise((i) => (e = i));
  return {
    writable: new WritableStream({
      async write(i) {
        await t.ready, await t.write(i);
      },
      close() {
        t.releaseLock(), e();
      },
      abort(i) {
        return t.abort(i);
      },
    }),
    closed: s,
  };
}
let hn = !0,
  _n = !0;
function Ti(n, t, e) {
  const s = { type: "module" };
  let r, i;
  typeof n == kn && (n = n());
  try {
    r = new URL(n, t);
  } catch {
    r = n;
  }
  if (hn)
    try {
      i = new Worker(r);
    } catch {
      (hn = !1), (i = new Worker(r, s));
    }
  else i = new Worker(r, s);
  return i.addEventListener(li, (a) => Si(a, e)), i;
}
function nt(
  n,
  { worker: t, writer: e, onTaskFinished: s, transferStreams: r },
) {
  try {
    let { value: i, readable: a, writable: l } = n;
    const u = [];
    if (
      (i &&
        (i.byteLength < i.buffer.byteLength
          ? (n.value = i.buffer.slice(0, i.byteLength))
          : (n.value = i.buffer),
        u.push(n.value)),
      r && _n
        ? (a && u.push(a), l && u.push(l))
        : (n.readable = n.writable = null),
      u.length)
    )
      try {
        return t.postMessage(n, u), !0;
      } catch {
        (_n = !1), (n.readable = n.writable = null), t.postMessage(n);
      }
    else t.postMessage(n);
  } catch (i) {
    throw (e && e.releaseLock(), s(), i);
  }
}
async function Si({ data: n }, t) {
  const { type: e, value: s, messageId: r, result: i, error: a } = n,
    {
      reader: l,
      writer: u,
      resolveResult: d,
      rejectResult: h,
      onTaskFinished: p,
    } = t;
  try {
    if (a) {
      const { message: y, stack: x, code: c, name: o } = a,
        f = new Error(y);
      Object.assign(f, { stack: x, code: c, name: o }), b(f);
    } else {
      if (e == ui) {
        const { value: y, done: x } = await l.read();
        nt({ type: dn, value: y, done: x, messageId: r }, t);
      }
      e == dn &&
        (await u.ready,
        await u.write(new Uint8Array(s)),
        nt({ type: di, messageId: r }, t)),
        e == hi && b(null, i);
    }
  } catch (y) {
    b(y);
  }
  function b(y, x) {
    y ? h(y) : d(x), u && u.releaseLock(), p();
  }
}
let ie = [];
const $e = [];
let pn = 0;
async function Ri(n, t) {
  const { options: e, config: s } = t,
    {
      transferStreams: r,
      useWebWorkers: i,
      useCompressionStream: a,
      codecType: l,
      compressed: u,
      signed: d,
      encrypted: h,
    } = e,
    { workerScripts: p, maxWorkers: b, terminateWorkerTimeout: y } = s;
  t.transferStreams = r || r === $;
  const x = !u && !d && !h && !t.transferStreams;
  (t.useWebWorkers = !x && (i || (i === $ && s.useWebWorkers))),
    (t.scripts = t.useWebWorkers && p ? p[l] : []),
    (e.useCompressionStream = a || (a === $ && s.useCompressionStream));
  let c;
  const o = ie.find((_) => !_.busy);
  if (o) st(o), (c = new Ke(o, n, t, f));
  else if (ie.length < b) {
    const _ = { indexWorker: pn };
    pn++, ie.push(_), (c = new Ke(_, n, t, f));
  } else
    c = await new Promise((_) =>
      $e.push({ resolve: _, stream: n, workerOptions: t }),
    );
  return c.run();
  function f(_) {
    if ($e.length) {
      const [{ resolve: g, stream: m, workerOptions: E }] = $e.splice(0, 1);
      g(new Ke(_, m, E, f));
    } else
      _.worker
        ? (st(_),
          Number.isFinite(y) &&
            y >= 0 &&
            (_.terminateTimeout = setTimeout(() => {
              (ie = ie.filter((g) => g != _)), _.terminate();
            }, y)))
        : (ie = ie.filter((g) => g != _));
  }
}
function st(n) {
  const { terminateTimeout: t } = n;
  t && (clearTimeout(t), (n.terminateTimeout = null));
}
function Ai() {
  ie.forEach((n) => {
    st(n), n.terminate();
  });
}
const Qn = "HTTP error ",
  Oe = "HTTP Range not supported",
  zn = "Writer iterator completed too soon",
  Ci = "text/plain",
  Oi = "Content-Length",
  ki = "Content-Range",
  Ii = "Accept-Ranges",
  Di = "Range",
  Pi = "Content-Type",
  Ni = "HEAD",
  wt = "GET",
  es = "bytes",
  Li = 64 * 1024,
  gt = "writable";
class Be {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class le extends Be {
  get readable() {
    const t = this,
      { chunkSize: e = Li } = t,
      s = new ReadableStream({
        start() {
          this.chunkOffset = 0;
        },
        async pull(r) {
          const { offset: i = 0, size: a, diskNumberStart: l } = s,
            { chunkOffset: u } = this;
          r.enqueue(await G(t, i + u, Math.min(e, a - u), l)),
            u + e > a ? r.close() : (this.chunkOffset += e);
        },
      });
    return s;
  }
}
class bt extends Be {
  constructor() {
    super();
    const t = this,
      e = new WritableStream({
        write(s) {
          return t.writeUint8Array(s);
        },
      });
    Object.defineProperty(t, gt, {
      get() {
        return e;
      },
    });
  }
  writeUint8Array() {}
}
class Ui extends le {
  constructor(t) {
    super();
    let e = t.length;
    for (; t.charAt(e - 1) == "="; ) e--;
    const s = t.indexOf(",") + 1;
    Object.assign(this, {
      dataURI: t,
      dataStart: s,
      size: Math.floor((e - s) * 0.75),
    });
  }
  readUint8Array(t, e) {
    const { dataStart: s, dataURI: r } = this,
      i = new Uint8Array(e),
      a = Math.floor(t / 3) * 4,
      l = atob(r.substring(a + s, Math.ceil((t + e) / 3) * 4 + s)),
      u = t - Math.floor(a / 4) * 3;
    for (let d = u; d < u + e; d++) i[d - u] = l.charCodeAt(d);
    return i;
  }
}
class vi extends bt {
  constructor(t) {
    super(),
      Object.assign(this, {
        data: "data:" + (t || "") + ";base64,",
        pending: [],
      });
  }
  writeUint8Array(t) {
    const e = this;
    let s = 0,
      r = e.pending;
    const i = e.pending.length;
    for (e.pending = "", s = 0; s < Math.floor((i + t.length) / 3) * 3 - i; s++)
      r += String.fromCharCode(t[s]);
    for (; s < t.length; s++) e.pending += String.fromCharCode(t[s]);
    r.length > 2 ? (e.data += btoa(r)) : (e.pending = r);
  }
  getData() {
    return this.data + btoa(this.pending);
  }
}
class yt extends le {
  constructor(t) {
    super(), Object.assign(this, { blob: t, size: t.size });
  }
  async readUint8Array(t, e) {
    const s = this,
      r = t + e;
    let a = await (t || r < s.size ? s.blob.slice(t, r) : s.blob).arrayBuffer();
    return a.byteLength > e && (a = a.slice(t, r)), new Uint8Array(a);
  }
}
class ts extends Be {
  constructor(t) {
    super();
    const e = this,
      s = new TransformStream(),
      r = [];
    t && r.push([Pi, t]),
      Object.defineProperty(e, gt, {
        get() {
          return s.writable;
        },
      }),
      (e.blob = new Response(s.readable, { headers: r }).blob());
  }
  getData() {
    return this.blob;
  }
}
class Fi extends yt {
  constructor(t) {
    super(new Blob([t], { type: Ci }));
  }
}
class Mi extends ts {
  constructor(t) {
    super(t),
      Object.assign(this, {
        encoding: t,
        utf8: !t || t.toLowerCase() == "utf-8",
      });
  }
  async getData() {
    const { encoding: t, utf8: e } = this,
      s = await super.getData();
    if (s.text && e) return s.text();
    {
      const r = new FileReader();
      return new Promise((i, a) => {
        Object.assign(r, {
          onload: ({ target: l }) => i(l.result),
          onerror: () => a(r.error),
        }),
          r.readAsText(s, t);
      });
    }
  }
}
class Hi extends le {
  constructor(t, e) {
    super(), ns(this, t, e);
  }
  async init() {
    await ss(this, rt, mn), super.init();
  }
  readUint8Array(t, e) {
    return rs(this, t, e, rt, mn);
  }
}
class Wi extends le {
  constructor(t, e) {
    super(), ns(this, t, e);
  }
  async init() {
    await ss(this, it, wn), super.init();
  }
  readUint8Array(t, e) {
    return rs(this, t, e, it, wn);
  }
}
function ns(n, t, e) {
  const { preventHeadRequest: s, useRangeHeader: r, forceRangeRequests: i } = e;
  (e = Object.assign({}, e)),
    delete e.preventHeadRequest,
    delete e.useRangeHeader,
    delete e.forceRangeRequests,
    delete e.useXHR,
    Object.assign(n, {
      url: t,
      options: e,
      preventHeadRequest: s,
      useRangeHeader: r,
      forceRangeRequests: i,
    });
}
async function ss(n, t, e) {
  const { url: s, useRangeHeader: r, forceRangeRequests: i } = n;
  if (Gi(s) && (r || i)) {
    const { headers: a } = await t(wt, n, is(n));
    if (!i && a.get(Ii) != es) throw new Error(Oe);
    {
      let l;
      const u = a.get(ki);
      if (u) {
        const d = u.trim().split(/\s*\/\s*/);
        if (d.length) {
          const h = d[1];
          h && h != "*" && (l = Number(h));
        }
      }
      l === $ ? await gn(n, t, e) : (n.size = l);
    }
  } else await gn(n, t, e);
}
async function rs(n, t, e, s, r) {
  const { useRangeHeader: i, forceRangeRequests: a, options: l } = n;
  if (i || a) {
    const u = await s(wt, n, is(n, t, e));
    if (u.status != 206) throw new Error(Oe);
    return new Uint8Array(await u.arrayBuffer());
  } else {
    const { data: u } = n;
    return u || (await r(n, l)), new Uint8Array(n.data.subarray(t, t + e));
  }
}
function is(n, t = 0, e = 1) {
  return Object.assign({}, xt(n), { [Di]: es + "=" + t + "-" + (t + e - 1) });
}
function xt({ options: n }) {
  const { headers: t } = n;
  if (t) return Symbol.iterator in t ? Object.fromEntries(t) : t;
}
async function mn(n) {
  await as(n, rt);
}
async function wn(n) {
  await as(n, it);
}
async function as(n, t) {
  const e = await t(wt, n, xt(n));
  (n.data = new Uint8Array(await e.arrayBuffer())),
    n.size || (n.size = n.data.length);
}
async function gn(n, t, e) {
  if (n.preventHeadRequest) await e(n, n.options);
  else {
    const r = (await t(Ni, n, xt(n))).headers.get(Oi);
    r ? (n.size = Number(r)) : await e(n, n.options);
  }
}
async function rt(n, { options: t, url: e }, s) {
  const r = await fetch(e, Object.assign({}, t, { method: n, headers: s }));
  if (r.status < 400) return r;
  throw r.status == 416
    ? new Error(Oe)
    : new Error(Qn + (r.statusText || r.status));
}
function it(n, { url: t }, e) {
  return new Promise((s, r) => {
    const i = new XMLHttpRequest();
    if (
      (i.addEventListener(
        "load",
        () => {
          if (i.status < 400) {
            const a = [];
            i
              .getAllResponseHeaders()
              .trim()
              .split(/[\r\n]+/)
              .forEach((l) => {
                const u = l.trim().split(/\s*:\s*/);
                (u[0] = u[0]
                  .trim()
                  .replace(/^[a-z]|-[a-z]/g, (d) => d.toUpperCase())),
                  a.push(u);
              }),
              s({
                status: i.status,
                arrayBuffer: () => i.response,
                headers: new Map(a),
              });
          } else
            r(
              i.status == 416
                ? new Error(Oe)
                : new Error(Qn + (i.statusText || i.status)),
            );
        },
        !1,
      ),
      i.addEventListener(
        "error",
        (a) => r(a.detail ? a.detail.error : new Error("Network error")),
        !1,
      ),
      i.open(n, t),
      e)
    )
      for (const a of Object.entries(e)) i.setRequestHeader(a[0], a[1]);
    (i.responseType = "arraybuffer"), i.send();
  });
}
class os extends le {
  constructor(t, e = {}) {
    super(),
      Object.assign(this, {
        url: t,
        reader: e.useXHR ? new Wi(t, e) : new Hi(t, e),
      });
  }
  set size(t) {}
  get size() {
    return this.reader.size;
  }
  async init() {
    await this.reader.init(), super.init();
  }
  readUint8Array(t, e) {
    return this.reader.readUint8Array(t, e);
  }
}
class Bi extends os {
  constructor(t, e = {}) {
    (e.useRangeHeader = !0), super(t, e);
  }
}
class ji extends le {
  constructor(t) {
    super(), Object.assign(this, { array: t, size: t.length });
  }
  readUint8Array(t, e) {
    return this.array.slice(t, t + e);
  }
}
class qi extends bt {
  init(t = 0) {
    Object.assign(this, { offset: 0, array: new Uint8Array(t) }), super.init();
  }
  writeUint8Array(t) {
    const e = this;
    if (e.offset + t.length > e.array.length) {
      const s = e.array;
      (e.array = new Uint8Array(s.length + t.length)), e.array.set(s);
    }
    e.array.set(t, e.offset), (e.offset += t.length);
  }
  getData() {
    return this.array;
  }
}
class Et extends le {
  constructor(t) {
    super(), (this.readers = t);
  }
  async init() {
    const t = this,
      { readers: e } = t;
    (t.lastDiskNumber = 0),
      (t.lastDiskOffset = 0),
      await Promise.all(
        e.map(async (s, r) => {
          await s.init(),
            r != e.length - 1 && (t.lastDiskOffset += s.size),
            (t.size += s.size);
        }),
      ),
      super.init();
  }
  async readUint8Array(t, e, s = 0) {
    const r = this,
      { readers: i } = this;
    let a,
      l = s;
    l == -1 && (l = i.length - 1);
    let u = t;
    for (; u >= i[l].size; ) (u -= i[l].size), l++;
    const d = i[l],
      h = d.size;
    if (u + e <= h) a = await G(d, u, e);
    else {
      const p = h - u;
      (a = new Uint8Array(e)),
        a.set(await G(d, u, p)),
        a.set(await r.readUint8Array(t + p, e - p, s), p);
    }
    return (r.lastDiskNumber = Math.max(l, r.lastDiskNumber)), a;
  }
}
class Me extends Be {
  constructor(t, e = 4294967295) {
    super();
    const s = this;
    Object.assign(s, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize: e,
      availableSize: e,
    });
    let r, i, a;
    const l = new WritableStream({
      async write(h) {
        const { availableSize: p } = s;
        if (a)
          h.length >= p
            ? (await u(h.slice(0, p)),
              await d(),
              (s.diskOffset += r.size),
              s.diskNumber++,
              (a = null),
              await this.write(h.slice(p)))
            : await u(h);
        else {
          const { value: b, done: y } = await t.next();
          if (y && !b) throw new Error(zn);
          (r = b),
            (r.size = 0),
            r.maxSize && (s.maxSize = r.maxSize),
            (s.availableSize = s.maxSize),
            await Ae(r),
            (i = b.writable),
            (a = i.getWriter()),
            await this.write(h);
        }
      },
      async close() {
        await a.ready, await d();
      },
    });
    Object.defineProperty(s, gt, {
      get() {
        return l;
      },
    });
    async function u(h) {
      const p = h.length;
      p &&
        (await a.ready,
        await a.write(h),
        (r.size += p),
        (s.size += p),
        (s.availableSize -= p));
    }
    async function d() {
      (i.size = r.size), await a.close();
    }
  }
}
function Gi(n) {
  const { baseURL: t } = Dn(),
    { protocol: e } = new URL(n, t);
  return e == "http:" || e == "https:";
}
async function Ae(n, t) {
  n.init && !n.initialized && (await n.init(t));
}
function cs(n) {
  return (
    Array.isArray(n) && (n = new Et(n)),
    n instanceof ReadableStream && (n = { readable: n }),
    n
  );
}
function ls(n) {
  n.writable === $ && typeof n.next == kn && (n = new Me(n)),
    n instanceof WritableStream && (n = { writable: n });
  const { writable: t } = n;
  return (
    t.size === $ && (t.size = 0),
    n instanceof Me ||
      Object.assign(n, {
        diskNumber: 0,
        diskOffset: 0,
        availableSize: 1 / 0,
        maxSize: 1 / 0,
      }),
    n
  );
}
function G(n, t, e, s) {
  return n.readUint8Array(t, e, s);
}
const Yi = Et,
  Vi = Me,
  fs =
    "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(
      "",
    ),
  Zi = fs.length == 256;
function Ki(n) {
  if (Zi) {
    let t = "";
    for (let e = 0; e < n.length; e++) t += fs[n[e]];
    return t;
  } else return new TextDecoder().decode(n);
}
function at(n, t) {
  return t && t.trim().toLowerCase() == "cp437"
    ? Ki(n)
    : new TextDecoder(t).decode(n);
}
const us = "filename",
  ds = "rawFilename",
  hs = "comment",
  _s = "rawComment",
  ps = "uncompressedSize",
  ms = "compressedSize",
  ws = "offset",
  ot = "diskNumberStart",
  ct = "lastModDate",
  lt = "rawLastModDate",
  gs = "lastAccessDate",
  Xi = "rawLastAccessDate",
  bs = "creationDate",
  $i = "rawCreationDate",
  Ji = "internalFileAttribute",
  Qi = "externalFileAttribute",
  zi = "msDosCompatible",
  ea = "zip64",
  ta = [
    us,
    ds,
    ms,
    ps,
    ct,
    lt,
    hs,
    _s,
    gs,
    bs,
    ws,
    ot,
    ot,
    Ji,
    Qi,
    zi,
    ea,
    "directory",
    "bitFlag",
    "encrypted",
    "signature",
    "filenameUTF8",
    "commentUTF8",
    "compressionMethod",
    "version",
    "versionMadeBy",
    "extraField",
    "rawExtraField",
    "extraFieldZip64",
    "extraFieldUnicodePath",
    "extraFieldUnicodeComment",
    "extraFieldAES",
    "extraFieldNTFS",
    "extraFieldExtendedTimestamp",
  ];
class bn {
  constructor(t) {
    ta.forEach((e) => (this[e] = t[e]));
  }
}
const Ne = "File format is not recognized",
  ys = "End of central directory not found",
  xs = "End of Zip64 central directory not found",
  Es = "End of Zip64 central directory locator not found",
  Ts = "Central directory header not found",
  Ss = "Local file header not found",
  Rs = "Zip64 extra field not found",
  As = "File contains encrypted entry",
  Cs = "Encryption method not supported",
  ft = "Compression method not supported",
  ut = "Split zip file",
  yn = "utf-8",
  xn = "cp437",
  na = [
    [ps, de],
    [ms, de],
    [ws, de],
    [ot, ae],
  ],
  sa = { [ae]: { getValue: B, bytes: 4 }, [de]: { getValue: Le, bytes: 8 } };
class ra {
  constructor(t, e = {}) {
    Object.assign(this, { reader: cs(t), options: e, config: Dn() });
  }
  async *getEntriesGenerator(t = {}) {
    const e = this;
    let { reader: s } = e;
    const { config: r } = e;
    if (
      (await Ae(s),
      (s.size === $ || !s.readUint8Array) &&
        ((s = new yt(await new Response(s.readable).blob())), await Ae(s)),
      s.size < pe)
    )
      throw new Error(Ne);
    s.chunkSize = Mr(r);
    const i = await fa(s, Sr, s.size, pe, ae * 16);
    if (!i) {
      const S = await G(s, 0, 4),
        C = q(S);
      throw B(C) == Tr ? new Error(ut) : new Error(ys);
    }
    const a = q(i);
    let l = B(a, 12),
      u = B(a, 16);
    const d = i.offset,
      h = j(a, 20),
      p = d + pe + h;
    let b = j(a, 4);
    const y = s.lastDiskNumber || 0;
    let x = j(a, 6),
      c = j(a, 8),
      o = 0,
      f = 0;
    if (u == de || l == de || c == ae || x == ae) {
      const S = await G(s, i.offset - Ve, Ve),
        C = q(S);
      if (B(C, 0) != Rr) throw new Error(xs);
      u = Le(C, 8);
      let I = await G(s, u, Ze, -1),
        O = q(I);
      const N = i.offset - Ve - Ze;
      if (B(O, 0) != zt && u != N) {
        const P = u;
        (u = N), (o = u - P), (I = await G(s, u, Ze, -1)), (O = q(I));
      }
      if (B(O, 0) != zt) throw new Error(Es);
      b == ae && (b = B(O, 16)),
        x == ae && (x = B(O, 20)),
        c == ae && (c = Le(O, 32)),
        l == de && (l = Le(O, 40)),
        (u -= l);
    }
    if (
      (u >= s.size && ((o = s.size - u - l - pe), (u = s.size - l - pe)),
      y != b)
    )
      throw new Error(ut);
    if (u < 0) throw new Error(Ne);
    let _ = 0,
      g = await G(s, u, l, x),
      m = q(g);
    if (l) {
      const S = i.offset - l;
      if (B(m, _) != Qt && u != S) {
        const C = u;
        (u = S), (o += u - C), (g = await G(s, u, l, x)), (m = q(g));
      }
    }
    const E = i.offset - u - (s.lastDiskOffset || 0);
    if (
      (l != E && E >= 0 && ((l = E), (g = await G(s, u, l, x)), (m = q(g))),
      u < 0 || u >= s.size)
    )
      throw new Error(Ne);
    const w = K(e, t, "filenameEncoding"),
      T = K(e, t, "commentEncoding");
    for (let S = 0; S < c; S++) {
      const C = new ia(s, r, e.options);
      if (B(m, _) != Qt) throw new Error(Ts);
      Os(C, m, _ + 6);
      const I = !!C.bitFlag.languageEncodingFlag,
        O = _ + 46,
        N = O + C.filenameLength,
        P = N + C.extraFieldLength,
        k = j(m, _ + 4),
        M = (k & 0) == 0,
        v = g.subarray(O, N),
        be = j(m, _ + 32),
        D = P + be,
        fe = g.subarray(P, D),
        F = I,
        H = I,
        Tt = M && (ge(m, _ + 38) & sn) == sn,
        St = B(m, _ + 42) + o;
      Object.assign(C, {
        versionMadeBy: k,
        msDosCompatible: M,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: be,
        directory: Tt,
        offset: St,
        diskNumberStart: j(m, _ + 34),
        internalFileAttribute: j(m, _ + 36),
        externalFileAttribute: B(m, _ + 38),
        rawFilename: v,
        filenameUTF8: F,
        commentUTF8: H,
        rawExtraField: g.subarray(N, P),
      });
      const [Rt, Ds] = await Promise.all([
        at(v, F ? yn : w || xn),
        at(fe, H ? yn : T || xn),
      ]);
      Object.assign(C, {
        rawComment: fe,
        filename: Rt,
        comment: Ds,
        directory: Tt || Rt.endsWith(Ur),
      }),
        (f = Math.max(St, f)),
        await ks(C, C, m, _ + 6);
      const je = new bn(C);
      (je.getData = (Ct, Ps) => C.getData(Ct, je, Ps)), (_ = D);
      const { onprogress: At } = t;
      if (At)
        try {
          await At(S + 1, c, new bn(C));
        } catch {}
      yield je;
    }
    const R = K(e, t, "extractPrependedData"),
      A = K(e, t, "extractAppendedData");
    return (
      R && (e.prependedData = f > 0 ? await G(s, 0, f) : new Uint8Array()),
      (e.comment = h ? await G(s, d + pe, h) : new Uint8Array()),
      A &&
        (e.appendedData =
          p < s.size ? await G(s, p, s.size - p) : new Uint8Array()),
      !0
    );
  }
  async getEntries(t = {}) {
    const e = [];
    for await (const s of this.getEntriesGenerator(t)) e.push(s);
    return e;
  }
  async close() {}
}
class ia {
  constructor(t, e, s) {
    Object.assign(this, { reader: t, config: e, options: s });
  }
  async getData(t, e, s = {}) {
    const r = this,
      {
        reader: i,
        offset: a,
        diskNumberStart: l,
        extraFieldAES: u,
        compressionMethod: d,
        config: h,
        bitFlag: p,
        signature: b,
        rawLastModDate: y,
        uncompressedSize: x,
        compressedSize: c,
      } = r,
      o = (e.localDirectory = {}),
      f = await G(i, a, 30, l),
      _ = q(f);
    let g = K(r, s, "password");
    if (((g = g && g.length && g), u && u.originalCompressionMethod != xr))
      throw new Error(ft);
    if (d != yr && d != br) throw new Error(ft);
    if (B(_, 0) != Er) throw new Error(Ss);
    Os(o, _, 4),
      (o.rawExtraField = o.extraFieldLength
        ? await G(i, a + 30 + o.filenameLength, o.extraFieldLength, l)
        : new Uint8Array()),
      await ks(r, o, _, 4, !0),
      Object.assign(e, {
        lastAccessDate: o.lastAccessDate,
        creationDate: o.creationDate,
      });
    const m = r.encrypted && o.encrypted,
      E = m && !u;
    if (m) {
      if (!E && u.strength === $) throw new Error(Cs);
      if (!g) throw new Error(As);
    }
    const w = a + 30 + o.filenameLength + o.extraFieldLength,
      T = c,
      R = i.readable;
    Object.assign(R, { diskNumberStart: l, offset: w, size: T });
    const A = K(r, s, "signal"),
      S = K(r, s, "checkPasswordOnly");
    S && (t = new WritableStream()), (t = ls(t)), await Ae(t, x);
    const { writable: C } = t,
      { onstart: I, onprogress: O, onend: N } = s,
      P = {
        options: {
          codecType: Jn,
          password: g,
          zipCrypto: E,
          encryptionStrength: u && u.strength,
          signed: K(r, s, "checkSignature"),
          passwordVerification:
            E && (p.dataDescriptor ? (y >>> 8) & 255 : (b >>> 24) & 255),
          signature: b,
          compressed: d != 0,
          encrypted: m,
          useWebWorkers: K(r, s, "useWebWorkers"),
          useCompressionStream: K(r, s, "useCompressionStream"),
          transferStreams: K(r, s, "transferStreams"),
          checkPasswordOnly: S,
        },
        config: h,
        streamOptions: {
          signal: A,
          size: T,
          onstart: I,
          onprogress: O,
          onend: N,
        },
      };
    let k = 0;
    try {
      ({ outputSize: k } = await Ri({ readable: R, writable: C }, P));
    } catch (M) {
      if (!S || M.message != _t) throw M;
    } finally {
      const M = K(r, s, "preventClose");
      (C.size += k), !M && !C.locked && (await C.getWriter().close());
    }
    return S ? void 0 : t.getData ? t.getData() : C;
  }
}
function Os(n, t, e) {
  const s = (n.rawBitFlag = j(t, e + 2)),
    r = (s & en) == en,
    i = B(t, e + 6);
  Object.assign(n, {
    encrypted: r,
    version: j(t, e),
    bitFlag: {
      level: (s & Lr) >> 1,
      dataDescriptor: (s & tn) == tn,
      languageEncodingFlag: (s & nn) == nn,
    },
    rawLastModDate: i,
    lastModDate: ua(i),
    filenameLength: j(t, e + 22),
    extraFieldLength: j(t, e + 24),
  });
}
async function ks(n, t, e, s, r) {
  const { rawExtraField: i } = t,
    a = (t.extraField = new Map()),
    l = q(new Uint8Array(i));
  let u = 0;
  try {
    for (; u < i.length; ) {
      const f = j(l, u),
        _ = j(l, u + 2);
      a.set(f, { type: f, data: i.slice(u + 4, u + 4 + _) }), (u += 4 + _);
    }
  } catch {}
  const d = j(e, s + 4);
  Object.assign(t, {
    signature: B(e, s + 10),
    uncompressedSize: B(e, s + 18),
    compressedSize: B(e, s + 14),
  });
  const h = a.get(Ar);
  h && (aa(h, t), (t.extraFieldZip64 = h));
  const p = a.get(Dr);
  p && (await En(p, us, ds, t, n), (t.extraFieldUnicodePath = p));
  const b = a.get(Pr);
  b && (await En(b, hs, _s, t, n), (t.extraFieldUnicodeComment = b));
  const y = a.get(Cr);
  y ? (oa(y, t, d), (t.extraFieldAES = y)) : (t.compressionMethod = d);
  const x = a.get(Or);
  x && (ca(x, t), (t.extraFieldNTFS = x));
  const c = a.get(Ir);
  c && (la(c, t, r), (t.extraFieldExtendedTimestamp = c));
  const o = a.get(Nr);
  o && (t.extraFieldUSDZ = o);
}
function aa(n, t) {
  t.zip64 = !0;
  const e = q(n.data),
    s = na.filter(([r, i]) => t[r] == i);
  for (let r = 0, i = 0; r < s.length; r++) {
    const [a, l] = s[r];
    if (t[a] == l) {
      const u = sa[l];
      (t[a] = n[a] = u.getValue(e, i)), (i += u.bytes);
    } else if (n[a]) throw new Error(Rs);
  }
}
async function En(n, t, e, s, r) {
  const i = q(n.data),
    a = new ve();
  a.append(r[e]);
  const l = q(new Uint8Array(4));
  l.setUint32(0, a.get(), !0);
  const u = B(i, 1);
  Object.assign(n, {
    version: ge(i, 0),
    [t]: at(n.data.subarray(5)),
    valid: !r.bitFlag.languageEncodingFlag && u == B(l, 0),
  }),
    n.valid && ((s[t] = n[t]), (s[t + "UTF8"] = !0));
}
function oa(n, t, e) {
  const s = q(n.data),
    r = ge(s, 4);
  Object.assign(n, {
    vendorVersion: ge(s, 0),
    vendorId: ge(s, 2),
    strength: r,
    originalCompressionMethod: e,
    compressionMethod: j(s, 5),
  }),
    (t.compressionMethod = n.compressionMethod);
}
function ca(n, t) {
  const e = q(n.data);
  let s = 4,
    r;
  try {
    for (; s < n.data.length && !r; ) {
      const i = j(e, s),
        a = j(e, s + 2);
      i == kr && (r = n.data.slice(s + 4, s + 4 + a)), (s += 4 + a);
    }
  } catch {}
  try {
    if (r && r.length == 24) {
      const i = q(r),
        a = i.getBigUint64(0, !0),
        l = i.getBigUint64(8, !0),
        u = i.getBigUint64(16, !0);
      Object.assign(n, {
        rawLastModDate: a,
        rawLastAccessDate: l,
        rawCreationDate: u,
      });
      const d = Je(a),
        h = Je(l),
        p = Je(u),
        b = { lastModDate: d, lastAccessDate: h, creationDate: p };
      Object.assign(n, b), Object.assign(t, b);
    }
  } catch {}
}
function la(n, t, e) {
  const s = q(n.data),
    r = ge(s, 0),
    i = [],
    a = [];
  e
    ? ((r & 1) == 1 && (i.push(ct), a.push(lt)),
      (r & 2) == 2 && (i.push(gs), a.push(Xi)),
      (r & 4) == 4 && (i.push(bs), a.push($i)))
    : n.data.length >= 5 && (i.push(ct), a.push(lt));
  let l = 1;
  i.forEach((u, d) => {
    if (n.data.length >= l + 4) {
      const h = B(s, l);
      t[u] = n[u] = new Date(h * 1e3);
      const p = a[d];
      n[p] = h;
    }
    l += 4;
  });
}
async function fa(n, t, e, s, r) {
  const i = new Uint8Array(4),
    a = q(i);
  da(a, 0, t);
  const l = s + r;
  return (await u(s)) || (await u(Math.min(l, e)));
  async function u(d) {
    const h = e - d,
      p = await G(n, h, d);
    for (let b = p.length - s; b >= 0; b--)
      if (
        p[b] == i[0] &&
        p[b + 1] == i[1] &&
        p[b + 2] == i[2] &&
        p[b + 3] == i[3]
      )
        return { offset: h + b, buffer: p.slice(b, b + s).buffer };
  }
}
function K(n, t, e) {
  return t[e] === $ ? n.options[e] : t[e];
}
function ua(n) {
  const t = (n & 4294901760) >> 16,
    e = n & 65535;
  try {
    return new Date(
      1980 + ((t & 65024) >> 9),
      ((t & 480) >> 5) - 1,
      t & 31,
      (e & 63488) >> 11,
      (e & 2016) >> 5,
      (e & 31) * 2,
      0,
    );
  } catch {}
}
function Je(n) {
  return new Date(Number(n / BigInt(1e4) - BigInt(116444736e5)));
}
function ge(n, t) {
  return n.getUint8(t);
}
function j(n, t) {
  return n.getUint16(t, !0);
}
function B(n, t) {
  return n.getUint32(t, !0);
}
function Le(n, t) {
  return Number(n.getBigUint64(t, !0));
}
function da(n, t, e) {
  n.setUint32(t, e, !0);
}
function q(n) {
  return new DataView(n.buffer);
}
Pn({ Inflate: gr });
const ha = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BlobReader: yt,
        BlobWriter: ts,
        Data64URIReader: Ui,
        Data64URIWriter: vi,
        ERR_BAD_FORMAT: Ne,
        ERR_CENTRAL_DIRECTORY_NOT_FOUND: Ts,
        ERR_ENCRYPTED: As,
        ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: Es,
        ERR_EOCDR_NOT_FOUND: ys,
        ERR_EOCDR_ZIP64_NOT_FOUND: xs,
        ERR_EXTRAFIELD_ZIP64_NOT_FOUND: Rs,
        ERR_HTTP_RANGE: Oe,
        ERR_INVALID_PASSWORD: dt,
        ERR_INVALID_SIGNATURE: ht,
        ERR_ITERATOR_COMPLETED_TOO_SOON: zn,
        ERR_LOCAL_FILE_HEADER_NOT_FOUND: Ss,
        ERR_SPLIT_ZIP_FILE: ut,
        ERR_UNSUPPORTED_COMPRESSION: ft,
        ERR_UNSUPPORTED_ENCRYPTION: Cs,
        HttpRangeReader: Bi,
        HttpReader: os,
        Reader: le,
        SplitDataReader: Et,
        SplitDataWriter: Me,
        SplitZipReader: Yi,
        SplitZipWriter: Vi,
        TextReader: Fi,
        TextWriter: Mi,
        Uint8ArrayReader: ji,
        Uint8ArrayWriter: qi,
        Writer: bt,
        ZipReader: ra,
        configure: Pn,
        getMimeType: Hr,
        initReader: cs,
        initStream: Ae,
        initWriter: ls,
        readUint8Array: G,
        terminateWorkers: Ai,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Ee = ha;
class _a {
  constructor(t, e) {
    L(this, "_zipReader");
    L(this, "_entriesPromise");
    L(this, "_traceURL");
    (this._traceURL = t),
      Ee.configure({ baseURL: self.location.href }),
      (this._zipReader = new Ee.ZipReader(
        new Ee.HttpReader(ma(t), { mode: "cors", preventHeadRequest: !0 }),
        { useWebWorkers: !1 },
      )),
      (this._entriesPromise = this._zipReader
        .getEntries({ onprogress: e })
        .then((s) => {
          const r = new Map();
          for (const i of s) r.set(i.filename, i);
          return r;
        }));
  }
  isLive() {
    return !1;
  }
  traceURL() {
    return this._traceURL;
  }
  async entryNames() {
    return [...(await this._entriesPromise).keys()];
  }
  async hasEntry(t) {
    return (await this._entriesPromise).has(t);
  }
  async readText(t) {
    var i;
    const s = (await this._entriesPromise).get(t);
    if (!s) return;
    const r = new Ee.TextWriter();
    return await ((i = s.getData) == null ? void 0 : i.call(s, r)), r.getData();
  }
  async readBlob(t) {
    const s = (await this._entriesPromise).get(t);
    if (!s) return;
    const r = new Ee.BlobWriter();
    return await s.getData(r), r.getData();
  }
}
class pa {
  constructor(t) {
    L(this, "_entriesPromise");
    L(this, "_traceURL");
    (this._traceURL = t),
      (this._entriesPromise = fetch(
        "/trace/file?path=" + encodeURIComponent(t),
      ).then(async (e) => {
        const s = JSON.parse(await e.text()),
          r = new Map();
        for (const i of s.entries) r.set(i.name, i.path);
        return r;
      }));
  }
  isLive() {
    return !0;
  }
  traceURL() {
    return this._traceURL;
  }
  async entryNames() {
    return [...(await this._entriesPromise).keys()];
  }
  async hasEntry(t) {
    return (await this._entriesPromise).has(t);
  }
  async readText(t) {
    const e = await this._readEntry(t);
    return e == null ? void 0 : e.text();
  }
  async readBlob(t) {
    const e = await this._readEntry(t);
    return (e == null ? void 0 : e.status) === 200
      ? await (e == null ? void 0 : e.blob())
      : void 0;
  }
  async _readEntry(t) {
    const s = (await this._entriesPromise).get(t);
    if (s) return fetch("/trace/file?path=" + encodeURIComponent(s));
  }
}
function ma(n) {
  let t =
    n.startsWith("http") || n.startsWith("blob")
      ? n
      : `file?path=${encodeURIComponent(n)}`;
  return (
    t.startsWith("https://www.dropbox.com/") &&
      (t = "https://dl.dropboxusercontent.com/" + t.substring(24)),
    t
  );
}
self.addEventListener("install", function (n) {
  self.skipWaiting();
});
self.addEventListener("activate", function (n) {
  n.waitUntil(self.clients.claim());
});
const wa = new URL(self.registration.scope).pathname,
  ce = new Map(),
  He = new Map();
async function ga(n, t, e, s, r) {
  var u;
  await Is();
  let i = He.get(e);
  i || ((i = { limit: s, traceUrls: new Set() }), He.set(e, i)),
    i.traceUrls.add(n);
  const a = new Js();
  try {
    const [d, h] = Us(r, [0.5, 0.4, 0.1]),
      p = n.endsWith("json") ? new pa(n) : new _a(n, d);
    await a.load(p, h);
  } catch (d) {
    throw (
      (console.error(d),
      (u = d == null ? void 0 : d.message) != null &&
      u.includes("Cannot find .trace file") &&
      (await a.hasEntry("index.html"))
        ? new Error(
            "Could not load trace. Did you upload a Playwright HTML report instead? Make sure to extract the archive first and then double-click the index.html file or put it on a web server.",
          )
        : d instanceof An
          ? new Error(`Could not load trace from ${t || n}. ${d.message}`)
          : t
            ? new Error(
                `Could not load trace from ${t}. Make sure to upload a valid Playwright trace.`,
              )
            : new Error(
                `Could not load trace from ${n}. Make sure a valid Playwright Trace is accessible over this url.`,
              ))
    );
  }
  const l = new Ys(a.storage(), (d) => a.resourceForSha1(d));
  return ce.set(n, { traceModel: a, snapshotServer: l }), a;
}
async function ba(n) {
  if (n.request.url.startsWith("chrome-extension://")) return fetch(n.request);
  const t = n.request,
    e = await self.clients.get(n.clientId),
    s = self.registration.scope.startsWith("https://");
  if (t.url.startsWith(self.registration.scope)) {
    const u = new URL(ze(t.url)),
      d = u.pathname.substring(wa.length - 1);
    if (d === "/ping") return await Is(), new Response(null, { status: 200 });
    const h = u.searchParams.get("trace");
    if (d === "/contexts")
      try {
        const p = u.searchParams.has("limit")
            ? +u.searchParams.get("limit")
            : void 0,
          b = await ga(
            h,
            u.searchParams.get("traceFileName"),
            n.clientId,
            p,
            (y, x) => {
              e.postMessage({
                method: "progress",
                params: { done: y, total: x },
              });
            },
          );
        return new Response(JSON.stringify(b.contextEntries), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (p) {
        return new Response(
          JSON.stringify({ error: p == null ? void 0 : p.message }),
          { status: 500, headers: { "Content-Type": "application/json" } },
        );
      }
    if (d.startsWith("/snapshotInfo/")) {
      const { snapshotServer: p } = ce.get(h) || {};
      return p
        ? p.serveSnapshotInfo(d, u.searchParams)
        : new Response(null, { status: 404 });
    }
    if (d.startsWith("/snapshot/")) {
      const { snapshotServer: p } = ce.get(h) || {};
      if (!p) return new Response(null, { status: 404 });
      const b = p.serveSnapshot(d, u.searchParams, u.href);
      return (
        s &&
          b.headers.set("Content-Security-Policy", "upgrade-insecure-requests"),
        b
      );
    }
    if (d.startsWith("/closest-screenshot/")) {
      const { snapshotServer: p } = ce.get(h) || {};
      return p
        ? p.serveClosestScreenshot(d, u.searchParams)
        : new Response(null, { status: 404 });
    }
    if (d.startsWith("/sha1/")) {
      const p = d.slice(6);
      for (const b of ce.values()) {
        const y = await b.traceModel.resourceForSha1(p);
        if (y)
          return new Response(y, { status: 200, headers: ya(u.searchParams) });
      }
      return new Response(null, { status: 404 });
    }
    return fetch(n.request);
  }
  const r = ze(e.url),
    i = new URL(r).searchParams.get("trace"),
    { snapshotServer: a } = ce.get(i) || {};
  if (!a) return new Response(null, { status: 404 });
  const l = [t.url];
  return (
    s &&
      t.url.startsWith("https://") &&
      l.push(t.url.replace(/^https/, "http")),
    a.serveResource(l, t.method, r)
  );
}
function ya(n) {
  const t = n.get("dn"),
    e = n.get("dct");
  if (!t) return;
  const s = new Headers();
  return (
    s.set(
      "Content-Disposition",
      `attachment; filename="attachment"; filename*=UTF-8''${encodeURIComponent(t)}`,
    ),
    e && s.set("Content-Type", e),
    s
  );
}
async function Is() {
  const n = await self.clients.matchAll(),
    t = new Set();
  for (const [e, s] of He) {
    if (!n.find((r) => r.id === e)) {
      He.delete(e);
      continue;
    }
    if (s.limit !== void 0) {
      const r = [...s.traceUrls];
      s.traceUrls = new Set(r.slice(r.length - s.limit));
    }
    s.traceUrls.forEach((r) => t.add(r));
  }
  for (const e of ce.keys()) t.has(e) || ce.delete(e);
}
self.addEventListener("fetch", function (n) {
  n.respondWith(ba(n));
});
