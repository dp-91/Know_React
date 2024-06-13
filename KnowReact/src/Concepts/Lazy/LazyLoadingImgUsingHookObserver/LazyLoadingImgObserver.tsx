import useLazyLoad from "../../../Hooks/useLazyLoad/useLazyLoad";
import LazyLoadImgModel from "../../../Models/LazyLoadImg";

const LazyLoadingImgUsingHookObserver = (props: LazyLoadImgModel) => {
    const [ref, isIntersecting] = useLazyLoad();
    return (
      <img
        ref={ref}
        src={isIntersecting ? props.src : ''}
        alt={props.alt}
        style={{ minHeight: '200px', minWidth: '200px' }}
      />
    );
};

export default LazyLoadingImgUsingHookObserver;
