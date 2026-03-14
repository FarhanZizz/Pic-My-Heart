import PhotoCard from './PhotoCard'

export default function PhotoGrid({ photos, favourites, onToggleFavourite, emptyMessage }) {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-white/30">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <p className="text-sm">{emptyMessage || 'No photos found'}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourited={favourites.some((f) => f.id === photo.id)}
            onToggleFavourite={onToggleFavourite}
          />
        ))}
      </div>
    </div>
  )
}
