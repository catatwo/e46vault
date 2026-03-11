# Contributing to E46 Vault

Thank you for your interest in contributing to E46 Vault! This project aims to be the most comprehensive and accurate BMW E46 330i/Ci/xi knowledge base.

## How to Contribute

### Reporting Issues
- **Content Correction**: Found incorrect information? Use the "Content Correction" issue template
- **Missing Content**: Know something that should be documented? Use the "New Content" issue template
- **Part Numbers**: Have updated or superseded part numbers? Use the "Part Number Update" template

### Submitting Changes
1. Fork the repository
2. Create a feature branch (`git checkout -b content/add-vanos-rebuild-guide`)
3. Make your changes following the content guidelines below
4. Submit a Pull Request

### Content Guidelines
- All technical information must be verifiable (cite sources: TIS, ETK, Bentley manual, etc.)
- Part numbers must be validated against BMW ETK or realoem.com
- Torque specifications must reference official BMW TIS data
- Use MDX format for all content pages
- Include proper frontmatter with difficulty, tools required, and applicable models
- Write in clear, concise English suitable for DIY mechanics of all skill levels

### Frontmatter Requirements
Every content page should include:
```yaml
---
title: "Page Title"
description: "Brief description for SEO and search"
sidebar:
  order: 1
difficulty: "beginner" | "intermediate" | "advanced" | "expert"
applicableModels: ["330i", "330Ci", "330xi"]
---
```

### Style Guide
- Use sentence case for headings
- Use metric units first, imperial in parentheses
- Format part numbers with spaces: `11 12 7 588 412` (not `11127588412`)
- Use the custom components (`PartNumber`, `TorqueSpec`, `ToolList`, etc.) where applicable
- Include warnings for safety-critical procedures

## Code of Conduct
Be respectful, accurate, and helpful. We're all here because we love these cars.
