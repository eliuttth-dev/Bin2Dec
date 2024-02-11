import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bin,setBin] = useState('');
  const [decimal,setDecimal] = useState('');

  const bin2dec = (bin) => {
    let decimal = 0;
    

    for(let i = bin.length - 1; i >= 0; i--){
      decimal += parseInt(bin[i]) * Math.pow(2, bin.length - 1 - i);
    }

    return decimal;
  }

  const handleInput = (e) => {
    setBin(e.target.value);
    
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    setBin('');

    setDecimal(bin2dec(bin));
    console.log(bin); 
  
  }


  return (
    <>
      <h1>Binary to Decimal</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="binary" onChange={handleInput} value={bin}/>
        <button type="submit" >Submit</button>
      </form>

      <p>{decimal}</p>
   
   </>
  )
}

export default App
