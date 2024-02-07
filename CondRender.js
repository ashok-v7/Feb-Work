import {useState, useEffect} from 'react'


const CondRender=()=>
{
    const[value, setValue]=useState(false);
    if(value)
    {
             return <h2>Returning1..</h2>
    }
    else
    return <h3>Multiple returns</h3>

    
  
}

export default CondRender;