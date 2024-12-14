const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./assets/xtermModule-BeNbaIVa.js", "./xtermModule.DSXBckUd.css"]),
) => i.map((i) => d[i]);
import {
  u as Le,
  r as K,
  b as Fe,
  _ as Oe,
  d as We,
  e as Ue,
  j as r,
  R as h,
  s as we,
  f as ae,
  m as Ae,
  g as Y,
  T as D,
  M as ze,
  h as Ve,
  i as Ke,
  S as $e,
  a as He,
  c as qe,
} from "./assets/inspectorTab-DdpLd2bb.js";
import { T as Ye, W as Qe } from "./assets/testServerConnection-DeE2kSzz.js";
import {
  E as Xe,
  t as Ge,
  T as Je,
  W as Ze,
} from "./assets/workbench-CdYbzWFD.js";
var et = {};
class oe {
  constructor(e, t = {}) {
    (this.isListing = !1),
      (this._tests = new Map()),
      (this._rootSuite = new Q("", "root")),
      (this._options = t),
      (this._reporter = e);
  }
  reset() {
    (this._rootSuite._entries = []), this._tests.clear();
  }
  dispatch(e) {
    const { method: t, params: s } = e;
    if (t === "onConfigure") {
      this._onConfigure(s.config);
      return;
    }
    if (t === "onProject") {
      this._onProject(s.project);
      return;
    }
    if (t === "onBegin") {
      this._onBegin();
      return;
    }
    if (t === "onTestBegin") {
      this._onTestBegin(s.testId, s.result);
      return;
    }
    if (t === "onTestEnd") {
      this._onTestEnd(s.test, s.result);
      return;
    }
    if (t === "onStepBegin") {
      this._onStepBegin(s.testId, s.resultId, s.step);
      return;
    }
    if (t === "onStepEnd") {
      this._onStepEnd(s.testId, s.resultId, s.step);
      return;
    }
    if (t === "onError") {
      this._onError(s.error);
      return;
    }
    if (t === "onStdIO") {
      this._onStdIO(s.type, s.testId, s.resultId, s.data, s.isBase64);
      return;
    }
    if (t === "onEnd") return this._onEnd(s.result);
    if (t === "onExit") return this._onExit();
  }
  _onConfigure(e) {
    var t, s;
    (this._rootDir = e.rootDir),
      (this._config = this._parseConfig(e)),
      (s = (t = this._reporter).onConfigure) == null || s.call(t, this._config);
  }
  _onProject(e) {
    let t = this._options.mergeProjects
      ? this._rootSuite.suites.find((s) => s.project().name === e.name)
      : void 0;
    t || ((t = new Q(e.name, "project")), this._rootSuite._addSuite(t)),
      (t._project = this._parseProject(e));
    for (const s of e.suites) this._mergeSuiteInto(s, t);
  }
  _onBegin() {
    var e, t;
    (t = (e = this._reporter).onBegin) == null || t.call(e, this._rootSuite);
  }
  _onTestBegin(e, t) {
    var d, a;
    const s = this._tests.get(e);
    this._options.clearPreviousResultsWhenTestBegins && (s.results = []);
    const o = s._createTestResult(t.id);
    (o.retry = t.retry),
      (o.workerIndex = t.workerIndex),
      (o.parallelIndex = t.parallelIndex),
      o.setStartTimeNumber(t.startTime),
      (a = (d = this._reporter).onTestBegin) == null || a.call(d, s, o);
  }
  _onTestEnd(e, t) {
    var d, a, g;
    const s = this._tests.get(e.testId);
    (s.timeout = e.timeout),
      (s.expectedStatus = e.expectedStatus),
      (s.annotations = e.annotations);
    const o = s.results.find((l) => l._id === t.id);
    (o.duration = t.duration),
      (o.status = t.status),
      (o.errors = t.errors),
      (o.error = (d = o.errors) == null ? void 0 : d[0]),
      (o.attachments = this._parseAttachments(t.attachments)),
      (g = (a = this._reporter).onTestEnd) == null || g.call(a, s, o),
      (o._stepMap = new Map());
  }
  _onStepBegin(e, t, s) {
    var m, n;
    const o = this._tests.get(e),
      d = o.results.find((f) => f._id === t),
      a = s.parentStepId ? d._stepMap.get(s.parentStepId) : void 0,
      g = this._absoluteLocation(s.location),
      l = new st(s, a, g);
    a ? a.steps.push(l) : d.steps.push(l),
      d._stepMap.set(s.id, l),
      (n = (m = this._reporter).onStepBegin) == null || n.call(m, o, d, l);
  }
  _onStepEnd(e, t, s) {
    var g, l;
    const o = this._tests.get(e),
      d = o.results.find((m) => m._id === t),
      a = d._stepMap.get(s.id);
    (a.duration = s.duration),
      (a.error = s.error),
      (l = (g = this._reporter).onStepEnd) == null || l.call(g, o, d, a);
  }
  _onError(e) {
    var t, s;
    (s = (t = this._reporter).onError) == null || s.call(t, e);
  }
  _onStdIO(e, t, s, o, d) {
    var m, n, f, S;
    const a = d ? (globalThis.Buffer ? Buffer.from(o, "base64") : atob(o)) : o,
      g = t ? this._tests.get(t) : void 0,
      l = g && s ? g.results.find((c) => c._id === s) : void 0;
    e === "stdout"
      ? (l == null || l.stdout.push(a),
        (n = (m = this._reporter).onStdOut) == null || n.call(m, a, g, l))
      : (l == null || l.stderr.push(a),
        (S = (f = this._reporter).onStdErr) == null || S.call(f, a, g, l));
  }
  async _onEnd(e) {
    var t, s;
    await ((s = (t = this._reporter).onEnd) == null
      ? void 0
      : s.call(t, {
          status: e.status,
          startTime: new Date(e.startTime),
          duration: e.duration,
        }));
  }
  _onExit() {
    var e, t;
    return (t = (e = this._reporter).onExit) == null ? void 0 : t.call(e);
  }
  _parseConfig(e) {
    const t = { ...rt, ...e };
    return (
      this._options.configOverrides &&
        ((t.configFile = this._options.configOverrides.configFile),
        (t.reportSlowTests = this._options.configOverrides.reportSlowTests),
        (t.quiet = this._options.configOverrides.quiet),
        (t.reporter = [...this._options.configOverrides.reporter])),
      t
    );
  }
  _parseProject(e) {
    return {
      metadata: e.metadata,
      name: e.name,
      outputDir: this._absolutePath(e.outputDir),
      repeatEach: e.repeatEach,
      retries: e.retries,
      testDir: this._absolutePath(e.testDir),
      testIgnore: se(e.testIgnore),
      testMatch: se(e.testMatch),
      timeout: e.timeout,
      grep: se(e.grep),
      grepInvert: se(e.grepInvert),
      dependencies: e.dependencies,
      teardown: e.teardown,
      snapshotDir: this._absolutePath(e.snapshotDir),
      use: {},
    };
  }
  _parseAttachments(e) {
    return e.map((t) => ({
      ...t,
      body:
        t.base64 && globalThis.Buffer
          ? Buffer.from(t.base64, "base64")
          : void 0,
    }));
  }
  _mergeSuiteInto(e, t) {
    let s = t.suites.find((o) => o.title === e.title);
    s ||
      ((s = new Q(e.title, t.type === "project" ? "file" : "describe")),
      t._addSuite(s)),
      (s.location = this._absoluteLocation(e.location)),
      e.entries.forEach((o) => {
        "testId" in o ? this._mergeTestInto(o, s) : this._mergeSuiteInto(o, s);
      });
  }
  _mergeTestInto(e, t) {
    let s = this._options.mergeTestCases
      ? t.tests.find(
          (o) => o.title === e.title && o.repeatEachIndex === e.repeatEachIndex,
        )
      : void 0;
    s ||
      ((s = new tt(
        e.testId,
        e.title,
        this._absoluteLocation(e.location),
        e.repeatEachIndex,
      )),
      t._addTest(s),
      this._tests.set(s.id, s)),
      this._updateTest(e, s);
  }
  _updateTest(e, t) {
    return (
      (t.id = e.testId),
      (t.location = this._absoluteLocation(e.location)),
      (t.retries = e.retries),
      (t.tags = e.tags ?? []),
      (t.annotations = e.annotations ?? []),
      t
    );
  }
  _absoluteLocation(e) {
    return e && { ...e, file: this._absolutePath(e.file) };
  }
  _absolutePath(e) {
    if (e !== void 0)
      return this._options.resolvePath
        ? this._options.resolvePath(this._rootDir, e)
        : this._rootDir + "/" + e;
  }
}
class Q {
  constructor(e, t) {
    (this._entries = []),
      (this._requireFile = ""),
      (this._parallelMode = "none"),
      (this.title = e),
      (this._type = t);
  }
  get type() {
    return this._type;
  }
  get suites() {
    return this._entries.filter((e) => e.type !== "test");
  }
  get tests() {
    return this._entries.filter((e) => e.type === "test");
  }
  entries() {
    return this._entries;
  }
  allTests() {
    const e = [],
      t = (s) => {
        for (const o of s.entries()) o.type === "test" ? e.push(o) : t(o);
      };
    return t(this), e;
  }
  titlePath() {
    const e = this.parent ? this.parent.titlePath() : [];
    return (this.title || this._type !== "describe") && e.push(this.title), e;
  }
  project() {
    var e;
    return this._project ?? ((e = this.parent) == null ? void 0 : e.project());
  }
  _addTest(e) {
    (e.parent = this), this._entries.push(e);
  }
  _addSuite(e) {
    (e.parent = this), this._entries.push(e);
  }
}
class tt {
  constructor(e, t, s, o) {
    (this.fn = () => {}),
      (this.results = []),
      (this.type = "test"),
      (this.expectedStatus = "passed"),
      (this.timeout = 0),
      (this.annotations = []),
      (this.retries = 0),
      (this.tags = []),
      (this.repeatEachIndex = 0),
      (this.id = e),
      (this.title = t),
      (this.location = s),
      (this.repeatEachIndex = o);
  }
  titlePath() {
    const e = this.parent ? this.parent.titlePath() : [];
    return e.push(this.title), e;
  }
  outcome() {
    return ot(this);
  }
  ok() {
    const e = this.outcome();
    return e === "expected" || e === "flaky" || e === "skipped";
  }
  _createTestResult(e) {
    const t = new it(this.results.length, e);
    return this.results.push(t), t;
  }
}
class st {
  constructor(e, t, s) {
    (this.duration = -1),
      (this.steps = []),
      (this._startTime = 0),
      (this.title = e.title),
      (this.category = e.category),
      (this.location = s),
      (this.parent = t),
      (this._startTime = e.startTime);
  }
  titlePath() {
    var t;
    return [
      ...(((t = this.parent) == null ? void 0 : t.titlePath()) || []),
      this.title,
    ];
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(e) {
    this._startTime = +e;
  }
}
class it {
  constructor(e, t) {
    (this.parallelIndex = -1),
      (this.workerIndex = -1),
      (this.duration = -1),
      (this.stdout = []),
      (this.stderr = []),
      (this.attachments = []),
      (this.status = "skipped"),
      (this.steps = []),
      (this.errors = []),
      (this._stepMap = new Map()),
      (this._startTime = 0),
      (this.retry = e),
      (this._id = t);
  }
  setStartTimeNumber(e) {
    this._startTime = e;
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(e) {
    this._startTime = +e;
  }
}
const rt = {
  forbidOnly: !1,
  fullyParallel: !1,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: "always",
  projects: [],
  reporter: [[et.CI ? "dot" : "list"]],
  reportSlowTests: { max: 5, threshold: 15e3 },
  configFile: "",
  rootDir: "",
  quiet: !1,
  shard: null,
  updateSnapshots: "missing",
  version: "",
  workers: 0,
  webServer: null,
};
function se(i) {
  return i.map((e) =>
    e.s !== void 0 ? e.s : new RegExp(e.r.source, e.r.flags),
  );
}
function ot(i) {
  let e = 0,
    t = 0,
    s = 0;
  for (const o of i.results)
    o.status === "interrupted" ||
      (o.status === "skipped" && i.expectedStatus === "skipped"
        ? ++e
        : o.status === "skipped" ||
          (o.status === i.expectedStatus ? ++t : ++s));
  return t === 0 && s === 0
    ? "skipped"
    : s === 0
      ? "expected"
      : t === 0 && e === 0
        ? "unexpected"
        : "flaky";
}
class ne {
  constructor(e, t, s, o, d) {
    (this._treeItemById = new Map()), (this._treeItemByTestId = new Map());
    const a = o && [...o.values()].some(Boolean);
    (this.pathSeparator = d),
      (this.rootItem = {
        kind: "group",
        subKind: "folder",
        id: e,
        title: "",
        location: { file: "", line: 0, column: 0 },
        duration: 0,
        parent: void 0,
        children: [],
        status: "none",
        hasLoadErrors: !1,
      }),
      this._treeItemById.set(e, this.rootItem);
    const g = (l, m, n) => {
      for (const f of m.suites) {
        const S = f.title || "<anonymous>";
        let c = n.children.find((v) => v.kind === "group" && v.title === S);
        c ||
          ((c = {
            kind: "group",
            subKind: "describe",
            id: "suite:" + m.titlePath().join("") + "" + S,
            title: S,
            location: f.location,
            duration: 0,
            parent: n,
            children: [],
            status: "none",
            hasLoadErrors: !1,
          }),
          this._addChild(n, c)),
          g(l, f, c);
      }
      for (const f of m.tests) {
        const S = f.title;
        let c = n.children.find((C) => C.kind !== "group" && C.title === S);
        c ||
          ((c = {
            kind: "case",
            id: "test:" + f.titlePath().join(""),
            title: S,
            parent: n,
            children: [],
            tests: [],
            location: f.location,
            duration: 0,
            status: "none",
            project: void 0,
            test: void 0,
            tags: f.tags,
          }),
          this._addChild(n, c));
        const v = f.results[0];
        let x = "none";
        (v == null ? void 0 : v[X]) === "scheduled"
          ? (x = "scheduled")
          : (v == null ? void 0 : v[X]) === "running"
            ? (x = "running")
            : (v == null ? void 0 : v.status) === "skipped"
              ? (x = "skipped")
              : (v == null ? void 0 : v.status) === "interrupted"
                ? (x = "none")
                : v && f.outcome() !== "expected"
                  ? (x = "failed")
                  : v && f.outcome() === "expected" && (x = "passed"),
          c.tests.push(f);
        const R = {
          kind: "test",
          id: f.id,
          title: l.name,
          location: f.location,
          test: f,
          parent: c,
          children: [],
          status: x,
          duration: f.results.length ? Math.max(0, f.results[0].duration) : 0,
          project: l,
        };
        this._addChild(c, R),
          this._treeItemByTestId.set(f.id, R),
          (c.duration = c.children.reduce((C, j) => C + j.duration, 0));
      }
    };
    for (const l of (t == null ? void 0 : t.suites) || [])
      if (!(a && !o.get(l.title)))
        for (const m of l.suites) {
          const n = this._fileItem(m.location.file.split(d), !0);
          g(l.project(), m, n);
        }
    for (const l of s) {
      if (!l.location) continue;
      const m = this._fileItem(l.location.file.split(d), !0);
      m.hasLoadErrors = !0;
    }
  }
  _addChild(e, t) {
    e.children.push(t), (t.parent = e), this._treeItemById.set(t.id, t);
  }
  filterTree(e, t, s) {
    const o = e.trim().toLowerCase().split(" "),
      d = [...t.values()].some(Boolean),
      a = (l) => {
        const m = [...l.tests[0].titlePath(), ...l.tests[0].tags]
          .join(" ")
          .toLowerCase();
        return !o.every((n) => m.includes(n)) &&
          !l.tests.some((n) => (s == null ? void 0 : s.has(n.id)))
          ? !1
          : ((l.children = l.children.filter(
              (n) =>
                !d ||
                (s == null ? void 0 : s.has(n.test.id)) ||
                t.get(n.status),
            )),
            (l.tests = l.children.map((n) => n.test)),
            !!l.children.length);
      },
      g = (l) => {
        const m = [];
        for (const n of l.children)
          n.kind === "case"
            ? a(n) && m.push(n)
            : (g(n), (n.children.length || n.hasLoadErrors) && m.push(n));
        l.children = m;
      };
    g(this.rootItem);
  }
  _fileItem(e, t) {
    if (e.length === 0) return this.rootItem;
    const s = e.join(this.pathSeparator),
      o = this._treeItemById.get(s);
    if (o) return o;
    const d = this._fileItem(e.slice(0, e.length - 1), !1),
      a = {
        kind: "group",
        subKind: t ? "file" : "folder",
        id: s,
        title: e[e.length - 1],
        location: { file: s, line: 0, column: 0 },
        duration: 0,
        parent: d,
        children: [],
        status: "none",
        hasLoadErrors: !1,
      };
    return this._addChild(d, a), a;
  }
  sortAndPropagateStatus() {
    ve(this.rootItem);
  }
  flattenForSingleProject() {
    const e = (t) => {
      t.kind === "case" && t.children.length === 1
        ? ((t.project = t.children[0].project),
          (t.test = t.children[0].test),
          (t.children = []),
          this._treeItemByTestId.set(t.test.id, t))
        : t.children.forEach(e);
    };
    e(this.rootItem);
  }
  shortenRoot() {
    let e = this.rootItem;
    for (
      ;
      e.children.length === 1 &&
      e.children[0].kind === "group" &&
      e.children[0].subKind === "folder";

    )
      e = e.children[0];
    (e.location = this.rootItem.location), (this.rootItem = e);
  }
  testIds() {
    const e = new Set(),
      t = (s) => {
        s.kind === "case" && s.tests.forEach((o) => e.add(o.id)),
          s.children.forEach(t);
      };
    return t(this.rootItem), e;
  }
  fileNames() {
    const e = new Set(),
      t = (s) => {
        s.kind === "group" && s.subKind === "file"
          ? e.add(s.id)
          : s.children.forEach(t);
      };
    return t(this.rootItem), [...e];
  }
  flatTreeItems() {
    const e = [],
      t = (s) => {
        e.push(s), s.children.forEach(t);
      };
    return t(this.rootItem), e;
  }
  treeItemById(e) {
    return this._treeItemById.get(e);
  }
  collectTestIds(e) {
    return e ? nt(e) : new Set();
  }
}
function ve(i) {
  for (const a of i.children) ve(a);
  i.kind === "group" &&
    i.children.sort(
      (a, g) =>
        a.location.file.localeCompare(g.location.file) ||
        a.location.line - g.location.line,
    );
  let e = i.children.length > 0,
    t = i.children.length > 0,
    s = !1,
    o = !1,
    d = !1;
  for (const a of i.children)
    (t = t && a.status === "skipped"),
      (e = e && (a.status === "passed" || a.status === "skipped")),
      (s = s || a.status === "failed"),
      (o = o || a.status === "running"),
      (d = d || a.status === "scheduled");
  o
    ? (i.status = "running")
    : d
      ? (i.status = "scheduled")
      : s
        ? (i.status = "failed")
        : t
          ? (i.status = "skipped")
          : e && (i.status = "passed");
}
function nt(i) {
  const e = new Set(),
    t = (s) => {
      var o;
      s.kind === "case"
        ? s.tests.map((d) => d.id).forEach((d) => e.add(d))
        : s.kind === "test"
          ? e.add(s.id)
          : (o = s.children) == null || o.forEach(t);
    };
  return t(i), e;
}
const X = Symbol("statusEx");
class at {
  constructor(e) {
    (this.loadErrors = []),
      (this.progress = { total: 0, passed: 0, failed: 0, skipped: 0 }),
      (this._lastRunTestCount = 0),
      (this._receiver = new oe(this._createReporter(), {
        mergeProjects: !0,
        mergeTestCases: !0,
        resolvePath: (t, s) => t + e.pathSeparator + s,
        clearPreviousResultsWhenTestBegins: !0,
      })),
      (this._options = e);
  }
  _createReporter() {
    return {
      version: () => "v2",
      onConfigure: (e) => {
        (this.config = e),
          (this._lastRunReceiver = new oe(
            {
              version: () => "v2",
              onBegin: (t) => {
                (this._lastRunTestCount = t.allTests().length),
                  (this._lastRunReceiver = void 0);
              },
            },
            {
              mergeProjects: !0,
              mergeTestCases: !1,
              resolvePath: (t, s) => t + this._options.pathSeparator + s,
            },
          ));
      },
      onBegin: (e) => {
        var t;
        if (
          (this.rootSuite || (this.rootSuite = e), this._testResultsSnapshot)
        ) {
          for (const s of this.rootSuite.allTests())
            s.results =
              ((t = this._testResultsSnapshot) == null
                ? void 0
                : t.get(s.id)) || s.results;
          this._testResultsSnapshot = void 0;
        }
        (this.progress.total = this._lastRunTestCount),
          (this.progress.passed = 0),
          (this.progress.failed = 0),
          (this.progress.skipped = 0),
          this._options.onUpdate(!0);
      },
      onEnd: () => {
        this._options.onUpdate(!0);
      },
      onTestBegin: (e, t) => {
        (t[X] = "running"), this._options.onUpdate();
      },
      onTestEnd: (e, t) => {
        e.outcome() === "skipped"
          ? ++this.progress.skipped
          : e.outcome() === "unexpected"
            ? ++this.progress.failed
            : ++this.progress.passed,
          (t[X] = t.status),
          this._options.onUpdate();
      },
      onError: (e) => this._handleOnError(e),
      printsToStdio: () => !1,
    };
  }
  processGlobalReport(e) {
    const t = new oe({
      version: () => "v2",
      onConfigure: (s) => {
        this.config = s;
      },
      onError: (s) => this._handleOnError(s),
    });
    for (const s of e) t.dispatch(s);
  }
  processListReport(e) {
    var s;
    const t = ((s = this.rootSuite) == null ? void 0 : s.allTests()) || [];
    (this._testResultsSnapshot = new Map(t.map((o) => [o.id, o.results]))),
      this._receiver.reset();
    for (const o of e) this._receiver.dispatch(o);
  }
  processTestReportEvent(e) {
    var t, s, o;
    (s = (t = this._lastRunReceiver) == null ? void 0 : t.dispatch(e)) ==
      null || s.catch(() => {}),
      (o = this._receiver.dispatch(e)) == null || o.catch(() => {});
  }
  _handleOnError(e) {
    var t, s;
    this.loadErrors.push(e),
      (s = (t = this._options).onError) == null || s.call(t, e),
      this._options.onUpdate();
  }
  asModel() {
    return {
      rootSuite: this.rootSuite || new Q("", "root"),
      config: this.config,
      loadErrors: this.loadErrors,
      progress: this.progress,
    };
  }
}
const lt = ({ source: i }) => {
    const [e, t] = Le(),
      [s, o] = K.useState(Fe()),
      [d] = K.useState(
        Oe(
          () => import("./assets/xtermModule-BeNbaIVa.js"),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ).then((g) => g.default),
      ),
      a = K.useRef(null);
    return (
      K.useEffect(() => (We(o), () => Ue(o)), []),
      K.useEffect(() => {
        const g = i.write,
          l = i.clear;
        return (
          (async () => {
            const { Terminal: m, FitAddon: n } = await d,
              f = t.current;
            if (!f) return;
            const S = s === "dark-mode" ? dt : ct;
            if (a.current && a.current.terminal.options.theme === S) return;
            a.current && (f.textContent = "");
            const c = new m({
                convertEol: !0,
                fontSize: 13,
                scrollback: 1e4,
                fontFamily: "var(--vscode-editor-font-family)",
                theme: S,
              }),
              v = new n();
            c.loadAddon(v);
            for (const x of i.pending) c.write(x);
            (i.write = (x) => {
              i.pending.push(x), c.write(x);
            }),
              (i.clear = () => {
                (i.pending = []), c.clear();
              }),
              c.open(f),
              v.fit(),
              (a.current = { terminal: c, fitAddon: v });
          })(),
          () => {
            (i.clear = l), (i.write = g);
          }
        );
      }, [d, a, t, i, s]),
      K.useEffect(() => {
        setTimeout(() => {
          a.current &&
            (a.current.fitAddon.fit(),
            i.resize(a.current.terminal.cols, a.current.terminal.rows));
        }, 250);
      }, [e, i]),
      r.jsx("div", {
        "data-testid": "output",
        className: "xterm-wrapper",
        style: { flex: "auto" },
        ref: t,
      })
    );
  },
  ct = {
    foreground: "#383a42",
    background: "#fafafa",
    cursor: "#383a42",
    black: "#000000",
    red: "#e45649",
    green: "#50a14f",
    yellow: "#c18401",
    blue: "#4078f2",
    magenta: "#a626a4",
    cyan: "#0184bc",
    white: "#a0a0a0",
    brightBlack: "#000000",
    brightRed: "#e06c75",
    brightGreen: "#98c379",
    brightYellow: "#d19a66",
    brightBlue: "#4078f2",
    brightMagenta: "#a626a4",
    brightCyan: "#0184bc",
    brightWhite: "#383a42",
    selectionBackground: "#d7d7d7",
    selectionForeground: "#383a42",
  },
  dt = {
    foreground: "#f8f8f2",
    background: "#1e1e1e",
    cursor: "#f8f8f0",
    black: "#000000",
    red: "#ff5555",
    green: "#50fa7b",
    yellow: "#f1fa8c",
    blue: "#bd93f9",
    magenta: "#ff79c6",
    cyan: "#8be9fd",
    white: "#bfbfbf",
    brightBlack: "#4d4d4d",
    brightRed: "#ff6e6e",
    brightGreen: "#69ff94",
    brightYellow: "#ffffa5",
    brightBlue: "#d6acff",
    brightMagenta: "#ff92df",
    brightCyan: "#a4ffff",
    brightWhite: "#e6e6e6",
    selectionBackground: "#44475a",
    selectionForeground: "#f8f8f2",
  },
  ut = ({
    filterText: i,
    setFilterText: e,
    statusFilters: t,
    setStatusFilters: s,
    projectFilters: o,
    setProjectFilters: d,
    testModel: a,
    runTests: g,
  }) => {
    const [l, m] = h.useState(!1),
      n = h.useRef(null);
    h.useEffect(() => {
      var c;
      (c = n.current) == null || c.focus();
    }, []);
    const f =
        [...t.entries()]
          .filter(([c, v]) => v)
          .map(([c]) => c)
          .join(" ") || "all",
      S =
        [...o.entries()]
          .filter(([c, v]) => v)
          .map(([c]) => c)
          .join(" ") || "all";
    return r.jsxs("div", {
      className: "filters",
      children: [
        r.jsx(Xe, {
          expanded: l,
          setExpanded: m,
          title: r.jsx("input", {
            ref: n,
            type: "search",
            placeholder: "Filter (e.g. text, @tag)",
            spellCheck: !1,
            value: i,
            onChange: (c) => {
              e(c.target.value);
            },
            onKeyDown: (c) => {
              c.key === "Enter" && g();
            },
          }),
        }),
        r.jsxs("div", {
          className: "filter-summary",
          title:
            "Status: " +
            f +
            `
Projects: ` +
            S,
          onClick: () => m(!l),
          children: [
            r.jsx("span", { className: "filter-label", children: "Status:" }),
            " ",
            f,
            r.jsx("span", { className: "filter-label", children: "Projects:" }),
            " ",
            S,
          ],
        }),
        l &&
          r.jsxs("div", {
            className: "hbox",
            style: { marginLeft: 14, maxHeight: 200, overflowY: "auto" },
            children: [
              r.jsx("div", {
                className: "filter-list",
                role: "list",
                "data-testid": "status-filters",
                children: [...t.entries()].map(([c, v]) =>
                  r.jsx(
                    "div",
                    {
                      className: "filter-entry",
                      role: "listitem",
                      children: r.jsxs("label", {
                        children: [
                          r.jsx("input", {
                            type: "checkbox",
                            checked: v,
                            onClick: () => {
                              const x = new Map(t);
                              x.set(c, !x.get(c)), s(x);
                            },
                          }),
                          r.jsx("div", { children: c }),
                        ],
                      }),
                    },
                    c,
                  ),
                ),
              }),
              r.jsx("div", {
                className: "filter-list",
                role: "list",
                "data-testid": "project-filters",
                children: [...o.entries()].map(([c, v]) =>
                  r.jsx(
                    "div",
                    {
                      className: "filter-entry",
                      role: "listitem",
                      children: r.jsxs("label", {
                        children: [
                          r.jsx("input", {
                            type: "checkbox",
                            checked: v,
                            onClick: () => {
                              var C;
                              const x = new Map(o);
                              x.set(c, !x.get(c)), d(x);
                              const R =
                                (C = a == null ? void 0 : a.config) == null
                                  ? void 0
                                  : C.configFile;
                              R &&
                                we.setObject(
                                  R + ":projects",
                                  [...x.entries()]
                                    .filter(([j, W]) => W)
                                    .map(([j]) => j),
                                );
                            },
                          }),
                          r.jsx("div", { children: c || "untitled" }),
                        ],
                      }),
                    },
                    c,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  },
  ht = ({ tag: i, style: e, onClick: t }) =>
    r.jsx("span", {
      className: ae("tag", `tag-color-${ft(i)}`),
      onClick: t,
      style: { margin: "6px 0 0 6px", ...e },
      title: `Click to filter by tag: ${i}`,
      children: i,
    });
function ft(i) {
  let e = 0;
  for (let t = 0; t < i.length; t++) e = i.charCodeAt(t) + ((e << 8) - e);
  return Math.abs(e % 6);
}
const pt = Je,
  gt = ({
    filterText: i,
    testModel: e,
    testServerConnection: t,
    testTree: s,
    runTests: o,
    runningState: d,
    watchAll: a,
    watchedTreeIds: g,
    setWatchedTreeIds: l,
    isLoading: m,
    onItemSelected: n,
    requestedCollapseAllCount: f,
    requestedExpandAllCount: S,
    setFilterText: c,
    onRevealSource: v,
  }) => {
    const [x, R] = h.useState({ expandedItems: new Map() }),
      [C, j] = h.useState(),
      [W, L] = h.useState(f),
      [$, N] = h.useState(S);
    h.useEffect(() => {
      if (W !== f) {
        x.expandedItems.clear();
        for (const b of s.flatTreeItems()) x.expandedItems.set(b.id, !1);
        L(f), j(void 0), R({ ...x });
        return;
      }
      if ($ !== S) {
        x.expandedItems.clear();
        for (const b of s.flatTreeItems()) x.expandedItems.set(b.id, !0);
        N(S), j(void 0), R({ ...x });
        return;
      }
      if (!d || d.itemSelectedByUser) return;
      let u;
      const E = (b) => {
        var P;
        b.children.forEach(E),
          !u &&
            b.status === "failed" &&
            ((b.kind === "test" && d.testIds.has(b.test.id)) ||
              (b.kind === "case" &&
                d.testIds.has((P = b.tests[0]) == null ? void 0 : P.id))) &&
            (u = b);
      };
      E(s.rootItem), u && j(u.id);
    }, [d, j, s, W, L, f, $, N, S, x, R]);
    const { selectedTreeItem: z } = h.useMemo(() => {
      if (!e) return { selectedTreeItem: void 0 };
      const u = C ? s.treeItemById(C) : void 0,
        E = mt(u, e);
      let b;
      return (
        (u == null ? void 0 : u.kind) === "test"
          ? (b = u.test)
          : (u == null ? void 0 : u.kind) === "case" &&
            u.tests.length === 1 &&
            (b = u.tests[0]),
        n({ treeItem: u, testCase: b, testFile: E }),
        { selectedTreeItem: u }
      );
    }, [n, C, e, s]);
    h.useEffect(() => {
      if (!m)
        if (a) t == null || t.watchNoReply({ fileNames: s.fileNames() });
        else {
          const u = new Set();
          for (const E of g.value) {
            const b = s.treeItemById(E),
              P = b == null ? void 0 : b.location.file;
            P && u.add(P);
          }
          t == null || t.watchNoReply({ fileNames: [...u] });
        }
    }, [m, s, a, g, t]);
    const G = (u) => {
        j(u.id), o("bounce-if-busy", s.collectTestIds(u));
      },
      H = (u, E) => {
        if ((u.preventDefault(), u.stopPropagation(), u.metaKey || u.ctrlKey)) {
          const b = i.split(" ");
          b.includes(E)
            ? c(
                b
                  .filter((P) => P !== E)
                  .join(" ")
                  .trim(),
              )
            : c((i + " " + E).trim());
        } else
          c(
            (
              i
                .split(" ")
                .filter((b) => !b.startsWith("@"))
                .join(" ") +
              " " +
              E
            ).trim(),
          );
      };
    return r.jsx(pt, {
      name: "tests",
      treeState: x,
      setTreeState: R,
      rootItem: s.rootItem,
      dataTestId: "test-tree",
      render: (u) => {
        const E = u.id.replace(/[^\w\d-_]/g, "-"),
          b = E + "-label",
          P = E + "-time";
        return r.jsxs("div", {
          className: "hbox ui-mode-tree-item",
          "aria-labelledby": `${b} ${P}`,
          children: [
            r.jsxs("div", {
              id: b,
              className: "ui-mode-tree-item-title",
              children: [
                r.jsx("span", { children: u.title }),
                u.kind === "case"
                  ? u.tags.map((q) =>
                      r.jsx(
                        ht,
                        { tag: q.slice(1), onClick: (J) => H(J, q) },
                        q,
                      ),
                    )
                  : null,
              ],
            }),
            !!u.duration &&
              u.status !== "skipped" &&
              r.jsx("div", {
                id: P,
                className: "ui-mode-tree-item-time",
                children: Ae(u.duration),
              }),
            r.jsxs(Y, {
              noMinHeight: !0,
              noShadow: !0,
              children: [
                r.jsx(D, {
                  icon: "play",
                  title: "Run",
                  onClick: () => G(u),
                  disabled: !!d && !d.completed,
                }),
                r.jsx(D, {
                  icon: "go-to-file",
                  title: "Show source",
                  onClick: v,
                  style:
                    u.kind === "group" && u.subKind === "folder"
                      ? { visibility: "hidden" }
                      : {},
                }),
                !a &&
                  r.jsx(D, {
                    icon: "eye",
                    title: "Watch",
                    onClick: () => {
                      g.value.has(u.id)
                        ? g.value.delete(u.id)
                        : g.value.add(u.id),
                        l({ ...g });
                    },
                    toggled: g.value.has(u.id),
                  }),
              ],
            }),
          ],
        });
      },
      icon: (u) => Ge(u.status),
      title: (u) => u.title,
      selectedItem: z,
      onAccepted: G,
      onSelected: (u) => {
        d && (d.itemSelectedByUser = !0), j(u.id);
      },
      isError: (u) => (u.kind === "group" ? u.hasLoadErrors : !1),
      autoExpandDepth: i ? 5 : 1,
      noItemsMessage: m ? "Loading…" : "No tests",
    });
  };
function mt(i, e) {
  if (!(!i || !e))
    return {
      file: i.location.file,
      line: i.location.line,
      column: i.location.column,
      source: {
        errors: e.loadErrors
          .filter((t) => {
            var s;
            return (
              ((s = t.location) == null ? void 0 : s.file) === i.location.file
            );
          })
          .map((t) => ({ line: t.location.line, message: t.message })),
        content: void 0,
      },
    };
}
function _t(i) {
  return `.playwright-artifacts-${i}`;
}
const wt = ({
    item: i,
    rootDir: e,
    onOpenExternally: t,
    revealSource: s,
    pathSeparator: o,
  }) => {
    var f, S;
    const [d, a] = h.useState(),
      [g, l] = h.useState(0),
      m = h.useRef(null),
      { outputDir: n } = h.useMemo(
        () => ({ outputDir: i.testCase ? vt(i.testCase) : void 0 }),
        [i],
      );
    return (
      h.useEffect(() => {
        var R, C;
        m.current && clearTimeout(m.current);
        const c = (R = i.testCase) == null ? void 0 : R.results[0];
        if (!c) {
          a(void 0);
          return;
        }
        const v =
          c && c.duration >= 0 && c.attachments.find((j) => j.name === "trace");
        if (v && v.path) {
          ge(v.path).then((j) => a({ model: j, isLive: !1 }));
          return;
        }
        if (!n) {
          a(void 0);
          return;
        }
        const x = [
          n,
          _t(c.workerIndex),
          "traces",
          `${(C = i.testCase) == null ? void 0 : C.id}.json`,
        ].join(o);
        return (
          (m.current = setTimeout(async () => {
            try {
              const j = await ge(x);
              a({ model: j, isLive: !0 });
            } catch {
              a(void 0);
            } finally {
              l(g + 1);
            }
          }, 500)),
          () => {
            m.current && clearTimeout(m.current);
          }
        );
      }, [n, i, a, g, l, o]),
      r.jsx(
        Ze,
        {
          model: d == null ? void 0 : d.model,
          showSourcesFirst: !0,
          rootDir: e,
          fallbackLocation: i.testFile,
          isLive: d == null ? void 0 : d.isLive,
          status: (f = i.treeItem) == null ? void 0 : f.status,
          annotations:
            ((S = i.testCase) == null ? void 0 : S.annotations) || [],
          onOpenExternally: t,
          revealSource: s,
        },
        "workbench",
      )
    );
  },
  vt = (i) => {
    var e;
    for (let t = i.parent; t; t = t.parent)
      if (t.project()) return (e = t.project()) == null ? void 0 : e.outputDir;
  };
async function ge(i) {
  const e = new URLSearchParams();
  e.set("trace", i), e.set("limit", "1");
  const s = await (await fetch(`contexts?${e.toString()}`)).json();
  return new ze(s);
}
const xt = ({ settings: i }) =>
  r.jsx("div", {
    className: "vbox settings-view",
    children: i.map(({ value: e, set: t, title: s }) =>
      r.jsx(
        "div",
        {
          className: "setting",
          children: r.jsxs("label", {
            children: [
              r.jsx("input", {
                type: "checkbox",
                checked: e,
                onClick: () => t(!e),
              }),
              s,
            ],
          }),
        },
        s,
      ),
    ),
  });
let me = { cols: 80, rows: 24 };
const A = {
    pending: [],
    clear: () => {},
    write: (i) => A.pending.push(i),
    resize: () => {},
  },
  O = new URLSearchParams(window.location.search),
  St = O.get("ws"),
  xe = new URL(`../${St}`, window.location.toString());
xe.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const I = {
  args: O.getAll("arg"),
  grep: O.get("grep") || void 0,
  grepInvert: O.get("grepInvert") || void 0,
  projects: O.getAll("project"),
  workers: O.get("workers") || void 0,
  headed: O.has("headed"),
  updateSnapshots: O.get("updateSnapshots") || void 0,
  reporters: O.has("reporter") ? O.getAll("reporter") : void 0,
  pathSeparator: O.get("pathSeparator") || "/",
};
I.updateSnapshots &&
  !["all", "none", "missing"].includes(I.updateSnapshots) &&
  (I.updateSnapshots = void 0);
const _e = navigator.platform === "MacIntel",
  bt = ({}) => {
    var pe;
    const [i, e] = h.useState(""),
      [t, s] = h.useState(!1),
      [o, d] = h.useState(!1),
      [a, g] = h.useState(
        new Map([
          ["passed", !1],
          ["failed", !1],
          ["skipped", !1],
        ]),
      ),
      [l, m] = h.useState(new Map()),
      [n, f] = h.useState(),
      [S, c] = h.useState(),
      [v, x] = h.useState({}),
      [R, C] = h.useState(new Set()),
      [j, W] = h.useState(!1),
      [L, $] = h.useState(),
      N = L && !L.completed,
      [z, G] = Ve("watch-all", !1),
      [H, u] = h.useState({ value: new Set() }),
      E = h.useRef(Promise.resolve()),
      b = h.useRef(new Set()),
      [P, q] = h.useState(0),
      [J, Se] = h.useState(0),
      [be, Te] = h.useState(!1),
      [le, ce] = h.useState(!0),
      [w, ke] = h.useState(),
      [Z, je] = h.useState(),
      [ee, ye] = h.useState(!1);
    h.useState(!1);
    const [Ee, de] = h.useState(!1),
      Ie = h.useCallback(() => de(!0), [de]),
      Re = !1,
      [ue, Tt] = h.useState(!1),
      [he, kt] = h.useState(!1),
      [fe, jt] = h.useState(!1),
      [Ce, Be] = Ke(),
      Ne = h.useRef(null),
      te = h.useCallback(() => {
        ke(new Ye(new Qe(xe)));
      }, []);
    h.useEffect(() => {
      var _;
      (_ = Ne.current) == null || _.focus(), W(!0), te();
    }, [te]),
      h.useEffect(() => {
        if (!w) return;
        const _ = [
          w.onStdio((p) => {
            if (p.buffer) {
              const T = atob(p.buffer);
              A.write(T);
            } else A.write(p.text);
            p.type === "stderr" && d(!0);
          }),
          w.onClose(() => Te(!0)),
        ];
        return (
          (A.resize = (p, T) => {
            (me = { cols: p, rows: T }),
              w.resizeTerminalNoReply({ cols: p, rows: T });
          }),
          () => {
            for (const p of _) p.dispose();
          }
        );
      }, [w]),
      h.useEffect(() => {
        if (!w) return;
        let _;
        const p = new at({
          onUpdate: (T) => {
            clearTimeout(_),
              (_ = void 0),
              T
                ? f(p.asModel())
                : _ ||
                  (_ = setTimeout(() => {
                    f(p.asModel());
                  }, 250));
          },
          onError: (T) => {
            A.write(
              (T.stack || T.value || "") +
                `
`,
            ),
              d(!0);
          },
          pathSeparator: I.pathSeparator,
        });
        return (
          je(p),
          f(void 0),
          W(!0),
          u({ value: new Set() }),
          (async () => {
            try {
              await w.initialize({ interceptStdio: !0, watchTestDirs: !0 });
              const { status: T, report: y } = await w.runGlobalSetup({});
              if ((p.processGlobalReport(y), T !== "passed")) return;
              const B = await w.listTests({
                projects: I.projects,
                locations: I.args,
                grep: I.grep,
                grepInvert: I.grepInvert,
              });
              p.processListReport(B.report),
                w.onReport((M) => {
                  p.processTestReportEvent(M);
                });
              const { hasBrowsers: F } = await w.checkBrowsers({});
              ce(F);
            } finally {
              W(!1);
            }
          })(),
          () => {
            clearTimeout(_);
          }
        );
      }, [w]),
      h.useEffect(() => {
        if (!n) return;
        const { config: _, rootSuite: p } = n,
          T = _.configFile
            ? we.getObject(_.configFile + ":projects", void 0)
            : void 0,
          y = new Map(l);
        for (const B of y.keys())
          p.suites.find((F) => F.title === B) || y.delete(B);
        for (const B of p.suites)
          y.has(B.title) ||
            y.set(B.title, !!(T != null && T.includes(B.title)));
        !T &&
          y.size &&
          ![...y.values()].includes(!0) &&
          y.set(y.entries().next().value[0], !0),
          (l.size !== y.size || [...l].some(([B, F]) => y.get(B) !== F)) &&
            m(y);
      }, [l, n]),
      h.useEffect(() => {
        N && n != null && n.progress ? c(n.progress) : n || c(void 0);
      }, [n, N]);
    const { testTree: Pe } = h.useMemo(() => {
        if (!n)
          return {
            testTree: new ne("", new Q("", "root"), [], l, I.pathSeparator),
          };
        const _ = new ne("", n.rootSuite, n.loadErrors, l, I.pathSeparator);
        return (
          _.filterTree(i, a, N ? (L == null ? void 0 : L.testIds) : void 0),
          _.sortAndPropagateStatus(),
          _.shortenRoot(),
          _.flattenForSingleProject(),
          C(_.testIds()),
          { testTree: _ }
        );
      }, [i, n, a, l, C, L, N]),
      V = h.useCallback(
        (_, p) => {
          !w ||
            !n ||
            (_ === "bounce-if-busy" && N) ||
            ((b.current = new Set([...b.current, ...p])),
            (E.current = E.current.then(async () => {
              var B, F, M;
              const T = b.current;
              if (((b.current = new Set()), !T.size)) return;
              {
                for (const k of ((B = n.rootSuite) == null
                  ? void 0
                  : B.allTests()) || [])
                  if (T.has(k.id)) {
                    k.results = [];
                    const U = k._createTestResult("pending");
                    U[X] = "scheduled";
                  }
                f({ ...n });
              }
              const y = "  [" + new Date().toLocaleTimeString() + "]";
              A.write(
                "\x1B[2m—".repeat(Math.max(0, me.cols - y.length)) +
                  y +
                  "\x1B[22m",
              ),
                c({ total: 0, passed: 0, failed: 0, skipped: 0 }),
                $({ testIds: T }),
                await w.runTests({
                  locations: I.args,
                  grep: I.grep,
                  grepInvert: I.grepInvert,
                  testIds: [...T],
                  projects: [...l].filter(([k, U]) => U).map(([k]) => k),
                  ...(ue ? { workers: "1" } : {}),
                  ...(he ? { headed: !0 } : {}),
                  ...(fe ? { updateSnapshots: "all" } : {}),
                  reporters: I.reporters,
                  trace: "on",
                });
              for (const k of ((F = n.rootSuite) == null
                ? void 0
                : F.allTests()) || [])
                ((M = k.results[0]) == null ? void 0 : M.duration) === -1 &&
                  (k.results = []);
              f({ ...n }), $((k) => (k ? { ...k, completed: !0 } : void 0));
            })));
        },
        [l, N, n, w, ue, he, fe],
      );
    h.useEffect(() => {
      if (!w || !Z) return;
      const _ = w.onTestFilesChanged(async (p) => {
        if (
          ((E.current = E.current.then(async () => {
            W(!0);
            try {
              const M = await w.listTests({
                projects: I.projects,
                locations: I.args,
                grep: I.grep,
                grepInvert: I.grepInvert,
              });
              Z.processListReport(M.report);
            } catch (M) {
              console.log(M);
            } finally {
              W(!1);
            }
          })),
          await E.current,
          p.testFiles.length === 0)
        )
          return;
        const T = Z.asModel(),
          y = new ne("", T.rootSuite, T.loadErrors, l, I.pathSeparator),
          B = [],
          F = new Set(p.testFiles);
        if (z) {
          const M = (k) => {
            const U = k.location.file;
            U && F.has(U) && B.push(...y.collectTestIds(k)),
              k.kind === "group" &&
                k.subKind === "folder" &&
                k.children.forEach(M);
          };
          M(y.rootItem);
        } else
          for (const M of H.value) {
            const k = y.treeItemById(M),
              U = k == null ? void 0 : k.location.file;
            U && F.has(U) && B.push(...y.collectTestIds(k));
          }
        V("queue-if-busy", new Set(B));
      });
      return () => _.dispose();
    }, [V, w, z, H, Z, l]),
      h.useEffect(() => {
        if (!w) return;
        const _ = (p) => {
          p.code === "Backquote" && p.ctrlKey
            ? (p.preventDefault(), s(!t))
            : p.code === "F5" && p.shiftKey
              ? (p.preventDefault(), w == null || w.stopTestsNoReply({}))
              : p.code === "F5" && (p.preventDefault(), V("bounce-if-busy", R));
        };
        return (
          addEventListener("keydown", _),
          () => {
            removeEventListener("keydown", _);
          }
        );
      }, [V, te, w, R, t]);
    const ie = h.useRef(null),
      Me = h.useCallback((_) => {
        var p;
        _.preventDefault(),
          _.stopPropagation(),
          (p = ie.current) == null || p.showModal();
      }, []),
      re = h.useCallback((_) => {
        var p;
        _.preventDefault(),
          _.stopPropagation(),
          (p = ie.current) == null || p.close();
      }, []),
      De = h.useCallback(
        (_) => {
          re(_),
            s(!0),
            w == null ||
              w.installBrowsers({}).then(async () => {
                s(!1);
                const { hasBrowsers: p } = await (w == null
                  ? void 0
                  : w.checkBrowsers({}));
                ce(p);
              });
        },
        [re, w],
      );
    return r.jsxs("div", {
      className: "vbox ui-mode",
      children: [
        !le &&
          r.jsxs("dialog", {
            ref: ie,
            children: [
              r.jsxs("div", {
                className: "title",
                children: [
                  r.jsx("span", { className: "codicon codicon-lightbulb" }),
                  "Install browsers",
                ],
              }),
              r.jsxs("div", {
                className: "body",
                children: [
                  "Playwright did not find installed browsers.",
                  r.jsx("br", {}),
                  "Would you like to run `playwright install`?",
                  r.jsx("br", {}),
                  r.jsx("button", {
                    className: "button",
                    onClick: De,
                    children: "Install",
                  }),
                  r.jsx("button", {
                    className: "button secondary",
                    onClick: re,
                    children: "Dismiss",
                  }),
                ],
              }),
            ],
          }),
        be &&
          r.jsxs("div", {
            className: "disconnected",
            children: [
              r.jsx("div", {
                className: "title",
                children: "UI Mode disconnected",
              }),
              r.jsxs("div", {
                children: [
                  r.jsx("a", {
                    href: "#",
                    onClick: () => (window.location.href = "/"),
                    children: "Reload the page",
                  }),
                  " to reconnect",
                ],
              }),
            ],
          }),
        r.jsx($e, {
          sidebarSize: 250,
          minSidebarSize: 150,
          orientation: "horizontal",
          sidebarIsFirst: !0,
          settingName: "testListSidebar",
          main: r.jsxs("div", {
            className: "vbox",
            children: [
              r.jsxs("div", {
                className: ae("vbox", !t && "hidden"),
                children: [
                  r.jsxs(Y, {
                    children: [
                      r.jsx("div", {
                        className: "section-title",
                        style: { flex: "none" },
                        children: "Output",
                      }),
                      r.jsx(D, {
                        icon: "circle-slash",
                        title: "Clear output",
                        onClick: () => {
                          A.clear(), d(!1);
                        },
                      }),
                      r.jsx("div", { className: "spacer" }),
                      r.jsx(D, {
                        icon: "close",
                        title: "Close",
                        onClick: () => s(!1),
                      }),
                    ],
                  }),
                  r.jsx(lt, { source: A }),
                ],
              }),
              r.jsx("div", {
                className: ae("vbox", t && "hidden"),
                children: r.jsx(wt, {
                  pathSeparator: I.pathSeparator,
                  item: v,
                  rootDir:
                    (pe = n == null ? void 0 : n.config) == null
                      ? void 0
                      : pe.rootDir,
                  revealSource: Ee,
                  onOpenExternally: (_) =>
                    w == null
                      ? void 0
                      : w.openNoReply({
                          location: {
                            file: _.file,
                            line: _.line,
                            column: _.column,
                          },
                        }),
                }),
              }),
            ],
          }),
          sidebar: r.jsxs("div", {
            className: "vbox ui-mode-sidebar",
            children: [
              r.jsxs(Y, {
                noShadow: !0,
                noMinHeight: !0,
                children: [
                  r.jsx("img", {
                    src: "playwright-logo.svg",
                    alt: "Playwright logo",
                  }),
                  r.jsx("div", {
                    className: "section-title",
                    children: "Playwright",
                  }),
                  r.jsx(D, {
                    icon: "refresh",
                    title: "Reload",
                    onClick: () => te(),
                    disabled: N || j,
                  }),
                  r.jsxs("div", {
                    style: { position: "relative" },
                    children: [
                      r.jsx(D, {
                        icon: "terminal",
                        title: "Toggle output — " + (_e ? "⌃`" : "Ctrl + `"),
                        toggled: t,
                        onClick: () => {
                          s(!t);
                        },
                      }),
                      o &&
                        r.jsx("div", {
                          title: "Output contains error",
                          style: {
                            position: "absolute",
                            top: 2,
                            right: 2,
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            backgroundColor:
                              "var(--vscode-notificationsErrorIcon-foreground)",
                          },
                        }),
                    ],
                  }),
                  !le &&
                    r.jsx(D, {
                      icon: "lightbulb-autofix",
                      style: { color: "var(--vscode-list-warningForeground)" },
                      title: "Playwright browsers are missing",
                      onClick: Me,
                    }),
                ],
              }),
              r.jsx(ut, {
                filterText: i,
                setFilterText: e,
                statusFilters: a,
                setStatusFilters: g,
                projectFilters: l,
                setProjectFilters: m,
                testModel: n,
                runTests: () => V("bounce-if-busy", R),
              }),
              r.jsxs(Y, {
                noMinHeight: !0,
                children: [
                  !N &&
                    !S &&
                    r.jsx("div", {
                      className: "section-title",
                      children: "Tests",
                    }),
                  !N &&
                    S &&
                    r.jsx("div", {
                      "data-testid": "status-line",
                      className: "status-line",
                      children: r.jsxs("div", {
                        children: [
                          S.passed,
                          "/",
                          S.total,
                          " passed (",
                          ((S.passed / S.total) * 100) | 0,
                          "%)",
                        ],
                      }),
                    }),
                  N &&
                    S &&
                    r.jsx("div", {
                      "data-testid": "status-line",
                      className: "status-line",
                      children: r.jsxs("div", {
                        children: [
                          "Running ",
                          S.passed,
                          "/",
                          L.testIds.size,
                          " passed (",
                          ((S.passed / L.testIds.size) * 100) | 0,
                          "%)",
                        ],
                      }),
                    }),
                  r.jsx(D, {
                    icon: "play",
                    title: "Run all — F5",
                    onClick: () => V("bounce-if-busy", R),
                    disabled: N || j,
                  }),
                  r.jsx(D, {
                    icon: "debug-stop",
                    title: "Stop — " + (_e ? "⇧F5" : "Shift + F5"),
                    onClick: () => (w == null ? void 0 : w.stopTests({})),
                    disabled: !N || j,
                  }),
                  r.jsx(D, {
                    icon: "eye",
                    title: "Watch all",
                    toggled: z,
                    onClick: () => {
                      u({ value: new Set() }), G(!z);
                    },
                  }),
                  r.jsx(D, {
                    icon: "collapse-all",
                    title: "Collapse all",
                    onClick: () => {
                      q(P + 1);
                    },
                  }),
                  r.jsx(D, {
                    icon: "expand-all",
                    title: "Expand all",
                    onClick: () => {
                      Se(J + 1);
                    },
                  }),
                ],
              }),
              r.jsx(gt, {
                filterText: i,
                testModel: n,
                testTree: Pe,
                testServerConnection: w,
                runningState: L,
                runTests: V,
                onItemSelected: x,
                watchAll: z,
                watchedTreeIds: H,
                setWatchedTreeIds: u,
                isLoading: j,
                requestedCollapseAllCount: P,
                requestedExpandAllCount: J,
                setFilterText: e,
                onRevealSource: Ie,
              }),
              Re,
              r.jsxs(Y, {
                noShadow: !0,
                noMinHeight: !0,
                className: "settings-toolbar",
                onClick: () => ye(!ee),
                children: [
                  r.jsx("span", {
                    className: `codicon codicon-${ee ? "chevron-down" : "chevron-right"}`,
                    style: { marginLeft: 5 },
                    title: ee ? "Hide Settings" : "Show Settings",
                  }),
                  r.jsx("div", {
                    className: "section-title",
                    children: "Settings",
                  }),
                ],
              }),
              ee &&
                r.jsx(xt, {
                  settings: [{ value: Ce, set: Be, title: "Dark mode" }],
                }),
            ],
          }),
        }),
      ],
    });
  };
(async () => {
  if ((He(), window.location.protocol !== "file:")) {
    if (
      (window.location.href.includes("isUnderTest=true") &&
        (await new Promise((i) => setTimeout(i, 1e3))),
      !navigator.serviceWorker)
    )
      throw new Error(`Service workers are not supported.
Make sure to serve the website (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js"),
      navigator.serviceWorker.controller ||
        (await new Promise((i) => {
          navigator.serviceWorker.oncontrollerchange = () => i();
        })),
      setInterval(function () {
        fetch("ping");
      }, 1e4);
  }
  qe(document.querySelector("#root")).render(r.jsx(bt, {}));
})();