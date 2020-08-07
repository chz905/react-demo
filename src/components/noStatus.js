// 无状态组件

import React from 'react';
import { Input,Button,List } from 'antd'
const TdList =(props) => {
    // console.log(props,'无状态组件')
    return ( 
        <div>
            <Input 
                addonBefore="无状态组件" 
                placeholder={props.inputValue}
                style={{width:'250px',margin:'10px'}} 
                onChange={props.changeInputValue}
                value={props.inputValue}
            />
            <Button
                style={{margin:'10px 10px 10px 0'}}
                onClick={props.addListItem}
                type="primary"
            >
                添加
            </Button>
        
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => <List.Item onClick={()=>{props.deleteItem(index)}}>{item.title}</List.Item>}
                style={{width:'300px',margin:'10px'}}
            />
        </div>
    );
}


 
export default TdList;