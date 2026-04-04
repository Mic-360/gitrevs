export type PromptContext = {
  metaText: string;
  treeText: string;
  readme: string;
};

// ─────────────────────────────────────────────────────────
// GEMINI NANO — Chrome Built-in AI (~3B parameters)
// ─────────────────────────────────────────────────────────
// Design rationale:
//   • Extremely short system text — Nano's tiny context window
//     and shallow reasoning mean every token of instruction competes
//     with the actual repo data for attention.
//   • One concrete 1-shot example — small models learn formats
//     far more reliably from demonstration than from rules.
//   • Positive, imperative directives only — Nano poorly handles
//     negation ("do NOT...") and meta-instructions.
//   • Explicit "Your response:" cue to trigger generation.

export function generateNanoPrompt({ metaText, treeText, readme }: PromptContext): string {
  return `Read the repository data below. Write one short paragraph (3-5 sentences) that sounds like a person asking an AI to build this exact project from scratch.

Example:
Build me a CLI tool in Rust that watches a folder of Markdown files and live-converts them to a static site. It should support custom CSS themes, automatic syntax highlighting for code blocks, and output everything into a dist/ folder. Hot-reload in dev mode would be great.

Repository data:

${metaText}

File tree:
${treeText}

README:
${readme}

Your response:`;
}

// ─────────────────────────────────────────────────────────
// GEMINI 3.0 FLASH — Cloud API (mid-tier, fast)
// ─────────────────────────────────────────────────────────
// Design rationale:
//   • Flash 3.0 is the balanced workhorse — great at following
//     structured instructions with moderate complexity.
//   • Uses a clear persona + task/rules/output tri-section format
//     which Flash models are trained to follow faithfully.
//   • Explicit word budget and anti-hallucination guardrails
//     without overloading the instruction surface.
//   • Avoids chain-of-thought scaffolding (unnecessary overhead
//     for this model tier on a synthesis task).

export function generateFlashPrompt({ metaText, treeText, readme }: PromptContext): string {
  return `You convert GitHub repository data into realistic user prompts.

## Task
Given the repository metadata, file tree, and README below, write a single paragraph that reads like a real person asking an AI coding assistant to build this exact project from scratch.

## Rules
1. Write in first person, casual tone — contractions, everyday vocabulary. Example openers: "Build me a...", "I need a...", "Create a web app that...".
2. Focus on what the project DOES for a user, not internal architecture. Mention the primary tech stack only if it is clearly stated in the provided data.
3. Stay strictly within the scope of what the data shows. If the README is vague, keep the request appropriately general. Never invent features not evidenced in the data.
4. Keep it between 60-150 words — one paragraph, no bullet points, no numbered lists, no file paths.
5. Return ONLY the synthetic prompt. No preamble, no quotes, no titles, no meta-commentary.

## Repository Data

### Metadata
${metaText}

### File Tree
${treeText}

### README
${readme}`;
}

// ─────────────────────────────────────────────────────────
// GEMINI 3.1 FLASH-LITE — Cloud API (smallest cloud model)
// ─────────────────────────────────────────────────────────
// Design rationale:
//   • Flash-Lite is optimized for speed and cost at the expense
//     of nuance — it's a small, fast cloud model.
//   • Mirrors Nano's philosophy but with slightly more room:
//     short imperative instructions, one concrete example,
//     minimal negative constraints.
//   • Uses a numbered step format (do X, then Y) which small
//     models follow more reliably than prose-style instructions.
//   • Hard word cap stated numerically for reliable adherence.

export function generateFlashLitePrompt({ metaText, treeText, readme }: PromptContext): string {
  return `Turn the GitHub repository data below into a user request.

Instructions:
1. Write ONE paragraph (60-120 words) that sounds like a person asking an AI to build this project.
2. Use casual, first-person language. Start with something like "Build me..." or "I want...".
3. Describe what the project does and name the main tech stack if visible in the data.
4. Only mention features that are shown in the data. Do not make things up.
5. Output the paragraph only — nothing else.

Example output:
I want a Next.js dashboard that pulls analytics data from a Postgres database and displays it with interactive charts. It should have user auth, dark mode, and let me export reports as PDF. Make it responsive and fast.

---

Metadata:
${metaText}

File tree:
${treeText}

README:
${readme}

Output:`;
}

// ─────────────────────────────────────────────────────────
// GEMINI 3.1 PRO — Cloud API (most capable model)
// ─────────────────────────────────────────────────────────
// Design rationale:
//   • Pro is the strongest reasoner — it benefits from rich
//     persona framing, nuanced tone directives, and explicit
//     quality criteria that weaker models would ignore.
//   • "Think step by step" scaffolding (internalized, not
//     output) improves synthesis quality on complex repos.
//   • Detailed anti-pattern list — Pro reliably avoids listed
//     failure modes, unlike smaller models where long negative
//     constraints cause confusion.
//   • Quality rubric gives Pro a self-evaluation frame that
//     elevates output consistency.

export function generateProPrompt({ metaText, treeText, readme }: PromptContext): string {
  return `You are a prompt-synthesis specialist. Your job is to reverse-engineer a GitHub repository into the kind of message a real person would paste into a coding AI (Cursor, Claude Code, Lovable, v0, etc.) to get this exact project built from scratch.

## Internal Process (do not output this)
Before writing, silently:
1. Identify the project's primary purpose and target user.
2. Extract the core feature set from the README and file tree.
3. Note the tech stack (languages, frameworks, key dependencies).
4. Decide which details are essential vs. noise for a user-style request.

## Writing Directives
- **Voice:** A motivated but non-expert builder. They know what they want but describe it in outcomes, not implementation. Use first person, contractions, and natural phrasing.
- **Scope honesty:** Only reference features and technologies clearly evidenced in the provided data. If the README is absent or minimal, the request should be proportionally concise and open-ended. Never fabricate capabilities.
- **Structure:** One cohesive paragraph, 80-180 words. No headers, bullet points, numbered lists, code blocks, or file paths. The paragraph should flow logically from the project's purpose → key features → any notable technical preferences.
- **Tone calibration:** Match the ambition of the repo. A weekend side-project should sound casual ("Throw together a quick..."); a production system should sound intentional ("Build a production-ready...").

## Anti-Patterns to Avoid
- Starting with "Sure," "Here is," or any AI-acknowledging prefix.
- Wrapping the output in quotes or labeling it.
- Listing internal files or directory structure.
- Using jargon the described user wouldn't naturally use.
- Inventing features, integrations, or scale requirements not in the data.

## Quality Bar
The output should be indistinguishable from a genuine user message on a platform like Reddit's r/SideProject, Indie Hackers, or a Discord #build-requests channel.

## Repository Data

### Metadata
${metaText}

### Root File Tree
${treeText}

### README
${readme}`;
}

// ─────────────────────────────────────────────────────────
// Selector — maps model ID to the correct prompt generator
// ─────────────────────────────────────────────────────────

export type CloudModel = 'flash' | 'pro' | 'flash-lite';

export function generateCloudPrompt(
  ctx: PromptContext,
  model: CloudModel = 'flash',
): string {
  switch (model) {
    case 'pro':
      return generateProPrompt(ctx);
    case 'flash-lite':
      return generateFlashLitePrompt(ctx);
    case 'flash':
    default:
      return generateFlashPrompt(ctx);
  }
}
