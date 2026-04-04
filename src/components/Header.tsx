type HeaderProps = {
  aiMode: 'chrome' | 'api';
  setAiMode: (mode: 'chrome' | 'api') => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
};

function Header({ aiMode, setAiMode, isDark, setIsDark }: HeaderProps) {
  return (
    <header className="w-full pt-12 sm:pt-16 pb-8 px-4 sm:px-6 md:px-16 border-b border-(--border) relative">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-16 flex items-center gap-4">
        {/* AI Mode Toggle */}
        <div className="flex border border-(--border-strong) bg-(--surface-alt) p-1">
          <button
            onClick={() => setAiMode('chrome')}
            className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 transition-colors ${
              aiMode === 'chrome' ? 'bg-(--text) text-(--surface)' : 'text-(--text-muted) hover:text-(--text)'
            }`}
          >
            Chrome AI
          </button>
          <button
            onClick={() => setAiMode('api')}
            className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 transition-colors ${
              aiMode === 'api' ? 'bg-(--text) text-(--surface)' : 'text-(--text-muted) hover:text-(--text)'
            }`}
          >
            Gemini API
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="border border-(--border-strong) bg-(--surface-alt) p-2 text-(--text) hover:bg-(--accent) hover:text-(--surface) hover:border-(--accent) transition-colors flex items-center justify-center w-8 h-8"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mt-12 md:mt-0">
        <div className="max-w-full">
          <p className="font-mono text-[11px] sm:text-sm uppercase tracking-widest text-(--accent) mb-4 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-(--accent) rounded-full animate-pulse shrink-0"></span>
            {aiMode === 'chrome' ? 'Experimental // Chrome AI' : 'Cloud Endpoint // Gemini API'}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl italic tracking-tight leading-[0.9] text-(--text) wrap-break-word">
            Repo <br className="hidden sm:block" />
            <span className="text-(--text-muted)">&rarr; Prompt.</span>
          </h1>
        </div>
        <div className="text-left md:text-right md:max-w-[16rem] space-y-4 md:space-y-5">
          <p className="font-mono text-[11px] sm:text-xs leading-relaxed text-(--text-muted)">
            A high-fidelity translation engine. Converts repository metadata and
            structure into a human-like vibe-coding prompt using {aiMode === 'chrome' ? "Google's embedded Gemini Nano model" : "the Google Gemini Cloud API"}.
          </p>
          <div className="inline-block px-3 py-1.5 border border-(--border-strong) font-mono text-[10px] uppercase tracking-widest text-(--text) bg-(--surface-alt)">
            {aiMode === 'chrome' ? 'Local Execution Only' : 'Cloud API Execution'}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
