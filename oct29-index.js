import React, { useEffect, useState } from 'react' // from react 17 this statement also not required
import ReactDOM from 'react-dom';
import './index.css';
 
function Modi() {
  return ( 
<div className='pm'>
  <h1>India </h1>
    <Bharat/>
    <Bharat/>
    <Bharat/>
    <Bharat/>
    <Pakistan/>
</div>    
  );
}

const Bharat = ()=>
{
  return <h4>Delhi is capital of india</h4>
}

const Pakistan = () =>{
  return <h4> karachi is the capital of pakistan </h4>
}

ReactDOM.render( <Modi></Modi>
  , document.getElementById('root'));
