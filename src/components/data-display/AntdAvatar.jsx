import React from 'react';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const AntdAvatar = ()=>{
    return <>
        <Avatar
            alt = 'An alternative text for avatar'
            size='large'
            src='#'
            icon={<UserOutlined/>}
        />

    </>
}

export default AntdAvatar;