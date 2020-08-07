import React, { Component, Fragment } from "react"
import '../css/css.css'
import ListItme from '../components/list'
import TodoList from './todoList'
// import axios from 'axios'

import { Input,Button } from 'antd'

class Home extends Component {
    // 在某一时刻，可以自动执行的函数
    constructor(props) {
        super(props);
        this.state = {
            value: 'xxx',
            list: ['第一列', '第二列']
        }
    }
    
    // componentWillMount(){
    //     console.log('componentWillMount --- DOM 挂载 ‘之前’ 执行')
    // }
    componentDidMount(){
        this.init()
        // console.log('componentDidMount --- DOM 挂载 ‘之后’ 执行')
    }
    // shouldComponentUpdate(){
    //     console.log('1 - shouldComponentUpdate --- 组价更新之前执行的')
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('2 - componentWillUpdate --- shouldComponentUpdate 之后执行')
    // }

    // componentDidUpdate(){
    //     console.log('4 - componentDidUpdate ---  组件更新完之后执行')
    // }

    
    render() {
        // console.log('3 - render --- DOM 渲染')
        return (
            <Fragment>
                <Input
                    addonBefore="请填写" 
                    placeholder="Basic usage" 
                    style={{width:'250px',margin:'10px'}} 
                    ref={input => {this.input=input}}
                    value={this.state.value} 
                    onChange={this.inputChange.bind(this)} 
                />
                <Button 
                    onClick={this.addList.bind(this)} 
                    type="primary"
                    style={{margin:'10px 10px 10px 0'}}
                >
                    增加
                </Button>
                {/* <button ></button> */}
                <ul ref ={ ul => {this.ul = ul} }>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <ListItme
                                    title="哈哈"
                                    content={item}
                                    key={index + item}
                                    index={index}
                                    deleteListItem={this.deleteListItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>

                <TodoList 
                    data={this.state.list}
                />
            </Fragment>
        );
    }
    inputChange(e) {
        this.setState({
            value: this.input.value
        })
    }
    addList() {
        if(this.state.value === ''){
            console.log('不能为空')
        }else{
            this.setState({
                // list:[...this.state.list,this.state.value],
                list: this.state.list.concat(this.state.value),
                value: ''
            },()=>{
                console.log(this.ul.querySelectorAll('li').length)
            })
        }
    }
    deleteListItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({ list: list })
    }
    // 请求
    async init(){
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(res => {console.log(res.data)})
        // .catch(error => {console.log(error)})
    }
}

export default Home;