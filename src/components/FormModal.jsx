function FormModal({children, open, onClose, displayEdit, infoHeading}) {
  if (!open) return null

  function handleSubmit(e){
    e.preventDefault()
    displayEdit()
    onClose()
  }

  return(
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Modal box */}
      <div className="text-base bg-white p-6 rounded-xl w-full max-w-96 relative shadow-lg">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 hover:cursor-pointer">✕</button>
        <h2 className="text-xl font-extrabold mb-4">{infoHeading}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {children}
          <button
            type="submit"
            className="w-full bg-stone-600 text-white py-2 rounded hover:bg-stone-700 hover:cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormModal