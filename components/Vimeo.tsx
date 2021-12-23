
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

interface VimeoAutoplayProps {
  autoplayVideoLink: string,
}

export function VimeoAutoplay({ autoplayVideoLink }: VimeoAutoplayProps) {
  return (
    <div className="vimeo-container autoplay">
      <section className="responsive">
        <iframe frameBorder="0" allow="autoplay; fullscreen" allowFullScreen
                src={`${ autoplayVideoLink }?autoplay=1&loop=1&autopause=0&muted=1`} />
      </section>
    </div>
  )
}