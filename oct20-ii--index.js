import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Oxford()
{
  return(
    <section className='style'>
      <h1>Books List is </h1>
      <Image/>
      <Title/>
      <Author/>
    </section>

  );

}

const Image =() =>
  {
    return <img src='https://m.media-amazon.com/images/I/51NEM-RHlwL._SX321_BO1,204,203,200_.jpg' alt='bookphoto'></img>
  }
  const Title =()=>
  {
    return <h2>The Basics of Bitcoins and Blockchains</h2>
  }
  const Author=()=>
  {
    return <h4>Antony</h4>
  }

  ReactDOM.render(<Oxford/>, document.getElementById('root'));
