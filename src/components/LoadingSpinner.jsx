export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-4">
      <div className="w-10 h-10 border-4 border-ocean border-t-crimson rounded-full animate-spin" />
      <p className="text-white/40 text-sm">Loading photos...</p>
    </div>
  )
}
