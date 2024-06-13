import React from 'react'
import LazyLoadImgModel from '../../../Models/LazyLoadImg';

const LazyLoadingImg: React.FC<LazyLoadImgModel> = (props: LazyLoadImgModel) => (
    <img src={props.src} alt={props.alt} loading="lazy" />
);

export default LazyLoadingImg;