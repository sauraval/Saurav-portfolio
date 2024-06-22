import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  const [theme,setTheme] = useState('light')

  return (
    <>
    <div className={`theme ${theme}`}>
       <Header theme={theme} setTheme={setTheme}/>
       <Home/>
       <Footer/>
    </div>
    </>
  )
}

export default App
