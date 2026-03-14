const Navbar = () => {
  return (
    <nav className="bg-dark-blue border-b border-ocean sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="64" height="64" rx="14" fill="#1a1a2e" />
            <rect x="9" y="23" width="46" height="32" rx="4" fill="#e94560" />
            <rect x="9" y="17" width="16" height="8" rx="2" fill="#e94560" />
            <rect x="28" y="15" width="15" height="4" rx="2" fill="#c73652" />
            <circle
              cx="32"
              cy="39"
              r="10"
              fill="#0f3460"
              stroke="#c73652"
              strokeWidth="1.5"
            />
            <circle cx="32" cy="39" r="7" fill="#16213e" />
            <circle cx="32" cy="39" r="4" fill="#0f3460" />
            <path
              d="M28 36 Q32 31 36 36 Q40 41 32 46 Q24 41 28 36Z"
              fill="white"
              opacity="0.95"
            />
          </svg>
          <span className="text-white font-semibold text-lg tracking-wide">
            Pic My <span className="text-crimson">Heart</span>
          </span>
        </div>

        {/* Favourites count badge */}
        <div className="flex items-center gap-2 text-sm text-white/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-crimson"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>Favourites</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
