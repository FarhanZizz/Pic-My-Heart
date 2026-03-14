export default function PhotoCard({ photo, isFavourited, onToggleFavourite }) {
  return (
    <div className="relative group rounded-xl overflow-hidden cursor-pointer bg-dark-blue aspect-[3/4]">

      {/* Image */}
      <img
        src={`https://picsum.photos/id/${photo.id}/400/530`}
        alt={photo.author}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-medium text-sm truncate">{photo.author}</p>
        <p className="text-white/50 text-xs mt-0.5">{photo.width} × {photo.height}</p>
      </div>

      {/* Heart button */}
      <button
        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
          isFavourited
            ? 'bg-crimson opacity-100'
            : 'bg-black/30 opacity-0 group-hover:opacity-100 hover:bg-crimson'
        }`}
        onClick={(e) => {
          e.stopPropagation()
          onToggleFavourite(photo)
        }}
        aria-label={isFavourited ? 'Remove from favourites' : 'Add to favourites'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill={isFavourited ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

    </div>
  )
}
