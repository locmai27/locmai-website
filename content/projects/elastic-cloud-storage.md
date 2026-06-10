---
title: Elastic Cloud Storage
date: 2024-12-10
summary: Serverless cloud storage service on AWS with Terraform infrastructure and a GitHub Actions CI/CD pipeline.
tags:
  - AWS
  - Terraform
  - Serverless
  - CI/CD
featured: true
links:
  github: null
  demo: null
  paper: null
---

## Problem

I wanted a practical cloud storage service that felt production-shaped — not just a single Lambda upload demo.

## What I built

- Storage layer with **S3**, delivery through **CloudFront**, and API routing via **API Gateway**
- Compute with **Lambda** and metadata in **DynamoDB**
- Infrastructure as code with **Terraform**
- Automated deployment through **GitHub Actions**

## Results

- End-to-end serverless architecture with repeatable deploys
- Strong foundation for talking about cloud design in interviews and research conversations

## Why it matters

This was my most complete infra project — it connected the services I'd studied into one coherent system.
