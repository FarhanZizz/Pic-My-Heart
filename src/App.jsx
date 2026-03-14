import { useReducer, useEffect, useState, useCallback, useMemo } from 'react'
import Navbar from './components/navbar'
import SearchBar from './components/SearchBar'
import PhotoGrid from './components/PhotoGrid'
import LoadingSpinner from './components/LoadingSpinner'
import useFetchPhotos from './hooks/useFetchPhotos'
import { favouritesReducer, initialState } from './hooks/favouritesReducer'

export default function App() {
  const { photos, loading, error } = useFetchPhotos()
  const [state, dispatch] = useReducer(favouritesReducer, initialState)
  const [searchQuery, setSearchQuery] = useState('')

  // Rehydrate favourites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('pmh_favourites')
    if (stored) {
      dispatch({ type: 'LOAD_FAVOURITES', payload: JSON.parse(stored) })
    }
  }, [])

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value)
  }, [])

  const handleToggleFavourite = useCallback((photo) => {
    dispatch({ type: 'TOGGLE_FAVOURITE', payload: photo })
  }, [])

  const filteredPhotos = useMemo(() => {
    if (!searchQuery.trim()) return photos
    return photos.filter((p) =>
      p.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [photos, searchQuery])

  return (
    <div className="min-h-screen bg-navy">
      <Navbar
        favouriteCount={state.favourites.length}
        showFavourites={false}
        onToggleFavourites={() => {}}
      />
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
            favourites={state.favourites}
            onToggleFavourite={handleToggleFavourite}
            emptyMessage="No photos match your search."
          />
        )}
      </main>
    </div>
  )
}
