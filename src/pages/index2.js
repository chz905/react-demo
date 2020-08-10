import React, { useState } from 'react';
function Indexa(){
    const [age,setAge] = useState(10)
    const [sex] = useState('男')
    const [work] = useState('程序员')
    return(
        <div>
            <p onClick={(()=>{setAge(age +1)})}>年龄：{age}</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
        </div>
    )
}

export default Indexa