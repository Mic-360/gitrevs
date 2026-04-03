function Header() {
  return (
    <header className="w-full pt-12 sm:pt-16 pb-8 px-4 sm:px-6 md:px-16 border-b border-(--border) relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
        <div className="max-w-full">
          <p className="font-mono text-[11px] sm:text-sm uppercase tracking-widest text-(--accent) mb-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-(--accent) rounded-full animate-pulse shrink-0"></span>
            Experimental // Chrome AI
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl italic tracking-tight leading-[0.9] text-(--text) wrap-break-word">
            Repo <br className="hidden sm:block" />
            <span className="text-(--text-muted)">&rarr; Prompt.</span>
          </h1>
        </div>
        <div className="text-left md:text-right md:max-w-[16rem] space-y-4 md:space-y-5">
          <p className="font-mono text-[11px] sm:text-xs leading-relaxed text-(--text-muted)">
            A high-fidelity translation engine. Converts repository metadata and
            structure into a human-like vibe-coding prompt using Google's
            embedded Gemini Nano model.
          </p>
          <div className="inline-block px-3 py-1.5 border border-(--border-strong) font-mono text-[10px] uppercase tracking-widest text-(--text) bg-(--surface-alt)">
            Local Execution Only
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
