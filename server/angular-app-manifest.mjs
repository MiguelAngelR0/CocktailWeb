
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28178, hash: '117efc38bcc3234b52a554f8ddfdfa927b760371cef0a19b70eca7f7eaede3e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17243, hash: '7820d44c86464f8fd4ea25465929ce1c88114c17f669cf9b72250075c4a7b286', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'miguelangelr0.github.io/CocktailWeb/home/index.html': {size: 56096, hash: '2deb42eb674f3d1c0dd3551f62af4b0966c5668c2870c9ff83acb0fa4a61faeb', text: () => import('./assets-chunks/miguelangelr0_github_io_CocktailWeb_home_index_html.mjs').then(m => m.default)},
    'miguelangelr0.github.io/CocktailWeb/cocktail/1/index.html': {size: 56096, hash: 'e93c2daa81616409599c0997ee7a67c56649c4e17f46ab201581ec0537cad82f', text: () => import('./assets-chunks/miguelangelr0_github_io_CocktailWeb_cocktail_1_index_html.mjs').then(m => m.default)},
    'miguelangelr0.github.io/CocktailWeb/cocktail/2/index.html': {size: 56096, hash: 'e93c2daa81616409599c0997ee7a67c56649c4e17f46ab201581ec0537cad82f', text: () => import('./assets-chunks/miguelangelr0_github_io_CocktailWeb_cocktail_2_index_html.mjs').then(m => m.default)},
    'styles-XTUAYO6X.css': {size: 242902, hash: 'STWZByCccf0', text: () => import('./assets-chunks/styles-XTUAYO6X_css.mjs').then(m => m.default)}
  },
};
