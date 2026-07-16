# PORTFOLIO_MASTER_CONTEXT.md

# A.K.M. Niazul Alam - Personal Portfolio

> This document is the single source of truth for the entire portfolio project.

Every AI assistant (ChatGPT, Codex, Cursor, Claude, Gemini, etc.) must read this file completely before making any changes.

---

# Project Overview

This project is a premium personal portfolio built for A.K.M. Niazul Alam.

The goal is not only to build a visually attractive portfolio but also to demonstrate production-level frontend architecture, maintainability, accessibility, responsiveness, and clean code.

The project should feel modern, premium, recruiter-friendly, and scalable.

---

# Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React
- ESLint

No unnecessary libraries should be installed.

---

# Project Goals

The portfolio should demonstrate:

- Professional UI/UX
- Clean Architecture
- Reusable Components
- Modern Design
- Excellent Performance
- Accessibility
- SEO
- Responsive Design
- Production Ready Code

---

# Design Philosophy

The UI should feel:

- Premium
- Minimal
- Modern
- Elegant
- Fast
- Clean

Avoid:

- Cluttered layouts
- Over-designed UI
- Heavy animations
- Inconsistent spacing
- Random colors
- Duplicate components

---

# Typography

Brand

NewRocker

Used only for:

- Navbar Brand

---

Headings

Rajdhani

Requirements:

- Bold
- Large
- Strong visual hierarchy

Used for:

- Section titles
- Hero headings
- Card headings
- Navigation menu
- Timeline titles

---

Paragraphs

Poppins

Used for:

- Body text
- Buttons
- Descriptions
- Cards

---

# Color System

Navbar

Background

#050709

Shadow

0 0 30px rgba(135,80,247,.2)

---

Gradient Background

from

#0f0715

to

#1c0d28

Tailwind

bg-gradient-to-b from-[#0f0715] to-[#1c0d28]

---

Dark Section

#0a0909

---

Accent Colors

#FF014F

#ef9d7a

---

Gradient Heading

Tailwind

text-transparent
bg-clip-text
bg-gradient-to-r
from-[#8852F7]
to-[#fdfdff]

---

# Layout Rules

Always use:

Reusable Container Component

Never hardcode widths.

Keep spacing consistent.

Mobile First.

Responsive from:

320px → 4K

---

# Folder Architecture

Follow modular architecture.

Example:

src/

app/

components/

layout/

hero/

about/

skills/

experience/

projects/

contact/

footer/

ui/

hooks/

data/

constants/

types/

utils/

lib/

public/

Every section should have its own reusable component.

---

# Data Architecture

Never hardcode large content inside components.

Always use:

data/

Example:

about.ts

skills.ts

projects.ts

experience.ts

social.ts

Component → Reads Data

Data → Contains Content

---

# Component Rules

Components should:

Be reusable

Be small

Have a single responsibility

Avoid files larger than ~250 lines when practical

Avoid unnecessary prop drilling

Use TypeScript properly

---

# Accessibility

Always follow:

Semantic HTML

Keyboard Navigation

ARIA Labels

Focus Visible

Accessible Buttons

Accessible Links

Proper Heading Order

---

# Responsive Rules

Every component must support:

Mobile

Tablet

Laptop

Desktop

Large Desktop

No layout breaking.

---

# Animations

Animations should be subtle.

Prefer:

Tailwind Transitions

Hover Lift

Glow

Opacity

Translate

Scale

Avoid:

Heavy animations

Distracting effects

Do not install animation libraries unless explicitly requested.

---

# Performance

Prefer:

Reusable Components

Optimized Rendering

Clean State Management

Minimal Client Components

Avoid unnecessary re-renders.

---

# SEO

Use proper metadata.

Meaningful headings.

Meaningful alt text.

Proper semantic structure.

---

# Code Quality

Follow:

Clean Code

Readable Code

Maintainable Code

Scalable Code

Avoid duplication.

Reuse existing utilities.

---

# Git Convention

Commit Messages

Examples:

feat(hero): implement hero section

feat(about): add education timeline

feat(projects): add project cards

fix(navbar): resolve active link bug

refactor(about): improve component structure

style(hero): refine spacing

---

# Development Workflow

Every new feature follows:

1. Implementation

↓

2. Review

↓

3. Refactor

↓

4. Responsive Check

↓

5. Accessibility

↓

6. Performance Check

↓

7. Final Polish

Never skip this workflow.

---

# Current Progress

Completed:

- Project Foundation
- Navbar
- Hero Section
- About Layout
- About Content
- Education Timeline
- Experience Card
- Working Process

Pending:

- Strengths
- Future Goals
- Hobbies
- Resume CTA
- About Final Polish
- Skills
- Experience
- Projects
- Contact
- Footer
- SEO
- Performance Optimization
- Deployment

Update this list after completing major sections.

---

# AI Instructions

Before making any change:

1. Analyze the existing workspace.

2. Read this file completely.

3. Reuse existing architecture.

4. Reuse components.

5. Never rewrite unrelated files.

6. Never install unnecessary packages.

7. Never duplicate components.

8. Never hardcode reusable content.

9. Keep everything responsive.

10. Keep accessibility intact.

11. Keep TypeScript strict.

12. Keep the design system consistent.

13. Follow the existing coding style.

14. Keep the implementation production-ready.

15. If a requirement is unclear, preserve the current architecture and ask for clarification instead of making assumptions.

---

# Final Goal

Build a premium portfolio that demonstrates senior-level frontend engineering practices, modern UI/UX, clean architecture, and excellent maintainability while remaining fast, accessible, and recruiter-friendly.