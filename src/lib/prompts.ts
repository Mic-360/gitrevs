export type PromptContext = {
  metaText: string;
  treeText: string;
  readme: string;
};

/**
 * Optimized for Gemini Nano (Local Chrome AI - ~3B params).
 * Nano benefits greatly from 1-shot examples and simple, positive directives instead of complex constraints.
 */
export function generateNanoPrompt({ metaText, treeText, readme }: PromptContext): string {
  return `Summarize the provided GitHub repository details into a single direct request. Imagine you are asking an AI coding assistant to build this exact project from scratch.

Rules for your response:
1. Write EXACTLY one short paragraph (around 3 to 5 sentences).
2. Talk like a regular person requesting an app or script (e.g., "Build an app that...", "I need a...").
3. Focus entirely on what the project actually *does* and its core features. Include the main tech stack if it is available in the data.
4. Return ONLY the conversational request. Do not include quotes, titles, greetings, or explanations.

Example Good Response:
Build a command-line tool using Node.js that converts markdown files into PDF documents. I want it to read an entire folder of markdown files, apply a custom CSS theme, and save the PDFs in a new output directory. Please ensure it supports syntax highlighting for code blocks and handles images correctly.

Data to base your request on:

=== REPOSITORY METADATA ===
${metaText}

=== ROOT FILE TREE ===
${treeText}

=== README ===
${readme}

Your response:`;
}

/**
 * Optimized for Gemini 3.0 Flash / Pro via Cloud API.
 * Larger models excel at assuming specific personas, following strict negative constraints, and handling complex formatting rules without getting confused.
 */
export function generateCloudPrompt({ metaText, treeText, readme }: PromptContext): string {
  return `You are an expert at inferring how people actually prompt modern coding agents.

## Task
You are given **repository metadata**, a **root file tree**, and the **README** for a public GitHub project. Output **one synthetic user message**: the kind of prompt a non-technical or lightly technical person might paste into an AI assistant (like Cursor, Claude Code, or v0) to get this exact project built in one go.

## Content & Tone Directives
- **Plain language:** Sounds like a real user request ("Build me a website...", "I want a script that..."), not a technical architecture document.
- **Outcome focused:** Describe what the app or library should *do* for a user using everyday vocabulary.
- **Honest scope:** Only claim features or stacks you can infer from the README and tree provided. If the README is missing or uninformative, keep the requested features appropriately vague.
- **Format:** Write exactly one short paragraph (under 200 words). Do not output a bulleted list of file paths.
- **Tone:** Natural, conversational, and direct. Use contractions. 
- **Exclusions:** Do NOT include preambles ("Sure, here is..."), meta-text ("As an AI..."), quotes wrapping the prompt, or titles. Do not invent unlisted features.

## Output Format
Return ONLY the synthetic user message.

=== REPOSITORY METADATA ===
${metaText}

=== ROOT FILE TREE ===
${treeText}

=== README ===
${readme}`;
}
