---
name: No prices on Bossram/Shopify products
description: Never set prices when creating or importing Bossram products to Shopify
type: feedback
---

Never set prices when importing or creating Bossram products on the Lido Market Plus Shopify store.

**Why:** The store is a B2B/wholesale store where prices must NOT be visible publicly. Setting prices from CSV wholesale cost data accidentally exposed them on the website. User complained twice ("又" = again).

**How to apply:** When creating Shopify products via API (import, CSV, bulk create), always set `price: "0.00"` regardless of what the source data says. The same applies to any other vendor unless the user explicitly says to include prices.
