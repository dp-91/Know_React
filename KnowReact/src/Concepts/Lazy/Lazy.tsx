import { Suspense } from "react"
import LazyLoadingImg from "./LazyLoadImg/LazyLoadImg"
import React from "react";

// Use React.lazy to import the LazyComponent
const LazyComponent = React.lazy(() => import("./LazyLoadComponents/LazyLoadComponents"));

{/* Use Suspense to wrap the lazy-loaded component */}

const components: JSX.Element[] = [
    <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent></LazyComponent>
    </Suspense>,
    <LazyLoadingImg></LazyLoadingImg>,
];

const Lazy = () => {
    console.log(components);
    return (<div>
        {
            components.map((x: JSX.Element, index: number) => (
                <section key={Math.random+`${index}`}>{x}</section>
            ))
        }
    </div>)
}

export default Lazy;