import React from 'react';
// import {Route, Link} from 'react-router-dom'
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom'
import Reactpage from './reactPage'
import Vue from './vue'
import Flutter from './flutter'
import '../../css/css.css'

function List(){
    return ( 
        <Router>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React教程</Link></li>
                    <li><Link to="/video/flutter">Flutter教程</Link></li>
                    <li><Link to="/video/vue">Vue教程</Link></li>
                </ul>
            </div>

            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage/" component={Reactpage}/>
                <Route path="/video/flutter/" component={Flutter}/>
                <Route path="/video/vue/" component={Vue}/>
                <Redirect to='/video/reactpage/'/>
            </div>
        </Router>
    )
}

// class List extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             id:''
//          }
//     }
//     componentDidMount(){
//         console.log(this.props.match)
//         let tamp = this.props.match.params.id
//         this.setState({
//             id:tamp
//         })
//     }
//     render() { 
        
//     }
// }

export default List;