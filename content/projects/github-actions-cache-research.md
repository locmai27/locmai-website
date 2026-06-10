---
title: GitHub Actions Cache Research
date: 2024-09-01
summary: Research at RISE Lab analyzing GitHub Actions workflows to optimize cache performance — published in the ACM Digital Library.
tags:
  - Python
  - Research
  - GitHub Actions
  - CI/CD
featured: true
links:
  github: null
  demo: null
  paper: null
---

## Problem

CI cache settings in GitHub Actions are easy to misconfigure, but hard to evaluate at scale across real repositories.

## What I built

- Python tooling to extract cache-related settings from YAML in git diff patches
- Atomic file writes for safely processing **282 repositories (~60 GB)**
- Analysis pipeline averaging **22 seconds per repository (~1700 commits each)**

## Results

- Findings published in the **ACM Digital Library**
- Practical evidence for how teams configure (and misconfigure) cache behavior

## Why it matters

This project taught me to treat research like engineering: reproducible scripts, careful I/O, and results that hold up under scale.
