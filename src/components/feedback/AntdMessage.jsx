import React from "react";
import {message, Button} from 'antd';


const AntdMessage = ()=>{
    const handleClick = async ()=>{
        await message.warning('message content')
    }
    return <>
        <Button type={'primary'} shape={'round'} onClick={handleClick}>click for messge</Button>
    </>
}

export default  AntdMessage;