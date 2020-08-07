import React, { Component } from 'react';
// import { Input,Button,List } from 'antd'
import store from '../store'
import axios from 'axios'
// import {CHANGE_INPUT,ADD_ITEM,DELETE} from '../store/actionTypes'
import {changeInputAction,addItemAction,deleteItemAction,findList} from '../store/actionCreators'
import TdList from '../components/ToDoList'
import NoStatus from '../components/noStatus'

class ToDoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState())
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.addListItem=this.addListItem.bind(this)
    }
    componentDidMount(){
        this.init()
    }
    render() { 
        return ( 
            <div>
                {/* <Input
                    addonBefore="请填写" 
                    placeholder={this.state.inputValue}
                    style={{width:'250px',margin:'10px'}} 
                    onChange={this.changeInputValue.bind(this)}
                    value={this.state.inputValue}
                />
                <Button
                    style={{margin:'10px 10px 10px 0'}}
                    onClick={this.addListItem}
                    type="primary"
                >
                    添加
                    {this.state.inputValue}
                </Button>

                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item onClick={()=> this.deleteItem(index)}>{item}</List.Item>}
                    style={{width:'300px',margin:'10px'}}
                /> */}

                <TdList 
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    changeInputValue={this.changeInputValue}
                    addListItem={this.addListItem}
                    deleteItem={this.deleteItem}
                />

                <NoStatus 
                    inputValue={this.state.inputValue}
                    list={this.state.listGroup}
                    changeInputValue={this.changeInputValue}
                    addListItem={this.addListItem}
                    deleteItem={this.deleteItem}
                />
            </div>

         );
    }
    changeInputValue(e){
        // const action = {type: CHANGE_INPUT,value: e.target.value}
        // store.dispatch(action)
        store.dispatch(changeInputAction(e.target.value))
    }
    

    addListItem(){
        // const action = {type:ADD_ITEM}
        store.dispatch(addItemAction())
    }
    storeChange(){
        this.setState(store.getState())
    }
    deleteItem(index){
        console.log(index)
        console.log(deleteItemAction(index))
        store.dispatch(deleteItemAction(index))
    }

    // 请求
    async init(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            store.dispatch(findList(res.data))
        })
        .catch(error => {console.log(error)})
    }
}
 
export default ToDoList;