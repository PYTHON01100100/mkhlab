# Saudi Arabian E-Commerce, Logistics, Delivery & Marketplace APIs

Deep research conducted March 26, 2026.

---

## 1. Noon -- Marketplace Seller/Partner API

| Field | Details |
|-------|---------|
| **API Name** | Noon Marketplace Partner API |
| **What it does** | Full marketplace integration: manage products/catalog, orders, fulfillment (FBN & FBP), and seller operations on Noon's marketplace |
| **Docs URL** | https://noon-docs.noonpartners.dev/ |
| **Auth** | JWT-based. Create a service account in Noon Partner Portal (User & Access > Project users > +Add new > Service account). Generate JWT tokens from service account credentials |
| **Base URLs** | Not publicly listed on landing page; accessible after authentication via partner portal |
| **API Domains** | Orders, Products, Fulfillment |
| **Pricing** | No public API pricing; requires active Noon seller account |
| **Access Requirements** | Active Noon seller account, Partner ID, GCP account (format: `name@p123456.idp.noon.partners`). Contact Noon commercial representative for API access |
| **Support** | https://support.noon.partners/ |

**Noon Payments API** (separate product):
- **Docs**: https://docs.noonpayments.com/
- **Production**: `https://api.noonpayments.com/payment/v1/`
- **Sandbox**: `https://api-test.noonpayments.com/payment/v1/`
- **Capacity**: Up to 200 TPS, PCI-DSS compliant
- **Postman**: https://www.postman.com/interstellar-zodiac-744027/documentation/2555121

---

## 2. Jarir -- No Public API

| Field | Details |
|-------|---------|
| **API Name** | None found |
| **What it does** | N/A |
| **Docs URL** | None publicly available |
| **Status** | Jarir does not offer a public developer API. Their e-commerce site runs on Magento with ERP integration (Solr search). No affiliate or seller API exists |
| **Contact** | digital@jarir.com for technical inquiries |
| **Note** | Jarir is a retailer, not a marketplace platform. They sell through their own site and Amazon.sa |

---

## 3. Salla -- E-Commerce Platform APIs

