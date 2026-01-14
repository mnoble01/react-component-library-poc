import { r as xv, j as E2 } from "./jsx-runtime-CG-hOSXf.js";
import { r as lE, A as aE } from "./App-B3_zMr3e.js";
var Bv = { exports: {} }, ip = {}, Nv = { exports: {} }, sS = {};
var A2;
function nE() {
  return A2 || (A2 = 1, (function(J) {
    function He(O, Z) {
      var w = O.length;
      O.push(Z);
      t: for (; 0 < w; ) {
        var ot = w - 1 >>> 1, pt = O[ot];
        if (0 < te(pt, Z))
          O[ot] = Z, O[w] = pt, w = ot;
        else break t;
      }
    }
    function ee(O) {
      return O.length === 0 ? null : O[0];
    }
    function H(O) {
      if (O.length === 0) return null;
      var Z = O[0], w = O.pop();
      if (w !== Z) {
        O[0] = w;
        t: for (var ot = 0, pt = O.length, Ke = pt >>> 1; ot < Ke; ) {
          var le = 2 * (ot + 1) - 1, Bt = O[le], Rt = le + 1, Al = O[Rt];
          if (0 > te(Bt, w))
            Rt < pt && 0 > te(Al, Bt) ? (O[ot] = Al, O[Rt] = w, ot = Rt) : (O[ot] = Bt, O[le] = w, ot = le);
          else if (Rt < pt && 0 > te(Al, w))
            O[ot] = Al, O[Rt] = w, ot = Rt;
          else break t;
        }
      }
      return Z;
    }
    function te(O, Z) {
      var w = O.sortIndex - Z.sortIndex;
      return w !== 0 ? w : O.id - Z.id;
    }
    if (J.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Me = performance;
      J.unstable_now = function() {
        return Me.now();
      };
    } else {
      var we = Date, $ = we.now();
      J.unstable_now = function() {
        return we.now() - $;
      };
    }
    var F = [], L = [], qt = 1, Y = null, U = 3, tt = !1, Zt = !1, Je = !1, ge = !1, se = typeof setTimeout == "function" ? setTimeout : null, Xn = typeof clearTimeout == "function" ? clearTimeout : null, Ie = typeof setImmediate < "u" ? setImmediate : null;
    function jl(O) {
      for (var Z = ee(L); Z !== null; ) {
        if (Z.callback === null) H(L);
        else if (Z.startTime <= O)
          H(L), Z.sortIndex = Z.expirationTime, He(F, Z);
        else break;
        Z = ee(L);
      }
    }
    function on(O) {
      if (Je = !1, jl(O), !Zt)
        if (ee(F) !== null)
          Zt = !0, na || (na = !0, Xt());
        else {
          var Z = ee(L);
          Z !== null && ca(on, Z.startTime - O);
        }
    }
    var na = !1, cl = -1, Gt = 5, ua = -1;
    function at() {
      return ge ? !0 : !(J.unstable_now() - ua < Gt);
    }
    function Pe() {
      if (ge = !1, na) {
        var O = J.unstable_now();
        ua = O;
        var Z = !0;
        try {
          t: {
            Zt = !1, Je && (Je = !1, Xn(cl), cl = -1), tt = !0;
            var w = U;
            try {
              e: {
                for (jl(O), Y = ee(F); Y !== null && !(Y.expirationTime > O && at()); ) {
                  var ot = Y.callback;
                  if (typeof ot == "function") {
                    Y.callback = null, U = Y.priorityLevel;
                    var pt = ot(
                      Y.expirationTime <= O
                    );
                    if (O = J.unstable_now(), typeof pt == "function") {
                      Y.callback = pt, jl(O), Z = !0;
                      break e;
                    }
                    Y === ee(F) && H(F), jl(O);
                  } else H(F);
                  Y = ee(F);
                }
                if (Y !== null) Z = !0;
                else {
                  var Ke = ee(L);
                  Ke !== null && ca(
                    on,
                    Ke.startTime - O
                  ), Z = !1;
                }
              }
              break t;
            } finally {
              Y = null, U = w, tt = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? Xt() : na = !1;
        }
      }
    }
    var Xt;
    if (typeof Ie == "function")
      Xt = function() {
        Ie(Pe);
      };
    else if (typeof MessageChannel < "u") {
      var Ht = new MessageChannel(), ia = Ht.port2;
      Ht.port1.onmessage = Pe, Xt = function() {
        ia.postMessage(null);
      };
    } else
      Xt = function() {
        se(Pe, 0);
      };
    function ca(O, Z) {
      cl = se(function() {
        O(J.unstable_now());
      }, Z);
    }
    J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, J.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Gt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, J.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, J.unstable_next = function(O) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = U;
      }
      var w = U;
      U = Z;
      try {
        return O();
      } finally {
        U = w;
      }
    }, J.unstable_requestPaint = function() {
      ge = !0;
    }, J.unstable_runWithPriority = function(O, Z) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var w = U;
      U = O;
      try {
        return Z();
      } finally {
        U = w;
      }
    }, J.unstable_scheduleCallback = function(O, Z, w) {
      var ot = J.unstable_now();
      switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ot + w : ot) : w = ot, O) {
        case 1:
          var pt = -1;
          break;
        case 2:
          pt = 250;
          break;
        case 5:
          pt = 1073741823;
          break;
        case 4:
          pt = 1e4;
          break;
        default:
          pt = 5e3;
      }
      return pt = w + pt, O = {
        id: qt++,
        callback: Z,
        priorityLevel: O,
        startTime: w,
        expirationTime: pt,
        sortIndex: -1
      }, w > ot ? (O.sortIndex = w, He(L, O), ee(F) === null && O === ee(L) && (Je ? (Xn(cl), cl = -1) : Je = !0, ca(on, w - ot))) : (O.sortIndex = pt, He(F, O), Zt || tt || (Zt = !0, na || (na = !0, Xt()))), O;
    }, J.unstable_shouldYield = at, J.unstable_wrapCallback = function(O) {
      var Z = U;
      return function() {
        var w = U;
        U = Z;
        try {
          return O.apply(this, arguments);
        } finally {
          U = w;
        }
      };
    };
  })(sS)), sS;
}
var rS = {};
var z2;
function uE() {
  return z2 || (z2 = 1, (function(J) {
    process.env.NODE_ENV !== "production" && (function() {
      function He() {
        if (on = !1, ua) {
          var O = J.unstable_now();
          Xt = O;
          var Z = !0;
          try {
            t: {
              Ie = !1, jl && (jl = !1, cl(at), at = -1), Xn = !0;
              var w = se;
              try {
                e: {
                  for (we(O), ge = H(tt); ge !== null && !(ge.expirationTime > O && F()); ) {
                    var ot = ge.callback;
                    if (typeof ot == "function") {
                      ge.callback = null, se = ge.priorityLevel;
                      var pt = ot(
                        ge.expirationTime <= O
                      );
                      if (O = J.unstable_now(), typeof pt == "function") {
                        ge.callback = pt, we(O), Z = !0;
                        break e;
                      }
                      ge === H(tt) && te(tt), we(O);
                    } else te(tt);
                    ge = H(tt);
                  }
                  if (ge !== null) Z = !0;
                  else {
                    var Ke = H(Zt);
                    Ke !== null && L(
                      $,
                      Ke.startTime - O
                    ), Z = !1;
                  }
                }
                break t;
              } finally {
                ge = null, se = w, Xn = !1;
              }
              Z = void 0;
            }
          } finally {
            Z ? Ht() : ua = !1;
          }
        }
      }
      function ee(O, Z) {
        var w = O.length;
        O.push(Z);
        t: for (; 0 < w; ) {
          var ot = w - 1 >>> 1, pt = O[ot];
          if (0 < Me(pt, Z))
            O[ot] = Z, O[w] = pt, w = ot;
          else break t;
        }
      }
      function H(O) {
        return O.length === 0 ? null : O[0];
      }
      function te(O) {
        if (O.length === 0) return null;
        var Z = O[0], w = O.pop();
        if (w !== Z) {
          O[0] = w;
          t: for (var ot = 0, pt = O.length, Ke = pt >>> 1; ot < Ke; ) {
            var le = 2 * (ot + 1) - 1, Bt = O[le], Rt = le + 1, Al = O[Rt];
            if (0 > Me(Bt, w))
              Rt < pt && 0 > Me(Al, Bt) ? (O[ot] = Al, O[Rt] = w, ot = Rt) : (O[ot] = Bt, O[le] = w, ot = le);
            else if (Rt < pt && 0 > Me(Al, w))
              O[ot] = Al, O[Rt] = w, ot = Rt;
            else break t;
          }
        }
        return Z;
      }
      function Me(O, Z) {
        var w = O.sortIndex - Z.sortIndex;
        return w !== 0 ? w : O.id - Z.id;
      }
      function we(O) {
        for (var Z = H(Zt); Z !== null; ) {
          if (Z.callback === null) te(Zt);
          else if (Z.startTime <= O)
            te(Zt), Z.sortIndex = Z.expirationTime, ee(tt, Z);
          else break;
          Z = H(Zt);
        }
      }
      function $(O) {
        if (jl = !1, we(O), !Ie)
          if (H(tt) !== null)
            Ie = !0, ua || (ua = !0, Ht());
          else {
            var Z = H(Zt);
            Z !== null && L(
              $,
              Z.startTime - O
            );
          }
      }
      function F() {
        return on ? !0 : !(J.unstable_now() - Xt < Pe);
      }
      function L(O, Z) {
        at = na(function() {
          O(J.unstable_now());
        }, Z);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), J.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var qt = performance;
        J.unstable_now = function() {
          return qt.now();
        };
      } else {
        var Y = Date, U = Y.now();
        J.unstable_now = function() {
          return Y.now() - U;
        };
      }
      var tt = [], Zt = [], Je = 1, ge = null, se = 3, Xn = !1, Ie = !1, jl = !1, on = !1, na = typeof setTimeout == "function" ? setTimeout : null, cl = typeof clearTimeout == "function" ? clearTimeout : null, Gt = typeof setImmediate < "u" ? setImmediate : null, ua = !1, at = -1, Pe = 5, Xt = -1;
      if (typeof Gt == "function")
        var Ht = function() {
          Gt(He);
        };
      else if (typeof MessageChannel < "u") {
        var ia = new MessageChannel(), ca = ia.port2;
        ia.port1.onmessage = He, Ht = function() {
          ca.postMessage(null);
        };
      } else
        Ht = function() {
          na(He, 0);
        };
      J.unstable_IdlePriority = 5, J.unstable_ImmediatePriority = 1, J.unstable_LowPriority = 4, J.unstable_NormalPriority = 3, J.unstable_Profiling = null, J.unstable_UserBlockingPriority = 2, J.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, J.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Pe = 0 < O ? Math.floor(1e3 / O) : 5;
      }, J.unstable_getCurrentPriorityLevel = function() {
        return se;
      }, J.unstable_next = function(O) {
        switch (se) {
          case 1:
          case 2:
          case 3:
            var Z = 3;
            break;
          default:
            Z = se;
        }
        var w = se;
        se = Z;
        try {
          return O();
        } finally {
          se = w;
        }
      }, J.unstable_requestPaint = function() {
        on = !0;
      }, J.unstable_runWithPriority = function(O, Z) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var w = se;
        se = O;
        try {
          return Z();
        } finally {
          se = w;
        }
      }, J.unstable_scheduleCallback = function(O, Z, w) {
        var ot = J.unstable_now();
        switch (typeof w == "object" && w !== null ? (w = w.delay, w = typeof w == "number" && 0 < w ? ot + w : ot) : w = ot, O) {
          case 1:
            var pt = -1;
            break;
          case 2:
            pt = 250;
            break;
          case 5:
            pt = 1073741823;
            break;
          case 4:
            pt = 1e4;
            break;
          default:
            pt = 5e3;
        }
        return pt = w + pt, O = {
          id: Je++,
          callback: Z,
          priorityLevel: O,
          startTime: w,
          expirationTime: pt,
          sortIndex: -1
        }, w > ot ? (O.sortIndex = w, ee(Zt, O), H(tt) === null && O === H(Zt) && (jl ? (cl(at), at = -1) : jl = !0, L($, w - ot))) : (O.sortIndex = pt, ee(tt, O), Ie || Xn || (Ie = !0, ua || (ua = !0, Ht()))), O;
      }, J.unstable_shouldYield = F, J.unstable_wrapCallback = function(O) {
        var Z = se;
        return function() {
          var w = se;
          se = Z;
          try {
            return O.apply(this, arguments);
          } finally {
            se = w;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(rS)), rS;
}
var D2;
function H2() {
  return D2 || (D2 = 1, process.env.NODE_ENV === "production" ? Nv.exports = nE() : Nv.exports = uE()), Nv.exports;
}
var qv = { exports: {} }, va = {};
var O2;
function iE() {
  if (O2) return va;
  O2 = 1;
  var J = xv();
  function He(F) {
    var L = "https://react.dev/errors/" + F;
    if (1 < arguments.length) {
      L += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var qt = 2; qt < arguments.length; qt++)
        L += "&args[]=" + encodeURIComponent(arguments[qt]);
    }
    return "Minified React error #" + F + "; visit " + L + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ee() {
  }
  var H = {
    d: {
      f: ee,
      r: function() {
        throw Error(He(522));
      },
      D: ee,
      C: ee,
      L: ee,
      m: ee,
      X: ee,
      S: ee,
      M: ee
    },
    p: 0,
    findDOMNode: null
  }, te = /* @__PURE__ */ Symbol.for("react.portal");
  function Me(F, L, qt) {
    var Y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: te,
      key: Y == null ? null : "" + Y,
      children: F,
      containerInfo: L,
      implementation: qt
    };
  }
  var we = J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function $(F, L) {
    if (F === "font") return "";
    if (typeof L == "string")
      return L === "use-credentials" ? L : "";
  }
  return va.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H, va.createPortal = function(F, L) {
    var qt = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!L || L.nodeType !== 1 && L.nodeType !== 9 && L.nodeType !== 11)
      throw Error(He(299));
    return Me(F, L, null, qt);
  }, va.flushSync = function(F) {
    var L = we.T, qt = H.p;
    try {
      if (we.T = null, H.p = 2, F) return F();
    } finally {
      we.T = L, H.p = qt, H.d.f();
    }
  }, va.preconnect = function(F, L) {
    typeof F == "string" && (L ? (L = L.crossOrigin, L = typeof L == "string" ? L === "use-credentials" ? L : "" : void 0) : L = null, H.d.C(F, L));
  }, va.prefetchDNS = function(F) {
    typeof F == "string" && H.d.D(F);
  }, va.preinit = function(F, L) {
    if (typeof F == "string" && L && typeof L.as == "string") {
      var qt = L.as, Y = $(qt, L.crossOrigin), U = typeof L.integrity == "string" ? L.integrity : void 0, tt = typeof L.fetchPriority == "string" ? L.fetchPriority : void 0;
      qt === "style" ? H.d.S(
        F,
        typeof L.precedence == "string" ? L.precedence : void 0,
        {
          crossOrigin: Y,
          integrity: U,
          fetchPriority: tt
        }
      ) : qt === "script" && H.d.X(F, {
        crossOrigin: Y,
        integrity: U,
        fetchPriority: tt,
        nonce: typeof L.nonce == "string" ? L.nonce : void 0
      });
    }
  }, va.preinitModule = function(F, L) {
    if (typeof F == "string")
      if (typeof L == "object" && L !== null) {
        if (L.as == null || L.as === "script") {
          var qt = $(
            L.as,
            L.crossOrigin
          );
          H.d.M(F, {
            crossOrigin: qt,
            integrity: typeof L.integrity == "string" ? L.integrity : void 0,
            nonce: typeof L.nonce == "string" ? L.nonce : void 0
          });
        }
      } else L == null && H.d.M(F);
  }, va.preload = function(F, L) {
    if (typeof F == "string" && typeof L == "object" && L !== null && typeof L.as == "string") {
      var qt = L.as, Y = $(qt, L.crossOrigin);
      H.d.L(F, qt, {
        crossOrigin: Y,
        integrity: typeof L.integrity == "string" ? L.integrity : void 0,
        nonce: typeof L.nonce == "string" ? L.nonce : void 0,
        type: typeof L.type == "string" ? L.type : void 0,
        fetchPriority: typeof L.fetchPriority == "string" ? L.fetchPriority : void 0,
        referrerPolicy: typeof L.referrerPolicy == "string" ? L.referrerPolicy : void 0,
        imageSrcSet: typeof L.imageSrcSet == "string" ? L.imageSrcSet : void 0,
        imageSizes: typeof L.imageSizes == "string" ? L.imageSizes : void 0,
        media: typeof L.media == "string" ? L.media : void 0
      });
    }
  }, va.preloadModule = function(F, L) {
    if (typeof F == "string")
      if (L) {
        var qt = $(L.as, L.crossOrigin);
        H.d.m(F, {
          as: typeof L.as == "string" && L.as !== "script" ? L.as : void 0,
          crossOrigin: qt,
          integrity: typeof L.integrity == "string" ? L.integrity : void 0
        });
      } else H.d.m(F);
  }, va.requestFormReset = function(F) {
    H.d.r(F);
  }, va.unstable_batchedUpdates = function(F, L) {
    return F(L);
  }, va.useFormState = function(F, L, qt) {
    return we.H.useFormState(F, L, qt);
  }, va.useFormStatus = function() {
    return we.H.useHostTransitionStatus();
  }, va.version = "19.2.3", va;
}
var Sa = {};
var M2;
function cE() {
  return M2 || (M2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function J() {
    }
    function He(Y) {
      return "" + Y;
    }
    function ee(Y, U, tt) {
      var Zt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        He(Zt);
        var Je = !1;
      } catch {
        Je = !0;
      }
      return Je && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Zt[Symbol.toStringTag] || Zt.constructor.name || "Object"
      ), He(Zt)), {
        $$typeof: L,
        key: Zt == null ? null : "" + Zt,
        children: Y,
        containerInfo: U,
        implementation: tt
      };
    }
    function H(Y, U) {
      if (Y === "font") return "";
      if (typeof U == "string")
        return U === "use-credentials" ? U : "";
    }
    function te(Y) {
      return Y === null ? "`null`" : Y === void 0 ? "`undefined`" : Y === "" ? "an empty string" : 'something with type "' + typeof Y + '"';
    }
    function Me(Y) {
      return Y === null ? "`null`" : Y === void 0 ? "`undefined`" : Y === "" ? "an empty string" : typeof Y == "string" ? JSON.stringify(Y) : typeof Y == "number" ? "`" + Y + "`" : 'something with type "' + typeof Y + '"';
    }
    function we() {
      var Y = qt.H;
      return Y === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), Y;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var $ = xv(), F = {
      d: {
        f: J,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: J,
        C: J,
        L: J,
        m: J,
        X: J,
        S: J,
        M: J
      },
      p: 0,
      findDOMNode: null
    }, L = /* @__PURE__ */ Symbol.for("react.portal"), qt = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Sa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, Sa.createPortal = function(Y, U) {
      var tt = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!U || U.nodeType !== 1 && U.nodeType !== 9 && U.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return ee(Y, U, null, tt);
    }, Sa.flushSync = function(Y) {
      var U = qt.T, tt = F.p;
      try {
        if (qt.T = null, F.p = 2, Y)
          return Y();
      } finally {
        qt.T = U, F.p = tt, F.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Sa.preconnect = function(Y, U) {
      typeof Y == "string" && Y ? U != null && typeof U != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Me(U)
      ) : U != null && typeof U.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        te(U.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        te(Y)
      ), typeof Y == "string" && (U ? (U = U.crossOrigin, U = typeof U == "string" ? U === "use-credentials" ? U : "" : void 0) : U = null, F.d.C(Y, U));
    }, Sa.prefetchDNS = function(Y) {
      if (typeof Y != "string" || !Y)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          te(Y)
        );
      else if (1 < arguments.length) {
        var U = arguments[1];
        typeof U == "object" && U.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Me(U)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Me(U)
        );
      }
      typeof Y == "string" && F.d.D(Y);
    }, Sa.preinit = function(Y, U) {
      if (typeof Y == "string" && Y ? U == null || typeof U != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Me(U)
      ) : U.as !== "style" && U.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Me(U.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        te(Y)
      ), typeof Y == "string" && U && typeof U.as == "string") {
        var tt = U.as, Zt = H(tt, U.crossOrigin), Je = typeof U.integrity == "string" ? U.integrity : void 0, ge = typeof U.fetchPriority == "string" ? U.fetchPriority : void 0;
        tt === "style" ? F.d.S(
          Y,
          typeof U.precedence == "string" ? U.precedence : void 0,
          {
            crossOrigin: Zt,
            integrity: Je,
            fetchPriority: ge
          }
        ) : tt === "script" && F.d.X(Y, {
          crossOrigin: Zt,
          integrity: Je,
          fetchPriority: ge,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0
        });
      }
    }, Sa.preinitModule = function(Y, U) {
      var tt = "";
      typeof Y == "string" && Y || (tt += " The `href` argument encountered was " + te(Y) + "."), U !== void 0 && typeof U != "object" ? tt += " The `options` argument encountered was " + te(U) + "." : U && "as" in U && U.as !== "script" && (tt += " The `as` option encountered was " + Me(U.as) + "."), tt ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        tt
      ) : (tt = U && typeof U.as == "string" ? U.as : "script", tt) === "script" || (tt = Me(tt), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        tt,
        Y
      )), typeof Y == "string" && (typeof U == "object" && U !== null ? (U.as == null || U.as === "script") && (tt = H(
        U.as,
        U.crossOrigin
      ), F.d.M(Y, {
        crossOrigin: tt,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0,
        nonce: typeof U.nonce == "string" ? U.nonce : void 0
      })) : U == null && F.d.M(Y));
    }, Sa.preload = function(Y, U) {
      var tt = "";
      if (typeof Y == "string" && Y || (tt += " The `href` argument encountered was " + te(Y) + "."), U == null || typeof U != "object" ? tt += " The `options` argument encountered was " + te(U) + "." : typeof U.as == "string" && U.as || (tt += " The `as` option encountered was " + te(U.as) + "."), tt && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        tt
      ), typeof Y == "string" && typeof U == "object" && U !== null && typeof U.as == "string") {
        tt = U.as;
        var Zt = H(
          tt,
          U.crossOrigin
        );
        F.d.L(Y, tt, {
          crossOrigin: Zt,
          integrity: typeof U.integrity == "string" ? U.integrity : void 0,
          nonce: typeof U.nonce == "string" ? U.nonce : void 0,
          type: typeof U.type == "string" ? U.type : void 0,
          fetchPriority: typeof U.fetchPriority == "string" ? U.fetchPriority : void 0,
          referrerPolicy: typeof U.referrerPolicy == "string" ? U.referrerPolicy : void 0,
          imageSrcSet: typeof U.imageSrcSet == "string" ? U.imageSrcSet : void 0,
          imageSizes: typeof U.imageSizes == "string" ? U.imageSizes : void 0,
          media: typeof U.media == "string" ? U.media : void 0
        });
      }
    }, Sa.preloadModule = function(Y, U) {
      var tt = "";
      typeof Y == "string" && Y || (tt += " The `href` argument encountered was " + te(Y) + "."), U !== void 0 && typeof U != "object" ? tt += " The `options` argument encountered was " + te(U) + "." : U && "as" in U && typeof U.as != "string" && (tt += " The `as` option encountered was " + te(U.as) + "."), tt && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        tt
      ), typeof Y == "string" && (U ? (tt = H(
        U.as,
        U.crossOrigin
      ), F.d.m(Y, {
        as: typeof U.as == "string" && U.as !== "script" ? U.as : void 0,
        crossOrigin: tt,
        integrity: typeof U.integrity == "string" ? U.integrity : void 0
      })) : F.d.m(Y));
    }, Sa.requestFormReset = function(Y) {
      F.d.r(Y);
    }, Sa.unstable_batchedUpdates = function(Y, U) {
      return Y(U);
    }, Sa.useFormState = function(Y, U, tt) {
      return we().useFormState(Y, U, tt);
    }, Sa.useFormStatus = function() {
      return we().useHostTransitionStatus();
    }, Sa.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Sa;
}
var R2;
function B2() {
  if (R2) return qv.exports;
  R2 = 1;
  function J() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J);
      } catch (He) {
        console.error(He);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (J(), qv.exports = iE()) : qv.exports = cE(), qv.exports;
}
var U2;
function oE() {
  if (U2) return ip;
  U2 = 1;
  var J = H2(), He = xv(), ee = B2();
  function H(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function te(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Me(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function we(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function $(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function F(l) {
    if (Me(l) !== l)
      throw Error(H(188));
  }
  function L(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Me(l), n === null) throw Error(H(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return F(s), l;
          if (r === c) return F(s), n;
          r = r.sibling;
        }
        throw Error(H(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, g = s.child; g; ) {
          if (g === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (g === c) {
            m = !0, c = s, u = r;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = r.child; g; ) {
            if (g === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (g === c) {
              m = !0, c = r, u = s;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(H(189));
        }
      }
      if (u.alternate !== c) throw Error(H(190));
    }
    if (u.tag !== 3) throw Error(H(188));
    return u.stateNode.current === u ? l : n;
  }
  function qt(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = qt(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Y = Object.assign, U = /* @__PURE__ */ Symbol.for("react.element"), tt = /* @__PURE__ */ Symbol.for("react.transitional.element"), Zt = /* @__PURE__ */ Symbol.for("react.portal"), Je = /* @__PURE__ */ Symbol.for("react.fragment"), ge = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), Xn = /* @__PURE__ */ Symbol.for("react.consumer"), Ie = /* @__PURE__ */ Symbol.for("react.context"), jl = /* @__PURE__ */ Symbol.for("react.forward_ref"), on = /* @__PURE__ */ Symbol.for("react.suspense"), na = /* @__PURE__ */ Symbol.for("react.suspense_list"), cl = /* @__PURE__ */ Symbol.for("react.memo"), Gt = /* @__PURE__ */ Symbol.for("react.lazy"), ua = /* @__PURE__ */ Symbol.for("react.activity"), at = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Pe = Symbol.iterator;
  function Xt(l) {
    return l === null || typeof l != "object" ? null : (l = Pe && l[Pe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ht = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ia(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ht ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Je:
        return "Fragment";
      case se:
        return "Profiler";
      case ge:
        return "StrictMode";
      case on:
        return "Suspense";
      case na:
        return "SuspenseList";
      case ua:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Zt:
          return "Portal";
        case Ie:
          return l.displayName || "Context";
        case Xn:
          return (l._context.displayName || "Context") + ".Consumer";
        case jl:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case cl:
          return n = l.displayName || null, n !== null ? n : ia(l.type) || "Memo";
        case Gt:
          n = l._payload, l = l._init;
          try {
            return ia(l(n));
          } catch {
          }
      }
    return null;
  }
  var ca = Array.isArray, O = He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ot = [], pt = -1;
  function Ke(l) {
    return { current: l };
  }
  function le(l) {
    0 > pt || (l.current = ot[pt], ot[pt] = null, pt--);
  }
  function Bt(l, n) {
    pt++, ot[pt] = l.current, l.current = n;
  }
  var Rt = Ke(null), Al = Ke(null), si = Ke(null), wf = Ke(null);
  function Jf(l, n) {
    switch (Bt(si, n), Bt(Al, l), Bt(Rt, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? zg(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = zg(n), l = e0(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    le(Rt), Bt(Rt, l);
  }
  function Hu() {
    le(Rt), le(Al), le(si);
  }
  function um(l) {
    l.memoizedState !== null && Bt(wf, l);
    var n = Rt.current, u = e0(n, l.type);
    n !== u && (Bt(Al, l), Bt(Rt, u));
  }
  function I(l) {
    Al.current === l && (le(Rt), le(Al)), wf.current === l && (le(wf), or._currentValue = w);
  }
  var Kf, $f;
  function Qn(l) {
    if (Kf === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Kf = n && n[1] || "", $f = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kf + l + $f;
  }
  var Pi = !1;
  function ae(l, n) {
    if (!l || Pi) return "";
    Pi = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (x) {
                  var C = x;
                }
                Reflect.construct(l, [], Q);
              } else {
                try {
                  Q.call();
                } catch (x) {
                  C = x;
                }
                l.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                C = x;
              }
              (Q = l()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (x) {
            if (x && C && typeof x.stack == "string")
              return [x.stack, C.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], g = r[1];
      if (m && g) {
        var T = m.split(`
`), _ = g.split(`
`);
        for (s = c = 0; c < T.length && !T[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < _.length && !_[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === T.length || s === _.length)
          for (c = T.length - 1, s = _.length - 1; 1 <= c && 0 <= s && T[c] !== _[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (T[c] !== _[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || T[c] !== _[s]) {
                  var G = `
` + T[c].replace(" at new ", " at ");
                  return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), G;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Pi = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Qn(u) : "";
  }
  function im(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Qn(l.type);
      case 16:
        return Qn("Lazy");
      case 13:
        return l.child !== n && n !== null ? Qn("Suspense Fallback") : Qn("Suspense");
      case 19:
        return Qn("SuspenseList");
      case 0:
      case 15:
        return ae(l.type, !1);
      case 11:
        return ae(l.type.render, !1);
      case 1:
        return ae(l.type, !0);
      case 31:
        return Qn("Activity");
      default:
        return "";
    }
  }
  function qr(l) {
    try {
      var n = "", u = null;
      do
        n += im(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var cm = Object.prototype.hasOwnProperty, re = J.unstable_scheduleCallback, om = J.unstable_cancelCallback, tc = J.unstable_shouldYield, xr = J.unstable_requestPaint, zl = J.unstable_now, Yv = J.unstable_getCurrentPriorityLevel, Yr = J.unstable_ImmediatePriority, Gr = J.unstable_UserBlockingPriority, ri = J.unstable_NormalPriority, Gv = J.unstable_LowPriority, fm = J.unstable_IdlePriority, op = J.log, fp = J.unstable_setDisableYieldValue, ec = null, oa = null;
  function Bu(l) {
    if (typeof op == "function" && fp(l), oa && typeof oa.setStrictMode == "function")
      try {
        oa.setStrictMode(ec, l);
      } catch {
      }
  }
  var Xl = Math.clz32 ? Math.clz32 : sm, sp = Math.log, rp = Math.LN2;
  function sm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (sp(l) / rp | 0) | 0;
  }
  var Nu = 256, fn = 262144, di = 4194304;
  function La(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ge(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~r, c !== 0 ? s = La(c) : (m &= g, m !== 0 ? s = La(m) : u || (u = g & ~l, u !== 0 && (s = La(u))))) : (g = c & ~r, g !== 0 ? s = La(g) : m !== 0 ? s = La(m) : u || (u = c & ~l, u !== 0 && (s = La(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function sn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function ro(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function lc() {
    var l = di;
    return di <<= 1, (di & 62914560) === 0 && (di = 4194304), l;
  }
  function Wf(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function ho(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jr(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, T = l.expirationTimes, _ = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var G = 31 - Xl(u), Q = 1 << G;
      g[G] = 0, T[G] = -1;
      var C = _[G];
      if (C !== null)
        for (_[G] = null, G = 0; G < C.length; G++) {
          var x = C[G];
          x !== null && (x.lane &= -536870913);
        }
      u &= ~Q;
    }
    c !== 0 && Ff(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Ff(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Xl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function Vn(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Xl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function ba(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Xr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Xr(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function rm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qr() {
    var l = Z.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fr(l.type));
  }
  function dm(l, n) {
    var u = Z.p;
    try {
      return Z.p = l, n();
    } finally {
      Z.p = u;
    }
  }
  var rn = Math.random().toString(36).slice(2), ne = "__reactFiber$" + rn, Ql = "__reactProps$" + rn, hi = "__reactContainer$" + rn, Vr = "__reactEvents$" + rn, hm = "__reactListeners$" + rn, dp = "__reactHandles$" + rn, mm = "__reactResources$" + rn, Zn = "__reactMarker$" + rn;
  function Zr(l) {
    delete l[ne], delete l[Ql], delete l[Vr], delete l[hm], delete l[dp];
  }
  function ac(l) {
    var n = l[ne];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[hi] || u[ne]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Hn(l); l !== null; ) {
            if (u = l[ne]) return u;
            l = Hn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function nc(l) {
    if (l = l[ne] || l[hi]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function mo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(H(33));
  }
  function uc(l) {
    var n = l[mm];
    return n || (n = l[mm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Wt(l) {
    l[Zn] = !0;
  }
  var ic = /* @__PURE__ */ new Set(), mi = {};
  function yi(l, n) {
    Ln(l, n), Ln(l + "Capture", n);
  }
  function Ln(l, n) {
    for (mi[l] = n, l = 0; l < n.length; l++)
      ic.add(n[l]);
  }
  var Lr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wr = {}, yo = {};
  function po(l) {
    return cm.call(yo, l) ? !0 : cm.call(wr, l) ? !1 : Lr.test(l) ? yo[l] = !0 : (wr[l] = !0, !1);
  }
  function go(l, n, u) {
    if (po(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Jr(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function qu(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Ta(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Kr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function ym(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function $r(l) {
    if (!l._valueTracker) {
      var n = Kr(l) ? "checked" : "value";
      l._valueTracker = ym(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function pm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = Kr(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function kf(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var jv = /[\n"\\]/g;
  function Ea(l) {
    return l.replace(
      jv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function If(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Ta(n)) : l.value !== "" + Ta(n) && (l.value = "" + Ta(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? cc(l, m, Ta(n)) : u != null ? cc(l, m, Ta(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + Ta(g) : l.removeAttribute("name");
  }
  function Pf(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        $r(l);
        return;
      }
      u = u != null ? "" + Ta(u) : "", n = n != null ? "" + Ta(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), $r(l);
  }
  function cc(l, n, u) {
    n === "number" && kf(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function vo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Ta(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function gm(l, n, u) {
    if (n != null && (n = "" + Ta(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Ta(u) : "";
  }
  function vm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(H(92));
        if (ca(c)) {
          if (1 < c.length) throw Error(H(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Ta(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), $r(l);
  }
  function wn(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var hp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mp(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || hp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function yp(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(H(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && mp(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && mp(l, r, n[r]);
  }
  function Sm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Xv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ts = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wa(l) {
    return ts.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function dn() {
  }
  var Wr = null;
  function Fr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Jn = null, oc = null;
  function es(l) {
    var n = nc(l);
    if (n && (l = n.stateNode)) {
      var u = l[Ql] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (If(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ea(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Ql] || null;
                if (!s) throw Error(H(90));
                If(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && pm(c);
          }
          break t;
        case "textarea":
          gm(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && vo(l, !!u.multiple, n, !1);
      }
    }
  }
  var So = !1;
  function bm(l, n, u) {
    if (So) return l(n, u);
    So = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (So = !1, (Jn !== null || oc !== null) && (ef(), Jn && (n = Jn, l = oc, oc = Jn = null, es(n), l)))
        for (n = 0; n < l.length; n++) es(l[n]);
    }
  }
  function ol(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Ql] || null;
    if (c === null) return null;
    u = c[n];
    t: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break t;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        H(231, n, typeof u)
      );
    return u;
  }
  var xu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ls = !1;
  if (xu)
    try {
      var bo = {};
      Object.defineProperty(bo, "passive", {
        get: function() {
          ls = !0;
        }
      }), window.addEventListener("test", bo, bo), window.removeEventListener("test", bo, bo);
    } catch {
      ls = !1;
    }
  var Yu = null, Tm = null, kr = null;
  function Em() {
    if (kr) return kr;
    var l, n = Tm, u = n.length, c, s = "value" in Yu ? Yu.value : Yu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return kr = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Ir(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function as() {
    return !0;
  }
  function pp() {
    return !1;
  }
  function Dl(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? as : pp, this.isPropagationStopped = pp, this;
    }
    return Y(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = as);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = as);
      },
      persist: function() {
      },
      isPersistent: as
    }), n;
  }
  var pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ns = Dl(pi), To = Y({}, pi, { view: 0, detail: 0 }), Qv = Dl(To), Am, zm, us, Pr = Y({}, To, {
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
    getModifierState: Ja,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== us && (us && l.type === "mousemove" ? (Am = l.screenX - us.screenX, zm = l.screenY - us.screenY) : zm = Am = 0, us = l), Am);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : zm;
    }
  }), Eo = Dl(Pr), gp = Y({}, Pr, { dataTransfer: 0 }), vp = Dl(gp), Sp = Y({}, To, { relatedTarget: 0 }), td = Dl(Sp), Dm = Y({}, pi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bp = Dl(Dm), fc = Y({}, pi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), sc = Dl(fc), hn = Y({}, pi, { data: 0 }), Tp = Dl(hn), Om = {
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
    MozPrintableKey: "Unidentified"
  }, Kn = {
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
    224: "Meta"
  }, Ep = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function mn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Ep[l]) ? !!n[l] : !1;
  }
  function Ja() {
    return mn;
  }
  var ed = Y({}, To, {
    key: function(l) {
      if (l.key) {
        var n = Om[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Ir(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Kn[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ja,
    charCode: function(l) {
      return l.type === "keypress" ? Ir(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ir(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ld = Dl(ed), Mm = Y({}, Pr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), yn = Dl(Mm), Vv = Y({}, To, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ja
  }), Ap = Dl(Vv), zp = Y({}, pi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zv = Dl(zp), Rm = Y({}, Pr, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Lv = Dl(Rm), Dp = Y({}, pi, {
    newState: 0,
    oldState: 0
  }), Um = Dl(Dp), ad = [9, 13, 27, 32], Ao = xu && "CompositionEvent" in window, rc = null;
  xu && "documentMode" in document && (rc = document.documentMode);
  var Cl = xu && "TextEvent" in window && !rc, _m = xu && (!Ao || rc && 8 < rc && 11 >= rc), is = " ", gi = !1;
  function nd(l, n) {
    switch (l) {
      case "keyup":
        return ad.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var dc = !1;
  function Op(l, n) {
    switch (l) {
      case "compositionend":
        return Cm(n);
      case "keypress":
        return n.which !== 32 ? null : (gi = !0, is);
      case "textInput":
        return l = n.data, l === is && gi ? null : l;
      default:
        return null;
    }
  }
  function wv(l, n) {
    if (dc)
      return l === "compositionend" || !Ao && nd(l, n) ? (l = Em(), kr = Tm = Yu = null, dc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return _m && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Hm = {
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
    week: !0
  };
  function $n(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Hm[l.type] : n === "textarea";
  }
  function Bm(l, n, u, c) {
    Jn ? oc ? oc.push(c) : oc = [c] : Jn = c, n = lr(n, "onChange"), 0 < n.length && (u = new ns(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var hc = null, vi = null;
  function mc(l) {
    Tg(l, 0);
  }
  function zo(l) {
    var n = mo(l);
    if (pm(n)) return l;
  }
  function Nm(l, n) {
    if (l === "change") return n;
  }
  var ud = !1;
  if (xu) {
    var Vl;
    if (xu) {
      var pn = "oninput" in document;
      if (!pn) {
        var qm = document.createElement("div");
        qm.setAttribute("oninput", "return;"), pn = typeof qm.oninput == "function";
      }
      Vl = pn;
    } else Vl = !1;
    ud = Vl && (!document.documentMode || 9 < document.documentMode);
  }
  function id() {
    hc && (hc.detachEvent("onpropertychange", cd), vi = hc = null);
  }
  function cd(l) {
    if (l.propertyName === "value" && zo(vi)) {
      var n = [];
      Bm(
        n,
        vi,
        l,
        Fr(l)
      ), bm(mc, n);
    }
  }
  function Mp(l, n, u) {
    l === "focusin" ? (id(), hc = n, vi = u, hc.attachEvent("onpropertychange", cd)) : l === "focusout" && id();
  }
  function Rp(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return zo(vi);
  }
  function Si(l, n) {
    if (l === "click") return zo(n);
  }
  function yc(l, n) {
    if (l === "input" || l === "change")
      return zo(n);
  }
  function Up(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Hl = typeof Object.is == "function" ? Object.is : Up;
  function Ka(l, n) {
    if (Hl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!cm.call(n, s) || !Hl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function xm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ym(l, n) {
    var u = xm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = xm(u);
    }
  }
  function pc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function bi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = kf(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = kf(l.document);
    }
    return n;
  }
  function cs(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var os = xu && "documentMode" in document && 11 >= document.documentMode, Ti = null, Do = null, $a = null, gn = !1;
  function od(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gn || Ti == null || Ti !== kf(c) || (c = Ti, "selectionStart" in c && cs(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), $a && Ka($a, c) || ($a = c, c = lr(Do, "onSelect"), 0 < c.length && (n = new ns(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Ti)));
  }
  function Gu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var vn = {
    animationend: Gu("Animation", "AnimationEnd"),
    animationiteration: Gu("Animation", "AnimationIteration"),
    animationstart: Gu("Animation", "AnimationStart"),
    transitionrun: Gu("Transition", "TransitionRun"),
    transitionstart: Gu("Transition", "TransitionStart"),
    transitioncancel: Gu("Transition", "TransitionCancel"),
    transitionend: Gu("Transition", "TransitionEnd")
  }, Oo = {}, Ei = {};
  xu && (Ei = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
  function Jt(l) {
    if (Oo[l]) return Oo[l];
    if (!vn[l]) return l;
    var n = vn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ei)
        return Oo[l] = n[u];
    return l;
  }
  var fs = Jt("animationend"), Gm = Jt("animationiteration"), fd = Jt("animationstart"), gc = Jt("transitionrun"), ss = Jt("transitionstart"), Wn = Jt("transitioncancel"), _p = Jt("transitionend"), Fn = /* @__PURE__ */ new Map(), Mo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Mo.push("scrollEnd");
  function Zl(l, n) {
    Fn.set(l, n), yi(n, [l]);
  }
  var vc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, be = [], fl = 0, Wa = 0;
  function Aa() {
    for (var l = fl, n = Wa = fl = 0; n < l; ) {
      var u = be[n];
      be[n++] = null;
      var c = be[n];
      be[n++] = null;
      var s = be[n];
      be[n++] = null;
      var r = be[n];
      if (be[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && sd(u, s, r);
    }
  }
  function za(l, n, u, c) {
    be[fl++] = l, be[fl++] = n, be[fl++] = u, be[fl++] = c, Wa |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Fa(l, n, u, c) {
    return za(l, n, u, c), rs(l);
  }
  function ju(l, n) {
    return za(l, null, null, n), rs(l);
  }
  function sd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Xl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function rs(l) {
    if (50 < tf)
      throw tf = 0, Ks = null, Error(H(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ll = {};
  function Cp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Be(l, n, u, c) {
    return new Cp(l, n, u, c);
  }
  function Sc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Xu(l, n) {
    var u = l.alternate;
    return u === null ? (u = Be(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function jm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function rd(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Sc(l) && (m = 1);
    else if (typeof l == "string")
      m = o0(
        l,
        u,
        Rt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case ua:
          return l = Be(31, u, n, s), l.elementType = ua, l.lanes = r, l;
        case Je:
          return Qu(u.children, s, r, n);
        case ge:
          m = 8, s |= 24;
          break;
        case se:
          return l = Be(12, u, n, s | 2), l.elementType = se, l.lanes = r, l;
        case on:
          return l = Be(13, u, n, s), l.elementType = on, l.lanes = r, l;
        case na:
          return l = Be(19, u, n, s), l.elementType = na, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ie:
                m = 10;
                break t;
              case Xn:
                m = 9;
                break t;
              case jl:
                m = 11;
                break t;
              case cl:
                m = 14;
                break t;
              case Gt:
                m = 16, c = null;
                break t;
            }
          m = 29, u = Error(
            H(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Be(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Qu(l, n, u, c) {
    return l = Be(7, l, c, n), l.lanes = u, l;
  }
  function Ro(l, n, u) {
    return l = Be(6, l, null, n), l.lanes = u, l;
  }
  function Xm(l) {
    var n = Be(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function dd(l, n, u) {
    return n = Be(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Qm = /* @__PURE__ */ new WeakMap();
  function Da(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Qm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: qr(n)
      }, Qm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: qr(n)
    };
  }
  var Oa = [], bc = 0, ds = null, je = 0, fa = [], wl = 0, Sn = null, sa = 1, bn = "";
  function ka(l, n) {
    Oa[bc++] = je, Oa[bc++] = ds, ds = l, je = n;
  }
  function Vm(l, n, u) {
    fa[wl++] = sa, fa[wl++] = bn, fa[wl++] = Sn, Sn = l;
    var c = sa;
    l = bn;
    var s = 32 - Xl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Xl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, sa = 1 << 32 - Xl(n) + s | u << s | c, bn = r + l;
    } else
      sa = 1 << r | u << s | c, bn = l;
  }
  function Uo(l) {
    l.return !== null && (ka(l, 1), Vm(l, 1, 0));
  }
  function hd(l) {
    for (; l === ds; )
      ds = Oa[--bc], Oa[bc] = null, je = Oa[--bc], Oa[bc] = null;
    for (; l === Sn; )
      Sn = fa[--wl], fa[wl] = null, bn = fa[--wl], fa[wl] = null, sa = fa[--wl], fa[wl] = null;
  }
  function hs(l, n) {
    fa[wl++] = sa, fa[wl++] = bn, fa[wl++] = Sn, sa = n.id, bn = n.overflow, Sn = l;
  }
  var sl = null, de = null, _t = !1, kn = null, tl = !1, In = Error(H(519));
  function Ia(l) {
    var n = Error(
      H(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Co(Da(n, l)), In;
  }
  function ms(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[ne] = l, n[Ql] = c, u) {
      case "dialog":
        Ut("cancel", n), Ut("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ut("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < cf.length; u++)
          Ut(cf[u], n);
        break;
      case "source":
        Ut("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ut("error", n), Ut("load", n);
        break;
      case "details":
        Ut("toggle", n);
        break;
      case "input":
        Ut("invalid", n), Pf(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        Ut("invalid", n);
        break;
      case "textarea":
        Ut("invalid", n), vm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || ky(n.textContent, u) ? (c.popover != null && (Ut("beforetoggle", n), Ut("toggle", n)), c.onScroll != null && Ut("scroll", n), c.onScrollEnd != null && Ut("scrollend", n), c.onClick != null && (n.onclick = dn), n = !0) : n = !1, n || Ia(l, !0);
  }
  function _o(l) {
    for (sl = l.return; sl; )
      switch (sl.tag) {
        case 5:
        case 31:
        case 13:
          tl = !1;
          return;
        case 27:
        case 3:
          tl = !0;
          return;
        default:
          sl = sl.return;
      }
  }
  function Pn(l) {
    if (l !== sl) return !1;
    if (!_t) return _o(l), _t = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || ff(l.type, l.memoizedProps)), u = !u), u && de && Ia(l), _o(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      de = ph(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(317));
      de = ph(l);
    } else
      n === 27 ? (n = de, Cn(l.type) ? (l = ur, ur = null, de = l) : de = n) : de = sl ? ea(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ai() {
    de = sl = null, _t = !1;
  }
  function Zm() {
    var l = kn;
    return l !== null && (_e === null ? _e = l : _e.push.apply(
      _e,
      l
    ), kn = null), l;
  }
  function Co(l) {
    kn === null ? kn = [l] : kn.push(l);
  }
  var md = Ke(null), Vu = null, Tn = null;
  function Jl(l, n, u) {
    Bt(md, n._currentValue), n._currentValue = u;
  }
  function En(l) {
    l._currentValue = md.current, le(md);
  }
  function yd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function tu(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var T = 0; T < n.length; T++)
            if (g.context === n[T]) {
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), yd(
                r.return,
                u,
                l
              ), c || (m = null);
              break t;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(H(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), yd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function rl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(H(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          Hl(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === wf.current) {
        if (m = s.alternate, m === null) throw Error(H(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(or) : l = [or]);
      }
      s = s.return;
    }
    l !== null && tu(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Tc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Hl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ht(l) {
    Vu = l, Tn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function V(l) {
    return ys(Vu, l);
  }
  function Zu(l, n) {
    return Vu === null && ht(l), ys(l, n);
  }
  function ys(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Tn === null) {
      if (l === null) throw Error(H(308));
      Tn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Tn = Tn.next = n;
    return u;
  }
  var Ne = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Lm = J.unstable_scheduleCallback, wm = J.unstable_NormalPriority, Xe = {
    $$typeof: Ie,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ps() {
    return {
      controller: new Ne(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function gs(l) {
    l.refCount--, l.refCount === 0 && Lm(wm, function() {
      l.controller.abort();
    });
  }
  var Ec = null, vs = 0, zi = 0, $e = null;
  function Ft(l, n) {
    if (Ec === null) {
      var u = Ec = [];
      vs = 0, zi = oh(), $e = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return vs++, n.then(Ss, Ss), n;
  }
  function Ss() {
    if (--vs === 0 && Ec !== null) {
      $e !== null && ($e.status = "fulfilled");
      var l = Ec;
      Ec = null, zi = 0, $e = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function bs(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Lu = O.S;
  O.S = function(l, n) {
    Gy = zl(), typeof n == "object" && n !== null && typeof n.then == "function" && Ft(l, n), Lu !== null && Lu(l, n);
  };
  var Ma = Ke(null);
  function Ra() {
    var l = Ma.current;
    return l !== null ? l : ie.pooledCache;
  }
  function Ho(l, n) {
    n === null ? Bt(Ma, Ma.current) : Bt(Ma, n.pool);
  }
  function Ac() {
    var l = Ra();
    return l === null ? null : { parent: Xe._currentValue, pool: l };
  }
  var Di = Error(H(460)), zc = Error(H(474)), Bo = Error(H(542)), Dc = { then: function() {
  } };
  function Jm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Km(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(dn, dn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, pd(l), l;
      default:
        if (typeof n.status == "string") n.then(dn, dn);
        else {
          if (l = ie, l !== null && 100 < l.shellSuspendCounter)
            throw Error(H(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, pd(l), l;
        }
        throw Mi = n, Di;
    }
  }
  function Oi(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Mi = u, Di) : u;
    }
  }
  var Mi = null;
  function $m() {
    if (Mi === null) throw Error(H(459));
    var l = Mi;
    return Mi = null, l;
  }
  function pd(l) {
    if (l === Di || l === Bo)
      throw Error(H(483));
  }
  var Ri = null, Oc = 0;
  function Ts(l) {
    var n = Oc;
    return Oc += 1, Ri === null && (Ri = []), Km(Ri, l, n);
  }
  function No(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Es(l, n) {
    throw n.$$typeof === U ? Error(H(525)) : (l = Object.prototype.toString.call(n), Error(
      H(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Hp(l) {
    function n(M, z) {
      if (l) {
        var R = M.deletions;
        R === null ? (M.deletions = [z], M.flags |= 16) : R.push(z);
      }
    }
    function u(M, z) {
      if (!l) return null;
      for (; z !== null; )
        n(M, z), z = z.sibling;
      return null;
    }
    function c(M) {
      for (var z = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function s(M, z) {
      return M = Xu(M, z), M.index = 0, M.sibling = null, M;
    }
    function r(M, z, R) {
      return M.index = R, l ? (R = M.alternate, R !== null ? (R = R.index, R < z ? (M.flags |= 67108866, z) : R) : (M.flags |= 67108866, z)) : (M.flags |= 1048576, z);
    }
    function m(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function g(M, z, R, X) {
      return z === null || z.tag !== 6 ? (z = Ro(R, M.mode, X), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function T(M, z, R, X) {
      var nt = R.type;
      return nt === Je ? G(
        M,
        z,
        R.props.children,
        X,
        R.key
      ) : z !== null && (z.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === Gt && Oi(nt) === z.type) ? (z = s(z, R.props), No(z, R), z.return = M, z) : (z = rd(
        R.type,
        R.key,
        R.props,
        null,
        M.mode,
        X
      ), No(z, R), z.return = M, z);
    }
    function _(M, z, R, X) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== R.containerInfo || z.stateNode.implementation !== R.implementation ? (z = dd(R, M.mode, X), z.return = M, z) : (z = s(z, R.children || []), z.return = M, z);
    }
    function G(M, z, R, X, nt) {
      return z === null || z.tag !== 7 ? (z = Qu(
        R,
        M.mode,
        X,
        nt
      ), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function Q(M, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ro(
          "" + z,
          M.mode,
          R
        ), z.return = M, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case tt:
            return R = rd(
              z.type,
              z.key,
              z.props,
              null,
              M.mode,
              R
            ), No(R, z), R.return = M, R;
          case Zt:
            return z = dd(
              z,
              M.mode,
              R
            ), z.return = M, z;
          case Gt:
            return z = Oi(z), Q(M, z, R);
        }
        if (ca(z) || Xt(z))
          return z = Qu(
            z,
            M.mode,
            R,
            null
          ), z.return = M, z;
        if (typeof z.then == "function")
          return Q(M, Ts(z), R);
        if (z.$$typeof === Ie)
          return Q(
            M,
            Zu(M, z),
            R
          );
        Es(M, z);
      }
      return null;
    }
    function C(M, z, R, X) {
      var nt = z !== null ? z.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return nt !== null ? null : g(M, z, "" + R, X);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case tt:
            return R.key === nt ? T(M, z, R, X) : null;
          case Zt:
            return R.key === nt ? _(M, z, R, X) : null;
          case Gt:
            return R = Oi(R), C(M, z, R, X);
        }
        if (ca(R) || Xt(R))
          return nt !== null ? null : G(M, z, R, X, null);
        if (typeof R.then == "function")
          return C(
            M,
            z,
            Ts(R),
            X
          );
        if (R.$$typeof === Ie)
          return C(
            M,
            z,
            Zu(M, R),
            X
          );
        Es(M, R);
      }
      return null;
    }
    function x(M, z, R, X, nt) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return M = M.get(R) || null, g(z, M, "" + X, nt);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case tt:
            return M = M.get(
              X.key === null ? R : X.key
            ) || null, T(z, M, X, nt);
          case Zt:
            return M = M.get(
              X.key === null ? R : X.key
            ) || null, _(z, M, X, nt);
          case Gt:
            return X = Oi(X), x(
              M,
              z,
              R,
              X,
              nt
            );
        }
        if (ca(X) || Xt(X))
          return M = M.get(R) || null, G(z, M, X, nt, null);
        if (typeof X.then == "function")
          return x(
            M,
            z,
            R,
            Ts(X),
            nt
          );
        if (X.$$typeof === Ie)
          return x(
            M,
            z,
            R,
            Zu(z, X),
            nt
          );
        Es(z, X);
      }
      return null;
    }
    function P(M, z, R, X) {
      for (var nt = null, Qt = null, et = z, gt = z = 0, bt = null; et !== null && gt < R.length; gt++) {
        et.index > gt ? (bt = et, et = null) : bt = et.sibling;
        var wt = C(
          M,
          et,
          R[gt],
          X
        );
        if (wt === null) {
          et === null && (et = bt);
          break;
        }
        l && et && wt.alternate === null && n(M, et), z = r(wt, z, gt), Qt === null ? nt = wt : Qt.sibling = wt, Qt = wt, et = bt;
      }
      if (gt === R.length)
        return u(M, et), _t && ka(M, gt), nt;
      if (et === null) {
        for (; gt < R.length; gt++)
          et = Q(M, R[gt], X), et !== null && (z = r(
            et,
            z,
            gt
          ), Qt === null ? nt = et : Qt.sibling = et, Qt = et);
        return _t && ka(M, gt), nt;
      }
      for (et = c(et); gt < R.length; gt++)
        bt = x(
          et,
          M,
          gt,
          R[gt],
          X
        ), bt !== null && (l && bt.alternate !== null && et.delete(
          bt.key === null ? gt : bt.key
        ), z = r(
          bt,
          z,
          gt
        ), Qt === null ? nt = bt : Qt.sibling = bt, Qt = bt);
      return l && et.forEach(function(Nn) {
        return n(M, Nn);
      }), _t && ka(M, gt), nt;
    }
    function ct(M, z, R, X) {
      if (R == null) throw Error(H(151));
      for (var nt = null, Qt = null, et = z, gt = z = 0, bt = null, wt = R.next(); et !== null && !wt.done; gt++, wt = R.next()) {
        et.index > gt ? (bt = et, et = null) : bt = et.sibling;
        var Nn = C(M, et, wt.value, X);
        if (Nn === null) {
          et === null && (et = bt);
          break;
        }
        l && et && Nn.alternate === null && n(M, et), z = r(Nn, z, gt), Qt === null ? nt = Nn : Qt.sibling = Nn, Qt = Nn, et = bt;
      }
      if (wt.done)
        return u(M, et), _t && ka(M, gt), nt;
      if (et === null) {
        for (; !wt.done; gt++, wt = R.next())
          wt = Q(M, wt.value, X), wt !== null && (z = r(wt, z, gt), Qt === null ? nt = wt : Qt.sibling = wt, Qt = wt);
        return _t && ka(M, gt), nt;
      }
      for (et = c(et); !wt.done; gt++, wt = R.next())
        wt = x(et, M, gt, wt.value, X), wt !== null && (l && wt.alternate !== null && et.delete(wt.key === null ? gt : wt.key), z = r(wt, z, gt), Qt === null ? nt = wt : Qt.sibling = wt, Qt = wt);
      return l && et.forEach(function(xg) {
        return n(M, xg);
      }), _t && ka(M, gt), nt;
    }
    function oe(M, z, R, X) {
      if (typeof R == "object" && R !== null && R.type === Je && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case tt:
            t: {
              for (var nt = R.key; z !== null; ) {
                if (z.key === nt) {
                  if (nt = R.type, nt === Je) {
                    if (z.tag === 7) {
                      u(
                        M,
                        z.sibling
                      ), X = s(
                        z,
                        R.props.children
                      ), X.return = M, M = X;
                      break t;
                    }
                  } else if (z.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === Gt && Oi(nt) === z.type) {
                    u(
                      M,
                      z.sibling
                    ), X = s(z, R.props), No(X, R), X.return = M, M = X;
                    break t;
                  }
                  u(M, z);
                  break;
                } else n(M, z);
                z = z.sibling;
              }
              R.type === Je ? (X = Qu(
                R.props.children,
                M.mode,
                X,
                R.key
              ), X.return = M, M = X) : (X = rd(
                R.type,
                R.key,
                R.props,
                null,
                M.mode,
                X
              ), No(X, R), X.return = M, M = X);
            }
            return m(M);
          case Zt:
            t: {
              for (nt = R.key; z !== null; ) {
                if (z.key === nt)
                  if (z.tag === 4 && z.stateNode.containerInfo === R.containerInfo && z.stateNode.implementation === R.implementation) {
                    u(
                      M,
                      z.sibling
                    ), X = s(z, R.children || []), X.return = M, M = X;
                    break t;
                  } else {
                    u(M, z);
                    break;
                  }
                else n(M, z);
                z = z.sibling;
              }
              X = dd(R, M.mode, X), X.return = M, M = X;
            }
            return m(M);
          case Gt:
            return R = Oi(R), oe(
              M,
              z,
              R,
              X
            );
        }
        if (ca(R))
          return P(
            M,
            z,
            R,
            X
          );
        if (Xt(R)) {
          if (nt = Xt(R), typeof nt != "function") throw Error(H(150));
          return R = nt.call(R), ct(
            M,
            z,
            R,
            X
          );
        }
        if (typeof R.then == "function")
          return oe(
            M,
            z,
            Ts(R),
            X
          );
        if (R.$$typeof === Ie)
          return oe(
            M,
            z,
            Zu(M, R),
            X
          );
        Es(M, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, z !== null && z.tag === 6 ? (u(M, z.sibling), X = s(z, R), X.return = M, M = X) : (u(M, z), X = Ro(R, M.mode, X), X.return = M, M = X), m(M)) : u(M, z);
    }
    return function(M, z, R, X) {
      try {
        Oc = 0;
        var nt = oe(
          M,
          z,
          R,
          X
        );
        return Ri = null, nt;
      } catch (et) {
        if (et === Di || et === Bo) throw et;
        var Qt = Be(29, et, null, M.mode);
        return Qt.lanes = X, Qt.return = M, Qt;
      }
    };
  }
  var Ui = Hp(!0), Wm = Hp(!1), wu = !1;
  function As(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function gd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ju(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (Lt & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = rs(l), sd(l, null, u), n;
    }
    return za(l, c, n, u), rs(l);
  }
  function _i(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Vn(l, u);
    }
  }
  function vd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Fm = !1;
  function Ci() {
    if (Fm) {
      var l = $e;
      if (l !== null) throw l;
    }
  }
  function eu(l, n, u, c) {
    Fm = !1;
    var s = l.updateQueue;
    wu = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var T = g, _ = T.next;
      T.next = null, m === null ? r = _ : m.next = _, m = T;
      var G = l.alternate;
      G !== null && (G = G.updateQueue, g = G.lastBaseUpdate, g !== m && (g === null ? G.firstBaseUpdate = _ : g.next = _, G.lastBaseUpdate = T));
    }
    if (r !== null) {
      var Q = s.baseState;
      m = 0, G = _ = T = null, g = r;
      do {
        var C = g.lane & -536870913, x = C !== g.lane;
        if (x ? (Ot & C) === C : (c & C) === C) {
          C !== 0 && C === zi && (Fm = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          t: {
            var P = l, ct = g;
            C = n;
            var oe = u;
            switch (ct.tag) {
              case 1:
                if (P = ct.payload, typeof P == "function") {
                  Q = P.call(oe, Q, C);
                  break t;
                }
                Q = P;
                break t;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = ct.payload, C = typeof P == "function" ? P.call(oe, Q, C) : P, C == null) break t;
                Q = Y({}, Q, C);
                break t;
              case 2:
                wu = !0;
            }
          }
          C = g.callback, C !== null && (l.flags |= 64, x && (l.flags |= 8192), x = s.callbacks, x === null ? s.callbacks = [C] : x.push(C));
        } else
          x = {
            lane: C,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, G === null ? (_ = G = x, T = Q) : G = G.next = x, m |= C;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          x = g, g = x.next, x.next = null, s.lastBaseUpdate = x, s.shared.pending = null;
        }
      } while (!0);
      G === null && (T = Q), s.baseState = T, s.firstBaseUpdate = _, s.lastBaseUpdate = G, r === null && (s.shared.lanes = 0), Un |= m, l.lanes = m, l.memoizedState = Q;
    }
  }
  function Sd(l, n) {
    if (typeof l != "function")
      throw Error(H(191, l));
    l.call(n);
  }
  function Hi(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Sd(u[l], n);
  }
  var el = Ke(null), Mc = Ke(0);
  function Bp(l, n) {
    l = Rn, Bt(Mc, l), Bt(el, n), Rn = l | n.baseLanes;
  }
  function zs() {
    Bt(Mc, Rn), Bt(el, el.current);
  }
  function qo() {
    Rn = Mc.current, le(el), le(Mc);
  }
  var Kl = Ke(null), _a = null;
  function lu(l) {
    var n = l.alternate;
    Bt(Te, Te.current & 1), Bt(Kl, l), _a === null && (n === null || el.current !== null || n.memoizedState !== null) && (_a = l);
  }
  function xo(l) {
    Bt(Te, Te.current), Bt(Kl, l), _a === null && (_a = l);
  }
  function bd(l) {
    l.tag === 22 ? (Bt(Te, Te.current), Bt(Kl, l), _a === null && (_a = l)) : An();
  }
  function An() {
    Bt(Te, Te.current), Bt(Kl, Kl.current);
  }
  function $l(l) {
    le(Kl), _a === l && (_a = null), le(Te);
  }
  var Te = Ke(0);
  function Yo(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || ln(u) || Li(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var au = 0, vt = null, kt = null, Qe = null, Rc = !1, Uc = !1, Ku = !1, Ds = 0, Go = 0, Bi = null, Np = 0;
  function Re() {
    throw Error(H(321));
  }
  function $u(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Hl(l[u], n[u])) return !1;
    return !0;
  }
  function Os(l, n, u, c, s, r) {
    return au = r, vt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Vp : Yd, Ku = !1, r = u(c, s), Ku = !1, Uc && (r = qp(
      n,
      u,
      c,
      s
    )), Td(l), r;
  }
  function Td(l) {
    O.H = qs;
    var n = kt !== null && kt.next !== null;
    if (au = 0, Qe = kt = vt = null, Rc = !1, Go = 0, Bi = null, n) throw Error(H(300));
    l === null || Ve || (l = l.dependencies, l !== null && Tc(l) && (Ve = !0));
  }
  function qp(l, n, u, c) {
    vt = l;
    var s = 0;
    do {
      if (Uc && (Bi = null), Go = 0, Uc = !1, 25 <= s) throw Error(H(301));
      if (s += 1, Qe = kt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = Zp, r = n(u, c);
    } while (Uc);
    return r;
  }
  function Jv() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Cc(n) : n, l = l.useState()[0], (kt !== null ? kt.memoizedState : null) !== l && (vt.flags |= 1024), n;
  }
  function Ed() {
    var l = Ds !== 0;
    return Ds = 0, l;
  }
  function _c(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ms(l) {
    if (Rc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Rc = !1;
    }
    au = 0, Qe = kt = vt = null, Uc = !1, Go = Ds = 0, Bi = null;
  }
  function dl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? vt.memoizedState = Qe = l : Qe = Qe.next = l, Qe;
  }
  function qe() {
    if (kt === null) {
      var l = vt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = kt.next;
    var n = Qe === null ? vt.memoizedState : Qe.next;
    if (n !== null)
      Qe = n, kt = l;
    else {
      if (l === null)
        throw vt.alternate === null ? Error(H(467)) : Error(H(310));
      kt = l, l = {
        memoizedState: kt.memoizedState,
        baseState: kt.baseState,
        baseQueue: kt.baseQueue,
        queue: kt.queue,
        next: null
      }, Qe === null ? vt.memoizedState = Qe = l : Qe = Qe.next = l;
    }
    return Qe;
  }
  function Rs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cc(l) {
    var n = Go;
    return Go += 1, Bi === null && (Bi = []), l = Km(Bi, l, n), n = vt, (Qe === null ? n.memoizedState : Qe.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Vp : Yd), l;
  }
  function jo(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Cc(l);
      if (l.$$typeof === Ie) return V(l);
    }
    throw Error(H(438, String(l)));
  }
  function Ad(l) {
    var n = null, u = vt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = vt.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Rs(), vt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = at;
    return n.index++, u;
  }
  function nu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function uu(l) {
    var n = qe();
    return zd(n, kt, l);
  }
  function zd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(H(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var g = m = null, T = null, _ = n, G = !1;
      do {
        var Q = _.lane & -536870913;
        if (Q !== _.lane ? (Ot & Q) === Q : (au & Q) === Q) {
          var C = _.revertLane;
          if (C === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), Q === zi && (G = !0);
          else if ((au & C) === C) {
            _ = _.next, C === zi && (G = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, T === null ? (g = T = Q, m = r) : T = T.next = Q, vt.lanes |= C, Un |= C;
          Q = _.action, Ku && u(r, Q), r = _.hasEagerState ? _.eagerState : u(r, Q);
        } else
          C = {
            lane: Q,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, T === null ? (g = T = C, m = r) : T = T.next = C, vt.lanes |= Q, Un |= Q;
        _ = _.next;
      } while (_ !== null && _ !== n);
      if (T === null ? m = r : T.next = g, !Hl(r, l.memoizedState) && (Ve = !0, G && (u = $e, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Dd(l) {
    var n = qe(), u = n.queue;
    if (u === null) throw Error(H(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Hl(r, n.memoizedState) || (Ve = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function km(l, n, u) {
    var c = vt, s = qe(), r = _t;
    if (r) {
      if (u === void 0) throw Error(H(407));
      u = u();
    } else u = n();
    var m = !Hl(
      (kt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Ve = !0), s = s.queue, _d(Od.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || Qe !== null && Qe.memoizedState.tag & 1) {
      if (c.flags |= 2048, Bc(
        9,
        { destroy: void 0 },
        Im.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), ie === null) throw Error(H(349));
      r || (au & 127) !== 0 || Us(c, n, u);
    }
    return u;
  }
  function Us(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = vt.updateQueue, n === null ? (n = Rs(), vt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Im(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Md(n) && Rd(l);
  }
  function Od(l, n, u) {
    return u(function() {
      Md(n) && Rd(l);
    });
  }
  function Md(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Hl(l, u);
    } catch {
      return !0;
    }
  }
  function Rd(l) {
    var n = ju(l, 2);
    n !== null && ta(n, l, 2);
  }
  function Pm(l) {
    var n = dl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Ku) {
        Bu(!0);
        try {
          u();
        } finally {
          Bu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nu,
      lastRenderedState: l
    }, n;
  }
  function hl(l, n, u, c) {
    return l.baseState = u, zd(
      l,
      kt,
      typeof c == "function" ? c : nu
    );
  }
  function xp(l, n, u, c, s) {
    if (Ns(l)) throw Error(H(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      O.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, ty(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function ty(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, m = {};
      O.T = m;
      try {
        var g = u(s, c), T = O.S;
        T !== null && T(m, g), ey(l, n, g);
      } catch (_) {
        Hc(l, n, _);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), O.T = r;
      }
    } else
      try {
        r = u(s, c), ey(l, n, r);
      } catch (_) {
        Hc(l, n, _);
      }
  }
  function ey(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        ly(l, n, c);
      },
      function(c) {
        return Hc(l, n, c);
      }
    ) : ly(l, n, u);
  }
  function ly(l, n, u) {
    n.status = "fulfilled", n.value = u, ay(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, ty(l, u)));
  }
  function Hc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, ay(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function ay(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function _s(l, n) {
    return n;
  }
  function ny(l, n) {
    if (_t) {
      var u = ie.formState;
      if (u !== null) {
        t: {
          var c = vt;
          if (_t) {
            if (de) {
              e: {
                for (var s = de, r = tl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = ea(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                de = ea(
                  s.nextSibling
                ), c = s.data === "F!";
                break t;
              }
            }
            Ia(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = dl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _s,
      lastRenderedState: n
    }, u.queue = c, u = qd.bind(
      null,
      vt,
      c
    ), c.dispatch = u, c = Pm(!1), r = Ni.bind(
      null,
      vt,
      !1,
      c.queue
    ), c = dl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = xp.bind(
      null,
      vt,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Yp(l) {
    var n = qe();
    return Cs(n, kt, l);
  }
  function Cs(l, n, u) {
    if (n = zd(
      l,
      n,
      _s
    )[0], l = uu(nu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Cc(n);
      } catch (m) {
        throw m === Di ? Bo : m;
      }
    else c = n;
    n = qe();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (vt.flags |= 2048, Bc(
      9,
      { destroy: void 0 },
      uy.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function uy(l, n) {
    l.action = n;
  }
  function iy(l) {
    var n = qe(), u = kt;
    if (u !== null)
      return Cs(n, u, l);
    qe(), n = n.memoizedState, u = qe();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Bc(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = vt.updateQueue, n === null && (n = Rs(), vt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function cy() {
    return qe().memoizedState;
  }
  function Xo(l, n, u, c) {
    var s = dl();
    vt.flags |= l, s.memoizedState = Bc(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function Qo(l, n, u, c) {
    var s = qe();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    kt !== null && c !== null && $u(c, kt.memoizedState.deps) ? s.memoizedState = Bc(n, r, u, c) : (vt.flags |= l, s.memoizedState = Bc(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Ud(l, n) {
    Xo(8390656, 8, l, n);
  }
  function _d(l, n) {
    Qo(2048, 8, l, n);
  }
  function oy(l) {
    vt.flags |= 4;
    var n = vt.updateQueue;
    if (n === null)
      n = Rs(), vt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Hs(l) {
    var n = qe().memoizedState;
    return oy({ ref: n, nextImpl: l }), function() {
      if ((Lt & 2) !== 0) throw Error(H(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Cd(l, n) {
    return Qo(4, 2, l, n);
  }
  function fy(l, n) {
    return Qo(4, 4, l, n);
  }
  function Hd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function sy(l, n, u) {
    u = u != null ? u.concat([l]) : null, Qo(4, 4, Hd.bind(null, n, l), u);
  }
  function zn() {
  }
  function Bd(l, n) {
    var u = qe();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && $u(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function Gp(l, n) {
    var u = qe();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && $u(n, c[1]))
      return c[0];
    if (c = l(), Ku) {
      Bu(!0);
      try {
        l();
      } finally {
        Bu(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Bs(l, n, u) {
    return u === void 0 || (au & 1073741824) !== 0 && (Ot & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = Pp(), vt.lanes |= l, Un |= l, u);
  }
  function iu(l, n, u, c) {
    return Hl(u, n) ? u : el.current !== null ? (l = Bs(l, u, c), Hl(l, n) || (Ve = !0), l) : (au & 42) === 0 || (au & 1073741824) !== 0 && (Ot & 261930) === 0 ? (Ve = !0, l.memoizedState = u) : (l = Pp(), vt.lanes |= l, Un |= l, n);
  }
  function Nd(l, n, u, c, s) {
    var r = Z.p;
    Z.p = r !== 0 && 8 > r ? r : 8;
    var m = O.T, g = {};
    O.T = g, Ni(l, !1, n, u);
    try {
      var T = s(), _ = O.S;
      if (_ !== null && _(g, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var G = bs(
          T,
          c
        );
        Wu(
          l,
          n,
          G,
          ma(l)
        );
      } else
        Wu(
          l,
          n,
          c,
          ma(l)
        );
    } catch (Q) {
      Wu(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: Q },
        ma()
      );
    } finally {
      Z.p = r, m !== null && g.types !== null && (m.types = g.types), O.T = m;
    }
  }
  function jp() {
  }
  function Vo(l, n, u, c) {
    if (l.tag !== 5) throw Error(H(476));
    var s = Zo(l).queue;
    Nd(
      l,
      s,
      n,
      w,
      u === null ? jp : function() {
        return ue(l), u(c);
      }
    );
  }
  function Zo(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nu,
        lastRenderedState: w
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ue(l) {
    var n = Zo(l);
    n.next === null && (n = l.alternate.memoizedState), Wu(
      l,
      n.next.queue,
      {},
      ma()
    );
  }
  function ry() {
    return V(or);
  }
  function Xp() {
    return qe().memoizedState;
  }
  function dy() {
    return qe().memoizedState;
  }
  function cu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = ma();
          l = Ju(u);
          var c = Ua(n, l, u);
          c !== null && (ta(c, n, u), _i(c, n, u)), n = { cache: ps() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Qp(l, n, u) {
    var c = ma();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l) ? xd(n, u) : (u = Fa(l, n, u, c), u !== null && (ta(u, l, c), hy(u, n, c)));
  }
  function qd(l, n, u) {
    var c = ma();
    Wu(l, n, u, c);
  }
  function Wu(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ns(l)) xd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, Hl(g, m))
            return za(l, n, s, 0), ie === null && Aa(), !1;
        } catch {
        }
      if (u = Fa(l, n, s, c), u !== null)
        return ta(u, l, c), hy(u, n, c), !0;
    }
    return !1;
  }
  function Ni(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: oh(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l)) {
      if (n) throw Error(H(479));
    } else
      n = Fa(
        l,
        u,
        c,
        2
      ), n !== null && ta(n, l, 2);
  }
  function Ns(l) {
    var n = l.alternate;
    return l === vt || n !== null && n === vt;
  }
  function xd(l, n) {
    Uc = Rc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function hy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Vn(l, u);
    }
  }
  var qs = {
    readContext: V,
    use: jo,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useLayoutEffect: Re,
    useInsertionEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useSyncExternalStore: Re,
    useId: Re,
    useHostTransitionStatus: Re,
    useFormState: Re,
    useActionState: Re,
    useOptimistic: Re,
    useMemoCache: Re,
    useCacheRefresh: Re
  };
  qs.useEffectEvent = Re;
  var Vp = {
    readContext: V,
    use: jo,
    useCallback: function(l, n) {
      return dl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: V,
    useEffect: Ud,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Xo(
        4194308,
        4,
        Hd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Xo(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Xo(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = dl();
      n = n === void 0 ? null : n;
      var c = l();
      if (Ku) {
        Bu(!0);
        try {
          l();
        } finally {
          Bu(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = dl();
      if (u !== void 0) {
        var s = u(n);
        if (Ku) {
          Bu(!0);
          try {
            u(n);
          } finally {
            Bu(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Qp.bind(
        null,
        vt,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = dl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Pm(l);
      var n = l.queue, u = qd.bind(null, vt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: zn,
    useDeferredValue: function(l, n) {
      var u = dl();
      return Bs(u, l, n);
    },
    useTransition: function() {
      var l = Pm(!1);
      return l = Nd.bind(
        null,
        vt,
        l.queue,
        !0,
        !1
      ), dl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = vt, s = dl();
      if (_t) {
        if (u === void 0)
          throw Error(H(407));
        u = u();
      } else {
        if (u = n(), ie === null)
          throw Error(H(349));
        (Ot & 127) !== 0 || Us(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ud(Od.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Bc(
        9,
        { destroy: void 0 },
        Im.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = dl(), n = ie.identifierPrefix;
      if (_t) {
        var u = bn, c = sa;
        u = (c & ~(1 << 32 - Xl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Ds++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Np++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: ry,
    useFormState: ny,
    useActionState: ny,
    useOptimistic: function(l) {
      var n = dl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Ni.bind(
        null,
        vt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Ad,
    useCacheRefresh: function() {
      return dl().memoizedState = cu.bind(
        null,
        vt
      );
    },
    useEffectEvent: function(l) {
      var n = dl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((Lt & 2) !== 0)
          throw Error(H(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Yd = {
    readContext: V,
    use: jo,
    useCallback: Bd,
    useContext: V,
    useEffect: _d,
    useImperativeHandle: sy,
    useInsertionEffect: Cd,
    useLayoutEffect: fy,
    useMemo: Gp,
    useReducer: uu,
    useRef: cy,
    useState: function() {
      return uu(nu);
    },
    useDebugValue: zn,
    useDeferredValue: function(l, n) {
      var u = qe();
      return iu(
        u,
        kt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = uu(nu)[0], n = qe().memoizedState;
      return [
        typeof l == "boolean" ? l : Cc(l),
        n
      ];
    },
    useSyncExternalStore: km,
    useId: Xp,
    useHostTransitionStatus: ry,
    useFormState: Yp,
    useActionState: Yp,
    useOptimistic: function(l, n) {
      var u = qe();
      return hl(u, kt, l, n);
    },
    useMemoCache: Ad,
    useCacheRefresh: dy
  };
  Yd.useEffectEvent = Hs;
  var Zp = {
    readContext: V,
    use: jo,
    useCallback: Bd,
    useContext: V,
    useEffect: _d,
    useImperativeHandle: sy,
    useInsertionEffect: Cd,
    useLayoutEffect: fy,
    useMemo: Gp,
    useReducer: Dd,
    useRef: cy,
    useState: function() {
      return Dd(nu);
    },
    useDebugValue: zn,
    useDeferredValue: function(l, n) {
      var u = qe();
      return kt === null ? Bs(u, l, n) : iu(
        u,
        kt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Dd(nu)[0], n = qe().memoizedState;
      return [
        typeof l == "boolean" ? l : Cc(l),
        n
      ];
    },
    useSyncExternalStore: km,
    useId: Xp,
    useHostTransitionStatus: ry,
    useFormState: iy,
    useActionState: iy,
    useOptimistic: function(l, n) {
      var u = qe();
      return kt !== null ? hl(u, kt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ad,
    useCacheRefresh: dy
  };
  Zp.useEffectEvent = Hs;
  function Nc(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Y({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Pa = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = ma(), s = Ju(c);
      s.payload = n, u != null && (s.callback = u), n = Ua(l, s, c), n !== null && (ta(n, l, c), _i(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = ma(), s = Ju(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Ua(l, s, c), n !== null && (ta(n, l, c), _i(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = ma(), c = Ju(u);
      c.tag = 2, n != null && (c.callback = n), n = Ua(l, c, u), n !== null && (ta(n, l, u), _i(n, l, u));
    }
  };
  function my(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ka(u, c) || !Ka(s, r) : !0;
  }
  function Lp(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Pa.enqueueReplaceState(n, n.state, null);
  }
  function qi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Y({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Gd(l) {
    vc(l);
  }
  function yy(l) {
    console.error(l);
  }
  function jd(l) {
    vc(l);
  }
  function Lo(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function xs(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function py(l, n, u) {
    return u = Ju(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Lo(l, n);
    }, u;
  }
  function gy(l) {
    return l = Ju(l), l.tag = 3, l;
  }
  function vy(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        xs(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      xs(n, u, c), typeof s != "function" && (Ee === null ? Ee = /* @__PURE__ */ new Set([this]) : Ee.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function Kv(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && rl(
        n,
        u,
        s,
        !0
      ), u = Kl.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return _a === null ? nh() : u.alternate === null && me === 0 && (me = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Dc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Fs(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Dc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Fs(l, c, s)), !1;
        }
        throw Error(H(435, u.tag));
      }
      return Fs(l, c, s), nh(), !1;
    }
    if (_t)
      return n = Kl.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== In && (l = Error(H(422), { cause: c }), Co(Da(l, u)))) : (c !== In && (n = Error(H(423), {
        cause: c
      }), Co(
        Da(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = Da(c, u), s = py(
        l.stateNode,
        c,
        s
      ), vd(l, s), me !== 4 && (me = 2)), !1;
    var r = Error(H(520), { cause: c });
    if (r = Da(r, u), Js === null ? Js = [r] : Js.push(r), me !== 4 && (me = 2), n === null) return !0;
    c = Da(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = py(u.stateNode, c, l), vd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Ee === null || !Ee.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = gy(s), vy(
              s,
              l,
              u,
              c
            ), vd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Xd = Error(H(461)), Ve = !1;
  function ve(l, n, u, c) {
    n.child = l === null ? Wm(n, null, u, c) : Ui(
      n,
      l.child,
      u,
      c
    );
  }
  function Sy(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return ht(n), c = Os(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = Ed(), l !== null && !Ve ? (_c(l, n, s), Ba(l, n, s)) : (_t && g && Uo(n), n.flags |= 1, ve(l, n, c, s), n.child);
  }
  function by(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Sc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Ty(
        l,
        n,
        r,
        c,
        s
      )) : (l = rd(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Zd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ka, u(m, c) && l.ref === n.ref)
        return Ba(l, n, s);
    }
    return n.flags |= 1, l = Xu(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Ty(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ka(r, c) && l.ref === n.ref)
        if (Ve = !1, n.pendingProps = c = r, Zd(l, s))
          (l.flags & 131072) !== 0 && (Ve = !0);
        else
          return n.lanes = l.lanes, Ba(l, n, s);
    }
    return Qd(
      l,
      n,
      u,
      c,
      s
    );
  }
  function wp(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return Wl(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ho(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Bp(n, r) : zs(), bd(n);
      else
        return c = n.lanes = 536870912, Wl(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Ho(n, r.cachePool), Bp(n, r), An(), n.memoizedState = null) : (l !== null && Ho(n, null), zs(), An());
    return ve(l, n, s, u), n.child;
  }
  function xi(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Wl(l, n, u, c, s) {
    var r = Ra();
    return r = r === null ? null : { parent: Xe._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Ho(n, null), zs(), bd(n), l !== null && rl(l, n, c, !0), n.childLanes = s, null;
  }
  function Ys(l, n) {
    return n = Xs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Fl(l, n, u) {
    return Ui(n, l.child, null, u), l = Ys(n, n.pendingProps), l.flags |= 2, $l(n), n.memoizedState = null, l;
  }
  function Jp(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (_t) {
        if (c.mode === "hidden")
          return l = Ys(n, c), n.lanes = 536870912, xi(null, l);
        if (xo(n), (l = de) ? (l = Mg(
          l,
          tl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Sn !== null ? { id: sa, overflow: bn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Xm(l), u.return = n, n.child = u, sl = n, de = null)) : l = null, l === null) throw Ia(n);
        return n.lanes = 536870912, null;
      }
      return Ys(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (xo(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Fl(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(H(558));
      else if (Ve || rl(l, n, u, !1), s = (u & l.childLanes) !== 0, Ve || s) {
        if (c = ie, c !== null && (m = ba(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ju(l, m), ta(c, l, m), Xd;
        nh(), n = Fl(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, de = ea(m.nextSibling), sl = n, _t = !0, kn = null, tl = !1, l !== null && hs(n, l), n = Ys(n, c), n.flags |= 4096;
      return n;
    }
    return l = Xu(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ca(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(H(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Qd(l, n, u, c, s) {
    return ht(n), u = Os(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Ed(), l !== null && !Ve ? (_c(l, n, s), Ba(l, n, s)) : (_t && c && Uo(n), n.flags |= 1, ve(l, n, u, s), n.child);
  }
  function Yi(l, n, u, c, s, r) {
    return ht(n), n.updateQueue = null, u = qp(
      n,
      c,
      u,
      s
    ), Td(l), c = Ed(), l !== null && !Ve ? (_c(l, n, r), Ba(l, n, r)) : (_t && c && Uo(n), n.flags |= 1, ve(l, n, u, r), n.child);
  }
  function Ey(l, n, u, c, s) {
    if (ht(n), n.stateNode === null) {
      var r = Ll, m = u.contextType;
      typeof m == "object" && m !== null && (r = V(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Pa, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, As(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? V(m) : Ll, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Nc(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Pa.enqueueReplaceState(r, r.state, null), eu(n, c, r, s), Ci(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, T = qi(u, g);
      r.props = T;
      var _ = r.context, G = u.contextType;
      m = Ll, typeof G == "object" && G !== null && (m = V(G));
      var Q = u.getDerivedStateFromProps;
      G = typeof Q == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, G || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || _ !== m) && Lp(
        n,
        r,
        c,
        m
      ), wu = !1;
      var C = n.memoizedState;
      r.state = C, eu(n, c, r, s), Ci(), _ = n.memoizedState, g || C !== _ || wu ? (typeof Q == "function" && (Nc(
        n,
        u,
        Q,
        c
      ), _ = n.memoizedState), (T = wu || my(
        n,
        u,
        T,
        c,
        C,
        _,
        m
      )) ? (G || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = _), r.props = c, r.state = _, r.context = m, c = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, gd(l, n), m = n.memoizedProps, G = qi(u, m), r.props = G, Q = n.pendingProps, C = r.context, _ = u.contextType, T = Ll, typeof _ == "object" && _ !== null && (T = V(_)), g = u.getDerivedStateFromProps, (_ = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== Q || C !== T) && Lp(
        n,
        r,
        c,
        T
      ), wu = !1, C = n.memoizedState, r.state = C, eu(n, c, r, s), Ci();
      var x = n.memoizedState;
      m !== Q || C !== x || wu || l !== null && l.dependencies !== null && Tc(l.dependencies) ? (typeof g == "function" && (Nc(
        n,
        u,
        g,
        c
      ), x = n.memoizedState), (G = wu || my(
        n,
        u,
        G,
        c,
        C,
        x,
        T
      ) || l !== null && l.dependencies !== null && Tc(l.dependencies)) ? (_ || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, x, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        x,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = x), r.props = c, r.state = x, r.context = T, c = G) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Ca(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Ui(
      n,
      l.child,
      null,
      s
    ), n.child = Ui(
      n,
      null,
      u,
      s
    )) : ve(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Ba(
      l,
      n,
      s
    ), l;
  }
  function Dn(l, n, u, c) {
    return Ai(), n.flags |= 256, ve(l, n, u, c), n.child;
  }
  var Gs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function js(l) {
    return { baseLanes: l, cachePool: Ac() };
  }
  function Ha(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Pl), l;
  }
  function Ay(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Te.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (_t) {
        if (s ? lu(n) : An(), (l = de) ? (l = Mg(
          l,
          tl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Sn !== null ? { id: sa, overflow: bn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Xm(l), u.return = n, n.child = u, sl = n, de = null)) : l = null, l === null) throw Ia(n);
        return Li(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, s ? (An(), s = n.mode, g = Xs(
        { mode: "hidden", children: g },
        s
      ), c = Qu(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = js(u), c.childLanes = Ha(
        l,
        m,
        u
      ), n.memoizedState = Gs, xi(null, c)) : (lu(n), Gi(n, g));
    }
    var T = l.memoizedState;
    if (T !== null && (g = T.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (lu(n), n.flags &= -257, n = qc(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (An(), n.child = l.child, n.flags |= 128, n = null) : (An(), g = c.fallback, s = n.mode, c = Xs(
          { mode: "visible", children: c.children },
          s
        ), g = Qu(
          g,
          s,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, Ui(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = js(u), c.childLanes = Ha(
          l,
          m,
          u
        ), n.memoizedState = Gs, n = xi(null, c));
      else if (lu(n), Li(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var _ = m.dgst;
        m = _, c = Error(H(419)), c.stack = "", c.digest = m, Co({ value: c, source: null, stack: null }), n = qc(
          l,
          n,
          u
        );
      } else if (Ve || rl(l, n, u, !1), m = (u & l.childLanes) !== 0, Ve || m) {
        if (m = ie, m !== null && (c = ba(m, u), c !== 0 && c !== T.retryLane))
          throw T.retryLane = c, ju(l, c), ta(m, l, c), Xd;
        ln(g) || nh(), n = qc(
          l,
          n,
          u
        );
      } else
        ln(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, de = ea(
          g.nextSibling
        ), sl = n, _t = !0, kn = null, tl = !1, l !== null && hs(n, l), n = Gi(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (An(), g = c.fallback, s = n.mode, T = l.child, _ = T.sibling, c = Xu(T, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = T.subtreeFlags & 65011712, _ !== null ? g = Xu(
      _,
      g
    ) : (g = Qu(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, xi(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = js(u) : (s = g.cachePool, s !== null ? (T = Xe._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = Ac(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), c.memoizedState = g, c.childLanes = Ha(
      l,
      m,
      u
    ), n.memoizedState = Gs, xi(l.child, c)) : (lu(n), u = l.child, l = u.sibling, u = Xu(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Gi(l, n) {
    return n = Xs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Xs(l, n) {
    return l = Be(22, l, null, n), l.lanes = 0, l;
  }
  function qc(l, n, u) {
    return Ui(n, l.child, null, u), l = Gi(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function xc(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), yd(l.return, n, u);
  }
  function Vd(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function zy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = Te.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, Bt(Te, m), ve(l, n, c, u), c = _t ? je : 0, !g && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && xc(l, u, n);
        else if (l.tag === 19)
          xc(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break t;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break t;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Yo(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Vd(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Yo(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Vd(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        Vd(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Ba(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Un |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (rl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(H(153));
    if (n.child !== null) {
      for (l = n.child, u = Xu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Xu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Zd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Tc(l)));
  }
  function Ld(l, n, u) {
    switch (n.tag) {
      case 3:
        Jf(n, n.stateNode.containerInfo), Jl(n, Xe, l.memoizedState.cache), Ai();
        break;
      case 27:
      case 5:
        um(n);
        break;
      case 4:
        Jf(n, n.stateNode.containerInfo);
        break;
      case 10:
        Jl(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, xo(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (lu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ay(l, n, u) : (lu(n), l = Ba(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        lu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (rl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return zy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Bt(Te, Te.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, wp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Jl(n, Xe, l.memoizedState.cache);
    }
    return Ba(l, n, u);
  }
  function Dy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Ve = !0;
      else {
        if (!Zd(l, u) && (n.flags & 128) === 0)
          return Ve = !1, Ld(
            l,
            n,
            u
          );
        Ve = (l.flags & 131072) !== 0;
      }
    else
      Ve = !1, _t && (n.flags & 1048576) !== 0 && Vm(n, je, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var c = n.pendingProps;
          if (l = Oi(n.elementType), n.type = l, typeof l == "function")
            Sc(l) ? (c = qi(l, c), n.tag = 1, n = Ey(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = Qd(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === jl) {
                n.tag = 11, n = Sy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break t;
              } else if (s === cl) {
                n.tag = 14, n = by(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break t;
              }
            }
            throw n = ia(l) || l, Error(H(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = qi(
          c,
          n.pendingProps
        ), Ey(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        t: {
          if (Jf(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(H(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, gd(l, n), eu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, Jl(n, Xe, c), c !== r.cache && tu(
            n,
            [Xe],
            u,
            !0
          ), Ci(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Dn(
                l,
                n,
                c,
                u
              );
              break t;
            } else if (c !== s) {
              s = Da(
                Error(H(424)),
                n
              ), Co(s), n = Dn(
                l,
                n,
                c,
                u
              );
              break t;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, de = ea(l.firstChild), sl = n, _t = !0, kn = null, tl = !0, u = Wm(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ai(), c === s) {
              n = Ba(
                l,
                n,
                u
              );
              break t;
            }
            ve(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ca(l, n), l === null ? (u = hf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : _t || (u = n.type, l = n.pendingProps, c = Zi(
          si.current
        ).createElement(u), c[ne] = n, c[Ql] = l, Ol(c, u, l), Wt(c), n.stateNode = c) : n.memoizedState = hf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return um(n), l === null && _t && (c = n.stateNode = rf(
          n.type,
          n.pendingProps,
          si.current
        ), sl = n, tl = !0, s = de, Cn(n.type) ? (ur = s, de = ea(c.firstChild)) : de = s), ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ca(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && _t && ((s = c = de) && (c = Fv(
          c,
          n.type,
          n.pendingProps,
          tl
        ), c !== null ? (n.stateNode = c, sl = n, de = ea(c.firstChild), tl = !1, s = !0) : s = !1), s || Ia(n)), um(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, ff(s, r) ? c = null : m !== null && ff(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Os(
          l,
          n,
          Jv,
          null,
          null,
          u
        ), or._currentValue = s), Ca(l, n), ve(l, n, c, u), n.child;
      case 6:
        return l === null && _t && ((l = u = de) && (u = Et(
          u,
          n.pendingProps,
          tl
        ), u !== null ? (n.stateNode = u, sl = n, de = null, l = !0) : l = !1), l || Ia(n)), null;
      case 13:
        return Ay(l, n, u);
      case 4:
        return Jf(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Ui(
          n,
          null,
          c,
          u
        ) : ve(l, n, c, u), n.child;
      case 11:
        return Sy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return ve(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Jl(n, n.type, c.value), ve(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, ht(n), s = V(s), c = c(s), n.flags |= 1, ve(l, n, c, u), n.child;
      case 14:
        return by(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Ty(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return zy(l, n, u);
      case 31:
        return Jp(l, n, u);
      case 22:
        return wp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return ht(n), c = V(Xe), l === null ? (s = Ra(), s === null && (s = ie, r = ps(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, As(n), Jl(n, Xe, s)) : ((l.lanes & u) !== 0 && (gd(l, n), eu(n, null, null, u), Ci()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Jl(n, Xe, c)) : (c = r.cache, Jl(n, Xe, c), c !== s.cache && tu(
          n,
          [Xe],
          u,
          !0
        ))), ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(H(156, n.tag));
  }
  function ou(l) {
    l.flags |= 4;
  }
  function Oy(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (lg()) l.flags |= 8192;
        else
          throw Mi = Dc, zc;
    } else l.flags &= -16777217;
  }
  function My(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !pa(n))
      if (lg()) l.flags |= 8192;
      else
        throw Mi = Dc, zc;
  }
  function Bl(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? lc() : 536870912, l.lanes |= n, Ue |= n);
  }
  function wo(l, n) {
    if (!_t)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function dt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Kp(l, n, u) {
    var c = n.pendingProps;
    switch (hd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dt(n), null;
      case 1:
        return dt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), En(Xe), Hu(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Pn(n) ? ou(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Zm())), dt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (ou(n), r !== null ? (dt(n), My(n, r)) : (dt(n), Oy(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (ou(n), dt(n), My(n, r)) : (dt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && ou(n), dt(n), Oy(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (I(n), u = si.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && ou(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return dt(n), null;
          }
          l = Rt.current, Pn(n) ? ms(n) : (l = rf(s, c, u), n.stateNode = l, ou(n));
        }
        return dt(n), null;
      case 5:
        if (I(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && ou(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(H(166));
            return dt(n), null;
          }
          if (r = Rt.current, Pn(n))
            ms(n);
          else {
            var m = Zi(
              si.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[ne] = n, r[Ql] = c;
            t: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break t;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            t: switch (Ol(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break t;
              case "img":
                c = !0;
                break t;
              default:
                c = !1;
            }
            c && ou(n);
          }
        }
        return dt(n), Oy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && ou(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(H(166));
          if (l = si.current, Pn(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = sl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[ne] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || ky(l.nodeValue, u)), l || Ia(n, !0);
          } else
            l = Zi(l).createTextNode(
              c
            ), l[ne] = n, n.stateNode = l;
        }
        return dt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Pn(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(H(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(H(557));
              l[ne] = n;
            } else
              Ai(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            dt(n), l = !1;
          } else
            u = Zm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? ($l(n), n) : ($l(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(H(558));
        }
        return dt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Pn(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(H(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(H(317));
              s[ne] = n;
            } else
              Ai(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            dt(n), s = !1;
          } else
            s = Zm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? ($l(n), n) : ($l(n), null);
        }
        return $l(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), Bl(n, n.updateQueue), dt(n), null);
      case 4:
        return Hu(), l === null && of(n.stateNode.containerInfo), dt(n), null;
      case 10:
        return En(n.type), dt(n), null;
      case 19:
        if (le(Te), c = n.memoizedState, c === null) return dt(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) wo(c, !1);
          else {
            if (me !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Yo(l), r !== null) {
                  for (n.flags |= 128, wo(c, !1), l = r.updateQueue, n.updateQueue = l, Bl(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    jm(u, l), u = u.sibling;
                  return Bt(
                    Te,
                    Te.current & 1 | 2
                  ), _t && ka(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && zl() > Kt && (n.flags |= 128, s = !0, wo(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = Yo(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, Bl(n, l), wo(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !_t)
                return dt(n), null;
            } else
              2 * zl() - c.renderingStartTime > Kt && u !== 536870912 && (n.flags |= 128, s = !0, wo(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = zl(), l.sibling = null, u = Te.current, Bt(
          Te,
          s ? u & 1 | 2 : u & 1
        ), _t && ka(n, c.treeForkCount), l) : (dt(n), null);
      case 22:
      case 23:
        return $l(n), qo(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (dt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : dt(n), u = n.updateQueue, u !== null && Bl(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && le(Ma), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), En(Xe), dt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(H(156, n.tag));
  }
  function $p(l, n) {
    switch (hd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return En(Xe), Hu(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return I(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if ($l(n), n.alternate === null)
            throw Error(H(340));
          Ai();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if ($l(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(H(340));
          Ai();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return le(Te), null;
      case 4:
        return Hu(), null;
      case 10:
        return En(n.type), null;
      case 22:
      case 23:
        return $l(n), qo(), l !== null && le(Ma), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return En(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Wp(l, n) {
    switch (hd(n), n.tag) {
      case 3:
        En(Xe), Hu();
        break;
      case 26:
      case 27:
      case 5:
        I(n);
        break;
      case 4:
        Hu();
        break;
      case 31:
        n.memoizedState !== null && $l(n);
        break;
      case 13:
        $l(n);
        break;
      case 19:
        le(Te);
        break;
      case 10:
        En(n.type);
        break;
      case 22:
      case 23:
        $l(n), qo(), l !== null && le(Ma);
        break;
      case 24:
        En(Xe);
    }
  }
  function tn(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (g) {
      Pt(n, n.return, g);
    }
  }
  function Na(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, s = n;
              var T = u, _ = g;
              try {
                _();
              } catch (G) {
                Pt(
                  s,
                  T,
                  G
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (G) {
      Pt(n, n.return, G);
    }
  }
  function wd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Hi(n, u);
      } catch (c) {
        Pt(l, l.return, c);
      }
    }
  }
  function ji(l, n, u) {
    u.props = qi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Pt(l, n, c);
    }
  }
  function fu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      Pt(l, n, s);
    }
  }
  function On(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Pt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Pt(l, n, s);
        }
      else u.current = null;
  }
  function Ry(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break t;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      Pt(l, l.return, s);
    }
  }
  function Jd(l, n, u) {
    try {
      var c = l.stateNode;
      Py(c, l.type, u, n), c[Ql] = n;
    } catch (s) {
      Pt(l, l.return, s);
    }
  }
  function Uy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Cn(l.type) || l.tag === 4;
  }
  function Jo(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Uy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Cn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ko(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = dn));
    else if (c !== 4 && (c === 27 && Cn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Ko(l, n, u), l = l.sibling; l !== null; )
        Ko(l, n, u), l = l.sibling;
  }
  function $o(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Cn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for ($o(l, n, u), l = l.sibling; l !== null; )
        $o(l, n, u), l = l.sibling;
  }
  function _y(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Ol(n, c, u), n[ne] = l, n[Ql] = u;
    } catch (r) {
      Pt(l, l.return, r);
    }
  }
  var Fu = !1, We = !1, Kd = !1, Cy = typeof WeakSet == "function" ? WeakSet : Set, ml = null;
  function Wo(l, n) {
    if (l = l.containerInfo, hh = al, l = bi(l), cs(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        t: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break t;
            }
            var m = 0, g = -1, T = -1, _ = 0, G = 0, Q = l, C = null;
            e: for (; ; ) {
              for (var x; Q !== u || s !== 0 && Q.nodeType !== 3 || (g = m + s), Q !== r || c !== 0 && Q.nodeType !== 3 || (T = m + c), Q.nodeType === 3 && (m += Q.nodeValue.length), (x = Q.firstChild) !== null; )
                C = Q, Q = x;
              for (; ; ) {
                if (Q === l) break e;
                if (C === u && ++_ === s && (g = m), C === r && ++G === c && (T = m), (x = Q.nextSibling) !== null) break;
                Q = C, C = Q.parentNode;
              }
              Q = x;
            }
            u = g === -1 || T === -1 ? null : { start: g, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (mh = { focusedElem: l, selectionRange: u }, al = !1, ml = n; ml !== null; )
      if (n = ml, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, ml = l;
      else
        for (; ml !== null; ) {
          switch (n = ml, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var P = qi(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    P,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ct) {
                  Pt(
                    u,
                    u.return,
                    ct
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  nr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(H(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, ml = l;
            break;
          }
          ml = n.return;
        }
  }
  function Qs(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        ku(l, u), c & 4 && tn(5, u);
        break;
      case 1:
        if (ku(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Pt(u, u.return, m);
            }
          else {
            var s = qi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Pt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && wd(u), c & 512 && fu(u, u.return);
        break;
      case 3:
        if (ku(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Hi(l, n);
          } catch (m) {
            Pt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && _y(u);
      case 26:
      case 5:
        ku(l, u), n === null && c & 4 && Ry(u), c & 512 && fu(u, u.return);
        break;
      case 12:
        ku(l, u);
        break;
      case 31:
        ku(l, u), c & 4 && Fp(l, u);
        break;
      case 13:
        ku(l, u), c & 4 && Ny(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = qa.bind(
          null,
          u
        ), sf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Fu, !c) {
          n = n !== null && n.memoizedState !== null || We, s = Fu;
          var r = We;
          Fu = c, (We = n) && !r ? Mn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : ku(l, u), Fu = s, We = r;
        }
        break;
      case 30:
        break;
      default:
        ku(l, u);
    }
  }
  function Hy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Hy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Zr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var he = null, kl = !1;
  function su(l, n, u) {
    for (u = u.child; u !== null; )
      By(l, n, u), u = u.sibling;
  }
  function By(l, n, u) {
    if (oa && typeof oa.onCommitFiberUnmount == "function")
      try {
        oa.onCommitFiberUnmount(ec, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        We || On(u, n), su(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        We || On(u, n);
        var c = he, s = kl;
        Cn(u.type) && (he = u.stateNode, kl = !1), su(
          l,
          n,
          u
        ), Lc(u.stateNode), he = c, kl = s;
        break;
      case 5:
        We || On(u, n);
      case 6:
        if (c = he, s = kl, he = null, su(
          l,
          n,
          u
        ), he = c, kl = s, he !== null)
          if (kl)
            try {
              (he.nodeType === 9 ? he.body : he.nodeName === "HTML" ? he.ownerDocument.body : he).removeChild(u.stateNode);
            } catch (r) {
              Pt(
                u,
                n,
                r
              );
            }
          else
            try {
              he.removeChild(u.stateNode);
            } catch (r) {
              Pt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        he !== null && (kl ? (l = he, a0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Tf(l)) : a0(he, u.stateNode));
        break;
      case 4:
        c = he, s = kl, he = u.stateNode.containerInfo, kl = !0, su(
          l,
          n,
          u
        ), he = c, kl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Na(2, u, n), We || Na(4, u, n), su(
          l,
          n,
          u
        );
        break;
      case 1:
        We || (On(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && ji(
          u,
          n,
          c
        )), su(
          l,
          n,
          u
        );
        break;
      case 21:
        su(
          l,
          n,
          u
        );
        break;
      case 22:
        We = (c = We) || u.memoizedState !== null, su(
          l,
          n,
          u
        ), We = c;
        break;
      default:
        su(
          l,
          n,
          u
        );
    }
  }
  function Fp(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Tf(l);
      } catch (u) {
        Pt(n, n.return, u);
      }
    }
  }
  function Ny(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Tf(l);
      } catch (u) {
        Pt(n, n.return, u);
      }
  }
  function Vs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Cy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Cy()), n;
      default:
        throw Error(H(435, l.tag));
    }
  }
  function Zs(l, n) {
    var u = Vs(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = gg.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function Il(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Cn(g.type)) {
                he = g.stateNode, kl = !1;
                break t;
              }
              break;
            case 5:
              he = g.stateNode, kl = !1;
              break t;
            case 3:
            case 4:
              he = g.stateNode.containerInfo, kl = !0;
              break t;
          }
          g = g.return;
        }
        if (he === null) throw Error(H(160));
        By(r, m, s), he = null, kl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        $d(n, l), n = n.sibling;
  }
  var St = null;
  function $d(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Il(n, l), ra(l), c & 4 && (Na(3, l, l.return), tn(3, l), Na(5, l, l.return));
        break;
      case 1:
        Il(n, l), ra(l), c & 512 && (We || u === null || On(u, u.return)), c & 64 && Fu && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = St;
        if (Il(n, l), ra(l), c & 512 && (We || u === null || On(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                t: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Zn] || r[ne] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Ol(r, c, u), r[ne] = l, Wt(r), c = r;
                      break t;
                    case "link":
                      var m = c0(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break e;
                          }
                      }
                      r = s.createElement(c), Ol(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = c0(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break e;
                          }
                      }
                      r = s.createElement(c), Ol(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(H(468, c));
                  }
                  r[ne] = l, Wt(r), c = r;
                }
                l.stateNode = c;
              } else
                Sh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = i0(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Sh(
              s,
              l.type,
              l.stateNode
            ) : i0(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Jd(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Il(n, l), ra(l), c & 512 && (We || u === null || On(u, u.return)), u !== null && c & 4 && Jd(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Il(n, l), ra(l), c & 512 && (We || u === null || On(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            wn(s, "");
          } catch (P) {
            Pt(l, l.return, P);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Jd(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (Kd = !0);
        break;
      case 6:
        if (Il(n, l), ra(l), c & 4) {
          if (l.stateNode === null)
            throw Error(H(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (P) {
            Pt(l, l.return, P);
          }
        }
        break;
      case 3:
        if (pf = null, s = St, St = Nl(n.containerInfo), Il(n, l), St = s, ra(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Tf(n.containerInfo);
          } catch (P) {
            Pt(l, l.return, P);
          }
        Kd && (Kd = !1, qy(l));
        break;
      case 4:
        c = St, St = Nl(
          l.stateNode.containerInfo
        ), Il(n, l), ra(l), St = c;
        break;
      case 12:
        Il(n, l), ra(l);
        break;
      case 31:
        Il(n, l), ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Zs(l, c)));
        break;
      case 13:
        Il(n, l), ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (_n = zl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Zs(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, _ = Fu, G = We;
        if (Fu = _ || s, We = G || T, Il(n, l), We = G, Fu = _, ra(l), c & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || Fu || We || Yc(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = T.stateNode;
                    var Q = T.memoizedProps.style, C = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    g.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  Pt(T, T.return, P);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (P) {
                  Pt(T, T.return, P);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var x = T.stateNode;
                  s ? Ze(x, !0) : Ze(T.stateNode, !1);
                } catch (P) {
                  Pt(T, T.return, P);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break t;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, Zs(l, u))));
        break;
      case 19:
        Il(n, l), ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Zs(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Il(n, l), ra(l);
    }
  }
  function ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Uy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(H(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Jo(l);
            $o(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (wn(m, ""), u.flags &= -33);
            var g = Jo(l);
            $o(l, g, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, _ = Jo(l);
            Ko(
              l,
              _,
              T
            );
            break;
          default:
            throw Error(H(161));
        }
      } catch (G) {
        Pt(l, l.return, G);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function qy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        qy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function ku(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Qs(l, n.alternate, n), n = n.sibling;
  }
  function Yc(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Na(4, n, n.return), Yc(n);
          break;
        case 1:
          On(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && ji(
            n,
            n.return,
            u
          ), Yc(n);
          break;
        case 27:
          Lc(n.stateNode);
        case 26:
        case 5:
          On(n, n.return), Yc(n);
          break;
        case 22:
          n.memoizedState === null && Yc(n);
          break;
        case 30:
          Yc(n);
          break;
        default:
          Yc(n);
      }
      l = l.sibling;
    }
  }
  function Mn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Mn(
            s,
            r,
            u
          ), tn(4, r);
          break;
        case 1:
          if (Mn(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (_) {
              Pt(c, c.return, _);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Sd(T[s], g);
            } catch (_) {
              Pt(c, c.return, _);
            }
          }
          u && m & 64 && wd(r), fu(r, r.return);
          break;
        case 27:
          _y(r);
        case 26:
        case 5:
          Mn(
            s,
            r,
            u
          ), u && c === null && m & 4 && Ry(r), fu(r, r.return);
          break;
        case 12:
          Mn(
            s,
            r,
            u
          );
          break;
        case 31:
          Mn(
            s,
            r,
            u
          ), u && m & 4 && Fp(s, r);
          break;
        case 13:
          Mn(
            s,
            r,
            u
          ), u && m & 4 && Ny(s, r);
          break;
        case 22:
          r.memoizedState === null && Mn(
            s,
            r,
            u
          ), fu(r, r.return);
          break;
        case 30:
          break;
        default:
          Mn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Wd(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && gs(u));
  }
  function Fd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && gs(l));
  }
  function en(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Fo(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Fo(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        en(
          l,
          n,
          u,
          c
        ), s & 2048 && tn(9, n);
        break;
      case 1:
        en(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        en(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && gs(l)));
        break;
      case 12:
        if (s & 2048) {
          en(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Pt(n, n.return, T);
          }
        } else
          en(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        en(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        en(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? en(
          l,
          n,
          u,
          c
        ) : Ls(l, n) : r._visibility & 2 ? en(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, ko(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Wd(m, n);
        break;
      case 24:
        en(
          l,
          n,
          u,
          c
        ), s & 2048 && Fd(n.alternate, n);
        break;
      default:
        en(
          l,
          n,
          u,
          c
        );
    }
  }
  function ko(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, T = c, _ = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          ko(
            r,
            m,
            g,
            T,
            s
          ), tn(8, m);
          break;
        case 23:
          break;
        case 22:
          var G = m.stateNode;
          m.memoizedState !== null ? G._visibility & 2 ? ko(
            r,
            m,
            g,
            T,
            s
          ) : Ls(
            r,
            m
          ) : (G._visibility |= 2, ko(
            r,
            m,
            g,
            T,
            s
          )), s && _ & 2048 && Wd(
            m.alternate,
            m
          );
          break;
        case 24:
          ko(
            r,
            m,
            g,
            T,
            s
          ), s && _ & 2048 && Fd(m.alternate, m);
          break;
        default:
          ko(
            r,
            m,
            g,
            T,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Ls(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            Ls(u, c), s & 2048 && Wd(
              c.alternate,
              c
            );
            break;
          case 24:
            Ls(u, c), s & 2048 && Fd(c.alternate, c);
            break;
          default:
            Ls(u, c);
        }
        n = n.sibling;
      }
  }
  var da = 8192;
  function ru(l, n, u) {
    if (l.subtreeFlags & da)
      for (l = l.child; l !== null; )
        kp(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function kp(l, n, u) {
    switch (l.tag) {
      case 26:
        ru(
          l,
          n,
          u
        ), l.flags & da && l.memoizedState !== null && pu(
          u,
          St,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ru(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = St;
        St = Nl(l.stateNode.containerInfo), ru(
          l,
          n,
          u
        ), St = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = da, da = 16777216, ru(
          l,
          n,
          u
        ), da = c) : ru(
          l,
          n,
          u
        ));
        break;
      default:
        ru(
          l,
          n,
          u
        );
    }
  }
  function kd(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Io(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ml = c, Id(
            c,
            l
          );
        }
      kd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        xy(l), l = l.sibling;
  }
  function xy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Io(l), l.flags & 2048 && Na(9, l, l.return);
        break;
      case 3:
        Io(l);
        break;
      case 12:
        Io(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ws(l)) : Io(l);
        break;
      default:
        Io(l);
    }
  }
  function ws(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ml = c, Id(
            c,
            l
          );
        }
      kd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Na(8, n, n.return), ws(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ws(n));
          break;
        default:
          ws(n);
      }
      l = l.sibling;
    }
  }
  function Id(l, n) {
    for (; ml !== null; ) {
      var u = ml;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Na(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          gs(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, ml = c;
      else
        t: for (u = l; ml !== null; ) {
          c = ml;
          var s = c.sibling, r = c.return;
          if (Hy(c), c === u) {
            ml = null;
            break t;
          }
          if (s !== null) {
            s.return = r, ml = s;
            break t;
          }
          ml = r;
        }
    }
  }
  var Ip = {
    getCacheForType: function(l) {
      var n = V(Xe), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return V(Xe).controller.signal;
    }
  }, Yy = typeof WeakMap == "function" ? WeakMap : Map, Lt = 0, ie = null, Ct = null, Ot = 0, It = 0, st = null, du = !1, Xi = !1, Pd = !1, Rn = 0, me = 0, Un = 0, Gc = 0, th = 0, Pl = 0, Ue = 0, Js = null, _e = null, eh = !1, _n = 0, Gy = 0, Kt = 1 / 0, Po = null, Ee = null, ll = 0, Iu = null, Qi = null, hu = 0, ha = 0, lh = null, ah = null, tf = 0, Ks = null;
  function ma() {
    return (Lt & 2) !== 0 && Ot !== 0 ? Ot & -Ot : O.T !== null ? oh() : Qr();
  }
  function Pp() {
    if (Pl === 0)
      if ((Ot & 536870912) === 0 || _t) {
        var l = fn;
        fn <<= 1, (fn & 3932160) === 0 && (fn = 262144), Pl = l;
      } else Pl = 536870912;
    return l = Kl.current, l !== null && (l.flags |= 32), Pl;
  }
  function ta(l, n, u) {
    (l === ie && (It === 2 || It === 9) || l.cancelPendingCommit !== null) && (mu(l, 0), Pu(
      l,
      Ot,
      Pl,
      !1
    )), ho(l, u), ((Lt & 2) === 0 || l !== ie) && (l === ie && ((Lt & 2) === 0 && (Gc |= u), me === 4 && Pu(
      l,
      Ot,
      Pl,
      !1
    )), yu(l));
  }
  function tg(l, n, u) {
    if ((Lt & 6) !== 0) throw Error(H(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || sn(l, n), s = c ? ug(l, n) : uh(l, n, !0), r = c;
    do {
      if (s === 0) {
        Xi && !c && Pu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !eg(u)) {
          s = uh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            t: {
              var g = l;
              s = Js;
              var T = g.current.memoizedState.isDehydrated;
              if (T && (mu(g, m).flags |= 256), m = uh(
                g,
                m,
                !1
              ), m !== 2) {
                if (Pd && !T) {
                  g.errorRecoveryDisabledLanes |= r, Gc |= r, s = 4;
                  break t;
                }
                r = _e, _e = s, r !== null && (_e === null ? _e = r : _e.push.apply(
                  _e,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          mu(l, 0), Pu(l, n, 0, !0);
          break;
        }
        t: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(H(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Pu(
                c,
                n,
                Pl,
                !du
              );
              break t;
            case 2:
              _e = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(H(329));
          }
          if ((n & 62914560) === n && (s = _n + 300 - zl(), 10 < s)) {
            if (Pu(
              c,
              n,
              Pl,
              !du
            ), Ge(c, 0, !0) !== 0) break t;
            hu = n, c.timeoutHandle = ar(
              $s.bind(
                null,
                c,
                u,
                _e,
                Po,
                eh,
                n,
                Pl,
                Gc,
                Ue,
                du,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          $s(
            c,
            u,
            _e,
            Po,
            eh,
            n,
            Pl,
            Gc,
            Ue,
            du,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    yu(l);
  }
  function $s(l, n, u, c, s, r, m, g, T, _, G, Q, C, x) {
    if (l.timeoutHandle = -1, Q = n.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: dn
      }, kp(
        n,
        r,
        Q
      );
      var P = (r & 62914560) === r ? _n - zl() : (r & 4194048) === r ? Gy - zl() : 0;
      if (P = f0(
        Q,
        P
      ), P !== null) {
        hu = r, l.cancelPendingCommit = P(
          fg.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            g,
            T,
            G,
            Q,
            null,
            C,
            x
          )
        ), Pu(l, r, m, !_);
        return;
      }
    }
    fg(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      g,
      T
    );
  }
  function eg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Hl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Pu(l, n, u, c) {
    n &= ~th, n &= ~Gc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Xl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && Ff(l, u, n);
  }
  function ef() {
    return (Lt & 6) === 0 ? (ei(0), !1) : !0;
  }
  function jy() {
    if (Ct !== null) {
      if (It === 0)
        var l = Ct.return;
      else
        l = Ct, Tn = Vu = null, Ms(l), Ri = null, Oc = 0, l = Ct;
      for (; l !== null; )
        Wp(l.alternate, l), l = l.return;
      Ct = null;
    }
  }
  function mu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Dg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), hu = 0, jy(), ie = l, Ct = u = Xu(l.current, null), Ot = n, It = 0, st = null, du = !1, Xi = sn(l, n), Pd = !1, Ue = Pl = th = Gc = Un = me = 0, _e = Js = null, eh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Xl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Rn = n, Aa(), u;
  }
  function lf(l, n) {
    vt = null, O.H = qs, n === Di || n === Bo ? (n = $m(), It = 3) : n === zc ? (n = $m(), It = 4) : It = n === Xd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, st = n, Ct === null && (me = 1, Lo(
      l,
      Da(n, l.current)
    ));
  }
  function lg() {
    var l = Kl.current;
    return l === null ? !0 : (Ot & 4194048) === Ot ? _a === null : (Ot & 62914560) === Ot || (Ot & 536870912) !== 0 ? l === _a : !1;
  }
  function ag() {
    var l = O.H;
    return O.H = qs, l === null ? qs : l;
  }
  function ng() {
    var l = O.A;
    return O.A = Ip, l;
  }
  function nh() {
    me = 4, du || (Ot & 4194048) !== Ot && Kl.current !== null || (Xi = !0), (Un & 134217727) === 0 && (Gc & 134217727) === 0 || ie === null || Pu(
      ie,
      Ot,
      Pl,
      !1
    );
  }
  function uh(l, n, u) {
    var c = Lt;
    Lt |= 2;
    var s = ag(), r = ng();
    (ie !== l || Ot !== n) && (Po = null, mu(l, n)), n = !1;
    var m = me;
    t: do
      try {
        if (It !== 0 && Ct !== null) {
          var g = Ct, T = st;
          switch (It) {
            case 8:
              jy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Kl.current === null && (n = !0);
              var _ = It;
              if (It = 0, st = null, jc(l, g, T, _), u && Xi) {
                m = 0;
                break t;
              }
              break;
            default:
              _ = It, It = 0, st = null, jc(l, g, T, _);
          }
        }
        $v(), m = me;
        break;
      } catch (G) {
        lf(l, G);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Tn = Vu = null, Lt = c, O.H = s, O.A = r, Ct === null && (ie = null, Ot = 0, Aa()), m;
  }
  function $v() {
    for (; Ct !== null; ) ig(Ct);
  }
  function ug(l, n) {
    var u = Lt;
    Lt |= 2;
    var c = ag(), s = ng();
    ie !== l || Ot !== n ? (Po = null, Kt = zl() + 500, mu(l, n)) : Xi = sn(
      l,
      n
    );
    t: do
      try {
        if (It !== 0 && Ct !== null) {
          n = Ct;
          var r = st;
          e: switch (It) {
            case 1:
              It = 0, st = null, jc(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Jm(r)) {
                It = 0, st = null, cg(n);
                break;
              }
              n = function() {
                It !== 2 && It !== 9 || ie !== l || (It = 7), yu(l);
              }, r.then(n, n);
              break t;
            case 3:
              It = 7;
              break t;
            case 4:
              It = 5;
              break t;
            case 7:
              Jm(r) ? (It = 0, st = null, cg(n)) : (It = 0, st = null, jc(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Ct.tag) {
                case 26:
                  m = Ct.memoizedState;
                case 5:
                case 27:
                  var g = Ct;
                  if (m ? pa(m) : g.stateNode.complete) {
                    It = 0, st = null;
                    var T = g.sibling;
                    if (T !== null) Ct = T;
                    else {
                      var _ = g.return;
                      _ !== null ? (Ct = _, Ws(_)) : Ct = null;
                    }
                    break e;
                  }
              }
              It = 0, st = null, jc(l, n, r, 5);
              break;
            case 6:
              It = 0, st = null, jc(l, n, r, 6);
              break;
            case 8:
              jy(), me = 6;
              break t;
            default:
              throw Error(H(462));
          }
        }
        Vi();
        break;
      } catch (G) {
        lf(l, G);
      }
    while (!0);
    return Tn = Vu = null, O.H = c, O.A = s, Lt = u, Ct !== null ? 0 : (ie = null, Ot = 0, Aa(), me);
  }
  function Vi() {
    for (; Ct !== null && !tc(); )
      ig(Ct);
  }
  function ig(l) {
    var n = Dy(l.alternate, l, Rn);
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Ct = n;
  }
  function cg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Yi(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ot
        );
        break;
      case 11:
        n = Yi(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ot
        );
        break;
      case 5:
        Ms(n);
      default:
        Wp(u, n), n = Ct = jm(n, Rn), n = Dy(u, n, Rn);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Ct = n;
  }
  function jc(l, n, u, c) {
    Tn = Vu = null, Ms(n), Ri = null, Oc = 0;
    var s = n.return;
    try {
      if (Kv(
        l,
        s,
        n,
        u,
        Ot
      )) {
        me = 1, Lo(
          l,
          Da(u, l.current)
        ), Ct = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Ct = s, r;
      me = 1, Lo(
        l,
        Da(u, l.current)
      ), Ct = null;
      return;
    }
    n.flags & 32768 ? (_t || c === 1 ? l = !0 : Xi || (Ot & 536870912) !== 0 ? l = !1 : (du = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Kl.current, c !== null && c.tag === 13 && (c.flags |= 16384))), og(n, l)) : Ws(n);
  }
  function Ws(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        og(
          n,
          du
        );
        return;
      }
      l = n.return;
      var u = Kp(
        n.alternate,
        n,
        Rn
      );
      if (u !== null) {
        Ct = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ct = n;
        return;
      }
      Ct = n = l;
    } while (n !== null);
    me === 0 && (me = 5);
  }
  function og(l, n) {
    do {
      var u = $p(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Ct = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Ct = l;
        return;
      }
      Ct = l = u;
    } while (l !== null);
    me = 6, Ct = null;
  }
  function fg(l, n, u, c, s, r, m, g, T) {
    l.cancelPendingCommit = null;
    do
      af();
    while (ll !== 0);
    if ((Lt & 6) !== 0) throw Error(H(327));
    if (n !== null) {
      if (n === l.current) throw Error(H(177));
      if (r = n.lanes | n.childLanes, r |= Wa, jr(
        l,
        u,
        r,
        m,
        g,
        T
      ), l === ie && (Ct = ie = null, Ot = 0), Qi = n, Iu = l, hu = u, ha = r, lh = s, ah = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, vg(ri, function() {
        return mg(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = O.T, O.T = null, s = Z.p, Z.p = 2, m = Lt, Lt |= 4;
        try {
          Wo(l, n, u);
        } finally {
          Lt = m, Z.p = s, O.T = c;
        }
      }
      ll = 1, sg(), rg(), dg();
    }
  }
  function sg() {
    if (ll === 1) {
      ll = 0;
      var l = Iu, n = Qi, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var c = Z.p;
        Z.p = 2;
        var s = Lt;
        Lt |= 4;
        try {
          $d(n, l);
          var r = mh, m = bi(l.containerInfo), g = r.focusedElem, T = r.selectionRange;
          if (m !== g && g && g.ownerDocument && pc(
            g.ownerDocument.documentElement,
            g
          )) {
            if (T !== null && cs(g)) {
              var _ = T.start, G = T.end;
              if (G === void 0 && (G = _), "selectionStart" in g)
                g.selectionStart = _, g.selectionEnd = Math.min(
                  G,
                  g.value.length
                );
              else {
                var Q = g.ownerDocument || document, C = Q && Q.defaultView || window;
                if (C.getSelection) {
                  var x = C.getSelection(), P = g.textContent.length, ct = Math.min(T.start, P), oe = T.end === void 0 ? ct : Math.min(T.end, P);
                  !x.extend && ct > oe && (m = oe, oe = ct, ct = m);
                  var M = Ym(
                    g,
                    ct
                  ), z = Ym(
                    g,
                    oe
                  );
                  if (M && z && (x.rangeCount !== 1 || x.anchorNode !== M.node || x.anchorOffset !== M.offset || x.focusNode !== z.node || x.focusOffset !== z.offset)) {
                    var R = Q.createRange();
                    R.setStart(M.node, M.offset), x.removeAllRanges(), ct > oe ? (x.addRange(R), x.extend(z.node, z.offset)) : (R.setEnd(z.node, z.offset), x.addRange(R));
                  }
                }
              }
            }
            for (Q = [], x = g; x = x.parentNode; )
              x.nodeType === 1 && Q.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < Q.length; g++) {
              var X = Q[g];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          al = !!hh, mh = hh = null;
        } finally {
          Lt = s, Z.p = c, O.T = u;
        }
      }
      l.current = n, ll = 2;
    }
  }
  function rg() {
    if (ll === 2) {
      ll = 0;
      var l = Iu, n = Qi, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var c = Z.p;
        Z.p = 2;
        var s = Lt;
        Lt |= 4;
        try {
          Qs(l, n.alternate, n);
        } finally {
          Lt = s, Z.p = c, O.T = u;
        }
      }
      ll = 3;
    }
  }
  function dg() {
    if (ll === 4 || ll === 3) {
      ll = 0, xr();
      var l = Iu, n = Qi, u = hu, c = ah;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ll = 5 : (ll = 0, Qi = Iu = null, hg(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Ee = null), rm(u), n = n.stateNode, oa && typeof oa.onCommitFiberRoot == "function")
        try {
          oa.onCommitFiberRoot(
            ec,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = O.T, s = Z.p, Z.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          O.T = n, Z.p = s;
        }
      }
      (hu & 3) !== 0 && af(), yu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Ks ? tf++ : (tf = 0, Ks = l) : tf = 0, ei(0);
    }
  }
  function hg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, gs(n)));
  }
  function af() {
    return sg(), rg(), dg(), mg();
  }
  function mg() {
    if (ll !== 5) return !1;
    var l = Iu, n = ha;
    ha = 0;
    var u = rm(hu), c = O.T, s = Z.p;
    try {
      Z.p = 32 > u ? 32 : u, O.T = null, u = lh, lh = null;
      var r = Iu, m = hu;
      if (ll = 0, Qi = Iu = null, hu = 0, (Lt & 6) !== 0) throw Error(H(331));
      var g = Lt;
      if (Lt |= 4, xy(r.current), Fo(
        r,
        r.current,
        m,
        u
      ), Lt = g, ei(0, !1), oa && typeof oa.onPostCommitFiberRoot == "function")
        try {
          oa.onPostCommitFiberRoot(ec, r);
        } catch {
        }
      return !0;
    } finally {
      Z.p = s, O.T = c, hg(l, n);
    }
  }
  function yg(l, n, u) {
    n = Da(u, n), n = py(l.stateNode, n, 2), l = Ua(l, n, 2), l !== null && (ho(l, 2), yu(l));
  }
  function Pt(l, n, u) {
    if (l.tag === 3)
      yg(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          yg(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ee === null || !Ee.has(c))) {
            l = Da(u, l), u = gy(2), c = Ua(n, u, 2), c !== null && (vy(
              u,
              c,
              n,
              l
            ), ho(c, 2), yu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Fs(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Yy();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Pd = !0, s.add(u), l = Xy.bind(null, l, n, u), n.then(l, l));
  }
  function Xy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ie === l && (Ot & u) === u && (me === 4 || me === 3 && (Ot & 62914560) === Ot && 300 > zl() - _n ? (Lt & 2) === 0 && mu(l, 0) : th |= u, Ue === Ot && (Ue = 0)), yu(l);
  }
  function pg(l, n) {
    n === 0 && (n = lc()), l = ju(l, n), l !== null && (ho(l, n), yu(l));
  }
  function qa(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), pg(l, u);
  }
  function gg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(H(314));
    }
    c !== null && c.delete(n), pg(l, u);
  }
  function vg(l, n) {
    return re(l, n);
  }
  var nf = null, Xc = null, Qy = !1, ih = !1, Vy = !1, ti = 0;
  function yu(l) {
    l !== Xc && l.next === null && (Xc === null ? nf = Xc = l : Xc = Xc.next = l), ih = !0, Qy || (Qy = !0, Is());
  }
  function ei(l, n) {
    if (!Vy && ih) {
      Vy = !0;
      do
        for (var u = !1, c = nf; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Xl(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Qc(c, r));
          } else
            r = Ot, r = Ge(
              c,
              c === ie ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || sn(c, r) || (u = !0, Qc(c, r));
          c = c.next;
        }
      while (u);
      Vy = !1;
    }
  }
  function ch() {
    Zy();
  }
  function Zy() {
    ih = Qy = !1;
    var l = 0;
    ti !== 0 && Wv() && (l = ti);
    for (var n = zl(), u = null, c = nf; c !== null; ) {
      var s = c.next, r = Ly(c, n);
      r === 0 ? (c.next = null, u === null ? nf = s : u.next = s, s === null && (Xc = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (ih = !0)), c = s;
    }
    ll !== 0 && ll !== 5 || ei(l), ti !== 0 && (ti = 0);
  }
  function Ly(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Xl(r), g = 1 << m, T = s[m];
      T === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = ro(g, n)) : T <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = ie, u = Ot, u = Ge(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (It === 2 || It === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && om(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || sn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && om(c), rm(u)) {
        case 2:
        case 8:
          u = Gr;
          break;
        case 32:
          u = ri;
          break;
        case 268435456:
          u = fm;
          break;
        default:
          u = ri;
      }
      return c = ks.bind(null, l), u = re(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && om(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ks(l, n) {
    if (ll !== 0 && ll !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (af() && l.callbackNode !== u)
      return null;
    var c = Ot;
    return c = Ge(
      l,
      l === ie ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (tg(l, c, n), Ly(l, zl()), l.callbackNode != null && l.callbackNode === u ? ks.bind(null, l) : null);
  }
  function Qc(l, n) {
    if (af()) return null;
    tg(l, n, !0);
  }
  function Is() {
    Og(function() {
      (Lt & 6) !== 0 ? re(
        Yr,
        ch
      ) : Zy();
    });
  }
  function oh() {
    if (ti === 0) {
      var l = zi;
      l === 0 && (l = Nu, Nu <<= 1, (Nu & 261888) === 0 && (Nu = 256)), ti = l;
    }
    return ti;
  }
  function Sg(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : wa("" + l);
  }
  function Vc(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Ps(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Sg(
        (s[Ql] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Ql] || null) ? Sg(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new ns(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (ti !== 0) {
                  var T = m ? Vc(s, m) : new FormData(s);
                  Vo(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), T = m ? Vc(s, m) : new FormData(s), Vo(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var fh = 0; fh < Mo.length; fh++) {
    var uf = Mo[fh], wy = uf.toLowerCase(), Jy = uf[0].toUpperCase() + uf.slice(1);
    Zl(
      wy,
      "on" + Jy
    );
  }
  Zl(fs, "onAnimationEnd"), Zl(Gm, "onAnimationIteration"), Zl(fd, "onAnimationStart"), Zl("dblclick", "onDoubleClick"), Zl("focusin", "onFocus"), Zl("focusout", "onBlur"), Zl(gc, "onTransitionRun"), Zl(ss, "onTransitionStart"), Zl(Wn, "onTransitionCancel"), Zl(_p, "onTransitionEnd"), Ln("onMouseEnter", ["mouseout", "mouseover"]), Ln("onMouseLeave", ["mouseout", "mouseover"]), Ln("onPointerEnter", ["pointerout", "pointerover"]), Ln("onPointerLeave", ["pointerout", "pointerover"]), yi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), yi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), yi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), yi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), yi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), yi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var cf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), bg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cf)
  );
  function Tg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      t: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], T = g.instance, _ = g.currentTarget;
            if (g = g.listener, T !== r && s.isPropagationStopped())
              break t;
            r = g, s.currentTarget = _;
            try {
              r(s);
            } catch (G) {
              vc(G);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], T = g.instance, _ = g.currentTarget, g = g.listener, T !== r && s.isPropagationStopped())
              break t;
            r = g, s.currentTarget = _;
            try {
              r(s);
            } catch (G) {
              vc(G);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function Ut(l, n) {
    var u = n[Vr];
    u === void 0 && (u = n[Vr] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (tr(n, l, 2, !1), u.add(c));
  }
  function Ky(l, n, u) {
    var c = 0;
    n && (c |= 4), tr(
      u,
      l,
      c,
      n
    );
  }
  var sh = "_reactListening" + Math.random().toString(36).slice(2);
  function of(l) {
    if (!l[sh]) {
      l[sh] = !0, ic.forEach(function(u) {
        u !== "selectionchange" && (bg.has(u) || Ky(u, !1, l), Ky(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[sh] || (n[sh] = !0, Ky("selectionchange", !1, n));
    }
  }
  function tr(l, n, u, c) {
    switch (fr(n)) {
      case 2:
        var s = gu;
        break;
      case 8:
        s = vu;
        break;
      default:
        s = Ml;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ls || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function $y(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      t: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var g = c.stateNode.containerInfo;
          if (g === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = ac(g), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              c = r = m;
              continue t;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    bm(function() {
      var _ = r, G = Fr(u), Q = [];
      t: {
        var C = Fn.get(l);
        if (C !== void 0) {
          var x = ns, P = l;
          switch (l) {
            case "keypress":
              if (Ir(u) === 0) break t;
            case "keydown":
            case "keyup":
              x = ld;
              break;
            case "focusin":
              P = "focus", x = td;
              break;
            case "focusout":
              P = "blur", x = td;
              break;
            case "beforeblur":
            case "afterblur":
              x = td;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Eo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = vp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Ap;
              break;
            case fs:
            case Gm:
            case fd:
              x = bp;
              break;
            case _p:
              x = Zv;
              break;
            case "scroll":
            case "scrollend":
              x = Qv;
              break;
            case "wheel":
              x = Lv;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = sc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = yn;
              break;
            case "toggle":
            case "beforetoggle":
              x = Um;
          }
          var ct = (n & 4) !== 0, oe = !ct && (l === "scroll" || l === "scrollend"), M = ct ? C !== null ? C + "Capture" : null : C;
          ct = [];
          for (var z = _, R; z !== null; ) {
            var X = z;
            if (R = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || R === null || M === null || (X = ol(z, M), X != null && ct.push(
              er(z, X, R)
            )), oe) break;
            z = z.return;
          }
          0 < ct.length && (C = new x(
            C,
            P,
            null,
            u,
            G
          ), Q.push({ event: C, listeners: ct }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (C = l === "mouseover" || l === "pointerover", x = l === "mouseout" || l === "pointerout", C && u !== Wr && (P = u.relatedTarget || u.fromElement) && (ac(P) || P[hi]))
            break t;
          if ((x || C) && (C = G.window === G ? G : (C = G.ownerDocument) ? C.defaultView || C.parentWindow : window, x ? (P = u.relatedTarget || u.toElement, x = _, P = P ? ac(P) : null, P !== null && (oe = Me(P), ct = P.tag, P !== oe || ct !== 5 && ct !== 27 && ct !== 6) && (P = null)) : (x = null, P = _), x !== P)) {
            if (ct = Eo, X = "onMouseLeave", M = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (ct = yn, X = "onPointerLeave", M = "onPointerEnter", z = "pointer"), oe = x == null ? C : mo(x), R = P == null ? C : mo(P), C = new ct(
              X,
              z + "leave",
              x,
              u,
              G
            ), C.target = oe, C.relatedTarget = R, X = null, ac(G) === _ && (ct = new ct(
              M,
              z + "enter",
              P,
              u,
              G
            ), ct.target = R, ct.relatedTarget = oe, X = ct), oe = X, x && P)
              e: {
                for (ct = Eg, M = x, z = P, R = 0, X = M; X; X = ct(X))
                  R++;
                X = 0;
                for (var nt = z; nt; nt = ct(nt))
                  X++;
                for (; 0 < R - X; )
                  M = ct(M), R--;
                for (; 0 < X - R; )
                  z = ct(z), X--;
                for (; R--; ) {
                  if (M === z || z !== null && M === z.alternate) {
                    ct = M;
                    break e;
                  }
                  M = ct(M), z = ct(z);
                }
                ct = null;
              }
            else ct = null;
            x !== null && rh(
              Q,
              C,
              x,
              ct,
              !1
            ), P !== null && oe !== null && rh(
              Q,
              oe,
              P,
              ct,
              !0
            );
          }
        }
        t: {
          if (C = _ ? mo(_) : window, x = C.nodeName && C.nodeName.toLowerCase(), x === "select" || x === "input" && C.type === "file")
            var Qt = Nm;
          else if ($n(C))
            if (ud)
              Qt = yc;
            else {
              Qt = Rp;
              var et = Mp;
            }
          else
            x = C.nodeName, !x || x.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? _ && Sm(_.elementType) && (Qt = Nm) : Qt = Si;
          if (Qt && (Qt = Qt(l, _))) {
            Bm(
              Q,
              Qt,
              u,
              G
            );
            break t;
          }
          et && et(l, C, _), l === "focusout" && _ && C.type === "number" && _.memoizedProps.value != null && cc(C, "number", C.value);
        }
        switch (et = _ ? mo(_) : window, l) {
          case "focusin":
            ($n(et) || et.contentEditable === "true") && (Ti = et, Do = _, $a = null);
            break;
          case "focusout":
            $a = Do = Ti = null;
            break;
          case "mousedown":
            gn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gn = !1, od(Q, u, G);
            break;
          case "selectionchange":
            if (os) break;
          case "keydown":
          case "keyup":
            od(Q, u, G);
        }
        var gt;
        if (Ao)
          t: {
            switch (l) {
              case "compositionstart":
                var bt = "onCompositionStart";
                break t;
              case "compositionend":
                bt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                bt = "onCompositionUpdate";
                break t;
            }
            bt = void 0;
          }
        else
          dc ? nd(l, u) && (bt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (bt = "onCompositionStart");
        bt && (_m && u.locale !== "ko" && (dc || bt !== "onCompositionStart" ? bt === "onCompositionEnd" && dc && (gt = Em()) : (Yu = G, Tm = "value" in Yu ? Yu.value : Yu.textContent, dc = !0)), et = lr(_, bt), 0 < et.length && (bt = new Tp(
          bt,
          l,
          null,
          u,
          G
        ), Q.push({ event: bt, listeners: et }), gt ? bt.data = gt : (gt = Cm(u), gt !== null && (bt.data = gt)))), (gt = Cl ? Op(l, u) : wv(l, u)) && (bt = lr(_, "onBeforeInput"), 0 < bt.length && (et = new Tp(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          G
        ), Q.push({
          event: et,
          listeners: bt
        }), et.data = gt)), Ps(
          Q,
          l,
          _,
          u,
          G
        );
      }
      Tg(Q, n);
    });
  }
  function er(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function lr(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = ol(l, u), s != null && c.unshift(
        er(l, s, r)
      ), s = ol(l, n), s != null && c.push(
        er(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Eg(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function rh(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, T = g.alternate, _ = g.stateNode;
      if (g = g.tag, T !== null && T === c) break;
      g !== 5 && g !== 26 && g !== 27 || _ === null || (T = _, s ? (_ = ol(u, r), _ != null && m.unshift(
        er(u, _, T)
      )) : s || (_ = ol(u, r), _ != null && m.push(
        er(u, _, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Ag = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function Fy(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ag, `
`).replace(Wy, "");
  }
  function ky(l, n) {
    return n = Fy(n), Fy(l) === n;
  }
  function ce(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || wn(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && wn(l, "" + c);
        break;
      case "className":
        Jr(l, "class", c);
        break;
      case "tabIndex":
        Jr(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jr(l, u, c);
        break;
      case "style":
        yp(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          Jr(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = wa("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && ce(l, n, "name", s.name, s, null), ce(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), ce(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), ce(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (ce(l, n, "encType", s.encType, s, null), ce(l, n, "method", s.method, s, null), ce(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = wa("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = dn);
        break;
      case "onScroll":
        c != null && Ut("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ut("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = wa("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ut("beforetoggle", l), Ut("toggle", l), go(l, "popover", c);
        break;
      case "xlinkActuate":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        qu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        qu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        go(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Xv.get(u) || u, go(l, u, c));
    }
  }
  function Iy(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        yp(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(H(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(H(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? wn(l, c) : (typeof c == "number" || typeof c == "bigint") && wn(l, "" + c);
        break;
      case "onScroll":
        c != null && Ut("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ut("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = dn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!mi.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Ql] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break t;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : go(l, u, c);
          }
    }
  }
  function Ol(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ut("error", l), Ut("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(H(137, n));
                default:
                  ce(l, n, r, m, u, null);
              }
          }
        s && ce(l, n, "srcSet", u.srcSet, u, null), c && ce(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ut("invalid", l);
        var g = r = m = s = null, T = null, _ = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var G = u[c];
            if (G != null)
              switch (c) {
                case "name":
                  s = G;
                  break;
                case "type":
                  m = G;
                  break;
                case "checked":
                  T = G;
                  break;
                case "defaultChecked":
                  _ = G;
                  break;
                case "value":
                  r = G;
                  break;
                case "defaultValue":
                  g = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(H(137, n));
                  break;
                default:
                  ce(l, n, c, G, u, null);
              }
          }
        Pf(
          l,
          r,
          g,
          T,
          _,
          m,
          s,
          !1
        );
        return;
      case "select":
        Ut("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (g = u[s], g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                c = g;
              default:
                ce(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? vo(l, !!c, n, !1) : u != null && vo(l, !!c, u, !0);
        return;
      case "textarea":
        Ut("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(H(91));
                break;
              default:
                ce(l, n, m, g, u, null);
            }
        vm(l, c, s, r);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (c = u[T], c != null) && (T === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : ce(l, n, T, c, u, null));
        return;
      case "dialog":
        Ut("beforetoggle", l), Ut("toggle", l), Ut("cancel", l), Ut("close", l);
        break;
      case "iframe":
      case "object":
        Ut("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < cf.length; c++)
          Ut(cf[c], l);
        break;
      case "image":
        Ut("error", l), Ut("load", l);
        break;
      case "details":
        Ut("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ut("error", l), Ut("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in u)
          if (u.hasOwnProperty(_) && (c = u[_], c != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(H(137, n));
              default:
                ce(l, n, _, c, u, null);
            }
        return;
      default:
        if (Sm(n)) {
          for (G in u)
            u.hasOwnProperty(G) && (c = u[G], c !== void 0 && Iy(
              l,
              n,
              G,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (c = u[g], c != null && ce(l, n, g, c, u, null));
  }
  function Py(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, g = null, T = null, _ = null, G = null;
        for (x in u) {
          var Q = u[x];
          if (u.hasOwnProperty(x) && Q != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = Q;
              default:
                c.hasOwnProperty(x) || ce(l, n, x, null, c, Q);
            }
        }
        for (var C in c) {
          var x = c[C];
          if (Q = u[C], c.hasOwnProperty(C) && (x != null || Q != null))
            switch (C) {
              case "type":
                r = x;
                break;
              case "name":
                s = x;
                break;
              case "checked":
                _ = x;
                break;
              case "defaultChecked":
                G = x;
                break;
              case "value":
                m = x;
                break;
              case "defaultValue":
                g = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(H(137, n));
                break;
              default:
                x !== Q && ce(
                  l,
                  n,
                  C,
                  x,
                  c,
                  Q
                );
            }
        }
        If(
          l,
          m,
          g,
          T,
          _,
          G,
          r,
          s
        );
        return;
      case "select":
        x = m = g = C = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                x = T;
              default:
                c.hasOwnProperty(r) || ce(
                  l,
                  n,
                  r,
                  null,
                  c,
                  T
                );
            }
        for (s in c)
          if (r = c[s], T = u[s], c.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && ce(
                  l,
                  n,
                  s,
                  r,
                  c,
                  T
                );
            }
        n = g, u = m, c = x, C != null ? vo(l, !!u, C, !1) : !!c != !!u && (n != null ? vo(l, !!u, n, !0) : vo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        x = C = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                ce(l, n, g, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                x = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(H(91));
                break;
              default:
                s !== r && ce(l, n, m, s, c, r);
            }
        gm(l, C, x);
        return;
      case "option":
        for (var P in u)
          C = u[P], u.hasOwnProperty(P) && C != null && !c.hasOwnProperty(P) && (P === "selected" ? l.selected = !1 : ce(
            l,
            n,
            P,
            null,
            c,
            C
          ));
        for (T in c)
          C = c[T], x = u[T], c.hasOwnProperty(T) && C !== x && (C != null || x != null) && (T === "selected" ? l.selected = C && typeof C != "function" && typeof C != "symbol" : ce(
            l,
            n,
            T,
            C,
            c,
            x
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ct in u)
          C = u[ct], u.hasOwnProperty(ct) && C != null && !c.hasOwnProperty(ct) && ce(l, n, ct, null, c, C);
        for (_ in c)
          if (C = c[_], x = u[_], c.hasOwnProperty(_) && C !== x && (C != null || x != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(H(137, n));
                break;
              default:
                ce(
                  l,
                  n,
                  _,
                  C,
                  c,
                  x
                );
            }
        return;
      default:
        if (Sm(n)) {
          for (var oe in u)
            C = u[oe], u.hasOwnProperty(oe) && C !== void 0 && !c.hasOwnProperty(oe) && Iy(
              l,
              n,
              oe,
              void 0,
              c,
              C
            );
          for (G in c)
            C = c[G], x = u[G], !c.hasOwnProperty(G) || C === x || C === void 0 && x === void 0 || Iy(
              l,
              n,
              G,
              C,
              c,
              x
            );
          return;
        }
    }
    for (var M in u)
      C = u[M], u.hasOwnProperty(M) && C != null && !c.hasOwnProperty(M) && ce(l, n, M, null, c, C);
    for (Q in c)
      C = c[Q], x = u[Q], !c.hasOwnProperty(Q) || C === x || C == null && x == null || ce(l, n, Q, C, c, x);
  }
  function dh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function t0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && dh(m)) {
          for (m = 0, g = s.responseEnd, c += 1; c < u.length; c++) {
            var T = u[c], _ = T.startTime;
            if (_ > g) break;
            var G = T.transferSize, Q = T.initiatorType;
            G && dh(Q) && (T = T.responseEnd, m += G * (T < g ? 1 : (g - _) / (T - _)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var hh = null, mh = null;
  function Zi(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function zg(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function e0(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function ff(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var yh = null;
  function Wv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === yh ? !1 : (yh = l, !0) : (yh = null, !1);
  }
  var ar = typeof setTimeout == "function" ? setTimeout : void 0, Dg = typeof clearTimeout == "function" ? clearTimeout : void 0, Zc = typeof Promise == "function" ? Promise : void 0, Og = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zc < "u" ? function(l) {
    return Zc.resolve(null).then(l).catch(l0);
  } : ar;
  function l0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Cn(l) {
    return l === "head";
  }
  function a0(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Tf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          Lc(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Lc(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[Zn] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Lc(l.ownerDocument.body);
      u = s;
    } while (u);
    Tf(n);
  }
  function Ze(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function nr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nr(u), Zr(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Fv(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Zn])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = ea(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Et(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ea(l.nextSibling), l === null)) return null;
    return l;
  }
  function Mg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = ea(l.nextSibling), l === null)) return null;
    return l;
  }
  function ln(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Li(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function sf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function ea(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var ur = null;
  function ph(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return ea(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Hn(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function rf(l, n, u) {
    switch (n = Zi(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(H(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(H(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(H(454));
        return l;
      default:
        throw Error(H(451));
    }
  }
  function Lc(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Zr(l);
  }
  var ya = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Set();
  function Nl(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Bn = Z.d;
  Z.d = {
    f: kv,
    r: Rg,
    D: q,
    C: $t,
    L: Iv,
    m: n0,
    X: li,
    S: u0,
    M: wi
  };
  function kv() {
    var l = Bn.f(), n = ef();
    return l || n;
  }
  function Rg(l) {
    var n = nc(l);
    n !== null && n.tag === 5 && n.type === "form" ? ue(n) : Bn.r(l);
  }
  var df = typeof document > "u" ? null : document;
  function Fe(l, n, u) {
    var c = df;
    if (c && typeof n == "string" && n) {
      var s = Ea(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), ir.has(s) || (ir.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), Ol(n, "link", l), Wt(n), c.head.appendChild(n)));
    }
  }
  function q(l) {
    Bn.D(l), Fe("dns-prefetch", l, null);
  }
  function $t(l, n) {
    Bn.C(l, n), Fe("preconnect", l, n);
  }
  function Iv(l, n, u) {
    Bn.L(l, n, u);
    var c = df;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Ea(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Ea(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Ea(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Ea(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = xa(l);
          break;
        case "script":
          r = wc(l);
      }
      ya.has(r) || (l = Y(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ya.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Ji(r)) || n === "script" && c.querySelector(yf(r)) || (n = c.createElement("link"), Ol(n, "link", l), Wt(n), c.head.appendChild(n)));
    }
  }
  function n0(l, n) {
    Bn.m(l, n);
    var u = df;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Ea(c) + '"][href="' + Ea(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = wc(l);
      }
      if (!ya.has(r) && (l = Y({ rel: "modulepreload", href: l }, n), ya.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(yf(r)))
              return;
        }
        c = u.createElement("link"), Ol(c, "link", l), Wt(c), u.head.appendChild(c);
      }
    }
  }
  function u0(l, n, u) {
    Bn.S(l, n, u);
    var c = df;
    if (c && l) {
      var s = uc(c).hoistableStyles, r = xa(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          Ji(r)
        ))
          g.loading = 5;
        else {
          l = Y(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ya.get(r)) && gh(l, u);
          var T = m = c.createElement("link");
          Wt(T), Ol(T, "link", l), T._p = new Promise(function(_, G) {
            T.onload = _, T.onerror = G;
          }), T.addEventListener("load", function() {
            g.loading |= 1;
          }), T.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, cr(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, s.set(r, m);
      }
    }
  }
  function li(l, n) {
    Bn.X(l, n);
    var u = df;
    if (u && l) {
      var c = uc(u).hoistableScripts, s = wc(l), r = c.get(s);
      r || (r = u.querySelector(yf(s)), r || (l = Y({ src: l, async: !0 }, n), (n = ya.get(s)) && vh(l, n), r = u.createElement("script"), Wt(r), Ol(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function wi(l, n) {
    Bn.M(l, n);
    var u = df;
    if (u && l) {
      var c = uc(u).hoistableScripts, s = wc(l), r = c.get(s);
      r || (r = u.querySelector(yf(s)), r || (l = Y({ src: l, async: !0, type: "module" }, n), (n = ya.get(s)) && vh(l, n), r = u.createElement("script"), Wt(r), Ol(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function hf(l, n, u, c) {
    var s = (s = si.current) ? Nl(s) : null;
    if (!s) throw Error(H(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = xa(u.href), u = uc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = xa(u.href);
          var r = uc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Ji(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), ya.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ya.set(l, u), r || Ug(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(H(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(H(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = wc(u), u = uc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(H(444, l));
    }
  }
  function xa(l) {
    return 'href="' + Ea(l) + '"';
  }
  function Ji(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function mf(l) {
    return Y({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ug(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Ol(n, "link", u), Wt(n), l.head.appendChild(n));
  }
  function wc(l) {
    return '[src="' + Ea(l) + '"]';
  }
  function yf(l) {
    return "script[async]" + l;
  }
  function i0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ea(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Wt(c), c;
          var s = Y({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Wt(c), Ol(c, "style", s), cr(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = xa(u.href);
          var r = l.querySelector(
            Ji(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Wt(r), r;
          c = mf(u), (s = ya.get(s)) && gh(c, s), r = (l.ownerDocument || l).createElement("link"), Wt(r);
          var m = r;
          return m._p = new Promise(function(g, T) {
            m.onload = g, m.onerror = T;
          }), Ol(r, "link", c), n.state.loading |= 4, cr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = wc(u.src), (s = l.querySelector(
            yf(r)
          )) ? (n.instance = s, Wt(s), s) : (c = u, (s = ya.get(r)) && (c = Y({}, u), vh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Wt(s), Ol(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(H(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, cr(c, u.precedence, l));
    return n.instance;
  }
  function cr(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function gh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function vh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var pf = null;
  function c0(l, n, u) {
    if (pf === null) {
      var c = /* @__PURE__ */ new Map(), s = pf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = pf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Zn] || r[ne] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Sh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function o0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function pa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function pu(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = xa(c.href), r = n.querySelector(
          Ji(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = bh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Wt(r);
          return;
        }
        r = n.ownerDocument || n, c = mf(c), (s = ya.get(s)) && gh(c, s), r = r.createElement("link"), Wt(r);
        var m = r;
        m._p = new Promise(function(g, T) {
          m.onload = g, m.onerror = T;
        }), Ol(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = bh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Ya = 0;
  function f0(l, n) {
    return l.stylesheets && l.count === 0 && Eh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Ya === 0 && (Ya = 62500 * t0());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Ya ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function bh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Eh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Th = null;
  function Eh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Th = /* @__PURE__ */ new Map(), n.forEach(yl, l), Th = null, bh.call(l));
  }
  function yl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Th.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Th.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = bh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var or = {
    $$typeof: Ie,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0
  };
  function s0(l, n, u, c, s, r, m, g, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wf(0), this.hiddenUpdates = Wf(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ah(l, n, u, c, s, r, m, g, T, _, G, Q) {
    return l = new s0(
      l,
      n,
      u,
      m,
      T,
      _,
      G,
      Q,
      g
    ), n = 1, r === !0 && (n |= 24), r = Be(3, null, null, n), l.current = r, r.stateNode = l, n = ps(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, As(r), l;
  }
  function Jc(l) {
    return l ? (l = Ll, l) : Ll;
  }
  function _g(l, n, u, c, s, r) {
    s = Jc(s), c.context === null ? c.context = s : c.pendingContext = s, c = Ju(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Ua(l, c, n), u !== null && (ta(u, l, n), _i(u, l, n));
  }
  function zh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function r0(l, n) {
    zh(l, n), (l = l.alternate) && zh(l, n);
  }
  function Cg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ju(l, 67108864);
      n !== null && ta(n, l, 67108864), r0(l, 67108864);
    }
  }
  function Kc(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ma();
      n = Xr(n);
      var u = ju(l, n);
      u !== null && ta(u, l, n), r0(l, n);
    }
  }
  var al = !0;
  function gu(l, n, u, c) {
    var s = O.T;
    O.T = null;
    var r = Z.p;
    try {
      Z.p = 2, Ml(l, n, u, c);
    } finally {
      Z.p = r, O.T = s;
    }
  }
  function vu(l, n, u, c) {
    var s = O.T;
    O.T = null;
    var r = Z.p;
    try {
      Z.p = 8, Ml(l, n, u, c);
    } finally {
      Z.p = r, O.T = s;
    }
  }
  function Ml(l, n, u, c) {
    if (al) {
      var s = d0(c);
      if (s === null)
        $y(
          l,
          n,
          c,
          Dh,
          u
        ), ai(l, c);
      else if (Pv(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (ai(l, c), n & 4 && -1 < la.indexOf(l)) {
        for (; s !== null; ) {
          var r = nc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = La(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Xl(m);
                      g.entanglements[1] |= T, m &= ~T;
                    }
                    yu(r), (Lt & 6) === 0 && (Kt = zl() + 500, ei(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ju(r, 2), g !== null && ta(g, r, 2), ef(), r0(r, 2);
            }
          if (r = d0(c), r === null && $y(
            l,
            n,
            c,
            Dh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        $y(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function d0(l) {
    return l = Fr(l), gf(l);
  }
  var Dh = null;
  function gf(l) {
    if (Dh = null, l = ac(l), l !== null) {
      var n = Me(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = we(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = $(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Dh = l, null;
  }
  function fr(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Yv()) {
          case Yr:
            return 2;
          case Gr:
            return 8;
          case ri:
          case Gv:
            return 32;
          case fm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = !1, nl = null, Rl = null, ql = null, Ki = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), Ae = [], la = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ai(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        nl = null;
        break;
      case "dragenter":
      case "dragleave":
        Rl = null;
        break;
      case "mouseover":
      case "mouseout":
        ql = null;
        break;
      case "pointerover":
      case "pointerout":
        Ki.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        an.delete(n.pointerId);
    }
  }
  function $c(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = nc(n), n !== null && Cg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Pv(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return nl = $c(
          nl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Rl = $c(
          Rl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return ql = $c(
          ql,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Ki.set(
          r,
          $c(
            Ki.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, an.set(
          r,
          $c(
            an.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Hg(l) {
    var n = ac(l.target);
    if (n !== null) {
      var u = Me(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = we(u), n !== null) {
            l.blockedOn = n, dm(l.priority, function() {
              Kc(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = $(u), n !== null) {
            l.blockedOn = n, dm(l.priority, function() {
              Kc(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function sr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = d0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Wr = c, u.target.dispatchEvent(c), Wr = null;
      } else
        return n = nc(u), n !== null && Cg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Sf(l, n, u) {
    sr(l) && u.delete(n);
  }
  function Bg() {
    vf = !1, nl !== null && sr(nl) && (nl = null), Rl !== null && sr(Rl) && (Rl = null), ql !== null && sr(ql) && (ql = null), Ki.forEach(Sf), an.forEach(Sf);
  }
  function Su(l, n) {
    l.blockedOn === n && (l.blockedOn = null, vf || (vf = !0, J.unstable_scheduleCallback(
      J.unstable_NormalPriority,
      Bg
    )));
  }
  var bf = null;
  function Ng(l) {
    bf !== l && (bf = l, J.unstable_scheduleCallback(
      J.unstable_NormalPriority,
      function() {
        bf === l && (bf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (gf(c || u) === null)
              continue;
            break;
          }
          var r = nc(u);
          r !== null && (l.splice(n, 3), n -= 3, Vo(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Tf(l) {
    function n(T) {
      return Su(T, l);
    }
    nl !== null && Su(nl, l), Rl !== null && Su(Rl, l), ql !== null && Su(ql, l), Ki.forEach(n), an.forEach(n);
    for (var u = 0; u < Ae.length; u++) {
      var c = Ae[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ae.length && (u = Ae[0], u.blockedOn === null); )
      Hg(u), u.blockedOn === null && Ae.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[Ql] || null;
        if (typeof r == "function")
          m || Ng(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Ql] || null)
              g = m.formAction;
            else if (gf(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), Ng(u);
        }
      }
  }
  function h0() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Oh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.render = Oh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(H(409));
    var u = n.current, c = ma();
    _g(u, c, l, n, null, null);
  }, Mh.prototype.unmount = Oh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      _g(l.current, 2, null, l, null, null), ef(), n[hi] = null;
    }
  };
  function Mh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Qr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ae.length && n !== 0 && n < Ae[u].priority; u++) ;
      Ae.splice(u, 0, l), u === 0 && Hg(l);
    }
  };
  var m0 = He.version;
  if (m0 !== "19.2.3")
    throw Error(
      H(
        527,
        m0,
        "19.2.3"
      )
    );
  Z.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(H(188)) : (l = Object.keys(l).join(","), Error(H(268, l)));
    return l = L(n), l = l !== null ? qt(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var qg = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        ec = rr.inject(
          qg
        ), oa = rr;
      } catch {
      }
  }
  return ip.createRoot = function(l, n) {
    if (!te(l)) throw Error(H(299));
    var u = !1, c = "", s = Gd, r = yy, m = jd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Ah(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      h0
    ), l[hi] = n.current, of(l), new Oh(n);
  }, ip.hydrateRoot = function(l, n, u) {
    if (!te(l)) throw Error(H(299));
    var c = !1, s = "", r = Gd, m = yy, g = jd, T = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Ah(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      T,
      r,
      m,
      g,
      h0
    ), n.context = Jc(null), u = n.current, c = ma(), c = Xr(c), s = Ju(c), s.callback = null, Ua(u, s, c), u = c, n.current.lanes = u, ho(n, u), yu(n), l[hi] = n.current, of(l), new Mh(n);
  }, ip.version = "19.2.3", ip;
}
var cp = {};
var _2;
function fE() {
  return _2 || (_2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function J(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function He(t, e, a, i) {
      if (a >= e.length) return i;
      var o = e[a], f = Fe(t) ? t.slice() : Et({}, t);
      return f[o] = He(t[o], e, a + 1, i), f;
    }
    function ee(t, e, a) {
      if (e.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (e[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return H(t, e, a, 0);
      }
    }
    function H(t, e, a, i) {
      var o = e[i], f = Fe(t) ? t.slice() : Et({}, t);
      return i + 1 === e.length ? (f[a[i]] = f[o], Fe(f) ? f.splice(o, 1) : delete f[o]) : f[o] = H(
        t[o],
        e,
        a,
        i + 1
      ), f;
    }
    function te(t, e, a) {
      var i = e[a], o = Fe(t) ? t.slice() : Et({}, t);
      return a + 1 === e.length ? (Fe(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = te(t[i], e, a + 1), o);
    }
    function Me() {
      return !1;
    }
    function we() {
      return null;
    }
    function $() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function F() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function L() {
    }
    function qt() {
    }
    function Y(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function U(t, e, a, i) {
      return new wv(t, e, a, i);
    }
    function tt(t, e) {
      t.context === Df && (rh(t.current, 2, e, t, null, null), Na());
    }
    function Zt(t, e) {
      if (Eu !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, Vs(), Op(
          t.current,
          e,
          a
        ), Na();
      }
    }
    function Je(t) {
      Eu = t;
    }
    function ge(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function se(t) {
      var e = t, a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function Xn(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Ie(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function jl(t) {
      if (se(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function on(t) {
      var e = t.alternate;
      if (!e) {
        if (e = se(t), e === null)
          throw Error("Unable to find node on an unmounted component.");
        return e !== t ? null : t;
      }
      for (var a = t, i = e; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return jl(o), t;
            if (f === i) return jl(o), e;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? t : e;
    }
    function na(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = na(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function cl(t) {
      return t === null || typeof t != "object" ? null : (t = Rg && t[Rg] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function Gt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === df ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case sf:
          return "Fragment";
        case ur:
          return "Profiler";
        case ea:
          return "StrictMode";
        case Lc:
          return "Suspense";
        case ya:
          return "SuspenseList";
        case Bn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Li:
            return "Portal";
          case Hn:
            return t.displayName || "Context";
          case ph:
            return (t._context.displayName || "Context") + ".Consumer";
          case rf:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ir:
            return e = t.displayName || null, e !== null ? e : Gt(t.type) || "Memo";
          case Nl:
            e = t._payload, t = t._init;
            try {
              return Gt(t(e));
            } catch {
            }
        }
      return null;
    }
    function ua(t) {
      return typeof t.tag == "number" ? at(t) : typeof t.name == "string" ? t.name : null;
    }
    function at(t) {
      var e = t.type;
      switch (t.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (e._context.displayName || "Context") + ".Consumer";
        case 10:
          return e.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return e;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Gt(e);
        case 8:
          return e === ea ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof e == "function")
            return e.displayName || e.name || null;
          if (typeof e == "string") return e;
          break;
        case 29:
          if (e = t._debugInfo, e != null) {
            for (var a = e.length - 1; 0 <= a; a--)
              if (typeof e[a].name == "string") return e[a].name;
          }
          if (t.return !== null)
            return at(t.return);
      }
      return null;
    }
    function Pe(t) {
      return { current: t };
    }
    function Xt(t, e) {
      0 > li ? console.error("Unexpected pop.") : (e !== u0[li] && console.error("Unexpected Fiber popped."), t.current = n0[li], n0[li] = null, u0[li] = null, li--);
    }
    function Ht(t, e, a) {
      li++, n0[li] = t.current, u0[li] = a, t.current = e;
    }
    function ia(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function ca(t, e) {
      Ht(xa, e, t), Ht(hf, t, t), Ht(wi, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? eg(e) : oo;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = eg(e), e = Pu(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = am;
                break;
              case "math":
                e = Ov;
                break;
              default:
                e = oo;
            }
      }
      a = a.toLowerCase(), a = pm(null, a), a = {
        context: e,
        ancestorInfo: a
      }, Xt(wi, t), Ht(wi, a, t);
    }
    function O(t) {
      Xt(wi, t), Xt(hf, t), Xt(xa, t);
    }
    function Z() {
      return ia(wi.current);
    }
    function w(t) {
      t.memoizedState !== null && Ht(Ji, t, t);
      var e = ia(wi.current), a = t.type, i = Pu(e.context, a);
      a = pm(e.ancestorInfo, a), i = { context: i, ancestorInfo: a }, e !== i && (Ht(hf, t, t), Ht(wi, i, t));
    }
    function ot(t) {
      hf.current === t && (Xt(wi, t), Xt(hf, t)), Ji.current === t && (Xt(Ji, t), ap._currentValue = Nr);
    }
    function pt() {
    }
    function Ke() {
      if (mf === 0) {
        Ug = console.log, wc = console.info, yf = console.warn, i0 = console.error, cr = console.group, gh = console.groupCollapsed, vh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: pt,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      mf++;
    }
    function le() {
      if (mf--, mf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Et({}, t, { value: Ug }),
          info: Et({}, t, { value: wc }),
          warn: Et({}, t, { value: yf }),
          error: Et({}, t, { value: i0 }),
          group: Et({}, t, { value: cr }),
          groupCollapsed: Et({}, t, { value: gh }),
          groupEnd: Et({}, t, { value: vh })
        });
      }
      0 > mf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Bt(t) {
      var e = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = e, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), e = t.indexOf(`
`), e !== -1 && (t = t.slice(e + 1)), e = t.indexOf("react_stack_bottom_frame"), e !== -1 && (e = t.lastIndexOf(
        `
`,
        e
      )), e !== -1)
        t = t.slice(0, e);
      else return "";
      return t;
    }
    function Rt(t) {
      if (pf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          pf = e && e[1] || "", c0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + pf + t + c0;
    }
    function Al(t, e) {
      if (!t || Sh) return "";
      var a = o0.get(t);
      if (a !== void 0) return a;
      Sh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = q.H, q.H = null, Ke();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var S = function() {
                  throw Error();
                };
                if (Object.defineProperty(S.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(S, []);
                  } catch (K) {
                    var B = K;
                  }
                  Reflect.construct(t, [], S);
                } else {
                  try {
                    S.call();
                  } catch (K) {
                    B = K;
                  }
                  t.call(S.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (K) {
                  B = K;
                }
                (S = t()) && typeof S.catch == "function" && S.catch(function() {
                });
              }
            } catch (K) {
              if (K && B && typeof K.stack == "string")
                return [K.stack, B.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), A = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < A.length && !A[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === A.length)
            for (f = p.length - 1, d = A.length - 1; 1 <= f && 0 <= d && p[f] !== A[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== A[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== A[d]) {
                    var D = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), typeof t == "function" && o0.set(t, D), D;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Sh = !1, q.H = i, le(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? Rt(p) : "", typeof t == "function" && o0.set(t, p), p;
    }
    function si(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Rt(t.type);
        case 16:
          return Rt("Lazy");
        case 13:
          return t.child !== e && e !== null ? Rt("Suspense Fallback") : Rt("Suspense");
        case 19:
          return Rt("SuspenseList");
        case 0:
        case 15:
          return Al(t.type, !1);
        case 11:
          return Al(t.type.render, !1);
        case 1:
          return Al(t.type, !0);
        case 31:
          return Rt("Activity");
        default:
          return "";
      }
    }
    function wf(t) {
      try {
        var e = "", a = null;
        do {
          e += si(t, a);
          var i = t._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var A = Bt(p), D = A.lastIndexOf(`
`), S = D === -1 ? A : A.slice(D + 1);
                    if (S.indexOf(h) !== -1) {
                      var B = `
` + S;
                      break t;
                    }
                  }
                  B = Rt(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + B;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (K) {
        return `
Error generating stack: ` + K.message + `
` + K.stack;
      }
    }
    function Jf(t) {
      return (t = t ? t.displayName || t.name : "") ? Rt(t) : "";
    }
    function Hu() {
      if (pa === null) return null;
      var t = pa._debugOwner;
      return t != null ? ua(t) : null;
    }
    function um() {
      if (pa === null) return "";
      var t = pa;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += Rt(t.type);
            break;
          case 13:
            e += Rt("Suspense");
            break;
          case 19:
            e += Rt("SuspenseList");
            break;
          case 31:
            e += Rt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += Jf(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += Jf(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var i = a._debugStack;
            if (t && i) {
              var o = Bt(i);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + Bt(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function I(t, e, a, i, o, f, d) {
      var h = pa;
      Kf(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, i, o, f, d)
        ) : e(a, i, o, f, d);
      } finally {
        Kf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Kf(t) {
      q.getCurrentStack = t === null ? null : um, pu = !1, pa = t;
    }
    function $f(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Qn(t) {
      try {
        return Pi(t), !1;
      } catch {
        return !0;
      }
    }
    function Pi(t) {
      return "" + t;
    }
    function ae(t, e) {
      if (Qn(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), Pi(t);
    }
    function im(t, e) {
      if (Qn(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), Pi(t);
    }
    function qr(t) {
      if (Qn(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          $f(t)
        ), Pi(t);
    }
    function cm(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Kc = e.inject(t), al = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function re(t) {
      if (typeof r0 == "function" && Cg(t), al && typeof al.setStrictMode == "function")
        try {
          al.setStrictMode(Kc, t);
        } catch (e) {
          gu || (gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function om(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (d0(t) / Dh | 0) | 0;
    }
    function tc(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
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
          return 64;
        case 128:
          return 128;
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), t;
      }
    }
    function xr(t, e, a) {
      var i = t.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = tc(i) : (d &= h, d !== 0 ? o = tc(d) : a || (a = h & ~t, a !== 0 && (o = tc(a))))) : (h = i & ~f, h !== 0 ? o = tc(h) : d !== 0 ? o = tc(d) : a || (a = i & ~t, a !== 0 && (o = tc(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function zl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Yv(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
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
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Yr() {
      var t = vf;
      return vf <<= 1, (vf & 62914560) === 0 && (vf = 4194304), t;
    }
    function Gr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function ri(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Gv(t, e, a, i, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var A = 31 - Ml(a), D = 1 << A;
        h[A] = 0, y[A] = -1;
        var S = p[A];
        if (S !== null)
          for (p[A] = null, A = 0; A < S.length; A++) {
            var B = S[A];
            B !== null && (B.lane &= -536870913);
          }
        a &= ~D;
      }
      i !== 0 && fm(t, i, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function fm(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var i = 31 - Ml(e);
      t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | a & 261930;
    }
    function op(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var i = 31 - Ml(a), o = 1 << i;
        o & e | t[i] & e && (t[i] |= e), a &= ~o;
      }
    }
    function fp(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : ec(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function ec(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function oa(t, e, a) {
      if (vu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ml(a), o = 1 << i;
          t[i].add(e), a &= ~o;
        }
    }
    function Bu(t, e) {
      if (vu)
        for (var a = t.pendingUpdatersLaneMap, i = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - Ml(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Xl(t) {
      return t &= -t, nl < t ? Rl < t ? (t & 134217727) !== 0 ? ql : Ki : Rl : nl;
    }
    function sp() {
      var t = $t.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? ql : hh(t.type));
    }
    function rp(t, e) {
      var a = $t.p;
      try {
        return $t.p = t, e();
      } finally {
        $t.p = a;
      }
    }
    function sm(t) {
      delete t[Ae], delete t[la], delete t[$c], delete t[Pv], delete t[Hg];
    }
    function Nu(t) {
      var e = t[Ae];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[ai] || a[Ae]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = Xc(t); t !== null; ) {
              if (a = t[Ae])
                return a;
              t = Xc(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function fn(t) {
      if (t = t[Ae] || t[ai]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function di(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function La(t) {
      var e = t[sr];
      return e || (e = t[sr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Ge(t) {
      t[Sf] = !0;
    }
    function sn(t, e) {
      ro(t, e), ro(t + "Capture", e);
    }
    function ro(t, e) {
      Su[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), Su[t] = e;
      var a = t.toLowerCase();
      for (bf[a] = t, t === "onDoubleClick" && (bf.ondblclick = t), t = 0; t < e.length; t++)
        Bg.add(e[t]);
    }
    function lc(t, e) {
      Ng[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Wf(t) {
      return Ya.call(Oh, t) ? !0 : Ya.call(h0, t) ? !1 : Tf.test(t) ? Oh[t] = !0 : (h0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function ho(t, e, a) {
      if (Wf(e)) {
        if (!t.hasAttribute(e)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (ae(a, e), t === "" + a ? a : t);
      }
    }
    function jr(t, e, a) {
      if (Wf(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var i = e.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          ae(a, e), t.setAttribute(e, "" + a);
        }
    }
    function Ff(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        ae(a, e), t.setAttribute(e, "" + a);
      }
    }
    function Vn(t, e, a, i) {
      if (i === null) t.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        ae(i, a), t.setAttributeNS(e, a, "" + i);
      }
    }
    function ba(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return qr(t), t;
        default:
          return "";
      }
    }
    function Xr(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function rm(t, e, a) {
      var i = Object.getOwnPropertyDescriptor(
        t.constructor.prototype,
        e
      );
      if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            qr(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            qr(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function Qr(t) {
      if (!t._valueTracker) {
        var e = Xr(t) ? "checked" : "value";
        t._valueTracker = rm(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function dm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), i = "";
      return t && (i = Xr(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== a ? (e.setValue(t), !0) : !1;
    }
    function rn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function ne(t) {
      return t.replace(
        Mh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Ql(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || qg || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Hu() || "A component",
        e.type
      ), qg = !0), e.value === void 0 || e.defaultValue === void 0 || m0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Hu() || "A component",
        e.type
      ), m0 = !0);
    }
    function hi(t, e, a, i, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ae(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ba(e)) : t.value !== "" + ba(e) && (t.value = "" + ba(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? hm(t, d, ba(e)) : a != null ? hm(t, d, ba(a)) : i != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ae(h, "name"), t.name = "" + ba(h)) : t.removeAttribute("name");
    }
    function Vr(t, e, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ae(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          Qr(t);
          return;
        }
        a = a != null ? "" + ba(a) : "", e = e != null ? "" + ba(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = h ? t.checked : !!i, t.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ae(d, "name"), t.name = d), Qr(t);
    }
    function hm(t, e, a) {
      e === "number" && rn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function dp(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? nr.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), rr = !0);
    }
    function mm() {
      var t = Hu();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function Zn(t, e, a, i) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && i && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + ba(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, i && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Zr(t, e) {
      for (t = 0; t < c.length; t++) {
        var a = c[t];
        if (e[a] != null) {
          var i = Fe(e[a]);
          e.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            mm()
          ) : !e.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            mm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function ac(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Hu() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function nc(t, e, a) {
      if (e != null && (e = "" + ba(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + ba(a) : "";
    }
    function mo(t, e, a, i) {
      if (e == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Fe(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), e = a;
      }
      a = ba(e), t.defaultValue = a, i = t.textContent, i === a && i !== "" && i !== null && (t.value = i), Qr(t);
    }
    function uc(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? uc(t.children[0], e) : t;
    }
    function Wt(t) {
      return "  " + "  ".repeat(t);
    }
    function ic(t) {
      return "+ " + "  ".repeat(t);
    }
    function mi(t) {
      return "- " + "  ".repeat(t);
    }
    function yi(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return t.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return t = t.type, t.displayName || t.name || null;
        case 11:
          return t = t.type.render, t.displayName || t.name || null;
        case 1:
          return t = t.type, t.displayName || t.name || null;
        default:
          return null;
      }
    }
    function Ln(t, e) {
      return r.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function Lr(t, e, a) {
      var i = 120 - 2 * a;
      if (e === null)
        return ic(a) + Ln(t, i) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), ic(a) + Ln(t, i) + `
` + mi(a) + Ln(e, i) + `
`;
      }
      return Wt(a) + Ln(t, i) + `
`;
    }
    function wr(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function yo(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (Fe(t)) return "[...]";
          if (t.$$typeof === ln)
            return (e = Gt(t.type)) ? "<" + e + ">" : "<...>";
          var a = wr(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), e -= i.length - 2, o = yo(
                  t[i],
                  15 > e ? e : 15
                ), e -= o.length, 0 > e) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (e = t.displayName || t.name) ? "function " + e : "function";
        default:
          return String(t);
      }
    }
    function po(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + yo(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function go(t, e, a) {
      var i = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = po(
            e[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + t + `>
` : 0 < i ? a + "<" + t + " " + o.join(" ") + `>
` : a + "<" + t + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function Jr(t, e, a) {
      var i = "", o = Et({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = yo(t[f], d);
          e.hasOwnProperty(f) ? (d = yo(e[f], d), i += ic(a) + f + ": " + h + `
`, i += mi(a) + f + ": " + d + `
`) : i += ic(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += mi(a) + y + ": " + t + `
`);
      return i;
    }
    function qu(t, e, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += go(
          t,
          e,
          Wt(i)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var A = po(
                p,
                h
              );
              h = po(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && wr(p) === "Object" && wr(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < A.indexOf("...") || -1 < h.indexOf("...")) ? o += Wt(i + 1) + d + `={{
` + Jr(
                p,
                y,
                i + 2
              ) + Wt(i + 1) + `}}
` : (o += ic(i + 1) + d + "=" + A + `
`, o += mi(i + 1) + d + "=" + h + `
`);
            } else
              o += Wt(i + 1) + d + "=" + po(e[d], h) + `
`;
          }
        f.forEach(function(D) {
          if (D !== "children") {
            var S = 120 - 2 * (i + 1) - D.length - 1;
            o += mi(i + 1) + D + "=" + po(a[D], S) + `
`;
          }
        }), o = o === "" ? Wt(i) + "<" + t + `>
` : Wt(i) + "<" + t + `
` + o + Wt(i) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += Lr(f, "" + t, i + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + Lr("" + e, null, i + 1) : o + Lr("" + e, void 0, i + 1)), o;
    }
    function Ta(t, e) {
      var a = yi(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += Ta(t, e), t = t.sibling;
        return a;
      }
      return Wt(e) + "<" + a + `>
`;
    }
    function Kr(t, e) {
      var a = uc(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Wt(e) + `...
` + Kr(a, e + 1);
      a = "";
      var i = t.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Wt(e) + "<" + f + `>
`, e++);
        }
      if (i = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        i = Lr(o, t.serverProps, e), e++;
      else if (f = yi(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          i = e;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = po(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Wt(i) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (i = go(
            f,
            o,
            ic(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = qu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += Kr(d, e), f++) : p += Ta(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Wt(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (mi(e) + Ln(f, 120 - 2 * e) + `
`) : p + go(
          f.type,
          f.props,
          mi(e)
        );
      return a + i + p;
    }
    function ym(t) {
      try {
        return `

` + Kr(t, 0);
      } catch {
        return "";
      }
    }
    function $r(t, e, a) {
      for (var i = e, o = null, f = 0; i; )
        i === t && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === e ? a : i === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? ym(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function pm(t, e) {
      var a = Et({}, t || G), i = { tag: e };
      return g.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), T.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, e === "form" && (a.formTag = i), e === "a" && (a.aTagInScope = i), e === "button" && (a.buttonTagInScope = i), e === "nobr" && (a.nobrTagInScope = i), e === "p" && (a.pTagInButtonScope = i), e === "li" && (a.listItemTagAutoclosing = i), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = i), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function kf(t, e, a) {
      switch (e) {
        case "select":
          return t === "hr" || t === "option" || t === "optgroup" || t === "script" || t === "template" || t === "#text";
        case "optgroup":
          return t === "option" || t === "#text";
        case "option":
          return t === "#text";
        case "tr":
          return t === "th" || t === "td" || t === "style" || t === "script" || t === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return t === "tr" || t === "style" || t === "script" || t === "template";
        case "colgroup":
          return t === "col" || t === "template";
        case "table":
          return t === "caption" || t === "colgroup" || t === "tbody" || t === "tfoot" || t === "thead" || t === "style" || t === "script" || t === "template";
        case "head":
          return t === "base" || t === "basefont" || t === "bgsound" || t === "link" || t === "meta" || t === "title" || t === "noscript" || t === "noframes" || t === "style" || t === "script" || t === "template";
        case "html":
          if (a) break;
          return t === "head" || t === "body" || t === "frameset";
        case "frameset":
          return t === "frame";
        case "#document":
          if (!a) return t === "html";
      }
      switch (t) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6";
        case "rp":
        case "rt":
          return _.indexOf(e) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return e == null;
        case "head":
          return a || e === null;
        case "html":
          return a && e === "#document" || e === null;
        case "body":
          return a && (e === "#document" || e === "html") || e === null;
      }
      return !0;
    }
    function jv(t, e) {
      switch (t) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e.pTagInButtonScope;
        case "form":
          return e.formTag || e.pTagInButtonScope;
        case "li":
          return e.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return e.dlItemTagAutoclosing;
        case "button":
          return e.buttonTagInScope;
        case "a":
          return e.aTagInScope;
        case "nobr":
          return e.nobrTagInScope;
      }
      return null;
    }
    function Ea(t, e) {
      for (; t; ) {
        switch (t.tag) {
          case 5:
          case 26:
          case 27:
            if (t.type === e) return t;
        }
        t = t.return;
      }
      return null;
    }
    function If(t, e) {
      e = e || G;
      var a = e.current;
      if (e = (a = kf(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : jv(t, e), e = a || e, !e) return !0;
      var i = e.tag;
      if (e = String(!!a) + "|" + t + "|" + i, Q[e]) return !1;
      Q[e] = !0;
      var o = (e = pa) ? Ea(e.return, i) : null, f = e !== null && o !== null ? $r(o, e, null) : "", d = "<" + t + ">";
      return a ? (a = "", i === "table" && t === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || I(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Pf(t, e, a) {
      if (a || kf("#text", e, !1))
        return !0;
      if (a = "#text|" + e, Q[a]) return !1;
      Q[a] = !0;
      var i = (a = pa) ? Ea(a, e) : null;
      return a = a !== null && i !== null ? $r(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(t) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        e,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        e,
        a
      ), !1;
    }
    function cc(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function vo(t) {
      return t.replace(M, function(e, a) {
        return a.toUpperCase();
      });
    }
    function gm(t, e, a) {
      var i = e.indexOf("--") === 0;
      i || (-1 < e.indexOf("-") ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        vo(e.replace(oe, "ms-"))
      )) : ct.test(e) ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !z.test(a) || X.hasOwnProperty(a) && X[a] || (X[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(z, "")
      )), typeof a == "number" && (isNaN(a) ? nt || (nt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || Qt || (Qt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, a) : typeof a != "number" || a === 0 || et.has(e) ? e === "float" ? t.cssFloat = a : (im(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function vm(t, e, a) {
      if (e != null && typeof e != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (e && Object.freeze(e), t = t.style, a != null) {
        if (e) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !e.hasOwnProperty(o))
                for (var f = C[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = C[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = C[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var A = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                A == null || typeof A == "boolean" || A === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var D in a)
          !a.hasOwnProperty(D) || e != null && e.hasOwnProperty(D) || (D.indexOf("--") === 0 ? t.setProperty(D, "") : D === "float" ? t.cssFloat = "" : t[D] = "");
        for (var S in e)
          p = e[S], e.hasOwnProperty(S) && a[S] !== p && gm(t, S, p);
      } else
        for (i in e)
          e.hasOwnProperty(i) && gm(t, i, e[i]);
    }
    function wn(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
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
    function hp(t) {
      return wt.get(t) || t;
    }
    function mp(t, e) {
      if (Ya.call(Rh, e) && Rh[e])
        return !0;
      if (q2.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = xg.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Rh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Rh[e] = !0;
      }
      if (N2.test(e)) {
        if (t = e.toLowerCase(), t = xg.hasOwnProperty(t) ? t : null, t == null) return Rh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Rh[e] = !0);
      }
      return !0;
    }
    function yp(t, e) {
      var a = [], i;
      for (i in e)
        mp(t, i) || a.push(i);
      e = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      );
    }
    function Sm(t, e, a, i) {
      if (Ya.call(Ga, e) && Ga[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Ga[e] = !0;
      if (typeof a == "function" && (t === "form" && e === "action" || t === "input" && e === "formAction" || t === "button" && e === "formAction"))
        return !0;
      if (i != null) {
        if (t = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(e))
          return !0;
        if (i = t.hasOwnProperty(o) ? t[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            e,
            i
          ), Ga[e] = !0;
        if (hS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), Ga[e] = !0;
      } else if (hS.test(e))
        return x2.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), Ga[e] = !0;
      if (Y2.test(e) || G2.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Ga[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Ga[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Ga[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), Ga[e] = !0;
      if (Nn.hasOwnProperty(o)) {
        if (o = Nn[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), Ga[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), Ga[e] = !0;
      switch (e) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (e) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = e.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                e,
                e,
                a,
                e
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                e,
                e,
                a,
                e,
                e,
                e
              ), Ga[e] = !0);
          }
        case "function":
        case "symbol":
          return Ga[e] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (e) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              e,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              e,
              a
            ), Ga[e] = !0;
          }
      }
      return !0;
    }
    function Xv(t, e, a) {
      var i = [], o;
      for (o in e)
        Sm(t, o, e[o], a) || i.push(o);
      e = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      );
    }
    function ts(t) {
      return j2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function wa() {
    }
    function dn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function Wr(t) {
      var e = fn(t);
      if (e && (t = e.stateNode)) {
        var a = t[la] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (hi(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), e = a.name, a.type === "radio" && e != null) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (ae(e, "name"), a = a.querySelectorAll(
                'input[name="' + ne(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var i = a[e];
                if (i !== t && i.form === t.form) {
                  var o = i[la] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  hi(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (e = 0; e < a.length; e++)
                i = a[e], i.form === t.form && dm(i);
            }
            break t;
          case "textarea":
            nc(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && Zn(t, !!a.multiple, e, !1);
        }
      }
    }
    function Fr(t, e, a) {
      if (t1) return t(e, a);
      t1 = !0;
      try {
        var i = t(e);
        return i;
      } finally {
        if (t1 = !1, (Uh !== null || _h !== null) && (Na(), Uh && (e = Uh, t = _h, _h = Uh = null, Wr(e), t)))
          for (e = 0; e < t.length; e++) Wr(t[e]);
      }
    }
    function Jn(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var i = a[la] || null;
      if (i === null) return null;
      a = i[e];
      t: switch (e) {
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
          (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + e + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function oc() {
      if (Yg) return Yg;
      var t, e = l1, a = e.length, i, o = "value" in Ef ? Ef.value : Ef.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (i = 1; i <= d && e[a - i] === o[f - i]; i++) ;
      return Yg = o.slice(t, 1 < i ? 1 - i : void 0);
    }
    function es(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function So() {
      return !0;
    }
    function bm() {
      return !1;
    }
    function ol(t) {
      function e(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? So : bm, this.isPropagationStopped = bm, this;
      }
      return Et(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = So);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = So);
        },
        persist: function() {
        },
        isPersistent: So
      }), e;
    }
    function xu(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = I2[t]) ? !!e[t] : !1;
    }
    function ls() {
      return xu;
    }
    function bo(t, e) {
      switch (t) {
        case "keyup":
          return sT.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== gS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Yu(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Tm(t, e) {
      switch (t) {
        case "compositionend":
          return Yu(e);
        case "keypress":
          return e.which !== SS ? null : (TS = !0, bS);
        case "textInput":
          return t = e.data, t === bS && TS ? null : t;
        default:
          return null;
      }
    }
    function kr(t, e) {
      if (Ch)
        return t === "compositionend" || !i1 && bo(t, e) ? (t = oc(), Yg = l1 = Ef = null, Ch = !1, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
              return e.char;
            if (e.which)
              return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return vS && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function Em(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!dT[t.type] : e === "textarea";
    }
    function Ir(t) {
      if (!$i) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function as(t, e, a, i) {
      Uh ? _h ? _h.push(i) : _h = [i] : Uh = i, e = Un(e, "onChange"), 0 < e.length && (a = new Gg(
        "onChange",
        "change",
        null,
        a,
        i
      ), t.push({ event: a, listeners: e }));
    }
    function pp(t) {
      It(t, 0);
    }
    function Dl(t) {
      var e = di(t);
      if (dm(e)) return t;
    }
    function pi(t, e) {
      if (t === "change") return e;
    }
    function ns() {
      b0 && (b0.detachEvent("onpropertychange", To), T0 = b0 = null);
    }
    function To(t) {
      if (t.propertyName === "value" && Dl(T0)) {
        var e = [];
        as(
          e,
          T0,
          t,
          dn(t)
        ), Fr(pp, e);
      }
    }
    function Qv(t, e, a) {
      t === "focusin" ? (ns(), b0 = e, T0 = a, b0.attachEvent("onpropertychange", To)) : t === "focusout" && ns();
    }
    function Am(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Dl(T0);
    }
    function zm(t, e) {
      if (t === "click") return Dl(e);
    }
    function us(t, e) {
      if (t === "input" || t === "change")
        return Dl(e);
    }
    function Pr(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function Eo(t, e) {
      if (ja(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), i = Object.keys(e);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Ya.call(e, o) || !ja(t[o], e[o]))
          return !1;
      }
      return !0;
    }
    function gp(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function vp(t, e) {
      var a = gp(t);
      t = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = t + a.textContent.length, t <= e && i >= e)
            return { node: a, offset: e - t };
          t = i;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = gp(a);
      }
    }
    function Sp(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Sp(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function td(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = rn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = rn(t.document);
      }
      return e;
    }
    function Dm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function bp(t, e, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      o1 || Hh == null || Hh !== rn(i) || (i = Hh, "selectionStart" in i && Dm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), E0 && Eo(E0, i) || (E0 = i, i = Un(c1, "onSelect"), 0 < i.length && (e = new Gg(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: i }), e.target = Hh)));
    }
    function fc(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function sc(t) {
      if (f1[t]) return f1[t];
      if (!Bh[t]) return t;
      var e = Bh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in AS)
          return f1[t] = e[a];
      return t;
    }
    function hn(t, e) {
      RS.set(t, e), sn(e, [t]);
    }
    function Tp(t) {
      for (var e = Xg, a = 0; a < t.length; a++) {
        var i = t[a];
        if (typeof i == "object" && i !== null)
          if (Fe(i) && i.length === 2 && typeof i[0] == "string") {
            if (e !== Xg && e !== m1)
              return d1;
            e = m1;
          } else return d1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || e !== Xg && e !== h1)
            return d1;
          e = h1;
        }
      }
      return e;
    }
    function Om(t, e, a, i) {
      for (var o in t)
        Ya.call(t, o) && o[0] !== "_" && Kn(o, t[o], e, a, i);
    }
    function Kn(t, e, a, i, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === ln) {
              var f = Gt(e.type) || "…", d = e.key;
              e = e.props;
              var h = Object.keys(e), y = h.length;
              if (d == null && y === 0) {
                e = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                e = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + t,
                "<" + f
              ]), d !== null && Kn(
                "key",
                d,
                a,
                i + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!Fe(e.children) || 0 < e.children.length) && (t = !0) : Ya.call(e, p) && p[0] !== "_" && Kn(
                  p,
                  e[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                t ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(e), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Tp(e), p === h1 || p === Xg) {
                e = JSON.stringify(e);
                break;
              } else if (p === m1) {
                for (a.push([
                  o + "  ".repeat(i) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], Kn(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (e.status === "fulfilled") {
                if (f = a.length, Kn(
                  t,
                  e.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, Kn(
                t,
                e.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + t,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(e)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + t,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Om(e, a, i + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === ST ? "…" : JSON.stringify(e);
          break;
        case "undefined":
          e = "undefined";
          break;
        case "boolean":
          e = e ? "true" : "false";
          break;
        default:
          e = String(e);
      }
      a.push([
        o + "  ".repeat(i) + t,
        e
      ]);
    }
    function Ep(t, e, a, i) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          Qg + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [Qg + o, "…"],
                [Vg + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === ln) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Gt(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [Qg + o, d],
                        [Vg + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        CS + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Ep(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    CS + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              Kn(f, d, a, i, Qg), Kn(f, h, a, i, Vg);
            }
            o = !1;
          }
        } else
          a.push([
            Vg + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function mn(t) {
      jt = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function Ja(t, e, a, i) {
      ze && (zf.start = e, zf.end = a, Wc.color = "warning", Wc.tooltipText = i, Wc.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          i,
          zf
        )
      ) : performance.measure(i, zf));
    }
    function ed(t, e, a) {
      Ja(t, e, a, "Reconnect");
    }
    function ld(t, e, a, i, o) {
      var f = at(t);
      if (f !== null && ze) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [bT], p = Ep(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Af && (d.lanes & o) === 0 && 100 < t.actualDuration ? (Af = !0, y[0] = TT, Wc.color = "warning", Wc.tooltipText = HS) : (Wc.color = i, Wc.tooltipText = f), Wc.properties = y, zf.start = e, zf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            zf
          )
        ) : performance.measure(
          "​" + f,
          zf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            bu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          bu,
          void 0,
          i
        );
      }
    }
    function Mm(t, e, a, i) {
      if (ze) {
        var o = at(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && Kn("key", t.key, d, 0, ""), t.memoizedProps !== null && Om(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: bu,
                tooltipText: t.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, t)
          ) : performance.measure("​" + o, t);
        }
      }
    }
    function yn(t, e, a, i, o) {
      if (o !== null) {
        if (ze) {
          var f = at(t);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && Kn("key", t.key, i, 0, ""), t.memoizedProps !== null && Om(t.memoizedProps, i, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: bu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (t = t._debugTask) ? t.run(
              performance.measure.bind(
                performance,
                "​" + f,
                e
              )
            ) : performance.measure("​" + f, e);
          }
        }
      } else
        f = at(t), f !== null && ze && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            bu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          bu,
          void 0,
          o
        ));
    }
    function Vv(t, e, a, i) {
      if (ze && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            jt,
            xt,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          jt,
          xt,
          o
        );
      }
    }
    function Ap(t, e, a, i) {
      !ze || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          jt,
          xt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        jt,
        xt,
        a
      ));
    }
    function zp(t, e, a, i) {
      !ze || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          jt,
          xt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        jt,
        xt,
        a
      ));
    }
    function Zv(t, e, a, i, o, f) {
      if (ze && !(e <= t)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "primary-dark",
              track: jt,
              trackGroup: xt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function Rm(t, e, a, i) {
      !ze || e <= t || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          jt,
          xt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        jt,
        xt,
        "error"
      ));
    }
    function Lv(t, e, a, i) {
      !ze || e <= t || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          jt,
          xt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        jt,
        xt,
        "secondary-light"
      ));
    }
    function Dp(t, e, a, i, o) {
      if (ze && !(e <= t)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "error",
              track: jt,
              trackGroup: xt,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Um(t, e, a) {
      !ze || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        jt,
        xt,
        "secondary-dark"
      );
    }
    function ad() {
      for (var t = Nh, e = y1 = Nh = 0; e < t; ) {
        var a = Tu[e];
        Tu[e++] = null;
        var i = Tu[e];
        Tu[e++] = null;
        var o = Tu[e];
        Tu[e++] = null;
        var f = Tu[e];
        if (Tu[e++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && _m(a, o, f);
      }
    }
    function Ao(t, e, a, i) {
      Tu[Nh++] = t, Tu[Nh++] = e, Tu[Nh++] = a, Tu[Nh++] = i, y1 |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
    }
    function rc(t, e, a, i) {
      return Ao(t, e, a, i), is(t);
    }
    function Cl(t, e) {
      return Ao(t, null, null, e), is(t);
    }
    function _m(t, e, a) {
      t.lanes |= a;
      var i = t.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & A0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - Ml(a), t = f.hiddenUpdates, i = t[o], i === null ? t[o] = [e] : i.push(e), e.lane = a | 536870912), f) : null;
    }
    function is(t) {
      if (F0 > YT)
        throw Rr = F0 = 0, k0 = $1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Rr > GT && (Rr = 0, k0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && en(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && en(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function gi(t) {
      if (Eu === null) return t;
      var e = Eu(t);
      return e === void 0 ? t : e.current;
    }
    function nd(t) {
      if (Eu === null) return t;
      var e = Eu(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = gi(t.render), t.render !== e) ? (e = { $$typeof: rf, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function Cm(t, e) {
      if (Eu === null) return !1;
      var a = t.elementType;
      e = e.type;
      var i = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (i = !0);
          break;
        case 0:
          (typeof e == "function" || o === Nl) && (i = !0);
          break;
        case 11:
          (o === rf || o === Nl) && (i = !0);
          break;
        case 14:
        case 15:
          (o === ir || o === Nl) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (t = Eu(a), t !== void 0 && t === Eu(e)));
    }
    function dc(t) {
      Eu !== null && typeof WeakSet == "function" && (qh === null && (qh = /* @__PURE__ */ new WeakSet()), qh.add(t));
    }
    function Op(t, e, a) {
      do {
        var i = t, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Eu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Eu(y), y !== void 0 && (a.has(y) ? i = !0 : e.has(y) && (h === 1 ? i = !0 : p = !0))), qh !== null && (qh.has(t) || o !== null && qh.has(o)) && (i = !0), i && (t._debugNeedsRemount = !0), (i || p) && (o = Cl(t, 2), o !== null && dt(o, t, 2)), f === null || i || Op(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function wv(t, e, a, i) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, BS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Hm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function $n(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = U(
        t.tag,
        e,
        t.key,
        t.mode
      ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a._debugOwner = t._debugOwner, a._debugStack = t._debugStack, a._debugTask = t._debugTask, a._debugHookTypes = t._debugHookTypes, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a.selfBaseDuration = t.selfBaseDuration, a.treeBaseDuration = t.treeBaseDuration, a._debugInfo = t._debugInfo, a._debugNeedsRemount = t._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = gi(t.type);
          break;
        case 1:
          a.type = gi(t.type);
          break;
        case 11:
          a.type = nd(t.type);
      }
      return a;
    }
    function Bm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function hc(t, e, a, i, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Hm(t) && (d = 1), h = gi(h);
      else if (typeof t == "string")
        d = Z(), d = Tg(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case Bn:
            return e = U(31, a, e, o), e.elementType = Bn, e.lanes = f, e;
          case sf:
            return mc(
              a.children,
              o,
              f,
              e
            );
          case ea:
            d = 8, o |= ga, o |= ni;
            break;
          case ur:
            return t = a, i = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = U(12, t, e, i | At), e.elementType = ur, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case Lc:
            return e = U(13, a, e, o), e.elementType = Lc, e.lanes = f, e;
          case ya:
            return e = U(19, a, e, o), e.elementType = ya, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Hn:
                  d = 10;
                  break t;
                case ph:
                  d = 9;
                  break t;
                case rf:
                  d = 11, h = nd(h);
                  break t;
                case ir:
                  d = 14;
                  break t;
                case Nl:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : Fe(t) ? a = "array" : t !== void 0 && t.$$typeof === ln ? (a = "<" + (Gt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = i ? ua(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = U(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = i, e;
    }
    function vi(t, e, a) {
      return e = hc(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function mc(t, e, a, i) {
      return t = U(7, t, i, e), t.lanes = a, t;
    }
    function zo(t, e, a) {
      return t = U(6, t, null, e), t.lanes = a, t;
    }
    function Nm(t) {
      var e = U(18, null, null, rt);
      return e.stateNode = t, e;
    }
    function ud(t, e, a) {
      return e = U(
        4,
        t.children !== null ? t.children : [],
        t.key,
        e
      ), e.lanes = a, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    function Vl(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = p1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: wf(e)
        }, p1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: wf(e)
      };
    }
    function pn(t, e) {
      Si(), xh[Yh++] = z0, xh[Yh++] = Zg, Zg = t, z0 = e;
    }
    function qm(t, e, a) {
      Si(), Au[zu++] = kc, Au[zu++] = Ic, Au[zu++] = hr, hr = t;
      var i = kc;
      t = Ic;
      var o = 32 - Ml(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Ml(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, kc = 1 << 32 - Ml(e) + o | a << o | i, Ic = f + t;
      } else
        kc = 1 << f | a << o | i, Ic = t;
    }
    function id(t) {
      Si(), t.return !== null && (pn(t, 1), qm(t, 1, 0));
    }
    function cd(t) {
      for (; t === Zg; )
        Zg = xh[--Yh], xh[Yh] = null, z0 = xh[--Yh], xh[Yh] = null;
      for (; t === hr; )
        hr = Au[--zu], Au[zu] = null, Ic = Au[--zu], Au[zu] = null, kc = Au[--zu], Au[zu] = null;
    }
    function Mp() {
      return Si(), hr !== null ? { id: kc, overflow: Ic } : null;
    }
    function Rp(t, e) {
      Si(), Au[zu++] = kc, Au[zu++] = Ic, Au[zu++] = hr, kc = e.id, Ic = e.overflow, hr = t;
    }
    function Si() {
      Nt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function yc(t, e) {
      if (t.return === null) {
        if (qn === null)
          qn = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (qn.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          qn.distanceFromLeaf > e && (qn.distanceFromLeaf = e);
        }
        return qn;
      }
      var a = yc(
        t.return,
        e + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === t ? (a = a[a.length - 1], a.distanceFromLeaf > e && (a.distanceFromLeaf = e), a) : (e = {
        fiber: t,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: e
      }, a.push(e), e);
    }
    function Up() {
      Nt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Hl(t, e) {
      Wi || (t = yc(t, 0), t.serverProps = null, e !== null && (e = gg(e), t.serverTail.push(e)));
    }
    function Ka(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = qn;
      throw i !== null && (qn = null, a = ym(i)), os(
        Vl(
          Error(
            "Hydration failed because the server rendered " + (e ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          t
        )
      ), g1;
    }
    function xm(t) {
      var e = t.stateNode, a = t.type, i = t.memoizedProps;
      switch (e[Ae] = t, e[la] = i, Pl(a, i), a) {
        case "dialog":
          st("cancel", e), st("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          st("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < I0.length; a++)
            st(I0[a], e);
          break;
        case "source":
          st("error", e);
          break;
        case "img":
        case "image":
        case "link":
          st("error", e), st("load", e);
          break;
        case "details":
          st("toggle", e);
          break;
        case "input":
          lc("input", i), st("invalid", e), Ql(e, i), Vr(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          dp(e, i);
          break;
        case "select":
          lc("select", i), st("invalid", e), Zr(e, i);
          break;
        case "textarea":
          lc("textarea", i), st("invalid", e), ac(e, i), mo(
            e,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || i.suppressHydrationWarning === !0 || Gy(e.textContent, a) ? (i.popover != null && (st("beforetoggle", e), st("toggle", e)), i.onScroll != null && st("scroll", e), i.onScrollEnd != null && st("scrollend", e), i.onClick != null && (e.onclick = wa), e = !0) : e = !1, e || Ka(t, !0);
    }
    function Ym(t) {
      for (aa = t.return; aa; )
        switch (aa.tag) {
          case 5:
          case 31:
          case 13:
            Du = !1;
            return;
          case 27:
          case 3:
            Du = !0;
            return;
          default:
            aa = aa.return;
        }
    }
    function pc(t) {
      if (t !== aa) return !1;
      if (!Nt)
        return Ym(t), Nt = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || ef(t.type, t.memoizedProps)), a = !a), a && De) {
        for (a = De; a; ) {
          var i = yc(t, 0), o = gg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? nf(a) : qa(a.nextSibling);
        }
        Ka(t);
      }
      if (Ym(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        De = nf(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        De = nf(t);
      } else
        e === 27 ? (e = De, Vi(t.type) ? (t = iS, iS = null, De = t) : De = e) : De = aa ? qa(t.stateNode.nextSibling) : null;
      return !0;
    }
    function bi() {
      De = aa = null, Wi = Nt = !1;
    }
    function cs() {
      var t = Of;
      return t !== null && (Za === null ? Za = t : Za.push.apply(
        Za,
        t
      ), Of = null), t;
    }
    function os(t) {
      Of === null ? Of = [t] : Of.push(t);
    }
    function Ti() {
      var t = qn;
      if (t !== null) {
        qn = null;
        for (var e = ym(t); 0 < t.children.length; )
          t = t.children[0];
        I(t.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            e
          );
        });
      }
    }
    function Do() {
      Gh = Lg = null, jh = !1;
    }
    function $a(t, e, a) {
      Ht(v1, e._currentValue, t), e._currentValue = a, Ht(S1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== qS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = qS;
    }
    function gn(t, e) {
      t._currentValue = v1.current;
      var a = S1.current;
      Xt(S1, e), t._currentRenderer = a, Xt(v1, e);
    }
    function od(t, e, a) {
      for (; t !== null; ) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Gu(t, e, a, i) {
      var o = t.child;
      for (o !== null && (o.return = t); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          t: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < e.length; y++)
              if (h.context === e[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), od(
                  f.return,
                  a,
                  t
                ), i || (d = null);
                break t;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), od(
            d,
            a,
            t
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === t) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function vn(t, e, a, i) {
      t = null;
      for (var o = e, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            ja(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === Ji.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ap) : t = [ap]);
        }
        o = o.return;
      }
      t !== null && Gu(
        e,
        t,
        a,
        i
      ), e.flags |= 262144;
    }
    function Oo(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!ja(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function Ei(t) {
      Lg = t, Gh = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Jt(t) {
      return jh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Gm(Lg, t);
    }
    function fs(t, e) {
      return Lg === null && Ei(t), Gm(t, e);
    }
    function Gm(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, Gh === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Gh = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else Gh = Gh.next = e;
      return a;
    }
    function fd() {
      return {
        controller: new zT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function gc(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function ss(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && DT(OT, function() {
        t.controller.abort();
      });
    }
    function Wn(t, e, a) {
      (t & 127) !== 0 ? 0 > Fi && (Fi = gl(), O0 = wg(e), b1 = e, a != null && (T1 = at(a)), (Vt & (_l | Gn)) !== Gl && (Le = !0, Rf = D0), t = lf(), e = mu(), t !== Xh || e !== M0 ? Xh = -1.1 : e !== null && (Rf = D0), pr = t, M0 = e) : (t & 4194048) !== 0 && 0 > Ou && (Ou = gl(), R0 = wg(e), xS = e, a != null && (YS = at(a)), 0 > lo) && (t = lf(), e = mu(), (t !== _f || e !== gr) && (_f = -1.1), Uf = t, gr = e);
    }
    function _p(t) {
      if (0 > Fi) {
        Fi = gl(), O0 = t._debugTask != null ? t._debugTask : null, (Vt & (_l | Gn)) !== Gl && (Rf = D0);
        var e = lf(), a = mu();
        e !== Xh || a !== M0 ? Xh = -1.1 : a !== null && (Rf = D0), pr = e, M0 = a;
      }
      0 > Ou && (Ou = gl(), R0 = t._debugTask != null ? t._debugTask : null, 0 > lo) && (t = lf(), e = mu(), (t !== _f || e !== gr) && (_f = -1.1), Uf = t, gr = e);
    }
    function Fn() {
      var t = mr;
      return mr = 0, t;
    }
    function Mo(t) {
      var e = mr;
      return mr = t, e;
    }
    function Zl(t) {
      var e = mr;
      return mr += t, e;
    }
    function vc() {
      ft = it = -1.1;
    }
    function be() {
      var t = it;
      return it = -1.1, t;
    }
    function fl(t) {
      0 <= t && (it = t);
    }
    function Wa() {
      var t = xe;
      return xe = -0, t;
    }
    function Aa(t) {
      0 <= t && (xe = t);
    }
    function za() {
      var t = Ce;
      return Ce = null, t;
    }
    function Fa() {
      var t = Le;
      return Le = !1, t;
    }
    function ju(t) {
      Xa = gl(), 0 > t.actualStartTime && (t.actualStartTime = Xa);
    }
    function sd(t) {
      if (0 <= Xa) {
        var e = gl() - Xa;
        t.actualDuration += e, t.selfBaseDuration = e, Xa = -1;
      }
    }
    function rs(t) {
      if (0 <= Xa) {
        var e = gl() - Xa;
        t.actualDuration += e, Xa = -1;
      }
    }
    function Ll() {
      if (0 <= Xa) {
        var t = gl(), e = t - Xa;
        Xa = -1, mr += e, xe += e, ft = t;
      }
    }
    function Cp(t) {
      Ce === null && (Ce = []), Ce.push(t), to === null && (to = []), to.push(t);
    }
    function Be() {
      Xa = gl(), 0 > it && (it = Xa);
    }
    function Sc(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function Xu(t, e) {
      if (_0 === null) {
        var a = _0 = [];
        A1 = 0, vr = Yy(), Qh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return A1++, e.then(jm, jm), e;
    }
    function jm() {
      if (--A1 === 0 && (-1 < Ou || (lo = -1.1), _0 !== null)) {
        Qh !== null && (Qh.status = "fulfilled");
        var t = _0;
        _0 = null, vr = 0, Qh = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function rd(t, e) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return t.then(
        function() {
          i.status = "fulfilled", i.value = e;
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Qu() {
      var t = Sr.current;
      return t !== null ? t : pe.pooledCache;
    }
    function Ro(t, e) {
      e === null ? Ht(Sr, Sr.current, t) : Ht(Sr, e.pool, t);
    }
    function Xm() {
      var t = Qu();
      return t === null ? null : { parent: pl._currentValue, pool: t };
    }
    function dd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Qm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Da(t, e, a) {
      q.actQueue !== null && (q.didUsePromise = !0);
      var i = t.thenables;
      if (a = i[a], a === void 0 ? i.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then(wa, wa), e = a), e._debugInfo === void 0) {
        t = performance.now(), i = e.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: t,
          end: t,
          value: e
        };
        e._debugInfo = [{ awaited: o }], e.status !== "fulfilled" && e.status !== "rejected" && (t = function() {
          o.end = performance.now();
        }, e.then(t, t));
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, ds(t), t;
        default:
          if (typeof e.status == "string")
            e.then(wa, wa);
          else {
            if (t = pe, t !== null && 100 < t.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            t = e, t.status = "pending", t.then(
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, ds(t), t;
          }
          throw Tr = e, Y0 = !0, Vh;
      }
    }
    function Oa(t) {
      try {
        return CT(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Tr = e, Y0 = !0, Vh) : e;
      }
    }
    function bc() {
      if (Tr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Tr;
      return Tr = null, Y0 = !1, t;
    }
    function ds(t) {
      if (t === Vh || t === Pg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function je(t) {
      var e = zt;
      return t != null && (zt = e === null ? t : e.concat(t)), e;
    }
    function fa() {
      var t = zt;
      if (t != null) {
        for (var e = t.length - 1; 0 <= e; e--)
          if (t[e].name != null) {
            var a = t[e].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function wl(t, e, a) {
      for (var i = Object.keys(t.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = vi(t, a.mode, 0), e._debugInfo = zt, e.return = a), I(
            e,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function Sn(t) {
      var e = G0;
      return G0 += 1, Zh === null && (Zh = dd()), Da(Zh, t, e);
    }
    function sa(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function bn(t, e) {
      throw e.$$typeof === Mg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ka(t, e) {
      var a = fa();
      a !== null ? a.run(
        bn.bind(null, t, e)
      ) : bn(t, e);
    }
    function Vm(t, e) {
      var a = at(t) || "Component";
      ab[a] || (ab[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        e,
        e,
        e
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        e,
        e,
        a,
        e,
        a
      ));
    }
    function Uo(t, e) {
      var a = fa();
      a !== null ? a.run(
        Vm.bind(null, t, e)
      ) : Vm(t, e);
    }
    function hd(t, e) {
      var a = at(t) || "Component";
      nb[a] || (nb[a] = !0, e = String(e), t.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        e
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        e,
        a
      ));
    }
    function hs(t, e) {
      var a = fa();
      a !== null ? a.run(
        hd.bind(null, t, e)
      ) : hd(t, e);
    }
    function sl(t) {
      function e(v, b) {
        if (t) {
          var E = v.deletions;
          E === null ? (v.deletions = [b], v.flags |= 16) : E.push(b);
        }
      }
      function a(v, b) {
        if (!t) return null;
        for (; b !== null; )
          e(v, b), b = b.sibling;
        return null;
      }
      function i(v) {
        for (var b = /* @__PURE__ */ new Map(); v !== null; )
          v.key !== null ? b.set(v.key, v) : b.set(v.index, v), v = v.sibling;
        return b;
      }
      function o(v, b) {
        return v = $n(v, b), v.index = 0, v.sibling = null, v;
      }
      function f(v, b, E) {
        return v.index = E, t ? (E = v.alternate, E !== null ? (E = E.index, E < b ? (v.flags |= 67108866, b) : E) : (v.flags |= 67108866, b)) : (v.flags |= 1048576, b);
      }
      function d(v) {
        return t && v.alternate === null && (v.flags |= 67108866), v;
      }
      function h(v, b, E, j) {
        return b === null || b.tag !== 6 ? (b = zo(
          E,
          v.mode,
          j
        ), b.return = v, b._debugOwner = v, b._debugTask = v._debugTask, b._debugInfo = zt, b) : (b = o(b, E), b.return = v, b._debugInfo = zt, b);
      }
      function y(v, b, E, j) {
        var W = E.type;
        return W === sf ? (b = A(
          v,
          b,
          E.props.children,
          j,
          E.key
        ), wl(E, b, v), b) : b !== null && (b.elementType === W || Cm(b, E) || typeof W == "object" && W !== null && W.$$typeof === Nl && Oa(W) === b.type) ? (b = o(b, E.props), sa(b, E), b.return = v, b._debugOwner = E._owner, b._debugInfo = zt, b) : (b = vi(E, v.mode, j), sa(b, E), b.return = v, b._debugInfo = zt, b);
      }
      function p(v, b, E, j) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = ud(E, v.mode, j), b.return = v, b._debugInfo = zt, b) : (b = o(b, E.children || []), b.return = v, b._debugInfo = zt, b);
      }
      function A(v, b, E, j, W) {
        return b === null || b.tag !== 7 ? (b = mc(
          E,
          v.mode,
          j,
          W
        ), b.return = v, b._debugOwner = v, b._debugTask = v._debugTask, b._debugInfo = zt, b) : (b = o(b, E), b.return = v, b._debugInfo = zt, b);
      }
      function D(v, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = zo(
            "" + b,
            v.mode,
            E
          ), b.return = v, b._debugOwner = v, b._debugTask = v._debugTask, b._debugInfo = zt, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case ln:
              return E = vi(
                b,
                v.mode,
                E
              ), sa(E, b), E.return = v, v = je(b._debugInfo), E._debugInfo = zt, zt = v, E;
            case Li:
              return b = ud(
                b,
                v.mode,
                E
              ), b.return = v, b._debugInfo = zt, b;
            case Nl:
              var j = je(b._debugInfo);
              return b = Oa(b), v = D(v, b, E), zt = j, v;
          }
          if (Fe(b) || cl(b))
            return E = mc(
              b,
              v.mode,
              E,
              null
            ), E.return = v, E._debugOwner = v, E._debugTask = v._debugTask, v = je(b._debugInfo), E._debugInfo = zt, zt = v, E;
          if (typeof b.then == "function")
            return j = je(b._debugInfo), v = D(
              v,
              Sn(b),
              E
            ), zt = j, v;
          if (b.$$typeof === Hn)
            return D(
              v,
              fs(v, b),
              E
            );
          ka(v, b);
        }
        return typeof b == "function" && Uo(v, b), typeof b == "symbol" && hs(v, b), null;
      }
      function S(v, b, E, j) {
        var W = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return W !== null ? null : h(v, b, "" + E, j);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case ln:
              return E.key === W ? (W = je(E._debugInfo), v = y(
                v,
                b,
                E,
                j
              ), zt = W, v) : null;
            case Li:
              return E.key === W ? p(v, b, E, j) : null;
            case Nl:
              return W = je(E._debugInfo), E = Oa(E), v = S(
                v,
                b,
                E,
                j
              ), zt = W, v;
          }
          if (Fe(E) || cl(E))
            return W !== null ? null : (W = je(E._debugInfo), v = A(
              v,
              b,
              E,
              j,
              null
            ), zt = W, v);
          if (typeof E.then == "function")
            return W = je(E._debugInfo), v = S(
              v,
              b,
              Sn(E),
              j
            ), zt = W, v;
          if (E.$$typeof === Hn)
            return S(
              v,
              b,
              fs(v, E),
              j
            );
          ka(v, E);
        }
        return typeof E == "function" && Uo(v, E), typeof E == "symbol" && hs(v, E), null;
      }
      function B(v, b, E, j, W) {
        if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
          return v = v.get(E) || null, h(b, v, "" + j, W);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case ln:
              return E = v.get(
                j.key === null ? E : j.key
              ) || null, v = je(j._debugInfo), b = y(
                b,
                E,
                j,
                W
              ), zt = v, b;
            case Li:
              return v = v.get(
                j.key === null ? E : j.key
              ) || null, p(b, v, j, W);
            case Nl:
              var yt = je(j._debugInfo);
              return j = Oa(j), b = B(
                v,
                b,
                E,
                j,
                W
              ), zt = yt, b;
          }
          if (Fe(j) || cl(j))
            return E = v.get(E) || null, v = je(j._debugInfo), b = A(
              b,
              E,
              j,
              W,
              null
            ), zt = v, b;
          if (typeof j.then == "function")
            return yt = je(j._debugInfo), b = B(
              v,
              b,
              E,
              Sn(j),
              W
            ), zt = yt, b;
          if (j.$$typeof === Hn)
            return B(
              v,
              b,
              E,
              fs(b, j),
              W
            );
          ka(b, j);
        }
        return typeof j == "function" && Uo(b, j), typeof j == "symbol" && hs(b, j), null;
      }
      function K(v, b, E, j) {
        if (typeof E != "object" || E === null) return j;
        switch (E.$$typeof) {
          case ln:
          case Li:
            qt(v, b, E);
            var W = E.key;
            if (typeof W != "string") break;
            if (j === null) {
              j = /* @__PURE__ */ new Set(), j.add(W);
              break;
            }
            if (!j.has(W)) {
              j.add(W);
              break;
            }
            I(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                W
              );
            });
            break;
          case Nl:
            E = Oa(E), K(v, b, E, j);
        }
        return j;
      }
      function k(v, b, E, j) {
        for (var W = null, yt = null, ut = null, lt = b, Tt = b = 0, Oe = null; lt !== null && Tt < E.length; Tt++) {
          lt.index > Tt ? (Oe = lt, lt = null) : Oe = lt.sibling;
          var il = S(
            v,
            lt,
            E[Tt],
            j
          );
          if (il === null) {
            lt === null && (lt = Oe);
            break;
          }
          W = K(
            v,
            il,
            E[Tt],
            W
          ), t && lt && il.alternate === null && e(v, lt), b = f(il, b, Tt), ut === null ? yt = il : ut.sibling = il, ut = il, lt = Oe;
        }
        if (Tt === E.length)
          return a(v, lt), Nt && pn(v, Tt), yt;
        if (lt === null) {
          for (; Tt < E.length; Tt++)
            lt = D(v, E[Tt], j), lt !== null && (W = K(
              v,
              lt,
              E[Tt],
              W
            ), b = f(
              lt,
              b,
              Tt
            ), ut === null ? yt = lt : ut.sibling = lt, ut = lt);
          return Nt && pn(v, Tt), yt;
        }
        for (lt = i(lt); Tt < E.length; Tt++)
          Oe = B(
            lt,
            v,
            Tt,
            E[Tt],
            j
          ), Oe !== null && (W = K(
            v,
            Oe,
            E[Tt],
            W
          ), t && Oe.alternate !== null && lt.delete(
            Oe.key === null ? Tt : Oe.key
          ), b = f(
            Oe,
            b,
            Tt
          ), ut === null ? yt = Oe : ut.sibling = Oe, ut = Oe);
        return t && lt.forEach(function(so) {
          return e(v, so);
        }), Nt && pn(v, Tt), yt;
      }
      function Se(v, b, E, j) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var W = null, yt = null, ut = b, lt = b = 0, Tt = null, Oe = null, il = E.next(); ut !== null && !il.done; lt++, il = E.next()) {
          ut.index > lt ? (Tt = ut, ut = null) : Tt = ut.sibling;
          var so = S(v, ut, il.value, j);
          if (so === null) {
            ut === null && (ut = Tt);
            break;
          }
          Oe = K(
            v,
            so,
            il.value,
            Oe
          ), t && ut && so.alternate === null && e(v, ut), b = f(so, b, lt), yt === null ? W = so : yt.sibling = so, yt = so, ut = Tt;
        }
        if (il.done)
          return a(v, ut), Nt && pn(v, lt), W;
        if (ut === null) {
          for (; !il.done; lt++, il = E.next())
            ut = D(v, il.value, j), ut !== null && (Oe = K(
              v,
              ut,
              il.value,
              Oe
            ), b = f(
              ut,
              b,
              lt
            ), yt === null ? W = ut : yt.sibling = ut, yt = ut);
          return Nt && pn(v, lt), W;
        }
        for (ut = i(ut); !il.done; lt++, il = E.next())
          Tt = B(
            ut,
            v,
            lt,
            il.value,
            j
          ), Tt !== null && (Oe = K(
            v,
            Tt,
            il.value,
            Oe
          ), t && Tt.alternate !== null && ut.delete(
            Tt.key === null ? lt : Tt.key
          ), b = f(
            Tt,
            b,
            lt
          ), yt === null ? W = Tt : yt.sibling = Tt, yt = Tt);
        return t && ut.forEach(function(eE) {
          return e(v, eE);
        }), Nt && pn(v, lt), W;
      }
      function Yt(v, b, E, j) {
        if (typeof E == "object" && E !== null && E.type === sf && E.key === null && (wl(E, null, v), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case ln:
              var W = je(E._debugInfo);
              t: {
                for (var yt = E.key; b !== null; ) {
                  if (b.key === yt) {
                    if (yt = E.type, yt === sf) {
                      if (b.tag === 7) {
                        a(
                          v,
                          b.sibling
                        ), j = o(
                          b,
                          E.props.children
                        ), j.return = v, j._debugOwner = E._owner, j._debugInfo = zt, wl(E, j, v), v = j;
                        break t;
                      }
                    } else if (b.elementType === yt || Cm(
                      b,
                      E
                    ) || typeof yt == "object" && yt !== null && yt.$$typeof === Nl && Oa(yt) === b.type) {
                      a(
                        v,
                        b.sibling
                      ), j = o(b, E.props), sa(j, E), j.return = v, j._debugOwner = E._owner, j._debugInfo = zt, v = j;
                      break t;
                    }
                    a(v, b);
                    break;
                  } else e(v, b);
                  b = b.sibling;
                }
                E.type === sf ? (j = mc(
                  E.props.children,
                  v.mode,
                  j,
                  E.key
                ), j.return = v, j._debugOwner = v, j._debugTask = v._debugTask, j._debugInfo = zt, wl(E, j, v), v = j) : (j = vi(
                  E,
                  v.mode,
                  j
                ), sa(j, E), j.return = v, j._debugInfo = zt, v = j);
              }
              return v = d(v), zt = W, v;
            case Li:
              t: {
                for (W = E, E = W.key; b !== null; ) {
                  if (b.key === E)
                    if (b.tag === 4 && b.stateNode.containerInfo === W.containerInfo && b.stateNode.implementation === W.implementation) {
                      a(
                        v,
                        b.sibling
                      ), j = o(
                        b,
                        W.children || []
                      ), j.return = v, v = j;
                      break t;
                    } else {
                      a(v, b);
                      break;
                    }
                  else e(v, b);
                  b = b.sibling;
                }
                j = ud(
                  W,
                  v.mode,
                  j
                ), j.return = v, v = j;
              }
              return d(v);
            case Nl:
              return W = je(E._debugInfo), E = Oa(E), v = Yt(
                v,
                b,
                E,
                j
              ), zt = W, v;
          }
          if (Fe(E))
            return W = je(E._debugInfo), v = k(
              v,
              b,
              E,
              j
            ), zt = W, v;
          if (cl(E)) {
            if (W = je(E._debugInfo), yt = cl(E), typeof yt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ut = yt.call(E);
            return ut === E ? (v.tag !== 0 || Object.prototype.toString.call(v.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ut) !== "[object Generator]") && (eb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), eb = !0) : E.entries !== yt || M1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), M1 = !0), v = Se(
              v,
              b,
              ut,
              j
            ), zt = W, v;
          }
          if (typeof E.then == "function")
            return W = je(E._debugInfo), v = Yt(
              v,
              b,
              Sn(E),
              j
            ), zt = W, v;
          if (E.$$typeof === Hn)
            return Yt(
              v,
              b,
              fs(v, E),
              j
            );
          ka(v, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (W = "" + E, b !== null && b.tag === 6 ? (a(
          v,
          b.sibling
        ), j = o(b, W), j.return = v, v = j) : (a(v, b), j = zo(
          W,
          v.mode,
          j
        ), j.return = v, j._debugOwner = v, j._debugTask = v._debugTask, j._debugInfo = zt, v = j), d(v)) : (typeof E == "function" && Uo(v, E), typeof E == "symbol" && hs(v, E), a(v, b));
      }
      return function(v, b, E, j) {
        var W = zt;
        zt = null;
        try {
          G0 = 0;
          var yt = Yt(
            v,
            b,
            E,
            j
          );
          return Zh = null, yt;
        } catch (Oe) {
          if (Oe === Vh || Oe === Pg) throw Oe;
          var ut = U(29, Oe, null, v.mode);
          ut.lanes = j, ut.return = v;
          var lt = ut._debugInfo = zt;
          if (ut._debugOwner = v._debugOwner, ut._debugTask = v._debugTask, lt != null) {
            for (var Tt = lt.length - 1; 0 <= Tt; Tt--)
              if (typeof lt[Tt].stack == "string") {
                ut._debugOwner = lt[Tt], ut._debugTask = lt[Tt].debugTask;
                break;
              }
          }
          return ut;
        } finally {
          zt = W;
        }
      };
    }
    function de(t, e) {
      var a = Fe(t);
      return t = !a && typeof cl(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function _t(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function kn(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function tl(t) {
      return {
        lane: t,
        tag: ib,
        payload: null,
        callback: null,
        next: null
      };
    }
    function In(t, e, a) {
      var i = t.updateQueue;
      if (i === null) return null;
      if (i = i.shared, U1 === i && !fb) {
        var o = at(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), fb = !0;
      }
      return (Vt & _l) !== Gl ? (o = i.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), i.pending = e, e = is(t), _m(t, null, a), e) : (Ao(t, i, e, a), is(t));
    }
    function Ia(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes, a |= i, e.lanes = a, op(t, a);
      }
    }
    function ms(t, e) {
      var a = t.updateQueue, i = t.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = e : f = f.next = e;
        } else o = f = e;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    function _o() {
      if (_1) {
        var t = Qh;
        if (t !== null) throw t;
      }
    }
    function Pn(t, e, a, i) {
      _1 = !1;
      var o = t.updateQueue;
      Cf = !1, U1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var A = t.alternate;
        A !== null && (A = A.updateQueue, h = A.lastBaseUpdate, h !== d && (h === null ? A.firstBaseUpdate = p : h.next = p, A.lastBaseUpdate = y));
      }
      if (f !== null) {
        var D = o.baseState;
        d = 0, A = p = y = null, h = f;
        do {
          var S = h.lane & -536870913, B = S !== h.lane;
          if (B ? (Dt & S) === S : (i & S) === S) {
            S !== 0 && S === vr && (_1 = !0), A !== null && (A = A.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              S = t;
              var K = h, k = e, Se = a;
              switch (K.tag) {
                case cb:
                  if (K = K.payload, typeof K == "function") {
                    jh = !0;
                    var Yt = K.call(
                      Se,
                      D,
                      k
                    );
                    if (S.mode & ga) {
                      re(!0);
                      try {
                        K.call(Se, D, k);
                      } finally {
                        re(!1);
                      }
                    }
                    jh = !1, D = Yt;
                    break t;
                  }
                  D = K;
                  break t;
                case R1:
                  S.flags = S.flags & -65537 | 128;
                case ib:
                  if (Yt = K.payload, typeof Yt == "function") {
                    if (jh = !0, K = Yt.call(
                      Se,
                      D,
                      k
                    ), S.mode & ga) {
                      re(!0);
                      try {
                        Yt.call(Se, D, k);
                      } finally {
                        re(!1);
                      }
                    }
                    jh = !1;
                  } else K = Yt;
                  if (K == null) break t;
                  D = Et({}, D, K);
                  break t;
                case ob:
                  Cf = !0;
              }
            }
            S = h.callback, S !== null && (t.flags |= 64, B && (t.flags |= 8192), B = o.callbacks, B === null ? o.callbacks = [S] : B.push(S));
          } else
            B = {
              lane: S,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, A === null ? (p = A = B, y = D) : A = A.next = B, d |= S;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            B = h, h = B.next, B.next = null, o.lastBaseUpdate = B, o.shared.pending = null;
          }
        } while (!0);
        A === null && (y = D), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = A, f === null && (o.shared.lanes = 0), Nf |= d, t.lanes = d, t.memoizedState = D;
      }
      U1 = null;
    }
    function Ai(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function Zm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          Ai(a[t], e);
    }
    function Co(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          Ai(a[t], e);
    }
    function md(t, e) {
      var a = Ii;
      Ht(ev, a, t), Ht(Lh, e, t), Ii = a | e.baseLanes;
    }
    function Vu(t) {
      Ht(ev, Ii, t), Ht(
        Lh,
        Lh.current,
        t
      );
    }
    function Tn(t) {
      Ii = ev.current, Xt(Lh, t), Xt(ev, t);
    }
    function Jl(t) {
      var e = t.alternate;
      Ht(
        ul,
        ul.current & wh,
        t
      ), Ht(xn, t, t), Mu === null && (e === null || Lh.current !== null || e.memoizedState !== null) && (Mu = t);
    }
    function En(t) {
      Ht(ul, ul.current, t), Ht(xn, t, t), Mu === null && (Mu = t);
    }
    function yd(t) {
      t.tag === 22 ? (Ht(ul, ul.current, t), Ht(xn, t, t), Mu === null && (Mu = t)) : tu(t);
    }
    function tu(t) {
      Ht(ul, ul.current, t), Ht(
        xn,
        xn.current,
        t
      );
    }
    function rl(t) {
      Xt(xn, t), Mu === t && (Mu = null), Xt(ul, t);
    }
    function Tc(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || Fs(a) || Xy(a)))
            return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    function ht() {
      var t = N;
      Uu === null ? Uu = [t] : Uu.push(t);
    }
    function V() {
      var t = N;
      if (Uu !== null && (uo++, Uu[uo] !== t)) {
        var e = at(mt);
        if (!sb.has(e) && (sb.add(e), Uu !== null)) {
          for (var a = "", i = 0; i <= uo; i++) {
            var o = Uu[i], f = i === uo ? t : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            e,
            a
          );
        }
      }
    }
    function Zu(t) {
      t == null || Fe(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        N,
        typeof t
      );
    }
    function ys() {
      var t = at(mt);
      db.has(t) || (db.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function Ne() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Lm(t, e) {
      if (Q0) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          N
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        N,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!ja(t[a], e[a])) return !1;
      return !0;
    }
    function wm(t, e, a, i, o, f) {
      ao = f, mt = e, Uu = t !== null ? t._debugHookTypes : null, uo = -1, Q0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = at(mt), C1.has(f) || (C1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, q.H = t !== null && t.memoizedState !== null ? B1 : Uu !== null ? hb : H1, Ar = f = (e.mode & ga) !== rt;
      var d = z1(a, i, o);
      if (Ar = !1, Kh && (d = ps(
        e,
        a,
        i,
        o
      )), f) {
        re(!0);
        try {
          d = ps(
            e,
            a,
            i,
            o
          );
        } finally {
          re(!1);
        }
      }
      return Xe(t, e), d;
    }
    function Xe(t, e) {
      e._debugHookTypes = Uu, e.dependencies === null ? no !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: no
      }) : e.dependencies._debugThenableState = no, q.H = V0;
      var a = ye !== null && ye.next !== null;
      if (ao = 0, Uu = N = vl = ye = mt = null, uo = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), av = !1, X0 = 0, no = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Sl || (t = t.dependencies, t !== null && Oo(t) && (Sl = !0)), Y0 ? (Y0 = !1, t = !0) : t = !1, t && (e = at(e) || "Unknown", rb.has(e) || C1.has(e) || (rb.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function ps(t, e, a, i) {
      mt = t;
      var o = 0;
      do {
        if (Kh && (no = null), X0 = 0, Kh = !1, o >= BT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Q0 = !1, vl = ye = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        uo = -1, q.H = mb, f = z1(e, a, i);
      } while (Kh);
      return f;
    }
    function gs() {
      var t = q.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? bs(e) : e, t = t.useState()[0], (ye !== null ? ye.memoizedState : null) !== t && (mt.flags |= 1024), e;
    }
    function Ec() {
      var t = nv !== 0;
      return nv = 0, t;
    }
    function vs(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & ni) !== rt ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function zi(t) {
      if (av) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        av = !1;
      }
      ao = 0, Uu = vl = ye = mt = null, uo = -1, N = null, Kh = !1, X0 = nv = 0, no = null;
    }
    function $e() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vl === null ? mt.memoizedState = vl = t : vl = vl.next = t, vl;
    }
    function Ft() {
      if (ye === null) {
        var t = mt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = ye.next;
      var e = vl === null ? mt.memoizedState : vl.next;
      if (e !== null)
        vl = e, ye = t;
      else {
        if (t === null)
          throw mt.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        ye = t, t = {
          memoizedState: ye.memoizedState,
          baseState: ye.baseState,
          baseQueue: ye.baseQueue,
          queue: ye.queue,
          next: null
        }, vl === null ? mt.memoizedState = vl = t : vl = vl.next = t;
      }
      return vl;
    }
    function Ss() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function bs(t) {
      var e = X0;
      return X0 += 1, no === null && (no = dd()), t = Da(no, t, e), e = mt, (vl === null ? e.memoizedState : vl.next) === null && (e = e.alternate, q.H = e !== null && e.memoizedState !== null ? B1 : H1), t;
    }
    function Lu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return bs(t);
        if (t.$$typeof === Hn) return Jt(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Ma(t) {
      var e = null, a = mt.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var i = mt.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = Ss(), mt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || Q0)
        for (a = e.data[e.index] = Array(t), i = 0; i < t; i++)
          a[i] = kv;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function Ra(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Ho(t, e, a) {
      var i = $e();
      if (a !== void 0) {
        var o = a(e);
        if (Ar) {
          re(!0);
          try {
            a(e);
          } finally {
            re(!1);
          }
        }
      } else o = e;
      return i.memoizedState = i.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, i.queue = t, t = t.dispatch = Jv.bind(
        null,
        mt,
        t
      ), [i.memoizedState, t];
    }
    function Ac(t) {
      var e = Ft();
      return Di(e, ye, t);
    }
    function Di(t, e, a) {
      var i = t.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = t.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        e.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), e.baseQueue = o = f, i.pending = null;
      }
      if (f = t.baseState, o === null) t.memoizedState = f;
      else {
        e = o.next;
        var h = d = null, y = null, p = e, A = !1;
        do {
          var D = p.lane & -536870913;
          if (D !== p.lane ? (Dt & D) === D : (ao & D) === D) {
            var S = p.revertLane;
            if (S === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), D === vr && (A = !0);
            else if ((ao & S) === S) {
              p = p.next, S === vr && (A = !0);
              continue;
            } else
              D = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = D, d = f) : y = y.next = D, mt.lanes |= S, Nf |= S;
            D = p.action, Ar && a(f, D), f = p.hasEagerState ? p.eagerState : a(f, D);
          } else
            S = {
              lane: D,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = S, d = f) : y = y.next = S, mt.lanes |= D, Nf |= D;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !ja(f, t.memoizedState) && (Sl = !0, A && (a = Qh, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
    }
    function zc(t) {
      var e = Ft(), a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = t;
      var i = a.dispatch, o = a.pending, f = e.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = t(f, d.action), d = d.next;
        while (d !== o);
        ja(f, e.memoizedState) || (Sl = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Bo(t, e, a) {
      var i = mt, o = $e();
      if (Nt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Jh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      } else {
        if (f = e(), Jh || (a = e(), ja(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0)), pe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Dt & 127) !== 0 || Jm(i, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Mc(
        Oi.bind(null, i, a, t),
        [t]
      ), i.flags |= 2048, eu(
        Ru | Va,
        { destroy: void 0 },
        Km.bind(
          null,
          i,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Dc(t, e, a) {
      var i = mt, o = Ft(), f = Nt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !Jh) {
        var d = e();
        ja(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      }
      (d = !ja(
        (ye || o).memoizedState,
        a
      )) && (o.memoizedState = a, Sl = !0), o = o.queue;
      var h = Oi.bind(null, i, o, t);
      if (el(2048, Va, h, [t]), o.getSnapshot !== e || d || vl !== null && vl.memoizedState.tag & Ru) {
        if (i.flags |= 2048, eu(
          Ru | Va,
          { destroy: void 0 },
          Km.bind(
            null,
            i,
            o,
            a,
            e
          ),
          null
        ), pe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (ao & 127) !== 0 || Jm(i, e, a);
      }
      return a;
    }
    function Jm(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = mt.updateQueue, e === null ? (e = Ss(), mt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function Km(t, e, a, i) {
      e.value = a, e.getSnapshot = i, Mi(e) && $m(t);
    }
    function Oi(t, e, a) {
      return a(function() {
        Mi(e) && (Wn(2, "updateSyncExternalStore()", t), $m(t));
      });
    }
    function Mi(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !ja(t, a);
      } catch {
        return !0;
      }
    }
    function $m(t) {
      var e = Cl(t, 2);
      e !== null && dt(e, t, 2);
    }
    function pd(t) {
      var e = $e();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Ar) {
          re(!0);
          try {
            a();
          } finally {
            re(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: t
      }, e;
    }
    function Ri(t) {
      t = pd(t);
      var e = t.queue, a = Ed.bind(null, mt, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Oc(t) {
      var e = $e();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Ms.bind(
        null,
        mt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function Ts(t, e) {
      var a = Ft();
      return No(a, ye, t, e);
    }
    function No(t, e, a, i) {
      return t.baseState = a, Di(
        t,
        ye,
        typeof i == "function" ? i : Ra
      );
    }
    function Es(t, e) {
      var a = Ft();
      return ye !== null ? No(a, ye, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function Hp(t, e, a, i, o) {
      if (dl(t))
        throw Error("Cannot update form state while rendering.");
      if (t = e.action, t !== null) {
        var f = {
          payload: o,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        q.T !== null ? a(!0) : f.isTransition = !1, i(f), a = e.pending, a === null ? (f.next = e.pending = f, Ui(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function Ui(t, e) {
      var a = e.action, i = e.payload, o = t.state;
      if (e.isTransition) {
        var f = q.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), q.T = d;
        try {
          var h = a(o, i), y = q.S;
          y !== null && y(d, h), Wm(t, e, h);
        } catch (p) {
          As(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), q.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Wm(t, e, d);
        } catch (p) {
          As(t, e, p);
        }
    }
    function Wm(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (q.asyncTransitions++, a.then(Rc, Rc), a.then(
        function(i) {
          wu(t, e, i);
        },
        function(i) {
          return As(t, e, i);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : wu(t, e, a);
    }
    function wu(t, e, a) {
      e.status = "fulfilled", e.value = a, gd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Ui(t, a)));
    }
    function As(t, e, a) {
      var i = t.pending;
      if (t.pending = null, i !== null) {
        i = i.next;
        do
          e.status = "rejected", e.reason = a, gd(e), e = e.next;
        while (e !== i);
      }
      t.action = null;
    }
    function gd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Ju(t, e) {
      return e;
    }
    function Ua(t, e) {
      if (Nt) {
        var a = pe.formState;
        if (a !== null) {
          t: {
            var i = mt;
            if (Nt) {
              if (De) {
                e: {
                  for (var o = De, f = Du; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = qa(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === lS || f === Pb ? o : null;
                }
                if (o) {
                  De = qa(
                    o.nextSibling
                  ), i = o.data === lS;
                  break t;
                }
              }
              Ka(i);
            }
            i = !1;
          }
          i && (e = a[0]);
        }
      }
      return a = $e(), a.memoizedState = a.baseState = e, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ju,
        lastRenderedState: e
      }, a.queue = i, a = Ed.bind(
        null,
        mt,
        i
      ), i.dispatch = a, i = pd(!1), f = Ms.bind(
        null,
        mt,
        !1,
        i.queue
      ), i = $e(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, i.queue = o, a = Hp.bind(
        null,
        mt,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = t, [e, a, !1];
    }
    function _i(t) {
      var e = Ft();
      return vd(e, ye, t);
    }
    function vd(t, e, a) {
      if (e = Di(
        t,
        e,
        Ju
      )[0], t = Ac(Ra)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var i = bs(e);
        } catch (d) {
          throw d === Vh ? Pg : d;
        }
      else i = e;
      e = Ft();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (mt.flags |= 2048, eu(
        Ru | Va,
        { destroy: void 0 },
        Fm.bind(null, o, a),
        null
      )), [i, f, t];
    }
    function Fm(t, e) {
      t.action = e;
    }
    function Ci(t) {
      var e = Ft(), a = ye;
      if (a !== null)
        return vd(e, a, t);
      Ft(), e = e.memoizedState, a = Ft();
      var i = a.queue.dispatch;
      return a.memoizedState = t, [e, i, !1];
    }
    function eu(t, e, a, i) {
      return t = { tag: t, create: a, deps: i, inst: e, next: null }, e = mt.updateQueue, e === null && (e = Ss(), mt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (i = a.next, a.next = t, t.next = i, e.lastEffect = t), t;
    }
    function Sd(t) {
      var e = $e();
      return t = { current: t }, e.memoizedState = t;
    }
    function Hi(t, e, a, i) {
      var o = $e();
      mt.flags |= t, o.memoizedState = eu(
        Ru | e,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function el(t, e, a, i) {
      var o = Ft();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      ye !== null && i !== null && Lm(i, ye.memoizedState.deps) ? o.memoizedState = eu(e, f, a, i) : (mt.flags |= t, o.memoizedState = eu(
        Ru | e,
        f,
        a,
        i
      ));
    }
    function Mc(t, e) {
      (mt.mode & ni) !== rt ? Hi(276826112, Va, t, e) : Hi(8390656, Va, t, e);
    }
    function Bp(t) {
      mt.flags |= 4;
      var e = mt.updateQueue;
      if (e === null)
        e = Ss(), mt.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function zs(t) {
      var e = $e(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Vt & _l) !== Gl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function qo(t) {
      var e = Ft().memoizedState;
      return Bp({ ref: e, nextImpl: t }), function() {
        if ((Vt & _l) !== Gl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function Kl(t, e) {
      var a = 4194308;
      return (mt.mode & ni) !== rt && (a |= 134217728), Hi(a, Yn, t, e);
    }
    function _a(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function() {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null)
        return e.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(e).join(", ") + "}"
        ), t = t(), e.current = t, function() {
          e.current = null;
        };
    }
    function lu(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var i = 4194308;
      (mt.mode & ni) !== rt && (i |= 134217728), Hi(
        i,
        Yn,
        _a.bind(null, e, t),
        a
      );
    }
    function xo(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, el(
        4,
        Yn,
        _a.bind(null, e, t),
        a
      );
    }
    function bd(t, e) {
      return $e().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function An(t, e) {
      var a = Ft();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      return e !== null && Lm(e, i[1]) ? i[0] : (a.memoizedState = [t, e], t);
    }
    function $l(t, e) {
      var a = $e();
      e = e === void 0 ? null : e;
      var i = t();
      if (Ar) {
        re(!0);
        try {
          t();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, e], i;
    }
    function Te(t, e) {
      var a = Ft();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      if (e !== null && Lm(e, i[1]))
        return i[0];
      if (i = t(), Ar) {
        re(!0);
        try {
          t();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, e], i;
    }
    function Yo(t, e) {
      var a = $e();
      return kt(a, t, e);
    }
    function au(t, e) {
      var a = Ft();
      return Qe(
        a,
        ye.memoizedState,
        t,
        e
      );
    }
    function vt(t, e) {
      var a = Ft();
      return ye === null ? kt(a, t, e) : Qe(
        a,
        ye.memoizedState,
        t,
        e
      );
    }
    function kt(t, e, a) {
      return a === void 0 || (ao & 1073741824) !== 0 && (Dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = wo(), mt.lanes |= t, Nf |= t, a);
    }
    function Qe(t, e, a, i) {
      return ja(a, e) ? a : Lh.current !== null ? (t = kt(t, a, i), ja(t, e) || (Sl = !0), t) : (ao & 42) === 0 || (ao & 1073741824) !== 0 && (Dt & 261930) === 0 ? (Sl = !0, t.memoizedState = a) : (t = wo(), mt.lanes |= t, Nf |= t, e);
    }
    function Rc() {
      q.asyncTransitions--;
    }
    function Uc(t, e, a, i, o) {
      var f = $t.p;
      $t.p = f !== 0 && f < Rl ? f : Rl;
      var d = q.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), q.T = h, Ms(t, !1, e, a);
      try {
        var y = o(), p = q.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          q.asyncTransitions++, y.then(Rc, Rc);
          var A = rd(
            y,
            i
          );
          _c(
            t,
            e,
            A,
            Bl(t)
          );
        } else
          _c(
            t,
            e,
            i,
            Bl(t)
          );
      } catch (D) {
        _c(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: D },
          Bl(t)
        );
      } finally {
        $t.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), q.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Ku(t, e, a, i) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Ds(t).queue;
      _p(t), Uc(
        t,
        o,
        e,
        Nr,
        a === null ? L : function() {
          return Go(t), a(i);
        }
      );
    }
    function Ds(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Nr,
        baseState: Nr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ra,
          lastRenderedState: Nr
        },
        next: null
      };
      var a = {};
      return e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ra,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Go(t) {
      q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = Ds(t);
      e.next === null && (e = t.alternate.memoizedState), _c(
        t,
        e.next.queue,
        {},
        Bl(t)
      );
    }
    function Bi() {
      var t = pd(!1);
      return t = Uc.bind(
        null,
        mt,
        t.queue,
        !0,
        !1
      ), $e().memoizedState = t, [!1, t];
    }
    function Np() {
      var t = Ac(Ra)[0], e = Ft().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function Re() {
      var t = zc(Ra)[0], e = Ft().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function $u() {
      return Jt(ap);
    }
    function Os() {
      var t = $e(), e = pe.identifierPrefix;
      if (Nt) {
        var a = Ic, i = kc;
        a = (i & ~(1 << 32 - Ml(i) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = nv++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = HT++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function Td() {
      return $e().memoizedState = qp.bind(
        null,
        mt
      );
    }
    function qp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Bl(a), o = tl(i), f = In(a, o, i);
            f !== null && (Wn(i, "refresh()", t), dt(f, a, i), Ia(f, a, i)), t = fd(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function Jv(t, e, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Bl(t);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      dl(t) ? qe(e, o) : (o = rc(t, e, o, i), o !== null && (Wn(i, "dispatch()", t), dt(o, t, i), Rs(o, e, i)));
    }
    function Ed(t, e, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Bl(t), _c(t, e, a, i) && Wn(i, "setState()", t);
    }
    function _c(t, e, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (dl(t)) qe(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = q.H;
          q.H = ii;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, ja(y, h))
              return Ao(t, e, o, 0), pe === null && ad(), !1;
          } catch {
          } finally {
            q.H = d;
          }
        }
        if (a = rc(t, e, o, i), a !== null)
          return dt(a, t, i), Rs(a, e, i), !0;
      }
      return !1;
    }
    function Ms(t, e, a, i) {
      if (q.T === null && vr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Yy(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, dl(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = rc(
          t,
          a,
          i,
          2
        ), e !== null && (Wn(2, "setOptimistic()", t), dt(e, t, 2));
    }
    function dl(t) {
      var e = t.alternate;
      return t === mt || e !== null && e === mt;
    }
    function qe(t, e) {
      Kh = av = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Rs(t, e, a) {
      if ((a & 4194048) !== 0) {
        var i = e.lanes;
        i &= t.pendingLanes, a |= i, e.lanes = a, op(t, a);
      }
    }
    function Cc(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        Db.has(e) || (Db.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function jo(t, e, a, i) {
      var o = t.memoizedState, f = a(i, o);
      if (t.mode & ga) {
        re(!0);
        try {
          f = a(i, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (e = Gt(e) || "Component", Tb.has(e) || (Tb.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : Et({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Ad(t, e, a, i, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), t.mode & ga) {
          re(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            re(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Gt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !Eo(a, i) || !Eo(o, f) : !0;
    }
    function nu(t, e, a, i) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, i), e.state !== o && (t = at(t) || "Component", pb.has(t) || (pb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), N1.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function uu(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var i in e)
          i !== "ref" && (a[i] = e[i]);
      }
      if (t = t.defaultProps) {
        a === e && (a = Et({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function zd(t) {
      r1(t), console.warn(
        `%s

%s
`,
        $h ? "An error occurred in the <" + $h + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Dd(t) {
      var e = $h ? "The above error occurred in the <" + $h + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((q1 || "Anonymous") + ".");
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var i = t.environmentName;
        t = [
          `%o

%s

%s
`,
          t,
          e,
          a
        ].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          c2 + " " + t[0],
          o2,
          Uv + i + Uv,
          f2
        ) : t.splice(
          0,
          0,
          c2,
          o2,
          Uv + i + Uv,
          f2
        ), t.unshift(console), i = PT.apply(console.error, t), i();
      } else
        console.error(
          `%o

%s

%s
`,
          t,
          e,
          a
        );
    }
    function km(t) {
      r1(t);
    }
    function Us(t, e) {
      try {
        $h = e.source ? at(e.source) : null, q1 = null;
        var a = e.value;
        if (q.actQueue !== null)
          q.thrownErrors.push(a);
        else {
          var i = t.onUncaughtError;
          i(a, { componentStack: e.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Im(t, e, a) {
      try {
        $h = a.source ? at(a.source) : null, q1 = at(e);
        var i = t.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Od(t, e, a) {
      return a = tl(a), a.tag = R1, a.payload = { element: null }, a.callback = function() {
        I(e.source, Us, t, e);
      }, a;
    }
    function Md(t) {
      return t = tl(t), t.tag = R1, t;
    }
    function Rd(t, e, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          dc(a), I(
            i.source,
            Im,
            e,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        dc(a), I(
          i.source,
          Im,
          e,
          a,
          i
        ), typeof o != "function" && (xf === null ? xf = /* @__PURE__ */ new Set([this]) : xf.add(this)), RT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          at(a) || "Unknown"
        );
      });
    }
    function Pm(t, e, a, i, o) {
      if (a.flags |= 32768, vu && Fo(t, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (e = a.alternate, e !== null && vn(
          e,
          a,
          o,
          !0
        ), Nt && (Wi = !0), a = xn.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Mu === null ? Ko() : a.alternate === null && Ye === co && (Ye = cv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === tv ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), $d(t, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === tv ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), $d(t, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return $d(t, i, o), Ko(), !1;
      }
      if (Nt)
        return Wi = !0, e = xn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, i !== g1 && os(
          Vl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== g1 && os(
          Vl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, i = Vl(i, a), o = Od(
          t.stateNode,
          i,
          o
        ), ms(t, o), Ye !== Hf && (Ye = zr)), !1;
      var f = Vl(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if ($0 === null ? $0 = [f] : $0.push(f), Ye !== Hf && (Ye = zr), e === null) return !0;
      i = Vl(i, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Od(
              a.stateNode,
              i,
              t
            ), ms(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (xf === null || !xf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Md(o), Rd(
                o,
                t,
                a,
                i
              ), ms(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function hl(t, e, a, i) {
      e.child = t === null ? ub(e, null, a, i) : Er(
        e,
        t.child,
        a,
        i
      );
    }
    function xp(t, e, a, i, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Ei(e), i = wm(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = Ec(), t !== null && !Sl ? (vs(t, e, o), zn(t, e, o)) : (Nt && h && id(e), e.flags |= 1, hl(t, e, i, o), e.child);
    }
    function ty(t, e, a, i, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Hm(f) && f.defaultProps === void 0 && a.compare === null ? (a = gi(f), e.tag = 15, e.type = a, Xo(e, f), ey(
          t,
          e,
          a,
          i,
          o
        )) : (t = hc(
          a.type,
          null,
          i,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !Bd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Eo, a(d, i) && t.ref === e.ref)
          return zn(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = $n(f, i), t.ref = e.ref, t.return = e, e.child = t;
    }
    function ey(t, e, a, i, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (Eo(f, i) && t.ref === e.ref && e.type === t.type)
          if (Sl = !1, e.pendingProps = i = f, Bd(t, o))
            (t.flags & 131072) !== 0 && (Sl = !0);
          else
            return e.lanes = t.lanes, zn(t, e, o);
      }
      return uy(
        t,
        e,
        a,
        i,
        o
      );
    }
    function ly(t, e, a, i) {
      var o = i.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: A0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, t !== null) {
            for (i = e.child = t.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, e.child = null;
          return ay(
            t,
            e,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ro(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? md(e, f) : Vu(e), yd(e);
        else
          return i = e.lanes = 536870912, ay(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Ro(e, f.cachePool), md(e, f), tu(e), e.memoizedState = null) : (t !== null && Ro(e, null), Vu(e), tu(e));
      return hl(t, e, o, a), e.child;
    }
    function Hc(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: A0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function ay(t, e, a, i, o) {
      var f = Qu();
      return f = f === null ? null : {
        parent: pl._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Ro(e, null), Vu(e), yd(e), t !== null && vn(t, e, i, !0), e.childLanes = o, null;
    }
    function _s(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Hs(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ny(t, e, a) {
      return Er(e, t.child, null, a), t = _s(
        e,
        e.pendingProps
      ), t.flags |= 2, rl(e), e.memoizedState = null, t;
    }
    function Yp(t, e, a) {
      var i = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Nt) {
          if (i.mode === "hidden")
            return t = _s(e, i), e.lanes = 536870912, Hc(null, t);
          if (En(e), (t = De) ? (a = Pt(
            t,
            Du
          ), a = a !== null && a.data === _r ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Mp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = i, i = Nm(a), i.return = e, e.child = i, aa = e, De = null)) : a = null, a === null)
            throw Hl(e, t), Ka(e);
          return e.lanes = 536870912, null;
        }
        return _s(e, i);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (En(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = ny(
              t,
              e,
              a
            );
          else if (e.memoizedState !== null)
            e.child = t.child, e.flags |= 128, e = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Up(), (a & 536870912) !== 0 && Jo(e), Sl || vn(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Sl || o) {
          if (i = pe, i !== null && (d = fp(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Cl(t, d), dt(i, t, d), x1;
          Ko(), e = ny(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, De = qa(
            d.nextSibling
          ), aa = e, Nt = !0, Of = null, Wi = !1, qn = null, Du = !1, t !== null && Rp(e, t), e = _s(e, i), e.flags |= 4096;
        return e;
      }
      return f = t.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && Jo(e), t = $n(f, i), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Cs(t, e) {
      var a = e.ref;
      if (a === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function uy(t, e, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Gt(a) || "Unknown";
        Ob[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Ob[f] = !0);
      }
      return e.mode & ga && ui.recordLegacyContextWarning(
        e,
        null
      ), t === null && (Xo(e, e.type), a.contextTypes && (f = Gt(a) || "Unknown", Rb[f] || (Rb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Ei(e), a = wm(
        t,
        e,
        a,
        i,
        void 0,
        o
      ), i = Ec(), t !== null && !Sl ? (vs(t, e, o), zn(t, e, o)) : (Nt && i && id(e), e.flags |= 1, hl(t, e, a, o), e.child);
    }
    function iy(t, e, a, i, o, f) {
      return Ei(e), uo = -1, Q0 = t !== null && t.type !== e.type, e.updateQueue = null, a = ps(
        e,
        i,
        a,
        o
      ), Xe(t, e), i = Ec(), t !== null && !Sl ? (vs(t, e, f), zn(t, e, f)) : (Nt && i && id(e), e.flags |= 1, hl(t, e, a, f), e.child);
    }
    function Bc(t, e, a, i, o) {
      switch (we(e)) {
        case !1:
          var f = e.stateNode, d = new e.type(
            e.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          e.flags |= 128, e.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (e.lanes |= h, d = pe, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Md(h), Rd(
            h,
            d,
            e,
            Vl(f, e)
          ), ms(e, h);
      }
      if (Ei(e), e.stateNode === null) {
        if (d = Df, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Hn) && !zb.has(a) && (zb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === ph ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Gt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Jt(f)), f = new a(i, d), e.mode & ga) {
          re(!0);
          try {
            f = new a(i, d);
          } finally {
            re(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = N1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = yb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Gt(a) || "Component", gb.has(d) || (gb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Gt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Sb.has(f) || (Sb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = e.stateNode, d = Gt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Ab.has(a) && (Ab.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Eb.has(a) && (Eb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Gt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || vb.has(a) || (vb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Gt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Fe(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = i, f.state = e.memoizedState, f.refs = {}, _t(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? Jt(d) : Df, f.state === i && (d = Gt(a) || "Component", bb.has(d) || (bb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & ga && ui.recordLegacyContextWarning(
          e,
          f
        ), ui.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (jo(
          e,
          a,
          d,
          i
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          at(e) || "Component"
        ), N1.enqueueReplaceState(
          f,
          f.state,
          null
        )), Pn(e, i, f, o), _o(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ni) !== rt && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var A = e.memoizedProps;
        h = uu(a, A), f.props = h;
        var D = f.context;
        y = a.contextType, d = Df, typeof y == "object" && y !== null && (d = Jt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", A = e.pendingProps !== A, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (A || D !== d) && nu(
          e,
          f,
          i,
          d
        ), Cf = !1;
        var S = e.memoizedState;
        f.state = S, Pn(e, i, f, o), _o(), D = e.memoizedState, A || S !== D || Cf ? (typeof p == "function" && (jo(
          e,
          a,
          p,
          i
        ), D = e.memoizedState), (h = Cf || Ad(
          e,
          a,
          h,
          i,
          S,
          D,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ni) !== rt && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ni) !== rt && (e.flags |= 134217728), e.memoizedProps = i, e.memoizedState = D), f.props = i, f.state = D, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ni) !== rt && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, kn(t, e), d = e.memoizedProps, y = uu(a, d), f.props = y, p = e.pendingProps, S = f.context, D = a.contextType, h = Df, typeof D == "object" && D !== null && (h = Jt(D)), A = a.getDerivedStateFromProps, (D = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || S !== h) && nu(
          e,
          f,
          i,
          h
        ), Cf = !1, S = e.memoizedState, f.state = S, Pn(e, i, f, o), _o();
        var B = e.memoizedState;
        d !== p || S !== B || Cf || t !== null && t.dependencies !== null && Oo(t.dependencies) ? (typeof A == "function" && (jo(
          e,
          a,
          A,
          i
        ), B = e.memoizedState), (y = Cf || Ad(
          e,
          a,
          y,
          i,
          S,
          B,
          h
        ) || t !== null && t.dependencies !== null && Oo(t.dependencies)) ? (D || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, B, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          B,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = B), f.props = i, f.state = B, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, Cs(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, Kf(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, Xa = -1;
        else if (a = wS(h), e.mode & ga) {
          re(!0);
          try {
            wS(h);
          } finally {
            re(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Er(
          e,
          t.child,
          null,
          o
        ), e.child = Er(
          e,
          null,
          a,
          o
        )) : hl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = zn(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== i && (Wh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        at(e) || "a component"
      ), Wh = !0), t;
    }
    function cy(t, e, a, i) {
      return bi(), e.flags |= 256, hl(t, e, a, i), e.child;
    }
    function Xo(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = Gt(e) || "Unknown", Ub[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), Ub[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = Gt(e) || "Unknown", Mb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Mb[e] = !0));
    }
    function Qo(t) {
      return { baseLanes: t, cachePool: Xm() };
    }
    function Ud(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= cn), t;
    }
    function _d(t, e, a) {
      var i, o = e.pendingProps;
      Me(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((i = d) || (i = t !== null && t.memoizedState === null ? !1 : (ul.current & j0) !== 0), i && (f = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Nt) {
          if (f ? Jl(e) : tu(e), (t = De) ? (a = Pt(
            t,
            Du
          ), a = a !== null && a.data !== _r ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: Mp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = i, i = Nm(a), i.return = e, e.child = i, aa = e, De = null)) : a = null, a === null)
            throw Hl(e, t), Ka(e);
          return Xy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          tu(e);
          var y = e.mode;
          return h = Hs(
            { mode: "hidden", children: h },
            y
          ), o = mc(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = Qo(a), o.childLanes = Ud(
            t,
            i,
            a
          ), e.memoizedState = Y1, Hc(
            null,
            o
          );
        }
        return Jl(e), oy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var A = p.dehydrated;
        if (A !== null) {
          if (d)
            e.flags & 256 ? (Jl(e), e.flags &= -257, e = Cd(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (tu(e), e.child = t.child, e.flags |= 128, e = null) : (tu(e), h = o.fallback, y = e.mode, o = Hs(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = mc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Er(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = Qo(a), o.childLanes = Ud(
              t,
              i,
              a
            ), e.memoizedState = Y1, e = Hc(
              null,
              o
            ));
          else if (Jl(e), Up(), (a & 536870912) !== 0 && Jo(e), Xy(
            A
          )) {
            if (i = A.nextSibling && A.nextSibling.dataset, i) {
              h = i.dgst;
              var D = i.msg;
              y = i.stck;
              var S = i.cstck;
            }
            f = D, i = h, o = y, A = S, h = f, y = A, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && p1.set(
              h,
              o
            ), os(o), e = Cd(
              t,
              e,
              a
            );
          } else if (Sl || vn(
            t,
            e,
            a,
            !1
          ), i = (a & t.childLanes) !== 0, Sl || i) {
            if (i = pe, i !== null && (o = fp(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Cl(
                t,
                o
              ), dt(
                i,
                t,
                o
              ), x1;
            Fs(
              A
            ) || Ko(), e = Cd(
              t,
              e,
              a
            );
          } else
            Fs(
              A
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, De = qa(
              A.nextSibling
            ), aa = e, Nt = !0, Of = null, Wi = !1, qn = null, Du = !1, t !== null && Rp(e, t), e = oy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (tu(e), h = o.fallback, y = e.mode, S = t.child, A = S.sibling, o = $n(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, A !== null ? h = $n(
        A,
        h
      ) : (h = mc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Hc(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = Qo(a) : (y = h.cachePool, y !== null ? (S = pl._currentValue, y = y.parent !== S ? { parent: S, pool: S } : y) : y = Xm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ud(
        t,
        i,
        a
      ), e.memoizedState = Y1, Hc(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && Jo(e), Jl(e), a = t.child, t = a.sibling, a = $n(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function oy(t, e) {
      return e = Hs(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Hs(t, e) {
      return t = U(22, t, null, e), t.lanes = 0, t;
    }
    function Cd(t, e, a) {
      return Er(e, t.child, null, a), t = oy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function fy(t, e, a) {
      t.lanes |= e;
      var i = t.alternate;
      i !== null && (i.lanes |= e), od(
        t.return,
        e,
        a
      );
    }
    function Hd(t, e, a, i, o, f) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function sy(t, e, a) {
      var i = e.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = ul.current;
      if ((i = (h & j0) !== 0) ? (h = h & wh | j0, e.flags |= 128) : h &= wh, Ht(ul, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !_b[h])
        if (_b[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", iv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (iv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (iv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (iv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Fe(d)) {
          for (h = 0; h < d.length; h++)
            if (!de(
              d[h],
              h
            ))
              break t;
        } else if (h = cl(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!de(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (hl(t, e, d, a), Nt ? (Si(), d = z0) : d = 0, !i && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && fy(t, a, e);
          else if (t.tag === 19)
            fy(t, a, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = e.child, o = null; a !== null; )
            t = a.alternate, t !== null && Tc(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Hd(
            e,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = e.child, e.child = null; o !== null; ) {
            if (t = o.alternate, t !== null && Tc(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Hd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Hd(
            e,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function zn(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), Xa = -1, Nf |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (vn(
            t,
            e,
            a,
            !1
          ), (a & e.childLanes) === 0)
            return null;
        } else return null;
      if (t !== null && e.child !== t.child)
        throw Error("Resuming work not yet implemented.");
      if (e.child !== null) {
        for (t = e.child, a = $n(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
          t = t.sibling, a = a.sibling = $n(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function Bd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Oo(t)));
    }
    function Gp(t, e, a) {
      switch (e.tag) {
        case 3:
          ca(
            e,
            e.stateNode.containerInfo
          ), $a(
            e,
            pl,
            t.memoizedState.cache
          ), bi();
          break;
        case 27:
        case 5:
          w(e);
          break;
        case 4:
          ca(
            e,
            e.stateNode.containerInfo
          );
          break;
        case 10:
          $a(
            e,
            e.type,
            e.memoizedProps.value
          );
          break;
        case 12:
          (a & e.childLanes) !== 0 && (e.flags |= 4), e.flags |= 2048;
          var i = e.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, En(e), null;
          break;
        case 13:
          if (i = e.memoizedState, i !== null)
            return i.dehydrated !== null ? (Jl(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? _d(
              t,
              e,
              a
            ) : (Jl(e), t = zn(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          Jl(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (i = (a & e.childLanes) !== 0, i || (vn(
            t,
            e,
            a,
            !1
          ), i = (a & e.childLanes) !== 0), o) {
            if (i)
              return sy(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ht(
            ul,
            ul.current,
            e
          ), i) break;
          return null;
        case 22:
          return e.lanes = 0, ly(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          $a(
            e,
            pl,
            t.memoizedState.cache
          );
      }
      return zn(t, e, a);
    }
    function Bs(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = hc(
          e.type,
          e.key,
          e.pendingProps,
          e._debugOwner || null,
          e.mode,
          e.lanes
        ), a._debugStack = e._debugStack, a._debugTask = e._debugTask;
        var i = e.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (t.alternate = null, e.alternate = null, a.index = e.index, a.sibling = e.sibling, a.return = e.return, a.ref = e.ref, a._debugInfo = e._debugInfo, e === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== e; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return e = i.deletions, e === null ? (i.deletions = [t], i.flags |= 16) : e.push(t), a.flags |= 2, a;
      }
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
          Sl = !0;
        else {
          if (!Bd(t, a) && (e.flags & 128) === 0)
            return Sl = !1, Gp(
              t,
              e,
              a
            );
          Sl = (t.flags & 131072) !== 0;
        }
      else
        Sl = !1, (i = Nt) && (Si(), i = (e.flags & 1048576) !== 0), i && (i = e.index, Si(), qm(e, z0, i));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (i = e.pendingProps, t = Oa(e.elementType), e.type = t, typeof t == "function")
            Hm(t) ? (i = uu(
              t,
              i
            ), e.tag = 1, e.type = t = gi(t), e = Bc(
              null,
              e,
              t,
              i,
              a
            )) : (e.tag = 0, Xo(e, t), e.type = t = gi(t), e = uy(
              null,
              e,
              t,
              i,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === rf) {
                e.tag = 11, e.type = t = nd(t), e = xp(
                  null,
                  e,
                  t,
                  i,
                  a
                );
                break t;
              } else if (o === ir) {
                e.tag = 14, e = ty(
                  null,
                  e,
                  t,
                  i,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === Nl && (e = " Did you wrap a component in React.lazy() more than once?"), a = Gt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return uy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return i = e.type, o = uu(
            i,
            e.pendingProps
          ), Bc(
            t,
            e,
            i,
            o,
            a
          );
        case 3:
          t: {
            if (ca(
              e,
              e.stateNode.containerInfo
            ), t === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = e.pendingProps;
            var f = e.memoizedState;
            o = f.element, kn(t, e), Pn(e, i, null, a);
            var d = e.memoizedState;
            if (i = d.cache, $a(e, pl, i), i !== f.cache && Gu(
              e,
              [pl],
              a,
              !0
            ), _o(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = cy(
                  t,
                  e,
                  i,
                  a
                );
                break t;
              } else if (i !== o) {
                o = Vl(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), os(o), e = cy(
                  t,
                  e,
                  i,
                  a
                );
                break t;
              } else
                for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, De = qa(t.firstChild), aa = e, Nt = !0, Of = null, Wi = !1, qn = null, Du = !0, a = ub(
                  e,
                  null,
                  i,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (bi(), i === o) {
                e = zn(
                  t,
                  e,
                  a
                );
                break t;
              }
              hl(
                t,
                e,
                i,
                a
              );
            }
            e = e.child;
          }
          return e;
        case 26:
          return Cs(t, e), t === null ? (a = Ly(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : Nt || (a = e.type, t = e.pendingProps, i = ia(
            xa.current
          ), i = $s(
            i
          ).createElement(a), i[Ae] = e, i[la] = t, Ee(i, a, t), Ge(i), e.stateNode = i) : e.memoizedState = Ly(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return w(e), t === null && Nt && (i = ia(xa.current), o = Z(), i = e.stateNode = ti(
            e.type,
            e.pendingProps,
            i,
            o,
            !1
          ), Wi || (o = ma(
            i,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (yc(e, 0).serverProps = o)), aa = e, Du = !0, o = De, Vi(e.type) ? (iS = o, De = qa(
            i.firstChild
          )) : De = o), hl(
            t,
            e,
            e.pendingProps.children,
            a
          ), Cs(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Nt && (f = Z(), i = If(
            e.type,
            f.ancestorInfo
          ), o = De, (d = !o) || (d = mg(
            o,
            e.type,
            e.pendingProps,
            Du
          ), d !== null ? (e.stateNode = d, Wi || (f = ma(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (yc(e, 0).serverProps = f)), aa = e, De = qa(
            d.firstChild
          ), Du = !1, f = !0) : f = !1, d = !f), d && (i && Hl(e, o), Ka(e))), w(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, i = f.children, ef(o, f) ? i = null : d !== null && ef(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = wm(
            t,
            e,
            gs,
            null,
            null,
            a
          ), ap._currentValue = o), Cs(t, e), hl(
            t,
            e,
            i,
            a
          ), e.child;
        case 6:
          return t === null && Nt && (a = e.pendingProps, t = Z(), i = t.ancestorInfo.current, a = i != null ? Pf(
            a,
            i.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = De, (i = !t) || (i = yg(
            t,
            e.pendingProps,
            Du
          ), i !== null ? (e.stateNode = i, aa = e, De = null, i = !0) : i = !1, i = !i), i && (a && Hl(e, t), Ka(e))), null;
        case 13:
          return _d(t, e, a);
        case 4:
          return ca(
            e,
            e.stateNode.containerInfo
          ), i = e.pendingProps, t === null ? e.child = Er(
            e,
            null,
            i,
            a
          ) : hl(
            t,
            e,
            i,
            a
          ), e.child;
        case 11:
          return xp(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return hl(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return hl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, i = e.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, hl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return i = e.type, o = e.pendingProps, f = o.value, "value" in o || Cb || (Cb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), $a(e, i, f), hl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, i = e.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Ei(e), o = Jt(o), i = z1(
            i,
            o,
            void 0
          ), e.flags |= 1, hl(
            t,
            e,
            i,
            a
          ), e.child;
        case 14:
          return ty(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return ey(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return sy(
            t,
            e,
            a
          );
        case 31:
          return Yp(t, e, a);
        case 22:
          return ly(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Ei(e), i = Jt(pl), t === null ? (o = Qu(), o === null && (o = pe, f = fd(), o.pooledCache = f, gc(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: i,
            cache: o
          }, _t(e), $a(e, pl, o)) : ((t.lanes & a) !== 0 && (kn(t, e), Pn(e, null, null, a), _o()), o = t.memoizedState, f = e.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), $a(e, pl, i)) : (i = f.cache, $a(e, pl, i), i !== o.cache && Gu(
            e,
            [pl],
            a,
            !0
          ))), hl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function iu(t) {
      t.flags |= 4;
    }
    function Nd(t, e, a, i, o) {
      if ((e = (t.mode & AT) !== rt) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (Ry()) t.flags |= 8192;
          else
            throw Tr = tv, O1;
      } else t.flags &= -16777217;
    }
    function jp(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & _u) !== Br)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !Ut(e))
        if (Ry()) t.flags |= 8192;
        else
          throw Tr = tv, O1;
    }
    function Vo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Yr() : 536870912, t.lanes |= e, Mr |= e);
    }
    function Zo(t, e) {
      if (!Nt)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              e.alternate !== null && (a = e), e = e.sibling;
            a === null ? t.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = t.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
        }
    }
    function ue(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, i = 0;
      if (e)
        if ((t.mode & At) !== rt) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & At) !== rt) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= i, t.childLanes = a, e;
    }
    function ry(t, e, a) {
      var i = e.pendingProps;
      switch (cd(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ue(e), null;
        case 1:
          return ue(e), null;
        case 3:
          return a = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), gn(pl, e), O(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (pc(e) ? (Ti(), iu(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, cs())), ue(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (iu(e), f !== null ? (ue(e), jp(
            e,
            f
          )) : (ue(e), Nd(
            e,
            o,
            null,
            i,
            a
          ))) : f ? f !== t.memoizedState ? (iu(e), ue(e), jp(
            e,
            f
          )) : (ue(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && iu(e), ue(e), Nd(
            e,
            o,
            t,
            i,
            a
          )), null;
        case 27:
          if (ot(e), a = ia(xa.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== i && iu(e);
          else {
            if (!i) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ue(e), null;
            }
            t = Z(), pc(e) ? xm(e) : (t = ti(
              o,
              i,
              a,
              t,
              !0
            ), e.stateNode = t, iu(e));
          }
          return ue(e), null;
        case 5:
          if (ot(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== i && iu(e);
          else {
            if (!i) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ue(e), null;
            }
            var d = Z();
            if (pc(e))
              xm(e);
            else {
              switch (f = ia(xa.current), If(o, d.ancestorInfo), d = d.context, f = $s(f), d) {
                case am:
                  f = f.createElementNS(
                    bt,
                    o
                  );
                  break;
                case Ov:
                  f = f.createElementNS(
                    gt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        bt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        gt,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Ya.call(e2, o) || (e2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Ae] = e, f[la] = i;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e)
                    break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = f;
              t: switch (Ee(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break t;
                case "img":
                  i = !0;
                  break t;
                default:
                  i = !1;
              }
              i && iu(e);
            }
          }
          return ue(e), Nd(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== i && iu(e);
          else {
            if (typeof i != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = ia(xa.current), a = Z(), pc(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !Wi, i = null, f = aa, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = vg(
                      t,
                      a,
                      i
                    ), o !== null && (yc(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = vg(
                      t,
                      a,
                      i
                    ), o !== null && (yc(
                      e,
                      0
                    ).serverProps = o));
                }
              t[Ae] = e, t = !!(t.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Gy(t.nodeValue, a)), t || Ka(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && Pf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = $s(t).createTextNode(
                i
              ), t[Ae] = e, e.stateNode = t;
          }
          return ue(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (i = pc(e), a !== null) {
              if (t === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[Ae] = e, ue(e), (e.mode & At) !== rt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Ti(), bi(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, ue(e), (e.mode & At) !== rt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = cs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (rl(e), e) : (rl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return ue(e), null;
        case 13:
          if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = i, f = pc(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Ae] = e, ue(e), (e.mode & At) !== rt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Ti(), bi(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, ue(e), (e.mode & At) !== rt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = cs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (rl(e), e) : (rl(e), null);
          }
          return rl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & At) !== rt && Sc(e), e) : (a = i !== null, t = t !== null && t.memoizedState !== null, a && (i = e.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Vo(e, e.updateQueue), ue(e), (e.mode & At) !== rt && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return O(e), t === null && Xi(
            e.stateNode.containerInfo
          ), ue(e), null;
        case 10:
          return gn(e.type, e), ue(e), null;
        case 19:
          if (Xt(ul, e), i = e.memoizedState, i === null) return ue(e), null;
          if (o = (e.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) Zo(i, !1);
            else {
              if (Ye !== co || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Tc(t), f !== null) {
                    for (e.flags |= 128, Zo(i, !1), t = f.updateQueue, e.updateQueue = t, Vo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      Bm(a, t), a = a.sibling;
                    return Ht(
                      ul,
                      ul.current & wh | j0,
                      e
                    ), Nt && pn(e, i.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              i.tail !== null && yl() > hv && (e.flags |= 128, o = !0, Zo(i, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Tc(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Vo(e, t), Zo(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !Nt)
                  return ue(e), null;
              } else
                2 * yl() - i.renderingStartTime > hv && a !== 536870912 && (e.flags |= 128, o = !0, Zo(i, !1), e.lanes = 4194304);
            i.isBackwards ? (f.sibling = e.child, e.child = f) : (t = i.last, t !== null ? t.sibling = f : e.child = f, i.last = f);
          }
          return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = yl(), t.sibling = null, a = ul.current, a = o ? a & wh | j0 : a & wh, Ht(ul, a, e), Nt && pn(e, i.treeForkCount), t) : (ue(e), null);
        case 22:
        case 23:
          return rl(e), Tn(e), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (ue(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ue(e), a = e.updateQueue, a !== null && Vo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== a && (e.flags |= 2048), t !== null && Xt(Sr, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), gn(pl, e), ue(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Xp(t, e) {
      switch (cd(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== rt && Sc(e), e) : null;
        case 3:
          return gn(pl, e), O(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return ot(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (rl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            bi();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== rt && Sc(e), e) : null;
        case 13:
          if (rl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            bi();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== rt && Sc(e), e) : null;
        case 19:
          return Xt(ul, e), null;
        case 4:
          return O(e), null;
        case 10:
          return gn(e.type, e), null;
        case 22:
        case 23:
          return rl(e), Tn(e), t !== null && Xt(Sr, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & At) !== rt && Sc(e), e) : null;
        case 24:
          return gn(pl, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function dy(t, e) {
      switch (cd(e), e.tag) {
        case 3:
          gn(pl, e), O(e);
          break;
        case 26:
        case 27:
        case 5:
          ot(e);
          break;
        case 4:
          O(e);
          break;
        case 31:
          e.memoizedState !== null && rl(e);
          break;
        case 13:
          rl(e);
          break;
        case 19:
          Xt(ul, e);
          break;
        case 10:
          gn(e.type, e);
          break;
        case 22:
        case 23:
          rl(e), Tn(e), t !== null && Xt(Sr, e);
          break;
        case 24:
          gn(pl, e);
      }
    }
    function cu(t) {
      return (t.mode & At) !== rt;
    }
    function Qp(t, e) {
      cu(t) ? (Be(), Wu(e, t), Ll()) : Wu(e, t);
    }
    function qd(t, e, a) {
      cu(t) ? (Be(), Ni(
        a,
        t,
        e
      ), Ll()) : Ni(
        a,
        t,
        e
      );
    }
    function Wu(t, e) {
      try {
        var a = e.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & t) === t && (i = void 0, (t & Qa) !== lv && (tm = !0), i = I(
              e,
              UT,
              a
            ), (t & Qa) !== lv && (tm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Yn) !== 0 ? "useLayoutEffect" : (a.tag & Qa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, I(
                e,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        St(e, e.return, h);
      }
    }
    function Ni(t, e, a) {
      try {
        var i = e.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & t) === t) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & Qa) !== lv && (tm = !0), o = e, I(
                o,
                _T,
                o,
                a,
                h
              ), (t & Qa) !== lv && (tm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        St(e, e.return, y);
      }
    }
    function Ns(t, e) {
      cu(t) ? (Be(), Wu(e, t), Ll()) : Wu(e, t);
    }
    function xd(t, e, a) {
      cu(t) ? (Be(), Ni(
        a,
        t,
        e
      ), Ll()) : Ni(
        a,
        t,
        e
      );
    }
    function hy(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || Wh || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          at(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          at(t) || "instance"
        ));
        try {
          I(
            t,
            Co,
            e,
            a
          );
        } catch (i) {
          St(t, t.return, i);
        }
      }
    }
    function qs(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Vp(t, e) {
      var a = e.memoizedProps, i = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || Wh || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        at(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        at(t) || "instance"
      ));
      try {
        var o = uu(
          t.type,
          a
        ), f = I(
          t,
          qs,
          e,
          o,
          i
        );
        a = Hb, f !== void 0 || a.has(t.type) || (a.add(t.type), I(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            at(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        St(t, t.return, d);
      }
    }
    function Yd(t, e, a) {
      a.props = uu(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, cu(t) ? (Be(), I(
        t,
        kS,
        t,
        e,
        a
      ), Ll()) : I(
        t,
        kS,
        t,
        e,
        a
      );
    }
    function Zp(t) {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        if (typeof e == "function")
          if (cu(t))
            try {
              Be(), t.refCleanup = e(a);
            } finally {
              Ll();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            at(t)
          ), e.current = a;
      }
    }
    function Nc(t, e) {
      try {
        I(t, Zp, t);
      } catch (a) {
        St(t, e, a);
      }
    }
    function Pa(t, e) {
      var a = t.ref, i = t.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (cu(t))
              try {
                Be(), I(t, i);
              } finally {
                Ll(t);
              }
            else I(t, i);
          } catch (o) {
            St(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (cu(t))
              try {
                Be(), I(t, a, null);
              } finally {
                Ll(t);
              }
            else I(t, a, null);
          } catch (o) {
            St(t, e, o);
          }
        else a.current = null;
    }
    function my(t, e, a, i) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", Fg && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, i, a);
    }
    function Lp(t, e, a, i) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", Fg && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        i,
        a
      );
    }
    function qi(t) {
      var e = t.type, a = t.memoizedProps, i = t.stateNode;
      try {
        I(
          t,
          ag,
          i,
          e,
          a,
          t
        );
      } catch (o) {
        St(t, t.return, o);
      }
    }
    function Gd(t, e, a) {
      try {
        I(
          t,
          nh,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (i) {
        St(t, t.return, i);
      }
    }
    function yy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Vi(t.type) || t.tag === 4;
    }
    function jd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || yy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Vi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Lo(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        t = t.stateNode, e ? (ug(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (ug(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = wa));
      else if (i !== 4 && (i === 27 && Vi(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (Lo(t, e, a), t = t.sibling; t !== null; )
          Lo(t, e, a), t = t.sibling;
    }
    function xs(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (i !== 4 && (i === 27 && Vi(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (xs(t, e, a), t = t.sibling; t !== null; )
          xs(t, e, a), t = t.sibling;
    }
    function py(t) {
      for (var e, a = t.return; a !== null; ) {
        if (yy(a)) {
          e = a;
          break;
        }
        a = a.return;
      }
      if (e == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (e.tag) {
        case 27:
          e = e.stateNode, a = jd(t), xs(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (uh(a), e.flags &= -33), e = jd(t), xs(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = jd(t), Lo(
            t,
            a,
            e
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function gy(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        I(
          t,
          yu,
          t.type,
          a,
          e,
          t
        );
      } catch (i) {
        St(t, t.return, i);
      }
    }
    function vy(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function Kv(t, e) {
      if (t = t.containerInfo, aS = _v, t = td(t), Dm(t)) {
        if ("selectionStart" in t)
          var a = {
            start: t.selectionStart,
            end: t.selectionEnd
          };
        else
          t: {
            a = (a = t.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break t;
              }
              var d = 0, h = -1, y = -1, p = 0, A = 0, D = t, S = null;
              e: for (; ; ) {
                for (var B; D !== a || o !== 0 && D.nodeType !== 3 || (h = d + o), D !== f || i !== 0 && D.nodeType !== 3 || (y = d + i), D.nodeType === 3 && (d += D.nodeValue.length), (B = D.firstChild) !== null; )
                  S = D, D = B;
                for (; ; ) {
                  if (D === t) break e;
                  if (S === a && ++p === o && (h = d), S === f && ++A === i && (y = d), (B = D.nextSibling) !== null) break;
                  D = S, S = D.parentNode;
                }
                D = B;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (nS = {
        focusedElem: t,
        selectionRange: a
      }, _v = !1, Yl = e; Yl !== null; )
        if (e = Yl, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, Yl = t;
        else
          for (; Yl !== null; ) {
            switch (t = e = Yl, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Vp(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    af(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        af(t);
                        break;
                      default:
                        t.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, Yl = t;
              break;
            }
            Yl = e.return;
          }
    }
    function Xd(t, e, a) {
      var i = be(), o = Wa(), f = za(), d = Fa(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ca(t, a), h & 4 && Qp(a, Yn | Ru);
          break;
        case 1:
          if (Ca(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                at(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                at(a) || "instance"
              )), cu(a) ? (Be(), I(
                a,
                D1,
                a,
                t
              ), Ll()) : I(
                a,
                D1,
                a,
                t
              );
            else {
              var y = uu(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                at(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                at(a) || "instance"
              )), cu(a) ? (Be(), I(
                a,
                $S,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), Ll()) : I(
                a,
                $S,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && hy(a), h & 512 && Nc(a, a.return);
          break;
        case 3:
          if (e = Fn(), Ca(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              I(
                a,
                Co,
                h,
                y
              );
            } catch (A) {
              St(a, a.return, A);
            }
          }
          t.effectDuration += Mo(e);
          break;
        case 27:
          e === null && h & 4 && gy(a);
        case 26:
        case 5:
          if (Ca(t, a), e === null) {
            if (h & 4) qi(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                I(
                  a,
                  ng,
                  y,
                  t,
                  e,
                  a
                );
              } catch (A) {
                St(
                  a,
                  a.return,
                  A
                );
              }
            }
          }
          h & 512 && Nc(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Fn(), Ca(t, a), t = a.stateNode, t.effectDuration += Zl(h);
            try {
              I(
                a,
                my,
                a,
                e,
                Mf,
                t.effectDuration
              );
            } catch (A) {
              St(a, a.return, A);
            }
          } else Ca(t, a);
          break;
        case 31:
          Ca(t, a), h & 4 && by(t, a);
          break;
        case 13:
          Ca(t, a), h & 4 && Ty(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = ku.bind(
            null,
            a
          ), pg(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || io, !h) {
            e = e !== null && e.memoizedState !== null || bl, y = io;
            var p = bl;
            io = h, (bl = e) && !p ? (Dn(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & At) !== rt && 0 <= it && 0 <= ft && 0.05 < ft - it && ed(
              a,
              it,
              ft
            )) : Ca(t, a), io = y, bl = p;
          }
          break;
        case 30:
          break;
        default:
          Ca(t, a);
      }
      (a.mode & At) !== rt && 0 <= it && 0 <= ft && ((Le || 0.05 < xe) && yn(
        a,
        it,
        ft,
        xe,
        Ce
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < ft - it && (vy(
        a.return.alternate,
        a.return
      ) || Ja(
        a,
        it,
        ft,
        "Mount"
      ))), fl(i), Aa(o), Ce = f, Le = d;
    }
    function Ve(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Ve(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && sm(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function ve(t, e, a) {
      for (a = a.child; a !== null; )
        Sy(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function Sy(t, e, a) {
      if (al && typeof al.onCommitFiberUnmount == "function")
        try {
          al.onCommitFiberUnmount(Kc, a);
        } catch (p) {
          gu || (gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = be(), o = Wa(), f = za(), d = Fa();
      switch (a.tag) {
        case 26:
          bl || Pa(a, e), ve(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          bl || Pa(a, e);
          var h = Tl, y = nn;
          Vi(a.type) && (Tl = a.stateNode, nn = !1), ve(
            t,
            e,
            a
          ), I(
            a,
            ei,
            a.stateNode
          ), Tl = h, nn = y;
          break;
        case 5:
          bl || Pa(a, e);
        case 6:
          if (h = Tl, y = nn, Tl = null, ve(
            t,
            e,
            a
          ), Tl = h, nn = y, Tl !== null)
            if (nn)
              try {
                I(
                  a,
                  cg,
                  Tl,
                  a.stateNode
                );
              } catch (p) {
                St(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                I(
                  a,
                  ig,
                  Tl,
                  a.stateNode
                );
              } catch (p) {
                St(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          Tl !== null && (nn ? (t = Tl, jc(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), Zc(t)) : jc(Tl, a.stateNode));
          break;
        case 4:
          h = Tl, y = nn, Tl = a.stateNode.containerInfo, nn = !0, ve(
            t,
            e,
            a
          ), Tl = h, nn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ni(
            Qa,
            a,
            e
          ), bl || qd(
            a,
            e,
            Yn
          ), ve(
            t,
            e,
            a
          );
          break;
        case 1:
          bl || (Pa(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && Yd(
            a,
            e,
            h
          )), ve(
            t,
            e,
            a
          );
          break;
        case 21:
          ve(
            t,
            e,
            a
          );
          break;
        case 22:
          bl = (h = bl) || a.memoizedState !== null, ve(
            t,
            e,
            a
          ), bl = h;
          break;
        default:
          ve(
            t,
            e,
            a
          );
      }
      (a.mode & At) !== rt && 0 <= it && 0 <= ft && (Le || 0.05 < xe) && yn(
        a,
        it,
        ft,
        xe,
        Ce
      ), fl(i), Aa(o), Ce = f, Le = d;
    }
    function by(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          I(
            e,
            ih,
            t
          );
        } catch (a) {
          St(e, e.return, a);
        }
      }
    }
    function Ty(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          I(
            e,
            Vy,
            t
          );
        } catch (a) {
          St(e, e.return, a);
        }
    }
    function wp(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Bb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Bb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function xi(t, e) {
      var a = wp(t);
      e.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), vu)
            if (Fh !== null && kh !== null)
              Fo(kh, Fh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Yc.bind(null, t, i);
          i.then(o, o);
        }
      });
    }
    function Wl(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = t, f = e, d = a[i], h = be(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Vi(y.type)) {
                  Tl = y.stateNode, nn = !1;
                  break t;
                }
                break;
              case 5:
                Tl = y.stateNode, nn = !1;
                break t;
              case 3:
              case 4:
                Tl = y.stateNode.containerInfo, nn = !0;
                break t;
            }
            y = y.return;
          }
          if (Tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Sy(o, f, d), Tl = null, nn = !1, (d.mode & At) !== rt && 0 <= it && 0 <= ft && 0.05 < ft - it && Ja(
            d,
            it,
            ft,
            "Unmount"
          ), fl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          Ys(e, t), e = e.sibling;
    }
    function Ys(t, e) {
      var a = be(), i = Wa(), o = za(), f = Fa(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wl(e, t), Fl(t), h & 4 && (Ni(
            Qa | Ru,
            t,
            t.return
          ), Wu(Qa | Ru, t), qd(
            t,
            t.return,
            Yn | Ru
          ));
          break;
        case 1:
          if (Wl(e, t), Fl(t), h & 512 && (bl || d === null || Pa(d, d.return)), h & 64 && io && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = ci, Wl(e, t), Fl(t), h & 512 && (bl || d === null || Pa(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = t.memoizedState, d === null)
              if (h === null)
                if (t.stateNode === null) {
                  t: {
                    h = t.type, d = t.memoizedProps, y = y.ownerDocument || y;
                    e: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Sf] || p[Ae] || p.namespaceURI === bt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Ee(p, h, d), p[Ae] = t, Ge(p), h = p;
                        break t;
                      case "link":
                        var A = cf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (A) {
                          for (var D = 0; D < A.length; D++)
                            if (p = A[D], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Ee(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (A = cf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (D = 0; D < A.length; D++)
                            if (p = A[D], ae(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Ee(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Ae] = t, Ge(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  bg(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = fh(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? bg(
                y,
                t.type,
                t.stateNode
              ) : fh(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && Gd(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Wl(e, t), Fl(t), h & 512 && (bl || d === null || Pa(d, d.return)), d !== null && h & 4 && Gd(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Wl(e, t), Fl(t), h & 512 && (bl || d === null || Pa(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              I(
                t,
                uh,
                y
              );
            } catch (k) {
              St(t, t.return, k);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, Gd(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (G1 = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Wl(e, t), Fl(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              I(
                t,
                $v,
                y,
                d,
                h
              );
            } catch (k) {
              St(t, t.return, k);
            }
          }
          break;
        case 3:
          if (y = Fn(), Mv = null, p = ci, ci = ch(e.containerInfo), Wl(e, t), ci = p, Fl(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              I(
                t,
                Qy,
                e.containerInfo
              );
            } catch (k) {
              St(t, t.return, k);
            }
          G1 && (G1 = !1, Jp(t)), e.effectDuration += Mo(
            y
          );
          break;
        case 4:
          h = ci, ci = ch(
            t.stateNode.containerInfo
          ), Wl(e, t), Fl(t), ci = h;
          break;
        case 12:
          h = Fn(), Wl(e, t), Fl(t), t.stateNode.effectDuration += Zl(h);
          break;
        case 31:
          Wl(e, t), Fl(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, xi(t, h)));
          break;
        case 13:
          Wl(e, t), Fl(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (dv = yl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, xi(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var S = d !== null && d.memoizedState !== null, B = io, K = bl;
          if (io = B || y, bl = K || S, Wl(e, t), bl = K, io = B, S && !y && !B && !K && (t.mode & At) !== rt && 0 <= it && 0 <= ft && 0.05 < ft - it && ed(
            t,
            it,
            ft
          ), Fl(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~A0 : e._visibility | A0, !y || d === null || S || io || bl || (Yi(t), (t.mode & At) !== rt && 0 <= it && 0 <= ft && 0.05 < ft - it && Ja(
              t,
              it,
              ft,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  S = d = e;
                  try {
                    p = S.stateNode, y ? I(
                      S,
                      fg,
                      p
                    ) : I(
                      S,
                      dg,
                      S.stateNode,
                      S.memoizedProps
                    );
                  } catch (k) {
                    St(S, S.return, k);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  S = e;
                  try {
                    A = S.stateNode, y ? I(
                      S,
                      sg,
                      A
                    ) : I(
                      S,
                      hg,
                      A,
                      S.memoizedProps
                    );
                  } catch (k) {
                    St(S, S.return, k);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  S = e;
                  try {
                    D = S.stateNode, y ? I(
                      S,
                      og,
                      D
                    ) : I(
                      S,
                      rg,
                      S.stateNode
                    );
                  } catch (k) {
                    St(S, S.return, k);
                  }
                }
              } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break t;
                d === e && (d = null), e = e.return;
              }
              d === e && (d = null), e.sibling.return = e.return, e = e.sibling;
            }
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, xi(t, d))));
          break;
        case 19:
          Wl(e, t), Fl(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, xi(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Wl(e, t), Fl(t);
      }
      (t.mode & At) !== rt && 0 <= it && 0 <= ft && ((Le || 0.05 < xe) && yn(
        t,
        it,
        ft,
        xe,
        Ce
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < ft - it && (vy(
        t.return.alternate,
        t.return
      ) || Ja(
        t,
        it,
        ft,
        "Mount"
      ))), fl(a), Aa(i), Ce = o, Le = f;
    }
    function Fl(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          I(t, py, t);
        } catch (a) {
          St(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function Jp(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          Jp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Ca(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          Xd(t, e.alternate, e), e = e.sibling;
    }
    function Qd(t) {
      var e = be(), a = Wa(), i = za(), o = Fa();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qd(
            t,
            t.return,
            Yn
          ), Yi(t);
          break;
        case 1:
          Pa(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && Yd(
            t,
            t.return,
            f
          ), Yi(t);
          break;
        case 27:
          I(
            t,
            ei,
            t.stateNode
          );
        case 26:
        case 5:
          Pa(t, t.return), Yi(t);
          break;
        case 22:
          t.memoizedState === null && Yi(t);
          break;
        case 30:
          Yi(t);
          break;
        default:
          Yi(t);
      }
      (t.mode & At) !== rt && 0 <= it && 0 <= ft && (Le || 0.05 < xe) && yn(
        t,
        it,
        ft,
        xe,
        Ce
      ), fl(e), Aa(a), Ce = i, Le = o;
    }
    function Yi(t) {
      for (t = t.child; t !== null; )
        Qd(t), t = t.sibling;
    }
    function Ey(t, e, a, i) {
      var o = be(), f = Wa(), d = za(), h = Fa(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Dn(
            t,
            a,
            i
          ), Qp(a, Yn);
          break;
        case 1:
          if (Dn(
            t,
            a,
            i
          ), e = a.stateNode, typeof e.componentDidMount == "function" && I(
            a,
            D1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              I(
                a,
                Zm,
                e,
                t
              );
            } catch (p) {
              St(a, a.return, p);
            }
          }
          i && y & 64 && hy(a), Nc(a, a.return);
          break;
        case 27:
          gy(a);
        case 26:
        case 5:
          Dn(
            t,
            a,
            i
          ), i && e === null && y & 4 && qi(a), Nc(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = Fn(), Dn(
              t,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Zl(y);
            try {
              I(
                a,
                my,
                a,
                e,
                Mf,
                i.effectDuration
              );
            } catch (p) {
              St(a, a.return, p);
            }
          } else
            Dn(
              t,
              a,
              i
            );
          break;
        case 31:
          Dn(
            t,
            a,
            i
          ), i && y & 4 && by(t, a);
          break;
        case 13:
          Dn(
            t,
            a,
            i
          ), i && y & 4 && Ty(t, a);
          break;
        case 22:
          a.memoizedState === null && Dn(
            t,
            a,
            i
          ), Nc(a, a.return);
          break;
        case 30:
          break;
        default:
          Dn(
            t,
            a,
            i
          );
      }
      (a.mode & At) !== rt && 0 <= it && 0 <= ft && (Le || 0.05 < xe) && yn(
        a,
        it,
        ft,
        xe,
        Ce
      ), fl(o), Aa(f), Ce = d, Le = h;
    }
    function Dn(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        Ey(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function Gs(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && gc(t), a != null && ss(a));
    }
    function js(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (gc(e), t != null && ss(t));
    }
    function Ha(t, e, a, i, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Ay(
            t,
            e,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Ay(t, e, a, i, o) {
      var f = be(), d = Wa(), h = za(), y = Fa(), p = Af, A = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & At) !== rt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            Ul,
            a
          ), Ha(
            t,
            e,
            a,
            i,
            o
          ), A & 2048 && Ns(e, Va | Ru);
          break;
        case 1:
          (e.mode & At) !== rt && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? Mm(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            Ul,
            a
          )), Ha(
            t,
            e,
            a,
            i,
            o
          );
          break;
        case 3:
          var D = Fn(), S = Ul;
          Ul = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Ha(
            t,
            e,
            a,
            i,
            o
          ), Ul = S, A & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), i = e.memoizedState.cache, i !== a && (gc(i), a != null && ss(a))), t.passiveEffectDuration += Mo(
            D
          );
          break;
        case 12:
          if (A & 2048) {
            A = Fn(), Ha(
              t,
              e,
              a,
              i,
              o
            ), t = e.stateNode, t.passiveEffectDuration += Zl(A);
            try {
              I(
                e,
                Lp,
                e,
                e.alternate,
                Mf,
                t.passiveEffectDuration
              );
            } catch (B) {
              St(e, e.return, B);
            }
          } else
            Ha(
              t,
              e,
              a,
              i,
              o
            );
          break;
        case 31:
          A = Ul, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D !== null && S === null ? (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Ul = !1, D = D.hydrationErrors, D !== null && Mm(
            e,
            e.actualStartTime,
            o,
            D
          )) : Ul = !0) : Ul = !1, Ha(
            t,
            e,
            a,
            i,
            o
          ), Ul = A;
          break;
        case 13:
          A = Ul, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D === null || D.dehydrated === null || S !== null && S.dehydrated !== null ? Ul = !1 : (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Ul = !1, D = D.hydrationErrors, D !== null && Mm(
            e,
            e.actualStartTime,
            o,
            D
          )) : Ul = !0), Ha(
            t,
            e,
            a,
            i,
            o
          ), Ul = A;
          break;
        case 23:
          break;
        case 22:
          S = e.stateNode, D = e.alternate, e.memoizedState !== null ? S._visibility & Fc ? Ha(
            t,
            e,
            a,
            i,
            o
          ) : qc(
            t,
            e,
            a,
            i,
            o
          ) : S._visibility & Fc ? Ha(
            t,
            e,
            a,
            i,
            o
          ) : (S._visibility |= Fc, Gi(
            t,
            e,
            a,
            i,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & At) === rt || Ul || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && ed(e, t, o), 0 <= it && 0 <= ft && 0.05 < ft - it && ed(
            e,
            it,
            ft
          ))), A & 2048 && Gs(
            D,
            e
          );
          break;
        case 24:
          Ha(
            t,
            e,
            a,
            i,
            o
          ), A & 2048 && js(e.alternate, e);
          break;
        default:
          Ha(
            t,
            e,
            a,
            i,
            o
          );
      }
      (e.mode & At) !== rt && ((t = !Ul && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && Ja(
        e,
        a,
        o,
        "Mount"
      )), 0 <= it && 0 <= ft && ((Le || 0.05 < xe) && yn(
        e,
        it,
        ft,
        xe,
        Ce
      ), t && 0.05 < ft - it && Ja(
        e,
        it,
        ft,
        "Mount"
      ))), fl(f), Aa(d), Ce = h, Le = y, Af = p;
    }
    function Gi(t, e, a, i, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        Xs(
          t,
          e,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function Xs(t, e, a, i, o, f) {
      var d = be(), h = Wa(), y = za(), p = Fa(), A = Af;
      o && (e.mode & At) !== rt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
        e,
        e.actualStartTime,
        f,
        Ul,
        a
      );
      var D = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Gi(
            t,
            e,
            a,
            i,
            o,
            f
          ), Ns(e, Va);
          break;
        case 23:
          break;
        case 22:
          var S = e.stateNode;
          e.memoizedState !== null ? S._visibility & Fc ? Gi(
            t,
            e,
            a,
            i,
            o,
            f
          ) : qc(
            t,
            e,
            a,
            i,
            f
          ) : (S._visibility |= Fc, Gi(
            t,
            e,
            a,
            i,
            o,
            f
          )), o && D & 2048 && Gs(
            e.alternate,
            e
          );
          break;
        case 24:
          Gi(
            t,
            e,
            a,
            i,
            o,
            f
          ), o && D & 2048 && js(e.alternate, e);
          break;
        default:
          Gi(
            t,
            e,
            a,
            i,
            o,
            f
          );
      }
      (e.mode & At) !== rt && 0 <= it && 0 <= ft && (Le || 0.05 < xe) && yn(
        e,
        it,
        ft,
        xe,
        Ce
      ), fl(d), Aa(h), Ce = y, Le = p, Af = A;
    }
    function qc(t, e, a, i, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = i, p = e !== null ? e.actualStartTime : o, A = Af;
          (f.mode & At) !== rt && 0 < f.actualStartTime && (f.flags & 1) !== 0 && ld(
            f,
            f.actualStartTime,
            p,
            Ul,
            h
          );
          var D = f.flags;
          switch (f.tag) {
            case 22:
              qc(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && Gs(f.alternate, f);
              break;
            case 24:
              qc(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && js(f.alternate, f);
              break;
            default:
              qc(
                d,
                f,
                h,
                y,
                p
              );
          }
          Af = A, f = e;
        }
    }
    function xc(t, e, a) {
      if (t.subtreeFlags & Z0)
        for (t = t.child; t !== null; )
          Vd(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function Vd(t, e, a) {
      switch (t.tag) {
        case 26:
          xc(
            t,
            e,
            a
          ), t.flags & Z0 && t.memoizedState !== null && Ky(
            a,
            ci,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          xc(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var i = ci;
          ci = ch(
            t.stateNode.containerInfo
          ), xc(
            t,
            e,
            a
          ), ci = i;
          break;
        case 22:
          t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = Z0, Z0 = 16777216, xc(
            t,
            e,
            a
          ), Z0 = i) : xc(
            t,
            e,
            a
          ));
          break;
        default:
          xc(
            t,
            e,
            a
          );
      }
    }
    function zy(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Ba(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a], o = be();
            Yl = i, ou(
              i,
              t
            ), (i.mode & At) !== rt && 0 <= it && 0 <= ft && 0.05 < ft - it && Ja(
              i,
              it,
              ft,
              "Unmount"
            ), fl(o);
          }
        zy(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Zd(t), t = t.sibling;
    }
    function Zd(t) {
      var e = be(), a = Wa(), i = za(), o = Fa();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ba(t), t.flags & 2048 && xd(
            t,
            t.return,
            Va | Ru
          );
          break;
        case 3:
          var f = Fn();
          Ba(t), t.stateNode.passiveEffectDuration += Mo(f);
          break;
        case 12:
          f = Fn(), Ba(t), t.stateNode.passiveEffectDuration += Zl(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & Fc && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~Fc, Ld(t), (t.mode & At) !== rt && 0 <= it && 0 <= ft && 0.05 < ft - it && Ja(
            t,
            it,
            ft,
            "Disconnect"
          )) : Ba(t);
          break;
        default:
          Ba(t);
      }
      (t.mode & At) !== rt && 0 <= it && 0 <= ft && (Le || 0.05 < xe) && yn(
        t,
        it,
        ft,
        xe,
        Ce
      ), fl(e), Aa(a), Le = o, Ce = i;
    }
    function Ld(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a], o = be();
            Yl = i, ou(
              i,
              t
            ), (i.mode & At) !== rt && 0 <= it && 0 <= ft && 0.05 < ft - it && Ja(
              i,
              it,
              ft,
              "Unmount"
            ), fl(o);
          }
        zy(t);
      }
      for (t = t.child; t !== null; )
        Dy(t), t = t.sibling;
    }
    function Dy(t) {
      var e = be(), a = Wa(), i = za(), o = Fa();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          xd(
            t,
            t.return,
            Va
          ), Ld(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & Fc && (f._visibility &= ~Fc, Ld(t));
          break;
        default:
          Ld(t);
      }
      (t.mode & At) !== rt && 0 <= it && 0 <= ft && (Le || 0.05 < xe) && yn(
        t,
        it,
        ft,
        xe,
        Ce
      ), fl(e), Aa(a), Le = o, Ce = i;
    }
    function ou(t, e) {
      for (; Yl !== null; ) {
        var a = Yl, i = a, o = e, f = be(), d = Wa(), h = za(), y = Fa();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            xd(
              i,
              o,
              Va
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && gc(o));
            break;
          case 24:
            ss(i.memoizedState.cache);
        }
        if ((i.mode & At) !== rt && 0 <= it && 0 <= ft && (Le || 0.05 < xe) && yn(
          i,
          it,
          ft,
          xe,
          Ce
        ), fl(f), Aa(d), Le = y, Ce = h, i = a.child, i !== null) i.return = a, Yl = i;
        else
          t: for (a = t; Yl !== null; ) {
            if (i = Yl, f = i.sibling, d = i.return, Ve(i), i === a) {
              Yl = null;
              break t;
            }
            if (f !== null) {
              f.return = d, Yl = f;
              break t;
            }
            Yl = d;
          }
      }
    }
    function Oy() {
      qT.forEach(function(t) {
        return t();
      });
    }
    function My() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function Bl(t) {
      if ((Vt & _l) !== Gl && Dt !== 0)
        return Dt & -Dt;
      var e = q.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), Yy()) : sp();
    }
    function wo() {
      if (cn === 0)
        if ((Dt & 536870912) === 0 || Nt) {
          var t = fr;
          fr <<= 1, (fr & 3932160) === 0 && (fr = 262144), cn = t;
        } else cn = 536870912;
      return t = xn.current, t !== null && (t.flags |= 32), cn;
    }
    function dt(t, e, a) {
      if (tm && console.error("useInsertionEffect must not schedule updates."), W1 && (pv = !0), (t === pe && (fe === Dr || fe === Or) || t.cancelPendingCommit !== null) && (fu(t, 0), tn(
        t,
        Dt,
        cn,
        !1
      )), ri(t, a), (Vt & _l) !== Gl && t === pe) {
        if (pu)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = Mt && at(Mt) || "Unknown", $b.has(t) || ($b.add(t), e = at(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              Kb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Kb = !0);
          }
      } else
        vu && oa(t, e, a), Ls(e), t === pe && ((Vt & _l) === Gl && (qf |= a), Ye === Hf && tn(
          t,
          Dt,
          cn,
          !1
        )), da(t);
    }
    function Kp(t, e, a) {
      if ((Vt & (_l | Gn)) !== Gl)
        throw Error("Should not already be working.");
      if (Dt !== 0 && Mt !== null) {
        var i = Mt, o = yl();
        switch (XS) {
          case J0:
          case Dr:
            var f = U0;
            ze && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                bu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              bu,
              void 0,
              "primary-light"
            ));
            break;
          case Or:
            f = U0, ze && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                bu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              bu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            ze && (i = o - U0, 3 > i || console.timeStamp(
              "Blocked",
              U0,
              o,
              bu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || zl(t, e)) ? Fu(t, e) : $o(t, e, !0);
      var d = a;
      do {
        if (f === co) {
          Ih && !a && tn(t, e, 0, !1), e = fe, U0 = gl(), XS = e;
          break;
        } else {
          if (i = yl(), o = t.current.alternate, d && !Wp(o)) {
            mn(e), o = xl, f = i, !ze || f <= o || (ke ? ke.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                jt,
                xt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              jt,
              xt,
              "error"
            )), ji(e, i), f = $o(t, e, !1), d = !1;
            continue;
          }
          if (f === zr) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              mn(e), Rm(
                xl,
                i,
                e,
                ke
              ), ji(e, i), e = h;
              t: {
                i = t, f = d, d = $0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (fu(i, h).flags |= 256), h = $o(
                  i,
                  h,
                  !1
                ), h !== zr) {
                  if (Q1 && !y) {
                    i.errorRecoveryDisabledLanes |= f, qf |= f, f = Hf;
                    break t;
                  }
                  i = Za, Za = d, i !== null && (Za === null ? Za = i : Za.push.apply(
                    Za,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== zr) continue;
              i = yl();
            }
          }
          if (f === w0) {
            mn(e), Rm(
              xl,
              i,
              e,
              ke
            ), ji(e, i), fu(t, 0), tn(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case co:
              case w0:
                throw Error("Root did not complete. This is a bug in React.");
              case Hf:
                if ((e & 4194048) !== e) break;
              case ov:
                mn(e), Ap(
                  xl,
                  i,
                  e,
                  ke
                ), ji(e, i), o = e, (o & 127) !== 0 ? Kg = i : (o & 4194048) !== 0 && ($g = i), tn(
                  a,
                  e,
                  cn,
                  !Bf
                );
                break t;
              case zr:
                Za = null;
                break;
              case cv:
              case Nb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (q.actQueue !== null)
              he(
                a,
                o,
                e,
                Za,
                W0,
                rv,
                cn,
                qf,
                Mr,
                f,
                null,
                null,
                xl,
                i
              );
            else {
              if ((e & 62914560) === e && (d = dv + Yb - yl(), 10 < d)) {
                if (tn(
                  a,
                  e,
                  cn,
                  !Bf
                ), xr(a, 0, !0) !== 0) break t;
                oi = e, a.timeoutHandle = l2(
                  $p.bind(
                    null,
                    a,
                    o,
                    Za,
                    W0,
                    rv,
                    e,
                    cn,
                    qf,
                    Mr,
                    Bf,
                    f,
                    "Throttled",
                    xl,
                    i
                  ),
                  d
                );
                break t;
              }
              $p(
                a,
                o,
                Za,
                W0,
                rv,
                e,
                cn,
                qf,
                Mr,
                Bf,
                f,
                null,
                xl,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      da(t);
    }
    function $p(t, e, a, i, o, f, d, h, y, p, A, D, S, B) {
      t.timeoutHandle = Hr;
      var K = e.subtreeFlags, k = null;
      if ((K & 8192 || (K & 16785408) === 16785408) && (k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wa
      }, Vd(e, f, k), K = (f & 62914560) === f ? dv - yl() : (f & 4194048) === f ? xb - yl() : 0, K = sh(k, K), K !== null)) {
        oi = f, t.cancelPendingCommit = K(
          he.bind(
            null,
            t,
            e,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            A,
            k,
            k.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < k.count ? 0 < k.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : k.imgCount === 1 ? "Suspended on an Image" : 0 < k.imgCount ? "Suspended on Images" : null,
            S,
            B
          )
        ), tn(
          t,
          f,
          d,
          !p
        );
        return;
      }
      he(
        t,
        e,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        A,
        k,
        D,
        S,
        B
      );
    }
    function Wp(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!ja(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = e.child, e.subtreeFlags & 16384 && a !== null)
          a.return = e, e = a;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return !0;
    }
    function tn(t, e, a, i) {
      e &= ~V1, e &= ~qf, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - Ml(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && fm(t, a, e);
    }
    function Na() {
      return (Vt & (_l | Gn)) === Gl ? (ru(0), !1) : !0;
    }
    function wd() {
      if (Mt !== null) {
        if (fe === un)
          var t = Mt.return;
        else
          t = Mt, Do(), zi(t), Zh = null, G0 = 0, t = Mt;
        for (; t !== null; )
          dy(t.alternate, t), t = t.return;
        Mt = null;
      }
    }
    function ji(t, e) {
      (t & 127) !== 0 && (yr = e), (t & 4194048) !== 0 && (eo = e), (t & 62914560) !== 0 && (GS = e), (t & 2080374784) !== 0 && (jS = e);
    }
    function fu(t, e) {
      ze && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        xt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        xt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        xt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        xt,
        "primary-light"
      ));
      var a = xl;
      if (xl = gl(), Dt !== 0 && 0 < a) {
        if (mn(Dt), Ye === cv || Ye === Hf)
          Ap(
            a,
            xl,
            e,
            ke
          );
        else {
          var i = xl, o = ke;
          if (ze && !(i <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                jt,
                xt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              jt,
              xt,
              f
            );
          }
        }
        ji(Dt, xl);
      }
      if (a = ke, ke = null, (e & 127) !== 0) {
        ke = O0, o = 0 <= Fi && Fi < yr ? yr : Fi, i = 0 <= pr && pr < yr ? yr : pr, f = 0 <= i ? i : 0 <= o ? o : xl, 0 <= Kg ? (mn(2), zp(
          Kg,
          f,
          e,
          a
        )) : Wg & 127, a = o;
        var h = i, y = M0, p = 0 < Xh, A = Rf === D0, D = Rf === Jg;
        if (o = xl, i = O0, f = b1, d = T1, ze) {
          if (jt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var S = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                jt,
                xt,
                S
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              jt,
              xt,
              S
            );
          }
          o > a && (h = A ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", A = D ? "Promise Resolved" : A ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", D = [], d != null && D.push(["Component name", d]), f != null && D.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: D,
                track: jt,
                trackGroup: xt,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              A,
              a
            )
          ) : performance.measure(A, a));
        }
        Fi = -1.1, Rf = 0, T1 = b1 = null, Kg = -1.1, Xh = pr, pr = -1.1, yr = gl();
      }
      if ((e & 4194048) !== 0 && (ke = R0, o = 0 <= lo && lo < eo ? eo : lo, a = 0 <= Ou && Ou < eo ? eo : Ou, i = 0 <= Uf && Uf < eo ? eo : Uf, f = 0 <= i ? i : 0 <= a ? a : xl, 0 <= $g ? (mn(256), zp(
        $g,
        f,
        e,
        ke
      )) : Wg & 4194048, D = i, h = gr, y = 0 < _f, p = E1 === Jg, f = xl, i = R0, d = xS, A = YS, ze && (jt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < D ? D > o && (D = o) : D = o, o > D && h !== null && (S = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          D,
          o,
          jt,
          xt,
          S
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        D,
        o,
        jt,
        xt,
        S
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          jt,
          xt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        jt,
        xt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", D = [], A != null && D.push(["Component name", A]), d != null && D.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: D,
            track: jt,
            trackGroup: xt,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Ou = lo = -1.1, E1 = 0, $g = -1.1, _f = Uf, Uf = -1.1, eo = gl()), (e & 62914560) !== 0 && (Wg & 62914560) !== 0 && (mn(4194304), Um(GS, xl)), (e & 2080374784) !== 0 && (Wg & 2080374784) !== 0 && (mn(268435456), Um(jS, xl)), a = t.timeoutHandle, a !== Hr && (t.timeoutHandle = Hr, $T(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), oi = 0, wd(), pe = t, Mt = a = $n(
        t.current,
        null
      ), Dt = e, fe = un, jn = null, Bf = !1, Ih = zl(t, e), Q1 = !1, Ye = co, Mr = cn = V1 = qf = Nf = 0, Za = $0 = null, rv = !1, (e & 8) !== 0 && (e |= e & 32), i = t.entangledLanes, i !== 0)
        for (t = t.entanglements, i &= e; 0 < i; )
          o = 31 - Ml(i), f = 1 << o, e |= t[o], i &= ~f;
      return Ii = e, ad(), t = _S(), 1e3 < t - US && (q.recentlyCreatedOwnerStacks = 0, US = t), ui.discardPendingWarnings(), a;
    }
    function On(t, e) {
      mt = null, q.H = V0, q.getCurrentStack = null, pu = !1, pa = null, e === Vh || e === Pg ? (e = bc(), fe = J0) : e === O1 ? (e = bc(), fe = qb) : fe = e === x1 ? X1 : e !== null && typeof e == "object" && typeof e.then == "function" ? K0 : fv, jn = e;
      var a = Mt;
      a === null ? (Ye = w0, Us(
        t,
        Vl(e, t.current)
      )) : a.mode & At && sd(a);
    }
    function Ry() {
      var t = xn.current;
      return t === null ? !0 : (Dt & 4194048) === Dt ? Mu === null : (Dt & 62914560) === Dt || (Dt & 536870912) !== 0 ? t === Mu : !1;
    }
    function Jd() {
      var t = q.H;
      return q.H = V0, t === null ? V0 : t;
    }
    function Uy() {
      var t = q.A;
      return q.A = NT, t;
    }
    function Jo(t) {
      ke === null && (ke = t._debugTask == null ? null : t._debugTask);
    }
    function Ko() {
      Ye = Hf, Bf || (Dt & 4194048) !== Dt && xn.current !== null || (Ih = !0), (Nf & 134217727) === 0 && (qf & 134217727) === 0 || pe === null || tn(
        pe,
        Dt,
        cn,
        !1
      );
    }
    function $o(t, e, a) {
      var i = Vt;
      Vt |= _l;
      var o = Jd(), f = Uy();
      if (pe !== t || Dt !== e) {
        if (vu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (Fo(t, Dt), d.clear()), Bu(t, e);
        }
        W0 = null, fu(t, e);
      }
      e = !1, d = Ye;
      t: do
        try {
          if (fe !== un && Mt !== null) {
            var h = Mt, y = jn;
            switch (fe) {
              case X1:
                wd(), d = ov;
                break t;
              case J0:
              case Dr:
              case Or:
              case K0:
                xn.current === null && (e = !0);
                var p = fe;
                if (fe = un, jn = null, Wo(t, h, y, p), a && Ih) {
                  d = co;
                  break t;
                }
                break;
              default:
                p = fe, fe = un, jn = null, Wo(t, h, y, p);
            }
          }
          _y(), d = Ye;
          break;
        } catch (A) {
          On(t, A);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Do(), Vt = i, q.H = o, q.A = f, Mt === null && (pe = null, Dt = 0, ad()), d;
    }
    function _y() {
      for (; Mt !== null; ) Kd(Mt);
    }
    function Fu(t, e) {
      var a = Vt;
      Vt |= _l;
      var i = Jd(), o = Uy();
      if (pe !== t || Dt !== e) {
        if (vu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (Fo(t, Dt), f.clear()), Bu(t, e);
        }
        W0 = null, hv = yl() + Gb, fu(t, e);
      } else
        Ih = zl(
          t,
          e
        );
      t: do
        try {
          if (fe !== un && Mt !== null)
            e: switch (e = Mt, f = jn, fe) {
              case fv:
                fe = un, jn = null, Wo(
                  t,
                  e,
                  f,
                  fv
                );
                break;
              case Dr:
              case Or:
                if (Qm(f)) {
                  fe = un, jn = null, Cy(e);
                  break;
                }
                e = function() {
                  fe !== Dr && fe !== Or || pe !== t || (fe = sv), da(t);
                }, f.then(e, e);
                break t;
              case J0:
                fe = sv;
                break t;
              case qb:
                fe = j1;
                break t;
              case sv:
                Qm(f) ? (fe = un, jn = null, Cy(e)) : (fe = un, jn = null, Wo(
                  t,
                  e,
                  f,
                  sv
                ));
                break;
              case j1:
                var d = null;
                switch (Mt.tag) {
                  case 26:
                    d = Mt.memoizedState;
                  case 5:
                  case 27:
                    var h = Mt;
                    if (d ? Ut(d) : h.stateNode.complete) {
                      fe = un, jn = null;
                      var y = h.sibling;
                      if (y !== null) Mt = y;
                      else {
                        var p = h.return;
                        p !== null ? (Mt = p, Qs(p)) : Mt = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                fe = un, jn = null, Wo(
                  t,
                  e,
                  f,
                  j1
                );
                break;
              case K0:
                fe = un, jn = null, Wo(
                  t,
                  e,
                  f,
                  K0
                );
                break;
              case X1:
                wd(), Ye = ov;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          q.actQueue !== null ? _y() : We();
          break;
        } catch (A) {
          On(t, A);
        }
      while (!0);
      return Do(), q.H = i, q.A = o, Vt = a, Mt !== null ? co : (pe = null, Dt = 0, ad(), Ye);
    }
    function We() {
      for (; Mt !== null && !Th(); )
        Kd(Mt);
    }
    function Kd(t) {
      var e = t.alternate;
      (t.mode & At) !== rt ? (ju(t), e = I(
        t,
        Bs,
        e,
        t,
        Ii
      ), sd(t)) : e = I(
        t,
        Bs,
        e,
        t,
        Ii
      ), t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Mt = e;
    }
    function Cy(t) {
      var e = I(t, ml, t);
      t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Mt = e;
    }
    function ml(t) {
      var e = t.alternate, a = (t.mode & At) !== rt;
      switch (a && ju(t), t.tag) {
        case 15:
        case 0:
          e = iy(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            Dt
          );
          break;
        case 11:
          e = iy(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            Dt
          );
          break;
        case 5:
          zi(t);
        default:
          dy(e, t), t = Mt = Bm(t, Ii), e = Bs(e, t, Ii);
      }
      return a && sd(t), e;
    }
    function Wo(t, e, a, i) {
      Do(), zi(e), Zh = null, G0 = 0;
      var o = e.return;
      try {
        if (Pm(
          t,
          o,
          e,
          a,
          Dt
        )) {
          Ye = w0, Us(
            t,
            Vl(a, t.current)
          ), Mt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Mt = o, f;
        Ye = w0, Us(
          t,
          Vl(a, t.current)
        ), Mt = null;
        return;
      }
      e.flags & 32768 ? (Nt || i === fv ? t = !0 : Ih || (Dt & 536870912) !== 0 ? t = !1 : (Bf = t = !0, (i === Dr || i === Or || i === J0 || i === K0) && (i = xn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Hy(e, t)) : Qs(e);
    }
    function Qs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Hy(
            e,
            Bf
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, ju(e), a = I(
          e,
          ry,
          a,
          e,
          Ii
        ), (e.mode & At) !== rt && rs(e), a !== null) {
          Mt = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          Mt = e;
          return;
        }
        Mt = e = t;
      } while (e !== null);
      Ye === co && (Ye = Nb);
    }
    function Hy(t, e) {
      do {
        var a = Xp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, Mt = a;
          return;
        }
        if ((t.mode & At) !== rt) {
          rs(t), a = t.actualDuration;
          for (var i = t.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          Mt = t;
          return;
        }
        Mt = t = a;
      } while (t !== null);
      Ye = ov, Mt = null;
    }
    function he(t, e, a, i, o, f, d, h, y, p, A, D, S, B) {
      t.cancelPendingCommit = null;
      do
        Vs();
      while (El !== Yf);
      if (ui.flushLegacyContextWarning(), ui.flushPendingUnsafeLifecycleWarnings(), (Vt & (_l | Gn)) !== Gl)
        throw Error("Should not already be working.");
      if (mn(a), p === zr ? Rm(
        S,
        B,
        a,
        ke
      ) : i !== null ? Zv(
        S,
        B,
        a,
        i,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        ke
      ) : Vv(
        S,
        B,
        a,
        ke
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= y1, Gv(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === pe && (Mt = pe = null, Dt = 0), Ph = e, Gf = t, oi = a, w1 = f, K1 = o, Lb = i, J1 = B, wb = D, fi = mv, Jb = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ko(Jc, function() {
          return ep = window.event, fi === mv && (fi = L1), Zs(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), to = null, Mf = gl(), D !== null && Lv(
          B,
          Mf,
          D,
          ke
        ), i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null, o = $t.p, $t.p = nl, d = Vt, Vt |= Gn;
          try {
            Kv(t, e, a);
          } finally {
            Vt = d, $t.p = o, q.T = i;
          }
        }
        El = Xb, kl(), su(), By();
      }
    }
    function kl() {
      if (El === Xb) {
        El = Yf;
        var t = Gf, e = Ph, a = oi, i = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null;
          var o = $t.p;
          $t.p = nl;
          var f = Vt;
          Vt |= Gn;
          try {
            Fh = a, kh = t, vc(), Ys(e, t), kh = Fh = null, a = nS;
            var d = td(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Sp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Dm(h)) {
                var p = y.start, A = y.end;
                if (A === void 0 && (A = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    A,
                    h.value.length
                  );
                else {
                  var D = h.ownerDocument || document, S = D && D.defaultView || window;
                  if (S.getSelection) {
                    var B = S.getSelection(), K = h.textContent.length, k = Math.min(
                      y.start,
                      K
                    ), Se = y.end === void 0 ? k : Math.min(y.end, K);
                    !B.extend && k > Se && (d = Se, Se = k, k = d);
                    var Yt = vp(
                      h,
                      k
                    ), v = vp(
                      h,
                      Se
                    );
                    if (Yt && v && (B.rangeCount !== 1 || B.anchorNode !== Yt.node || B.anchorOffset !== Yt.offset || B.focusNode !== v.node || B.focusOffset !== v.offset)) {
                      var b = D.createRange();
                      b.setStart(Yt.node, Yt.offset), B.removeAllRanges(), k > Se ? (B.addRange(b), B.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), B.addRange(b));
                    }
                  }
                }
              }
              for (D = [], B = h; B = B.parentNode; )
                B.nodeType === 1 && D.push({
                  element: B,
                  left: B.scrollLeft,
                  top: B.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < D.length; h++) {
                var E = D[h];
                E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
              }
            }
            _v = !!aS, nS = aS = null;
          } finally {
            Vt = f, $t.p = o, q.T = i;
          }
        }
        t.current = e, El = Qb;
      }
    }
    function su() {
      if (El === Qb) {
        El = Yf;
        var t = Jb;
        if (t !== null) {
          Mf = gl();
          var e = Pc, a = Mf;
          !ze || a <= e || console.timeStamp(
            t,
            e,
            a,
            jt,
            xt,
            "secondary-light"
          );
        }
        t = Gf, e = Ph, a = oi;
        var i = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || i) {
          i = q.T, q.T = null;
          var o = $t.p;
          $t.p = nl;
          var f = Vt;
          Vt |= Gn;
          try {
            Fh = a, kh = t, vc(), Xd(
              t,
              e.alternate,
              e
            ), kh = Fh = null;
          } finally {
            Vt = f, $t.p = o, q.T = i;
          }
        }
        t = J1, e = wb, Pc = gl(), t = e === null ? t : Mf, e = Pc, a = fi === Z1, i = ke, to !== null ? Dp(
          t,
          e,
          to,
          !1,
          i
        ) : !ze || e <= t || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            jt,
            xt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          jt,
          xt,
          a ? "error" : "secondary-dark"
        )), El = Vb;
      }
    }
    function By() {
      if (El === Zb || El === Vb) {
        if (El === Zb) {
          var t = Pc;
          Pc = gl();
          var e = Pc, a = fi === Z1;
          !ze || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            jt,
            xt,
            a ? " error" : "secondary-light"
          ), fi !== Z1 && (fi = jb);
        }
        El = Yf, Eh(), t = Gf;
        var i = Ph;
        e = oi, a = Lb;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? El = yv : (El = Yf, Ph = Gf = null, Ny(
          t,
          t.pendingLanes
        ), Rr = 0, k0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (xf = null), o || Fd(t), f = Xl(e), i = i.stateNode, al && typeof al.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case nl:
                var h = s0;
                break;
              case Rl:
                h = Ah;
                break;
              case ql:
                h = Jc;
                break;
              case Ki:
                h = zh;
                break;
              default:
                h = Jc;
            }
            al.onCommitFiberRoot(
              Kc,
              i,
              h,
              d
            );
          } catch (D) {
            gu || (gu = !0, console.error(
              "React instrumentation encountered an error: %o",
              D
            ));
          }
        if (vu && t.memoizedUpdaters.clear(), Oy(), a !== null) {
          d = q.T, h = $t.p, $t.p = nl, q.T = null;
          try {
            var y = t.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], A = Fp(p.stack);
              I(
                p.source,
                y,
                p.value,
                A
              );
            }
          } finally {
            q.T = d, $t.p = h;
          }
        }
        (oi & 3) !== 0 && Vs(), da(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (kg = !0, t === $1 ? F0++ : (F0 = 0, $1 = t)) : F0 = 0, o || ji(e, Pc), ru(0);
      }
    }
    function Fp(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function Ny(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ss(e)));
    }
    function Vs() {
      return kl(), su(), By(), Zs();
    }
    function Zs() {
      if (El !== yv) return !1;
      var t = Gf, e = w1;
      w1 = 0;
      var a = Xl(oi), i = ql > a ? ql : a;
      a = q.T;
      var o = $t.p;
      try {
        $t.p = i, q.T = null;
        var f = K1;
        K1 = null, i = Gf;
        var d = oi;
        if (El = Yf, Ph = Gf = null, oi = 0, (Vt & (_l | Gn)) !== Gl)
          throw Error("Cannot flush passive effects while already rendering.");
        mn(d), W1 = !0, pv = !1;
        var h = 0;
        if (to = null, h = yl(), fi === jb)
          Um(
            Pc,
            h,
            MT
          );
        else {
          var y = Pc, p = h, A = fi === L1;
          !ze || p <= y || (ke ? ke.run(
            console.timeStamp.bind(
              console,
              A ? "Waiting for Paint" : "Waiting",
              y,
              p,
              jt,
              xt,
              "secondary-light"
            )
          ) : console.timeStamp(
            A ? "Waiting for Paint" : "Waiting",
            y,
            p,
            jt,
            xt,
            "secondary-light"
          ));
        }
        y = Vt, Vt |= Gn;
        var D = i.current;
        vc(), Zd(D);
        var S = i.current;
        D = J1, vc(), Ay(
          i,
          S,
          d,
          f,
          D
        ), Fd(i), Vt = y;
        var B = yl();
        if (S = h, D = ke, to !== null ? Dp(
          S,
          B,
          to,
          !0,
          D
        ) : !ze || B <= S || (D ? D.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            S,
            B,
            jt,
            xt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          S,
          B,
          jt,
          xt,
          "secondary-dark"
        )), ji(d, B), ru(0, !1), pv ? i === k0 ? Rr++ : (Rr = 0, k0 = i) : Rr = 0, pv = W1 = !1, al && typeof al.onPostCommitFiberRoot == "function")
          try {
            al.onPostCommitFiberRoot(Kc, i);
          } catch (k) {
            gu || (gu = !0, console.error(
              "React instrumentation encountered an error: %o",
              k
            ));
          }
        var K = i.current.stateNode;
        return K.effectDuration = 0, K.passiveEffectDuration = 0, !0;
      } finally {
        $t.p = o, q.T = a, Ny(t, e);
      }
    }
    function Il(t, e, a) {
      e = Vl(a, e), Cp(e), e = Od(t.stateNode, e, 2), t = In(t, e, 2), t !== null && (ri(t, 2), da(t));
    }
    function St(t, e, a) {
      if (tm = !1, t.tag === 3)
        Il(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            Il(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var i = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (xf === null || !xf.has(i))) {
              t = Vl(a, t), Cp(t), a = Md(2), i = In(e, a, 2), i !== null && (Rd(
                a,
                i,
                e,
                t
              ), ri(i, 2), da(i));
              return;
            }
          }
          e = e.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function $d(t, e, a) {
      var i = t.pingCache;
      if (i === null) {
        i = t.pingCache = new xT();
        var o = /* @__PURE__ */ new Set();
        i.set(e, o);
      } else
        o = i.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o));
      o.has(a) || (Q1 = !0, o.add(a), i = ra.bind(null, t, e, a), vu && Fo(t, a), e.then(i, i));
    }
    function ra(t, e, a) {
      var i = t.pingCache;
      i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Fi && (yr = Fi = gl(), O0 = wg("Promise Resolved"), Rf = Jg) : (a & 4194048) !== 0 && 0 > Ou && (eo = Ou = gl(), R0 = wg("Promise Resolved"), E1 = Jg), My() && q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), pe === t && (Dt & a) === a && (Ye === Hf || Ye === cv && (Dt & 62914560) === Dt && yl() - dv < Yb ? (Vt & _l) === Gl && fu(t, 0) : V1 |= a, Mr === Dt && (Mr = 0)), da(t);
    }
    function qy(t, e) {
      e === 0 && (e = Yr()), t = Cl(t, e), t !== null && (ri(t, e), da(t));
    }
    function ku(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), qy(t, a);
    }
    function Yc(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var i = t.stateNode, o = t.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = t.stateNode;
          break;
        case 22:
          i = t.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(e), qy(t, a);
    }
    function Mn(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var i = t, o = e, f = o.type === ea;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && I(
            o,
            Wd,
            i,
            o
          ) : Mn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? I(
            o,
            Wd,
            i,
            o
          ) : o.subtreeFlags & 67108864 && I(
            o,
            Mn,
            i,
            o,
            f
          )), e = e.sibling;
        }
    }
    function Wd(t, e) {
      re(!0);
      try {
        Qd(e), Dy(e), Ey(t, e.alternate, e, !1), Xs(t, e, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function Fd(t) {
      var e = !0;
      t.current.mode & (ga | ni) || (e = !1), Mn(
        t,
        t.current,
        e
      );
    }
    function en(t) {
      if ((Vt & _l) === Gl) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = at(t) || "ReactComponent", gv !== null) {
            if (gv.has(e)) return;
            gv.add(e);
          } else gv = /* @__PURE__ */ new Set([e]);
          I(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Fo(t, e) {
      vu && t.memoizedUpdaters.forEach(function(a) {
        oa(t, a, e);
      });
    }
    function ko(t, e) {
      var a = q.actQueue;
      return a !== null ? (a.push(e), jT) : f0(t, e);
    }
    function Ls(t) {
      My() && q.actQueue === null && I(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          at(t)
        );
      });
    }
    function da(t) {
      t !== em && t.next === null && (em === null ? vv = em = t : em = em.next = t), Sv = !0, q.actQueue !== null ? k1 || (k1 = !0, Ip()) : F1 || (F1 = !0, Ip());
    }
    function ru(t, e) {
      if (!I1 && Sv) {
        I1 = !0;
        do
          for (var a = !1, i = vv; i !== null; ) {
            if (t !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ml(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ws(i, f));
            } else
              f = Dt, f = xr(
                i,
                i === pe ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Hr
              ), (f & 3) === 0 || zl(i, f) || (a = !0, ws(i, f));
            i = i.next;
          }
        while (a);
        I1 = !1;
      }
    }
    function kp() {
      ep = window.event, kd();
    }
    function kd() {
      Sv = k1 = F1 = !1;
      var t = 0;
      jf !== 0 && jy() && (t = jf);
      for (var e = yl(), a = null, i = vv; i !== null; ) {
        var o = i.next, f = Io(i, e);
        f === 0 ? (i.next = null, a === null ? vv = o : a.next = o, o === null && (em = a)) : (a = i, (t !== 0 || (f & 3) !== 0) && (Sv = !0)), i = o;
      }
      El !== Yf && El !== yv || ru(t), jf !== 0 && (jf = 0);
    }
    function Io(t, e) {
      for (var a = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ml(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Yv(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = pe, a = Dt, a = xr(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), i = t.callbackNode, a === 0 || t === e && (fe === Dr || fe === Or) || t.cancelPendingCommit !== null)
        return i !== null && Id(i), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || zl(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || q.actQueue !== null && i !== P1)
          Id(i);
        else return e;
        switch (Xl(a)) {
          case nl:
          case Rl:
            a = Ah;
            break;
          case ql:
            a = Jc;
            break;
          case Ki:
            a = zh;
            break;
          default:
            a = Jc;
        }
        return i = xy.bind(null, t), q.actQueue !== null ? (q.actQueue.push(i), a = P1) : a = f0(a, i), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return i !== null && Id(i), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function xy(t, e) {
      if (kg = Fg = !1, ep = window.event, El !== Yf && El !== yv)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (fi === mv && (fi = L1), Vs() && t.callbackNode !== a)
        return null;
      var i = Dt;
      return i = xr(
        t,
        t === pe ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), i === 0 ? null : (Kp(
        t,
        i,
        e
      ), Io(t, yl()), t.callbackNode != null && t.callbackNode === a ? xy.bind(null, t) : null);
    }
    function ws(t, e) {
      if (Vs()) return null;
      Fg = kg, kg = !1, Kp(t, e, !0);
    }
    function Id(t) {
      t !== P1 && t !== null && bh(t);
    }
    function Ip() {
      q.actQueue !== null && q.actQueue.push(function() {
        return kd(), null;
      }), WT(function() {
        (Vt & (_l | Gn)) !== Gl ? f0(
          s0,
          kp
        ) : kd();
      });
    }
    function Yy() {
      if (jf === 0) {
        var t = vr;
        t === 0 && (t = gf, gf <<= 1, (gf & 261888) === 0 && (gf = 256)), jf = t;
      }
      return jf;
    }
    function Lt(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (ae(t, "action"), ts("" + t));
    }
    function ie(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function Ct(t, e, a, i, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = Lt(
          (o[la] || null).action
        ), d = i.submitter;
        d && (e = (e = d[la] || null) ? Lt(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Gg(
          "action",
          "action",
          null,
          i,
          o
        );
        t.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (jf !== 0) {
                    var y = d ? ie(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), Ku(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? ie(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), Ku(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Ot(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (i) {
        r1(i);
      }
      t.currentTarget = null;
    }
    function It(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        t: {
          var o = void 0, f = i.event;
          if (i = i.listeners, e)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? I(
                y,
                Ot,
                f,
                h,
                p
              ) : Ot(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? I(
                y,
                Ot,
                f,
                h,
                p
              ) : Ot(f, h, p), o = y;
            }
        }
      }
    }
    function st(t, e) {
      tS.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[$c];
      a === void 0 && (a = e[$c] = /* @__PURE__ */ new Set());
      var i = t + "__bubble";
      a.has(i) || (Pd(e, t, 2, !1), a.add(i));
    }
    function du(t, e, a) {
      tS.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var i = 0;
      e && (i |= 4), Pd(
        a,
        t,
        i,
        e
      );
    }
    function Xi(t) {
      if (!t[bv]) {
        t[bv] = !0, Bg.forEach(function(a) {
          a !== "selectionchange" && (tS.has(a) || du(a, !1, t), du(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[bv] || (e[bv] = !0, du("selectionchange", !1, e));
      }
    }
    function Pd(t, e, a, i) {
      switch (hh(e)) {
        case nl:
          var o = Iy;
          break;
        case Rl:
          o = Ol;
          break;
        default:
          o = Py;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !e1 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), i ? o !== void 0 ? t.addEventListener(e, a, {
        capture: !0,
        passive: o
      }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
        passive: o
      }) : t.addEventListener(
        e,
        a,
        !1
      );
    }
    function Rn(t, e, a, i, o) {
      var f = i;
      if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
        t: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Nu(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Fr(function() {
        var p = f, A = dn(a), D = [];
        t: {
          var S = RS.get(t);
          if (S !== void 0) {
            var B = Gg, K = t;
            switch (t) {
              case "keypress":
                if (es(a) === 0) break t;
              case "keydown":
              case "keyup":
                B = tT;
                break;
              case "focusin":
                K = "focus", B = u1;
                break;
              case "focusout":
                K = "blur", B = u1;
                break;
              case "beforeblur":
              case "afterblur":
                B = u1;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                B = mS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                B = V2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                B = aT;
                break;
              case zS:
              case DS:
              case OS:
                B = w2;
                break;
              case MS:
                B = uT;
                break;
              case "scroll":
              case "scrollend":
                B = X2;
                break;
              case "wheel":
                B = cT;
                break;
              case "copy":
              case "cut":
              case "paste":
                B = K2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                B = pS;
                break;
              case "toggle":
              case "beforetoggle":
                B = fT;
            }
            var k = (e & 4) !== 0, Se = !k && (t === "scroll" || t === "scrollend"), Yt = k ? S !== null ? S + "Capture" : null : S;
            k = [];
            for (var v = p, b; v !== null; ) {
              var E = v;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Yt === null || (E = Jn(v, Yt), E != null && k.push(
                me(
                  v,
                  E,
                  b
                )
              )), Se) break;
              v = v.return;
            }
            0 < k.length && (S = new B(
              S,
              K,
              null,
              a,
              A
            ), D.push({
              event: S,
              listeners: k
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (S = t === "mouseover" || t === "pointerover", B = t === "mouseout" || t === "pointerout", S && a !== y0 && (K = a.relatedTarget || a.fromElement) && (Nu(K) || K[ai]))
              break t;
            if ((B || S) && (S = A.window === A ? A : (S = A.ownerDocument) ? S.defaultView || S.parentWindow : window, B ? (K = a.relatedTarget || a.toElement, B = p, K = K ? Nu(K) : null, K !== null && (Se = se(K), k = K.tag, K !== Se || k !== 5 && k !== 27 && k !== 6) && (K = null)) : (B = null, K = p), B !== K)) {
              if (k = mS, E = "onMouseLeave", Yt = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (k = pS, E = "onPointerLeave", Yt = "onPointerEnter", v = "pointer"), Se = B == null ? S : di(B), b = K == null ? S : di(K), S = new k(
                E,
                v + "leave",
                B,
                a,
                A
              ), S.target = Se, S.relatedTarget = b, E = null, Nu(A) === p && (k = new k(
                Yt,
                v + "enter",
                K,
                a,
                A
              ), k.target = b, k.relatedTarget = Se, E = k), Se = E, B && K)
                e: {
                  for (k = Gc, Yt = B, v = K, b = 0, E = Yt; E; E = k(E))
                    b++;
                  E = 0;
                  for (var j = v; j; j = k(j))
                    E++;
                  for (; 0 < b - E; )
                    Yt = k(Yt), b--;
                  for (; 0 < E - b; )
                    v = k(v), E--;
                  for (; b--; ) {
                    if (Yt === v || v !== null && Yt === v.alternate) {
                      k = Yt;
                      break e;
                    }
                    Yt = k(Yt), v = k(v);
                  }
                  k = null;
                }
              else k = null;
              B !== null && th(
                D,
                S,
                B,
                k,
                !1
              ), K !== null && Se !== null && th(
                D,
                Se,
                K,
                k,
                !0
              );
            }
          }
          t: {
            if (S = p ? di(p) : window, B = S.nodeName && S.nodeName.toLowerCase(), B === "select" || B === "input" && S.type === "file")
              var W = pi;
            else if (Em(S))
              if (ES)
                W = us;
              else {
                W = Am;
                var yt = Qv;
              }
            else
              B = S.nodeName, !B || B.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? p && wn(p.elementType) && (W = pi) : W = zm;
            if (W && (W = W(t, p))) {
              as(
                D,
                W,
                a,
                A
              );
              break t;
            }
            yt && yt(t, S, p), t === "focusout" && p && S.type === "number" && p.memoizedProps.value != null && hm(S, "number", S.value);
          }
          switch (yt = p ? di(p) : window, t) {
            case "focusin":
              (Em(yt) || yt.contentEditable === "true") && (Hh = yt, c1 = p, E0 = null);
              break;
            case "focusout":
              E0 = c1 = Hh = null;
              break;
            case "mousedown":
              o1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              o1 = !1, bp(
                D,
                a,
                A
              );
              break;
            case "selectionchange":
              if (hT) break;
            case "keydown":
            case "keyup":
              bp(
                D,
                a,
                A
              );
          }
          var ut;
          if (i1)
            t: {
              switch (t) {
                case "compositionstart":
                  var lt = "onCompositionStart";
                  break t;
                case "compositionend":
                  lt = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  lt = "onCompositionUpdate";
                  break t;
              }
              lt = void 0;
            }
          else
            Ch ? bo(t, a) && (lt = "onCompositionEnd") : t === "keydown" && a.keyCode === gS && (lt = "onCompositionStart");
          lt && (vS && a.locale !== "ko" && (Ch || lt !== "onCompositionStart" ? lt === "onCompositionEnd" && Ch && (ut = oc()) : (Ef = A, l1 = "value" in Ef ? Ef.value : Ef.textContent, Ch = !0)), yt = Un(
            p,
            lt
          ), 0 < yt.length && (lt = new yS(
            lt,
            t,
            null,
            a,
            A
          ), D.push({
            event: lt,
            listeners: yt
          }), ut ? lt.data = ut : (ut = Yu(a), ut !== null && (lt.data = ut)))), (ut = rT ? Tm(t, a) : kr(t, a)) && (lt = Un(
            p,
            "onBeforeInput"
          ), 0 < lt.length && (yt = new W2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            A
          ), D.push({
            event: yt,
            listeners: lt
          }), yt.data = ut)), Ct(
            D,
            t,
            p,
            a,
            A
          );
        }
        It(D, e);
      });
    }
    function me(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function Un(t, e) {
      for (var a = e + "Capture", i = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Jn(t, a), o != null && i.unshift(
          me(t, o, f)
        ), o = Jn(t, e), o != null && i.push(
          me(t, o, f)
        )), t.tag === 3) return i;
        t = t.return;
      }
      return [];
    }
    function Gc(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function th(t, e, a, i, o) {
      for (var f = e._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = Jn(a, f), p != null && d.unshift(
          me(a, p, y)
        )) : o || (p = Jn(a, f), p != null && d.push(
          me(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function Pl(t, e) {
      yp(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || dS || (dS = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: Su,
        possibleRegistrationNames: bf
      };
      wn(t) || typeof e.is == "string" || Xv(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ue(t, e, a, i) {
      e !== a && (a = _n(a), _n(e) !== a && (i[t] = e));
    }
    function Js(t, e, a) {
      e.forEach(function(i) {
        a[Iu(i)] = i === "style" ? Qi(t) : t.getAttribute(i);
      });
    }
    function _e(t, e) {
      e === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        t,
        t,
        t
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        t,
        typeof e
      );
    }
    function eh(t, e) {
      return t = t.namespaceURI === gt || t.namespaceURI === bt ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function _n(t) {
      return Qn(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        $f(t)
      ), Pi(t)), (typeof t == "string" ? t : "" + t).replace(XT, `
`).replace(QT, "");
    }
    function Gy(t, e) {
      return e = _n(e), _n(t) === e;
    }
    function Kt(t, e, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Pf(i, e, !1), e === "body" || e === "textarea" && i === "" || cc(t, i)) : (typeof i == "number" || typeof i == "bigint") && (Pf("" + i, e, !1), e !== "body" && cc(t, "" + i));
          break;
        case "className":
          Ff(t, "class", i);
          break;
        case "tabIndex":
          Ff(t, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ff(t, a, i);
          break;
        case "style":
          vm(t, i, f);
          break;
        case "data":
          if (e !== "object") {
            Ff(t, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (e !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), t.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ae(i, a), i = ts("" + i), t.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Av || (Av = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Ev || (Ev = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Tv ? e !== "button" || o.type == null || o.type === "submit" || Tv ? typeof i == "function" && (o.name == null || kb || (kb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Av || (Av = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Ev || (Ev = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Tv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Tv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (e !== "input" && Kt(t, e, "name", o.name, o, null), Kt(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Kt(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Kt(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Kt(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), Kt(t, e, "method", o.method, o, null), Kt(
              t,
              e,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ae(i, a), i = ts("" + i), t.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && _e(a, i), t.onclick = wa);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && _e(a, i), st("scroll", t));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && _e(a, i), st("scrollend", t));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          t.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          ae(i, a), a = ts("" + i), t.setAttributeNS(Ur, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (ae(i, a), t.setAttribute(a, "" + i)) : t.removeAttribute(a);
          break;
        case "inert":
          i !== "" || zv[a] || (zv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? t.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (ae(i, a), t.setAttribute(a, i)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (ae(i, a), t.setAttribute(a, i)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(a) : (ae(i, a), t.setAttribute(a, i));
          break;
        case "popover":
          st("beforetoggle", t), st("toggle", t), jr(t, "popover", i);
          break;
        case "xlinkActuate":
          Vn(
            t,
            Ur,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Vn(
            t,
            Ur,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Vn(
            t,
            Ur,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Vn(
            t,
            Ur,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Vn(
            t,
            Ur,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Vn(
            t,
            Ur,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Vn(
            t,
            eS,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Vn(
            t,
            eS,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Vn(
            t,
            eS,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), jr(t, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          Ib || i == null || typeof i != "object" || (Ib = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = hp(a), jr(t, a, i)) : Su.hasOwnProperty(a) && i != null && typeof i != "function" && _e(a, i);
      }
    }
    function Po(t, e, a, i, o, f) {
      switch (a) {
        case "style":
          vm(t, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? cc(t, i) : (typeof i == "number" || typeof i == "bigint") && cc(t, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && _e(a, i), st("scroll", t));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && _e(a, i), st("scrollend", t));
          break;
        case "onClick":
          i != null && (typeof i != "function" && _e(a, i), t.onclick = wa);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Su.hasOwnProperty(a))
            i != null && typeof i != "function" && _e(a, i);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[la] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, i, o);
                break t;
              }
              a in t ? t[a] = i : i === !0 ? t.setAttribute(a, "") : jr(t, a, i);
            }
      }
    }
    function Ee(t, e, a) {
      switch (Pl(e, a), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          st("error", t), st("load", t);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Kt(t, e, f, d, a, null);
                }
            }
          o && Kt(t, e, "srcSet", a.srcSet, a, null), i && Kt(t, e, "src", a.src, a, null);
          return;
        case "input":
          lc("input", a), st("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var A = a[i];
              if (A != null)
                switch (i) {
                  case "name":
                    o = A;
                    break;
                  case "type":
                    d = A;
                    break;
                  case "checked":
                    y = A;
                    break;
                  case "defaultChecked":
                    p = A;
                    break;
                  case "value":
                    f = A;
                    break;
                  case "defaultValue":
                    h = A;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (A != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Kt(t, e, i, A, a, null);
                }
            }
          Ql(t, a), Vr(
            t,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          lc("select", a), st("invalid", t), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Kt(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Zr(t, a), e = f, a = d, t.multiple = !!i, e != null ? Zn(t, !!i, e, !1) : a != null && Zn(t, !!i, a, !0);
          return;
        case "textarea":
          lc("textarea", a), st("invalid", t), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Kt(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          ac(t, a), mo(t, i, o, f);
          return;
        case "option":
          dp(t, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? t.selected = i && typeof i != "function" && typeof i != "symbol" : Kt(t, e, y, i, a, null));
          return;
        case "dialog":
          st("beforetoggle", t), st("toggle", t), st("cancel", t), st("close", t);
          break;
        case "iframe":
        case "object":
          st("load", t);
          break;
        case "video":
        case "audio":
          for (i = 0; i < I0.length; i++)
            st(I0[i], t);
          break;
        case "image":
          st("error", t), st("load", t);
          break;
        case "details":
          st("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          st("error", t), st("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Kt(t, e, p, i, a, null);
              }
          return;
        default:
          if (wn(e)) {
            for (A in a)
              a.hasOwnProperty(A) && (i = a[A], i !== void 0 && Po(
                t,
                e,
                A,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Kt(t, e, h, i, a, null));
    }
    function ll(t, e, a, i) {
      switch (Pl(e, i), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, A = null;
          for (B in a) {
            var D = a[B];
            if (a.hasOwnProperty(B) && D != null)
              switch (B) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = D;
                default:
                  i.hasOwnProperty(B) || Kt(
                    t,
                    e,
                    B,
                    null,
                    i,
                    D
                  );
              }
          }
          for (var S in i) {
            var B = i[S];
            if (D = a[S], i.hasOwnProperty(S) && (B != null || D != null))
              switch (S) {
                case "type":
                  f = B;
                  break;
                case "name":
                  o = B;
                  break;
                case "checked":
                  p = B;
                  break;
                case "defaultChecked":
                  A = B;
                  break;
                case "value":
                  d = B;
                  break;
                case "defaultValue":
                  h = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  B !== D && Kt(
                    t,
                    e,
                    S,
                    B,
                    i,
                    D
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, e || !i || Fb || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Fb = !0), !e || i || Wb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Wb = !0), hi(
            t,
            d,
            h,
            y,
            p,
            A,
            f,
            o
          );
          return;
        case "select":
          B = d = h = S = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  B = y;
                default:
                  i.hasOwnProperty(f) || Kt(
                    t,
                    e,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  S = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Kt(
                    t,
                    e,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, e = d, a = B, S != null ? Zn(t, !!e, S, !1) : !!a != !!e && (i != null ? Zn(t, !!e, i, !0) : Zn(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          B = S = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Kt(t, e, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  S = o;
                  break;
                case "defaultValue":
                  B = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Kt(t, e, d, o, i, f);
              }
          nc(t, S, B);
          return;
        case "option":
          for (var K in a)
            S = a[K], a.hasOwnProperty(K) && S != null && !i.hasOwnProperty(K) && (K === "selected" ? t.selected = !1 : Kt(
              t,
              e,
              K,
              null,
              i,
              S
            ));
          for (y in i)
            S = i[y], B = a[y], i.hasOwnProperty(y) && S !== B && (S != null || B != null) && (y === "selected" ? t.selected = S && typeof S != "function" && typeof S != "symbol" : Kt(
              t,
              e,
              y,
              S,
              i,
              B
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var k in a)
            S = a[k], a.hasOwnProperty(k) && S != null && !i.hasOwnProperty(k) && Kt(
              t,
              e,
              k,
              null,
              i,
              S
            );
          for (p in i)
            if (S = i[p], B = a[p], i.hasOwnProperty(p) && S !== B && (S != null || B != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Kt(
                    t,
                    e,
                    p,
                    S,
                    i,
                    B
                  );
              }
          return;
        default:
          if (wn(e)) {
            for (var Se in a)
              S = a[Se], a.hasOwnProperty(Se) && S !== void 0 && !i.hasOwnProperty(Se) && Po(
                t,
                e,
                Se,
                void 0,
                i,
                S
              );
            for (A in i)
              S = i[A], B = a[A], !i.hasOwnProperty(A) || S === B || S === void 0 && B === void 0 || Po(
                t,
                e,
                A,
                S,
                i,
                B
              );
            return;
          }
      }
      for (var Yt in a)
        S = a[Yt], a.hasOwnProperty(Yt) && S != null && !i.hasOwnProperty(Yt) && Kt(t, e, Yt, null, i, S);
      for (D in i)
        S = i[D], B = a[D], !i.hasOwnProperty(D) || S === B || S == null && B == null || Kt(t, e, D, S, i, B);
    }
    function Iu(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function Qi(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        e[i] = t.getPropertyValue(i);
      }
      return e;
    }
    function hu(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (im(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || et.has(f) ? (im(d, f), i += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, e = t.getAttribute("style"), e !== i && (i = _n(i), _n(e) !== i && (a.style = Qi(t)));
      }
    }
    function ha(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ae(i, e), t === "" + i)
              return;
        }
      Ue(e, t, i, f);
    }
    function lh(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Ue(e, t, i, f);
    }
    function ah(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (ae(i, a), t === "" + i)
              return;
        }
      Ue(e, t, i, f);
    }
    function tf(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (ae(i, e), t === "" + i))
              return;
        }
      Ue(e, t, i, f);
    }
    function Ks(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ae(i, e), a = ts("" + i), t === a)
              return;
        }
      Ue(e, t, i, f);
    }
    function ma(t, e, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = t.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (wn(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Su.hasOwnProperty(y))
                typeof p != "function" && _e(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || Ue(
                      "children",
                      t.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = eh(t, p), Ue(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), hu(t, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = ho(
                      t,
                      "class",
                      p
                    ), Ue(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === oo && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = ho(
                      t,
                      y,
                      p
                    ), Ue(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Su.hasOwnProperty(p))
              typeof y != "function" && _e(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || Ue(
                    "children",
                    t.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = eh(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  ha(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  ha(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), hu(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), Ue(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), Ue(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ue(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), Ue(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || e === "a" && p === "href" || e === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  Ks(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = t.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === VT) {
                    f.delete(p.toLowerCase()), Ue(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Ks(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Ks(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  ah(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  ah(
                    t,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  ah(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  lh(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  t: {
                    h = t;
                    var A = d = p, D = o;
                    if (f.delete(A), h = h.getAttribute(A), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break t;
                        default:
                          if (y === !1) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break t;
                          break;
                        default:
                          if (ae(y, d), h === "" + y)
                            break t;
                      }
                    Ue(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, A = d = p, D = o, f.delete(A), h = h.getAttribute(A), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break t;
                        default:
                          if (isNaN(y) || 1 > y) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (ae(y, d), h === "" + y))
                            break t;
                      }
                    Ue(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "rowSpan":
                  tf(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  tf(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  ha(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  ha(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  ha(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  ha(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  ha(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  ha(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  ha(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  ha(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  ha(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  ha(
                    t,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || zv[p] || (zv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), lh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = hp(p), d = !1, i.context === oo && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (A = p.toLowerCase(), A = Nn.hasOwnProperty(
                      A
                    ) && Nn[A] || null, A !== null && A !== p && (d = !0, f.delete(A)), f.delete(h));
                    t: if (A = t, D = h, h = y, Wf(D))
                      if (A.hasAttribute(D))
                        A = A.getAttribute(
                          D
                        ), ae(
                          h,
                          D
                        ), h = A === "" + h ? h : A;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (A = D.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ue(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Js(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Pp(t, e) {
      switch (t.length) {
        case 0:
          return "";
        case 1:
          return t[0];
        case 2:
          return t[0] + " " + e + " " + t[1];
        default:
          return t.slice(0, -1).join(", ") + ", " + e + " " + t[t.length - 1];
      }
    }
    function ta(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function tg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && ta(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var A = y.transferSize, D = y.initiatorType;
              A && ta(D) && (y = y.responseEnd, d += A * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function $s(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function eg(t) {
      switch (t) {
        case bt:
          return am;
        case gt:
          return Ov;
        default:
          return oo;
      }
    }
    function Pu(t, e) {
      if (t === oo)
        switch (e) {
          case "svg":
            return am;
          case "math":
            return Ov;
          default:
            return oo;
        }
      return t === am && e === "foreignObject" ? oo : t;
    }
    function ef(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function jy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === uS ? !1 : (uS = t, !0) : (uS = null, !1);
    }
    function mu() {
      var t = window.event;
      return t && t !== ep ? t.type : null;
    }
    function lf() {
      var t = window.event;
      return t && t !== ep ? t.timeStamp : -1.1;
    }
    function lg(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function ag(t, e, a) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && t.focus();
          break;
        case "img":
          a.src ? t.src = a.src : a.srcSet && (t.srcset = a.srcSet);
      }
    }
    function ng() {
    }
    function nh(t, e, a, i) {
      ll(t, e, a, i), t[la] = i;
    }
    function uh(t) {
      cc(t, "");
    }
    function $v(t, e, a) {
      t.nodeValue = a;
    }
    function ug(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[la] || null;
        if (e !== null) {
          var a = fn(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, I(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, I(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function Vi(t) {
      return t === "head";
    }
    function ig(t, e) {
      t.removeChild(e);
    }
    function cg(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function jc(t, e) {
      var a = e, i = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === tp || a === Dv) {
            if (i === 0) {
              t.removeChild(o), Zc(e);
              return;
            }
            i--;
          } else if (a === P0 || a === Xf || a === Cr || a === lm || a === _r)
            i++;
          else if (a === LT)
            ei(
              t.ownerDocument.documentElement
            );
          else if (a === JT) {
            a = t.ownerDocument.head, ei(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Sf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === wT && ei(t.ownerDocument.body);
        a = o;
      } while (a);
      Zc(e);
    }
    function Ws(t, e) {
      var a = t;
      t = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === tp) {
            if (t === 0) break;
            t--;
          } else
            a !== P0 && a !== Xf && a !== Cr && a !== lm || t++;
        a = i;
      } while (a);
    }
    function og(t) {
      Ws(t, !0);
    }
    function fg(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function sg(t) {
      t.nodeValue = "";
    }
    function rg(t) {
      Ws(t, !1);
    }
    function dg(t, e) {
      e = e[KT], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function hg(t, e) {
      t.nodeValue = e;
    }
    function af(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            af(a), sm(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function mg(t, e, a, i) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (i) {
          if (!t[Sf])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (f = t.getAttribute("src"), (f !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          ae(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = qa(t.nextSibling), t === null) break;
      }
      return null;
    }
    function yg(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = qa(t.nextSibling), t === null)) return null;
      return t;
    }
    function Pt(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = qa(t.nextSibling), t === null)) return null;
      return t;
    }
    function Fs(t) {
      return t.data === Xf || t.data === Cr;
    }
    function Xy(t) {
      return t.data === lm || t.data === Xf && t.ownerDocument.readyState !== t2;
    }
    function pg(t, e) {
      var a = t.ownerDocument;
      if (t.data === Cr)
        t._reactRetry = e;
      else if (t.data !== Xf || a.readyState !== t2)
        e();
      else {
        var i = function() {
          e(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
      }
    }
    function qa(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === P0 || e === lm || e === Xf || e === Cr || e === _r || e === lS || e === Pb)
            break;
          if (e === tp || e === Dv)
            return null;
        }
      }
      return t;
    }
    function gg(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, i = t.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Iu(f.name)] = f.name.toLowerCase() === "style" ? Qi(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === _r ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function vg(t, e, a) {
      return a === null || a[ZT] !== !0 ? (t.nodeValue === e ? t = null : (e = _n(e), t = _n(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function nf(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === tp || a === Dv) {
            if (e === 0)
              return qa(t.nextSibling);
            e--;
          } else
            a !== P0 && a !== lm && a !== Xf && a !== Cr && a !== _r || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Xc(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === P0 || a === lm || a === Xf || a === Cr || a === _r) {
            if (e === 0) return t;
            e--;
          } else
            a !== tp && a !== Dv || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Qy(t) {
      Zc(t);
    }
    function ih(t) {
      Zc(t);
    }
    function Vy(t) {
      Zc(t);
    }
    function ti(t, e, a, i, o) {
      switch (o && If(t, i.ancestorInfo), e = $s(a), t) {
        case "html":
          if (t = e.documentElement, !t)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "head":
          if (t = e.head, !t)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "body":
          if (t = e.body, !t)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function yu(t, e, a, i) {
      if (!a[ai] && fn(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (t) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Ee(a, t, e), a[Ae] = i, a[la] = e;
    }
    function ei(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      sm(t);
    }
    function ch(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Zy(t, e, a) {
      var i = nm;
      if (i && typeof e == "string" && e) {
        var o = ne(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), i2.has(o) || (i2.add(o), t = { rel: t, crossOrigin: a, href: e }, i.querySelector(o) === null && (e = i.createElement("link"), Ee(e, "link", t), Ge(e), i.head.appendChild(e)));
      }
    }
    function Ly(t, e, a, i) {
      var o = (o = xa.current) ? ch(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Qc(a.href), e = La(o).hoistableStyles, i = e.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = Qc(a.href);
            var f = La(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Br, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              Is(t)
            )) && !f._p && (d.instance = f, d.state.loading = lp | _u), !Cu.has(t))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Cu.set(t, h), f || Sg(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && i === null)
              throw a = `

  - ` + ks(e) + `
  + ` + ks(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && i !== null)
            throw a = `

  - ` + ks(e) + `
  + ` + ks(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Vc(a), e = La(o).hoistableScripts, i = e.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + t + '". this is a bug in React.'
          );
      }
    }
    function ks(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : Ya.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : Ya.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : Ya.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function Qc(t) {
      return 'href="' + ne(t) + '"';
    }
    function Is(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function oh(t) {
      return Et({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Sg(t, e, a, i) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? i.loading = lp : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
        return i.loading |= lp;
      }), e.addEventListener("error", function() {
        return i.loading |= n2;
      }), Ee(e, "link", a), Ge(e), t.head.appendChild(e));
    }
    function Vc(t) {
      return '[src="' + ne(t) + '"]';
    }
    function Ps(t) {
      return "script[async]" + t;
    }
    function fh(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var i = t.querySelector(
              'style[data-href~="' + ne(a.href) + '"]'
            );
            if (i)
              return e.instance = i, Ge(i), i;
            var o = Et({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (t.ownerDocument || t).createElement("style"), Ge(i), Ee(i, "style", o), uf(i, a.precedence, t), e.instance = i;
          case "stylesheet":
            o = Qc(a.href);
            var f = t.querySelector(
              Is(o)
            );
            if (f)
              return e.state.loading |= _u, e.instance = f, Ge(f), f;
            i = oh(a), (o = Cu.get(o)) && wy(i, o), f = (t.ownerDocument || t).createElement("link"), Ge(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Ee(f, "link", i), e.state.loading |= _u, uf(f, a.precedence, t), e.instance = f;
          case "script":
            return f = Vc(a.src), (o = t.querySelector(
              Ps(f)
            )) ? (e.instance = o, Ge(o), o) : (i = a, (o = Cu.get(f)) && (i = Et({}, a), Jy(i, o)), t = t.ownerDocument || t, o = t.createElement("script"), Ge(o), Ee(o, "link", i), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & _u) === Br && (i = e.instance, e.state.loading |= _u, uf(i, a.precedence, t));
      return e.instance;
    }
    function uf(t, e, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function wy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function Jy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function cf(t, e, a) {
      if (Mv === null) {
        var i = /* @__PURE__ */ new Map(), o = Mv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Mv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(t)) return i;
      for (i.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Sf] || f[Ae] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== bt) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function bg(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Tg(t, e, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === am || e.itemProp != null)
        return !i || e.itemProp == null || t !== "meta" && t !== "title" && t !== "style" && t !== "link" && t !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          t,
          t
        ), !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) {
            if (e.rel === "stylesheet" && typeof e.precedence == "string") {
              t = e.href;
              var o = e.onError, f = e.disabled;
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Pp(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                t,
                f,
                o
              );
            }
            i && (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (e.onError || e.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return e.rel === "stylesheet" ? (t = e.precedence, e = e.disabled, typeof t != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof t == "string" && e == null) : !0;
        case "script":
          if (t = e.async && typeof e.async != "function" && typeof e.async != "symbol", !t || e.onLoad || e.onError || !e.src || typeof e.src != "string") {
            i && (t ? e.onLoad || e.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            t
          );
      }
      return !1;
    }
    function Ut(t) {
      return !(t.type === "stylesheet" && (t.state.loading & u2) === Br);
    }
    function Ky(t, e, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & _u) === Br) {
        if (a.instance === null) {
          var o = Qc(i.href), f = e.querySelector(
            Is(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = of.bind(t), e.then(t, t)), a.state.loading |= _u, a.instance = f, Ge(f);
            return;
          }
          f = e.ownerDocument || e, i = oh(i), (o = Cu.get(o)) && wy(i, o), f = f.createElement("link"), Ge(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Ee(f, "link", i), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & u2) === Br && (t.count++, a = of.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function sh(t, e) {
      return t.stylesheets && t.count === 0 && tr(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (t.stylesheets && tr(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, FT + e);
        0 < t.imgBytes && cS === 0 && (cS = 125 * tg() * IT);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tr(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > cS ? 50 : kT) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function of() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          tr(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function tr(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Rv = /* @__PURE__ */ new Map(), e.forEach($y, t), Rv = null, of.call(t));
    }
    function $y(t, e) {
      if (!(e.state.loading & _u)) {
        var a = Rv.get(t);
        if (a) var i = a.get(oS);
        else {
          a = /* @__PURE__ */ new Map(), Rv.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(oS, i);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(oS, o), a.set(d, o), this.count++, i = of.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= _u;
      }
    }
    function er(t, e, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Hr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gr(0), this.hiddenUpdates = Gr(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function lr(t, e, a, i, o, f, d, h, y, p, A, D) {
      return t = new er(
        t,
        e,
        a,
        d,
        y,
        p,
        A,
        D,
        h
      ), e = ET, f === !0 && (e |= ga | ni), e |= At, f = U(3, null, null, e), t.current = f, f.stateNode = t, e = fd(), gc(e), t.pooledCache = e, gc(e), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: e
      }, _t(f), t;
    }
    function Eg(t) {
      return t ? (t = Df, t) : Df;
    }
    function rh(t, e, a, i, o, f) {
      if (al && typeof al.onScheduleFiberRoot == "function")
        try {
          al.onScheduleFiberRoot(Kc, i, a);
        } catch (d) {
          gu || (gu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Eg(o), i.context === null ? i.context = o : i.pendingContext = o, pu && pa !== null && !s2 && (s2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        at(pa) || "Unknown"
      )), i = tl(e), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = In(t, i, e), a !== null && (Wn(e, "root.render()", null), dt(a, t, e), Ia(a, t, e));
    }
    function Ag(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Wy(t, e) {
      Ag(t, e), (t = t.alternate) && Ag(t, e);
    }
    function Fy(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Cl(t, 67108864);
        e !== null && dt(e, t, 67108864), Wy(t, 67108864);
      }
    }
    function ky(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Bl(t);
        e = ec(e);
        var a = Cl(t, e);
        a !== null && dt(a, t, e), Wy(t, e);
      }
    }
    function ce() {
      return pa;
    }
    function Iy(t, e, a, i) {
      var o = q.T;
      q.T = null;
      var f = $t.p;
      try {
        $t.p = nl, Py(t, e, a, i);
      } finally {
        $t.p = f, q.T = o;
      }
    }
    function Ol(t, e, a, i) {
      var o = q.T;
      q.T = null;
      var f = $t.p;
      try {
        $t.p = Rl, Py(t, e, a, i);
      } finally {
        $t.p = f, q.T = o;
      }
    }
    function Py(t, e, a, i) {
      if (_v) {
        var o = dh(i);
        if (o === null)
          Rn(
            t,
            e,
            i,
            Cv,
            a
          ), mh(t, i);
        else if (zg(
          o,
          t,
          e,
          a,
          i
        ))
          i.stopPropagation();
        else if (mh(t, i), e & 4 && -1 < tE.indexOf(t)) {
          for (; o !== null; ) {
            var f = fn(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = tc(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Ml(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      da(f), (Vt & (_l | Gn)) === Gl && (hv = yl() + Gb, ru(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Cl(f, 2), h !== null && dt(h, f, 2), Na(), Wy(f, 2);
              }
            if (f = dh(i), f === null && Rn(
              t,
              e,
              i,
              Cv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Rn(
            t,
            e,
            i,
            null,
            a
          );
      }
    }
    function dh(t) {
      return t = dn(t), t0(t);
    }
    function t0(t) {
      if (Cv = null, t = Nu(t), t !== null) {
        var e = se(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = Xn(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = Ie(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Cv = t, null;
    }
    function hh(t) {
      switch (t) {
        case "beforetoggle":
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
        case "toggle":
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
          return nl;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Rl;
        case "message":
          switch (or()) {
            case s0:
              return nl;
            case Ah:
              return Rl;
            case Jc:
            case _g:
              return ql;
            case zh:
              return Ki;
            default:
              return ql;
          }
        default:
          return ql;
      }
    }
    function mh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Qf = null;
          break;
        case "dragenter":
        case "dragleave":
          Vf = null;
          break;
        case "mouseover":
        case "mouseout":
          Zf = null;
          break;
        case "pointerover":
        case "pointerout":
          np.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          up.delete(e.pointerId);
      }
    }
    function Zi(t, e, a, i, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = fn(e), e !== null && Fy(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function zg(t, e, a, i, o) {
      switch (e) {
        case "focusin":
          return Qf = Zi(
            Qf,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Vf = Zi(
            Vf,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Zf = Zi(
            Zf,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return np.set(
            f,
            Zi(
              np.get(f) || null,
              t,
              e,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, up.set(
            f,
            Zi(
              up.get(f) || null,
              t,
              e,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function e0(t) {
      var e = Nu(t.target);
      if (e !== null) {
        var a = se(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = Xn(a), e !== null) {
              t.blockedOn = e, rp(t.priority, function() {
                ky(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = Ie(a), e !== null) {
              t.blockedOn = e, rp(t.priority, function() {
                ky(a);
              });
              return;
            }
          } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function ff(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = dh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          y0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), y0 = o, a.target.dispatchEvent(i), y0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), y0 = null;
        } else
          return e = fn(a), e !== null && Fy(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function yh(t, e, a) {
      ff(t) && a.delete(e);
    }
    function Wv() {
      fS = !1, Qf !== null && ff(Qf) && (Qf = null), Vf !== null && ff(Vf) && (Vf = null), Zf !== null && ff(Zf) && (Zf = null), np.forEach(yh), up.forEach(yh);
    }
    function ar(t, e) {
      t.blockedOn === e && (t.blockedOn = null, fS || (fS = !0, Ze.unstable_scheduleCallback(
        Ze.unstable_NormalPriority,
        Wv
      )));
    }
    function Dg(t) {
      Hv !== t && (Hv = t, Ze.unstable_scheduleCallback(
        Ze.unstable_NormalPriority,
        function() {
          Hv === t && (Hv = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], i = t[e + 1], o = t[e + 2];
            if (typeof i != "function") {
              if (t0(i || a) === null)
                continue;
              break;
            }
            var f = fn(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), Ku(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Zc(t) {
      function e(y) {
        return ar(y, t);
      }
      Qf !== null && ar(Qf, t), Vf !== null && ar(Vf, t), Zf !== null && ar(Zf, t), np.forEach(e), up.forEach(e);
      for (var a = 0; a < Lf.length; a++) {
        var i = Lf[a];
        i.blockedOn === t && (i.blockedOn = null);
      }
      for (; 0 < Lf.length && (a = Lf[0], a.blockedOn === null); )
        e0(a), a.blockedOn === null && Lf.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[la] || null;
          if (typeof f == "function")
            d || Dg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[la] || null)
                h = d.formAction;
              else if (t0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Dg(a);
          }
        }
    }
    function Og() {
      function t(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener(
            "navigatesuccess",
            e
          ), navigation.removeEventListener(
            "navigateerror",
            e
          ), o !== null && (o(), o = null);
        };
      }
    }
    function l0(t) {
      this._internalRoot = t;
    }
    function Cn(t) {
      this._internalRoot = t;
    }
    function a0(t) {
      t[ai] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Ze = H2(), nr = xv(), Fv = B2(), Et = Object.assign, Mg = /* @__PURE__ */ Symbol.for("react.element"), ln = /* @__PURE__ */ Symbol.for("react.transitional.element"), Li = /* @__PURE__ */ Symbol.for("react.portal"), sf = /* @__PURE__ */ Symbol.for("react.fragment"), ea = /* @__PURE__ */ Symbol.for("react.strict_mode"), ur = /* @__PURE__ */ Symbol.for("react.profiler"), ph = /* @__PURE__ */ Symbol.for("react.consumer"), Hn = /* @__PURE__ */ Symbol.for("react.context"), rf = /* @__PURE__ */ Symbol.for("react.forward_ref"), Lc = /* @__PURE__ */ Symbol.for("react.suspense"), ya = /* @__PURE__ */ Symbol.for("react.suspense_list"), ir = /* @__PURE__ */ Symbol.for("react.memo"), Nl = /* @__PURE__ */ Symbol.for("react.lazy"), Bn = /* @__PURE__ */ Symbol.for("react.activity"), kv = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Rg = Symbol.iterator, df = /* @__PURE__ */ Symbol.for("react.client.reference"), Fe = Array.isArray, q = nr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $t = Fv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Iv = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), n0 = [], u0 = [], li = -1, wi = Pe(null), hf = Pe(null), xa = Pe(null), Ji = Pe(null), mf = 0, Ug, wc, yf, i0, cr, gh, vh;
    pt.__reactDisabledLog = !0;
    var pf, c0, Sh = !1, o0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), pa = null, pu = !1, Ya = Object.prototype.hasOwnProperty, f0 = Ze.unstable_scheduleCallback, bh = Ze.unstable_cancelCallback, Th = Ze.unstable_shouldYield, Eh = Ze.unstable_requestPaint, yl = Ze.unstable_now, or = Ze.unstable_getCurrentPriorityLevel, s0 = Ze.unstable_ImmediatePriority, Ah = Ze.unstable_UserBlockingPriority, Jc = Ze.unstable_NormalPriority, _g = Ze.unstable_LowPriority, zh = Ze.unstable_IdlePriority, r0 = Ze.log, Cg = Ze.unstable_setDisableYieldValue, Kc = null, al = null, gu = !1, vu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ml = Math.clz32 ? Math.clz32 : om, d0 = Math.log, Dh = Math.LN2, gf = 256, fr = 262144, vf = 4194304, nl = 2, Rl = 8, ql = 32, Ki = 268435456, an = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + an, la = "__reactProps$" + an, ai = "__reactContainer$" + an, $c = "__reactEvents$" + an, Pv = "__reactListeners$" + an, Hg = "__reactHandles$" + an, sr = "__reactResources$" + an, Sf = "__reactMarker$" + an, Bg = /* @__PURE__ */ new Set(), Su = {}, bf = {}, Ng = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Tf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), h0 = {}, Oh = {}, Mh = /[\n"\\]/g, m0 = !1, qg = !1, rr = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), g = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), T = g.concat(["button"]), _ = "dd dt li option optgroup p rp rt".split(" "), G = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Q = {}, C = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, x = /([A-Z])/g, P = /^ms-/, ct = /^(?:webkit|moz|o)[A-Z]/, oe = /^-ms-/, M = /-(.)/g, z = /;\s*$/, R = {}, X = {}, nt = !1, Qt = !1, et = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), gt = "http://www.w3.org/1998/Math/MathML", bt = "http://www.w3.org/2000/svg", wt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Nn = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, xg = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Rh = {}, N2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), q2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), dS = !1, Ga = {}, hS = /^on./, x2 = /^on[^A-Z]/, Y2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), G2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), j2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, y0 = null, Uh = null, _h = null, t1 = !1, $i = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), e1 = !1;
    if ($i)
      try {
        var p0 = {};
        Object.defineProperty(p0, "passive", {
          get: function() {
            e1 = !0;
          }
        }), window.addEventListener("test", p0, p0), window.removeEventListener("test", p0, p0);
      } catch {
        e1 = !1;
      }
    var Ef = null, l1 = null, Yg = null, dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Gg = ol(dr), g0 = Et({}, dr, { view: 0, detail: 0 }), X2 = ol(g0), a1, n1, v0, jg = Et({}, g0, {
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
      getModifierState: ls,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== v0 && (v0 && t.type === "mousemove" ? (a1 = t.screenX - v0.screenX, n1 = t.screenY - v0.screenY) : n1 = a1 = 0, v0 = t), a1);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : n1;
      }
    }), mS = ol(jg), Q2 = Et({}, jg, { dataTransfer: 0 }), V2 = ol(Q2), Z2 = Et({}, g0, { relatedTarget: 0 }), u1 = ol(Z2), L2 = Et({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), w2 = ol(L2), J2 = Et({}, dr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), K2 = ol(J2), $2 = Et({}, dr, { data: 0 }), yS = ol(
      $2
    ), W2 = yS, F2 = {
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
      MozPrintableKey: "Unidentified"
    }, k2 = {
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
      224: "Meta"
    }, I2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, P2 = Et({}, g0, {
      key: function(t) {
        if (t.key) {
          var e = F2[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = es(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? k2[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ls,
      charCode: function(t) {
        return t.type === "keypress" ? es(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? es(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), tT = ol(P2), eT = Et({}, jg, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), pS = ol(eT), lT = Et({}, g0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ls
    }), aT = ol(lT), nT = Et({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uT = ol(nT), iT = Et({}, jg, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), cT = ol(iT), oT = Et({}, dr, {
      newState: 0,
      oldState: 0
    }), fT = ol(oT), sT = [9, 13, 27, 32], gS = 229, i1 = $i && "CompositionEvent" in window, S0 = null;
    $i && "documentMode" in document && (S0 = document.documentMode);
    var rT = $i && "TextEvent" in window && !S0, vS = $i && (!i1 || S0 && 8 < S0 && 11 >= S0), SS = 32, bS = String.fromCharCode(SS), TS = !1, Ch = !1, dT = {
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
      week: !0
    }, b0 = null, T0 = null, ES = !1;
    $i && (ES = Ir("input") && (!document.documentMode || 9 < document.documentMode));
    var ja = typeof Object.is == "function" ? Object.is : Pr, hT = $i && "documentMode" in document && 11 >= document.documentMode, Hh = null, c1 = null, E0 = null, o1 = !1, Bh = {
      animationend: fc("Animation", "AnimationEnd"),
      animationiteration: fc("Animation", "AnimationIteration"),
      animationstart: fc("Animation", "AnimationStart"),
      transitionrun: fc("Transition", "TransitionRun"),
      transitionstart: fc("Transition", "TransitionStart"),
      transitioncancel: fc("Transition", "TransitionCancel"),
      transitionend: fc("Transition", "TransitionEnd")
    }, f1 = {}, AS = {};
    $i && (AS = document.createElement("div").style, "AnimationEvent" in window || (delete Bh.animationend.animation, delete Bh.animationiteration.animation, delete Bh.animationstart.animation), "TransitionEvent" in window || delete Bh.transitionend.transition);
    var zS = sc("animationend"), DS = sc("animationiteration"), OS = sc("animationstart"), mT = sc("transitionrun"), yT = sc("transitionstart"), pT = sc("transitioncancel"), MS = sc("transitionend"), RS = /* @__PURE__ */ new Map(), s1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    s1.push("scrollEnd");
    var US = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var gT = performance, _S = function() {
        return gT.now();
      };
    else {
      var vT = Date;
      _S = function() {
        return vT.now();
      };
    }
    var r1 = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, ST = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Xg = 0, d1 = 1, h1 = 2, m1 = 3, Qg = "– ", Vg = "+ ", CS = "  ", ze = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", bu = "Components ⚛", xt = "Scheduler ⚛", jt = "Blocking", Af = !1, Wc = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: bu
    }, zf = {
      start: -0,
      end: -0,
      detail: { devtools: Wc }
    }, bT = ["Changed Props", ""], HS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", TT = ["Changed Props", HS], A0 = 1, Fc = 2, Tu = [], Nh = 0, y1 = 0, Df = {};
    Object.freeze(Df);
    var Eu = null, qh = null, rt = 0, ET = 1, At = 2, ga = 8, ni = 16, AT = 32, BS = !1;
    try {
      var NS = Object.preventExtensions({});
    } catch {
      BS = !0;
    }
    var p1 = /* @__PURE__ */ new WeakMap(), xh = [], Yh = 0, Zg = null, z0 = 0, Au = [], zu = 0, hr = null, kc = 1, Ic = "", aa = null, De = null, Nt = !1, Wi = !1, qn = null, Of = null, Du = !1, g1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), v1 = Pe(null), S1 = Pe(null), qS = {}, Lg = null, Gh = null, jh = !1, zT = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          t.push(i);
        }
      };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(a) {
          return a();
        });
      };
    }, DT = Ze.unstable_scheduleCallback, OT = Ze.unstable_NormalPriority, pl = {
      $$typeof: Hn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, gl = Ze.unstable_now, wg = console.createTask ? console.createTask : function() {
      return null;
    }, D0 = 1, Jg = 2, xl = -0, Mf = -0, Pc = -0, to = null, Xa = -1.1, mr = -0, xe = -0, it = -1.1, ft = -1.1, Ce = null, Le = !1, yr = -0, Fi = -1.1, O0 = null, Rf = 0, b1 = null, T1 = null, pr = -1.1, M0 = null, Xh = -1.1, Kg = -1.1, eo = -0, lo = -1.1, Ou = -1.1, E1 = 0, R0 = null, xS = null, YS = null, Uf = -1.1, gr = null, _f = -1.1, $g = -1.1, GS = -0, jS = -0, Wg = 0, MT = null, XS = 0, U0 = -1.1, Fg = !1, kg = !1, _0 = null, A1 = 0, vr = 0, Qh = null, QS = q.S;
    q.S = function(t, e) {
      if (xb = yl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > lo && 0 > Ou) {
          lo = gl();
          var a = lf(), i = mu();
          (a !== _f || i !== gr) && (_f = -1.1), Uf = a, gr = i;
        }
        Xu(t, e);
      }
      QS !== null && QS(t, e);
    };
    var Sr = Pe(null), ui = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, C0 = [], H0 = [], B0 = [], N0 = [], q0 = [], x0 = [], br = /* @__PURE__ */ new Set();
    ui.recordUnsafeLifecycleWarnings = function(t, e) {
      br.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && C0.push(t), t.mode & ga && typeof e.UNSAFE_componentWillMount == "function" && H0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && B0.push(t), t.mode & ga && typeof e.UNSAFE_componentWillReceiveProps == "function" && N0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && q0.push(t), t.mode & ga && typeof e.UNSAFE_componentWillUpdate == "function" && x0.push(t));
    }, ui.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < C0.length && (C0.forEach(function(h) {
        t.add(
          at(h) || "Component"
        ), br.add(h.type);
      }), C0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < H0.length && (H0.forEach(function(h) {
        e.add(
          at(h) || "Component"
        ), br.add(h.type);
      }), H0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < B0.length && (B0.forEach(function(h) {
        a.add(
          at(h) || "Component"
        ), br.add(h.type);
      }), B0 = []);
      var i = /* @__PURE__ */ new Set();
      0 < N0.length && (N0.forEach(
        function(h) {
          i.add(
            at(h) || "Component"
          ), br.add(h.type);
        }
      ), N0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < q0.length && (q0.forEach(function(h) {
        o.add(
          at(h) || "Component"
        ), br.add(h.type);
      }), q0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < x0.length && (x0.forEach(function(h) {
        f.add(
          at(h) || "Component"
        ), br.add(h.type);
      }), x0 = []), 0 < e.size) {
        var d = Y(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Y(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Y(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = Y(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Y(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Y(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Ig = /* @__PURE__ */ new Map(), VS = /* @__PURE__ */ new Set();
    ui.recordLegacyContextWarning = function(t, e) {
      for (var a = null, i = t; i !== null; )
        i.mode & ga && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !VS.has(t.type) && (i = Ig.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (i === void 0 && (i = [], Ig.set(a, i)), i.push(t));
    }, ui.flushLegacyContextWarning = function() {
      Ig.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(at(o) || "Component"), VS.add(o.type);
          });
          var i = Y(a);
          I(e, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, ui.discardPendingWarnings = function() {
      C0 = [], H0 = [], B0 = [], N0 = [], q0 = [], x0 = [], Ig = /* @__PURE__ */ new Map();
    };
    var ZS = {
      react_stack_bottom_frame: function(t, e, a) {
        var i = pu;
        pu = !0;
        try {
          return t(e, a);
        } finally {
          pu = i;
        }
      }
    }, z1 = ZS.react_stack_bottom_frame.bind(ZS), LS = {
      react_stack_bottom_frame: function(t) {
        var e = pu;
        pu = !0;
        try {
          return t.render();
        } finally {
          pu = e;
        }
      }
    }, wS = LS.react_stack_bottom_frame.bind(LS), JS = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          St(t, t.return, a);
        }
      }
    }, D1 = JS.react_stack_bottom_frame.bind(
      JS
    ), KS = {
      react_stack_bottom_frame: function(t, e, a, i, o) {
        try {
          e.componentDidUpdate(a, i, o);
        } catch (f) {
          St(t, t.return, f);
        }
      }
    }, $S = KS.react_stack_bottom_frame.bind(
      KS
    ), WS = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, RT = WS.react_stack_bottom_frame.bind(
      WS
    ), FS = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          St(t, e, i);
        }
      }
    }, kS = FS.react_stack_bottom_frame.bind(
      FS
    ), IS = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, UT = IS.react_stack_bottom_frame.bind(IS), PS = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (i) {
          St(t, e, i);
        }
      }
    }, _T = PS.react_stack_bottom_frame.bind(PS), tb = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, CT = tb.react_stack_bottom_frame.bind(tb), Vh = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), O1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Pg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), tv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Tr = null, Y0 = !1, Zh = null, G0 = 0, zt = null, M1, eb = M1 = !1, lb = {}, ab = {}, nb = {};
    qt = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = at(t), o = i || "null";
        if (!lb[o]) {
          lb[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = at(t)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && t !== a && (i = null, typeof a.tag == "number" ? i = at(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), I(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Er = sl(!0), ub = sl(!1), ib = 0, cb = 1, ob = 2, R1 = 3, Cf = !1, fb = !1, U1 = null, _1 = !1, Lh = Pe(null), ev = Pe(0), xn = Pe(null), Mu = null, wh = 1, j0 = 2, ul = Pe(0), lv = 0, Ru = 1, Qa = 2, Yn = 4, Va = 8, Jh, sb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Set(), C1 = /* @__PURE__ */ new Set(), db = /* @__PURE__ */ new Set(), ao = 0, mt = null, ye = null, vl = null, av = !1, Kh = !1, Ar = !1, nv = 0, X0 = 0, no = null, HT = 0, BT = 25, N = null, Uu = null, uo = -1, Q0 = !1, V0 = {
      readContext: Jt,
      use: Lu,
      useCallback: Ne,
      useContext: Ne,
      useEffect: Ne,
      useImperativeHandle: Ne,
      useLayoutEffect: Ne,
      useInsertionEffect: Ne,
      useMemo: Ne,
      useReducer: Ne,
      useRef: Ne,
      useState: Ne,
      useDebugValue: Ne,
      useDeferredValue: Ne,
      useTransition: Ne,
      useSyncExternalStore: Ne,
      useId: Ne,
      useHostTransitionStatus: Ne,
      useFormState: Ne,
      useActionState: Ne,
      useOptimistic: Ne,
      useMemoCache: Ne,
      useCacheRefresh: Ne
    };
    V0.useEffectEvent = Ne;
    var H1 = null, hb = null, B1 = null, mb = null, ki = null, ii = null, uv = null;
    H1 = {
      readContext: function(t) {
        return Jt(t);
      },
      use: Lu,
      useCallback: function(t, e) {
        return N = "useCallback", ht(), Zu(e), bd(t, e);
      },
      useContext: function(t) {
        return N = "useContext", ht(), Jt(t);
      },
      useEffect: function(t, e) {
        return N = "useEffect", ht(), Zu(e), Mc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return N = "useImperativeHandle", ht(), Zu(a), lu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        N = "useInsertionEffect", ht(), Zu(e), Hi(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return N = "useLayoutEffect", ht(), Zu(e), Kl(t, e);
      },
      useMemo: function(t, e) {
        N = "useMemo", ht(), Zu(e);
        var a = q.H;
        q.H = ki;
        try {
          return $l(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        N = "useReducer", ht();
        var i = q.H;
        q.H = ki;
        try {
          return Ho(t, e, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(t) {
        return N = "useRef", ht(), Sd(t);
      },
      useState: function(t) {
        N = "useState", ht();
        var e = q.H;
        q.H = ki;
        try {
          return Ri(t);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", ht();
      },
      useDeferredValue: function(t, e) {
        return N = "useDeferredValue", ht(), Yo(t, e);
      },
      useTransition: function() {
        return N = "useTransition", ht(), Bi();
      },
      useSyncExternalStore: function(t, e, a) {
        return N = "useSyncExternalStore", ht(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return N = "useId", ht(), Os();
      },
      useFormState: function(t, e) {
        return N = "useFormState", ht(), ys(), Ua(t, e);
      },
      useActionState: function(t, e) {
        return N = "useActionState", ht(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return N = "useOptimistic", ht(), Oc(t);
      },
      useHostTransitionStatus: $u,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", ht(), Td();
      },
      useEffectEvent: function(t) {
        return N = "useEffectEvent", ht(), zs(t);
      }
    }, hb = {
      readContext: function(t) {
        return Jt(t);
      },
      use: Lu,
      useCallback: function(t, e) {
        return N = "useCallback", V(), bd(t, e);
      },
      useContext: function(t) {
        return N = "useContext", V(), Jt(t);
      },
      useEffect: function(t, e) {
        return N = "useEffect", V(), Mc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return N = "useImperativeHandle", V(), lu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        N = "useInsertionEffect", V(), Hi(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return N = "useLayoutEffect", V(), Kl(t, e);
      },
      useMemo: function(t, e) {
        N = "useMemo", V();
        var a = q.H;
        q.H = ki;
        try {
          return $l(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        N = "useReducer", V();
        var i = q.H;
        q.H = ki;
        try {
          return Ho(t, e, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(t) {
        return N = "useRef", V(), Sd(t);
      },
      useState: function(t) {
        N = "useState", V();
        var e = q.H;
        q.H = ki;
        try {
          return Ri(t);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return N = "useDeferredValue", V(), Yo(t, e);
      },
      useTransition: function() {
        return N = "useTransition", V(), Bi();
      },
      useSyncExternalStore: function(t, e, a) {
        return N = "useSyncExternalStore", V(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return N = "useId", V(), Os();
      },
      useActionState: function(t, e) {
        return N = "useActionState", V(), Ua(t, e);
      },
      useFormState: function(t, e) {
        return N = "useFormState", V(), ys(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return N = "useOptimistic", V(), Oc(t);
      },
      useHostTransitionStatus: $u,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", V(), Td();
      },
      useEffectEvent: function(t) {
        return N = "useEffectEvent", V(), zs(t);
      }
    }, B1 = {
      readContext: function(t) {
        return Jt(t);
      },
      use: Lu,
      useCallback: function(t, e) {
        return N = "useCallback", V(), An(t, e);
      },
      useContext: function(t) {
        return N = "useContext", V(), Jt(t);
      },
      useEffect: function(t, e) {
        N = "useEffect", V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return N = "useImperativeHandle", V(), xo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return N = "useInsertionEffect", V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return N = "useLayoutEffect", V(), el(4, Yn, t, e);
      },
      useMemo: function(t, e) {
        N = "useMemo", V();
        var a = q.H;
        q.H = ii;
        try {
          return Te(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        N = "useReducer", V();
        var i = q.H;
        q.H = ii;
        try {
          return Ac(t, e, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", V(), Ft().memoizedState;
      },
      useState: function() {
        N = "useState", V();
        var t = q.H;
        q.H = ii;
        try {
          return Ac(Ra);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return N = "useDeferredValue", V(), au(t, e);
      },
      useTransition: function() {
        return N = "useTransition", V(), Np();
      },
      useSyncExternalStore: function(t, e, a) {
        return N = "useSyncExternalStore", V(), Dc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return N = "useId", V(), Ft().memoizedState;
      },
      useFormState: function(t) {
        return N = "useFormState", V(), ys(), _i(t);
      },
      useActionState: function(t) {
        return N = "useActionState", V(), _i(t);
      },
      useOptimistic: function(t, e) {
        return N = "useOptimistic", V(), Ts(t, e);
      },
      useHostTransitionStatus: $u,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", V(), Ft().memoizedState;
      },
      useEffectEvent: function(t) {
        return N = "useEffectEvent", V(), qo(t);
      }
    }, mb = {
      readContext: function(t) {
        return Jt(t);
      },
      use: Lu,
      useCallback: function(t, e) {
        return N = "useCallback", V(), An(t, e);
      },
      useContext: function(t) {
        return N = "useContext", V(), Jt(t);
      },
      useEffect: function(t, e) {
        N = "useEffect", V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return N = "useImperativeHandle", V(), xo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return N = "useInsertionEffect", V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return N = "useLayoutEffect", V(), el(4, Yn, t, e);
      },
      useMemo: function(t, e) {
        N = "useMemo", V();
        var a = q.H;
        q.H = uv;
        try {
          return Te(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        N = "useReducer", V();
        var i = q.H;
        q.H = uv;
        try {
          return zc(t, e, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", V(), Ft().memoizedState;
      },
      useState: function() {
        N = "useState", V();
        var t = q.H;
        q.H = uv;
        try {
          return zc(Ra);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return N = "useDeferredValue", V(), vt(t, e);
      },
      useTransition: function() {
        return N = "useTransition", V(), Re();
      },
      useSyncExternalStore: function(t, e, a) {
        return N = "useSyncExternalStore", V(), Dc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return N = "useId", V(), Ft().memoizedState;
      },
      useFormState: function(t) {
        return N = "useFormState", V(), ys(), Ci(t);
      },
      useActionState: function(t) {
        return N = "useActionState", V(), Ci(t);
      },
      useOptimistic: function(t, e) {
        return N = "useOptimistic", V(), Es(t, e);
      },
      useHostTransitionStatus: $u,
      useMemoCache: Ma,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", V(), Ft().memoizedState;
      },
      useEffectEvent: function(t) {
        return N = "useEffectEvent", V(), qo(t);
      }
    }, ki = {
      readContext: function(t) {
        return F(), Jt(t);
      },
      use: function(t) {
        return $(), Lu(t);
      },
      useCallback: function(t, e) {
        return N = "useCallback", $(), ht(), bd(t, e);
      },
      useContext: function(t) {
        return N = "useContext", $(), ht(), Jt(t);
      },
      useEffect: function(t, e) {
        return N = "useEffect", $(), ht(), Mc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return N = "useImperativeHandle", $(), ht(), lu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        N = "useInsertionEffect", $(), ht(), Hi(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return N = "useLayoutEffect", $(), ht(), Kl(t, e);
      },
      useMemo: function(t, e) {
        N = "useMemo", $(), ht();
        var a = q.H;
        q.H = ki;
        try {
          return $l(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        N = "useReducer", $(), ht();
        var i = q.H;
        q.H = ki;
        try {
          return Ho(t, e, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(t) {
        return N = "useRef", $(), ht(), Sd(t);
      },
      useState: function(t) {
        N = "useState", $(), ht();
        var e = q.H;
        q.H = ki;
        try {
          return Ri(t);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", $(), ht();
      },
      useDeferredValue: function(t, e) {
        return N = "useDeferredValue", $(), ht(), Yo(t, e);
      },
      useTransition: function() {
        return N = "useTransition", $(), ht(), Bi();
      },
      useSyncExternalStore: function(t, e, a) {
        return N = "useSyncExternalStore", $(), ht(), Bo(
          t,
          e,
          a
        );
      },
      useId: function() {
        return N = "useId", $(), ht(), Os();
      },
      useFormState: function(t, e) {
        return N = "useFormState", $(), ht(), Ua(t, e);
      },
      useActionState: function(t, e) {
        return N = "useActionState", $(), ht(), Ua(t, e);
      },
      useOptimistic: function(t) {
        return N = "useOptimistic", $(), ht(), Oc(t);
      },
      useMemoCache: function(t) {
        return $(), Ma(t);
      },
      useHostTransitionStatus: $u,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", ht(), Td();
      },
      useEffectEvent: function(t) {
        return N = "useEffectEvent", $(), ht(), zs(t);
      }
    }, ii = {
      readContext: function(t) {
        return F(), Jt(t);
      },
      use: function(t) {
        return $(), Lu(t);
      },
      useCallback: function(t, e) {
        return N = "useCallback", $(), V(), An(t, e);
      },
      useContext: function(t) {
        return N = "useContext", $(), V(), Jt(t);
      },
      useEffect: function(t, e) {
        N = "useEffect", $(), V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return N = "useImperativeHandle", $(), V(), xo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return N = "useInsertionEffect", $(), V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return N = "useLayoutEffect", $(), V(), el(4, Yn, t, e);
      },
      useMemo: function(t, e) {
        N = "useMemo", $(), V();
        var a = q.H;
        q.H = ii;
        try {
          return Te(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        N = "useReducer", $(), V();
        var i = q.H;
        q.H = ii;
        try {
          return Ac(t, e, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", $(), V(), Ft().memoizedState;
      },
      useState: function() {
        N = "useState", $(), V();
        var t = q.H;
        q.H = ii;
        try {
          return Ac(Ra);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", $(), V();
      },
      useDeferredValue: function(t, e) {
        return N = "useDeferredValue", $(), V(), au(t, e);
      },
      useTransition: function() {
        return N = "useTransition", $(), V(), Np();
      },
      useSyncExternalStore: function(t, e, a) {
        return N = "useSyncExternalStore", $(), V(), Dc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return N = "useId", $(), V(), Ft().memoizedState;
      },
      useFormState: function(t) {
        return N = "useFormState", $(), V(), _i(t);
      },
      useActionState: function(t) {
        return N = "useActionState", $(), V(), _i(t);
      },
      useOptimistic: function(t, e) {
        return N = "useOptimistic", $(), V(), Ts(t, e);
      },
      useMemoCache: function(t) {
        return $(), Ma(t);
      },
      useHostTransitionStatus: $u,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", V(), Ft().memoizedState;
      },
      useEffectEvent: function(t) {
        return N = "useEffectEvent", $(), V(), qo(t);
      }
    }, uv = {
      readContext: function(t) {
        return F(), Jt(t);
      },
      use: function(t) {
        return $(), Lu(t);
      },
      useCallback: function(t, e) {
        return N = "useCallback", $(), V(), An(t, e);
      },
      useContext: function(t) {
        return N = "useContext", $(), V(), Jt(t);
      },
      useEffect: function(t, e) {
        N = "useEffect", $(), V(), el(2048, Va, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return N = "useImperativeHandle", $(), V(), xo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return N = "useInsertionEffect", $(), V(), el(4, Qa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return N = "useLayoutEffect", $(), V(), el(4, Yn, t, e);
      },
      useMemo: function(t, e) {
        N = "useMemo", $(), V();
        var a = q.H;
        q.H = ii;
        try {
          return Te(t, e);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(t, e, a) {
        N = "useReducer", $(), V();
        var i = q.H;
        q.H = ii;
        try {
          return zc(t, e, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return N = "useRef", $(), V(), Ft().memoizedState;
      },
      useState: function() {
        N = "useState", $(), V();
        var t = q.H;
        q.H = ii;
        try {
          return zc(Ra);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", $(), V();
      },
      useDeferredValue: function(t, e) {
        return N = "useDeferredValue", $(), V(), vt(t, e);
      },
      useTransition: function() {
        return N = "useTransition", $(), V(), Re();
      },
      useSyncExternalStore: function(t, e, a) {
        return N = "useSyncExternalStore", $(), V(), Dc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return N = "useId", $(), V(), Ft().memoizedState;
      },
      useFormState: function(t) {
        return N = "useFormState", $(), V(), Ci(t);
      },
      useActionState: function(t) {
        return N = "useActionState", $(), V(), Ci(t);
      },
      useOptimistic: function(t, e) {
        return N = "useOptimistic", $(), V(), Es(t, e);
      },
      useMemoCache: function(t) {
        return $(), Ma(t);
      },
      useHostTransitionStatus: $u,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", V(), Ft().memoizedState;
      },
      useEffectEvent: function(t) {
        return N = "useEffectEvent", $(), V(), qo(t);
      }
    };
    var yb = {}, pb = /* @__PURE__ */ new Set(), gb = /* @__PURE__ */ new Set(), vb = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set();
    Object.freeze(yb);
    var N1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var i = Bl(t), o = tl(i);
        o.payload = e, a != null && (Cc(a), o.callback = a), e = In(t, o, i), e !== null && (Wn(i, "this.setState()", t), dt(e, t, i), Ia(e, t, i));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var i = Bl(t), o = tl(i);
        o.tag = cb, o.payload = e, a != null && (Cc(a), o.callback = a), e = In(t, o, i), e !== null && (Wn(i, "this.replaceState()", t), dt(e, t, i), Ia(e, t, i));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = Bl(t), i = tl(a);
        i.tag = ob, e != null && (Cc(e), i.callback = e), e = In(t, i, a), e !== null && (Wn(a, "this.forceUpdate()", t), dt(e, t, a), Ia(e, t, a));
      }
    }, $h = null, q1 = null, x1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Sl = !1, Ob = {}, Mb = {}, Rb = {}, Ub = {}, Wh = !1, _b = {}, iv = {}, Y1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Cb = !1, Hb = null;
    Hb = /* @__PURE__ */ new Set();
    var io = !1, bl = !1, G1 = !1, Bb = typeof WeakSet == "function" ? WeakSet : Set, Yl = null, Fh = null, kh = null, Tl = null, nn = !1, ci = null, Ul = !1, Z0 = 8192, NT = {
      getCacheForType: function(t) {
        var e = Jt(pl), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return Jt(pl).controller.signal;
      },
      getOwner: function() {
        return pa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var L0 = Symbol.for;
      L0("selector.component"), L0("selector.has_pseudo_class"), L0("selector.role"), L0("selector.test_id"), L0("selector.text");
    }
    var qT = [], xT = typeof WeakMap == "function" ? WeakMap : Map, Gl = 0, _l = 2, Gn = 4, co = 0, w0 = 1, zr = 2, cv = 3, Hf = 4, ov = 6, Nb = 5, Vt = Gl, pe = null, Mt = null, Dt = 0, un = 0, fv = 1, Dr = 2, J0 = 3, qb = 4, j1 = 5, K0 = 6, sv = 7, X1 = 8, Or = 9, fe = un, jn = null, Bf = !1, Ih = !1, Q1 = !1, Ii = 0, Ye = co, Nf = 0, qf = 0, V1 = 0, cn = 0, Mr = 0, $0 = null, Za = null, rv = !1, dv = 0, xb = 0, Yb = 300, hv = 1 / 0, Gb = 500, W0 = null, ke = null, xf = null, mv = 0, Z1 = 1, L1 = 2, jb = 3, Yf = 0, Xb = 1, Qb = 2, Vb = 3, Zb = 4, yv = 5, El = 0, Gf = null, Ph = null, oi = 0, w1 = 0, J1 = -0, K1 = null, Lb = null, wb = null, fi = mv, Jb = null, YT = 50, F0 = 0, $1 = null, W1 = !1, pv = !1, GT = 50, Rr = 0, k0 = null, tm = !1, gv = null, Kb = !1, $b = /* @__PURE__ */ new Set(), jT = {}, vv = null, em = null, F1 = !1, k1 = !1, Sv = !1, I1 = !1, jf = 0, P1 = {};
    (function() {
      for (var t = 0; t < s1.length; t++) {
        var e = s1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), hn(a, "on" + e);
      }
      hn(zS, "onAnimationEnd"), hn(DS, "onAnimationIteration"), hn(OS, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(mT, "onTransitionRun"), hn(yT, "onTransitionStart"), hn(pT, "onTransitionCancel"), hn(MS, "onTransitionEnd");
    })(), ro("onMouseEnter", ["mouseout", "mouseover"]), ro("onMouseLeave", ["mouseout", "mouseover"]), ro("onPointerEnter", ["pointerout", "pointerover"]), ro("onPointerLeave", ["pointerout", "pointerover"]), sn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), sn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), sn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), sn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), sn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), sn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var I0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), tS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(I0)
    ), bv = "_reactListening" + Math.random().toString(36).slice(2), Wb = !1, Fb = !1, Tv = !1, kb = !1, Ev = !1, Av = !1, Ib = !1, zv = {}, XT = /\r\n?/g, QT = /\u0000|\uFFFD/g, Ur = "http://www.w3.org/1999/xlink", eS = "http://www.w3.org/XML/1998/namespace", VT = "javascript:throw new Error('React form unexpectedly submitted.')", ZT = "suppressHydrationWarning", _r = "&", Dv = "/&", P0 = "$", tp = "/$", Xf = "$?", Cr = "$~", lm = "$!", LT = "html", wT = "body", JT = "head", lS = "F!", Pb = "F", t2 = "loading", KT = "style", oo = 0, am = 1, Ov = 2, aS = null, nS = null, e2 = { dialog: !0, webview: !0 }, uS = null, ep = void 0, l2 = typeof setTimeout == "function" ? setTimeout : void 0, $T = typeof clearTimeout == "function" ? clearTimeout : void 0, Hr = -1, a2 = typeof Promise == "function" ? Promise : void 0, WT = typeof queueMicrotask == "function" ? queueMicrotask : typeof a2 < "u" ? function(t) {
      return a2.resolve(null).then(t).catch(lg);
    } : l2, iS = null, Br = 0, lp = 1, n2 = 2, u2 = 3, _u = 4, Cu = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), fo = $t.d;
    $t.d = {
      f: function() {
        var t = fo.f(), e = Na();
        return t || e;
      },
      r: function(t) {
        var e = fn(t);
        e !== null && e.tag === 5 && e.type === "form" ? Go(e) : fo.r(t);
      },
      D: function(t) {
        fo.D(t), Zy("dns-prefetch", t, null);
      },
      C: function(t, e) {
        fo.C(t, e), Zy("preconnect", t, e);
      },
      L: function(t, e, a) {
        fo.L(t, e, a);
        var i = nm;
        if (i && t && e) {
          var o = 'link[rel="preload"][as="' + ne(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ne(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ne(
            a.imageSizes
          ) + '"]')) : o += '[href="' + ne(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = Qc(t);
              break;
            case "script":
              f = Vc(t);
          }
          Cu.has(f) || (t = Et(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Cu.set(f, t), i.querySelector(o) !== null || e === "style" && i.querySelector(
            Is(f)
          ) || e === "script" && i.querySelector(Ps(f)) || (e = i.createElement("link"), Ee(e, "link", t), Ge(e), i.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        fo.m(t, e);
        var a = nm;
        if (a && t) {
          var i = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + ne(i) + '"][href="' + ne(t) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Vc(t);
          }
          if (!Cu.has(f) && (t = Et({ rel: "modulepreload", href: t }, e), Cu.set(f, t), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Ps(f)))
                  return;
            }
            i = a.createElement("link"), Ee(i, "link", t), Ge(i), a.head.appendChild(i);
          }
        }
      },
      X: function(t, e) {
        fo.X(t, e);
        var a = nm;
        if (a && t) {
          var i = La(a).hoistableScripts, o = Vc(t), f = i.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Et({ src: t, async: !0 }, e), (e = Cu.get(o)) && Jy(t, e), f = a.createElement("script"), Ge(f), Ee(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(t, e, a) {
        fo.S(t, e, a);
        var i = nm;
        if (i && t) {
          var o = La(i).hoistableStyles, f = Qc(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Br, preload: null };
            if (d = i.querySelector(
              Is(f)
            ))
              h.loading = lp | _u;
            else {
              t = Et(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Cu.get(f)) && wy(t, a);
              var y = d = i.createElement("link");
              Ge(y), Ee(y, "link", t), y._p = new Promise(function(p, A) {
                y.onload = p, y.onerror = A;
              }), y.addEventListener("load", function() {
                h.loading |= lp;
              }), y.addEventListener("error", function() {
                h.loading |= n2;
              }), h.loading |= _u, uf(d, e, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(t, e) {
        fo.M(t, e);
        var a = nm;
        if (a && t) {
          var i = La(a).hoistableScripts, o = Vc(t), f = i.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Et({ src: t, async: !0, type: "module" }, e), (e = Cu.get(o)) && Jy(t, e), f = a.createElement("script"), Ge(f), Ee(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var nm = typeof document > "u" ? null : document, Mv = null, FT = 6e4, kT = 800, IT = 500, cS = 0, oS = null, Rv = null, Nr = Iv, ap = {
      $$typeof: Hn,
      Provider: null,
      Consumer: null,
      _currentValue: Nr,
      _currentValue2: Nr,
      _threadCount: 0
    }, c2 = "%c%s%c", o2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", f2 = "", Uv = " ", PT = Function.prototype.bind, s2 = !1, r2 = null, d2 = null, h2 = null, m2 = null, y2 = null, p2 = null, g2 = null, v2 = null, S2 = null, b2 = null;
    r2 = function(t, e, a, i) {
      e = J(t, e), e !== null && (a = He(e.memoizedState, a, 0, i), e.memoizedState = a, e.baseState = a, t.memoizedProps = Et({}, t.memoizedProps), a = Cl(t, 2), a !== null && dt(a, t, 2));
    }, d2 = function(t, e, a) {
      e = J(t, e), e !== null && (a = te(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = Et({}, t.memoizedProps), a = Cl(t, 2), a !== null && dt(a, t, 2));
    }, h2 = function(t, e, a, i) {
      e = J(t, e), e !== null && (a = ee(e.memoizedState, a, i), e.memoizedState = a, e.baseState = a, t.memoizedProps = Et({}, t.memoizedProps), a = Cl(t, 2), a !== null && dt(a, t, 2));
    }, m2 = function(t, e, a) {
      t.pendingProps = He(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Cl(t, 2), e !== null && dt(e, t, 2);
    }, y2 = function(t, e) {
      t.pendingProps = te(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Cl(t, 2), e !== null && dt(e, t, 2);
    }, p2 = function(t, e, a) {
      t.pendingProps = ee(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Cl(t, 2), e !== null && dt(e, t, 2);
    }, g2 = function(t) {
      var e = Cl(t, 2);
      e !== null && dt(e, t, 2);
    }, v2 = function(t) {
      var e = Yr(), a = Cl(t, e);
      a !== null && dt(a, t, e);
    }, S2 = function(t) {
      we = t;
    }, b2 = function(t) {
      Me = t;
    };
    var _v = !0, Cv = null, fS = !1, Qf = null, Vf = null, Zf = null, np = /* @__PURE__ */ new Map(), up = /* @__PURE__ */ new Map(), Lf = [], tE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Hv = null;
    if (Cn.prototype.render = l0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ge(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var i = e.current, o = Bl(i);
      rh(i, o, a, e, null, null);
    }, Cn.prototype.unmount = l0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (Vt & (_l | Gn)) !== Gl && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), rh(t.current, 2, null, t, null, null), Na(), e[ai] = null;
      }
    }, Cn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = sp();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < Lf.length && e !== 0 && e < Lf[a].priority; a++) ;
        Lf.splice(a, 0, t), a === 0 && e0(t);
      }
    }, (function() {
      var t = nr.version;
      if (t !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), $t.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = on(e), t = t !== null ? na(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: q,
        reconcilerVersion: "19.2.3"
      };
      return t.overrideHookState = r2, t.overrideHookStateDeletePath = d2, t.overrideHookStateRenamePath = h2, t.overrideProps = m2, t.overridePropsDeletePath = y2, t.overridePropsRenamePath = p2, t.scheduleUpdate = g2, t.scheduleRetry = v2, t.setErrorHandler = S2, t.setSuspenseHandler = b2, t.scheduleRefresh = Zt, t.scheduleRoot = tt, t.setRefreshHandler = Je, t.getCurrentFiber = ce, cm(t);
    })() && $i && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var T2 = window.location.protocol;
      /^(https?|file):$/.test(T2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (T2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    cp.createRoot = function(t, e) {
      if (!ge(t))
        throw Error("Target container is not a DOM element.");
      a0(t);
      var a = !1, i = "", o = zd, f = Dd, d = km;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === ln && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = lr(
        t,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Og
      ), t[ai] = e.current, Xi(t), new l0(e);
    }, cp.hydrateRoot = function(t, e, a) {
      if (!ge(t))
        throw Error("Target container is not a DOM element.");
      a0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = zd, d = Dd, h = km, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = lr(
        t,
        1,
        !0,
        e,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Og
      ), e.context = Eg(null), a = e.current, i = Bl(a), i = ec(i), o = tl(i), o.callback = null, In(a, o, i), Wn(i, "hydrateRoot()", null), a = i, e.current.lanes = a, ri(e, a), da(e), t[ai] = e.current, Xi(t), new Cn(e);
    }, cp.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), cp;
}
var C2;
function sE() {
  if (C2) return Bv.exports;
  C2 = 1;
  function J() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J);
      } catch (He) {
        console.error(He);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (J(), Bv.exports = oE()) : Bv.exports = fE(), Bv.exports;
}
var rE = sE();
rE.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ E2.jsx(lE.StrictMode, { children: /* @__PURE__ */ E2.jsx(aE, {}) })
);
