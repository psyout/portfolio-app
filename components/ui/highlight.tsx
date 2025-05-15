export function parseHighlightedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g) // Split by **highlight**
  return parts.map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <span key={index} className='highlight'>
        {part.slice(2, -2)} {/* Remove the ** */}
      </span>
    ) : (
      part
    )
  )
}
