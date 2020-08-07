import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

import Home from './home'
import List from './list'
// const Home = () => import('./home/index')

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/12'>列表</Link></li>
            </ul>
            <Route path='/' exact component={Home} />
            <Route path='/list/:id' component={List} />
        </Router>
    )
}

export default AppRouter