export default function SearchBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="relative max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          placeholder="Search by author..."
          className="w-full bg-dark-blue border border-ocean rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-crimson transition-colors duration-200"
        />
      </div>
    </div>
  )
}
