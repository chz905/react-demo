import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListItme extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    /*
        1.组件第一次存在于DOM中 函数是不会执行的
        2.如果已经存在于DOM中 函数才会被执行
    */
    // componentWillReceiveProps(){
    //     console.log('1 - 子组件 --- componentWillReceiveProps')
    // }

    // componentWillUnmount(){
    //     console.log('2 - 子组件 --- componentWillUnmount 组件卸载')
    // }

    shouldComponentUpdate(nextProps, nextState){   // 组件性能问题
        console.log(nextProps, nextState)
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render() { 
        return ( 
            <li>
                {this.props.title} 标题 - {this.props.content}
                <span onClick={this.deleteItem.bind(this)}>删除</span>
            </li>
         );
    }
    deleteItem(){
        console.log(this.props)
        this.props.deleteListItem(this.props.index)
    }
}

ListItme.propTypes={
    title:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteListItem:PropTypes.func
}
ListItme.defaultProps={
    title:'默认值'
}


export default ListItme;