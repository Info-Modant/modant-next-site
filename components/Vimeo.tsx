
interface VimeoProps {
  src: string,
  title: string,
  titleInHyphens: string,
}

export function Vimeo({ titleInHyphens, ...props }: VimeoProps) {
  return (
    <div className="vimeo-container" id={`vimeo-container-for-${ titleInHyphens }`}>
      <section className="responsive">
        <iframe frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen { ...props } />
      </section>
    </div>
    )
}