# 11-figma-design-specification.md

# Figma Design Specification

**Project:** KLAVETEK Next.js Website V2

**Document ID:** DOC-011

**Version:** 1.0.0

**Status:** Approved

---

# Table of Contents

1. Purpose
2. Design Workflow
3. Figma File Structure
4. Design Tokens
5. Grid System
6. Breakpoints
7. Page Templates
8. Component Specifications
9. Interaction Specifications
10. Responsive Design
11. Auto Layout Standards
12. Prototype Standards
13. Developer Handoff
14. QA Checklist

---

# 1. Purpose

This document defines the Figma design standards for the KLAVETEK website.

Objectives:

* Maintain consistency
* Speed up development
* Ensure design accuracy
* Improve collaboration
* Simplify developer handoff

No screen should be designed outside this specification.

---

# 2. Design Workflow

Every screen follows the same workflow:

Research

↓

Wireframe

↓

Low Fidelity

↓

High Fidelity

↓

Prototype

↓

Design Review

↓

Developer Handoff

↓

Implementation

↓

QA

No implementation begins before High Fidelity approval.

---

# 3. Figma File Structure

```text
📁 KLAVETEK Website

├── Cover
├── Design Tokens
├── Components
├── Icons
├── Desktop Screens
├── Tablet Screens
├── Mobile Screens
├── Prototypes
├── Assets
└── Archive
```

Each page should be organized into clearly named sections.

---

# 4. Design Tokens

Create shared variables for:

Colors

Typography

Spacing

Radius

Borders

Elevation

Opacity

Motion

Grid

Never use random values.

---

# 5. Grid System

Desktop

* Width: 1440px
* 12 columns

Tablet

* 768–1024px
* 8 columns

Mobile

* 390–430px
* 4 columns

Use consistent gutters and margins across all pages.

---

# 6. Breakpoints

Design for:

* Mobile
* Tablet
* Laptop
* Desktop
* Large Desktop

Do not design only for desktop.

---

# 7. Page Inventory

The following pages require complete designs:

* Home
* About
* Products
* Product Detail
* Why AAC
* Projects
* Resources
* Dealer Network
* Contact
* 404
* Privacy Policy
* Terms & Conditions

---

# 8. Homepage Specification

Frame Order

Hero

↓

Trust Bar

↓

About Preview

↓

Featured Products

↓

Why Choose KLAVETEK

↓

Manufacturing Process

↓

Technical Advantages

↓

Projects

↓

Testimonials

↓

Certificates

↓

FAQ

↓

CTA Banner

↓

Footer

Each section should have desktop, tablet and mobile variants.

---

# 9. Component Frames

Every reusable component must have its own frame.

Examples:

* Button
* Card
* Navbar
* Footer
* Accordion
* Tabs
* Timeline
* Gallery
* Form
* Product Card
* Testimonial
* Statistics

Each frame should include all variants.

---

# 10. Component Variants

Each component should define:

Default

Hover

Pressed

Focus

Disabled

Loading

Error (where applicable)

Developers should never guess interaction states.

---

# 11. Auto Layout Standards

All reusable components must use Auto Layout.

Rules:

* No manual spacing
* Flexible resizing
* Hug contents where appropriate
* Fill container where appropriate
* Nested Auto Layouts allowed

Avoid absolute positioning except for decorative elements.

---

# 12. Constraints & Resizing

Every component should define:

* Horizontal resizing
* Vertical resizing
* Minimum width
* Maximum width
* Responsive behavior

Design should adapt without breaking.

---

# 13. Typography Specification

For each text style define:

* Font family
* Font size
* Font weight
* Line height
* Letter spacing
* Text transform

All styles should be reusable.

---

# 14. Color Variables

Define reusable color variables.

Categories:

* Primary
* Secondary
* Accent
* Neutral
* Success
* Warning
* Error
* Surface
* Border

Avoid direct hex values inside components.

---

# 15. Icon System

Use a single icon style.

Specifications:

* 24px base size
* Consistent stroke
* Component variants
* Reusable instances

No mixed icon libraries.

---

# 16. Image Guidelines

Every image placeholder should define:

* Aspect ratio
* Crop behavior
* Border radius
* Responsive scaling

High-resolution assets only.

---

# 17. Motion Prototype

Prototype the following:

* Hero reveal
* Navbar transition
* Mobile menu
* Accordion
* Tabs
* Page transitions
* CTA hover
* Gallery interactions

Prototype timing should match the Animation System document.

---

# 18. Annotation Standards

Each complex screen should include annotations for:

* Interaction
* Animation
* Responsive behavior
* Developer notes
* Accessibility requirements

Annotations reduce implementation ambiguity.

---

# 19. Naming Convention

Pages

Home / About / Products

Components

Button / Card / Navbar

Frames

PascalCase

Layers

Meaningful names only.

Avoid names like:

Rectangle 25

Frame 137

Group 12

---

# 20. Prototype Flow

Create clickable flows for:

Visitor Journey

Home

↓

Products

↓

Product Detail

↓

Contact

Architect Journey

Home

↓

Why AAC

↓

Resources

↓

Contact

Dealer Journey

Home

↓

Dealer Network

↓

Contact

---

# 21. Responsive Screens

Every page requires:

Desktop

Tablet

Mobile

Responsive behavior should be visible in Figma before development begins.

---

# 22. Accessibility Review

Design review checklist:

* Color contrast
* Readable typography
* Button size
* Focus indicators
* Touch targets
* Error states
* Keyboard navigation notes

Accessibility starts in design, not development.

---

# 23. Developer Handoff

Before development begins, every screen must include:

* Measurements
* Color tokens
* Typography tokens
* Component names
* Image references
* Animation references
* Responsive notes

No undocumented screens may enter development.

---

# 24. Design QA Checklist

Before approval verify:

* Grid alignment
* Consistent spacing
* Typography hierarchy
* Component reuse
* Responsive layouts
* Auto Layout usage
* Naming conventions
* Prototype flows
* Accessibility review
* Annotation completeness

---

# 25. Version Control

Maintain versions for:

* Wireframes
* High Fidelity
* Prototype
* Developer Handoff

Archive outdated versions instead of deleting them.

---

# 26. Deliverables

Final design package should include:

* Complete Figma file
* Design Tokens
* Component Library
* Interactive Prototype
* Responsive Screens
* Asset Export
* Developer Notes
* QA Checklist

---

# 27. Success Criteria

The design is considered complete when:

* Every required page exists
* All reusable components are defined
* Mobile, tablet and desktop designs are complete
* Prototype flows are functional
* Developer handoff is complete
* Design QA checklist is approved

---

# Document Control

| Field             | Value                       |
| ----------------- | --------------------------- |
| Document ID       | DOC-011                     |
| Name              | Figma Design Specification  |
| Version           | 1.0.0                       |
| Status            | Approved                    |
| Previous Document | 09-development-roadmap.md   |
| Next Document     | 12-engineering-standards.md |
