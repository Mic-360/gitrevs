function Footer() {
  return (
    <footer className="w-full border-t border-(--border-strong) bg-(--surface-alt)">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center sm:items-start font-mono text-[10px] sm:text-xs uppercase tracking-widest text-(--text-muted) gap-6">
        <div className="text-center sm:text-left flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Prompt Synthesizer</span>
          <span className="w-1 h-1 bg-(--accent) rounded-full shrink-0"></span>
          <span>
            Built with ❤️ by{" "}
            <a
              href="http://github.com/mic-360"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bhaumic
            </a>
          </span>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 max-w-full overflow-hidden shrink-0">
          <span className="truncate">Built-in Google Chrome AI</span>
          <span className="w-1 h-1 bg-(--accent) rounded-full shrink-0"></span>
          <span className="truncate">Gemini Nano</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
