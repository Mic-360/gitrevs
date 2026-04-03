function Footer() {
  return (
    <footer className="w-full border-t border-(--border-strong) px-4 sm:px-6 md:px-16 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center sm:items-start font-mono text-[10px] sm:text-xs uppercase tracking-widest text-(--text-muted) gap-6 bg-(--surface-alt)">
      <div className="text-center sm:text-left">
        &copy; {new Date().getFullYear()} Prompt Synthesizer
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 max-w-full overflow-hidden shrink-0">
        <span className="truncate">Model Context Protocol</span>
        <span className="w-1 h-1 bg-(--accent) rounded-full shrink-0"></span>
        <span className="truncate">Google Chrome AI</span>
      </div>
    </footer>
  );
}

export default Footer;
