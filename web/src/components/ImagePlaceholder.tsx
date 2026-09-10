interface ImagePlaceholderProps {
  caption?: string
  width?: number
  height?: number
}

export default function ImagePlaceholder({
  caption = 'Placeholder image',
  width = 400,
  height = 250,
}: ImagePlaceholderProps) {
  return (
    <div
      className="bg-stone rounded-card flex items-center justify-center"
      style={{ width, height }}
    >
      <span className="font-body text-[14px] text-navy/50">{caption}</span>
    </div>
  )
}
