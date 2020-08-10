import React, { useState, useEffect,createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Indexa from './index2'
import Indexb from './index3'
import Indexc from './index4'

const CountContext = createContext()


function Index(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        // console.log(`useEffect - ${count}`)
    },[])
    return (
        <div>
            <p>计数器 - {count}</p>
            <button onClick={()=>{setCount(count+1)}}>增加</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/b'>内页</Link></li>
                </ul>
                <Route path='/' exact component={Indexa}/>
                <Route path='/b' exact component={Indexb}/>
            </Router>
            {/* <Indexa /> */}
            {/* <Indexb /> */}
            <h3>组件</h3>
            <CountContext.Provider value={count}>
                <Indexc />
            </CountContext.Provider>

            
        </div>
    )
}
 
export default Index;