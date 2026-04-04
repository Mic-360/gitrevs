# Repo &rarr; Prompt Synthesizer

A high-fidelity translation engine running directly in your browser. This application converts public GitHub repositories into human-like "vibe-coding" requests using either **Google's embedded Gemini Nano model** or the **Gemini Cloud REST API**.

![sample output](/public/image.png)

> Link to the Hakai Repo to verify how good the generated prompt is: https://github.com/Mic-360/hakai

## Features

- **Dual-Mode Inference Engine**:
  - **Local Execution (Chrome AI)**: Parses repository context completely locally using Chrome's experimental AI Prompt API. Zero external tracking or server-side API processing required.
  - **Cloud API Execution**: Dynamically switches the application to use the Gemini Developer REST APIs. Supports a live Model Engine selector switching between **3.0 Flash**, **3.1 Flash-Lite**, and **3.1 Pro**.
- **Local Obfuscated Key Store**: When operating in API mode, the application secures your Gemini API key in `localStorage` via a local XOR/Base64 obfuscator, protecting the raw string from casual inspection.
- **Dynamic Prompt Engine**: Houses uniquely optimized, mode-specific prompt templates `generateNanoPrompt` (1-shot structural directives) and `generateCloudPrompt` (large-model persona constraint directives) to ensure peak inference performance based on model parameter count.
- **Repository Parsing**: Automatically fetches and aggregates project metadata, depth-1 file trees, and `README.md` contents directly from the GitHub API.
- **High-End UI**: Features a distinctive, luxury-editorial "Neo-Technical" aesthetic. Built with Tailwind CSS and styled exclusively with a curated "Sage Green" accent identity alongside full Dark/Light mode theme syncing.
- **Fully Responsive**: Flawless interface scaling and horizontal overflow protections, adapting cleanly from tiny mobile displays up to ultrawide desktops.

## Getting Started

1. Clone this repository locally.
2. Install the necessary dependencies:
   ```bash
   bun install
   # or npm install
   ```
3. Start the Vite development server:
   ```bash
   bun run dev
   # or npm run dev
   ```

## Prerequisites for Chrome AI (Local Execution)

If you plan to utilize the Local Chrome AI mode, your browser must meet the requirements of the `window.ai.languageModel` experimental API.

1. **Update Chrome**: Ensure you are running Google Chrome version `127` or higher.
2. **Enable Flags**:
   - Navigate to `chrome://flags`
   - Set **Prompt API for Gemini Nano** to `Enabled`
   - Set **Optimization Guide On Device Model** to `Enabled BypassPerfRequirement`
   - Relaunch Chrome.
3. **Download the Model**:
   - Navigate to `chrome://components`
   - Find `Optimization Guide On Device Model` and click "Check for update".
   - Wait for the model to download (this may take a few minutes).

## Stack & Architecture

- **React & TypeScript**
- **Vite**
- **Tailwind CSS v4**

The application has been heavily modularized for professional maintainability:
- `App.tsx`: Global layout, Theme routing, LocalStorage hydration, and overarching Mode state (`aiMode`, `cloudModel`).
- `PromptGenerator.tsx`: Core functional logic handling repository fetching, conditional dual-API routing, and interactive layout generation.
- `lib/prompts.ts`: Isolated string manipulation handlers optimized specifically for Nano (~3B) vs Cloud models.
- `lib/crypto.ts`: Local client-side XOR algorithms mapping to User LocalStorage for key persistence.
- `ApiGuide.tsx` & `NanoGuide.tsx`: Contextual documentation components that conditionally render based on the active synthesis mode.
- `chrome-ai.d.ts`: Isolated TypeScript definitions for the experimental Chrome `window.ai` spec.
