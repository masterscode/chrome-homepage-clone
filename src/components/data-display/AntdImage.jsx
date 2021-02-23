import React from "react";
import { Image } from 'antd';

const AntdImage = ()=>{
    const handleError = (e)=>{
        // console.log(e.currentTarget)
    }
    return <>
        <Image alt={'random human'} src={'#'} placeholder  onError={handleError}/>
    </>
}

export default AntdImage;