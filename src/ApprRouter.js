import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

import Home from './home'
import List from './list'
import Order from './order'
// const Home = () => import('./home/index')

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/'>列表</Link></li>
                <li><Link to='/order'>其他</Link></li>
            </ul>
            <Route path='/' exact component={Home} />
            <Route path='/list/:id' component={List} />
            <Route path='/order' component={Order} />
        </Router>
    )
}

export default AppRouter