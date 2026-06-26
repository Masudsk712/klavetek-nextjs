# 05-component-library.md

# Component Library

**Project:** KLAVETEK Next.js Website V2

**Document ID:** DOC-005

**Version:** 1.0.0

**Status:** Approved

---

# Table of Contents

1. Purpose
2. Component Philosophy
3. Folder Structure
4. Component Categories
5. Layout Components
6. Navigation Components
7. UI Components
8. Content Components
9. Marketing Components
10. Product Components
11. Forms
12. Feedback Components
13. Utility Components
14. Animation Components
15. Accessibility Standards
16. Component Checklist
17. Naming Standards

---

# 1. Purpose

The Component Library defines every reusable React component used throughout the KLAVETEK website.

Goals:

* Consistency
* Reusability
* Maintainability
* Scalability
* Accessibility
* Faster development

Every new UI element should reuse an existing component whenever possible.

---

# 2. Component Philosophy

Every component must be:

* Reusable
* Responsive
* Accessible
* Type-safe
* Configurable
* Well documented
* Independently testable

Avoid page-specific components unless absolutely necessary.

---

# 3. Folder Structure

```text
src/
└── components/
    ├── ui/
    ├── layout/
    ├── navigation/
    ├── sections/
    ├── cards/
    ├── forms/
    ├── feedback/
    ├── marketing/
    ├── product/
    ├── animations/
    └── shared/
```

Each folder has a single responsibility.

---

# 4. Component Categories

The library is divided into:

* Layout
* Navigation
* UI
* Cards
* Marketing
* Product
* Forms
* Feedback
* Animation
* Shared

---

# 5. Layout Components

## Container

Purpose

Maintain consistent content width.

Features

* Responsive
* Max width
* Configurable padding

---

## Section

Purpose

Standard wrapper for every website section.

Supports

* Background variants
* Padding variants
* Anchor IDs

---

## Grid

Purpose

Responsive column layouts.

Supports

* 1–4 columns
* Responsive breakpoints
* Equal spacing

---

## Stack

Purpose

Vertical spacing between child elements.

---

# 6. Navigation Components

## Navbar

Features

* Sticky
* Transparent initially
* Background on scroll
* Mobile drawer
* Active link
* CTA button

States

* Default
* Scrolled
* Mobile
* Expanded

---

## Mobile Menu

Features

* Slide animation
* Overlay
* Keyboard support
* Touch friendly

---

## Breadcrumb

Features

* SEO friendly
* Auto generated
* Accessible

---

## Footer

Sections

* Company
* Products
* Resources
* Contact
* Social Links
* Legal Links

---

# 7. UI Components

## Button

Variants

* Primary
* Secondary
* Outline
* Ghost
* Link

Sizes

* Small
* Medium
* Large

States

* Default
* Hover
* Focus
* Loading
* Disabled

---

## Badge

Variants

* Success
* Warning
* Featured
* New
* Certified

---

## Card

Variants

* Default
* Elevated
* Interactive
* Product
* Feature

---

## Divider

Horizontal separator with spacing variants.

---

## Avatar

Used for testimonials and team members.

---

## Icon

Wrapper for Lucide icons.

Supports

* Size
* Color
* Stroke width

---

# 8. Content Components

## Section Heading

Includes

* Label
* Title
* Description

---

## Statistic

Displays

* Value
* Label
* Optional icon

Examples

* Years of Experience
* Projects Completed
* Happy Clients

---

## Timeline

Used for

* Company journey
* Manufacturing process

Supports

* Vertical layout
* Mobile responsive

---

## Accordion

Used for FAQ.

Supports

* Single expand
* Multiple expand
* Keyboard navigation

---

## Tabs

Used for

* Product details
* Specifications
* Downloads

---

# 9. Marketing Components

## Hero Section

Includes

* Background video
* Heading
* Description
* CTA buttons
* Scroll indicator

---

## CTA Banner

Purpose

Drive enquiries.

Variants

* Light
* Dark
* Image background

---

## Trust Bar

Displays

* Certifications
* Awards
* Client logos

---

## Testimonial

Supports

* Quote
* Author
* Company
* Image
* Rating (optional)

---

# 10. Product Components

## Product Card

Displays

* Image
* Product name
* Short description
* CTA

---

## Product Specification

Displays

* Property
* Value

Responsive table layout.

---

## Comparison Table

Used for:

AAC vs Clay Bricks

Responsive on all devices.

---

## Product Gallery

Supports

* Grid
* Lightbox
* Responsive layout

---

# 11. Forms

## Contact Form

Fields

* Name
* Email
* Phone
* Message

Validation required.

---

## Dealer Enquiry Form

Additional fields

* Company
* City
* Business Type

---

## Quote Request Form

Additional fields

* Project Type
* Quantity
* Location

---

# 12. Feedback Components

## Alert

Variants

* Success
* Error
* Warning
* Info

---

## Toast

Temporary notification.

---

## Loading Spinner

Used during async operations.

---

## Skeleton Loader

Used while content is loading.

---

## Empty State

Displays when no data exists.

---

# 13. Utility Components

## Modal

Supports

* Keyboard navigation
* Focus trap
* Close actions

---

## Drawer

Mobile-friendly sliding panel.

---

## Tooltip

Short contextual information.

---

## Scroll To Top

Appears after scrolling.

---

## Theme Provider

Future support for dark mode.

---

# 14. Animation Components

## Reveal

Fade and slide content into view.

---

## Counter

Animated numeric values.

---

## Marquee

Scrolling client logos or certifications.

---

## Parallax

Background motion on scroll.

---

## Floating Elements

Decorative floating shapes for hero sections.

---

# 15. Accessibility Standards

Every interactive component must support:

* Keyboard navigation
* Focus state
* Screen reader labels
* ARIA attributes
* Semantic HTML
* Color contrast compliance

WCAG AA compliance is mandatory.

---

# 16. Component Naming Standards

React Components

PascalCase

Examples

* HeroSection
* ProductCard
* ContactForm

Hooks

useSomething

Examples

* useScrollPosition
* useWindowSize

Files

kebab-case

Examples

* hero-section.tsx
* product-card.tsx

---

# 17. Required Props Pattern

Every reusable component should define:

* Props interface
* Optional className
* Children support (where appropriate)
* Default values
* Clear documentation

Avoid implicit behavior.

---

# 18. Component States

Every interactive component must define:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading
* Error (if applicable)

States should be visually distinct and accessible.

---

# 19. Performance Guidelines

Components should:

* Minimize unnecessary re-renders
* Lazy-load heavy content
* Support dynamic imports when beneficial
* Avoid expensive calculations during render

---

# 20. Testing Requirements

Each reusable component should be verified for:

* Rendering
* Responsive behavior
* Keyboard navigation
* Accessibility
* Visual consistency
* Loading and error states (where applicable)

---

# 21. Component Approval Checklist

Before a component is added to the library:

* Reusable
* Responsive
* Accessible
* Type-safe
* Documented
* Matches Design System
* No duplicate functionality
* Performance reviewed

---

# 22. Future Components

The architecture should support adding components such as:

* Dealer Locator
* Product Calculator
* Project Filter
* Interactive Timeline
* Careers Portal
* Blog Cards
* CMS Blocks
* Language Switcher

Without changing the existing component structure.

---

# Document Control

| Field         | Value                  |
| ------------- | ---------------------- |
| Document ID   | DOC-005                |
| Name          | Component Library      |
| Version       | 1.0.0                  |
| Status        | Approved               |
| Next Document | 06-animation-system.md |
