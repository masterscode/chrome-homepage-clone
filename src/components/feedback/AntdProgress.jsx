import React from "react";
import {Progress} from 'antd';

const AntdProgress = ()=>{
    return <>
        <Progress
            type='dashboard'
            size='default'
            // status={'success'}
            success={{percent:100, strokeColor:'royalblue'}}
        />
    </>
}

export default AntdProgress;