import React from "react";
import {Card, Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons'

const AntdCard = ()=>{
    const Meta = Card.Meta;
    return <>
        <Card
            actions={[<a href="/#">go home</a>, <span>just an ordinary text here</span>, <a href="/#">settings</a>]}
            bordered
            hoverable
            bodyStyle={{}}
            extra={<a href="/#">read more &rarr;</a>}
            headStyle={{background:"lightcoral"}}
        >
            <Meta
                title={'Card title'}
                description='description of this card dont know where it will be placed though'
                avatar={<Avatar icon={<UserOutlined/>} style = {{color:'royalblue'}} alt={'alternate text'}/>}
            />
            card content here
        </Card>
    </>
}

export default AntdCard;