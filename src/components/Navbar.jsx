export default function Navbar({
  favouriteCount,
  showFavourites,
  onToggleFavourites,
}) {
  return (
    <nav className="bg-dark-blue border-b border-ocean sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
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
          <span className="text-white font-medium text-lg tracking-wide">
            Pic My <span className="text-crimson">Heart</span>
          </span>
        </div>

        {/* Favourites toggle button */}
        <button
          onClick={onToggleFavourites}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
            showFavourites
              ? "bg-crimson border-crimson text-white"
              : "border-ocean text-white/70 hover:border-crimson hover:text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill={showFavourites ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>Favourites</span>
          {favouriteCount > 0 && (
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                showFavourites
                  ? "bg-white/20 text-white"
                  : "bg-crimson text-white"
              }`}
            >
              {favouriteCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
