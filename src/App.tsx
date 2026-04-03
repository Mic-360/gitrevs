import { useState } from "react";
import Guide from "./components/Guide";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [repoInput, setRepoInput] = useState("Mic-360/Mic-360");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!repoInput) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      let targetRepo = repoInput
        .replace(/^(https?:\/\/)?(www\.)?github\.com\//, "")
        .replace(/\/$/, "");
      const parts = targetRepo.split("/");
      if (parts.length >= 2) {
        targetRepo = `${parts[0]}/${parts[1]}`;
      } else {
        throw new Error("Invalid repository format. Please use 'owner/repo'.");
      }

      const [metaRes, treeRes, readmeRes] = await Promise.all([
        fetch(`https://api.github.com/repos/${targetRepo}`),
        fetch(`https://api.github.com/repos/${targetRepo}/contents`),
        fetch(`https://raw.githubusercontent.com/${targetRepo}/main/README.md`),
      ]);

      if (!metaRes.ok)
        throw new Error(`Repo metadata fetch failed: ${metaRes.statusText}`);

      const meta = await metaRes.json();
      let tree = [];
      if (treeRes.ok) {
        tree = await treeRes.json();
      }

      let readme = "No README found.";
      if (readmeRes.ok) {
        readme = await readmeRes.text();
      }

      const metaText = `Description: ${meta.description}\nStars: ${meta.stargazers_count}\nPrimary Language: ${meta.language}`;
      const treeText = Array.isArray(tree)
        ? tree.map((f: any) => `- ${f.name} (${f.type})`).join("\n")
        : "Tree unavailable";

      const promptText = `Summarize the provided GitHub repository details into a single direct request. Imagine you are asking an AI coding assistant to build this exact project from scratch.

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

      const LM = window.languageModel || window.LanguageModel || window.ai?.languageModel;
      if (!LM) {
        throw new Error(
          "Chrome's built-in AI API is not available in your browser. Please ensure you are using Chrome with AI flags enabled.",
        );
      }

      const session = await LM.create();
      const syntheticPrompt = await session.prompt(promptText);
      setResult(syntheticPrompt);
      if (session.destroy) session.destroy();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full relative selection:bg-(--accent) selection:text-(--surface) overflow-x-hidden">
      {/* Header Section */}
      <Header />

      <main className="grow w-full">
        {/* INTERACTIVE SECTION */}
        <section className="w-full border-b border-(--border) px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-24 bg-(--surface-alt)">
          <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
            <div className="flex flex-col gap-4 sm:gap-6">
              <label className="font-serif text-2xl sm:text-3xl italic text-(--text) wrap-break-word">
                Identify the source repository
              </label>
              <div className="flex flex-col md:flex-row gap-0 group border border-(--border-strong) focus-within:border-(--accent) bg-(--surface) shadow-[4px_4px_0_var(--border-strong) md:shadow-[6px_6px_0_var(--border-strong) focus-within:shadow-[4px_4px_0_var(--accent) md:focus-within:shadow-[6px_6px_0_var(--accent) transition-all duration-300 w-full flex-wrap sm:flex-nowrap">
                <input
                  type="text"
                  value={repoInput}
                  onChange={(e) => setRepoInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  placeholder="e.g. facebook/react"
                  className="w-full bg-transparent px-4 sm:px-6 py-4 sm:py-5 outline-none font-mono text-base sm:text-lg md:text-xl text-(--text) placeholder:text-(--text-muted) border-b md:border-b-0 border-(--border-strong) md:flex-1 min-w-0"
                />
                <button
                  onClick={handleGenerate}
                  disabled={loading || !repoInput}
                  className="w-full md:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-(--text) text-(--surface) font-mono text-[13px] sm:text-sm uppercase tracking-widest border-t-0 md:border-l border-(--border-strong) hover:bg-(--accent) hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed group-focus-within:border-(--accent) shrink-0"
                >
                  {loading ? "Synthesizing..." : "Execute"}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-4 sm:p-5 border-l-2 border-(--accent) bg-(--surface) font-mono text-[13px] sm:text-sm text-(--accent) shadow-[4px_4px_0_rgba(0,0,0,0.05) warp-break-words w-full">
                [Error] {error}
              </div>
            )}

            {result && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col gap-4 sm:gap-6 mt-2 md:mt-4">
                <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-end border-b border-(--border-strong) pb-3 sm:pb-4 gap-3">
                  <h3 className="font-serif text-xl sm:text-2xl italic text-(--text-muted) warp-break-words">
                    Synthesized Prompt
                  </h3>
                  <button
                    onClick={() => navigator.clipboard.writeText(result)}
                    className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-(--text) hover:text-(--accent) transition-colors text-left"
                  >
                    [ Copy to Clipboard ]
                  </button>
                </div>
                <div className="p-6 sm:p-8 md:p-12 bg-(--surface) border border-(--border-strong) shadow-[4px_4px_0_var(--border-strong) md:shadow-[8px_8px_0_var(--border-strong) relative w-full">
                  <div className="absolute top-0 left-0 w-1 md:w-1.5 h-full bg-(--accent)" />
                  <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-(--text) selection:bg-(--accent) selection:text-white warp-break-words">
                    {result}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* GUIDE SECTION */}
        <Guide />
      </main>

      <Footer />
    </div>
  );
}

export default App;
