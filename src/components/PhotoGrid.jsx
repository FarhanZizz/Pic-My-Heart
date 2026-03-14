import PhotoCard from './PhotoCard'

const PLACEHOLDER_PHOTOS = [
  { id: '10', author: 'Paul Jarvis', width: 2500, height: 1667 },
  { id: '20', author: 'Michael Hull', width: 3872, height: 2592 },
  { id: '30', author: 'Andre Spieker', width: 4855, height: 1615 },
  { id: '40', author: 'Grafixart_photo', width: 2896, height: 1944 },
  { id: '50', author: 'Rula Sibai', width: 4272, height: 2848 },
  { id: '60', author: 'Loes Kieboom', width: 3264, height: 2448 },
]

export default function PhotoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PLACEHOLDER_PHOTOS.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  )
}
