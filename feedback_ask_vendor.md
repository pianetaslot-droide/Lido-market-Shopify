---
name: Always ask for vendor name on CSV import
description: When importing products from CSV, always require vendor name — ask if not provided
type: feedback
---

Always ask for the vendor name before importing any CSV file with products.

**Why:** The Shopify store has multiple vendors (Bossram, Progress Plastic, Sunlux, Tekone). Future CSVs will include the vendor name, but if missing, must ask explicitly before proceeding.

**How to apply:** When the user uploads a CSV for product import, check if vendor is specified. If not, stop and ask: "Quale fornitore/vendor devo assegnare a questi prodotti?"
