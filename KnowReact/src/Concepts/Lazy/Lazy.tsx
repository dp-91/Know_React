import { Suspense, lazy } from "react"
import './Lazy.css';


import kitten from '../../assets/LazyImg/cat.webp';
import LazyLoadingImg from "./LazyLoadImgSimple/LazyLoadImgSimple"
import LazyLoadingImgUsingHookObserver from "./LazyLoadingImgUsingHookObserver/LazyLoadingImgObserver";

// Use React.lazy to import the LazyComponent
const LazyComponent = lazy(() => import("./LazyLoadComponents/LazyLoadComponents"));

{/* Use Suspense to wrap the lazy-loaded component */}

const components: JSX.Element[] = [
    <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent></LazyComponent>
    </Suspense>,
    <LazyLoadingImg
    src={kitten}
    alt={'some picture of a cute cat'}
    ></LazyLoadingImg>,
    <LazyLoadingImgUsingHookObserver
    src={kitten}
    alt={'some picture of a cute cat'}
    >
    </LazyLoadingImgUsingHookObserver>

];

const Lazy = () => {
    return (<div>
        <h4>How you should use this is by going into the network tab in developer tools and setting a throttle over the network and refresh the page</h4>
        {
            components.map((x: JSX.Element, index: number) => (
                <section key={Math.random+`${index}`}>{x}</section>
            ))
        }
    </div>)
}

export default Lazy;