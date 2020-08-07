import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:''
         }
    }
    componentDidMount(){
        console.log(this.props.match)
        let tamp = this.props.match.params.id
        this.setState({
            id:tamp
        })
    }
    render() { 
        return ( 
            <div>
                列表，id:{this.state.id}
            </div>
         );
    }
}
 
export default List;