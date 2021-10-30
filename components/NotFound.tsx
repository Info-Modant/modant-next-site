import {SVGProps} from "react";
import {Button} from "./smallcomponents/Button";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from "next/router";
import {ViNotFound} from "../public/svgs/VectorImages";

export function NotFound() {

  const { push } = useRouter();

  return (
    <WarningBox title="Unfortunately this page is not available"
                description="The link may be broken, or the page may have been removed"
                infoGraphics={ <ViNotFound /> }
                button={ {
                  onClick: () => push('/portfolio'),
                  description: "Back to portfolio"
                } } />
  )
}

export interface WarningBoxProps {
  title: string,
  description: string,
  button?: {
    description: string,
    onClick: () => void,
  },
  infoGraphics: SVGProps<SVGSVGElement>
}

export default function WarningBox({ title, description, button, infoGraphics }: WarningBoxProps) {

  return (
    <div className="not-found-container">
      <section>
        <div className="vector-container">{ infoGraphics }</div>

        <h3>{ title }</h3>
        <p>{ description }</p>
        {
          button &&
          <Button leftIcon={ faChevronLeft }
                      onClick={ button.onClick }>
            { button.description }
          </Button>
        }
      </section>
    </div>
  )
}