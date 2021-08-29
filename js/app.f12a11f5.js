(function (e) {
  function t(t) {
    for (
      var n, c, i = t[0], s = t[1], l = t[2], d = 0, p = [];
      d < i.length;
      d++
    )
      (c = i[d]),
        Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]),
        (o[c] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    u && u(t);
    while (p.length) p.shift()();
    return a.push.apply(a, l || []), r();
  }
  function r() {
    for (var e, t = 0; t < a.length; t++) {
      for (var r = a[t], n = !0, i = 1; i < r.length; i++) {
        var s = r[i];
        0 !== o[s] && (n = !1);
      }
      n && (a.splice(t--, 1), (e = c((c.s = r[0]))));
    }
    return e;
  }
  var n = {},
    o = { app: 0 },
    a = [];
  function c(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, c), (r.l = !0), r.exports;
  }
  (c.m = e),
    (c.c = n),
    (c.d = function (e, t, r) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (c.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          c.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/metronome/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var l = 0; l < i.length; l++) t(i[l]);
  var u = s;
  a.push([0, "chunk-vendors"]), r();
})({
  0: function (e, t, r) {
    e.exports = r("56d7");
  },
  "1ace": function (e, t, r) {},
  2387: function (e, t, r) {},
  "2f4c": function (e, t, r) {},
  4130: function (e, t, r) {},
  4353: function (e, t, r) {
    "use strict";
    r("1ace");
  },
  "56d7": function (e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var n = r("7a23");
    function o(e, t, r, o, a, c) {
      var i = Object(n["m"])("Metronome");
      return Object(n["j"])(), Object(n["c"])(i);
    }
    function a(e, t, r, o, a, c) {
      var i = this,
        s = Object(n["m"])("MetroDisplay"),
        l = Object(n["m"])("Sound");
      return (
        Object(n["j"])(),
        Object(n["d"])(
          n["a"],
          null,
          [
            Object(n["g"])(
              s,
              {
                onPlay: c.play,
                onStop:
                  t[0] ||
                  (t[0] = function (e) {
                    return i.$refs.sound.stop();
                  }),
                onInit:
                  t[1] ||
                  (t[1] = function (e) {
                    return i.$refs.sound.init();
                  }),
              },
              null,
              8,
              ["onPlay"]
            ),
            Object(n["g"])(l, { ref: "sound" }, null, 512),
          ],
          64
        )
      );
    }
    Object(n["l"])("data-v-5c96d52a");
    var c = Object(n["f"])(
        '<defs data-v-5c96d52a><filter id="pencil" data-v-5c96d52a><feTurbulence baseFrequency="0.03" numOctaves="6" type="fractalNoise" data-v-5c96d52a></feTurbulence><feDisplacementMap scale="4" in="SourceGraphic" xChannelSelector="R" yChannelSelector="G" data-v-5c96d52a></feDisplacementMap><feGaussianBlur stdDeviation="0.5" data-v-5c96d52a></feGaussianBlur></filter><clipPath id="case" data-v-5c96d52a><path d="M 0 1 C 2 0 3 0 5 1 L 5 15 L 0 15 L 0 1 Z" data-v-5c96d52a></path></clipPath></defs><path d="M 0 1 C 2 0 3 0 5 1 L 5 15 L 0 15 L 0 1 Z" fill="rgb(255 168 168 / 7%)" filter="blur(0.3px)" stroke="rgb(0 0 0)" stroke-width="0.1" stroke-linejoin="round" clip-path="url(#case)" data-v-5c96d52a></path><path d="M 0 1 C 2 0 3 0 5 1 L 5 15 L 0 15 L 0 1 Z" fill="none" stroke="#5f5f5f" filter="blur(0.03px)" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path><circle cx="0.5" cy="1.3" r="0.25" fill="#E5E5E5" stroke="#111" stroke-width="0.02" data-v-5c96d52a></circle><circle cx="4.5" cy="1.3" r="0.25" fill="#E5E5E5" stroke="#111" stroke-width="0.02" data-v-5c96d52a></circle><circle cx="1" cy="11.8" r="0.3" data-v-5c96d52a></circle><circle cx="2" cy="11.8" r="0.3" data-v-5c96d52a></circle><circle cx="3" cy="11.8" r="0.3" data-v-5c96d52a></circle><circle cx="4" cy="11.8" r="0.3" data-v-5c96d52a></circle><circle cx="1" cy="12.8" r="0.3" data-v-5c96d52a></circle><circle cx="2" cy="12.8" r="0.3" data-v-5c96d52a></circle><circle cx="3" cy="12.8" r="0.3" data-v-5c96d52a></circle><circle cx="4" cy="12.8" r="0.3" data-v-5c96d52a></circle><circle cx="1" cy="13.8" r="0.3" data-v-5c96d52a></circle><circle cx="2" cy="13.8" r="0.3" data-v-5c96d52a></circle><circle cx="3" cy="13.8" r="0.3" data-v-5c96d52a></circle><circle cx="4" cy="13.8" r="0.3" data-v-5c96d52a></circle><path d="M 1 2 L4 2z" stroke="#999" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path><path d="M 1 2.5 L4 2.5z" stroke="#999" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path><path d="M 1 4 L4 4z" stroke="#999" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path><path d="M 1 6 L4 6" stroke="#999" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path><path d="M 1 6.8 L4 6.8z" stroke="#999" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path><path d="M 1 8 L4 8z" stroke="#999" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path><path d="M 1 9.2 L4 9.2z" stroke="#999" stroke-width="0.1" stroke-linejoin="round" data-v-5c96d52a></path>',
        24
      ),
      i = Object(n["e"])(
        "path",
        {
          d: "M 2.2 1 C 2.2 0.8 2.8 0.8 2.8 1 L 2.8 14 L 2.2 14 L 2.2 1 Z",
          fill: "#EAEAEA",
          stroke: "#555",
          "stroke-width": "0.1",
          "stroke-linejoin": "round",
          filter: "blur(0.01px)",
        },
        null,
        -1
      ),
      s = {
        ref: "play",
        x: "0.2",
        y: "12.3",
        width: "4.6",
        height: "2.3",
        rx: "1.2",
        fill: "#E5E5E5",
        stroke: "#555",
        "stroke-width": "0.1",
        filter: "blur(0.01px)",
      },
      l = Object(n["e"])(
        "rect",
        {
          id: "pivot",
          x: "0.2",
          y: "10",
          width: "4.6",
          height: "1",
          rx: "0.2",
          fill: "#FFF",
          stroke: "#000",
          "stroke-width": "0.1",
        },
        null,
        -1
      ),
      u = Object(n["e"])(
        "text",
        {
          x: "0",
          y: "10.8",
          "font-size": "0.2",
          "text-anchor": "middle",
          class: "metro",
        },
        " METRO ",
        -1
      );
    function d(e, t, r, o, a, d) {
      return (
        Object(n["j"])(),
        Object(n["d"])(
          n["a"],
          null,
          [
            (Object(n["j"])(),
            Object(n["d"])(
              "svg",
              {
                id: "metro",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 5 15",
                onMousedown:
                  t[0] ||
                  (t[0] = function () {
                    return d.mouseDown && d.mouseDown.apply(d, arguments);
                  }),
                onMousemove:
                  t[1] ||
                  (t[1] = function () {
                    return d.mouseMove && d.mouseMove.apply(d, arguments);
                  }),
                onMouseup:
                  t[2] ||
                  (t[2] = function () {
                    return d.mouseUp && d.mouseUp.apply(d, arguments);
                  }),
                onMouseleave:
                  t[3] ||
                  (t[3] = function () {
                    return d.mouseLeave && d.mouseLeave.apply(d, arguments);
                  }),
              },
              [
                c,
                Object(n["e"])(
                  "g",
                  {
                    id: "pendulum",
                    class: Object(n["h"])(a.active && "active"),
                    style: Object(n["i"])(a.speed),
                  },
                  [
                    i,
                    Object(n["e"])("rect", s, null, 512),
                    Object(n["e"])("g", null, [
                      Object(n["e"])(
                        "rect",
                        {
                          ref: "tempo",
                          x: "1.25",
                          y: "1",
                          style: Object(n["i"])({
                            transform: "translateY(".concat(
                              a.tempoTransform / 20,
                              "px)"
                            ),
                          }),
                          width: "2.5",
                          height: "2.25",
                          rx: "0.2",
                          ry: "0.5",
                          fill: "#EEE",
                          stroke: "#555",
                          "stroke-width": "0.1",
                          filter: "blur(0.01px)",
                        },
                        null,
                        4
                      ),
                    ]),
                  ],
                  6
                ),
                l,
                u,
              ],
              32
            )),
            Object(n["e"])("div", null, Object(n["n"])(a.bpm) + " BPM", 1),
            Object(n["e"])("p", null, Object(n["n"])(a.tempoName), 1),
            Object(n["e"])(
              "p",
              { class: Object(n["h"])(a.active && "hide") },
              " Slide the pendulum weight to adjust the tempo, click the base to start/stop... ",
              2
            ),
          ],
          64
        )
      );
    }
    Object(n["k"])();
    r("7db0"), r("b0c0");
    var p = { startY: null, currentY: null },
      f = [
        { name: "Largo", min: 0, max: 50 },
        { name: "Adagio", min: 51, max: 77 },
        { name: "Moderato", min: 78, max: 97 },
        { name: "Allegro", min: 98, max: 132 },
        { name: "Vivace", min: 133, max: 150 },
        { name: "Presto", min: 151, max: 300 },
      ];
    function m(e) {
      var t = f.find(function (t) {
        return e >= t.min && e <= t.max;
      });
      return (null === t || void 0 === t ? void 0 : t.name) || "tempo";
    }
    var h = {
      name: "Metro",
      props: { msg: String },
      data: function () {
        return {
          tempo: { y: 0 },
          bpm: 120,
          tempoTransform: 57,
          swing: { animation: "metronome 1s ease-in-out infinite" },
          active: !1,
          speed: { animationDuration: "1s" },
          ready: !1,
          tempoName: m(120),
        };
      },
      methods: {
        mouseDown: function (e) {
          if ((this.$emit("init"), this.active))
            return (this.active = !1), this.$emit("stop"), !1;
          e.target === this.$refs.play
            ? ((this.active = !0),
              this.$emit("play", this.bpm),
              (this.ready = !0))
            : e.target === this.$refs.tempo &&
              ((p.startY = e.offsetY), (p.startHandle = this.tempoTransform));
        },
        mouseMove: function (e) {
          if (p.startY) {
            var t = p.startHandle + e.offsetY - p.startY;
            t < 0 ? (t = 0) : t > 130 && (t = 130),
              (this.tempoTransform = t),
              (this.bpm = Math.round(40 + 1.4 * t)),
              (this.speed = { animationDuration: (60 / this.bpm) * 2 + "s" }),
              (this.tempoName = m(this.bpm));
          }
        },
        mouseUp: function () {
          p.startY && (p.startY = null);
        },
        mouseLeave: function () {
          p.startY && (p.startY = null);
        },
      },
    };
    r("f5ac");
    (h.render = d), (h.__scopeId = "data-v-5c96d52a");
    var v = h,
      b = r("1da1"),
      y = (r("96cf"), r("5e54")),
      j = {
        name: "Sound",
        data: function () {
          return { ready: !1, audioX: null, tempo: null };
        },
        props: { msg: String },
        created: function () {
          console.log("created");
        },
        methods: {
          init: function () {
            var e = this;
            return Object(b["a"])(
              regeneratorRuntime.mark(function t() {
                var r, n;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.ready) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", !1);
                      case 2:
                        return (t.next = 4), y["d"]();
                      case 4:
                        console.log("audio is ready"),
                          (r = new y["b"]({
                            urls: {
                              A1: "metro01.mp3",
                              B1: "metro02.mp3",
                              C1: "metro03.mp3",
                              D1: "metro04.mp3",
                              E1: "metro05.mp3",
                              F1: "metro06.mp3",
                              A2: "metro07.mp3",
                              B2: "metro08.mp3",
                              C2: "metro09.mp3",
                              D2: "metro10.mp3",
                              E2: "metro11.mp3",
                              F2: "metro12.mp3",
                            },
                            baseUrl: "/assets/",
                            onload: function () {
                              console.log("sampletastic"), (e.ready = !0);
                            },
                          }).toDestination()),
                          (n = new y["a"](
                            function (e, t) {
                              r.triggerAttackRelease(t, "16n", e);
                            },
                            [
                              "A1",
                              "B1",
                              "C1",
                              "D1",
                              "E1",
                              "F1",
                              "A2",
                              "B2",
                              "C2",
                              "D2",
                              "E2",
                              "F2",
                            ],
                            "up"
                          ).start(0)),
                          (n.interval = "4n"),
                          (e.tempo = n);
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          play: function () {
            var e = arguments,
              t = this;
            return Object(b["a"])(
              regeneratorRuntime.mark(function r() {
                var n;
                return regeneratorRuntime.wrap(function (r) {
                  while (1)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((n = e.length > 0 && void 0 !== e[0] ? e[0] : 40),
                          t.ready)
                        ) {
                          r.next = 4;
                          break;
                        }
                        return (r.next = 4), t.init();
                      case 4:
                        (y["c"].bpm.value = n), y["c"].start(), t.$emit("play");
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          stop: function () {
            y["c"].stop();
          },
        },
      };
    r("a169");
    j.__scopeId = "data-v-d84e67e4";
    var g = j,
      k = {
        name: "Metronome",
        components: { MetroDisplay: v, Sound: g },
        props: {},
        data: function () {
          return { intitialised: !1 };
        },
        methods: {
          play: function (e) {
            this.$refs.sound.play(e);
          },
        },
      };
    r("4353");
    (k.render = a), (k.__scopeId = "data-v-40384cf5");
    var w = k,
      x = { name: "App", components: { Metronome: w } };
    r("792e");
    x.render = o;
    var O = x,
      M = r("9483");
    Object(M["a"])("".concat("/metronome/", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    }),
      Object(n["b"])(O).mount("#app");
  },
  "792e": function (e, t, r) {
    "use strict";
    r("2387");
  },
  a169: function (e, t, r) {
    "use strict";
    r("2f4c");
  },
  f5ac: function (e, t, r) {
    "use strict";
    r("4130");
  },
});
//# sourceMappingURL=app.f12a11f5.js.map
