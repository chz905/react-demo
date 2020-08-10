import React, { useState,useEffect } from 'react';

function Index3(){
    const [count, addCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect - ${count} - 来了，老弟！`)
        return ()=>{console.log(`走了，老弟~`)}
    },[count])
    return ( 
        <div>
            {count}
            <button onClick={()=>{addCount(count + 1)}}>添加</button>
        </div>  
      )
}
 
export default Index3;