import { ReactEventHandler, useState } from 'react'
import Header from './components/Header'
import React from 'react'
import './style.css'

const App = () =>{

    const [numero , contador] = useState(0)

    const soma = ()=>{
      contador(numero + 1)
    }

    const sub = () =>{
      contador(numero - 1)
    }


  return(

    <div id="pagina">      
        <Header/>

        <div className="main">
          
        <button className='btn-soma' onClick={soma}>+</button>
        <p>{numero}</p>
        <button  className='btn-sub' onClick={sub}>-</button>
        
        </div>

    </div>
  )
}


export default App
