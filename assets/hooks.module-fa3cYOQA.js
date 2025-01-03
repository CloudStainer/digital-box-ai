import { E as Ir, h as ft, k as Oe } from "./index-CJq82H83.js";
import {
  e as ln,
  r as hn,
} from "./___vite-browser-external_commonjs-proxy-CY8bvTkN.js";
const ei = Object.freeze(
    Object.defineProperty(
      { __proto__: null, EventEmitter: Ir, default: Ir },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  da = ft(ei);
var hr = { exports: {} },
  cn = ln.EventEmitter,
  qe = {},
  st = {};
st.byteLength = ni;
st.toByteArray = oi;
st.fromByteArray = si;
var Se = [],
  _e = [],
  ti = typeof Uint8Array < "u" ? Uint8Array : Array,
  er = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Pe = 0, ri = er.length; Pe < ri; ++Pe)
  (Se[Pe] = er[Pe]), (_e[er.charCodeAt(Pe)] = Pe);
_e[45] = 62;
_e[95] = 63;
function _n(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var i = e.indexOf("=");
  i === -1 && (i = t);
  var a = i === t ? 0 : 4 - (i % 4);
  return [i, a];
}
function ni(e) {
  var t = _n(e),
    i = t[0],
    a = t[1];
  return ((i + a) * 3) / 4 - a;
}
function ii(e, t, i) {
  return ((t + i) * 3) / 4 - i;
}
function oi(e) {
  var t,
    i = _n(e),
    a = i[0],
    s = i[1],
    c = new ti(ii(e, a, s)),
    _ = 0,
    f = s > 0 ? a - 4 : a,
    y;
  for (y = 0; y < f; y += 4)
    (t =
      (_e[e.charCodeAt(y)] << 18) |
      (_e[e.charCodeAt(y + 1)] << 12) |
      (_e[e.charCodeAt(y + 2)] << 6) |
      _e[e.charCodeAt(y + 3)]),
      (c[_++] = (t >> 16) & 255),
      (c[_++] = (t >> 8) & 255),
      (c[_++] = t & 255);
  return (
    s === 2 &&
      ((t = (_e[e.charCodeAt(y)] << 2) | (_e[e.charCodeAt(y + 1)] >> 4)),
      (c[_++] = t & 255)),
    s === 1 &&
      ((t =
        (_e[e.charCodeAt(y)] << 10) |
        (_e[e.charCodeAt(y + 1)] << 4) |
        (_e[e.charCodeAt(y + 2)] >> 2)),
      (c[_++] = (t >> 8) & 255),
      (c[_++] = t & 255)),
    c
  );
}
function ai(e) {
  return (
    Se[(e >> 18) & 63] + Se[(e >> 12) & 63] + Se[(e >> 6) & 63] + Se[e & 63]
  );
}
function fi(e, t, i) {
  for (var a, s = [], c = t; c < i; c += 3)
    (a =
      ((e[c] << 16) & 16711680) + ((e[c + 1] << 8) & 65280) + (e[c + 2] & 255)),
      s.push(ai(a));
  return s.join("");
}
function si(e) {
  for (
    var t, i = e.length, a = i % 3, s = [], c = 16383, _ = 0, f = i - a;
    _ < f;
    _ += c
  )
    s.push(fi(e, _, _ + c > f ? f : _ + c));
  return (
    a === 1
      ? ((t = e[i - 1]), s.push(Se[t >> 2] + Se[(t << 4) & 63] + "=="))
      : a === 2 &&
        ((t = (e[i - 2] << 8) + e[i - 1]),
        s.push(Se[t >> 10] + Se[(t >> 4) & 63] + Se[(t << 2) & 63] + "=")),
    s.join("")
  );
}
var Er = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ Er.read =
  function (e, t, i, a, s) {
    var c,
      _,
      f = s * 8 - a - 1,
      y = (1 << f) - 1,
      v = y >> 1,
      B = -7,
      b = i ? s - 1 : 0,
      T = i ? -1 : 1,
      m = e[t + b];
    for (
      b += T, c = m & ((1 << -B) - 1), m >>= -B, B += f;
      B > 0;
      c = c * 256 + e[t + b], b += T, B -= 8
    );
    for (
      _ = c & ((1 << -B) - 1), c >>= -B, B += a;
      B > 0;
      _ = _ * 256 + e[t + b], b += T, B -= 8
    );
    if (c === 0) c = 1 - v;
    else {
      if (c === y) return _ ? NaN : (m ? -1 : 1) * (1 / 0);
      (_ = _ + Math.pow(2, a)), (c = c - v);
    }
    return (m ? -1 : 1) * _ * Math.pow(2, c - a);
  };
Er.write = function (e, t, i, a, s, c) {
  var _,
    f,
    y,
    v = c * 8 - s - 1,
    B = (1 << v) - 1,
    b = B >> 1,
    T = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    m = a ? 0 : c - 1,
    k = a ? 1 : -1,
    U = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
  for (
    t = Math.abs(t),
      isNaN(t) || t === 1 / 0
        ? ((f = isNaN(t) ? 1 : 0), (_ = B))
        : ((_ = Math.floor(Math.log(t) / Math.LN2)),
          t * (y = Math.pow(2, -_)) < 1 && (_--, (y *= 2)),
          _ + b >= 1 ? (t += T / y) : (t += T * Math.pow(2, 1 - b)),
          t * y >= 2 && (_++, (y /= 2)),
          _ + b >= B
            ? ((f = 0), (_ = B))
            : _ + b >= 1
            ? ((f = (t * y - 1) * Math.pow(2, s)), (_ = _ + b))
            : ((f = t * Math.pow(2, b - 1) * Math.pow(2, s)), (_ = 0)));
    s >= 8;
    e[i + m] = f & 255, m += k, f /= 256, s -= 8
  );
  for (
    _ = (_ << s) | f, v += s;
    v > 0;
    e[i + m] = _ & 255, m += k, _ /= 256, v -= 8
  );
  e[i + m - k] |= U * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (e) {
  const t = st,
    i = Er,
    a =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (e.Buffer = f), (e.SlowBuffer = E), (e.INSPECT_MAX_BYTES = 50);
  const s = 2147483647;
  (e.kMaxLength = s),
    (f.TYPED_ARRAY_SUPPORT = c()),
    !f.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function c() {
    try {
      const o = new Uint8Array(1),
        r = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(r, Uint8Array.prototype),
        Object.setPrototypeOf(o, r),
        o.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(f.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (f.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(f.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (f.isBuffer(this)) return this.byteOffset;
      },
    });
  function _(o) {
    if (o > s)
      throw new RangeError(
        'The value "' + o + '" is invalid for option "size"'
      );
    const r = new Uint8Array(o);
    return Object.setPrototypeOf(r, f.prototype), r;
  }
  function f(o, r, n) {
    if (typeof o == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(o);
    }
    return y(o, r, n);
  }
  f.poolSize = 8192;
  function y(o, r, n) {
    if (typeof o == "string") return T(o, r);
    if (ArrayBuffer.isView(o)) return k(o);
    if (o == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof o
      );
    if (
      se(o, ArrayBuffer) ||
      (o && se(o.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (se(o, SharedArrayBuffer) || (o && se(o.buffer, SharedArrayBuffer))))
    )
      return U(o, r, n);
    if (typeof o == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const u = o.valueOf && o.valueOf();
    if (u != null && u !== o) return f.from(u, r, n);
    const p = C(o);
    if (p) return p;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof o[Symbol.toPrimitive] == "function"
    )
      return f.from(o[Symbol.toPrimitive]("string"), r, n);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof o
    );
  }
  (f.from = function (o, r, n) {
    return y(o, r, n);
  }),
    Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(f, Uint8Array);
  function v(o) {
    if (typeof o != "number")
      throw new TypeError('"size" argument must be of type number');
    if (o < 0)
      throw new RangeError(
        'The value "' + o + '" is invalid for option "size"'
      );
  }
  function B(o, r, n) {
    return (
      v(o),
      o <= 0
        ? _(o)
        : r !== void 0
        ? typeof n == "string"
          ? _(o).fill(r, n)
          : _(o).fill(r)
        : _(o)
    );
  }
  f.alloc = function (o, r, n) {
    return B(o, r, n);
  };
  function b(o) {
    return v(o), _(o < 0 ? 0 : d(o) | 0);
  }
  (f.allocUnsafe = function (o) {
    return b(o);
  }),
    (f.allocUnsafeSlow = function (o) {
      return b(o);
    });
  function T(o, r) {
    if (((typeof r != "string" || r === "") && (r = "utf8"), !f.isEncoding(r)))
      throw new TypeError("Unknown encoding: " + r);
    const n = I(o, r) | 0;
    let u = _(n);
    const p = u.write(o, r);
    return p !== n && (u = u.slice(0, p)), u;
  }
  function m(o) {
    const r = o.length < 0 ? 0 : d(o.length) | 0,
      n = _(r);
    for (let u = 0; u < r; u += 1) n[u] = o[u] & 255;
    return n;
  }
  function k(o) {
    if (se(o, Uint8Array)) {
      const r = new Uint8Array(o);
      return U(r.buffer, r.byteOffset, r.byteLength);
    }
    return m(o);
  }
  function U(o, r, n) {
    if (r < 0 || o.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < r + (n || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let u;
    return (
      r === void 0 && n === void 0
        ? (u = new Uint8Array(o))
        : n === void 0
        ? (u = new Uint8Array(o, r))
        : (u = new Uint8Array(o, r, n)),
      Object.setPrototypeOf(u, f.prototype),
      u
    );
  }
  function C(o) {
    if (f.isBuffer(o)) {
      const r = d(o.length) | 0,
        n = _(r);
      return n.length === 0 || o.copy(n, 0, 0, r), n;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || Ee(o.length) ? _(0) : m(o);
    if (o.type === "Buffer" && Array.isArray(o.data)) return m(o.data);
  }
  function d(o) {
    if (o >= s)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          s.toString(16) +
          " bytes"
      );
    return o | 0;
  }
  function E(o) {
    return +o != o && (o = 0), f.alloc(+o);
  }
  (f.isBuffer = function (r) {
    return r != null && r._isBuffer === !0 && r !== f.prototype;
  }),
    (f.compare = function (r, n) {
      if (
        (se(r, Uint8Array) && (r = f.from(r, r.offset, r.byteLength)),
        se(n, Uint8Array) && (n = f.from(n, n.offset, n.byteLength)),
        !f.isBuffer(r) || !f.isBuffer(n))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (r === n) return 0;
      let u = r.length,
        p = n.length;
      for (let x = 0, S = Math.min(u, p); x < S; ++x)
        if (r[x] !== n[x]) {
          (u = r[x]), (p = n[x]);
          break;
        }
      return u < p ? -1 : p < u ? 1 : 0;
    }),
    (f.isEncoding = function (r) {
      switch (String(r).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (f.concat = function (r, n) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0) return f.alloc(0);
      let u;
      if (n === void 0) for (n = 0, u = 0; u < r.length; ++u) n += r[u].length;
      const p = f.allocUnsafe(n);
      let x = 0;
      for (u = 0; u < r.length; ++u) {
        let S = r[u];
        if (se(S, Uint8Array))
          x + S.length > p.length
            ? (f.isBuffer(S) || (S = f.from(S)), S.copy(p, x))
            : Uint8Array.prototype.set.call(p, S, x);
        else if (f.isBuffer(S)) S.copy(p, x);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        x += S.length;
      }
      return p;
    });
  function I(o, r) {
    if (f.isBuffer(o)) return o.length;
    if (ArrayBuffer.isView(o) || se(o, ArrayBuffer)) return o.byteLength;
    if (typeof o != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof o
      );
    const n = o.length,
      u = arguments.length > 2 && arguments[2] === !0;
    if (!u && n === 0) return 0;
    let p = !1;
    for (;;)
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
          return j(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return n * 2;
        case "hex":
          return n >>> 1;
        case "base64":
          return Ce(o).length;
        default:
          if (p) return u ? -1 : j(o).length;
          (r = ("" + r).toLowerCase()), (p = !0);
      }
  }
  f.byteLength = I;
  function F(o, r, n) {
    let u = !1;
    if (
      ((r === void 0 || r < 0) && (r = 0),
      r > this.length ||
        ((n === void 0 || n > this.length) && (n = this.length), n <= 0) ||
        ((n >>>= 0), (r >>>= 0), n <= r))
    )
      return "";
    for (o || (o = "utf8"); ; )
      switch (o) {
        case "hex":
          return he(this, r, n);
        case "utf8":
        case "utf-8":
          return oe(this, r, n);
        case "ascii":
          return le(this, r, n);
        case "latin1":
        case "binary":
          return ye(this, r, n);
        case "base64":
          return te(this, r, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return be(this, r, n);
        default:
          if (u) throw new TypeError("Unknown encoding: " + o);
          (o = (o + "").toLowerCase()), (u = !0);
      }
  }
  f.prototype._isBuffer = !0;
  function M(o, r, n) {
    const u = o[r];
    (o[r] = o[n]), (o[n] = u);
  }
  (f.prototype.swap16 = function () {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let n = 0; n < r; n += 2) M(this, n, n + 1);
    return this;
  }),
    (f.prototype.swap32 = function () {
      const r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let n = 0; n < r; n += 4) M(this, n, n + 3), M(this, n + 1, n + 2);
      return this;
    }),
    (f.prototype.swap64 = function () {
      const r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let n = 0; n < r; n += 8)
        M(this, n, n + 7),
          M(this, n + 1, n + 6),
          M(this, n + 2, n + 5),
          M(this, n + 3, n + 4);
      return this;
    }),
    (f.prototype.toString = function () {
      const r = this.length;
      return r === 0
        ? ""
        : arguments.length === 0
        ? oe(this, 0, r)
        : F.apply(this, arguments);
    }),
    (f.prototype.toLocaleString = f.prototype.toString),
    (f.prototype.equals = function (r) {
      if (!f.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : f.compare(this, r) === 0;
    }),
    (f.prototype.inspect = function () {
      let r = "";
      const n = e.INSPECT_MAX_BYTES;
      return (
        (r = this.toString("hex", 0, n)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > n && (r += " ... "),
        "<Buffer " + r + ">"
      );
    }),
    a && (f.prototype[a] = f.prototype.inspect),
    (f.prototype.compare = function (r, n, u, p, x) {
      if (
        (se(r, Uint8Array) && (r = f.from(r, r.offset, r.byteLength)),
        !f.isBuffer(r))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof r
        );
      if (
        (n === void 0 && (n = 0),
        u === void 0 && (u = r ? r.length : 0),
        p === void 0 && (p = 0),
        x === void 0 && (x = this.length),
        n < 0 || u > r.length || p < 0 || x > this.length)
      )
        throw new RangeError("out of range index");
      if (p >= x && n >= u) return 0;
      if (p >= x) return -1;
      if (n >= u) return 1;
      if (((n >>>= 0), (u >>>= 0), (p >>>= 0), (x >>>= 0), this === r))
        return 0;
      let S = x - p,
        q = u - n;
      const J = Math.min(S, q),
        G = this.slice(p, x),
        Z = r.slice(n, u);
      for (let z = 0; z < J; ++z)
        if (G[z] !== Z[z]) {
          (S = G[z]), (q = Z[z]);
          break;
        }
      return S < q ? -1 : q < S ? 1 : 0;
    });
  function L(o, r, n, u, p) {
    if (o.length === 0) return -1;
    if (
      (typeof n == "string"
        ? ((u = n), (n = 0))
        : n > 2147483647
        ? (n = 2147483647)
        : n < -2147483648 && (n = -2147483648),
      (n = +n),
      Ee(n) && (n = p ? 0 : o.length - 1),
      n < 0 && (n = o.length + n),
      n >= o.length)
    ) {
      if (p) return -1;
      n = o.length - 1;
    } else if (n < 0)
      if (p) n = 0;
      else return -1;
    if ((typeof r == "string" && (r = f.from(r, u)), f.isBuffer(r)))
      return r.length === 0 ? -1 : W(o, r, n, u, p);
    if (typeof r == "number")
      return (
        (r = r & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? p
            ? Uint8Array.prototype.indexOf.call(o, r, n)
            : Uint8Array.prototype.lastIndexOf.call(o, r, n)
          : W(o, [r], n, u, p)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function W(o, r, n, u, p) {
    let x = 1,
      S = o.length,
      q = r.length;
    if (
      u !== void 0 &&
      ((u = String(u).toLowerCase()),
      u === "ucs2" || u === "ucs-2" || u === "utf16le" || u === "utf-16le")
    ) {
      if (o.length < 2 || r.length < 2) return -1;
      (x = 2), (S /= 2), (q /= 2), (n /= 2);
    }
    function J(Z, z) {
      return x === 1 ? Z[z] : Z.readUInt16BE(z * x);
    }
    let G;
    if (p) {
      let Z = -1;
      for (G = n; G < S; G++)
        if (J(o, G) === J(r, Z === -1 ? 0 : G - Z)) {
          if ((Z === -1 && (Z = G), G - Z + 1 === q)) return Z * x;
        } else Z !== -1 && (G -= G - Z), (Z = -1);
    } else
      for (n + q > S && (n = S - q), G = n; G >= 0; G--) {
        let Z = !0;
        for (let z = 0; z < q; z++)
          if (J(o, G + z) !== J(r, z)) {
            Z = !1;
            break;
          }
        if (Z) return G;
      }
    return -1;
  }
  (f.prototype.includes = function (r, n, u) {
    return this.indexOf(r, n, u) !== -1;
  }),
    (f.prototype.indexOf = function (r, n, u) {
      return L(this, r, n, u, !0);
    }),
    (f.prototype.lastIndexOf = function (r, n, u) {
      return L(this, r, n, u, !1);
    });
  function O(o, r, n, u) {
    n = Number(n) || 0;
    const p = o.length - n;
    u ? ((u = Number(u)), u > p && (u = p)) : (u = p);
    const x = r.length;
    u > x / 2 && (u = x / 2);
    let S;
    for (S = 0; S < u; ++S) {
      const q = parseInt(r.substr(S * 2, 2), 16);
      if (Ee(q)) return S;
      o[n + S] = q;
    }
    return S;
  }
  function P(o, r, n, u) {
    return Re(j(r, o.length - n), o, n, u);
  }
  function V(o, r, n, u) {
    return Re(we(r), o, n, u);
  }
  function ie(o, r, n, u) {
    return Re(Ce(r), o, n, u);
  }
  function pe(o, r, n, u) {
    return Re(Be(r, o.length - n), o, n, u);
  }
  (f.prototype.write = function (r, n, u, p) {
    if (n === void 0) (p = "utf8"), (u = this.length), (n = 0);
    else if (u === void 0 && typeof n == "string")
      (p = n), (u = this.length), (n = 0);
    else if (isFinite(n))
      (n = n >>> 0),
        isFinite(u)
          ? ((u = u >>> 0), p === void 0 && (p = "utf8"))
          : ((p = u), (u = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const x = this.length - n;
    if (
      ((u === void 0 || u > x) && (u = x),
      (r.length > 0 && (u < 0 || n < 0)) || n > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    p || (p = "utf8");
    let S = !1;
    for (;;)
      switch (p) {
        case "hex":
          return O(this, r, n, u);
        case "utf8":
        case "utf-8":
          return P(this, r, n, u);
        case "ascii":
        case "latin1":
        case "binary":
          return V(this, r, n, u);
        case "base64":
          return ie(this, r, n, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return pe(this, r, n, u);
        default:
          if (S) throw new TypeError("Unknown encoding: " + p);
          (p = ("" + p).toLowerCase()), (S = !0);
      }
  }),
    (f.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function te(o, r, n) {
    return r === 0 && n === o.length
      ? t.fromByteArray(o)
      : t.fromByteArray(o.slice(r, n));
  }
  function oe(o, r, n) {
    n = Math.min(o.length, n);
    const u = [];
    let p = r;
    for (; p < n; ) {
      const x = o[p];
      let S = null,
        q = x > 239 ? 4 : x > 223 ? 3 : x > 191 ? 2 : 1;
      if (p + q <= n) {
        let J, G, Z, z;
        switch (q) {
          case 1:
            x < 128 && (S = x);
            break;
          case 2:
            (J = o[p + 1]),
              (J & 192) === 128 &&
                ((z = ((x & 31) << 6) | (J & 63)), z > 127 && (S = z));
            break;
          case 3:
            (J = o[p + 1]),
              (G = o[p + 2]),
              (J & 192) === 128 &&
                (G & 192) === 128 &&
                ((z = ((x & 15) << 12) | ((J & 63) << 6) | (G & 63)),
                z > 2047 && (z < 55296 || z > 57343) && (S = z));
            break;
          case 4:
            (J = o[p + 1]),
              (G = o[p + 2]),
              (Z = o[p + 3]),
              (J & 192) === 128 &&
                (G & 192) === 128 &&
                (Z & 192) === 128 &&
                ((z =
                  ((x & 15) << 18) |
                  ((J & 63) << 12) |
                  ((G & 63) << 6) |
                  (Z & 63)),
                z > 65535 && z < 1114112 && (S = z));
        }
      }
      S === null
        ? ((S = 65533), (q = 1))
        : S > 65535 &&
          ((S -= 65536),
          u.push(((S >>> 10) & 1023) | 55296),
          (S = 56320 | (S & 1023))),
        u.push(S),
        (p += q);
    }
    return ve(u);
  }
  const ae = 4096;
  function ve(o) {
    const r = o.length;
    if (r <= ae) return String.fromCharCode.apply(String, o);
    let n = "",
      u = 0;
    for (; u < r; )
      n += String.fromCharCode.apply(String, o.slice(u, (u += ae)));
    return n;
  }
  function le(o, r, n) {
    let u = "";
    n = Math.min(o.length, n);
    for (let p = r; p < n; ++p) u += String.fromCharCode(o[p] & 127);
    return u;
  }
  function ye(o, r, n) {
    let u = "";
    n = Math.min(o.length, n);
    for (let p = r; p < n; ++p) u += String.fromCharCode(o[p]);
    return u;
  }
  function he(o, r, n) {
    const u = o.length;
    (!r || r < 0) && (r = 0), (!n || n < 0 || n > u) && (n = u);
    let p = "";
    for (let x = r; x < n; ++x) p += Fe[o[x]];
    return p;
  }
  function be(o, r, n) {
    const u = o.slice(r, n);
    let p = "";
    for (let x = 0; x < u.length - 1; x += 2)
      p += String.fromCharCode(u[x] + u[x + 1] * 256);
    return p;
  }
  f.prototype.slice = function (r, n) {
    const u = this.length;
    (r = ~~r),
      (n = n === void 0 ? u : ~~n),
      r < 0 ? ((r += u), r < 0 && (r = 0)) : r > u && (r = u),
      n < 0 ? ((n += u), n < 0 && (n = 0)) : n > u && (n = u),
      n < r && (n = r);
    const p = this.subarray(r, n);
    return Object.setPrototypeOf(p, f.prototype), p;
  };
  function Y(o, r, n) {
    if (o % 1 !== 0 || o < 0) throw new RangeError("offset is not uint");
    if (o + r > n)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (f.prototype.readUintLE = f.prototype.readUIntLE =
    function (r, n, u) {
      (r = r >>> 0), (n = n >>> 0), u || Y(r, n, this.length);
      let p = this[r],
        x = 1,
        S = 0;
      for (; ++S < n && (x *= 256); ) p += this[r + S] * x;
      return p;
    }),
    (f.prototype.readUintBE = f.prototype.readUIntBE =
      function (r, n, u) {
        (r = r >>> 0), (n = n >>> 0), u || Y(r, n, this.length);
        let p = this[r + --n],
          x = 1;
        for (; n > 0 && (x *= 256); ) p += this[r + --n] * x;
        return p;
      }),
    (f.prototype.readUint8 = f.prototype.readUInt8 =
      function (r, n) {
        return (r = r >>> 0), n || Y(r, 1, this.length), this[r];
      }),
    (f.prototype.readUint16LE = f.prototype.readUInt16LE =
      function (r, n) {
        return (
          (r = r >>> 0), n || Y(r, 2, this.length), this[r] | (this[r + 1] << 8)
        );
      }),
    (f.prototype.readUint16BE = f.prototype.readUInt16BE =
      function (r, n) {
        return (
          (r = r >>> 0), n || Y(r, 2, this.length), (this[r] << 8) | this[r + 1]
        );
      }),
    (f.prototype.readUint32LE = f.prototype.readUInt32LE =
      function (r, n) {
        return (
          (r = r >>> 0),
          n || Y(r, 4, this.length),
          (this[r] | (this[r + 1] << 8) | (this[r + 2] << 16)) +
            this[r + 3] * 16777216
        );
      }),
    (f.prototype.readUint32BE = f.prototype.readUInt32BE =
      function (r, n) {
        return (
          (r = r >>> 0),
          n || Y(r, 4, this.length),
          this[r] * 16777216 +
            ((this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3])
        );
      }),
    (f.prototype.readBigUInt64LE = ue(function (r) {
      (r = r >>> 0), R(r, "offset");
      const n = this[r],
        u = this[r + 7];
      (n === void 0 || u === void 0) && N(r, this.length - 8);
      const p =
          n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24,
        x = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + u * 2 ** 24;
      return BigInt(p) + (BigInt(x) << BigInt(32));
    })),
    (f.prototype.readBigUInt64BE = ue(function (r) {
      (r = r >>> 0), R(r, "offset");
      const n = this[r],
        u = this[r + 7];
      (n === void 0 || u === void 0) && N(r, this.length - 8);
      const p =
          n * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r],
        x = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + u;
      return (BigInt(p) << BigInt(32)) + BigInt(x);
    })),
    (f.prototype.readIntLE = function (r, n, u) {
      (r = r >>> 0), (n = n >>> 0), u || Y(r, n, this.length);
      let p = this[r],
        x = 1,
        S = 0;
      for (; ++S < n && (x *= 256); ) p += this[r + S] * x;
      return (x *= 128), p >= x && (p -= Math.pow(2, 8 * n)), p;
    }),
    (f.prototype.readIntBE = function (r, n, u) {
      (r = r >>> 0), (n = n >>> 0), u || Y(r, n, this.length);
      let p = n,
        x = 1,
        S = this[r + --p];
      for (; p > 0 && (x *= 256); ) S += this[r + --p] * x;
      return (x *= 128), S >= x && (S -= Math.pow(2, 8 * n)), S;
    }),
    (f.prototype.readInt8 = function (r, n) {
      return (
        (r = r >>> 0),
        n || Y(r, 1, this.length),
        this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r]
      );
    }),
    (f.prototype.readInt16LE = function (r, n) {
      (r = r >>> 0), n || Y(r, 2, this.length);
      const u = this[r] | (this[r + 1] << 8);
      return u & 32768 ? u | 4294901760 : u;
    }),
    (f.prototype.readInt16BE = function (r, n) {
      (r = r >>> 0), n || Y(r, 2, this.length);
      const u = this[r + 1] | (this[r] << 8);
      return u & 32768 ? u | 4294901760 : u;
    }),
    (f.prototype.readInt32LE = function (r, n) {
      return (
        (r = r >>> 0),
        n || Y(r, 4, this.length),
        this[r] | (this[r + 1] << 8) | (this[r + 2] << 16) | (this[r + 3] << 24)
      );
    }),
    (f.prototype.readInt32BE = function (r, n) {
      return (
        (r = r >>> 0),
        n || Y(r, 4, this.length),
        (this[r] << 24) | (this[r + 1] << 16) | (this[r + 2] << 8) | this[r + 3]
      );
    }),
    (f.prototype.readBigInt64LE = ue(function (r) {
      (r = r >>> 0), R(r, "offset");
      const n = this[r],
        u = this[r + 7];
      (n === void 0 || u === void 0) && N(r, this.length - 8);
      const p =
        this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (u << 24);
      return (
        (BigInt(p) << BigInt(32)) +
        BigInt(
          n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24
        )
      );
    })),
    (f.prototype.readBigInt64BE = ue(function (r) {
      (r = r >>> 0), R(r, "offset");
      const n = this[r],
        u = this[r + 7];
      (n === void 0 || u === void 0) && N(r, this.length - 8);
      const p =
        (n << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
      return (
        (BigInt(p) << BigInt(32)) +
        BigInt(
          this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + u
        )
      );
    })),
    (f.prototype.readFloatLE = function (r, n) {
      return (
        (r = r >>> 0), n || Y(r, 4, this.length), i.read(this, r, !0, 23, 4)
      );
    }),
    (f.prototype.readFloatBE = function (r, n) {
      return (
        (r = r >>> 0), n || Y(r, 4, this.length), i.read(this, r, !1, 23, 4)
      );
    }),
    (f.prototype.readDoubleLE = function (r, n) {
      return (
        (r = r >>> 0), n || Y(r, 8, this.length), i.read(this, r, !0, 52, 8)
      );
    }),
    (f.prototype.readDoubleBE = function (r, n) {
      return (
        (r = r >>> 0), n || Y(r, 8, this.length), i.read(this, r, !1, 52, 8)
      );
    });
  function Q(o, r, n, u, p, x) {
    if (!f.isBuffer(o))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > p || r < x)
      throw new RangeError('"value" argument is out of bounds');
    if (n + u > o.length) throw new RangeError("Index out of range");
  }
  (f.prototype.writeUintLE = f.prototype.writeUIntLE =
    function (r, n, u, p) {
      if (((r = +r), (n = n >>> 0), (u = u >>> 0), !p)) {
        const q = Math.pow(2, 8 * u) - 1;
        Q(this, r, n, u, q, 0);
      }
      let x = 1,
        S = 0;
      for (this[n] = r & 255; ++S < u && (x *= 256); )
        this[n + S] = (r / x) & 255;
      return n + u;
    }),
    (f.prototype.writeUintBE = f.prototype.writeUIntBE =
      function (r, n, u, p) {
        if (((r = +r), (n = n >>> 0), (u = u >>> 0), !p)) {
          const q = Math.pow(2, 8 * u) - 1;
          Q(this, r, n, u, q, 0);
        }
        let x = u - 1,
          S = 1;
        for (this[n + x] = r & 255; --x >= 0 && (S *= 256); )
          this[n + x] = (r / S) & 255;
        return n + u;
      }),
    (f.prototype.writeUint8 = f.prototype.writeUInt8 =
      function (r, n, u) {
        return (
          (r = +r),
          (n = n >>> 0),
          u || Q(this, r, n, 1, 255, 0),
          (this[n] = r & 255),
          n + 1
        );
      }),
    (f.prototype.writeUint16LE = f.prototype.writeUInt16LE =
      function (r, n, u) {
        return (
          (r = +r),
          (n = n >>> 0),
          u || Q(this, r, n, 2, 65535, 0),
          (this[n] = r & 255),
          (this[n + 1] = r >>> 8),
          n + 2
        );
      }),
    (f.prototype.writeUint16BE = f.prototype.writeUInt16BE =
      function (r, n, u) {
        return (
          (r = +r),
          (n = n >>> 0),
          u || Q(this, r, n, 2, 65535, 0),
          (this[n] = r >>> 8),
          (this[n + 1] = r & 255),
          n + 2
        );
      }),
    (f.prototype.writeUint32LE = f.prototype.writeUInt32LE =
      function (r, n, u) {
        return (
          (r = +r),
          (n = n >>> 0),
          u || Q(this, r, n, 4, 4294967295, 0),
          (this[n + 3] = r >>> 24),
          (this[n + 2] = r >>> 16),
          (this[n + 1] = r >>> 8),
          (this[n] = r & 255),
          n + 4
        );
      }),
    (f.prototype.writeUint32BE = f.prototype.writeUInt32BE =
      function (r, n, u) {
        return (
          (r = +r),
          (n = n >>> 0),
          u || Q(this, r, n, 4, 4294967295, 0),
          (this[n] = r >>> 24),
          (this[n + 1] = r >>> 16),
          (this[n + 2] = r >>> 8),
          (this[n + 3] = r & 255),
          n + 4
        );
      });
  function fe(o, r, n, u, p) {
    h(r, u, p, o, n, 7);
    let x = Number(r & BigInt(4294967295));
    (o[n++] = x),
      (x = x >> 8),
      (o[n++] = x),
      (x = x >> 8),
      (o[n++] = x),
      (x = x >> 8),
      (o[n++] = x);
    let S = Number((r >> BigInt(32)) & BigInt(4294967295));
    return (
      (o[n++] = S),
      (S = S >> 8),
      (o[n++] = S),
      (S = S >> 8),
      (o[n++] = S),
      (S = S >> 8),
      (o[n++] = S),
      n
    );
  }
  function ge(o, r, n, u, p) {
    h(r, u, p, o, n, 7);
    let x = Number(r & BigInt(4294967295));
    (o[n + 7] = x),
      (x = x >> 8),
      (o[n + 6] = x),
      (x = x >> 8),
      (o[n + 5] = x),
      (x = x >> 8),
      (o[n + 4] = x);
    let S = Number((r >> BigInt(32)) & BigInt(4294967295));
    return (
      (o[n + 3] = S),
      (S = S >> 8),
      (o[n + 2] = S),
      (S = S >> 8),
      (o[n + 1] = S),
      (S = S >> 8),
      (o[n] = S),
      n + 8
    );
  }
  (f.prototype.writeBigUInt64LE = ue(function (r, n = 0) {
    return fe(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
    (f.prototype.writeBigUInt64BE = ue(function (r, n = 0) {
      return ge(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
    (f.prototype.writeIntLE = function (r, n, u, p) {
      if (((r = +r), (n = n >>> 0), !p)) {
        const J = Math.pow(2, 8 * u - 1);
        Q(this, r, n, u, J - 1, -J);
      }
      let x = 0,
        S = 1,
        q = 0;
      for (this[n] = r & 255; ++x < u && (S *= 256); )
        r < 0 && q === 0 && this[n + x - 1] !== 0 && (q = 1),
          (this[n + x] = (((r / S) >> 0) - q) & 255);
      return n + u;
    }),
    (f.prototype.writeIntBE = function (r, n, u, p) {
      if (((r = +r), (n = n >>> 0), !p)) {
        const J = Math.pow(2, 8 * u - 1);
        Q(this, r, n, u, J - 1, -J);
      }
      let x = u - 1,
        S = 1,
        q = 0;
      for (this[n + x] = r & 255; --x >= 0 && (S *= 256); )
        r < 0 && q === 0 && this[n + x + 1] !== 0 && (q = 1),
          (this[n + x] = (((r / S) >> 0) - q) & 255);
      return n + u;
    }),
    (f.prototype.writeInt8 = function (r, n, u) {
      return (
        (r = +r),
        (n = n >>> 0),
        u || Q(this, r, n, 1, 127, -128),
        r < 0 && (r = 255 + r + 1),
        (this[n] = r & 255),
        n + 1
      );
    }),
    (f.prototype.writeInt16LE = function (r, n, u) {
      return (
        (r = +r),
        (n = n >>> 0),
        u || Q(this, r, n, 2, 32767, -32768),
        (this[n] = r & 255),
        (this[n + 1] = r >>> 8),
        n + 2
      );
    }),
    (f.prototype.writeInt16BE = function (r, n, u) {
      return (
        (r = +r),
        (n = n >>> 0),
        u || Q(this, r, n, 2, 32767, -32768),
        (this[n] = r >>> 8),
        (this[n + 1] = r & 255),
        n + 2
      );
    }),
    (f.prototype.writeInt32LE = function (r, n, u) {
      return (
        (r = +r),
        (n = n >>> 0),
        u || Q(this, r, n, 4, 2147483647, -2147483648),
        (this[n] = r & 255),
        (this[n + 1] = r >>> 8),
        (this[n + 2] = r >>> 16),
        (this[n + 3] = r >>> 24),
        n + 4
      );
    }),
    (f.prototype.writeInt32BE = function (r, n, u) {
      return (
        (r = +r),
        (n = n >>> 0),
        u || Q(this, r, n, 4, 2147483647, -2147483648),
        r < 0 && (r = 4294967295 + r + 1),
        (this[n] = r >>> 24),
        (this[n + 1] = r >>> 16),
        (this[n + 2] = r >>> 8),
        (this[n + 3] = r & 255),
        n + 4
      );
    }),
    (f.prototype.writeBigInt64LE = ue(function (r, n = 0) {
      return fe(
        this,
        r,
        n,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    })),
    (f.prototype.writeBigInt64BE = ue(function (r, n = 0) {
      return ge(
        this,
        r,
        n,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    }));
  function ce(o, r, n, u, p, x) {
    if (n + u > o.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("Index out of range");
  }
  function w(o, r, n, u, p) {
    return (
      (r = +r),
      (n = n >>> 0),
      p || ce(o, r, n, 4),
      i.write(o, r, n, u, 23, 4),
      n + 4
    );
  }
  (f.prototype.writeFloatLE = function (r, n, u) {
    return w(this, r, n, !0, u);
  }),
    (f.prototype.writeFloatBE = function (r, n, u) {
      return w(this, r, n, !1, u);
    });
  function g(o, r, n, u, p) {
    return (
      (r = +r),
      (n = n >>> 0),
      p || ce(o, r, n, 8),
      i.write(o, r, n, u, 52, 8),
      n + 8
    );
  }
  (f.prototype.writeDoubleLE = function (r, n, u) {
    return g(this, r, n, !0, u);
  }),
    (f.prototype.writeDoubleBE = function (r, n, u) {
      return g(this, r, n, !1, u);
    }),
    (f.prototype.copy = function (r, n, u, p) {
      if (!f.isBuffer(r)) throw new TypeError("argument should be a Buffer");
      if (
        (u || (u = 0),
        !p && p !== 0 && (p = this.length),
        n >= r.length && (n = r.length),
        n || (n = 0),
        p > 0 && p < u && (p = u),
        p === u || r.length === 0 || this.length === 0)
      )
        return 0;
      if (n < 0) throw new RangeError("targetStart out of bounds");
      if (u < 0 || u >= this.length) throw new RangeError("Index out of range");
      if (p < 0) throw new RangeError("sourceEnd out of bounds");
      p > this.length && (p = this.length),
        r.length - n < p - u && (p = r.length - n + u);
      const x = p - u;
      return (
        this === r && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(n, u, p)
          : Uint8Array.prototype.set.call(r, this.subarray(u, p), n),
        x
      );
    }),
    (f.prototype.fill = function (r, n, u, p) {
      if (typeof r == "string") {
        if (
          (typeof n == "string"
            ? ((p = n), (n = 0), (u = this.length))
            : typeof u == "string" && ((p = u), (u = this.length)),
          p !== void 0 && typeof p != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof p == "string" && !f.isEncoding(p))
          throw new TypeError("Unknown encoding: " + p);
        if (r.length === 1) {
          const S = r.charCodeAt(0);
          ((p === "utf8" && S < 128) || p === "latin1") && (r = S);
        }
      } else
        typeof r == "number"
          ? (r = r & 255)
          : typeof r == "boolean" && (r = Number(r));
      if (n < 0 || this.length < n || this.length < u)
        throw new RangeError("Out of range index");
      if (u <= n) return this;
      (n = n >>> 0), (u = u === void 0 ? this.length : u >>> 0), r || (r = 0);
      let x;
      if (typeof r == "number") for (x = n; x < u; ++x) this[x] = r;
      else {
        const S = f.isBuffer(r) ? r : f.from(r, p),
          q = S.length;
        if (q === 0)
          throw new TypeError(
            'The value "' + r + '" is invalid for argument "value"'
          );
        for (x = 0; x < u - n; ++x) this[x + n] = S[x % q];
      }
      return this;
    });
  const A = {};
  function D(o, r, n) {
    A[o] = class extends n {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: r.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${o}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return o;
      }
      set code(p) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${o}]: ${this.message}`;
      }
    };
  }
  D(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (o) {
      return o
        ? `${o} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ),
    D(
      "ERR_INVALID_ARG_TYPE",
      function (o, r) {
        return `The "${o}" argument must be of type number. Received type ${typeof r}`;
      },
      TypeError
    ),
    D(
      "ERR_OUT_OF_RANGE",
      function (o, r, n) {
        let u = `The value of "${o}" is out of range.`,
          p = n;
        return (
          Number.isInteger(n) && Math.abs(n) > 2 ** 32
            ? (p = $(String(n)))
            : typeof n == "bigint" &&
              ((p = String(n)),
              (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) &&
                (p = $(p)),
              (p += "n")),
          (u += ` It must be ${r}. Received ${p}`),
          u
        );
      },
      RangeError
    );
  function $(o) {
    let r = "",
      n = o.length;
    const u = o[0] === "-" ? 1 : 0;
    for (; n >= u + 4; n -= 3) r = `_${o.slice(n - 3, n)}${r}`;
    return `${o.slice(0, n)}${r}`;
  }
  function l(o, r, n) {
    R(r, "offset"),
      (o[r] === void 0 || o[r + n] === void 0) && N(r, o.length - (n + 1));
  }
  function h(o, r, n, u, p, x) {
    if (o > n || o < r) {
      const S = typeof r == "bigint" ? "n" : "";
      let q;
      throw (
        (r === 0 || r === BigInt(0)
          ? (q = `>= 0${S} and < 2${S} ** ${(x + 1) * 8}${S}`)
          : (q = `>= -(2${S} ** ${(x + 1) * 8 - 1}${S}) and < 2 ** ${
              (x + 1) * 8 - 1
            }${S}`),
        new A.ERR_OUT_OF_RANGE("value", q, o))
      );
    }
    l(u, p, x);
  }
  function R(o, r) {
    if (typeof o != "number") throw new A.ERR_INVALID_ARG_TYPE(r, "number", o);
  }
  function N(o, r, n) {
    throw Math.floor(o) !== o
      ? (R(o, n), new A.ERR_OUT_OF_RANGE("offset", "an integer", o))
      : r < 0
      ? new A.ERR_BUFFER_OUT_OF_BOUNDS()
      : new A.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${r}`, o);
  }
  const K = /[^+/0-9A-Za-z-_]/g;
  function H(o) {
    if (((o = o.split("=")[0]), (o = o.trim().replace(K, "")), o.length < 2))
      return "";
    for (; o.length % 4 !== 0; ) o = o + "=";
    return o;
  }
  function j(o, r) {
    r = r || 1 / 0;
    let n;
    const u = o.length;
    let p = null;
    const x = [];
    for (let S = 0; S < u; ++S) {
      if (((n = o.charCodeAt(S)), n > 55295 && n < 57344)) {
        if (!p) {
          if (n > 56319) {
            (r -= 3) > -1 && x.push(239, 191, 189);
            continue;
          } else if (S + 1 === u) {
            (r -= 3) > -1 && x.push(239, 191, 189);
            continue;
          }
          p = n;
          continue;
        }
        if (n < 56320) {
          (r -= 3) > -1 && x.push(239, 191, 189), (p = n);
          continue;
        }
        n = (((p - 55296) << 10) | (n - 56320)) + 65536;
      } else p && (r -= 3) > -1 && x.push(239, 191, 189);
      if (((p = null), n < 128)) {
        if ((r -= 1) < 0) break;
        x.push(n);
      } else if (n < 2048) {
        if ((r -= 2) < 0) break;
        x.push((n >> 6) | 192, (n & 63) | 128);
      } else if (n < 65536) {
        if ((r -= 3) < 0) break;
        x.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (n & 63) | 128);
      } else if (n < 1114112) {
        if ((r -= 4) < 0) break;
        x.push(
          (n >> 18) | 240,
          ((n >> 12) & 63) | 128,
          ((n >> 6) & 63) | 128,
          (n & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return x;
  }
  function we(o) {
    const r = [];
    for (let n = 0; n < o.length; ++n) r.push(o.charCodeAt(n) & 255);
    return r;
  }
  function Be(o, r) {
    let n, u, p;
    const x = [];
    for (let S = 0; S < o.length && !((r -= 2) < 0); ++S)
      (n = o.charCodeAt(S)), (u = n >> 8), (p = n % 256), x.push(p), x.push(u);
    return x;
  }
  function Ce(o) {
    return t.toByteArray(H(o));
  }
  function Re(o, r, n, u) {
    let p;
    for (p = 0; p < u && !(p + n >= r.length || p >= o.length); ++p)
      r[p + n] = o[p];
    return p;
  }
  function se(o, r) {
    return (
      o instanceof r ||
      (o != null &&
        o.constructor != null &&
        o.constructor.name != null &&
        o.constructor.name === r.name)
    );
  }
  function Ee(o) {
    return o !== o;
  }
  const Fe = (function () {
    const o = "0123456789abcdef",
      r = new Array(256);
    for (let n = 0; n < 16; ++n) {
      const u = n * 16;
      for (let p = 0; p < 16; ++p) r[u + p] = o[n] + o[p];
    }
    return r;
  })();
  function ue(o) {
    return typeof BigInt > "u" ? me : o;
  }
  function me() {
    throw new Error("BigInt not supported");
  }
})(qe);
var tr, Cr;
function ui() {
  if (Cr) return tr;
  Cr = 1;
  function e(k, U) {
    var C = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(k);
      U &&
        (d = d.filter(function (E) {
          return Object.getOwnPropertyDescriptor(k, E).enumerable;
        })),
        C.push.apply(C, d);
    }
    return C;
  }
  function t(k) {
    for (var U = 1; U < arguments.length; U++) {
      var C = arguments[U] != null ? arguments[U] : {};
      U % 2
        ? e(Object(C), !0).forEach(function (d) {
            i(k, d, C[d]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(C))
        : e(Object(C)).forEach(function (d) {
            Object.defineProperty(k, d, Object.getOwnPropertyDescriptor(C, d));
          });
    }
    return k;
  }
  function i(k, U, C) {
    return (
      (U = _(U)),
      U in k
        ? Object.defineProperty(k, U, {
            value: C,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (k[U] = C),
      k
    );
  }
  function a(k, U) {
    if (!(k instanceof U))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(k, U) {
    for (var C = 0; C < U.length; C++) {
      var d = U[C];
      (d.enumerable = d.enumerable || !1),
        (d.configurable = !0),
        "value" in d && (d.writable = !0),
        Object.defineProperty(k, _(d.key), d);
    }
  }
  function c(k, U, C) {
    return (
      U && s(k.prototype, U),
      Object.defineProperty(k, "prototype", { writable: !1 }),
      k
    );
  }
  function _(k) {
    var U = f(k, "string");
    return typeof U == "symbol" ? U : String(U);
  }
  function f(k, U) {
    if (typeof k != "object" || k === null) return k;
    var C = k[Symbol.toPrimitive];
    if (C !== void 0) {
      var d = C.call(k, U || "default");
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (U === "string" ? String : Number)(k);
  }
  var y = qe,
    v = y.Buffer,
    B = hn,
    b = B.inspect,
    T = (b && b.custom) || "inspect";
  function m(k, U, C) {
    v.prototype.copy.call(k, U, C);
  }
  return (
    (tr = (function () {
      function k() {
        a(this, k), (this.head = null), (this.tail = null), (this.length = 0);
      }
      return (
        c(k, [
          {
            key: "push",
            value: function (C) {
              var d = { data: C, next: null };
              this.length > 0 ? (this.tail.next = d) : (this.head = d),
                (this.tail = d),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (C) {
              var d = { data: C, next: this.head };
              this.length === 0 && (this.tail = d),
                (this.head = d),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (this.length !== 0) {
                var C = this.head.data;
                return (
                  this.length === 1
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  C
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (C) {
              if (this.length === 0) return "";
              for (var d = this.head, E = "" + d.data; (d = d.next); )
                E += C + d.data;
              return E;
            },
          },
          {
            key: "concat",
            value: function (C) {
              if (this.length === 0) return v.alloc(0);
              for (var d = v.allocUnsafe(C >>> 0), E = this.head, I = 0; E; )
                m(E.data, d, I), (I += E.data.length), (E = E.next);
              return d;
            },
          },
          {
            key: "consume",
            value: function (C, d) {
              var E;
              return (
                C < this.head.data.length
                  ? ((E = this.head.data.slice(0, C)),
                    (this.head.data = this.head.data.slice(C)))
                  : C === this.head.data.length
                  ? (E = this.shift())
                  : (E = d ? this._getString(C) : this._getBuffer(C)),
                E
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (C) {
              var d = this.head,
                E = 1,
                I = d.data;
              for (C -= I.length; (d = d.next); ) {
                var F = d.data,
                  M = C > F.length ? F.length : C;
                if (
                  (M === F.length ? (I += F) : (I += F.slice(0, C)),
                  (C -= M),
                  C === 0)
                ) {
                  M === F.length
                    ? (++E,
                      d.next
                        ? (this.head = d.next)
                        : (this.head = this.tail = null))
                    : ((this.head = d), (d.data = F.slice(M)));
                  break;
                }
                ++E;
              }
              return (this.length -= E), I;
            },
          },
          {
            key: "_getBuffer",
            value: function (C) {
              var d = v.allocUnsafe(C),
                E = this.head,
                I = 1;
              for (E.data.copy(d), C -= E.data.length; (E = E.next); ) {
                var F = E.data,
                  M = C > F.length ? F.length : C;
                if ((F.copy(d, d.length - C, 0, M), (C -= M), C === 0)) {
                  M === F.length
                    ? (++I,
                      E.next
                        ? (this.head = E.next)
                        : (this.head = this.tail = null))
                    : ((this.head = E), (E.data = F.slice(M)));
                  break;
                }
                ++I;
              }
              return (this.length -= I), d;
            },
          },
          {
            key: T,
            value: function (C, d) {
              return b(this, t(t({}, d), {}, { depth: 0, customInspect: !1 }));
            },
          },
        ]),
        k
      );
    })()),
    tr
  );
}
function li(e, t) {
  var i = this,
    a = this._readableState && this._readableState.destroyed,
    s = this._writableState && this._writableState.destroyed;
  return a || s
    ? (t
        ? t(e)
        : e &&
          (this._writableState
            ? this._writableState.errorEmitted ||
              ((this._writableState.errorEmitted = !0),
              process.nextTick(cr, this, e))
            : process.nextTick(cr, this, e)),
      this)
    : (this._readableState && (this._readableState.destroyed = !0),
      this._writableState && (this._writableState.destroyed = !0),
      this._destroy(e || null, function (c) {
        !t && c
          ? i._writableState
            ? i._writableState.errorEmitted
              ? process.nextTick(nt, i)
              : ((i._writableState.errorEmitted = !0),
                process.nextTick(Fr, i, c))
            : process.nextTick(Fr, i, c)
          : t
          ? (process.nextTick(nt, i), t(c))
          : process.nextTick(nt, i);
      }),
      this);
}
function Fr(e, t) {
  cr(e, t), nt(e);
}
function nt(e) {
  (e._writableState && !e._writableState.emitClose) ||
    (e._readableState && !e._readableState.emitClose) ||
    e.emit("close");
}
function hi() {
  this._readableState &&
    ((this._readableState.destroyed = !1),
    (this._readableState.reading = !1),
    (this._readableState.ended = !1),
    (this._readableState.endEmitted = !1)),
    this._writableState &&
      ((this._writableState.destroyed = !1),
      (this._writableState.ended = !1),
      (this._writableState.ending = !1),
      (this._writableState.finalCalled = !1),
      (this._writableState.prefinished = !1),
      (this._writableState.finished = !1),
      (this._writableState.errorEmitted = !1));
}
function cr(e, t) {
  e.emit("error", t);
}
function ci(e, t) {
  var i = e._readableState,
    a = e._writableState;
  (i && i.autoDestroy) || (a && a.autoDestroy)
    ? e.destroy(t)
    : e.emit("error", t);
}
var dn = { destroy: li, undestroy: hi, errorOrDestroy: ci },
  Ue = {};
function _i(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var pn = {};
function de(e, t, i) {
  i || (i = Error);
  function a(c, _, f) {
    return typeof t == "string" ? t : t(c, _, f);
  }
  var s = (function (c) {
    _i(_, c);
    function _(f, y, v) {
      return c.call(this, a(f, y, v)) || this;
    }
    return _;
  })(i);
  (s.prototype.name = i.name), (s.prototype.code = e), (pn[e] = s);
}
function kr(e, t) {
  if (Array.isArray(e)) {
    var i = e.length;
    return (
      (e = e.map(function (a) {
        return String(a);
      })),
      i > 2
        ? "one of "
            .concat(t, " ")
            .concat(e.slice(0, i - 1).join(", "), ", or ") + e[i - 1]
        : i === 2
        ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
        : "of ".concat(t, " ").concat(e[0])
    );
  } else return "of ".concat(t, " ").concat(String(e));
}
function di(e, t, i) {
  return e.substr(0, t.length) === t;
}
function pi(e, t, i) {
  return (
    (i === void 0 || i > e.length) && (i = e.length),
    e.substring(i - t.length, i) === t
  );
}
function yi(e, t, i) {
  return (
    typeof i != "number" && (i = 0),
    i + t.length > e.length ? !1 : e.indexOf(t, i) !== -1
  );
}
de(
  "ERR_INVALID_OPT_VALUE",
  function (e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
  },
  TypeError
);
de(
  "ERR_INVALID_ARG_TYPE",
  function (e, t, i) {
    var a;
    typeof t == "string" && di(t, "not ")
      ? ((a = "must not be"), (t = t.replace(/^not /, "")))
      : (a = "must be");
    var s;
    if (pi(e, " argument"))
      s = "The ".concat(e, " ").concat(a, " ").concat(kr(t, "type"));
    else {
      var c = yi(e, ".") ? "property" : "argument";
      s = 'The "'
        .concat(e, '" ')
        .concat(c, " ")
        .concat(a, " ")
        .concat(kr(t, "type"));
    }
    return (s += ". Received type ".concat(typeof i)), s;
  },
  TypeError
);
de("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
de("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
  return "The " + e + " method is not implemented";
});
de("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
de("ERR_STREAM_DESTROYED", function (e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
de("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
de("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
de("ERR_STREAM_WRITE_AFTER_END", "write after end");
de("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
de(
  "ERR_UNKNOWN_ENCODING",
  function (e) {
    return "Unknown encoding: " + e;
  },
  TypeError
);
de("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Ue.codes = pn;
var bi = Ue.codes.ERR_INVALID_OPT_VALUE;
function gi(e, t, i) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[i] : null;
}
function wi(e, t, i, a) {
  var s = gi(t, a, i);
  if (s != null) {
    if (!(isFinite(s) && Math.floor(s) === s) || s < 0) {
      var c = a ? i : "highWaterMark";
      throw new bi(c, s);
    }
    return Math.floor(s);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var yn = { getHighWaterMark: wi },
  _r = { exports: {} };
typeof Object.create == "function"
  ? (_r.exports = function (t, i) {
      i &&
        ((t.super_ = i),
        (t.prototype = Object.create(i.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (_r.exports = function (t, i) {
      if (i) {
        t.super_ = i;
        var a = function () {};
        (a.prototype = i.prototype),
          (t.prototype = new a()),
          (t.prototype.constructor = t);
      }
    });
var xe = _r.exports,
  xi = vi;
function vi(e, t) {
  if (rr("noDeprecation")) return e;
  var i = !1;
  function a() {
    if (!i) {
      if (rr("throwDeprecation")) throw new Error(t);
      rr("traceDeprecation") ? console.trace(t) : console.warn(t), (i = !0);
    }
    return e.apply(this, arguments);
  }
  return a;
}
function rr(e) {
  try {
    if (!Oe.localStorage) return !1;
  } catch {
    return !1;
  }
  var t = Oe.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var nr, Mr;
function bn() {
  if (Mr) return nr;
  (Mr = 1), (nr = O);
  function e(w) {
    var g = this;
    (this.next = null),
      (this.entry = null),
      (this.finish = function () {
        ce(g, w);
      });
  }
  var t;
  O.WritableState = L;
  var i = { deprecate: xi },
    a = cn,
    s = qe.Buffer,
    c =
      (typeof Oe < "u"
        ? Oe
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function _(w) {
    return s.from(w);
  }
  function f(w) {
    return s.isBuffer(w) || w instanceof c;
  }
  var y = dn,
    v = yn,
    B = v.getHighWaterMark,
    b = Ue.codes,
    T = b.ERR_INVALID_ARG_TYPE,
    m = b.ERR_METHOD_NOT_IMPLEMENTED,
    k = b.ERR_MULTIPLE_CALLBACK,
    U = b.ERR_STREAM_CANNOT_PIPE,
    C = b.ERR_STREAM_DESTROYED,
    d = b.ERR_STREAM_NULL_VALUES,
    E = b.ERR_STREAM_WRITE_AFTER_END,
    I = b.ERR_UNKNOWN_ENCODING,
    F = y.errorOrDestroy;
  xe(O, a);
  function M() {}
  function L(w, g, A) {
    (t = t || $e()),
      (w = w || {}),
      typeof A != "boolean" && (A = g instanceof t),
      (this.objectMode = !!w.objectMode),
      A && (this.objectMode = this.objectMode || !!w.writableObjectMode),
      (this.highWaterMark = B(this, w, "writableHighWaterMark", A)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1);
    var D = w.decodeStrings === !1;
    (this.decodeStrings = !D),
      (this.defaultEncoding = w.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function ($) {
        ve(g, $);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.emitClose = w.emitClose !== !1),
      (this.autoDestroy = !!w.autoDestroy),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new e(this));
  }
  (L.prototype.getBuffer = function () {
    for (var g = this.bufferedRequest, A = []; g; ) A.push(g), (g = g.next);
    return A;
  }),
    (function () {
      try {
        Object.defineProperty(L.prototype, "buffer", {
          get: i.deprecate(
            function () {
              return this.getBuffer();
            },
            "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
            "DEP0003"
          ),
        });
      } catch {}
    })();
  var W;
  typeof Symbol == "function" &&
  Symbol.hasInstance &&
  typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((W = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(O, Symbol.hasInstance, {
        value: function (g) {
          return W.call(this, g)
            ? !0
            : this !== O
            ? !1
            : g && g._writableState instanceof L;
        },
      }))
    : (W = function (g) {
        return g instanceof this;
      });
  function O(w) {
    t = t || $e();
    var g = this instanceof t;
    if (!g && !W.call(O, this)) return new O(w);
    (this._writableState = new L(w, this, g)),
      (this.writable = !0),
      w &&
        (typeof w.write == "function" && (this._write = w.write),
        typeof w.writev == "function" && (this._writev = w.writev),
        typeof w.destroy == "function" && (this._destroy = w.destroy),
        typeof w.final == "function" && (this._final = w.final)),
      a.call(this);
  }
  O.prototype.pipe = function () {
    F(this, new U());
  };
  function P(w, g) {
    var A = new E();
    F(w, A), process.nextTick(g, A);
  }
  function V(w, g, A, D) {
    var $;
    return (
      A === null
        ? ($ = new d())
        : typeof A != "string" &&
          !g.objectMode &&
          ($ = new T("chunk", ["string", "Buffer"], A)),
      $ ? (F(w, $), process.nextTick(D, $), !1) : !0
    );
  }
  (O.prototype.write = function (w, g, A) {
    var D = this._writableState,
      $ = !1,
      l = !D.objectMode && f(w);
    return (
      l && !s.isBuffer(w) && (w = _(w)),
      typeof g == "function" && ((A = g), (g = null)),
      l ? (g = "buffer") : g || (g = D.defaultEncoding),
      typeof A != "function" && (A = M),
      D.ending
        ? P(this, A)
        : (l || V(this, D, w, A)) &&
          (D.pendingcb++, ($ = pe(this, D, l, w, g, A))),
      $
    );
  }),
    (O.prototype.cork = function () {
      this._writableState.corked++;
    }),
    (O.prototype.uncork = function () {
      var w = this._writableState;
      w.corked &&
        (w.corked--,
        !w.writing &&
          !w.corked &&
          !w.bufferProcessing &&
          w.bufferedRequest &&
          he(this, w));
    }),
    (O.prototype.setDefaultEncoding = function (g) {
      if (
        (typeof g == "string" && (g = g.toLowerCase()),
        !(
          [
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw",
          ].indexOf((g + "").toLowerCase()) > -1
        ))
      )
        throw new I(g);
      return (this._writableState.defaultEncoding = g), this;
    }),
    Object.defineProperty(O.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    });
  function ie(w, g, A) {
    return (
      !w.objectMode &&
        w.decodeStrings !== !1 &&
        typeof g == "string" &&
        (g = s.from(g, A)),
      g
    );
  }
  Object.defineProperty(O.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function pe(w, g, A, D, $, l) {
    if (!A) {
      var h = ie(g, D, $);
      D !== h && ((A = !0), ($ = "buffer"), (D = h));
    }
    var R = g.objectMode ? 1 : D.length;
    g.length += R;
    var N = g.length < g.highWaterMark;
    if ((N || (g.needDrain = !0), g.writing || g.corked)) {
      var K = g.lastBufferedRequest;
      (g.lastBufferedRequest = {
        chunk: D,
        encoding: $,
        isBuf: A,
        callback: l,
        next: null,
      }),
        K
          ? (K.next = g.lastBufferedRequest)
          : (g.bufferedRequest = g.lastBufferedRequest),
        (g.bufferedRequestCount += 1);
    } else te(w, g, !1, R, D, $, l);
    return N;
  }
  function te(w, g, A, D, $, l, h) {
    (g.writelen = D),
      (g.writecb = h),
      (g.writing = !0),
      (g.sync = !0),
      g.destroyed
        ? g.onwrite(new C("write"))
        : A
        ? w._writev($, g.onwrite)
        : w._write($, l, g.onwrite),
      (g.sync = !1);
  }
  function oe(w, g, A, D, $) {
    --g.pendingcb,
      A
        ? (process.nextTick($, D),
          process.nextTick(fe, w, g),
          (w._writableState.errorEmitted = !0),
          F(w, D))
        : ($(D), (w._writableState.errorEmitted = !0), F(w, D), fe(w, g));
  }
  function ae(w) {
    (w.writing = !1),
      (w.writecb = null),
      (w.length -= w.writelen),
      (w.writelen = 0);
  }
  function ve(w, g) {
    var A = w._writableState,
      D = A.sync,
      $ = A.writecb;
    if (typeof $ != "function") throw new k();
    if ((ae(A), g)) oe(w, A, D, g, $);
    else {
      var l = be(A) || w.destroyed;
      !l && !A.corked && !A.bufferProcessing && A.bufferedRequest && he(w, A),
        D ? process.nextTick(le, w, A, l, $) : le(w, A, l, $);
    }
  }
  function le(w, g, A, D) {
    A || ye(w, g), g.pendingcb--, D(), fe(w, g);
  }
  function ye(w, g) {
    g.length === 0 && g.needDrain && ((g.needDrain = !1), w.emit("drain"));
  }
  function he(w, g) {
    g.bufferProcessing = !0;
    var A = g.bufferedRequest;
    if (w._writev && A && A.next) {
      var D = g.bufferedRequestCount,
        $ = new Array(D),
        l = g.corkedRequestsFree;
      l.entry = A;
      for (var h = 0, R = !0; A; )
        ($[h] = A), A.isBuf || (R = !1), (A = A.next), (h += 1);
      ($.allBuffers = R),
        te(w, g, !0, g.length, $, "", l.finish),
        g.pendingcb++,
        (g.lastBufferedRequest = null),
        l.next
          ? ((g.corkedRequestsFree = l.next), (l.next = null))
          : (g.corkedRequestsFree = new e(g)),
        (g.bufferedRequestCount = 0);
    } else {
      for (; A; ) {
        var N = A.chunk,
          K = A.encoding,
          H = A.callback,
          j = g.objectMode ? 1 : N.length;
        if (
          (te(w, g, !1, j, N, K, H),
          (A = A.next),
          g.bufferedRequestCount--,
          g.writing)
        )
          break;
      }
      A === null && (g.lastBufferedRequest = null);
    }
    (g.bufferedRequest = A), (g.bufferProcessing = !1);
  }
  (O.prototype._write = function (w, g, A) {
    A(new m("_write()"));
  }),
    (O.prototype._writev = null),
    (O.prototype.end = function (w, g, A) {
      var D = this._writableState;
      return (
        typeof w == "function"
          ? ((A = w), (w = null), (g = null))
          : typeof g == "function" && ((A = g), (g = null)),
        w != null && this.write(w, g),
        D.corked && ((D.corked = 1), this.uncork()),
        D.ending || ge(this, D, A),
        this
      );
    }),
    Object.defineProperty(O.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function be(w) {
    return (
      w.ending &&
      w.length === 0 &&
      w.bufferedRequest === null &&
      !w.finished &&
      !w.writing
    );
  }
  function Y(w, g) {
    w._final(function (A) {
      g.pendingcb--,
        A && F(w, A),
        (g.prefinished = !0),
        w.emit("prefinish"),
        fe(w, g);
    });
  }
  function Q(w, g) {
    !g.prefinished &&
      !g.finalCalled &&
      (typeof w._final == "function" && !g.destroyed
        ? (g.pendingcb++, (g.finalCalled = !0), process.nextTick(Y, w, g))
        : ((g.prefinished = !0), w.emit("prefinish")));
  }
  function fe(w, g) {
    var A = be(g);
    if (
      A &&
      (Q(w, g),
      g.pendingcb === 0 && ((g.finished = !0), w.emit("finish"), g.autoDestroy))
    ) {
      var D = w._readableState;
      (!D || (D.autoDestroy && D.endEmitted)) && w.destroy();
    }
    return A;
  }
  function ge(w, g, A) {
    (g.ending = !0),
      fe(w, g),
      A && (g.finished ? process.nextTick(A) : w.once("finish", A)),
      (g.ended = !0),
      (w.writable = !1);
  }
  function ce(w, g, A) {
    var D = w.entry;
    for (w.entry = null; D; ) {
      var $ = D.callback;
      g.pendingcb--, $(A), (D = D.next);
    }
    g.corkedRequestsFree.next = w;
  }
  return (
    Object.defineProperty(O.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._writableState === void 0
          ? !1
          : this._writableState.destroyed;
      },
      set: function (g) {
        this._writableState && (this._writableState.destroyed = g);
      },
    }),
    (O.prototype.destroy = y.destroy),
    (O.prototype._undestroy = y.undestroy),
    (O.prototype._destroy = function (w, g) {
      g(w);
    }),
    nr
  );
}
var ir, Ur;
function $e() {
  if (Ur) return ir;
  Ur = 1;
  var e =
    Object.keys ||
    function (v) {
      var B = [];
      for (var b in v) B.push(b);
      return B;
    };
  ir = _;
  var t = wn(),
    i = bn();
  xe(_, t);
  for (var a = e(i.prototype), s = 0; s < a.length; s++) {
    var c = a[s];
    _.prototype[c] || (_.prototype[c] = i.prototype[c]);
  }
  function _(v) {
    if (!(this instanceof _)) return new _(v);
    t.call(this, v),
      i.call(this, v),
      (this.allowHalfOpen = !0),
      v &&
        (v.readable === !1 && (this.readable = !1),
        v.writable === !1 && (this.writable = !1),
        v.allowHalfOpen === !1 &&
          ((this.allowHalfOpen = !1), this.once("end", f)));
  }
  Object.defineProperty(_.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  }),
    Object.defineProperty(_.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    }),
    Object.defineProperty(_.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function f() {
    this._writableState.ended || process.nextTick(y, this);
  }
  function y(v) {
    v.end();
  }
  return (
    Object.defineProperty(_.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._readableState === void 0 || this._writableState === void 0
          ? !1
          : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (B) {
        this._readableState === void 0 ||
          this._writableState === void 0 ||
          ((this._readableState.destroyed = B),
          (this._writableState.destroyed = B));
      },
    }),
    ir
  );
}
var or = {},
  tt = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var Nr;
function Ei() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e, t) {
        var i = qe,
          a = i.Buffer;
        function s(_, f) {
          for (var y in _) f[y] = _[y];
        }
        a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow
          ? (e.exports = i)
          : (s(i, t), (t.Buffer = c));
        function c(_, f, y) {
          return a(_, f, y);
        }
        (c.prototype = Object.create(a.prototype)),
          s(a, c),
          (c.from = function (_, f, y) {
            if (typeof _ == "number")
              throw new TypeError("Argument must not be a number");
            return a(_, f, y);
          }),
          (c.alloc = function (_, f, y) {
            if (typeof _ != "number")
              throw new TypeError("Argument must be a number");
            var v = a(_);
            return (
              f !== void 0
                ? typeof y == "string"
                  ? v.fill(f, y)
                  : v.fill(f)
                : v.fill(0),
              v
            );
          }),
          (c.allocUnsafe = function (_) {
            if (typeof _ != "number")
              throw new TypeError("Argument must be a number");
            return a(_);
          }),
          (c.allocUnsafeSlow = function (_) {
            if (typeof _ != "number")
              throw new TypeError("Argument must be a number");
            return i.SlowBuffer(_);
          });
      })(tt, tt.exports)),
    tt.exports
  );
}
var Dr;
function Lr() {
  if (Dr) return or;
  Dr = 1;
  var e = Ei().Buffer,
    t =
      e.isEncoding ||
      function (d) {
        switch (((d = "" + d), d && d.toLowerCase())) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;
          default:
            return !1;
        }
      };
  function i(d) {
    if (!d) return "utf8";
    for (var E; ; )
      switch (d) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return d;
        default:
          if (E) return;
          (d = ("" + d).toLowerCase()), (E = !0);
      }
  }
  function a(d) {
    var E = i(d);
    if (typeof E != "string" && (e.isEncoding === t || !t(d)))
      throw new Error("Unknown encoding: " + d);
    return E || d;
  }
  or.StringDecoder = s;
  function s(d) {
    this.encoding = a(d);
    var E;
    switch (this.encoding) {
      case "utf16le":
        (this.text = b), (this.end = T), (E = 4);
        break;
      case "utf8":
        (this.fillLast = y), (E = 4);
        break;
      case "base64":
        (this.text = m), (this.end = k), (E = 3);
        break;
      default:
        (this.write = U), (this.end = C);
        return;
    }
    (this.lastNeed = 0),
      (this.lastTotal = 0),
      (this.lastChar = e.allocUnsafe(E));
  }
  (s.prototype.write = function (d) {
    if (d.length === 0) return "";
    var E, I;
    if (this.lastNeed) {
      if (((E = this.fillLast(d)), E === void 0)) return "";
      (I = this.lastNeed), (this.lastNeed = 0);
    } else I = 0;
    return I < d.length ? (E ? E + this.text(d, I) : this.text(d, I)) : E || "";
  }),
    (s.prototype.end = B),
    (s.prototype.text = v),
    (s.prototype.fillLast = function (d) {
      if (this.lastNeed <= d.length)
        return (
          d.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            this.lastNeed
          ),
          this.lastChar.toString(this.encoding, 0, this.lastTotal)
        );
      d.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, d.length),
        (this.lastNeed -= d.length);
    });
  function c(d) {
    return d <= 127
      ? 0
      : d >> 5 === 6
      ? 2
      : d >> 4 === 14
      ? 3
      : d >> 3 === 30
      ? 4
      : d >> 6 === 2
      ? -1
      : -2;
  }
  function _(d, E, I) {
    var F = E.length - 1;
    if (F < I) return 0;
    var M = c(E[F]);
    return M >= 0
      ? (M > 0 && (d.lastNeed = M - 1), M)
      : --F < I || M === -2
      ? 0
      : ((M = c(E[F])),
        M >= 0
          ? (M > 0 && (d.lastNeed = M - 2), M)
          : --F < I || M === -2
          ? 0
          : ((M = c(E[F])),
            M >= 0
              ? (M > 0 && (M === 2 ? (M = 0) : (d.lastNeed = M - 3)), M)
              : 0));
  }
  function f(d, E, I) {
    if ((E[0] & 192) !== 128) return (d.lastNeed = 0), "�";
    if (d.lastNeed > 1 && E.length > 1) {
      if ((E[1] & 192) !== 128) return (d.lastNeed = 1), "�";
      if (d.lastNeed > 2 && E.length > 2 && (E[2] & 192) !== 128)
        return (d.lastNeed = 2), "�";
    }
  }
  function y(d) {
    var E = this.lastTotal - this.lastNeed,
      I = f(this, d);
    if (I !== void 0) return I;
    if (this.lastNeed <= d.length)
      return (
        d.copy(this.lastChar, E, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    d.copy(this.lastChar, E, 0, d.length), (this.lastNeed -= d.length);
  }
  function v(d, E) {
    var I = _(this, d, E);
    if (!this.lastNeed) return d.toString("utf8", E);
    this.lastTotal = I;
    var F = d.length - (I - this.lastNeed);
    return d.copy(this.lastChar, 0, F), d.toString("utf8", E, F);
  }
  function B(d) {
    var E = d && d.length ? this.write(d) : "";
    return this.lastNeed ? E + "�" : E;
  }
  function b(d, E) {
    if ((d.length - E) % 2 === 0) {
      var I = d.toString("utf16le", E);
      if (I) {
        var F = I.charCodeAt(I.length - 1);
        if (F >= 55296 && F <= 56319)
          return (
            (this.lastNeed = 2),
            (this.lastTotal = 4),
            (this.lastChar[0] = d[d.length - 2]),
            (this.lastChar[1] = d[d.length - 1]),
            I.slice(0, -1)
          );
      }
      return I;
    }
    return (
      (this.lastNeed = 1),
      (this.lastTotal = 2),
      (this.lastChar[0] = d[d.length - 1]),
      d.toString("utf16le", E, d.length - 1)
    );
  }
  function T(d) {
    var E = d && d.length ? this.write(d) : "";
    if (this.lastNeed) {
      var I = this.lastTotal - this.lastNeed;
      return E + this.lastChar.toString("utf16le", 0, I);
    }
    return E;
  }
  function m(d, E) {
    var I = (d.length - E) % 3;
    return I === 0
      ? d.toString("base64", E)
      : ((this.lastNeed = 3 - I),
        (this.lastTotal = 3),
        I === 1
          ? (this.lastChar[0] = d[d.length - 1])
          : ((this.lastChar[0] = d[d.length - 2]),
            (this.lastChar[1] = d[d.length - 1])),
        d.toString("base64", E, d.length - I));
  }
  function k(d) {
    var E = d && d.length ? this.write(d) : "";
    return this.lastNeed
      ? E + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
      : E;
  }
  function U(d) {
    return d.toString(this.encoding);
  }
  function C(d) {
    return d && d.length ? this.write(d) : "";
  }
  return or;
}
var Pr = Ue.codes.ERR_STREAM_PREMATURE_CLOSE;
function mi(e) {
  var t = !1;
  return function () {
    if (!t) {
      t = !0;
      for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
        a[s] = arguments[s];
      e.apply(this, a);
    }
  };
}
function Si() {}
function Bi(e) {
  return e.setHeader && typeof e.abort == "function";
}
function gn(e, t, i) {
  if (typeof t == "function") return gn(e, null, t);
  t || (t = {}), (i = mi(i || Si));
  var a = t.readable || (t.readable !== !1 && e.readable),
    s = t.writable || (t.writable !== !1 && e.writable),
    c = function () {
      e.writable || f();
    },
    _ = e._writableState && e._writableState.finished,
    f = function () {
      (s = !1), (_ = !0), a || i.call(e);
    },
    y = e._readableState && e._readableState.endEmitted,
    v = function () {
      (a = !1), (y = !0), s || i.call(e);
    },
    B = function (k) {
      i.call(e, k);
    },
    b = function () {
      var k;
      if (a && !y)
        return (
          (!e._readableState || !e._readableState.ended) && (k = new Pr()),
          i.call(e, k)
        );
      if (s && !_)
        return (
          (!e._writableState || !e._writableState.ended) && (k = new Pr()),
          i.call(e, k)
        );
    },
    T = function () {
      e.req.on("finish", f);
    };
  return (
    Bi(e)
      ? (e.on("complete", f),
        e.on("abort", b),
        e.req ? T() : e.on("request", T))
      : s && !e._writableState && (e.on("end", c), e.on("close", c)),
    e.on("end", v),
    e.on("finish", f),
    t.error !== !1 && e.on("error", B),
    e.on("close", b),
    function () {
      e.removeListener("complete", f),
        e.removeListener("abort", b),
        e.removeListener("request", T),
        e.req && e.req.removeListener("finish", f),
        e.removeListener("end", c),
        e.removeListener("close", c),
        e.removeListener("finish", f),
        e.removeListener("end", v),
        e.removeListener("error", B),
        e.removeListener("close", b);
    }
  );
}
var mr = gn,
  ar,
  Or;
function Ri() {
  if (Or) return ar;
  Or = 1;
  var e;
  function t(I, F, M) {
    return (
      (F = i(F)),
      F in I
        ? Object.defineProperty(I, F, {
            value: M,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (I[F] = M),
      I
    );
  }
  function i(I) {
    var F = a(I, "string");
    return typeof F == "symbol" ? F : String(F);
  }
  function a(I, F) {
    if (typeof I != "object" || I === null) return I;
    var M = I[Symbol.toPrimitive];
    if (M !== void 0) {
      var L = M.call(I, F || "default");
      if (typeof L != "object") return L;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (F === "string" ? String : Number)(I);
  }
  var s = mr,
    c = Symbol("lastResolve"),
    _ = Symbol("lastReject"),
    f = Symbol("error"),
    y = Symbol("ended"),
    v = Symbol("lastPromise"),
    B = Symbol("handlePromise"),
    b = Symbol("stream");
  function T(I, F) {
    return { value: I, done: F };
  }
  function m(I) {
    var F = I[c];
    if (F !== null) {
      var M = I[b].read();
      M !== null && ((I[v] = null), (I[c] = null), (I[_] = null), F(T(M, !1)));
    }
  }
  function k(I) {
    process.nextTick(m, I);
  }
  function U(I, F) {
    return function (M, L) {
      I.then(function () {
        if (F[y]) {
          M(T(void 0, !0));
          return;
        }
        F[B](M, L);
      }, L);
    };
  }
  var C = Object.getPrototypeOf(function () {}),
    d = Object.setPrototypeOf(
      ((e = {
        get stream() {
          return this[b];
        },
        next: function () {
          var F = this,
            M = this[f];
          if (M !== null) return Promise.reject(M);
          if (this[y]) return Promise.resolve(T(void 0, !0));
          if (this[b].destroyed)
            return new Promise(function (P, V) {
              process.nextTick(function () {
                F[f] ? V(F[f]) : P(T(void 0, !0));
              });
            });
          var L = this[v],
            W;
          if (L) W = new Promise(U(L, this));
          else {
            var O = this[b].read();
            if (O !== null) return Promise.resolve(T(O, !1));
            W = new Promise(this[B]);
          }
          return (this[v] = W), W;
        },
      }),
      t(e, Symbol.asyncIterator, function () {
        return this;
      }),
      t(e, "return", function () {
        var F = this;
        return new Promise(function (M, L) {
          F[b].destroy(null, function (W) {
            if (W) {
              L(W);
              return;
            }
            M(T(void 0, !0));
          });
        });
      }),
      e),
      C
    ),
    E = function (F) {
      var M,
        L = Object.create(
          d,
          ((M = {}),
          t(M, b, { value: F, writable: !0 }),
          t(M, c, { value: null, writable: !0 }),
          t(M, _, { value: null, writable: !0 }),
          t(M, f, { value: null, writable: !0 }),
          t(M, y, { value: F._readableState.endEmitted, writable: !0 }),
          t(M, B, {
            value: function (O, P) {
              var V = L[b].read();
              V
                ? ((L[v] = null), (L[c] = null), (L[_] = null), O(T(V, !1)))
                : ((L[c] = O), (L[_] = P));
            },
            writable: !0,
          }),
          M)
        );
      return (
        (L[v] = null),
        s(F, function (W) {
          if (W && W.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var O = L[_];
            O !== null && ((L[v] = null), (L[c] = null), (L[_] = null), O(W)),
              (L[f] = W);
            return;
          }
          var P = L[c];
          P !== null &&
            ((L[v] = null), (L[c] = null), (L[_] = null), P(T(void 0, !0))),
            (L[y] = !0);
        }),
        F.on("readable", k.bind(null, L)),
        L
      );
    };
  return (ar = E), ar;
}
var fr, $r;
function Ai() {
  return (
    $r ||
      (($r = 1),
      (fr = function () {
        throw new Error("Readable.from is not available in the browser");
      })),
    fr
  );
}
var sr, Hr;
function wn() {
  if (Hr) return sr;
  (Hr = 1), (sr = P);
  var e;
  (P.ReadableState = O), ln.EventEmitter;
  var t = function (h, R) {
      return h.listeners(R).length;
    },
    i = cn,
    a = qe.Buffer,
    s =
      (typeof Oe < "u"
        ? Oe
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function c(l) {
    return a.from(l);
  }
  function _(l) {
    return a.isBuffer(l) || l instanceof s;
  }
  var f = hn,
    y;
  f && f.debuglog ? (y = f.debuglog("stream")) : (y = function () {});
  var v = ui(),
    B = dn,
    b = yn,
    T = b.getHighWaterMark,
    m = Ue.codes,
    k = m.ERR_INVALID_ARG_TYPE,
    U = m.ERR_STREAM_PUSH_AFTER_EOF,
    C = m.ERR_METHOD_NOT_IMPLEMENTED,
    d = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
    E,
    I,
    F;
  xe(P, i);
  var M = B.errorOrDestroy,
    L = ["error", "close", "destroy", "pause", "resume"];
  function W(l, h, R) {
    if (typeof l.prependListener == "function") return l.prependListener(h, R);
    !l._events || !l._events[h]
      ? l.on(h, R)
      : Array.isArray(l._events[h])
      ? l._events[h].unshift(R)
      : (l._events[h] = [R, l._events[h]]);
  }
  function O(l, h, R) {
    (e = e || $e()),
      (l = l || {}),
      typeof R != "boolean" && (R = h instanceof e),
      (this.objectMode = !!l.objectMode),
      R && (this.objectMode = this.objectMode || !!l.readableObjectMode),
      (this.highWaterMark = T(this, l, "readableHighWaterMark", R)),
      (this.buffer = new v()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.paused = !0),
      (this.emitClose = l.emitClose !== !1),
      (this.autoDestroy = !!l.autoDestroy),
      (this.destroyed = !1),
      (this.defaultEncoding = l.defaultEncoding || "utf8"),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      l.encoding &&
        (E || (E = Lr().StringDecoder),
        (this.decoder = new E(l.encoding)),
        (this.encoding = l.encoding));
  }
  function P(l) {
    if (((e = e || $e()), !(this instanceof P))) return new P(l);
    var h = this instanceof e;
    (this._readableState = new O(l, this, h)),
      (this.readable = !0),
      l &&
        (typeof l.read == "function" && (this._read = l.read),
        typeof l.destroy == "function" && (this._destroy = l.destroy)),
      i.call(this);
  }
  Object.defineProperty(P.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._readableState === void 0
        ? !1
        : this._readableState.destroyed;
    },
    set: function (h) {
      this._readableState && (this._readableState.destroyed = h);
    },
  }),
    (P.prototype.destroy = B.destroy),
    (P.prototype._undestroy = B.undestroy),
    (P.prototype._destroy = function (l, h) {
      h(l);
    }),
    (P.prototype.push = function (l, h) {
      var R = this._readableState,
        N;
      return (
        R.objectMode
          ? (N = !0)
          : typeof l == "string" &&
            ((h = h || R.defaultEncoding),
            h !== R.encoding && ((l = a.from(l, h)), (h = "")),
            (N = !0)),
        V(this, l, h, !1, N)
      );
    }),
    (P.prototype.unshift = function (l) {
      return V(this, l, null, !0, !1);
    });
  function V(l, h, R, N, K) {
    y("readableAddChunk", h);
    var H = l._readableState;
    if (h === null) (H.reading = !1), ve(l, H);
    else {
      var j;
      if ((K || (j = pe(H, h)), j)) M(l, j);
      else if (H.objectMode || (h && h.length > 0))
        if (
          (typeof h != "string" &&
            !H.objectMode &&
            Object.getPrototypeOf(h) !== a.prototype &&
            (h = c(h)),
          N)
        )
          H.endEmitted ? M(l, new d()) : ie(l, H, h, !0);
        else if (H.ended) M(l, new U());
        else {
          if (H.destroyed) return !1;
          (H.reading = !1),
            H.decoder && !R
              ? ((h = H.decoder.write(h)),
                H.objectMode || h.length !== 0 ? ie(l, H, h, !1) : he(l, H))
              : ie(l, H, h, !1);
        }
      else N || ((H.reading = !1), he(l, H));
    }
    return !H.ended && (H.length < H.highWaterMark || H.length === 0);
  }
  function ie(l, h, R, N) {
    h.flowing && h.length === 0 && !h.sync
      ? ((h.awaitDrain = 0), l.emit("data", R))
      : ((h.length += h.objectMode ? 1 : R.length),
        N ? h.buffer.unshift(R) : h.buffer.push(R),
        h.needReadable && le(l)),
      he(l, h);
  }
  function pe(l, h) {
    var R;
    return (
      !_(h) &&
        typeof h != "string" &&
        h !== void 0 &&
        !l.objectMode &&
        (R = new k("chunk", ["string", "Buffer", "Uint8Array"], h)),
      R
    );
  }
  (P.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  }),
    (P.prototype.setEncoding = function (l) {
      E || (E = Lr().StringDecoder);
      var h = new E(l);
      (this._readableState.decoder = h),
        (this._readableState.encoding = this._readableState.decoder.encoding);
      for (var R = this._readableState.buffer.head, N = ""; R !== null; )
        (N += h.write(R.data)), (R = R.next);
      return (
        this._readableState.buffer.clear(),
        N !== "" && this._readableState.buffer.push(N),
        (this._readableState.length = N.length),
        this
      );
    });
  var te = 1073741824;
  function oe(l) {
    return (
      l >= te
        ? (l = te)
        : (l--,
          (l |= l >>> 1),
          (l |= l >>> 2),
          (l |= l >>> 4),
          (l |= l >>> 8),
          (l |= l >>> 16),
          l++),
      l
    );
  }
  function ae(l, h) {
    return l <= 0 || (h.length === 0 && h.ended)
      ? 0
      : h.objectMode
      ? 1
      : l !== l
      ? h.flowing && h.length
        ? h.buffer.head.data.length
        : h.length
      : (l > h.highWaterMark && (h.highWaterMark = oe(l)),
        l <= h.length ? l : h.ended ? h.length : ((h.needReadable = !0), 0));
  }
  P.prototype.read = function (l) {
    y("read", l), (l = parseInt(l, 10));
    var h = this._readableState,
      R = l;
    if (
      (l !== 0 && (h.emittedReadable = !1),
      l === 0 &&
        h.needReadable &&
        ((h.highWaterMark !== 0 ? h.length >= h.highWaterMark : h.length > 0) ||
          h.ended))
    )
      return (
        y("read: emitReadable", h.length, h.ended),
        h.length === 0 && h.ended ? A(this) : le(this),
        null
      );
    if (((l = ae(l, h)), l === 0 && h.ended))
      return h.length === 0 && A(this), null;
    var N = h.needReadable;
    y("need readable", N),
      (h.length === 0 || h.length - l < h.highWaterMark) &&
        ((N = !0), y("length less than watermark", N)),
      h.ended || h.reading
        ? ((N = !1), y("reading or ended", N))
        : N &&
          (y("do read"),
          (h.reading = !0),
          (h.sync = !0),
          h.length === 0 && (h.needReadable = !0),
          this._read(h.highWaterMark),
          (h.sync = !1),
          h.reading || (l = ae(R, h)));
    var K;
    return (
      l > 0 ? (K = g(l, h)) : (K = null),
      K === null
        ? ((h.needReadable = h.length <= h.highWaterMark), (l = 0))
        : ((h.length -= l), (h.awaitDrain = 0)),
      h.length === 0 &&
        (h.ended || (h.needReadable = !0), R !== l && h.ended && A(this)),
      K !== null && this.emit("data", K),
      K
    );
  };
  function ve(l, h) {
    if ((y("onEofChunk"), !h.ended)) {
      if (h.decoder) {
        var R = h.decoder.end();
        R &&
          R.length &&
          (h.buffer.push(R), (h.length += h.objectMode ? 1 : R.length));
      }
      (h.ended = !0),
        h.sync
          ? le(l)
          : ((h.needReadable = !1),
            h.emittedReadable || ((h.emittedReadable = !0), ye(l)));
    }
  }
  function le(l) {
    var h = l._readableState;
    y("emitReadable", h.needReadable, h.emittedReadable),
      (h.needReadable = !1),
      h.emittedReadable ||
        (y("emitReadable", h.flowing),
        (h.emittedReadable = !0),
        process.nextTick(ye, l));
  }
  function ye(l) {
    var h = l._readableState;
    y("emitReadable_", h.destroyed, h.length, h.ended),
      !h.destroyed &&
        (h.length || h.ended) &&
        (l.emit("readable"), (h.emittedReadable = !1)),
      (h.needReadable = !h.flowing && !h.ended && h.length <= h.highWaterMark),
      w(l);
  }
  function he(l, h) {
    h.readingMore || ((h.readingMore = !0), process.nextTick(be, l, h));
  }
  function be(l, h) {
    for (
      ;
      !h.reading &&
      !h.ended &&
      (h.length < h.highWaterMark || (h.flowing && h.length === 0));

    ) {
      var R = h.length;
      if ((y("maybeReadMore read 0"), l.read(0), R === h.length)) break;
    }
    h.readingMore = !1;
  }
  (P.prototype._read = function (l) {
    M(this, new C("_read()"));
  }),
    (P.prototype.pipe = function (l, h) {
      var R = this,
        N = this._readableState;
      switch (N.pipesCount) {
        case 0:
          N.pipes = l;
          break;
        case 1:
          N.pipes = [N.pipes, l];
          break;
        default:
          N.pipes.push(l);
          break;
      }
      (N.pipesCount += 1), y("pipe count=%d opts=%j", N.pipesCount, h);
      var K =
          (!h || h.end !== !1) && l !== process.stdout && l !== process.stderr,
        H = K ? we : me;
      N.endEmitted ? process.nextTick(H) : R.once("end", H), l.on("unpipe", j);
      function j(o, r) {
        y("onunpipe"),
          o === R && r && r.hasUnpiped === !1 && ((r.hasUnpiped = !0), Re());
      }
      function we() {
        y("onend"), l.end();
      }
      var Be = Y(R);
      l.on("drain", Be);
      var Ce = !1;
      function Re() {
        y("cleanup"),
          l.removeListener("close", Fe),
          l.removeListener("finish", ue),
          l.removeListener("drain", Be),
          l.removeListener("error", Ee),
          l.removeListener("unpipe", j),
          R.removeListener("end", we),
          R.removeListener("end", me),
          R.removeListener("data", se),
          (Ce = !0),
          N.awaitDrain &&
            (!l._writableState || l._writableState.needDrain) &&
            Be();
      }
      R.on("data", se);
      function se(o) {
        y("ondata");
        var r = l.write(o);
        y("dest.write", r),
          r === !1 &&
            (((N.pipesCount === 1 && N.pipes === l) ||
              (N.pipesCount > 1 && $(N.pipes, l) !== -1)) &&
              !Ce &&
              (y("false write response, pause", N.awaitDrain), N.awaitDrain++),
            R.pause());
      }
      function Ee(o) {
        y("onerror", o),
          me(),
          l.removeListener("error", Ee),
          t(l, "error") === 0 && M(l, o);
      }
      W(l, "error", Ee);
      function Fe() {
        l.removeListener("finish", ue), me();
      }
      l.once("close", Fe);
      function ue() {
        y("onfinish"), l.removeListener("close", Fe), me();
      }
      l.once("finish", ue);
      function me() {
        y("unpipe"), R.unpipe(l);
      }
      return l.emit("pipe", R), N.flowing || (y("pipe resume"), R.resume()), l;
    });
  function Y(l) {
    return function () {
      var R = l._readableState;
      y("pipeOnDrain", R.awaitDrain),
        R.awaitDrain && R.awaitDrain--,
        R.awaitDrain === 0 && t(l, "data") && ((R.flowing = !0), w(l));
    };
  }
  (P.prototype.unpipe = function (l) {
    var h = this._readableState,
      R = { hasUnpiped: !1 };
    if (h.pipesCount === 0) return this;
    if (h.pipesCount === 1)
      return l && l !== h.pipes
        ? this
        : (l || (l = h.pipes),
          (h.pipes = null),
          (h.pipesCount = 0),
          (h.flowing = !1),
          l && l.emit("unpipe", this, R),
          this);
    if (!l) {
      var N = h.pipes,
        K = h.pipesCount;
      (h.pipes = null), (h.pipesCount = 0), (h.flowing = !1);
      for (var H = 0; H < K; H++) N[H].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var j = $(h.pipes, l);
    return j === -1
      ? this
      : (h.pipes.splice(j, 1),
        (h.pipesCount -= 1),
        h.pipesCount === 1 && (h.pipes = h.pipes[0]),
        l.emit("unpipe", this, R),
        this);
  }),
    (P.prototype.on = function (l, h) {
      var R = i.prototype.on.call(this, l, h),
        N = this._readableState;
      return (
        l === "data"
          ? ((N.readableListening = this.listenerCount("readable") > 0),
            N.flowing !== !1 && this.resume())
          : l === "readable" &&
            !N.endEmitted &&
            !N.readableListening &&
            ((N.readableListening = N.needReadable = !0),
            (N.flowing = !1),
            (N.emittedReadable = !1),
            y("on readable", N.length, N.reading),
            N.length ? le(this) : N.reading || process.nextTick(fe, this)),
        R
      );
    }),
    (P.prototype.addListener = P.prototype.on),
    (P.prototype.removeListener = function (l, h) {
      var R = i.prototype.removeListener.call(this, l, h);
      return l === "readable" && process.nextTick(Q, this), R;
    }),
    (P.prototype.removeAllListeners = function (l) {
      var h = i.prototype.removeAllListeners.apply(this, arguments);
      return (l === "readable" || l === void 0) && process.nextTick(Q, this), h;
    });
  function Q(l) {
    var h = l._readableState;
    (h.readableListening = l.listenerCount("readable") > 0),
      h.resumeScheduled && !h.paused
        ? (h.flowing = !0)
        : l.listenerCount("data") > 0 && l.resume();
  }
  function fe(l) {
    y("readable nexttick read 0"), l.read(0);
  }
  P.prototype.resume = function () {
    var l = this._readableState;
    return (
      l.flowing ||
        (y("resume"), (l.flowing = !l.readableListening), ge(this, l)),
      (l.paused = !1),
      this
    );
  };
  function ge(l, h) {
    h.resumeScheduled || ((h.resumeScheduled = !0), process.nextTick(ce, l, h));
  }
  function ce(l, h) {
    y("resume", h.reading),
      h.reading || l.read(0),
      (h.resumeScheduled = !1),
      l.emit("resume"),
      w(l),
      h.flowing && !h.reading && l.read(0);
  }
  P.prototype.pause = function () {
    return (
      y("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 &&
        (y("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      (this._readableState.paused = !0),
      this
    );
  };
  function w(l) {
    var h = l._readableState;
    for (y("flow", h.flowing); h.flowing && l.read() !== null; );
  }
  (P.prototype.wrap = function (l) {
    var h = this,
      R = this._readableState,
      N = !1;
    l.on("end", function () {
      if ((y("wrapped end"), R.decoder && !R.ended)) {
        var j = R.decoder.end();
        j && j.length && h.push(j);
      }
      h.push(null);
    }),
      l.on("data", function (j) {
        if (
          (y("wrapped data"),
          R.decoder && (j = R.decoder.write(j)),
          !(R.objectMode && j == null) && !(!R.objectMode && (!j || !j.length)))
        ) {
          var we = h.push(j);
          we || ((N = !0), l.pause());
        }
      });
    for (var K in l)
      this[K] === void 0 &&
        typeof l[K] == "function" &&
        (this[K] = (function (we) {
          return function () {
            return l[we].apply(l, arguments);
          };
        })(K));
    for (var H = 0; H < L.length; H++) l.on(L[H], this.emit.bind(this, L[H]));
    return (
      (this._read = function (j) {
        y("wrapped _read", j), N && ((N = !1), l.resume());
      }),
      this
    );
  }),
    typeof Symbol == "function" &&
      (P.prototype[Symbol.asyncIterator] = function () {
        return I === void 0 && (I = Ri()), I(this);
      }),
    Object.defineProperty(P.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._readableState.highWaterMark;
      },
    }),
    Object.defineProperty(P.prototype, "readableBuffer", {
      enumerable: !1,
      get: function () {
        return this._readableState && this._readableState.buffer;
      },
    }),
    Object.defineProperty(P.prototype, "readableFlowing", {
      enumerable: !1,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (h) {
        this._readableState && (this._readableState.flowing = h);
      },
    }),
    (P._fromList = g),
    Object.defineProperty(P.prototype, "readableLength", {
      enumerable: !1,
      get: function () {
        return this._readableState.length;
      },
    });
  function g(l, h) {
    if (h.length === 0) return null;
    var R;
    return (
      h.objectMode
        ? (R = h.buffer.shift())
        : !l || l >= h.length
        ? (h.decoder
            ? (R = h.buffer.join(""))
            : h.buffer.length === 1
            ? (R = h.buffer.first())
            : (R = h.buffer.concat(h.length)),
          h.buffer.clear())
        : (R = h.buffer.consume(l, h.decoder)),
      R
    );
  }
  function A(l) {
    var h = l._readableState;
    y("endReadable", h.endEmitted),
      h.endEmitted || ((h.ended = !0), process.nextTick(D, h, l));
  }
  function D(l, h) {
    if (
      (y("endReadableNT", l.endEmitted, l.length),
      !l.endEmitted &&
        l.length === 0 &&
        ((l.endEmitted = !0), (h.readable = !1), h.emit("end"), l.autoDestroy))
    ) {
      var R = h._writableState;
      (!R || (R.autoDestroy && R.finished)) && h.destroy();
    }
  }
  typeof Symbol == "function" &&
    (P.from = function (l, h) {
      return F === void 0 && (F = Ai()), F(P, l, h);
    });
  function $(l, h) {
    for (var R = 0, N = l.length; R < N; R++) if (l[R] === h) return R;
    return -1;
  }
  return sr;
}
var xn = Te,
  ut = Ue.codes,
  Ti = ut.ERR_METHOD_NOT_IMPLEMENTED,
  Ii = ut.ERR_MULTIPLE_CALLBACK,
  Ci = ut.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  Fi = ut.ERR_TRANSFORM_WITH_LENGTH_0,
  lt = $e();
xe(Te, lt);
function ki(e, t) {
  var i = this._transformState;
  i.transforming = !1;
  var a = i.writecb;
  if (a === null) return this.emit("error", new Ii());
  (i.writechunk = null), (i.writecb = null), t != null && this.push(t), a(e);
  var s = this._readableState;
  (s.reading = !1),
    (s.needReadable || s.length < s.highWaterMark) &&
      this._read(s.highWaterMark);
}
function Te(e) {
  if (!(this instanceof Te)) return new Te(e);
  lt.call(this, e),
    (this._transformState = {
      afterTransform: ki.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null,
    }),
    (this._readableState.needReadable = !0),
    (this._readableState.sync = !1),
    e &&
      (typeof e.transform == "function" && (this._transform = e.transform),
      typeof e.flush == "function" && (this._flush = e.flush)),
    this.on("prefinish", Mi);
}
function Mi() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed
    ? this._flush(function (t, i) {
        qr(e, t, i);
      })
    : qr(this, null, null);
}
Te.prototype.push = function (e, t) {
  return (
    (this._transformState.needTransform = !1),
    lt.prototype.push.call(this, e, t)
  );
};
Te.prototype._transform = function (e, t, i) {
  i(new Ti("_transform()"));
};
Te.prototype._write = function (e, t, i) {
  var a = this._transformState;
  if (
    ((a.writecb = i),
    (a.writechunk = e),
    (a.writeencoding = t),
    !a.transforming)
  ) {
    var s = this._readableState;
    (a.needTransform || s.needReadable || s.length < s.highWaterMark) &&
      this._read(s.highWaterMark);
  }
};
Te.prototype._read = function (e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming
    ? ((t.transforming = !0),
      this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    : (t.needTransform = !0);
};
Te.prototype._destroy = function (e, t) {
  lt.prototype._destroy.call(this, e, function (i) {
    t(i);
  });
};
function qr(e, t, i) {
  if (t) return e.emit("error", t);
  if ((i != null && e.push(i), e._writableState.length)) throw new Fi();
  if (e._transformState.transforming) throw new Ci();
  return e.push(null);
}
var Ui = Ve,
  vn = xn;
xe(Ve, vn);
function Ve(e) {
  if (!(this instanceof Ve)) return new Ve(e);
  vn.call(this, e);
}
Ve.prototype._transform = function (e, t, i) {
  i(null, e);
};
var ur;
function Ni(e) {
  var t = !1;
  return function () {
    t || ((t = !0), e.apply(void 0, arguments));
  };
}
var En = Ue.codes,
  Di = En.ERR_MISSING_ARGS,
  Li = En.ERR_STREAM_DESTROYED;
function jr(e) {
  if (e) throw e;
}
function Pi(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Oi(e, t, i, a) {
  a = Ni(a);
  var s = !1;
  e.on("close", function () {
    s = !0;
  }),
    ur === void 0 && (ur = mr),
    ur(e, { readable: t, writable: i }, function (_) {
      if (_) return a(_);
      (s = !0), a();
    });
  var c = !1;
  return function (_) {
    if (!s && !c) {
      if (((c = !0), Pi(e))) return e.abort();
      if (typeof e.destroy == "function") return e.destroy();
      a(_ || new Li("pipe"));
    }
  };
}
function Wr(e) {
  e();
}
function $i(e, t) {
  return e.pipe(t);
}
function Hi(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? jr : e.pop();
}
function qi() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var a = Hi(t);
  if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
    throw new Di("streams");
  var s,
    c = t.map(function (_, f) {
      var y = f < t.length - 1,
        v = f > 0;
      return Oi(_, y, v, function (B) {
        s || (s = B), B && c.forEach(Wr), !y && (c.forEach(Wr), a(s));
      });
    });
  return t.reduce($i);
}
var ji = qi;
(function (e, t) {
  (t = e.exports = wn()),
    (t.Stream = t),
    (t.Readable = t),
    (t.Writable = bn()),
    (t.Duplex = $e()),
    (t.Transform = xn),
    (t.PassThrough = Ui),
    (t.finished = mr),
    (t.pipeline = ji);
})(hr, hr.exports);
var mn = hr.exports;
const { Transform: Wi } = mn;
var zi = (e) =>
  class Sn extends Wi {
    constructor(i, a, s, c, _) {
      super(_),
        (this._rate = i),
        (this._capacity = a),
        (this._delimitedSuffix = s),
        (this._hashBitLength = c),
        (this._options = _),
        (this._state = new e()),
        this._state.initialize(i, a),
        (this._finalized = !1);
    }
    _transform(i, a, s) {
      let c = null;
      try {
        this.update(i, a);
      } catch (_) {
        c = _;
      }
      s(c);
    }
    _flush(i) {
      let a = null;
      try {
        this.push(this.digest());
      } catch (s) {
        a = s;
      }
      i(a);
    }
    update(i, a) {
      if (!Buffer.isBuffer(i) && typeof i != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Digest already called");
      return (
        Buffer.isBuffer(i) || (i = Buffer.from(i, a)),
        this._state.absorb(i),
        this
      );
    }
    digest(i) {
      if (this._finalized) throw new Error("Digest already called");
      (this._finalized = !0),
        this._delimitedSuffix &&
          this._state.absorbLastFewBits(this._delimitedSuffix);
      let a = this._state.squeeze(this._hashBitLength / 8);
      return i !== void 0 && (a = a.toString(i)), this._resetState(), a;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const i = new Sn(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._hashBitLength,
        this._options
      );
      return this._state.copy(i._state), (i._finalized = this._finalized), i;
    }
  };
const { Transform: Gi } = mn;
var Vi = (e) =>
  class Bn extends Gi {
    constructor(i, a, s, c) {
      super(c),
        (this._rate = i),
        (this._capacity = a),
        (this._delimitedSuffix = s),
        (this._options = c),
        (this._state = new e()),
        this._state.initialize(i, a),
        (this._finalized = !1);
    }
    _transform(i, a, s) {
      let c = null;
      try {
        this.update(i, a);
      } catch (_) {
        c = _;
      }
      s(c);
    }
    _flush() {}
    _read(i) {
      this.push(this.squeeze(i));
    }
    update(i, a) {
      if (!Buffer.isBuffer(i) && typeof i != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Squeeze already called");
      return (
        Buffer.isBuffer(i) || (i = Buffer.from(i, a)),
        this._state.absorb(i),
        this
      );
    }
    squeeze(i, a) {
      this._finalized ||
        ((this._finalized = !0),
        this._state.absorbLastFewBits(this._delimitedSuffix));
      let s = this._state.squeeze(i);
      return a !== void 0 && (s = s.toString(a)), s;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const i = new Bn(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._options
      );
      return this._state.copy(i._state), (i._finalized = this._finalized), i;
    }
  };
const Yi = zi,
  Ki = Vi;
var Xi = function (e) {
    const t = Yi(e),
      i = Ki(e);
    return function (a, s) {
      switch (typeof a == "string" ? a.toLowerCase() : a) {
        case "keccak224":
          return new t(1152, 448, null, 224, s);
        case "keccak256":
          return new t(1088, 512, null, 256, s);
        case "keccak384":
          return new t(832, 768, null, 384, s);
        case "keccak512":
          return new t(576, 1024, null, 512, s);
        case "sha3-224":
          return new t(1152, 448, 6, 224, s);
        case "sha3-256":
          return new t(1088, 512, 6, 256, s);
        case "sha3-384":
          return new t(832, 768, 6, 384, s);
        case "sha3-512":
          return new t(576, 1024, 6, 512, s);
        case "shake128":
          return new i(1344, 256, 31, s);
        case "shake256":
          return new i(1088, 512, 31, s);
        default:
          throw new Error("Invald algorithm: " + a);
      }
    };
  },
  Rn = {};
const zr = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
  2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0,
  2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
  2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649,
  0, 2147516424, 2147483648,
];
Rn.p1600 = function (e) {
  for (let t = 0; t < 24; ++t) {
    const i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
      a = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
      s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
      c = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
      _ = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
      f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
      y = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
      v = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
      B = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
      b = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let T = B ^ ((s << 1) | (c >>> 31)),
      m = b ^ ((c << 1) | (s >>> 31));
    const k = e[0] ^ T,
      U = e[1] ^ m,
      C = e[10] ^ T,
      d = e[11] ^ m,
      E = e[20] ^ T,
      I = e[21] ^ m,
      F = e[30] ^ T,
      M = e[31] ^ m,
      L = e[40] ^ T,
      W = e[41] ^ m;
    (T = i ^ ((_ << 1) | (f >>> 31))), (m = a ^ ((f << 1) | (_ >>> 31)));
    const O = e[2] ^ T,
      P = e[3] ^ m,
      V = e[12] ^ T,
      ie = e[13] ^ m,
      pe = e[22] ^ T,
      te = e[23] ^ m,
      oe = e[32] ^ T,
      ae = e[33] ^ m,
      ve = e[42] ^ T,
      le = e[43] ^ m;
    (T = s ^ ((y << 1) | (v >>> 31))), (m = c ^ ((v << 1) | (y >>> 31)));
    const ye = e[4] ^ T,
      he = e[5] ^ m,
      be = e[14] ^ T,
      Y = e[15] ^ m,
      Q = e[24] ^ T,
      fe = e[25] ^ m,
      ge = e[34] ^ T,
      ce = e[35] ^ m,
      w = e[44] ^ T,
      g = e[45] ^ m;
    (T = _ ^ ((B << 1) | (b >>> 31))), (m = f ^ ((b << 1) | (B >>> 31)));
    const A = e[6] ^ T,
      D = e[7] ^ m,
      $ = e[16] ^ T,
      l = e[17] ^ m,
      h = e[26] ^ T,
      R = e[27] ^ m,
      N = e[36] ^ T,
      K = e[37] ^ m,
      H = e[46] ^ T,
      j = e[47] ^ m;
    (T = y ^ ((i << 1) | (a >>> 31))), (m = v ^ ((a << 1) | (i >>> 31)));
    const we = e[8] ^ T,
      Be = e[9] ^ m,
      Ce = e[18] ^ T,
      Re = e[19] ^ m,
      se = e[28] ^ T,
      Ee = e[29] ^ m,
      Fe = e[38] ^ T,
      ue = e[39] ^ m,
      me = e[48] ^ T,
      o = e[49] ^ m,
      r = k,
      n = U,
      u = (d << 4) | (C >>> 28),
      p = (C << 4) | (d >>> 28),
      x = (E << 3) | (I >>> 29),
      S = (I << 3) | (E >>> 29),
      q = (M << 9) | (F >>> 23),
      J = (F << 9) | (M >>> 23),
      G = (L << 18) | (W >>> 14),
      Z = (W << 18) | (L >>> 14),
      z = (O << 1) | (P >>> 31),
      pt = (P << 1) | (O >>> 31),
      yt = (ie << 12) | (V >>> 20),
      bt = (V << 12) | (ie >>> 20),
      gt = (pe << 10) | (te >>> 22),
      wt = (te << 10) | (pe >>> 22),
      xt = (ae << 13) | (oe >>> 19),
      vt = (oe << 13) | (ae >>> 19),
      Et = (ve << 2) | (le >>> 30),
      mt = (le << 2) | (ve >>> 30),
      St = (he << 30) | (ye >>> 2),
      Bt = (ye << 30) | (he >>> 2),
      Rt = (be << 6) | (Y >>> 26),
      At = (Y << 6) | (be >>> 26),
      Tt = (fe << 11) | (Q >>> 21),
      It = (Q << 11) | (fe >>> 21),
      Ct = (ge << 15) | (ce >>> 17),
      Ft = (ce << 15) | (ge >>> 17),
      kt = (g << 29) | (w >>> 3),
      Mt = (w << 29) | (g >>> 3),
      Ut = (A << 28) | (D >>> 4),
      Nt = (D << 28) | (A >>> 4),
      Dt = (l << 23) | ($ >>> 9),
      Lt = ($ << 23) | (l >>> 9),
      Pt = (h << 25) | (R >>> 7),
      Ot = (R << 25) | (h >>> 7),
      $t = (N << 21) | (K >>> 11),
      Ht = (K << 21) | (N >>> 11),
      qt = (j << 24) | (H >>> 8),
      jt = (H << 24) | (j >>> 8),
      Wt = (we << 27) | (Be >>> 5),
      zt = (Be << 27) | (we >>> 5),
      Gt = (Ce << 20) | (Re >>> 12),
      Vt = (Re << 20) | (Ce >>> 12),
      Yt = (Ee << 7) | (se >>> 25),
      Kt = (se << 7) | (Ee >>> 25),
      Xt = (Fe << 8) | (ue >>> 24),
      Jt = (ue << 8) | (Fe >>> 24),
      Zt = (me << 14) | (o >>> 18),
      Qt = (o << 14) | (me >>> 18);
    (e[0] = r ^ (~yt & Tt)),
      (e[1] = n ^ (~bt & It)),
      (e[10] = Ut ^ (~Gt & x)),
      (e[11] = Nt ^ (~Vt & S)),
      (e[20] = z ^ (~Rt & Pt)),
      (e[21] = pt ^ (~At & Ot)),
      (e[30] = Wt ^ (~u & gt)),
      (e[31] = zt ^ (~p & wt)),
      (e[40] = St ^ (~Dt & Yt)),
      (e[41] = Bt ^ (~Lt & Kt)),
      (e[2] = yt ^ (~Tt & $t)),
      (e[3] = bt ^ (~It & Ht)),
      (e[12] = Gt ^ (~x & xt)),
      (e[13] = Vt ^ (~S & vt)),
      (e[22] = Rt ^ (~Pt & Xt)),
      (e[23] = At ^ (~Ot & Jt)),
      (e[32] = u ^ (~gt & Ct)),
      (e[33] = p ^ (~wt & Ft)),
      (e[42] = Dt ^ (~Yt & q)),
      (e[43] = Lt ^ (~Kt & J)),
      (e[4] = Tt ^ (~$t & Zt)),
      (e[5] = It ^ (~Ht & Qt)),
      (e[14] = x ^ (~xt & kt)),
      (e[15] = S ^ (~vt & Mt)),
      (e[24] = Pt ^ (~Xt & G)),
      (e[25] = Ot ^ (~Jt & Z)),
      (e[34] = gt ^ (~Ct & qt)),
      (e[35] = wt ^ (~Ft & jt)),
      (e[44] = Yt ^ (~q & Et)),
      (e[45] = Kt ^ (~J & mt)),
      (e[6] = $t ^ (~Zt & r)),
      (e[7] = Ht ^ (~Qt & n)),
      (e[16] = xt ^ (~kt & Ut)),
      (e[17] = vt ^ (~Mt & Nt)),
      (e[26] = Xt ^ (~G & z)),
      (e[27] = Jt ^ (~Z & pt)),
      (e[36] = Ct ^ (~qt & Wt)),
      (e[37] = Ft ^ (~jt & zt)),
      (e[46] = q ^ (~Et & St)),
      (e[47] = J ^ (~mt & Bt)),
      (e[8] = Zt ^ (~r & yt)),
      (e[9] = Qt ^ (~n & bt)),
      (e[18] = kt ^ (~Ut & Gt)),
      (e[19] = Mt ^ (~Nt & Vt)),
      (e[28] = G ^ (~z & Rt)),
      (e[29] = Z ^ (~pt & At)),
      (e[38] = qt ^ (~Wt & u)),
      (e[39] = jt ^ (~zt & p)),
      (e[48] = Et ^ (~St & Dt)),
      (e[49] = mt ^ (~Bt & Lt)),
      (e[0] ^= zr[t * 2]),
      (e[1] ^= zr[t * 2 + 1]);
  }
};
const ot = Rn;
function je() {
  (this.state = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
    (this.blockSize = null),
    (this.count = 0),
    (this.squeezing = !1);
}
je.prototype.initialize = function (e, t) {
  for (let i = 0; i < 50; ++i) this.state[i] = 0;
  (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
};
je.prototype.absorb = function (e) {
  for (let t = 0; t < e.length; ++t)
    (this.state[~~(this.count / 4)] ^= e[t] << (8 * (this.count % 4))),
      (this.count += 1),
      this.count === this.blockSize && (ot.p1600(this.state), (this.count = 0));
};
je.prototype.absorbLastFewBits = function (e) {
  (this.state[~~(this.count / 4)] ^= e << (8 * (this.count % 4))),
    e & 128 && this.count === this.blockSize - 1 && ot.p1600(this.state),
    (this.state[~~((this.blockSize - 1) / 4)] ^=
      128 << (8 * ((this.blockSize - 1) % 4))),
    ot.p1600(this.state),
    (this.count = 0),
    (this.squeezing = !0);
};
je.prototype.squeeze = function (e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Buffer.alloc(e);
  for (let i = 0; i < e; ++i)
    (t[i] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 255),
      (this.count += 1),
      this.count === this.blockSize && (ot.p1600(this.state), (this.count = 0));
  return t;
};
je.prototype.copy = function (e) {
  for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
  (e.blockSize = this.blockSize),
    (e.count = this.count),
    (e.squeezing = this.squeezing);
};
var Ji = je,
  ya = Xi(Ji),
  An = { exports: {} },
  dr = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ (function (
  e,
  t
) {
  var i = qe,
    a = i.Buffer;
  function s(_, f) {
    for (var y in _) f[y] = _[y];
  }
  a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow
    ? (e.exports = i)
    : (s(i, t), (t.Buffer = c));
  function c(_, f, y) {
    return a(_, f, y);
  }
  (c.prototype = Object.create(a.prototype)),
    s(a, c),
    (c.from = function (_, f, y) {
      if (typeof _ == "number")
        throw new TypeError("Argument must not be a number");
      return a(_, f, y);
    }),
    (c.alloc = function (_, f, y) {
      if (typeof _ != "number")
        throw new TypeError("Argument must be a number");
      var v = a(_);
      return (
        f !== void 0
          ? typeof y == "string"
            ? v.fill(f, y)
            : v.fill(f)
          : v.fill(0),
        v
      );
    }),
    (c.allocUnsafe = function (_) {
      if (typeof _ != "number")
        throw new TypeError("Argument must be a number");
      return a(_);
    }),
    (c.allocUnsafeSlow = function (_) {
      if (typeof _ != "number")
        throw new TypeError("Argument must be a number");
      return i.SlowBuffer(_);
    });
})(dr, dr.exports);
var Ne = dr.exports,
  Tn = Ne.Buffer;
function ht(e, t) {
  (this._block = Tn.alloc(e)),
    (this._finalSize = t),
    (this._blockSize = e),
    (this._len = 0);
}
ht.prototype.update = function (e, t) {
  typeof e == "string" && ((t = t || "utf8"), (e = Tn.from(e, t)));
  for (
    var i = this._block,
      a = this._blockSize,
      s = e.length,
      c = this._len,
      _ = 0;
    _ < s;

  ) {
    for (var f = c % a, y = Math.min(s - _, a - f), v = 0; v < y; v++)
      i[f + v] = e[_ + v];
    (c += y), (_ += y), c % a === 0 && this._update(i);
  }
  return (this._len += s), this;
};
ht.prototype.digest = function (e) {
  var t = this._len % this._blockSize;
  (this._block[t] = 128),
    this._block.fill(0, t + 1),
    t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var i = this._len * 8;
  if (i <= 4294967295) this._block.writeUInt32BE(i, this._blockSize - 4);
  else {
    var a = (i & 4294967295) >>> 0,
      s = (i - a) / 4294967296;
    this._block.writeUInt32BE(s, this._blockSize - 8),
      this._block.writeUInt32BE(a, this._blockSize - 4);
  }
  this._update(this._block);
  var c = this._hash();
  return e ? c.toString(e) : c;
};
ht.prototype._update = function () {
  throw new Error("_update must be implemented by subclass");
};
var We = ht,
  Zi = xe,
  In = We,
  Qi = Ne.Buffer,
  eo = [1518500249, 1859775393, -1894007588, -899497514],
  to = new Array(80);
function Ke() {
  this.init(), (this._w = to), In.call(this, 64, 56);
}
Zi(Ke, In);
Ke.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function ro(e) {
  return (e << 5) | (e >>> 27);
}
function no(e) {
  return (e << 30) | (e >>> 2);
}
function io(e, t, i, a) {
  return e === 0
    ? (t & i) | (~t & a)
    : e === 2
    ? (t & i) | (t & a) | (i & a)
    : t ^ i ^ a;
}
Ke.prototype._update = function (e) {
  for (
    var t = this._w,
      i = this._a | 0,
      a = this._b | 0,
      s = this._c | 0,
      c = this._d | 0,
      _ = this._e | 0,
      f = 0;
    f < 16;
    ++f
  )
    t[f] = e.readInt32BE(f * 4);
  for (; f < 80; ++f) t[f] = t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16];
  for (var y = 0; y < 80; ++y) {
    var v = ~~(y / 20),
      B = (ro(i) + io(v, a, s, c) + _ + t[y] + eo[v]) | 0;
    (_ = c), (c = s), (s = no(a)), (a = i), (i = B);
  }
  (this._a = (i + this._a) | 0),
    (this._b = (a + this._b) | 0),
    (this._c = (s + this._c) | 0),
    (this._d = (c + this._d) | 0),
    (this._e = (_ + this._e) | 0);
};
Ke.prototype._hash = function () {
  var e = Qi.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var oo = Ke,
  ao = xe,
  Cn = We,
  fo = Ne.Buffer,
  so = [1518500249, 1859775393, -1894007588, -899497514],
  uo = new Array(80);
function Xe() {
  this.init(), (this._w = uo), Cn.call(this, 64, 56);
}
ao(Xe, Cn);
Xe.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function lo(e) {
  return (e << 1) | (e >>> 31);
}
function ho(e) {
  return (e << 5) | (e >>> 27);
}
function co(e) {
  return (e << 30) | (e >>> 2);
}
function _o(e, t, i, a) {
  return e === 0
    ? (t & i) | (~t & a)
    : e === 2
    ? (t & i) | (t & a) | (i & a)
    : t ^ i ^ a;
}
Xe.prototype._update = function (e) {
  for (
    var t = this._w,
      i = this._a | 0,
      a = this._b | 0,
      s = this._c | 0,
      c = this._d | 0,
      _ = this._e | 0,
      f = 0;
    f < 16;
    ++f
  )
    t[f] = e.readInt32BE(f * 4);
  for (; f < 80; ++f) t[f] = lo(t[f - 3] ^ t[f - 8] ^ t[f - 14] ^ t[f - 16]);
  for (var y = 0; y < 80; ++y) {
    var v = ~~(y / 20),
      B = (ho(i) + _o(v, a, s, c) + _ + t[y] + so[v]) | 0;
    (_ = c), (c = s), (s = co(a)), (a = i), (i = B);
  }
  (this._a = (i + this._a) | 0),
    (this._b = (a + this._b) | 0),
    (this._c = (s + this._c) | 0),
    (this._d = (c + this._d) | 0),
    (this._e = (_ + this._e) | 0);
};
Xe.prototype._hash = function () {
  var e = fo.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var po = Xe,
  yo = xe,
  Fn = We,
  bo = Ne.Buffer,
  go = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ],
  wo = new Array(64);
function Je() {
  this.init(), (this._w = wo), Fn.call(this, 64, 56);
}
yo(Je, Fn);
Je.prototype.init = function () {
  return (
    (this._a = 1779033703),
    (this._b = 3144134277),
    (this._c = 1013904242),
    (this._d = 2773480762),
    (this._e = 1359893119),
    (this._f = 2600822924),
    (this._g = 528734635),
    (this._h = 1541459225),
    this
  );
};
function xo(e, t, i) {
  return i ^ (e & (t ^ i));
}
function vo(e, t, i) {
  return (e & t) | (i & (e | t));
}
function Eo(e) {
  return (
    ((e >>> 2) | (e << 30)) ^
    ((e >>> 13) | (e << 19)) ^
    ((e >>> 22) | (e << 10))
  );
}
function mo(e) {
  return (
    ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7))
  );
}
function So(e) {
  return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
}
function Bo(e) {
  return ((e >>> 17) | (e << 15)) ^ ((e >>> 19) | (e << 13)) ^ (e >>> 10);
}
Je.prototype._update = function (e) {
  for (
    var t = this._w,
      i = this._a | 0,
      a = this._b | 0,
      s = this._c | 0,
      c = this._d | 0,
      _ = this._e | 0,
      f = this._f | 0,
      y = this._g | 0,
      v = this._h | 0,
      B = 0;
    B < 16;
    ++B
  )
    t[B] = e.readInt32BE(B * 4);
  for (; B < 64; ++B)
    t[B] = (Bo(t[B - 2]) + t[B - 7] + So(t[B - 15]) + t[B - 16]) | 0;
  for (var b = 0; b < 64; ++b) {
    var T = (v + mo(_) + xo(_, f, y) + go[b] + t[b]) | 0,
      m = (Eo(i) + vo(i, a, s)) | 0;
    (v = y),
      (y = f),
      (f = _),
      (_ = (c + T) | 0),
      (c = s),
      (s = a),
      (a = i),
      (i = (T + m) | 0);
  }
  (this._a = (i + this._a) | 0),
    (this._b = (a + this._b) | 0),
    (this._c = (s + this._c) | 0),
    (this._d = (c + this._d) | 0),
    (this._e = (_ + this._e) | 0),
    (this._f = (f + this._f) | 0),
    (this._g = (y + this._g) | 0),
    (this._h = (v + this._h) | 0);
};
Je.prototype._hash = function () {
  var e = bo.allocUnsafe(32);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e.writeInt32BE(this._h, 28),
    e
  );
};
var kn = Je,
  Ro = xe,
  Ao = kn,
  To = We,
  Io = Ne.Buffer,
  Co = new Array(64);
function ct() {
  this.init(), (this._w = Co), To.call(this, 64, 56);
}
Ro(ct, Ao);
ct.prototype.init = function () {
  return (
    (this._a = 3238371032),
    (this._b = 914150663),
    (this._c = 812702999),
    (this._d = 4144912697),
    (this._e = 4290775857),
    (this._f = 1750603025),
    (this._g = 1694076839),
    (this._h = 3204075428),
    this
  );
};
ct.prototype._hash = function () {
  var e = Io.allocUnsafe(28);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e
  );
};
var Fo = ct,
  ko = xe,
  Mn = We,
  Mo = Ne.Buffer,
  Gr = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ],
  Uo = new Array(160);
function Ze() {
  this.init(), (this._w = Uo), Mn.call(this, 128, 112);
}
ko(Ze, Mn);
Ze.prototype.init = function () {
  return (
    (this._ah = 1779033703),
    (this._bh = 3144134277),
    (this._ch = 1013904242),
    (this._dh = 2773480762),
    (this._eh = 1359893119),
    (this._fh = 2600822924),
    (this._gh = 528734635),
    (this._hh = 1541459225),
    (this._al = 4089235720),
    (this._bl = 2227873595),
    (this._cl = 4271175723),
    (this._dl = 1595750129),
    (this._el = 2917565137),
    (this._fl = 725511199),
    (this._gl = 4215389547),
    (this._hl = 327033209),
    this
  );
};
function Vr(e, t, i) {
  return i ^ (e & (t ^ i));
}
function Yr(e, t, i) {
  return (e & t) | (i & (e | t));
}
function Kr(e, t) {
  return (
    ((e >>> 28) | (t << 4)) ^ ((t >>> 2) | (e << 30)) ^ ((t >>> 7) | (e << 25))
  );
}
function Xr(e, t) {
  return (
    ((e >>> 14) | (t << 18)) ^
    ((e >>> 18) | (t << 14)) ^
    ((t >>> 9) | (e << 23))
  );
}
function No(e, t) {
  return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
}
function Do(e, t) {
  return (
    ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ ((e >>> 7) | (t << 25))
  );
}
function Lo(e, t) {
  return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
}
function Po(e, t) {
  return (
    ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ ((e >>> 6) | (t << 26))
  );
}
function ne(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
Ze.prototype._update = function (e) {
  for (
    var t = this._w,
      i = this._ah | 0,
      a = this._bh | 0,
      s = this._ch | 0,
      c = this._dh | 0,
      _ = this._eh | 0,
      f = this._fh | 0,
      y = this._gh | 0,
      v = this._hh | 0,
      B = this._al | 0,
      b = this._bl | 0,
      T = this._cl | 0,
      m = this._dl | 0,
      k = this._el | 0,
      U = this._fl | 0,
      C = this._gl | 0,
      d = this._hl | 0,
      E = 0;
    E < 32;
    E += 2
  )
    (t[E] = e.readInt32BE(E * 4)), (t[E + 1] = e.readInt32BE(E * 4 + 4));
  for (; E < 160; E += 2) {
    var I = t[E - 30],
      F = t[E - 15 * 2 + 1],
      M = No(I, F),
      L = Do(F, I);
    (I = t[E - 2 * 2]), (F = t[E - 2 * 2 + 1]);
    var W = Lo(I, F),
      O = Po(F, I),
      P = t[E - 7 * 2],
      V = t[E - 7 * 2 + 1],
      ie = t[E - 16 * 2],
      pe = t[E - 16 * 2 + 1],
      te = (L + V) | 0,
      oe = (M + P + ne(te, L)) | 0;
    (te = (te + O) | 0),
      (oe = (oe + W + ne(te, O)) | 0),
      (te = (te + pe) | 0),
      (oe = (oe + ie + ne(te, pe)) | 0),
      (t[E] = oe),
      (t[E + 1] = te);
  }
  for (var ae = 0; ae < 160; ae += 2) {
    (oe = t[ae]), (te = t[ae + 1]);
    var ve = Yr(i, a, s),
      le = Yr(B, b, T),
      ye = Kr(i, B),
      he = Kr(B, i),
      be = Xr(_, k),
      Y = Xr(k, _),
      Q = Gr[ae],
      fe = Gr[ae + 1],
      ge = Vr(_, f, y),
      ce = Vr(k, U, C),
      w = (d + Y) | 0,
      g = (v + be + ne(w, d)) | 0;
    (w = (w + ce) | 0),
      (g = (g + ge + ne(w, ce)) | 0),
      (w = (w + fe) | 0),
      (g = (g + Q + ne(w, fe)) | 0),
      (w = (w + te) | 0),
      (g = (g + oe + ne(w, te)) | 0);
    var A = (he + le) | 0,
      D = (ye + ve + ne(A, he)) | 0;
    (v = y),
      (d = C),
      (y = f),
      (C = U),
      (f = _),
      (U = k),
      (k = (m + w) | 0),
      (_ = (c + g + ne(k, m)) | 0),
      (c = s),
      (m = T),
      (s = a),
      (T = b),
      (a = i),
      (b = B),
      (B = (w + A) | 0),
      (i = (g + D + ne(B, w)) | 0);
  }
  (this._al = (this._al + B) | 0),
    (this._bl = (this._bl + b) | 0),
    (this._cl = (this._cl + T) | 0),
    (this._dl = (this._dl + m) | 0),
    (this._el = (this._el + k) | 0),
    (this._fl = (this._fl + U) | 0),
    (this._gl = (this._gl + C) | 0),
    (this._hl = (this._hl + d) | 0),
    (this._ah = (this._ah + i + ne(this._al, B)) | 0),
    (this._bh = (this._bh + a + ne(this._bl, b)) | 0),
    (this._ch = (this._ch + s + ne(this._cl, T)) | 0),
    (this._dh = (this._dh + c + ne(this._dl, m)) | 0),
    (this._eh = (this._eh + _ + ne(this._el, k)) | 0),
    (this._fh = (this._fh + f + ne(this._fl, U)) | 0),
    (this._gh = (this._gh + y + ne(this._gl, C)) | 0),
    (this._hh = (this._hh + v + ne(this._hl, d)) | 0);
};
Ze.prototype._hash = function () {
  var e = Mo.allocUnsafe(64);
  function t(i, a, s) {
    e.writeInt32BE(i, s), e.writeInt32BE(a, s + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    t(this._gh, this._gl, 48),
    t(this._hh, this._hl, 56),
    e
  );
};
var Un = Ze,
  Oo = xe,
  $o = Un,
  Ho = We,
  qo = Ne.Buffer,
  jo = new Array(160);
function _t() {
  this.init(), (this._w = jo), Ho.call(this, 128, 112);
}
Oo(_t, $o);
_t.prototype.init = function () {
  return (
    (this._ah = 3418070365),
    (this._bh = 1654270250),
    (this._ch = 2438529370),
    (this._dh = 355462360),
    (this._eh = 1731405415),
    (this._fh = 2394180231),
    (this._gh = 3675008525),
    (this._hh = 1203062813),
    (this._al = 3238371032),
    (this._bl = 914150663),
    (this._cl = 812702999),
    (this._dl = 4144912697),
    (this._el = 4290775857),
    (this._fl = 1750603025),
    (this._gl = 1694076839),
    (this._hl = 3204075428),
    this
  );
};
_t.prototype._hash = function () {
  var e = qo.allocUnsafe(48);
  function t(i, a, s) {
    e.writeInt32BE(i, s), e.writeInt32BE(a, s + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    e
  );
};
var Wo = _t,
  De = (An.exports = function (t) {
    t = t.toLowerCase();
    var i = De[t];
    if (!i) throw new Error(t + " is not supported (we accept pull requests)");
    return new i();
  });
De.sha = oo;
De.sha1 = po;
De.sha224 = Fo;
De.sha256 = kn;
De.sha384 = Wo;
De.sha512 = Un;
var ba = An.exports;
function Nn(e) {
  var t,
    i,
    a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (i = Nn(e[t])) && (a && (a += " "), (a += i));
    else for (t in e) e[t] && (a && (a += " "), (a += t));
  return a;
}
function Jr() {
  for (var e, t, i = 0, a = ""; i < arguments.length; )
    (e = arguments[i++]) && (t = Nn(e)) && (a && (a += " "), (a += t));
  return a;
}
const zo = Object.freeze(
    Object.defineProperty(
      { __proto__: null, clsx: Jr, default: Jr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ga = ft(zo);
var Qe,
  ee,
  Dn,
  Ln,
  ke,
  Zr,
  Pn,
  pr,
  Sr,
  yr,
  br,
  On,
  Ye = {},
  $n = [],
  Go = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  dt = Array.isArray;
function Ae(e, t) {
  for (var i in t) e[i] = t[i];
  return e;
}
function Hn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function gr(e, t, i) {
  var a,
    s,
    c,
    _ = {};
  for (c in t)
    c == "key" ? (a = t[c]) : c == "ref" ? (s = t[c]) : (_[c] = t[c]);
  if (
    (arguments.length > 2 &&
      (_.children = arguments.length > 3 ? Qe.call(arguments, 2) : i),
    typeof e == "function" && e.defaultProps != null)
  )
    for (c in e.defaultProps) _[c] === void 0 && (_[c] = e.defaultProps[c]);
  return ze(e, _, a, s, null);
}
function ze(e, t, i, a, s) {
  var c = {
    type: e,
    props: t,
    key: i,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: s ?? ++Dn,
    __i: -1,
    __u: 0,
  };
  return s == null && ee.vnode != null && ee.vnode(c), c;
}
function Vo() {
  return { current: null };
}
function et(e) {
  return e.children;
}
function Ge(e, t) {
  (this.props = e), (this.context = t);
}
function Me(e, t) {
  if (t == null) return e.__ ? Me(e.__, e.__i + 1) : null;
  for (var i; t < e.__k.length; t++)
    if ((i = e.__k[t]) != null && i.__e != null) return i.__e;
  return typeof e.type == "function" ? Me(e) : null;
}
function qn(e) {
  var t, i;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((i = e.__k[t]) != null && i.__e != null) {
        e.__e = e.__c.base = i.__e;
        break;
      }
    return qn(e);
  }
}
function wr(e) {
  ((!e.__d && (e.__d = !0) && ke.push(e) && !at.__r++) ||
    Zr !== ee.debounceRendering) &&
    ((Zr = ee.debounceRendering) || Pn)(at);
}
function at() {
  var e, t, i, a, s, c, _, f;
  for (ke.sort(pr); (e = ke.shift()); )
    e.__d &&
      ((t = ke.length),
      (a = void 0),
      (c = (s = (i = e).__v).__e),
      (_ = []),
      (f = []),
      i.__P &&
        (((a = Ae({}, s)).__v = s.__v + 1),
        ee.vnode && ee.vnode(a),
        Br(
          i.__P,
          a,
          s,
          i.__n,
          i.__P.namespaceURI,
          32 & s.__u ? [c] : null,
          _,
          c ?? Me(s),
          !!(32 & s.__u),
          f
        ),
        (a.__v = s.__v),
        (a.__.__k[a.__i] = a),
        Gn(_, a, f),
        a.__e != c && qn(a)),
      ke.length > t && ke.sort(pr));
  at.__r = 0;
}
function jn(e, t, i, a, s, c, _, f, y, v, B) {
  var b,
    T,
    m,
    k,
    U,
    C = (a && a.__k) || $n,
    d = t.length;
  for (i.__d = y, Yo(i, t, C), y = i.__d, b = 0; b < d; b++)
    (m = i.__k[b]) != null &&
      typeof m != "boolean" &&
      typeof m != "function" &&
      ((T = m.__i === -1 ? Ye : C[m.__i] || Ye),
      (m.__i = b),
      Br(e, m, T, s, c, _, f, y, v, B),
      (k = m.__e),
      m.ref &&
        T.ref != m.ref &&
        (T.ref && Rr(T.ref, null, m), B.push(m.ref, m.__c || k, m)),
      U == null && k != null && (U = k),
      65536 & m.__u || T.__k === m.__k
        ? (y && typeof m.type == "string" && !e.contains(y) && (y = Me(T)),
          (y = Wn(m, y, e)))
        : typeof m.type == "function" && m.__d !== void 0
        ? (y = m.__d)
        : k && (y = k.nextSibling),
      (m.__d = void 0),
      (m.__u &= -196609));
  (i.__d = y), (i.__e = U);
}
function Yo(e, t, i) {
  var a,
    s,
    c,
    _,
    f,
    y = t.length,
    v = i.length,
    B = v,
    b = 0;
  for (e.__k = [], a = 0; a < y; a++)
    (_ = a + b),
      (s = e.__k[a] =
        (s = t[a]) == null || typeof s == "boolean" || typeof s == "function"
          ? null
          : typeof s == "string" ||
            typeof s == "number" ||
            typeof s == "bigint" ||
            s.constructor == String
          ? ze(null, s, null, null, null)
          : dt(s)
          ? ze(et, { children: s }, null, null, null)
          : s.constructor === void 0 && s.__b > 0
          ? ze(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v)
          : s) != null
        ? ((s.__ = e),
          (s.__b = e.__b + 1),
          (f = Ko(s, i, _, B)),
          (s.__i = f),
          (c = null),
          f !== -1 && (B--, (c = i[f]) && (c.__u |= 131072)),
          c == null || c.__v === null
            ? (f == -1 && b--, typeof s.type != "function" && (s.__u |= 65536))
            : f !== _ &&
              (f == _ - 1
                ? (b = f - _)
                : f == _ + 1
                ? b++
                : f > _
                ? B > y - _
                  ? (b += f - _)
                  : b--
                : f < _ && b++,
              f !== a + b && (s.__u |= 65536)))
        : (c = i[_]) &&
          c.key == null &&
          c.__e &&
          !(131072 & c.__u) &&
          (c.__e == e.__d && (e.__d = Me(c)), xr(c, c, !1), (i[_] = null), B--);
  if (B)
    for (a = 0; a < v; a++)
      (c = i[a]) != null &&
        !(131072 & c.__u) &&
        (c.__e == e.__d && (e.__d = Me(c)), xr(c, c));
}
function Wn(e, t, i) {
  var a, s;
  if (typeof e.type == "function") {
    for (a = e.__k, s = 0; a && s < a.length; s++)
      a[s] && ((a[s].__ = e), (t = Wn(a[s], t, i)));
    return t;
  }
  e.__e != t && (i.insertBefore(e.__e, t || null), (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function zn(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (dt(e)
        ? e.some(function (i) {
            zn(i, t);
          })
        : t.push(e)),
    t
  );
}
function Ko(e, t, i, a) {
  var s = e.key,
    c = e.type,
    _ = i - 1,
    f = i + 1,
    y = t[i];
  if (y === null || (y && s == y.key && c === y.type && !(131072 & y.__u)))
    return i;
  if (a > (y != null && !(131072 & y.__u) ? 1 : 0))
    for (; _ >= 0 || f < t.length; ) {
      if (_ >= 0) {
        if ((y = t[_]) && !(131072 & y.__u) && s == y.key && c === y.type)
          return _;
        _--;
      }
      if (f < t.length) {
        if ((y = t[f]) && !(131072 & y.__u) && s == y.key && c === y.type)
          return f;
        f++;
      }
    }
  return -1;
}
function Qr(e, t, i) {
  t[0] === "-"
    ? e.setProperty(t, i ?? "")
    : (e[t] =
        i == null ? "" : typeof i != "number" || Go.test(t) ? i : i + "px");
}
function rt(e, t, i, a, s) {
  var c;
  e: if (t === "style")
    if (typeof i == "string") e.style.cssText = i;
    else {
      if ((typeof a == "string" && (e.style.cssText = a = ""), a))
        for (t in a) (i && t in i) || Qr(e.style, t, "");
      if (i) for (t in i) (a && i[t] === a[t]) || Qr(e.style, t, i[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (c = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (t =
        t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
          ? t.toLowerCase().slice(2)
          : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + c] = i),
      i
        ? a
          ? (i.u = a.u)
          : ((i.u = Sr), e.addEventListener(t, c ? br : yr, c))
        : e.removeEventListener(t, c ? br : yr, c);
  else {
    if (s == "http://www.w3.org/2000/svg")
      t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t != "popover" &&
      t in e
    )
      try {
        e[t] = i ?? "";
        break e;
      } catch {}
    typeof i == "function" ||
      (i == null || (i === !1 && t[4] !== "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, t == "popover" && i == 1 ? "" : i));
  }
}
function en(e) {
  return function (t) {
    if (this.l) {
      var i = this.l[t.type + e];
      if (t.t == null) t.t = Sr++;
      else if (t.t < i.u) return;
      return i(ee.event ? ee.event(t) : t);
    }
  };
}
function Br(e, t, i, a, s, c, _, f, y, v) {
  var B,
    b,
    T,
    m,
    k,
    U,
    C,
    d,
    E,
    I,
    F,
    M,
    L,
    W,
    O,
    P,
    V = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && ((y = !!(32 & i.__u)), (c = [(f = t.__e = i.__e)])),
    (B = ee.__b) && B(t);
  e: if (typeof V == "function")
    try {
      if (
        ((d = t.props),
        (E = "prototype" in V && V.prototype.render),
        (I = (B = V.contextType) && a[B.__c]),
        (F = B ? (I ? I.props.value : B.__) : a),
        i.__c
          ? (C = (b = t.__c = i.__c).__ = b.__E)
          : (E
              ? (t.__c = b = new V(d, F))
              : ((t.__c = b = new Ge(d, F)),
                (b.constructor = V),
                (b.render = Jo)),
            I && I.sub(b),
            (b.props = d),
            b.state || (b.state = {}),
            (b.context = F),
            (b.__n = a),
            (T = b.__d = !0),
            (b.__h = []),
            (b._sb = [])),
        E && b.__s == null && (b.__s = b.state),
        E &&
          V.getDerivedStateFromProps != null &&
          (b.__s == b.state && (b.__s = Ae({}, b.__s)),
          Ae(b.__s, V.getDerivedStateFromProps(d, b.__s))),
        (m = b.props),
        (k = b.state),
        (b.__v = t),
        T)
      )
        E &&
          V.getDerivedStateFromProps == null &&
          b.componentWillMount != null &&
          b.componentWillMount(),
          E && b.componentDidMount != null && b.__h.push(b.componentDidMount);
      else {
        if (
          (E &&
            V.getDerivedStateFromProps == null &&
            d !== m &&
            b.componentWillReceiveProps != null &&
            b.componentWillReceiveProps(d, F),
          !b.__e &&
            ((b.shouldComponentUpdate != null &&
              b.shouldComponentUpdate(d, b.__s, F) === !1) ||
              t.__v === i.__v))
        ) {
          for (
            t.__v !== i.__v && ((b.props = d), (b.state = b.__s), (b.__d = !1)),
              t.__e = i.__e,
              t.__k = i.__k,
              t.__k.forEach(function (ie) {
                ie && (ie.__ = t);
              }),
              M = 0;
            M < b._sb.length;
            M++
          )
            b.__h.push(b._sb[M]);
          (b._sb = []), b.__h.length && _.push(b);
          break e;
        }
        b.componentWillUpdate != null && b.componentWillUpdate(d, b.__s, F),
          E &&
            b.componentDidUpdate != null &&
            b.__h.push(function () {
              b.componentDidUpdate(m, k, U);
            });
      }
      if (
        ((b.context = F),
        (b.props = d),
        (b.__P = e),
        (b.__e = !1),
        (L = ee.__r),
        (W = 0),
        E)
      ) {
        for (
          b.state = b.__s,
            b.__d = !1,
            L && L(t),
            B = b.render(b.props, b.state, b.context),
            O = 0;
          O < b._sb.length;
          O++
        )
          b.__h.push(b._sb[O]);
        b._sb = [];
      } else
        do
          (b.__d = !1),
            L && L(t),
            (B = b.render(b.props, b.state, b.context)),
            (b.state = b.__s);
        while (b.__d && ++W < 25);
      (b.state = b.__s),
        b.getChildContext != null && (a = Ae(Ae({}, a), b.getChildContext())),
        E &&
          !T &&
          b.getSnapshotBeforeUpdate != null &&
          (U = b.getSnapshotBeforeUpdate(m, k)),
        jn(
          e,
          dt(
            (P =
              B != null && B.type === et && B.key == null
                ? B.props.children
                : B)
          )
            ? P
            : [P],
          t,
          i,
          a,
          s,
          c,
          _,
          f,
          y,
          v
        ),
        (b.base = t.__e),
        (t.__u &= -161),
        b.__h.length && _.push(b),
        C && (b.__E = b.__ = null);
    } catch (ie) {
      (t.__v = null),
        y || c != null
          ? ((t.__e = f), (t.__u |= y ? 160 : 32), (c[c.indexOf(f)] = null))
          : ((t.__e = i.__e), (t.__k = i.__k)),
        ee.__e(ie, t, i);
    }
  else
    c == null && t.__v === i.__v
      ? ((t.__k = i.__k), (t.__e = i.__e))
      : (t.__e = Xo(i.__e, t, i, a, s, c, _, y, v));
  (B = ee.diffed) && B(t);
}
function Gn(e, t, i) {
  t.__d = void 0;
  for (var a = 0; a < i.length; a++) Rr(i[a], i[++a], i[++a]);
  ee.__c && ee.__c(t, e),
    e.some(function (s) {
      try {
        (e = s.__h),
          (s.__h = []),
          e.some(function (c) {
            c.call(s);
          });
      } catch (c) {
        ee.__e(c, s.__v);
      }
    });
}
function Xo(e, t, i, a, s, c, _, f, y) {
  var v,
    B,
    b,
    T,
    m,
    k,
    U,
    C = i.props,
    d = t.props,
    E = t.type;
  if (
    (E === "svg"
      ? (s = "http://www.w3.org/2000/svg")
      : E === "math"
      ? (s = "http://www.w3.org/1998/Math/MathML")
      : s || (s = "http://www.w3.org/1999/xhtml"),
    c != null)
  ) {
    for (v = 0; v < c.length; v++)
      if (
        (m = c[v]) &&
        "setAttribute" in m == !!E &&
        (E ? m.localName === E : m.nodeType === 3)
      ) {
        (e = m), (c[v] = null);
        break;
      }
  }
  if (e == null) {
    if (E === null) return document.createTextNode(d);
    (e = document.createElementNS(s, E, d.is && d)), (c = null), (f = !1);
  }
  if (E === null) C === d || (f && e.data === d) || (e.data = d);
  else {
    if (
      ((c = c && Qe.call(e.childNodes)), (C = i.props || Ye), !f && c != null)
    )
      for (C = {}, v = 0; v < e.attributes.length; v++)
        C[(m = e.attributes[v]).name] = m.value;
    for (v in C)
      if (((m = C[v]), v != "children")) {
        if (v == "dangerouslySetInnerHTML") b = m;
        else if (v !== "key" && !(v in d)) {
          if (
            (v == "value" && "defaultValue" in d) ||
            (v == "checked" && "defaultChecked" in d)
          )
            continue;
          rt(e, v, null, m, s);
        }
      }
    for (v in d)
      (m = d[v]),
        v == "children"
          ? (T = m)
          : v == "dangerouslySetInnerHTML"
          ? (B = m)
          : v == "value"
          ? (k = m)
          : v == "checked"
          ? (U = m)
          : v === "key" ||
            (f && typeof m != "function") ||
            C[v] === m ||
            rt(e, v, m, C[v], s);
    if (B)
      f ||
        (b && (B.__html === b.__html || B.__html === e.innerHTML)) ||
        (e.innerHTML = B.__html),
        (t.__k = []);
    else if (
      (b && (e.innerHTML = ""),
      jn(
        e,
        dt(T) ? T : [T],
        t,
        i,
        a,
        E === "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        c,
        _,
        c ? c[0] : i.__k && Me(i, 0),
        f,
        y
      ),
      c != null)
    )
      for (v = c.length; v--; ) c[v] != null && Hn(c[v]);
    f ||
      ((v = "value"),
      k !== void 0 &&
        (k !== e[v] ||
          (E === "progress" && !k) ||
          (E === "option" && k !== C[v])) &&
        rt(e, v, k, C[v], s),
      (v = "checked"),
      U !== void 0 && U !== e[v] && rt(e, v, U, C[v], s));
  }
  return e;
}
function Rr(e, t, i) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (a) {
    ee.__e(a, i);
  }
}
function xr(e, t, i) {
  var a, s;
  if (
    (ee.unmount && ee.unmount(e),
    (a = e.ref) && ((a.current && a.current !== e.__e) || Rr(a, null, t)),
    (a = e.__c) != null)
  ) {
    if (a.componentWillUnmount)
      try {
        a.componentWillUnmount();
      } catch (c) {
        ee.__e(c, t);
      }
    a.base = a.__P = null;
  }
  if ((a = e.__k))
    for (s = 0; s < a.length; s++)
      a[s] && xr(a[s], t, i || typeof e.type != "function");
  i || e.__e == null || Hn(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
}
function Jo(e, t, i) {
  return this.constructor(e, i);
}
function Vn(e, t, i) {
  var a, s, c, _;
  ee.__ && ee.__(e, t),
    (s = (a = typeof i == "function") ? null : (i && i.__k) || t.__k),
    (c = []),
    (_ = []),
    Br(
      t,
      (e = ((!a && i) || t).__k = gr(et, null, [e])),
      s || Ye,
      Ye,
      t.namespaceURI,
      !a && i ? [i] : s ? null : t.firstChild ? Qe.call(t.childNodes) : null,
      c,
      !a && i ? i : s ? s.__e : t.firstChild,
      a,
      _
    ),
    Gn(c, e, _);
}
function Yn(e, t) {
  Vn(e, t, Yn);
}
function Zo(e, t, i) {
  var a,
    s,
    c,
    _,
    f = Ae({}, e.props);
  for (c in (e.type && e.type.defaultProps && (_ = e.type.defaultProps), t))
    c == "key"
      ? (a = t[c])
      : c == "ref"
      ? (s = t[c])
      : (f[c] = t[c] === void 0 && _ !== void 0 ? _[c] : t[c]);
  return (
    arguments.length > 2 &&
      (f.children = arguments.length > 3 ? Qe.call(arguments, 2) : i),
    ze(e.type, f, a || e.key, s || e.ref, null)
  );
}
function Qo(e, t) {
  var i = {
    __c: (t = "__cC" + On++),
    __: e,
    Consumer: function (a, s) {
      return a.children(s);
    },
    Provider: function (a) {
      var s, c;
      return (
        this.getChildContext ||
          ((s = []),
          ((c = {})[t] = this),
          (this.getChildContext = function () {
            return c;
          }),
          (this.componentWillUnmount = function () {
            s = null;
          }),
          (this.shouldComponentUpdate = function (_) {
            this.props.value !== _.value &&
              s.some(function (f) {
                (f.__e = !0), wr(f);
              });
          }),
          (this.sub = function (_) {
            s.push(_);
            var f = _.componentWillUnmount;
            _.componentWillUnmount = function () {
              s && s.splice(s.indexOf(_), 1), f && f.call(_);
            };
          })),
        a.children
      );
    },
  };
  return (i.Provider.__ = i.Consumer.contextType = i);
}
(Qe = $n.slice),
  (ee = {
    __e: function (e, t, i, a) {
      for (var s, c, _; (t = t.__); )
        if ((s = t.__c) && !s.__)
          try {
            if (
              ((c = s.constructor) &&
                c.getDerivedStateFromError != null &&
                (s.setState(c.getDerivedStateFromError(e)), (_ = s.__d)),
              s.componentDidCatch != null &&
                (s.componentDidCatch(e, a || {}), (_ = s.__d)),
              _)
            )
              return (s.__E = s);
          } catch (f) {
            e = f;
          }
      throw e;
    },
  }),
  (Dn = 0),
  (Ln = function (e) {
    return e != null && e.constructor == null;
  }),
  (Ge.prototype.setState = function (e, t) {
    var i;
    (i =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = Ae({}, this.state))),
      typeof e == "function" && (e = e(Ae({}, i), this.props)),
      e && Ae(i, e),
      e != null && this.__v && (t && this._sb.push(t), wr(this));
  }),
  (Ge.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), wr(this));
  }),
  (Ge.prototype.render = et),
  (ke = []),
  (Pn =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (pr = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (at.__r = 0),
  (Sr = 0),
  (yr = en(!1)),
  (br = en(!0)),
  (On = 0);
const ea = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Component: Ge,
        Fragment: et,
        cloneElement: Zo,
        createContext: Qo,
        createElement: gr,
        createRef: Vo,
        h: gr,
        hydrate: Yn,
        get isValidElement() {
          return Ln;
        },
        get options() {
          return ee;
        },
        render: Vn,
        toChildArray: zn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wa = ft(ea);
var Ie,
  X,
  lr,
  tn,
  He = 0,
  Kn = [],
  re = ee,
  rn = re.__b,
  nn = re.__r,
  on = re.diffed,
  an = re.__c,
  fn = re.unmount,
  sn = re.__;
function Le(e, t) {
  re.__h && re.__h(X, e, He || t), (He = 0);
  var i = X.__H || (X.__H = { __: [], __h: [] });
  return e >= i.__.length && i.__.push({}), i.__[e];
}
function Xn(e) {
  return (He = 1), Jn(Qn, e);
}
function Jn(e, t, i) {
  var a = Le(Ie++, 2);
  if (
    ((a.t = e),
    !a.__c &&
      ((a.__ = [
        i ? i(t) : Qn(void 0, t),
        function (f) {
          var y = a.__N ? a.__N[0] : a.__[0],
            v = a.t(y, f);
          y !== v && ((a.__N = [v, a.__[1]]), a.__c.setState({}));
        },
      ]),
      (a.__c = X),
      !X.u))
  ) {
    var s = function (f, y, v) {
      if (!a.__c.__H) return !0;
      var B = a.__c.__H.__.filter(function (T) {
        return !!T.__c;
      });
      if (
        B.every(function (T) {
          return !T.__N;
        })
      )
        return !c || c.call(this, f, y, v);
      var b = !1;
      return (
        B.forEach(function (T) {
          if (T.__N) {
            var m = T.__[0];
            (T.__ = T.__N), (T.__N = void 0), m !== T.__[0] && (b = !0);
          }
        }),
        !(!b && a.__c.props === f) && (!c || c.call(this, f, y, v))
      );
    };
    X.u = !0;
    var c = X.shouldComponentUpdate,
      _ = X.componentWillUpdate;
    (X.componentWillUpdate = function (f, y, v) {
      if (this.__e) {
        var B = c;
        (c = void 0), s(f, y, v), (c = B);
      }
      _ && _.call(this, f, y, v);
    }),
      (X.shouldComponentUpdate = s);
  }
  return a.__N || a.__;
}
function ta(e, t) {
  var i = Le(Ie++, 3);
  !re.__s && Tr(i.__H, t) && ((i.__ = e), (i.i = t), X.__H.__h.push(i));
}
function Zn(e, t) {
  var i = Le(Ie++, 4);
  !re.__s && Tr(i.__H, t) && ((i.__ = e), (i.i = t), X.__h.push(i));
}
function ra(e) {
  return (
    (He = 5),
    Ar(function () {
      return { current: e };
    }, [])
  );
}
function na(e, t, i) {
  (He = 6),
    Zn(
      function () {
        return typeof e == "function"
          ? (e(t()),
            function () {
              return e(null);
            })
          : e
          ? ((e.current = t()),
            function () {
              return (e.current = null);
            })
          : void 0;
      },
      i == null ? i : i.concat(e)
    );
}
function Ar(e, t) {
  var i = Le(Ie++, 7);
  return Tr(i.__H, t) && ((i.__ = e()), (i.__H = t), (i.__h = e)), i.__;
}
function ia(e, t) {
  return (
    (He = 8),
    Ar(function () {
      return e;
    }, t)
  );
}
function oa(e) {
  var t = X.context[e.__c],
    i = Le(Ie++, 9);
  return (
    (i.c = e),
    t ? (i.__ == null && ((i.__ = !0), t.sub(X)), t.props.value) : e.__
  );
}
function aa(e, t) {
  re.useDebugValue && re.useDebugValue(t ? t(e) : e);
}
function fa(e) {
  var t = Le(Ie++, 10),
    i = Xn();
  return (
    (t.__ = e),
    X.componentDidCatch ||
      (X.componentDidCatch = function (a, s) {
        t.__ && t.__(a, s), i[1](a);
      }),
    [
      i[0],
      function () {
        i[1](void 0);
      },
    ]
  );
}
function sa() {
  var e = Le(Ie++, 11);
  if (!e.__) {
    for (var t = X.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var i = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + i[0] + "-" + i[1]++;
  }
  return e.__;
}
function ua() {
  for (var e; (e = Kn.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(it), e.__H.__h.forEach(vr), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), re.__e(t, e.__v);
      }
}
(re.__b = function (e) {
  (X = null), rn && rn(e);
}),
  (re.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), sn && sn(e, t);
  }),
  (re.__r = function (e) {
    nn && nn(e), (Ie = 0);
    var t = (X = e.__c).__H;
    t &&
      (lr === X
        ? ((t.__h = []),
          (X.__h = []),
          t.__.forEach(function (i) {
            i.__N && (i.__ = i.__N), (i.i = i.__N = void 0);
          }))
        : (t.__h.forEach(it), t.__h.forEach(vr), (t.__h = []), (Ie = 0))),
      (lr = X);
  }),
  (re.diffed = function (e) {
    on && on(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((Kn.push(t) !== 1 && tn === re.requestAnimationFrame) ||
          ((tn = re.requestAnimationFrame) || la)(ua)),
      t.__H.__.forEach(function (i) {
        i.i && (i.__H = i.i), (i.i = void 0);
      })),
      (lr = X = null);
  }),
  (re.__c = function (e, t) {
    t.some(function (i) {
      try {
        i.__h.forEach(it),
          (i.__h = i.__h.filter(function (a) {
            return !a.__ || vr(a);
          }));
      } catch (a) {
        t.some(function (s) {
          s.__h && (s.__h = []);
        }),
          (t = []),
          re.__e(a, i.__v);
      }
    }),
      an && an(e, t);
  }),
  (re.unmount = function (e) {
    fn && fn(e);
    var t,
      i = e.__c;
    i &&
      i.__H &&
      (i.__H.__.forEach(function (a) {
        try {
          it(a);
        } catch (s) {
          t = s;
        }
      }),
      (i.__H = void 0),
      t && re.__e(t, i.__v));
  });
var un = typeof requestAnimationFrame == "function";
function la(e) {
  var t,
    i = function () {
      clearTimeout(a), un && cancelAnimationFrame(t), setTimeout(e);
    },
    a = setTimeout(i, 100);
  un && (t = requestAnimationFrame(i));
}
function it(e) {
  var t = X,
    i = e.__c;
  typeof i == "function" && ((e.__c = void 0), i()), (X = t);
}
function vr(e) {
  var t = X;
  (e.__c = e.__()), (X = t);
}
function Tr(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (i, a) {
      return i !== e[a];
    })
  );
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const ha = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        useCallback: ia,
        useContext: oa,
        useDebugValue: aa,
        useEffect: ta,
        useErrorBoundary: fa,
        useId: sa,
        useImperativeHandle: na,
        useLayoutEffect: Zn,
        useMemo: Ar,
        useReducer: Jn,
        useRef: ra,
        useState: Xn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  xa = ft(ha);
export { wa as a, xa as b, da as c, ya as j, ga as r, ba as s };
