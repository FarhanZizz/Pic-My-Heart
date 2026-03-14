import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

export default function App() {
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
        <SearchBar />
      </main>
    </div>
  )
}
