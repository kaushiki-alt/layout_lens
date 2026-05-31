# LayoutLens

LayoutLens is an AI-powered frontend analysis tool that helps developers understand UI structure from screenshots using Vision AI.

Upload a UI screenshot and receive AI-generated insights such as:

* Detected UI sections
* Component hierarchy
* Design style analysis
* Frontend structure breakdown
* Visual pattern recognition

## Preview

![LayoutLens Preview](./public/UIDesign.png)

## Features

### Upload & Preview

* Upload UI screenshots (PNG, JPG, WEBP)
* Instant image preview
* Drag-and-drop ready architecture

### AI Analysis

* Vision AI-powered screenshot analysis
* Automatic section detection
* Component hierarchy generation
* Design style identification
* Structured JSON-based analysis pipeline

### Analysis Dashboard

* Detected sections overview
* Component hierarchy visualization
* Copy hierarchy functionality
* Design style analysis card
* Empty, loading, and result states

## Tech Stack

* Next.js
* React
* Tailwind CSS
* OpenRouter
* Gemini Vision
* Lucide React

## Current Progress

### Completed

* Upload UI
* Image upload functionality
* Dynamic image preview
* Analysis dashboard UI
* Empty, loading, and result states
* Component hierarchy copy feature
* Vision AI integration
* OpenRouter integration
* Gemini Vision screenshot analysis
* Dynamic AI-generated results
* Dark-themed SaaS interface

### In Progress

* AI response optimization
* Improved hierarchy generation
* Better prompt engineering
* Enhanced analysis accuracy

## Planned Features

* Frontend recommendations
* Tailwind CSS suggestions
* Color palette extraction
* Accessibility insights
* Export analysis results
* Analysis history

## Getting Started

Clone the repository:

```bash
git clone <your-repo-url>
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
OPENROUTER_API_KEY=your_api_key
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Status

 MVP Completed

LayoutLens can successfully analyze UI screenshots using Gemini Vision and generate structured frontend insights in real time.