
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '//miguelangelr0.github.io/CocktailWeb/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/miguelangelr0.github.io/CocktailWeb/home",
    "route": "/miguelangelr0.github.io/CocktailWeb"
  },
  {
    "renderMode": 2,
    "route": "/miguelangelr0.github.io/CocktailWeb/home"
  },
  {
    "renderMode": 2,
    "route": "/miguelangelr0.github.io/CocktailWeb/cocktail/1"
  },
  {
    "renderMode": 2,
    "route": "/miguelangelr0.github.io/CocktailWeb/cocktail/2"
  },
  {
    "renderMode": 0,
    "route": "/miguelangelr0.github.io/CocktailWeb/cocktail/*"
  },
  {
    "renderMode": 2,
    "route": "/miguelangelr0.github.io/CocktailWeb/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28178, hash: '97a8af40531852fe151d55f970f0840be4dda9f5d735299b35970884b4fe9380', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17243, hash: 'f2a413d5929e36c4b8274b23876f03396c5ce6954a10f046b801ca69c7afcbeb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'miguelangelr0.github.io/CocktailWeb/home/index.html': {size: 56557, hash: 'a6abfbbc6e9d0f6d6b4e3211d5963d5d462bbc820e5e0b6c9df8954bb34530df', text: () => import('./assets-chunks/miguelangelr0_github_io_CocktailWeb_home_index_html.mjs').then(m => m.default)},
    'miguelangelr0.github.io/CocktailWeb/cocktail/1/index.html': {size: 56557, hash: '65e1551d7db689a241c96d39bb63729da7aaf84b5c134bca91d42b273cbeb91d', text: () => import('./assets-chunks/miguelangelr0_github_io_CocktailWeb_cocktail_1_index_html.mjs').then(m => m.default)},
    'miguelangelr0.github.io/CocktailWeb/cocktail/2/index.html': {size: 56557, hash: '65e1551d7db689a241c96d39bb63729da7aaf84b5c134bca91d42b273cbeb91d', text: () => import('./assets-chunks/miguelangelr0_github_io_CocktailWeb_cocktail_2_index_html.mjs').then(m => m.default)},
    'styles-XTUAYO6X.css': {size: 242902, hash: 'STWZByCccf0', text: () => import('./assets-chunks/styles-XTUAYO6X_css.mjs').then(m => m.default)}
  },
};