| Field | Details |
|-------|---------|
| **API Name** | Salla Merchant API, Apps API, Shipping & Fulfillment API, Twilight SDK |
| **What it does** | Full e-commerce store management: products, orders, customers, shipments, inventory, abandoned carts, webhooks, and more. Saudi Arabia's largest e-commerce platform (60,000+ stores) |
| **Docs URL** | https://docs.salla.dev/ |
| **Developer Portal** | https://salla.dev/ |
| **Base URL** | `https://api.salla.dev/admin/v2` |
| **Auth** | OAuth 2.0 with scope-based permissions. Access tokens valid 14 days, refresh tokens valid 1 month. Header: `Authorization: Bearer <ACCESS_TOKEN>` |
| **Rate Limits** | Plan-dependent (60/120/180 requests per minute). Leaky bucket algorithm. Customers endpoint: 500 requests per 10 minutes |
| **Pricing** | API access included with Salla store plans. App developers publish to Salla App Store (https://apps.salla.sa/) |
| **Access Requirements** | Register as developer at salla.dev, create OAuth app, get Client ID/Secret |
| **Key Endpoints** | Products, Orders, Customers, Shipments, Abandoned Carts, Webhooks, Order Invoices, Order Items |
| **SDKs/Libraries** | Twilight JS SDK for storefront; OAuth2 merchant library on GitHub (https://github.com/SallaApp/oauth2-merchant) |
| **Support** | support@salla.dev, Telegram: @salladev |
| **GitHub** | https://github.com/sallaapp |

---

## 4. Zid -- E-Commerce Platform APIs

| Field | Details |
|-------|---------|
| **API Name** | Zid Merchant API |
| **What it does** | Manage online store data: orders, products, inventories, shipping, marketing, customers, webhooks, app scripts, store settings, countries/cities |
| **Docs URL** | https://docs.zid.sa/ |
| **Developer Portal** | https://developers.zid.sa/ |
| **Partner Dashboard** | https://partner.zid.sa/ |
| **Auth** | OAuth 2.0 (Authorization Code Grant). OAuth base URL: `https://oauth.zid.sa`. Store Client ID (`ZID_CLIENT_ID`) and Client Secret (`ZID_CLIENT_SECRET`) in env |
| **Pricing** | Free for partner developers. Revenue share model for paid apps on Zid App Market |
| **Access Requirements** | Register partner account at partner.zid.sa. Create app, configure redirect URLs, select scopes. Merchant must have Professional/Enterprise plan or activate API Access for private apps |
| **Key Endpoints** | Orders (incl. reverse orders, abandoned carts), Products (variants, settings), Inventories, Shipping, Marketing, Customers, Store Settings, Webhooks, App Scripts |
| **Support** | Chat widget, email, Slack community |
| **GitHub** | https://github.com/zidsa |
| **Sample App** | https://github.com/zidsa/express-sample-app |

---

## 5. SMSA Express -- Shipping/Tracking API

| Field | Details |
|-------|---------|
| **API Name** | SMSA eCommerce Web Service (SECOM) |
| **What it does** | Create shipments, track packages, get shipping charges, print AWB labels (PDF), cancel shipments, manage retail locations |
| **Docs URL** | http://track.smsaexpress.com/SECOM/SMSAwebService.asmx (WSDL self-documenting) |
| **Protocol** | SOAP (Simple Object Access Protocol) over HTTPS |
| **Auth** | `passKey` parameter required on all methods. Obtain from SMSA Express account manager (email: fsaid@smsaexpress.com) |
| **International Endpoint** | http://track.smsaexpress.com/SECOM/SMSAwebServiceIntl.asmx |
| **Pricing** | Based on shipping agreement with SMSA |
| **Access Requirements** | Valid SMSA business account + passKey from SMSA |

**Available SOAP Operations** (25 methods):
- `addShip` / `addShipMPS` / `addShipPDF` / `addShipment` / `addShipmentDelv` -- Create shipments
- `cancelShipment` -- Cancel by AWB number
- `getStatus` / `getStatusByRef` -- Current shipment status
- `getTrack` / `getTracking` / `getTrackingByRef` / `getTrackingwithRef` -- Full tracking history
- `getShipCharges` -- Calculate shipping charges
- `getShipUpdates` / `getShipmentUpdates` -- Bulk shipment updates
- `getPDF` / `getPDFBr` / `getPDFSino` -- AWB label PDFs
- `getDeliveredShipments` -- Delivered shipments by date range
- `getAllRetails` / `getAllRetailsTiming` / `getRTLCities` / `getRTLRetails` / `getRTLRetailsTiming` -- Retail location data
- `stoShipment` -- Ship to Origin (return)

**Community Libraries**: PHP SDK (https://github.com/alhoqbani/smsa-webservice), Magento 2 extension on Adobe Commerce Marketplace

---

## 6. Aramex -- Shipping APIs

| Field | Details |
|-------|---------|
| **API Name** | Aramex Shipping Services API, Rate Calculator API, Shipments Tracking API, Shipment Preparation API |
| **What it does** | Create shipments, print labels, request pickups, calculate rates, track shipments in real time |
| **Developer Center** | https://www.aramex.com/us/en/developers-solution-center |
| **Docs (PDFs)** | Shipping: https://www.aramex.com/content/uploads/109/232/42194/shipping-services-api-manual.pdf -- Tracking: https://www.aramex.com/content/uploads/109/232/42008/shipments-tracking-api-manual.pdf -- Preparation: https://www.aramex.com/content/uploads/109/232/42024/shipments-preparation-api-manual.pdf |
| **Protocol** | SOAP over HTTPS. SSL certificate required for test environment |
| **Auth** | Account credentials: Account Number, Username, Password, Account Pin, Account Entity. Separate sandbox and production credential sets |
| **Pricing** | Based on Aramex shipping agreement. API access is free with an active account |
| **Access Requirements** | Contact Aramex sales representative. Request sandbox and production credentials. Import SSL certificate for testing |
| **Coverage** | Global; major presence in KSA, UAE, and MENA |
| **Note** | Also offers Shipmate tool for institutions with security restrictions |

---

## 7. Naqel Express -- Shipping/Tracking API

| Field | Details |
|-------|---------|
| **API Name** | NAQEL Shipping API |
| **What it does** | Create waybills, book pickups, cancel shipments, track packages. System-to-system shipping integration |
| **Docs URL** | https://naqelexpress.com/en/About/NaqelAPIs (overview + downloadable docs) -- Full PDF: https://www.naqelexpress.com/ar/sa/pdfs/naqel-api-documentation/ |
| **Protocol** | SOAP over HTTPS |
| **Auth** | Credentials provided by Naqel account manager |
| **Pricing** | Based on shipping agreement |
| **Access Requirements** | Active Naqel business account. Contact care@naqel.com.sa or call 8002464444 |
| **E-commerce Plugins** | Shopify, Magento, OpenCart, WooCommerce plugins available |
| **PHP SDK** | https://github.com/naqel/naqel-php |
| **Key Operations** | Request waybill numbers, create bookings/pickups, cancel waybills, manage consignee data, commercial invoice data for international shipments |
| **Support Hours** | 8:00 AM - 8:00 PM (Sat-Thu) |

---

## 8. J&T Express Saudi Arabia -- Shipping API

| Field | Details |
|-------|---------|
| **API Name** | J&T Express API Integration Platform |
| **What it does** | Place orders (generate waybills), track shipments, check tariffs/rates, cancel orders |
| **Docs URL** | https://developer.jet.co.id/documentation |
| **Developer Portal** | https://developer.jet.co.id/ |
| **Auth** | Signature-based: concatenate `data_param` + `key`, then MD5 + Base64. Username and API key provided via client dashboard |
| **Pricing** | Based on shipping agreement with J&T |
| **Access Requirements** | Cooperation agreement with J&T Express. Contact J&T head office or agent. Integration follows: Agreement > Test API > Mapping > Production API |
| **Available APIs** | Order API, Track API, Tariff Check API, Cancel Order API |
| **KSA Contact** | sales@jtexpress.sa.com or https://www.jtexpress.me/KSA/contact-us |
| **Note** | Developer portal (developer.jet.co.id) is Indonesia-centric. For KSA-specific endpoints, contact J&T Express Middle East directly |

---

## 9. Fetchr -- Delivery APIs (DEFUNCT)

| Field | Details |
|-------|---------|
| **API Name** | N/A |
| **Status** | **DEFUNCT / INSOLVENT**. Fetchr became insolvent and faced liquidation following a substantial tax dispute in Saudi Arabia. The consumer tracking portal is largely non-functional |
| **What it was** | GPS-based delivery using phone location (no formal street address needed). Operated in UAE, KSA (Riyadh, Jeddah, Dammam) |
| **Note** | Any existing API documentation is archived and no longer maintained. Do not build integrations against Fetchr |

---

## 10. Mrsool -- Delivery APIs

| Field | Details |
|-------|---------|
| **API Name** | Mrsool Partner/Merchant Integration API |
| **What it does** | Restaurant/merchant order integration, menu synchronization, delivery tracking. B2B service connects to POS systems |
| **Docs URL** | No public developer documentation found |
| **Access** | Integration available through POS partners (Foodics, Restroworks) or direct B2B contact |
| **Auth** | Credentials provided on partnership basis |
| **Pricing** | Commission-based per partnership agreement |
| **Access Requirements** | Contact Mrsool business team directly. Integration primarily via POS middleware, not a self-service API |
| **GitHub** | https://github.com/mrsool (48 repositories, but no public API docs) |
| **Coverage** | Saudi Arabia and Egypt, 1M+ monthly active users |
| **Note** | Mrsool does not appear to offer a public self-service developer API. Integration is B2B/partnership-driven |

---

## 11. HungerStation -- Restaurant/Food APIs

| Field | Details |
|-------|---------|
| **API Name** | HungerStation Partner API (powered by Delivery Hero) |
| **What it does** | Order management (receive/modify/cancel orders in real-time), catalog/assortment management (sync product status, pricing, availability), promotion management (strikethrough discounts, bundles) |
| **Docs URL** | https://developer.hungerstation.com/ |
| **Delivery Hero Docs** | https://developers.deliveryhero.com/documentation/qc-API-integration.html |
| **Auth** | Single "Partner API" token accessible via Vendor Portal (Shops Integrations page). Token works for both Assortment API and Order Transmission API |
| **Integration Types** | Partner API (real-time, requires dev resources) or SFTP (file-based CSV, minimal setup) |
| **API Categories** | Catalog (Partner API or SFTP), Orders - Partner Picking or Pelican Picking (Partner API), Promotions (Partner API or SFTP) |
| **Pricing** | Commission-based per vendor agreement |
| **Access Requirements** | Register as vendor partner. Get credentials from HungerStation/Delivery Hero Vendor Portal |
| **Error Handling** | Exponential backoff required (min 10 retries, max 32s backoff) |

---

## 12. Jahez -- Food Delivery APIs

| Field | Details |
|-------|---------|
| **API Name** | Jahez Integration API |
| **What it does** | Menu synchronization (categories, modifiers, products), order management (receive orders, send updates), POS integration |
| **Integration Portal** | https://integration-portal.jahez.net/ |
| **Docs URL** | Portal is JS-rendered; no static API docs publicly indexed |
| **Auth** | Secret Code + API-key per restaurant. Request via email to integration@jahez.net |
| **Pricing** | Commission-based per restaurant agreement |
| **Access Requirements** | Active Jahez restaurant account. Email integration@jahez.net requesting credentials. Mention merchant portal username and registered brand name |
| **POS Partners** | Foodics, Deliverect, Restroworks, Foodstack (pre-built integrations) |
| **Coverage** | 54+ cities across Saudi Arabia |
| **Parent Company** | Jahez International Company for Information Systems Technology (publicly listed on Tadawul) |

---

## 13. ToYou -- Last-Mile Delivery APIs

| Field | Details |
|-------|---------|
| **API Name** | ToYou Merchant Integration API |
| **What it does** | Menu sync from POS to ToYou (categories, modifiers, products), receive and manage orders |
| **Docs URL** | No public API documentation found |
| **Auth** | API username & password provided per merchant. Request via integration@toyou.io |
| **Pricing** | Commission-based per merchant agreement |
| **Access Requirements** | Active ToYou merchant account. Email integration@toyou.io with your merchant portal username and brand name |
| **POS Partners** | Foodics integration available |
| **Coverage** | 60+ cities, 27,000+ merchants in Saudi Arabia |
| **Developer** | AramMeem LLC, Riyadh |
| **Note** | No self-service developer portal. Integration is partnership-based |

---

## 14. BARQ -- Fleet Management/Delivery APIs

| Field | Details |
|-------|---------|
| **API Name** | BARQ Fleet Merchants API |
| **What it does** | Hyperlocal delivery automation: create orders, track deliveries, receive webhook updates. 15-minute to same-day delivery |
| **Docs URL** | Postman: https://documenter.getpostman.com/view/192710/SVYqNyhW -- Apiary: https://barqfleet.docs.apiary.io/ -- Postman Workspace: https://www.postman.com/barqapp/workspace/barqapp-documentation/overview |
| **Base URLs** | Staging: `https://staging.barqfleet.com` -- Production: `https://live.barqfleet.com` |
| **Auth** | Bearer token in Authorization header. Token provided by BARQ account manager |
| **Webhooks** | POST updates with order ID, OTP codes, status, courier details |
| **Headers** | `Authorization: YOUR_TOKEN`, `Language: ar` or `en` |
| **Pricing** | Per-delivery pricing based on agreement |
| **Access Requirements** | Contact BARQ business team. Get API URL and Authorization Key from Account Manager |
| **Magento Plugin** | https://github.com/barqfleet/Magento-BARQFleet |
| **Coverage** | Major Saudi cities; 2-hour delivery in prominent cities |

---

## 15. Sary -- B2B Marketplace APIs

| Field | Details |
|-------|---------|
| **API Name** | None publicly documented |
| **What it does** | B2B wholesale marketplace connecting small businesses (baqalas, restaurants, cafes, hotels) with FMCG wholesalers |
| **Docs URL** | No public API documentation found |
| **Status** | Sary does not appear to offer a public developer API or integration platform |
| **Access Requirements** | N/A. For B2B integration inquiries, contact Sary directly via sary.com |
| **Coverage** | Saudi Arabia and Egypt |
| **Note** | Despite being a major platform (Series E funded), Sary's tech is closed/internal. No developer portal, no documented APIs, no GitHub presence for external developers |

---

## 16. Nana -- Grocery Delivery APIs

| Field | Details |
|-------|---------|
| **API Name** | None publicly documented |
| **What it does** | Grocery/q-commerce delivery platform |
| **Docs URL** | No public API documentation found |
| **Status** | Nana does not offer a public developer API. Their tech stack is entirely in-house |
| **Integration** | Nana integrates with hypermarkets and specialty stores internally. Also integrates with Mr. Mandoob delivery platform |
| **Tech Stack** | Google Cloud (Cloud Fleet Routing, Vertex-AI Forecast, Firebase) |
| **Access Requirements** | N/A for external developers |
| **Coverage** | Saudi Arabia and Egypt |
| **Note** | No developer portal, no public API docs. All integrations are internal/partnership-based |

---

## 17. Floward -- Flower/Gift Delivery APIs

| Field | Details |
|-------|---------|
| **API Name** | None publicly documented |
| **What it does** | Same-day flower and gift delivery across 36 cities in 9 MENA countries + London |
| **Docs URL** | No public API documentation found |
| **Status** | Floward does not offer a public developer API |
| **Revenue** | ~$750M annually (Sep 2025). IPO planned with Goldman Sachs/HSBC |
| **Access Requirements** | N/A for external developers |
| **Note** | B2C platform only. No developer portal, no documented APIs. For corporate/B2B gifting, contact via floward.com |

---

## 18. Careem -- Ride-Hailing & Delivery APIs

| Field | Details |
|-------|---------|
| **API Name** | Careem POS API, Careem Pay Merchant API, Careem Deep Linking |
| **What it does** | POS integration for restaurant/food delivery orders, payment processing (Careem Pay), ride-hailing integration, delivery management |
| **Developer Portal** | https://developer.careem.com/ (Note: DNS issues reported; may be migrating) |
| **POS API Docs** | https://docs.careemnow.com/ |
| **Careem Pay Docs** | https://implicit.readthedocs.io/ |
| **Auth** | Client credentials (Client ID + Client Secret) in .env. OAuth token-based for subsequent requests |
| **Careem Pay Endpoints** | Authentication (client credentials), Payment initiation, Refund processing |
| **Pricing** | Commission-based per partnership agreement |
| **Access Requirements** | Business partnership with Careem. Register on developer portal |
| **GitHub** | https://github.com/careem |
| **Note** | Owned by Uber. Super app model (rides, food, delivery, payments) |

---

## 19. Saudi Customs (Fasah) -- Customs Clearance Platform

| Field | Details |
|-------|---------|
| **API Name** | FASAH Platform APIs (under ZATCA) |
| **What it does** | Unified national customs platform: import/export services, customs declarations, shipment tracking, electronic payment, truck appointments. 149+ import/export services. Integrates shipping lines, customs brokers, freight forwarders, and government agencies |
| **Portal** | https://fasah.zatca.gov.sa/ |
| **ZATCA API Portal** | https://zatca.gov.sa/ar/PublicData/Pages/APIs.aspx |
| **Auth** | Registration on FASAH platform required. Business identity verification |
| **Pricing** | Government service; no per-API fees documented |
| **Access Requirements** | All businesses importing into Saudi must register on FASAH. Registration via the portal. Must handle Arabic data fields and Hijri-Gregorian date conversion. Comply with PDPL (Personal Data Protection Law) |
| **Integration** | Connects with SABER (product conformity certificates), ZATCA e-invoicing, and other government systems |
| **Note** | Not a self-service API in the traditional sense. Integration is typically done by customs brokers or certified system integrators |

---

## 20. ZATCA/Bayan -- Import/Export & E-Invoicing APIs

| Field | Details |
|-------|---------|
| **API Name** | ZATCA E-Invoicing (FATOORA) APIs |
| **What it does** | Real-time invoice validation, automated VAT submissions, customs declarations, compliance CSID management |
| **Developer Portal (Sandbox)** | https://sandbox.zatca.gov.sa/ |
| **Production Endpoints** | `https://gw-fatoora.zatca.gov.sa/e-invoicing/core/compliance` (pre-compliance CSID) -- `https://gw-fatoora.zatca.gov.sa/e-invoicing/core/compliance/invoices` (compliance checks) -- `https://gw-fatoora.zatca.gov.sa/e-invoicing/core/production/csids` (production CSID) |
| **Docs** | Developer Portal Manual: https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/DEVELOPER-PORTAL-MANUAL.pdf -- Technical Guidelines: https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing-Detailed-Technical-Guideline.pdf |
| **Systems Developers Page** | https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx |
| **Community Forum** | https://zatca1.discourse.group/ |
| **Auth** | Registration + email confirmation on sandbox. CSID-based authentication for production |
| **Pricing** | Free (government mandate) |
| **Access Requirements** | Saudi CR (Commercial Registration), ZATCA registration. Phase 2 requires API integration for all businesses |
| **Note** | "Bayan" refers to customs declarations within the FASAH system, not a separate API. ZATCA's e-invoicing APIs are the primary developer-facing integration point |

---

## 21. Wathq -- Commercial Registration Verification APIs

| Field | Details |
|-------|---------|
| **API Name** | Wathq API Platform |
| **What it does** | Business data verification from authoritative Saudi government sources: commercial registration lookup, company contracts, power of attorney, real estate deeds, national address, employee information, Chamber of Commerce subscriptions, financial statements, trademarks, and more |
| **Developer Portal** | https://developer.wathq.sa/en |
| **All APIs** | https://developer.wathq.sa/en/apis |
| **Pricing Page** | https://developer.wathq.sa/en/Pricing |
| **Auth** | API key-based. Register, choose package, create application, get beneficiary key. SSL required |

### Available APIs:
| API | Source | Price/Inquiry |
|-----|--------|---------------|
| Commercial Registration (New Legislation) | Ministry of Commerce | 2.00-12.00 SAR |
| Commercial Registration Search | Ministry of Commerce | 2.00-12.00 SAR |
| Commercial Contract Issuing | Ministry of Commerce | 5.00-12.00 SAR |
| Power of Attorney | Ministry of Justice | 5.00-12.00 SAR |
| Real Estate Deeds | Ministry of Justice | 5.00-12.00 SAR |
| National Address | Saudi Post (SPL) | Varies |
| Employee Information | MASDR/GOSI | 5.00-12.00 SAR |
| Chamber of Commerce Subscription | Federation of Saudi Chambers | Varies |
| Financial Statements | -- | Varies |
| Corporate Identity | -- | Varies |
| Commercial Trademarks | -- | Varies |
| Certificate of Origin | -- | Varies |

### Pricing Plans:
| Plan | Cost | Duration | Rate |
|------|------|----------|------|
| Trial | FREE | 30 days / 100 inquiries | 5 req/sec |
| Prepaid 5K | 5,000 SAR | 30 days | 5 req/sec |
| Prepaid 10K | 10,000 SAR (+5% bonus) | 90 days | 5 req/sec |
| Prepaid 50K | 50,000 SAR (+8% bonus) | 180 days | 5 req/sec |
| Prepaid 100K | 100,000 SAR (+10% bonus) | 1 year | 5 req/sec |
| Prepaid 150K | 150,000 SAR (+12% bonus) | 1 year | 5 req/sec |
| Enterprise | Custom | Custom | 50-100 req/sec |

Prices exclude VAT.

---

## 22. Thiqah Business Gateway -- B2G APIs

| Field | Details |
|-------|---------|
| **API Name** | No public API documented |
| **What it does** | Thiqah operates government digital platforms including Etimad (government procurement), Saber (product conformity), Ehkam, Al-Muwathaq, and Sedr |
| **Status** | Acquired by ELM Company in March 2025 for SAR 3.4 billion (~$907M). Now part of ELM |
| **Developer Resources** | https://github.com/thiqah (GitHub org exists) |
| **ELM Products** | https://www.elm.sa/ -- ELM offers various digital government products including security and data services |
| **Access** | B2G integration is typically done through government procurement channels, not self-service APIs |
| **Note** | The individual platforms Thiqah operates (Etimad, Saber, etc.) each have their own integration requirements. Contact thiqah.sa or elm.sa for partnership/integration inquiries |

---

## 23. Muqawil -- Contractor Classification

| Field | Details |
|-------|---------|
| **API Name** | No public API documented |
| **What it does** | Muqawil is the digital platform for contractor registration, classification, and qualification under the Saudi Contractors Authority (SCA). Allows searching registered contractors, managing memberships, and e-contracts |
| **Portal** | https://muqawil.org/en |
| **SCA** | https://sca.sa/ |
| **Status** | No public developer API or integration documentation found |
| **Access** | Web portal only. All contractors (Saudi and non-Saudi) must register via muqawil.org. Classification determines project scope eligibility |
| **Note** | While Muqawil has a mobile app and web platform, they do not expose a public API for third-party integration or verification. For contractor verification needs, consider using Wathq's Commercial Registration APIs as an alternative to verify the underlying business entity |

---

## Summary Table: API Availability at a Glance

| # | Service | Public API? | Self-Service? | Protocol | Quality of Docs |
|---|---------|------------|---------------|----------|----------------|
| 1 | Noon (Marketplace) | Yes | No (partner only) | REST/JWT | Good |
| 2 | Jarir | No | -- | -- | -- |
| 3 | Salla | Yes | Yes | REST/OAuth2 | Excellent |
| 4 | Zid | Yes | Yes | REST/OAuth2 | Good |
| 5 | SMSA Express | Yes | No (account needed) | SOAP | Basic (WSDL) |
| 6 | Aramex | Yes | No (account needed) | SOAP | Good (PDF guides) |
| 7 | Naqel Express | Yes | No (account needed) | SOAP | Basic (PDF) |
| 8 | J&T Express KSA | Yes | No (agreement needed) | REST/MD5 | Moderate |
| 9 | Fetchr | DEFUNCT | -- | -- | -- |
| 10 | Mrsool | Partnership only | No | REST | None public |
| 11 | HungerStation | Yes | No (vendor portal) | REST | Good |
| 12 | Jahez | Partnership only | No | REST | None public |
| 13 | ToYou | Partnership only | No | REST | None public |
| 14 | BARQ | Yes | No (account needed) | REST | Good (Postman) |
| 15 | Sary | No | -- | -- | -- |
| 16 | Nana | No | -- | -- | -- |
| 17 | Floward | No | -- | -- | -- |
| 18 | Careem | Yes | Partial | REST/OAuth | Moderate |
| 19 | Fasah (Customs) | Yes | No (registration) | REST | Government docs |
| 20 | ZATCA/Bayan | Yes | Yes (sandbox) | REST/XML | Excellent |
| 21 | Wathq | Yes | Yes | REST/API Key | Excellent |
| 22 | Thiqah/ELM | No public API | -- | -- | -- |
| 23 | Muqawil | No | -- | -- | -- |

---

## Bonus: Comprehensive Saudi API Resource

The GitHub repository **Saudi-Arabia-APIs** by aldilaff catalogs 50+ Saudi government and commercial APIs:
https://github.com/aldilaff/Saudi-Arabia-APIs

Includes APIs from ZATCA, Ministry of Commerce, SAMA, National Address (Saudi Post), Najiz (Justice), CMA, Open Data Platform, and many more government entities.

---

## Key Takeaways

1. **Best developer experience**: Salla and Zid offer the most complete, self-service developer platforms with OAuth2, comprehensive docs, and app marketplaces. These are the closest Saudi equivalents to Shopify's API ecosystem.

2. **Shipping APIs are SOAP-heavy**: SMSA, Aramex, and Naqel all use SOAP, making integration more complex. BARQ is the notable exception with a modern REST API.

3. **Food delivery APIs are partnership-gated**: HungerStation (via Delivery Hero), Jahez, Mrsool, and ToYou all require business partnerships. HungerStation has the best documented API through Delivery Hero's developer portal.

4. **Government APIs are maturing**: Wathq is the standout with excellent docs, transparent pricing, and a self-service portal. ZATCA's e-invoicing API has a proper sandbox environment.

5. **Several major platforms have no public API**: Sary, Nana, Floward, Jarir, Muqawil, and Thiqah/ELM do not expose public developer APIs.

6. **Fetchr is dead**: Do not invest in Fetchr integration.
