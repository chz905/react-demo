import React, { Component } from 'react';
import axios from 'axios'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         }
    }
    componentDidMount(){
        this.findList()
    }
    render() { 
        return ( 
            <div>
                <ul>
                    
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
}
 
export default Index;