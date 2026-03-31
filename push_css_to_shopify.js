/**
 * LIDO MARKET PLUS — Push custom-lido.css v2 to Shopify
 *
 * 使用方法：
 * 1. 用浏览器打开 Shopify 后台: https://admin.shopify.com/store/qvznxd-p0/
 * 2. 按 F12 打开开发者工具 → Console
 * 3. 粘贴此脚本全文，按 Enter
 *
 * Theme ID: 185887064444
 * Asset key: assets/custom-lido.css
 */

(async () => {

  const THEME_ID = '185887064444';
  const ASSET_KEY = 'assets/custom-lido.css';

  // ─── NEW CSS CONTENT ────────────────────────────────────────────────────────
  const CSS = `/* =============================================================
   LIDO MARKET PLUS — Custom UI v2.0
   Design: Apple-inspired · Minimal · Premium B2B Wholesale
   Fonts: Cormorant Garamond (display) + Urbanist (UI)
   Colors: #1d1d1f · #f5a623 · #f5f5f7 · #ffffff
   ============================================================= */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Urbanist:wght@300;400;500;600;700&display=swap');

:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-ui:      'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --c-black:      #1d1d1f;
  --c-dark:       #2d2d2f;
  --c-gray-700:   #424245;
  --c-gray-500:   #6e6e73;
  --c-gray-300:   #a1a1a6;
  --c-gray-200:   #d2d2d7;
  --c-gray-100:   #f5f5f7;
  --c-white:      #ffffff;
  --c-accent:     #f5a623;
  --c-accent-dk:  #d4891a;
  --c-red:        #cc2229;
  --radius-sm:  8px;
  --radius-md:  14px;
  --radius-lg:  22px;
  --radius-pill: 100px;
  --shadow-sm:  0 1px 4px rgba(0,0,0,0.07);
  --shadow-md:  0 6px 24px rgba(0,0,0,0.09);
  --shadow-lg:  0 24px 64px rgba(0,0,0,0.13);
  --ease:       cubic-bezier(0.4, 0, 0.2, 1);
  --trans:      all 0.25s var(--ease);
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-ui); color: var(--c-black); background: var(--c-white); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; line-height: 1.6; }
h1,h2,h3,h4,.h1,.h2,.h3,.h4 { font-family: var(--font-display); font-weight: 400; line-height: 1.15; letter-spacing: -0.01em; color: var(--c-black); }
a { text-decoration: none; color: inherit; transition: color 0.2s ease; }
::selection { background: var(--c-accent); color: var(--c-white); }
:focus-visible { outline: 2px solid var(--c-accent); outline-offset: 3px; }
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--c-gray-100); }
::-webkit-scrollbar-thumb { background: var(--c-gray-200); border-radius: var(--radius-pill); }
::-webkit-scrollbar-thumb:hover { background: var(--c-gray-300); }

/* ANNOUNCEMENT BAR */
.announcement-bar { background: var(--c-black) !important; padding: 10px 0 !important; }
.announcement-bar__message { font-family: var(--font-ui) !important; font-size: 11px !important; font-weight: 600 !important; letter-spacing: 0.1em !important; text-transform: uppercase !important; color: rgba(255,255,255,0.75) !important; }

/* HEADER */
.header-wrapper { background: rgba(255,255,255,0.88) !important; backdrop-filter: saturate(180%) blur(24px) !important; -webkit-backdrop-filter: saturate(180%) blur(24px) !important; border-bottom: 1px solid rgba(0,0,0,0.07) !important; position: sticky !important; top: 0 !important; z-index: 200 !important; transition: var(--trans) !important; }
.header { padding: 14px 40px !important; max-width: 1440px !important; margin: 0 auto !important; }
.header__heading-link,.header__heading { font-family: var(--font-display) !important; font-size: 21px !important; font-weight: 500 !important; letter-spacing: 0.06em !important; text-transform: uppercase !important; color: var(--c-black) !important; }
.header__menu-item,.header__active-menu-item { font-family: var(--font-ui) !important; font-size: 12.5px !important; font-weight: 600 !important; letter-spacing: 0.06em !important; text-transform: uppercase !important; color: var(--c-gray-700) !important; transition: color 0.2s ease !important; }
.header__menu-item:hover { color: var(--c-accent) !important; }
.header__icon { color: var(--c-black) !important; }
.header__icon:hover { color: var(--c-accent) !important; background: var(--c-gray-100) !important; border-radius: var(--radius-sm) !important; }
.cart-count-bubble { background: var(--c-accent) !important; color: var(--c-white) !important; font-family: var(--font-ui) !important; font-size: 10px !important; font-weight: 700 !important; }

/* MEGA MENU */
.mega-menu,.header__submenu { border: none !important; border-radius: var(--radius-md) !important; box-shadow: var(--shadow-lg) !important; background: var(--c-white) !important; padding: 28px 32px !important; top: calc(100% + 10px) !important; }
.mega-menu__link,.header__submenu-item { font-family: var(--font-ui) !important; font-size: 13px !important; font-weight: 500 !important; color: var(--c-gray-700) !important; padding: 6px 0 !important; transition: color 0.2s ease !important; display: block !important; }
.mega-menu__link:hover { color: var(--c-accent) !important; }
.mega-menu__heading { font-family: var(--font-ui) !important; font-size: 10px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase !important; color: var(--c-gray-300) !important; margin-bottom: 10px !important; }

/* HERO BANNER */
.banner { min-height: 82vh !important; display: flex !important; align-items: center !important; }
.banner__media img,.banner__media video { object-fit: cover !important; filter: brightness(0.58) !important; }
.banner__box { background: transparent !important; border: none !important; box-shadow: none !important; max-width: 680px !important; padding: 48px !important; }
.banner__heading { font-family: var(--font-display) !important; font-size: clamp(44px, 6vw, 88px) !important; font-weight: 300 !important; line-height: 1.05 !important; letter-spacing: -0.025em !important; color: var(--c-white) !important; margin-bottom: 20px !important; }
.banner__subheading,.banner p { font-family: var(--font-ui) !important; font-size: 17px !important; font-weight: 400 !important; color: rgba(255,255,255,0.78) !important; line-height: 1.65 !important; margin-bottom: 40px !important; }
.banner .button { background: var(--c-white) !important; color: var(--c-black) !important; border-radius: var(--radius-pill) !important; font-family: var(--font-ui) !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.07em !important; text-transform: uppercase !important; padding: 15px 38px !important; border: none !important; transition: var(--trans) !important; }
.banner .button:hover { background: var(--c-accent) !important; color: var(--c-white) !important; transform: translateY(-2px) !important; box-shadow: var(--shadow-md) !important; }

/* BUTTONS */
.button,.button--primary,button[type="submit"] { font-family: var(--font-ui) !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.07em !important; text-transform: uppercase !important; padding: 14px 34px !important; border-radius: var(--radius-pill) !important; border: none !important; cursor: pointer !important; transition: var(--trans) !important; background: var(--c-black) !important; color: var(--c-white) !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important; }
.button:hover,.button--primary:hover { background: var(--c-gray-700) !important; transform: translateY(-1px) !important; box-shadow: var(--shadow-md) !important; }
.button--secondary { background: transparent !important; color: var(--c-black) !important; border: 1.5px solid var(--c-gray-200) !important; }
.button--secondary:hover { border-color: var(--c-black) !important; background: var(--c-gray-100) !important; transform: none !important; box-shadow: none !important; }

/* SECTION TITLES */
.collection-list__title,.featured-collection__title,.section-header__heading,.title-wrapper__title,.title { font-family: var(--font-display) !important; font-size: clamp(30px, 4vw, 52px) !important; font-weight: 300 !important; letter-spacing: -0.015em !important; color: var(--c-black) !important; line-height: 1.15 !important; }
.section-header__description,.title-wrapper__description,.subtitle { font-family: var(--font-ui) !important; font-size: 16px !important; color: var(--c-gray-500) !important; max-width: 580px !important; line-height: 1.7 !important; margin-top: 10px !important; }
.section { padding-top: 72px !important; padding-bottom: 72px !important; }

/* CARDS */
.card-wrapper { border-radius: var(--radius-md) !important; overflow: hidden !important; transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease) !important; }
.card-wrapper:hover { transform: translateY(-5px) !important; box-shadow: var(--shadow-lg) !important; }
.card { border: none !important; background: var(--c-gray-100) !important; border-radius: var(--radius-md) !important; overflow: hidden !important; box-shadow: none !important; }
.card__media,.card__image-wrapper { background: var(--c-gray-100) !important; overflow: hidden !important; aspect-ratio: 1 / 1 !important; }
.card__media img,.card__image-wrapper img { width: 100% !important; height: 100% !important; object-fit: cover !important; transition: transform 0.55s var(--ease) !important; }
.card-wrapper:hover .card__media img,.card-wrapper:hover .card__image-wrapper img { transform: scale(1.05) !important; }
.card__information { padding: 16px 18px 20px !important; background: var(--c-white) !important; }
.card__heading { font-family: var(--font-ui) !important; font-size: 13.5px !important; font-weight: 600 !important; letter-spacing: 0.01em !important; color: var(--c-black) !important; line-height: 1.4 !important; margin-bottom: 5px !important; }
.card__heading a { color: inherit !important; }
.card-information__subtitle,.card__vendor { font-family: var(--font-ui) !important; font-size: 11px !important; font-weight: 600 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; color: var(--c-gray-300) !important; }
.price { font-family: var(--font-ui) !important; font-size: 13px !important; font-weight: 500 !important; color: var(--c-gray-500) !important; }

/* COLLECTION LIST */
.collection-list-section { padding: 80px 0 !important; background: var(--c-white) !important; }
.collection-list { gap: 18px !important; }
.collection-list .card { min-height: 300px !important; position: relative !important; }
.collection-list .card__heading { font-family: var(--font-display) !important; font-size: 24px !important; font-weight: 400 !important; color: var(--c-white) !important; }

/* FEATURED COLLECTION */
.featured-collection { background: var(--c-white) !important; padding: 72px 0 !important; }
.product-grid { gap: 20px !important; }

/* TRUST BAR */
.lido-trust-bar,.trust-bar { background: var(--c-gray-100) !important; padding: 44px 0 !important; border-top: 1px solid var(--c-gray-200) !important; border-bottom: 1px solid var(--c-gray-200) !important; }
.trust-bar__item { text-align: center !important; }
.trust-bar__icon { color: var(--c-accent) !important; width: 30px !important; height: 30px !important; margin-bottom: 14px !important; }
.trust-bar__title { font-family: var(--font-ui) !important; font-size: 12px !important; font-weight: 700 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; color: var(--c-black) !important; }
.trust-bar__text { font-size: 12px !important; color: var(--c-gray-500) !important; margin-top: 4px !important; }

/* RICH TEXT */
.rich-text { padding: 80px 40px !important; text-align: center !important; max-width: 740px !important; margin: 0 auto !important; }
.rich-text__heading { font-family: var(--font-display) !important; font-size: clamp(32px, 4vw, 58px) !important; font-weight: 300 !important; letter-spacing: -0.02em !important; margin-bottom: 20px !important; }
.rich-text__text { font-size: 16px !important; color: var(--c-gray-500) !important; line-height: 1.75 !important; }

/* IMAGE WITH TEXT */
.image-with-text { overflow: hidden !important; border-radius: var(--radius-lg) !important; }
.image-with-text__image-cell img { border-radius: var(--radius-md) !important; object-fit: cover !important; }
.image-with-text__content { padding: 48px !important; }
.image-with-text__heading { font-family: var(--font-display) !important; font-size: clamp(28px, 3vw, 44px) !important; font-weight: 300 !important; margin-bottom: 18px !important; }
.image-with-text__text { font-size: 16px !important; color: var(--c-gray-500) !important; line-height: 1.75 !important; }

/* COLLECTION PAGE */
.collection-hero { padding: 64px 40px !important; background: var(--c-gray-100) !important; }
.collection-hero__title { font-family: var(--font-display) !important; font-size: clamp(38px, 5vw, 68px) !important; font-weight: 300 !important; letter-spacing: -0.02em !important; color: var(--c-black) !important; }
.collection-hero__description { font-size: 16px !important; color: var(--c-gray-500) !important; max-width: 560px !important; margin-top: 12px !important; }
.facets__summary,.facets-horizontal__label,.facet-filters__summary { font-family: var(--font-ui) !important; font-size: 12.5px !important; font-weight: 600 !important; letter-spacing: 0.05em !important; color: var(--c-black) !important; }
.facets__disclosure-horizontal,.facet-filters__field { border-color: var(--c-gray-200) !important; border-radius: var(--radius-sm) !important; }

/* PRODUCT PAGE */
.product__title { font-family: var(--font-display) !important; font-size: clamp(28px, 3.5vw, 44px) !important; font-weight: 400 !important; letter-spacing: -0.01em !important; margin-bottom: 10px !important; }
.product__vendor { font-family: var(--font-ui) !important; font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase !important; color: var(--c-gray-500) !important; margin-bottom: 18px !important; display: block !important; }
.product__description { font-size: 15px !important; line-height: 1.75 !important; color: var(--c-gray-700) !important; }
.product-form__submit { border-radius: var(--radius-pill) !important; padding: 16px 42px !important; font-family: var(--font-ui) !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.07em !important; text-transform: uppercase !important; background: var(--c-black) !important; color: var(--c-white) !important; transition: var(--trans) !important; border: none !important; }
.product-form__submit:hover { background: var(--c-accent) !important; transform: translateY(-1px) !important; box-shadow: var(--shadow-md) !important; }
.product__media-list .thumbnail { border-radius: var(--radius-sm) !important; border: 2px solid transparent !important; transition: border-color 0.2s ease !important; overflow: hidden !important; }
.product__media-list .thumbnail.is-active,.product__media-list .thumbnail:hover { border-color: var(--c-accent) !important; }

/* CERT BADGES */
.lido-cert-badges { display: flex !important; flex-wrap: wrap !important; gap: 7px !important; margin-top: 20px !important; }
.lido-cert-badge { font-family: var(--font-ui) !important; font-size: 10.5px !important; font-weight: 700 !important; letter-spacing: 0.07em !important; text-transform: uppercase !important; padding: 4px 11px !important; border-radius: var(--radius-pill) !important; border: 1.5px solid var(--c-gray-200) !important; color: var(--c-gray-700) !important; background: var(--c-white) !important; transition: var(--trans) !important; }
.lido-cert-badge:hover { border-color: var(--c-accent) !important; color: var(--c-accent) !important; }

/* BREADCRUMBS */
.breadcrumbs { font-family: var(--font-ui) !important; font-size: 12px !important; color: var(--c-gray-300) !important; }
.breadcrumbs a { color: var(--c-gray-500) !important; }
.breadcrumbs a:hover { color: var(--c-black) !important; }

/* PAGINATION */
.pagination__item { border-radius: var(--radius-sm) !important; font-family: var(--font-ui) !important; font-size: 13px !important; font-weight: 600 !important; min-width: 36px !important; height: 36px !important; transition: var(--trans) !important; }
.pagination__item--current { background: var(--c-black) !important; color: var(--c-white) !important; }
.pagination__item:hover:not(.pagination__item--current) { background: var(--c-gray-100) !important; }

/* SEARCH */
.search__input,.predictive-search__input { border-radius: var(--radius-md) !important; border: 1.5px solid var(--c-gray-200) !important; font-family: var(--font-ui) !important; font-size: 15px !important; transition: border-color 0.2s ease !important; }
.search__input:focus { border-color: var(--c-black) !important; outline: none !important; }
.predictive-search { border-radius: var(--radius-md) !important; box-shadow: var(--shadow-lg) !important; border: none !important; }
.predictive-search__item { font-family: var(--font-ui) !important; font-size: 14px !important; padding: 12px 20px !important; }
.predictive-search__item:hover { background: var(--c-gray-100) !important; }

/* CART */
.cart__checkout-button { border-radius: var(--radius-pill) !important; background: var(--c-black) !important; font-family: var(--font-ui) !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; padding: 16px 32px !important; transition: var(--trans) !important; border: none !important; }
.cart__checkout-button:hover { background: var(--c-accent) !important; transform: translateY(-1px) !important; box-shadow: var(--shadow-md) !important; }
.cart-item__name { font-family: var(--font-ui) !important; font-size: 14px !important; font-weight: 600 !important; }
.cart-item__details { font-size: 12px !important; color: var(--c-gray-500) !important; }
.quantity__input { border-radius: var(--radius-sm) !important; border: 1.5px solid var(--c-gray-200) !important; font-family: var(--font-ui) !important; font-weight: 600 !important; }

/* BADGES */
.badge { border-radius: var(--radius-pill) !important; font-family: var(--font-ui) !important; font-size: 10px !important; font-weight: 700 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; padding: 3px 9px !important; }
.badge--sale,.badge--on-sale { background: var(--c-accent) !important; color: var(--c-white) !important; }
.badge--new { background: var(--c-black) !important; color: var(--c-white) !important; }

/* DRAWER */
.cart-drawer,.drawer { border-radius: var(--radius-lg) var(--radius-lg) 0 0 !important; }
.cart-drawer__header,.drawer__header { border-bottom: 1px solid var(--c-gray-100) !important; padding: 20px 24px !important; }
.cart-drawer__heading,.drawer__heading { font-family: var(--font-display) !important; font-size: 22px !important; font-weight: 400 !important; }

/* FOOTER */
footer.footer { background: var(--c-black) !important; color: rgba(255,255,255,0.55) !important; padding: 80px 0 40px !important; border-top: none !important; }
.footer__content-top { padding-bottom: 48px !important; border-bottom: 1px solid rgba(255,255,255,0.08) !important; }
.footer__heading { font-family: var(--font-ui) !important; font-size: 10px !important; font-weight: 700 !important; letter-spacing: 0.14em !important; text-transform: uppercase !important; color: rgba(255,255,255,0.9) !important; margin-bottom: 18px !important; }
.footer__list-item a,.footer-block__details-content a { font-family: var(--font-ui) !important; font-size: 13px !important; color: rgba(255,255,255,0.5) !important; text-decoration: none !important; line-height: 2.2 !important; transition: color 0.2s ease !important; }
.footer__list-item a:hover { color: rgba(255,255,255,0.9) !important; }
.footer__copyright { font-family: var(--font-ui) !important; font-size: 11px !important; color: rgba(255,255,255,0.28) !important; padding-top: 28px !important; }
.footer__social-link { opacity: 0.5 !important; transition: opacity 0.2s !important; }
.footer__social-link:hover { opacity: 1 !important; }

/* FORMS */
.field__input,.select__select,textarea,input[type="email"],input[type="text"],input[type="tel"] { border-radius: var(--radius-sm) !important; border: 1.5px solid var(--c-gray-200) !important; font-family: var(--font-ui) !important; font-size: 14px !important; color: var(--c-black) !important; transition: border-color 0.2s ease !important; padding: 12px 16px !important; }
.field__input:focus,.select__select:focus,textarea:focus { border-color: var(--c-black) !important; outline: none !important; box-shadow: 0 0 0 3px rgba(29,29,31,0.07) !important; }
.field__label { font-family: var(--font-ui) !important; font-size: 11px !important; font-weight: 700 !important; letter-spacing: 0.08em !important; text-transform: uppercase !important; color: var(--c-gray-500) !important; }

/* RESPONSIVE */
@media (max-width: 989px) {
  .header { padding: 12px 24px !important; }
  .banner__box { padding: 32px 28px !important; max-width: 100% !important; }
  .banner__heading { font-size: clamp(36px, 9vw, 62px) !important; }
  .image-with-text__content { padding: 32px !important; }
}
@media (max-width: 749px) {
  .header { padding: 12px 16px !important; }
  .header__heading-link { font-size: 18px !important; }
  .card__information { padding: 12px 14px 16px !important; }
  .collection-hero { padding: 40px 20px !important; }
  .rich-text { padding: 48px 24px !important; }
  footer.footer { padding: 56px 0 32px !important; }
  .section { padding-top: 48px !important; padding-bottom: 48px !important; }
}`;
  // ────────────────────────────────────────────────────────────────────────────

  // Get CSRF token from Shopify admin page
  let csrfToken;
  try {
    const serverData = document.querySelector('[data-serialized-id="server-data"]');
    if (serverData) {
      csrfToken = JSON.parse(serverData.textContent).csrfToken;
    }
  } catch(e) {}

  // Build request headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  if (csrfToken) headers['X-CSRF-Token'] = csrfToken;

  console.log('📤 Pushing custom-lido.css v2 to Shopify...');
  console.log(`   Theme ID: ${THEME_ID}`);
  console.log(`   Asset: ${ASSET_KEY}`);

  try {
    const res = await fetch(`/admin/api/2024-01/themes/${THEME_ID}/assets.json`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        asset: {
          key: ASSET_KEY,
          value: CSS
        }
      })
    });

    const data = await res.json();

    if (res.ok && data.asset) {
      console.log('✅ SUCCESS! custom-lido.css v2 aggiornato.');
      console.log(`   Size: ${(data.asset.size / 1024).toFixed(1)} KB`);
      console.log(`   Updated: ${data.asset.updated_at}`);
      console.log('');
      console.log('🔗 Anteprima: https://qvznxd-p0.myshopify.com');
    } else {
      console.error('❌ Errore risposta:', data);
    }
  } catch(err) {
    console.error('❌ Fetch error:', err.message);
  }

})();
