(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-vendors"],
  {
    "00ee": function (t, e, n) {
      var s = n("b622"),
        i = s("toStringTag"),
        r = {};
      (r[i] = "z"), (t.exports = "[object z]" === String(r));
    },
    "0366": function (t, e, n) {
      var s = n("1c0b");
      t.exports = function (t, e, n) {
        if ((s(t), void 0 === e)) return t;
        switch (n) {
          case 0:
            return function () {
              return t.call(e);
            };
          case 1:
            return function (n) {
              return t.call(e, n);
            };
          case 2:
            return function (n, s) {
              return t.call(e, n, s);
            };
          case 3:
            return function (n, s, i) {
              return t.call(e, n, s, i);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    "04d1": function (t, e, n) {
      (function (t, s) {
        s(e, n("278c"), n("970b"), n("5bc3"));
      })(0, function (t, e, n, s) {
        "use strict";
        function i(t) {
          return t && "object" === typeof t && "default" in t
            ? t
            : { default: t };
        }
        var r = i(e),
          o = i(n),
          a = i(s),
          c = function (t, e, n) {
            return {
              endTime: e,
              insertTime: n,
              type: "exponentialRampToValue",
              value: t,
            };
          },
          u = function (t, e, n) {
            return {
              endTime: e,
              insertTime: n,
              type: "linearRampToValue",
              value: t,
            };
          },
          l = function (t, e) {
            return { startTime: e, type: "setValue", value: t };
          },
          h = function (t, e, n) {
            return {
              duration: n,
              startTime: e,
              type: "setValueCurve",
              values: t,
            };
          },
          p = function (t, e, n) {
            var s = n.startTime,
              i = n.target,
              r = n.timeConstant;
            return i + (e - i) * Math.exp((s - t) / r);
          },
          d = function (t) {
            return "exponentialRampToValue" === t.type;
          },
          f = function (t) {
            return "linearRampToValue" === t.type;
          },
          m = function (t) {
            return d(t) || f(t);
          },
          g = function (t) {
            return "setValue" === t.type;
          },
          _ = function (t) {
            return "setValueCurve" === t.type;
          },
          v = function t(e, n, s, i) {
            var r = e[n];
            return void 0 === r
              ? i
              : m(r) || g(r)
              ? r.value
              : _(r)
              ? r.values[r.values.length - 1]
              : p(s, t(e, n - 1, r.startTime, i), r);
          },
          y = function (t, e, n, s, i) {
            return void 0 === n
              ? [s.insertTime, i]
              : m(n)
              ? [n.endTime, n.value]
              : g(n)
              ? [n.startTime, n.value]
              : _(n)
              ? [n.startTime + n.duration, n.values[n.values.length - 1]]
              : [n.startTime, v(t, e - 1, n.startTime, i)];
          },
          b = function (t) {
            return "cancelAndHold" === t.type;
          },
          w = function (t) {
            return "cancelScheduledValues" === t.type;
          },
          x = function (t) {
            return b(t) || w(t)
              ? t.cancelTime
              : d(t) || f(t)
              ? t.endTime
              : t.startTime;
          },
          T = function (t, e, n, s) {
            var i = s.endTime,
              r = s.value;
            return n === r
              ? r
              : (0 < n && 0 < r) || (n < 0 && r < 0)
              ? n * Math.pow(r / n, (t - e) / (i - e))
              : 0;
          },
          O = function (t, e, n, s) {
            var i = s.endTime,
              r = s.value;
            return n + ((t - e) / (i - e)) * (r - n);
          },
          C = function (t, e) {
            var n = Math.floor(e),
              s = Math.ceil(e);
            return n === s ? t[n] : (1 - (e - n)) * t[n] + (1 - (s - e)) * t[s];
          },
          S = function (t, e) {
            var n = e.duration,
              s = e.startTime,
              i = e.values,
              r = ((t - s) / n) * (i.length - 1);
            return C(i, r);
          },
          A = function (t) {
            return "setTarget" === t.type;
          },
          k = (function (t) {
            function e(t) {
              o["default"](this, e),
                (this._automationEvents = []),
                (this._currenTime = 0),
                (this._defaultValue = t);
            }
            return (
              a["default"](e, [
                {
                  key: t,
                  value: function () {
                    return this._automationEvents[Symbol.iterator]();
                  },
                },
                {
                  key: "add",
                  value: function (t) {
                    var e = x(t);
                    if (b(t) || w(t)) {
                      var n = this._automationEvents.findIndex(function (n) {
                          return w(t) && _(n)
                            ? n.startTime + n.duration >= e
                            : x(n) >= e;
                        }),
                        s = this._automationEvents[n];
                      if (
                        (-1 !== n &&
                          (this._automationEvents =
                            this._automationEvents.slice(0, n)),
                        b(t))
                      ) {
                        var i =
                          this._automationEvents[
                            this._automationEvents.length - 1
                          ];
                        if (void 0 !== s && m(s)) {
                          if (A(i))
                            throw new Error("The internal list is malformed.");
                          var r = _(i) ? i.startTime + i.duration : x(i),
                            o = _(i) ? i.values[i.values.length - 1] : i.value,
                            a = d(s) ? T(e, r, o, s) : O(e, r, o, s),
                            p = d(s)
                              ? c(a, e, this._currenTime)
                              : u(a, e, this._currenTime);
                          this._automationEvents.push(p);
                        }
                        void 0 !== i &&
                          A(i) &&
                          this._automationEvents.push(l(this.getValue(e), e)),
                          void 0 !== i &&
                            _(i) &&
                            i.startTime + i.duration > e &&
                            (this._automationEvents[
                              this._automationEvents.length - 1
                            ] = h(
                              new Float32Array([6, 7]),
                              i.startTime,
                              e - i.startTime
                            ));
                      }
                    } else {
                      var g = this._automationEvents.findIndex(function (t) {
                          return x(t) > e;
                        }),
                        v =
                          -1 === g
                            ? this._automationEvents[
                                this._automationEvents.length - 1
                              ]
                            : this._automationEvents[g - 1];
                      if (void 0 !== v && _(v) && x(v) + v.duration > e)
                        return !1;
                      var y = d(t)
                        ? c(t.value, t.endTime, this._currenTime)
                        : f(t)
                        ? u(t.value, e, this._currenTime)
                        : t;
                      if (-1 === g) this._automationEvents.push(y);
                      else {
                        if (
                          _(t) &&
                          e + t.duration > x(this._automationEvents[g])
                        )
                          return !1;
                        this._automationEvents.splice(g, 0, y);
                      }
                    }
                    return !0;
                  },
                },
                {
                  key: "flush",
                  value: function (t) {
                    var e = this._automationEvents.findIndex(function (e) {
                      return x(e) > t;
                    });
                    if (e > 1) {
                      var n = this._automationEvents.slice(e - 1),
                        s = n[0];
                      A(s) &&
                        n.unshift(
                          l(
                            v(
                              this._automationEvents,
                              e - 2,
                              s.startTime,
                              this._defaultValue
                            ),
                            s.startTime
                          )
                        ),
                        (this._automationEvents = n);
                    }
                  },
                },
                {
                  key: "getValue",
                  value: function (t) {
                    if (0 === this._automationEvents.length)
                      return this._defaultValue;
                    var e = this._automationEvents.findIndex(function (e) {
                        return x(e) > t;
                      }),
                      n = this._automationEvents[e],
                      s = (-1 === e ? this._automationEvents.length : e) - 1,
                      i = this._automationEvents[s];
                    if (
                      void 0 !== i &&
                      A(i) &&
                      (void 0 === n || !m(n) || n.insertTime > t)
                    )
                      return p(
                        t,
                        v(
                          this._automationEvents,
                          s - 1,
                          i.startTime,
                          this._defaultValue
                        ),
                        i
                      );
                    if (void 0 !== i && g(i) && (void 0 === n || !m(n)))
                      return i.value;
                    if (
                      void 0 !== i &&
                      _(i) &&
                      (void 0 === n || !m(n) || i.startTime + i.duration > t)
                    )
                      return t < i.startTime + i.duration
                        ? S(t, i)
                        : i.values[i.values.length - 1];
                    if (void 0 !== i && m(i) && (void 0 === n || !m(n)))
                      return i.value;
                    if (void 0 !== n && d(n)) {
                      var o = y(
                          this._automationEvents,
                          s,
                          i,
                          n,
                          this._defaultValue
                        ),
                        a = r["default"](o, 2),
                        c = a[0],
                        u = a[1];
                      return T(t, c, u, n);
                    }
                    if (void 0 !== n && f(n)) {
                      var l = y(
                          this._automationEvents,
                          s,
                          i,
                          n,
                          this._defaultValue
                        ),
                        h = r["default"](l, 2),
                        b = h[0],
                        w = h[1];
                      return O(t, b, w, n);
                    }
                    return this._defaultValue;
                  },
                },
              ]),
              e
            );
          })(Symbol.iterator),
          E = function (t) {
            return { cancelTime: t, type: "cancelAndHold" };
          },
          M = function (t) {
            return { cancelTime: t, type: "cancelScheduledValues" };
          },
          j = function (t, e) {
            return { endTime: e, type: "exponentialRampToValue", value: t };
          },
          I = function (t, e) {
            return { endTime: e, type: "linearRampToValue", value: t };
          },
          D = function (t, e, n) {
            return {
              startTime: e,
              target: t,
              timeConstant: n,
              type: "setTarget",
            };
          };
        (t.AutomationEventList = k),
          (t.createCancelAndHoldAutomationEvent = E),
          (t.createCancelScheduledValuesAutomationEvent = M),
          (t.createExponentialRampToValueAutomationEvent = j),
          (t.createLinearRampToValueAutomationEvent = I),
          (t.createSetTargetAutomationEvent = D),
          (t.createSetValueAutomationEvent = l),
          (t.createSetValueCurveAutomationEvent = h),
          Object.defineProperty(t, "__esModule", { value: !0 });
      });
    },
    "057f": function (t, e, n) {
      var s = n("fc6a"),
        i = n("241c").f,
        r = {}.toString,
        o =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        a = function (t) {
          try {
            return i(t);
          } catch (e) {
            return o.slice();
          }
        };
      t.exports.f = function (t) {
        return o && "[object Window]" == r.call(t) ? a(t) : i(s(t));
      };
    },
    "06cf": function (t, e, n) {
      var s = n("83ab"),
        i = n("d1e7"),
        r = n("5c6c"),
        o = n("fc6a"),
        a = n("a04b"),
        c = n("5135"),
        u = n("0cfb"),
        l = Object.getOwnPropertyDescriptor;
      e.f = s
        ? l
        : function (t, e) {
            if (((t = o(t)), (e = a(e)), u))
              try {
                return l(t, e);
              } catch (n) {}
            if (c(t, e)) return r(!i.f.call(t, e), t[e]);
          };
    },
    "0b42": function (t, e, n) {
      var s = n("861d"),
        i = n("e8b5"),
        r = n("b622"),
        o = r("species");
      t.exports = function (t) {
        var e;
        return (
          i(t) &&
            ((e = t.constructor),
            "function" != typeof e || (e !== Array && !i(e.prototype))
              ? s(e) && ((e = e[o]), null === e && (e = void 0))
              : (e = void 0)),
          void 0 === e ? Array : e
        );
      };
    },
    "0cfb": function (t, e, n) {
      var s = n("83ab"),
        i = n("d039"),
        r = n("cc12");
      t.exports =
        !s &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(r("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    "19aa": function (t, e) {
      t.exports = function (t, e, n) {
        if (!(t instanceof e))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t;
      };
    },
    "1be4": function (t, e, n) {
      var s = n("d066");
      t.exports = s("document", "documentElement");
    },
    "1c0b": function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
        return t;
      };
    },
    "1c7e": function (t, e, n) {
      var s = n("b622"),
        i = s("iterator"),
        r = !1;
      try {
        var o = 0,
          a = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              r = !0;
            },
          };
        (a[i] = function () {
          return this;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (c) {}
      t.exports = function (t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
          var s = {};
          (s[i] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              },
            };
          }),
            t(s);
        } catch (c) {}
        return n;
      };
    },
    "1cdc": function (t, e, n) {
      var s = n("342f");
      t.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(s);
    },
    "1d80": function (t, e) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    },
    "1da1": function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      n("d3b7");
      function s(t, e, n, s, i, r, o) {
        try {
          var a = t[r](o),
            c = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? e(c) : Promise.resolve(c).then(s, i);
      }
      function i(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = t.apply(e, n);
            function a(t) {
              s(o, i, r, a, c, "next", t);
            }
            function c(t) {
              s(o, i, r, a, c, "throw", t);
            }
            a(void 0);
          });
        };
      }
    },
    "1dde": function (t, e, n) {
      var s = n("d039"),
        i = n("b622"),
        r = n("2d00"),
        o = i("species");
      t.exports = function (t) {
        return (
          r >= 51 ||
          !s(function () {
            var e = [],
              n = (e.constructor = {});
            return (
              (n[o] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    },
    2266: function (t, e, n) {
      var s = n("825a"),
        i = n("e95a"),
        r = n("50c4"),
        o = n("0366"),
        a = n("35a1"),
        c = n("2a62"),
        u = function (t, e) {
          (this.stopped = t), (this.result = e);
        };
      t.exports = function (t, e, n) {
        var l,
          h,
          p,
          d,
          f,
          m,
          g,
          _ = n && n.that,
          v = !(!n || !n.AS_ENTRIES),
          y = !(!n || !n.IS_ITERATOR),
          b = !(!n || !n.INTERRUPTED),
          w = o(e, _, 1 + v + b),
          x = function (t) {
            return l && c(l), new u(!0, t);
          },
          T = function (t) {
            return v
              ? (s(t), b ? w(t[0], t[1], x) : w(t[0], t[1]))
              : b
              ? w(t, x)
              : w(t);
          };
        if (y) l = t;
        else {
          if (((h = a(t)), "function" != typeof h))
            throw TypeError("Target is not iterable");
          if (i(h)) {
            for (p = 0, d = r(t.length); d > p; p++)
              if (((f = T(t[p])), f && f instanceof u)) return f;
            return new u(!1);
          }
          l = h.call(t);
        }
        m = l.next;
        while (!(g = m.call(l)).done) {
          try {
            f = T(g.value);
          } catch (O) {
            throw (c(l), O);
          }
          if ("object" == typeof f && f && f instanceof u) return f;
        }
        return new u(!1);
      };
    },
    "23cb": function (t, e, n) {
      var s = n("a691"),
        i = Math.max,
        r = Math.min;
      t.exports = function (t, e) {
        var n = s(t);
        return n < 0 ? i(n + e, 0) : r(n, e);
      };
    },
    "23e7": function (t, e, n) {
      var s = n("da84"),
        i = n("06cf").f,
        r = n("9112"),
        o = n("6eeb"),
        a = n("ce4e"),
        c = n("e893"),
        u = n("94ca");
      t.exports = function (t, e) {
        var n,
          l,
          h,
          p,
          d,
          f,
          m = t.target,
          g = t.global,
          _ = t.stat;
        if (((l = g ? s : _ ? s[m] || a(m, {}) : (s[m] || {}).prototype), l))
          for (h in e) {
            if (
              ((d = e[h]),
              t.noTargetGet ? ((f = i(l, h)), (p = f && f.value)) : (p = l[h]),
              (n = u(g ? h : m + (_ ? "." : "#") + h, t.forced)),
              !n && void 0 !== p)
            ) {
              if (typeof d === typeof p) continue;
              c(d, p);
            }
            (t.sham || (p && p.sham)) && r(d, "sham", !0), o(l, h, d, t);
          }
      };
    },
    "241c": function (t, e, n) {
      var s = n("ca84"),
        i = n("7839"),
        r = i.concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return s(t, r);
        };
    },
    2626: function (t, e, n) {
      "use strict";
      var s = n("d066"),
        i = n("9bf2"),
        r = n("b622"),
        o = n("83ab"),
        a = r("species");
      t.exports = function (t) {
        var e = s(t),
          n = i.f;
        o &&
          e &&
          !e[a] &&
          n(e, a, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    "278c": function (t, e, n) {
      var s = n("c135"),
        i = n("9b42"),
        r = n("6613"),
        o = n("c240");
      function a(t, e) {
        return s(t) || i(t, e) || r(t, e) || o();
      }
      (t.exports = a),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    "2a62": function (t, e, n) {
      var s = n("825a");
      t.exports = function (t) {
        var e = t["return"];
        if (void 0 !== e) return s(e.call(t)).value;
      };
    },
    "2cf4": function (t, e, n) {
      var s,
        i,
        r,
        o,
        a = n("da84"),
        c = n("d039"),
        u = n("0366"),
        l = n("1be4"),
        h = n("cc12"),
        p = n("1cdc"),
        d = n("605d"),
        f = a.setImmediate,
        m = a.clearImmediate,
        g = a.process,
        _ = a.MessageChannel,
        v = a.Dispatch,
        y = 0,
        b = {},
        w = "onreadystatechange";
      try {
        s = a.location;
      } catch (S) {}
      var x = function (t) {
          if (b.hasOwnProperty(t)) {
            var e = b[t];
            delete b[t], e();
          }
        },
        T = function (t) {
          return function () {
            x(t);
          };
        },
        O = function (t) {
          x(t.data);
        },
        C = function (t) {
          a.postMessage(String(t), s.protocol + "//" + s.host);
        };
      (f && m) ||
        ((f = function (t) {
          var e = [],
            n = arguments.length,
            s = 1;
          while (n > s) e.push(arguments[s++]);
          return (
            (b[++y] = function () {
              ("function" == typeof t ? t : Function(t)).apply(void 0, e);
            }),
            i(y),
            y
          );
        }),
        (m = function (t) {
          delete b[t];
        }),
        d
          ? (i = function (t) {
              g.nextTick(T(t));
            })
          : v && v.now
          ? (i = function (t) {
              v.now(T(t));
            })
          : _ && !p
          ? ((r = new _()),
            (o = r.port2),
            (r.port1.onmessage = O),
            (i = u(o.postMessage, o, 1)))
          : a.addEventListener &&
            "function" == typeof postMessage &&
            !a.importScripts &&
            s &&
            "file:" !== s.protocol &&
            !c(C)
          ? ((i = C), a.addEventListener("message", O, !1))
          : (i =
              w in h("script")
                ? function (t) {
                    l.appendChild(h("script"))[w] = function () {
                      l.removeChild(this), x(t);
                    };
                  }
                : function (t) {
                    setTimeout(T(t), 0);
                  })),
        (t.exports = { set: f, clear: m });
    },
    "2d00": function (t, e, n) {
      var s,
        i,
        r = n("da84"),
        o = n("342f"),
        a = r.process,
        c = r.Deno,
        u = (a && a.versions) || (c && c.version),
        l = u && u.v8;
      l
        ? ((s = l.split(".")), (i = s[0] < 4 ? 1 : s[0] + s[1]))
        : o &&
          ((s = o.match(/Edge\/(\d+)/)),
          (!s || s[1] >= 74) &&
            ((s = o.match(/Chrome\/(\d+)/)), s && (i = s[1]))),
        (t.exports = i && +i);
    },
    "342f": function (t, e, n) {
      var s = n("d066");
      t.exports = s("navigator", "userAgent") || "";
    },
    "35a1": function (t, e, n) {
      var s = n("f5df"),
        i = n("3f8c"),
        r = n("b622"),
        o = r("iterator");
      t.exports = function (t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[s(t)];
      };
    },
    "37e8": function (t, e, n) {
      var s = n("83ab"),
        i = n("9bf2"),
        r = n("825a"),
        o = n("df75");
      t.exports = s
        ? Object.defineProperties
        : function (t, e) {
            r(t);
            var n,
              s = o(e),
              a = s.length,
              c = 0;
            while (a > c) i.f(t, (n = s[c++]), e[n]);
            return t;
          };
    },
    "3bbe": function (t, e, n) {
      var s = n("861d");
      t.exports = function (t) {
        if (!s(t) && null !== t)
          throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    },
    "3ca3": function (t, e, n) {
      "use strict";
      var s = n("6547").charAt,
        i = n("577e"),
        r = n("69f3"),
        o = n("7dd0"),
        a = "String Iterator",
        c = r.set,
        u = r.getterFor(a);
      o(
        String,
        "String",
        function (t) {
          c(this, { type: a, string: i(t), index: 0 });
        },
        function () {
          var t,
            e = u(this),
            n = e.string,
            i = e.index;
          return i >= n.length
            ? { value: void 0, done: !0 }
            : ((t = s(n, i)), (e.index += t.length), { value: t, done: !1 });
        }
      );
    },
    "3f8c": function (t, e) {
      t.exports = {};
    },
    "428f": function (t, e, n) {
      var s = n("da84");
      t.exports = s;
    },
    "44ad": function (t, e, n) {
      var s = n("d039"),
        i = n("c6b6"),
        r = "".split;
      t.exports = s(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == i(t) ? r.call(t, "") : Object(t);
          }
        : Object;
    },
    "44d2": function (t, e, n) {
      var s = n("b622"),
        i = n("7c73"),
        r = n("9bf2"),
        o = s("unscopables"),
        a = Array.prototype;
      void 0 == a[o] && r.f(a, o, { configurable: !0, value: i(null) }),
        (t.exports = function (t) {
          a[o][t] = !0;
        });
    },
    "44de": function (t, e, n) {
      var s = n("da84");
      t.exports = function (t, e) {
        var n = s.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
      };
    },
    4840: function (t, e, n) {
      var s = n("825a"),
        i = n("1c0b"),
        r = n("b622"),
        o = r("species");
      t.exports = function (t, e) {
        var n,
          r = s(t).constructor;
        return void 0 === r || void 0 == (n = s(r)[o]) ? e : i(n);
      };
    },
    "485a": function (t, e, n) {
      var s = n("861d");
      t.exports = function (t, e) {
        var n, i;
        if (
          "string" === e &&
          "function" == typeof (n = t.toString) &&
          !s((i = n.call(t)))
        )
          return i;
        if ("function" == typeof (n = t.valueOf) && !s((i = n.call(t))))
          return i;
        if (
          "string" !== e &&
          "function" == typeof (n = t.toString) &&
          !s((i = n.call(t)))
        )
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    4930: function (t, e, n) {
      var s = n("2d00"),
        i = n("d039");
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !i(function () {
          var t = Symbol();
          return (
            !String(t) ||
            !(Object(t) instanceof Symbol) ||
            (!Symbol.sham && s && s < 41)
          );
        });
    },
    "4d64": function (t, e, n) {
      var s = n("fc6a"),
        i = n("50c4"),
        r = n("23cb"),
        o = function (t) {
          return function (e, n, o) {
            var a,
              c = s(e),
              u = i(c.length),
              l = r(o, u);
            if (t && n != n) {
              while (u > l) if (((a = c[l++]), a != a)) return !0;
            } else
              for (; u > l; l++)
                if ((t || l in c) && c[l] === n) return t || l || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: o(!0), indexOf: o(!1) };
    },
    "4df4": function (t, e, n) {
      "use strict";
      var s = n("0366"),
        i = n("7b0b"),
        r = n("9bdd"),
        o = n("e95a"),
        a = n("50c4"),
        c = n("8418"),
        u = n("35a1");
      t.exports = function (t) {
        var e,
          n,
          l,
          h,
          p,
          d,
          f = i(t),
          m = "function" == typeof this ? this : Array,
          g = arguments.length,
          _ = g > 1 ? arguments[1] : void 0,
          v = void 0 !== _,
          y = u(f),
          b = 0;
        if (
          (v && (_ = s(_, g > 2 ? arguments[2] : void 0, 2)),
          void 0 == y || (m == Array && o(y)))
        )
          for (e = a(f.length), n = new m(e); e > b; b++)
            (d = v ? _(f[b], b) : f[b]), c(n, b, d);
        else
          for (
            h = y.call(f), p = h.next, n = new m();
            !(l = p.call(h)).done;
            b++
          )
            (d = v ? r(h, _, [l.value, b], !0) : l.value), c(n, b, d);
        return (n.length = b), n;
      };
    },
    "50c4": function (t, e, n) {
      var s = n("a691"),
        i = Math.min;
      t.exports = function (t) {
        return t > 0 ? i(s(t), 9007199254740991) : 0;
      };
    },
    5135: function (t, e, n) {
      var s = n("7b0b"),
        i = {}.hasOwnProperty;
      t.exports =
        Object.hasOwn ||
        function (t, e) {
          return i.call(s(t), e);
        };
    },
    5692: function (t, e, n) {
      var s = n("c430"),
        i = n("c6cd");
      (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.16.1",
        mode: s ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    "56ef": function (t, e, n) {
      var s = n("d066"),
        i = n("241c"),
        r = n("7418"),
        o = n("825a");
      t.exports =
        s("Reflect", "ownKeys") ||
        function (t) {
          var e = i.f(o(t)),
            n = r.f;
          return n ? e.concat(n(t)) : e;
        };
    },
    "577e": function (t, e, n) {
      var s = n("d9b5");
      t.exports = function (t) {
        if (s(t)) throw TypeError("Cannot convert a Symbol value to a string");
        return String(t);
      };
    },
    "5a43": function (t, e) {
      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, s = new Array(e); n < e; n++) s[n] = t[n];
        return s;
      }
      (t.exports = n),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    "5bc3": function (t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s);
        }
      }
      function s(t, e, s) {
        return e && n(t.prototype, e), s && n(t, s), t;
      }
      (t.exports = s),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    "5c6c": function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    "5e54": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return gu;
      }),
        n.d(e, "a", function () {
          return Mu;
        }),
        n.d(e, "d", function () {
          return Ha;
        }),
        n.d(e, "c", function () {
          return Fu;
        });
      const s = "14.7.77";
      var i = n("04d1");
      const r = () => new DOMException("", "AbortError"),
        o =
          (t) =>
          (e, n, [s, i, r], o) => {
            t(e[i], [n, s, r], (t) => t[0] === n && t[1] === s, o);
          },
        a = (t) => (e, n, s) => {
          const i = [];
          for (let t = 0; t < s.numberOfInputs; t += 1) i.push(new Set());
          t.set(e, {
            activeInputs: i,
            outputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: n,
          });
        },
        c = (t) => (e, n) => {
          t.set(e, {
            activeInputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: n,
          });
        },
        u = new WeakSet(),
        l = new WeakMap(),
        h = new WeakMap(),
        p = new WeakMap(),
        d = new WeakMap(),
        f = new WeakMap(),
        m = new WeakMap(),
        g = new WeakMap(),
        _ = new WeakMap(),
        v = new WeakMap(),
        y = {
          construct() {
            return y;
          },
        },
        b = (t) => {
          try {
            const e = new Proxy(t, y);
            new e();
          } catch {
            return !1;
          }
          return !0;
        },
        w =
          /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        x = (t, e) => {
          const n = [];
          let s = t.replace(/^[\s]+/, ""),
            i = s.match(w);
          while (null !== i) {
            const t = i[1].slice(1, -1),
              r = i[0]
                .replace(/([\s]+)?;?$/, "")
                .replace(t, new URL(t, e).toString());
            n.push(r),
              (s = s.slice(i[0].length).replace(/^[\s]+/, "")),
              (i = s.match(w));
          }
          return [n.join(";"), s];
        },
        T = (t) => {
          if (void 0 !== t && !Array.isArray(t))
            throw new TypeError(
              "The parameterDescriptors property of given value for processorCtor is not an array."
            );
        },
        O = (t) => {
          if (!b(t))
            throw new TypeError(
              "The given value for processorCtor should be a constructor."
            );
          if (null === t.prototype || "object" !== typeof t.prototype)
            throw new TypeError(
              "The given value for processorCtor should have a prototype."
            );
        },
        C = (t, e, n, s, i, r, o, a, c, u, l, h, p) => {
          let d = 0;
          return (f, m, g = { credentials: "omit" }) => {
            const v = l.get(f);
            if (void 0 !== v && v.has(m)) return Promise.resolve();
            const y = u.get(f);
            if (void 0 !== y) {
              const t = y.get(m);
              if (void 0 !== t) return t;
            }
            const b = r(f),
              w =
                void 0 === b.audioWorklet
                  ? i(m)
                      .then(([t, e]) => {
                        const [s, i] = x(t, e),
                          r = `${s};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}\n})})(window,'_AWGS')`;
                        return n(r);
                      })
                      .then(() => {
                        const t = p._AWGS.pop();
                        if (void 0 === t) throw new SyntaxError();
                        s(b.currentTime, b.sampleRate, () =>
                          t(
                            class {},
                            void 0,
                            (t, n) => {
                              if ("" === t.trim()) throw e();
                              const s = _.get(b);
                              if (void 0 !== s) {
                                if (s.has(t)) throw e();
                                O(n), T(n.parameterDescriptors), s.set(t, n);
                              } else
                                O(n),
                                  T(n.parameterDescriptors),
                                  _.set(b, new Map([[t, n]]));
                            },
                            b.sampleRate,
                            void 0,
                            void 0
                          )
                        );
                      })
                  : Promise.all([i(m), Promise.resolve(t(h, h))]).then(
                      ([[t, e], n]) => {
                        const s = d + 1;
                        d = s;
                        const [i, r] = x(t, e),
                          u = n
                            ? "AudioWorkletProcessor"
                            : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}",
                          l = n
                            ? ""
                            : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));",
                          h = n
                            ? ""
                            : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));",
                          p = `${i};((AudioWorkletProcessor,registerProcessor)=>{${r}\n})(${u},(n,p)=>registerProcessor(n,class extends p{${l}process(i,o,p){${h}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${s}',class extends AudioWorkletProcessor{process(){return !1}})`,
                          f = new Blob([p], {
                            type: "application/javascript; charset=utf-8",
                          }),
                          m = URL.createObjectURL(f);
                        return b.audioWorklet
                          .addModule(m, g)
                          .then(() => {
                            if (a(b)) return b;
                            const t = o(b);
                            return t.audioWorklet.addModule(m, g).then(() => t);
                          })
                          .then((t) => {
                            if (null === c) throw new SyntaxError();
                            try {
                              new c(t, "__sac" + s);
                            } catch {
                              throw new SyntaxError();
                            }
                          })
                          .finally(() => URL.revokeObjectURL(m));
                      }
                    );
            return (
              void 0 === y ? u.set(f, new Map([[m, w]])) : y.set(m, w),
              w
                .then(() => {
                  const t = l.get(f);
                  void 0 === t ? l.set(f, new Set([m])) : t.add(m);
                })
                .finally(() => {
                  const t = u.get(f);
                  void 0 !== t && t.delete(m);
                }),
              w
            );
          };
        },
        S = (t, e) => {
          const n = t.get(e);
          if (void 0 === n)
            throw new Error("A value with the given key could not be found.");
          return n;
        },
        A = (t, e) => {
          const n = Array.from(t).filter(e);
          if (n.length > 1) throw Error("More than one element was found.");
          if (0 === n.length) throw Error("No element was found.");
          const [s] = n;
          return t.delete(s), s;
        },
        k = (t, e, n, s) => {
          const i = S(t, e),
            r = A(i, (t) => t[0] === n && t[1] === s);
          return 0 === i.size && t.delete(e), r;
        },
        E = (t) => S(m, t),
        M = (t) => {
          if (u.has(t)) throw new Error("The AudioNode is already stored.");
          u.add(t), E(t).forEach((t) => t(!0));
        },
        j = (t) => "port" in t,
        I = (t) => {
          if (!u.has(t)) throw new Error("The AudioNode is not stored.");
          u.delete(t), E(t).forEach((t) => t(!1));
        },
        D = (t, e) => {
          !j(t) && e.every((t) => 0 === t.size) && I(t);
        },
        R = (t, e, n, s, i, r, o, a, c, u, l, h, p) => {
          const d = new WeakMap();
          return (f, m, g, _, v) => {
            const { activeInputs: y, passiveInputs: b } = r(m),
              { outputs: w } = r(f),
              x = a(f),
              T = (r) => {
                const a = c(m),
                  u = c(f);
                if (r) {
                  const e = k(b, f, g, _);
                  t(y, f, e, !1), v || h(f) || n(u, a, g, _), p(m) && M(m);
                } else {
                  const t = s(y, f, g, _);
                  e(b, _, t, !1), v || h(f) || i(u, a, g, _);
                  const n = o(m);
                  if (0 === n) l(m) && D(m, y);
                  else {
                    const t = d.get(m);
                    void 0 !== t && clearTimeout(t),
                      d.set(
                        m,
                        setTimeout(() => {
                          l(m) && D(m, y);
                        }, 1e3 * n)
                      );
                  }
                }
              };
            return (
              !!u(
                w,
                [m, g, _],
                (t) => t[0] === m && t[1] === g && t[2] === _,
                !0
              ) &&
              (x.add(T),
              l(f) ? t(y, f, [g, _, T], !0) : e(b, _, [f, g, T], !0),
              !0)
            );
          };
        },
        N =
          (t) =>
          (e, n, [s, i, r], o) => {
            const a = e.get(s);
            void 0 === a
              ? e.set(s, new Set([[i, n, r]]))
              : t(a, [i, n, r], (t) => t[0] === i && t[1] === n, o);
          },
        P = (t) => (e, n) => {
          const s = t(e, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0,
          });
          n.connect(s).connect(e.destination);
          const i = () => {
            n.removeEventListener("ended", i), n.disconnect(s), s.disconnect();
          };
          n.addEventListener("ended", i);
        },
        V = (t) => (e, n) => {
          t(e).add(n);
        },
        F = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          fftSize: 2048,
          maxDecibels: -30,
          minDecibels: -100,
          smoothingTimeConstant: 0.8,
        },
        L = (t, e, n, s, i, r) =>
          class extends t {
            constructor(t, n) {
              const o = i(t),
                a = { ...F, ...n },
                c = s(o, a),
                u = r(o) ? e() : null;
              super(t, !1, c, u), (this._nativeAnalyserNode = c);
            }
            get fftSize() {
              return this._nativeAnalyserNode.fftSize;
            }
            set fftSize(t) {
              this._nativeAnalyserNode.fftSize = t;
            }
            get frequencyBinCount() {
              return this._nativeAnalyserNode.frequencyBinCount;
            }
            get maxDecibels() {
              return this._nativeAnalyserNode.maxDecibels;
            }
            set maxDecibels(t) {
              const e = this._nativeAnalyserNode.maxDecibels;
              if (
                ((this._nativeAnalyserNode.maxDecibels = t),
                !(t > this._nativeAnalyserNode.minDecibels))
              )
                throw ((this._nativeAnalyserNode.maxDecibels = e), n());
            }
            get minDecibels() {
              return this._nativeAnalyserNode.minDecibels;
            }
            set minDecibels(t) {
              const e = this._nativeAnalyserNode.minDecibels;
              if (
                ((this._nativeAnalyserNode.minDecibels = t),
                !(this._nativeAnalyserNode.maxDecibels > t))
              )
                throw ((this._nativeAnalyserNode.minDecibels = e), n());
            }
            get smoothingTimeConstant() {
              return this._nativeAnalyserNode.smoothingTimeConstant;
            }
            set smoothingTimeConstant(t) {
              this._nativeAnalyserNode.smoothingTimeConstant = t;
            }
            getByteFrequencyData(t) {
              this._nativeAnalyserNode.getByteFrequencyData(t);
            }
            getByteTimeDomainData(t) {
              this._nativeAnalyserNode.getByteTimeDomainData(t);
            }
            getFloatFrequencyData(t) {
              this._nativeAnalyserNode.getFloatFrequencyData(t);
            }
            getFloatTimeDomainData(t) {
              this._nativeAnalyserNode.getFloatTimeDomainData(t);
            }
          },
        q = (t, e) => t.context === e,
        B = (t, e, n) => () => {
          const s = new WeakMap(),
            i = async (i, r, o) => {
              let a = e(i);
              const c = q(a, r);
              if (!c) {
                const e = {
                  channelCount: a.channelCount,
                  channelCountMode: a.channelCountMode,
                  channelInterpretation: a.channelInterpretation,
                  fftSize: a.fftSize,
                  maxDecibels: a.maxDecibels,
                  minDecibels: a.minDecibels,
                  smoothingTimeConstant: a.smoothingTimeConstant,
                };
                a = t(r, e);
              }
              return s.set(r, a), await n(i, r, a, o), a;
            };
          return {
            render(t, e, n) {
              const r = s.get(e);
              return void 0 !== r ? Promise.resolve(r) : i(t, e, n);
            },
          };
        },
        W = (t) => {
          try {
            t.copyToChannel(new Float32Array(1), 0, -1);
          } catch {
            return !1;
          }
          return !0;
        },
        U = () => new DOMException("", "IndexSizeError"),
        z = (t) => {
          t.getChannelData = ((e) => (n) => {
            try {
              return e.call(t, n);
            } catch (s) {
              if (12 === s.code) throw U();
              throw s;
            }
          })(t.getChannelData);
        },
        G = { numberOfChannels: 1 },
        $ = (t, e, n, s, i, r, o, a) => {
          let c = null;
          return class u {
            constructor(u) {
              if (null === i)
                throw new Error(
                  "Missing the native OfflineAudioContext constructor."
                );
              const {
                length: l,
                numberOfChannels: h,
                sampleRate: p,
              } = { ...G, ...u };
              null === c && (c = new i(1, 1, 44100));
              const d =
                null !== s && e(r, r)
                  ? new s({ length: l, numberOfChannels: h, sampleRate: p })
                  : c.createBuffer(h, l, p);
              if (0 === d.numberOfChannels) throw n();
              return (
                "function" !== typeof d.copyFromChannel
                  ? (o(d), z(d))
                  : e(W, () => W(d)) || a(d),
                t.add(d),
                d
              );
            }
            static [Symbol.hasInstance](e) {
              return (
                (null !== e &&
                  "object" === typeof e &&
                  Object.getPrototypeOf(e) === u.prototype) ||
                t.has(e)
              );
            }
          };
        },
        H = -34028234663852886e22,
        Y = -H,
        X = (t) => u.has(t),
        Z = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          loop: !1,
          loopEnd: 0,
          loopStart: 0,
          playbackRate: 1,
        },
        Q = (t, e, n, s, i, r, o, a) =>
          class extends t {
            constructor(t, s) {
              const a = r(t),
                c = { ...Z, ...s },
                u = i(a, c),
                l = o(a),
                h = l ? e() : null;
              super(t, !1, u, h),
                (this._audioBufferSourceNodeRenderer = h),
                (this._isBufferNullified = !1),
                (this._isBufferSet = null !== c.buffer),
                (this._nativeAudioBufferSourceNode = u),
                (this._onended = null),
                (this._playbackRate = n(this, l, u.playbackRate, Y, H));
            }
            get buffer() {
              return this._isBufferNullified
                ? null
                : this._nativeAudioBufferSourceNode.buffer;
            }
            set buffer(t) {
              if (
                ((this._nativeAudioBufferSourceNode.buffer = t), null !== t)
              ) {
                if (this._isBufferSet) throw s();
                this._isBufferSet = !0;
              }
            }
            get loop() {
              return this._nativeAudioBufferSourceNode.loop;
            }
            set loop(t) {
              this._nativeAudioBufferSourceNode.loop = t;
            }
            get loopEnd() {
              return this._nativeAudioBufferSourceNode.loopEnd;
            }
            set loopEnd(t) {
              this._nativeAudioBufferSourceNode.loopEnd = t;
            }
            get loopStart() {
              return this._nativeAudioBufferSourceNode.loopStart;
            }
            set loopStart(t) {
              this._nativeAudioBufferSourceNode.loopStart = t;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              const e = "function" === typeof t ? a(this, t) : null;
              this._nativeAudioBufferSourceNode.onended = e;
              const n = this._nativeAudioBufferSourceNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            get playbackRate() {
              return this._playbackRate;
            }
            start(t = 0, e = 0, n) {
              if (
                (this._nativeAudioBufferSourceNode.start(t, e, n),
                null !== this._audioBufferSourceNodeRenderer &&
                  (this._audioBufferSourceNodeRenderer.start =
                    void 0 === n ? [t, e] : [t, e, n]),
                "closed" !== this.context.state)
              ) {
                M(this);
                const t = () => {
                  this._nativeAudioBufferSourceNode.removeEventListener(
                    "ended",
                    t
                  ),
                    X(this) && I(this);
                };
                this._nativeAudioBufferSourceNode.addEventListener("ended", t);
              }
            }
            stop(t = 0) {
              this._nativeAudioBufferSourceNode.stop(t),
                null !== this._audioBufferSourceNodeRenderer &&
                  (this._audioBufferSourceNodeRenderer.stop = t);
            }
          },
        J = (t, e, n, s, i) => () => {
          const r = new WeakMap();
          let o = null,
            a = null;
          const c = async (c, u, l) => {
            let h = n(c);
            const p = q(h, u);
            if (!p) {
              const t = {
                buffer: h.buffer,
                channelCount: h.channelCount,
                channelCountMode: h.channelCountMode,
                channelInterpretation: h.channelInterpretation,
                loop: h.loop,
                loopEnd: h.loopEnd,
                loopStart: h.loopStart,
                playbackRate: h.playbackRate.value,
              };
              (h = e(u, t)),
                null !== o && h.start(...o),
                null !== a && h.stop(a);
            }
            return (
              r.set(u, h),
              p
                ? await t(u, c.playbackRate, h.playbackRate, l)
                : await s(u, c.playbackRate, h.playbackRate, l),
              await i(c, u, h, l),
              h
            );
          };
          return {
            set start(t) {
              o = t;
            },
            set stop(t) {
              a = t;
            },
            render(t, e, n) {
              const s = r.get(e);
              return void 0 !== s ? Promise.resolve(s) : c(t, e, n);
            },
          };
        },
        K = (t) => "playbackRate" in t,
        tt = (t) => "frequency" in t && "gain" in t,
        et = (t) => "offset" in t,
        nt = (t) => !("frequency" in t) && "gain" in t,
        st = (t) => "detune" in t && "frequency" in t,
        it = (t) => "pan" in t,
        rt = (t) => S(l, t),
        ot = (t) => S(p, t),
        at = (t, e) => {
          const { activeInputs: n } = rt(t);
          n.forEach((n) =>
            n.forEach(([n]) => {
              e.includes(t) || at(n, [...e, t]);
            })
          );
          const s = K(t)
            ? [t.playbackRate]
            : j(t)
            ? Array.from(t.parameters.values())
            : tt(t)
            ? [t.Q, t.detune, t.frequency, t.gain]
            : et(t)
            ? [t.offset]
            : nt(t)
            ? [t.gain]
            : st(t)
            ? [t.detune, t.frequency]
            : it(t)
            ? [t.pan]
            : [];
          for (const i of s) {
            const t = ot(i);
            void 0 !== t && t.activeInputs.forEach(([t]) => at(t, e));
          }
          X(t) && I(t);
        },
        ct = (t) => {
          at(t.destination, []);
        },
        ut = (t) =>
          void 0 === t ||
          "number" === typeof t ||
          ("string" === typeof t &&
            ("balanced" === t || "interactive" === t || "playback" === t)),
        lt = (t, e, n, s, i, r, o, a, c) =>
          class extends t {
            constructor(t = {}) {
              if (null === c)
                throw new Error("Missing the native AudioContext constructor.");
              let e;
              try {
                e = new c(t);
              } catch (o) {
                if (12 === o.code && "sampleRate is not in range" === o.message)
                  throw n();
                throw o;
              }
              if (null === e) throw s();
              if (!ut(t.latencyHint))
                throw new TypeError(
                  `The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
                );
              if (void 0 !== t.sampleRate && e.sampleRate !== t.sampleRate)
                throw n();
              super(e, 2);
              const { latencyHint: i } = t,
                { sampleRate: r } = e;
              if (
                ((this._baseLatency =
                  "number" === typeof e.baseLatency
                    ? e.baseLatency
                    : "balanced" === i
                    ? 512 / r
                    : "interactive" === i || void 0 === i
                    ? 256 / r
                    : "playback" === i
                    ? 1024 / r
                    : (128 *
                        Math.max(2, Math.min(128, Math.round((i * r) / 128)))) /
                      r),
                (this._nativeAudioContext = e),
                "webkitAudioContext" === c.name
                  ? ((this._nativeGainNode = e.createGain()),
                    (this._nativeOscillatorNode = e.createOscillator()),
                    (this._nativeGainNode.gain.value = 1e-37),
                    this._nativeOscillatorNode
                      .connect(this._nativeGainNode)
                      .connect(e.destination),
                    this._nativeOscillatorNode.start())
                  : ((this._nativeGainNode = null),
                    (this._nativeOscillatorNode = null)),
                (this._state = null),
                "running" === e.state)
              ) {
                this._state = "suspended";
                const t = () => {
                  "suspended" === this._state && (this._state = null),
                    e.removeEventListener("statechange", t);
                };
                e.addEventListener("statechange", t);
              }
            }
            get baseLatency() {
              return this._baseLatency;
            }
            get state() {
              return null !== this._state
                ? this._state
                : this._nativeAudioContext.state;
            }
            close() {
              return "closed" === this.state
                ? this._nativeAudioContext.close().then(() => {
                    throw e();
                  })
                : ("suspended" === this._state && (this._state = null),
                  this._nativeAudioContext.close().then(() => {
                    null !== this._nativeGainNode &&
                      null !== this._nativeOscillatorNode &&
                      (this._nativeOscillatorNode.stop(),
                      this._nativeGainNode.disconnect(),
                      this._nativeOscillatorNode.disconnect()),
                      ct(this);
                  }));
            }
            createMediaElementSource(t) {
              return new i(this, { mediaElement: t });
            }
            createMediaStreamDestination() {
              return new r(this);
            }
            createMediaStreamSource(t) {
              return new o(this, { mediaStream: t });
            }
            createMediaStreamTrackSource(t) {
              return new a(this, { mediaStreamTrack: t });
            }
            resume() {
              return "suspended" === this._state
                ? new Promise((t, e) => {
                    const n = () => {
                      this._nativeAudioContext.removeEventListener(
                        "statechange",
                        n
                      ),
                        "running" === this._nativeAudioContext.state
                          ? t()
                          : this.resume().then(t, e);
                    };
                    this._nativeAudioContext.addEventListener("statechange", n);
                  })
                : this._nativeAudioContext.resume().catch((t) => {
                    if (void 0 === t || 15 === t.code) throw e();
                    throw t;
                  });
            }
            suspend() {
              return this._nativeAudioContext.suspend().catch((t) => {
                if (void 0 === t) throw e();
                throw t;
              });
            }
          },
        ht = (t, e, n, s, i, r, o, a) =>
          class extends t {
            constructor(t, n) {
              const s = r(t),
                c = o(s),
                u = i(s, n, c),
                l = c ? e(a) : null;
              super(t, !1, u, l),
                (this._isNodeOfNativeOfflineAudioContext = c),
                (this._nativeAudioDestinationNode = u);
            }
            get channelCount() {
              return this._nativeAudioDestinationNode.channelCount;
            }
            set channelCount(t) {
              if (this._isNodeOfNativeOfflineAudioContext) throw s();
              if (t > this._nativeAudioDestinationNode.maxChannelCount)
                throw n();
              this._nativeAudioDestinationNode.channelCount = t;
            }
            get channelCountMode() {
              return this._nativeAudioDestinationNode.channelCountMode;
            }
            set channelCountMode(t) {
              if (this._isNodeOfNativeOfflineAudioContext) throw s();
              this._nativeAudioDestinationNode.channelCountMode = t;
            }
            get maxChannelCount() {
              return this._nativeAudioDestinationNode.maxChannelCount;
            }
          },
        pt = (t) => {
          let e = null;
          const n = async (e, n, s) => {
            const i = n.destination;
            return await t(e, n, i, s), i;
          };
          return {
            render(t, s, i) {
              return null === e && (e = n(t, s, i)), e;
            },
          };
        },
        dt = (t, e, n, s, i, r, o, a) => (c, u) => {
          const l = u.listener,
            h = () => {
              const h = new Float32Array(1),
                p = e(u, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "speakers",
                  numberOfInputs: 9,
                }),
                d = o(u);
              let f = !1,
                m = [0, 0, -1, 0, 1, 0],
                g = [0, 0, 0];
              const _ = () => {
                  if (f) return;
                  f = !0;
                  const t = s(u, 256, 9, 0);
                  (t.onaudioprocess = ({ inputBuffer: t }) => {
                    const e = [
                      r(t, h, 0),
                      r(t, h, 1),
                      r(t, h, 2),
                      r(t, h, 3),
                      r(t, h, 4),
                      r(t, h, 5),
                    ];
                    e.some((t, e) => t !== m[e]) &&
                      (l.setOrientation(...e), (m = e));
                    const n = [r(t, h, 6), r(t, h, 7), r(t, h, 8)];
                    n.some((t, e) => t !== g[e]) &&
                      (l.setPosition(...n), (g = n));
                  }),
                    p.connect(t);
                },
                v = (t) => (e) => {
                  e !== m[t] && ((m[t] = e), l.setOrientation(...m));
                },
                y = (t) => (e) => {
                  e !== g[t] && ((g[t] = e), l.setPosition(...g));
                },
                b = (e, s, r) => {
                  const o = n(u, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    offset: s,
                  });
                  o.connect(p, 0, e),
                    o.start(),
                    Object.defineProperty(o.offset, "defaultValue", {
                      get() {
                        return s;
                      },
                    });
                  const l = t({ context: c }, d, o.offset, Y, H);
                  return (
                    a(
                      l,
                      "value",
                      (t) => () => t.call(l),
                      (t) => (e) => {
                        try {
                          t.call(l, e);
                        } catch (n) {
                          if (9 !== n.code) throw n;
                        }
                        _(), d && r(e);
                      }
                    ),
                    (l.cancelAndHoldAtTime = ((t) =>
                      d
                        ? () => {
                            throw i();
                          }
                        : (...e) => {
                            const n = t.apply(l, e);
                            return _(), n;
                          })(l.cancelAndHoldAtTime)),
                    (l.cancelScheduledValues = ((t) =>
                      d
                        ? () => {
                            throw i();
                          }
                        : (...e) => {
                            const n = t.apply(l, e);
                            return _(), n;
                          })(l.cancelScheduledValues)),
                    (l.exponentialRampToValueAtTime = ((t) =>
                      d
                        ? () => {
                            throw i();
                          }
                        : (...e) => {
                            const n = t.apply(l, e);
                            return _(), n;
                          })(l.exponentialRampToValueAtTime)),
                    (l.linearRampToValueAtTime = ((t) =>
                      d
                        ? () => {
                            throw i();
                          }
                        : (...e) => {
                            const n = t.apply(l, e);
                            return _(), n;
                          })(l.linearRampToValueAtTime)),
                    (l.setTargetAtTime = ((t) =>
                      d
                        ? () => {
                            throw i();
                          }
                        : (...e) => {
                            const n = t.apply(l, e);
                            return _(), n;
                          })(l.setTargetAtTime)),
                    (l.setValueAtTime = ((t) =>
                      d
                        ? () => {
                            throw i();
                          }
                        : (...e) => {
                            const n = t.apply(l, e);
                            return _(), n;
                          })(l.setValueAtTime)),
                    (l.setValueCurveAtTime = ((t) =>
                      d
                        ? () => {
                            throw i();
                          }
                        : (...e) => {
                            const n = t.apply(l, e);
                            return _(), n;
                          })(l.setValueCurveAtTime)),
                    l
                  );
                };
              return {
                forwardX: b(0, 0, v(0)),
                forwardY: b(1, 0, v(1)),
                forwardZ: b(2, -1, v(2)),
                positionX: b(6, 0, y(0)),
                positionY: b(7, 0, y(1)),
                positionZ: b(8, 0, y(2)),
                upX: b(3, 0, v(3)),
                upY: b(4, 1, v(4)),
                upZ: b(5, 0, v(5)),
              };
            },
            {
              forwardX: p,
              forwardY: d,
              forwardZ: f,
              positionX: m,
              positionY: g,
              positionZ: _,
              upX: v,
              upY: y,
              upZ: b,
            } = void 0 === l.forwardX ? h() : l;
          return {
            get forwardX() {
              return p;
            },
            get forwardY() {
              return d;
            },
            get forwardZ() {
              return f;
            },
            get positionX() {
              return m;
            },
            get positionY() {
              return g;
            },
            get positionZ() {
              return _;
            },
            get upX() {
              return v;
            },
            get upY() {
              return y;
            },
            get upZ() {
              return b;
            },
          };
        },
        ft = (t) => "context" in t,
        mt = (t) => ft(t[0]),
        gt = (t, e, n, s) => {
          for (const i of t)
            if (n(i)) {
              if (s) return !1;
              throw Error("The set contains at least one similar element.");
            }
          return t.add(e), !0;
        },
        _t = (t, e, [n, s], i) => {
          gt(t, [e, n, s], (t) => t[0] === e && t[1] === n, i);
        },
        vt = (t, [e, n, s], i) => {
          const r = t.get(e);
          void 0 === r
            ? t.set(e, new Set([[n, s]]))
            : gt(r, [n, s], (t) => t[0] === n, i);
        },
        yt = (t) => "inputs" in t,
        bt = (t, e, n, s) => {
          if (yt(e)) {
            const i = e.inputs[s];
            return t.connect(i, n, 0), [i, n, 0];
          }
          return t.connect(e, n, s), [e, n, s];
        },
        wt = (t, e, n) => {
          for (const s of t)
            if (s[0] === e && s[1] === n) return t.delete(s), s;
          return null;
        },
        xt = (t, e, n) => A(t, (t) => t[0] === e && t[1] === n),
        Tt = (t, e) => {
          const n = E(t);
          if (!n.delete(e))
            throw new Error("Missing the expected event listener.");
        },
        Ot = (t, e, n) => {
          const s = S(t, e),
            i = A(s, (t) => t[0] === n);
          return 0 === s.size && t.delete(e), i;
        },
        Ct = (t, e, n, s) => {
          yt(e) ? t.disconnect(e.inputs[s], n, 0) : t.disconnect(e, n, s);
        },
        St = (t) => S(h, t),
        At = (t) => S(d, t),
        kt = (t) => g.has(t),
        Et = (t) => !u.has(t),
        Mt = (t) =>
          new Promise((e) => {
            const n = t.createScriptProcessor(256, 1, 1),
              s = t.createGain(),
              i = t.createBuffer(1, 2, 44100),
              r = i.getChannelData(0);
            (r[0] = 1), (r[1] = 1);
            const o = t.createBufferSource();
            (o.buffer = i),
              (o.loop = !0),
              o.connect(n).connect(t.destination),
              o.connect(s),
              o.disconnect(s),
              (n.onaudioprocess = (s) => {
                const i = s.inputBuffer.getChannelData(0);
                Array.prototype.some.call(i, (t) => 1 === t) ? e(!0) : e(!1),
                  o.stop(),
                  (n.onaudioprocess = null),
                  o.disconnect(n),
                  n.disconnect(t.destination);
              }),
              o.start();
          }),
        jt = (t, e) => {
          const n = new Map();
          for (const s of t)
            for (const t of s) {
              const e = n.get(t);
              n.set(t, void 0 === e ? 1 : e + 1);
            }
          n.forEach((t, n) => e(n, t));
        },
        It = (t) => "context" in t,
        Dt = (t) => {
          const e = new Map();
          (t.connect = (
            (t) =>
            (n, s = 0, i = 0) => {
              const r = It(n) ? t(n, s, i) : t(n, s),
                o = e.get(n);
              return (
                void 0 === o
                  ? e.set(n, [{ input: i, output: s }])
                  : o.every((t) => t.input !== i || t.output !== s) &&
                    o.push({ input: i, output: s }),
                r
              );
            }
          )(t.connect.bind(t))),
            (t.disconnect = ((n) => (s, i, r) => {
              if ((n.apply(t), void 0 === s)) e.clear();
              else if ("number" === typeof s)
                for (const [t, n] of e) {
                  const i = n.filter((t) => t.output !== s);
                  0 === i.length ? e.delete(t) : e.set(t, i);
                }
              else if (e.has(s))
                if (void 0 === i) e.delete(s);
                else {
                  const t = e.get(s);
                  if (void 0 !== t) {
                    const n = t.filter(
                      (t) => t.output !== i && (t.input !== r || void 0 === r)
                    );
                    0 === n.length ? e.delete(s) : e.set(s, n);
                  }
                }
              for (const [n, o] of e)
                o.forEach((e) => {
                  It(n)
                    ? t.connect(n, e.output, e.input)
                    : t.connect(n, e.output);
                });
            })(t.disconnect));
        },
        Rt = (t, e, n, s) => {
          const { activeInputs: i, passiveInputs: r } = ot(e),
            { outputs: o } = rt(t),
            a = E(t),
            c = (o) => {
              const a = St(t),
                c = At(e);
              if (o) {
                const e = Ot(r, t, n);
                _t(i, t, e, !1), s || kt(t) || a.connect(c, n);
              } else {
                const e = xt(i, t, n);
                vt(r, e, !1), s || kt(t) || a.disconnect(c, n);
              }
            };
          return (
            !!gt(o, [e, n], (t) => t[0] === e && t[1] === n, !0) &&
            (a.add(c), X(t) ? _t(i, t, [n, c], !0) : vt(r, [t, n, c], !0), !0)
          );
        },
        Nt = (t, e, n, s) => {
          const { activeInputs: i, passiveInputs: r } = rt(e),
            o = wt(i[s], t, n);
          if (null === o) {
            const e = k(r, t, n, s);
            return [e[2], !1];
          }
          return [o[2], !0];
        },
        Pt = (t, e, n) => {
          const { activeInputs: s, passiveInputs: i } = ot(e),
            r = wt(s, t, n);
          if (null === r) {
            const e = Ot(i, t, n);
            return [e[1], !1];
          }
          return [r[2], !0];
        },
        Vt = (t, e, n, s, i) => {
          const [r, o] = Nt(t, n, s, i);
          if (
            (null !== r &&
              (Tt(t, r), !o || e || kt(t) || Ct(St(t), St(n), s, i)),
            X(n))
          ) {
            const { activeInputs: t } = rt(n);
            D(n, t);
          }
        },
        Ft = (t, e, n, s) => {
          const [i, r] = Pt(t, n, s);
          null !== i &&
            (Tt(t, i), !r || e || kt(t) || St(t).disconnect(At(n), s));
        },
        Lt = (t, e) => {
          const n = rt(t),
            s = [];
          for (const i of n.outputs)
            mt(i) ? Vt(t, e, ...i) : Ft(t, e, ...i), s.push(i[0]);
          return n.outputs.clear(), s;
        },
        qt = (t, e, n) => {
          const s = rt(t),
            i = [];
          for (const r of s.outputs)
            r[1] === n &&
              (mt(r) ? Vt(t, e, ...r) : Ft(t, e, ...r),
              i.push(r[0]),
              s.outputs.delete(r));
          return i;
        },
        Bt = (t, e, n, s, i) => {
          const r = rt(t);
          return Array.from(r.outputs)
            .filter(
              (t) =>
                t[0] === n &&
                (void 0 === s || t[1] === s) &&
                (void 0 === i || t[2] === i)
            )
            .map(
              (n) => (
                mt(n) ? Vt(t, e, ...n) : Ft(t, e, ...n),
                r.outputs.delete(n),
                n[0]
              )
            );
        },
        Wt = (t, e, n, s, i, r, o, a, c, u, l, p, d, f, g) =>
          class extends u {
            constructor(e, s, i, r) {
              super(i), (this._context = e), (this._nativeAudioNode = i);
              const o = l(e);
              p(o) && !0 !== n(Mt, () => Mt(o)) && Dt(i),
                h.set(this, i),
                m.set(this, new Set()),
                "closed" !== e.state && s && M(this),
                t(this, r, i);
            }
            get channelCount() {
              return this._nativeAudioNode.channelCount;
            }
            set channelCount(t) {
              this._nativeAudioNode.channelCount = t;
            }
            get channelCountMode() {
              return this._nativeAudioNode.channelCountMode;
            }
            set channelCountMode(t) {
              this._nativeAudioNode.channelCountMode = t;
            }
            get channelInterpretation() {
              return this._nativeAudioNode.channelInterpretation;
            }
            set channelInterpretation(t) {
              this._nativeAudioNode.channelInterpretation = t;
            }
            get context() {
              return this._context;
            }
            get numberOfInputs() {
              return this._nativeAudioNode.numberOfInputs;
            }
            get numberOfOutputs() {
              return this._nativeAudioNode.numberOfOutputs;
            }
            connect(t, n = 0, a = 0) {
              if (n < 0 || n >= this._nativeAudioNode.numberOfOutputs)
                throw i();
              const u = l(this._context),
                h = g(u);
              if (d(t) || f(t)) throw r();
              if (ft(t)) {
                const i = St(t);
                try {
                  const e = bt(this._nativeAudioNode, i, n, a),
                    s = Et(this);
                  (h || s) && this._nativeAudioNode.disconnect(...e),
                    "closed" !== this.context.state && !s && Et(t) && M(t);
                } catch (_) {
                  if (12 === _.code) throw r();
                  throw _;
                }
                const o = e(this, t, n, a, h);
                if (o) {
                  const e = c([this], t);
                  jt(e, s(h));
                }
                return t;
              }
              const p = At(t);
              if ("playbackRate" === p.name && 1024 === p.maxValue) throw o();
              try {
                this._nativeAudioNode.connect(p, n),
                  (h || Et(this)) && this._nativeAudioNode.disconnect(p, n);
              } catch (_) {
                if (12 === _.code) throw r();
                throw _;
              }
              const m = Rt(this, t, n, h);
              if (m) {
                const e = c([this], t);
                jt(e, s(h));
              }
            }
            disconnect(t, e, n) {
              let s;
              const o = l(this._context),
                u = g(o);
              if (void 0 === t) s = Lt(this, u);
              else if ("number" === typeof t) {
                if (t < 0 || t >= this.numberOfOutputs) throw i();
                s = qt(this, u, t);
              } else {
                if (void 0 !== e && (e < 0 || e >= this.numberOfOutputs))
                  throw i();
                if (ft(t) && void 0 !== n && (n < 0 || n >= t.numberOfInputs))
                  throw i();
                if (((s = Bt(this, u, t, e, n)), 0 === s.length)) throw r();
              }
              for (const i of s) {
                const t = c([this], i);
                jt(t, a);
              }
            }
          },
        Ut =
          (t, e, n, s, r, o, a, c, u, l, h, p, d) =>
          (f, m, g, _ = null, v = null) => {
            const y = new i["AutomationEventList"](g.defaultValue),
              b = m ? s(y) : null,
              w = {
                get defaultValue() {
                  return g.defaultValue;
                },
                get maxValue() {
                  return null === _ ? g.maxValue : _;
                },
                get minValue() {
                  return null === v ? g.minValue : v;
                },
                get value() {
                  return g.value;
                },
                set value(t) {
                  (g.value = t), w.setValueAtTime(t, f.context.currentTime);
                },
                cancelAndHoldAtTime(t) {
                  if ("function" === typeof g.cancelAndHoldAtTime)
                    null === b && y.flush(f.context.currentTime),
                      y.add(r(t)),
                      g.cancelAndHoldAtTime(t);
                  else {
                    const e = Array.from(y).pop();
                    null === b && y.flush(f.context.currentTime), y.add(r(t));
                    const n = Array.from(y).pop();
                    g.cancelScheduledValues(t),
                      e !== n &&
                        void 0 !== n &&
                        ("exponentialRampToValue" === n.type
                          ? g.exponentialRampToValueAtTime(n.value, n.endTime)
                          : "linearRampToValue" === n.type
                          ? g.linearRampToValueAtTime(n.value, n.endTime)
                          : "setValue" === n.type
                          ? g.setValueAtTime(n.value, n.startTime)
                          : "setValueCurve" === n.type &&
                            g.setValueCurveAtTime(
                              n.values,
                              n.startTime,
                              n.duration
                            ));
                  }
                  return w;
                },
                cancelScheduledValues(t) {
                  return (
                    null === b && y.flush(f.context.currentTime),
                    y.add(o(t)),
                    g.cancelScheduledValues(t),
                    w
                  );
                },
                exponentialRampToValueAtTime(t, e) {
                  if (0 === t) throw new RangeError();
                  if (!Number.isFinite(e) || e < 0) throw new RangeError();
                  return (
                    null === b && y.flush(f.context.currentTime),
                    y.add(a(t, e)),
                    g.exponentialRampToValueAtTime(t, e),
                    w
                  );
                },
                linearRampToValueAtTime(t, e) {
                  return (
                    null === b && y.flush(f.context.currentTime),
                    y.add(c(t, e)),
                    g.linearRampToValueAtTime(t, e),
                    w
                  );
                },
                setTargetAtTime(t, e, n) {
                  return (
                    null === b && y.flush(f.context.currentTime),
                    y.add(u(t, e, n)),
                    g.setTargetAtTime(t, e, n),
                    w
                  );
                },
                setValueAtTime(t, e) {
                  return (
                    null === b && y.flush(f.context.currentTime),
                    y.add(l(t, e)),
                    g.setValueAtTime(t, e),
                    w
                  );
                },
                setValueCurveAtTime(t, e, n) {
                  const s = t instanceof Float32Array ? t : new Float32Array(t);
                  if (null !== p && "webkitAudioContext" === p.name) {
                    const t = e + n,
                      i = f.context.sampleRate,
                      r = Math.ceil(e * i),
                      o = Math.floor(t * i),
                      a = o - r,
                      c = new Float32Array(a);
                    for (let l = 0; l < a; l += 1) {
                      const t = ((s.length - 1) / n) * ((r + l) / i - e),
                        o = Math.floor(t),
                        a = Math.ceil(t);
                      c[l] =
                        o === a
                          ? s[o]
                          : (1 - (t - o)) * s[o] + (1 - (a - t)) * s[a];
                    }
                    null === b && y.flush(f.context.currentTime),
                      y.add(h(c, e, n)),
                      g.setValueCurveAtTime(c, e, n);
                    const u = o / i;
                    u < t && d(w, c[c.length - 1], u), d(w, s[s.length - 1], t);
                  } else
                    null === b && y.flush(f.context.currentTime),
                      y.add(h(s, e, n)),
                      g.setValueCurveAtTime(s, e, n);
                  return w;
                },
              };
            return n.set(w, g), e.set(w, f), t(w, b), w;
          },
        zt = (t) => ({
          replay(e) {
            for (const n of t)
              if ("exponentialRampToValue" === n.type) {
                const { endTime: t, value: s } = n;
                e.exponentialRampToValueAtTime(s, t);
              } else if ("linearRampToValue" === n.type) {
                const { endTime: t, value: s } = n;
                e.linearRampToValueAtTime(s, t);
              } else if ("setTarget" === n.type) {
                const { startTime: t, target: s, timeConstant: i } = n;
                e.setTargetAtTime(s, t, i);
              } else if ("setValue" === n.type) {
                const { startTime: t, value: s } = n;
                e.setValueAtTime(s, t);
              } else {
                if ("setValueCurve" !== n.type)
                  throw new Error("Can't apply an unknown automation.");
                {
                  const { duration: t, startTime: s, values: i } = n;
                  e.setValueCurveAtTime(i, s, t);
                }
              }
          },
        });
      class Gt {
        constructor(t) {
          this._map = new Map(t);
        }
        get size() {
          return this._map.size;
        }
        entries() {
          return this._map.entries();
        }
        forEach(t, e = null) {
          return this._map.forEach((n, s) => t.call(e, n, s, this));
        }
        get(t) {
          return this._map.get(t);
        }
        has(t) {
          return this._map.has(t);
        }
        keys() {
          return this._map.keys();
        }
        values() {
          return this._map.values();
        }
      }
      const $t = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 1,
          numberOfOutputs: 1,
          parameterData: {},
          processorOptions: {},
        },
        Ht = (t, e, n, s, i, r, o, a, c, u, l, h, p, d) =>
          class extends e {
            constructor(e, d, f) {
              var m;
              const g = a(e),
                v = c(g),
                y = l({ ...$t, ...f });
              p(y);
              const b = _.get(g),
                w = null === b || void 0 === b ? void 0 : b.get(d),
                x =
                  v || "closed" !== g.state
                    ? g
                    : null !== (m = o(g)) && void 0 !== m
                    ? m
                    : g,
                T = i(x, v ? null : e.baseLatency, u, d, w, y),
                O = v ? s(d, y, w) : null;
              super(e, !0, T, O);
              const C = [];
              T.parameters.forEach((t, e) => {
                const s = n(this, v, t);
                C.push([e, s]);
              }),
                (this._nativeAudioWorkletNode = T),
                (this._onprocessorerror = null),
                (this._parameters = new Gt(C)),
                v && t(g, this);
              const { activeInputs: S } = r(this);
              h(T, S);
            }
            get onprocessorerror() {
              return this._onprocessorerror;
            }
            set onprocessorerror(t) {
              const e = "function" === typeof t ? d(this, t) : null;
              this._nativeAudioWorkletNode.onprocessorerror = e;
              const n = this._nativeAudioWorkletNode.onprocessorerror;
              this._onprocessorerror = null !== n && n === e ? t : n;
            }
            get parameters() {
              return null === this._parameters
                ? this._nativeAudioWorkletNode.parameters
                : this._parameters;
            }
            get port() {
              return this._nativeAudioWorkletNode.port;
            }
          };
      function Yt(t, e, n, s, i) {
        if ("function" === typeof t.copyFromChannel)
          0 === e[n].byteLength && (e[n] = new Float32Array(128)),
            t.copyFromChannel(e[n], s, i);
        else {
          const r = t.getChannelData(s);
          if (0 === e[n].byteLength) e[n] = r.slice(i, i + 128);
          else {
            const t = new Float32Array(
              r.buffer,
              i * Float32Array.BYTES_PER_ELEMENT,
              128
            );
            e[n].set(t);
          }
        }
      }
      const Xt = (t, e, n, s, i) => {
          "function" === typeof t.copyToChannel
            ? 0 !== e[n].byteLength && t.copyToChannel(e[n], s, i)
            : 0 !== e[n].byteLength && t.getChannelData(s).set(e[n], i);
        },
        Zt = (t, e) => {
          const n = [];
          for (let s = 0; s < t; s += 1) {
            const t = [],
              i = "number" === typeof e ? e : e[s];
            for (let e = 0; e < i; e += 1) t.push(new Float32Array(128));
            n.push(t);
          }
          return n;
        },
        Qt = (t, e) => {
          const n = S(v, t),
            s = St(e);
          return S(n, s);
        },
        Jt = async (t, e, n, s, i, r, o) => {
          const a =
              null === e ? 128 * Math.ceil(t.context.length / 128) : e.length,
            c = s.channelCount * s.numberOfInputs,
            u = i.reduce((t, e) => t + e, 0),
            l = 0 === u ? null : n.createBuffer(u, a, n.sampleRate);
          if (void 0 === r)
            throw new Error("Missing the processor constructor.");
          const h = rt(t),
            p = await Qt(n, t),
            d = Zt(s.numberOfInputs, s.channelCount),
            f = Zt(s.numberOfOutputs, i),
            m = Array.from(t.parameters.keys()).reduce(
              (t, e) => ({ ...t, [e]: new Float32Array(128) }),
              {}
            );
          for (let _ = 0; _ < a; _ += 128) {
            if (s.numberOfInputs > 0 && null !== e)
              for (let t = 0; t < s.numberOfInputs; t += 1)
                for (let n = 0; n < s.channelCount; n += 1)
                  Yt(e, d[t], n, n, _);
            void 0 !== r.parameterDescriptors &&
              null !== e &&
              r.parameterDescriptors.forEach(({ name: t }, n) => {
                Yt(e, m, t, c + n, _);
              });
            for (let t = 0; t < s.numberOfInputs; t += 1)
              for (let e = 0; e < i[t]; e += 1)
                0 === f[t][e].byteLength && (f[t][e] = new Float32Array(128));
            try {
              const t = d.map((t, e) =>
                  0 === h.activeInputs[e].size ? [] : t
                ),
                e = o(_ / n.sampleRate, n.sampleRate, () => p.process(t, f, m));
              if (null !== l)
                for (let n = 0, r = 0; n < s.numberOfOutputs; n += 1) {
                  for (let t = 0; t < i[n]; t += 1) Xt(l, f[n], t, r + t, _);
                  r += i[n];
                }
              if (!e) break;
            } catch (g) {
              t.dispatchEvent(
                new ErrorEvent("processorerror", {
                  colno: g.colno,
                  filename: g.filename,
                  lineno: g.lineno,
                  message: g.message,
                })
              );
              break;
            }
          }
          return l;
        },
        Kt = (t, e, n, s, i, r, o, a, c, u, l, h, p, d, f, m) => (g, _, v) => {
          const y = new WeakMap();
          let b = null;
          const w = async (a, w, x) => {
            let T = l(a),
              O = null;
            const C = q(T, w),
              S = Array.isArray(_.outputChannelCount)
                ? _.outputChannelCount
                : Array.from(_.outputChannelCount);
            if (null === h) {
              const t = S.reduce((t, e) => t + e, 0),
                n = i(w, {
                  channelCount: Math.max(1, t),
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: Math.max(1, t),
                }),
                r = [];
              for (let e = 0; e < a.numberOfOutputs; e += 1)
                r.push(
                  s(w, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: S[e],
                  })
                );
              const u = o(w, {
                channelCount: _.channelCount,
                channelCountMode: _.channelCountMode,
                channelInterpretation: _.channelInterpretation,
                gain: 1,
              });
              (u.connect = e.bind(null, r)),
                (u.disconnect = c.bind(null, r)),
                (O = [n, r, u]);
            } else C || (T = new h(w, g));
            if ((y.set(w, null === O ? T : O[2]), null !== O)) {
              if (null === b) {
                if (void 0 === v)
                  throw new Error("Missing the processor constructor.");
                if (null === p)
                  throw new Error(
                    "Missing the native OfflineAudioContext constructor."
                  );
                const t = a.channelCount * a.numberOfInputs,
                  e =
                    void 0 === v.parameterDescriptors
                      ? 0
                      : v.parameterDescriptors.length,
                  n = t + e,
                  c = async () => {
                    const c = new p(
                        n,
                        128 * Math.ceil(a.context.length / 128),
                        w.sampleRate
                      ),
                      u = [],
                      l = [];
                    for (let t = 0; t < _.numberOfInputs; t += 1)
                      u.push(
                        o(c, {
                          channelCount: _.channelCount,
                          channelCountMode: _.channelCountMode,
                          channelInterpretation: _.channelInterpretation,
                          gain: 1,
                        })
                      ),
                        l.push(
                          i(c, {
                            channelCount: _.channelCount,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            numberOfOutputs: _.channelCount,
                          })
                        );
                    const h = await Promise.all(
                        Array.from(a.parameters.values()).map(async (t) => {
                          const e = r(c, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: t.value,
                          });
                          return await d(c, t, e.offset, x), e;
                        })
                      ),
                      g = s(c, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: Math.max(1, t + e),
                      });
                    for (let t = 0; t < _.numberOfInputs; t += 1) {
                      u[t].connect(l[t]);
                      for (let e = 0; e < _.channelCount; e += 1)
                        l[t].connect(g, e, t * _.channelCount + e);
                    }
                    for (const [e, n] of h.entries())
                      n.connect(g, 0, t + e), n.start(0);
                    return (
                      g.connect(c.destination),
                      await Promise.all(u.map((t) => f(a, c, t, x))),
                      m(c)
                    );
                  };
                b = Jt(a, 0 === n ? null : await c(), w, _, S, v, u);
              }
              const t = await b,
                e = n(w, {
                  buffer: null,
                  channelCount: 2,
                  channelCountMode: "max",
                  channelInterpretation: "speakers",
                  loop: !1,
                  loopEnd: 0,
                  loopStart: 0,
                  playbackRate: 1,
                }),
                [c, l, h] = O;
              null !== t && ((e.buffer = t), e.start(0)), e.connect(c);
              for (let n = 0, s = 0; n < a.numberOfOutputs; n += 1) {
                const t = l[n];
                for (let e = 0; e < S[n]; e += 1) c.connect(t, s + e, e);
                s += S[n];
              }
              return h;
            }
            if (C)
              for (const [e, n] of a.parameters.entries())
                await t(w, n, T.parameters.get(e), x);
            else
              for (const [t, e] of a.parameters.entries())
                await d(w, e, T.parameters.get(t), x);
            return await f(a, w, T, x), T;
          };
          return {
            render(t, e, n) {
              a(e, t);
              const s = y.get(e);
              return void 0 !== s ? Promise.resolve(s) : w(t, e, n);
            },
          };
        },
        te = (t, e, n, s, i, r, o, a, c, u, l, h, p, d, f, m, g, _, v, y) =>
          class extends f {
            constructor(e, n) {
              super(e, n),
                (this._nativeContext = e),
                (this._audioWorklet =
                  void 0 === t
                    ? void 0
                    : { addModule: (e, n) => t(this, e, n) });
            }
            get audioWorklet() {
              return this._audioWorklet;
            }
            createAnalyser() {
              return new e(this);
            }
            createBiquadFilter() {
              return new i(this);
            }
            createBuffer(t, e, s) {
              return new n({ length: e, numberOfChannels: t, sampleRate: s });
            }
            createBufferSource() {
              return new s(this);
            }
            createChannelMerger(t = 6) {
              return new r(this, { numberOfInputs: t });
            }
            createChannelSplitter(t = 6) {
              return new o(this, { numberOfOutputs: t });
            }
            createConstantSource() {
              return new a(this);
            }
            createConvolver() {
              return new c(this);
            }
            createDelay(t = 1) {
              return new l(this, { maxDelayTime: t });
            }
            createDynamicsCompressor() {
              return new h(this);
            }
            createGain() {
              return new p(this);
            }
            createIIRFilter(t, e) {
              return new d(this, { feedback: e, feedforward: t });
            }
            createOscillator() {
              return new m(this);
            }
            createPanner() {
              return new g(this);
            }
            createPeriodicWave(t, e, n = { disableNormalization: !1 }) {
              return new _(this, { ...n, imag: e, real: t });
            }
            createStereoPanner() {
              return new v(this);
            }
            createWaveShaper() {
              return new y(this);
            }
            decodeAudioData(t, e, n) {
              return u(this._nativeContext, t).then(
                (t) => ("function" === typeof e && e(t), t),
                (t) => {
                  throw ("function" === typeof n && n(t), t);
                }
              );
            }
          },
        ee = {
          Q: 1,
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 350,
          gain: 0,
          type: "lowpass",
        },
        ne = (t, e, n, s, i, r, o, a) =>
          class extends t {
            constructor(t, s) {
              const c = r(t),
                u = { ...ee, ...s },
                l = i(c, u),
                h = o(c),
                p = h ? n() : null;
              super(t, !1, l, p),
                (this._Q = e(this, h, l.Q, Y, H)),
                (this._detune = e(
                  this,
                  h,
                  l.detune,
                  1200 * Math.log2(Y),
                  -1200 * Math.log2(Y)
                )),
                (this._frequency = e(
                  this,
                  h,
                  l.frequency,
                  t.sampleRate / 2,
                  0
                )),
                (this._gain = e(this, h, l.gain, 40 * Math.log10(Y), H)),
                (this._nativeBiquadFilterNode = l),
                a(this, 1);
            }
            get detune() {
              return this._detune;
            }
            get frequency() {
              return this._frequency;
            }
            get gain() {
              return this._gain;
            }
            get Q() {
              return this._Q;
            }
            get type() {
              return this._nativeBiquadFilterNode.type;
            }
            set type(t) {
              this._nativeBiquadFilterNode.type = t;
            }
            getFrequencyResponse(t, e, n) {
              try {
                this._nativeBiquadFilterNode.getFrequencyResponse(t, e, n);
              } catch (i) {
                if (11 === i.code) throw s();
                throw i;
              }
              if (t.length !== e.length || e.length !== n.length) throw s();
            }
          },
        se = (t, e, n, s, i) => () => {
          const r = new WeakMap(),
            o = async (o, a, c) => {
              let u = n(o);
              const l = q(u, a);
              if (!l) {
                const t = {
                  Q: u.Q.value,
                  channelCount: u.channelCount,
                  channelCountMode: u.channelCountMode,
                  channelInterpretation: u.channelInterpretation,
                  detune: u.detune.value,
                  frequency: u.frequency.value,
                  gain: u.gain.value,
                  type: u.type,
                };
                u = e(a, t);
              }
              return (
                r.set(a, u),
                l
                  ? (await t(a, o.Q, u.Q, c),
                    await t(a, o.detune, u.detune, c),
                    await t(a, o.frequency, u.frequency, c),
                    await t(a, o.gain, u.gain, c))
                  : (await s(a, o.Q, u.Q, c),
                    await s(a, o.detune, u.detune, c),
                    await s(a, o.frequency, u.frequency, c),
                    await s(a, o.gain, u.gain, c)),
                await i(o, a, u, c),
                u
              );
            };
          return {
            render(t, e, n) {
              const s = r.get(e);
              return void 0 !== s ? Promise.resolve(s) : o(t, e, n);
            },
          };
        },
        ie = (t, e) => (n, s) => {
          const i = e.get(n);
          if (void 0 !== i) return i;
          const r = t.get(n);
          if (void 0 !== r) return r;
          try {
            const i = s();
            return i instanceof Promise
              ? (t.set(n, i),
                i.catch(() => !1).then((s) => (t.delete(n), e.set(n, s), s)))
              : (e.set(n, i), i);
          } catch {
            return e.set(n, !1), !1;
          }
        },
        re = {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 6,
        },
        oe = (t, e, n, s, i) =>
          class extends t {
            constructor(t, r) {
              const o = s(t),
                a = { ...re, ...r },
                c = n(o, a),
                u = i(o) ? e() : null;
              super(t, !1, c, u);
            }
          },
        ae = (t, e, n) => () => {
          const s = new WeakMap(),
            i = async (i, r, o) => {
              let a = e(i);
              const c = q(a, r);
              if (!c) {
                const e = {
                  channelCount: a.channelCount,
                  channelCountMode: a.channelCountMode,
                  channelInterpretation: a.channelInterpretation,
                  numberOfInputs: a.numberOfInputs,
                };
                a = t(r, e);
              }
              return s.set(r, a), await n(i, r, a, o), a;
            };
          return {
            render(t, e, n) {
              const r = s.get(e);
              return void 0 !== r ? Promise.resolve(r) : i(t, e, n);
            },
          };
        },
        ce = {
          channelCount: 6,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: 6,
        },
        ue = (t, e, n, s, i, r) =>
          class extends t {
            constructor(t, o) {
              const a = s(t),
                c = r({ ...ce, ...o }),
                u = n(a, c),
                l = i(a) ? e() : null;
              super(t, !1, u, l);
            }
          },
        le = (t, e, n) => () => {
          const s = new WeakMap(),
            i = async (i, r, o) => {
              let a = e(i);
              const c = q(a, r);
              if (!c) {
                const e = {
                  channelCount: a.channelCount,
                  channelCountMode: a.channelCountMode,
                  channelInterpretation: a.channelInterpretation,
                  numberOfOutputs: a.numberOfOutputs,
                };
                a = t(r, e);
              }
              return s.set(r, a), await n(i, r, a, o), a;
            };
          return {
            render(t, e, n) {
              const r = s.get(e);
              return void 0 !== r ? Promise.resolve(r) : i(t, e, n);
            },
          };
        },
        he = (t) => (e, n, s, i) => t(n, e, s, i),
        pe =
          (t) =>
          (e, n, s = 0, i = 0) => {
            const r = e[s];
            if (void 0 === r) throw t();
            return It(n) ? r.connect(n, 0, i) : r.connect(n, 0);
          },
        de = (t) => (e, n) => {
          const s = t(e, {
              buffer: null,
              channelCount: 2,
              channelCountMode: "max",
              channelInterpretation: "speakers",
              loop: !1,
              loopEnd: 0,
              loopStart: 0,
              playbackRate: 1,
            }),
            i = e.createBuffer(1, 2, 44100);
          return (
            (s.buffer = i),
            (s.loop = !0),
            s.connect(n),
            s.start(),
            () => {
              s.stop(), s.disconnect(n);
            }
          );
        },
        fe = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          offset: 1,
        },
        me = (t, e, n, s, i, r, o) =>
          class extends t {
            constructor(t, o) {
              const a = i(t),
                c = { ...fe, ...o },
                u = s(a, c),
                l = r(a),
                h = l ? n() : null;
              super(t, !1, u, h),
                (this._constantSourceNodeRenderer = h),
                (this._nativeConstantSourceNode = u),
                (this._offset = e(this, l, u.offset, Y, H)),
                (this._onended = null);
            }
            get offset() {
              return this._offset;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              const e = "function" === typeof t ? o(this, t) : null;
              this._nativeConstantSourceNode.onended = e;
              const n = this._nativeConstantSourceNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            start(t = 0) {
              if (
                (this._nativeConstantSourceNode.start(t),
                null !== this._constantSourceNodeRenderer &&
                  (this._constantSourceNodeRenderer.start = t),
                "closed" !== this.context.state)
              ) {
                M(this);
                const t = () => {
                  this._nativeConstantSourceNode.removeEventListener(
                    "ended",
                    t
                  ),
                    X(this) && I(this);
                };
                this._nativeConstantSourceNode.addEventListener("ended", t);
              }
            }
            stop(t = 0) {
              this._nativeConstantSourceNode.stop(t),
                null !== this._constantSourceNodeRenderer &&
                  (this._constantSourceNodeRenderer.stop = t);
            }
          },
        ge = (t, e, n, s, i) => () => {
          const r = new WeakMap();
          let o = null,
            a = null;
          const c = async (c, u, l) => {
            let h = n(c);
            const p = q(h, u);
            if (!p) {
              const t = {
                channelCount: h.channelCount,
                channelCountMode: h.channelCountMode,
                channelInterpretation: h.channelInterpretation,
                offset: h.offset.value,
              };
              (h = e(u, t)), null !== o && h.start(o), null !== a && h.stop(a);
            }
            return (
              r.set(u, h),
              p
                ? await t(u, c.offset, h.offset, l)
                : await s(u, c.offset, h.offset, l),
              await i(c, u, h, l),
              h
            );
          };
          return {
            set start(t) {
              o = t;
            },
            set stop(t) {
              a = t;
            },
            render(t, e, n) {
              const s = r.get(e);
              return void 0 !== s ? Promise.resolve(s) : c(t, e, n);
            },
          };
        },
        _e = (t) => (e) => (t[0] = e), t[0],
        ve = {
          buffer: null,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          disableNormalization: !1,
        },
        ye = (t, e, n, s, i, r) =>
          class extends t {
            constructor(t, o) {
              const a = s(t),
                c = { ...ve, ...o },
                u = n(a, c),
                l = i(a),
                h = l ? e() : null;
              super(t, !1, u, h),
                (this._isBufferNullified = !1),
                (this._nativeConvolverNode = u),
                null !== c.buffer && r(this, c.buffer.duration);
            }
            get buffer() {
              return this._isBufferNullified
                ? null
                : this._nativeConvolverNode.buffer;
            }
            set buffer(t) {
              if (
                ((this._nativeConvolverNode.buffer = t),
                null === t && null !== this._nativeConvolverNode.buffer)
              ) {
                const t = this._nativeConvolverNode.context;
                (this._nativeConvolverNode.buffer = t.createBuffer(
                  1,
                  1,
                  44100
                )),
                  (this._isBufferNullified = !0),
                  r(this, 0);
              } else
                (this._isBufferNullified = !1),
                  r(
                    this,
                    null === this._nativeConvolverNode.buffer
                      ? 0
                      : this._nativeConvolverNode.buffer.duration
                  );
            }
            get normalize() {
              return this._nativeConvolverNode.normalize;
            }
            set normalize(t) {
              this._nativeConvolverNode.normalize = t;
            }
          },
        be = (t, e, n) => () => {
          const s = new WeakMap(),
            i = async (i, r, o) => {
              let a = e(i);
              const c = q(a, r);
              if (!c) {
                const e = {
                  buffer: a.buffer,
                  channelCount: a.channelCount,
                  channelCountMode: a.channelCountMode,
                  channelInterpretation: a.channelInterpretation,
                  disableNormalization: !a.normalize,
                };
                a = t(r, e);
              }
              return (
                s.set(r, a),
                yt(a) ? await n(i, r, a.inputs[0], o) : await n(i, r, a, o),
                a
              );
            };
          return {
            render(t, e, n) {
              const r = s.get(e);
              return void 0 !== r ? Promise.resolve(r) : i(t, e, n);
            },
          };
        },
        we = (t, e) => (n, s, i) => {
          if (null === e)
            throw new Error(
              "Missing the native OfflineAudioContext constructor."
            );
          try {
            return new e(n, s, i);
          } catch (r) {
            if ("SyntaxError" === r.name) throw t();
            throw r;
          }
        },
        xe = () => new DOMException("", "DataCloneError"),
        Te = (t) => {
          const { port1: e, port2: n } = new MessageChannel();
          return new Promise((s) => {
            const i = () => {
              (n.onmessage = null), e.close(), n.close(), s();
            };
            n.onmessage = () => i();
            try {
              e.postMessage(t, [t]);
            } finally {
              i();
            }
          });
        },
        Oe = (t, e, n, s, i, r, o, a, c, u, l) => (h, p) => {
          const d = o(h) ? h : r(h);
          if (i.has(p)) {
            const t = n();
            return Promise.reject(t);
          }
          try {
            i.add(p);
          } catch {}
          return e(c, () => c(d))
            ? d
                .decodeAudioData(p)
                .then(
                  (n) => (
                    Te(p).catch(() => {}), e(a, () => a(n)) || l(n), t.add(n), n
                  )
                )
            : new Promise((e, n) => {
                const i = async () => {
                    try {
                      await Te(p);
                    } catch {}
                  },
                  r = (t) => {
                    n(t), i();
                  };
                try {
                  d.decodeAudioData(
                    p,
                    (n) => {
                      "function" !== typeof n.copyFromChannel && (u(n), z(n)),
                        t.add(n),
                        i().then(() => e(n));
                    },
                    (t) => {
                      r(null === t ? s() : t);
                    }
                  );
                } catch (o) {
                  r(o);
                }
              });
        },
        Ce = (t, e, n, s, i, r, o, a) => (c, u) => {
          const l = e.get(c);
          if (void 0 === l)
            throw new Error("Missing the expected cycle count.");
          const h = r(c.context),
            p = a(h);
          if (l === u) {
            if ((e.delete(c), !p && o(c))) {
              const e = s(c),
                { outputs: r } = n(c);
              for (const n of r)
                if (mt(n)) {
                  const i = s(n[0]);
                  t(e, i, n[1], n[2]);
                } else {
                  const t = i(n[0]);
                  e.connect(t, n[1]);
                }
            }
          } else e.set(c, l - u);
        },
        Se = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          delayTime: 0,
          maxDelayTime: 1,
        },
        Ae = (t, e, n, s, i, r, o) =>
          class extends t {
            constructor(t, a) {
              const c = i(t),
                u = { ...Se, ...a },
                l = s(c, u),
                h = r(c),
                p = h ? n(u.maxDelayTime) : null;
              super(t, !1, l, p),
                (this._delayTime = e(this, h, l.delayTime)),
                o(this, u.maxDelayTime);
            }
            get delayTime() {
              return this._delayTime;
            }
          },
        ke = (t, e, n, s, i) => (r) => {
          const o = new WeakMap(),
            a = async (a, c, u) => {
              let l = n(a);
              const h = q(l, c);
              if (!h) {
                const t = {
                  channelCount: l.channelCount,
                  channelCountMode: l.channelCountMode,
                  channelInterpretation: l.channelInterpretation,
                  delayTime: l.delayTime.value,
                  maxDelayTime: r,
                };
                l = e(c, t);
              }
              return (
                o.set(c, l),
                h
                  ? await t(c, a.delayTime, l.delayTime, u)
                  : await s(c, a.delayTime, l.delayTime, u),
                await i(a, c, l, u),
                l
              );
            };
          return {
            render(t, e, n) {
              const s = o.get(e);
              return void 0 !== s ? Promise.resolve(s) : a(t, e, n);
            },
          };
        },
        Ee = (t) => (e, n, s, i) => t(e[i], (t) => t[0] === n && t[1] === s),
        Me = (t) => (e, n) => {
          t(e).delete(n);
        },
        je = (t) => "delayTime" in t,
        Ie = (t, e, n) =>
          function s(i, r) {
            const o = ft(r) ? r : n(t, r);
            if (je(o)) return [];
            if (i[0] === o) return [i];
            if (i.includes(o)) return [];
            const { outputs: a } = e(o);
            return Array.from(a)
              .map((t) => s([...i, o], t[0]))
              .reduce((t, e) => t.concat(e), []);
          },
        De = (t, e, n) => {
          const s = e[n];
          if (void 0 === s) throw t();
          return s;
        },
        Re =
          (t) =>
          (e, n, s, i = 0) =>
            void 0 === n
              ? e.forEach((t) => t.disconnect())
              : "number" === typeof n
              ? De(t, e, n).disconnect()
              : It(n)
              ? void 0 === s
                ? e.forEach((t) => t.disconnect(n))
                : void 0 === i
                ? De(t, e, s).disconnect(n, 0)
                : De(t, e, s).disconnect(n, 0, i)
              : void 0 === s
              ? e.forEach((t) => t.disconnect(n))
              : De(t, e, s).disconnect(n, 0),
        Ne = {
          attack: 0.003,
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          knee: 30,
          ratio: 12,
          release: 0.25,
          threshold: -24,
        },
        Pe = (t, e, n, s, i, r, o, a) =>
          class extends t {
            constructor(t, i) {
              const c = r(t),
                u = { ...Ne, ...i },
                l = s(c, u),
                h = o(c),
                p = h ? n() : null;
              super(t, !1, l, p),
                (this._attack = e(this, h, l.attack)),
                (this._knee = e(this, h, l.knee)),
                (this._nativeDynamicsCompressorNode = l),
                (this._ratio = e(this, h, l.ratio)),
                (this._release = e(this, h, l.release)),
                (this._threshold = e(this, h, l.threshold)),
                a(this, 0.006);
            }
            get attack() {
              return this._attack;
            }
            get channelCount() {
              return this._nativeDynamicsCompressorNode.channelCount;
            }
            set channelCount(t) {
              const e = this._nativeDynamicsCompressorNode.channelCount;
              if (
                ((this._nativeDynamicsCompressorNode.channelCount = t), t > 2)
              )
                throw (
                  ((this._nativeDynamicsCompressorNode.channelCount = e), i())
                );
            }
            get channelCountMode() {
              return this._nativeDynamicsCompressorNode.channelCountMode;
            }
            set channelCountMode(t) {
              const e = this._nativeDynamicsCompressorNode.channelCountMode;
              if (
                ((this._nativeDynamicsCompressorNode.channelCountMode = t),
                "max" === t)
              )
                throw (
                  ((this._nativeDynamicsCompressorNode.channelCountMode = e),
                  i())
                );
            }
            get knee() {
              return this._knee;
            }
            get ratio() {
              return this._ratio;
            }
            get reduction() {
              return "number" ===
                typeof this._nativeDynamicsCompressorNode.reduction.value
                ? this._nativeDynamicsCompressorNode.reduction.value
                : this._nativeDynamicsCompressorNode.reduction;
            }
            get release() {
              return this._release;
            }
            get threshold() {
              return this._threshold;
            }
          },
        Ve = (t, e, n, s, i) => () => {
          const r = new WeakMap(),
            o = async (o, a, c) => {
              let u = n(o);
              const l = q(u, a);
              if (!l) {
                const t = {
                  attack: u.attack.value,
                  channelCount: u.channelCount,
                  channelCountMode: u.channelCountMode,
                  channelInterpretation: u.channelInterpretation,
                  knee: u.knee.value,
                  ratio: u.ratio.value,
                  release: u.release.value,
                  threshold: u.threshold.value,
                };
                u = e(a, t);
              }
              return (
                r.set(a, u),
                l
                  ? (await t(a, o.attack, u.attack, c),
                    await t(a, o.knee, u.knee, c),
                    await t(a, o.ratio, u.ratio, c),
                    await t(a, o.release, u.release, c),
                    await t(a, o.threshold, u.threshold, c))
                  : (await s(a, o.attack, u.attack, c),
                    await s(a, o.knee, u.knee, c),
                    await s(a, o.ratio, u.ratio, c),
                    await s(a, o.release, u.release, c),
                    await s(a, o.threshold, u.threshold, c)),
                await i(o, a, u, c),
                u
              );
            };
          return {
            render(t, e, n) {
              const s = r.get(e);
              return void 0 !== s ? Promise.resolve(s) : o(t, e, n);
            },
          };
        },
        Fe = () => new DOMException("", "EncodingError"),
        Le = (t) => (e) =>
          new Promise((n, s) => {
            if (null === t) return void s(new SyntaxError());
            const i = t.document.head;
            if (null === i) s(new SyntaxError());
            else {
              const r = t.document.createElement("script"),
                o = new Blob([e], { type: "application/javascript" }),
                a = URL.createObjectURL(o),
                c = t.onerror,
                u = () => {
                  (t.onerror = c), URL.revokeObjectURL(a);
                };
              (t.onerror = (e, n, i, r, o) =>
                n === a || (n === t.location.href && 1 === i && 1 === r)
                  ? (u(), s(o), !1)
                  : null !== c
                  ? c(e, n, i, r, o)
                  : void 0),
                (r.onerror = () => {
                  u(), s(new SyntaxError());
                }),
                (r.onload = () => {
                  u(), n();
                }),
                (r.src = a),
                (r.type = "module"),
                i.appendChild(r);
            }
          }),
        qe = (t) =>
          class {
            constructor(t) {
              (this._nativeEventTarget = t), (this._listeners = new WeakMap());
            }
            addEventListener(e, n, s) {
              if (null !== n) {
                let i = this._listeners.get(n);
                void 0 === i &&
                  ((i = t(this, n)),
                  "function" === typeof n && this._listeners.set(n, i)),
                  this._nativeEventTarget.addEventListener(e, i, s);
              }
            }
            dispatchEvent(t) {
              return this._nativeEventTarget.dispatchEvent(t);
            }
            removeEventListener(t, e, n) {
              const s = null === e ? void 0 : this._listeners.get(e);
              this._nativeEventTarget.removeEventListener(
                t,
                void 0 === s ? null : s,
                n
              );
            }
          },
        Be = (t) => (e, n, s) => {
          Object.defineProperties(t, {
            currentFrame: {
              configurable: !0,
              get() {
                return Math.round(e * n);
              },
            },
            currentTime: {
              configurable: !0,
              get() {
                return e;
              },
            },
          });
          try {
            return s();
          } finally {
            null !== t && (delete t.currentFrame, delete t.currentTime);
          }
        },
        We = (t) => async (e) => {
          try {
            const t = await fetch(e);
            if (t.ok) return [await t.text(), t.url];
          } catch {}
          throw t();
        },
        Ue = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          gain: 1,
        },
        ze = (t, e, n, s, i, r) =>
          class extends t {
            constructor(t, o) {
              const a = i(t),
                c = { ...Ue, ...o },
                u = s(a, c),
                l = r(a),
                h = l ? n() : null;
              super(t, !1, u, h), (this._gain = e(this, l, u.gain, Y, H));
            }
            get gain() {
              return this._gain;
            }
          },
        Ge = (t, e, n, s, i) => () => {
          const r = new WeakMap(),
            o = async (o, a, c) => {
              let u = n(o);
              const l = q(u, a);
              if (!l) {
                const t = {
                  channelCount: u.channelCount,
                  channelCountMode: u.channelCountMode,
                  channelInterpretation: u.channelInterpretation,
                  gain: u.gain.value,
                };
                u = e(a, t);
              }
              return (
                r.set(a, u),
                l
                  ? await t(a, o.gain, u.gain, c)
                  : await s(a, o.gain, u.gain, c),
                await i(o, a, u, c),
                u
              );
            };
          return {
            render(t, e, n) {
              const s = r.get(e);
              return void 0 !== s ? Promise.resolve(s) : o(t, e, n);
            },
          };
        },
        $e = (t, e) => (n) => e(t, n),
        He = (t) => (e) => {
          const n = t(e);
          if (null === n.renderer)
            throw new Error(
              "Missing the renderer of the given AudioNode in the audio graph."
            );
          return n.renderer;
        },
        Ye = (t) => (e) => {
          var n;
          return null !== (n = t.get(e)) && void 0 !== n ? n : 0;
        },
        Xe = (t) => (e) => {
          const n = t(e);
          if (null === n.renderer)
            throw new Error(
              "Missing the renderer of the given AudioParam in the audio graph."
            );
          return n.renderer;
        },
        Ze = (t) => (e) => t.get(e),
        Qe = () => new DOMException("", "InvalidStateError"),
        Je = (t) => (e) => {
          const n = t.get(e);
          if (void 0 === n) throw Qe();
          return n;
        },
        Ke = (t, e) => (n) => {
          let s = t.get(n);
          if (void 0 !== s) return s;
          if (null === e)
            throw new Error(
              "Missing the native OfflineAudioContext constructor."
            );
          return (s = new e(1, 1, 44100)), t.set(n, s), s;
        },
        tn = (t) => (e) => {
          const n = t.get(e);
          if (void 0 === n)
            throw new Error("The context has no set of AudioWorkletNodes.");
          return n;
        },
        en = () => new DOMException("", "InvalidAccessError"),
        nn = (t) => {
          t.getFrequencyResponse = ((e) => (n, s, i) => {
            if (n.length !== s.length || s.length !== i.length) throw en();
            return e.call(t, n, s, i);
          })(t.getFrequencyResponse);
        },
        sn = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
        },
        rn = (t, e, n, s, i, r) =>
          class extends t {
            constructor(t, o) {
              const a = s(t),
                c = i(a),
                u = { ...sn, ...o },
                l = e(a, c ? null : t.baseLatency, u),
                h = c ? n(u.feedback, u.feedforward) : null;
              super(t, !1, l, h),
                nn(l),
                (this._nativeIIRFilterNode = l),
                r(this, 1);
            }
            getFrequencyResponse(t, e, n) {
              return this._nativeIIRFilterNode.getFrequencyResponse(t, e, n);
            }
          },
        on = (t, e, n, s, i, r, o, a, c, u, l) => {
          const h = u.length;
          let p = a;
          for (let d = 0; d < h; d += 1) {
            let a = n[0] * u[d];
            for (let e = 1; e < i; e += 1) {
              const s = (p - e) & (c - 1);
              (a += n[e] * r[s]), (a -= t[e] * o[s]);
            }
            for (let t = i; t < s; t += 1) a += n[t] * r[(p - t) & (c - 1)];
            for (let n = i; n < e; n += 1) a -= t[n] * o[(p - n) & (c - 1)];
            (r[p] = u[d]), (o[p] = a), (p = (p + 1) & (c - 1)), (l[d] = a);
          }
          return p;
        },
        an = (t, e, n, s) => {
          const i = n instanceof Float64Array ? n : new Float64Array(n),
            r = s instanceof Float64Array ? s : new Float64Array(s),
            o = i.length,
            a = r.length,
            c = Math.min(o, a);
          if (1 !== i[0]) {
            for (let t = 0; t < o; t += 1) r[t] /= i[0];
            for (let t = 1; t < a; t += 1) i[t] /= i[0];
          }
          const u = 32,
            l = new Float32Array(u),
            h = new Float32Array(u),
            p = e.createBuffer(t.numberOfChannels, t.length, t.sampleRate),
            d = t.numberOfChannels;
          for (let f = 0; f < d; f += 1) {
            const e = t.getChannelData(f),
              n = p.getChannelData(f);
            l.fill(0), h.fill(0), on(i, o, r, a, c, l, h, 0, u, e, n);
          }
          return p;
        },
        cn = (t, e, n, s, i) => (r, o) => {
          const a = new WeakMap();
          let c = null;
          const u = async (u, l, h) => {
            let p = null,
              d = e(u);
            const f = q(d, l);
            if (
              (void 0 === l.createIIRFilter
                ? (p = t(l, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: "max",
                    channelInterpretation: "speakers",
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1,
                  }))
                : f || (d = l.createIIRFilter(o, r)),
              a.set(l, null === p ? d : p),
              null !== p)
            ) {
              if (null === c) {
                if (null === n)
                  throw new Error(
                    "Missing the native OfflineAudioContext constructor."
                  );
                const t = new n(
                  u.context.destination.channelCount,
                  u.context.length,
                  l.sampleRate
                );
                c = (async () => {
                  await s(u, t, t.destination, h);
                  const e = await i(t);
                  return an(e, l, r, o);
                })();
              }
              const t = await c;
              return (p.buffer = t), p.start(0), p;
            }
            return await s(u, l, d, h), d;
          };
          return {
            render(t, e, n) {
              const s = a.get(e);
              return void 0 !== s ? Promise.resolve(s) : u(t, e, n);
            },
          };
        },
        un = (t, e, n, s, i, r) => (o) => (a, c) => {
          const u = t.get(a);
          if (void 0 === u) {
            if (!o && r(a)) {
              const t = s(a),
                { outputs: r } = n(a);
              for (const n of r)
                if (mt(n)) {
                  const i = s(n[0]);
                  e(t, i, n[1], n[2]);
                } else {
                  const e = i(n[0]);
                  t.disconnect(e, n[1]);
                }
            }
            t.set(a, c);
          } else t.set(a, u + c);
        },
        ln = (t, e) => (n) => {
          const s = t.get(n);
          return e(s) || e(n);
        },
        hn = (t, e) => (n) => t.has(n) || e(n),
        pn = (t, e) => (n) => t.has(n) || e(n),
        dn = (t, e) => (n) => {
          const s = t.get(n);
          return e(s) || e(n);
        },
        fn = (t) => (e) => null !== t && e instanceof t,
        mn = (t) => (e) =>
          null !== t &&
          "function" === typeof t.AudioNode &&
          e instanceof t.AudioNode,
        gn = (t) => (e) =>
          null !== t &&
          "function" === typeof t.AudioParam &&
          e instanceof t.AudioParam,
        _n = (t, e) => (n) => t(n) || e(n),
        vn = (t) => (e) => null !== t && e instanceof t,
        yn = (t) => null !== t && t.isSecureContext,
        bn = (t, e, n, s) =>
          class extends t {
            constructor(t, i) {
              const r = n(t),
                o = e(r, i);
              if (s(r)) throw TypeError();
              super(t, !0, o, null),
                (this._nativeMediaElementAudioSourceNode = o);
            }
            get mediaElement() {
              return this._nativeMediaElementAudioSourceNode.mediaElement;
            }
          },
        wn = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
        },
        xn = (t, e, n, s) =>
          class extends t {
            constructor(t, i) {
              const r = n(t);
              if (s(r)) throw new TypeError();
              const o = { ...wn, ...i },
                a = e(r, o);
              super(t, !1, a, null),
                (this._nativeMediaStreamAudioDestinationNode = a);
            }
            get stream() {
              return this._nativeMediaStreamAudioDestinationNode.stream;
            }
          },
        Tn = (t, e, n, s) =>
          class extends t {
            constructor(t, i) {
              const r = n(t),
                o = e(r, i);
              if (s(r)) throw new TypeError();
              super(t, !0, o, null),
                (this._nativeMediaStreamAudioSourceNode = o);
            }
            get mediaStream() {
              return this._nativeMediaStreamAudioSourceNode.mediaStream;
            }
          },
        On = (t, e, n) =>
          class extends t {
            constructor(t, s) {
              const i = n(t),
                r = e(i, s);
              super(t, !0, r, null);
            }
          },
        Cn = (t, e, n, s, i) =>
          class extends s {
            constructor(t = {}) {
              if (null === i)
                throw new Error("Missing the native AudioContext constructor.");
              let s;
              try {
                s = new i(t);
              } catch (a) {
                if (12 === a.code && "sampleRate is not in range" === a.message)
                  throw e();
                throw a;
              }
              if (null === s) throw n();
              if (!ut(t.latencyHint))
                throw new TypeError(
                  `The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`
                );
              if (void 0 !== t.sampleRate && s.sampleRate !== t.sampleRate)
                throw e();
              super(s, 2);
              const { latencyHint: r } = t,
                { sampleRate: o } = s;
              if (
                ((this._baseLatency =
                  "number" === typeof s.baseLatency
                    ? s.baseLatency
                    : "balanced" === r
                    ? 512 / o
                    : "interactive" === r || void 0 === r
                    ? 256 / o
                    : "playback" === r
                    ? 1024 / o
                    : (128 *
                        Math.max(2, Math.min(128, Math.round((r * o) / 128)))) /
                      o),
                (this._nativeAudioContext = s),
                "webkitAudioContext" === i.name
                  ? ((this._nativeGainNode = s.createGain()),
                    (this._nativeOscillatorNode = s.createOscillator()),
                    (this._nativeGainNode.gain.value = 1e-37),
                    this._nativeOscillatorNode
                      .connect(this._nativeGainNode)
                      .connect(s.destination),
                    this._nativeOscillatorNode.start())
                  : ((this._nativeGainNode = null),
                    (this._nativeOscillatorNode = null)),
                (this._state = null),
                "running" === s.state)
              ) {
                this._state = "suspended";
                const t = () => {
                  "suspended" === this._state && (this._state = null),
                    s.removeEventListener("statechange", t);
                };
                s.addEventListener("statechange", t);
              }
            }
            get baseLatency() {
              return this._baseLatency;
            }
            get state() {
              return null !== this._state
                ? this._state
                : this._nativeAudioContext.state;
            }
            close() {
              return "closed" === this.state
                ? this._nativeAudioContext.close().then(() => {
                    throw t();
                  })
                : ("suspended" === this._state && (this._state = null),
                  this._nativeAudioContext.close().then(() => {
                    null !== this._nativeGainNode &&
                      null !== this._nativeOscillatorNode &&
                      (this._nativeOscillatorNode.stop(),
                      this._nativeGainNode.disconnect(),
                      this._nativeOscillatorNode.disconnect()),
                      ct(this);
                  }));
            }
            resume() {
              return "suspended" === this._state
                ? new Promise((t, e) => {
                    const n = () => {
                      this._nativeAudioContext.removeEventListener(
                        "statechange",
                        n
                      ),
                        "running" === this._nativeAudioContext.state
                          ? t()
                          : this.resume().then(t, e);
                    };
                    this._nativeAudioContext.addEventListener("statechange", n);
                  })
                : this._nativeAudioContext.resume().catch((e) => {
                    if (void 0 === e || 15 === e.code) throw t();
                    throw e;
                  });
            }
            suspend() {
              return this._nativeAudioContext.suspend().catch((e) => {
                if (void 0 === e) throw t();
                throw e;
              });
            }
          },
        Sn = (t, e, n, s, i, r) =>
          class extends n {
            constructor(n, r) {
              super(n),
                (this._nativeContext = n),
                f.set(this, n),
                s(n) && i.set(n, new Set()),
                (this._destination = new t(this, r)),
                (this._listener = e(this, n)),
                (this._onstatechange = null);
            }
            get currentTime() {
              return this._nativeContext.currentTime;
            }
            get destination() {
              return this._destination;
            }
            get listener() {
              return this._listener;
            }
            get onstatechange() {
              return this._onstatechange;
            }
            set onstatechange(t) {
              const e = "function" === typeof t ? r(this, t) : null;
              this._nativeContext.onstatechange = e;
              const n = this._nativeContext.onstatechange;
              this._onstatechange = null !== n && n === e ? t : n;
            }
            get sampleRate() {
              return this._nativeContext.sampleRate;
            }
            get state() {
              return this._nativeContext.state;
            }
          },
        An = (t) => {
          const e = new Uint32Array([
            1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400,
            1048580, 1635017060, 4, 0,
          ]);
          try {
            const n = t.decodeAudioData(e.buffer, () => {});
            return void 0 !== n && (n.catch(() => {}), !0);
          } catch {}
          return !1;
        },
        kn = { numberOfChannels: 1 },
        En = (t, e, n, s, i) =>
          class extends s {
            constructor(e) {
              const {
                  length: s,
                  numberOfChannels: i,
                  sampleRate: r,
                } = { ...kn, ...e },
                o = n(i, s, r);
              t(An, () => An(o)) ||
                o.addEventListener(
                  "statechange",
                  (() => {
                    let t = 0;
                    const e = (n) => {
                      "running" === this._state &&
                        (t > 0
                          ? (o.removeEventListener("statechange", e),
                            n.stopImmediatePropagation(),
                            this._waitForThePromiseToSettle(n))
                          : (t += 1));
                    };
                    return e;
                  })()
                ),
                super(o, i),
                (this._length = s),
                (this._nativeOfflineAudioContext = o),
                (this._state = null);
            }
            get length() {
              return void 0 === this._nativeOfflineAudioContext.length
                ? this._length
                : this._nativeOfflineAudioContext.length;
            }
            get state() {
              return null === this._state
                ? this._nativeOfflineAudioContext.state
                : this._state;
            }
            startRendering() {
              return "running" === this._state
                ? Promise.reject(e())
                : ((this._state = "running"),
                  i(this.destination, this._nativeOfflineAudioContext).finally(
                    () => {
                      (this._state = null), ct(this);
                    }
                  ));
            }
            _waitForThePromiseToSettle(t) {
              null === this._state
                ? this._nativeOfflineAudioContext.dispatchEvent(t)
                : setTimeout(() => this._waitForThePromiseToSettle(t));
            }
          },
        Mn = (t, e) => (n, s, i) => {
          const r = new Set();
          return (
            (n.connect = (
              (i) =>
              (o, a = 0, c = 0) => {
                const u = 0 === r.size;
                if (e(o))
                  return (
                    i.call(n, o, a, c),
                    t(
                      r,
                      [o, a, c],
                      (t) => t[0] === o && t[1] === a && t[2] === c,
                      !0
                    ),
                    u && s(),
                    o
                  );
                i.call(n, o, a),
                  t(r, [o, a], (t) => t[0] === o && t[1] === a, !0),
                  u && s();
              }
            )(n.connect)),
            (n.disconnect = ((t) => (s, o, a) => {
              const c = r.size > 0;
              if (void 0 === s) t.apply(n), r.clear();
              else if ("number" === typeof s) {
                t.call(n, s);
                for (const t of r) t[1] === s && r.delete(t);
              } else {
                e(s) ? t.call(n, s, o, a) : t.call(n, s, o);
                for (const t of r)
                  t[0] !== s ||
                    (void 0 !== o && t[1] !== o) ||
                    (void 0 !== a && t[2] !== a) ||
                    r.delete(t);
              }
              const u = 0 === r.size;
              c && u && i();
            })(n.disconnect)),
            n
          );
        },
        jn = (t, e, n) => {
          const s = e[n];
          void 0 !== s && s !== t[n] && (t[n] = s);
        },
        In = (t, e) => {
          jn(t, e, "channelCount"),
            jn(t, e, "channelCountMode"),
            jn(t, e, "channelInterpretation");
        },
        Dn = (t) => "function" === typeof t.getFloatTimeDomainData,
        Rn = (t) => {
          t.getFloatTimeDomainData = (e) => {
            const n = new Uint8Array(e.length);
            t.getByteTimeDomainData(n);
            const s = Math.max(n.length, t.fftSize);
            for (let t = 0; t < s; t += 1) e[t] = 0.0078125 * (n[t] - 128);
            return e;
          };
        },
        Nn = (t, e) => (n, s) => {
          const i = n.createAnalyser();
          if ((In(i, s), !(s.maxDecibels > s.minDecibels))) throw e();
          return (
            jn(i, s, "fftSize"),
            jn(i, s, "maxDecibels"),
            jn(i, s, "minDecibels"),
            jn(i, s, "smoothingTimeConstant"),
            t(Dn, () => Dn(i)) || Rn(i),
            i
          );
        },
        Pn = (t) =>
          null === t
            ? null
            : t.hasOwnProperty("AudioBuffer")
            ? t.AudioBuffer
            : null,
        Vn = (t, e, n) => {
          const s = e[n];
          void 0 !== s && s !== t[n].value && (t[n].value = s);
        },
        Fn = (t) => {
          t.start = ((e) => {
            let n = !1;
            return (s = 0, i = 0, r) => {
              if (n) throw Qe();
              e.call(t, s, i, r), (n = !0);
            };
          })(t.start);
        },
        Ln = (t) => {
          t.start = (
            (e) =>
            (n = 0, s = 0, i) => {
              if (("number" === typeof i && i < 0) || s < 0 || n < 0)
                throw new RangeError("The parameters can't be negative.");
              e.call(t, n, s, i);
            }
          )(t.start);
        },
        qn = (t) => {
          t.stop = (
            (e) =>
            (n = 0) => {
              if (n < 0)
                throw new RangeError("The parameter can't be negative.");
              e.call(t, n);
            }
          )(t.stop);
        },
        Bn = (t, e, n, s, i, r, o, a, c, u, l) => (h, p) => {
          const d = h.createBufferSource();
          return (
            In(d, p),
            Vn(d, p, "playbackRate"),
            jn(d, p, "buffer"),
            jn(d, p, "loop"),
            jn(d, p, "loopEnd"),
            jn(d, p, "loopStart"),
            e(n, () => n(h)) || Fn(d),
            e(s, () => s(h)) || c(d),
            e(i, () => i(h)) || u(d, h),
            e(r, () => r(h)) || Ln(d),
            e(o, () => o(h)) || l(d, h),
            e(a, () => a(h)) || qn(d),
            t(h, d),
            d
          );
        },
        Wn = (t) =>
          null === t
            ? null
            : t.hasOwnProperty("AudioContext")
            ? t.AudioContext
            : t.hasOwnProperty("webkitAudioContext")
            ? t.webkitAudioContext
            : null,
        Un = (t, e) => (n, s, i) => {
          const r = n.destination;
          if (r.channelCount !== s)
            try {
              r.channelCount = s;
            } catch {}
          i &&
            "explicit" !== r.channelCountMode &&
            (r.channelCountMode = "explicit"),
            0 === r.maxChannelCount &&
              Object.defineProperty(r, "maxChannelCount", { value: s });
          const o = t(n, {
            channelCount: s,
            channelCountMode: r.channelCountMode,
            channelInterpretation: r.channelInterpretation,
            gain: 1,
          });
          return (
            e(
              o,
              "channelCount",
              (t) => () => t.call(o),
              (t) => (e) => {
                t.call(o, e);
                try {
                  r.channelCount = e;
                } catch (n) {
                  if (e > r.maxChannelCount) throw n;
                }
              }
            ),
            e(
              o,
              "channelCountMode",
              (t) => () => t.call(o),
              (t) => (e) => {
                t.call(o, e), (r.channelCountMode = e);
              }
            ),
            e(
              o,
              "channelInterpretation",
              (t) => () => t.call(o),
              (t) => (e) => {
                t.call(o, e), (r.channelInterpretation = e);
              }
            ),
            Object.defineProperty(o, "maxChannelCount", {
              get: () => r.maxChannelCount,
            }),
            o.connect(r),
            o
          );
        },
        zn = (t) =>
          null === t
            ? null
            : t.hasOwnProperty("AudioWorkletNode")
            ? t.AudioWorkletNode
            : null,
        Gn = (t) => {
          const { port1: e } = new MessageChannel();
          try {
            e.postMessage(t);
          } finally {
            e.close();
          }
        },
        $n = (t, e, n, s, i) => (r, o, a, c, u, l) => {
          if (null !== a)
            try {
              const e = new a(r, c, l),
                s = new Map();
              let o = null;
              if (
                (Object.defineProperties(e, {
                  channelCount: {
                    get: () => l.channelCount,
                    set: () => {
                      throw t();
                    },
                  },
                  channelCountMode: {
                    get: () => "explicit",
                    set: () => {
                      throw t();
                    },
                  },
                  onprocessorerror: {
                    get: () => o,
                    set: (t) => {
                      "function" === typeof o &&
                        e.removeEventListener("processorerror", o),
                        (o = "function" === typeof t ? t : null),
                        "function" === typeof o &&
                          e.addEventListener("processorerror", o);
                    },
                  },
                }),
                (e.addEventListener = (
                  (t) =>
                  (...n) => {
                    if ("processorerror" === n[0]) {
                      const t =
                        "function" === typeof n[1]
                          ? n[1]
                          : "object" === typeof n[1] &&
                            null !== n[1] &&
                            "function" === typeof n[1].handleEvent
                          ? n[1].handleEvent
                          : null;
                      if (null !== t) {
                        const e = s.get(n[1]);
                        void 0 !== e
                          ? (n[1] = e)
                          : ((n[1] = (e) => {
                              "error" === e.type
                                ? (Object.defineProperties(e, {
                                    type: { value: "processorerror" },
                                  }),
                                  t(e))
                                : t(new ErrorEvent(n[0], { ...e }));
                            }),
                            s.set(t, n[1]));
                      }
                    }
                    return t.call(e, "error", n[1], n[2]), t.call(e, ...n);
                  }
                )(e.addEventListener)),
                (e.removeEventListener = (
                  (t) =>
                  (...n) => {
                    if ("processorerror" === n[0]) {
                      const t = s.get(n[1]);
                      void 0 !== t && (s.delete(n[1]), (n[1] = t));
                    }
                    return (
                      t.call(e, "error", n[1], n[2]),
                      t.call(e, n[0], n[1], n[2])
                    );
                  }
                )(e.removeEventListener)),
                0 !== l.numberOfOutputs)
              ) {
                const t = n(r, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  gain: 0,
                });
                e.connect(t).connect(r.destination);
                const s = () => t.disconnect(),
                  o = () => t.connect(r.destination);
                return i(e, s, o);
              }
              return e;
            } catch (h) {
              if (11 === h.code) throw s();
              throw h;
            }
          if (void 0 === u) throw s();
          return Gn(l), e(r, o, u, l);
        },
        Hn = (t, e) =>
          null === t
            ? 512
            : Math.max(
                512,
                Math.min(16384, Math.pow(2, Math.round(Math.log2(t * e))))
              ),
        Yn = (t) =>
          new Promise((e, n) => {
            const { port1: s, port2: i } = new MessageChannel();
            (s.onmessage = ({ data: t }) => {
              s.close(), i.close(), e(t);
            }),
              (s.onmessageerror = ({ data: t }) => {
                s.close(), i.close(), n(t);
              }),
              i.postMessage(t);
          }),
        Xn = async (t, e) => {
          const n = await Yn(e);
          return new t(n);
        },
        Zn = (t, e, n, s) => {
          let i = v.get(t);
          void 0 === i && ((i = new WeakMap()), v.set(t, i));
          const r = Xn(n, s);
          return i.set(e, r), r;
        },
        Qn = (t, e, n, s, i, r, o, a, c, u, l, h, p) => (d, f, m, g) => {
          if (0 === g.numberOfInputs && 0 === g.numberOfOutputs) throw c();
          const _ = Array.isArray(g.outputChannelCount)
            ? g.outputChannelCount
            : Array.from(g.outputChannelCount);
          if (_.some((t) => t < 1)) throw c();
          if (_.length !== g.numberOfOutputs) throw e();
          if ("explicit" !== g.channelCountMode) throw c();
          const v = g.channelCount * g.numberOfInputs,
            y = _.reduce((t, e) => t + e, 0),
            b =
              void 0 === m.parameterDescriptors
                ? 0
                : m.parameterDescriptors.length;
          if (v + b > 6 || y > 6) throw c();
          const w = new MessageChannel(),
            x = [],
            T = [];
          for (let t = 0; t < g.numberOfInputs; t += 1)
            x.push(
              o(d, {
                channelCount: g.channelCount,
                channelCountMode: g.channelCountMode,
                channelInterpretation: g.channelInterpretation,
                gain: 1,
              })
            ),
              T.push(
                i(d, {
                  channelCount: g.channelCount,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: g.channelCount,
                })
              );
          const O = [];
          if (void 0 !== m.parameterDescriptors)
            for (const {
              defaultValue: t,
              maxValue: e,
              minValue: n,
              name: s,
            } of m.parameterDescriptors) {
              const i = r(d, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                offset:
                  void 0 !== g.parameterData[s]
                    ? g.parameterData[s]
                    : void 0 === t
                    ? 0
                    : t,
              });
              Object.defineProperties(i.offset, {
                defaultValue: { get: () => (void 0 === t ? 0 : t) },
                maxValue: { get: () => (void 0 === e ? Y : e) },
                minValue: { get: () => (void 0 === n ? H : n) },
              }),
                O.push(i);
            }
          const C = s(d, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: Math.max(1, v + b),
            }),
            S = Hn(f, d.sampleRate),
            A = a(d, S, v + b, Math.max(1, y)),
            k = i(d, {
              channelCount: Math.max(1, y),
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              numberOfOutputs: Math.max(1, y),
            }),
            E = [];
          for (let t = 0; t < g.numberOfOutputs; t += 1)
            E.push(
              s(d, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: _[t],
              })
            );
          for (let t = 0; t < g.numberOfInputs; t += 1) {
            x[t].connect(T[t]);
            for (let e = 0; e < g.channelCount; e += 1)
              T[t].connect(C, e, t * g.channelCount + e);
          }
          const M = new Gt(
            void 0 === m.parameterDescriptors
              ? []
              : m.parameterDescriptors.map(({ name: t }, e) => {
                  const n = O[e];
                  return n.connect(C, 0, v + e), n.start(0), [t, n.offset];
                })
          );
          C.connect(A);
          let j = g.channelInterpretation,
            I = null;
          const D = 0 === g.numberOfOutputs ? [A] : E,
            R = {
              get bufferSize() {
                return S;
              },
              get channelCount() {
                return g.channelCount;
              },
              set channelCount(t) {
                throw n();
              },
              get channelCountMode() {
                return g.channelCountMode;
              },
              set channelCountMode(t) {
                throw n();
              },
              get channelInterpretation() {
                return j;
              },
              set channelInterpretation(t) {
                for (const e of x) e.channelInterpretation = t;
                j = t;
              },
              get context() {
                return A.context;
              },
              get inputs() {
                return x;
              },
              get numberOfInputs() {
                return g.numberOfInputs;
              },
              get numberOfOutputs() {
                return g.numberOfOutputs;
              },
              get onprocessorerror() {
                return I;
              },
              set onprocessorerror(t) {
                "function" === typeof I &&
                  R.removeEventListener("processorerror", I),
                  (I = "function" === typeof t ? t : null),
                  "function" === typeof I &&
                    R.addEventListener("processorerror", I);
              },
              get parameters() {
                return M;
              },
              get port() {
                return w.port2;
              },
              addEventListener(...t) {
                return A.addEventListener(t[0], t[1], t[2]);
              },
              connect: t.bind(null, D),
              disconnect: u.bind(null, D),
              dispatchEvent(...t) {
                return A.dispatchEvent(t[0]);
              },
              removeEventListener(...t) {
                return A.removeEventListener(t[0], t[1], t[2]);
              },
            },
            N = new Map();
          (w.port1.addEventListener = (
            (t) =>
            (...e) => {
              if ("message" === e[0]) {
                const t =
                  "function" === typeof e[1]
                    ? e[1]
                    : "object" === typeof e[1] &&
                      null !== e[1] &&
                      "function" === typeof e[1].handleEvent
                    ? e[1].handleEvent
                    : null;
                if (null !== t) {
                  const n = N.get(e[1]);
                  void 0 !== n
                    ? (e[1] = n)
                    : ((e[1] = (e) => {
                        l(d.currentTime, d.sampleRate, () => t(e));
                      }),
                      N.set(t, e[1]));
                }
              }
              return t.call(w.port1, e[0], e[1], e[2]);
            }
          )(w.port1.addEventListener)),
            (w.port1.removeEventListener = (
              (t) =>
              (...e) => {
                if ("message" === e[0]) {
                  const t = N.get(e[1]);
                  void 0 !== t && (N.delete(e[1]), (e[1] = t));
                }
                return t.call(w.port1, e[0], e[1], e[2]);
              }
            )(w.port1.removeEventListener));
          let P = null;
          Object.defineProperty(w.port1, "onmessage", {
            get: () => P,
            set: (t) => {
              "function" === typeof P &&
                w.port1.removeEventListener("message", P),
                (P = "function" === typeof t ? t : null),
                "function" === typeof P &&
                  (w.port1.addEventListener("message", P), w.port1.start());
            },
          }),
            (m.prototype.port = w.port1);
          let V = null;
          const F = Zn(d, R, m, g);
          F.then((t) => (V = t));
          const L = Zt(g.numberOfInputs, g.channelCount),
            q = Zt(g.numberOfOutputs, _),
            B =
              void 0 === m.parameterDescriptors
                ? []
                : m.parameterDescriptors.reduce(
                    (t, { name: e }) => ({ ...t, [e]: new Float32Array(128) }),
                    {}
                  );
          let W = !0;
          const U = () => {
              g.numberOfOutputs > 0 && A.disconnect(k);
              for (let t = 0, e = 0; t < g.numberOfOutputs; t += 1) {
                const n = E[t];
                for (let s = 0; s < _[t]; s += 1) k.disconnect(n, e + s, s);
                e += _[t];
              }
            },
            z = new Map();
          A.onaudioprocess = ({ inputBuffer: t, outputBuffer: e }) => {
            if (null !== V) {
              const s = h(R);
              for (let i = 0; i < S; i += 128) {
                for (let e = 0; e < g.numberOfInputs; e += 1)
                  for (let n = 0; n < g.channelCount; n += 1)
                    Yt(t, L[e], n, n, i);
                void 0 !== m.parameterDescriptors &&
                  m.parameterDescriptors.forEach(({ name: e }, n) => {
                    Yt(t, B, e, v + n, i);
                  });
                for (let t = 0; t < g.numberOfInputs; t += 1)
                  for (let e = 0; e < _[t]; e += 1)
                    0 === q[t][e].byteLength &&
                      (q[t][e] = new Float32Array(128));
                try {
                  const t = L.map((t, e) => {
                      const n = s[e];
                      if (n.size > 0) return z.set(e, S / 128), t;
                      const i = z.get(e);
                      return void 0 === i
                        ? []
                        : (t.every((t) => t.every((t) => 0 === t)) &&
                            (1 === i ? z.delete(e) : z.set(e, i - 1)),
                          t);
                    }),
                    n = l(d.currentTime + i / d.sampleRate, d.sampleRate, () =>
                      V.process(t, q, B)
                    );
                  W = n;
                  for (let s = 0, r = 0; s < g.numberOfOutputs; s += 1) {
                    for (let t = 0; t < _[s]; t += 1) Xt(e, q[s], t, r + t, i);
                    r += _[s];
                  }
                } catch (n) {
                  (W = !1),
                    R.dispatchEvent(
                      new ErrorEvent("processorerror", {
                        colno: n.colno,
                        filename: n.filename,
                        lineno: n.lineno,
                        message: n.message,
                      })
                    );
                }
                if (!W) {
                  for (let t = 0; t < g.numberOfInputs; t += 1) {
                    x[t].disconnect(T[t]);
                    for (let e = 0; e < g.channelCount; e += 1)
                      T[i].disconnect(C, e, t * g.channelCount + e);
                  }
                  if (void 0 !== m.parameterDescriptors) {
                    const t = m.parameterDescriptors.length;
                    for (let e = 0; e < t; e += 1) {
                      const t = O[e];
                      t.disconnect(C, 0, v + e), t.stop();
                    }
                  }
                  C.disconnect(A), (A.onaudioprocess = null), G ? U() : Z();
                  break;
                }
              }
            }
          };
          let G = !1;
          const $ = o(d, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0,
            }),
            X = () => A.connect($).connect(d.destination),
            Z = () => {
              A.disconnect($), $.disconnect();
            },
            Q = () => {
              if (W) {
                Z(), g.numberOfOutputs > 0 && A.connect(k);
                for (let t = 0, e = 0; t < g.numberOfOutputs; t += 1) {
                  const n = E[t];
                  for (let s = 0; s < _[t]; s += 1) k.connect(n, e + s, s);
                  e += _[t];
                }
              }
              G = !0;
            },
            J = () => {
              W && (X(), U()), (G = !1);
            };
          return X(), p(R, Q, J);
        },
        Jn = (t, e) => {
          const n = t.createBiquadFilter();
          return (
            In(n, e),
            Vn(n, e, "Q"),
            Vn(n, e, "detune"),
            Vn(n, e, "frequency"),
            Vn(n, e, "gain"),
            jn(n, e, "type"),
            n
          );
        },
        Kn = (t, e) => (n, s) => {
          const i = n.createChannelMerger(s.numberOfInputs);
          return (
            null !== t && "webkitAudioContext" === t.name && e(n, i),
            In(i, s),
            i
          );
        },
        ts = (t) => {
          const e = t.numberOfOutputs;
          Object.defineProperty(t, "channelCount", {
            get: () => e,
            set: (t) => {
              if (t !== e) throw Qe();
            },
          }),
            Object.defineProperty(t, "channelCountMode", {
              get: () => "explicit",
              set: (t) => {
                if ("explicit" !== t) throw Qe();
              },
            }),
            Object.defineProperty(t, "channelInterpretation", {
              get: () => "discrete",
              set: (t) => {
                if ("discrete" !== t) throw Qe();
              },
            });
        },
        es = (t, e) => {
          const n = t.createChannelSplitter(e.numberOfOutputs);
          return In(n, e), ts(n), n;
        },
        ns = (t, e, n, s, i) => (r, o) => {
          if (void 0 === r.createConstantSource) return n(r, o);
          const a = r.createConstantSource();
          return (
            In(a, o),
            Vn(a, o, "offset"),
            e(s, () => s(r)) || Ln(a),
            e(i, () => i(r)) || qn(a),
            t(r, a),
            a
          );
        },
        ss = (t, e) => (
          (t.connect = e.connect.bind(e)),
          (t.disconnect = e.disconnect.bind(e)),
          t
        ),
        is =
          (t, e, n, s) =>
          (i, { offset: r, ...o }) => {
            const a = i.createBuffer(1, 2, 44100),
              c = e(i, {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1,
              }),
              u = n(i, { ...o, gain: r }),
              l = a.getChannelData(0);
            (l[0] = 1), (l[1] = 1), (c.buffer = a), (c.loop = !0);
            const h = {
                get bufferSize() {},
                get channelCount() {
                  return u.channelCount;
                },
                set channelCount(t) {
                  u.channelCount = t;
                },
                get channelCountMode() {
                  return u.channelCountMode;
                },
                set channelCountMode(t) {
                  u.channelCountMode = t;
                },
                get channelInterpretation() {
                  return u.channelInterpretation;
                },
                set channelInterpretation(t) {
                  u.channelInterpretation = t;
                },
                get context() {
                  return u.context;
                },
                get inputs() {
                  return [];
                },
                get numberOfInputs() {
                  return c.numberOfInputs;
                },
                get numberOfOutputs() {
                  return u.numberOfOutputs;
                },
                get offset() {
                  return u.gain;
                },
                get onended() {
                  return c.onended;
                },
                set onended(t) {
                  c.onended = t;
                },
                addEventListener(...t) {
                  return c.addEventListener(t[0], t[1], t[2]);
                },
                dispatchEvent(...t) {
                  return c.dispatchEvent(t[0]);
                },
                removeEventListener(...t) {
                  return c.removeEventListener(t[0], t[1], t[2]);
                },
                start(t = 0) {
                  c.start.call(c, t);
                },
                stop(t = 0) {
                  c.stop.call(c, t);
                },
              },
              p = () => c.connect(u),
              d = () => c.disconnect(u);
            return t(i, c), s(ss(h, u), p, d);
          },
        rs = (t, e) => (n, s) => {
          const i = n.createConvolver();
          if (
            (In(i, s),
            s.disableNormalization === i.normalize &&
              (i.normalize = !s.disableNormalization),
            jn(i, s, "buffer"),
            s.channelCount > 2)
          )
            throw t();
          if (
            (e(
              i,
              "channelCount",
              (t) => () => t.call(i),
              (e) => (n) => {
                if (n > 2) throw t();
                return e.call(i, n);
              }
            ),
            "max" === s.channelCountMode)
          )
            throw t();
          return (
            e(
              i,
              "channelCountMode",
              (t) => () => t.call(i),
              (e) => (n) => {
                if ("max" === n) throw t();
                return e.call(i, n);
              }
            ),
            i
          );
        },
        os = (t, e) => {
          const n = t.createDelay(e.maxDelayTime);
          return In(n, e), Vn(n, e, "delayTime"), n;
        },
        as = (t) => (e, n) => {
          const s = e.createDynamicsCompressor();
          if ((In(s, n), n.channelCount > 2)) throw t();
          if ("max" === n.channelCountMode) throw t();
          return (
            Vn(s, n, "attack"),
            Vn(s, n, "knee"),
            Vn(s, n, "ratio"),
            Vn(s, n, "release"),
            Vn(s, n, "threshold"),
            s
          );
        },
        cs = (t, e) => {
          const n = t.createGain();
          return In(n, e), Vn(n, e, "gain"), n;
        },
        us = (t) => (e, n, s) => {
          if (void 0 === e.createIIRFilter) return t(e, n, s);
          const i = e.createIIRFilter(s.feedforward, s.feedback);
          return In(i, s), i;
        };
      function ls(t, e) {
        const n = e[0] * e[0] + e[1] * e[1];
        return [
          (t[0] * e[0] + t[1] * e[1]) / n,
          (t[1] * e[0] - t[0] * e[1]) / n,
        ];
      }
      function hs(t, e) {
        return [t[0] * e[0] - t[1] * e[1], t[0] * e[1] + t[1] * e[0]];
      }
      function ps(t, e) {
        let n = [0, 0];
        for (let s = t.length - 1; s >= 0; s -= 1)
          (n = hs(n, e)), (n[0] += t[s]);
        return n;
      }
      const ds =
          (t, e, n, s) =>
          (
            i,
            r,
            {
              channelCount: o,
              channelCountMode: a,
              channelInterpretation: c,
              feedback: u,
              feedforward: l,
            }
          ) => {
            const h = Hn(r, i.sampleRate),
              p = u instanceof Float64Array ? u : new Float64Array(u),
              d = l instanceof Float64Array ? l : new Float64Array(l),
              f = p.length,
              m = d.length,
              g = Math.min(f, m);
            if (0 === f || f > 20) throw s();
            if (0 === p[0]) throw e();
            if (0 === m || m > 20) throw s();
            if (0 === d[0]) throw e();
            if (1 !== p[0]) {
              for (let t = 0; t < m; t += 1) d[t] /= p[0];
              for (let t = 1; t < f; t += 1) p[t] /= p[0];
            }
            const _ = n(i, h, o, o);
            (_.channelCount = o),
              (_.channelCountMode = a),
              (_.channelInterpretation = c);
            const v = 32,
              y = [],
              b = [],
              w = [];
            for (let t = 0; t < o; t += 1) {
              y.push(0);
              const t = new Float32Array(v),
                e = new Float32Array(v);
              t.fill(0), e.fill(0), b.push(t), w.push(e);
            }
            _.onaudioprocess = (t) => {
              const e = t.inputBuffer,
                n = t.outputBuffer,
                s = e.numberOfChannels;
              for (let i = 0; i < s; i += 1) {
                const t = e.getChannelData(i),
                  s = n.getChannelData(i);
                y[i] = on(p, f, d, m, g, b[i], w[i], y[i], v, t, s);
              }
            };
            const x = i.sampleRate / 2,
              T = {
                get bufferSize() {
                  return h;
                },
                get channelCount() {
                  return _.channelCount;
                },
                set channelCount(t) {
                  _.channelCount = t;
                },
                get channelCountMode() {
                  return _.channelCountMode;
                },
                set channelCountMode(t) {
                  _.channelCountMode = t;
                },
                get channelInterpretation() {
                  return _.channelInterpretation;
                },
                set channelInterpretation(t) {
                  _.channelInterpretation = t;
                },
                get context() {
                  return _.context;
                },
                get inputs() {
                  return [_];
                },
                get numberOfInputs() {
                  return _.numberOfInputs;
                },
                get numberOfOutputs() {
                  return _.numberOfOutputs;
                },
                addEventListener(...t) {
                  return _.addEventListener(t[0], t[1], t[2]);
                },
                dispatchEvent(...t) {
                  return _.dispatchEvent(t[0]);
                },
                getFrequencyResponse(e, n, s) {
                  if (e.length !== n.length || n.length !== s.length) throw t();
                  const i = e.length;
                  for (let t = 0; t < i; t += 1) {
                    const i = -Math.PI * (e[t] / x),
                      r = [Math.cos(i), Math.sin(i)],
                      o = ps(d, r),
                      a = ps(p, r),
                      c = ls(o, a);
                    (n[t] = Math.sqrt(c[0] * c[0] + c[1] * c[1])),
                      (s[t] = Math.atan2(c[1], c[0]));
                  }
                },
                removeEventListener(...t) {
                  return _.removeEventListener(t[0], t[1], t[2]);
                },
              };
            return ss(T, _);
          },
        fs = (t, e) => t.createMediaElementSource(e.mediaElement),
        ms = (t, e) => {
          const n = t.createMediaStreamDestination();
          return (
            In(n, e),
            1 === n.numberOfOutputs &&
              Object.defineProperty(n, "numberOfOutputs", { get: () => 0 }),
            n
          );
        },
        gs = (t, { mediaStream: e }) => {
          const n = e.getAudioTracks();
          n.sort((t, e) => (t.id < e.id ? -1 : t.id > e.id ? 1 : 0));
          const s = n.slice(0, 1),
            i = t.createMediaStreamSource(new MediaStream(s));
          return Object.defineProperty(i, "mediaStream", { value: e }), i;
        },
        _s =
          (t, e) =>
          (n, { mediaStreamTrack: s }) => {
            if ("function" === typeof n.createMediaStreamTrackSource)
              return n.createMediaStreamTrackSource(s);
            const i = new MediaStream([s]),
              r = n.createMediaStreamSource(i);
            if ("audio" !== s.kind) throw t();
            if (e(n)) throw new TypeError();
            return r;
          },
        vs = (t) =>
          null === t
            ? null
            : t.hasOwnProperty("OfflineAudioContext")
            ? t.OfflineAudioContext
            : t.hasOwnProperty("webkitOfflineAudioContext")
            ? t.webkitOfflineAudioContext
            : null,
        ys = (t, e, n, s, i, r) => (o, a) => {
          const c = o.createOscillator();
          return (
            In(c, a),
            Vn(c, a, "detune"),
            Vn(c, a, "frequency"),
            void 0 !== a.periodicWave
              ? c.setPeriodicWave(a.periodicWave)
              : jn(c, a, "type"),
            e(n, () => n(o)) || Ln(c),
            e(s, () => s(o)) || r(c, o),
            e(i, () => i(o)) || qn(c),
            t(o, c),
            c
          );
        },
        bs = (t) => (e, n) => {
          const s = e.createPanner();
          return void 0 === s.orientationX
            ? t(e, n)
            : (In(s, n),
              Vn(s, n, "orientationX"),
              Vn(s, n, "orientationY"),
              Vn(s, n, "orientationZ"),
              Vn(s, n, "positionX"),
              Vn(s, n, "positionY"),
              Vn(s, n, "positionZ"),
              jn(s, n, "coneInnerAngle"),
              jn(s, n, "coneOuterAngle"),
              jn(s, n, "coneOuterGain"),
              jn(s, n, "distanceModel"),
              jn(s, n, "maxDistance"),
              jn(s, n, "panningModel"),
              jn(s, n, "refDistance"),
              jn(s, n, "rolloffFactor"),
              s);
        },
        ws =
          (t, e, n, s, i, r, o, a, c, u) =>
          (
            l,
            {
              coneInnerAngle: h,
              coneOuterAngle: p,
              coneOuterGain: d,
              distanceModel: f,
              maxDistance: m,
              orientationX: g,
              orientationY: _,
              orientationZ: v,
              panningModel: y,
              positionX: b,
              positionY: w,
              positionZ: x,
              refDistance: T,
              rolloffFactor: O,
              ...C
            }
          ) => {
            const S = l.createPanner();
            if (C.channelCount > 2) throw o();
            if ("max" === C.channelCountMode) throw o();
            In(S, C);
            const A = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
              },
              k = n(l, {
                ...A,
                channelInterpretation: "speakers",
                numberOfInputs: 6,
              }),
              E = s(l, { ...C, gain: 1 }),
              M = s(l, { ...A, gain: 1 }),
              j = s(l, { ...A, gain: 0 }),
              I = s(l, { ...A, gain: 0 }),
              D = s(l, { ...A, gain: 0 }),
              R = s(l, { ...A, gain: 0 }),
              N = s(l, { ...A, gain: 0 }),
              P = i(l, 256, 6, 1),
              V = r(l, {
                ...A,
                curve: new Float32Array([1, 1]),
                oversample: "none",
              });
            let F = [g, _, v],
              L = [b, w, x];
            const q = new Float32Array(1);
            (P.onaudioprocess = ({ inputBuffer: t }) => {
              const e = [c(t, q, 0), c(t, q, 1), c(t, q, 2)];
              e.some((t, e) => t !== F[e]) && (S.setOrientation(...e), (F = e));
              const n = [c(t, q, 3), c(t, q, 4), c(t, q, 5)];
              n.some((t, e) => t !== L[e]) && (S.setPosition(...n), (L = n));
            }),
              Object.defineProperty(j.gain, "defaultValue", { get: () => 0 }),
              Object.defineProperty(I.gain, "defaultValue", { get: () => 0 }),
              Object.defineProperty(D.gain, "defaultValue", { get: () => 0 }),
              Object.defineProperty(R.gain, "defaultValue", { get: () => 0 }),
              Object.defineProperty(N.gain, "defaultValue", { get: () => 0 });
            const B = {
              get bufferSize() {},
              get channelCount() {
                return S.channelCount;
              },
              set channelCount(t) {
                if (t > 2) throw o();
                (E.channelCount = t), (S.channelCount = t);
              },
              get channelCountMode() {
                return S.channelCountMode;
              },
              set channelCountMode(t) {
                if ("max" === t) throw o();
                (E.channelCountMode = t), (S.channelCountMode = t);
              },
              get channelInterpretation() {
                return S.channelInterpretation;
              },
              set channelInterpretation(t) {
                (E.channelInterpretation = t), (S.channelInterpretation = t);
              },
              get coneInnerAngle() {
                return S.coneInnerAngle;
              },
              set coneInnerAngle(t) {
                S.coneInnerAngle = t;
              },
              get coneOuterAngle() {
                return S.coneOuterAngle;
              },
              set coneOuterAngle(t) {
                S.coneOuterAngle = t;
              },
              get coneOuterGain() {
                return S.coneOuterGain;
              },
              set coneOuterGain(t) {
                if (t < 0 || t > 1) throw e();
                S.coneOuterGain = t;
              },
              get context() {
                return S.context;
              },
              get distanceModel() {
                return S.distanceModel;
              },
              set distanceModel(t) {
                S.distanceModel = t;
              },
              get inputs() {
                return [E];
              },
              get maxDistance() {
                return S.maxDistance;
              },
              set maxDistance(t) {
                if (t < 0) throw new RangeError();
                S.maxDistance = t;
              },
              get numberOfInputs() {
                return S.numberOfInputs;
              },
              get numberOfOutputs() {
                return S.numberOfOutputs;
              },
              get orientationX() {
                return M.gain;
              },
              get orientationY() {
                return j.gain;
              },
              get orientationZ() {
                return I.gain;
              },
              get panningModel() {
                return S.panningModel;
              },
              set panningModel(t) {
                S.panningModel = t;
              },
              get positionX() {
                return D.gain;
              },
              get positionY() {
                return R.gain;
              },
              get positionZ() {
                return N.gain;
              },
              get refDistance() {
                return S.refDistance;
              },
              set refDistance(t) {
                if (t < 0) throw new RangeError();
                S.refDistance = t;
              },
              get rolloffFactor() {
                return S.rolloffFactor;
              },
              set rolloffFactor(t) {
                if (t < 0) throw new RangeError();
                S.rolloffFactor = t;
              },
              addEventListener(...t) {
                return E.addEventListener(t[0], t[1], t[2]);
              },
              dispatchEvent(...t) {
                return E.dispatchEvent(t[0]);
              },
              removeEventListener(...t) {
                return E.removeEventListener(t[0], t[1], t[2]);
              },
            };
            h !== B.coneInnerAngle && (B.coneInnerAngle = h),
              p !== B.coneOuterAngle && (B.coneOuterAngle = p),
              d !== B.coneOuterGain && (B.coneOuterGain = d),
              f !== B.distanceModel && (B.distanceModel = f),
              m !== B.maxDistance && (B.maxDistance = m),
              g !== B.orientationX.value && (B.orientationX.value = g),
              _ !== B.orientationY.value && (B.orientationY.value = _),
              v !== B.orientationZ.value && (B.orientationZ.value = v),
              y !== B.panningModel && (B.panningModel = y),
              b !== B.positionX.value && (B.positionX.value = b),
              w !== B.positionY.value && (B.positionY.value = w),
              x !== B.positionZ.value && (B.positionZ.value = x),
              T !== B.refDistance && (B.refDistance = T),
              O !== B.rolloffFactor && (B.rolloffFactor = O),
              (1 === F[0] && 0 === F[1] && 0 === F[2]) ||
                S.setOrientation(...F),
              (0 === L[0] && 0 === L[1] && 0 === L[2]) || S.setPosition(...L);
            const W = () => {
                E.connect(S),
                  t(E, V, 0, 0),
                  V.connect(M).connect(k, 0, 0),
                  V.connect(j).connect(k, 0, 1),
                  V.connect(I).connect(k, 0, 2),
                  V.connect(D).connect(k, 0, 3),
                  V.connect(R).connect(k, 0, 4),
                  V.connect(N).connect(k, 0, 5),
                  k.connect(P).connect(l.destination);
              },
              U = () => {
                E.disconnect(S),
                  a(E, V, 0, 0),
                  V.disconnect(M),
                  M.disconnect(k),
                  V.disconnect(j),
                  j.disconnect(k),
                  V.disconnect(I),
                  I.disconnect(k),
                  V.disconnect(D),
                  D.disconnect(k),
                  V.disconnect(R),
                  R.disconnect(k),
                  V.disconnect(N),
                  N.disconnect(k),
                  k.disconnect(P),
                  P.disconnect(l.destination);
              };
            return u(ss(B, S), W, U);
          },
        xs =
          (t) =>
          (e, { disableNormalization: n, imag: s, real: i }) => {
            const r = s instanceof Float32Array ? s : new Float32Array(s),
              o = i instanceof Float32Array ? i : new Float32Array(i),
              a = e.createPeriodicWave(o, r, { disableNormalization: n });
            if (Array.from(s).length < 2) throw t();
            return a;
          },
        Ts = (t, e, n, s) => t.createScriptProcessor(e, n, s),
        Os = (t, e) => (n, s) => {
          const i = s.channelCountMode;
          if ("clamped-max" === i) throw e();
          if (void 0 === n.createStereoPanner) return t(n, s);
          const r = n.createStereoPanner();
          return (
            In(r, s),
            Vn(r, s, "pan"),
            Object.defineProperty(r, "channelCountMode", {
              get: () => i,
              set: (t) => {
                if (t !== i) throw e();
              },
            }),
            r
          );
        },
        Cs = (t, e, n, s, i, r) => {
          const o = 16385,
            a = new Float32Array([1, 1]),
            c = Math.PI / 2,
            u = {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
            },
            l = { ...u, oversample: "none" },
            h = (t, e, i, r) => {
              const h = new Float32Array(o),
                p = new Float32Array(o);
              for (let n = 0; n < o; n += 1) {
                const t = (n / (o - 1)) * c;
                (h[n] = Math.cos(t)), (p[n] = Math.sin(t));
              }
              const d = n(t, { ...u, gain: 0 }),
                f = s(t, { ...l, curve: h }),
                m = s(t, { ...l, curve: a }),
                g = n(t, { ...u, gain: 0 }),
                _ = s(t, { ...l, curve: p });
              return {
                connectGraph() {
                  e.connect(d),
                    e.connect(void 0 === m.inputs ? m : m.inputs[0]),
                    e.connect(g),
                    m.connect(i),
                    i.connect(void 0 === f.inputs ? f : f.inputs[0]),
                    i.connect(void 0 === _.inputs ? _ : _.inputs[0]),
                    f.connect(d.gain),
                    _.connect(g.gain),
                    d.connect(r, 0, 0),
                    g.connect(r, 0, 1);
                },
                disconnectGraph() {
                  e.disconnect(d),
                    e.disconnect(void 0 === m.inputs ? m : m.inputs[0]),
                    e.disconnect(g),
                    m.disconnect(i),
                    i.disconnect(void 0 === f.inputs ? f : f.inputs[0]),
                    i.disconnect(void 0 === _.inputs ? _ : _.inputs[0]),
                    f.disconnect(d.gain),
                    _.disconnect(g.gain),
                    d.disconnect(r, 0, 0),
                    g.disconnect(r, 0, 1);
                },
              };
            },
            p = (t, i, r, h) => {
              const p = new Float32Array(o),
                d = new Float32Array(o),
                f = new Float32Array(o),
                m = new Float32Array(o),
                g = Math.floor(o / 2);
              for (let e = 0; e < o; e += 1)
                if (e > g) {
                  const t = ((e - g) / (o - 1 - g)) * c;
                  (p[e] = Math.cos(t)),
                    (d[e] = Math.sin(t)),
                    (f[e] = 0),
                    (m[e] = 1);
                } else {
                  const t = (e / (o - 1 - g)) * c;
                  (p[e] = 1),
                    (d[e] = 0),
                    (f[e] = Math.cos(t)),
                    (m[e] = Math.sin(t));
                }
              const _ = e(t, {
                  channelCount: 2,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: 2,
                }),
                v = n(t, { ...u, gain: 0 }),
                y = s(t, { ...l, curve: p }),
                b = n(t, { ...u, gain: 0 }),
                w = s(t, { ...l, curve: d }),
                x = s(t, { ...l, curve: a }),
                T = n(t, { ...u, gain: 0 }),
                O = s(t, { ...l, curve: f }),
                C = n(t, { ...u, gain: 0 }),
                S = s(t, { ...l, curve: m });
              return {
                connectGraph() {
                  i.connect(_),
                    i.connect(void 0 === x.inputs ? x : x.inputs[0]),
                    _.connect(v, 0),
                    _.connect(b, 0),
                    _.connect(T, 1),
                    _.connect(C, 1),
                    x.connect(r),
                    r.connect(void 0 === y.inputs ? y : y.inputs[0]),
                    r.connect(void 0 === w.inputs ? w : w.inputs[0]),
                    r.connect(void 0 === O.inputs ? O : O.inputs[0]),
                    r.connect(void 0 === S.inputs ? S : S.inputs[0]),
                    y.connect(v.gain),
                    w.connect(b.gain),
                    O.connect(T.gain),
                    S.connect(C.gain),
                    v.connect(h, 0, 0),
                    T.connect(h, 0, 0),
                    b.connect(h, 0, 1),
                    C.connect(h, 0, 1);
                },
                disconnectGraph() {
                  i.disconnect(_),
                    i.disconnect(void 0 === x.inputs ? x : x.inputs[0]),
                    _.disconnect(v, 0),
                    _.disconnect(b, 0),
                    _.disconnect(T, 1),
                    _.disconnect(C, 1),
                    x.disconnect(r),
                    r.disconnect(void 0 === y.inputs ? y : y.inputs[0]),
                    r.disconnect(void 0 === w.inputs ? w : w.inputs[0]),
                    r.disconnect(void 0 === O.inputs ? O : O.inputs[0]),
                    r.disconnect(void 0 === S.inputs ? S : S.inputs[0]),
                    y.disconnect(v.gain),
                    w.disconnect(b.gain),
                    O.disconnect(T.gain),
                    S.disconnect(C.gain),
                    v.disconnect(h, 0, 0),
                    T.disconnect(h, 0, 0),
                    b.disconnect(h, 0, 1),
                    C.disconnect(h, 0, 1);
                },
              };
            },
            d = (t, e, n, s, r) => {
              if (1 === e) return h(t, n, s, r);
              if (2 === e) return p(t, n, s, r);
              throw i();
            };
          return (
            e,
            { channelCount: s, channelCountMode: o, pan: a, ...c }
          ) => {
            if ("max" === o) throw i();
            const u = t(e, {
                ...c,
                channelCount: 1,
                channelCountMode: o,
                numberOfInputs: 2,
              }),
              l = n(e, { ...c, channelCount: s, channelCountMode: o, gain: 1 }),
              h = n(e, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: a,
              });
            let { connectGraph: p, disconnectGraph: f } = d(e, s, l, h, u);
            Object.defineProperty(h.gain, "defaultValue", { get: () => 0 }),
              Object.defineProperty(h.gain, "maxValue", { get: () => 1 }),
              Object.defineProperty(h.gain, "minValue", { get: () => -1 });
            const m = {
              get bufferSize() {},
              get channelCount() {
                return l.channelCount;
              },
              set channelCount(t) {
                l.channelCount !== t &&
                  (g && f(),
                  ({ connectGraph: p, disconnectGraph: f } = d(e, t, l, h, u)),
                  g && p()),
                  (l.channelCount = t);
              },
              get channelCountMode() {
                return l.channelCountMode;
              },
              set channelCountMode(t) {
                if ("clamped-max" === t || "max" === t) throw i();
                l.channelCountMode = t;
              },
              get channelInterpretation() {
                return l.channelInterpretation;
              },
              set channelInterpretation(t) {
                l.channelInterpretation = t;
              },
              get context() {
                return l.context;
              },
              get inputs() {
                return [l];
              },
              get numberOfInputs() {
                return l.numberOfInputs;
              },
              get numberOfOutputs() {
                return l.numberOfOutputs;
              },
              get pan() {
                return h.gain;
              },
              addEventListener(...t) {
                return l.addEventListener(t[0], t[1], t[2]);
              },
              dispatchEvent(...t) {
                return l.dispatchEvent(t[0]);
              },
              removeEventListener(...t) {
                return l.removeEventListener(t[0], t[1], t[2]);
              },
            };
            let g = !1;
            const _ = () => {
                p(), (g = !0);
              },
              v = () => {
                f(), (g = !1);
              };
            return r(ss(m, u), _, v);
          };
        },
        Ss = (t, e, n, s, i, r, o) => (a, c) => {
          const u = a.createWaveShaper();
          if (
            null !== r &&
            "webkitAudioContext" === r.name &&
            void 0 === a.createGain().gain.automationRate
          )
            return n(a, c);
          In(u, c);
          const l =
            null === c.curve || c.curve instanceof Float32Array
              ? c.curve
              : new Float32Array(c.curve);
          if (null !== l && l.length < 2) throw e();
          jn(u, { curve: l }, "curve"), jn(u, c, "oversample");
          let h = null,
            p = !1;
          o(
            u,
            "curve",
            (t) => () => t.call(u),
            (e) => (n) =>
              e.call(u, n),
              p &&
                (s(n) && null === h
                  ? (h = t(a, u))
                  : s(n) || null === h || (h(), (h = null))),
              n
          );
          const d = () => {
              (p = !0), s(u.curve) && (h = t(a, u));
            },
            f = () => {
              (p = !1), null !== h && (h(), (h = null));
            };
          return i(u, d, f);
        },
        As =
          (t, e, n, s, i) =>
          (r, { curve: o, oversample: a, ...c }) => {
            const u = r.createWaveShaper(),
              l = r.createWaveShaper();
            In(u, c), In(l, c);
            const h = n(r, { ...c, gain: 1 }),
              p = n(r, { ...c, gain: -1 }),
              d = n(r, { ...c, gain: 1 }),
              f = n(r, { ...c, gain: -1 });
            let m = null,
              g = !1,
              _ = null;
            const v = {
              get bufferSize() {},
              get channelCount() {
                return u.channelCount;
              },
              set channelCount(t) {
                (h.channelCount = t),
                  (p.channelCount = t),
                  (u.channelCount = t),
                  (d.channelCount = t),
                  (l.channelCount = t),
                  (f.channelCount = t);
              },
              get channelCountMode() {
                return u.channelCountMode;
              },
              set channelCountMode(t) {
                (h.channelCountMode = t),
                  (p.channelCountMode = t),
                  (u.channelCountMode = t),
                  (d.channelCountMode = t),
                  (l.channelCountMode = t),
                  (f.channelCountMode = t);
              },
              get channelInterpretation() {
                return u.channelInterpretation;
              },
              set channelInterpretation(t) {
                (h.channelInterpretation = t),
                  (p.channelInterpretation = t),
                  (u.channelInterpretation = t),
                  (d.channelInterpretation = t),
                  (l.channelInterpretation = t),
                  (f.channelInterpretation = t);
              },
              get context() {
                return u.context;
              },
              get curve() {
                return _;
              },
              set curve(n) {
                if (null !== n && n.length < 2) throw e();
                if (null === n) (u.curve = n), (l.curve = n);
                else {
                  const t = n.length,
                    e = new Float32Array(t + 2 - (t % 2)),
                    s = new Float32Array(t + 2 - (t % 2));
                  (e[0] = n[0]), (s[0] = -n[t - 1]);
                  const i = Math.ceil((t + 1) / 2),
                    r = (t + 1) / 2 - 1;
                  for (let o = 1; o < i; o += 1) {
                    const a = (o / i) * r,
                      c = Math.floor(a),
                      u = Math.ceil(a);
                    (e[o] =
                      c === u
                        ? n[c]
                        : (1 - (a - c)) * n[c] + (1 - (u - a)) * n[u]),
                      (s[o] =
                        c === u
                          ? -n[t - 1 - c]
                          : -(1 - (a - c)) * n[t - 1 - c] -
                            (1 - (u - a)) * n[t - 1 - u]);
                  }
                  (e[i] = t % 2 === 1 ? n[i - 1] : (n[i - 2] + n[i - 1]) / 2),
                    (u.curve = e),
                    (l.curve = s);
                }
                (_ = n),
                  g &&
                    (s(_) && null === m
                      ? (m = t(r, h))
                      : null !== m && (m(), (m = null)));
              },
              get inputs() {
                return [h];
              },
              get numberOfInputs() {
                return u.numberOfInputs;
              },
              get numberOfOutputs() {
                return u.numberOfOutputs;
              },
              get oversample() {
                return u.oversample;
              },
              set oversample(t) {
                (u.oversample = t), (l.oversample = t);
              },
              addEventListener(...t) {
                return h.addEventListener(t[0], t[1], t[2]);
              },
              dispatchEvent(...t) {
                return h.dispatchEvent(t[0]);
              },
              removeEventListener(...t) {
                return h.removeEventListener(t[0], t[1], t[2]);
              },
            };
            null !== o &&
              (v.curve = o instanceof Float32Array ? o : new Float32Array(o)),
              a !== v.oversample && (v.oversample = a);
            const y = () => {
                h.connect(u).connect(d),
                  h.connect(p).connect(l).connect(f).connect(d),
                  (g = !0),
                  s(_) && (m = t(r, h));
              },
              b = () => {
                h.disconnect(u),
                  u.disconnect(d),
                  h.disconnect(p),
                  p.disconnect(l),
                  l.disconnect(f),
                  f.disconnect(d),
                  (g = !1),
                  null !== m && (m(), (m = null));
              };
            return i(ss(v, d), y, b);
          },
        ks = () => new DOMException("", "NotSupportedError"),
        Es = { numberOfChannels: 1 },
        Ms = (t, e, n, s, i) =>
          class extends t {
            constructor(t, n, i) {
              let r;
              if ("number" === typeof t && void 0 !== n && void 0 !== i)
                r = { length: n, numberOfChannels: t, sampleRate: i };
              else {
                if ("object" !== typeof t)
                  throw new Error("The given parameters are not valid.");
                r = t;
              }
              const {
                  length: o,
                  numberOfChannels: a,
                  sampleRate: c,
                } = { ...Es, ...r },
                u = s(a, o, c);
              e(An, () => An(u)) ||
                u.addEventListener(
                  "statechange",
                  (() => {
                    let t = 0;
                    const e = (n) => {
                      "running" === this._state &&
                        (t > 0
                          ? (u.removeEventListener("statechange", e),
                            n.stopImmediatePropagation(),
                            this._waitForThePromiseToSettle(n))
                          : (t += 1));
                    };
                    return e;
                  })()
                ),
                super(u, a),
                (this._length = o),
                (this._nativeOfflineAudioContext = u),
                (this._state = null);
            }
            get length() {
              return void 0 === this._nativeOfflineAudioContext.length
                ? this._length
                : this._nativeOfflineAudioContext.length;
            }
            get state() {
              return null === this._state
                ? this._nativeOfflineAudioContext.state
                : this._state;
            }
            startRendering() {
              return "running" === this._state
                ? Promise.reject(n())
                : ((this._state = "running"),
                  i(this.destination, this._nativeOfflineAudioContext).finally(
                    () => {
                      (this._state = null), ct(this);
                    }
                  ));
            }
            _waitForThePromiseToSettle(t) {
              null === this._state
                ? this._nativeOfflineAudioContext.dispatchEvent(t)
                : setTimeout(() => this._waitForThePromiseToSettle(t));
            }
          },
        js = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          detune: 0,
          frequency: 440,
          periodicWave: void 0,
          type: "sine",
        },
        Is = (t, e, n, s, i, r, o) =>
          class extends t {
            constructor(t, o) {
              const a = i(t),
                c = { ...js, ...o },
                u = n(a, c),
                l = r(a),
                h = l ? s() : null,
                p = t.sampleRate / 2;
              super(t, !1, u, h),
                (this._detune = e(this, l, u.detune, 153600, -153600)),
                (this._frequency = e(this, l, u.frequency, p, -p)),
                (this._nativeOscillatorNode = u),
                (this._onended = null),
                (this._oscillatorNodeRenderer = h),
                null !== this._oscillatorNodeRenderer &&
                  void 0 !== c.periodicWave &&
                  (this._oscillatorNodeRenderer.periodicWave = c.periodicWave);
            }
            get detune() {
              return this._detune;
            }
            get frequency() {
              return this._frequency;
            }
            get onended() {
              return this._onended;
            }
            set onended(t) {
              const e = "function" === typeof t ? o(this, t) : null;
              this._nativeOscillatorNode.onended = e;
              const n = this._nativeOscillatorNode.onended;
              this._onended = null !== n && n === e ? t : n;
            }
            get type() {
              return this._nativeOscillatorNode.type;
            }
            set type(t) {
              (this._nativeOscillatorNode.type = t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.periodicWave = null);
            }
            setPeriodicWave(t) {
              this._nativeOscillatorNode.setPeriodicWave(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.periodicWave = t);
            }
            start(t = 0) {
              if (
                (this._nativeOscillatorNode.start(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.start = t),
                "closed" !== this.context.state)
              ) {
                M(this);
                const t = () => {
                  this._nativeOscillatorNode.removeEventListener("ended", t),
                    X(this) && I(this);
                };
                this._nativeOscillatorNode.addEventListener("ended", t);
              }
            }
            stop(t = 0) {
              this._nativeOscillatorNode.stop(t),
                null !== this._oscillatorNodeRenderer &&
                  (this._oscillatorNodeRenderer.stop = t);
            }
          },
        Ds = (t, e, n, s, i) => () => {
          const r = new WeakMap();
          let o = null,
            a = null,
            c = null;
          const u = async (u, l, h) => {
            let p = n(u);
            const d = q(p, l);
            if (!d) {
              const t = {
                channelCount: p.channelCount,
                channelCountMode: p.channelCountMode,
                channelInterpretation: p.channelInterpretation,
                detune: p.detune.value,
                frequency: p.frequency.value,
                periodicWave: null === o ? void 0 : o,
                type: p.type,
              };
              (p = e(l, t)), null !== a && p.start(a), null !== c && p.stop(c);
            }
            return (
              r.set(l, p),
              d
                ? (await t(l, u.detune, p.detune, h),
                  await t(l, u.frequency, p.frequency, h))
                : (await s(l, u.detune, p.detune, h),
                  await s(l, u.frequency, p.frequency, h)),
              await i(u, l, p, h),
              p
            );
          };
          return {
            set periodicWave(t) {
              o = t;
            },
            set start(t) {
              a = t;
            },
            set stop(t) {
              c = t;
            },
            render(t, e, n) {
              const s = r.get(e);
              return void 0 !== s ? Promise.resolve(s) : u(t, e, n);
            },
          };
        },
        Rs = {
          channelCount: 2,
          channelCountMode: "clamped-max",
          channelInterpretation: "speakers",
          coneInnerAngle: 360,
          coneOuterAngle: 360,
          coneOuterGain: 0,
          distanceModel: "inverse",
          maxDistance: 1e4,
          orientationX: 1,
          orientationY: 0,
          orientationZ: 0,
          panningModel: "equalpower",
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          refDistance: 1,
          rolloffFactor: 1,
        },
        Ns = (t, e, n, s, i, r, o) =>
          class extends t {
            constructor(t, a) {
              const c = i(t),
                u = { ...Rs, ...a },
                l = n(c, u),
                h = r(c),
                p = h ? s() : null;
              super(t, !1, l, p),
                (this._nativePannerNode = l),
                (this._orientationX = e(this, h, l.orientationX, Y, H)),
                (this._orientationY = e(this, h, l.orientationY, Y, H)),
                (this._orientationZ = e(this, h, l.orientationZ, Y, H)),
                (this._positionX = e(this, h, l.positionX, Y, H)),
                (this._positionY = e(this, h, l.positionY, Y, H)),
                (this._positionZ = e(this, h, l.positionZ, Y, H)),
                o(this, 1);
            }
            get coneInnerAngle() {
              return this._nativePannerNode.coneInnerAngle;
            }
            set coneInnerAngle(t) {
              this._nativePannerNode.coneInnerAngle = t;
            }
            get coneOuterAngle() {
              return this._nativePannerNode.coneOuterAngle;
            }
            set coneOuterAngle(t) {
              this._nativePannerNode.coneOuterAngle = t;
            }
            get coneOuterGain() {
              return this._nativePannerNode.coneOuterGain;
            }
            set coneOuterGain(t) {
              this._nativePannerNode.coneOuterGain = t;
            }
            get distanceModel() {
              return this._nativePannerNode.distanceModel;
            }
            set distanceModel(t) {
              this._nativePannerNode.distanceModel = t;
            }
            get maxDistance() {
              return this._nativePannerNode.maxDistance;
            }
            set maxDistance(t) {
              this._nativePannerNode.maxDistance = t;
            }
            get orientationX() {
              return this._orientationX;
            }
            get orientationY() {
              return this._orientationY;
            }
            get orientationZ() {
              return this._orientationZ;
            }
            get panningModel() {
              return this._nativePannerNode.panningModel;
            }
            set panningModel(t) {
              this._nativePannerNode.panningModel = t;
            }
            get positionX() {
              return this._positionX;
            }
            get positionY() {
              return this._positionY;
            }
            get positionZ() {
              return this._positionZ;
            }
            get refDistance() {
              return this._nativePannerNode.refDistance;
            }
            set refDistance(t) {
              this._nativePannerNode.refDistance = t;
            }
            get rolloffFactor() {
              return this._nativePannerNode.rolloffFactor;
            }
            set rolloffFactor(t) {
              this._nativePannerNode.rolloffFactor = t;
            }
          },
        Ps = (t, e, n, s, i, r, o, a, c, u) => () => {
          const l = new WeakMap();
          let h = null;
          const p = async (p, d, f) => {
            let m = null,
              g = r(p);
            const _ = {
                channelCount: g.channelCount,
                channelCountMode: g.channelCountMode,
                channelInterpretation: g.channelInterpretation,
              },
              v = {
                ..._,
                coneInnerAngle: g.coneInnerAngle,
                coneOuterAngle: g.coneOuterAngle,
                coneOuterGain: g.coneOuterGain,
                distanceModel: g.distanceModel,
                maxDistance: g.maxDistance,
                panningModel: g.panningModel,
                refDistance: g.refDistance,
                rolloffFactor: g.rolloffFactor,
              },
              y = q(g, d);
            if ("bufferSize" in g) m = s(d, { ..._, gain: 1 });
            else if (!y) {
              const t = {
                ...v,
                orientationX: g.orientationX.value,
                orientationY: g.orientationY.value,
                orientationZ: g.orientationZ.value,
                positionX: g.positionX.value,
                positionY: g.positionY.value,
                positionZ: g.positionZ.value,
              };
              g = i(d, t);
            }
            if ((l.set(d, null === m ? g : m), null !== m)) {
              if (null === h) {
                if (null === o)
                  throw new Error(
                    "Missing the native OfflineAudioContext constructor."
                  );
                const t = new o(6, p.context.length, d.sampleRate),
                  s = e(t, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: 6,
                  });
                s.connect(t.destination),
                  (h = (async () => {
                    const e = await Promise.all(
                      [
                        p.orientationX,
                        p.orientationY,
                        p.orientationZ,
                        p.positionX,
                        p.positionY,
                        p.positionZ,
                      ].map(async (e, s) => {
                        const i = n(t, {
                          channelCount: 1,
                          channelCountMode: "explicit",
                          channelInterpretation: "discrete",
                          offset: 0 === s ? 1 : 0,
                        });
                        return await a(t, e, i.offset, f), i;
                      })
                    );
                    for (let t = 0; t < 6; t += 1)
                      e[t].connect(s, 0, t), e[t].start(0);
                    return u(t);
                  })());
              }
              const t = await h,
                r = s(d, { ..._, gain: 1 });
              await c(p, d, r, f);
              const l = [];
              for (let e = 0; e < t.numberOfChannels; e += 1)
                l.push(t.getChannelData(e));
              let g = [l[0][0], l[1][0], l[2][0]],
                y = [l[3][0], l[4][0], l[5][0]],
                b = s(d, { ..._, gain: 1 }),
                w = i(d, {
                  ...v,
                  orientationX: g[0],
                  orientationY: g[1],
                  orientationZ: g[2],
                  positionX: y[0],
                  positionY: y[1],
                  positionZ: y[2],
                });
              r.connect(b).connect(w.inputs[0]), w.connect(m);
              for (let e = 128; e < t.length; e += 128) {
                const t = [l[0][e], l[1][e], l[2][e]],
                  n = [l[3][e], l[4][e], l[5][e]];
                if (
                  t.some((t, e) => t !== g[e]) ||
                  n.some((t, e) => t !== y[e])
                ) {
                  (g = t), (y = n);
                  const o = e / d.sampleRate;
                  b.gain.setValueAtTime(0, o),
                    (b = s(d, { ..._, gain: 0 })),
                    (w = i(d, {
                      ...v,
                      orientationX: g[0],
                      orientationY: g[1],
                      orientationZ: g[2],
                      positionX: y[0],
                      positionY: y[1],
                      positionZ: y[2],
                    })),
                    b.gain.setValueAtTime(1, o),
                    r.connect(b).connect(w.inputs[0]),
                    w.connect(m);
                }
              }
              return m;
            }
            return (
              y
                ? (await t(d, p.orientationX, g.orientationX, f),
                  await t(d, p.orientationY, g.orientationY, f),
                  await t(d, p.orientationZ, g.orientationZ, f),
                  await t(d, p.positionX, g.positionX, f),
                  await t(d, p.positionY, g.positionY, f),
                  await t(d, p.positionZ, g.positionZ, f))
                : (await a(d, p.orientationX, g.orientationX, f),
                  await a(d, p.orientationY, g.orientationY, f),
                  await a(d, p.orientationZ, g.orientationZ, f),
                  await a(d, p.positionX, g.positionX, f),
                  await a(d, p.positionY, g.positionY, f),
                  await a(d, p.positionZ, g.positionZ, f)),
              yt(g) ? await c(p, d, g.inputs[0], f) : await c(p, d, g, f),
              g
            );
          };
          return {
            render(t, e, n) {
              const s = l.get(e);
              return void 0 !== s ? Promise.resolve(s) : p(t, e, n);
            },
          };
        },
        Vs = { disableNormalization: !1 },
        Fs = (t, e, n, s) =>
          class i {
            constructor(i, r) {
              const o = e(i),
                a = s({ ...Vs, ...r }),
                c = t(o, a);
              return n.add(c), c;
            }
            static [Symbol.hasInstance](t) {
              return (
                (null !== t &&
                  "object" === typeof t &&
                  Object.getPrototypeOf(t) === i.prototype) ||
                n.has(t)
              );
            }
          },
        Ls = (t, e) => (n, s, i, r) => {
          const o = t(s);
          return o.replay(i), e(s, n, i, r);
        },
        qs = (t, e, n) => async (s, i, r, o) => {
          const a = t(s),
            c = [...o, s];
          await Promise.all(
            a.activeInputs
              .map((t, o) =>
                Array.from(t)
                  .filter(([t]) => !c.includes(t))
                  .map(async ([t, a]) => {
                    const u = e(t),
                      l = await u.render(t, i, c),
                      h = s.context.destination;
                    n(t) || (s === h && n(s)) || l.connect(r, a, o);
                  })
              )
              .reduce((t, e) => [...t, ...e], [])
          );
        },
        Bs = (t, e, n) => async (s, i, r, o) => {
          const a = e(s);
          await Promise.all(
            Array.from(a.activeInputs).map(async ([e, s]) => {
              const a = t(e),
                c = await a.render(e, i, o);
              n(e) || c.connect(r, s);
            })
          );
        },
        Ws = (t, e, n, s) => (i) =>
          t(An, () => An(i))
            ? Promise.resolve(t(s, s)).then((t) => {
                if (!t) {
                  const t = n(i, 512, 0, 1);
                  (i.oncomplete = () => {
                    (t.onaudioprocess = null), t.disconnect();
                  }),
                    (t.onaudioprocess = () => i.currentTime),
                    t.connect(i.destination);
                }
                return i.startRendering();
              })
            : new Promise((t) => {
                const n = e(i, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  gain: 0,
                });
                (i.oncomplete = (e) => {
                  n.disconnect(), t(e.renderedBuffer);
                }),
                  n.connect(i.destination),
                  i.startRendering();
              }),
        Us = (t) => (e, n) => {
          t.set(e, n);
        },
        zs = (t) => (e, n) => t.set(e, n),
        Gs = (t, e, n, s, i, r, o, a) => {
          const c = [];
          return (u, l) =>
            n(u)
              .render(u, l, c)
              .then(() =>
                Promise.all(Array.from(s(l)).map((t) => n(t).render(t, l, c)))
              )
              .then(() => i(l))
              .then(
                (n) => (
                  "function" !== typeof n.copyFromChannel
                    ? (o(n), z(n))
                    : e(r, () => r(n)) || a(n),
                  t.add(n),
                  n
                )
              );
        },
        $s = {
          channelCount: 2,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          pan: 0,
        },
        Hs = (t, e, n, s, i, r) =>
          class extends t {
            constructor(t, o) {
              const a = i(t),
                c = { ...$s, ...o },
                u = n(a, c),
                l = r(a),
                h = l ? s() : null;
              super(t, !1, u, h), (this._pan = e(this, l, u.pan));
            }
            get pan() {
              return this._pan;
            }
          },
        Ys = (t, e, n, s, i) => () => {
          const r = new WeakMap(),
            o = async (o, a, c) => {
              let u = n(o);
              const l = q(u, a);
              if (!l) {
                const t = {
                  channelCount: u.channelCount,
                  channelCountMode: u.channelCountMode,
                  channelInterpretation: u.channelInterpretation,
                  pan: u.pan.value,
                };
                u = e(a, t);
              }
              return (
                r.set(a, u),
                l ? await t(a, o.pan, u.pan, c) : await s(a, o.pan, u.pan, c),
                yt(u) ? await i(o, a, u.inputs[0], c) : await i(o, a, u, c),
                u
              );
            };
          return {
            render(t, e, n) {
              const s = r.get(e);
              return void 0 !== s ? Promise.resolve(s) : o(t, e, n);
            },
          };
        },
        Xs = (t) => () => {
          if (null === t) return !1;
          try {
            new t({ length: 1, sampleRate: 44100 });
          } catch {
            return !1;
          }
          return !0;
        },
        Zs = (t, e) => async () => {
          if (null === t) return !0;
          if (null === e) return !1;
          const n = new Blob(
              [
                'class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)',
              ],
              { type: "application/javascript; charset=utf-8" }
            ),
            s = new e(1, 128, 44100),
            i = URL.createObjectURL(n);
          let r = !1,
            o = !1;
          try {
            await s.audioWorklet.addModule(i);
            const e = new t(s, "a", { numberOfOutputs: 0 }),
              n = s.createOscillator();
            (e.port.onmessage = () => (r = !0)),
              (e.onprocessorerror = () => (o = !0)),
              n.connect(e),
              n.start(0),
              await s.startRendering();
          } catch {
          } finally {
            URL.revokeObjectURL(i);
          }
          return r && !o;
        },
        Qs = (t, e) => () => {
          if (null === e) return Promise.resolve(!1);
          const n = new e(1, 1, 44100),
            s = t(n, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0,
            });
          return new Promise((t) => {
            (n.oncomplete = () => {
              s.disconnect(), t(0 !== n.currentTime);
            }),
              n.startRendering();
          });
        },
        Js = () => new DOMException("", "UnknownError"),
        Ks = {
          channelCount: 2,
          channelCountMode: "max",
          channelInterpretation: "speakers",
          curve: null,
          oversample: "none",
        },
        ti = (t, e, n, s, i, r, o) =>
          class extends t {
            constructor(t, e) {
              const a = i(t),
                c = { ...Ks, ...e },
                u = n(a, c),
                l = r(a),
                h = l ? s() : null;
              super(t, !0, u, h),
                (this._isCurveNullified = !1),
                (this._nativeWaveShaperNode = u),
                o(this, 1);
            }
            get curve() {
              return this._isCurveNullified
                ? null
                : this._nativeWaveShaperNode.curve;
            }
            set curve(t) {
              if (null === t)
                (this._isCurveNullified = !0),
                  (this._nativeWaveShaperNode.curve = new Float32Array([0, 0]));
              else {
                if (t.length < 2) throw e();
                (this._isCurveNullified = !1),
                  (this._nativeWaveShaperNode.curve = t);
              }
            }
            get oversample() {
              return this._nativeWaveShaperNode.oversample;
            }
            set oversample(t) {
              this._nativeWaveShaperNode.oversample = t;
            }
          },
        ei = (t, e, n) => () => {
          const s = new WeakMap(),
            i = async (i, r, o) => {
              let a = e(i);
              const c = q(a, r);
              if (!c) {
                const e = {
                  channelCount: a.channelCount,
                  channelCountMode: a.channelCountMode,
                  channelInterpretation: a.channelInterpretation,
                  curve: a.curve,
                  oversample: a.oversample,
                };
                a = t(r, e);
              }
              return (
                s.set(r, a),
                yt(a) ? await n(i, r, a.inputs[0], o) : await n(i, r, a, o),
                a
              );
            };
          return {
            render(t, e, n) {
              const r = s.get(e);
              return void 0 !== r ? Promise.resolve(r) : i(t, e, n);
            },
          };
        },
        ni = () => ("undefined" === typeof window ? null : window),
        si = (t, e) => (n) => {
          (n.copyFromChannel = (s, i, r = 0) => {
            const o = t(r),
              a = t(i);
            if (a >= n.numberOfChannels) throw e();
            const c = n.length,
              u = n.getChannelData(a),
              l = s.length;
            for (let t = o < 0 ? -o : 0; t + o < c && t < l; t += 1)
              s[t] = u[t + o];
          }),
            (n.copyToChannel = (s, i, r = 0) => {
              const o = t(r),
                a = t(i);
              if (a >= n.numberOfChannels) throw e();
              const c = n.length,
                u = n.getChannelData(a),
                l = s.length;
              for (let t = o < 0 ? -o : 0; t + o < c && t < l; t += 1)
                u[t + o] = s[t];
            });
        },
        ii = (t) => (e) => {
          (e.copyFromChannel = (
            (n) =>
            (s, i, r = 0) => {
              const o = t(r),
                a = t(i);
              if (o < e.length) return n.call(e, s, a, o);
            }
          )(e.copyFromChannel)),
            (e.copyToChannel = (
              (n) =>
              (s, i, r = 0) => {
                const o = t(r),
                  a = t(i);
                if (o < e.length) return n.call(e, s, a, o);
              }
            )(e.copyToChannel));
        },
        ri = (t) => (e, n) => {
          const s = n.createBuffer(1, 1, 44100);
          null === e.buffer && (e.buffer = s),
            t(
              e,
              "buffer",
              (t) => () => {
                const n = t.call(e);
                return n === s ? null : n;
              },
              (t) => (n) => t.call(e, null === n ? s : n)
            );
        },
        oi = (t, e) => (n, s) => {
          (s.channelCount = 1),
            (s.channelCountMode = "explicit"),
            Object.defineProperty(s, "channelCount", {
              get: () => 1,
              set: () => {
                throw t();
              },
            }),
            Object.defineProperty(s, "channelCountMode", {
              get: () => "explicit",
              set: () => {
                throw t();
              },
            });
          const i = n.createBufferSource(),
            r = () => {
              const t = s.numberOfInputs;
              for (let e = 0; e < t; e += 1) i.connect(s, 0, e);
            },
            o = () => i.disconnect(s);
          e(s, r, o);
        },
        ai = (t, e, n) =>
          void 0 === t.copyFromChannel
            ? t.getChannelData(n)[0]
            : (t.copyFromChannel(e, n), e[0]),
        ci = (t) => {
          if (null === t) return !1;
          const e = t.length;
          return e % 2 !== 0
            ? 0 !== t[Math.floor(e / 2)]
            : t[e / 2 - 1] + t[e / 2] !== 0;
        },
        ui = (t, e, n, s) => {
          let i = t;
          while (!i.hasOwnProperty(e)) i = Object.getPrototypeOf(i);
          const { get: r, set: o } = Object.getOwnPropertyDescriptor(i, e);
          Object.defineProperty(t, e, { get: n(r), set: s(o) });
        },
        li = (t) => ({
          ...t,
          outputChannelCount:
            void 0 !== t.outputChannelCount
              ? t.outputChannelCount
              : 1 === t.numberOfInputs && 1 === t.numberOfOutputs
              ? [t.channelCount]
              : Array.from({ length: t.numberOfOutputs }, () => 1),
        }),
        hi = (t) => ({ ...t, channelCount: t.numberOfOutputs }),
        pi = (t) => {
          const { imag: e, real: n } = t;
          return void 0 === e
            ? void 0 === n
              ? { ...t, imag: [0, 0], real: [0, 0] }
              : { ...t, imag: Array.from(n, () => 0), real: n }
            : void 0 === n
            ? { ...t, imag: e, real: Array.from(e, () => 0) }
            : { ...t, imag: e, real: n };
        },
        di = (t, e, n) => {
          try {
            t.setValueAtTime(e, n);
          } catch (s) {
            if (9 !== s.code) throw s;
            di(t, e, n + 1e-7);
          }
        },
        fi = (t) => {
          const e = t.createBufferSource();
          e.start();
          try {
            e.start();
          } catch {
            return !0;
          }
          return !1;
        },
        mi = (t) => {
          const e = t.createBufferSource(),
            n = t.createBuffer(1, 1, 44100);
          e.buffer = n;
          try {
            e.start(0, 1);
          } catch {
            return !1;
          }
          return !0;
        },
        gi = (t) => {
          const e = t.createBufferSource();
          e.start();
          try {
            e.stop();
          } catch {
            return !1;
          }
          return !0;
        },
        _i = (t) => {
          const e = t.createOscillator();
          try {
            e.start(-1);
          } catch (n) {
            return n instanceof RangeError;
          }
          return !1;
        },
        vi = (t) => {
          const e = t.createBuffer(1, 1, 44100),
            n = t.createBufferSource();
          (n.buffer = e), n.start(), n.stop();
          try {
            return n.stop(), !0;
          } catch {
            return !1;
          }
        },
        yi = (t) => {
          const e = t.createOscillator();
          try {
            e.stop(-1);
          } catch (n) {
            return n instanceof RangeError;
          }
          return !1;
        },
        bi = (t) => {
          const { port1: e, port2: n } = new MessageChannel();
          try {
            e.postMessage(t);
          } finally {
            e.close(), n.close();
          }
        },
        wi = (t) => {
          t.start = (
            (e) =>
            (n = 0, s = 0, i) => {
              const r = t.buffer,
                o = null === r ? s : Math.min(r.duration, s);
              null !== r && o > r.duration - 0.5 / t.context.sampleRate
                ? e.call(t, n, 0, 0)
                : e.call(t, n, o, i);
            }
          )(t.start);
        },
        xi = (t, e) => {
          const n = e.createGain();
          t.connect(n);
          const s = ((e) => () => {
            e.call(t, n), t.removeEventListener("ended", s);
          })(t.disconnect);
          t.addEventListener("ended", s),
            ss(t, n),
            (t.stop = ((e) => {
              let s = !1;
              return (i = 0) => {
                if (s)
                  try {
                    e.call(t, i);
                  } catch {
                    n.gain.setValueAtTime(0, i);
                  }
                else e.call(t, i), (s = !0);
              };
            })(t.stop));
        },
        Ti = (t, e) => (n) => {
          const s = { value: t };
          return (
            Object.defineProperties(n, { currentTarget: s, target: s }),
            "function" === typeof e ? e.call(t, n) : e.handleEvent.call(t, n)
          );
        },
        Oi = o(gt),
        Ci = N(gt),
        Si = Ee(A),
        Ai = new WeakMap(),
        ki = Ye(Ai),
        Ei = ie(new Map(), new WeakMap()),
        Mi = ni(),
        ji = Nn(Ei, U),
        Ii = He(rt),
        Di = qs(rt, Ii, kt),
        Ri = B(ji, St, Di),
        Ni = Je(f),
        Pi = vs(Mi),
        Vi = vn(Pi),
        Fi = new WeakMap(),
        Li = qe(Ti),
        qi = Wn(Mi),
        Bi = fn(qi),
        Wi = mn(Mi),
        Ui = gn(Mi),
        zi = Wt(
          a(l),
          R(Oi, Ci, bt, Si, Ct, rt, ki, E, St, gt, X, kt, Et),
          Ei,
          un(g, Ct, rt, St, At, X),
          U,
          en,
          ks,
          Ce(bt, g, rt, St, At, Ni, X, Vi),
          Ie(Fi, rt, S),
          Li,
          Ni,
          Bi,
          Wi,
          Ui,
          Vi
        ),
        Gi = L(zi, Ri, U, ji, Ni, Vi),
        $i = new WeakSet(),
        Hi = Pn(Mi),
        Yi = _e(new Uint32Array(1)),
        Xi = si(Yi, U),
        Zi = ii(Yi),
        Qi = $($i, Ei, ks, Hi, Pi, Xs(Hi), Xi, Zi),
        Ji = P(cs),
        Ki = Bs(Ii, ot, kt),
        tr = he(Ki),
        er = Bn(Ji, Ei, fi, mi, gi, _i, vi, yi, wi, ri(ui), xi),
        nr = Ls(Xe(ot), Ki),
        sr = J(tr, er, St, nr, Di),
        ir = Ut(
          c(p),
          Fi,
          d,
          zt,
          i["createCancelAndHoldAutomationEvent"],
          i["createCancelScheduledValuesAutomationEvent"],
          i["createExponentialRampToValueAutomationEvent"],
          i["createLinearRampToValueAutomationEvent"],
          i["createSetTargetAutomationEvent"],
          i["createSetValueAutomationEvent"],
          i["createSetValueCurveAutomationEvent"],
          qi,
          di
        ),
        rr = Q(zi, sr, ir, Qe, er, Ni, Vi, Ti),
        or = ht(zi, pt, U, Qe, Un(cs, ui), Ni, Vi, Di),
        ar = se(tr, Jn, St, nr, Di),
        cr = zs(Ai),
        ur = ne(zi, ir, ar, en, Jn, Ni, Vi, cr),
        lr = Mn(gt, Wi),
        hr = oi(Qe, lr),
        pr = Kn(qi, hr),
        dr = ae(pr, St, Di),
        fr = oe(zi, dr, pr, Ni, Vi),
        mr = le(es, St, Di),
        gr = ue(zi, mr, es, Ni, Vi, hi),
        _r = is(Ji, er, cs, lr),
        vr = ns(Ji, Ei, _r, _i, yi),
        yr = ge(tr, vr, St, nr, Di),
        br = me(zi, ir, yr, vr, Ni, Vi, Ti),
        wr = rs(ks, ui),
        xr = be(wr, St, Di),
        Tr = ye(zi, xr, wr, Ni, Vi, cr),
        Or = ke(tr, os, St, nr, Di),
        Cr = Ae(zi, ir, Or, os, Ni, Vi, cr),
        Sr = as(ks),
        Ar = Ve(tr, Sr, St, nr, Di),
        kr = Pe(zi, ir, Ar, Sr, ks, Ni, Vi, cr),
        Er = Ge(tr, cs, St, nr, Di),
        Mr = ze(zi, ir, Er, cs, Ni, Vi),
        jr = ds(en, Qe, Ts, ks),
        Ir = Ws(Ei, cs, Ts, Qs(cs, Pi)),
        Dr = cn(er, St, Pi, Di, Ir),
        Rr = us(jr),
        Nr = rn(zi, Rr, Dr, Ni, Vi, cr),
        Pr = dt(ir, pr, vr, Ts, ks, ai, Vi, ui),
        Vr = new WeakMap(),
        Fr = Sn(or, Pr, Li, Vi, Vr, Ti),
        Lr = ys(Ji, Ei, _i, vi, yi, xi),
        qr = Ds(tr, Lr, St, nr, Di),
        Br = Is(zi, ir, Lr, qr, Ni, Vi, Ti),
        Wr = de(er),
        Ur = As(Wr, Qe, cs, ci, lr),
        zr = Ss(Wr, Qe, Ur, ci, lr, qi, ui),
        Gr = ws(bt, Qe, pr, cs, Ts, zr, ks, Ct, ai, lr),
        $r = bs(Gr),
        Hr = Ps(tr, pr, vr, cs, $r, St, Pi, nr, Di, Ir),
        Yr = Ns(zi, ir, $r, Hr, Ni, Vi, cr),
        Xr = xs(U),
        Zr = Fs(Xr, Ni, new WeakSet(), pi),
        Qr = Cs(pr, es, cs, zr, ks, lr),
        Jr = Os(Qr, ks),
        Kr = Ys(tr, Jr, St, nr, Di),
        to = Hs(zi, ir, Jr, Kr, Ni, Vi),
        eo = ei(zr, St, Di),
        no = ti(zi, Qe, zr, eo, Ni, Vi, cr),
        so = yn(Mi),
        io = Be(Mi),
        ro = new WeakMap(),
        oo = Ke(ro, Pi),
        ao = zn(Mi),
        co = so
          ? C(
              Ei,
              ks,
              Le(Mi),
              io,
              We(r),
              Ni,
              oo,
              Vi,
              ao,
              new WeakMap(),
              new WeakMap(),
              Zs(ao, Pi),
              Mi
            )
          : void 0,
        uo = _n(Bi, Vi),
        lo = Oe($i, Ei, xe, Fe, new WeakSet(), Ni, uo, W, An, Xi, Zi),
        ho = te(
          co,
          Gi,
          Qi,
          rr,
          ur,
          fr,
          gr,
          br,
          Tr,
          lo,
          Cr,
          kr,
          Mr,
          Nr,
          Fr,
          Br,
          Yr,
          Zr,
          to,
          no
        ),
        po = bn(zi, fs, Ni, Vi),
        fo = xn(zi, ms, Ni, Vi),
        mo = Tn(zi, gs, Ni, Vi),
        go = _s(Qe, Vi),
        _o = On(zi, go, Ni),
        vo = lt(ho, Qe, ks, Js, po, fo, mo, _o, qi),
        yo = tn(Vr),
        bo = V(yo),
        wo = pe(U),
        xo = Me(yo),
        To = Re(U),
        Oo = new WeakMap(),
        Co = $e(Oo, S),
        So = Qn(wo, U, Qe, pr, es, vr, cs, Ts, ks, To, io, Co, lr),
        Ao = $n(Qe, So, cs, ks, lr),
        ko = Kt(tr, wo, er, pr, es, vr, cs, xo, To, io, St, ao, Pi, nr, Di, Ir),
        Eo = Ze(ro),
        Mo = Us(Oo),
        jo = so
          ? Ht(bo, zi, ir, ko, Ao, rt, Eo, Ni, Vi, ao, li, Mo, bi, Ti)
          : void 0,
        Io = (Cn(Qe, ks, Js, Fr, qi), we(ks, Pi)),
        Do = Gs($i, Ei, Ii, yo, Ir, W, Xi, Zi),
        Ro = (En(Ei, Qe, Io, Fr, Do), Ms(ho, Ei, Qe, Io, Do)),
        No = ln(f, Bi),
        Po = hn(h, Wi),
        Vo = pn(d, Ui),
        Fo = dn(f, Vi);
      function Lo(t, e) {
        if (!t) throw new Error(e);
      }
      function qo(t, e, n = 1 / 0) {
        if (!(e <= t && t <= n))
          throw new RangeError(`Value must be within [${e}, ${n}], got: ${t}`);
      }
      function Bo(t) {
        t.isOffline ||
          "running" === t.state ||
          zo(
            'The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.'
          );
      }
      let Wo = console;
      function Uo(...t) {
        Wo.log(...t);
      }
      function zo(...t) {
        Wo.warn(...t);
      }
      function Go(t) {
        return "undefined" === typeof t;
      }
      function $o(t) {
        return !Go(t);
      }
      function Ho(t) {
        return "function" === typeof t;
      }
      function Yo(t) {
        return "number" === typeof t;
      }
      function Xo(t) {
        return (
          "[object Object]" === Object.prototype.toString.call(t) &&
          t.constructor === Object
        );
      }
      function Zo(t) {
        return "boolean" === typeof t;
      }
      function Qo(t) {
        return Array.isArray(t);
      }
      function Jo(t) {
        return "string" === typeof t;
      }
      function Ko(t) {
        return Jo(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t);
      }
      function ta(t) {
        return new vo(t);
      }
      function ea(t, e, n) {
        return new Ro(t, e, n);
      }
      const na = "object" === typeof self ? self : null,
        sa =
          na &&
          (na.hasOwnProperty("AudioContext") ||
            na.hasOwnProperty("webkitAudioContext"));
      function ia(t, e, n) {
        return (
          Lo(
            $o(jo),
            "This node only works in a secure context (https or localhost)"
          ),
          new jo(t, e, n)
        );
      }
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function ra(
        t,
        e,
        n,
        s
      ) {
        var i,
          r = arguments.length,
          o =
            r < 3
              ? e
              : null === s
              ? (s = Object.getOwnPropertyDescriptor(e, n))
              : s;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(t, e, n, s);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (i = t[a]) &&
              (o = (r < 3 ? i(o) : r > 3 ? i(e, n, o) : i(e, n)) || o);
        return r > 3 && o && Object.defineProperty(e, n, o), o;
      }
      function oa(t, e, n, s) {
        function i(t) {
          return t instanceof n
            ? t
            : new n(function (e) {
                e(t);
              });
        }
        return new (n || (n = Promise))(function (n, r) {
          function o(t) {
            try {
              c(s.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(s["throw"](t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            t.done ? n(t.value) : i(t.value).then(o, a);
          }
          c((s = s.apply(t, e || [])).next());
        });
      }
      Object.create;
      Object.create;
      class aa {
        constructor(t, e, n) {
          (this._callback = t),
            (this._type = e),
            (this._updateInterval = n),
            this._createClock();
        }
        _createWorker() {
          const t = new Blob(
              [
                `\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(
                  1e3 * this._updateInterval
                ).toFixed(
                  1
                )};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`,
              ],
              { type: "text/javascript" }
            ),
            e = URL.createObjectURL(t),
            n = new Worker(e);
          (n.onmessage = this._callback.bind(this)), (this._worker = n);
        }
        _createTimeout() {
          this._timeout = setTimeout(() => {
            this._createTimeout(), this._callback();
          }, 1e3 * this._updateInterval);
        }
        _createClock() {
          if ("worker" === this._type)
            try {
              this._createWorker();
            } catch (t) {
              (this._type = "timeout"), this._createClock();
            }
          else "timeout" === this._type && this._createTimeout();
        }
        _disposeClock() {
          this._timeout && (clearTimeout(this._timeout), (this._timeout = 0)),
            this._worker &&
              (this._worker.terminate(), (this._worker.onmessage = null));
        }
        get updateInterval() {
          return this._updateInterval;
        }
        set updateInterval(t) {
          (this._updateInterval = Math.max(t, 128 / 44100)),
            "worker" === this._type &&
              this._worker.postMessage(Math.max(1e3 * t, 1));
        }
        get type() {
          return this._type;
        }
        set type(t) {
          this._disposeClock(), (this._type = t), this._createClock();
        }
        dispose() {
          this._disposeClock();
        }
      }
      function ca(t) {
        return Vo(t);
      }
      function ua(t) {
        return Po(t);
      }
      function la(t) {
        return Fo(t);
      }
      function ha(t) {
        return No(t);
      }
      function pa(t) {
        return t instanceof AudioBuffer;
      }
      function da(t, e) {
        return "value" === t || ca(e) || ua(e) || pa(e);
      }
      function fa(t, ...e) {
        if (!e.length) return t;
        const n = e.shift();
        if (Xo(t) && Xo(n))
          for (const s in n)
            da(s, n[s])
              ? (t[s] = n[s])
              : Xo(n[s])
              ? (t[s] || Object.assign(t, { [s]: {} }), fa(t[s], n[s]))
              : Object.assign(t, { [s]: n[s] });
        return fa(t, ...e);
      }
      function ma(t, e) {
        return t.length === e.length && t.every((t, n) => e[n] === t);
      }
      function ga(t, e, n = [], s) {
        const i = {},
          r = Array.from(e);
        if (Xo(r[0]) && s && !Reflect.has(r[0], s)) {
          const e = Object.keys(r[0]).some((e) => Reflect.has(t, e));
          e || (fa(i, { [s]: r[0] }), n.splice(n.indexOf(s), 1), r.shift());
        }
        if (1 === r.length && Xo(r[0])) fa(i, r[0]);
        else for (let o = 0; o < n.length; o++) $o(r[o]) && (i[n[o]] = r[o]);
        return fa(t, i);
      }
      function _a(t) {
        return t.constructor.getDefaults();
      }
      function va(t, e) {
        return Go(t) ? e : t;
      }
      function ya(t, e) {
        return (
          e.forEach((e) => {
            Reflect.has(t, e) && delete t[e];
          }),
          t
        );
      }
      /**
       * Tone.js
       * @author Yotam Mann
       * @license http://opensource.org/licenses/MIT MIT License
       * @copyright 2014-2019 Yotam Mann
       */ class ba {
        constructor() {
          (this.debug = !1), (this._wasDisposed = !1);
        }
        static getDefaults() {
          return {};
        }
        log(...t) {
          (this.debug || (na && this.toString() === na.TONE_DEBUG_CLASS)) &&
            Uo(this, ...t);
        }
        dispose() {
          return (this._wasDisposed = !0), this;
        }
        get disposed() {
          return this._wasDisposed;
        }
        toString() {
          return this.name;
        }
      }
      ba.version = s;
      const wa = 1e-6;
      function xa(t, e) {
        return t > e + wa;
      }
      function Ta(t, e) {
        return xa(t, e) || Ca(t, e);
      }
      function Oa(t, e) {
        return t + wa < e;
      }
      function Ca(t, e) {
        return Math.abs(t - e) < wa;
      }
      function Sa(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }
      class Aa extends ba {
        constructor() {
          super(), (this.name = "Timeline"), (this._timeline = []);
          const t = ga(Aa.getDefaults(), arguments, ["memory"]);
          (this.memory = t.memory), (this.increasing = t.increasing);
        }
        static getDefaults() {
          return { memory: 1 / 0, increasing: !1 };
        }
        get length() {
          return this._timeline.length;
        }
        add(t) {
          if (
            (Lo(
              Reflect.has(t, "time"),
              "Timeline: events must have a time attribute"
            ),
            (t.time = t.time.valueOf()),
            this.increasing && this.length)
          ) {
            const e = this._timeline[this.length - 1];
            Lo(
              Ta(t.time, e.time),
              "The time must be greater than or equal to the last scheduled time"
            ),
              this._timeline.push(t);
          } else {
            const e = this._search(t.time);
            this._timeline.splice(e + 1, 0, t);
          }
          if (this.length > this.memory) {
            const t = this.length - this.memory;
            this._timeline.splice(0, t);
          }
          return this;
        }
        remove(t) {
          const e = this._timeline.indexOf(t);
          return -1 !== e && this._timeline.splice(e, 1), this;
        }
        get(t, e = "time") {
          const n = this._search(t, e);
          return -1 !== n ? this._timeline[n] : null;
        }
        peek() {
          return this._timeline[0];
        }
        shift() {
          return this._timeline.shift();
        }
        getAfter(t, e = "time") {
          const n = this._search(t, e);
          return n + 1 < this._timeline.length ? this._timeline[n + 1] : null;
        }
        getBefore(t) {
          const e = this._timeline.length;
          if (e > 0 && this._timeline[e - 1].time < t)
            return this._timeline[e - 1];
          const n = this._search(t);
          return n - 1 >= 0 ? this._timeline[n - 1] : null;
        }
        cancel(t) {
          if (this._timeline.length > 1) {
            let e = this._search(t);
            if (e >= 0)
              if (Ca(this._timeline[e].time, t)) {
                for (let n = e; n >= 0; n--) {
                  if (!Ca(this._timeline[n].time, t)) break;
                  e = n;
                }
                this._timeline = this._timeline.slice(0, e);
              } else this._timeline = this._timeline.slice(0, e + 1);
            else this._timeline = [];
          } else
            1 === this._timeline.length &&
              Ta(this._timeline[0].time, t) &&
              (this._timeline = []);
          return this;
        }
        cancelBefore(t) {
          const e = this._search(t);
          return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
        }
        previousEvent(t) {
          const e = this._timeline.indexOf(t);
          return e > 0 ? this._timeline[e - 1] : null;
        }
        _search(t, e = "time") {
          if (0 === this._timeline.length) return -1;
          let n = 0;
          const s = this._timeline.length;
          let i = s;
          if (s > 0 && this._timeline[s - 1][e] <= t) return s - 1;
          while (n < i) {
            let s = Math.floor(n + (i - n) / 2);
            const r = this._timeline[s],
              o = this._timeline[s + 1];
            if (Ca(r[e], t)) {
              for (let n = s; n < this._timeline.length; n++) {
                const i = this._timeline[n];
                if (!Ca(i[e], t)) break;
                s = n;
              }
              return s;
            }
            if (Oa(r[e], t) && xa(o[e], t)) return s;
            xa(r[e], t) ? (i = s) : (n = s + 1);
          }
          return -1;
        }
        _iterate(t, e = 0, n = this._timeline.length - 1) {
          this._timeline.slice(e, n + 1).forEach(t);
        }
        forEach(t) {
          return this._iterate(t), this;
        }
        forEachBefore(t, e) {
          const n = this._search(t);
          return -1 !== n && this._iterate(e, 0, n), this;
        }
        forEachAfter(t, e) {
          const n = this._search(t);
          return this._iterate(e, n + 1), this;
        }
        forEachBetween(t, e, n) {
          let s = this._search(t),
            i = this._search(e);
          return (
            -1 !== s && -1 !== i
              ? (this._timeline[s].time !== t && (s += 1),
                this._timeline[i].time === e && (i -= 1),
                this._iterate(n, s, i))
              : -1 === s && this._iterate(n, 0, i),
            this
          );
        }
        forEachFrom(t, e) {
          let n = this._search(t);
          while (n >= 0 && this._timeline[n].time >= t) n--;
          return this._iterate(e, n + 1), this;
        }
        forEachAtTime(t, e) {
          const n = this._search(t);
          if (-1 !== n && Ca(this._timeline[n].time, t)) {
            let s = n;
            for (let e = n; e >= 0; e--) {
              if (!Ca(this._timeline[e].time, t)) break;
              s = e;
            }
            this._iterate(
              (t) => {
                e(t);
              },
              s,
              n
            );
          }
          return this;
        }
        dispose() {
          return super.dispose(), (this._timeline = []), this;
        }
      }
      const ka = [];
      function Ea(t) {
        ka.push(t);
      }
      function Ma(t) {
        ka.forEach((e) => e(t));
      }
      const ja = [];
      function Ia(t) {
        ja.push(t);
      }
      function Da(t) {
        ja.forEach((e) => e(t));
      }
      class Ra extends ba {
        constructor() {
          super(...arguments), (this.name = "Emitter");
        }
        on(t, e) {
          const n = t.split(/\W+/);
          return (
            n.forEach((t) => {
              Go(this._events) && (this._events = {}),
                this._events.hasOwnProperty(t) || (this._events[t] = []),
                this._events[t].push(e);
            }),
            this
          );
        }
        once(t, e) {
          const n = (...s) => {
            e(...s), this.off(t, n);
          };
          return this.on(t, n), this;
        }
        off(t, e) {
          const n = t.split(/\W+/);
          return (
            n.forEach((n) => {
              if (
                (Go(this._events) && (this._events = {}),
                this._events.hasOwnProperty(t))
              )
                if (Go(e)) this._events[t] = [];
                else {
                  const n = this._events[t];
                  for (let t = n.length - 1; t >= 0; t--)
                    n[t] === e && n.splice(t, 1);
                }
            }),
            this
          );
        }
        emit(t, ...e) {
          if (this._events && this._events.hasOwnProperty(t)) {
            const n = this._events[t].slice(0);
            for (let t = 0, s = n.length; t < s; t++) n[t].apply(this, e);
          }
          return this;
        }
        static mixin(t) {
          ["on", "once", "off", "emit"].forEach((e) => {
            const n = Object.getOwnPropertyDescriptor(Ra.prototype, e);
            Object.defineProperty(t.prototype, e, n);
          });
        }
        dispose() {
          return super.dispose(), (this._events = void 0), this;
        }
      }
      class Na extends Ra {
        constructor() {
          super(...arguments), (this.isOffline = !1);
        }
        toJSON() {
          return {};
        }
      }
      class Pa extends Na {
        constructor() {
          super(),
            (this.name = "Context"),
            (this._constants = new Map()),
            (this._timeouts = new Aa()),
            (this._timeoutIds = 0),
            (this._initialized = !1),
            (this.isOffline = !1),
            (this._workletModules = new Map());
          const t = ga(Pa.getDefaults(), arguments, ["context"]);
          t.context
            ? (this._context = t.context)
            : (this._context = ta({ latencyHint: t.latencyHint })),
            (this._ticker = new aa(
              this.emit.bind(this, "tick"),
              t.clockSource,
              t.updateInterval
            )),
            this.on("tick", this._timeoutLoop.bind(this)),
            (this._context.onstatechange = () => {
              this.emit("statechange", this.state);
            }),
            this._setLatencyHint(t.latencyHint),
            (this.lookAhead = t.lookAhead);
        }
        static getDefaults() {
          return {
            clockSource: "worker",
            latencyHint: "interactive",
            lookAhead: 0.1,
            updateInterval: 0.05,
          };
        }
        initialize() {
          return (
            this._initialized || (Ma(this), (this._initialized = !0)), this
          );
        }
        createAnalyser() {
          return this._context.createAnalyser();
        }
        createOscillator() {
          return this._context.createOscillator();
        }
        createBufferSource() {
          return this._context.createBufferSource();
        }
        createBiquadFilter() {
          return this._context.createBiquadFilter();
        }
        createBuffer(t, e, n) {
          return this._context.createBuffer(t, e, n);
        }
        createChannelMerger(t) {
          return this._context.createChannelMerger(t);
        }
        createChannelSplitter(t) {
          return this._context.createChannelSplitter(t);
        }
        createConstantSource() {
          return this._context.createConstantSource();
        }
        createConvolver() {
          return this._context.createConvolver();
        }
        createDelay(t) {
          return this._context.createDelay(t);
        }
        createDynamicsCompressor() {
          return this._context.createDynamicsCompressor();
        }
        createGain() {
          return this._context.createGain();
        }
        createIIRFilter(t, e) {
          return this._context.createIIRFilter(t, e);
        }
        createPanner() {
          return this._context.createPanner();
        }
        createPeriodicWave(t, e, n) {
          return this._context.createPeriodicWave(t, e, n);
        }
        createStereoPanner() {
          return this._context.createStereoPanner();
        }
        createWaveShaper() {
          return this._context.createWaveShaper();
        }
        createMediaStreamSource(t) {
          Lo(ha(this._context), "Not available if OfflineAudioContext");
          const e = this._context;
          return e.createMediaStreamSource(t);
        }
        createMediaElementSource(t) {
          Lo(ha(this._context), "Not available if OfflineAudioContext");
          const e = this._context;
          return e.createMediaElementSource(t);
        }
        createMediaStreamDestination() {
          Lo(ha(this._context), "Not available if OfflineAudioContext");
          const t = this._context;
          return t.createMediaStreamDestination();
        }
        decodeAudioData(t) {
          return this._context.decodeAudioData(t);
        }
        get currentTime() {
          return this._context.currentTime;
        }
        get state() {
          return this._context.state;
        }
        get sampleRate() {
          return this._context.sampleRate;
        }
        get listener() {
          return this.initialize(), this._listener;
        }
        set listener(t) {
          Lo(
            !this._initialized,
            "The listener cannot be set after initialization."
          ),
            (this._listener = t);
        }
        get transport() {
          return this.initialize(), this._transport;
        }
        set transport(t) {
          Lo(
            !this._initialized,
            "The transport cannot be set after initialization."
          ),
            (this._transport = t);
        }
        get draw() {
          return this.initialize(), this._draw;
        }
        set draw(t) {
          Lo(!this._initialized, "Draw cannot be set after initialization."),
            (this._draw = t);
        }
        get destination() {
          return this.initialize(), this._destination;
        }
        set destination(t) {
          Lo(
            !this._initialized,
            "The destination cannot be set after initialization."
          ),
            (this._destination = t);
        }
        createAudioWorkletNode(t, e) {
          return ia(this.rawContext, t, e);
        }
        addAudioWorkletModule(t, e) {
          return oa(this, void 0, void 0, function* () {
            Lo(
              $o(this.rawContext.audioWorklet),
              "AudioWorkletNode is only available in a secure context (https or localhost)"
            ),
              this._workletModules.has(e) ||
                this._workletModules.set(
                  e,
                  this.rawContext.audioWorklet.addModule(t)
                ),
              yield this._workletModules.get(e);
          });
        }
        workletsAreReady() {
          return oa(this, void 0, void 0, function* () {
            const t = [];
            this._workletModules.forEach((e) => t.push(e)),
              yield Promise.all(t);
          });
        }
        get updateInterval() {
          return this._ticker.updateInterval;
        }
        set updateInterval(t) {
          this._ticker.updateInterval = t;
        }
        get clockSource() {
          return this._ticker.type;
        }
        set clockSource(t) {
          this._ticker.type = t;
        }
        get latencyHint() {
          return this._latencyHint;
        }
        _setLatencyHint(t) {
          let e = 0;
          if (((this._latencyHint = t), Jo(t)))
            switch (t) {
              case "interactive":
                e = 0.1;
                break;
              case "playback":
                e = 0.5;
                break;
              case "balanced":
                e = 0.25;
                break;
            }
          (this.lookAhead = e), (this.updateInterval = e / 2);
        }
        get rawContext() {
          return this._context;
        }
        now() {
          return this._context.currentTime + this.lookAhead;
        }
        immediate() {
          return this._context.currentTime;
        }
        resume() {
          return ha(this._context) ? this._context.resume() : Promise.resolve();
        }
        close() {
          return oa(this, void 0, void 0, function* () {
            ha(this._context) && (yield this._context.close()),
              this._initialized && Da(this);
          });
        }
        getConstant(t) {
          if (this._constants.has(t)) return this._constants.get(t);
          {
            const e = this._context.createBuffer(
                1,
                128,
                this._context.sampleRate
              ),
              n = e.getChannelData(0);
            for (let i = 0; i < n.length; i++) n[i] = t;
            const s = this._context.createBufferSource();
            return (
              (s.channelCount = 1),
              (s.channelCountMode = "explicit"),
              (s.buffer = e),
              (s.loop = !0),
              s.start(0),
              this._constants.set(t, s),
              s
            );
          }
        }
        dispose() {
          return (
            super.dispose(),
            this._ticker.dispose(),
            this._timeouts.dispose(),
            Object.keys(this._constants).map((t) =>
              this._constants[t].disconnect()
            ),
            this
          );
        }
        _timeoutLoop() {
          const t = this.now();
          let e = this._timeouts.peek();
          while (this._timeouts.length && e && e.time <= t)
            e.callback(), this._timeouts.shift(), (e = this._timeouts.peek());
        }
        setTimeout(t, e) {
          this._timeoutIds++;
          const n = this.now();
          return (
            this._timeouts.add({
              callback: t,
              id: this._timeoutIds,
              time: n + e,
            }),
            this._timeoutIds
          );
        }
        clearTimeout(t) {
          return (
            this._timeouts.forEach((e) => {
              e.id === t && this._timeouts.remove(e);
            }),
            this
          );
        }
        clearInterval(t) {
          return this.clearTimeout(t);
        }
        setInterval(t, e) {
          const n = ++this._timeoutIds,
            s = () => {
              const i = this.now();
              this._timeouts.add({
                callback: () => {
                  t(), s();
                },
                id: n,
                time: i + e,
              });
            };
          return s(), n;
        }
      }
      class Va extends Na {
        constructor() {
          super(...arguments),
            (this.lookAhead = 0),
            (this.latencyHint = 0),
            (this.isOffline = !1);
        }
        createAnalyser() {
          return {};
        }
        createOscillator() {
          return {};
        }
        createBufferSource() {
          return {};
        }
        createBiquadFilter() {
          return {};
        }
        createBuffer(t, e, n) {
          return {};
        }
        createChannelMerger(t) {
          return {};
        }
        createChannelSplitter(t) {
          return {};
        }
        createConstantSource() {
          return {};
        }
        createConvolver() {
          return {};
        }
        createDelay(t) {
          return {};
        }
        createDynamicsCompressor() {
          return {};
        }
        createGain() {
          return {};
        }
        createIIRFilter(t, e) {
          return {};
        }
        createPanner() {
          return {};
        }
        createPeriodicWave(t, e, n) {
          return {};
        }
        createStereoPanner() {
          return {};
        }
        createWaveShaper() {
          return {};
        }
        createMediaStreamSource(t) {
          return {};
        }
        createMediaElementSource(t) {
          return {};
        }
        createMediaStreamDestination() {
          return {};
        }
        decodeAudioData(t) {
          return Promise.resolve({});
        }
        createAudioWorkletNode(t, e) {
          return {};
        }
        get rawContext() {
          return {};
        }
        addAudioWorkletModule(t, e) {
          return oa(this, void 0, void 0, function* () {
            return Promise.resolve();
          });
        }
        resume() {
          return Promise.resolve();
        }
        setTimeout(t, e) {
          return 0;
        }
        clearTimeout(t) {
          return this;
        }
        setInterval(t, e) {
          return 0;
        }
        clearInterval(t) {
          return this;
        }
        getConstant(t) {
          return {};
        }
        get currentTime() {
          return 0;
        }
        get state() {
          return {};
        }
        get sampleRate() {
          return 0;
        }
        get listener() {
          return {};
        }
        get transport() {
          return {};
        }
        get draw() {
          return {};
        }
        set draw(t) {}
        get destination() {
          return {};
        }
        set destination(t) {}
        now() {
          return 0;
        }
        immediate() {
          return 0;
        }
      }
      function Fa(t, e) {
        Qo(e)
          ? e.forEach((e) => Fa(t, e))
          : Object.defineProperty(t, e, { enumerable: !0, writable: !1 });
      }
      function La(t, e) {
        Qo(e)
          ? e.forEach((e) => La(t, e))
          : Object.defineProperty(t, e, { writable: !0 });
      }
      const qa = () => {};
      class Ba extends ba {
        constructor() {
          super(), (this.name = "ToneAudioBuffer"), (this.onload = qa);
          const t = ga(Ba.getDefaults(), arguments, [
            "url",
            "onload",
            "onerror",
          ]);
          (this.reverse = t.reverse),
            (this.onload = t.onload),
            (t.url && pa(t.url)) || t.url instanceof Ba
              ? this.set(t.url)
              : Jo(t.url) && this.load(t.url).catch(t.onerror);
        }
        static getDefaults() {
          return { onerror: qa, onload: qa, reverse: !1 };
        }
        get sampleRate() {
          return this._buffer ? this._buffer.sampleRate : Ga().sampleRate;
        }
        set(t) {
          return (
            t instanceof Ba
              ? t.loaded
                ? (this._buffer = t.get())
                : (t.onload = () => {
                    this.set(t), this.onload(this);
                  })
              : (this._buffer = t),
            this._reversed && this._reverse(),
            this
          );
        }
        get() {
          return this._buffer;
        }
        load(t) {
          return oa(this, void 0, void 0, function* () {
            const e = Ba.load(t).then((t) => {
              this.set(t), this.onload(this);
            });
            Ba.downloads.push(e);
            try {
              yield e;
            } finally {
              const t = Ba.downloads.indexOf(e);
              Ba.downloads.splice(t, 1);
            }
            return this;
          });
        }
        dispose() {
          return super.dispose(), (this._buffer = void 0), this;
        }
        fromArray(t) {
          const e = Qo(t) && t[0].length > 0,
            n = e ? t.length : 1,
            s = e ? t[0].length : t.length,
            i = Ga(),
            r = i.createBuffer(n, s, i.sampleRate),
            o = e || 1 !== n ? t : [t];
          for (let a = 0; a < n; a++) r.copyToChannel(o[a], a);
          return (this._buffer = r), this;
        }
        toMono(t) {
          if (Yo(t)) this.fromArray(this.toArray(t));
          else {
            let t = new Float32Array(this.length);
            const e = this.numberOfChannels;
            for (let n = 0; n < e; n++) {
              const e = this.toArray(n);
              for (let n = 0; n < e.length; n++) t[n] += e[n];
            }
            (t = t.map((t) => t / e)), this.fromArray(t);
          }
          return this;
        }
        toArray(t) {
          if (Yo(t)) return this.getChannelData(t);
          if (1 === this.numberOfChannels) return this.toArray(0);
          {
            const t = [];
            for (let e = 0; e < this.numberOfChannels; e++)
              t[e] = this.getChannelData(e);
            return t;
          }
        }
        getChannelData(t) {
          return this._buffer
            ? this._buffer.getChannelData(t)
            : new Float32Array(0);
        }
        slice(t, e = this.duration) {
          const n = Math.floor(t * this.sampleRate),
            s = Math.floor(e * this.sampleRate);
          Lo(n < s, "The start time must be less than the end time");
          const i = s - n,
            r = Ga().createBuffer(this.numberOfChannels, i, this.sampleRate);
          for (let o = 0; o < this.numberOfChannels; o++)
            r.copyToChannel(this.getChannelData(o).subarray(n, s), o);
          return new Ba(r);
        }
        _reverse() {
          if (this.loaded)
            for (let t = 0; t < this.numberOfChannels; t++)
              this.getChannelData(t).reverse();
          return this;
        }
        get loaded() {
          return this.length > 0;
        }
        get duration() {
          return this._buffer ? this._buffer.duration : 0;
        }
        get length() {
          return this._buffer ? this._buffer.length : 0;
        }
        get numberOfChannels() {
          return this._buffer ? this._buffer.numberOfChannels : 0;
        }
        get reverse() {
          return this._reversed;
        }
        set reverse(t) {
          this._reversed !== t && ((this._reversed = t), this._reverse());
        }
        static fromArray(t) {
          return new Ba().fromArray(t);
        }
        static fromUrl(t) {
          return oa(this, void 0, void 0, function* () {
            const e = new Ba();
            return yield e.load(t);
          });
        }
        static load(t) {
          return oa(this, void 0, void 0, function* () {
            const e = t.match(/\[([^\]\[]+\|.+)\]$/);
            if (e) {
              const n = e[1].split("|");
              let s = n[0];
              for (const t of n)
                if (Ba.supportsType(t)) {
                  s = t;
                  break;
                }
              t = t.replace(e[0], s);
            }
            const n =
                "" === Ba.baseUrl || Ba.baseUrl.endsWith("/")
                  ? Ba.baseUrl
                  : Ba.baseUrl + "/",
              s = yield fetch(n + t);
            if (!s.ok) throw new Error("could not load url: " + t);
            const i = yield s.arrayBuffer(),
              r = yield Ga().decodeAudioData(i);
            return r;
          });
        }
        static supportsType(t) {
          const e = t.split("."),
            n = e[e.length - 1],
            s = document.createElement("audio").canPlayType("audio/" + n);
          return "" !== s;
        }
        static loaded() {
          return oa(this, void 0, void 0, function* () {
            yield Promise.resolve();
            while (Ba.downloads.length) yield Ba.downloads[0];
          });
        }
      }
      (Ba.baseUrl = ""), (Ba.downloads = []);
      class Wa extends Pa {
        constructor() {
          super({
            clockSource: "offline",
            context: la(arguments[0])
              ? arguments[0]
              : ea(arguments[0], arguments[1] * arguments[2], arguments[2]),
            lookAhead: 0,
            updateInterval: la(arguments[0])
              ? 128 / arguments[0].sampleRate
              : 128 / arguments[2],
          }),
            (this.name = "OfflineContext"),
            (this._currentTime = 0),
            (this.isOffline = !0),
            (this._duration = la(arguments[0])
              ? arguments[0].length / arguments[0].sampleRate
              : arguments[1]);
        }
        now() {
          return this._currentTime;
        }
        get currentTime() {
          return this._currentTime;
        }
        _renderClock(t) {
          return oa(this, void 0, void 0, function* () {
            let e = 0;
            while (this._duration - this._currentTime >= 0) {
              this.emit("tick"),
                (this._currentTime += 128 / this.sampleRate),
                e++;
              const n = Math.floor(this.sampleRate / 128);
              t && e % n === 0 && (yield new Promise((t) => setTimeout(t, 1)));
            }
          });
        }
        render(t = !0) {
          return oa(this, void 0, void 0, function* () {
            yield this.workletsAreReady(), yield this._renderClock(t);
            const e = yield this._context.startRendering();
            return new Ba(e);
          });
        }
        close() {
          return Promise.resolve();
        }
      }
      const Ua = new Va();
      let za = Ua;
      function Ga() {
        return za === Ua && sa && $a(new Pa()), za;
      }
      function $a(t) {
        za = ha(t) ? new Pa(t) : la(t) ? new Wa(t) : t;
      }
      function Ha() {
        return za.resume();
      }
      if (na && !na.TONE_SILENCE_LOGGING) {
        let t = "v";
        "dev" === s && (t = "");
        const e = ` * Tone.js ${t}${s} * `;
        console.log("%c" + e, "background: #000; color: #fff");
      }
      function Ya(t) {
        return Math.pow(10, t / 20);
      }
      function Xa(t) {
        return (Math.log(t) / Math.LN10) * 20;
      }
      function Za(t) {
        return Math.pow(2, t / 12);
      }
      let Qa = 440;
      function Ja() {
        return Qa;
      }
      function Ka(t) {
        Qa = t;
      }
      function tc(t) {
        return Math.round(ec(t));
      }
      function ec(t) {
        return 69 + 12 * Math.log2(t / Qa);
      }
      function nc(t) {
        return Qa * Math.pow(2, (t - 69) / 12);
      }
      class sc extends ba {
        constructor(t, e, n) {
          super(),
            (this.defaultUnits = "s"),
            (this._val = e),
            (this._units = n),
            (this.context = t),
            (this._expressions = this._getExpressions());
        }
        _getExpressions() {
          return {
            hz: {
              method: (t) => this._frequencyToUnits(parseFloat(t)),
              regexp: /^(\d+(?:\.\d+)?)hz$/i,
            },
            i: {
              method: (t) => this._ticksToUnits(parseInt(t, 10)),
              regexp: /^(\d+)i$/i,
            },
            m: {
              method: (t) =>
                this._beatsToUnits(parseInt(t, 10) * this._getTimeSignature()),
              regexp: /^(\d+)m$/i,
            },
            n: {
              method: (t, e) => {
                const n = parseInt(t, 10),
                  s = "." === e ? 1.5 : 1;
                return 1 === n
                  ? this._beatsToUnits(this._getTimeSignature()) * s
                  : this._beatsToUnits(4 / n) * s;
              },
              regexp: /^(\d+)n(\.?)$/i,
            },
            number: {
              method: (t) =>
                this._expressions[this.defaultUnits].method.call(this, t),
              regexp: /^(\d+(?:\.\d+)?)$/,
            },
            s: {
              method: (t) => this._secondsToUnits(parseFloat(t)),
              regexp: /^(\d+(?:\.\d+)?)s$/,
            },
            samples: {
              method: (t) => parseInt(t, 10) / this.context.sampleRate,
              regexp: /^(\d+)samples$/,
            },
            t: {
              method: (t) => {
                const e = parseInt(t, 10);
                return this._beatsToUnits(8 / (3 * Math.floor(e)));
              },
              regexp: /^(\d+)t$/i,
            },
            tr: {
              method: (t, e, n) => {
                let s = 0;
                return (
                  t &&
                    "0" !== t &&
                    (s += this._beatsToUnits(
                      this._getTimeSignature() * parseFloat(t)
                    )),
                  e && "0" !== e && (s += this._beatsToUnits(parseFloat(e))),
                  n &&
                    "0" !== n &&
                    (s += this._beatsToUnits(parseFloat(n) / 4)),
                  s
                );
              },
              regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
            },
          };
        }
        valueOf() {
          if (
            (this._val instanceof sc && this.fromType(this._val), Go(this._val))
          )
            return this._noArg();
          if (Jo(this._val) && Go(this._units)) {
            for (const t in this._expressions)
              if (this._expressions[t].regexp.test(this._val.trim())) {
                this._units = t;
                break;
              }
          } else if (Xo(this._val)) {
            let t = 0;
            for (const e in this._val)
              if ($o(this._val[e])) {
                const n = this._val[e],
                  s = new this.constructor(this.context, e).valueOf() * n;
                t += s;
              }
            return t;
          }
          if ($o(this._units)) {
            const t = this._expressions[this._units],
              e = this._val.toString().trim().match(t.regexp);
            return e
              ? t.method.apply(this, e.slice(1))
              : t.method.call(this, this._val);
          }
          return Jo(this._val) ? parseFloat(this._val) : this._val;
        }
        _frequencyToUnits(t) {
          return 1 / t;
        }
        _beatsToUnits(t) {
          return (60 / this._getBpm()) * t;
        }
        _secondsToUnits(t) {
          return t;
        }
        _ticksToUnits(t) {
          return (t * this._beatsToUnits(1)) / this._getPPQ();
        }
        _noArg() {
          return this._now();
        }
        _getBpm() {
          return this.context.transport.bpm.value;
        }
        _getTimeSignature() {
          return this.context.transport.timeSignature;
        }
        _getPPQ() {
          return this.context.transport.PPQ;
        }
        fromType(t) {
          switch (((this._units = void 0), this.defaultUnits)) {
            case "s":
              this._val = t.toSeconds();
              break;
            case "i":
              this._val = t.toTicks();
              break;
            case "hz":
              this._val = t.toFrequency();
              break;
            case "midi":
              this._val = t.toMidi();
              break;
          }
          return this;
        }
        toFrequency() {
          return 1 / this.toSeconds();
        }
        toSamples() {
          return this.toSeconds() * this.context.sampleRate;
        }
        toMilliseconds() {
          return 1e3 * this.toSeconds();
        }
      }
      class ic extends sc {
        constructor() {
          super(...arguments), (this.name = "TimeClass");
        }
        _getExpressions() {
          return Object.assign(super._getExpressions(), {
            now: {
              method: (t) =>
                this._now() + new this.constructor(this.context, t).valueOf(),
              regexp: /^\+(.+)/,
            },
            quantize: {
              method: (t) => {
                const e = new ic(this.context, t).valueOf();
                return this._secondsToUnits(
                  this.context.transport.nextSubdivision(e)
                );
              },
              regexp: /^@(.+)/,
            },
          });
        }
        quantize(t, e = 1) {
          const n = new this.constructor(this.context, t).valueOf(),
            s = this.valueOf(),
            i = Math.round(s / n),
            r = i * n,
            o = r - s;
          return s + o * e;
        }
        toNotation() {
          const t = this.toSeconds(),
            e = ["1m"];
          for (let i = 1; i < 9; i++) {
            const t = Math.pow(2, i);
            e.push(t + "n."), e.push(t + "n"), e.push(t + "t");
          }
          e.push("0");
          let n = e[0],
            s = new ic(this.context, e[0]).toSeconds();
          return (
            e.forEach((e) => {
              const i = new ic(this.context, e).toSeconds();
              Math.abs(i - t) < Math.abs(s - t) && ((n = e), (s = i));
            }),
            n
          );
        }
        toBarsBeatsSixteenths() {
          const t = this._beatsToUnits(1);
          let e = this.valueOf() / t;
          e = parseFloat(e.toFixed(4));
          const n = Math.floor(e / this._getTimeSignature());
          let s = (e % 1) * 4;
          e = Math.floor(e) % this._getTimeSignature();
          const i = s.toString();
          i.length > 3 && (s = parseFloat(parseFloat(i).toFixed(3)));
          const r = [n, e, s];
          return r.join(":");
        }
        toTicks() {
          const t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.round(e * this._getPPQ());
        }
        toSeconds() {
          return this.valueOf();
        }
        toMidi() {
          return tc(this.toFrequency());
        }
        _now() {
          return this.context.now();
        }
      }
      class rc extends ic {
        constructor() {
          super(...arguments),
            (this.name = "Frequency"),
            (this.defaultUnits = "hz");
        }
        static get A4() {
          return Ja();
        }
        static set A4(t) {
          Ka(t);
        }
        _getExpressions() {
          return Object.assign({}, super._getExpressions(), {
            midi: {
              regexp: /^(\d+(?:\.\d+)?midi)/,
              method(t) {
                return "midi" === this.defaultUnits ? t : rc.mtof(t);
              },
            },
            note: {
              regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
              method(t, e) {
                const n = oc[t.toLowerCase()],
                  s = n + 12 * (parseInt(e, 10) + 1);
                return "midi" === this.defaultUnits ? s : rc.mtof(s);
              },
            },
            tr: {
              regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
              method(t, e, n) {
                let s = 1;
                return (
                  t &&
                    "0" !== t &&
                    (s *= this._beatsToUnits(
                      this._getTimeSignature() * parseFloat(t)
                    )),
                  e && "0" !== e && (s *= this._beatsToUnits(parseFloat(e))),
                  n &&
                    "0" !== n &&
                    (s *= this._beatsToUnits(parseFloat(n) / 4)),
                  s
                );
              },
            },
          });
        }
        transpose(t) {
          return new rc(this.context, this.valueOf() * Za(t));
        }
        harmonize(t) {
          return t.map((t) => this.transpose(t));
        }
        toMidi() {
          return tc(this.valueOf());
        }
        toNote() {
          const t = this.toFrequency(),
            e = Math.log2(t / rc.A4);
          let n = Math.round(12 * e) + 57;
          const s = Math.floor(n / 12);
          s < 0 && (n += -12 * s);
          const i = ac[n % 12];
          return i + s.toString();
        }
        toSeconds() {
          return 1 / super.toSeconds();
        }
        toTicks() {
          const t = this._beatsToUnits(1),
            e = this.valueOf() / t;
          return Math.floor(e * this._getPPQ());
        }
        _noArg() {
          return 0;
        }
        _frequencyToUnits(t) {
          return t;
        }
        _ticksToUnits(t) {
          return 1 / ((60 * t) / (this._getBpm() * this._getPPQ()));
        }
        _beatsToUnits(t) {
          return 1 / super._beatsToUnits(t);
        }
        _secondsToUnits(t) {
          return 1 / t;
        }
        static mtof(t) {
          return nc(t);
        }
        static ftom(t) {
          return tc(t);
        }
      }
      const oc = {
          cbb: -2,
          cb: -1,
          c: 0,
          "c#": 1,
          cx: 2,
          dbb: 0,
          db: 1,
          d: 2,
          "d#": 3,
          dx: 4,
          ebb: 2,
          eb: 3,
          e: 4,
          "e#": 5,
          ex: 6,
          fbb: 3,
          fb: 4,
          f: 5,
          "f#": 6,
          fx: 7,
          gbb: 5,
          gb: 6,
          g: 7,
          "g#": 8,
          gx: 9,
          abb: 7,
          ab: 8,
          a: 9,
          "a#": 10,
          ax: 11,
          bbb: 9,
          bb: 10,
          b: 11,
          "b#": 12,
          bx: 13,
        },
        ac = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
      class cc extends ic {
        constructor() {
          super(...arguments), (this.name = "TransportTime");
        }
        _now() {
          return this.context.transport.seconds;
        }
      }
      class uc extends ba {
        constructor() {
          super();
          const t = ga(uc.getDefaults(), arguments, ["context"]);
          this.defaultContext
            ? (this.context = this.defaultContext)
            : (this.context = t.context);
        }
        static getDefaults() {
          return { context: Ga() };
        }
        now() {
          return this.context.currentTime + this.context.lookAhead;
        }
        immediate() {
          return this.context.currentTime;
        }
        get sampleTime() {
          return 1 / this.context.sampleRate;
        }
        get blockTime() {
          return 128 / this.context.sampleRate;
        }
        toSeconds(t) {
          return new ic(this.context, t).toSeconds();
        }
        toFrequency(t) {
          return new rc(this.context, t).toFrequency();
        }
        toTicks(t) {
          return new cc(this.context, t).toTicks();
        }
        _getPartialProperties(t) {
          const e = this.get();
          return (
            Object.keys(e).forEach((n) => {
              Go(t[n]) && delete e[n];
            }),
            e
          );
        }
        get() {
          const t = _a(this);
          return (
            Object.keys(t).forEach((e) => {
              if (Reflect.has(this, e)) {
                const n = this[e];
                $o(n) && $o(n.value) && $o(n.setValueAtTime)
                  ? (t[e] = n.value)
                  : n instanceof uc
                  ? (t[e] = n._getPartialProperties(t[e]))
                  : Qo(n) || Yo(n) || Jo(n) || Zo(n)
                  ? (t[e] = n)
                  : delete t[e];
              }
            }),
            t
          );
        }
        set(t) {
          return (
            Object.keys(t).forEach((e) => {
              Reflect.has(this, e) &&
                $o(this[e]) &&
                (this[e] && $o(this[e].value) && $o(this[e].setValueAtTime)
                  ? this[e].value !== t[e] && (this[e].value = t[e])
                  : this[e] instanceof uc
                  ? this[e].set(t[e])
                  : (this[e] = t[e]));
            }),
            this
          );
        }
      }
      class lc extends Aa {
        constructor(t = "stopped") {
          super(),
            (this.name = "StateTimeline"),
            (this._initial = t),
            this.setStateAtTime(this._initial, 0);
        }
        getValueAtTime(t) {
          const e = this.get(t);
          return null !== e ? e.state : this._initial;
        }
        setStateAtTime(t, e, n) {
          return (
            qo(e, 0),
            this.add(Object.assign({}, n, { state: t, time: e })),
            this
          );
        }
        getLastState(t, e) {
          const n = this._search(e);
          for (let s = n; s >= 0; s--) {
            const e = this._timeline[s];
            if (e.state === t) return e;
          }
        }
        getNextState(t, e) {
          const n = this._search(e);
          if (-1 !== n)
            for (let s = n; s < this._timeline.length; s++) {
              const e = this._timeline[s];
              if (e.state === t) return e;
            }
        }
      }
      class hc extends uc {
        constructor() {
          super(ga(hc.getDefaults(), arguments, ["param", "units", "convert"])),
            (this.name = "Param"),
            (this.overridden = !1),
            (this._minOutput = 1e-7);
          const t = ga(hc.getDefaults(), arguments, [
            "param",
            "units",
            "convert",
          ]);
          Lo(
            $o(t.param) && (ca(t.param) || t.param instanceof hc),
            "param must be an AudioParam"
          );
          while (!ca(t.param)) t.param = t.param._param;
          (this._swappable = !!$o(t.swappable) && t.swappable),
            this._swappable
              ? ((this.input = this.context.createGain()),
                (this._param = t.param),
                this.input.connect(this._param))
              : (this._param = this.input = t.param),
            (this._events = new Aa(1e3)),
            (this._initialValue = this._param.defaultValue),
            (this.units = t.units),
            (this.convert = t.convert),
            (this._minValue = t.minValue),
            (this._maxValue = t.maxValue),
            $o(t.value) &&
              t.value !== this._toType(this._initialValue) &&
              this.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(uc.getDefaults(), {
            convert: !0,
            units: "number",
          });
        }
        get value() {
          const t = this.now();
          return this.getValueAtTime(t);
        }
        set value(t) {
          this.cancelScheduledValues(this.now()),
            this.setValueAtTime(t, this.now());
        }
        get minValue() {
          return $o(this._minValue)
            ? this._minValue
            : "time" === this.units ||
              "frequency" === this.units ||
              "normalRange" === this.units ||
              "positive" === this.units ||
              "transportTime" === this.units ||
              "ticks" === this.units ||
              "bpm" === this.units ||
              "hertz" === this.units ||
              "samples" === this.units
            ? 0
            : "audioRange" === this.units
            ? -1
            : "decibels" === this.units
            ? -1 / 0
            : this._param.minValue;
        }
        get maxValue() {
          return $o(this._maxValue)
            ? this._maxValue
            : "normalRange" === this.units || "audioRange" === this.units
            ? 1
            : this._param.maxValue;
        }
        _is(t, e) {
          return this.units === e;
        }
        _assertRange(t) {
          return (
            $o(this.maxValue) &&
              $o(this.minValue) &&
              qo(
                t,
                this._fromType(this.minValue),
                this._fromType(this.maxValue)
              ),
            t
          );
        }
        _fromType(t) {
          return this.convert && !this.overridden
            ? this._is(t, "time")
              ? this.toSeconds(t)
              : this._is(t, "decibels")
              ? Ya(t)
              : this._is(t, "frequency")
              ? this.toFrequency(t)
              : t
            : this.overridden
            ? 0
            : t;
        }
        _toType(t) {
          return this.convert && "decibels" === this.units ? Xa(t) : t;
        }
        setValueAtTime(t, e) {
          const n = this.toSeconds(e),
            s = this._fromType(t);
          return (
            Lo(
              isFinite(s) && isFinite(n),
              `Invalid argument(s) to setValueAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._assertRange(s),
            this.log(this.units, "setValueAtTime", t, n),
            this._events.add({ time: n, type: "setValueAtTime", value: s }),
            this._param.setValueAtTime(s, n),
            this
          );
        }
        getValueAtTime(t) {
          const e = Math.max(this.toSeconds(t), 0),
            n = this._events.getAfter(e),
            s = this._events.get(e);
          let i = this._initialValue;
          if (null === s) i = this._initialValue;
          else if (
            "setTargetAtTime" !== s.type ||
            (null !== n && "setValueAtTime" !== n.type)
          )
            if (null === n) i = s.value;
            else if (
              "linearRampToValueAtTime" === n.type ||
              "exponentialRampToValueAtTime" === n.type
            ) {
              let t = s.value;
              if ("setTargetAtTime" === s.type) {
                const e = this._events.getBefore(s.time);
                t = null === e ? this._initialValue : e.value;
              }
              i =
                "linearRampToValueAtTime" === n.type
                  ? this._linearInterpolate(s.time, t, n.time, n.value, e)
                  : this._exponentialInterpolate(s.time, t, n.time, n.value, e);
            } else i = s.value;
          else {
            const t = this._events.getBefore(s.time);
            let n;
            (n = null === t ? this._initialValue : t.value),
              "setTargetAtTime" === s.type &&
                (i = this._exponentialApproach(
                  s.time,
                  n,
                  s.value,
                  s.constant,
                  e
                ));
          }
          return this._toType(i);
        }
        setRampPoint(t) {
          t = this.toSeconds(t);
          let e = this.getValueAtTime(t);
          return (
            this.cancelAndHoldAtTime(t),
            0 === this._fromType(e) && (e = this._toType(this._minOutput)),
            this.setValueAtTime(e, t),
            this
          );
        }
        linearRampToValueAtTime(t, e) {
          const n = this._fromType(t),
            s = this.toSeconds(e);
          return (
            Lo(
              isFinite(n) && isFinite(s),
              `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._assertRange(n),
            this._events.add({
              time: s,
              type: "linearRampToValueAtTime",
              value: n,
            }),
            this.log(this.units, "linearRampToValueAtTime", t, s),
            this._param.linearRampToValueAtTime(n, s),
            this
          );
        }
        exponentialRampToValueAtTime(t, e) {
          let n = this._fromType(t);
          (n = Ca(n, 0) ? this._minOutput : n), this._assertRange(n);
          const s = this.toSeconds(e);
          return (
            Lo(
              isFinite(n) && isFinite(s),
              `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._events.add({
              time: s,
              type: "exponentialRampToValueAtTime",
              value: n,
            }),
            this.log(this.units, "exponentialRampToValueAtTime", t, s),
            this._param.exponentialRampToValueAtTime(n, s),
            this
          );
        }
        exponentialRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)),
            this
          );
        }
        linearRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.linearRampToValueAtTime(t, n + this.toSeconds(e)),
            this
          );
        }
        targetRampTo(t, e, n) {
          return (
            (n = this.toSeconds(n)),
            this.setRampPoint(n),
            this.exponentialApproachValueAtTime(t, n, e),
            this
          );
        }
        exponentialApproachValueAtTime(t, e, n) {
          (e = this.toSeconds(e)), (n = this.toSeconds(n));
          const s = Math.log(n + 1) / Math.log(200);
          return (
            this.setTargetAtTime(t, e, s),
            this.cancelAndHoldAtTime(e + 0.9 * n),
            this.linearRampToValueAtTime(t, e + n),
            this
          );
        }
        setTargetAtTime(t, e, n) {
          const s = this._fromType(t);
          Lo(
            isFinite(n) && n > 0,
            "timeConstant must be a number greater than 0"
          );
          const i = this.toSeconds(e);
          return (
            this._assertRange(s),
            Lo(
              isFinite(s) && isFinite(i),
              `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(
                t
              )}, ${JSON.stringify(e)}`
            ),
            this._events.add({
              constant: n,
              time: i,
              type: "setTargetAtTime",
              value: s,
            }),
            this.log(this.units, "setTargetAtTime", t, i, n),
            this._param.setTargetAtTime(s, i, n),
            this
          );
        }
        setValueCurveAtTime(t, e, n, s = 1) {
          (n = this.toSeconds(n)), (e = this.toSeconds(e));
          const i = this._fromType(t[0]) * s;
          this.setValueAtTime(this._toType(i), e);
          const r = n / (t.length - 1);
          for (let o = 1; o < t.length; o++) {
            const n = this._fromType(t[o]) * s;
            this.linearRampToValueAtTime(this._toType(n), e + o * r);
          }
          return this;
        }
        cancelScheduledValues(t) {
          const e = this.toSeconds(t);
          return (
            Lo(
              isFinite(e),
              "Invalid argument to cancelScheduledValues: " + JSON.stringify(t)
            ),
            this._events.cancel(e),
            this._param.cancelScheduledValues(e),
            this.log(this.units, "cancelScheduledValues", e),
            this
          );
        }
        cancelAndHoldAtTime(t) {
          const e = this.toSeconds(t),
            n = this._fromType(this.getValueAtTime(e));
          Lo(
            isFinite(e),
            "Invalid argument to cancelAndHoldAtTime: " + JSON.stringify(t)
          ),
            this.log(this.units, "cancelAndHoldAtTime", e, "value=" + n);
          const s = this._events.get(e),
            i = this._events.getAfter(e);
          return (
            s && Ca(s.time, e)
              ? i
                ? (this._param.cancelScheduledValues(i.time),
                  this._events.cancel(i.time))
                : (this._param.cancelAndHoldAtTime(e),
                  this._events.cancel(e + this.sampleTime))
              : i &&
                (this._param.cancelScheduledValues(i.time),
                this._events.cancel(i.time),
                "linearRampToValueAtTime" === i.type
                  ? this.linearRampToValueAtTime(this._toType(n), e)
                  : "exponentialRampToValueAtTime" === i.type &&
                    this.exponentialRampToValueAtTime(this._toType(n), e)),
            this._events.add({ time: e, type: "setValueAtTime", value: n }),
            this._param.setValueAtTime(n, e),
            this
          );
        }
        rampTo(t, e = 0.1, n) {
          return (
            "frequency" === this.units ||
            "bpm" === this.units ||
            "decibels" === this.units
              ? this.exponentialRampTo(t, e, n)
              : this.linearRampTo(t, e, n),
            this
          );
        }
        apply(t) {
          const e = this.context.currentTime;
          t.setValueAtTime(this.getValueAtTime(e), e);
          const n = this._events.get(e);
          if (n && "setTargetAtTime" === n.type) {
            const s = this._events.getAfter(n.time),
              i = s ? s.time : e + 2,
              r = (i - e) / 10;
            for (let n = e; n < i; n += r)
              t.linearRampToValueAtTime(this.getValueAtTime(n), n);
          }
          return (
            this._events.forEachAfter(this.context.currentTime, (e) => {
              "cancelScheduledValues" === e.type
                ? t.cancelScheduledValues(e.time)
                : "setTargetAtTime" === e.type
                ? t.setTargetAtTime(e.value, e.time, e.constant)
                : t[e.type](e.value, e.time);
            }),
            this
          );
        }
        setParam(t) {
          Lo(
            this._swappable,
            "The Param must be assigned as 'swappable' in the constructor"
          );
          const e = this.input;
          return (
            e.disconnect(this._param),
            this.apply(t),
            (this._param = t),
            e.connect(this._param),
            this
          );
        }
        dispose() {
          return super.dispose(), this._events.dispose(), this;
        }
        get defaultValue() {
          return this._toType(this._param.defaultValue);
        }
        _exponentialApproach(t, e, n, s, i) {
          return n + (e - n) * Math.exp(-(i - t) / s);
        }
        _linearInterpolate(t, e, n, s, i) {
          return e + ((i - t) / (n - t)) * (s - e);
        }
        _exponentialInterpolate(t, e, n, s, i) {
          return e * Math.pow(s / e, (i - t) / (n - t));
        }
      }
      class pc extends uc {
        constructor() {
          super(...arguments),
            (this.name = "ToneAudioNode"),
            (this._internalChannels = []);
        }
        get numberOfInputs() {
          return $o(this.input)
            ? ca(this.input) || this.input instanceof hc
              ? 1
              : this.input.numberOfInputs
            : 0;
        }
        get numberOfOutputs() {
          return $o(this.output) ? this.output.numberOfOutputs : 0;
        }
        _isAudioNode(t) {
          return $o(t) && (t instanceof pc || ua(t));
        }
        _getInternalNodes() {
          const t = this._internalChannels.slice(0);
          return (
            this._isAudioNode(this.input) && t.push(this.input),
            this._isAudioNode(this.output) &&
              this.input !== this.output &&
              t.push(this.output),
            t
          );
        }
        _setChannelProperties(t) {
          const e = this._getInternalNodes();
          e.forEach((e) => {
            (e.channelCount = t.channelCount),
              (e.channelCountMode = t.channelCountMode),
              (e.channelInterpretation = t.channelInterpretation);
          });
        }
        _getChannelProperties() {
          const t = this._getInternalNodes();
          Lo(t.length > 0, "ToneAudioNode does not have any internal nodes");
          const e = t[0];
          return {
            channelCount: e.channelCount,
            channelCountMode: e.channelCountMode,
            channelInterpretation: e.channelInterpretation,
          };
        }
        get channelCount() {
          return this._getChannelProperties().channelCount;
        }
        set channelCount(t) {
          const e = this._getChannelProperties();
          this._setChannelProperties(Object.assign(e, { channelCount: t }));
        }
        get channelCountMode() {
          return this._getChannelProperties().channelCountMode;
        }
        set channelCountMode(t) {
          const e = this._getChannelProperties();
          this._setChannelProperties(Object.assign(e, { channelCountMode: t }));
        }
        get channelInterpretation() {
          return this._getChannelProperties().channelInterpretation;
        }
        set channelInterpretation(t) {
          const e = this._getChannelProperties();
          this._setChannelProperties(
            Object.assign(e, { channelInterpretation: t })
          );
        }
        connect(t, e = 0, n = 0) {
          return fc(this, t, e, n), this;
        }
        toDestination() {
          return this.connect(this.context.destination), this;
        }
        toMaster() {
          return (
            zo("toMaster() has been renamed toDestination()"),
            this.toDestination()
          );
        }
        disconnect(t, e = 0, n = 0) {
          return mc(this, t, e, n), this;
        }
        chain(...t) {
          return dc(this, ...t), this;
        }
        fan(...t) {
          return t.forEach((t) => this.connect(t)), this;
        }
        dispose() {
          return (
            super.dispose(),
            $o(this.input) &&
              (this.input instanceof pc
                ? this.input.dispose()
                : ua(this.input) && this.input.disconnect()),
            $o(this.output) &&
              (this.output instanceof pc
                ? this.output.dispose()
                : ua(this.output) && this.output.disconnect()),
            (this._internalChannels = []),
            this
          );
        }
      }
      function dc(...t) {
        const e = t.shift();
        t.reduce(
          (t, e) => (t instanceof pc ? t.connect(e) : ua(t) && fc(t, e), e),
          e
        );
      }
      function fc(t, e, n = 0, s = 0) {
        Lo($o(t), "Cannot connect from undefined node"),
          Lo($o(e), "Cannot connect to undefined node"),
          (e instanceof pc || ua(e)) &&
            Lo(e.numberOfInputs > 0, "Cannot connect to node with no inputs"),
          Lo(t.numberOfOutputs > 0, "Cannot connect from node with no outputs");
        while (e instanceof pc || e instanceof hc) $o(e.input) && (e = e.input);
        while (t instanceof pc) $o(t.output) && (t = t.output);
        ca(e) ? t.connect(e, n) : t.connect(e, n, s);
      }
      function mc(t, e, n = 0, s = 0) {
        if ($o(e)) while (e instanceof pc) e = e.input;
        while (!ua(t)) $o(t.output) && (t = t.output);
        ca(e)
          ? t.disconnect(e, n)
          : ua(e)
          ? t.disconnect(e, n, s)
          : t.disconnect();
      }
      class gc extends pc {
        constructor() {
          super(ga(gc.getDefaults(), arguments, ["gain", "units"])),
            (this.name = "Gain"),
            (this._gainNode = this.context.createGain()),
            (this.input = this._gainNode),
            (this.output = this._gainNode);
          const t = ga(gc.getDefaults(), arguments, ["gain", "units"]);
          (this.gain = new hc({
            context: this.context,
            convert: t.convert,
            param: this._gainNode.gain,
            units: t.units,
            value: t.gain,
            minValue: t.minValue,
            maxValue: t.maxValue,
          })),
            Fa(this, "gain");
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            convert: !0,
            gain: 1,
            units: "gain",
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._gainNode.disconnect(),
            this.gain.dispose(),
            this
          );
        }
      }
      class _c extends pc {
        constructor(t) {
          super(t),
            (this.onended = qa),
            (this._startTime = -1),
            (this._stopTime = -1),
            (this._timeout = -1),
            (this.output = new gc({ context: this.context, gain: 0 })),
            (this._gainNode = this.output),
            (this.getStateAtTime = function (t) {
              const e = this.toSeconds(t);
              return -1 !== this._startTime &&
                e >= this._startTime &&
                (-1 === this._stopTime || e <= this._stopTime)
                ? "started"
                : "stopped";
            }),
            (this._fadeIn = t.fadeIn),
            (this._fadeOut = t.fadeOut),
            (this._curve = t.curve),
            (this.onended = t.onended);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            curve: "linear",
            fadeIn: 0,
            fadeOut: 0,
            onended: qa,
          });
        }
        _startGain(t, e = 1) {
          Lo(-1 === this._startTime, "Source cannot be started more than once");
          const n = this.toSeconds(this._fadeIn);
          return (
            (this._startTime = t + n),
            (this._startTime = Math.max(
              this._startTime,
              this.context.currentTime
            )),
            n > 0
              ? (this._gainNode.gain.setValueAtTime(0, t),
                "linear" === this._curve
                  ? this._gainNode.gain.linearRampToValueAtTime(e, t + n)
                  : this._gainNode.gain.exponentialApproachValueAtTime(e, t, n))
              : this._gainNode.gain.setValueAtTime(e, t),
            this
          );
        }
        stop(t) {
          return this.log("stop", t), this._stopGain(this.toSeconds(t)), this;
        }
        _stopGain(t) {
          Lo(-1 !== this._startTime, "'start' must be called before 'stop'"),
            this.cancelStop();
          const e = this.toSeconds(this._fadeOut);
          return (
            (this._stopTime = this.toSeconds(t) + e),
            (this._stopTime = Math.max(
              this._stopTime,
              this.context.currentTime
            )),
            e > 0
              ? "linear" === this._curve
                ? this._gainNode.gain.linearRampTo(0, e, t)
                : this._gainNode.gain.targetRampTo(0, e, t)
              : (this._gainNode.gain.cancelAndHoldAtTime(t),
                this._gainNode.gain.setValueAtTime(0, t)),
            this.context.clearTimeout(this._timeout),
            (this._timeout = this.context.setTimeout(() => {
              const t = "exponential" === this._curve ? 2 * e : 0;
              this._stopSource(this.now() + t), this._onended();
            }, this._stopTime - this.context.currentTime)),
            this
          );
        }
        _onended() {
          if (
            this.onended !== qa &&
            (this.onended(this), (this.onended = qa), !this.context.isOffline)
          ) {
            const t = () => this.dispose();
            "undefined" !== typeof window.requestIdleCallback
              ? window.requestIdleCallback(t)
              : setTimeout(t, 1e3);
          }
        }
        get state() {
          return this.getStateAtTime(this.now());
        }
        cancelStop() {
          return (
            this.log("cancelStop"),
            Lo(-1 !== this._startTime, "Source is not started"),
            this._gainNode.gain.cancelScheduledValues(
              this._startTime + this.sampleTime
            ),
            this.context.clearTimeout(this._timeout),
            (this._stopTime = -1),
            this
          );
        }
        dispose() {
          return super.dispose(), this._gainNode.disconnect(), this;
        }
      }
      class vc extends _c {
        constructor() {
          super(ga(vc.getDefaults(), arguments, ["offset"])),
            (this.name = "ToneConstantSource"),
            (this._source = this.context.createConstantSource());
          const t = ga(vc.getDefaults(), arguments, ["offset"]);
          fc(this._source, this._gainNode),
            (this.offset = new hc({
              context: this.context,
              convert: t.convert,
              param: this._source.offset,
              units: t.units,
              value: t.offset,
              minValue: t.minValue,
              maxValue: t.maxValue,
            }));
        }
        static getDefaults() {
          return Object.assign(_c.getDefaults(), {
            convert: !0,
            offset: 1,
            units: "number",
          });
        }
        start(t) {
          const e = this.toSeconds(t);
          return (
            this.log("start", e),
            this._startGain(e),
            this._source.start(e),
            this
          );
        }
        _stopSource(t) {
          this._source.stop(t);
        }
        dispose() {
          return (
            super.dispose(),
            "started" === this.state && this.stop(),
            this._source.disconnect(),
            this.offset.dispose(),
            this
          );
        }
      }
      class yc extends pc {
        constructor() {
          super(ga(yc.getDefaults(), arguments, ["value", "units"])),
            (this.name = "Signal"),
            (this.override = !0);
          const t = ga(yc.getDefaults(), arguments, ["value", "units"]);
          (this.output = this._constantSource =
            new vc({
              context: this.context,
              convert: t.convert,
              offset: t.value,
              units: t.units,
              minValue: t.minValue,
              maxValue: t.maxValue,
            })),
            this._constantSource.start(0),
            (this.input = this._param = this._constantSource.offset);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            convert: !0,
            units: "number",
            value: 0,
          });
        }
        connect(t, e = 0, n = 0) {
          return bc(this, t, e, n), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._param.dispose(),
            this._constantSource.dispose(),
            this
          );
        }
        setValueAtTime(t, e) {
          return this._param.setValueAtTime(t, e), this;
        }
        getValueAtTime(t) {
          return this._param.getValueAtTime(t);
        }
        setRampPoint(t) {
          return this._param.setRampPoint(t), this;
        }
        linearRampToValueAtTime(t, e) {
          return this._param.linearRampToValueAtTime(t, e), this;
        }
        exponentialRampToValueAtTime(t, e) {
          return this._param.exponentialRampToValueAtTime(t, e), this;
        }
        exponentialRampTo(t, e, n) {
          return this._param.exponentialRampTo(t, e, n), this;
        }
        linearRampTo(t, e, n) {
          return this._param.linearRampTo(t, e, n), this;
        }
        targetRampTo(t, e, n) {
          return this._param.targetRampTo(t, e, n), this;
        }
        exponentialApproachValueAtTime(t, e, n) {
          return this._param.exponentialApproachValueAtTime(t, e, n), this;
        }
        setTargetAtTime(t, e, n) {
          return this._param.setTargetAtTime(t, e, n), this;
        }
        setValueCurveAtTime(t, e, n, s) {
          return this._param.setValueCurveAtTime(t, e, n, s), this;
        }
        cancelScheduledValues(t) {
          return this._param.cancelScheduledValues(t), this;
        }
        cancelAndHoldAtTime(t) {
          return this._param.cancelAndHoldAtTime(t), this;
        }
        rampTo(t, e, n) {
          return this._param.rampTo(t, e, n), this;
        }
        get value() {
          return this._param.value;
        }
        set value(t) {
          this._param.value = t;
        }
        get convert() {
          return this._param.convert;
        }
        set convert(t) {
          this._param.convert = t;
        }
        get units() {
          return this._param.units;
        }
        get overridden() {
          return this._param.overridden;
        }
        set overridden(t) {
          this._param.overridden = t;
        }
        get maxValue() {
          return this._param.maxValue;
        }
        get minValue() {
          return this._param.minValue;
        }
        apply(t) {
          return this._param.apply(t), this;
        }
      }
      function bc(t, e, n, s) {
        (e instanceof hc || ca(e) || (e instanceof yc && e.override)) &&
          (e.cancelScheduledValues(0),
          e.setValueAtTime(0, 0),
          e instanceof yc && (e.overridden = !0)),
          fc(t, e, n, s);
      }
      class wc extends hc {
        constructor() {
          super(ga(wc.getDefaults(), arguments, ["value"])),
            (this.name = "TickParam"),
            (this._events = new Aa(1 / 0)),
            (this._multiplier = 1);
          const t = ga(wc.getDefaults(), arguments, ["value"]);
          (this._multiplier = t.multiplier),
            this._events.cancel(0),
            this._events.add({
              ticks: 0,
              time: 0,
              type: "setValueAtTime",
              value: this._fromType(t.value),
            }),
            this.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(hc.getDefaults(), {
            multiplier: 1,
            units: "hertz",
            value: 1,
          });
        }
        setTargetAtTime(t, e, n) {
          (e = this.toSeconds(e)), this.setRampPoint(e);
          const s = this._fromType(t),
            i = this._events.get(e),
            r = Math.round(Math.max(1 / n, 1));
          for (let o = 0; o <= r; o++) {
            const t = n * o + e,
              r = this._exponentialApproach(i.time, i.value, s, n, t);
            this.linearRampToValueAtTime(this._toType(r), t);
          }
          return this;
        }
        setValueAtTime(t, e) {
          const n = this.toSeconds(e);
          super.setValueAtTime(t, e);
          const s = this._events.get(n),
            i = this._events.previousEvent(s),
            r = this._getTicksUntilEvent(i, n);
          return (s.ticks = Math.max(r, 0)), this;
        }
        linearRampToValueAtTime(t, e) {
          const n = this.toSeconds(e);
          super.linearRampToValueAtTime(t, e);
          const s = this._events.get(n),
            i = this._events.previousEvent(s),
            r = this._getTicksUntilEvent(i, n);
          return (s.ticks = Math.max(r, 0)), this;
        }
        exponentialRampToValueAtTime(t, e) {
          e = this.toSeconds(e);
          const n = this._fromType(t),
            s = this._events.get(e),
            i = Math.round(Math.max(10 * (e - s.time), 1)),
            r = (e - s.time) / i;
          for (let o = 0; o <= i; o++) {
            const t = r * o + s.time,
              i = this._exponentialInterpolate(s.time, s.value, e, n, t);
            this.linearRampToValueAtTime(this._toType(i), t);
          }
          return this;
        }
        _getTicksUntilEvent(t, e) {
          if (null === t)
            t = { ticks: 0, time: 0, type: "setValueAtTime", value: 0 };
          else if (Go(t.ticks)) {
            const e = this._events.previousEvent(t);
            t.ticks = this._getTicksUntilEvent(e, t.time);
          }
          const n = this._fromType(this.getValueAtTime(t.time));
          let s = this._fromType(this.getValueAtTime(e));
          const i = this._events.get(e);
          return (
            i &&
              i.time === e &&
              "setValueAtTime" === i.type &&
              (s = this._fromType(this.getValueAtTime(e - this.sampleTime))),
            0.5 * (e - t.time) * (n + s) + t.ticks
          );
        }
        getTicksAtTime(t) {
          const e = this.toSeconds(t),
            n = this._events.get(e);
          return Math.max(this._getTicksUntilEvent(n, e), 0);
        }
        getDurationOfTicks(t, e) {
          const n = this.toSeconds(e),
            s = this.getTicksAtTime(e);
          return this.getTimeOfTick(s + t) - n;
        }
        getTimeOfTick(t) {
          const e = this._events.get(t, "ticks"),
            n = this._events.getAfter(t, "ticks");
          if (e && e.ticks === t) return e.time;
          if (
            e &&
            n &&
            "linearRampToValueAtTime" === n.type &&
            e.value !== n.value
          ) {
            const s = this._fromType(this.getValueAtTime(e.time)),
              i = this._fromType(this.getValueAtTime(n.time)),
              r = (i - s) / (n.time - e.time),
              o = Math.sqrt(Math.pow(s, 2) - 2 * r * (e.ticks - t)),
              a = (-s + o) / r,
              c = (-s - o) / r;
            return (a > 0 ? a : c) + e.time;
          }
          return e
            ? 0 === e.value
              ? 1 / 0
              : e.time + (t - e.ticks) / e.value
            : t / this._initialValue;
        }
        ticksToTime(t, e) {
          return this.getDurationOfTicks(t, e);
        }
        timeToTicks(t, e) {
          const n = this.toSeconds(e),
            s = this.toSeconds(t),
            i = this.getTicksAtTime(n),
            r = this.getTicksAtTime(n + s);
          return r - i;
        }
        _fromType(t) {
          return "bpm" === this.units && this.multiplier
            ? 1 / (60 / t / this.multiplier)
            : super._fromType(t);
        }
        _toType(t) {
          return "bpm" === this.units && this.multiplier
            ? (t / this.multiplier) * 60
            : super._toType(t);
        }
        get multiplier() {
          return this._multiplier;
        }
        set multiplier(t) {
          const e = this.value;
          (this._multiplier = t),
            this.cancelScheduledValues(0),
            this.setValueAtTime(e, 0);
        }
      }
      class xc extends yc {
        constructor() {
          super(ga(xc.getDefaults(), arguments, ["value"])),
            (this.name = "TickSignal");
          const t = ga(xc.getDefaults(), arguments, ["value"]);
          this.input = this._param = new wc({
            context: this.context,
            convert: t.convert,
            multiplier: t.multiplier,
            param: this._constantSource.offset,
            units: t.units,
            value: t.value,
          });
        }
        static getDefaults() {
          return Object.assign(yc.getDefaults(), {
            multiplier: 1,
            units: "hertz",
            value: 1,
          });
        }
        ticksToTime(t, e) {
          return this._param.ticksToTime(t, e);
        }
        timeToTicks(t, e) {
          return this._param.timeToTicks(t, e);
        }
        getTimeOfTick(t) {
          return this._param.getTimeOfTick(t);
        }
        getDurationOfTicks(t, e) {
          return this._param.getDurationOfTicks(t, e);
        }
        getTicksAtTime(t) {
          return this._param.getTicksAtTime(t);
        }
        get multiplier() {
          return this._param.multiplier;
        }
        set multiplier(t) {
          this._param.multiplier = t;
        }
        dispose() {
          return super.dispose(), this._param.dispose(), this;
        }
      }
      class Tc extends uc {
        constructor() {
          super(ga(Tc.getDefaults(), arguments, ["frequency"])),
            (this.name = "TickSource"),
            (this._state = new lc()),
            (this._tickOffset = new Aa());
          const t = ga(Tc.getDefaults(), arguments, ["frequency"]);
          (this.frequency = new xc({
            context: this.context,
            units: t.units,
            value: t.frequency,
          })),
            Fa(this, "frequency"),
            this._state.setStateAtTime("stopped", 0),
            this.setTicksAtTime(0, 0);
        }
        static getDefaults() {
          return Object.assign(
            { frequency: 1, units: "hertz" },
            uc.getDefaults()
          );
        }
        get state() {
          return this.getStateAtTime(this.now());
        }
        start(t, e) {
          const n = this.toSeconds(t);
          return (
            "started" !== this._state.getValueAtTime(n) &&
              (this._state.setStateAtTime("started", n),
              $o(e) && this.setTicksAtTime(e, n)),
            this
          );
        }
        stop(t) {
          const e = this.toSeconds(t);
          if ("stopped" === this._state.getValueAtTime(e)) {
            const t = this._state.get(e);
            t &&
              t.time > 0 &&
              (this._tickOffset.cancel(t.time), this._state.cancel(t.time));
          }
          return (
            this._state.cancel(e),
            this._state.setStateAtTime("stopped", e),
            this.setTicksAtTime(0, e),
            this
          );
        }
        pause(t) {
          const e = this.toSeconds(t);
          return (
            "started" === this._state.getValueAtTime(e) &&
              this._state.setStateAtTime("paused", e),
            this
          );
        }
        cancel(t) {
          return (
            (t = this.toSeconds(t)),
            this._state.cancel(t),
            this._tickOffset.cancel(t),
            this
          );
        }
        getTicksAtTime(t) {
          const e = this.toSeconds(t),
            n = this._state.getLastState("stopped", e),
            s = { state: "paused", time: e };
          this._state.add(s);
          let i = n,
            r = 0;
          return (
            this._state.forEachBetween(n.time, e + this.sampleTime, (t) => {
              let e = i.time;
              const n = this._tickOffset.get(t.time);
              n && n.time >= i.time && ((r = n.ticks), (e = n.time)),
                "started" === i.state &&
                  "started" !== t.state &&
                  (r +=
                    this.frequency.getTicksAtTime(t.time) -
                    this.frequency.getTicksAtTime(e)),
                (i = t);
            }),
            this._state.remove(s),
            r
          );
        }
        get ticks() {
          return this.getTicksAtTime(this.now());
        }
        set ticks(t) {
          this.setTicksAtTime(t, this.now());
        }
        get seconds() {
          return this.getSecondsAtTime(this.now());
        }
        set seconds(t) {
          const e = this.now(),
            n = this.frequency.timeToTicks(t, e);
          this.setTicksAtTime(n, e);
        }
        getSecondsAtTime(t) {
          t = this.toSeconds(t);
          const e = this._state.getLastState("stopped", t),
            n = { state: "paused", time: t };
          this._state.add(n);
          let s = e,
            i = 0;
          return (
            this._state.forEachBetween(e.time, t + this.sampleTime, (t) => {
              let e = s.time;
              const n = this._tickOffset.get(t.time);
              n && n.time >= s.time && ((i = n.seconds), (e = n.time)),
                "started" === s.state &&
                  "started" !== t.state &&
                  (i += t.time - e),
                (s = t);
            }),
            this._state.remove(n),
            i
          );
        }
        setTicksAtTime(t, e) {
          return (
            (e = this.toSeconds(e)),
            this._tickOffset.cancel(e),
            this._tickOffset.add({
              seconds: this.frequency.getDurationOfTicks(t, e),
              ticks: t,
              time: e,
            }),
            this
          );
        }
        getStateAtTime(t) {
          return (t = this.toSeconds(t)), this._state.getValueAtTime(t);
        }
        getTimeOfTick(t, e = this.now()) {
          const n = this._tickOffset.get(e),
            s = this._state.get(e),
            i = Math.max(n.time, s.time),
            r = this.frequency.getTicksAtTime(i) + t - n.ticks;
          return this.frequency.getTimeOfTick(r);
        }
        forEachTickBetween(t, e, n) {
          let s = this._state.get(t);
          this._state.forEachBetween(t, e, (e) => {
            s &&
              "started" === s.state &&
              "started" !== e.state &&
              this.forEachTickBetween(
                Math.max(s.time, t),
                e.time - this.sampleTime,
                n
              ),
              (s = e);
          });
          let i = null;
          if (s && "started" === s.state) {
            const o = Math.max(s.time, t),
              a = this.frequency.getTicksAtTime(o),
              c = this.frequency.getTicksAtTime(s.time),
              u = a - c;
            let l = Math.ceil(u) - u;
            l = Ca(l, 1) ? 0 : l;
            let h = this.frequency.getTimeOfTick(a + l);
            while (h < e) {
              try {
                n(h, Math.round(this.getTicksAtTime(h)));
              } catch (r) {
                i = r;
                break;
              }
              h += this.frequency.getDurationOfTicks(1, h);
            }
          }
          if (i) throw i;
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            this._state.dispose(),
            this._tickOffset.dispose(),
            this.frequency.dispose(),
            this
          );
        }
      }
      class Oc extends uc {
        constructor() {
          super(ga(Oc.getDefaults(), arguments, ["callback", "frequency"])),
            (this.name = "Clock"),
            (this.callback = qa),
            (this._lastUpdate = 0),
            (this._state = new lc("stopped")),
            (this._boundLoop = this._loop.bind(this));
          const t = ga(Oc.getDefaults(), arguments, ["callback", "frequency"]);
          (this.callback = t.callback),
            (this._tickSource = new Tc({
              context: this.context,
              frequency: t.frequency,
              units: t.units,
            })),
            (this._lastUpdate = 0),
            (this.frequency = this._tickSource.frequency),
            Fa(this, "frequency"),
            this._state.setStateAtTime("stopped", 0),
            this.context.on("tick", this._boundLoop);
        }
        static getDefaults() {
          return Object.assign(uc.getDefaults(), {
            callback: qa,
            frequency: 1,
            units: "hertz",
          });
        }
        get state() {
          return this._state.getValueAtTime(this.now());
        }
        start(t, e) {
          Bo(this.context);
          const n = this.toSeconds(t);
          return (
            this.log("start", n),
            "started" !== this._state.getValueAtTime(n) &&
              (this._state.setStateAtTime("started", n),
              this._tickSource.start(n, e),
              n < this._lastUpdate && this.emit("start", n, e)),
            this
          );
        }
        stop(t) {
          const e = this.toSeconds(t);
          return (
            this.log("stop", e),
            this._state.cancel(e),
            this._state.setStateAtTime("stopped", e),
            this._tickSource.stop(e),
            e < this._lastUpdate && this.emit("stop", e),
            this
          );
        }
        pause(t) {
          const e = this.toSeconds(t);
          return (
            "started" === this._state.getValueAtTime(e) &&
              (this._state.setStateAtTime("paused", e),
              this._tickSource.pause(e),
              e < this._lastUpdate && this.emit("pause", e)),
            this
          );
        }
        get ticks() {
          return Math.ceil(this.getTicksAtTime(this.now()));
        }
        set ticks(t) {
          this._tickSource.ticks = t;
        }
        get seconds() {
          return this._tickSource.seconds;
        }
        set seconds(t) {
          this._tickSource.seconds = t;
        }
        getSecondsAtTime(t) {
          return this._tickSource.getSecondsAtTime(t);
        }
        setTicksAtTime(t, e) {
          return this._tickSource.setTicksAtTime(t, e), this;
        }
        getTimeOfTick(t, e = this.now()) {
          return this._tickSource.getTimeOfTick(t, e);
        }
        getTicksAtTime(t) {
          return this._tickSource.getTicksAtTime(t);
        }
        nextTickTime(t, e) {
          const n = this.toSeconds(e),
            s = this.getTicksAtTime(n);
          return this._tickSource.getTimeOfTick(s + t, n);
        }
        _loop() {
          const t = this._lastUpdate,
            e = this.now();
          (this._lastUpdate = e),
            this.log("loop", t, e),
            t !== e &&
              (this._state.forEachBetween(t, e, (t) => {
                switch (t.state) {
                  case "started":
                    const e = this._tickSource.getTicksAtTime(t.time);
                    this.emit("start", t.time, e);
                    break;
                  case "stopped":
                    0 !== t.time && this.emit("stop", t.time);
                    break;
                  case "paused":
                    this.emit("pause", t.time);
                    break;
                }
              }),
              this._tickSource.forEachTickBetween(t, e, (t, e) => {
                this.callback(t, e);
              }));
        }
        getStateAtTime(t) {
          const e = this.toSeconds(t);
          return this._state.getValueAtTime(e);
        }
        dispose() {
          return (
            super.dispose(),
            this.context.off("tick", this._boundLoop),
            this._tickSource.dispose(),
            this._state.dispose(),
            this
          );
        }
      }
      Ra.mixin(Oc);
      class Cc extends ba {
        constructor() {
          super(),
            (this.name = "ToneAudioBuffers"),
            (this._buffers = new Map()),
            (this._loadingCount = 0);
          const t = ga(
            Cc.getDefaults(),
            arguments,
            ["urls", "onload", "baseUrl"],
            "urls"
          );
          (this.baseUrl = t.baseUrl),
            Object.keys(t.urls).forEach((e) => {
              this._loadingCount++;
              const n = t.urls[e];
              this.add(
                e,
                n,
                this._bufferLoaded.bind(this, t.onload),
                t.onerror
              );
            });
        }
        static getDefaults() {
          return { baseUrl: "", onerror: qa, onload: qa, urls: {} };
        }
        has(t) {
          return this._buffers.has(t.toString());
        }
        get(t) {
          return (
            Lo(this.has(t), "ToneAudioBuffers has no buffer named: " + t),
            this._buffers.get(t.toString())
          );
        }
        _bufferLoaded(t) {
          this._loadingCount--, 0 === this._loadingCount && t && t();
        }
        get loaded() {
          return Array.from(this._buffers).every(([t, e]) => e.loaded);
        }
        add(t, e, n = qa, s = qa) {
          return (
            Jo(e)
              ? this._buffers.set(t.toString(), new Ba(this.baseUrl + e, n, s))
              : this._buffers.set(t.toString(), new Ba(e, n, s)),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            this._buffers.forEach((t) => t.dispose()),
            this._buffers.clear(),
            this
          );
        }
      }
      class Sc extends cc {
        constructor() {
          super(...arguments), (this.name = "Ticks"), (this.defaultUnits = "i");
        }
        _now() {
          return this.context.transport.ticks;
        }
        _beatsToUnits(t) {
          return this._getPPQ() * t;
        }
        _secondsToUnits(t) {
          return Math.floor((t / (60 / this._getBpm())) * this._getPPQ());
        }
        _ticksToUnits(t) {
          return t;
        }
        toTicks() {
          return this.valueOf();
        }
        toSeconds() {
          return (this.valueOf() / this._getPPQ()) * (60 / this._getBpm());
        }
      }
      class Ac extends uc {
        constructor() {
          super(...arguments),
            (this.name = "Draw"),
            (this.expiration = 0.25),
            (this.anticipation = 0.008),
            (this._events = new Aa()),
            (this._boundDrawLoop = this._drawLoop.bind(this)),
            (this._animationFrame = -1);
        }
        schedule(t, e) {
          return (
            this._events.add({ callback: t, time: this.toSeconds(e) }),
            1 === this._events.length &&
              (this._animationFrame = requestAnimationFrame(
                this._boundDrawLoop
              )),
            this
          );
        }
        cancel(t) {
          return this._events.cancel(this.toSeconds(t)), this;
        }
        _drawLoop() {
          const t = this.context.currentTime;
          while (
            this._events.length &&
            this._events.peek().time - this.anticipation <= t
          ) {
            const e = this._events.shift();
            e && t - e.time <= this.expiration && e.callback();
          }
          this._events.length > 0 &&
            (this._animationFrame = requestAnimationFrame(this._boundDrawLoop));
        }
        dispose() {
          return (
            super.dispose(),
            this._events.dispose(),
            cancelAnimationFrame(this._animationFrame),
            this
          );
        }
      }
      Ea((t) => {
        t.draw = new Ac({ context: t });
      }),
        Ia((t) => {
          t.draw.dispose();
        });
      class kc extends ba {
        constructor() {
          super(...arguments),
            (this.name = "IntervalTimeline"),
            (this._root = null),
            (this._length = 0);
        }
        add(t) {
          Lo($o(t.time), "Events must have a time property"),
            Lo($o(t.duration), "Events must have a duration parameter"),
            (t.time = t.time.valueOf());
          let e = new Ec(t.time, t.time + t.duration, t);
          null === this._root ? (this._root = e) : this._root.insert(e),
            this._length++;
          while (null !== e)
            e.updateHeight(), e.updateMax(), this._rebalance(e), (e = e.parent);
          return this;
        }
        remove(t) {
          if (null !== this._root) {
            const e = [];
            this._root.search(t.time, e);
            for (const n of e)
              if (n.event === t) {
                this._removeNode(n), this._length--;
                break;
              }
          }
          return this;
        }
        get length() {
          return this._length;
        }
        cancel(t) {
          return this.forEachFrom(t, (t) => this.remove(t)), this;
        }
        _setRoot(t) {
          (this._root = t), null !== this._root && (this._root.parent = null);
        }
        _replaceNodeInParent(t, e) {
          null !== t.parent
            ? (t.isLeftChild() ? (t.parent.left = e) : (t.parent.right = e),
              this._rebalance(t.parent))
            : this._setRoot(e);
        }
        _removeNode(t) {
          if (null === t.left && null === t.right)
            this._replaceNodeInParent(t, null);
          else if (null === t.right) this._replaceNodeInParent(t, t.left);
          else if (null === t.left) this._replaceNodeInParent(t, t.right);
          else {
            const e = t.getBalance();
            let n,
              s = null;
            if (e > 0)
              if (null === t.left.right)
                (n = t.left), (n.right = t.right), (s = n);
              else {
                n = t.left.right;
                while (null !== n.right) n = n.right;
                n.parent &&
                  ((n.parent.right = n.left),
                  (s = n.parent),
                  (n.left = t.left),
                  (n.right = t.right));
              }
            else if (null === t.right.left)
              (n = t.right), (n.left = t.left), (s = n);
            else {
              n = t.right.left;
              while (null !== n.left) n = n.left;
              n.parent &&
                ((n.parent.left = n.right),
                (s = n.parent),
                (n.left = t.left),
                (n.right = t.right));
            }
            null !== t.parent
              ? t.isLeftChild()
                ? (t.parent.left = n)
                : (t.parent.right = n)
              : this._setRoot(n),
              s && this._rebalance(s);
          }
          t.dispose();
        }
        _rotateLeft(t) {
          const e = t.parent,
            n = t.isLeftChild(),
            s = t.right;
          s && ((t.right = s.left), (s.left = t)),
            null !== e ? (n ? (e.left = s) : (e.right = s)) : this._setRoot(s);
        }
        _rotateRight(t) {
          const e = t.parent,
            n = t.isLeftChild(),
            s = t.left;
          s && ((t.left = s.right), (s.right = t)),
            null !== e ? (n ? (e.left = s) : (e.right = s)) : this._setRoot(s);
        }
        _rebalance(t) {
          const e = t.getBalance();
          e > 1 && t.left
            ? t.left.getBalance() < 0
              ? this._rotateLeft(t.left)
              : this._rotateRight(t)
            : e < -1 &&
              t.right &&
              (t.right.getBalance() > 0
                ? this._rotateRight(t.right)
                : this._rotateLeft(t));
        }
        get(t) {
          if (null !== this._root) {
            const e = [];
            if ((this._root.search(t, e), e.length > 0)) {
              let t = e[0];
              for (let n = 1; n < e.length; n++) e[n].low > t.low && (t = e[n]);
              return t.event;
            }
          }
          return null;
        }
        forEach(t) {
          if (null !== this._root) {
            const e = [];
            this._root.traverse((t) => e.push(t)),
              e.forEach((e) => {
                e.event && t(e.event);
              });
          }
          return this;
        }
        forEachAtTime(t, e) {
          if (null !== this._root) {
            const n = [];
            this._root.search(t, n),
              n.forEach((t) => {
                t.event && e(t.event);
              });
          }
          return this;
        }
        forEachFrom(t, e) {
          if (null !== this._root) {
            const n = [];
            this._root.searchAfter(t, n),
              n.forEach((t) => {
                t.event && e(t.event);
              });
          }
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            null !== this._root && this._root.traverse((t) => t.dispose()),
            (this._root = null),
            this
          );
        }
      }
      class Ec {
        constructor(t, e, n) {
          (this._left = null),
            (this._right = null),
            (this.parent = null),
            (this.height = 0),
            (this.event = n),
            (this.low = t),
            (this.high = e),
            (this.max = this.high);
        }
        insert(t) {
          t.low <= this.low
            ? null === this.left
              ? (this.left = t)
              : this.left.insert(t)
            : null === this.right
            ? (this.right = t)
            : this.right.insert(t);
        }
        search(t, e) {
          t > this.max ||
            (null !== this.left && this.left.search(t, e),
            this.low <= t && this.high > t && e.push(this),
            this.low > t || (null !== this.right && this.right.search(t, e)));
        }
        searchAfter(t, e) {
          this.low >= t &&
            (e.push(this), null !== this.left && this.left.searchAfter(t, e)),
            null !== this.right && this.right.searchAfter(t, e);
        }
        traverse(t) {
          t(this),
            null !== this.left && this.left.traverse(t),
            null !== this.right && this.right.traverse(t);
        }
        updateHeight() {
          null !== this.left && null !== this.right
            ? (this.height = Math.max(this.left.height, this.right.height) + 1)
            : null !== this.right
            ? (this.height = this.right.height + 1)
            : null !== this.left
            ? (this.height = this.left.height + 1)
            : (this.height = 0);
        }
        updateMax() {
          (this.max = this.high),
            null !== this.left &&
              (this.max = Math.max(this.max, this.left.max)),
            null !== this.right &&
              (this.max = Math.max(this.max, this.right.max));
        }
        getBalance() {
          let t = 0;
          return (
            null !== this.left && null !== this.right
              ? (t = this.left.height - this.right.height)
              : null !== this.left
              ? (t = this.left.height + 1)
              : null !== this.right && (t = -(this.right.height + 1)),
            t
          );
        }
        isLeftChild() {
          return null !== this.parent && this.parent.left === this;
        }
        get left() {
          return this._left;
        }
        set left(t) {
          (this._left = t),
            null !== t && (t.parent = this),
            this.updateHeight(),
            this.updateMax();
        }
        get right() {
          return this._right;
        }
        set right(t) {
          (this._right = t),
            null !== t && (t.parent = this),
            this.updateHeight(),
            this.updateMax();
        }
        dispose() {
          (this.parent = null),
            (this._left = null),
            (this._right = null),
            (this.event = null);
        }
      }
      class Mc extends pc {
        constructor() {
          super(ga(Mc.getDefaults(), arguments, ["volume"])),
            (this.name = "Volume");
          const t = ga(Mc.getDefaults(), arguments, ["volume"]);
          (this.input = this.output =
            new gc({
              context: this.context,
              gain: t.volume,
              units: "decibels",
            })),
            (this.volume = this.output.gain),
            Fa(this, "volume"),
            (this._unmutedVolume = t.volume),
            (this.mute = t.mute);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), { mute: !1, volume: 0 });
        }
        get mute() {
          return this.volume.value === -1 / 0;
        }
        set mute(t) {
          !this.mute && t
            ? ((this._unmutedVolume = this.volume.value),
              (this.volume.value = -1 / 0))
            : this.mute && !t && (this.volume.value = this._unmutedVolume);
        }
        dispose() {
          return (
            super.dispose(), this.input.dispose(), this.volume.dispose(), this
          );
        }
      }
      class jc extends pc {
        constructor() {
          super(ga(jc.getDefaults(), arguments)),
            (this.name = "Destination"),
            (this.input = new Mc({ context: this.context })),
            (this.output = new gc({ context: this.context })),
            (this.volume = this.input.volume);
          const t = ga(jc.getDefaults(), arguments);
          dc(this.input, this.output, this.context.rawContext.destination),
            (this.mute = t.mute),
            (this._internalChannels = [
              this.input,
              this.context.rawContext.destination,
              this.output,
            ]);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), { mute: !1, volume: 0 });
        }
        get mute() {
          return this.input.mute;
        }
        set mute(t) {
          this.input.mute = t;
        }
        chain(...t) {
          return (
            this.input.disconnect(),
            t.unshift(this.input),
            t.push(this.output),
            dc(...t),
            this
          );
        }
        get maxChannelCount() {
          return this.context.rawContext.destination.maxChannelCount;
        }
        dispose() {
          return super.dispose(), this.volume.dispose(), this;
        }
      }
      Ea((t) => {
        t.destination = new jc({ context: t });
      }),
        Ia((t) => {
          t.destination.dispose();
        });
      class Ic extends ba {
        constructor(t) {
          super(),
            (this.name = "TimelineValue"),
            (this._timeline = new Aa({ memory: 10 })),
            (this._initialValue = t);
        }
        set(t, e) {
          return this._timeline.add({ value: t, time: e }), this;
        }
        get(t) {
          const e = this._timeline.get(t);
          return e ? e.value : this._initialValue;
        }
      }
      class Dc {
        constructor(t, e) {
          this.id = Dc._eventId++;
          const n = Object.assign(Dc.getDefaults(), e);
          (this.transport = t),
            (this.callback = n.callback),
            (this._once = n.once),
            (this.time = n.time);
        }
        static getDefaults() {
          return { callback: qa, once: !1, time: 0 };
        }
        invoke(t) {
          this.callback &&
            (this.callback(t), this._once && this.transport.clear(this.id));
        }
        dispose() {
          return (this.callback = void 0), this;
        }
      }
      Dc._eventId = 0;
      class Rc extends Dc {
        constructor(t, e) {
          super(t, e),
            (this._currentId = -1),
            (this._nextId = -1),
            (this._nextTick = this.time),
            (this._boundRestart = this._restart.bind(this));
          const n = Object.assign(Rc.getDefaults(), e);
          (this.duration = new Sc(t.context, n.duration).valueOf()),
            (this._interval = new Sc(t.context, n.interval).valueOf()),
            (this._nextTick = n.time),
            this.transport.on("start", this._boundRestart),
            this.transport.on("loopStart", this._boundRestart),
            (this.context = this.transport.context),
            this._restart();
        }
        static getDefaults() {
          return Object.assign({}, Dc.getDefaults(), {
            duration: 1 / 0,
            interval: 1,
            once: !1,
          });
        }
        invoke(t) {
          this._createEvents(t), super.invoke(t);
        }
        _createEvents(t) {
          const e = this.transport.getTicksAtTime(t);
          e >= this.time &&
            e >= this._nextTick &&
            this._nextTick + this._interval < this.time + this.duration &&
            ((this._nextTick += this._interval),
            (this._currentId = this._nextId),
            (this._nextId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new Sc(this.context, this._nextTick).toSeconds()
            )));
        }
        _restart(t) {
          this.transport.clear(this._currentId),
            this.transport.clear(this._nextId),
            (this._nextTick = this.time);
          const e = this.transport.getTicksAtTime(t);
          e > this.time &&
            (this._nextTick =
              this.time +
              Math.ceil((e - this.time) / this._interval) * this._interval),
            (this._currentId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new Sc(this.context, this._nextTick).toSeconds()
            )),
            (this._nextTick += this._interval),
            (this._nextId = this.transport.scheduleOnce(
              this.invoke.bind(this),
              new Sc(this.context, this._nextTick).toSeconds()
            ));
        }
        dispose() {
          return (
            super.dispose(),
            this.transport.clear(this._currentId),
            this.transport.clear(this._nextId),
            this.transport.off("start", this._boundRestart),
            this.transport.off("loopStart", this._boundRestart),
            this
          );
        }
      }
      class Nc extends uc {
        constructor() {
          super(ga(Nc.getDefaults(), arguments)),
            (this.name = "Transport"),
            (this._loop = new Ic(!1)),
            (this._loopStart = 0),
            (this._loopEnd = 0),
            (this._scheduledEvents = {}),
            (this._timeline = new Aa()),
            (this._repeatedEvents = new kc()),
            (this._syncedSignals = []),
            (this._swingAmount = 0);
          const t = ga(Nc.getDefaults(), arguments);
          (this._ppq = t.ppq),
            (this._clock = new Oc({
              callback: this._processTick.bind(this),
              context: this.context,
              frequency: 0,
              units: "bpm",
            })),
            this._bindClockEvents(),
            (this.bpm = this._clock.frequency),
            (this._clock.frequency.multiplier = t.ppq),
            this.bpm.setValueAtTime(t.bpm, 0),
            Fa(this, "bpm"),
            (this._timeSignature = t.timeSignature),
            (this._swingTicks = t.ppq / 2);
        }
        static getDefaults() {
          return Object.assign(uc.getDefaults(), {
            bpm: 120,
            loopEnd: "4m",
            loopStart: 0,
            ppq: 192,
            swing: 0,
            swingSubdivision: "8n",
            timeSignature: 4,
          });
        }
        _processTick(t, e) {
          if (
            (this._loop.get(t) &&
              e >= this._loopEnd &&
              (this.emit("loopEnd", t),
              this._clock.setTicksAtTime(this._loopStart, t),
              (e = this._loopStart),
              this.emit("loopStart", t, this._clock.getSecondsAtTime(t)),
              this.emit("loop", t)),
            this._swingAmount > 0 &&
              e % this._ppq !== 0 &&
              e % (2 * this._swingTicks) !== 0)
          ) {
            const n = (e % (2 * this._swingTicks)) / (2 * this._swingTicks),
              s = Math.sin(n * Math.PI) * this._swingAmount;
            t +=
              new Sc(this.context, (2 * this._swingTicks) / 3).toSeconds() * s;
          }
          this._timeline.forEachAtTime(e, (e) => e.invoke(t));
        }
        schedule(t, e) {
          const n = new Dc(this, {
            callback: t,
            time: new cc(this.context, e).toTicks(),
          });
          return this._addEvent(n, this._timeline);
        }
        scheduleRepeat(t, e, n, s = 1 / 0) {
          const i = new Rc(this, {
            callback: t,
            duration: new ic(this.context, s).toTicks(),
            interval: new ic(this.context, e).toTicks(),
            time: new cc(this.context, n).toTicks(),
          });
          return this._addEvent(i, this._repeatedEvents);
        }
        scheduleOnce(t, e) {
          const n = new Dc(this, {
            callback: t,
            once: !0,
            time: new cc(this.context, e).toTicks(),
          });
          return this._addEvent(n, this._timeline);
        }
        clear(t) {
          if (this._scheduledEvents.hasOwnProperty(t)) {
            const e = this._scheduledEvents[t.toString()];
            e.timeline.remove(e.event),
              e.event.dispose(),
              delete this._scheduledEvents[t.toString()];
          }
          return this;
        }
        _addEvent(t, e) {
          return (
            (this._scheduledEvents[t.id.toString()] = {
              event: t,
              timeline: e,
            }),
            e.add(t),
            t.id
          );
        }
        cancel(t = 0) {
          const e = this.toTicks(t);
          return (
            this._timeline.forEachFrom(e, (t) => this.clear(t.id)),
            this._repeatedEvents.forEachFrom(e, (t) => this.clear(t.id)),
            this
          );
        }
        _bindClockEvents() {
          this._clock.on("start", (t, e) => {
            (e = new Sc(this.context, e).toSeconds()), this.emit("start", t, e);
          }),
            this._clock.on("stop", (t) => {
              this.emit("stop", t);
            }),
            this._clock.on("pause", (t) => {
              this.emit("pause", t);
            });
        }
        get state() {
          return this._clock.getStateAtTime(this.now());
        }
        start(t, e) {
          let n;
          return $o(e) && (n = this.toTicks(e)), this._clock.start(t, n), this;
        }
        stop(t) {
          return this._clock.stop(t), this;
        }
        pause(t) {
          return this._clock.pause(t), this;
        }
        toggle(t) {
          return (
            (t = this.toSeconds(t)),
            "started" !== this._clock.getStateAtTime(t)
              ? this.start(t)
              : this.stop(t),
            this
          );
        }
        get timeSignature() {
          return this._timeSignature;
        }
        set timeSignature(t) {
          Qo(t) && (t = (t[0] / t[1]) * 4), (this._timeSignature = t);
        }
        get loopStart() {
          return new ic(this.context, this._loopStart, "i").toSeconds();
        }
        set loopStart(t) {
          this._loopStart = this.toTicks(t);
        }
        get loopEnd() {
          return new ic(this.context, this._loopEnd, "i").toSeconds();
        }
        set loopEnd(t) {
          this._loopEnd = this.toTicks(t);
        }
        get loop() {
          return this._loop.get(this.now());
        }
        set loop(t) {
          this._loop.set(t, this.now());
        }
        setLoopPoints(t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }
        get swing() {
          return this._swingAmount;
        }
        set swing(t) {
          this._swingAmount = t;
        }
        get swingSubdivision() {
          return new Sc(this.context, this._swingTicks).toNotation();
        }
        set swingSubdivision(t) {
          this._swingTicks = this.toTicks(t);
        }
        get position() {
          const t = this.now(),
            e = this._clock.getTicksAtTime(t);
          return new Sc(this.context, e).toBarsBeatsSixteenths();
        }
        set position(t) {
          const e = this.toTicks(t);
          this.ticks = e;
        }
        get seconds() {
          return this._clock.seconds;
        }
        set seconds(t) {
          const e = this.now(),
            n = this._clock.frequency.timeToTicks(t, e);
          this.ticks = n;
        }
        get progress() {
          if (this.loop) {
            const t = this.now(),
              e = this._clock.getTicksAtTime(t);
            return (e - this._loopStart) / (this._loopEnd - this._loopStart);
          }
          return 0;
        }
        get ticks() {
          return this._clock.ticks;
        }
        set ticks(t) {
          if (this._clock.ticks !== t) {
            const e = this.now();
            if ("started" === this.state) {
              const n = this._clock.getTicksAtTime(e),
                s = this._clock.frequency.getDurationOfTicks(
                  Math.ceil(n) - n,
                  e
                ),
                i = e + s;
              this.emit("stop", i),
                this._clock.setTicksAtTime(t, i),
                this.emit("start", i, this._clock.getSecondsAtTime(i));
            } else this._clock.setTicksAtTime(t, e);
          }
        }
        getTicksAtTime(t) {
          return Math.round(this._clock.getTicksAtTime(t));
        }
        getSecondsAtTime(t) {
          return this._clock.getSecondsAtTime(t);
        }
        get PPQ() {
          return this._clock.frequency.multiplier;
        }
        set PPQ(t) {
          this._clock.frequency.multiplier = t;
        }
        nextSubdivision(t) {
          if (((t = this.toTicks(t)), "started" !== this.state)) return 0;
          {
            const e = this.now(),
              n = this.getTicksAtTime(e),
              s = t - (n % t);
            return this._clock.nextTickTime(s, e);
          }
        }
        syncSignal(t, e) {
          if (!e) {
            const n = this.now();
            if (0 !== t.getValueAtTime(n)) {
              const s = this.bpm.getValueAtTime(n),
                i = 1 / (60 / s / this.PPQ);
              e = t.getValueAtTime(n) / i;
            } else e = 0;
          }
          const n = new gc(e);
          return (
            this.bpm.connect(n),
            n.connect(t._param),
            this._syncedSignals.push({ initial: t.value, ratio: n, signal: t }),
            (t.value = 0),
            this
          );
        }
        unsyncSignal(t) {
          for (let e = this._syncedSignals.length - 1; e >= 0; e--) {
            const n = this._syncedSignals[e];
            n.signal === t &&
              (n.ratio.dispose(),
              (n.signal.value = n.initial),
              this._syncedSignals.splice(e, 1));
          }
          return this;
        }
        dispose() {
          return (
            super.dispose(),
            this._clock.dispose(),
            La(this, "bpm"),
            this._timeline.dispose(),
            this._repeatedEvents.dispose(),
            this
          );
        }
      }
      Ra.mixin(Nc),
        Ea((t) => {
          t.transport = new Nc({ context: t });
        }),
        Ia((t) => {
          t.transport.dispose();
        });
      class Pc extends pc {
        constructor(t) {
          super(t),
            (this.input = void 0),
            (this._state = new lc("stopped")),
            (this._synced = !1),
            (this._scheduled = []),
            (this._syncedStart = qa),
            (this._syncedStop = qa),
            (this._state.memory = 100),
            (this._state.increasing = !0),
            (this._volume = this.output =
              new Mc({
                context: this.context,
                mute: t.mute,
                volume: t.volume,
              })),
            (this.volume = this._volume.volume),
            Fa(this, "volume"),
            (this.onstop = t.onstop);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            mute: !1,
            onstop: qa,
            volume: 0,
          });
        }
        get state() {
          return this._synced
            ? "started" === this.context.transport.state
              ? this._state.getValueAtTime(this.context.transport.seconds)
              : "stopped"
            : this._state.getValueAtTime(this.now());
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        _clampToCurrentTime(t) {
          return this._synced ? t : Math.max(t, this.context.currentTime);
        }
        start(t, e, n) {
          let s =
            Go(t) && this._synced
              ? this.context.transport.seconds
              : this.toSeconds(t);
          if (
            ((s = this._clampToCurrentTime(s)),
            this._synced || "started" !== this._state.getValueAtTime(s))
          )
            if (
              (this.log("start", s),
              this._state.setStateAtTime("started", s),
              this._synced)
            ) {
              const t = this._state.get(s);
              t &&
                ((t.offset = this.toSeconds(va(e, 0))),
                (t.duration = n ? this.toSeconds(n) : void 0));
              const i = this.context.transport.schedule((t) => {
                this._start(t, e, n);
              }, s);
              this._scheduled.push(i),
                "started" === this.context.transport.state &&
                  this.context.transport.getSecondsAtTime(this.immediate()) >
                    s &&
                  this._syncedStart(this.now(), this.context.transport.seconds);
            } else Bo(this.context), this._start(s, e, n);
          else
            Lo(
              xa(s, this._state.get(s).time),
              "Start time must be strictly greater than previous start time"
            ),
              this._state.cancel(s),
              this._state.setStateAtTime("started", s),
              this.log("restart", s),
              this.restart(s, e, n);
          return this;
        }
        stop(t) {
          let e =
            Go(t) && this._synced
              ? this.context.transport.seconds
              : this.toSeconds(t);
          if (
            ((e = this._clampToCurrentTime(e)),
            "started" === this._state.getValueAtTime(e) ||
              $o(this._state.getNextState("started", e)))
          ) {
            if ((this.log("stop", e), this._synced)) {
              const t = this.context.transport.schedule(
                this._stop.bind(this),
                e
              );
              this._scheduled.push(t);
            } else this._stop(e);
            this._state.cancel(e), this._state.setStateAtTime("stopped", e);
          }
          return this;
        }
        restart(t, e, n) {
          return (
            (t = this.toSeconds(t)),
            "started" === this._state.getValueAtTime(t) &&
              (this._state.cancel(t), this._restart(t, e, n)),
            this
          );
        }
        sync() {
          return (
            this._synced ||
              ((this._synced = !0),
              (this._syncedStart = (t, e) => {
                if (e > 0) {
                  const n = this._state.get(e);
                  if (n && "started" === n.state && n.time !== e) {
                    const s = e - this.toSeconds(n.time);
                    let i;
                    n.duration && (i = this.toSeconds(n.duration) - s),
                      this._start(t, this.toSeconds(n.offset) + s, i);
                  }
                }
              }),
              (this._syncedStop = (t) => {
                const e = this.context.transport.getSecondsAtTime(
                  Math.max(t - this.sampleTime, 0)
                );
                "started" === this._state.getValueAtTime(e) && this._stop(t);
              }),
              this.context.transport.on("start", this._syncedStart),
              this.context.transport.on("loopStart", this._syncedStart),
              this.context.transport.on("stop", this._syncedStop),
              this.context.transport.on("pause", this._syncedStop),
              this.context.transport.on("loopEnd", this._syncedStop)),
            this
          );
        }
        unsync() {
          return (
            this._synced &&
              (this.context.transport.off("stop", this._syncedStop),
              this.context.transport.off("pause", this._syncedStop),
              this.context.transport.off("loopEnd", this._syncedStop),
              this.context.transport.off("start", this._syncedStart),
              this.context.transport.off("loopStart", this._syncedStart)),
            (this._synced = !1),
            this._scheduled.forEach((t) => this.context.transport.clear(t)),
            (this._scheduled = []),
            this._state.cancel(0),
            this._stop(0),
            this
          );
        }
        dispose() {
          return (
            super.dispose(),
            (this.onstop = qa),
            this.unsync(),
            this._volume.dispose(),
            this._state.dispose(),
            this
          );
        }
      }
      class Vc extends _c {
        constructor() {
          super(ga(Vc.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "ToneBufferSource"),
            (this._source = this.context.createBufferSource()),
            (this._internalChannels = [this._source]),
            (this._sourceStarted = !1),
            (this._sourceStopped = !1);
          const t = ga(Vc.getDefaults(), arguments, ["url", "onload"]);
          fc(this._source, this._gainNode),
            (this._source.onended = () => this._stopSource()),
            (this.playbackRate = new hc({
              context: this.context,
              param: this._source.playbackRate,
              units: "positive",
              value: t.playbackRate,
            })),
            (this.loop = t.loop),
            (this.loopStart = t.loopStart),
            (this.loopEnd = t.loopEnd),
            (this._buffer = new Ba(t.url, t.onload, t.onerror)),
            this._internalChannels.push(this._source);
        }
        static getDefaults() {
          return Object.assign(_c.getDefaults(), {
            url: new Ba(),
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            onload: qa,
            onerror: qa,
            playbackRate: 1,
          });
        }
        get fadeIn() {
          return this._fadeIn;
        }
        set fadeIn(t) {
          this._fadeIn = t;
        }
        get fadeOut() {
          return this._fadeOut;
        }
        set fadeOut(t) {
          this._fadeOut = t;
        }
        get curve() {
          return this._curve;
        }
        set curve(t) {
          this._curve = t;
        }
        start(t, e, n, s = 1) {
          Lo(this.buffer.loaded, "buffer is either not set or not loaded");
          const i = this.toSeconds(t);
          this._startGain(i, s),
            (e = this.loop ? va(e, this.loopStart) : va(e, 0));
          let r = Math.max(this.toSeconds(e), 0);
          if (this.loop) {
            const t = this.toSeconds(this.loopEnd) || this.buffer.duration,
              e = this.toSeconds(this.loopStart),
              n = t - e;
            Ta(r, t) && (r = ((r - e) % n) + e),
              Ca(r, this.buffer.duration) && (r = 0);
          }
          if (
            ((this._source.buffer = this.buffer.get()),
            (this._source.loopEnd =
              this.toSeconds(this.loopEnd) || this.buffer.duration),
            Oa(r, this.buffer.duration) &&
              ((this._sourceStarted = !0), this._source.start(i, r)),
            $o(n))
          ) {
            let t = this.toSeconds(n);
            (t = Math.max(t, 0)), this.stop(i + t);
          }
          return this;
        }
        _stopSource(t) {
          !this._sourceStopped &&
            this._sourceStarted &&
            ((this._sourceStopped = !0),
            this._source.stop(this.toSeconds(t)),
            this._onended());
        }
        get loopStart() {
          return this._source.loopStart;
        }
        set loopStart(t) {
          this._source.loopStart = this.toSeconds(t);
        }
        get loopEnd() {
          return this._source.loopEnd;
        }
        set loopEnd(t) {
          this._source.loopEnd = this.toSeconds(t);
        }
        get buffer() {
          return this._buffer;
        }
        set buffer(t) {
          this._buffer.set(t);
        }
        get loop() {
          return this._source.loop;
        }
        set loop(t) {
          (this._source.loop = t), this._sourceStarted && this.cancelStop();
        }
        dispose() {
          return (
            super.dispose(),
            (this._source.onended = null),
            this._source.disconnect(),
            this._buffer.dispose(),
            this.playbackRate.dispose(),
            this
          );
        }
      }
      function Fc(t, e) {
        return oa(this, void 0, void 0, function* () {
          const n = e / t.context.sampleRate,
            s = new Wa(1, n, t.context.sampleRate),
            i = new t.constructor(
              Object.assign(t.get(), {
                frequency: 2 / n,
                detune: 0,
                context: s,
              })
            ).toDestination();
          i.start(0);
          const r = yield s.render();
          return r.getChannelData(0);
        });
      }
      class Lc extends _c {
        constructor() {
          super(ga(Lc.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "ToneOscillatorNode"),
            (this._oscillator = this.context.createOscillator()),
            (this._internalChannels = [this._oscillator]);
          const t = ga(Lc.getDefaults(), arguments, ["frequency", "type"]);
          fc(this._oscillator, this._gainNode),
            (this.type = t.type),
            (this.frequency = new hc({
              context: this.context,
              param: this._oscillator.frequency,
              units: "frequency",
              value: t.frequency,
            })),
            (this.detune = new hc({
              context: this.context,
              param: this._oscillator.detune,
              units: "cents",
              value: t.detune,
            })),
            Fa(this, ["frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(_c.getDefaults(), {
            detune: 0,
            frequency: 440,
            type: "sine",
          });
        }
        start(t) {
          const e = this.toSeconds(t);
          return (
            this.log("start", e),
            this._startGain(e),
            this._oscillator.start(e),
            this
          );
        }
        _stopSource(t) {
          this._oscillator.stop(t);
        }
        setPeriodicWave(t) {
          return this._oscillator.setPeriodicWave(t), this;
        }
        get type() {
          return this._oscillator.type;
        }
        set type(t) {
          this._oscillator.type = t;
        }
        dispose() {
          return (
            super.dispose(),
            "started" === this.state && this.stop(),
            this._oscillator.disconnect(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this
          );
        }
      }
      class qc extends Pc {
        constructor() {
          super(ga(qc.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "Oscillator"),
            (this._oscillator = null);
          const t = ga(qc.getDefaults(), arguments, ["frequency", "type"]);
          (this.frequency = new yc({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            Fa(this, "frequency"),
            (this.detune = new yc({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            Fa(this, "detune"),
            (this._partials = t.partials),
            (this._partialCount = t.partialCount),
            (this._type = t.type),
            t.partialCount &&
              "custom" !== t.type &&
              (this._type = this.baseType + t.partialCount.toString()),
            (this.phase = t.phase);
        }
        static getDefaults() {
          return Object.assign(Pc.getDefaults(), {
            detune: 0,
            frequency: 440,
            partialCount: 0,
            partials: [],
            phase: 0,
            type: "sine",
          });
        }
        _start(t) {
          const e = this.toSeconds(t),
            n = new Lc({
              context: this.context,
              onended: () => this.onstop(this),
            });
          (this._oscillator = n),
            this._wave
              ? this._oscillator.setPeriodicWave(this._wave)
              : (this._oscillator.type = this._type),
            this._oscillator.connect(this.output),
            this.frequency.connect(this._oscillator.frequency),
            this.detune.connect(this._oscillator.detune),
            this._oscillator.start(e);
        }
        _stop(t) {
          const e = this.toSeconds(t);
          this._oscillator && this._oscillator.stop(e);
        }
        _restart(t) {
          const e = this.toSeconds(t);
          return (
            this.log("restart", e),
            this._oscillator && this._oscillator.cancelStop(),
            this._state.cancel(e),
            this
          );
        }
        syncFrequency() {
          return this.context.transport.syncSignal(this.frequency), this;
        }
        unsyncFrequency() {
          return this.context.transport.unsyncSignal(this.frequency), this;
        }
        _getCachedPeriodicWave() {
          if ("custom" === this._type) {
            const t = qc._periodicWaveCache.find(
              (t) => t.phase === this._phase && ma(t.partials, this._partials)
            );
            return t;
          }
          {
            const t = qc._periodicWaveCache.find(
              (t) => t.type === this._type && t.phase === this._phase
            );
            return (
              (this._partialCount = t ? t.partialCount : this._partialCount), t
            );
          }
        }
        get type() {
          return this._type;
        }
        set type(t) {
          this._type = t;
          const e =
            -1 !== ["sine", "square", "sawtooth", "triangle"].indexOf(t);
          if (0 === this._phase && e)
            (this._wave = void 0),
              (this._partialCount = 0),
              null !== this._oscillator && (this._oscillator.type = t);
          else {
            const e = this._getCachedPeriodicWave();
            if ($o(e)) {
              const { partials: t, wave: n } = e;
              (this._wave = n),
                (this._partials = t),
                null !== this._oscillator &&
                  this._oscillator.setPeriodicWave(this._wave);
            } else {
              const [e, n] = this._getRealImaginary(t, this._phase),
                s = this.context.createPeriodicWave(e, n);
              (this._wave = s),
                null !== this._oscillator &&
                  this._oscillator.setPeriodicWave(this._wave),
                qc._periodicWaveCache.push({
                  imag: n,
                  partialCount: this._partialCount,
                  partials: this._partials,
                  phase: this._phase,
                  real: e,
                  type: this._type,
                  wave: this._wave,
                }),
                qc._periodicWaveCache.length > 100 &&
                  qc._periodicWaveCache.shift();
            }
          }
        }
        get baseType() {
          return this._type.replace(this.partialCount.toString(), "");
        }
        set baseType(t) {
          this.partialCount && "custom" !== this._type && "custom" !== t
            ? (this.type = t + this.partialCount)
            : (this.type = t);
        }
        get partialCount() {
          return this._partialCount;
        }
        set partialCount(t) {
          qo(t, 0);
          let e = this._type;
          const n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
          if ((n && (e = n[1]), "custom" !== this._type))
            this.type = 0 === t ? e : e + t.toString();
          else {
            const e = new Float32Array(t);
            this._partials.forEach((t, n) => (e[n] = t)),
              (this._partials = Array.from(e)),
              (this.type = this._type);
          }
        }
        _getRealImaginary(t, e) {
          const n = 4096;
          let s = n / 2;
          const i = new Float32Array(s),
            r = new Float32Array(s);
          let o = 1;
          if ("custom" === t) {
            if (
              ((o = this._partials.length + 1),
              (this._partialCount = this._partials.length),
              (s = o),
              0 === this._partials.length)
            )
              return [i, r];
          } else {
            const e = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
            e
              ? ((o = parseInt(e[2], 10) + 1),
                (this._partialCount = parseInt(e[2], 10)),
                (t = e[1]),
                (o = Math.max(o, 2)),
                (s = o))
              : (this._partialCount = 0),
              (this._partials = []);
          }
          for (let a = 1; a < s; ++a) {
            const n = 2 / (a * Math.PI);
            let s;
            switch (t) {
              case "sine":
                (s = a <= o ? 1 : 0), (this._partials[a - 1] = s);
                break;
              case "square":
                (s = 1 & a ? 2 * n : 0), (this._partials[a - 1] = s);
                break;
              case "sawtooth":
                (s = n * (1 & a ? 1 : -1)), (this._partials[a - 1] = s);
                break;
              case "triangle":
                (s = 1 & a ? n * n * 2 * (((a - 1) >> 1) & 1 ? -1 : 1) : 0),
                  (this._partials[a - 1] = s);
                break;
              case "custom":
                s = this._partials[a - 1];
                break;
              default:
                throw new TypeError("Oscillator: invalid type: " + t);
            }
            0 !== s
              ? ((i[a] = -s * Math.sin(e * a)), (r[a] = s * Math.cos(e * a)))
              : ((i[a] = 0), (r[a] = 0));
          }
          return [i, r];
        }
        _inverseFFT(t, e, n) {
          let s = 0;
          const i = t.length;
          for (let r = 0; r < i; r++)
            s += t[r] * Math.cos(r * n) + e[r] * Math.sin(r * n);
          return s;
        }
        getInitialValue() {
          const [t, e] = this._getRealImaginary(this._type, 0);
          let n = 0;
          const s = 2 * Math.PI,
            i = 32;
          for (let r = 0; r < i; r++)
            n = Math.max(this._inverseFFT(t, e, (r / i) * s), n);
          return Sa(-this._inverseFFT(t, e, this._phase) / n, -1, 1);
        }
        get partials() {
          return this._partials.slice(0, this.partialCount);
        }
        set partials(t) {
          (this._partials = t),
            (this._partialCount = this._partials.length),
            t.length && (this.type = "custom");
        }
        get phase() {
          return this._phase * (180 / Math.PI);
        }
        set phase(t) {
          (this._phase = (t * Math.PI) / 180), (this.type = this._type);
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            return Fc(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            null !== this._oscillator && this._oscillator.dispose(),
            (this._wave = void 0),
            this.frequency.dispose(),
            this.detune.dispose(),
            this
          );
        }
      }
      qc._periodicWaveCache = [];
      class Bc extends pc {
        constructor() {
          super(Object.assign(ga(Bc.getDefaults(), arguments, ["context"])));
        }
        connect(t, e = 0, n = 0) {
          return bc(this, t, e, n), this;
        }
      }
      class Wc extends Bc {
        constructor() {
          super(
            Object.assign(
              ga(Wc.getDefaults(), arguments, ["mapping", "length"])
            )
          ),
            (this.name = "WaveShaper"),
            (this._shaper = this.context.createWaveShaper()),
            (this.input = this._shaper),
            (this.output = this._shaper);
          const t = ga(Wc.getDefaults(), arguments, ["mapping", "length"]);
          Qo(t.mapping) || t.mapping instanceof Float32Array
            ? (this.curve = Float32Array.from(t.mapping))
            : Ho(t.mapping) && this.setMap(t.mapping, t.length);
        }
        static getDefaults() {
          return Object.assign(yc.getDefaults(), { length: 1024 });
        }
        setMap(t, e = 1024) {
          const n = new Float32Array(e);
          for (let s = 0, i = e; s < i; s++) {
            const e = (s / (i - 1)) * 2 - 1;
            n[s] = t(e, s);
          }
          return (this.curve = n), this;
        }
        get curve() {
          return this._shaper.curve;
        }
        set curve(t) {
          this._shaper.curve = t;
        }
        get oversample() {
          return this._shaper.oversample;
        }
        set oversample(t) {
          const e = ["none", "2x", "4x"].some((e) => e.includes(t));
          Lo(e, "oversampling must be either 'none', '2x', or '4x'"),
            (this._shaper.oversample = t);
        }
        dispose() {
          return super.dispose(), this._shaper.disconnect(), this;
        }
      }
      class Uc extends Bc {
        constructor() {
          super(...arguments),
            (this.name = "AudioToGain"),
            (this._norm = new Wc({
              context: this.context,
              mapping: (t) => (t + 1) / 2,
            })),
            (this.input = this._norm),
            (this.output = this._norm);
        }
        dispose() {
          return super.dispose(), this._norm.dispose(), this;
        }
      }
      class zc extends yc {
        constructor() {
          super(Object.assign(ga(zc.getDefaults(), arguments, ["value"]))),
            (this.name = "Multiply"),
            (this.override = !1);
          const t = ga(zc.getDefaults(), arguments, ["value"]);
          (this._mult =
            this.input =
            this.output =
              new gc({
                context: this.context,
                minValue: t.minValue,
                maxValue: t.maxValue,
              })),
            (this.factor = this._param = this._mult.gain),
            this.factor.setValueAtTime(t.value, 0);
        }
        static getDefaults() {
          return Object.assign(yc.getDefaults(), { value: 0 });
        }
        dispose() {
          return super.dispose(), this._mult.dispose(), this;
        }
      }
      class Gc extends Pc {
        constructor() {
          super(
            ga(Gc.getDefaults(), arguments, [
              "frequency",
              "type",
              "modulationType",
            ])
          ),
            (this.name = "AMOscillator"),
            (this._modulationScale = new Uc({ context: this.context })),
            (this._modulationNode = new gc({ context: this.context }));
          const t = ga(Gc.getDefaults(), arguments, [
            "frequency",
            "type",
            "modulationType",
          ]);
          (this._carrier = new qc({
            context: this.context,
            detune: t.detune,
            frequency: t.frequency,
            onstop: () => this.onstop(this),
            phase: t.phase,
            type: t.type,
          })),
            (this.frequency = this._carrier.frequency),
            (this.detune = this._carrier.detune),
            (this._modulator = new qc({
              context: this.context,
              phase: t.phase,
              type: t.modulationType,
            })),
            (this.harmonicity = new zc({
              context: this.context,
              units: "positive",
              value: t.harmonicity,
            })),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this._modulator.chain(
              this._modulationScale,
              this._modulationNode.gain
            ),
            this._carrier.chain(this._modulationNode, this.output),
            Fa(this, ["frequency", "detune", "harmonicity"]);
        }
        static getDefaults() {
          return Object.assign(qc.getDefaults(), {
            harmonicity: 1,
            modulationType: "square",
          });
        }
        _start(t) {
          this._modulator.start(t), this._carrier.start(t);
        }
        _stop(t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }
        _restart(t) {
          this._modulator.restart(t), this._carrier.restart(t);
        }
        get type() {
          return this._carrier.type;
        }
        set type(t) {
          this._carrier.type = t;
        }
        get baseType() {
          return this._carrier.baseType;
        }
        set baseType(t) {
          this._carrier.baseType = t;
        }
        get partialCount() {
          return this._carrier.partialCount;
        }
        set partialCount(t) {
          this._carrier.partialCount = t;
        }
        get modulationType() {
          return this._modulator.type;
        }
        set modulationType(t) {
          this._modulator.type = t;
        }
        get phase() {
          return this._carrier.phase;
        }
        set phase(t) {
          (this._carrier.phase = t), (this._modulator.phase = t);
        }
        get partials() {
          return this._carrier.partials;
        }
        set partials(t) {
          this._carrier.partials = t;
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            return Fc(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this.harmonicity.dispose(),
            this._carrier.dispose(),
            this._modulator.dispose(),
            this._modulationNode.dispose(),
            this._modulationScale.dispose(),
            this
          );
        }
      }
      class $c extends Pc {
        constructor() {
          super(
            ga($c.getDefaults(), arguments, [
              "frequency",
              "type",
              "modulationType",
            ])
          ),
            (this.name = "FMOscillator"),
            (this._modulationNode = new gc({ context: this.context, gain: 0 }));
          const t = ga($c.getDefaults(), arguments, [
            "frequency",
            "type",
            "modulationType",
          ]);
          (this._carrier = new qc({
            context: this.context,
            detune: t.detune,
            frequency: 0,
            onstop: () => this.onstop(this),
            phase: t.phase,
            type: t.type,
          })),
            (this.detune = this._carrier.detune),
            (this.frequency = new yc({
              context: this.context,
              units: "frequency",
              value: t.frequency,
            })),
            (this._modulator = new qc({
              context: this.context,
              phase: t.phase,
              type: t.modulationType,
            })),
            (this.harmonicity = new zc({
              context: this.context,
              units: "positive",
              value: t.harmonicity,
            })),
            (this.modulationIndex = new zc({
              context: this.context,
              units: "positive",
              value: t.modulationIndex,
            })),
            this.frequency.connect(this._carrier.frequency),
            this.frequency.chain(this.harmonicity, this._modulator.frequency),
            this.frequency.chain(this.modulationIndex, this._modulationNode),
            this._modulator.connect(this._modulationNode.gain),
            this._modulationNode.connect(this._carrier.frequency),
            this._carrier.connect(this.output),
            this.detune.connect(this._modulator.detune),
            Fa(this, ["modulationIndex", "frequency", "detune", "harmonicity"]);
        }
        static getDefaults() {
          return Object.assign(qc.getDefaults(), {
            harmonicity: 1,
            modulationIndex: 2,
            modulationType: "square",
          });
        }
        _start(t) {
          this._modulator.start(t), this._carrier.start(t);
        }
        _stop(t) {
          this._modulator.stop(t), this._carrier.stop(t);
        }
        _restart(t) {
          return this._modulator.restart(t), this._carrier.restart(t), this;
        }
        get type() {
          return this._carrier.type;
        }
        set type(t) {
          this._carrier.type = t;
        }
        get baseType() {
          return this._carrier.baseType;
        }
        set baseType(t) {
          this._carrier.baseType = t;
        }
        get partialCount() {
          return this._carrier.partialCount;
        }
        set partialCount(t) {
          this._carrier.partialCount = t;
        }
        get modulationType() {
          return this._modulator.type;
        }
        set modulationType(t) {
          this._modulator.type = t;
        }
        get phase() {
          return this._carrier.phase;
        }
        set phase(t) {
          (this._carrier.phase = t), (this._modulator.phase = t);
        }
        get partials() {
          return this._carrier.partials;
        }
        set partials(t) {
          this._carrier.partials = t;
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            return Fc(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.harmonicity.dispose(),
            this._carrier.dispose(),
            this._modulator.dispose(),
            this._modulationNode.dispose(),
            this.modulationIndex.dispose(),
            this
          );
        }
      }
      class Hc extends Pc {
        constructor() {
          super(ga(Hc.getDefaults(), arguments, ["frequency", "width"])),
            (this.name = "PulseOscillator"),
            (this._widthGate = new gc({ context: this.context, gain: 0 })),
            (this._thresh = new Wc({
              context: this.context,
              mapping: (t) => (t <= 0 ? -1 : 1),
            }));
          const t = ga(Hc.getDefaults(), arguments, ["frequency", "width"]);
          (this.width = new yc({
            context: this.context,
            units: "audioRange",
            value: t.width,
          })),
            (this._triangle = new qc({
              context: this.context,
              detune: t.detune,
              frequency: t.frequency,
              onstop: () => this.onstop(this),
              phase: t.phase,
              type: "triangle",
            })),
            (this.frequency = this._triangle.frequency),
            (this.detune = this._triangle.detune),
            this._triangle.chain(this._thresh, this.output),
            this.width.chain(this._widthGate, this._thresh),
            Fa(this, ["width", "frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(Pc.getDefaults(), {
            detune: 0,
            frequency: 440,
            phase: 0,
            type: "pulse",
            width: 0.2,
          });
        }
        _start(t) {
          (t = this.toSeconds(t)),
            this._triangle.start(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }
        _stop(t) {
          (t = this.toSeconds(t)),
            this._triangle.stop(t),
            this._widthGate.gain.cancelScheduledValues(t),
            this._widthGate.gain.setValueAtTime(0, t);
        }
        _restart(t) {
          this._triangle.restart(t),
            this._widthGate.gain.cancelScheduledValues(t),
            this._widthGate.gain.setValueAtTime(1, t);
        }
        get phase() {
          return this._triangle.phase;
        }
        set phase(t) {
          this._triangle.phase = t;
        }
        get type() {
          return "pulse";
        }
        get baseType() {
          return "pulse";
        }
        get partials() {
          return [];
        }
        get partialCount() {
          return 0;
        }
        set carrierType(t) {
          this._triangle.type = t;
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            return Fc(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._triangle.dispose(),
            this.width.dispose(),
            this._widthGate.dispose(),
            this._thresh.dispose(),
            this
          );
        }
      }
      class Yc extends Pc {
        constructor() {
          super(
            ga(Yc.getDefaults(), arguments, ["frequency", "type", "spread"])
          ),
            (this.name = "FatOscillator"),
            (this._oscillators = []);
          const t = ga(Yc.getDefaults(), arguments, [
            "frequency",
            "type",
            "spread",
          ]);
          (this.frequency = new yc({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            (this.detune = new yc({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            (this._spread = t.spread),
            (this._type = t.type),
            (this._phase = t.phase),
            (this._partials = t.partials),
            (this._partialCount = t.partialCount),
            (this.count = t.count),
            Fa(this, ["frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(qc.getDefaults(), {
            count: 3,
            spread: 20,
            type: "sawtooth",
          });
        }
        _start(t) {
          (t = this.toSeconds(t)), this._forEach((e) => e.start(t));
        }
        _stop(t) {
          (t = this.toSeconds(t)), this._forEach((e) => e.stop(t));
        }
        _restart(t) {
          this._forEach((e) => e.restart(t));
        }
        _forEach(t) {
          for (let e = 0; e < this._oscillators.length; e++)
            t(this._oscillators[e], e);
        }
        get type() {
          return this._type;
        }
        set type(t) {
          (this._type = t), this._forEach((e) => (e.type = t));
        }
        get spread() {
          return this._spread;
        }
        set spread(t) {
          if (((this._spread = t), this._oscillators.length > 1)) {
            const e = -t / 2,
              n = t / (this._oscillators.length - 1);
            this._forEach((t, s) => (t.detune.value = e + n * s));
          }
        }
        get count() {
          return this._oscillators.length;
        }
        set count(t) {
          if ((qo(t, 1), this._oscillators.length !== t)) {
            this._forEach((t) => t.dispose()), (this._oscillators = []);
            for (let e = 0; e < t; e++) {
              const n = new qc({
                context: this.context,
                volume: -6 - 1.1 * t,
                type: this._type,
                phase: this._phase + (e / t) * 360,
                partialCount: this._partialCount,
                onstop: 0 === e ? () => this.onstop(this) : qa,
              });
              "custom" === this.type && (n.partials = this._partials),
                this.frequency.connect(n.frequency),
                this.detune.connect(n.detune),
                (n.detune.overridden = !1),
                n.connect(this.output),
                (this._oscillators[e] = n);
            }
            (this.spread = this._spread),
              "started" === this.state && this._forEach((t) => t.start());
          }
        }
        get phase() {
          return this._phase;
        }
        set phase(t) {
          (this._phase = t),
            this._forEach(
              (t, e) => (t.phase = this._phase + (e / this.count) * 360)
            );
        }
        get baseType() {
          return this._oscillators[0].baseType;
        }
        set baseType(t) {
          this._forEach((e) => (e.baseType = t)),
            (this._type = this._oscillators[0].type);
        }
        get partials() {
          return this._oscillators[0].partials;
        }
        set partials(t) {
          (this._partials = t),
            (this._partialCount = this._partials.length),
            t.length &&
              ((this._type = "custom"), this._forEach((e) => (e.partials = t)));
        }
        get partialCount() {
          return this._oscillators[0].partialCount;
        }
        set partialCount(t) {
          (this._partialCount = t),
            this._forEach((e) => (e.partialCount = t)),
            (this._type = this._oscillators[0].type);
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            return Fc(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.frequency.dispose(),
            this.detune.dispose(),
            this._forEach((t) => t.dispose()),
            this
          );
        }
      }
      class Xc extends Pc {
        constructor() {
          super(
            ga(Xc.getDefaults(), arguments, [
              "frequency",
              "modulationFrequency",
            ])
          ),
            (this.name = "PWMOscillator"),
            (this.sourceType = "pwm"),
            (this._scale = new zc({ context: this.context, value: 2 }));
          const t = ga(Xc.getDefaults(), arguments, [
            "frequency",
            "modulationFrequency",
          ]);
          (this._pulse = new Hc({
            context: this.context,
            frequency: t.modulationFrequency,
          })),
            (this._pulse.carrierType = "sine"),
            (this.modulationFrequency = this._pulse.frequency),
            (this._modulator = new qc({
              context: this.context,
              detune: t.detune,
              frequency: t.frequency,
              onstop: () => this.onstop(this),
              phase: t.phase,
            })),
            (this.frequency = this._modulator.frequency),
            (this.detune = this._modulator.detune),
            this._modulator.chain(this._scale, this._pulse.width),
            this._pulse.connect(this.output),
            Fa(this, ["modulationFrequency", "frequency", "detune"]);
        }
        static getDefaults() {
          return Object.assign(Pc.getDefaults(), {
            detune: 0,
            frequency: 440,
            modulationFrequency: 0.4,
            phase: 0,
            type: "pwm",
          });
        }
        _start(t) {
          (t = this.toSeconds(t)),
            this._modulator.start(t),
            this._pulse.start(t);
        }
        _stop(t) {
          (t = this.toSeconds(t)), this._modulator.stop(t), this._pulse.stop(t);
        }
        _restart(t) {
          this._modulator.restart(t), this._pulse.restart(t);
        }
        get type() {
          return "pwm";
        }
        get baseType() {
          return "pwm";
        }
        get partials() {
          return [];
        }
        get partialCount() {
          return 0;
        }
        get phase() {
          return this._modulator.phase;
        }
        set phase(t) {
          this._modulator.phase = t;
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            return Fc(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this._pulse.dispose(),
            this._scale.dispose(),
            this._modulator.dispose(),
            this
          );
        }
      }
      const Zc = {
        am: Gc,
        fat: Yc,
        fm: $c,
        oscillator: qc,
        pulse: Hc,
        pwm: Xc,
      };
      class Qc extends Pc {
        constructor() {
          super(ga(Qc.getDefaults(), arguments, ["frequency", "type"])),
            (this.name = "OmniOscillator");
          const t = ga(Qc.getDefaults(), arguments, ["frequency", "type"]);
          (this.frequency = new yc({
            context: this.context,
            units: "frequency",
            value: t.frequency,
          })),
            (this.detune = new yc({
              context: this.context,
              units: "cents",
              value: t.detune,
            })),
            Fa(this, ["frequency", "detune"]),
            this.set(t);
        }
        static getDefaults() {
          return Object.assign(
            qc.getDefaults(),
            $c.getDefaults(),
            Gc.getDefaults(),
            Yc.getDefaults(),
            Hc.getDefaults(),
            Xc.getDefaults()
          );
        }
        _start(t) {
          this._oscillator.start(t);
        }
        _stop(t) {
          this._oscillator.stop(t);
        }
        _restart(t) {
          return this._oscillator.restart(t), this;
        }
        get type() {
          let t = "";
          return (
            ["am", "fm", "fat"].some((t) => this._sourceType === t) &&
              (t = this._sourceType),
            t + this._oscillator.type
          );
        }
        set type(t) {
          "fm" === t.substr(0, 2)
            ? (this._createNewOscillator("fm"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(2)))
            : "am" === t.substr(0, 2)
            ? (this._createNewOscillator("am"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(2)))
            : "fat" === t.substr(0, 3)
            ? (this._createNewOscillator("fat"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t.substr(3)))
            : "pwm" === t
            ? (this._createNewOscillator("pwm"),
              (this._oscillator = this._oscillator))
            : "pulse" === t
            ? this._createNewOscillator("pulse")
            : (this._createNewOscillator("oscillator"),
              (this._oscillator = this._oscillator),
              (this._oscillator.type = t));
        }
        get partials() {
          return this._oscillator.partials;
        }
        set partials(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            (this._oscillator.partials = t);
        }
        get partialCount() {
          return this._oscillator.partialCount;
        }
        set partialCount(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            (this._oscillator.partialCount = t);
        }
        set(t) {
          return (
            Reflect.has(t, "type") && t.type && (this.type = t.type),
            super.set(t),
            this
          );
        }
        _createNewOscillator(t) {
          if (t !== this._sourceType) {
            this._sourceType = t;
            const e = Zc[t],
              n = this.now();
            if (this._oscillator) {
              const t = this._oscillator;
              t.stop(n),
                this.context.setTimeout(() => t.dispose(), this.blockTime);
            }
            (this._oscillator = new e({ context: this.context })),
              this.frequency.connect(this._oscillator.frequency),
              this.detune.connect(this._oscillator.detune),
              this._oscillator.connect(this.output),
              (this._oscillator.onstop = () => this.onstop(this)),
              "started" === this.state && this._oscillator.start(n);
          }
        }
        get phase() {
          return this._oscillator.phase;
        }
        set phase(t) {
          this._oscillator.phase = t;
        }
        get sourceType() {
          return this._sourceType;
        }
        set sourceType(t) {
          let e = "sine";
          "pwm" !== this._oscillator.type &&
            "pulse" !== this._oscillator.type &&
            (e = this._oscillator.type),
            "fm" === t
              ? (this.type = "fm" + e)
              : "am" === t
              ? (this.type = "am" + e)
              : "fat" === t
              ? (this.type = "fat" + e)
              : "oscillator" === t
              ? (this.type = e)
              : "pulse" === t
              ? (this.type = "pulse")
              : "pwm" === t && (this.type = "pwm");
        }
        _getOscType(t, e) {
          return t instanceof Zc[e];
        }
        get baseType() {
          return this._oscillator.baseType;
        }
        set baseType(t) {
          this._getOscType(this._oscillator, "pulse") ||
            this._getOscType(this._oscillator, "pwm") ||
            "pulse" === t ||
            "pwm" === t ||
            (this._oscillator.baseType = t);
        }
        get width() {
          return this._getOscType(this._oscillator, "pulse")
            ? this._oscillator.width
            : void 0;
        }
        get count() {
          return this._getOscType(this._oscillator, "fat")
            ? this._oscillator.count
            : void 0;
        }
        set count(t) {
          this._getOscType(this._oscillator, "fat") &&
            Yo(t) &&
            (this._oscillator.count = t);
        }
        get spread() {
          return this._getOscType(this._oscillator, "fat")
            ? this._oscillator.spread
            : void 0;
        }
        set spread(t) {
          this._getOscType(this._oscillator, "fat") &&
            Yo(t) &&
            (this._oscillator.spread = t);
        }
        get modulationType() {
          return this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")
            ? this._oscillator.modulationType
            : void 0;
        }
        set modulationType(t) {
          (this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")) &&
            Jo(t) &&
            (this._oscillator.modulationType = t);
        }
        get modulationIndex() {
          return this._getOscType(this._oscillator, "fm")
            ? this._oscillator.modulationIndex
            : void 0;
        }
        get harmonicity() {
          return this._getOscType(this._oscillator, "fm") ||
            this._getOscType(this._oscillator, "am")
            ? this._oscillator.harmonicity
            : void 0;
        }
        get modulationFrequency() {
          return this._getOscType(this._oscillator, "pwm")
            ? this._oscillator.modulationFrequency
            : void 0;
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            return Fc(this, t);
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.detune.dispose(),
            this.frequency.dispose(),
            this._oscillator.dispose(),
            this
          );
        }
      }
      function Jc(t, e = 1 / 0) {
        const n = new WeakMap();
        return function (s, i) {
          Reflect.defineProperty(s, i, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.get(this);
            },
            set: function (s) {
              qo(s, t, e), n.set(this, s);
            },
          });
        };
      }
      function Kc(t, e = 1 / 0) {
        const n = new WeakMap();
        return function (s, i) {
          Reflect.defineProperty(s, i, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.get(this);
            },
            set: function (s) {
              qo(this.toSeconds(s), t, e), n.set(this, s);
            },
          });
        };
      }
      class tu extends Pc {
        constructor() {
          super(ga(tu.getDefaults(), arguments, ["url", "onload"])),
            (this.name = "Player"),
            (this._activeSources = new Set());
          const t = ga(tu.getDefaults(), arguments, ["url", "onload"]);
          (this._buffer = new Ba({
            onload: this._onload.bind(this, t.onload),
            onerror: t.onerror,
            reverse: t.reverse,
            url: t.url,
          })),
            (this.autostart = t.autostart),
            (this._loop = t.loop),
            (this._loopStart = t.loopStart),
            (this._loopEnd = t.loopEnd),
            (this._playbackRate = t.playbackRate),
            (this.fadeIn = t.fadeIn),
            (this.fadeOut = t.fadeOut);
        }
        static getDefaults() {
          return Object.assign(Pc.getDefaults(), {
            autostart: !1,
            fadeIn: 0,
            fadeOut: 0,
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            onload: qa,
            onerror: qa,
            playbackRate: 1,
            reverse: !1,
          });
        }
        load(t) {
          return oa(this, void 0, void 0, function* () {
            return yield this._buffer.load(t), this._onload(), this;
          });
        }
        _onload(t = qa) {
          t(), this.autostart && this.start();
        }
        _onSourceEnd(t) {
          this.onstop(this),
            this._activeSources.delete(t),
            0 !== this._activeSources.size ||
              this._synced ||
              "started" !== this._state.getValueAtTime(this.now()) ||
              (this._state.cancel(this.now()),
              this._state.setStateAtTime("stopped", this.now()));
        }
        start(t, e, n) {
          return super.start(t, e, n), this;
        }
        _start(t, e, n) {
          e = this._loop ? va(e, this._loopStart) : va(e, 0);
          const s = this.toSeconds(e),
            i = n;
          n = va(n, Math.max(this._buffer.duration - s, 0));
          let r = this.toSeconds(n);
          (r /= this._playbackRate), (t = this.toSeconds(t));
          const o = new Vc({
            url: this._buffer,
            context: this.context,
            fadeIn: this.fadeIn,
            fadeOut: this.fadeOut,
            loop: this._loop,
            loopEnd: this._loopEnd,
            loopStart: this._loopStart,
            onended: this._onSourceEnd.bind(this),
            playbackRate: this._playbackRate,
          }).connect(this.output);
          this._loop ||
            this._synced ||
            (this._state.cancel(t + r),
            this._state.setStateAtTime("stopped", t + r, { implicitEnd: !0 })),
            this._activeSources.add(o),
            this._loop && Go(i)
              ? o.start(t, s)
              : o.start(t, s, r - this.toSeconds(this.fadeOut));
        }
        _stop(t) {
          const e = this.toSeconds(t);
          this._activeSources.forEach((t) => t.stop(e));
        }
        restart(t, e, n) {
          return super.restart(t, e, n), this;
        }
        _restart(t, e, n) {
          this._stop(t), this._start(t, e, n);
        }
        seek(t, e) {
          const n = this.toSeconds(e);
          if ("started" === this._state.getValueAtTime(n)) {
            const e = this.toSeconds(t);
            this._stop(n), this._start(n, e);
          }
          return this;
        }
        setLoopPoints(t, e) {
          return (this.loopStart = t), (this.loopEnd = e), this;
        }
        get loopStart() {
          return this._loopStart;
        }
        set loopStart(t) {
          (this._loopStart = t),
            this.buffer.loaded &&
              qo(this.toSeconds(t), 0, this.buffer.duration),
            this._activeSources.forEach((e) => {
              e.loopStart = t;
            });
        }
        get loopEnd() {
          return this._loopEnd;
        }
        set loopEnd(t) {
          (this._loopEnd = t),
            this.buffer.loaded &&
              qo(this.toSeconds(t), 0, this.buffer.duration),
            this._activeSources.forEach((e) => {
              e.loopEnd = t;
            });
        }
        get buffer() {
          return this._buffer;
        }
        set buffer(t) {
          this._buffer.set(t);
        }
        get loop() {
          return this._loop;
        }
        set loop(t) {
          if (
            this._loop !== t &&
            ((this._loop = t),
            this._activeSources.forEach((e) => {
              e.loop = t;
            }),
            t)
          ) {
            const t = this._state.getNextState("stopped", this.now());
            t && this._state.cancel(t.time);
          }
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          this._playbackRate = t;
          const e = this.now(),
            n = this._state.getNextState("stopped", e);
          n &&
            n.implicitEnd &&
            (this._state.cancel(n.time),
            this._activeSources.forEach((t) => t.cancelStop())),
            this._activeSources.forEach((n) => {
              n.playbackRate.setValueAtTime(t, e);
            });
        }
        get reverse() {
          return this._buffer.reverse;
        }
        set reverse(t) {
          this._buffer.reverse = t;
        }
        get loaded() {
          return this._buffer.loaded;
        }
        dispose() {
          return (
            super.dispose(),
            this._activeSources.forEach((t) => t.dispose()),
            this._activeSources.clear(),
            this._buffer.dispose(),
            this
          );
        }
      }
      ra([Kc(0)], tu.prototype, "fadeIn", void 0),
        ra([Kc(0)], tu.prototype, "fadeOut", void 0);
      class eu extends pc {
        constructor() {
          super(
            ga(eu.getDefaults(), arguments, [
              "attack",
              "decay",
              "sustain",
              "release",
            ])
          ),
            (this.name = "Envelope"),
            (this._sig = new yc({ context: this.context, value: 0 })),
            (this.output = this._sig),
            (this.input = void 0);
          const t = ga(eu.getDefaults(), arguments, [
            "attack",
            "decay",
            "sustain",
            "release",
          ]);
          (this.attack = t.attack),
            (this.decay = t.decay),
            (this.sustain = t.sustain),
            (this.release = t.release),
            (this.attackCurve = t.attackCurve),
            (this.releaseCurve = t.releaseCurve),
            (this.decayCurve = t.decayCurve);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            attack: 0.01,
            attackCurve: "linear",
            decay: 0.1,
            decayCurve: "exponential",
            release: 1,
            releaseCurve: "exponential",
            sustain: 0.5,
          });
        }
        get value() {
          return this.getValueAtTime(this.now());
        }
        _getCurve(t, e) {
          if (Jo(t)) return t;
          {
            let n;
            for (n in nu) if (nu[n][e] === t) return n;
            return t;
          }
        }
        _setCurve(t, e, n) {
          if (Jo(n) && Reflect.has(nu, n)) {
            const s = nu[n];
            Xo(s) ? "_decayCurve" !== t && (this[t] = s[e]) : (this[t] = s);
          } else {
            if (!Qo(n) || "_decayCurve" === t)
              throw new Error("Envelope: invalid curve: " + n);
            this[t] = n;
          }
        }
        get attackCurve() {
          return this._getCurve(this._attackCurve, "In");
        }
        set attackCurve(t) {
          this._setCurve("_attackCurve", "In", t);
        }
        get releaseCurve() {
          return this._getCurve(this._releaseCurve, "Out");
        }
        set releaseCurve(t) {
          this._setCurve("_releaseCurve", "Out", t);
        }
        get decayCurve() {
          return this._decayCurve;
        }
        set decayCurve(t) {
          Lo(
            ["linear", "exponential"].some((e) => e === t),
            "Invalid envelope curve: " + t
          ),
            (this._decayCurve = t);
        }
        triggerAttack(t, e = 1) {
          this.log("triggerAttack", t, e), (t = this.toSeconds(t));
          const n = this.toSeconds(this.attack);
          let s = n;
          const i = this.toSeconds(this.decay),
            r = this.getValueAtTime(t);
          if (r > 0) {
            const t = 1 / s,
              e = 1 - r;
            s = e / t;
          }
          if (s < this.sampleTime)
            this._sig.cancelScheduledValues(t), this._sig.setValueAtTime(e, t);
          else if ("linear" === this._attackCurve)
            this._sig.linearRampTo(e, s, t);
          else if ("exponential" === this._attackCurve)
            this._sig.targetRampTo(e, s, t);
          else {
            this._sig.cancelAndHoldAtTime(t);
            let n = this._attackCurve;
            for (let t = 1; t < n.length; t++)
              if (n[t - 1] <= r && r <= n[t]) {
                (n = this._attackCurve.slice(t)), (n[0] = r);
                break;
              }
            this._sig.setValueCurveAtTime(n, t, s, e);
          }
          if (i && this.sustain < 1) {
            const n = e * this.sustain,
              r = t + s;
            this.log("decay", r),
              "linear" === this._decayCurve
                ? this._sig.linearRampToValueAtTime(n, i + r)
                : this._sig.exponentialApproachValueAtTime(n, r, i);
          }
          return this;
        }
        triggerRelease(t) {
          this.log("triggerRelease", t), (t = this.toSeconds(t));
          const e = this.getValueAtTime(t);
          if (e > 0) {
            const n = this.toSeconds(this.release);
            n < this.sampleTime
              ? this._sig.setValueAtTime(0, t)
              : "linear" === this._releaseCurve
              ? this._sig.linearRampTo(0, n, t)
              : "exponential" === this._releaseCurve
              ? this._sig.targetRampTo(0, n, t)
              : (Lo(
                  Qo(this._releaseCurve),
                  "releaseCurve must be either 'linear', 'exponential' or an array"
                ),
                this._sig.cancelAndHoldAtTime(t),
                this._sig.setValueCurveAtTime(this._releaseCurve, t, n, e));
          }
          return this;
        }
        getValueAtTime(t) {
          return this._sig.getValueAtTime(t);
        }
        triggerAttackRelease(t, e, n = 1) {
          return (
            (e = this.toSeconds(e)),
            this.triggerAttack(e, n),
            this.triggerRelease(e + this.toSeconds(t)),
            this
          );
        }
        cancel(t) {
          return this._sig.cancelScheduledValues(this.toSeconds(t)), this;
        }
        connect(t, e = 0, n = 0) {
          return bc(this, t, e, n), this;
        }
        asArray(t = 1024) {
          return oa(this, void 0, void 0, function* () {
            const e = t / this.context.sampleRate,
              n = new Wa(1, e, this.context.sampleRate),
              s = this.toSeconds(this.attack) + this.toSeconds(this.decay),
              i = s + this.toSeconds(this.release),
              r = 0.1 * i,
              o = i + r,
              a = new this.constructor(
                Object.assign(this.get(), {
                  attack: (e * this.toSeconds(this.attack)) / o,
                  decay: (e * this.toSeconds(this.decay)) / o,
                  release: (e * this.toSeconds(this.release)) / o,
                  context: n,
                })
              );
            a._sig.toDestination(),
              a.triggerAttackRelease((e * (s + r)) / o, 0);
            const c = yield n.render();
            return c.getChannelData(0);
          });
        }
        dispose() {
          return super.dispose(), this._sig.dispose(), this;
        }
      }
      ra([Kc(0)], eu.prototype, "attack", void 0),
        ra([Kc(0)], eu.prototype, "decay", void 0),
        ra([Jc(0, 1)], eu.prototype, "sustain", void 0),
        ra([Kc(0)], eu.prototype, "release", void 0);
      const nu = (() => {
        const t = 128;
        let e, n;
        const s = [];
        for (e = 0; e < t; e++) s[e] = Math.sin((e / (t - 1)) * (Math.PI / 2));
        const i = [],
          r = 6.4;
        for (e = 0; e < t - 1; e++) {
          n = e / (t - 1);
          const s = Math.sin(n * (2 * Math.PI) * r - Math.PI / 2) + 1;
          i[e] = s / 10 + 0.83 * n;
        }
        i[t - 1] = 1;
        const o = [],
          a = 5;
        for (e = 0; e < t; e++) o[e] = Math.ceil((e / (t - 1)) * a) / a;
        const c = [];
        for (e = 0; e < t; e++)
          (n = e / (t - 1)), (c[e] = 0.5 * (1 - Math.cos(Math.PI * n)));
        const u = [];
        for (e = 0; e < t; e++) {
          n = e / (t - 1);
          const s = 4 * Math.pow(n, 3) + 0.2,
            i = Math.cos(s * Math.PI * 2 * n);
          u[e] = Math.abs(i * (1 - n));
        }
        function l(t) {
          const e = new Array(t.length);
          for (let n = 0; n < t.length; n++) e[n] = 1 - t[n];
          return e;
        }
        function h(t) {
          return t.slice(0).reverse();
        }
        return {
          bounce: { In: l(u), Out: u },
          cosine: { In: s, Out: h(s) },
          exponential: "exponential",
          linear: "linear",
          ripple: { In: i, Out: l(i) },
          sine: { In: c, Out: l(c) },
          step: { In: o, Out: l(o) },
        };
      })();
      class su extends pc {
        constructor() {
          super(ga(su.getDefaults(), arguments)),
            (this._scheduledEvents = []),
            (this._synced = !1),
            (this._original_triggerAttack = this.triggerAttack),
            (this._original_triggerRelease = this.triggerRelease);
          const t = ga(su.getDefaults(), arguments);
          (this._volume = this.output =
            new Mc({ context: this.context, volume: t.volume })),
            (this.volume = this._volume.volume),
            Fa(this, "volume");
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), { volume: 0 });
        }
        sync() {
          return (
            this._syncState() &&
              (this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 0)),
            this
          );
        }
        _syncState() {
          let t = !1;
          return this._synced || ((this._synced = !0), (t = !0)), t;
        }
        _syncMethod(t, e) {
          const n = (this["_original_" + t] = this[t]);
          this[t] = (...t) => {
            const s = t[e],
              i = this.context.transport.schedule((s) => {
                (t[e] = s), n.apply(this, t);
              }, s);
            this._scheduledEvents.push(i);
          };
        }
        unsync() {
          return (
            this._scheduledEvents.forEach((t) =>
              this.context.transport.clear(t)
            ),
            (this._scheduledEvents = []),
            this._synced &&
              ((this._synced = !1),
              (this.triggerAttack = this._original_triggerAttack),
              (this.triggerRelease = this._original_triggerRelease)),
            this
          );
        }
        triggerAttackRelease(t, e, n, s) {
          const i = this.toSeconds(n),
            r = this.toSeconds(e);
          return this.triggerAttack(t, i, s), this.triggerRelease(i + r), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._volume.dispose(),
            this.unsync(),
            (this._scheduledEvents = []),
            this
          );
        }
      }
      class iu extends su {
        constructor() {
          super(ga(iu.getDefaults(), arguments));
          const t = ga(iu.getDefaults(), arguments);
          (this.portamento = t.portamento), (this.onsilence = t.onsilence);
        }
        static getDefaults() {
          return Object.assign(su.getDefaults(), {
            detune: 0,
            onsilence: qa,
            portamento: 0,
          });
        }
        triggerAttack(t, e, n = 1) {
          this.log("triggerAttack", t, e, n);
          const s = this.toSeconds(e);
          return this._triggerEnvelopeAttack(s, n), this.setNote(t, s), this;
        }
        triggerRelease(t) {
          this.log("triggerRelease", t);
          const e = this.toSeconds(t);
          return this._triggerEnvelopeRelease(e), this;
        }
        setNote(t, e) {
          const n = this.toSeconds(e),
            s = t instanceof rc ? t.toFrequency() : t;
          if (this.portamento > 0 && this.getLevelAtTime(n) > 0.05) {
            const t = this.toSeconds(this.portamento);
            this.frequency.exponentialRampTo(s, t, n);
          } else this.frequency.setValueAtTime(s, n);
          return this;
        }
      }
      ra([Kc(0)], iu.prototype, "portamento", void 0);
      class ru extends eu {
        constructor() {
          super(
            ga(ru.getDefaults(), arguments, [
              "attack",
              "decay",
              "sustain",
              "release",
            ])
          ),
            (this.name = "AmplitudeEnvelope"),
            (this._gainNode = new gc({ context: this.context, gain: 0 })),
            (this.output = this._gainNode),
            (this.input = this._gainNode),
            this._sig.connect(this._gainNode.gain),
            (this.output = this._gainNode),
            (this.input = this._gainNode);
        }
        dispose() {
          return super.dispose(), this._gainNode.dispose(), this;
        }
      }
      class ou extends iu {
        constructor() {
          super(ga(ou.getDefaults(), arguments)), (this.name = "Synth");
          const t = ga(ou.getDefaults(), arguments);
          (this.oscillator = new Qc(
            Object.assign(
              {
                context: this.context,
                detune: t.detune,
                onstop: () => this.onsilence(this),
              },
              t.oscillator
            )
          )),
            (this.frequency = this.oscillator.frequency),
            (this.detune = this.oscillator.detune),
            (this.envelope = new ru(
              Object.assign({ context: this.context }, t.envelope)
            )),
            this.oscillator.chain(this.envelope, this.output),
            Fa(this, ["oscillator", "frequency", "detune", "envelope"]);
        }
        static getDefaults() {
          return Object.assign(iu.getDefaults(), {
            envelope: Object.assign(
              ya(eu.getDefaults(), Object.keys(pc.getDefaults())),
              { attack: 0.005, decay: 0.1, release: 1, sustain: 0.3 }
            ),
            oscillator: Object.assign(
              ya(Qc.getDefaults(), [
                ...Object.keys(Pc.getDefaults()),
                "frequency",
                "detune",
              ]),
              { type: "triangle" }
            ),
          });
        }
        _triggerEnvelopeAttack(t, e) {
          if (
            (this.envelope.triggerAttack(t, e),
            this.oscillator.start(t),
            0 === this.envelope.sustain)
          ) {
            const e = this.toSeconds(this.envelope.attack),
              n = this.toSeconds(this.envelope.decay);
            this.oscillator.stop(t + e + n);
          }
        }
        _triggerEnvelopeRelease(t) {
          this.envelope.triggerRelease(t),
            this.oscillator.stop(t + this.toSeconds(this.envelope.release));
        }
        getLevelAtTime(t) {
          return (t = this.toSeconds(t)), this.envelope.getValueAtTime(t);
        }
        dispose() {
          return (
            super.dispose(),
            this.oscillator.dispose(),
            this.envelope.dispose(),
            this
          );
        }
      }
      class au extends ou {
        constructor() {
          super(ga(au.getDefaults(), arguments)),
            (this.name = "MembraneSynth"),
            (this.portamento = 0);
          const t = ga(au.getDefaults(), arguments);
          (this.pitchDecay = t.pitchDecay),
            (this.octaves = t.octaves),
            Fa(this, ["oscillator", "envelope"]);
        }
        static getDefaults() {
          return fa(iu.getDefaults(), ou.getDefaults(), {
            envelope: {
              attack: 0.001,
              attackCurve: "exponential",
              decay: 0.4,
              release: 1.4,
              sustain: 0.01,
            },
            octaves: 10,
            oscillator: { type: "sine" },
            pitchDecay: 0.05,
          });
        }
        setNote(t, e) {
          const n = this.toSeconds(e),
            s = this.toFrequency(t instanceof rc ? t.toFrequency() : t),
            i = s * this.octaves;
          return (
            this.oscillator.frequency.setValueAtTime(i, n),
            this.oscillator.frequency.exponentialRampToValueAtTime(
              s,
              n + this.toSeconds(this.pitchDecay)
            ),
            this
          );
        }
        dispose() {
          return super.dispose(), this;
        }
      }
      ra([Jc(0)], au.prototype, "octaves", void 0),
        ra([Kc(0)], au.prototype, "pitchDecay", void 0);
      const cu = new Set();
      function uu(t) {
        cu.add(t);
      }
      function lu(t, e) {
        const n = `registerProcessor("${t}", ${e})`;
        cu.add(n);
      }
      const hu =
        '\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n';
      uu(hu);
      const pu =
        "\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n";
      uu(pu);
      const du =
        "\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n";
      uu(du);
      const fu = "feedback-comb-filter",
        mu =
          '\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n';
      lu(fu, mu);
      class gu extends su {
        constructor() {
          super(
            ga(
              gu.getDefaults(),
              arguments,
              ["urls", "onload", "baseUrl"],
              "urls"
            )
          ),
            (this.name = "Sampler"),
            (this._activeSources = new Map());
          const t = ga(
              gu.getDefaults(),
              arguments,
              ["urls", "onload", "baseUrl"],
              "urls"
            ),
            e = {};
          Object.keys(t.urls).forEach((n) => {
            const s = parseInt(n, 10);
            if (
              (Lo(
                Ko(n) || (Yo(s) && isFinite(s)),
                "url key is neither a note or midi pitch: " + n
              ),
              Ko(n))
            ) {
              const s = new rc(this.context, n).toMidi();
              e[s] = t.urls[n];
            } else Yo(s) && isFinite(s) && (e[s] = t.urls[s]);
          }),
            (this._buffers = new Cc({
              urls: e,
              onload: t.onload,
              baseUrl: t.baseUrl,
              onerror: t.onerror,
            })),
            (this.attack = t.attack),
            (this.release = t.release),
            (this.curve = t.curve),
            this._buffers.loaded && Promise.resolve().then(t.onload);
        }
        static getDefaults() {
          return Object.assign(su.getDefaults(), {
            attack: 0,
            baseUrl: "",
            curve: "exponential",
            onload: qa,
            onerror: qa,
            release: 0.1,
            urls: {},
          });
        }
        _findClosest(t) {
          const e = 96;
          let n = 0;
          while (n < e) {
            if (this._buffers.has(t + n)) return -n;
            if (this._buffers.has(t - n)) return n;
            n++;
          }
          throw new Error("No available buffers for note: " + t);
        }
        triggerAttack(t, e, n = 1) {
          return (
            this.log("triggerAttack", t, e, n),
            Array.isArray(t) || (t = [t]),
            t.forEach((t) => {
              const s = ec(new rc(this.context, t).toFrequency()),
                i = Math.round(s),
                r = s - i,
                o = this._findClosest(i),
                a = i - o,
                c = this._buffers.get(a),
                u = Za(o + r),
                l = new Vc({
                  url: c,
                  context: this.context,
                  curve: this.curve,
                  fadeIn: this.attack,
                  fadeOut: this.release,
                  playbackRate: u,
                }).connect(this.output);
              l.start(e, 0, c.duration / u, n),
                Qo(this._activeSources.get(i)) ||
                  this._activeSources.set(i, []),
                this._activeSources.get(i).push(l),
                (l.onended = () => {
                  if (this._activeSources && this._activeSources.has(i)) {
                    const t = this._activeSources.get(i),
                      e = t.indexOf(l);
                    -1 !== e && t.splice(e, 1);
                  }
                });
            }),
            this
          );
        }
        triggerRelease(t, e) {
          return (
            this.log("triggerRelease", t, e),
            Array.isArray(t) || (t = [t]),
            t.forEach((t) => {
              const n = new rc(this.context, t).toMidi();
              if (
                this._activeSources.has(n) &&
                this._activeSources.get(n).length
              ) {
                const t = this._activeSources.get(n);
                (e = this.toSeconds(e)),
                  t.forEach((t) => {
                    t.stop(e);
                  }),
                  this._activeSources.set(n, []);
              }
            }),
            this
          );
        }
        releaseAll(t) {
          const e = this.toSeconds(t);
          return (
            this._activeSources.forEach((t) => {
              while (t.length) {
                const n = t.shift();
                n.stop(e);
              }
            }),
            this
          );
        }
        sync() {
          return (
            this._syncState() &&
              (this._syncMethod("triggerAttack", 1),
              this._syncMethod("triggerRelease", 1)),
            this
          );
        }
        triggerAttackRelease(t, e, n, s = 1) {
          const i = this.toSeconds(n);
          return (
            this.triggerAttack(t, i, s),
            Qo(e)
              ? (Lo(Qo(t), "notes must be an array when duration is array"),
                t.forEach((t, n) => {
                  const s = e[Math.min(n, e.length - 1)];
                  this.triggerRelease(t, i + this.toSeconds(s));
                }))
              : this.triggerRelease(t, i + this.toSeconds(e)),
            this
          );
        }
        add(t, e, n) {
          if (
            (Lo(Ko(t) || isFinite(t), "note must be a pitch or midi: " + t),
            Ko(t))
          ) {
            const s = new rc(this.context, t).toMidi();
            this._buffers.add(s, e, n);
          } else this._buffers.add(t, e, n);
          return this;
        }
        get loaded() {
          return this._buffers.loaded;
        }
        dispose() {
          return (
            super.dispose(),
            this._buffers.dispose(),
            this._activeSources.forEach((t) => {
              t.forEach((t) => t.dispose());
            }),
            this._activeSources.clear(),
            this
          );
        }
      }
      ra([Kc(0)], gu.prototype, "attack", void 0),
        ra([Kc(0)], gu.prototype, "release", void 0);
      class _u extends uc {
        constructor() {
          super(ga(_u.getDefaults(), arguments, ["callback", "value"])),
            (this.name = "ToneEvent"),
            (this._state = new lc("stopped")),
            (this._startOffset = 0);
          const t = ga(_u.getDefaults(), arguments, ["callback", "value"]);
          (this._loop = t.loop),
            (this.callback = t.callback),
            (this.value = t.value),
            (this._loopStart = this.toTicks(t.loopStart)),
            (this._loopEnd = this.toTicks(t.loopEnd)),
            (this._playbackRate = t.playbackRate),
            (this._probability = t.probability),
            (this._humanize = t.humanize),
            (this.mute = t.mute),
            (this._playbackRate = t.playbackRate),
            (this._state.increasing = !0),
            this._rescheduleEvents();
        }
        static getDefaults() {
          return Object.assign(uc.getDefaults(), {
            callback: qa,
            humanize: !1,
            loop: !1,
            loopEnd: "1m",
            loopStart: 0,
            mute: !1,
            playbackRate: 1,
            probability: 1,
            value: null,
          });
        }
        _rescheduleEvents(t = -1) {
          this._state.forEachFrom(t, (t) => {
            let e;
            if ("started" === t.state) {
              -1 !== t.id && this.context.transport.clear(t.id);
              const n =
                t.time + Math.round(this.startOffset / this._playbackRate);
              if (!0 === this._loop || (Yo(this._loop) && this._loop > 1)) {
                (e = 1 / 0),
                  Yo(this._loop) && (e = this._loop * this._getLoopDuration());
                const s = this._state.getAfter(n);
                null !== s && (e = Math.min(e, s.time - n)),
                  e !== 1 / 0 &&
                    (this._state.setStateAtTime("stopped", n + e + 1, {
                      id: -1,
                    }),
                    (e = new Sc(this.context, e)));
                const i = new Sc(this.context, this._getLoopDuration());
                t.id = this.context.transport.scheduleRepeat(
                  this._tick.bind(this),
                  i,
                  new Sc(this.context, n),
                  e
                );
              } else
                t.id = this.context.transport.schedule(
                  this._tick.bind(this),
                  new Sc(this.context, n)
                );
            }
          });
        }
        get state() {
          return this._state.getValueAtTime(this.context.transport.ticks);
        }
        get startOffset() {
          return this._startOffset;
        }
        set startOffset(t) {
          this._startOffset = t;
        }
        get probability() {
          return this._probability;
        }
        set probability(t) {
          this._probability = t;
        }
        get humanize() {
          return this._humanize;
        }
        set humanize(t) {
          this._humanize = t;
        }
        start(t) {
          const e = this.toTicks(t);
          return (
            "stopped" === this._state.getValueAtTime(e) &&
              (this._state.add({ id: -1, state: "started", time: e }),
              this._rescheduleEvents(e)),
            this
          );
        }
        stop(t) {
          this.cancel(t);
          const e = this.toTicks(t);
          if ("started" === this._state.getValueAtTime(e)) {
            this._state.setStateAtTime("stopped", e, { id: -1 });
            const t = this._state.getBefore(e);
            let n = e;
            null !== t && (n = t.time), this._rescheduleEvents(n);
          }
          return this;
        }
        cancel(t) {
          t = va(t, -1 / 0);
          const e = this.toTicks(t);
          return (
            this._state.forEachFrom(e, (t) => {
              this.context.transport.clear(t.id);
            }),
            this._state.cancel(e),
            this
          );
        }
        _tick(t) {
          const e = this.context.transport.getTicksAtTime(t);
          if (!this.mute && "started" === this._state.getValueAtTime(e)) {
            if (this.probability < 1 && Math.random() > this.probability)
              return;
            if (this.humanize) {
              let e = 0.02;
              Zo(this.humanize) || (e = this.toSeconds(this.humanize)),
                (t += (2 * Math.random() - 1) * e);
            }
            this.callback(t, this.value);
          }
        }
        _getLoopDuration() {
          return Math.round(
            (this._loopEnd - this._loopStart) / this._playbackRate
          );
        }
        get loop() {
          return this._loop;
        }
        set loop(t) {
          (this._loop = t), this._rescheduleEvents();
        }
        get playbackRate() {
          return this._playbackRate;
        }
        set playbackRate(t) {
          (this._playbackRate = t), this._rescheduleEvents();
        }
        get loopEnd() {
          return new Sc(this.context, this._loopEnd).toSeconds();
        }
        set loopEnd(t) {
          (this._loopEnd = this.toTicks(t)),
            this._loop && this._rescheduleEvents();
        }
        get loopStart() {
          return new Sc(this.context, this._loopStart).toSeconds();
        }
        set loopStart(t) {
          (this._loopStart = this.toTicks(t)),
            this._loop && this._rescheduleEvents();
        }
        get progress() {
          if (this._loop) {
            const t = this.context.transport.ticks,
              e = this._state.get(t);
            if (null !== e && "started" === e.state) {
              const n = this._getLoopDuration(),
                s = (t - e.time) % n;
              return s / n;
            }
            return 0;
          }
          return 0;
        }
        dispose() {
          return super.dispose(), this.cancel(), this._state.dispose(), this;
        }
      }
      class vu extends uc {
        constructor() {
          super(ga(vu.getDefaults(), arguments, ["callback", "interval"])),
            (this.name = "Loop");
          const t = ga(vu.getDefaults(), arguments, ["callback", "interval"]);
          (this._event = new _u({
            context: this.context,
            callback: this._tick.bind(this),
            loop: !0,
            loopEnd: t.interval,
            playbackRate: t.playbackRate,
            probability: t.probability,
          })),
            (this.callback = t.callback),
            (this.iterations = t.iterations);
        }
        static getDefaults() {
          return Object.assign(uc.getDefaults(), {
            interval: "4n",
            callback: qa,
            playbackRate: 1,
            iterations: 1 / 0,
            probability: 1,
            mute: !1,
            humanize: !1,
          });
        }
        start(t) {
          return this._event.start(t), this;
        }
        stop(t) {
          return this._event.stop(t), this;
        }
        cancel(t) {
          return this._event.cancel(t), this;
        }
        _tick(t) {
          this.callback(t);
        }
        get state() {
          return this._event.state;
        }
        get progress() {
          return this._event.progress;
        }
        get interval() {
          return this._event.loopEnd;
        }
        set interval(t) {
          this._event.loopEnd = t;
        }
        get playbackRate() {
          return this._event.playbackRate;
        }
        set playbackRate(t) {
          this._event.playbackRate = t;
        }
        get humanize() {
          return this._event.humanize;
        }
        set humanize(t) {
          this._event.humanize = t;
        }
        get probability() {
          return this._event.probability;
        }
        set probability(t) {
          this._event.probability = t;
        }
        get mute() {
          return this._event.mute;
        }
        set mute(t) {
          this._event.mute = t;
        }
        get iterations() {
          return !0 === this._event.loop ? 1 / 0 : this._event.loop;
        }
        set iterations(t) {
          this._event.loop = t === 1 / 0 || t;
        }
        dispose() {
          return super.dispose(), this._event.dispose(), this;
        }
      }
      function* yu(t) {
        let e = 0;
        while (e < t.length) (e = xu(e, t)), yield t[e], e++;
      }
      function* bu(t) {
        let e = t.length - 1;
        while (e >= 0) (e = xu(e, t)), yield t[e], e--;
      }
      function* wu(t, e) {
        while (1) yield* e(t);
      }
      function xu(t, e) {
        return Sa(t, 0, e.length - 1);
      }
      function* Tu(t, e) {
        let n = e ? 0 : t.length - 1;
        while (1)
          (n = xu(n, t)),
            yield t[n],
            e
              ? (n++, n >= t.length - 1 && (e = !1))
              : (n--, n <= 0 && (e = !0));
      }
      function* Ou(t) {
        let e = 0,
          n = 0;
        while (e < t.length)
          (e = xu(e, t)), yield t[e], n++, (e += n % 2 ? 2 : -1);
      }
      function* Cu(t) {
        let e = t.length - 1,
          n = 0;
        while (e >= 0) (e = xu(e, t)), yield t[e], n++, (e += n % 2 ? -2 : 1);
      }
      function* Su(t) {
        while (1) {
          const e = Math.floor(Math.random() * t.length);
          yield t[e];
        }
      }
      function* Au(t) {
        const e = [];
        for (let n = 0; n < t.length; n++) e.push(n);
        while (e.length > 0) {
          const n = e.splice(Math.floor(e.length * Math.random()), 1),
            s = xu(n[0], t);
          yield t[s];
        }
      }
      function* ku(t) {
        let e = Math.floor(Math.random() * t.length);
        while (1)
          0 === e ? e++ : e === t.length - 1 || Math.random() < 0.5 ? e-- : e++,
            yield t[e];
      }
      function* Eu(t, e = "up", n = 0) {
        switch (
          (Lo(t.length > 0, "The array must have more than one value in it"), e)
        ) {
          case "up":
            yield* wu(t, yu);
          case "down":
            yield* wu(t, bu);
          case "upDown":
            yield* Tu(t, !0);
          case "downUp":
            yield* Tu(t, !1);
          case "alternateUp":
            yield* wu(t, Ou);
          case "alternateDown":
            yield* wu(t, Cu);
          case "random":
            yield* Su(t);
          case "randomOnce":
            yield* wu(t, Au);
          case "randomWalk":
            yield* ku(t);
        }
      }
      class Mu extends vu {
        constructor() {
          super(
            ga(Mu.getDefaults(), arguments, ["callback", "values", "pattern"])
          ),
            (this.name = "Pattern");
          const t = ga(Mu.getDefaults(), arguments, [
            "callback",
            "values",
            "pattern",
          ]);
          (this.callback = t.callback),
            (this._values = t.values),
            (this._pattern = Eu(t.values, t.pattern)),
            (this._type = t.pattern);
        }
        static getDefaults() {
          return Object.assign(vu.getDefaults(), {
            pattern: "up",
            values: [],
            callback: qa,
          });
        }
        _tick(t) {
          const e = this._pattern.next();
          (this._value = e.value), this.callback(t, this._value);
        }
        get values() {
          return this._values;
        }
        set values(t) {
          (this._values = t), (this.pattern = this._type);
        }
        get value() {
          return this._value;
        }
        get pattern() {
          return this._type;
        }
        set pattern(t) {
          (this._type = t), (this._pattern = Eu(this._values, this._type));
        }
      }
      class ju extends pc {
        constructor() {
          super(Object.assign(ga(ju.getDefaults(), arguments, ["pan"]))),
            (this.name = "Panner"),
            (this._panner = this.context.createStereoPanner()),
            (this.input = this._panner),
            (this.output = this._panner);
          const t = ga(ju.getDefaults(), arguments, ["pan"]);
          (this.pan = new hc({
            context: this.context,
            param: this._panner.pan,
            value: t.pan,
            minValue: -1,
            maxValue: 1,
          })),
            (this._panner.channelCount = t.channelCount),
            (this._panner.channelCountMode = "explicit"),
            Fa(this, "pan");
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), { pan: 0, channelCount: 1 });
        }
        dispose() {
          return (
            super.dispose(), this._panner.disconnect(), this.pan.dispose(), this
          );
        }
      }
      const Iu = "bit-crusher",
        Du =
          "\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: \"bits\",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 16,\n\t\t\t\tautomationRate: 'k-rate'\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n";
      lu(Iu, Du);
      class Ru extends pc {
        constructor() {
          super(ga(Ru.getDefaults(), arguments, ["solo"])),
            (this.name = "Solo");
          const t = ga(Ru.getDefaults(), arguments, ["solo"]);
          (this.input = this.output = new gc({ context: this.context })),
            Ru._allSolos.has(this.context) ||
              Ru._allSolos.set(this.context, new Set()),
            Ru._allSolos.get(this.context).add(this),
            (this.solo = t.solo);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), { solo: !1 });
        }
        get solo() {
          return this._isSoloed();
        }
        set solo(t) {
          t ? this._addSolo() : this._removeSolo(),
            Ru._allSolos.get(this.context).forEach((t) => t._updateSolo());
        }
        get muted() {
          return 0 === this.input.gain.value;
        }
        _addSolo() {
          Ru._soloed.has(this.context) ||
            Ru._soloed.set(this.context, new Set()),
            Ru._soloed.get(this.context).add(this);
        }
        _removeSolo() {
          Ru._soloed.has(this.context) &&
            Ru._soloed.get(this.context).delete(this);
        }
        _isSoloed() {
          return (
            Ru._soloed.has(this.context) &&
            Ru._soloed.get(this.context).has(this)
          );
        }
        _noSolos() {
          return (
            !Ru._soloed.has(this.context) ||
            (Ru._soloed.has(this.context) &&
              0 === Ru._soloed.get(this.context).size)
          );
        }
        _updateSolo() {
          this._isSoloed() || this._noSolos()
            ? (this.input.gain.value = 1)
            : (this.input.gain.value = 0);
        }
        dispose() {
          return (
            super.dispose(),
            Ru._allSolos.get(this.context).delete(this),
            this._removeSolo(),
            this
          );
        }
      }
      (Ru._allSolos = new Map()), (Ru._soloed = new Map());
      class Nu extends pc {
        constructor() {
          super(ga(Nu.getDefaults(), arguments, ["pan", "volume"])),
            (this.name = "PanVol");
          const t = ga(Nu.getDefaults(), arguments, ["pan", "volume"]);
          (this._panner = this.input =
            new ju({
              context: this.context,
              pan: t.pan,
              channelCount: t.channelCount,
            })),
            (this.pan = this._panner.pan),
            (this._volume = this.output =
              new Mc({ context: this.context, volume: t.volume })),
            (this.volume = this._volume.volume),
            this._panner.connect(this._volume),
            (this.mute = t.mute),
            Fa(this, ["pan", "volume"]);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            mute: !1,
            pan: 0,
            volume: 0,
            channelCount: 1,
          });
        }
        get mute() {
          return this._volume.mute;
        }
        set mute(t) {
          this._volume.mute = t;
        }
        dispose() {
          return (
            super.dispose(),
            this._panner.dispose(),
            this.pan.dispose(),
            this._volume.dispose(),
            this.volume.dispose(),
            this
          );
        }
      }
      class Pu extends pc {
        constructor() {
          super(ga(Pu.getDefaults(), arguments, ["volume", "pan"])),
            (this.name = "Channel");
          const t = ga(Pu.getDefaults(), arguments, ["volume", "pan"]);
          (this._solo = this.input =
            new Ru({ solo: t.solo, context: this.context })),
            (this._panVol = this.output =
              new Nu({
                context: this.context,
                pan: t.pan,
                volume: t.volume,
                mute: t.mute,
                channelCount: t.channelCount,
              })),
            (this.pan = this._panVol.pan),
            (this.volume = this._panVol.volume),
            this._solo.connect(this._panVol),
            Fa(this, ["pan", "volume"]);
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            pan: 0,
            volume: 0,
            mute: !1,
            solo: !1,
            channelCount: 1,
          });
        }
        get solo() {
          return this._solo.solo;
        }
        set solo(t) {
          this._solo.solo = t;
        }
        get muted() {
          return this._solo.muted || this.mute;
        }
        get mute() {
          return this._panVol.mute;
        }
        set mute(t) {
          this._panVol.mute = t;
        }
        _getBus(t) {
          return (
            Pu.buses.has(t) ||
              Pu.buses.set(t, new gc({ context: this.context })),
            Pu.buses.get(t)
          );
        }
        send(t, e = 0) {
          const n = this._getBus(t),
            s = new gc({ context: this.context, units: "decibels", gain: e });
          return this.connect(s), s.connect(n), s;
        }
        receive(t) {
          const e = this._getBus(t);
          return e.connect(this), this;
        }
        dispose() {
          return (
            super.dispose(),
            this._panVol.dispose(),
            this.pan.dispose(),
            this.volume.dispose(),
            this._solo.dispose(),
            this
          );
        }
      }
      Pu.buses = new Map();
      class Vu extends pc {
        constructor() {
          super(...arguments),
            (this.name = "Listener"),
            (this.positionX = new hc({
              context: this.context,
              param: this.context.rawContext.listener.positionX,
            })),
            (this.positionY = new hc({
              context: this.context,
              param: this.context.rawContext.listener.positionY,
            })),
            (this.positionZ = new hc({
              context: this.context,
              param: this.context.rawContext.listener.positionZ,
            })),
            (this.forwardX = new hc({
              context: this.context,
              param: this.context.rawContext.listener.forwardX,
            })),
            (this.forwardY = new hc({
              context: this.context,
              param: this.context.rawContext.listener.forwardY,
            })),
            (this.forwardZ = new hc({
              context: this.context,
              param: this.context.rawContext.listener.forwardZ,
            })),
            (this.upX = new hc({
              context: this.context,
              param: this.context.rawContext.listener.upX,
            })),
            (this.upY = new hc({
              context: this.context,
              param: this.context.rawContext.listener.upY,
            })),
            (this.upZ = new hc({
              context: this.context,
              param: this.context.rawContext.listener.upZ,
            }));
        }
        static getDefaults() {
          return Object.assign(pc.getDefaults(), {
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            forwardX: 0,
            forwardY: 0,
            forwardZ: -1,
            upX: 0,
            upY: 1,
            upZ: 0,
          });
        }
        dispose() {
          return (
            super.dispose(),
            this.positionX.dispose(),
            this.positionY.dispose(),
            this.positionZ.dispose(),
            this.forwardX.dispose(),
            this.forwardY.dispose(),
            this.forwardZ.dispose(),
            this.upX.dispose(),
            this.upY.dispose(),
            this.upZ.dispose(),
            this
          );
        }
      }
      Ea((t) => {
        t.listener = new Vu({ context: t });
      }),
        Ia((t) => {
          t.listener.dispose();
        });
      const Fu = Ga().transport;
      Ga().destination, Ga().destination;
      Ga().listener;
      Ga().draw;
      Ga();
    },
    "605d": function (t, e, n) {
      var s = n("c6b6"),
        i = n("da84");
      t.exports = "process" == s(i.process);
    },
    6069: function (t, e) {
      t.exports = "object" == typeof window;
    },
    "60da": function (t, e, n) {
      "use strict";
      var s = n("83ab"),
        i = n("d039"),
        r = n("df75"),
        o = n("7418"),
        a = n("d1e7"),
        c = n("7b0b"),
        u = n("44ad"),
        l = Object.assign,
        h = Object.defineProperty;
      t.exports =
        !l ||
        i(function () {
          if (
            s &&
            1 !==
              l(
                { b: 1 },
                l(
                  h({}, "a", {
                    enumerable: !0,
                    get: function () {
                      h(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var t = {},
            e = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
          return (
            (t[n] = 7),
            i.split("").forEach(function (t) {
              e[t] = t;
            }),
            7 != l({}, t)[n] || r(l({}, e)).join("") != i
          );
        })
          ? function (t, e) {
              var n = c(t),
                i = arguments.length,
                l = 1,
                h = o.f,
                p = a.f;
              while (i > l) {
                var d,
                  f = u(arguments[l++]),
                  m = h ? r(f).concat(h(f)) : r(f),
                  g = m.length,
                  _ = 0;
                while (g > _)
                  (d = m[_++]), (s && !p.call(f, d)) || (n[d] = f[d]);
              }
              return n;
            }
          : l;
    },
    6547: function (t, e, n) {
      var s = n("a691"),
        i = n("577e"),
        r = n("1d80"),
        o = function (t) {
          return function (e, n) {
            var o,
              a,
              c = i(r(e)),
              u = s(n),
              l = c.length;
            return u < 0 || u >= l
              ? t
                ? ""
                : void 0
              : ((o = c.charCodeAt(u)),
                o < 55296 ||
                o > 56319 ||
                u + 1 === l ||
                (a = c.charCodeAt(u + 1)) < 56320 ||
                a > 57343
                  ? t
                    ? c.charAt(u)
                    : o
                  : t
                  ? c.slice(u, u + 2)
                  : a - 56320 + ((o - 55296) << 10) + 65536);
          };
        };
      t.exports = { codeAt: o(!1), charAt: o(!0) };
    },
    "65f0": function (t, e, n) {
      var s = n("0b42");
      t.exports = function (t, e) {
        return new (s(t))(0 === e ? 0 : e);
      };
    },
    6613: function (t, e, n) {
      n("fb6a"), n("d3b7"), n("b0c0"), n("a630"), n("3ca3");
      var s = n("5a43");
      function i(t, e) {
        if (t) {
          if ("string" === typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(t, e)
              : void 0
          );
        }
      }
      (t.exports = i),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    "69f3": function (t, e, n) {
      var s,
        i,
        r,
        o = n("7f9a"),
        a = n("da84"),
        c = n("861d"),
        u = n("9112"),
        l = n("5135"),
        h = n("c6cd"),
        p = n("f772"),
        d = n("d012"),
        f = "Object already initialized",
        m = a.WeakMap,
        g = function (t) {
          return r(t) ? i(t) : s(t, {});
        },
        _ = function (t) {
          return function (e) {
            var n;
            if (!c(e) || (n = i(e)).type !== t)
              throw TypeError("Incompatible receiver, " + t + " required");
            return n;
          };
        };
      if (o || h.state) {
        var v = h.state || (h.state = new m()),
          y = v.get,
          b = v.has,
          w = v.set;
        (s = function (t, e) {
          if (b.call(v, t)) throw new TypeError(f);
          return (e.facade = t), w.call(v, t, e), e;
        }),
          (i = function (t) {
            return y.call(v, t) || {};
          }),
          (r = function (t) {
            return b.call(v, t);
          });
      } else {
        var x = p("state");
        (d[x] = !0),
          (s = function (t, e) {
            if (l(t, x)) throw new TypeError(f);
            return (e.facade = t), u(t, x, e), e;
          }),
          (i = function (t) {
            return l(t, x) ? t[x] : {};
          }),
          (r = function (t) {
            return l(t, x);
          });
      }
      t.exports = { set: s, get: i, has: r, enforce: g, getterFor: _ };
    },
    "6eeb": function (t, e, n) {
      var s = n("da84"),
        i = n("9112"),
        r = n("5135"),
        o = n("ce4e"),
        a = n("8925"),
        c = n("69f3"),
        u = c.get,
        l = c.enforce,
        h = String(String).split("String");
      (t.exports = function (t, e, n, a) {
        var c,
          u = !!a && !!a.unsafe,
          p = !!a && !!a.enumerable,
          d = !!a && !!a.noTargetGet;
        "function" == typeof n &&
          ("string" != typeof e || r(n, "name") || i(n, "name", e),
          (c = l(n)),
          c.source || (c.source = h.join("string" == typeof e ? e : ""))),
          t !== s
            ? (u ? !d && t[e] && (p = !0) : delete t[e],
              p ? (t[e] = n) : i(t, e, n))
            : p
            ? (t[e] = n)
            : o(e, n);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && u(this).source) || a(this);
      });
    },
    7418: function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    "746f": function (t, e, n) {
      var s = n("428f"),
        i = n("5135"),
        r = n("e538"),
        o = n("9bf2").f;
      t.exports = function (t) {
        var e = s.Symbol || (s.Symbol = {});
        i(e, t) || o(e, t, { value: r.f(t) });
      };
    },
    7839: function (t, e) {
      t.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    "7a23": function (t, e, n) {
      "use strict";
      n.d(e, "h", function () {
        return s["G"];
      }),
        n.d(e, "i", function () {
          return s["H"];
        }),
        n.d(e, "n", function () {
          return s["J"];
        }),
        n.d(e, "a", function () {
          return Dn;
        }),
        n.d(e, "c", function () {
          return Gn;
        }),
        n.d(e, "d", function () {
          return zn;
        }),
        n.d(e, "e", function () {
          return Qn;
        }),
        n.d(e, "f", function () {
          return ss;
        }),
        n.d(e, "g", function () {
          return Jn;
        }),
        n.d(e, "j", function () {
          return Ln;
        }),
        n.d(e, "k", function () {
          return Xt;
        }),
        n.d(e, "l", function () {
          return Yt;
        }),
        n.d(e, "m", function () {
          return En;
        }),
        n.d(e, "b", function () {
          return hr;
        });
      var s = n("9ff4");
      let i;
      const r = [];
      class o {
        constructor(t = !1) {
          (this.active = !0),
            (this.effects = []),
            (this.cleanups = []),
            !t &&
              i &&
              ((this.parent = i),
              (this.index = (i.scopes || (i.scopes = [])).push(this) - 1));
        }
        run(t) {
          if (this.active)
            try {
              return this.on(), t();
            } finally {
              this.off();
            }
          else 0;
        }
        on() {
          this.active && (r.push(this), (i = this));
        }
        off() {
          this.active && (r.pop(), (i = r[r.length - 1]));
        }
        stop(t) {
          if (this.active) {
            if (
              (this.effects.forEach((t) => t.stop()),
              this.cleanups.forEach((t) => t()),
              this.scopes && this.scopes.forEach((t) => t.stop(!0)),
              this.parent && !t)
            ) {
              const t = this.parent.scopes.pop();
              t &&
                t !== this &&
                ((this.parent.scopes[this.index] = t), (t.index = this.index));
            }
            this.active = !1;
          }
        }
      }
      function a(t, e) {
        (e = e || i), e && e.active && e.effects.push(t);
      }
      const c = (t) => {
          const e = new Set(t);
          return (e.w = 0), (e.n = 0), e;
        },
        u = (t) => (t.w & m) > 0,
        l = (t) => (t.n & m) > 0,
        h = ({ deps: t }) => {
          if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= m;
        },
        p = (t) => {
          const { deps: e } = t;
          if (e.length) {
            let n = 0;
            for (let s = 0; s < e.length; s++) {
              const i = e[s];
              u(i) && !l(i) ? i.delete(t) : (e[n++] = i),
                (i.w &= ~m),
                (i.n &= ~m);
            }
            e.length = n;
          }
        },
        d = new WeakMap();
      let f = 0,
        m = 1;
      const g = 30,
        _ = [];
      let v;
      const y = Symbol(""),
        b = Symbol("");
      class w {
        constructor(t, e = null, n) {
          (this.fn = t),
            (this.scheduler = e),
            (this.active = !0),
            (this.deps = []),
            a(this, n);
        }
        run() {
          if (!this.active) return this.fn();
          if (!_.includes(this))
            try {
              return (
                _.push((v = this)),
                S(),
                (m = 1 << ++f),
                f <= g ? h(this) : x(this),
                this.fn()
              );
            } finally {
              f <= g && p(this), (m = 1 << --f), A(), _.pop();
              const t = _.length;
              v = t > 0 ? _[t - 1] : void 0;
            }
        }
        stop() {
          this.active &&
            (x(this), this.onStop && this.onStop(), (this.active = !1));
        }
      }
      function x(t) {
        const { deps: e } = t;
        if (e.length) {
          for (let n = 0; n < e.length; n++) e[n].delete(t);
          e.length = 0;
        }
      }
      let T = !0;
      const O = [];
      function C() {
        O.push(T), (T = !1);
      }
      function S() {
        O.push(T), (T = !0);
      }
      function A() {
        const t = O.pop();
        T = void 0 === t || t;
      }
      function k(t, e, n) {
        if (!E()) return;
        let s = d.get(t);
        s || d.set(t, (s = new Map()));
        let i = s.get(n);
        i || s.set(n, (i = c()));
        const r = void 0;
        M(i, r);
      }
      function E() {
        return T && void 0 !== v;
      }
      function M(t, e) {
        let n = !1;
        f <= g ? l(t) || ((t.n |= m), (n = !u(t))) : (n = !t.has(v)),
          n && (t.add(v), v.deps.push(t));
      }
      function j(t, e, n, i, r, o) {
        const a = d.get(t);
        if (!a) return;
        let u = [];
        if ("clear" === e) u = [...a.values()];
        else if ("length" === n && Object(s["m"])(t))
          a.forEach((t, e) => {
            ("length" === e || e >= i) && u.push(t);
          });
        else
          switch ((void 0 !== n && u.push(a.get(n)), e)) {
            case "add":
              Object(s["m"])(t)
                ? Object(s["q"])(n) && u.push(a.get("length"))
                : (u.push(a.get(y)), Object(s["r"])(t) && u.push(a.get(b)));
              break;
            case "delete":
              Object(s["m"])(t) ||
                (u.push(a.get(y)), Object(s["r"])(t) && u.push(a.get(b)));
              break;
            case "set":
              Object(s["r"])(t) && u.push(a.get(y));
              break;
          }
        if (1 === u.length) u[0] && I(u[0]);
        else {
          const t = [];
          for (const e of u) e && t.push(...e);
          I(c(t));
        }
      }
      function I(t, e) {
        for (const n of Object(s["m"])(t) ? t : [...t])
          (n !== v || n.allowRecurse) &&
            (n.scheduler ? n.scheduler() : n.run());
      }
      const D = Object(s["F"])("__proto__,__v_isRef,__isVue"),
        R = new Set(
          Object.getOwnPropertyNames(Symbol)
            .map((t) => Symbol[t])
            .filter(s["C"])
        ),
        N = q(),
        P = q(!1, !0),
        V = q(!0),
        F = L();
      function L() {
        const t = {};
        return (
          ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
            t[e] = function (...t) {
              const n = It(this);
              for (let e = 0, i = this.length; e < i; e++) k(n, "get", e + "");
              const s = n[e](...t);
              return -1 === s || !1 === s ? n[e](...t.map(It)) : s;
            };
          }),
          ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
            t[e] = function (...t) {
              C();
              const n = It(this)[e].apply(this, t);
              return A(), n;
            };
          }),
          t
        );
      }
      function q(t = !1, e = !1) {
        return function (n, i, r) {
          if ("__v_isReactive" === i) return !t;
          if ("__v_isReadonly" === i) return t;
          if ("__v_raw" === i && r === (t ? (e ? xt : wt) : e ? bt : yt).get(n))
            return n;
          const o = Object(s["m"])(n);
          if (!t && o && Object(s["j"])(F, i)) return Reflect.get(F, i, r);
          const a = Reflect.get(n, i, r);
          if (Object(s["C"])(i) ? R.has(i) : D(i)) return a;
          if ((t || k(n, "get", i), e)) return a;
          if (Pt(a)) {
            const t = !o || !Object(s["q"])(i);
            return t ? a.value : a;
          }
          return Object(s["t"])(a) ? (t ? At(a) : Ct(a)) : a;
        };
      }
      const B = U(),
        W = U(!0);
      function U(t = !1) {
        return function (e, n, i, r) {
          let o = e[n];
          if (
            !t &&
            ((i = It(i)), (o = It(o)), !Object(s["m"])(e) && Pt(o) && !Pt(i))
          )
            return (o.value = i), !0;
          const a =
              Object(s["m"])(e) && Object(s["q"])(n)
                ? Number(n) < e.length
                : Object(s["j"])(e, n),
            c = Reflect.set(e, n, i, r);
          return (
            e === It(r) &&
              (a
                ? Object(s["i"])(i, o) && j(e, "set", n, i, o)
                : j(e, "add", n, i)),
            c
          );
        };
      }
      function z(t, e) {
        const n = Object(s["j"])(t, e),
          i = t[e],
          r = Reflect.deleteProperty(t, e);
        return r && n && j(t, "delete", e, void 0, i), r;
      }
      function G(t, e) {
        const n = Reflect.has(t, e);
        return (Object(s["C"])(e) && R.has(e)) || k(t, "has", e), n;
      }
      function $(t) {
        return (
          k(t, "iterate", Object(s["m"])(t) ? "length" : y), Reflect.ownKeys(t)
        );
      }
      const H = { get: N, set: B, deleteProperty: z, has: G, ownKeys: $ },
        Y = {
          get: V,
          set(t, e) {
            return !0;
          },
          deleteProperty(t, e) {
            return !0;
          },
        },
        X = Object(s["h"])({}, H, { get: P, set: W }),
        Z = (t) => (Object(s["t"])(t) ? Ct(t) : t),
        Q = (t) => (Object(s["t"])(t) ? At(t) : t),
        J = (t) => t,
        K = (t) => Reflect.getPrototypeOf(t);
      function tt(t, e, n = !1, s = !1) {
        t = t["__v_raw"];
        const i = It(t),
          r = It(e);
        e !== r && !n && k(i, "get", e), !n && k(i, "get", r);
        const { has: o } = K(i),
          a = s ? J : n ? Q : Z;
        return o.call(i, e)
          ? a(t.get(e))
          : o.call(i, r)
          ? a(t.get(r))
          : void (t !== i && t.get(e));
      }
      function et(t, e = !1) {
        const n = this["__v_raw"],
          s = It(n),
          i = It(t);
        return (
          t !== i && !e && k(s, "has", t),
          !e && k(s, "has", i),
          t === i ? n.has(t) : n.has(t) || n.has(i)
        );
      }
      function nt(t, e = !1) {
        return (
          (t = t["__v_raw"]),
          !e && k(It(t), "iterate", y),
          Reflect.get(t, "size", t)
        );
      }
      function st(t) {
        t = It(t);
        const e = It(this),
          n = K(e),
          s = n.has.call(e, t);
        return s || (e.add(t), j(e, "add", t, t)), this;
      }
      function it(t, e) {
        e = It(e);
        const n = It(this),
          { has: i, get: r } = K(n);
        let o = i.call(n, t);
        o || ((t = It(t)), (o = i.call(n, t)));
        const a = r.call(n, t);
        return (
          n.set(t, e),
          o ? Object(s["i"])(e, a) && j(n, "set", t, e, a) : j(n, "add", t, e),
          this
        );
      }
      function rt(t) {
        const e = It(this),
          { has: n, get: s } = K(e);
        let i = n.call(e, t);
        i || ((t = It(t)), (i = n.call(e, t)));
        const r = s ? s.call(e, t) : void 0,
          o = e.delete(t);
        return i && j(e, "delete", t, void 0, r), o;
      }
      function ot() {
        const t = It(this),
          e = 0 !== t.size,
          n = void 0,
          s = t.clear();
        return e && j(t, "clear", void 0, void 0, n), s;
      }
      function at(t, e) {
        return function (n, s) {
          const i = this,
            r = i["__v_raw"],
            o = It(r),
            a = e ? J : t ? Q : Z;
          return (
            !t && k(o, "iterate", y),
            r.forEach((t, e) => n.call(s, a(t), a(e), i))
          );
        };
      }
      function ct(t, e, n) {
        return function (...i) {
          const r = this["__v_raw"],
            o = It(r),
            a = Object(s["r"])(o),
            c = "entries" === t || (t === Symbol.iterator && a),
            u = "keys" === t && a,
            l = r[t](...i),
            h = n ? J : e ? Q : Z;
          return (
            !e && k(o, "iterate", u ? b : y),
            {
              next() {
                const { value: t, done: e } = l.next();
                return e
                  ? { value: t, done: e }
                  : { value: c ? [h(t[0]), h(t[1])] : h(t), done: e };
              },
              [Symbol.iterator]() {
                return this;
              },
            }
          );
        };
      }
      function ut(t) {
        return function (...e) {
          return "delete" !== t && this;
        };
      }
      function lt() {
        const t = {
            get(t) {
              return tt(this, t);
            },
            get size() {
              return nt(this);
            },
            has: et,
            add: st,
            set: it,
            delete: rt,
            clear: ot,
            forEach: at(!1, !1),
          },
          e = {
            get(t) {
              return tt(this, t, !1, !0);
            },
            get size() {
              return nt(this);
            },
            has: et,
            add: st,
            set: it,
            delete: rt,
            clear: ot,
            forEach: at(!1, !0),
          },
          n = {
            get(t) {
              return tt(this, t, !0);
            },
            get size() {
              return nt(this, !0);
            },
            has(t) {
              return et.call(this, t, !0);
            },
            add: ut("add"),
            set: ut("set"),
            delete: ut("delete"),
            clear: ut("clear"),
            forEach: at(!0, !1),
          },
          s = {
            get(t) {
              return tt(this, t, !0, !0);
            },
            get size() {
              return nt(this, !0);
            },
            has(t) {
              return et.call(this, t, !0);
            },
            add: ut("add"),
            set: ut("set"),
            delete: ut("delete"),
            clear: ut("clear"),
            forEach: at(!0, !0),
          },
          i = ["keys", "values", "entries", Symbol.iterator];
        return (
          i.forEach((i) => {
            (t[i] = ct(i, !1, !1)),
              (n[i] = ct(i, !0, !1)),
              (e[i] = ct(i, !1, !0)),
              (s[i] = ct(i, !0, !0));
          }),
          [t, n, e, s]
        );
      }
      const [ht, pt, dt, ft] = lt();
      function mt(t, e) {
        const n = e ? (t ? ft : dt) : t ? pt : ht;
        return (e, i, r) =>
          "__v_isReactive" === i
            ? !t
            : "__v_isReadonly" === i
            ? t
            : "__v_raw" === i
            ? e
            : Reflect.get(Object(s["j"])(n, i) && i in e ? n : e, i, r);
      }
      const gt = { get: mt(!1, !1) },
        _t = { get: mt(!1, !0) },
        vt = { get: mt(!0, !1) };
      const yt = new WeakMap(),
        bt = new WeakMap(),
        wt = new WeakMap(),
        xt = new WeakMap();
      function Tt(t) {
        switch (t) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }
      function Ot(t) {
        return t["__v_skip"] || !Object.isExtensible(t)
          ? 0
          : Tt(Object(s["M"])(t));
      }
      function Ct(t) {
        return t && t["__v_isReadonly"] ? t : kt(t, !1, H, gt, yt);
      }
      function St(t) {
        return kt(t, !1, X, _t, bt);
      }
      function At(t) {
        return kt(t, !0, Y, vt, wt);
      }
      function kt(t, e, n, i, r) {
        if (!Object(s["t"])(t)) return t;
        if (t["__v_raw"] && (!e || !t["__v_isReactive"])) return t;
        const o = r.get(t);
        if (o) return o;
        const a = Ot(t);
        if (0 === a) return t;
        const c = new Proxy(t, 2 === a ? i : n);
        return r.set(t, c), c;
      }
      function Et(t) {
        return Mt(t) ? Et(t["__v_raw"]) : !(!t || !t["__v_isReactive"]);
      }
      function Mt(t) {
        return !(!t || !t["__v_isReadonly"]);
      }
      function jt(t) {
        return Et(t) || Mt(t);
      }
      function It(t) {
        const e = t && t["__v_raw"];
        return e ? It(e) : t;
      }
      function Dt(t) {
        return Object(s["g"])(t, "__v_skip", !0), t;
      }
      function Rt(t) {
        E() && ((t = It(t)), t.dep || (t.dep = c()), M(t.dep));
      }
      function Nt(t, e) {
        (t = It(t)), t.dep && I(t.dep);
      }
      function Pt(t) {
        return Boolean(t && !0 === t.__v_isRef);
      }
      function Vt(t) {
        return Pt(t) ? t.value : t;
      }
      const Ft = {
        get: (t, e, n) => Vt(Reflect.get(t, e, n)),
        set: (t, e, n, s) => {
          const i = t[e];
          return Pt(i) && !Pt(n)
            ? ((i.value = n), !0)
            : Reflect.set(t, e, n, s);
        },
      };
      function Lt(t) {
        return Et(t) ? t : new Proxy(t, Ft);
      }
      class qt {
        constructor(t, e, n) {
          (this._setter = e),
            (this.dep = void 0),
            (this._dirty = !0),
            (this.__v_isRef = !0),
            (this.effect = new w(t, () => {
              this._dirty || ((this._dirty = !0), Nt(this));
            })),
            (this["__v_isReadonly"] = n);
        }
        get value() {
          const t = It(this);
          return (
            Rt(t),
            t._dirty && ((t._dirty = !1), (t._value = t.effect.run())),
            t._value
          );
        }
        set value(t) {
          this._setter(t);
        }
      }
      function Bt(t, e) {
        let n, i;
        Object(s["n"])(t)
          ? ((n = t), (i = s["d"]))
          : ((n = t.get), (i = t.set));
        const r = new qt(n, i, Object(s["n"])(t) || !t.set);
        return r;
      }
      Promise.resolve();
      new Set();
      new Map();
      Object.create(null), Object.create(null);
      function Wt(t, e, ...n) {
        const i = t.vnode.props || s["b"];
        let r = n;
        const o = e.startsWith("update:"),
          a = o && e.slice(7);
        if (a && a in i) {
          const t = ("modelValue" === a ? "model" : a) + "Modifiers",
            { number: e, trim: o } = i[t] || s["b"];
          o ? (r = n.map((t) => t.trim())) : e && (r = n.map(s["L"]));
        }
        let c;
        let u =
          i[(c = Object(s["K"])(e))] ||
          i[(c = Object(s["K"])(Object(s["e"])(e)))];
        !u && o && (u = i[(c = Object(s["K"])(Object(s["k"])(e)))]),
          u && Is(u, t, 6, r);
        const l = i[c + "Once"];
        if (l) {
          if (t.emitted) {
            if (t.emitted[c]) return;
          } else t.emitted = {};
          (t.emitted[c] = !0), Is(l, t, 6, r);
        }
      }
      function Ut(t, e, n = !1) {
        const i = e.emitsCache,
          r = i.get(t);
        if (void 0 !== r) return r;
        const o = t.emits;
        let a = {},
          c = !1;
        if (!Object(s["n"])(t)) {
          const i = (t) => {
            const n = Ut(t, e, !0);
            n && ((c = !0), Object(s["h"])(a, n));
          };
          !n && e.mixins.length && e.mixins.forEach(i),
            t.extends && i(t.extends),
            t.mixins && t.mixins.forEach(i);
        }
        return o || c
          ? (Object(s["m"])(o)
              ? o.forEach((t) => (a[t] = null))
              : Object(s["h"])(a, o),
            i.set(t, a),
            a)
          : (i.set(t, null), null);
      }
      function zt(t, e) {
        return (
          !(!t || !Object(s["u"])(e)) &&
          ((e = e.slice(2).replace(/Once$/, "")),
          Object(s["j"])(t, e[0].toLowerCase() + e.slice(1)) ||
            Object(s["j"])(t, Object(s["k"])(e)) ||
            Object(s["j"])(t, e))
        );
      }
      let Gt = null,
        $t = null;
      function Ht(t) {
        const e = Gt;
        return (Gt = t), ($t = (t && t.type.__scopeId) || null), e;
      }
      function Yt(t) {
        $t = t;
      }
      function Xt() {
        $t = null;
      }
      function Zt(t, e = Gt, n) {
        if (!e) return t;
        if (t._n) return t;
        const s = (...n) => {
          s._d && Wn(-1);
          const i = Ht(e),
            r = t(...n);
          return Ht(i), s._d && Wn(1), r;
        };
        return (s._n = !0), (s._c = !0), (s._d = !0), s;
      }
      function Qt(t) {
        const {
          type: e,
          vnode: n,
          proxy: i,
          withProxy: r,
          props: o,
          propsOptions: [a],
          slots: c,
          attrs: u,
          emit: l,
          render: h,
          renderCache: p,
          data: d,
          setupState: f,
          ctx: m,
          inheritAttrs: g,
        } = t;
        let _;
        const v = Ht(t);
        try {
          let t;
          if (4 & n.shapeFlag) {
            const e = r || i;
            (_ = is(h.call(e, e, p, o, f, d, m))), (t = u);
          } else {
            const n = e;
            0,
              (_ = is(
                n.length > 1
                  ? n(o, { attrs: u, slots: c, emit: l })
                  : n(o, null)
              )),
              (t = e.props ? u : Jt(u));
          }
          let v = _;
          if (t && !1 !== g) {
            const e = Object.keys(t),
              { shapeFlag: n } = v;
            e.length &&
              (1 & n || 6 & n) &&
              (a && e.some(s["s"]) && (t = Kt(t, a)), (v = es(v, t)));
          }
          0,
            n.dirs && (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs),
            n.transition && (v.transition = n.transition),
            (_ = v);
        } catch (y) {
          (Vn.length = 0), Ds(y, t, 1), (_ = Jn(Nn));
        }
        return Ht(v), _;
      }
      const Jt = (t) => {
          let e;
          for (const n in t)
            ("class" === n || "style" === n || Object(s["u"])(n)) &&
              ((e || (e = {}))[n] = t[n]);
          return e;
        },
        Kt = (t, e) => {
          const n = {};
          for (const i in t)
            (Object(s["s"])(i) && i.slice(9) in e) || (n[i] = t[i]);
          return n;
        };
      function te(t, e, n) {
        const { props: s, children: i, component: r } = t,
          { props: o, children: a, patchFlag: c } = e,
          u = r.emitsOptions;
        if (e.dirs || e.transition) return !0;
        if (!(n && c >= 0))
          return (
            !((!i && !a) || (a && a.$stable)) ||
            (s !== o && (s ? !o || ee(s, o, u) : !!o))
          );
        if (1024 & c) return !0;
        if (16 & c) return s ? ee(s, o, u) : !!o;
        if (8 & c) {
          const t = e.dynamicProps;
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (o[n] !== s[n] && !zt(u, n)) return !0;
          }
        }
        return !1;
      }
      function ee(t, e, n) {
        const s = Object.keys(e);
        if (s.length !== Object.keys(t).length) return !0;
        for (let i = 0; i < s.length; i++) {
          const r = s[i];
          if (e[r] !== t[r] && !zt(n, r)) return !0;
        }
        return !1;
      }
      function ne({ vnode: t, parent: e }, n) {
        while (e && e.subTree === t) ((t = e.vnode).el = n), (e = e.parent);
      }
      const se = (t) => t.__isSuspense;
      function ie(t, e) {
        e && e.pendingBranch
          ? Object(s["m"])(t)
            ? e.effects.push(...t)
            : e.effects.push(t)
          : ei(t);
      }
      function re(t, e) {
        if (fs) {
          let n = fs.provides;
          const s = fs.parent && fs.parent.provides;
          s === n && (n = fs.provides = Object.create(s)), (n[t] = e);
        } else 0;
      }
      function oe(t, e, n = !1) {
        const i = fs || Gt;
        if (i) {
          const r =
            null == i.parent
              ? i.vnode.appContext && i.vnode.appContext.provides
              : i.parent.provides;
          if (r && t in r) return r[t];
          if (arguments.length > 1)
            return n && Object(s["n"])(e) ? e.call(i.proxy) : e;
        } else 0;
      }
      function ae() {
        const t = {
          isMounted: !1,
          isLeaving: !1,
          isUnmounting: !1,
          leavingVNodes: new Map(),
        };
        return (
          Ee(() => {
            t.isMounted = !0;
          }),
          Ie(() => {
            t.isUnmounting = !0;
          }),
          t
        );
      }
      const ce = [Function, Array],
        ue = {
          name: "BaseTransition",
          props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: ce,
            onEnter: ce,
            onAfterEnter: ce,
            onEnterCancelled: ce,
            onBeforeLeave: ce,
            onLeave: ce,
            onAfterLeave: ce,
            onLeaveCancelled: ce,
            onBeforeAppear: ce,
            onAppear: ce,
            onAfterAppear: ce,
            onAppearCancelled: ce,
          },
          setup(t, { slots: e }) {
            const n = ms(),
              s = ae();
            let i;
            return () => {
              const r = e.default && ge(e.default(), !0);
              if (!r || !r.length) return;
              const o = It(t),
                { mode: a } = o;
              const c = r[0];
              if (s.isLeaving) return de(c);
              const u = fe(c);
              if (!u) return de(c);
              const l = pe(u, o, s, n);
              me(u, l);
              const h = n.subTree,
                p = h && fe(h);
              let d = !1;
              const { getTransitionKey: f } = u.type;
              if (f) {
                const t = f();
                void 0 === i ? (i = t) : t !== i && ((i = t), (d = !0));
              }
              if (p && p.type !== Nn && (!Hn(u, p) || d)) {
                const t = pe(p, o, s, n);
                if ((me(p, t), "out-in" === a))
                  return (
                    (s.isLeaving = !0),
                    (t.afterLeave = () => {
                      (s.isLeaving = !1), n.update();
                    }),
                    de(c)
                  );
                "in-out" === a &&
                  u.type !== Nn &&
                  (t.delayLeave = (t, e, n) => {
                    const i = he(s, p);
                    (i[String(p.key)] = p),
                      (t._leaveCb = () => {
                        e(), (t._leaveCb = void 0), delete l.delayedLeave;
                      }),
                      (l.delayedLeave = n);
                  });
              }
              return c;
            };
          },
        },
        le = ue;
      function he(t, e) {
        const { leavingVNodes: n } = t;
        let s = n.get(e.type);
        return s || ((s = Object.create(null)), n.set(e.type, s)), s;
      }
      function pe(t, e, n, s) {
        const {
            appear: i,
            mode: r,
            persisted: o = !1,
            onBeforeEnter: a,
            onEnter: c,
            onAfterEnter: u,
            onEnterCancelled: l,
            onBeforeLeave: h,
            onLeave: p,
            onAfterLeave: d,
            onLeaveCancelled: f,
            onBeforeAppear: m,
            onAppear: g,
            onAfterAppear: _,
            onAppearCancelled: v,
          } = e,
          y = String(t.key),
          b = he(n, t),
          w = (t, e) => {
            t && Is(t, s, 9, e);
          },
          x = {
            mode: r,
            persisted: o,
            beforeEnter(e) {
              let s = a;
              if (!n.isMounted) {
                if (!i) return;
                s = m || a;
              }
              e._leaveCb && e._leaveCb(!0);
              const r = b[y];
              r && Hn(t, r) && r.el._leaveCb && r.el._leaveCb(), w(s, [e]);
            },
            enter(t) {
              let e = c,
                s = u,
                r = l;
              if (!n.isMounted) {
                if (!i) return;
                (e = g || c), (s = _ || u), (r = v || l);
              }
              let o = !1;
              const a = (t._enterCb = (e) => {
                o ||
                  ((o = !0),
                  w(e ? r : s, [t]),
                  x.delayedLeave && x.delayedLeave(),
                  (t._enterCb = void 0));
              });
              e ? (e(t, a), e.length <= 1 && a()) : a();
            },
            leave(e, s) {
              const i = String(t.key);
              if ((e._enterCb && e._enterCb(!0), n.isUnmounting)) return s();
              w(h, [e]);
              let r = !1;
              const o = (e._leaveCb = (n) => {
                r ||
                  ((r = !0),
                  s(),
                  w(n ? f : d, [e]),
                  (e._leaveCb = void 0),
                  b[i] === t && delete b[i]);
              });
              (b[i] = t), p ? (p(e, o), p.length <= 1 && o()) : o();
            },
            clone(t) {
              return pe(t, e, n, s);
            },
          };
        return x;
      }
      function de(t) {
        if (ve(t)) return (t = es(t)), (t.children = null), t;
      }
      function fe(t) {
        return ve(t) ? (t.children ? t.children[0] : void 0) : t;
      }
      function me(t, e) {
        6 & t.shapeFlag && t.component
          ? me(t.component.subTree, e)
          : 128 & t.shapeFlag
          ? ((t.ssContent.transition = e.clone(t.ssContent)),
            (t.ssFallback.transition = e.clone(t.ssFallback)))
          : (t.transition = e);
      }
      function ge(t, e = !1) {
        let n = [],
          s = 0;
        for (let i = 0; i < t.length; i++) {
          const r = t[i];
          r.type === Dn
            ? (128 & r.patchFlag && s++, (n = n.concat(ge(r.children, e))))
            : (e || r.type !== Nn) && n.push(r);
        }
        if (s > 1) for (let i = 0; i < n.length; i++) n[i].patchFlag = -2;
        return n;
      }
      const _e = (t) => !!t.type.__asyncLoader;
      const ve = (t) => t.type.__isKeepAlive;
      RegExp, RegExp;
      function ye(t, e) {
        return Object(s["m"])(t)
          ? t.some((t) => ye(t, e))
          : Object(s["B"])(t)
          ? t.split(",").indexOf(e) > -1
          : !!t.test && t.test(e);
      }
      function be(t, e) {
        xe(t, "a", e);
      }
      function we(t, e) {
        xe(t, "da", e);
      }
      function xe(t, e, n = fs) {
        const s =
          t.__wdc ||
          (t.__wdc = () => {
            let e = n;
            while (e) {
              if (e.isDeactivated) return;
              e = e.parent;
            }
            t();
          });
        if ((Se(e, s, n), n)) {
          let t = n.parent;
          while (t && t.parent)
            ve(t.parent.vnode) && Te(s, e, n, t), (t = t.parent);
        }
      }
      function Te(t, e, n, i) {
        const r = Se(e, t, i, !0);
        De(() => {
          Object(s["I"])(i[e], r);
        }, n);
      }
      function Oe(t) {
        let e = t.shapeFlag;
        256 & e && (e -= 256), 512 & e && (e -= 512), (t.shapeFlag = e);
      }
      function Ce(t) {
        return 128 & t.shapeFlag ? t.ssContent : t;
      }
      function Se(t, e, n = fs, s = !1) {
        if (n) {
          const i = n[t] || (n[t] = []),
            r =
              e.__weh ||
              (e.__weh = (...s) => {
                if (n.isUnmounted) return;
                C(), gs(n);
                const i = Is(e, n, t, s);
                return _s(), A(), i;
              });
          return s ? i.unshift(r) : i.push(r), r;
        }
      }
      const Ae =
          (t) =>
          (e, n = fs) =>
            (!ws || "sp" === t) && Se(t, e, n),
        ke = Ae("bm"),
        Ee = Ae("m"),
        Me = Ae("bu"),
        je = Ae("u"),
        Ie = Ae("bum"),
        De = Ae("um"),
        Re = Ae("sp"),
        Ne = Ae("rtg"),
        Pe = Ae("rtc");
      function Ve(t, e = fs) {
        Se("ec", t, e);
      }
      let Fe = !0;
      function Le(t) {
        const e = Ue(t),
          n = t.proxy,
          i = t.ctx;
        (Fe = !1), e.beforeCreate && Be(e.beforeCreate, t, "bc");
        const {
            data: r,
            computed: o,
            methods: a,
            watch: c,
            provide: u,
            inject: l,
            created: h,
            beforeMount: p,
            mounted: d,
            beforeUpdate: f,
            updated: m,
            activated: g,
            deactivated: _,
            beforeDestroy: v,
            beforeUnmount: y,
            destroyed: b,
            unmounted: w,
            render: x,
            renderTracked: T,
            renderTriggered: O,
            errorCaptured: C,
            serverPrefetch: S,
            expose: A,
            inheritAttrs: k,
            components: E,
            directives: M,
            filters: j,
          } = e,
          I = null;
        if ((l && qe(l, i, I, t.appContext.config.unwrapInjectedRef), a))
          for (const R in a) {
            const t = a[R];
            Object(s["n"])(t) && (i[R] = t.bind(n));
          }
        if (r) {
          0;
          const e = r.call(n, n);
          0, Object(s["t"])(e) && (t.data = Ct(e));
        }
        if (((Fe = !0), o))
          for (const R in o) {
            const t = o[R],
              e = Object(s["n"])(t)
                ? t.bind(n, n)
                : Object(s["n"])(t.get)
                ? t.get.bind(n, n)
                : s["d"];
            0;
            const r =
                !Object(s["n"])(t) && Object(s["n"])(t.set)
                  ? t.set.bind(n)
                  : s["d"],
              a = Bt({ get: e, set: r });
            Object.defineProperty(i, R, {
              enumerable: !0,
              configurable: !0,
              get: () => a.value,
              set: (t) => (a.value = t),
            });
          }
        if (c) for (const s in c) We(c[s], i, n, s);
        if (u) {
          const t = Object(s["n"])(u) ? u.call(n) : u;
          Reflect.ownKeys(t).forEach((e) => {
            re(e, t[e]);
          });
        }
        function D(t, e) {
          Object(s["m"])(e)
            ? e.forEach((e) => t(e.bind(n)))
            : e && t(e.bind(n));
        }
        if (
          (h && Be(h, t, "c"),
          D(ke, p),
          D(Ee, d),
          D(Me, f),
          D(je, m),
          D(be, g),
          D(we, _),
          D(Ve, C),
          D(Pe, T),
          D(Ne, O),
          D(Ie, y),
          D(De, w),
          D(Re, S),
          Object(s["m"])(A))
        )
          if (A.length) {
            const e = t.exposed || (t.exposed = {});
            A.forEach((t) => {
              Object.defineProperty(e, t, {
                get: () => n[t],
                set: (e) => (n[t] = e),
              });
            });
          } else t.exposed || (t.exposed = {});
        x && t.render === s["d"] && (t.render = x),
          null != k && (t.inheritAttrs = k),
          E && (t.components = E),
          M && (t.directives = M);
      }
      function qe(t, e, n = s["d"], i = !1) {
        Object(s["m"])(t) && (t = Ye(t));
        for (const r in t) {
          const n = t[r];
          let o;
          (o = Object(s["t"])(n)
            ? "default" in n
              ? oe(n.from || r, n.default, !0)
              : oe(n.from || r)
            : oe(n)),
            Pt(o) && i
              ? Object.defineProperty(e, r, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => o.value,
                  set: (t) => (o.value = t),
                })
              : (e[r] = o);
        }
      }
      function Be(t, e, n) {
        Is(
          Object(s["m"])(t) ? t.map((t) => t.bind(e.proxy)) : t.bind(e.proxy),
          e,
          n
        );
      }
      function We(t, e, n, i) {
        const r = i.includes(".") ? li(n, i) : () => n[i];
        if (Object(s["B"])(t)) {
          const n = e[t];
          Object(s["n"])(n) && ai(r, n);
        } else if (Object(s["n"])(t)) ai(r, t.bind(n));
        else if (Object(s["t"])(t))
          if (Object(s["m"])(t)) t.forEach((t) => We(t, e, n, i));
          else {
            const i = Object(s["n"])(t.handler)
              ? t.handler.bind(n)
              : e[t.handler];
            Object(s["n"])(i) && ai(r, i, t);
          }
        else 0;
      }
      function Ue(t) {
        const e = t.type,
          { mixins: n, extends: s } = e,
          {
            mixins: i,
            optionsCache: r,
            config: { optionMergeStrategies: o },
          } = t.appContext,
          a = r.get(e);
        let c;
        return (
          a
            ? (c = a)
            : i.length || n || s
            ? ((c = {}),
              i.length && i.forEach((t) => ze(c, t, o, !0)),
              ze(c, e, o))
            : (c = e),
          r.set(e, c),
          c
        );
      }
      function ze(t, e, n, s = !1) {
        const { mixins: i, extends: r } = e;
        r && ze(t, r, n, !0), i && i.forEach((e) => ze(t, e, n, !0));
        for (const o in e)
          if (s && "expose" === o);
          else {
            const s = Ge[o] || (n && n[o]);
            t[o] = s ? s(t[o], e[o]) : e[o];
          }
        return t;
      }
      const Ge = {
        data: $e,
        props: Ze,
        emits: Ze,
        methods: Ze,
        computed: Ze,
        beforeCreate: Xe,
        created: Xe,
        beforeMount: Xe,
        mounted: Xe,
        beforeUpdate: Xe,
        updated: Xe,
        beforeDestroy: Xe,
        destroyed: Xe,
        activated: Xe,
        deactivated: Xe,
        errorCaptured: Xe,
        serverPrefetch: Xe,
        components: Ze,
        directives: Ze,
        watch: Qe,
        provide: $e,
        inject: He,
      };
      function $e(t, e) {
        return e
          ? t
            ? function () {
                return Object(s["h"])(
                  Object(s["n"])(t) ? t.call(this, this) : t,
                  Object(s["n"])(e) ? e.call(this, this) : e
                );
              }
            : e
          : t;
      }
      function He(t, e) {
        return Ze(Ye(t), Ye(e));
      }
      function Ye(t) {
        if (Object(s["m"])(t)) {
          const e = {};
          for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
          return e;
        }
        return t;
      }
      function Xe(t, e) {
        return t ? [...new Set([].concat(t, e))] : e;
      }
      function Ze(t, e) {
        return t
          ? Object(s["h"])(Object(s["h"])(Object.create(null), t), e)
          : e;
      }
      function Qe(t, e) {
        if (!t) return e;
        if (!e) return t;
        const n = Object(s["h"])(Object.create(null), t);
        for (const s in e) n[s] = Xe(t[s], e[s]);
        return n;
      }
      function Je(t, e, n, i = !1) {
        const r = {},
          o = {};
        Object(s["g"])(o, Yn, 1),
          (t.propsDefaults = Object.create(null)),
          tn(t, e, r, o);
        for (const s in t.propsOptions[0]) s in r || (r[s] = void 0);
        n
          ? (t.props = i ? r : St(r))
          : t.type.props
          ? (t.props = r)
          : (t.props = o),
          (t.attrs = o);
      }
      function Ke(t, e, n, i) {
        const {
            props: r,
            attrs: o,
            vnode: { patchFlag: a },
          } = t,
          c = It(r),
          [u] = t.propsOptions;
        let l = !1;
        if (!(i || a > 0) || 16 & a) {
          let i;
          tn(t, e, r, o) && (l = !0);
          for (const o in c)
            (e &&
              (Object(s["j"])(e, o) ||
                ((i = Object(s["k"])(o)) !== o && Object(s["j"])(e, i)))) ||
              (u
                ? !n ||
                  (void 0 === n[o] && void 0 === n[i]) ||
                  (r[o] = en(u, c, o, void 0, t, !0))
                : delete r[o]);
          if (o !== c)
            for (const t in o)
              (e && Object(s["j"])(e, t)) || (delete o[t], (l = !0));
        } else if (8 & a) {
          const n = t.vnode.dynamicProps;
          for (let i = 0; i < n.length; i++) {
            let a = n[i];
            const h = e[a];
            if (u)
              if (Object(s["j"])(o, a)) h !== o[a] && ((o[a] = h), (l = !0));
              else {
                const e = Object(s["e"])(a);
                r[e] = en(u, c, e, h, t, !1);
              }
            else h !== o[a] && ((o[a] = h), (l = !0));
          }
        }
        l && j(t, "set", "$attrs");
      }
      function tn(t, e, n, i) {
        const [r, o] = t.propsOptions;
        let a,
          c = !1;
        if (e)
          for (let u in e) {
            if (Object(s["x"])(u)) continue;
            const l = e[u];
            let h;
            r && Object(s["j"])(r, (h = Object(s["e"])(u)))
              ? o && o.includes(h)
                ? ((a || (a = {}))[h] = l)
                : (n[h] = l)
              : zt(t.emitsOptions, u) || (l !== i[u] && ((i[u] = l), (c = !0)));
          }
        if (o) {
          const e = It(n),
            i = a || s["b"];
          for (let a = 0; a < o.length; a++) {
            const c = o[a];
            n[c] = en(r, e, c, i[c], t, !Object(s["j"])(i, c));
          }
        }
        return c;
      }
      function en(t, e, n, i, r, o) {
        const a = t[n];
        if (null != a) {
          const t = Object(s["j"])(a, "default");
          if (t && void 0 === i) {
            const t = a.default;
            if (a.type !== Function && Object(s["n"])(t)) {
              const { propsDefaults: s } = r;
              n in s ? (i = s[n]) : (gs(r), (i = s[n] = t.call(null, e)), _s());
            } else i = t;
          }
          a[0] &&
            (o && !t
              ? (i = !1)
              : !a[1] || ("" !== i && i !== Object(s["k"])(n)) || (i = !0));
        }
        return i;
      }
      function nn(t, e, n = !1) {
        const i = e.propsCache,
          r = i.get(t);
        if (r) return r;
        const o = t.props,
          a = {},
          c = [];
        let u = !1;
        if (!Object(s["n"])(t)) {
          const i = (t) => {
            u = !0;
            const [n, i] = nn(t, e, !0);
            Object(s["h"])(a, n), i && c.push(...i);
          };
          !n && e.mixins.length && e.mixins.forEach(i),
            t.extends && i(t.extends),
            t.mixins && t.mixins.forEach(i);
        }
        if (!o && !u) return i.set(t, s["a"]), s["a"];
        if (Object(s["m"])(o))
          for (let h = 0; h < o.length; h++) {
            0;
            const t = Object(s["e"])(o[h]);
            sn(t) && (a[t] = s["b"]);
          }
        else if (o) {
          0;
          for (const t in o) {
            const e = Object(s["e"])(t);
            if (sn(e)) {
              const n = o[t],
                i = (a[e] =
                  Object(s["m"])(n) || Object(s["n"])(n) ? { type: n } : n);
              if (i) {
                const t = an(Boolean, i.type),
                  n = an(String, i.type);
                (i[0] = t > -1),
                  (i[1] = n < 0 || t < n),
                  (t > -1 || Object(s["j"])(i, "default")) && c.push(e);
              }
            }
          }
        }
        const l = [a, c];
        return i.set(t, l), l;
      }
      function sn(t) {
        return "$" !== t[0];
      }
      function rn(t) {
        const e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : null === t ? "null" : "";
      }
      function on(t, e) {
        return rn(t) === rn(e);
      }
      function an(t, e) {
        return Object(s["m"])(e)
          ? e.findIndex((e) => on(e, t))
          : Object(s["n"])(e) && on(e, t)
          ? 0
          : -1;
      }
      const cn = (t) => "_" === t[0] || "$stable" === t,
        un = (t) => (Object(s["m"])(t) ? t.map(is) : [is(t)]),
        ln = (t, e, n) => {
          const s = Zt((t) => un(e(t)), n);
          return (s._c = !1), s;
        },
        hn = (t, e, n) => {
          const i = t._ctx;
          for (const r in t) {
            if (cn(r)) continue;
            const n = t[r];
            if (Object(s["n"])(n)) e[r] = ln(r, n, i);
            else if (null != n) {
              0;
              const t = un(n);
              e[r] = () => t;
            }
          }
        },
        pn = (t, e) => {
          const n = un(e);
          t.slots.default = () => n;
        },
        dn = (t, e) => {
          if (32 & t.vnode.shapeFlag) {
            const n = e._;
            n
              ? ((t.slots = It(e)), Object(s["g"])(e, "_", n))
              : hn(e, (t.slots = {}));
          } else (t.slots = {}), e && pn(t, e);
          Object(s["g"])(t.slots, Yn, 1);
        },
        fn = (t, e, n) => {
          const { vnode: i, slots: r } = t;
          let o = !0,
            a = s["b"];
          if (32 & i.shapeFlag) {
            const t = e._;
            t
              ? n && 1 === t
                ? (o = !1)
                : (Object(s["h"])(r, e), n || 1 !== t || delete r._)
              : ((o = !e.$stable), hn(e, r)),
              (a = e);
          } else e && (pn(t, e), (a = { default: 1 }));
          if (o) for (const s in r) cn(s) || s in a || delete r[s];
        };
      function mn(t, e, n, s) {
        const i = t.dirs,
          r = e && e.dirs;
        for (let o = 0; o < i.length; o++) {
          const a = i[o];
          r && (a.oldValue = r[o].value);
          let c = a.dir[s];
          c && (C(), Is(c, n, 8, [t.el, a, t, e]), A());
        }
      }
      function gn() {
        return {
          app: null,
          config: {
            isNativeTag: s["c"],
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
          },
          mixins: [],
          components: {},
          directives: {},
          provides: Object.create(null),
          optionsCache: new WeakMap(),
          propsCache: new WeakMap(),
          emitsCache: new WeakMap(),
        };
      }
      let _n = 0;
      function vn(t, e) {
        return function (n, i = null) {
          null == i || Object(s["t"])(i) || (i = null);
          const r = gn(),
            o = new Set();
          let a = !1;
          const c = (r.app = {
            _uid: _n++,
            _component: n,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: di,
            get config() {
              return r.config;
            },
            set config(t) {
              0;
            },
            use(t, ...e) {
              return (
                o.has(t) ||
                  (t && Object(s["n"])(t.install)
                    ? (o.add(t), t.install(c, ...e))
                    : Object(s["n"])(t) && (o.add(t), t(c, ...e))),
                c
              );
            },
            mixin(t) {
              return r.mixins.includes(t) || r.mixins.push(t), c;
            },
            component(t, e) {
              return e ? ((r.components[t] = e), c) : r.components[t];
            },
            directive(t, e) {
              return e ? ((r.directives[t] = e), c) : r.directives[t];
            },
            mount(s, o, u) {
              if (!a) {
                const l = Jn(n, i);
                return (
                  (l.appContext = r),
                  o && e ? e(l, s) : t(l, s, u),
                  (a = !0),
                  (c._container = s),
                  (s.__vue_app__ = c),
                  l.component.proxy
                );
              }
            },
            unmount() {
              a && (t(null, c._container), delete c._container.__vue_app__);
            },
            provide(t, e) {
              return (r.provides[t] = e), c;
            },
          });
          return c;
        };
      }
      function yn() {}
      const bn = ie;
      function wn(t) {
        return xn(t);
      }
      function xn(t, e) {
        yn();
        const {
            insert: n,
            remove: i,
            patchProp: r,
            createElement: o,
            createText: a,
            createComment: c,
            setText: u,
            setElementText: l,
            parentNode: h,
            nextSibling: p,
            setScopeId: d = s["d"],
            cloneNode: f,
            insertStaticContent: m,
          } = t,
          g = (
            t,
            e,
            n,
            s = null,
            i = null,
            r = null,
            o = !1,
            a = null,
            c = !!e.dynamicChildren
          ) => {
            if (t === e) return;
            t && !Hn(t, e) && ((s = H(t)), W(t, i, r, !0), (t = null)),
              -2 === e.patchFlag && ((c = !1), (e.dynamicChildren = null));
            const { type: u, ref: l, shapeFlag: h } = e;
            switch (u) {
              case Rn:
                _(t, e, n, s);
                break;
              case Nn:
                v(t, e, n, s);
                break;
              case Pn:
                null == t && y(e, n, s, o);
                break;
              case Dn:
                I(t, e, n, s, i, r, o, a, c);
                break;
              default:
                1 & h
                  ? T(t, e, n, s, i, r, o, a, c)
                  : 6 & h
                  ? D(t, e, n, s, i, r, o, a, c)
                  : (64 & h || 128 & h) &&
                    u.process(t, e, n, s, i, r, o, a, c, X);
            }
            null != l && i && Tn(l, t && t.ref, r, e || t, !e);
          },
          _ = (t, e, s, i) => {
            if (null == t) n((e.el = a(e.children)), s, i);
            else {
              const n = (e.el = t.el);
              e.children !== t.children && u(n, e.children);
            }
          },
          v = (t, e, s, i) => {
            null == t ? n((e.el = c(e.children || "")), s, i) : (e.el = t.el);
          },
          y = (t, e, n, s) => {
            [t.el, t.anchor] = m(t.children, e, n, s);
          },
          b = ({ el: t, anchor: e }, s, i) => {
            let r;
            while (t && t !== e) (r = p(t)), n(t, s, i), (t = r);
            n(e, s, i);
          },
          x = ({ el: t, anchor: e }) => {
            let n;
            while (t && t !== e) (n = p(t)), i(t), (t = n);
            i(e);
          },
          T = (t, e, n, s, i, r, o, a, c) => {
            (o = o || "svg" === e.type),
              null == t ? O(e, n, s, i, r, o, a, c) : E(t, e, i, r, o, a, c);
          },
          O = (t, e, i, a, c, u, h, p) => {
            let d, m;
            const {
              type: g,
              props: _,
              shapeFlag: v,
              transition: y,
              patchFlag: b,
              dirs: w,
            } = t;
            if (t.el && void 0 !== f && -1 === b) d = t.el = f(t.el);
            else {
              if (
                ((d = t.el = o(t.type, u, _ && _.is, _)),
                8 & v
                  ? l(d, t.children)
                  : 16 & v &&
                    k(
                      t.children,
                      d,
                      null,
                      a,
                      c,
                      u && "foreignObject" !== g,
                      h,
                      p
                    ),
                w && mn(t, null, a, "created"),
                _)
              ) {
                for (const e in _)
                  "value" === e ||
                    Object(s["x"])(e) ||
                    r(d, e, null, _[e], u, t.children, a, c, $);
                "value" in _ && r(d, "value", null, _.value),
                  (m = _.onVnodeBeforeMount) && On(m, a, t);
              }
              S(d, t, t.scopeId, h, a);
            }
            w && mn(t, null, a, "beforeMount");
            const x = (!c || (c && !c.pendingBranch)) && y && !y.persisted;
            x && y.beforeEnter(d),
              n(d, e, i),
              ((m = _ && _.onVnodeMounted) || x || w) &&
                bn(() => {
                  m && On(m, a, t),
                    x && y.enter(d),
                    w && mn(t, null, a, "mounted");
                }, c);
          },
          S = (t, e, n, s, i) => {
            if ((n && d(t, n), s))
              for (let r = 0; r < s.length; r++) d(t, s[r]);
            if (i) {
              let n = i.subTree;
              if (e === n) {
                const e = i.vnode;
                S(t, e, e.scopeId, e.slotScopeIds, i.parent);
              }
            }
          },
          k = (t, e, n, s, i, r, o, a, c = 0) => {
            for (let u = c; u < t.length; u++) {
              const c = (t[u] = a ? rs(t[u]) : is(t[u]));
              g(null, c, e, n, s, i, r, o, a);
            }
          },
          E = (t, e, n, i, o, a, c) => {
            const u = (e.el = t.el);
            let { patchFlag: h, dynamicChildren: p, dirs: d } = e;
            h |= 16 & t.patchFlag;
            const f = t.props || s["b"],
              m = e.props || s["b"];
            let g;
            if (
              ((g = m.onVnodeBeforeUpdate) && On(g, n, e, t),
              d && mn(e, t, n, "beforeUpdate"),
              h > 0)
            ) {
              if (16 & h) j(u, e, f, m, n, i, o);
              else if (
                (2 & h &&
                  f.class !== m.class &&
                  r(u, "class", null, m.class, o),
                4 & h && r(u, "style", f.style, m.style, o),
                8 & h)
              ) {
                const s = e.dynamicProps;
                for (let e = 0; e < s.length; e++) {
                  const a = s[e],
                    c = f[a],
                    l = m[a];
                  (l === c && "value" !== a) ||
                    r(u, a, c, l, o, t.children, n, i, $);
                }
              }
              1 & h && t.children !== e.children && l(u, e.children);
            } else c || null != p || j(u, e, f, m, n, i, o);
            const _ = o && "foreignObject" !== e.type;
            p
              ? M(t.dynamicChildren, p, u, n, i, _, a)
              : c || F(t, e, u, null, n, i, _, a, !1),
              ((g = m.onVnodeUpdated) || d) &&
                bn(() => {
                  g && On(g, n, e, t), d && mn(e, t, n, "updated");
                }, i);
          },
          M = (t, e, n, s, i, r, o) => {
            for (let a = 0; a < e.length; a++) {
              const c = t[a],
                u = e[a],
                l =
                  c.el &&
                  (c.type === Dn ||
                    !Hn(c, u) ||
                    6 & c.shapeFlag ||
                    64 & c.shapeFlag)
                    ? h(c.el)
                    : n;
              g(c, u, l, null, s, i, r, o, !0);
            }
          },
          j = (t, e, n, i, o, a, c) => {
            if (n !== i) {
              for (const u in i) {
                if (Object(s["x"])(u)) continue;
                const l = i[u],
                  h = n[u];
                l !== h &&
                  "value" !== u &&
                  r(t, u, h, l, c, e.children, o, a, $);
              }
              if (n !== s["b"])
                for (const u in n)
                  Object(s["x"])(u) ||
                    u in i ||
                    r(t, u, n[u], null, c, e.children, o, a, $);
              "value" in i && r(t, "value", n.value, i.value);
            }
          },
          I = (t, e, s, i, r, o, c, u, l) => {
            const h = (e.el = t ? t.el : a("")),
              p = (e.anchor = t ? t.anchor : a(""));
            let { patchFlag: d, dynamicChildren: f, slotScopeIds: m } = e;
            m && (u = u ? u.concat(m) : m),
              null == t
                ? (n(h, s, i), n(p, s, i), k(e.children, s, p, r, o, c, u, l))
                : d > 0 && 64 & d && f && t.dynamicChildren
                ? (M(t.dynamicChildren, f, s, r, o, c, u),
                  (null != e.key || (r && e === r.subTree)) && Cn(t, e, !0))
                : F(t, e, s, p, r, o, c, u, l);
          },
          D = (t, e, n, s, i, r, o, a, c) => {
            (e.slotScopeIds = a),
              null == t
                ? 512 & e.shapeFlag
                  ? i.ctx.activate(e, n, s, o, c)
                  : R(e, n, s, i, r, o, c)
                : N(t, e, c);
          },
          R = (t, e, n, s, i, r, o) => {
            const a = (t.component = ds(t, s, i));
            if ((ve(t) && (a.ctx.renderer = X), xs(a), a.asyncDep)) {
              if ((i && i.registerDep(a, P), !t.el)) {
                const t = (a.subTree = Jn(Nn));
                v(null, t, e, n);
              }
            } else P(a, t, e, n, i, r, o);
          },
          N = (t, e, n) => {
            const s = (e.component = t.component);
            if (te(t, e, n)) {
              if (s.asyncDep && !s.asyncResolved) return void V(s, e, n);
              (s.next = e), Js(s.update), s.update();
            } else (e.component = t.component), (e.el = t.el), (s.vnode = e);
          },
          P = (t, e, n, i, r, o, a) => {
            const c = () => {
                if (t.isMounted) {
                  let e,
                    { next: n, bu: i, u: c, parent: l, vnode: p } = t,
                    d = n;
                  0,
                    n ? ((n.el = p.el), V(t, n, a)) : (n = p),
                    (u.allowRecurse = !1),
                    i && Object(s["l"])(i),
                    (e = n.props && n.props.onVnodeBeforeUpdate) &&
                      On(e, l, n, p),
                    (u.allowRecurse = !0);
                  const f = Qt(t);
                  0;
                  const m = t.subTree;
                  (t.subTree = f),
                    g(m, f, h(m.el), H(m), t, r, o),
                    (n.el = f.el),
                    null === d && ne(t, f.el),
                    c && bn(c, r),
                    (e = n.props && n.props.onVnodeUpdated) &&
                      bn(() => On(e, l, n, p), r);
                } else {
                  let a;
                  const { el: c, props: l } = e,
                    { bm: h, m: p, parent: d } = t;
                  if (
                    ((u.allowRecurse = !1),
                    h && Object(s["l"])(h),
                    (a = l && l.onVnodeBeforeMount) && On(a, d, e),
                    (u.allowRecurse = !0),
                    c && Q)
                  ) {
                    const n = () => {
                      (t.subTree = Qt(t)), Q(c, t.subTree, t, r, null);
                    };
                    _e(e)
                      ? e.type.__asyncLoader().then(() => !t.isUnmounted && n())
                      : n();
                  } else {
                    0;
                    const s = (t.subTree = Qt(t));
                    0, g(null, s, n, i, t, r, o), (e.el = s.el);
                  }
                  if ((p && bn(p, r), (a = l && l.onVnodeMounted))) {
                    const t = e;
                    bn(() => On(a, d, t), r);
                  }
                  256 & e.shapeFlag && t.a && bn(t.a, r),
                    (t.isMounted = !0),
                    (e = n = i = null);
                }
              },
              u = new w(c, () => Zs(t.update), t.scope),
              l = (t.update = u.run.bind(u));
            (l.id = t.uid), (u.allowRecurse = l.allowRecurse = !0), l();
          },
          V = (t, e, n) => {
            e.component = t;
            const s = t.vnode.props;
            (t.vnode = e),
              (t.next = null),
              Ke(t, e.props, s, n),
              fn(t, e.children, n),
              C(),
              ni(void 0, t.update),
              A();
          },
          F = (t, e, n, s, i, r, o, a, c = !1) => {
            const u = t && t.children,
              h = t ? t.shapeFlag : 0,
              p = e.children,
              { patchFlag: d, shapeFlag: f } = e;
            if (d > 0) {
              if (128 & d) return void q(u, p, n, s, i, r, o, a, c);
              if (256 & d) return void L(u, p, n, s, i, r, o, a, c);
            }
            8 & f
              ? (16 & h && $(u, i, r), p !== u && l(n, p))
              : 16 & h
              ? 16 & f
                ? q(u, p, n, s, i, r, o, a, c)
                : $(u, i, r, !0)
              : (8 & h && l(n, ""), 16 & f && k(p, n, s, i, r, o, a, c));
          },
          L = (t, e, n, i, r, o, a, c, u) => {
            (t = t || s["a"]), (e = e || s["a"]);
            const l = t.length,
              h = e.length,
              p = Math.min(l, h);
            let d;
            for (d = 0; d < p; d++) {
              const s = (e[d] = u ? rs(e[d]) : is(e[d]));
              g(t[d], s, n, null, r, o, a, c, u);
            }
            l > h ? $(t, r, o, !0, !1, p) : k(e, n, i, r, o, a, c, u, p);
          },
          q = (t, e, n, i, r, o, a, c, u) => {
            let l = 0;
            const h = e.length;
            let p = t.length - 1,
              d = h - 1;
            while (l <= p && l <= d) {
              const s = t[l],
                i = (e[l] = u ? rs(e[l]) : is(e[l]));
              if (!Hn(s, i)) break;
              g(s, i, n, null, r, o, a, c, u), l++;
            }
            while (l <= p && l <= d) {
              const s = t[p],
                i = (e[d] = u ? rs(e[d]) : is(e[d]));
              if (!Hn(s, i)) break;
              g(s, i, n, null, r, o, a, c, u), p--, d--;
            }
            if (l > p) {
              if (l <= d) {
                const t = d + 1,
                  s = t < h ? e[t].el : i;
                while (l <= d)
                  g(
                    null,
                    (e[l] = u ? rs(e[l]) : is(e[l])),
                    n,
                    s,
                    r,
                    o,
                    a,
                    c,
                    u
                  ),
                    l++;
              }
            } else if (l > d) while (l <= p) W(t[l], r, o, !0), l++;
            else {
              const f = l,
                m = l,
                _ = new Map();
              for (l = m; l <= d; l++) {
                const t = (e[l] = u ? rs(e[l]) : is(e[l]));
                null != t.key && _.set(t.key, l);
              }
              let v,
                y = 0;
              const b = d - m + 1;
              let w = !1,
                x = 0;
              const T = new Array(b);
              for (l = 0; l < b; l++) T[l] = 0;
              for (l = f; l <= p; l++) {
                const s = t[l];
                if (y >= b) {
                  W(s, r, o, !0);
                  continue;
                }
                let i;
                if (null != s.key) i = _.get(s.key);
                else
                  for (v = m; v <= d; v++)
                    if (0 === T[v - m] && Hn(s, e[v])) {
                      i = v;
                      break;
                    }
                void 0 === i
                  ? W(s, r, o, !0)
                  : ((T[i - m] = l + 1),
                    i >= x ? (x = i) : (w = !0),
                    g(s, e[i], n, null, r, o, a, c, u),
                    y++);
              }
              const O = w ? Sn(T) : s["a"];
              for (v = O.length - 1, l = b - 1; l >= 0; l--) {
                const t = m + l,
                  s = e[t],
                  p = t + 1 < h ? e[t + 1].el : i;
                0 === T[l]
                  ? g(null, s, n, p, r, o, a, c, u)
                  : w && (v < 0 || l !== O[v] ? B(s, n, p, 2) : v--);
              }
            }
          },
          B = (t, e, s, i, r = null) => {
            const {
              el: o,
              type: a,
              transition: c,
              children: u,
              shapeFlag: l,
            } = t;
            if (6 & l) return void B(t.component.subTree, e, s, i);
            if (128 & l) return void t.suspense.move(e, s, i);
            if (64 & l) return void a.move(t, e, s, X);
            if (a === Dn) {
              n(o, e, s);
              for (let t = 0; t < u.length; t++) B(u[t], e, s, i);
              return void n(t.anchor, e, s);
            }
            if (a === Pn) return void b(t, e, s);
            const h = 2 !== i && 1 & l && c;
            if (h)
              if (0 === i)
                c.beforeEnter(o), n(o, e, s), bn(() => c.enter(o), r);
              else {
                const { leave: t, delayLeave: i, afterLeave: r } = c,
                  a = () => n(o, e, s),
                  u = () => {
                    t(o, () => {
                      a(), r && r();
                    });
                  };
                i ? i(o, a, u) : u();
              }
            else n(o, e, s);
          },
          W = (t, e, n, s = !1, i = !1) => {
            const {
              type: r,
              props: o,
              ref: a,
              children: c,
              dynamicChildren: u,
              shapeFlag: l,
              patchFlag: h,
              dirs: p,
            } = t;
            if ((null != a && Tn(a, null, n, t, !0), 256 & l))
              return void e.ctx.deactivate(t);
            const d = 1 & l && p;
            let f;
            if (((f = o && o.onVnodeBeforeUnmount) && On(f, e, t), 6 & l))
              G(t.component, n, s);
            else {
              if (128 & l) return void t.suspense.unmount(n, s);
              d && mn(t, null, e, "beforeUnmount"),
                64 & l
                  ? t.type.remove(t, e, n, i, X, s)
                  : u && (r !== Dn || (h > 0 && 64 & h))
                  ? $(u, e, n, !1, !0)
                  : ((r === Dn && (128 & h || 256 & h)) || (!i && 16 & l)) &&
                    $(c, e, n),
                s && U(t);
            }
            ((f = o && o.onVnodeUnmounted) || d) &&
              bn(() => {
                f && On(f, e, t), d && mn(t, null, e, "unmounted");
              }, n);
          },
          U = (t) => {
            const { type: e, el: n, anchor: s, transition: r } = t;
            if (e === Dn) return void z(n, s);
            if (e === Pn) return void x(t);
            const o = () => {
              i(n), r && !r.persisted && r.afterLeave && r.afterLeave();
            };
            if (1 & t.shapeFlag && r && !r.persisted) {
              const { leave: e, delayLeave: s } = r,
                i = () => e(n, o);
              s ? s(t.el, o, i) : i();
            } else o();
          },
          z = (t, e) => {
            let n;
            while (t !== e) (n = p(t)), i(t), (t = n);
            i(e);
          },
          G = (t, e, n) => {
            const { bum: i, scope: r, update: o, subTree: a, um: c } = t;
            i && Object(s["l"])(i),
              r.stop(),
              o && ((o.active = !1), W(a, t, e, n)),
              c && bn(c, e),
              bn(() => {
                t.isUnmounted = !0;
              }, e),
              e &&
                e.pendingBranch &&
                !e.isUnmounted &&
                t.asyncDep &&
                !t.asyncResolved &&
                t.suspenseId === e.pendingId &&
                (e.deps--, 0 === e.deps && e.resolve());
          },
          $ = (t, e, n, s = !1, i = !1, r = 0) => {
            for (let o = r; o < t.length; o++) W(t[o], e, n, s, i);
          },
          H = (t) =>
            6 & t.shapeFlag
              ? H(t.component.subTree)
              : 128 & t.shapeFlag
              ? t.suspense.next()
              : p(t.anchor || t.el),
          Y = (t, e, n) => {
            null == t
              ? e._vnode && W(e._vnode, null, null, !0)
              : g(e._vnode || null, t, e, null, null, null, n),
              si(),
              (e._vnode = t);
          },
          X = {
            p: g,
            um: W,
            m: B,
            r: U,
            mt: R,
            mc: k,
            pc: F,
            pbc: M,
            n: H,
            o: t,
          };
        let Z, Q;
        return (
          e && ([Z, Q] = e(X)), { render: Y, hydrate: Z, createApp: vn(Y, Z) }
        );
      }
      function Tn(t, e, n, i, r = !1) {
        if (Object(s["m"])(t))
          return void t.forEach((t, o) =>
            Tn(t, e && (Object(s["m"])(e) ? e[o] : e), n, i, r)
          );
        if (_e(i) && !r) return;
        const o = 4 & i.shapeFlag ? ks(i.component) || i.component.proxy : i.el,
          a = r ? null : o,
          { i: c, r: u } = t;
        const l = e && e.r,
          h = c.refs === s["b"] ? (c.refs = {}) : c.refs,
          p = c.setupState;
        if (
          (null != l &&
            l !== u &&
            (Object(s["B"])(l)
              ? ((h[l] = null), Object(s["j"])(p, l) && (p[l] = null))
              : Pt(l) && (l.value = null)),
          Object(s["B"])(u))
        ) {
          const t = () => {
            (h[u] = a), Object(s["j"])(p, u) && (p[u] = a);
          };
          a ? ((t.id = -1), bn(t, n)) : t();
        } else if (Pt(u)) {
          const t = () => {
            u.value = a;
          };
          a ? ((t.id = -1), bn(t, n)) : t();
        } else Object(s["n"])(u) && js(u, c, 12, [a, h]);
      }
      function On(t, e, n, s = null) {
        Is(t, e, 7, [n, s]);
      }
      function Cn(t, e, n = !1) {
        const i = t.children,
          r = e.children;
        if (Object(s["m"])(i) && Object(s["m"])(r))
          for (let s = 0; s < i.length; s++) {
            const t = i[s];
            let e = r[s];
            1 & e.shapeFlag &&
              !e.dynamicChildren &&
              ((e.patchFlag <= 0 || 32 === e.patchFlag) &&
                ((e = r[s] = rs(r[s])), (e.el = t.el)),
              n || Cn(t, e));
          }
      }
      function Sn(t) {
        const e = t.slice(),
          n = [0];
        let s, i, r, o, a;
        const c = t.length;
        for (s = 0; s < c; s++) {
          const c = t[s];
          if (0 !== c) {
            if (((i = n[n.length - 1]), t[i] < c)) {
              (e[s] = i), n.push(s);
              continue;
            }
            (r = 0), (o = n.length - 1);
            while (r < o)
              (a = (r + o) >> 1), t[n[a]] < c ? (r = a + 1) : (o = a);
            c < t[n[r]] && (r > 0 && (e[s] = n[r - 1]), (n[r] = s));
          }
        }
        (r = n.length), (o = n[r - 1]);
        while (r-- > 0) (n[r] = o), (o = e[o]);
        return n;
      }
      const An = (t) => t.__isTeleport;
      const kn = "components";
      function En(t, e) {
        return jn(kn, t, !0, e) || t;
      }
      const Mn = Symbol();
      function jn(t, e, n = !0, i = !1) {
        const r = Gt || fs;
        if (r) {
          const n = r.type;
          if (t === kn) {
            const t = Es(n);
            if (
              t &&
              (t === e ||
                t === Object(s["e"])(e) ||
                t === Object(s["f"])(Object(s["e"])(e)))
            )
              return n;
          }
          const o = In(r[t] || n[t], e) || In(r.appContext[t], e);
          return !o && i ? n : o;
        }
      }
      function In(t, e) {
        return (
          t &&
          (t[e] || t[Object(s["e"])(e)] || t[Object(s["f"])(Object(s["e"])(e))])
        );
      }
      const Dn = Symbol(void 0),
        Rn = Symbol(void 0),
        Nn = Symbol(void 0),
        Pn = Symbol(void 0),
        Vn = [];
      let Fn = null;
      function Ln(t = !1) {
        Vn.push((Fn = t ? null : []));
      }
      function qn() {
        Vn.pop(), (Fn = Vn[Vn.length - 1] || null);
      }
      let Bn = 1;
      function Wn(t) {
        Bn += t;
      }
      function Un(t) {
        return (
          (t.dynamicChildren = Bn > 0 ? Fn || s["a"] : null),
          qn(),
          Bn > 0 && Fn && Fn.push(t),
          t
        );
      }
      function zn(t, e, n, s, i, r) {
        return Un(Qn(t, e, n, s, i, r, !0));
      }
      function Gn(t, e, n, s, i) {
        return Un(Jn(t, e, n, s, i, !0));
      }
      function $n(t) {
        return !!t && !0 === t.__v_isVNode;
      }
      function Hn(t, e) {
        return t.type === e.type && t.key === e.key;
      }
      const Yn = "__vInternal",
        Xn = ({ key: t }) => (null != t ? t : null),
        Zn = ({ ref: t }) =>
          null != t
            ? Object(s["B"])(t) || Pt(t) || Object(s["n"])(t)
              ? { i: Gt, r: t }
              : t
            : null;
      function Qn(
        t,
        e = null,
        n = null,
        i = 0,
        r = null,
        o = t === Dn ? 0 : 1,
        a = !1,
        c = !1
      ) {
        const u = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: t,
          props: e,
          key: e && Xn(e),
          ref: e && Zn(e),
          scopeId: $t,
          slotScopeIds: null,
          children: n,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag: o,
          patchFlag: i,
          dynamicProps: r,
          dynamicChildren: null,
          appContext: null,
        };
        return (
          c
            ? (os(u, n), 128 & o && t.normalize(u))
            : n && (u.shapeFlag |= Object(s["B"])(n) ? 8 : 16),
          Bn > 0 &&
            !a &&
            Fn &&
            (u.patchFlag > 0 || 6 & o) &&
            32 !== u.patchFlag &&
            Fn.push(u),
          u
        );
      }
      const Jn = Kn;
      function Kn(t, e = null, n = null, i = 0, r = null, o = !1) {
        if (((t && t !== Mn) || (t = Nn), $n(t))) {
          const s = es(t, e, !0);
          return n && os(s, n), s;
        }
        if ((Ms(t) && (t = t.__vccOpts), e)) {
          e = ts(e);
          let { class: t, style: n } = e;
          t && !Object(s["B"])(t) && (e.class = Object(s["G"])(t)),
            Object(s["t"])(n) &&
              (jt(n) && !Object(s["m"])(n) && (n = Object(s["h"])({}, n)),
              (e.style = Object(s["H"])(n)));
        }
        const a = Object(s["B"])(t)
          ? 1
          : se(t)
          ? 128
          : An(t)
          ? 64
          : Object(s["t"])(t)
          ? 4
          : Object(s["n"])(t)
          ? 2
          : 0;
        return Qn(t, e, n, i, r, a, o, !0);
      }
      function ts(t) {
        return t ? (jt(t) || Yn in t ? Object(s["h"])({}, t) : t) : null;
      }
      function es(t, e, n = !1) {
        const { props: i, ref: r, patchFlag: o, children: a } = t,
          c = e ? as(i || {}, e) : i,
          u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: t.type,
            props: c,
            key: c && Xn(c),
            ref:
              e && e.ref
                ? n && r
                  ? Object(s["m"])(r)
                    ? r.concat(Zn(e))
                    : [r, Zn(e)]
                  : Zn(e)
                : r,
            scopeId: t.scopeId,
            slotScopeIds: t.slotScopeIds,
            children: a,
            target: t.target,
            targetAnchor: t.targetAnchor,
            staticCount: t.staticCount,
            shapeFlag: t.shapeFlag,
            patchFlag: e && t.type !== Dn ? (-1 === o ? 16 : 16 | o) : o,
            dynamicProps: t.dynamicProps,
            dynamicChildren: t.dynamicChildren,
            appContext: t.appContext,
            dirs: t.dirs,
            transition: t.transition,
            component: t.component,
            suspense: t.suspense,
            ssContent: t.ssContent && es(t.ssContent),
            ssFallback: t.ssFallback && es(t.ssFallback),
            el: t.el,
            anchor: t.anchor,
          };
        return u;
      }
      function ns(t = " ", e = 0) {
        return Jn(Rn, null, t, e);
      }
      function ss(t, e) {
        const n = Jn(Pn, null, t);
        return (n.staticCount = e), n;
      }
      function is(t) {
        return null == t || "boolean" === typeof t
          ? Jn(Nn)
          : Object(s["m"])(t)
          ? Jn(Dn, null, t.slice())
          : "object" === typeof t
          ? rs(t)
          : Jn(Rn, null, String(t));
      }
      function rs(t) {
        return null === t.el || t.memo ? t : es(t);
      }
      function os(t, e) {
        let n = 0;
        const { shapeFlag: i } = t;
        if (null == e) e = null;
        else if (Object(s["m"])(e)) n = 16;
        else if ("object" === typeof e) {
          if (1 & i || 64 & i) {
            const n = e.default;
            return void (
              n && (n._c && (n._d = !1), os(t, n()), n._c && (n._d = !0))
            );
          }
          {
            n = 32;
            const s = e._;
            s || Yn in e
              ? 3 === s &&
                Gt &&
                (1 === Gt.slots._
                  ? (e._ = 1)
                  : ((e._ = 2), (t.patchFlag |= 1024)))
              : (e._ctx = Gt);
          }
        } else
          Object(s["n"])(e)
            ? ((e = { default: e, _ctx: Gt }), (n = 32))
            : ((e = String(e)), 64 & i ? ((n = 16), (e = [ns(e)])) : (n = 8));
        (t.children = e), (t.shapeFlag |= n);
      }
      function as(...t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
          const i = t[n];
          for (const t in i)
            if ("class" === t)
              e.class !== i.class &&
                (e.class = Object(s["G"])([e.class, i.class]));
            else if ("style" === t)
              e.style = Object(s["H"])([e.style, i.style]);
            else if (Object(s["u"])(t)) {
              const n = e[t],
                s = i[t];
              n !== s && (e[t] = n ? [].concat(n, s) : s);
            } else "" !== t && (e[t] = i[t]);
        }
        return e;
      }
      const cs = (t) => (t ? (vs(t) ? ks(t) || t.proxy : cs(t.parent)) : null),
        us = Object(s["h"])(Object.create(null), {
          $: (t) => t,
          $el: (t) => t.vnode.el,
          $data: (t) => t.data,
          $props: (t) => t.props,
          $attrs: (t) => t.attrs,
          $slots: (t) => t.slots,
          $refs: (t) => t.refs,
          $parent: (t) => cs(t.parent),
          $root: (t) => cs(t.root),
          $emit: (t) => t.emit,
          $options: (t) => Ue(t),
          $forceUpdate: (t) => () => Zs(t.update),
          $nextTick: (t) => Ys.bind(t.proxy),
          $watch: (t) => ui.bind(t),
        }),
        ls = {
          get({ _: t }, e) {
            const {
              ctx: n,
              setupState: i,
              data: r,
              props: o,
              accessCache: a,
              type: c,
              appContext: u,
            } = t;
            let l;
            if ("$" !== e[0]) {
              const c = a[e];
              if (void 0 !== c)
                switch (c) {
                  case 0:
                    return i[e];
                  case 1:
                    return r[e];
                  case 3:
                    return n[e];
                  case 2:
                    return o[e];
                }
              else {
                if (i !== s["b"] && Object(s["j"])(i, e))
                  return (a[e] = 0), i[e];
                if (r !== s["b"] && Object(s["j"])(r, e))
                  return (a[e] = 1), r[e];
                if ((l = t.propsOptions[0]) && Object(s["j"])(l, e))
                  return (a[e] = 2), o[e];
                if (n !== s["b"] && Object(s["j"])(n, e))
                  return (a[e] = 3), n[e];
                Fe && (a[e] = 4);
              }
            }
            const h = us[e];
            let p, d;
            return h
              ? ("$attrs" === e && k(t, "get", e), h(t))
              : (p = c.__cssModules) && (p = p[e])
              ? p
              : n !== s["b"] && Object(s["j"])(n, e)
              ? ((a[e] = 3), n[e])
              : ((d = u.config.globalProperties),
                Object(s["j"])(d, e) ? d[e] : void 0);
          },
          set({ _: t }, e, n) {
            const { data: i, setupState: r, ctx: o } = t;
            if (r !== s["b"] && Object(s["j"])(r, e)) r[e] = n;
            else if (i !== s["b"] && Object(s["j"])(i, e)) i[e] = n;
            else if (Object(s["j"])(t.props, e)) return !1;
            return ("$" !== e[0] || !(e.slice(1) in t)) && ((o[e] = n), !0);
          },
          has(
            {
              _: {
                data: t,
                setupState: e,
                accessCache: n,
                ctx: i,
                appContext: r,
                propsOptions: o,
              },
            },
            a
          ) {
            let c;
            return (
              void 0 !== n[a] ||
              (t !== s["b"] && Object(s["j"])(t, a)) ||
              (e !== s["b"] && Object(s["j"])(e, a)) ||
              ((c = o[0]) && Object(s["j"])(c, a)) ||
              Object(s["j"])(i, a) ||
              Object(s["j"])(us, a) ||
              Object(s["j"])(r.config.globalProperties, a)
            );
          },
        };
      const hs = gn();
      let ps = 0;
      function ds(t, e, n) {
        const i = t.type,
          r = (e ? e.appContext : t.appContext) || hs,
          a = {
            uid: ps++,
            vnode: t,
            type: i,
            parent: e,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            update: null,
            scope: new o(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: e ? e.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: nn(i, r),
            emitsOptions: Ut(i, r),
            emit: null,
            emitted: null,
            propsDefaults: s["b"],
            inheritAttrs: i.inheritAttrs,
            ctx: s["b"],
            data: s["b"],
            props: s["b"],
            attrs: s["b"],
            slots: s["b"],
            refs: s["b"],
            setupState: s["b"],
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
          };
        return (
          (a.ctx = { _: a }),
          (a.root = e ? e.root : a),
          (a.emit = Wt.bind(null, a)),
          t.ce && t.ce(a),
          a
        );
      }
      let fs = null;
      const ms = () => fs || Gt,
        gs = (t) => {
          (fs = t), t.scope.on();
        },
        _s = () => {
          fs && fs.scope.off(), (fs = null);
        };
      function vs(t) {
        return 4 & t.vnode.shapeFlag;
      }
      let ys,
        bs,
        ws = !1;
      function xs(t, e = !1) {
        ws = e;
        const { props: n, children: s } = t.vnode,
          i = vs(t);
        Je(t, n, i, e), dn(t, s);
        const r = i ? Ts(t, e) : void 0;
        return (ws = !1), r;
      }
      function Ts(t, e) {
        const n = t.type;
        (t.accessCache = Object.create(null)),
          (t.proxy = Dt(new Proxy(t.ctx, ls)));
        const { setup: i } = n;
        if (i) {
          const n = (t.setupContext = i.length > 1 ? As(t) : null);
          gs(t), C();
          const r = js(i, t, 0, [t.props, n]);
          if ((A(), _s(), Object(s["w"])(r))) {
            if ((r.then(_s, _s), e))
              return r
                .then((n) => {
                  Os(t, n, e);
                })
                .catch((e) => {
                  Ds(e, t, 0);
                });
            t.asyncDep = r;
          } else Os(t, r, e);
        } else Cs(t, e);
      }
      function Os(t, e, n) {
        Object(s["n"])(e)
          ? (t.render = e)
          : Object(s["t"])(e) && (t.setupState = Lt(e)),
          Cs(t, n);
      }
      function Cs(t, e, n) {
        const i = t.type;
        if (!t.render) {
          if (ys && !i.render) {
            const e = i.template;
            if (e) {
              0;
              const { isCustomElement: n, compilerOptions: r } =
                  t.appContext.config,
                { delimiters: o, compilerOptions: a } = i,
                c = Object(s["h"])(
                  Object(s["h"])({ isCustomElement: n, delimiters: o }, r),
                  a
                );
              i.render = ys(e, c);
            }
          }
          (t.render = i.render || s["d"]), bs && bs(t);
        }
        gs(t), C(), Le(t), A(), _s();
      }
      function Ss(t) {
        return new Proxy(t.attrs, {
          get(e, n) {
            return k(t, "get", "$attrs"), e[n];
          },
        });
      }
      function As(t) {
        const e = (e) => {
          t.exposed = e || {};
        };
        let n;
        return {
          get attrs() {
            return n || (n = Ss(t));
          },
          slots: t.slots,
          emit: t.emit,
          expose: e,
        };
      }
      function ks(t) {
        if (t.exposed)
          return (
            t.exposeProxy ||
            (t.exposeProxy = new Proxy(Lt(Dt(t.exposed)), {
              get(e, n) {
                return n in e ? e[n] : n in us ? us[n](t) : void 0;
              },
            }))
          );
      }
      function Es(t) {
        return (Object(s["n"])(t) && t.displayName) || t.name;
      }
      function Ms(t) {
        return Object(s["n"])(t) && "__vccOpts" in t;
      }
      function js(t, e, n, s) {
        let i;
        try {
          i = s ? t(...s) : t();
        } catch (r) {
          Ds(r, e, n);
        }
        return i;
      }
      function Is(t, e, n, i) {
        if (Object(s["n"])(t)) {
          const r = js(t, e, n, i);
          return (
            r &&
              Object(s["w"])(r) &&
              r.catch((t) => {
                Ds(t, e, n);
              }),
            r
          );
        }
        const r = [];
        for (let s = 0; s < t.length; s++) r.push(Is(t[s], e, n, i));
        return r;
      }
      function Ds(t, e, n, s = !0) {
        const i = e ? e.vnode : null;
        if (e) {
          let s = e.parent;
          const i = e.proxy,
            r = n;
          while (s) {
            const e = s.ec;
            if (e)
              for (let n = 0; n < e.length; n++)
                if (!1 === e[n](t, i, r)) return;
            s = s.parent;
          }
          const o = e.appContext.config.errorHandler;
          if (o) return void js(o, null, 10, [t, i, r]);
        }
        Rs(t, n, i, s);
      }
      function Rs(t, e, n, s = !0) {
        console.error(t);
      }
      let Ns = !1,
        Ps = !1;
      const Vs = [];
      let Fs = 0;
      const Ls = [];
      let qs = null,
        Bs = 0;
      const Ws = [];
      let Us = null,
        zs = 0;
      const Gs = Promise.resolve();
      let $s = null,
        Hs = null;
      function Ys(t) {
        const e = $s || Gs;
        return t ? e.then(this ? t.bind(this) : t) : e;
      }
      function Xs(t) {
        let e = Fs + 1,
          n = Vs.length;
        while (e < n) {
          const s = (e + n) >>> 1,
            i = ii(Vs[s]);
          i < t ? (e = s + 1) : (n = s);
        }
        return e;
      }
      function Zs(t) {
        (Vs.length && Vs.includes(t, Ns && t.allowRecurse ? Fs + 1 : Fs)) ||
          t === Hs ||
          (null == t.id ? Vs.push(t) : Vs.splice(Xs(t.id), 0, t), Qs());
      }
      function Qs() {
        Ns || Ps || ((Ps = !0), ($s = Gs.then(ri)));
      }
      function Js(t) {
        const e = Vs.indexOf(t);
        e > Fs && Vs.splice(e, 1);
      }
      function Ks(t, e, n, i) {
        Object(s["m"])(t)
          ? n.push(...t)
          : (e && e.includes(t, t.allowRecurse ? i + 1 : i)) || n.push(t),
          Qs();
      }
      function ti(t) {
        Ks(t, qs, Ls, Bs);
      }
      function ei(t) {
        Ks(t, Us, Ws, zs);
      }
      function ni(t, e = null) {
        if (Ls.length) {
          for (
            Hs = e, qs = [...new Set(Ls)], Ls.length = 0, Bs = 0;
            Bs < qs.length;
            Bs++
          )
            qs[Bs]();
          (qs = null), (Bs = 0), (Hs = null), ni(t, e);
        }
      }
      function si(t) {
        if (Ws.length) {
          const t = [...new Set(Ws)];
          if (((Ws.length = 0), Us)) return void Us.push(...t);
          for (
            Us = t, Us.sort((t, e) => ii(t) - ii(e)), zs = 0;
            zs < Us.length;
            zs++
          )
            Us[zs]();
          (Us = null), (zs = 0);
        }
      }
      const ii = (t) => (null == t.id ? 1 / 0 : t.id);
      function ri(t) {
        (Ps = !1), (Ns = !0), ni(t), Vs.sort((t, e) => ii(t) - ii(e));
        try {
          for (Fs = 0; Fs < Vs.length; Fs++) {
            const t = Vs[Fs];
            t && !1 !== t.active && js(t, null, 14);
          }
        } finally {
          (Fs = 0),
            (Vs.length = 0),
            si(t),
            (Ns = !1),
            ($s = null),
            (Vs.length || Ls.length || Ws.length) && ri(t);
        }
      }
      const oi = {};
      function ai(t, e, n) {
        return ci(t, e, n);
      }
      function ci(
        t,
        e,
        { immediate: n, deep: i, flush: r, onTrack: o, onTrigger: a } = s["b"]
      ) {
        const c = fs;
        let u,
          l,
          h = !1,
          p = !1;
        if (
          (Pt(t)
            ? ((u = () => t.value), (h = !!t._shallow))
            : Et(t)
            ? ((u = () => t), (i = !0))
            : Object(s["m"])(t)
            ? ((p = !0),
              (h = t.some(Et)),
              (u = () =>
                t.map((t) =>
                  Pt(t)
                    ? t.value
                    : Et(t)
                    ? hi(t)
                    : Object(s["n"])(t)
                    ? js(t, c, 2)
                    : void 0
                )))
            : (u = Object(s["n"])(t)
                ? e
                  ? () => js(t, c, 2)
                  : () => {
                      if (!c || !c.isUnmounted)
                        return l && l(), Is(t, c, 3, [d]);
                    }
                : s["d"]),
          e && i)
        ) {
          const t = u;
          u = () => hi(t());
        }
        let d = (t) => {
            l = _.onStop = () => {
              js(t, c, 4);
            };
          },
          f = p ? [] : oi;
        const m = () => {
          if (_.active)
            if (e) {
              const t = _.run();
              (i ||
                h ||
                (p
                  ? t.some((t, e) => Object(s["i"])(t, f[e]))
                  : Object(s["i"])(t, f))) &&
                (l && l(), Is(e, c, 3, [t, f === oi ? void 0 : f, d]), (f = t));
            } else _.run();
        };
        let g;
        (m.allowRecurse = !!e),
          (g =
            "sync" === r
              ? m
              : "post" === r
              ? () => bn(m, c && c.suspense)
              : () => {
                  !c || c.isMounted ? ti(m) : m();
                });
        const _ = new w(u, g);
        return (
          e
            ? n
              ? m()
              : (f = _.run())
            : "post" === r
            ? bn(_.run.bind(_), c && c.suspense)
            : _.run(),
          () => {
            _.stop(), c && c.scope && Object(s["I"])(c.scope.effects, _);
          }
        );
      }
      function ui(t, e, n) {
        const i = this.proxy,
          r = Object(s["B"])(t)
            ? t.includes(".")
              ? li(i, t)
              : () => i[t]
            : t.bind(i, i);
        let o;
        Object(s["n"])(e) ? (o = e) : ((o = e.handler), (n = e));
        const a = fs;
        gs(this);
        const c = ci(r, o.bind(i), n);
        return a ? gs(a) : _s(), c;
      }
      function li(t, e) {
        const n = e.split(".");
        return () => {
          let e = t;
          for (let t = 0; t < n.length && e; t++) e = e[n[t]];
          return e;
        };
      }
      function hi(t, e = new Set()) {
        if (!Object(s["t"])(t) || t["__v_skip"]) return t;
        if (((e = e || new Set()), e.has(t))) return t;
        if ((e.add(t), Pt(t))) hi(t.value, e);
        else if (Object(s["m"])(t))
          for (let n = 0; n < t.length; n++) hi(t[n], e);
        else if (Object(s["z"])(t) || Object(s["r"])(t))
          t.forEach((t) => {
            hi(t, e);
          });
        else if (Object(s["v"])(t)) for (const n in t) hi(t[n], e);
        return t;
      }
      function pi(t, e, n) {
        const i = arguments.length;
        return 2 === i
          ? Object(s["t"])(e) && !Object(s["m"])(e)
            ? $n(e)
              ? Jn(t, null, [e])
              : Jn(t, e)
            : Jn(t, null, e)
          : (i > 3
              ? (n = Array.prototype.slice.call(arguments, 2))
              : 3 === i && $n(n) && (n = [n]),
            Jn(t, e, n));
      }
      Symbol("");
      const di = "3.2.2",
        fi = "http://www.w3.org/2000/svg",
        mi = "undefined" !== typeof document ? document : null,
        gi = new Map(),
        _i = {
          insert: (t, e, n) => {
            e.insertBefore(t, n || null);
          },
          remove: (t) => {
            const e = t.parentNode;
            e && e.removeChild(t);
          },
          createElement: (t, e, n, s) => {
            const i = e
              ? mi.createElementNS(fi, t)
              : mi.createElement(t, n ? { is: n } : void 0);
            return (
              "select" === t &&
                s &&
                null != s.multiple &&
                i.setAttribute("multiple", s.multiple),
              i
            );
          },
          createText: (t) => mi.createTextNode(t),
          createComment: (t) => mi.createComment(t),
          setText: (t, e) => {
            t.nodeValue = e;
          },
          setElementText: (t, e) => {
            t.textContent = e;
          },
          parentNode: (t) => t.parentNode,
          nextSibling: (t) => t.nextSibling,
          querySelector: (t) => mi.querySelector(t),
          setScopeId(t, e) {
            t.setAttribute(e, "");
          },
          cloneNode(t) {
            const e = t.cloneNode(!0);
            return "_value" in t && (e._value = t._value), e;
          },
          insertStaticContent(t, e, n, s) {
            const i = n ? n.previousSibling : e.lastChild;
            let r = gi.get(t);
            if (!r) {
              const e = mi.createElement("template");
              if (
                ((e.innerHTML = s ? `<svg>${t}</svg>` : t), (r = e.content), s)
              ) {
                const t = r.firstChild;
                while (t.firstChild) r.appendChild(t.firstChild);
                r.removeChild(t);
              }
              gi.set(t, r);
            }
            return (
              e.insertBefore(r.cloneNode(!0), n),
              [
                i ? i.nextSibling : e.firstChild,
                n ? n.previousSibling : e.lastChild,
              ]
            );
          },
        };
      function vi(t, e, n) {
        const s = t._vtc;
        s && (e = (e ? [e, ...s] : [...s]).join(" ")),
          null == e
            ? t.removeAttribute("class")
            : n
            ? t.setAttribute("class", e)
            : (t.className = e);
      }
      function yi(t, e, n) {
        const i = t.style;
        if (n)
          if (Object(s["B"])(n)) {
            if (e !== n) {
              const e = i.display;
              (i.cssText = n), "_vod" in t && (i.display = e);
            }
          } else {
            for (const t in n) wi(i, t, n[t]);
            if (e && !Object(s["B"])(e))
              for (const t in e) null == n[t] && wi(i, t, "");
          }
        else t.removeAttribute("style");
      }
      const bi = /\s*!important$/;
      function wi(t, e, n) {
        if (Object(s["m"])(n)) n.forEach((n) => wi(t, e, n));
        else if (e.startsWith("--")) t.setProperty(e, n);
        else {
          const i = Oi(t, e);
          bi.test(n)
            ? t.setProperty(Object(s["k"])(i), n.replace(bi, ""), "important")
            : (t[i] = n);
        }
      }
      const xi = ["Webkit", "Moz", "ms"],
        Ti = {};
      function Oi(t, e) {
        const n = Ti[e];
        if (n) return n;
        let i = Object(s["e"])(e);
        if ("filter" !== i && i in t) return (Ti[e] = i);
        i = Object(s["f"])(i);
        for (let s = 0; s < xi.length; s++) {
          const n = xi[s] + i;
          if (n in t) return (Ti[e] = n);
        }
        return e;
      }
      const Ci = "http://www.w3.org/1999/xlink";
      function Si(t, e, n, i, r) {
        if (i && e.startsWith("xlink:"))
          null == n
            ? t.removeAttributeNS(Ci, e.slice(6, e.length))
            : t.setAttributeNS(Ci, e, n);
        else {
          const i = Object(s["A"])(e);
          null == n || (i && !1 === n)
            ? t.removeAttribute(e)
            : t.setAttribute(e, i ? "" : n);
        }
      }
      function Ai(t, e, n, s, i, r, o) {
        if ("innerHTML" === e || "textContent" === e)
          return s && o(s, i, r), void (t[e] = null == n ? "" : n);
        if ("value" === e && "PROGRESS" !== t.tagName) {
          t._value = n;
          const s = null == n ? "" : n;
          return (
            t.value !== s && (t.value = s),
            void (null == n && t.removeAttribute(e))
          );
        }
        if ("" === n || null == n) {
          const s = typeof t[e];
          if ("" === n && "boolean" === s) return void (t[e] = !0);
          if (null == n && "string" === s)
            return (t[e] = ""), void t.removeAttribute(e);
          if ("number" === s) {
            try {
              t[e] = 0;
            } catch (a) {}
            return void t.removeAttribute(e);
          }
        }
        try {
          t[e] = n;
        } catch (c) {
          0;
        }
      }
      let ki = Date.now,
        Ei = !1;
      if ("undefined" !== typeof window) {
        ki() > document.createEvent("Event").timeStamp &&
          (ki = () => performance.now());
        const t = navigator.userAgent.match(/firefox\/(\d+)/i);
        Ei = !!(t && Number(t[1]) <= 53);
      }
      let Mi = 0;
      const ji = Promise.resolve(),
        Ii = () => {
          Mi = 0;
        },
        Di = () => Mi || (ji.then(Ii), (Mi = ki()));
      function Ri(t, e, n, s) {
        t.addEventListener(e, n, s);
      }
      function Ni(t, e, n, s) {
        t.removeEventListener(e, n, s);
      }
      function Pi(t, e, n, s, i = null) {
        const r = t._vei || (t._vei = {}),
          o = r[e];
        if (s && o) o.value = s;
        else {
          const [n, a] = Fi(e);
          if (s) {
            const o = (r[e] = Li(s, i));
            Ri(t, n, o, a);
          } else o && (Ni(t, n, o, a), (r[e] = void 0));
        }
      }
      const Vi = /(?:Once|Passive|Capture)$/;
      function Fi(t) {
        let e;
        if (Vi.test(t)) {
          let n;
          e = {};
          while ((n = t.match(Vi)))
            (t = t.slice(0, t.length - n[0].length)),
              (e[n[0].toLowerCase()] = !0);
        }
        return [Object(s["k"])(t.slice(2)), e];
      }
      function Li(t, e) {
        const n = (t) => {
          const s = t.timeStamp || ki();
          (Ei || s >= n.attached - 1) && Is(qi(t, n.value), e, 5, [t]);
        };
        return (n.value = t), (n.attached = Di()), n;
      }
      function qi(t, e) {
        if (Object(s["m"])(e)) {
          const n = t.stopImmediatePropagation;
          return (
            (t.stopImmediatePropagation = () => {
              n.call(t), (t._stopped = !0);
            }),
            e.map((t) => (e) => !e._stopped && t(e))
          );
        }
        return e;
      }
      const Bi = /^on[a-z]/,
        Wi = (t, e, n, i, r = !1, o, a, c, u) => {
          "class" === e
            ? vi(t, i, r)
            : "style" === e
            ? yi(t, n, i)
            : Object(s["u"])(e)
            ? Object(s["s"])(e) || Pi(t, e, n, i, a)
            : (
                "." === e[0]
                  ? ((e = e.slice(1)), 1)
                  : "^" === e[0]
                  ? ((e = e.slice(1)), 0)
                  : Ui(t, e, i, r)
              )
            ? Ai(t, e, i, o, a, c, u)
            : ("true-value" === e
                ? (t._trueValue = i)
                : "false-value" === e && (t._falseValue = i),
              Si(t, e, i, r));
        };
      function Ui(t, e, n, i) {
        return i
          ? "innerHTML" === e ||
              "textContent" === e ||
              !!(e in t && Bi.test(e) && Object(s["n"])(n))
          : "spellcheck" !== e &&
              "draggable" !== e &&
              "form" !== e &&
              ("list" !== e || "INPUT" !== t.tagName) &&
              ("type" !== e || "TEXTAREA" !== t.tagName) &&
              (!Bi.test(e) || !Object(s["B"])(n)) &&
              e in t;
      }
      "undefined" !== typeof HTMLElement && HTMLElement;
      const zi = "transition",
        Gi = "animation",
        $i = (t, { slots: e }) => pi(le, Zi(t), e);
      $i.displayName = "Transition";
      const Hi = {
          name: String,
          type: String,
          css: { type: Boolean, default: !0 },
          duration: [String, Number, Object],
          enterFromClass: String,
          enterActiveClass: String,
          enterToClass: String,
          appearFromClass: String,
          appearActiveClass: String,
          appearToClass: String,
          leaveFromClass: String,
          leaveActiveClass: String,
          leaveToClass: String,
        },
        Yi =
          (($i.props = Object(s["h"])({}, le.props, Hi)),
          (t, e = []) => {
            Object(s["m"])(t) ? t.forEach((t) => t(...e)) : t && t(...e);
          }),
        Xi = (t) =>
          !!t &&
          (Object(s["m"])(t) ? t.some((t) => t.length > 1) : t.length > 1);
      function Zi(t) {
        const e = {};
        for (const s in t) s in Hi || (e[s] = t[s]);
        if (!1 === t.css) return e;
        const {
            name: n = "v",
            type: i,
            duration: r,
            enterFromClass: o = n + "-enter-from",
            enterActiveClass: a = n + "-enter-active",
            enterToClass: c = n + "-enter-to",
            appearFromClass: u = o,
            appearActiveClass: l = a,
            appearToClass: h = c,
            leaveFromClass: p = n + "-leave-from",
            leaveActiveClass: d = n + "-leave-active",
            leaveToClass: f = n + "-leave-to",
          } = t,
          m = Qi(r),
          g = m && m[0],
          _ = m && m[1],
          {
            onBeforeEnter: v,
            onEnter: y,
            onEnterCancelled: b,
            onLeave: w,
            onLeaveCancelled: x,
            onBeforeAppear: T = v,
            onAppear: O = y,
            onAppearCancelled: C = b,
          } = e,
          S = (t, e, n) => {
            tr(t, e ? h : c), tr(t, e ? l : a), n && n();
          },
          A = (t, e) => {
            tr(t, f), tr(t, d), e && e();
          },
          k = (t) => (e, n) => {
            const s = t ? O : y,
              r = () => S(e, t, n);
            Yi(s, [e, r]),
              er(() => {
                tr(e, t ? u : o), Ki(e, t ? h : c), Xi(s) || sr(e, i, g, r);
              });
          };
        return Object(s["h"])(e, {
          onBeforeEnter(t) {
            Yi(v, [t]), Ki(t, o), Ki(t, a);
          },
          onBeforeAppear(t) {
            Yi(T, [t]), Ki(t, u), Ki(t, l);
          },
          onEnter: k(!1),
          onAppear: k(!0),
          onLeave(t, e) {
            const n = () => A(t, e);
            Ki(t, p),
              ar(),
              Ki(t, d),
              er(() => {
                tr(t, p), Ki(t, f), Xi(w) || sr(t, i, _, n);
              }),
              Yi(w, [t, n]);
          },
          onEnterCancelled(t) {
            S(t, !1), Yi(b, [t]);
          },
          onAppearCancelled(t) {
            S(t, !0), Yi(C, [t]);
          },
          onLeaveCancelled(t) {
            A(t), Yi(x, [t]);
          },
        });
      }
      function Qi(t) {
        if (null == t) return null;
        if (Object(s["t"])(t)) return [Ji(t.enter), Ji(t.leave)];
        {
          const e = Ji(t);
          return [e, e];
        }
      }
      function Ji(t) {
        const e = Object(s["L"])(t);
        return e;
      }
      function Ki(t, e) {
        e.split(/\s+/).forEach((e) => e && t.classList.add(e)),
          (t._vtc || (t._vtc = new Set())).add(e);
      }
      function tr(t, e) {
        e.split(/\s+/).forEach((e) => e && t.classList.remove(e));
        const { _vtc: n } = t;
        n && (n.delete(e), n.size || (t._vtc = void 0));
      }
      function er(t) {
        requestAnimationFrame(() => {
          requestAnimationFrame(t);
        });
      }
      let nr = 0;
      function sr(t, e, n, s) {
        const i = (t._endId = ++nr),
          r = () => {
            i === t._endId && s();
          };
        if (n) return setTimeout(r, n);
        const { type: o, timeout: a, propCount: c } = ir(t, e);
        if (!o) return s();
        const u = o + "end";
        let l = 0;
        const h = () => {
            t.removeEventListener(u, p), r();
          },
          p = (e) => {
            e.target === t && ++l >= c && h();
          };
        setTimeout(() => {
          l < c && h();
        }, a + 1),
          t.addEventListener(u, p);
      }
      function ir(t, e) {
        const n = window.getComputedStyle(t),
          s = (t) => (n[t] || "").split(", "),
          i = s(zi + "Delay"),
          r = s(zi + "Duration"),
          o = rr(i, r),
          a = s(Gi + "Delay"),
          c = s(Gi + "Duration"),
          u = rr(a, c);
        let l = null,
          h = 0,
          p = 0;
        e === zi
          ? o > 0 && ((l = zi), (h = o), (p = r.length))
          : e === Gi
          ? u > 0 && ((l = Gi), (h = u), (p = c.length))
          : ((h = Math.max(o, u)),
            (l = h > 0 ? (o > u ? zi : Gi) : null),
            (p = l ? (l === zi ? r.length : c.length) : 0));
        const d = l === zi && /\b(transform|all)(,|$)/.test(n[zi + "Property"]);
        return { type: l, timeout: h, propCount: p, hasTransform: d };
      }
      function rr(t, e) {
        while (t.length < e.length) t = t.concat(t);
        return Math.max(...e.map((e, n) => or(e) + or(t[n])));
      }
      function or(t) {
        return 1e3 * Number(t.slice(0, -1).replace(",", "."));
      }
      function ar() {
        return document.body.offsetHeight;
      }
      new WeakMap(), new WeakMap();
      const cr = Object(s["h"])({ patchProp: Wi }, _i);
      let ur;
      function lr() {
        return ur || (ur = wn(cr));
      }
      const hr = (...t) => {
        const e = lr().createApp(...t);
        const { mount: n } = e;
        return (
          (e.mount = (t) => {
            const i = pr(t);
            if (!i) return;
            const r = e._component;
            Object(s["n"])(r) ||
              r.render ||
              r.template ||
              (r.template = i.innerHTML),
              (i.innerHTML = "");
            const o = n(i, !1, i instanceof SVGElement);
            return (
              i instanceof Element &&
                (i.removeAttribute("v-cloak"),
                i.setAttribute("data-v-app", "")),
              o
            );
          }),
          e
        );
      };
      function pr(t) {
        if (Object(s["B"])(t)) {
          const e = document.querySelector(t);
          return e;
        }
        return t;
      }
    },
    "7b0b": function (t, e, n) {
      var s = n("1d80");
      t.exports = function (t) {
        return Object(s(t));
      };
    },
    "7c73": function (t, e, n) {
      var s,
        i = n("825a"),
        r = n("37e8"),
        o = n("7839"),
        a = n("d012"),
        c = n("1be4"),
        u = n("cc12"),
        l = n("f772"),
        h = ">",
        p = "<",
        d = "prototype",
        f = "script",
        m = l("IE_PROTO"),
        g = function () {},
        _ = function (t) {
          return p + f + h + t + p + "/" + f + h;
        },
        v = function (t) {
          t.write(_("")), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        },
        y = function () {
          var t,
            e = u("iframe"),
            n = "java" + f + ":";
          if (e.style)
            return (
              (e.style.display = "none"),
              c.appendChild(e),
              (e.src = String(n)),
              (t = e.contentWindow.document),
              t.open(),
              t.write(_("document.F=Object")),
              t.close(),
              t.F
            );
        },
        b = function () {
          try {
            s = new ActiveXObject("htmlfile");
          } catch (e) {}
          b = document.domain && s ? v(s) : y() || v(s);
          var t = o.length;
          while (t--) delete b[d][o[t]];
          return b();
        };
      (a[m] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var n;
            return (
              null !== t
                ? ((g[d] = i(t)), (n = new g()), (g[d] = null), (n[m] = t))
                : (n = b()),
              void 0 === e ? n : r(n, e)
            );
          });
    },
    "7db0": function (t, e, n) {
      "use strict";
      var s = n("23e7"),
        i = n("b727").find,
        r = n("44d2"),
        o = "find",
        a = !0;
      o in [] &&
        Array(1)[o](function () {
          a = !1;
        }),
        s(
          { target: "Array", proto: !0, forced: a },
          {
            find: function (t) {
              return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        r(o);
    },
    "7dd0": function (t, e, n) {
      "use strict";
      var s = n("23e7"),
        i = n("9ed3"),
        r = n("e163"),
        o = n("d2bb"),
        a = n("d44e"),
        c = n("9112"),
        u = n("6eeb"),
        l = n("b622"),
        h = n("c430"),
        p = n("3f8c"),
        d = n("ae93"),
        f = d.IteratorPrototype,
        m = d.BUGGY_SAFARI_ITERATORS,
        g = l("iterator"),
        _ = "keys",
        v = "values",
        y = "entries",
        b = function () {
          return this;
        };
      t.exports = function (t, e, n, l, d, w, x) {
        i(n, e, l);
        var T,
          O,
          C,
          S = function (t) {
            if (t === d && j) return j;
            if (!m && t in E) return E[t];
            switch (t) {
              case _:
                return function () {
                  return new n(this, t);
                };
              case v:
                return function () {
                  return new n(this, t);
                };
              case y:
                return function () {
                  return new n(this, t);
                };
            }
            return function () {
              return new n(this);
            };
          },
          A = e + " Iterator",
          k = !1,
          E = t.prototype,
          M = E[g] || E["@@iterator"] || (d && E[d]),
          j = (!m && M) || S(d),
          I = ("Array" == e && E.entries) || M;
        if (
          (I &&
            ((T = r(I.call(new t()))),
            f !== Object.prototype &&
              T.next &&
              (h ||
                r(T) === f ||
                (o ? o(T, f) : "function" != typeof T[g] && c(T, g, b)),
              a(T, A, !0, !0),
              h && (p[A] = b))),
          d == v &&
            M &&
            M.name !== v &&
            ((k = !0),
            (j = function () {
              return M.call(this);
            })),
          (h && !x) || E[g] === j || c(E, g, j),
          (p[e] = j),
          d)
        )
          if (((O = { values: S(v), keys: w ? j : S(_), entries: S(y) }), x))
            for (C in O) (m || k || !(C in E)) && u(E, C, O[C]);
          else s({ target: e, proto: !0, forced: m || k }, O);
        return O;
      };
    },
    "7f9a": function (t, e, n) {
      var s = n("da84"),
        i = n("8925"),
        r = s.WeakMap;
      t.exports = "function" === typeof r && /native code/.test(i(r));
    },
    "825a": function (t, e, n) {
      var s = n("861d");
      t.exports = function (t) {
        if (!s(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    },
    "83ab": function (t, e, n) {
      var s = n("d039");
      t.exports = !s(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    8418: function (t, e, n) {
      "use strict";
      var s = n("a04b"),
        i = n("9bf2"),
        r = n("5c6c");
      t.exports = function (t, e, n) {
        var o = s(e);
        o in t ? i.f(t, o, r(0, n)) : (t[o] = n);
      };
    },
    "861d": function (t, e) {
      t.exports = function (t) {
        return "object" === typeof t ? null !== t : "function" === typeof t;
      };
    },
    8925: function (t, e, n) {
      var s = n("c6cd"),
        i = Function.toString;
      "function" != typeof s.inspectSource &&
        (s.inspectSource = function (t) {
          return i.call(t);
        }),
        (t.exports = s.inspectSource);
    },
    "90e3": function (t, e) {
      var n = 0,
        s = Math.random();
      t.exports = function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++n + s).toString(36)
        );
      };
    },
    9112: function (t, e, n) {
      var s = n("83ab"),
        i = n("9bf2"),
        r = n("5c6c");
      t.exports = s
        ? function (t, e, n) {
            return i.f(t, e, r(1, n));
          }
        : function (t, e, n) {
            return (t[e] = n), t;
          };
    },
    9483: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var s,
        i = function () {
          return Boolean(
            "localhost" === window.location.hostname ||
              "[::1]" === window.location.hostname ||
              window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
              )
          );
        };
      function r(t, e) {
        void 0 === e && (e = {});
        var n = e.registrationOptions;
        void 0 === n && (n = {}), delete e.registrationOptions;
        var r = function (t) {
          var n = [],
            s = arguments.length - 1;
          while (s-- > 0) n[s] = arguments[s + 1];
          e && e[t] && e[t].apply(e, n);
        };
        "serviceWorker" in navigator &&
          s.then(function () {
            i()
              ? (c(t, r, n),
                navigator.serviceWorker.ready
                  .then(function (t) {
                    r("ready", t);
                  })
                  .catch(function (t) {
                    return o(r, t);
                  }))
              : (a(t, r, n),
                navigator.serviceWorker.ready
                  .then(function (t) {
                    r("ready", t);
                  })
                  .catch(function (t) {
                    return o(r, t);
                  }));
          });
      }
      function o(t, e) {
        navigator.onLine || t("offline"), t("error", e);
      }
      function a(t, e, n) {
        navigator.serviceWorker
          .register(t, n)
          .then(function (t) {
            e("registered", t),
              t.waiting
                ? e("updated", t)
                : (t.onupdatefound = function () {
                    e("updatefound", t);
                    var n = t.installing;
                    n.onstatechange = function () {
                      "installed" === n.state &&
                        (navigator.serviceWorker.controller
                          ? e("updated", t)
                          : e("cached", t));
                    };
                  });
          })
          .catch(function (t) {
            return o(e, t);
          });
      }
      function c(t, e, n) {
        fetch(t)
          .then(function (s) {
            404 === s.status
              ? (e("error", new Error("Service worker not found at " + t)), u())
              : -1 === s.headers.get("content-type").indexOf("javascript")
              ? (e(
                  "error",
                  new Error(
                    "Expected " +
                      t +
                      " to have javascript content-type, but received " +
                      s.headers.get("content-type")
                  )
                ),
                u())
              : a(t, e, n);
          })
          .catch(function (t) {
            return o(e, t);
          });
      }
      function u() {
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (t) {
              t.unregister();
            })
            .catch(function (t) {
              return o(emit, t);
            });
      }
      "undefined" !== typeof window &&
        (s =
          "undefined" !== typeof Promise
            ? new Promise(function (t) {
                return window.addEventListener("load", t);
              })
            : {
                then: function (t) {
                  return window.addEventListener("load", t);
                },
              });
    },
    "94ca": function (t, e, n) {
      var s = n("d039"),
        i = /#|\.prototype\./,
        r = function (t, e) {
          var n = a[o(t)];
          return n == u || (n != c && ("function" == typeof e ? s(e) : !!e));
        },
        o = (r.normalize = function (t) {
          return String(t).replace(i, ".").toLowerCase();
        }),
        a = (r.data = {}),
        c = (r.NATIVE = "N"),
        u = (r.POLYFILL = "P");
      t.exports = r;
    },
    "96cf": function (t, e, n) {
      var s = (function (t) {
        "use strict";
        var e,
          n = Object.prototype,
          s = n.hasOwnProperty,
          i = "function" === typeof Symbol ? Symbol : {},
          r = i.iterator || "@@iterator",
          o = i.asyncIterator || "@@asyncIterator",
          a = i.toStringTag || "@@toStringTag";
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, "");
        } catch (I) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function u(t, e, n, s) {
          var i = e && e.prototype instanceof g ? e : g,
            r = Object.create(i.prototype),
            o = new E(s || []);
          return (r._invoke = C(t, n, o)), r;
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (I) {
            return { type: "throw", arg: I };
          }
        }
        t.wrap = u;
        var h = "suspendedStart",
          p = "suspendedYield",
          d = "executing",
          f = "completed",
          m = {};
        function g() {}
        function _() {}
        function v() {}
        var y = {};
        c(y, r, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          w = b && b(b(M([])));
        w && w !== n && s.call(w, r) && (y = w);
        var x = (v.prototype = g.prototype = Object.create(y));
        function T(t) {
          ["next", "throw", "return"].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function O(t, e) {
          function n(i, r, o, a) {
            var c = l(t[i], t, r);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" === typeof h && s.call(h, "__await")
                ? e.resolve(h.__await).then(
                    function (t) {
                      n("next", t, o, a);
                    },
                    function (t) {
                      n("throw", t, o, a);
                    }
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), o(u);
                    },
                    function (t) {
                      return n("throw", t, o, a);
                    }
                  );
            }
            a(c.arg);
          }
          var i;
          function r(t, s) {
            function r() {
              return new e(function (e, i) {
                n(t, s, e, i);
              });
            }
            return (i = i ? i.then(r, r) : r());
          }
          this._invoke = r;
        }
        function C(t, e, n) {
          var s = h;
          return function (i, r) {
            if (s === d) throw new Error("Generator is already running");
            if (s === f) {
              if ("throw" === i) throw r;
              return j();
            }
            (n.method = i), (n.arg = r);
            while (1) {
              var o = n.delegate;
              if (o) {
                var a = S(o, n);
                if (a) {
                  if (a === m) continue;
                  return a;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (s === h) throw ((s = f), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              s = d;
              var c = l(t, e, n);
              if ("normal" === c.type) {
                if (((s = n.done ? f : p), c.arg === m)) continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((s = f), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function S(t, n) {
          var s = t.iterator[n.method];
          if (s === e) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                t.iterator["return"] &&
                ((n.method = "return"),
                (n.arg = e),
                S(t, n),
                "throw" === n.method)
              )
                return m;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return m;
          }
          var i = l(s, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
            );
          var r = i.arg;
          return r
            ? r.done
              ? ((n[t.resultName] = r.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : r
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function A(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(A, this),
            this.reset(!0);
        }
        function M(t) {
          if (t) {
            var n = t[r];
            if (n) return n.call(t);
            if ("function" === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                o = function n() {
                  while (++i < t.length)
                    if (s.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: e, done: !0 };
        }
        return (
          (_.prototype = v),
          c(x, "constructor", v),
          c(v, "constructor", _),
          (_.displayName = c(v, a, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" === typeof t && t.constructor;
            return (
              !!e &&
              (e === _ || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, v)
                : ((t.__proto__ = v), c(t, a, "GeneratorFunction")),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          T(O.prototype),
          c(O.prototype, o, function () {
            return this;
          }),
          (t.AsyncIterator = O),
          (t.async = function (e, n, s, i, r) {
            void 0 === r && (r = Promise);
            var o = new O(u(e, n, s, i), r);
            return t.isGeneratorFunction(n)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          T(x),
          c(x, a, "Generator"),
          c(x, r, function () {
            return this;
          }),
          c(x, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return (
              e.reverse(),
              function n() {
                while (e.length) {
                  var s = e.pop();
                  if (s in t) return (n.value = s), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = M),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(k),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    s.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0],
                e = t.completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function i(s, i) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (n.next = s),
                  i && ((n.method = "next"), (n.arg = e)),
                  !!i
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                  a = o.completion;
                if ("root" === o.tryLoc) return i("end");
                if (o.tryLoc <= this.prev) {
                  var c = s.call(o, "catchLoc"),
                    u = s.call(o, "finallyLoc");
                  if (c && u) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  s.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var r = i;
                  break;
                }
              }
              r &&
                ("break" === t || "continue" === t) &&
                r.tryLoc <= e &&
                e <= r.finallyLoc &&
                (r = null);
              var o = r ? r.completion : {};
              return (
                (o.type = t),
                (o.arg = e),
                r
                  ? ((this.method = "next"), (this.next = r.finallyLoc), m)
                  : this.complete(o)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                m
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), k(n), m;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var s = n.completion;
                  if ("throw" === s.type) {
                    var i = s.arg;
                    k(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, s) {
              return (
                (this.delegate = { iterator: M(t), resultName: n, nextLoc: s }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = s;
      } catch (i) {
        "object" === typeof globalThis
          ? (globalThis.regeneratorRuntime = s)
          : Function("r", "regeneratorRuntime = r")(s);
      }
    },
    "970b": function (t, e) {
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      (t.exports = n),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    "9b42": function (t, e, n) {
      function s(t, e) {
        var n =
          null == t
            ? null
            : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != n) {
          var s,
            i,
            r = [],
            o = !0,
            a = !1;
          try {
            for (n = n.call(t); !(o = (s = n.next()).done); o = !0)
              if ((r.push(s.value), e && r.length === e)) break;
          } catch (c) {
            (a = !0), (i = c);
          } finally {
            try {
              o || null == n["return"] || n["return"]();
            } finally {
              if (a) throw i;
            }
          }
          return r;
        }
      }
      n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d28b"),
        n("3ca3"),
        n("ddb0"),
        (t.exports = s),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    "9bdd": function (t, e, n) {
      var s = n("825a"),
        i = n("2a62");
      t.exports = function (t, e, n, r) {
        try {
          return r ? e(s(n)[0], n[1]) : e(n);
        } catch (o) {
          throw (i(t), o);
        }
      };
    },
    "9bf2": function (t, e, n) {
      var s = n("83ab"),
        i = n("0cfb"),
        r = n("825a"),
        o = n("a04b"),
        a = Object.defineProperty;
      e.f = s
        ? a
        : function (t, e, n) {
            if ((r(t), (e = o(e)), r(n), i))
              try {
                return a(t, e, n);
              } catch (s) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    "9ed3": function (t, e, n) {
      "use strict";
      var s = n("ae93").IteratorPrototype,
        i = n("7c73"),
        r = n("5c6c"),
        o = n("d44e"),
        a = n("3f8c"),
        c = function () {
          return this;
        };
      t.exports = function (t, e, n) {
        var u = e + " Iterator";
        return (
          (t.prototype = i(s, { next: r(1, n) })),
          o(t, u, !1, !0),
          (a[u] = c),
          t
        );
      };
    },
    "9ff4": function (t, e, n) {
      "use strict";
      (function (t) {
        function s(t, e) {
          const n = Object.create(null),
            s = t.split(",");
          for (let i = 0; i < s.length; i++) n[s[i]] = !0;
          return e ? (t) => !!n[t.toLowerCase()] : (t) => !!n[t];
        }
        n.d(e, "a", function () {
          return T;
        }),
          n.d(e, "b", function () {
            return x;
          }),
          n.d(e, "c", function () {
            return C;
          }),
          n.d(e, "d", function () {
            return O;
          }),
          n.d(e, "e", function () {
            return Z;
          }),
          n.d(e, "f", function () {
            return K;
          }),
          n.d(e, "g", function () {
            return st;
          }),
          n.d(e, "h", function () {
            return E;
          }),
          n.d(e, "i", function () {
            return et;
          }),
          n.d(e, "j", function () {
            return I;
          }),
          n.d(e, "k", function () {
            return J;
          }),
          n.d(e, "l", function () {
            return nt;
          }),
          n.d(e, "m", function () {
            return D;
          }),
          n.d(e, "n", function () {
            return V;
          }),
          n.d(e, "o", function () {
            return r;
          }),
          n.d(e, "p", function () {
            return m;
          }),
          n.d(e, "q", function () {
            return $;
          }),
          n.d(e, "r", function () {
            return R;
          }),
          n.d(e, "s", function () {
            return k;
          }),
          n.d(e, "t", function () {
            return q;
          }),
          n.d(e, "u", function () {
            return A;
          }),
          n.d(e, "v", function () {
            return G;
          }),
          n.d(e, "w", function () {
            return B;
          }),
          n.d(e, "x", function () {
            return H;
          }),
          n.d(e, "y", function () {
            return g;
          }),
          n.d(e, "z", function () {
            return N;
          }),
          n.d(e, "A", function () {
            return a;
          }),
          n.d(e, "B", function () {
            return F;
          }),
          n.d(e, "C", function () {
            return L;
          }),
          n.d(e, "D", function () {
            return v;
          }),
          n.d(e, "E", function () {
            return y;
          }),
          n.d(e, "F", function () {
            return s;
          }),
          n.d(e, "G", function () {
            return p;
          }),
          n.d(e, "H", function () {
            return c;
          }),
          n.d(e, "I", function () {
            return M;
          }),
          n.d(e, "J", function () {
            return b;
          }),
          n.d(e, "K", function () {
            return tt;
          }),
          n.d(e, "L", function () {
            return it;
          }),
          n.d(e, "M", function () {
            return z;
          });
        const i =
            "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",
          r = s(i);
        const o =
            "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
          a = s(o);
        function c(t) {
          if (D(t)) {
            const e = {};
            for (let n = 0; n < t.length; n++) {
              const s = t[n],
                i = F(s) ? h(s) : c(s);
              if (i) for (const t in i) e[t] = i[t];
            }
            return e;
          }
          return F(t) || q(t) ? t : void 0;
        }
        const u = /;(?![^(]*\))/g,
          l = /:(.+)/;
        function h(t) {
          const e = {};
          return (
            t.split(u).forEach((t) => {
              if (t) {
                const n = t.split(l);
                n.length > 1 && (e[n[0].trim()] = n[1].trim());
              }
            }),
            e
          );
        }
        function p(t) {
          let e = "";
          if (F(t)) e = t;
          else if (D(t))
            for (let n = 0; n < t.length; n++) {
              const s = p(t[n]);
              s && (e += s + " ");
            }
          else if (q(t)) for (const n in t) t[n] && (e += n + " ");
          return e.trim();
        }
        const d =
            "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",
          f =
            "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",
          m = s(d),
          g = s(f);
        function _(t, e) {
          if (t.length !== e.length) return !1;
          let n = !0;
          for (let s = 0; n && s < t.length; s++) n = v(t[s], e[s]);
          return n;
        }
        function v(t, e) {
          if (t === e) return !0;
          let n = P(t),
            s = P(e);
          if (n || s) return !(!n || !s) && t.getTime() === e.getTime();
          if (((n = D(t)), (s = D(e)), n || s)) return !(!n || !s) && _(t, e);
          if (((n = q(t)), (s = q(e)), n || s)) {
            if (!n || !s) return !1;
            const i = Object.keys(t).length,
              r = Object.keys(e).length;
            if (i !== r) return !1;
            for (const n in t) {
              const s = t.hasOwnProperty(n),
                i = e.hasOwnProperty(n);
              if ((s && !i) || (!s && i) || !v(t[n], e[n])) return !1;
            }
          }
          return String(t) === String(e);
        }
        function y(t, e) {
          return t.findIndex((t) => v(t, e));
        }
        const b = (t) =>
            null == t
              ? ""
              : D(t) || (q(t) && t.toString === W)
              ? JSON.stringify(t, w, 2)
              : String(t),
          w = (t, e) =>
            e && e.__v_isRef
              ? w(t, e.value)
              : R(e)
              ? {
                  [`Map(${e.size})`]: [...e.entries()].reduce(
                    (t, [e, n]) => ((t[e + " =>"] = n), t),
                    {}
                  ),
                }
              : N(e)
              ? { [`Set(${e.size})`]: [...e.values()] }
              : !q(e) || D(e) || G(e)
              ? e
              : String(e),
          x = {},
          T = [],
          O = () => {},
          C = () => !1,
          S = /^on[^a-z]/,
          A = (t) => S.test(t),
          k = (t) => t.startsWith("onUpdate:"),
          E = Object.assign,
          M = (t, e) => {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1);
          },
          j = Object.prototype.hasOwnProperty,
          I = (t, e) => j.call(t, e),
          D = Array.isArray,
          R = (t) => "[object Map]" === U(t),
          N = (t) => "[object Set]" === U(t),
          P = (t) => t instanceof Date,
          V = (t) => "function" === typeof t,
          F = (t) => "string" === typeof t,
          L = (t) => "symbol" === typeof t,
          q = (t) => null !== t && "object" === typeof t,
          B = (t) => q(t) && V(t.then) && V(t.catch),
          W = Object.prototype.toString,
          U = (t) => W.call(t),
          z = (t) => U(t).slice(8, -1),
          G = (t) => "[object Object]" === U(t),
          $ = (t) =>
            F(t) && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
          H = s(
            ",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
          ),
          Y = (t) => {
            const e = Object.create(null);
            return (n) => {
              const s = e[n];
              return s || (e[n] = t(n));
            };
          },
          X = /-(\w)/g,
          Z = Y((t) => t.replace(X, (t, e) => (e ? e.toUpperCase() : ""))),
          Q = /\B([A-Z])/g,
          J = Y((t) => t.replace(Q, "-$1").toLowerCase()),
          K = Y((t) => t.charAt(0).toUpperCase() + t.slice(1)),
          tt = Y((t) => (t ? "on" + K(t) : "")),
          et = (t, e) => !Object.is(t, e),
          nt = (t, e) => {
            for (let n = 0; n < t.length; n++) t[n](e);
          },
          st = (t, e, n) => {
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !1,
              value: n,
            });
          },
          it = (t) => {
            const e = parseFloat(t);
            return isNaN(e) ? t : e;
          };
      }.call(this, n("c8ba")));
    },
    a04b: function (t, e, n) {
      var s = n("c04e"),
        i = n("d9b5");
      t.exports = function (t) {
        var e = s(t, "string");
        return i(e) ? e : String(e);
      };
    },
    a4b4: function (t, e, n) {
      var s = n("342f");
      t.exports = /web0s(?!.*chrome)/i.test(s);
    },
    a4d3: function (t, e, n) {
      "use strict";
      var s = n("23e7"),
        i = n("da84"),
        r = n("d066"),
        o = n("c430"),
        a = n("83ab"),
        c = n("4930"),
        u = n("d039"),
        l = n("5135"),
        h = n("e8b5"),
        p = n("861d"),
        d = n("d9b5"),
        f = n("825a"),
        m = n("7b0b"),
        g = n("fc6a"),
        _ = n("a04b"),
        v = n("577e"),
        y = n("5c6c"),
        b = n("7c73"),
        w = n("df75"),
        x = n("241c"),
        T = n("057f"),
        O = n("7418"),
        C = n("06cf"),
        S = n("9bf2"),
        A = n("d1e7"),
        k = n("9112"),
        E = n("6eeb"),
        M = n("5692"),
        j = n("f772"),
        I = n("d012"),
        D = n("90e3"),
        R = n("b622"),
        N = n("e538"),
        P = n("746f"),
        V = n("d44e"),
        F = n("69f3"),
        L = n("b727").forEach,
        q = j("hidden"),
        B = "Symbol",
        W = "prototype",
        U = R("toPrimitive"),
        z = F.set,
        G = F.getterFor(B),
        $ = Object[W],
        H = i.Symbol,
        Y = r("JSON", "stringify"),
        X = C.f,
        Z = S.f,
        Q = T.f,
        J = A.f,
        K = M("symbols"),
        tt = M("op-symbols"),
        et = M("string-to-symbol-registry"),
        nt = M("symbol-to-string-registry"),
        st = M("wks"),
        it = i.QObject,
        rt = !it || !it[W] || !it[W].findChild,
        ot =
          a &&
          u(function () {
            return (
              7 !=
              b(
                Z({}, "a", {
                  get: function () {
                    return Z(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, n) {
                var s = X($, e);
                s && delete $[e], Z(t, e, n), s && t !== $ && Z($, e, s);
              }
            : Z,
        at = function (t, e) {
          var n = (K[t] = b(H[W]));
          return (
            z(n, { type: B, tag: t, description: e }),
            a || (n.description = e),
            n
          );
        },
        ct = function (t, e, n) {
          t === $ && ct(tt, e, n), f(t);
          var s = _(e);
          return (
            f(n),
            l(K, s)
              ? (n.enumerable
                  ? (l(t, q) && t[q][s] && (t[q][s] = !1),
                    (n = b(n, { enumerable: y(0, !1) })))
                  : (l(t, q) || Z(t, q, y(1, {})), (t[q][s] = !0)),
                ot(t, s, n))
              : Z(t, s, n)
          );
        },
        ut = function (t, e) {
          f(t);
          var n = g(e),
            s = w(n).concat(ft(n));
          return (
            L(s, function (e) {
              (a && !ht.call(n, e)) || ct(t, e, n[e]);
            }),
            t
          );
        },
        lt = function (t, e) {
          return void 0 === e ? b(t) : ut(b(t), e);
        },
        ht = function (t) {
          var e = _(t),
            n = J.call(this, e);
          return (
            !(this === $ && l(K, e) && !l(tt, e)) &&
            (!(n || !l(this, e) || !l(K, e) || (l(this, q) && this[q][e])) || n)
          );
        },
        pt = function (t, e) {
          var n = g(t),
            s = _(e);
          if (n !== $ || !l(K, s) || l(tt, s)) {
            var i = X(n, s);
            return (
              !i || !l(K, s) || (l(n, q) && n[q][s]) || (i.enumerable = !0), i
            );
          }
        },
        dt = function (t) {
          var e = Q(g(t)),
            n = [];
          return (
            L(e, function (t) {
              l(K, t) || l(I, t) || n.push(t);
            }),
            n
          );
        },
        ft = function (t) {
          var e = t === $,
            n = Q(e ? tt : g(t)),
            s = [];
          return (
            L(n, function (t) {
              !l(K, t) || (e && !l($, t)) || s.push(K[t]);
            }),
            s
          );
        };
      if (
        (c ||
          ((H = function () {
            if (this instanceof H)
              throw TypeError("Symbol is not a constructor");
            var t =
                arguments.length && void 0 !== arguments[0]
                  ? v(arguments[0])
                  : void 0,
              e = D(t),
              n = function (t) {
                this === $ && n.call(tt, t),
                  l(this, q) && l(this[q], e) && (this[q][e] = !1),
                  ot(this, e, y(1, t));
              };
            return a && rt && ot($, e, { configurable: !0, set: n }), at(e, t);
          }),
          E(H[W], "toString", function () {
            return G(this).tag;
          }),
          E(H, "withoutSetter", function (t) {
            return at(D(t), t);
          }),
          (A.f = ht),
          (S.f = ct),
          (C.f = pt),
          (x.f = T.f = dt),
          (O.f = ft),
          (N.f = function (t) {
            return at(R(t), t);
          }),
          a &&
            (Z(H[W], "description", {
              configurable: !0,
              get: function () {
                return G(this).description;
              },
            }),
            o || E($, "propertyIsEnumerable", ht, { unsafe: !0 }))),
        s({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: H }),
        L(w(st), function (t) {
          P(t);
        }),
        s(
          { target: B, stat: !0, forced: !c },
          {
            for: function (t) {
              var e = v(t);
              if (l(et, e)) return et[e];
              var n = H(e);
              return (et[e] = n), (nt[n] = e), n;
            },
            keyFor: function (t) {
              if (!d(t)) throw TypeError(t + " is not a symbol");
              if (l(nt, t)) return nt[t];
            },
            useSetter: function () {
              rt = !0;
            },
            useSimple: function () {
              rt = !1;
            },
          }
        ),
        s(
          { target: "Object", stat: !0, forced: !c, sham: !a },
          {
            create: lt,
            defineProperty: ct,
            defineProperties: ut,
            getOwnPropertyDescriptor: pt,
          }
        ),
        s(
          { target: "Object", stat: !0, forced: !c },
          { getOwnPropertyNames: dt, getOwnPropertySymbols: ft }
        ),
        s(
          {
            target: "Object",
            stat: !0,
            forced: u(function () {
              O.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (t) {
              return O.f(m(t));
            },
          }
        ),
        Y)
      ) {
        var mt =
          !c ||
          u(function () {
            var t = H();
            return (
              "[null]" != Y([t]) || "{}" != Y({ a: t }) || "{}" != Y(Object(t))
            );
          });
        s(
          { target: "JSON", stat: !0, forced: mt },
          {
            stringify: function (t, e, n) {
              var s,
                i = [t],
                r = 1;
              while (arguments.length > r) i.push(arguments[r++]);
              if (((s = e), (p(e) || void 0 !== t) && !d(t)))
                return (
                  h(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof s && (e = s.call(this, t, e)),
                        !d(e))
                      )
                        return e;
                    }),
                  (i[1] = e),
                  Y.apply(null, i)
                );
            },
          }
        );
      }
      H[W][U] || k(H[W], U, H[W].valueOf), V(H, B), (I[q] = !0);
    },
    a630: function (t, e, n) {
      var s = n("23e7"),
        i = n("4df4"),
        r = n("1c7e"),
        o = !r(function (t) {
          Array.from(t);
        });
      s({ target: "Array", stat: !0, forced: o }, { from: i });
    },
    a691: function (t, e) {
      var n = Math.ceil,
        s = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? s : n)(t);
      };
    },
    a79d: function (t, e, n) {
      "use strict";
      var s = n("23e7"),
        i = n("c430"),
        r = n("fea9"),
        o = n("d039"),
        a = n("d066"),
        c = n("4840"),
        u = n("cdf9"),
        l = n("6eeb"),
        h =
          !!r &&
          o(function () {
            r.prototype["finally"].call(
              { then: function () {} },
              function () {}
            );
          });
      if (
        (s(
          { target: "Promise", proto: !0, real: !0, forced: h },
          {
            finally: function (t) {
              var e = c(this, a("Promise")),
                n = "function" == typeof t;
              return this.then(
                n
                  ? function (n) {
                      return u(e, t()).then(function () {
                        return n;
                      });
                    }
                  : t,
                n
                  ? function (n) {
                      return u(e, t()).then(function () {
                        throw n;
                      });
                    }
                  : t
              );
            },
          }
        ),
        !i && "function" == typeof r)
      ) {
        var p = a("Promise").prototype["finally"];
        r.prototype["finally"] !== p &&
          l(r.prototype, "finally", p, { unsafe: !0 });
      }
    },
    ae93: function (t, e, n) {
      "use strict";
      var s,
        i,
        r,
        o = n("d039"),
        a = n("e163"),
        c = n("9112"),
        u = n("5135"),
        l = n("b622"),
        h = n("c430"),
        p = l("iterator"),
        d = !1,
        f = function () {
          return this;
        };
      [].keys &&
        ((r = [].keys()),
        "next" in r
          ? ((i = a(a(r))), i !== Object.prototype && (s = i))
          : (d = !0));
      var m =
        void 0 == s ||
        o(function () {
          var t = {};
          return s[p].call(t) !== t;
        });
      m && (s = {}),
        (h && !m) || u(s, p) || c(s, p, f),
        (t.exports = { IteratorPrototype: s, BUGGY_SAFARI_ITERATORS: d });
    },
    b041: function (t, e, n) {
      "use strict";
      var s = n("00ee"),
        i = n("f5df");
      t.exports = s
        ? {}.toString
        : function () {
            return "[object " + i(this) + "]";
          };
    },
    b0c0: function (t, e, n) {
      var s = n("83ab"),
        i = n("9bf2").f,
        r = Function.prototype,
        o = r.toString,
        a = /^\s*function ([^ (]*)/,
        c = "name";
      s &&
        !(c in r) &&
        i(r, c, {
          configurable: !0,
          get: function () {
            try {
              return o.call(this).match(a)[1];
            } catch (t) {
              return "";
            }
          },
        });
    },
    b575: function (t, e, n) {
      var s,
        i,
        r,
        o,
        a,
        c,
        u,
        l,
        h = n("da84"),
        p = n("06cf").f,
        d = n("2cf4").set,
        f = n("1cdc"),
        m = n("d4c3"),
        g = n("a4b4"),
        _ = n("605d"),
        v = h.MutationObserver || h.WebKitMutationObserver,
        y = h.document,
        b = h.process,
        w = h.Promise,
        x = p(h, "queueMicrotask"),
        T = x && x.value;
      T ||
        ((s = function () {
          var t, e;
          _ && (t = b.domain) && t.exit();
          while (i) {
            (e = i.fn), (i = i.next);
            try {
              e();
            } catch (n) {
              throw (i ? o() : (r = void 0), n);
            }
          }
          (r = void 0), t && t.enter();
        }),
        f || _ || g || !v || !y
          ? !m && w && w.resolve
            ? ((u = w.resolve(void 0)),
              (u.constructor = w),
              (l = u.then),
              (o = function () {
                l.call(u, s);
              }))
            : (o = _
                ? function () {
                    b.nextTick(s);
                  }
                : function () {
                    d.call(h, s);
                  })
          : ((a = !0),
            (c = y.createTextNode("")),
            new v(s).observe(c, { characterData: !0 }),
            (o = function () {
              c.data = a = !a;
            }))),
        (t.exports =
          T ||
          function (t) {
            var e = { fn: t, next: void 0 };
            r && (r.next = e), i || ((i = e), o()), (r = e);
          });
    },
    b622: function (t, e, n) {
      var s = n("da84"),
        i = n("5692"),
        r = n("5135"),
        o = n("90e3"),
        a = n("4930"),
        c = n("fdbf"),
        u = i("wks"),
        l = s.Symbol,
        h = c ? l : (l && l.withoutSetter) || o;
      t.exports = function (t) {
        return (
          (r(u, t) && (a || "string" == typeof u[t])) ||
            (a && r(l, t) ? (u[t] = l[t]) : (u[t] = h("Symbol." + t))),
          u[t]
        );
      };
    },
    b727: function (t, e, n) {
      var s = n("0366"),
        i = n("44ad"),
        r = n("7b0b"),
        o = n("50c4"),
        a = n("65f0"),
        c = [].push,
        u = function (t) {
          var e = 1 == t,
            n = 2 == t,
            u = 3 == t,
            l = 4 == t,
            h = 6 == t,
            p = 7 == t,
            d = 5 == t || h;
          return function (f, m, g, _) {
            for (
              var v,
                y,
                b = r(f),
                w = i(b),
                x = s(m, g, 3),
                T = o(w.length),
                O = 0,
                C = _ || a,
                S = e ? C(f, T) : n || p ? C(f, 0) : void 0;
              T > O;
              O++
            )
              if ((d || O in w) && ((v = w[O]), (y = x(v, O, b)), t))
                if (e) S[O] = y;
                else if (y)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return v;
                    case 6:
                      return O;
                    case 2:
                      c.call(S, v);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      c.call(S, v);
                  }
            return h ? -1 : u || l ? l : S;
          };
        };
      t.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6),
        filterReject: u(7),
      };
    },
    c04e: function (t, e, n) {
      var s = n("861d"),
        i = n("d9b5"),
        r = n("485a"),
        o = n("b622"),
        a = o("toPrimitive");
      t.exports = function (t, e) {
        if (!s(t) || i(t)) return t;
        var n,
          o = t[a];
        if (void 0 !== o) {
          if (
            (void 0 === e && (e = "default"), (n = o.call(t, e)), !s(n) || i(n))
          )
            return n;
          throw TypeError("Can't convert object to primitive value");
        }
        return void 0 === e && (e = "number"), r(t, e);
      };
    },
    c135: function (t, e) {
      function n(t) {
        if (Array.isArray(t)) return t;
      }
      (t.exports = n),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    c240: function (t, e) {
      function n() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      (t.exports = n),
        (t.exports["default"] = t.exports),
        (t.exports.__esModule = !0);
    },
    c430: function (t, e) {
      t.exports = !1;
    },
    c6b6: function (t, e) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    },
    c6cd: function (t, e, n) {
      var s = n("da84"),
        i = n("ce4e"),
        r = "__core-js_shared__",
        o = s[r] || i(r, {});
      t.exports = o;
    },
    c8ba: function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (s) {
        "object" === typeof window && (n = window);
      }
      t.exports = n;
    },
    ca84: function (t, e, n) {
      var s = n("5135"),
        i = n("fc6a"),
        r = n("4d64").indexOf,
        o = n("d012");
      t.exports = function (t, e) {
        var n,
          a = i(t),
          c = 0,
          u = [];
        for (n in a) !s(o, n) && s(a, n) && u.push(n);
        while (e.length > c) s(a, (n = e[c++])) && (~r(u, n) || u.push(n));
        return u;
      };
    },
    cc12: function (t, e, n) {
      var s = n("da84"),
        i = n("861d"),
        r = s.document,
        o = i(r) && i(r.createElement);
      t.exports = function (t) {
        return o ? r.createElement(t) : {};
      };
    },
    cca6: function (t, e, n) {
      var s = n("23e7"),
        i = n("60da");
      s(
        { target: "Object", stat: !0, forced: Object.assign !== i },
        { assign: i }
      );
    },
    cdf9: function (t, e, n) {
      var s = n("825a"),
        i = n("861d"),
        r = n("f069");
      t.exports = function (t, e) {
        if ((s(t), i(e) && e.constructor === t)) return e;
        var n = r.f(t),
          o = n.resolve;
        return o(e), n.promise;
      };
    },
    ce4e: function (t, e, n) {
      var s = n("da84");
      t.exports = function (t, e) {
        try {
          Object.defineProperty(s, t, {
            value: e,
            configurable: !0,
            writable: !0,
          });
        } catch (n) {
          s[t] = e;
        }
        return e;
      };
    },
    d012: function (t, e) {
      t.exports = {};
    },
    d039: function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    d066: function (t, e, n) {
      var s = n("da84"),
        i = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2 ? i(s[t]) : s[t] && s[t][e];
      };
    },
    d1e7: function (t, e, n) {
      "use strict";
      var s = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        r = i && !s.call({ 1: 2 }, 1);
      e.f = r
        ? function (t) {
            var e = i(this, t);
            return !!e && e.enumerable;
          }
        : s;
    },
    d28b: function (t, e, n) {
      var s = n("746f");
      s("iterator");
    },
    d2bb: function (t, e, n) {
      var s = n("825a"),
        i = n("3bbe");
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                n = {};
              try {
                (t = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set),
                  t.call(n, []),
                  (e = n instanceof Array);
              } catch (r) {}
              return function (n, r) {
                return s(n), i(r), e ? t.call(n, r) : (n.__proto__ = r), n;
              };
            })()
          : void 0);
    },
    d3b7: function (t, e, n) {
      var s = n("00ee"),
        i = n("6eeb"),
        r = n("b041");
      s || i(Object.prototype, "toString", r, { unsafe: !0 });
    },
    d44e: function (t, e, n) {
      var s = n("9bf2").f,
        i = n("5135"),
        r = n("b622"),
        o = r("toStringTag");
      t.exports = function (t, e, n) {
        t &&
          !i((t = n ? t : t.prototype), o) &&
          s(t, o, { configurable: !0, value: e });
      };
    },
    d4c3: function (t, e, n) {
      var s = n("342f"),
        i = n("da84");
      t.exports = /iphone|ipod|ipad/i.test(s) && void 0 !== i.Pebble;
    },
    d9b5: function (t, e, n) {
      var s = n("d066"),
        i = n("fdbf");
      t.exports = i
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            var e = s("Symbol");
            return "function" == typeof e && Object(t) instanceof e;
          };
    },
    da84: function (t, e, n) {
      (function (e) {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e && e) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      }.call(this, n("c8ba")));
    },
    ddb0: function (t, e, n) {
      var s = n("da84"),
        i = n("fdbc"),
        r = n("e260"),
        o = n("9112"),
        a = n("b622"),
        c = a("iterator"),
        u = a("toStringTag"),
        l = r.values;
      for (var h in i) {
        var p = s[h],
          d = p && p.prototype;
        if (d) {
          if (d[c] !== l)
            try {
              o(d, c, l);
            } catch (m) {
              d[c] = l;
            }
          if ((d[u] || o(d, u, h), i[h]))
            for (var f in r)
              if (d[f] !== r[f])
                try {
                  o(d, f, r[f]);
                } catch (m) {
                  d[f] = r[f];
                }
        }
      }
    },
    df75: function (t, e, n) {
      var s = n("ca84"),
        i = n("7839");
      t.exports =
        Object.keys ||
        function (t) {
          return s(t, i);
        };
    },
    e01a: function (t, e, n) {
      "use strict";
      var s = n("23e7"),
        i = n("83ab"),
        r = n("da84"),
        o = n("5135"),
        a = n("861d"),
        c = n("9bf2").f,
        u = n("e893"),
        l = r.Symbol;
      if (
        i &&
        "function" == typeof l &&
        (!("description" in l.prototype) || void 0 !== l().description)
      ) {
        var h = {},
          p = function () {
            var t =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              e = this instanceof p ? new l(t) : void 0 === t ? l() : l(t);
            return "" === t && (h[e] = !0), e;
          };
        u(p, l);
        var d = (p.prototype = l.prototype);
        d.constructor = p;
        var f = d.toString,
          m = "Symbol(test)" == String(l("test")),
          g = /^Symbol\((.*)\)[^)]+$/;
        c(d, "description", {
          configurable: !0,
          get: function () {
            var t = a(this) ? this.valueOf() : this,
              e = f.call(t);
            if (o(h, t)) return "";
            var n = m ? e.slice(7, -1) : e.replace(g, "$1");
            return "" === n ? void 0 : n;
          },
        }),
          s({ global: !0, forced: !0 }, { Symbol: p });
      }
    },
    e163: function (t, e, n) {
      var s = n("5135"),
        i = n("7b0b"),
        r = n("f772"),
        o = n("e177"),
        a = r("IE_PROTO"),
        c = Object.prototype;
      t.exports = o
        ? Object.getPrototypeOf
        : function (t) {
            return (
              (t = i(t)),
              s(t, a)
                ? t[a]
                : "function" == typeof t.constructor &&
                  t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? c
                : null
            );
          };
    },
    e177: function (t, e, n) {
      var s = n("d039");
      t.exports = !s(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    e260: function (t, e, n) {
      "use strict";
      var s = n("fc6a"),
        i = n("44d2"),
        r = n("3f8c"),
        o = n("69f3"),
        a = n("7dd0"),
        c = "Array Iterator",
        u = o.set,
        l = o.getterFor(c);
      (t.exports = a(
        Array,
        "Array",
        function (t, e) {
          u(this, { type: c, target: s(t), index: 0, kind: e });
        },
        function () {
          var t = l(this),
            e = t.target,
            n = t.kind,
            s = t.index++;
          return !e || s >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: s, done: !1 }
            : "values" == n
            ? { value: e[s], done: !1 }
            : { value: [s, e[s]], done: !1 };
        },
        "values"
      )),
        (r.Arguments = r.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    e2cc: function (t, e, n) {
      var s = n("6eeb");
      t.exports = function (t, e, n) {
        for (var i in e) s(t, i, e[i], n);
        return t;
      };
    },
    e538: function (t, e, n) {
      var s = n("b622");
      e.f = s;
    },
    e667: function (t, e) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (e) {
          return { error: !0, value: e };
        }
      };
    },
    e6cf: function (t, e, n) {
      "use strict";
      var s,
        i,
        r,
        o,
        a = n("23e7"),
        c = n("c430"),
        u = n("da84"),
        l = n("d066"),
        h = n("fea9"),
        p = n("6eeb"),
        d = n("e2cc"),
        f = n("d2bb"),
        m = n("d44e"),
        g = n("2626"),
        _ = n("861d"),
        v = n("1c0b"),
        y = n("19aa"),
        b = n("8925"),
        w = n("2266"),
        x = n("1c7e"),
        T = n("4840"),
        O = n("2cf4").set,
        C = n("b575"),
        S = n("cdf9"),
        A = n("44de"),
        k = n("f069"),
        E = n("e667"),
        M = n("69f3"),
        j = n("94ca"),
        I = n("b622"),
        D = n("6069"),
        R = n("605d"),
        N = n("2d00"),
        P = I("species"),
        V = "Promise",
        F = M.get,
        L = M.set,
        q = M.getterFor(V),
        B = h && h.prototype,
        W = h,
        U = B,
        z = u.TypeError,
        G = u.document,
        $ = u.process,
        H = k.f,
        Y = H,
        X = !!(G && G.createEvent && u.dispatchEvent),
        Z = "function" == typeof PromiseRejectionEvent,
        Q = "unhandledrejection",
        J = "rejectionhandled",
        K = 0,
        tt = 1,
        et = 2,
        nt = 1,
        st = 2,
        it = !1,
        rt = j(V, function () {
          var t = b(W),
            e = t !== String(W);
          if (!e && 66 === N) return !0;
          if (c && !U["finally"]) return !0;
          if (N >= 51 && /native code/.test(t)) return !1;
          var n = new W(function (t) {
              t(1);
            }),
            s = function (t) {
              t(
                function () {},
                function () {}
              );
            },
            i = (n.constructor = {});
          return (
            (i[P] = s),
            (it = n.then(function () {}) instanceof s),
            !it || (!e && D && !Z)
          );
        }),
        ot =
          rt ||
          !x(function (t) {
            W.all(t)["catch"](function () {});
          }),
        at = function (t) {
          var e;
          return !(!_(t) || "function" != typeof (e = t.then)) && e;
        },
        ct = function (t, e) {
          if (!t.notified) {
            t.notified = !0;
            var n = t.reactions;
            C(function () {
              var s = t.value,
                i = t.state == tt,
                r = 0;
              while (n.length > r) {
                var o,
                  a,
                  c,
                  u = n[r++],
                  l = i ? u.ok : u.fail,
                  h = u.resolve,
                  p = u.reject,
                  d = u.domain;
                try {
                  l
                    ? (i || (t.rejection === st && pt(t), (t.rejection = nt)),
                      !0 === l
                        ? (o = s)
                        : (d && d.enter(),
                          (o = l(s)),
                          d && (d.exit(), (c = !0))),
                      o === u.promise
                        ? p(z("Promise-chain cycle"))
                        : (a = at(o))
                        ? a.call(o, h, p)
                        : h(o))
                    : p(s);
                } catch (f) {
                  d && !c && d.exit(), p(f);
                }
              }
              (t.reactions = []), (t.notified = !1), e && !t.rejection && lt(t);
            });
          }
        },
        ut = function (t, e, n) {
          var s, i;
          X
            ? ((s = G.createEvent("Event")),
              (s.promise = e),
              (s.reason = n),
              s.initEvent(t, !1, !0),
              u.dispatchEvent(s))
            : (s = { promise: e, reason: n }),
            !Z && (i = u["on" + t])
              ? i(s)
              : t === Q && A("Unhandled promise rejection", n);
        },
        lt = function (t) {
          O.call(u, function () {
            var e,
              n = t.facade,
              s = t.value,
              i = ht(t);
            if (
              i &&
              ((e = E(function () {
                R ? $.emit("unhandledRejection", s, n) : ut(Q, n, s);
              })),
              (t.rejection = R || ht(t) ? st : nt),
              e.error)
            )
              throw e.value;
          });
        },
        ht = function (t) {
          return t.rejection !== nt && !t.parent;
        },
        pt = function (t) {
          O.call(u, function () {
            var e = t.facade;
            R ? $.emit("rejectionHandled", e) : ut(J, e, t.value);
          });
        },
        dt = function (t, e, n) {
          return function (s) {
            t(e, s, n);
          };
        },
        ft = function (t, e, n) {
          t.done ||
            ((t.done = !0),
            n && (t = n),
            (t.value = e),
            (t.state = et),
            ct(t, !0));
        },
        mt = function (t, e, n) {
          if (!t.done) {
            (t.done = !0), n && (t = n);
            try {
              if (t.facade === e) throw z("Promise can't be resolved itself");
              var s = at(e);
              s
                ? C(function () {
                    var n = { done: !1 };
                    try {
                      s.call(e, dt(mt, n, t), dt(ft, n, t));
                    } catch (i) {
                      ft(n, i, t);
                    }
                  })
                : ((t.value = e), (t.state = tt), ct(t, !1));
            } catch (i) {
              ft({ done: !1 }, i, t);
            }
          }
        };
      if (
        rt &&
        ((W = function (t) {
          y(this, W, V), v(t), s.call(this);
          var e = F(this);
          try {
            t(dt(mt, e), dt(ft, e));
          } catch (n) {
            ft(e, n);
          }
        }),
        (U = W.prototype),
        (s = function (t) {
          L(this, {
            type: V,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: K,
            value: void 0,
          });
        }),
        (s.prototype = d(U, {
          then: function (t, e) {
            var n = q(this),
              s = H(T(this, W));
            return (
              (s.ok = "function" != typeof t || t),
              (s.fail = "function" == typeof e && e),
              (s.domain = R ? $.domain : void 0),
              (n.parent = !0),
              n.reactions.push(s),
              n.state != K && ct(n, !1),
              s.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          },
        })),
        (i = function () {
          var t = new s(),
            e = F(t);
          (this.promise = t),
            (this.resolve = dt(mt, e)),
            (this.reject = dt(ft, e));
        }),
        (k.f = H =
          function (t) {
            return t === W || t === r ? new i(t) : Y(t);
          }),
        !c && "function" == typeof h && B !== Object.prototype)
      ) {
        (o = B.then),
          it ||
            (p(
              B,
              "then",
              function (t, e) {
                var n = this;
                return new W(function (t, e) {
                  o.call(n, t, e);
                }).then(t, e);
              },
              { unsafe: !0 }
            ),
            p(B, "catch", U["catch"], { unsafe: !0 }));
        try {
          delete B.constructor;
        } catch (gt) {}
        f && f(B, U);
      }
      a({ global: !0, wrap: !0, forced: rt }, { Promise: W }),
        m(W, V, !1, !0),
        g(V),
        (r = l(V)),
        a(
          { target: V, stat: !0, forced: rt },
          {
            reject: function (t) {
              var e = H(this);
              return e.reject.call(void 0, t), e.promise;
            },
          }
        ),
        a(
          { target: V, stat: !0, forced: c || rt },
          {
            resolve: function (t) {
              return S(c && this === r ? W : this, t);
            },
          }
        ),
        a(
          { target: V, stat: !0, forced: ot },
          {
            all: function (t) {
              var e = this,
                n = H(e),
                s = n.resolve,
                i = n.reject,
                r = E(function () {
                  var n = v(e.resolve),
                    r = [],
                    o = 0,
                    a = 1;
                  w(t, function (t) {
                    var c = o++,
                      u = !1;
                    r.push(void 0),
                      a++,
                      n.call(e, t).then(function (t) {
                        u || ((u = !0), (r[c] = t), --a || s(r));
                      }, i);
                  }),
                    --a || s(r);
                });
              return r.error && i(r.value), n.promise;
            },
            race: function (t) {
              var e = this,
                n = H(e),
                s = n.reject,
                i = E(function () {
                  var i = v(e.resolve);
                  w(t, function (t) {
                    i.call(e, t).then(n.resolve, s);
                  });
                });
              return i.error && s(i.value), n.promise;
            },
          }
        );
    },
    e893: function (t, e, n) {
      var s = n("5135"),
        i = n("56ef"),
        r = n("06cf"),
        o = n("9bf2");
      t.exports = function (t, e) {
        for (var n = i(e), a = o.f, c = r.f, u = 0; u < n.length; u++) {
          var l = n[u];
          s(t, l) || a(t, l, c(e, l));
        }
      };
    },
    e8b5: function (t, e, n) {
      var s = n("c6b6");
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == s(t);
        };
    },
    e95a: function (t, e, n) {
      var s = n("b622"),
        i = n("3f8c"),
        r = s("iterator"),
        o = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (i.Array === t || o[r] === t);
      };
    },
    f069: function (t, e, n) {
      "use strict";
      var s = n("1c0b"),
        i = function (t) {
          var e, n;
          (this.promise = new t(function (t, s) {
            if (void 0 !== e || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (e = t), (n = s);
          })),
            (this.resolve = s(e)),
            (this.reject = s(n));
        };
      t.exports.f = function (t) {
        return new i(t);
      };
    },
    f5df: function (t, e, n) {
      var s = n("00ee"),
        i = n("c6b6"),
        r = n("b622"),
        o = r("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          ),
        c = function (t, e) {
          try {
            return t[e];
          } catch (n) {}
        };
      t.exports = s
        ? i
        : function (t) {
            var e, n, s;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" == typeof (n = c((e = Object(t)), o))
              ? n
              : a
              ? i(e)
              : "Object" == (s = i(e)) && "function" == typeof e.callee
              ? "Arguments"
              : s;
          };
    },
    f772: function (t, e, n) {
      var s = n("5692"),
        i = n("90e3"),
        r = s("keys");
      t.exports = function (t) {
        return r[t] || (r[t] = i(t));
      };
    },
    fb6a: function (t, e, n) {
      "use strict";
      var s = n("23e7"),
        i = n("861d"),
        r = n("e8b5"),
        o = n("23cb"),
        a = n("50c4"),
        c = n("fc6a"),
        u = n("8418"),
        l = n("b622"),
        h = n("1dde"),
        p = h("slice"),
        d = l("species"),
        f = [].slice,
        m = Math.max;
      s(
        { target: "Array", proto: !0, forced: !p },
        {
          slice: function (t, e) {
            var n,
              s,
              l,
              h = c(this),
              p = a(h.length),
              g = o(t, p),
              _ = o(void 0 === e ? p : e, p);
            if (
              r(h) &&
              ((n = h.constructor),
              "function" != typeof n || (n !== Array && !r(n.prototype))
                ? i(n) && ((n = n[d]), null === n && (n = void 0))
                : (n = void 0),
              n === Array || void 0 === n)
            )
              return f.call(h, g, _);
            for (
              s = new (void 0 === n ? Array : n)(m(_ - g, 0)), l = 0;
              g < _;
              g++, l++
            )
              g in h && u(s, l, h[g]);
            return (s.length = l), s;
          },
        }
      );
    },
    fc6a: function (t, e, n) {
      var s = n("44ad"),
        i = n("1d80");
      t.exports = function (t) {
        return s(i(t));
      };
    },
    fdbc: function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    fdbf: function (t, e, n) {
      var s = n("4930");
      t.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    fea9: function (t, e, n) {
      var s = n("da84");
      t.exports = s.Promise;
    },
  },
]);
//# sourceMappingURL=chunk-vendors.9512f08b.js.map
