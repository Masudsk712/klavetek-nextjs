# 04-design-system.md

# Design System

**Project:** KLAVETEK Next.js Website V2

**Document ID:** DOC-004

**Version:** 1.0.0

**Status:** Approved

---

# Table of Contents

1. Purpose
2. Design Principles
3. Design Tokens
4. Color System
5. Typography
6. Spacing System
7. Grid System
8. Breakpoints
9. Border Radius
10. Shadows
11. Borders
12. Icons
13. Buttons
14. Cards
15. Forms
16. Navigation
17. Tables
18. Modals
19. Badges
20. Alerts
21. Motion
22. Accessibility
23. Responsive Rules
24. Quality Checklist

---

# 1. Purpose

The Design System provides a unified visual language for the KLAVETEK website.

It ensures:

* Visual consistency
* Faster development
* Reusable components
* Better maintainability
* Predictable UI behavior
* Scalable architecture

Every UI element must follow this document.

---

# 2. Design Principles

The design system is based on the following principles:

* Simplicity
* Consistency
* Clarity
* Accessibility
* Reusability
* Performance
* Minimalism
* Engineering-first design

---

# 3. Design Tokens

All design values must be defined as reusable tokens.

Categories:

* Colors
* Typography
* Spacing
* Radius
* Shadows
* Borders
* Z-index
* Motion
* Breakpoints

Hard-coded values should be avoided.

---

# 4. Color System

## Primary

* Graphite Black
* Pure White

Purpose:

* Headings
* Navigation
* Footer
* Primary content

---

## Secondary

* Concrete Grey
* Light Grey

Purpose:

* Backgrounds
* Cards
* Dividers

---

## Accent

### Construction Orange

Used for:

* Primary buttons
* Active navigation
* Links on hover
* Important highlights

### Eco Green

Used for:

* Sustainability
* Success states
* Environmental sections

Accent colors must be used sparingly.

---

## Functional Colors

Success

Warning

Error

Information

These colors should only communicate system states.

---

# 5. Typography

## Primary Font

Geist

Fallback

Inter

System UI

---

## Type Scale

Display

Hero titles

H1

Main page title

H2

Section title

H3

Subsection title

H4

Card title

Body Large

Lead paragraph

Body

Standard content

Caption

Supporting text

Overline

Labels

---

## Typography Rules

* Left aligned
* Consistent line height
* Maximum readable width
* Strong hierarchy
* Limited font weights

Avoid excessive font variations.

---

# 6. Spacing System

Use an 8-point spacing scale.

Available values:

4

8

12

16

24

32

48

64

96

128

160

Do not use arbitrary spacing values.

---

# 7. Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Container

Maximum Width

1440px

Content Width

Approximately 70–75 characters per line for readability.

---

# 8. Breakpoints

Mobile

Small Tablet

Tablet

Laptop

Desktop

Large Desktop

Layouts must adapt progressively.

---

# 9. Border Radius

Buttons

Fully rounded (pill)

Cards

Large radius

Images

Medium radius

Inputs

Medium radius

Radius values must remain consistent.

---

# 10. Shadows

Three elevation levels:

Small

Medium

Large

Shadows should be soft and subtle.

Avoid heavy drop shadows.

---

# 11. Borders

Border color should remain neutral.

Use borders to define hierarchy, not decoration.

Avoid thick borders.

---

# 12. Icon System

Preferred Library

Lucide Icons

Rules

* Outline icons
* Uniform stroke width
* Consistent sizing
* Minimal style

No mixed icon packs.

---

# 13. Buttons

## Primary

Construction Orange

White Text

Rounded

Hover

Slight elevation

---

## Secondary

White

Dark Border

Dark Text

---

## Ghost

Transparent

Borderless

---

## Text Button

Underline on hover

Minimal appearance

---

Button Rules

* Consistent height
* Clear labels
* Visible focus state
* Loading state
* Disabled state

---

# 14. Cards

Standard card structure:

* Image
* Title
* Description
* CTA

Cards should include:

* Hover state
* Consistent padding
* Equal spacing
* Responsive layout

---

# 15. Forms

Inputs

Textarea

Select

Checkbox

Radio

Switch

Rules:

* Clear labels
* Helper text
* Error messages
* Validation feedback
* Accessible focus state

---

# 16. Navigation

Desktop

Transparent initially

Solid on scroll

Sticky

Mobile

Drawer navigation

Clear hierarchy

Large touch targets

---

# 17. Tables

Tables should support:

* Responsive behavior
* Zebra rows (optional)
* Accessible headers
* Horizontal scrolling on mobile

Used for:

* Technical specifications
* Product comparison

---

# 18. Badges

Badge types:

* New
* Featured
* Popular
* Sustainable
* Certified

Badges should remain small and unobtrusive.

---

# 19. Alerts

Types

Success

Warning

Error

Information

Every alert should include:

* Icon
* Message
* Accessible contrast

---

# 20. Modals

Modal structure:

Header

↓

Content

↓

Actions

↓

Close

Modals should:

* Trap keyboard focus
* Close with Escape
* Prevent background scrolling

---

# 21. Section Template

Every section should follow:

Section Label

↓

Heading

↓

Description

↓

Content

↓

CTA (Optional)

↓

Divider

This creates consistent visual rhythm.

---

# 22. Motion System

Motion principles:

* Natural
* Smooth
* Purposeful

Allowed:

* Fade
* Reveal
* Scale
* Counter
* Parallax
* Image mask
* Text reveal

Avoid:

* Bounce
* Flash
* Infinite animations

---

# 23. Accessibility

Every component must support:

* Keyboard navigation
* Focus visibility
* Screen readers
* High contrast
* Semantic HTML

WCAG AA compliance is mandatory.

---

# 24. Responsive Rules

All components must work across:

* Mobile
* Tablet
* Laptop
* Desktop

Never hide critical content on smaller devices.

---

# 25. Reusable Components

The following components should be reusable:

* Button
* Card
* Badge
* Container
* Section
* Heading
* Paragraph
* Accordion
* Tabs
* Modal
* Dialog
* Input
* Select
* Textarea
* Checkbox
* Radio
* Table
* CTA Block

---

# 26. Component States

Every interactive component should define:

* Default
* Hover
* Active
* Focus
* Disabled
* Loading
* Error (where applicable)

State consistency is required across the application.

---

# 27. Dark Mode Policy

Version 1

* Light Theme Only

Future Version

* Dark Theme Support
* Theme Toggle
* System Preference Detection

The design system should be structured to support dark mode later without major refactoring.

---

# 28. Design QA Checklist

Before approving any page:

* Correct typography
* Approved color usage
* Consistent spacing
* Responsive layout
* Accessible contrast
* Proper button hierarchy
* Reusable components
* Smooth interactions
* No visual inconsistencies

---

# 29. Future Scalability

The design system must support future additions:

* Dashboard UI
* Dealer Portal
* Careers
* Blog
* CMS
* Mobile Application
* Multi-language Interface

Without redesigning the existing system.

---

# Document Control

| Field         | Value                   |
| ------------- | ----------------------- |
| Document ID   | DOC-004                 |
| Name          | Design System           |
| Version       | 1.0.0                   |
| Status        | Approved                |
| Next Document | 05-component-library.md |
