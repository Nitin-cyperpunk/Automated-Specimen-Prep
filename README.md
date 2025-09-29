<div align="center">

# CablePrep AI – Automated Specimen Preparation System

Smart India Hackathon (SIH) 2025 • Team-Elite

</div>

## Overview

CablePrep AI is an automated specimen preparation and documentation system for cable samples as per IS 10810 and IS 7098. It streamlines test specimen sizing, preparation workflows, checklists, and record-keeping with an intuitive web UI and AI-assisted guidance, reducing manual effort and errors in cable testing labs.

## Problem Statement

Automated Specimen Preparation System for testing of Cable samples as per IS 10810 and IS 7098.

## Key Features

- Intelligent specimen preparation flows aligned to IS 10810 and IS 7098
- Guided forms, validation, and dynamic calculations for specimen dimensions
- Standards-aware checklists and test documentation exports (PDF/CSV)
- Role-ready architecture for operators, reviewers, and admins
- Modern responsive UI built with React, Tailwind CSS, and shadcn-ui

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn-ui components
- React Router

## Getting Started

Prerequisites:
- Node.js 18+ and npm

Setup:
```bash
git clone <YOUR_REPO_URL>
cd cable-prep-genius-main
npm install
npm run dev
```

Build & Preview:
```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/        # UI building blocks and sections
  pages/             # Routed pages (landing, 404)
  hooks/             # Reusable hooks
  lib/               # Utilities
  main.tsx           # App entry
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Production build
- `npm run preview`: Preview the production build
- `npm run lint`: Run linting

## Customization

- Update metadata in `index.html` (title, description, social cards)
- Extend UI in `src/components` and routes in `src/pages`
- Configure Tailwind in `tailwind.config.ts`

## Roadmap (suggested)

- Standards rule engine for IS 10810/IS 7098 clauses
- User roles and authentication
- Test plan templates and specimen calculators
- Export/print-ready report layouts
- Optional backend for persistence and audit trails

## Team

Team-Elite — Smart India Hackathon (SIH) 2025

## License

MIT
