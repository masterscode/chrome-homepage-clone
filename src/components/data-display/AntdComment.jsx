import React from 'react';
import  {Comment} from 'antd';
import {UserOutlined} from '@ant-design/icons';
const AntdComment = ()=>{
    return <>
        <Comment
            author={'emmanuel'}
            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto iusto officia praesentium provident quae sed voluptas! Adipisci consequatur doloribus eaque illum itaque nisi perferendis praesentium ullam! Architecto, dicta, mollitia!'}
            avatar={<UserOutlined/>}
        />
    </>
}


export default AntdComment;