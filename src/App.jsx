import { useState, useCallback, useMemo } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import PhotoGrid from './components/PhotoGrid'
import LoadingSpinner from './components/LoadingSpinner'
import useFetchPhotos from './hooks/useFetchPhotos'

export default function App() {
  const { photos, loading, error } = useFetchPhotos()
  const [searchQuery, setSearchQuery] = useState('')

  // useCallback keeps a stable function reference across renders
  // without it, a new function would be passed to SearchBar on every render
  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value)
  }, [])

  // useMemo only recomputes the filtered list when photos or searchQuery changes
  // prevents re-filtering on every unrelated render
  const filteredPhotos = useMemo(() => {
    if (!searchQuery.trim()) return photos
    return photos.filter((p) =>
      p.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [photos, searchQuery])

  return (
    <div className="min-h-screen bg-navy">
      <Navbar favouriteCount={0} showFavourites={false} onToggleFavourites={() => {}} />
      <main>
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-2">
          <h1 className="text-2xl font-semibold text-white/90" style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore Photos
          </h1>
          <p className="text-white/40 text-sm mt-1">30 photos from Picsum</p>
        </div>

        <SearchBar value={searchQuery} onChange={handleSearchChange} />

        {loading && <LoadingSpinner />}

        {error && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-crimson/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4m0 4h.01"/>
            </svg>
            <p className="text-crimson text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <PhotoGrid
            photos={filteredPhotos}
            emptyMessage="No photos match your search."
          />
        )}
      </main>
    </div>
  )
}
