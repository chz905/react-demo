import React, { useState,useEffect,useContext } from 'react';

function Index4(){
    const [count] = useState(0)
    useEffect((res)=>{
        console.log(`useEffect - ${count} - Index4 - ${res}`)
    },[count])
    
    // let count = useContext(CountContext)
    return ( 
        <div>
            {count}
        </div>  
      )
}
 
export default Index4;