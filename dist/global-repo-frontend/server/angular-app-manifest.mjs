
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC6KZU7L.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC6KZU7L.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BC6KZU7L.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-C7AHNTBM.js",
      "chunk-GPBRJD5H.js"
    ],
    "route": "/forbidden"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5XWOXWY.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/history"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5XWOXWY.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/orders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5XWOXWY.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-V5XWOXWY.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V5XWOXWY.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5XWOXWY.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/manufacturers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V5XWOXWY.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/manufacturers/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VHSRHQWS.js",
      "chunk-XNJJSQH2.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js"
    ],
    "route": "/shop"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VHSRHQWS.js",
      "chunk-XNJJSQH2.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-LISTK4FW.js",
      "chunk-XDTJSAJI.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/shop/*/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VHSRHQWS.js",
      "chunk-XNJJSQH2.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-B74VIOGH.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/shop/*/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VHSRHQWS.js",
      "chunk-XNJJSQH2.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-LTHUDMEK.js"
    ],
    "route": "/shop/*/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VHSRHQWS.js",
      "chunk-XNJJSQH2.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-ZO76TCYY.js"
    ],
    "route": "/shop/*/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VHSRHQWS.js",
      "chunk-XNJJSQH2.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js"
    ],
    "redirectTo": "/shop",
    "route": "/shop/**"
  },
  {
    "renderMode": 1,
    "redirectTo": "/shop",
    "route": "/owner"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5MK7ZTJ.js",
      "chunk-XNJJSQH2.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5MK7ZTJ.js",
      "chunk-XNJJSQH2.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-MENOF2NV.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/commissions"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5MK7ZTJ.js",
      "chunk-XNJJSQH2.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-Z5VCSRRD.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/customers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5MK7ZTJ.js",
      "chunk-XNJJSQH2.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-JUU67NPW.js",
      "chunk-XDTJSAJI.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5MK7ZTJ.js",
      "chunk-XNJJSQH2.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-A7H56JSC.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/shops"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5MK7ZTJ.js",
      "chunk-XNJJSQH2.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-PAYGR3TY.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/categories"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H5MK7ZTJ.js",
      "chunk-XNJJSQH2.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js"
    ],
    "redirectTo": "/admin/shops",
    "route": "/admin/**"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5048, hash: 'd5557fe8d27a2d5ee682b2a2f44cd3cf6e4612dc31143ffc1234a8578b56c68b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3943, hash: '8fa7488055eb5c4d7c889af4333378fbb18bcb7e20403af30c3a5e2d1d6b8d1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 19708, hash: '71d5eeec70f3ca19001aae8109296206c8150f151b05a4729508910de03aa770', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 28100, hash: '5fd0f216081b72ffa843c0dd5785afe6b9a779f4b0f26db2a939aa1e47804d61', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'orders/index.html': {size: 30786, hash: 'b0dacd63caa7d1d805b57a07bc714a5cb44ef3f161a7831dfde092a88fc2a680', text: () => import('./assets-chunks/orders_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53439, hash: '8c3631e30179ff00f794d5b7d949414677f8517cd369c01cc3c4168a6679b769', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin/shops/index.html': {size: 31088, hash: '9252eab86e23555a9c2e0bec007b68f708f48ae677aa3f1e92a7849ca46a13ed', text: () => import('./assets-chunks/admin_shops_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 258, hash: '223c91a2fab1666a4c239b92d5649a31681c805984e60bd2868b0391a085ec55', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 29737, hash: 'cdd4c9ae91c746bea2e3a170fcdd9c916903c457193ea2e9a1230e3a878a5380', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'admin/customers/index.html': {size: 32676, hash: 'f0dce44813f4b9d3b1600fff900617a907a60be77ec73ffa7a5ba222c558dae1', text: () => import('./assets-chunks/admin_customers_index_html.mjs').then(m => m.default)},
    'history/index.html': {size: 32031, hash: 'a38602764e30262e04a93cdcba0bd32093142d19d7e30cbccba4352c8b9b9e71', text: () => import('./assets-chunks/history_index_html.mjs').then(m => m.default)},
    'forbidden/index.html': {size: 10334, hash: '9a77c5148a370e07e8579ab1d107b70b014b8b4aa18f23eaf54b9c61e77686f4', text: () => import('./assets-chunks/forbidden_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 25284, hash: '014488c65fd15ed11ebb141d4e697cbbf8fb8200fb7cc8240a979d731210420f', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'admin/commissions/index.html': {size: 29826, hash: 'b3e11a25d1c8360e97017ef030cffec32cbb5c37b837979f50f21d15887d0142', text: () => import('./assets-chunks/admin_commissions_index_html.mjs').then(m => m.default)},
    'admin/categories/index.html': {size: 28339, hash: 'd3ec1aa2c11c810e54ed16273a14c85699b029e0f26f9dff7ee99c65c958dd6b', text: () => import('./assets-chunks/admin_categories_index_html.mjs').then(m => m.default)},
    'manufacturers/index.html': {size: 52242, hash: 'e7b0bfefed47b9519fba76153aead6a3691930707567133b87b03b8a759c45c3', text: () => import('./assets-chunks/manufacturers_index_html.mjs').then(m => m.default)},
    'styles-32A25WWU.css': {size: 666477, hash: 'fkhDKfeOtCg', text: () => import('./assets-chunks/styles-32A25WWU_css.mjs').then(m => m.default)}
  },
};
