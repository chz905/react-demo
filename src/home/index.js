import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
        }
        this.props.history.push('/order')
    }
    componentWillUnmount(){
        this.setState = ()=>false;
    }
    componentDidMount(){
        this.findList()
    }
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>this.goDetails(index)}>
                                    <Link to={`/list/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
         );
    }
    findList(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                list: res.data
            })
        })
    }
    goDetails(index){
        console.log(index)
    }
}
 
export default Index;