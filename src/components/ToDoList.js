import React, { Component } from 'react';
import { Input,Button,List } from 'antd'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    shouldComponentUpdate(nextProps, nextState){   // 组件性能问题
        console.log(nextProps, nextState)
        // if(nextProps.content !== this.props.content){
            return true
        // }else{
        //     return false
        // }
    }
    
    render() { 
        return ( 
            <div>
                <Input 
                    addonBefore="请填写" 
                    placeholder={this.props.inputValue}
                    style={{width:'250px',margin:'10px'}} 
                    // onChange={this.changeInputValue.bind(this)}
                    onChange={this.props.changeInputValue}
                    value={this.props.inputValue}
                />
                <Button
                    style={{margin:'10px 10px 10px 0'}}
                    onClick={this.props.addListItem}
                    type="primary"
                >
                    添加
                </Button>
            
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => <List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>}
                    style={{width:'300px',margin:'10px'}}
                />
            </div>
        );
    }
}
 
export default ToDoList;