import Header from './Cpmponents/Header/Header'
import './App.css'
import Cover from './Cpmponents/Cover/Cover'
import Blogs from './Cpmponents/Blogs/Blogs'
import { useState } from 'react'

function App() {

  const [coin, setCoin]=useState(0)

  const handlerCoin=(coins)=>{
    // console.log("click Coin")
    console.log(coins)

    const newCoin=coin + coins;
    setCoin(newCoin)
  }
  

  return (
    <>
      <Header coin={coin}></Header>
      <Cover handlerCoin={handlerCoin}></Cover>
      <Blogs></Blogs>
    </>
  )
}

export default App
