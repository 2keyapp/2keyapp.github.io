# 2key.app — product specification

## Overview

2key.app is a **hosted billing solution** for SaaS and app vendors that also delivers **license keys and activation entitlements** to using parties. It is offered as **multi-tenant hosted SaaS** with a **PostgreSQL** database and **Node.js** backend.

Merchants get a dedicated storefront and checkout. The platform is **subscription-first** but supports **one-time payments**.

## Brand

- **Name:** **2key.app** — shorthand for **to get** the **license key** (and entitlements) that activate software.
- **Theme:** Traditional software was unlocked with serial or license keys; 2key.app is where customers purchase access and where vendors issue keys, seats, and activation data (including signed JWT offline sync).
- **Logo:** A **license-key token** (segmented code tag with “2”), not physical door keys.

## Positioning

- Primary focus: recurring subscription billing for software and app businesses.
- Secondary: one-time purchases where needed.
- Each merchant operates an isolated tenant with its own catalog, pricing, and checkout experience.

## Core billing model

### Paying parties and using parties

Billing enforces a clear separation between:

- **Paying party** — The entity that pays (e.g. a company or organization).
- **Using party** — The entity that consumes the product or service.

One paying party can purchase subscriptions for **multiple** using parties.

### Seats

Subscriptions are sold as **seats**. The paying party buys a number of seats and may **assign any using party** to an available seat. Reassignment is supported as part of seat management.

### Anniversary billing

Each **paying party** has a single **anniversary date** that anchors recurring charges for that customer organization. Plans may be billed **monthly** or **annually** on that anniversary.

### Onboarding and anniversary alignment

When a paying party makes a **new purchase** (first subscription, additional seats, or another plan) **after** their anniversary anchor is established:

1. **Align to anniversary** — The new item is scheduled to renew on the paying party’s existing anniversary date, not a separate cycle per SKU.
2. **Initial prorated charge** — The first invoice for that purchase includes a **prorated** amount for the partial period from purchase through the next anniversary date.
3. **Regular billing afterward** — On each subsequent anniversary (monthly or annual per plan), the **full** subscription charge applies on the anniversary date.

The same alignment applies when adding seats or offerings mid-cycle: one billing calendar per paying party, with proration bridging to the next anniversary.

**Cancellations**

- Cancelling a subscription or seat **does not** trigger a **refund** of unused time in the current period.
- Access and billing treatment follow the merchant’s configured cancellation policy (e.g. active until period end); no credit for the remaining days until the anniversary.

## Catalog structure

### Products, offerings, and plans

- **Products** represent what is sold.
- A product may have one or more **Offerings**.
- Each offering may have one or more **Plans** (e.g. tiers, intervals, or packaging variants).

### Categories

- Products are organized in **hierarchical categories**.
- A single product may appear under **more than one** category.
- **Category pages** and **product pages** exist per merchant storefront.

## Payments

### Supported gateways

- **Stripe**
- **PayPal**

### Stripe flow

On Stripe, the customer completes **payment intent** (authorization/capture as appropriate). **2key billing** handles the remainder:

- Recurring charges and subscription lifecycle
- Upsell and cross-sell
- Tax calculation and application (see **Tax handling**)

PayPal follows the gateway integration model defined for the platform (orchestration remains on 2key billing).

## Tax handling

2key billing **calculates and records tax** on customer invoices at checkout and on recurring billing. Tax behavior is configured per merchant and derived from customer location.

### Calculation

- Tax is applied at **checkout** and on **recurring invoices** (subscriptions, one-time charges, and prorations where applicable).
- Tax is determined from the **paying party billing address** (country, region or state, postal code) and **merchant tax rules**.
- Merchants may configure **tax-inclusive** or **tax-exclusive** pricing for catalog and checkout display.
- Tax may be computed per line item or aggregated by rate on the invoice.

### Merchant configuration

- Tax **rates or rules** per jurisdiction.
- **Tax registration IDs** (e.g. VAT, GST/HST, EIN) shown on invoices when provided.
- Default **currency** for the tenant.

### Invoices

Customer and merchant-facing invoices include standard fields:

- **Invoice identity** — invoice number, issue date, due date (if applicable), currency.
- **Parties** — **Bill to** (paying party legal name and address); **Sold by** (merchant legal name, address, contact).
- **Line items** — description, quantity, unit price, line subtotal.
- **Tax breakdown** — named tax lines (e.g. “VAT 20%”, “Sales tax 8.25%”) with rate, taxable amount, and tax amount.
- **Totals** — subtotal excluding tax, total tax, grand total.
- **Registration IDs** — merchant tax registration numbers in the invoice footer when configured.
- **Audit trail** — jurisdiction label and rate snapshot on each invoice so historical documents remain explainable if rates change later.

