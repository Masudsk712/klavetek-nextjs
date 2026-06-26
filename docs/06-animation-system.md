# 06-animation-system.md

# Animation System

**Project:** KLAVETEK Next.js Website V2

**Document ID:** DOC-006

**Version:** 1.0.0

**Status:** Approved

---

# Table of Contents

1. Purpose
2. Motion Philosophy
3. Animation Principles
4. Technology Stack
5. Motion Tokens
6. Timing Standards
7. Easing Standards
8. Scroll Animations
9. Hero Animations
10. Component Animations
11. Page Transitions
12. Hover Interactions
13. Loading Animations
14. Performance Rules
15. Accessibility
16. QA Checklist

---

# 1. Purpose

The Animation System defines how motion is used throughout the KLAVETEK website.

Animations must improve:

* User experience
* Visual hierarchy
* Storytelling
* Navigation
* Brand perception

Animations must never distract from content.

---

# 2. Motion Philosophy

The website should feel:

* Premium
* Smooth
* Intentional
* Natural
* Engineering-focused

Reference brands:

* Apple
* Tesla
* Volvo Construction
* Hilti

Motion should communicate confidence rather than excitement.

---

# 3. Motion Principles

Every animation must satisfy at least one purpose:

* Guide attention
* Explain hierarchy
* Provide feedback
* Improve navigation
* Enhance storytelling

Avoid animation that exists only for decoration.

---

# 4. Technology Stack

## Primary Libraries

* Framer Motion
* GSAP
* Lenis

## Usage

Framer Motion

* Component transitions
* Hover states
* Small UI interactions

GSAP

* Hero animations
* Scroll timelines
* Complex sequences
* Pinned sections

Lenis

* Smooth scrolling

Do not mix multiple libraries for the same interaction.

---

# 5. Motion Tokens

Define reusable animation tokens.

Examples:

* Fast
* Normal
* Slow

Use consistent values across all components.

No hard-coded durations.

---

# 6. Timing Standards

Recommended durations:

Instant

100ms

Fast

200ms

Standard

300ms

Slow

500ms

Large storytelling animations

600–1000ms

Avoid animations longer than necessary.

---

# 7. Easing Standards

Preferred easing:

* Ease Out
* Ease In Out
* Smooth cubic curves

Avoid:

* Bounce
* Elastic
* Overshoot
* Cartoon-like easing

---

# 8. Scroll Animation Standards

Elements may animate only when entering the viewport.

Allowed effects:

* Fade In
* Fade Up
* Fade Left
* Fade Right
* Scale
* Mask Reveal

Animations should trigger once unless repetition improves usability.

---

# 9. Hero Animation

Hero sequence:

1. Page loads
2. Background video fades in
3. Overlay appears
4. Headline reveals
5. Subheadline fades
6. CTA buttons animate
7. Statistics appear
8. Scroll indicator becomes visible

This sequence should feel continuous rather than fragmented.

---

# 10. Text Animations

Allowed:

* Fade
* Word reveal
* Line reveal
* Character reveal (hero only)

Avoid:

* Typewriter effects
* Constant blinking
* Flashing text

---

# 11. Image Animations

Allowed:

* Fade
* Scale
* Mask reveal
* Parallax

Avoid:

* Rotation
* Bounce
* Excessive zoom

---

# 12. Card Interactions

On hover:

* Slight elevation
* Subtle shadow increase
* Gentle scale
* Border highlight

Cards must remain stable and readable.

---

# 13. Button Animations

Hover:

* Background transition
* Small elevation
* Icon movement (optional)

Focus:

* Visible outline

Loading:

* Spinner
* Disabled interaction

Avoid excessive movement.

---

# 14. Navigation Animation

Navbar:

* Transparent at top
* Solid background after scrolling
* Smooth transition

Mobile menu:

* Slide in
* Overlay fade
* Smooth close animation

---

# 15. Section Reveal

Every major section may use:

* Fade Up
* Fade In
* Staggered children

Reveal distance should remain consistent.

---

# 16. Statistics Animation

Counters should animate only once.

Numbers should increase smoothly.

Do not restart on repeated scrolling.

---

# 17. Timeline Animation

Timeline items reveal sequentially while scrolling.

Current step should be visually emphasized.

Future steps remain subtle.

---

# 18. Gallery Animation

Images:

* Fade
* Scale
* Lightbox transition

Filtering:

* Smooth layout transitions

Avoid abrupt changes.

---

# 19. FAQ Animation

Accordion should:

* Expand smoothly
* Collapse smoothly
* Rotate indicator icon

Animation should remain fast.

---

# 20. Page Transition

Page transitions should:

* Preserve navigation context
* Feel lightweight
* Avoid blocking interaction

Recommended:

* Fade
* Slight upward movement

Avoid full-screen wipes unless specifically designed.

---

# 21. Loading Experience

Initial loading sequence:

Logo

↓

Progress indicator (optional)

↓

Hero reveal

Loading should never exceed the actual loading time.

Avoid fake progress bars.

---

# 22. Scroll Progress

Optional feature.

Thin progress indicator at the top of the page.

Should not distract from content.

---

# 23. Cursor Interaction

Desktop only.

Optional enhancements:

* Magnetic buttons
* Cursor highlight
* Soft glow

Avoid replacing the native cursor unless usability is preserved.

---

# 24. Parallax Guidelines

Use only where it adds depth.

Recommended:

* Background imagery
* Decorative shapes
* Hero elements

Avoid applying parallax to body text.

---

# 25. Video Motion

Hero videos:

* Autoplay
* Loop
* Muted

Video should not shift layout during loading.

---

# 26. Performance Guidelines

Animations must:

* Use GPU-friendly properties
* Prefer transform and opacity
* Avoid layout thrashing
* Minimize repainting
* Pause when off-screen

Target 60 FPS wherever possible.

---

# 27. Accessibility

Respect reduced motion preferences.

If the user has "Reduce Motion" enabled:

* Disable non-essential animations
* Remove parallax
* Simplify transitions
* Preserve usability

Motion must never prevent interaction.

---

# 28. Animation QA Checklist

Before approving any animation:

* Purpose defined
* Smooth playback
* Consistent timing
* Accessible
* Responsive
* Performance tested
* No layout shift
* No visual distraction

---

# 29. Future Motion Enhancements

Potential additions:

* Interactive product viewer
* 3D product rotation
* Manufacturing timeline storytelling
* Scroll-driven infographics
* Interactive comparison charts

All future animations must follow this document.

---

# Document Control

| Field         | Value              |
| ------------- | ------------------ |
| Document ID   | DOC-006            |
| Name          | Animation System   |
| Version       | 1.0.0              |
| Status        | Approved           |
| Next Document | 07-seo-strategy.md |
