import React from 'react';
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom'
import './css/css.css'

import Home from './views/home'
import List from './views/list'
import Order from './views/order'
// const Home = () => import('./home/index')

function AppRouter(){
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">博客首页</Link></li>
                        <li><Link to="/video/">视频教程</Link></li>
                        <li><Link to="/order">职场技能</Link></li>
                    </ul>
                </div>
                <div className="rightMain">
                    <Route path="/" exact component={Home}/>
                    <Route path="/video/" exact component={List}/>
                    <Route path="/order" exact component={Order}/>
                    <Redirect to='/'/>
                </div>

            </div>

            {/* <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/list/'>列表</Link></li>
                <li><Link to='/order'>其他</Link></li>
            </ul>
            <Route path='/' exact component={Home} />
            <Route path='/list/:id' component={List} />
            <Route path='/order' component={Order} /> */}
        </Router>
    )
}

export default AppRouter