---
name: Shopify Lido Market Plus - stato store
description: Stato completo store Shopify qvznxd-p0 (Lido Market Plus) - aggiornato 2026-03-30
type: project
---

Store: Lido Market Plus — `https://admin.shopify.com/store/qvznxd-p0/`
Theme: Sense (attivo) — ID 185887064444
Menu ID: 305697456508
GraphQL MenuUpdate: `POST https://admin.shopify.com/api/operations/9de02b386b207a3eeb5cd05f97ca230ffc7ce207546cd3fd845282627c9d5f78/MenuUpdate/shopify/qvznxd-p0`
API base: `/store/qvznxd-p0/admin/api/2024-01`
CSRF token: `JSON.parse(document.querySelector('[data-serialized-id="server-data"]').textContent).csrfToken`

## Fornitori attivi

**Tekone (68 prodotti):** ✅
- Immagini: GitHub raw `https://raw.githubusercontent.com/lidomarketsas-maker/Lido-market-images/main/Tekone/cartella%20senza%20nome/{barcode}.jpg`
- Collection ID: 683037196668

**Sunlux (263 prodotti):** ✅
- Immagini: Cloudinary `https://res.cloudinary.com/donr6pkxi/image/upload/v{version}/{barcode}_{suffix}.jpg`
- Collection ID: 683032641916
- Cloudinary: cloud=donr6pkxi, API key=381838935488195, secret=dxKH7E2Ekq31TrHNfRhDPeTvFA8

**Progress Plastic (~1112 prodotti dopo pulizia duplicati):** ✅
- Vendor: "Progress Plastic"
- Titoli reali importati da CSV fornitore `/Users/familgiahu/Downloads/prodotti_2026年3月30日_10-53.csv`
- Prezzi CSV = prezzi di acquisto → salvati in campo costo (inventory_items), NON come prezzo di vendita
- Prezzi di vendita = €0.00 (da impostare quando l'utente decide il markup)
- product_type riclassificato in 8 categorie basate su keyword del titolo

## Progress Plastic — Struttura categorie (2026-03-30)

| product_type | Collection handle | ID | Prodotti |
|---|---|---|---|
| Scatole e Contenitori | pp-scatole | 683225514364 | ~666 |
| Giardino e Piante | pp-giardino-piante | 683225612668 | ~346 |
| Pulizia e Bucato | pp-pulizia-bucato | 683225645436 | ~233 |
| Organizzatori e Cassettiere | pp-organizzatori | 683225547132 | ~200 |
| Plastica Casa (altri) | pp-altri | 683225743740 | ~401 |
| Cucina e Tavola | pp-cucina-tavola | 683225579900 | ~114 |
| Mobili e Accessori | pp-mobili | 683225710972 | ~60 |
| Milleusi e Set | pp-milleusi | 683225678204 | ~2 |
| (parent) Plastica e Casa | plastica-casa | 683193991548 | tutti PP |

Ordinamento: `alpha-asc` (A-Z per titolo) su tutte le 9 collection PP.

## Menu principale (2026-03-30)

Struttura: Home | Negozio fisico | Store online | Contatti | Certificazioni

**Negozio fisico** → in-negozio (683178819964):
- Ferramenta → ferramenta (683193958780) [10 sottocategorie: Chiavi, Viti e Bulloni, Cacciaviti, Punte e Trapani, Bussole e Attacchi, Pinze, Martelli e Asce, Seghe, Fissaggi e Tasselli, Varie Ferramenta]
- Plastica e Casa → plastica-casa (683193991548) [8 sottocategorie PP come sopra]
- Bagno e Idraulica, Pulizia e Casa, Articoli per Feste, Elettronica, Animali, Varie

Mega-menu abilitato: `menu_type_desktop: "mega"` in `sections/header-group.json`

## Features implementate

**Homepage (2026-03-26):** ✅
- `assets/custom-lido.css`: Cormorant Garamond + Urbanist, #222222/#ff9900/#ce2226
- `layout/theme.liquid`: custom-lido.css linkato
- `templates/index.json`: hero + trust bar + collection list + featured products
- Announcement bar: 4 messaggi rotanti

**Certificazioni EU badge system (2026-03-30):** ✅
- `snippets/lido-cert-badges.liquid`: badge colorati per tag `cert-*`
- Tag supportati: cert-ce, cert-rohs, cert-reach, cert-weee, cert-erp, cert-emc, cert-lvd, cert-bpa-free, cert-food-contact, cert-en71, cert-gs, cert-tuv, cert-din, cert-iso9001, cert-iso14001, cert-ecolabel, cert-recycled, cert-ip44/65/67, cert-fsc, cert-phthalate-free, cert-lfgb, cert-carbon-neutral
- `sections/main-product.liquid`: render lido-cert-badges dopo buy_buttons

**SEO, Spedizioni, Policy legali:** ✅ (configurati 2026-03-25)
- Spedizioni: Italia gratuita >€55, €7 <€55; UE: €14.99

## Tecnica import immagini (per futuri fornitori)
- CSV Shopify via DataTransfer + DragEvent su `.Polaris-DropZone`
- Checkbox "Sovrascrivi prodotti con handle corrispondenti" DEVE essere spuntata
- `PUT /inventory_items/{id}.json` con `{inventory_item: {cost: "X.XX"}}` per salvare prezzo acquisto

## Bossram — Stato immagini (2026-03-31)

- Cloudinary folder `Bossram/*`: **8385 immagini** (EAN come nome file)
- Shopify prodotti Bossram: ~5073 totali, ~1500 senza immagini
- Sync eseguito: **1 immagine aggiunta** (unico match trovato)
- **1499 prodotti senza immagine** → CSV generato: `~/Downloads/bossram_missing_images.csv`
  - Quelle immagini NON esistono su Cloudinary — vanno caricate dal fornitore
- Discrepanza: 8385 Cloudinary vs 5073 Shopify → ~3312 EAN su Cloudinary senza prodotto Shopify corrispondente

## Bossram — CSV nuovo (2026-03-31)

File: `~/Library/Mobile Documents/com~apple~CloudDocs/prodotti_2026年3月31日_00-31.csv`
- 954 prodotti totali (bolle sapone GBG, Carioca, Staedtler, giochi di carte, carta termica, ecc.)
- **846 già in Shopify** (775 con immagine, 71 senza)
- **107 da importare** in Shopify (EAN non trovati)
- Vendor confermato: **Bossram**

## Bossram — Reclassificazione collezioni (2026-03-31)

Corretti 246 prodotti con product_type sbagliato:
- **Articoli per Feste** (295→66): rimossi 229 prodotti non festivi → Varie Bossram / Prodotti Casa
- **Giardino e Irrigazione** (84→67): rimossi 17 prodotti (bilance→Prodotti Casa, campeggio→Varie Bossram)
- **Animali**: era già corretto (0 modifiche)

## Da fare (2026-03-31)

- **107 nuovi prodotti Bossram** da importare (da CSV del 31/03)
- **1499 immagini Bossram mancanti**: caricare su Cloudinary e rieseguire sync
- **Sunlux 41 prodotti** e **Tekone 4 prodotti** senza immagini — in sospeso
- **Descrizioni vuote** (~5535 prodotti): utente deve decidere se auto-generare
- **Prezzi PP**: tutti €0.00 — l'utente deve decidere il markup
- **15 fornitori nuovi**: nessun CSV ancora ricevuto
- Dominio: l'utente gestirà in autonomia

**Why:** Store B2B per grossisti europei, in costruzione.
**How to apply:** Ripartire da questo file per sapere lo stato esatto dello store.
