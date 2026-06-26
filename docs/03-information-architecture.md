# 03-information-architecture.md

# Information Architecture (IA)

**Project:** KLAVETEK Next.js Website V2

**Document ID:** DOC-003

**Version:** 1.0.0

**Status:** Approved

---

# Table of Contents

1. Purpose
2. Information Architecture Principles
3. User Personas
4. User Goals
5. Website Structure
6. Sitemap
7. Navigation Architecture
8. Homepage Architecture
9. Page Architecture
10. User Journeys
11. URL Structure
12. Breadcrumb Strategy
13. Search Strategy
14. Content Hierarchy
15. CTA Strategy
16. Internal Linking
17. Future Expansion
18. IA Checklist

---

# 1. Purpose

The Information Architecture (IA) defines how users discover, navigate, and consume information throughout the KLAVETEK website.

A well-structured IA improves:

* User Experience
* SEO
* Navigation
* Accessibility
* Scalability
* Maintainability

---

# 2. Information Architecture Principles

The website must follow these principles:

* Clear navigation
* Logical page hierarchy
* Maximum three-click rule
* Consistent layouts
* Predictable navigation
* SEO-friendly URLs
* User-first organization

---

# 3. User Personas

## Primary Users

* Builders
* Contractors
* Architects
* Structural Engineers
* Developers

### Goals

* Explore products
* Compare AAC Blocks
* Download brochures
* Contact sales
* Find dealers

---

## Secondary Users

* Dealers
* Government agencies
* Students
* Consultants
* Homeowners

### Goals

* Learn about AAC technology
* View certifications
* Access technical resources
* Explore projects

---

# 4. Website Structure

```text
Home
│
├── About
│   ├── Company
│   ├── Vision & Mission
│   ├── Leadership
│   ├── Manufacturing Facility
│   └── Certifications
│
├── Products
│   ├── AAC Blocks
│   ├── Block Sizes
│   ├── Technical Specifications
│   ├── Applications
│   └── Downloads
│
├── Why AAC
│   ├── Benefits
│   ├── Comparison
│   ├── FAQs
│   └── Sustainability
│
├── Projects
│
├── Resources
│   ├── Brochures
│   ├── Technical Documents
│   ├── Installation Guide
│   └── Blog (Future)
│
├── Dealer Network
│
└── Contact
```

---

# 5. Primary Navigation

Desktop Navigation

* Home
* About
* Products
* Why AAC
* Projects
* Resources
* Contact

Primary CTA

* Get Quote

Secondary CTA

* Download Brochure

---

# 6. Mobile Navigation

Hamburger Menu

Menu Order

1. Home
2. About
3. Products
4. Why AAC
5. Projects
6. Resources
7. Dealer Network
8. Contact

Sticky Bottom Actions

* Call
* WhatsApp
* Get Quote

---

# 7. Homepage Architecture

Homepage should tell a complete brand story.

```text
Hero
│
Trust Indicators
│
About KLAVETEK
│
Featured Products
│
Why Choose AAC
│
Manufacturing Process
│
Technical Advantages
│
Projects Showcase
│
Certificates
│
Testimonials
│
FAQs
│
Call To Action
│
Footer
```

Each section should naturally guide the user toward the next.

---

# 8. About Page Architecture

Sections

* Hero Banner
* Company Introduction
* Timeline
* Vision
* Mission
* Core Values
* Manufacturing Facility
* Certifications
* CTA

---

# 9. Products Architecture

Landing Page

* Product Overview
* Product Cards
* Product Comparison
* Downloads

Product Detail Page

* Hero
* Overview
* Features
* Applications
* Technical Data
* Gallery
* Downloads
* CTA

---

# 10. Why AAC Architecture

Sections

* Introduction
* AAC vs Clay Bricks
* Benefits
* Energy Efficiency
* Fire Resistance
* Sound Insulation
* Sustainability
* FAQs

---

# 11. Projects Architecture

Sections

* Featured Projects
* Project Categories
* Gallery
* Filters
* Location Information

Future Expansion

* Interactive Map
* Project Search

---

# 12. Resources Architecture

Resources should be categorized.

Categories

* Brochures
* Technical Sheets
* Product Catalogue
* Installation Guide
* Certificates
* Blog (Future)

---

# 13. Contact Architecture

Sections

* Contact Information
* Contact Form
* Factory Address
* Google Map
* WhatsApp
* Dealer Enquiry

---

# 14. URL Structure

All URLs must be short and descriptive.

Examples

```text
/

 /about

 /products

 /products/aac-blocks

 /why-aac

 /projects

 /resources

 /dealer-network

 /contact
```

Rules

* lowercase
* hyphen-separated
* no unnecessary parameters
* no uppercase letters

---

# 15. Breadcrumb Strategy

Enable breadcrumbs for all internal pages.

Example

```text
Home
>
Products
>
AAC Blocks
```

Benefits

* Better navigation
* Better SEO
* Improved usability

---

# 16. Internal Linking Strategy

Every page should link to related content.

Example

Product Page →

Technical Specifications

↓

Comparison

↓

Projects

↓

Contact

This improves user engagement and SEO.

---

# 17. Content Hierarchy

Each page should follow:

1. Hero
2. Introduction
3. Main Content
4. Supporting Content
5. CTA
6. Footer

Content should become progressively more detailed.

---

# 18. Call-To-Action Strategy

Primary CTA

* Get a Quote

Secondary CTAs

* Contact Sales
* Download Brochure
* Find Dealer
* View Projects
* Learn More

CTA buttons should appear naturally after major content sections.

---

# 19. Search Strategy

Current Phase

No site-wide search.

Future Phase

Global Search

Should include

* Products
* Resources
* Blog
* Technical Documents

---

# 20. Footer Architecture

Footer Sections

* Company
* Products
* Resources
* Quick Links
* Contact Information
* Social Links
* Newsletter (Future)

Footer should also contain legal pages.

---

# 21. SEO Information Hierarchy

Priority Pages

1. Home
2. Products
3. Why AAC
4. Technical Specifications
5. Projects
6. Contact

These pages should receive the highest level of SEO optimization.

---

# 22. User Journey

### Journey 1 — Builder

Home

↓

Products

↓

Technical Specifications

↓

Projects

↓

Get Quote

---

### Journey 2 — Architect

Home

↓

Why AAC

↓

Comparison

↓

Downloads

↓

Contact

---

### Journey 3 — Dealer

Home

↓

Dealer Network

↓

Contact

↓

Become Dealer

(Future)

---

# 23. Future Expansion

Architecture must support future additions without restructuring.

Potential additions

* Careers
* Blog
* Headless CMS
* Dealer Portal
* Customer Portal
* Product Calculator
* Multi-language
* Distributor Login

---

# 24. Information Architecture Checklist

Before implementation verify:

* Logical navigation
* Clear hierarchy
* SEO-friendly URLs
* Breadcrumb support
* Mobile navigation
* Internal linking
* Consistent page templates
* Scalable structure
* Future-ready architecture

---

# Document Control

| Field         | Value                    |
| ------------- | ------------------------ |
| Document ID   | DOC-003                  |
| Name          | Information Architecture |
| Version       | 1.0.0                    |
| Status        | Approved                 |
| Next Document | 04-design-system.md      |
