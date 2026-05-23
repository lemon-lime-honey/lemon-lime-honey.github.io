export default function Footer() {
  return (
    <footer className="border-t border-base-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a
              href="/"
              className="text-2xl font-display font-bold tracking-tight hover:text-primary transition-colors duration-200">
              C A N D Y
            </a>
            <p className="text-base-content/70 text-sm leading-relaxed">
              A clean, modern portfolio blog showcasing design and development work.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-base-content">Navigation</h3>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-base-content/70 text-sm hover:text-primary transition-colors duration-200"> Home </a>
              <a href="/blog" className="text-base-content/70 text-sm hover:text-primary transition-colors duration-200"> Blog </a>
              <a href="/about" className="text-base-content/70 text-sm hover:text-primary transition-colors duration-200"> About </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4 text-base-content">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/lemon-lime-honey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 hover:text-primary transition-colors duration-200"
                aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-base-300">
          <p className="text-center text-base-content/70 text-sm">
            Copyright {new Date().getFullYear()} C A N D Y. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