### Credit notes and adjustments

Credit notes and adjustments reference the **original invoice tax lines** where applicable so reversals match what was charged.

## Client SDKs

SDKs target important **client-side frameworks**, starting with **Flutter**.

### Online sync

SDKs can **synchronize subscription details online** with the billing backend so client apps stay current while connected.

### Offline sync

For offline or air-gapped scenarios:

1. Billing generates a **signed JWT** containing subscription details available to the using party.
2. The using party obtains the JWT from the merchant **web portal**.
3. The using party **pastes the JWT** into the client application.
4. The SDK validates the signature and applies entitlements locally.

## License keys and entitlements

2key.app is where using parties **get** license keys and activation data after purchase.

- **Seats** map subscriptions to using parties; reassignment updates who may activate.
- **Online:** SDKs and APIs return current entitlements from the billing server.
- **Offline:** Signed JWTs from the merchant web portal are pasted into client apps for air-gapped activation.
- Merchants’ own Stripe/PayPal accounts charge customers; 2key orchestrates subscription state and key delivery.

## Subscription lifecycle

Beyond the first charge, 2key billing manages recurring revenue operations:

- **Renewals** on the paying party’s anniversary date (monthly or annual per plan).
- **New purchases** aligned to that anniversary with an initial prorated charge, then full charges on each anniversary (see **Onboarding and anniversary alignment**).
- **Upgrades and downgrades** with proration where applicable.
- **Cancellations** without refund of unused portions of the current period.
- **Upsell and cross-sell** for add-ons and complementary plans.
- **Credit notes and adjustments** tied to original invoice tax lines.

## Portals

### Merchant admin

The merchant **admin portal** is where vendors configure everything buyers see on the storefront and how subscriptions run after purchase.

**Catalog and pricing**

- Define a **hierarchical category tree** (parent and child categories) for the storefront.
- Create **products** and place each product in one or more categories.
- For each product, add **offerings** (e.g. Standard vs Enterprise, or regional packaging).
- Under each offering, define **plans** with price and billing interval—**monthly**, **annual**, or other supported cadences aligned to **anniversary** renewal.
- Support **tax-inclusive** or **tax-exclusive** display per merchant policy.
- Publish **category pages** and **product pages** that reflect the live catalog.

**Tax and compliance**

- Configure **tax rates or rules** by jurisdiction.
- Enter **tax registration IDs** for invoice footers.
- Set default **currency** for the tenant.

**Payment connections**

- Connect the merchant’s own **Stripe** and **PayPal** accounts for end-customer checkout (platform setup fee to 2key is separate).

**Customers and seats**

- View **paying parties** and **using parties**.
- Manage **subscriptions** and **seat** purchase, assignment, and reassignment.
- Inspect subscription status, plan, and renewal dates.

**Billing operations**

- Review **invoices**, payments, and credit notes.
- Monitor gross revenue activity relevant to platform fees (1% / monthly minimum).
- Manage **upsell**, **cross-sell**, and plan changes initiated through the billing lifecycle.

**Tenant and branding**

- Configure tenant host (default `merchant.t.2key.app` or **CNAME**).
- Adjust storefront presentation and checkout branding where supported.

### Storefront and checkout

Public catalog and payment flow on the merchant tenant (default subdomain or CNAME). Shoppers browse categories and products, select offerings and plans, and complete checkout through the merchant’s connected gateways.

### Customer self-service

Paying parties manage subscriptions and invoices; using parties obtain license keys or JWTs from the merchant web portal for app activation.

## Security and trust

- **Tenant isolation** — each request resolved by `Host` header to one merchant environment.
- **Payments** — card and PayPal data handled by Stripe and PayPal; 2key receives limited payment confirmation metadata.
- **Transport** — HTTPS for website and tenant endpoints; reasonable measures to protect stored billing data (see Privacy Policy).
- Merchants remain responsible for securing their own applications and API credentials.

## Merchant integration

Merchants connect their own products to 2key.app billing so subscription state on the platform drives access in the merchant’s software.

### Hosted SaaS

When the merchant offers a **hosted SaaS** solution, the merchant’s **backend** can **query 2key.app billing** for subscription data (e.g. seats, plans, paying and using parties, renewal status). The SaaS application uses that data to enforce entitlements and feature access.

### Client apps

When the merchant offers an **app** (mobile, desktop, or other client), the **app** can **query the billing server**—via HTTP APIs or client SDKs—for current subscription and entitlement information. Online sync uses live queries; offline scenarios use the signed JWT flow described under Client SDKs.

## Partner integrations

### Earnfluence.io

