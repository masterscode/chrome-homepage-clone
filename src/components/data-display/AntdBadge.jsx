import React from 'react';
import {Badge, Button, Typography} from 'antd';

const AntdBadge = ()=>{
    const [count, setCount] = React.useState(1);
    const {Text} = Typography;
    const ButtonGroup = Button.Group;
    return <>
        <Badge
            status='success'
            count={900}
            showZero
            title={`total of ${count} items`}
            overflowCount={900}
        />
        {/*    <Text style={{fontWeight:'bold'}}>{count}</Text>*/}
        {/*</Badge>*/}
        {/*<br/>*/}
        <ButtonGroup>
            <Button type='primary'  onClick={()=> setCount(count + 1)}>Increase Count</Button>
        <Button type={'primary'} danger onClick={()=>setCount(count - 1)}>Decrease Count</Button>
        </ButtonGroup>

    </>
}

export default AntdBadge;//Badge component is not working as expected!!!