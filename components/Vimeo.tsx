import ReactPlayer from 'react-player';

interface VimeoProps {
  src: string,
  title: string,
  titleInHyphens: string,
}

export function Vimeo({ titleInHyphens, src }: VimeoProps) {
  return (
    <div className="vimeo-container" id={`vimeo-container-for-${ titleInHyphens }`}>
      <section className="responsive">
        <ReactPlayer url={ src } className="react-player" allowFullScreen width="100%" height="100%" controls={ true } />
      </section>
    </div>
    )
}

interface VimeoAutoplayProps {
  url: string,
}

export function VimeoAutoplay({ url }: VimeoAutoplayProps) {
  return (
    <div className="vimeo-container autoplay">
      <section className="responsive">
        <ReactPlayer url={ url } className="react-player" playing muted width="100%" height="100%"
          config={{ vimeo: { playerOptions: { background: true }}}}
        />
      </section>
    </div>
  )
}