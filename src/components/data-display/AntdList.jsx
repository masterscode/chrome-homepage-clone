import React from "react";
import { List } from 'antd';

const AntdList = ()=>{
    const {Item} = List;
    const {Meta} = Item;
    return <>
        <List>
            <List>
                <Meta />
            </List>
        </List>
    </>
}

export default AntdList;