(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+ZDr": function(e, t, n) {
      "use strict";
      var r = n("5NKs");
      (t.__esModule = !0),
        (t.withPrefix = h),
        (t.withAssetPrefix = function(e) {
          return h(e, m());
        }),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0);
      var o = r(n("uDP2")),
        a = r(n("j8BX")),
        i = r(n("v06X")),
        s = r(n("XEEL")),
        c = r(n("17x9")),
        u = r(n("q1tI")),
        l = n("YwZP"),
        p = n("LYrO"),
        f = n("cu4x");
      t.parsePath = f.parsePath;
      var d = function(e) {
        return null == e ? void 0 : e.startsWith("/");
      };
      function h(e, t) {
        var n, r;
        if ((void 0 === t && (t = v()), !g(e))) return e;
        if (e.startsWith("./") || e.startsWith("../")) return e;
        var o =
          null !== (n = null !== (r = t) && void 0 !== r ? r : m()) &&
          void 0 !== n
            ? n
            : "/";
        return (
          "" +
          ((null == o ? void 0 : o.endsWith("/")) ? o.slice(0, -1) : o) +
          (e.startsWith("/") ? e : "/" + e)
        );
      }
      var m = function() {
          return "";
        },
        v = function() {
          return "";
        },
        g = function(e) {
          return (
            e &&
            !e.startsWith("http://") &&
            !e.startsWith("https://") &&
            !e.startsWith("//")
          );
        };
      var b = function(e, t) {
          return "number" == typeof e
            ? e
            : g(e)
            ? d(e)
              ? h(e)
              : (function(e, t) {
                  return d(e) ? e : (0, p.resolve)(e, t);
                })(e, t)
            : e;
        },
        y = {
          activeClassName: c.default.string,
          activeStyle: c.default.object,
          partiallyActive: c.default.bool
        },
        w = (function(e) {
          function t(t) {
            var n;
            (n = e.call(this, t) || this).defaultGetProps = function(e) {
              var t = e.isPartiallyCurrent,
                r = e.isCurrent;
              return (n.props.partiallyActive
              ? t
              : r)
                ? {
                    className: [n.props.className, n.props.activeClassName]
                      .filter(Boolean)
                      .join(" "),
                    style: (0, a.default)(
                      {},
                      n.props.style,
                      n.props.activeStyle
                    )
                  }
                : null;
            };
            var r = !1;
            return (
              "undefined" != typeof window &&
                window.IntersectionObserver &&
                (r = !0),
              (n.state = { IOSupported: r }),
              (n.handleRef = n.handleRef.bind((0, i.default)(n))),
              n
            );
          }
          (0, s.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function(e, t) {
              this.props.to === e.to ||
                this.state.IOSupported ||
                ___loader.enqueue(
                  (0, f.parsePath)(b(this.props.to, window.location.pathname))
                    .pathname
                );
            }),
            (n.componentDidMount = function() {
              this.state.IOSupported ||
                ___loader.enqueue(
                  (0, f.parsePath)(b(this.props.to, window.location.pathname))
                    .pathname
                );
            }),
            (n.componentWillUnmount = function() {
              if (this.io) {
                var e = this.io,
                  t = e.instance,
                  n = e.el;
                t.unobserve(n), t.disconnect();
              }
            }),
            (n.handleRef = function(e) {
              var t,
                n,
                r,
                o = this;
              this.props.innerRef &&
              this.props.innerRef.hasOwnProperty("current")
                ? (this.props.innerRef.current = e)
                : this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported &&
                  e &&
                  (this.io = ((t = e),
                  (n = function() {
                    ___loader.enqueue(
                      (0, f.parsePath)(b(o.props.to, window.location.pathname))
                        .pathname
                    );
                  }),
                  (r = new window.IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                      t === e.target &&
                        (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(t), r.disconnect(), n());
                    });
                  })).observe(t),
                  { instance: r, el: t }));
            }),
            (n.render = function() {
              var e = this,
                t = this.props,
                n = t.to,
                r = t.getProps,
                i = void 0 === r ? this.defaultGetProps : r,
                s = t.onClick,
                c = t.onMouseEnter,
                p = (t.activeClassName,
                t.activeStyle,
                t.innerRef,
                t.partiallyActive,
                t.state),
                d = t.replace,
                h = (0, o.default)(t, [
                  "to",
                  "getProps",
                  "onClick",
                  "onMouseEnter",
                  "activeClassName",
                  "activeStyle",
                  "innerRef",
                  "partiallyActive",
                  "state",
                  "replace"
                ]);
              return u.default.createElement(l.Location, null, function(t) {
                var r = t.location,
                  o = b(n, r.pathname);
                return g(o)
                  ? u.default.createElement(
                      l.Link,
                      (0, a.default)(
                        {
                          to: o,
                          state: p,
                          getProps: i,
                          innerRef: e.handleRef,
                          onMouseEnter: function(e) {
                            c && c(e),
                              ___loader.hovering((0, f.parsePath)(o).pathname);
                          },
                          onClick: function(t) {
                            if (
                              (s && s(t),
                              !(
                                0 !== t.button ||
                                e.props.target ||
                                t.defaultPrevented ||
                                t.metaKey ||
                                t.altKey ||
                                t.ctrlKey ||
                                t.shiftKey
                              ))
                            ) {
                              t.preventDefault();
                              var n = d,
                                r = encodeURI(o) === window.location.pathname;
                              "boolean" != typeof d && r && (n = !0),
                                window.___navigate(o, { state: p, replace: n });
                            }
                            return !0;
                          }
                        },
                        h
                      )
                    )
                  : u.default.createElement(
                      "a",
                      (0, a.default)({ href: o }, h)
                    );
              });
            }),
            t
          );
        })(u.default.Component);
      w.propTypes = (0, a.default)({}, y, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
        state: c.default.object
      });
      var P = function(e, t, n) {
          return console.warn(
            'The "' +
              e +
              '" method is now deprecated and will be removed in Gatsby v' +
              n +
              '. Please use "' +
              t +
              '" instead.'
          );
        },
        j = u.default.forwardRef(function(e, t) {
          return u.default.createElement(w, (0, a.default)({ innerRef: t }, e));
        });
      t.default = j;
      t.navigate = function(e, t) {
        window.___navigate(b(e, window.location.pathname), t);
      };
      var R = function(e) {
        P("push", "navigate", 3),
          window.___push(b(e, window.location.pathname));
      };
      t.push = R;
      t.replace = function(e) {
        P("replace", "navigate", 3),
          window.___replace(b(e, window.location.pathname));
      };
      t.navigateTo = function(e) {
        return P("navigateTo", "navigate", 3), R(e);
      };
    },
    "/hTd": function(e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.SessionStorage = void 0);
      var r = (function() {
        function e() {}
        var t = e.prototype;
        return (
          (t.read = function(e, t) {
            var n = this.getStateKey(e, t);
            try {
              var r = window.sessionStorage.getItem(n);
              return r ? JSON.parse(r) : 0;
            } catch (o) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : 0;
            }
          }),
          (t.save = function(e, t, n) {
            var r = this.getStateKey(e, t),
              o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (a) {
              (window && window.___GATSBY_REACT_ROUTER_SCROLL) ||
                (window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o));
            }
          }),
          (t.getStateKey = function(e, t) {
            var n = "@@scroll|" + e.pathname;
            return null == t ? n : n + "|" + t;
          }),
          e
        );
      })();
      t.SessionStorage = r;
    },
    "3uz+": function(e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.useScrollRestoration = function(e) {
          var t = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)();
          return (
            (0, o.useLayoutEffect)(function() {
              if (i.current) {
                var r = n.read(t, e);
                i.current.scrollTo(0, r || 0);
              }
            }, []),
            {
              ref: i,
              onScroll: function() {
                i.current && n.save(t, e, i.current.scrollTop);
              }
            }
          );
        });
      var r = n("Enzk"),
        o = n("q1tI"),
        a = n("YwZP");
    },
    "5NKs": function(e, t) {
      e.exports = function(e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
    "5yr3": function(e, t, n) {
      "use strict";
      var r = (function(e) {
        return (
          (e = e || Object.create(null)),
          {
            on: function(t, n) {
              (e[t] || (e[t] = [])).push(n);
            },
            off: function(t, n) {
              e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
            },
            emit: function(t, n) {
              (e[t] || []).slice().map(function(e) {
                e(n);
              }),
                (e["*"] || []).slice().map(function(e) {
                  e(t, n);
                });
            }
          }
        );
      })();
      t.a = r;
    },
    "6qGY": function(e, t) {
      e.exports = Object.assign;
    },
    "7hJ6": function(e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.useScrollRestoration = t.ScrollContainer = t.ScrollContext = void 0);
      var r = n("Enzk");
      t.ScrollContext = r.ScrollHandler;
      var o = n("hd9s");
      t.ScrollContainer = o.ScrollContainer;
      var a = n("3uz+");
      t.useScrollRestoration = a.useScrollRestoration;
    },
    "94VI": function(e, t) {
      t.polyfill = function(e) {
        return e;
      };
    },
    "9Hrx": function(e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    "9Xx/": function(e, t, n) {
      "use strict";
      n.d(t, "c", function() {
        return c;
      }),
        n.d(t, "d", function() {
          return u;
        }),
        n.d(t, "a", function() {
          return a;
        }),
        n.d(t, "b", function() {
          return i;
        });
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = function(e) {
          var t = e.location,
            n = t.search,
            r = t.hash,
            o = t.href,
            a = t.origin,
            i = t.protocol,
            c = t.host,
            u = t.hostname,
            l = t.port,
            p = e.location.pathname;
          !p && o && s && (p = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: c,
            hostname: u,
            port: l,
            state: e.history.state,
            key: (e.history.state && e.history.state.key) || "initial"
          };
        },
        a = function(e, t) {
          var n = [],
            a = o(e),
            i = !1,
            s = function() {};
          return {
            get location() {
              return a;
            },
            get transitioning() {
              return i;
            },
            _onTransitionComplete: function() {
              (i = !1), s();
            },
            listen: function(t) {
              n.push(t);
              var r = function() {
                (a = o(e)), t({ location: a, action: "POP" });
              };
              return (
                e.addEventListener("popstate", r),
                function() {
                  e.removeEventListener("popstate", r),
                    (n = n.filter(function(e) {
                      return e !== t;
                    }));
                }
              );
            },
            navigate: function(t) {
              var c =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                u = c.state,
                l = c.replace,
                p = void 0 !== l && l;
              if ("number" == typeof t) e.history.go(t);
              else {
                u = r({}, u, { key: Date.now() + "" });
                try {
                  i || p
                    ? e.history.replaceState(u, null, t)
                    : e.history.pushState(u, null, t);
                } catch (d) {
                  e.location[p ? "replace" : "assign"](t);
                }
              }
              (a = o(e)), (i = !0);
              var f = new Promise(function(e) {
                return (s = e);
              });
              return (
                n.forEach(function(e) {
                  return e({ location: a, action: "PUSH" });
                }),
                f
              );
            }
          };
        },
        i = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = e.indexOf("?"),
            n = {
              pathname: t > -1 ? e.substr(0, t) : e,
              search: t > -1 ? e.substr(t) : ""
            },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function(e, t) {},
            removeEventListener: function(e, t) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function(e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? "" : c;
                r++,
                  o.push({ pathname: s, search: u.length ? "?" + u : u }),
                  a.push(e);
              },
              replaceState: function(e, t, n) {
                var i = n.split("?"),
                  s = i[0],
                  c = i[1],
                  u = void 0 === c ? "" : c;
                (o[r] = { pathname: s, search: u }), (a[r] = e);
              },
              go: function(e) {
                var t = r + e;
                t < 0 || t > a.length - 1 || (r = t);
              }
            }
          };
        },
        s = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        c = a(s ? window : i()),
        u = c.navigate;
    },
    "9hXx": function(e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.default = void 0);
      t.default = function(e, t) {
        if (!Array.isArray(t)) return "manifest.webmanifest";
        var n = t.find(function(t) {
          return e.startsWith(t.start_url);
        });
        return n
          ? "manifest_" + n.lang + ".webmanifest"
          : "manifest.webmanifest";
      };
    },
    Enzk: function(e, t, n) {
      "use strict";
      var r = n("jGDn"),
        o = n("5NKs");
      (t.__esModule = !0), (t.ScrollHandler = t.ScrollContext = void 0);
      var a = o(n("v06X")),
        i = o(n("XEEL")),
        s = r(n("q1tI")),
        c = n("/hTd"),
        u = s.createContext(new c.SessionStorage());
      (t.ScrollContext = u), (u.displayName = "GatsbyScrollContext");
      var l = (function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((t =
              e.call.apply(e, [this].concat(r)) ||
              this)._stateStorage = new c.SessionStorage()),
            (t.scrollListener = function() {
              var e = t.props.location.key;
              e && t._stateStorage.save(t.props.location, e, window.scrollY);
            }),
            (t.windowScroll = function(e, n) {
              t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e);
            }),
            (t.scrollToHash = function(e, n) {
              var r = document.getElementById(e.substring(1));
              r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView();
            }),
            (t.shouldUpdateScroll = function(e, n) {
              var r = t.props.shouldUpdateScroll;
              return !r || r.call((0, a.default)(t), e, n);
            }),
            t
          );
        }
        (0, i.default)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            var e;
            window.addEventListener("scroll", this.scrollListener);
            var t = this.props.location,
              n = t.key,
              r = t.hash;
            n && (e = this._stateStorage.read(this.props.location, n)),
              e
                ? this.windowScroll(e, void 0)
                : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function() {
            window.removeEventListener("scroll", this.scrollListener);
          }),
          (n.componentDidUpdate = function(e) {
            var t,
              n = this.props.location,
              r = n.hash,
              o = n.key;
            o && (t = this._stateStorage.read(this.props.location, o)),
              r && 0 === t
                ? this.scrollToHash(decodeURI(r), e)
                : this.windowScroll(t, e);
          }),
          (n.render = function() {
            return s.createElement(
              u.Provider,
              { value: this._stateStorage },
              this.props.children
            );
          }),
          t
        );
      })(s.Component);
      t.ScrollHandler = l;
    },
    GddB: function(e, t) {},
    IOVJ: function(e, t, n) {
      "use strict";
      var r = n("9Hrx"),
        o = n("q1tI"),
        a = n.n(o),
        i = n("emEt"),
        s = n("xtsi"),
        c = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            Object(r.a)(t, e),
            (t.prototype.render = function() {
              var e = Object.assign({}, this.props, {
                  pathContext: this.props.pageContext
                }),
                t =
                  Object(s.apiRunner)("replaceComponentRenderer", {
                    props: this.props,
                    loader: i.publicLoader
                  })[0] ||
                  Object(o.createElement)(
                    this.props.pageResources.component,
                    Object.assign({}, e, {
                      key: this.props.path || this.props.pageResources.page.path
                    })
                  );
              return Object(s.apiRunner)(
                "wrapPageElement",
                { element: t, props: e },
                t,
                function(t) {
                  return { element: t.result, props: e };
                }
              ).pop();
            }),
            t
          );
        })(a.a.Component);
      t.a = c;
    },
    LYrO: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "startsWith", function() {
          return a;
        }),
        n.d(t, "pick", function() {
          return i;
        }),
        n.d(t, "match", function() {
          return s;
        }),
        n.d(t, "resolve", function() {
          return c;
        }),
        n.d(t, "insertParams", function() {
          return u;
        }),
        n.d(t, "validateRedirect", function() {
          return l;
        }),
        n.d(t, "shallowCompare", function() {
          return y;
        });
      var r = n("QLaP"),
        o = n.n(r),
        a = function(e, t) {
          return e.substr(0, t.length) === t;
        },
        i = function(e, t) {
          for (
            var n = void 0,
              r = void 0,
              a = t.split("?")[0],
              i = v(a),
              s = "" === i[0],
              c = m(e),
              u = 0,
              l = c.length;
            u < l;
            u++
          ) {
            var f = !1,
              h = c[u].route;
            if (h.default) r = { route: h, params: {}, uri: t };
            else {
              for (
                var g = v(h.path),
                  y = {},
                  w = Math.max(i.length, g.length),
                  P = 0;
                P < w;
                P++
              ) {
                var j = g[P],
                  R = i[P];
                if (d(j)) {
                  y[j.slice(1) || "*"] = i
                    .slice(P)
                    .map(decodeURIComponent)
                    .join("/");
                  break;
                }
                if (void 0 === R) {
                  f = !0;
                  break;
                }
                var S = p.exec(j);
                if (S && !s) {
                  -1 === b.indexOf(S[1]) || o()(!1);
                  var O = decodeURIComponent(R);
                  y[S[1]] = O;
                } else if (j !== R) {
                  f = !0;
                  break;
                }
              }
              if (!f) {
                n = { route: h, params: y, uri: "/" + i.slice(0, P).join("/") };
                break;
              }
            }
          }
          return n || r || null;
        },
        s = function(e, t) {
          return i([{ path: e }], t);
        },
        c = function(e, t) {
          if (a(e, "/")) return e;
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            i = t.split("?")[0],
            s = v(r),
            c = v(i);
          if ("" === s[0]) return g(i, o);
          if (!a(s[0], ".")) {
            var u = c.concat(s).join("/");
            return g(("/" === i ? "" : "/") + u, o);
          }
          for (var l = c.concat(s), p = [], f = 0, d = l.length; f < d; f++) {
            var h = l[f];
            ".." === h ? p.pop() : "." !== h && p.push(h);
          }
          return g("/" + p.join("/"), o);
        },
        u = function(e, t) {
          var n = e.split("?"),
            r = n[0],
            o = n[1],
            a = void 0 === o ? "" : o,
            i =
              "/" +
              v(r)
                .map(function(e) {
                  var n = p.exec(e);
                  return n ? t[n[1]] : e;
                })
                .join("/"),
            s = t.location,
            c = (s = void 0 === s ? {} : s).search,
            u = (void 0 === c ? "" : c).split("?")[1] || "";
          return (i = g(i, a, u));
        },
        l = function(e, t) {
          var n = function(e) {
            return f(e);
          };
          return (
            v(e)
              .filter(n)
              .sort()
              .join("/") ===
            v(t)
              .filter(n)
              .sort()
              .join("/")
          );
        },
        p = /^:(.+)/,
        f = function(e) {
          return p.test(e);
        },
        d = function(e) {
          return e && "*" === e[0];
        },
        h = function(e, t) {
          return {
            route: e,
            score: e.default
              ? 0
              : v(e.path).reduce(function(e, t) {
                  return (
                    (e += 4),
                    !(function(e) {
                      return "" === e;
                    })(t)
                      ? f(t)
                        ? (e += 2)
                        : d(t)
                        ? (e -= 5)
                        : (e += 3)
                      : (e += 1),
                    e
                  );
                }, 0),
            index: t
          };
        },
        m = function(e) {
          return e.map(h).sort(function(e, t) {
            return e.score < t.score
              ? 1
              : e.score > t.score
              ? -1
              : e.index - t.index;
          });
        },
        v = function(e) {
          return e.replace(/(^\/+|\/+$)/g, "").split("/");
        },
        g = function(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return (
            e +
            ((n = n.filter(function(e) {
              return e && e.length > 0;
            })) && n.length > 0
              ? "?" + n.join("&")
              : "")
          );
        },
        b = ["uri", "path"],
        y = function(e, t) {
          var n = Object.keys(e);
          return (
            n.length === Object.keys(t).length &&
            n.every(function(n) {
              return t.hasOwnProperty(n) && e[n] === t[n];
            })
          );
        };
    },
    LeKB: function(e, t, n) {
      e.exports = [
        { plugin: n("q9nr"), options: { plugins: [], maxWidth: 990 } },
        {
          plugin: n("npZl"),
          options: {
            plugins: [],
            name: "Nulogy.design",
            short_name: "NDS",
            start_url: "/",
            background_color: "#fff",
            theme_color: "#663399",
            display: "minimal-ui",
            icon: "/Users/mattd/src/nulogy.design/src/images/favicon.svg",
            cache_busting_mode: "query",
            include_favicon: !0,
            legacy: !0,
            theme_color_in_head: !0,
            cacheDigest: "b87e6041f67af43e6f30f622bcc61222"
          }
        },
        {
          plugin: n("b9Nj"),
          options: { plugins: [], trackingId: "UA-5984624-20" }
        },
        { plugin: n("GddB"), options: { plugins: [] } }
      ];
    },
    MMVs: function(e, t, n) {
      e.exports = (function() {
        var e = !1;
        -1 !== navigator.appVersion.indexOf("MSIE 10") && (e = !0);
        var t,
          n = [],
          r = "object" == typeof document && document,
          o = e
            ? r.documentElement.doScroll("left")
            : r.documentElement.doScroll,
          a = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !a &&
            r &&
            r.addEventListener(
              "DOMContentLoaded",
              (t = function() {
                for (
                  r.removeEventListener("DOMContentLoaded", t), a = 1;
                  (t = n.shift());

                )
                  t();
              })
            ),
          function(e) {
            a ? setTimeout(e, 0) : n.push(e);
          }
        );
      })();
    },
    NSX3: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("xtsi");
      "https:" !== window.location.protocol &&
      "localhost" !== window.location.hostname
        ? console.error(
            "Service workers can only be used over HTTPS, or on localhost for development"
          )
        : "serviceWorker" in navigator &&
          navigator.serviceWorker
            .register("/sw.js")
            .then(function(e) {
              e.addEventListener("updatefound", function() {
                Object(
                  r.apiRunner
                )("onServiceWorkerUpdateFound", { serviceWorker: e });
                var t = e.installing;
                console.log("installingWorker", t),
                  t.addEventListener("statechange", function() {
                    switch (t.state) {
                      case "installed":
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(r.apiRunner)("onServiceWorkerUpdateReady", {
                              serviceWorker: e
                            }),
                            window.___failedResources &&
                              (console.log(
                                "resources failed, SW updated - reloading"
                              ),
                              window.location.reload()))
                          : (console.log("Content is now available offline!"),
                            Object(r.apiRunner)("onServiceWorkerInstalled", {
                              serviceWorker: e
                            }));
                        break;
                      case "redundant":
                        console.error(
                          "The installing service worker became redundant."
                        ),
                          Object(r.apiRunner)("onServiceWorkerRedundant", {
                            serviceWorker: e
                          });
                        break;
                      case "activated":
                        Object(
                          r.apiRunner
                        )("onServiceWorkerActive", { serviceWorker: e });
                    }
                  });
              });
            })
            .catch(function(e) {
              console.error("Error during service worker registration:", e);
            });
    },
    QLaP: function(e, t, n) {
      "use strict";
      e.exports = function(e, t, n, r, o, a, i, s) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var u = [n, r, o, a, i, s],
              l = 0;
            (c = new Error(
              t.replace(/%s/g, function() {
                return u[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    UxWs: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("9Hrx"),
        o = n("xtsi"),
        a = n("q1tI"),
        i = n.n(a),
        s = n("i8i4"),
        c = n.n(s),
        u = n("YwZP"),
        l = n("7hJ6"),
        p = n("MMVs"),
        f = n.n(p),
        d = n("Wbzz"),
        h = n("emEt"),
        m = n("YLt+"),
        v = n("5yr3"),
        g = {
          id: "gatsby-announcer",
          style: {
            position: "absolute",
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0
          },
          "aria-live": "assertive",
          "aria-atomic": "true"
        },
        b = n("9Xx/"),
        y = n("+ZDr"),
        w = m.reduce(function(e, t) {
          return (e[t.fromPath] = t), e;
        }, {});
      function P(e) {
        var t = w[e];
        return null != t && (window.___replace(t.toPath), !0);
      }
      var j = function(e, t) {
          P(e.pathname) ||
            Object(o.apiRunner)("onPreRouteUpdate", {
              location: e,
              prevLocation: t
            });
        },
        R = function(e, t) {
          P(e.pathname) ||
            Object(o.apiRunner)("onRouteUpdate", {
              location: e,
              prevLocation: t
            });
        },
        S = function(e, t) {
          if ((void 0 === t && (t = {}), "number" != typeof e)) {
            var n = Object(y.parsePath)(e).pathname,
              r = w[n];
            if (
              (r && ((e = r.toPath), (n = Object(y.parsePath)(e).pathname)),
              window.___swUpdated)
            )
              window.location = n;
            else {
              var a = setTimeout(function() {
                v.a.emit("onDelayedLoadPageResources", { pathname: n }),
                  Object(o.apiRunner)("onRouteUpdateDelayed", {
                    location: window.location
                  });
              }, 1e3);
              h.default.loadPage(n).then(function(r) {
                if (!r || r.status === h.PageResourceStatus.Error)
                  return (
                    window.history.replaceState({}, "", location.href),
                    (window.location = n),
                    void clearTimeout(a)
                  );
                r &&
                  r.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ("serviceWorker" in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    "activated" === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: "clearPathResources"
                    }),
                  console.log("Site has changed on server. Reloading browser"),
                  (window.location = n)),
                  Object(u.navigate)(e, t),
                  clearTimeout(a);
              });
            }
          } else b.c.navigate(e);
        };
      function O(e, t) {
        var n = this,
          r = t.location,
          a = r.pathname,
          i = r.hash,
          s = Object(o.apiRunner)("shouldUpdateScroll", {
            prevRouterProps: e,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function(e) {
              return n._stateStorage.read(e);
            }
          });
        if (s.length > 0) return s[s.length - 1];
        if (e && e.location.pathname === a)
          return i ? decodeURI(i.slice(1)) : [0, 0];
        return !0;
      }
      var _ = (function(e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).announcementRef = i.a.createRef()),
              n
            );
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function(e, t) {
              var n = this;
              requestAnimationFrame(function() {
                var e = "new page at " + n.props.location.pathname;
                document.title && (e = document.title);
                var t = document.querySelectorAll("#gatsby-focus-wrapper h1");
                t && t.length && (e = t[0].textContent);
                var r = "Navigated to " + e;
                n.announcementRef.current &&
                  (n.announcementRef.current.innerText !== r &&
                    (n.announcementRef.current.innerText = r));
              });
            }),
            (n.render = function() {
              return i.a.createElement(
                "div",
                Object.assign({}, g, { ref: this.announcementRef })
              );
            }),
            t
          );
        })(i.a.Component),
        E = (function(e) {
          function t(t) {
            var n;
            return (n = e.call(this, t) || this), j(t.location, null), n;
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function() {
              R(this.props.location, null);
            }),
            (n.componentDidUpdate = function(e, t, n) {
              n && R(this.props.location, e.location);
            }),
            (n.getSnapshotBeforeUpdate = function(e) {
              return (
                this.props.location.pathname !== e.location.pathname &&
                (j(this.props.location, e.location), !0)
              );
            }),
            (n.render = function() {
              return i.a.createElement(
                i.a.Fragment,
                null,
                this.props.children,
                i.a.createElement(_, { location: location })
              );
            }),
            t
          );
        })(i.a.Component),
        C = n("IOVJ"),
        x = n("XyBk"),
        k = n.n(x);
      function L(e, t) {
        for (var n in e) if (!(n in t)) return !0;
        for (var r in t) if (e[r] !== t[r]) return !0;
        return !1;
      }
      var D = (function(e) {
          function t(t) {
            var n;
            n = e.call(this) || this;
            var r = t.location,
              o = t.pageResources;
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources: o || h.default.loadPageSync(r.pathname)
              }),
              n
            );
          }
          Object(r.a)(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              var n = e.location;
              return t.location.href !== n.href
                ? {
                    pageResources: h.default.loadPageSync(n.pathname),
                    location: Object.assign({}, n)
                  }
                : { location: Object.assign({}, n) };
            });
          var n = t.prototype;
          return (
            (n.loadResources = function(e) {
              var t = this;
              h.default.loadPage(e).then(function(n) {
                n && n.status !== h.PageResourceStatus.Error
                  ? t.setState({
                      location: Object.assign({}, window.location),
                      pageResources: n
                    })
                  : (window.history.replaceState({}, "", location.href),
                    (window.location = e));
              });
            }),
            (n.shouldComponentUpdate = function(e, t) {
              return t.pageResources
                ? this.state.pageResources !== t.pageResources ||
                    (this.state.pageResources.component !==
                      t.pageResources.component ||
                      (this.state.pageResources.json !== t.pageResources.json ||
                        (!(
                          this.state.location.key === t.location.key ||
                          !t.pageResources.page ||
                          (!t.pageResources.page.matchPath &&
                            !t.pageResources.page.path)
                        ) ||
                          (function(e, t, n) {
                            return L(e.props, t) || L(e.state, n);
                          })(this, e, t))))
                : (this.loadResources(e.location.pathname), !1);
            }),
            (n.render = function() {
              return this.props.children(this.state);
            }),
            t
          );
        })(i.a.Component),
        T = n("cSJ8"),
        A = n("o2xN"),
        U = new h.ProdLoader(k.a, A);
      Object(h.setLoader)(U),
        U.setApiRunner(o.apiRunner),
        (window.asyncRequires = k.a),
        (window.___emitter = v.a),
        (window.___loader = h.publicLoader),
        b.c.listen(function(e) {
          e.location.action = e.action;
        }),
        (window.___push = function(e) {
          return S(e, { replace: !1 });
        }),
        (window.___replace = function(e) {
          return S(e, { replace: !0 });
        }),
        (window.___navigate = function(e, t) {
          return S(e, t);
        }),
        P(window.location.pathname),
        Object(o.apiRunnerAsync)("onClientEntry").then(function() {
          Object(o.apiRunner)("registerServiceWorker").length > 0 && n("NSX3");
          var e = function(e) {
              return i.a.createElement(
                u.BaseContext.Provider,
                { value: { baseuri: "/", basepath: "/" } },
                i.a.createElement(C.a, e)
              );
            },
            t = i.a.createContext({}),
            a = (function(e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(n, e),
                (n.prototype.render = function() {
                  var e = this.props.children;
                  return i.a.createElement(u.Location, null, function(n) {
                    var r = n.location;
                    return i.a.createElement(D, { location: r }, function(n) {
                      var r = n.pageResources,
                        o = n.location;
                      return i.a.createElement(
                        d.StaticQueryContext.Provider,
                        { value: r.staticQueryResults },
                        i.a.createElement(
                          t.Provider,
                          { value: { pageResources: r, location: o } },
                          e
                        )
                      );
                    });
                  });
                }),
                n
              );
            })(i.a.Component),
            s = (function(n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                Object(r.a)(o, n),
                (o.prototype.render = function() {
                  var n = this;
                  return i.a.createElement(t.Consumer, null, function(t) {
                    var r = t.pageResources,
                      o = t.location;
                    return i.a.createElement(
                      E,
                      { location: o },
                      i.a.createElement(
                        l.ScrollContext,
                        { location: o, shouldUpdateScroll: O },
                        i.a.createElement(
                          u.Router,
                          {
                            basepath: "",
                            location: o,
                            id: "gatsby-focus-wrapper"
                          },
                          i.a.createElement(
                            e,
                            Object.assign(
                              {
                                path:
                                  "/404.html" === r.page.path
                                    ? Object(T.a)(o.pathname, "")
                                    : encodeURI(r.page.matchPath || r.page.path)
                              },
                              n.props,
                              { location: o, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                o
              );
            })(i.a.Component),
            p = window,
            m = p.pagePath,
            v = p.location;
          m &&
            "" + m !== v.pathname &&
            !(
              U.findMatchPath(Object(T.a)(v.pathname, "")) ||
              "/404.html" === m ||
              m.match(/^\/404\/?$/) ||
              m.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(u.navigate)("" + m + v.search + v.hash, { replace: !0 }),
            h.publicLoader.loadPage(v.pathname).then(function(e) {
              if (!e || e.status === h.PageResourceStatus.Error)
                throw new Error(
                  "page resources for " +
                    v.pathname +
                    " not found. Not rendering React"
                );
              window.___webpackCompilationHash = e.page.webpackCompilationHash;
              var t = Object(o.apiRunner)(
                  "wrapRootElement",
                  { element: i.a.createElement(s, null) },
                  i.a.createElement(s, null),
                  function(e) {
                    return { element: e.result };
                  }
                ).pop(),
                n = function() {
                  return i.a.createElement(a, null, t);
                },
                r = Object(o.apiRunner)(
                  "replaceHydrateFunction",
                  void 0,
                  c.a.hydrate
                )[0];
              f()(function() {
                r(
                  i.a.createElement(n, null),
                  "undefined" != typeof window
                    ? document.getElementById("___gatsby")
                    : void 0,
                  function() {
                    Object(o.apiRunner)("onInitialClientRender");
                  }
                );
              });
            });
        });
    },
    Wbzz: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "graphql", function() {
          return m;
        }),
        n.d(t, "StaticQueryContext", function() {
          return p;
        }),
        n.d(t, "StaticQuery", function() {
          return d;
        }),
        n.d(t, "useStaticQuery", function() {
          return h;
        }),
        n.d(t, "prefetchPathname", function() {
          return l;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = n("+ZDr"),
        i = n.n(a);
      n.d(t, "Link", function() {
        return i.a;
      }),
        n.d(t, "withAssetPrefix", function() {
          return a.withAssetPrefix;
        }),
        n.d(t, "withPrefix", function() {
          return a.withPrefix;
        }),
        n.d(t, "parsePath", function() {
          return a.parsePath;
        }),
        n.d(t, "navigate", function() {
          return a.navigate;
        }),
        n.d(t, "push", function() {
          return a.push;
        }),
        n.d(t, "replace", function() {
          return a.replace;
        }),
        n.d(t, "navigateTo", function() {
          return a.navigateTo;
        });
      var s = n("7hJ6");
      n.d(t, "useScrollRestoration", function() {
        return s.useScrollRestoration;
      });
      var c = n("lw3w"),
        u = n.n(c);
      n.d(t, "PageRenderer", function() {
        return u.a;
      });
      var l = n("emEt").default.enqueue,
        p = o.a.createContext({});
      function f(e) {
        var t = e.staticQueryData,
          n = e.data,
          r = e.query,
          a = e.render,
          i = n ? n.data : t[r] && t[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          i && a(i),
          !i && o.a.createElement("div", null, "Loading (StaticQuery)")
        );
      }
      var d = function(e) {
          var t = e.data,
            n = e.query,
            r = e.render,
            a = e.children;
          return o.a.createElement(p.Consumer, null, function(e) {
            return o.a.createElement(f, {
              data: t,
              query: n,
              render: r || a,
              staticQueryData: e
            });
          });
        },
        h = function(e) {
          var t;
          o.a.useContext;
          var n = o.a.useContext(p);
          if (isNaN(Number(e)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                e +
                "`);\n"
            );
          if (
            null == n || null === (t = n[e]) || void 0 === t ? void 0 : t.data
          )
            return n[e].data;
          throw new Error(
            "The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues"
          );
        };
      function m() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
    },
    XEEL: function(e, t) {
      e.exports = function(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      };
    },
    XyBk: function(e, t, n) {
      t.components = {
        "component---src-pages-404-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(5)]).then(
            n.bind(null, "w2l6")
          );
        },
        "component---src-pages-components-alert-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(6)]).then(
            n.bind(null, "QmuD")
          );
        },
        "component---src-pages-components-async-select-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(7)]).then(
            n.bind(null, "OeHE")
          );
        },
        "component---src-pages-components-box-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(8)]).then(
            n.bind(null, "wVdv")
          );
        },
        "component---src-pages-components-branded-navbar-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(9)]).then(
            n.bind(null, "ZF+f")
          );
        },
        "component---src-pages-components-branding-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(10)]).then(
            n.bind(null, "84CC")
          );
        },
        "component---src-pages-components-breadcrumbs-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(11)]).then(
            n.bind(null, "xUHG")
          );
        },
        "component---src-pages-components-button-group-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(12)]).then(
            n.bind(null, "JtwO")
          );
        },
        "component---src-pages-components-buttons-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(13)]).then(
            n.bind(null, "7itv")
          );
        },
        "component---src-pages-components-card-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(14)]).then(
            n.bind(null, "l+XA")
          );
        },
        "component---src-pages-components-card-set-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(15)]).then(
            n.bind(null, "n8l+")
          );
        },
        "component---src-pages-components-checkbox-group-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(16)]).then(
            n.bind(null, "ZpwJ")
          );
        },
        "component---src-pages-components-checkbox-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(17)]).then(
            n.bind(null, "8kQp")
          );
        },
        "component---src-pages-components-date-picker-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(18)]).then(
            n.bind(null, "xlbP")
          );
        },
        "component---src-pages-components-date-range-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(19)]).then(
            n.bind(null, "zewC")
          );
        },
        "component---src-pages-components-dropdown-menu-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(20)]).then(
            n.bind(null, "2kYQ")
          );
        },
        "component---src-pages-components-flex-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(21)]).then(
            n.bind(null, "Kglh")
          );
        },
        "component---src-pages-components-form-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(22)]).then(
            n.bind(null, "aaoP")
          );
        },
        "component---src-pages-components-form-section-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(23)]).then(
            n.bind(null, "+jDl")
          );
        },
        "component---src-pages-components-headings-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(24)]).then(
            n.bind(null, "+UGG")
          );
        },
        "component---src-pages-components-icon-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(25)]).then(
            n.bind(null, "Giz6")
          );
        },
        "component---src-pages-components-iconic-button-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(26)]).then(
            n.bind(null, "rigT")
          );
        },
        "component---src-pages-components-input-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(27)]).then(
            n.bind(null, "GzD8")
          );
        },
        "component---src-pages-components-link-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(28)]).then(
            n.bind(null, "qp64")
          );
        },
        "component---src-pages-components-list-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(29)]).then(
            n.bind(null, "QPcm")
          );
        },
        "component---src-pages-components-loading-animation-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(30)]).then(
            n.bind(null, "ZmFD")
          );
        },
        "component---src-pages-components-modal-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(31)]).then(
            n.bind(null, "s7Ug")
          );
        },
        "component---src-pages-components-month-picker-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(32)]).then(
            n.bind(null, "6RNy")
          );
        },
        "component---src-pages-components-month-range-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(33)]).then(
            n.bind(null, "An8B")
          );
        },
        "component---src-pages-components-navbar-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(34)]).then(
            n.bind(null, "Gs+v")
          );
        },
        "component---src-pages-components-overlay-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(35)]).then(
            n.bind(null, "Up53")
          );
        },
        "component---src-pages-components-pagination-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(36)]).then(
            n.bind(null, "BV/C")
          );
        },
        "component---src-pages-components-radio-group-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(37)]).then(
            n.bind(null, "3KyT")
          );
        },
        "component---src-pages-components-radio-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(38)]).then(
            n.bind(null, "t3L+")
          );
        },
        "component---src-pages-components-select-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(39)]).then(
            n.bind(null, "Vgxo")
          );
        },
        "component---src-pages-components-status-indicator-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(40)]).then(
            n.bind(null, "5ely")
          );
        },
        "component---src-pages-components-table-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(41)]).then(
            n.bind(null, "XjaO")
          );
        },
        "component---src-pages-components-tabs-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(42)]).then(
            n.bind(null, "+gK0")
          );
        },
        "component---src-pages-components-template-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(43)]).then(
            n.bind(null, "TMXu")
          );
        },
        "component---src-pages-components-text-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(44)]).then(
            n.bind(null, "M8yo")
          );
        },
        "component---src-pages-components-textarea-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(45)]).then(
            n.bind(null, "24/a")
          );
        },
        "component---src-pages-components-time-picker-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(46)]).then(
            n.bind(null, "jVpH")
          );
        },
        "component---src-pages-components-time-range-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(47)]).then(
            n.bind(null, "cYik")
          );
        },
        "component---src-pages-components-toast-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(48)]).then(
            n.bind(null, "3R2T")
          );
        },
        "component---src-pages-components-toggle-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(49)]).then(
            n.bind(null, "79O7")
          );
        },
        "component---src-pages-components-tooltip-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(50)]).then(
            n.bind(null, "uQYz")
          );
        },
        "component---src-pages-components-truncated-text-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(51)]).then(
            n.bind(null, "hIA9")
          );
        },
        "component---src-pages-guides-designers-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(52)]).then(
            n.bind(null, "72Bs")
          );
        },
        "component---src-pages-guides-layout-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(53)]).then(
            n.bind(null, "YtzZ")
          );
        },
        "component---src-pages-guides-localization-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(54)]).then(
            n.bind(null, "RU/M")
          );
        },
        "component---src-pages-guides-ops-core-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(55)]).then(
            n.bind(null, "FqOq")
          );
        },
        "component---src-pages-guides-style-props-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(56)]).then(
            n.bind(null, "BIDr")
          );
        },
        "component---src-pages-index-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(57)]).then(
            n.bind(null, "RXBc")
          );
        },
        "component---src-pages-patterns-loading-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(58)]).then(
            n.bind(null, "a6NQ")
          );
        },
        "component---src-pages-style-colour-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(59)]).then(
            n.bind(null, "qxWw")
          );
        },
        "component---src-pages-style-shadows-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(60)]).then(
            n.bind(null, "KozF")
          );
        },
        "component---src-pages-style-spacing-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(61)]).then(
            n.bind(null, "mWLV")
          );
        },
        "component---src-pages-style-typography-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(62)]).then(
            n.bind(null, "2WiL")
          );
        },
        "component---src-pages-theme-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(2), n.e(63)]).then(
            n.bind(null, "5pHh")
          );
        },
        "component---src-templates-markdown-js": function() {
          return Promise.all([n.e(1), n.e(0), n.e(64)]).then(
            n.bind(null, "vSVU")
          );
        }
      };
    },
    "YLt+": function(e) {
      e.exports = JSON.parse("[]");
    },
    YwZP: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Link", function() {
          return D;
        }),
        n.d(t, "Location", function() {
          return y;
        }),
        n.d(t, "LocationProvider", function() {
          return w;
        }),
        n.d(t, "Match", function() {
          return M;
        }),
        n.d(t, "Redirect", function() {
          return N;
        }),
        n.d(t, "Router", function() {
          return R;
        }),
        n.d(t, "ServerLocation", function() {
          return P;
        }),
        n.d(t, "isRedirect", function() {
          return A;
        }),
        n.d(t, "redirectTo", function() {
          return U;
        }),
        n.d(t, "useLocation", function() {
          return F;
        }),
        n.d(t, "useNavigate", function() {
          return W;
        }),
        n.d(t, "useParams", function() {
          return q;
        }),
        n.d(t, "useMatch", function() {
          return G;
        }),
        n.d(t, "BaseContext", function() {
          return j;
        });
      var r = n("q1tI"),
        o = n.n(r),
        a = (n("17x9"), n("QLaP")),
        i = n.n(a),
        s = n("nqlD"),
        c = n.n(s),
        u = n("94VI"),
        l = n("LYrO");
      n.d(t, "matchPath", function() {
        return l.match;
      });
      var p = n("9Xx/");
      n.d(t, "createHistory", function() {
        return p.a;
      }),
        n.d(t, "createMemorySource", function() {
          return p.b;
        }),
        n.d(t, "navigate", function() {
          return p.d;
        }),
        n.d(t, "globalHistory", function() {
          return p.c;
        });
      var f =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      function d(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function m(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function v(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var g = function(e, t) {
          var n = c()(t);
          return (n.displayName = e), n;
        },
        b = g("Location"),
        y = function(e) {
          var t = e.children;
          return o.a.createElement(b.Consumer, null, function(e) {
            return e ? t(e) : o.a.createElement(w, null, t);
          });
        },
        w = (function(e) {
          function t() {
            var n, r;
            h(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = m(this, e.call.apply(e, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              m(r, n)
            );
          }
          return (
            v(t, e),
            (t.prototype.getContext = function() {
              var e = this.props.history;
              return { navigate: e.navigate, location: e.location };
            }),
            (t.prototype.componentDidCatch = function(e, t) {
              if (!A(e)) throw e;
              (0, this.props.history.navigate)(e.uri, { replace: !0 });
            }),
            (t.prototype.componentDidUpdate = function(e, t) {
              t.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (t.prototype.componentDidMount = function() {
              var e = this,
                t = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (t.unlisten = n.listen(function() {
                  Promise.resolve().then(function() {
                    requestAnimationFrame(function() {
                      e.unmounted ||
                        e.setState(function() {
                          return { context: e.getContext() };
                        });
                    });
                  });
                }));
            }),
            (t.prototype.componentWillUnmount = function() {
              var e = this.state.refs;
              (this.unmounted = !0), e.unlisten();
            }),
            (t.prototype.render = function() {
              var e = this.state.context,
                t = this.props.children;
              return o.a.createElement(
                b.Provider,
                { value: e },
                "function" == typeof t ? t(e) : t || null
              );
            }),
            t
          );
        })(o.a.Component);
      w.defaultProps = { history: p.c };
      var P = function(e) {
          var t = e.url,
            n = e.children,
            r = t.indexOf("?"),
            a = void 0,
            i = "";
          return (
            r > -1 ? ((a = t.substring(0, r)), (i = t.substring(r))) : (a = t),
            o.a.createElement(
              b.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: "" },
                  navigate: function() {
                    throw new Error("You can't call navigate on the server.");
                  }
                }
              },
              n
            )
          );
        },
        j = g("Base", { baseuri: "/", basepath: "/" }),
        R = function(e) {
          return o.a.createElement(j.Consumer, null, function(t) {
            return o.a.createElement(y, null, function(n) {
              return o.a.createElement(S, f({}, t, n, e));
            });
          });
        },
        S = (function(e) {
          function t() {
            return h(this, t), m(this, e.apply(this, arguments));
          }
          return (
            v(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.location,
                n = e.navigate,
                r = e.basepath,
                a = e.primary,
                i = e.children,
                s = (e.baseuri, e.component),
                c = void 0 === s ? "div" : s,
                u = d(e, [
                  "location",
                  "navigate",
                  "basepath",
                  "primary",
                  "children",
                  "baseuri",
                  "component"
                ]),
                p = o.a.Children.toArray(i).reduce(function(e, t) {
                  var n = H(r)(t);
                  return e.concat(n);
                }, []),
                h = t.pathname,
                m = Object(l.pick)(p, h);
              if (m) {
                var v = m.params,
                  g = m.uri,
                  b = m.route,
                  y = m.route.value;
                r = b.default ? r : b.path.replace(/\*$/, "");
                var w = f({}, v, {
                    uri: g,
                    location: t,
                    navigate: function(e, t) {
                      return n(Object(l.resolve)(e, g), t);
                    }
                  }),
                  P = o.a.cloneElement(
                    y,
                    w,
                    y.props.children
                      ? o.a.createElement(
                          R,
                          { location: t, primary: a },
                          y.props.children
                        )
                      : void 0
                  ),
                  S = a ? _ : c,
                  O = a ? f({ uri: g, location: t, component: c }, u) : u;
                return o.a.createElement(
                  j.Provider,
                  { value: { baseuri: g, basepath: r } },
                  o.a.createElement(S, O, P)
                );
              }
              return null;
            }),
            t
          );
        })(o.a.PureComponent);
      S.defaultProps = { primary: !0 };
      var O = g("Focus"),
        _ = function(e) {
          var t = e.uri,
            n = e.location,
            r = e.component,
            a = d(e, ["uri", "location", "component"]);
          return o.a.createElement(O.Consumer, null, function(e) {
            return o.a.createElement(
              x,
              f({}, a, { component: r, requestFocus: e, uri: t, location: n })
            );
          });
        },
        E = !0,
        C = 0,
        x = (function(e) {
          function t() {
            var n, r;
            h(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (n = r = m(this, e.call.apply(e, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function(e) {
                !r.state.shouldFocus && e && e.focus();
              }),
              m(r, n)
            );
          }
          return (
            v(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              if (null == t.uri) return f({ shouldFocus: !0 }, e);
              var n = e.uri !== t.uri,
                r =
                  t.location.pathname !== e.location.pathname &&
                  e.location.pathname === e.uri;
              return f({ shouldFocus: n || r }, e);
            }),
            (t.prototype.componentDidMount = function() {
              C++, this.focus();
            }),
            (t.prototype.componentWillUnmount = function() {
              0 === --C && (E = !0);
            }),
            (t.prototype.componentDidUpdate = function(e, t) {
              e.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (t.prototype.focus = function() {
              var e = this.props.requestFocus;
              e
                ? e(this.node)
                : E
                ? (E = !1)
                : this.node &&
                  (this.node.contains(document.activeElement) ||
                    this.node.focus());
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                n = (t.children, t.style),
                r = (t.requestFocus, t.component),
                a = void 0 === r ? "div" : r,
                i = (t.uri,
                t.location,
                d(t, [
                  "children",
                  "style",
                  "requestFocus",
                  "component",
                  "uri",
                  "location"
                ]));
              return o.a.createElement(
                a,
                f(
                  {
                    style: f({ outline: "none" }, n),
                    tabIndex: "-1",
                    ref: function(t) {
                      return (e.node = t);
                    }
                  },
                  i
                ),
                o.a.createElement(
                  O.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            t
          );
        })(o.a.Component);
      Object(u.polyfill)(x);
      var k = function() {},
        L = o.a.forwardRef;
      void 0 === L &&
        (L = function(e) {
          return e;
        });
      var D = L(function(e, t) {
        var n = e.innerRef,
          r = d(e, ["innerRef"]);
        return o.a.createElement(j.Consumer, null, function(e) {
          e.basepath;
          var a = e.baseuri;
          return o.a.createElement(y, null, function(e) {
            var i = e.location,
              s = e.navigate,
              c = r.to,
              u = r.state,
              p = r.replace,
              h = r.getProps,
              m = void 0 === h ? k : h,
              v = d(r, ["to", "state", "replace", "getProps"]),
              g = Object(l.resolve)(c, a),
              b = encodeURI(g),
              y = i.pathname === b,
              w = Object(l.startsWith)(i.pathname, b);
            return o.a.createElement(
              "a",
              f(
                { ref: t || n, "aria-current": y ? "page" : void 0 },
                v,
                m({
                  isCurrent: y,
                  isPartiallyCurrent: w,
                  href: g,
                  location: i
                }),
                {
                  href: g,
                  onClick: function(e) {
                    if ((v.onClick && v.onClick(e), Q(e))) {
                      e.preventDefault();
                      var t = p;
                      if ("boolean" != typeof p && y) {
                        var n = f({}, i.state),
                          r = (n.key, d(n, ["key"]));
                        t = Object(l.shallowCompare)(f({}, u), r);
                      }
                      s(g, { state: u, replace: t });
                    }
                  }
                }
              )
            );
          });
        });
      });
      function T(e) {
        this.uri = e;
      }
      D.displayName = "Link";
      var A = function(e) {
          return e instanceof T;
        },
        U = function(e) {
          throw new T(e);
        },
        I = (function(e) {
          function t() {
            return h(this, t), m(this, e.apply(this, arguments));
          }
          return (
            v(t, e),
            (t.prototype.componentDidMount = function() {
              var e = this.props,
                t = e.navigate,
                n = e.to,
                r = (e.from, e.replace),
                o = void 0 === r || r,
                a = e.state,
                i = (e.noThrow, e.baseuri),
                s = d(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri"
                ]);
              Promise.resolve().then(function() {
                var e = Object(l.resolve)(n, i);
                t(Object(l.insertParams)(e, s), { replace: o, state: a });
              });
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.navigate, e.to),
                n = (e.from, e.replace, e.state, e.noThrow),
                r = e.baseuri,
                o = d(e, [
                  "navigate",
                  "to",
                  "from",
                  "replace",
                  "state",
                  "noThrow",
                  "baseuri"
                ]),
                a = Object(l.resolve)(t, r);
              return n || U(Object(l.insertParams)(a, o)), null;
            }),
            t
          );
        })(o.a.Component),
        N = function(e) {
          return o.a.createElement(j.Consumer, null, function(t) {
            var n = t.baseuri;
            return o.a.createElement(y, null, function(t) {
              return o.a.createElement(I, f({}, t, { baseuri: n }, e));
            });
          });
        },
        M = function(e) {
          var t = e.path,
            n = e.children;
          return o.a.createElement(j.Consumer, null, function(e) {
            var r = e.baseuri;
            return o.a.createElement(y, null, function(e) {
              var o = e.navigate,
                a = e.location,
                i = Object(l.resolve)(t, r),
                s = Object(l.match)(i, a.pathname);
              return n({
                navigate: o,
                location: a,
                match: s ? f({}, s.params, { uri: s.uri, path: t }) : null
              });
            });
          });
        },
        F = function() {
          var e = Object(r.useContext)(b);
          if (!e)
            throw new Error(
              "useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return e.location;
        },
        W = function() {
          var e = Object(r.useContext)(b);
          if (!e)
            throw new Error(
              "useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          return e.navigate;
        },
        q = function() {
          var e = Object(r.useContext)(j);
          if (!e)
            throw new Error(
              "useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var t = F(),
            n = Object(l.match)(e.basepath, t.pathname);
          return n ? n.params : null;
        },
        G = function(e) {
          if (!e)
            throw new Error(
              "useMatch(path: string) requires an argument of a string to match against"
            );
          var t = Object(r.useContext)(j);
          if (!t)
            throw new Error(
              "useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router"
            );
          var n = F(),
            o = Object(l.resolve)(e, t.baseuri),
            a = Object(l.match)(o, n.pathname);
          return a ? f({}, a.params, { uri: a.uri, path: e }) : null;
        },
        B = function(e) {
          return e.replace(/(^\/+|\/+$)/g, "");
        },
        H = function e(t) {
          return function(n) {
            if (!n) return null;
            if (n.type === o.a.Fragment && n.props.children)
              return o.a.Children.map(n.props.children, e(t));
            if (
              (n.props.path || n.props.default || n.type === N || i()(!1),
              n.type !== N || (n.props.from && n.props.to) || i()(!1),
              n.type !== N ||
                Object(l.validateRedirect)(n.props.from, n.props.to) ||
                i()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var r = n.type === N ? n.props.from : n.props.path,
              a = "/" === r ? t : B(t) + "/" + B(r);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? B(a) + "/*" : a
            };
          };
        },
        Q = function(e) {
          return (
            !e.defaultPrevented &&
            0 === e.button &&
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
          );
        };
    },
    b9Nj: function(e, t, n) {
      "use strict";
      var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      t.onRouteUpdate = function(e) {
        var t = e.location,
          n = window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID,
          o = window.GATSBY_GTAG_PLUGIN_ANONYMIZE || !1;
        if (n && "function" == typeof window.gtag) {
          var a = "";
          t && (a = "" + t.pathname + t.search + t.hash);
          var i = {};
          o && (i = { anonymize_ip: !0 }),
            window.gtag("config", n, r({ page_path: a }, i));
        }
      };
    },
    cSJ8: function(e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          void 0 === t && (t = ""),
          t
            ? e === t
              ? "/"
              : e.startsWith(t + "/")
              ? e.slice(t.length)
              : e
            : e
        );
      }
      n.d(t, "a", function() {
        return r;
      });
    },
    cjBy: function(e, t) {
      function n(t) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (e.exports = n = function(e) {
                return typeof e;
              })
            : (e.exports = n = function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
          n(t)
        );
      }
      e.exports = n;
    },
    cu4x: function(e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.parsePath = function(e) {
          var t = e || "/",
            n = "",
            r = "",
            o = t.indexOf("#");
          -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
          var a = t.indexOf("?");
          -1 !== a && ((n = t.substr(a)), (t = t.substr(0, a)));
          return {
            pathname: t,
            search: "?" === n ? "" : n,
            hash: "#" === r ? "" : r
          };
        });
    },
    emEt: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "PageResourceStatus", function() {
          return P;
        }),
        n.d(t, "BaseLoader", function() {
          return E;
        }),
        n.d(t, "ProdLoader", function() {
          return x;
        }),
        n.d(t, "setLoader", function() {
          return k;
        }),
        n.d(t, "publicLoader", function() {
          return L;
        });
      var r = n("9Hrx"),
        o = n("t8Zj"),
        a = (function(e) {
          if ("undefined" == typeof document) return !1;
          var t = document.createElement("link");
          try {
            if (t.relList && "function" == typeof t.relList.supports)
              return t.relList.supports(e);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function(e, t) {
              return new Promise(function(n, r) {
                if ("undefined" != typeof document) {
                  var o = document.createElement("link");
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", e),
                    Object.keys(t).forEach(function(e) {
                      o.setAttribute(e, t[e]);
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(o);
                } else r();
              });
            }
          : function(e) {
              return new Promise(function(t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e, !0),
                  (r.onload = function() {
                    200 === r.status ? t() : n();
                  }),
                  r.send(null);
              });
            },
        i = {},
        s = function(e, t) {
          return new Promise(function(n) {
            i[e]
              ? n()
              : a(e, t)
                  .then(function() {
                    n(), (i[e] = !0);
                  })
                  .catch(function() {});
          });
        },
        c = n("5yr3"),
        u = n("LYrO"),
        l = n("cSJ8"),
        p = function(e) {
          return void 0 === e
            ? e
            : "/" === e
            ? "/"
            : "/" === e.charAt(e.length - 1)
            ? e.slice(0, -1)
            : e;
        };
      function f(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function(e, t) {
              if (!e) return;
              if ("string" == typeof e) return d(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return d(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0;
            return function() {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var h = new Map(),
        m = [],
        v = function(e) {
          var t = decodeURIComponent(e);
          return Object(l.a)(t, "")
            .split("#")[0]
            .split("?")[0];
        };
      function g(e) {
        return e.startsWith("/") ||
          e.startsWith("https://") ||
          e.startsWith("http://")
          ? e
          : new URL(
              e,
              window.location.href +
                (window.location.href.endsWith("/") ? "" : "/")
            ).pathname;
      }
      var b = function(e) {
          for (var t, n = w(e), r = f(m); !(t = r()).done; ) {
            var o = t.value,
              a = o.matchPath,
              i = o.path;
            if (Object(u.match)(a, n)) return p(i);
          }
          return null;
        },
        y = function(e) {
          var t = v(g(e));
          if (h.has(t)) return h.get(t);
          var n = b(t);
          return n || (n = w(e)), h.set(t, n), n;
        },
        w = function(e) {
          var t = v(g(e));
          return "/index.html" === t && (t = "/"), (t = p(t));
        },
        P = { Error: "error", Success: "success" },
        j = function(e) {
          return (e && e.default) || e;
        },
        R = function(e) {
          var t;
          return (
            "/page-data/" +
            ("/" === e
              ? "index"
              : (t = (t = "/" === (t = e)[0] ? t.slice(1) : t).endsWith("/")
                  ? t.slice(0, -1)
                  : t)) +
            "/page-data.json"
          );
        };
      function S(e, t) {
        return (
          void 0 === t && (t = "GET"),
          new Promise(function(n, r) {
            var o = new XMLHttpRequest();
            o.open(t, e, !0),
              (o.onreadystatechange = function() {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      var O,
        _ = function(e, t) {
          void 0 === t && (t = null);
          var n = {
            componentChunkName: e.componentChunkName,
            path: e.path,
            webpackCompilationHash: e.webpackCompilationHash,
            matchPath: e.matchPath,
            staticQueryHashes: e.staticQueryHashes
          };
          return { component: t, json: e.result, page: n };
        },
        E = (function() {
          function e(e, t) {
            (this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = new Map()),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = e),
              (m = t);
          }
          var t = e.prototype;
          return (
            (t.memoizedGet = function(e) {
              var t = this,
                n = this.inFlightNetworkRequests.get(e);
              return (
                n ||
                  ((n = S(e, "GET")), this.inFlightNetworkRequests.set(e, n)),
                n
                  .then(function(n) {
                    return t.inFlightNetworkRequests.delete(e), n;
                  })
                  .catch(function(n) {
                    throw (t.inFlightNetworkRequests.delete(e), n);
                  })
              );
            }),
            (t.setApiRunner = function(e) {
              (this.apiRunner = e),
                (this.prefetchDisabled = e("disableCorePrefetching").some(
                  function(e) {
                    return e;
                  }
                ));
            }),
            (t.fetchPageDataJson = function(e) {
              var t = this,
                n = e.pagePath,
                r = e.retries,
                o = void 0 === r ? 0 : r,
                a = R(n);
              return this.memoizedGet(a).then(function(r) {
                var a = r.status,
                  i = r.responseText;
                if (200 === a)
                  try {
                    var s = JSON.parse(i);
                    if (void 0 === s.path)
                      throw new Error("not a valid pageData response");
                    return Object.assign(e, { status: P.Success, payload: s });
                  } catch (c) {}
                return 404 === a || 200 === a
                  ? "/404.html" === n
                    ? Object.assign(e, { status: P.Error })
                    : t.fetchPageDataJson(
                        Object.assign(e, {
                          pagePath: "/404.html",
                          notFound: !0
                        })
                      )
                  : 500 === a
                  ? Object.assign(e, { status: P.Error })
                  : o < 3
                  ? t.fetchPageDataJson(Object.assign(e, { retries: o + 1 }))
                  : Object.assign(e, { status: P.Error });
              });
            }),
            (t.loadPageDataJson = function(e) {
              var t = this,
                n = y(e);
              return this.pageDataDb.has(n)
                ? Promise.resolve(this.pageDataDb.get(n))
                : this.fetchPageDataJson({ pagePath: n }).then(function(e) {
                    return t.pageDataDb.set(n, e), e;
                  });
            }),
            (t.findMatchPath = function(e) {
              return b(e);
            }),
            (t.loadPage = function(e) {
              var t = this,
                n = y(e);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var o = Promise.all([
                this.loadAppData(),
                this.loadPageDataJson(n)
              ]).then(function(e) {
                var r = e[1];
                if (r.status === P.Error) return { status: P.Error };
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  s = a.staticQueryHashes,
                  u = void 0 === s ? [] : s,
                  l = {},
                  p = t.loadComponent(i).then(function(t) {
                    var n;
                    return (
                      (l.createdAt = new Date()),
                      t
                        ? ((l.status = P.Success),
                          !0 === r.notFound && (l.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: e[0]
                              ? e[0].webpackCompilationHash
                              : ""
                          })),
                          (n = _(o, t)))
                        : (l.status = P.Error),
                      n
                    );
                  }),
                  f = Promise.all(
                    u.map(function(e) {
                      if (t.staticQueryDb.has(e)) {
                        var n = t.staticQueryDb.get(e);
                        return { staticQueryHash: e, jsonPayload: n };
                      }
                      return t
                        .memoizedGet("/static/d/" + e + ".json")
                        .then(function(t) {
                          var n = JSON.parse(t.responseText);
                          return { staticQueryHash: e, jsonPayload: n };
                        });
                    })
                  ).then(function(e) {
                    var n = {};
                    return (
                      e.forEach(function(e) {
                        var r = e.staticQueryHash,
                          o = e.jsonPayload;
                        (n[r] = o), t.staticQueryDb.set(r, o);
                      }),
                      n
                    );
                  });
                return Promise.all([p, f]).then(function(e) {
                  var r,
                    o = e[0],
                    a = e[1];
                  return (
                    o &&
                      ((r = Object.assign({}, o, { staticQueryResults: a })),
                      (l.payload = r),
                      c.a.emit("onPostLoadPageResources", {
                        page: r,
                        pageResources: r
                      })),
                    t.pageDb.set(n, l),
                    r
                  );
                });
              });
              return (
                o
                  .then(function(e) {
                    t.inFlightDb.delete(n);
                  })
                  .catch(function(e) {
                    throw (t.inFlightDb.delete(n), e);
                  }),
                this.inFlightDb.set(n, o),
                o
              );
            }),
            (t.loadPageSync = function(e) {
              var t = y(e);
              if (this.pageDb.has(t)) return this.pageDb.get(t).payload;
            }),
            (t.shouldPrefetch = function(e) {
              return (
                !!(function() {
                  if (
                    "connection" in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || "").includes("2g")
                    )
                      return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(e)
              );
            }),
            (t.prefetch = function(e) {
              var t = this;
              if (!this.shouldPrefetch(e)) return !1;
              if (
                (this.prefetchTriggered.has(e) ||
                  (this.apiRunner("onPrefetchPathname", { pathname: e }),
                  this.prefetchTriggered.add(e)),
                this.prefetchDisabled)
              )
                return !1;
              var n = y(e);
              return (
                this.doPrefetch(n).then(function() {
                  t.prefetchCompleted.has(e) ||
                    (t.apiRunner("onPostPrefetchPathname", { pathname: e }),
                    t.prefetchCompleted.add(e));
                }),
                !0
              );
            }),
            (t.doPrefetch = function(e) {
              throw new Error("doPrefetch not implemented");
            }),
            (t.hovering = function(e) {
              this.loadPage(e);
            }),
            (t.getResourceURLsForPathname = function(e) {
              var t = y(e),
                n = this.pageDataDb.get(t);
              if (n) {
                var r = _(n.payload);
                return [].concat(Object(o.a)(C(r.page.componentChunkName)), [
                  R(t)
                ]);
              }
              return null;
            }),
            (t.isPageNotFound = function(e) {
              var t = y(e),
                n = this.pageDb.get(t);
              return n && !0 === n.notFound;
            }),
            (t.loadAppData = function(e) {
              var t = this;
              return (
                void 0 === e && (e = 0),
                this.memoizedGet("/page-data/app-data.json").then(function(n) {
                  var r,
                    o = n.status,
                    a = n.responseText;
                  if (200 !== o && e < 3) return t.loadAppData(e + 1);
                  if (200 === o)
                    try {
                      var i = JSON.parse(a);
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error("not a valid app-data response");
                      r = i;
                    } catch (s) {}
                  return r;
                })
              );
            }),
            e
          );
        })(),
        C = function(e) {
          return (window.___chunkMapping[e] || []).map(function(e) {
            return "" + e;
          });
        },
        x = (function(e) {
          function t(t, n) {
            return (
              e.call(
                this,
                function(e) {
                  return t.components[e]
                    ? t.components[e]()
                        .then(j)
                        .catch(function() {
                          return null;
                        })
                    : Promise.resolve();
                },
                n
              ) || this
            );
          }
          Object(r.a)(t, e);
          var n = t.prototype;
          return (
            (n.doPrefetch = function(e) {
              var t = this,
                n = R(e);
              return s(n, { crossOrigin: "anonymous", as: "fetch" })
                .then(function() {
                  return t.loadPageDataJson(e);
                })
                .then(function(e) {
                  if (e.status !== P.Success) return Promise.resolve();
                  var t = e.payload,
                    n = t.componentChunkName,
                    r = C(n);
                  return Promise.all(r.map(s)).then(function() {
                    return t;
                  });
                });
            }),
            (n.loadPageDataJson = function(t) {
              return e.prototype.loadPageDataJson
                .call(this, t)
                .then(function(e) {
                  return e.notFound
                    ? S(t, "HEAD").then(function(t) {
                        return 200 === t.status ? { status: P.Error } : e;
                      })
                    : e;
                });
            }),
            t
          );
        })(E),
        k = function(e) {
          O = e;
        },
        L = {
          getResourcesForPathname: function(e) {
            return (
              console.warn(
                "Warning: getResourcesForPathname is deprecated. Use loadPage instead"
              ),
              O.i.loadPage(e)
            );
          },
          getResourcesForPathnameSync: function(e) {
            return (
              console.warn(
                "Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead"
              ),
              O.i.loadPageSync(e)
            );
          },
          enqueue: function(e) {
            return O.prefetch(e);
          },
          getResourceURLsForPathname: function(e) {
            return O.getResourceURLsForPathname(e);
          },
          loadPage: function(e) {
            return O.loadPage(e);
          },
          loadPageSync: function(e) {
            return O.loadPageSync(e);
          },
          prefetch: function(e) {
            return O.prefetch(e);
          },
          isPageNotFound: function(e) {
            return O.isPageNotFound(e);
          },
          hovering: function(e) {
            return O.hovering(e);
          },
          loadAppData: function() {
            return O.loadAppData();
          }
        };
      t.default = L;
    },
    hd9s: function(e, t, n) {
      "use strict";
      var r = n("jGDn"),
        o = n("5NKs");
      (t.__esModule = !0), (t.ScrollContainer = void 0);
      var a = o(n("j8BX")),
        i = o(n("XEEL")),
        s = r(n("q1tI")),
        c = o(n("i8i4")),
        u = n("Enzk"),
        l = n("YwZP"),
        p = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          (0, i.default)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function() {
              var e = this,
                t = c.default.findDOMNode(this),
                n = this.props,
                r = n.location,
                o = n.scrollKey;
              if (t) {
                t.addEventListener("scroll", function() {
                  e.props.context.save(r, o, t.scrollTop);
                });
                var a = this.props.context.read(r, o);
                t.scrollTo(0, a || 0);
              }
            }),
            (n.render = function() {
              return this.props.children;
            }),
            t
          );
        })(s.Component);
      t.ScrollContainer = function(e) {
        return s.createElement(l.Location, null, function(t) {
          var n = t.location;
          return s.createElement(u.ScrollContext.Consumer, null, function(t) {
            return s.createElement(
              p,
              (0, a.default)({}, e, { context: t, location: n })
            );
          });
        });
      };
    },
    j8BX: function(e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    jGDn: function(e, t, n) {
      var r = n("cjBy");
      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }
      e.exports = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e))
          return { default: e };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var n = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            s && (s.get || s.set)
              ? Object.defineProperty(n, i, s)
              : (n[i] = e[i]);
          }
        return (n.default = e), t && t.set(e, n), n;
      };
    },
    lw3w: function(e, t, n) {
      var r;
      e.exports = ((r = n("rzlk")) && r.default) || r;
    },
    npZl: function(e, t, n) {
      "use strict";
      var r = n("5NKs");
      n("Wbzz"), r(n("9hXx"));
    },
    nqlD: function(e, t, n) {
      var r = n("q1tI").createContext;
      (e.exports = r), (e.exports.default = r);
    },
    nwwn: function(e, t, n) {
      "use strict";
      (t.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: "",
        backgroundColor: "white",
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        tracedSVG: !1,
        loading: "lazy",
        disableBgImageOnAlpha: !1,
        disableBgImage: !1
      }),
        (t.imageClass = "gatsby-resp-image-image"),
        (t.imageWrapperClass = "gatsby-resp-image-wrapper"),
        (t.imageBackgroundClass = "gatsby-resp-image-background-image");
    },
    o2xN: function(e) {
      e.exports = JSON.parse("[]");
    },
    q9nr: function(e, t, n) {
      "use strict";
      var r = n("nwwn"),
        o = r.DEFAULT_OPTIONS,
        a = r.imageClass,
        i = r.imageBackgroundClass,
        s = r.imageWrapperClass;
      t.onRouteUpdate = function(e, t) {
        for (
          var n = Object.assign({}, o, t),
            r = document.querySelectorAll("." + s),
            c = function(e) {
              var t = r[e],
                o = t.querySelector("." + i),
                s = t.querySelector("." + a),
                c = function() {
                  (o.style.transition = "opacity 0.5s 0.5s"),
                    (s.style.transition = "opacity 0.5s"),
                    u();
                },
                u = function e() {
                  (o.style.opacity = 0),
                    (s.style.opacity = 1),
                    (s.style.color = "inherit"),
                    (s.style.boxShadow =
                      "inset 0px 0px 0px 400px " + n.backgroundColor),
                    s.removeEventListener("load", c),
                    s.removeEventListener("error", e);
                };
              (s.style.opacity = 0),
                s.addEventListener("load", c),
                s.addEventListener("error", u),
                s.complete && u();
            },
            u = 0;
          u < r.length;
          u++
        )
          c(u);
      };
    },
    rzlk: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n("q1tI"),
        o = n.n(r),
        a = n("IOVJ");
      t.default = function(e) {
        var t = e.location,
          n = e.pageResources;
        return n
          ? o.a.createElement(
              a.a,
              Object.assign({ location: t, pageResources: n }, n.json)
            )
          : null;
      };
    },
    t8Zj: function(e, t, n) {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function(e, t) {
            if (e) {
              if ("string" == typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      n.d(t, "a", function() {
        return o;
      });
    },
    uDP2: function(e, t) {
      e.exports = function(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      };
    },
    v06X: function(e, t) {
      e.exports = function(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    xtsi: function(e, t, n) {
      var r = n("LeKB"),
        o = n("emEt").publicLoader,
        a = o.getResourcesForPathname,
        i = o.getResourcesForPathnameSync,
        s = o.getResourceURLsForPathname,
        c = o.loadPage,
        u = o.loadPageSync;
      (t.apiRunner = function(e, t, n, o) {
        void 0 === t && (t = {});
        var l = r.map(function(n) {
          if (n.plugin[e]) {
            (t.getResourcesForPathnameSync = i),
              (t.getResourcesForPathname = a),
              (t.getResourceURLsForPathname = s),
              (t.loadPage = c),
              (t.loadPageSync = u);
            var r = n.plugin[e](t, n.options);
            return r && o && (t = o({ args: t, result: r, plugin: n })), r;
          }
        });
        return (l = l.filter(function(e) {
          return void 0 !== e;
        })).length > 0
          ? l
          : n
          ? [n]
          : [];
      }),
        (t.apiRunnerAsync = function(e, t, n) {
          return r.reduce(function(n, r) {
            return r.plugin[e]
              ? n.then(function() {
                  return r.plugin[e](t, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    }
  },
  [["UxWs", 3, 65]]
]);
//# sourceMappingURL=app-761d6075312289fc2cf7.js.map
