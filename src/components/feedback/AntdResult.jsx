import React from 'react';
import {Result} from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';

const AntdResult = ()=>{
    return <>
        <Result
            title='operation error'
            status='404'
            subTitle='a subtitle to warn you of impending dangers'
            // icon={<LoadingOutlined style={{color:'red'}} />}
        />
    </>
}

export default AntdResult;