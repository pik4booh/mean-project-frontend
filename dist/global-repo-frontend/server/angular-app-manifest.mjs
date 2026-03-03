
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
      "chunk-L3ITIYG5.js",
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
      "chunk-L3ITIYG5.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L3ITIYG5.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/auth/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IBBF2KUA.js",
      "chunk-GPBRJD5H.js"
    ],
    "route": "/forbidden"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGOLMNSD.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/history"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGOLMNSD.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/orders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGOLMNSD.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-CGOLMNSD.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CGOLMNSD.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGOLMNSD.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/manufacturers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CGOLMNSD.js",
      "chunk-VWNUNMHQ.js",
      "chunk-GPBRJD5H.js",
      "chunk-KHTQ7TFR.js"
    ],
    "route": "/manufacturers/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4BCJP7A3.js",
      "chunk-ICXO7YLR.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js"
    ],
    "route": "/shop"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4BCJP7A3.js",
      "chunk-ICXO7YLR.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-6RW2M5OW.js",
      "chunk-5R73ZPOO.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/shop/*/dashboard"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4BCJP7A3.js",
      "chunk-ICXO7YLR.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-CND7VWWH.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/shop/*/customers"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4BCJP7A3.js",
      "chunk-ICXO7YLR.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-CG26FF6T.js"
    ],
    "route": "/shop/*/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4BCJP7A3.js",
      "chunk-ICXO7YLR.js",
      "chunk-6R3YL4W3.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-XVUP4ZLW.js"
    ],
    "route": "/shop/*/orders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4BCJP7A3.js",
      "chunk-ICXO7YLR.js",
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
      "chunk-MEX4LU2E.js",
      "chunk-ICXO7YLR.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MEX4LU2E.js",
      "chunk-ICXO7YLR.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-PBT5LGQX.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/commissions"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MEX4LU2E.js",
      "chunk-ICXO7YLR.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-VNP7MYA2.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/customers"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MEX4LU2E.js",
      "chunk-ICXO7YLR.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-PTLBOV52.js",
      "chunk-5R73ZPOO.js",
      "chunk-OQNXQUM2.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MEX4LU2E.js",
      "chunk-ICXO7YLR.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-SQH32YXK.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/shops"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MEX4LU2E.js",
      "chunk-ICXO7YLR.js",
      "chunk-KHTQ7TFR.js",
      "chunk-2DHBJV5F.js",
      "chunk-2MKX5BT7.js",
      "chunk-7UYPHPO7.js"
    ],
    "route": "/admin/categories"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MEX4LU2E.js",
      "chunk-ICXO7YLR.js",
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
    'index.csr.html': {size: 5048, hash: 'c70083cb5aa1ecf0e2baf3285fd23d019ac9761645b7cf0518a99026ec5d26b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3943, hash: 'd037534f5a52a08a2b92e9af57b6fb427076de88cc272602dc59f54de61432de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'orders/index.html': {size: 30690, hash: '18d5d2fe73f94173c54a01431c6a466722e60eb689d2cefe45f315908dea991b', text: () => import('./assets-chunks/orders_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 19634, hash: '44ff640a9eaad3fa5715aecb724b6efdeb65680bc1c32367632e467e7586cdab', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 27926, hash: '6cb97e4872b6920f7e24d6f4cb96bb0dc03f15536cccd3f889b8b4c5e35b6e99', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53444, hash: '1102b5f825a19d671ecbc68a7709dac682d2f164edd76629f25e1a0c05099477', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin/shops/index.html': {size: 31009, hash: 'f613493b8afa521e4f2d5569824c7825ba803513438b9e3e4c7d7844192e2bd8', text: () => import('./assets-chunks/admin_shops_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 29593, hash: 'da63f677f2b4bbc152de9f3bc4989cc9dc96b25337d5dfacb98dcc6b45680707', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'admin/customers/index.html': {size: 32499, hash: 'e636e4d1b23b97a756058be76b75448510a5474908a555e08a2c5e17eacc45b4', text: () => import('./assets-chunks/admin_customers_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 258, hash: '223c91a2fab1666a4c239b92d5649a31681c805984e60bd2868b0391a085ec55', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'history/index.html': {size: 31895, hash: 'a202aa6285397671bf95fd41d346fdde091a1e619ff136dc1a5fec02e1b3559b', text: () => import('./assets-chunks/history_index_html.mjs').then(m => m.default)},
    'forbidden/index.html': {size: 10312, hash: 'accdb55e4746ea00d6ada7d9ed03606e3fee9027f9bafbe9bc1bf6f7e75374d4', text: () => import('./assets-chunks/forbidden_index_html.mjs').then(m => m.default)},
    'admin/dashboard/index.html': {size: 25224, hash: '297f25a7cc54d9858e99e0dea7a81dfc93576526bfde69a0b82c19795fcc784b', text: () => import('./assets-chunks/admin_dashboard_index_html.mjs').then(m => m.default)},
    'admin/commissions/index.html': {size: 29742, hash: '4d5236d19f9670a73901085918dc507e48fb6325fd8dc882f81fd01ad978a673', text: () => import('./assets-chunks/admin_commissions_index_html.mjs').then(m => m.default)},
    'admin/categories/index.html': {size: 28283, hash: '20535d1d7e1544f935e3fcb12010d3573792785a36d7ba01161b1249fc4dc0de', text: () => import('./assets-chunks/admin_categories_index_html.mjs').then(m => m.default)},
    'manufacturers/index.html': {size: 52348, hash: '5f0ef969f680ba58bd0693a62eae2276d61b4cea5202f8ab157385997ed1c5cf', text: () => import('./assets-chunks/manufacturers_index_html.mjs').then(m => m.default)},
    'styles-32A25WWU.css': {size: 666477, hash: 'fkhDKfeOtCg', text: () => import('./assets-chunks/styles-32A25WWU_css.mjs').then(m => m.default)}
  },
};