2key.app integrates with **[Earnfluence.io](https://earnfluence.io)**, a platform for influencers and marketing agencies.

Merchants using 2key.app billing can **offload part or all of marketing** to Earnfluence’s affiliate management capabilities—connecting billing, subscriptions, and affiliate-driven growth.

## Multi-tenancy and hosting

### Tenant resolution

The server resolves the merchant tenant on **every request** using the **`Host` header**.

### Default and custom URLs

- Default merchant URL pattern: `merchant.t.2key.app`
- Merchants may **CNAME** a custom host (e.g. `billing.merchant.com`) to the 2key tenant endpoint; traffic is still routed by host.

### Per-merchant experience

Each merchant has:

- Its own **storefront**
- Its own **checkout** flow
- Its own catalog (categories, products, offerings, plans)

## Platform pricing

Fees below are what **merchants pay 2key.app** to use hosted billing. They are separate from pricing merchants set for their own customers (products, offerings, plans).

### Usage fee

- **1% of gross revenue** processed through 2key.app billing.

### Monthly minimum

- **US$25 per month** when 1% of gross revenue for the period is less than $25.

### Billing cadence

- Platform billing is **monthly only** (no annual platform plan).

### Setup fee

- **US$25 setup fee**, paid **upfront** when the merchant signs up.

### Invoicing

- After the setup fee is paid, **invoices are raised on the merchant’s monthly anniversary date** each month for the greater of 1% of gross revenue or the US$25 minimum.

### Merchant signup

Merchants sign up on the marketing site (`#signup` section) with **minimum information**:

| Field | Required |
|-------|----------|
| Business name | Yes |
| Email | Yes |
| Contact name | No |

**Not collected at signup:** merchant Stripe/PayPal credentials for customer billing, tax IDs, or catalog data. Merchants connect **their own** Stripe (or PayPal) accounts during tenant onboarding after provisioning.

**Setup payment:** US$25 setup fee is paid upfront via **hosted checkout**:

- **Stripe Payment Link** — redirect with `prefilled_email` and `client_reference_id` (business name).
- **PayPal hosted checkout** — redirect with email (and business name where supported).

Placeholder payment URLs live in [`docs/assets/js/signup.js`](../docs/assets/js/signup.js) until real links are configured in Stripe and PayPal dashboards.

A future full signup app may live at `https://signup.2key.app`; the static site form is the initial flow on www.2key.app.

## Legal specifications

Published legal pages are **generated** from Markdown specs in [`specs/legal/`](legal/). Edit those files (and shared settings), then run `node scripts/build-legal.mjs` from the repository root.

| Spec | Published page |
|------|----------------|
| [`legal/privacy.md`](legal/privacy.md) | `docs/privacy.html` |
| [`legal/terms.md`](legal/terms.md) | `docs/terms.html` |
| [`legal/cookies.md`](legal/cookies.md) | `docs/cookies.html` |
| [`legal/acceptable-use.md`](legal/acceptable-use.md) | `docs/acceptable-use.html` |

Shared metadata (contact email, last updated date, disclaimers): [`legal/_shared.json`](legal/_shared.json).

Do not edit generated HTML under `docs/` by hand; changes will be overwritten on the next build. See [`legal/README.md`](legal/README.md).

## Marketing website (this repository)

This repo hosts the **public marketing site** at www.2key.app via GitHub Pages (`docs/` publish root).

**In scope here:** positioning, features, license keys, subscription lifecycle, onboarding and anniversary alignment, portals, SDK overview, integration, security, FAQ, and generated legal pages (see **Legal specifications** above).

**Out of scope here:** merchant storefront UI, checkout implementation, backend APIs, payment gateway code, Flutter SDK packages.

## Glossary

| Term | Definition |
|------|------------|
| **Paying party** | Entity responsible for payment (e.g. company, org). |
| **Using party** | Entity that uses the subscribed product or service. |
| **Seat** | A licensable unit of subscription that can be assigned to a using party. |
| **Offering** | A purchasable variant or packaging of a product. |
| **Plan** | A specific price/billing terms under an offering (e.g. monthly Pro). |
| **Anniversary date** | Single billing anchor per paying party; renewals and new purchases align to this date. |
| **Initial proration** | Partial charge from purchase until the next anniversary, before full recurring amounts apply. |
| **Tenant** | An isolated merchant environment on the hosted platform. |
| **Tax-inclusive pricing** | Catalog and checkout prices that include tax; tax amount is derived from the inclusive price. |
| **Tax registration ID** | Merchant identifier for tax authorities (e.g. VAT ID, GST number) printed on invoices. |
| **Tax jurisdiction** | Country and region (and related rules) used to select tax rates for a transaction. |
