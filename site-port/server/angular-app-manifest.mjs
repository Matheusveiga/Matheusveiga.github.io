
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'SitePort',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SitePort"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23798, hash: '1324eebf8cac391a49e22956c9280cc452a2c41b841e7e7f27e3614428dfbd47', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17194, hash: '47914509479830142d4664e014ce8d101690224f20cf6fd5c2f4e1f65920503b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24144, hash: '7e59e006d864aea3ec7d0c0dfc72e80ec883fcfa0640a0678d197a5cc27be1e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PYPAKSOR.css': {size: 7916, hash: 'h6ZMJhF7gB4', text: () => import('./assets-chunks/styles-PYPAKSOR_css.mjs').then(m => m.default)}
  },
};
