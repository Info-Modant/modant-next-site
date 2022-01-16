import ReactFullPage from '@fullpage/react-fullpage';
import {ReactNode, ReactNodeArray} from 'react';
import {Footer} from "./Footer";

interface FullPageProps {
  children: ReactNode | ReactNodeArray
}

export function FullPage({ children }: FullPageProps) {

  return (
    <ReactFullPage
      //fullpage options
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000} /* Options here */

      render={() => {
        return (
          <ReactFullPage.Wrapper>
            { children }
            <Footer />
          </ReactFullPage.Wrapper>
        );
      }}
    />
  )
}

interface FullPageContainerProps {
  children: ReactNode | ReactNodeArray,
  className?: string,
}

export function FullPageContainer({ children, className }: FullPageContainerProps) {

  return <div className={`${ className || '' } section`}>{ children }</div>
}