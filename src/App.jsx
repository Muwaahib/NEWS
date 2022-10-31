// import { useState } from 'react'
// import './App.css'
// import Header from './components/Home/Header'
// import Head from './components/Home/Head'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App bg">
    
//     {/* <Head/> */}
//     <BrowserRouter>
//     <Header/>
//     <Routes>
//       <Route path='/' element={<home/>}/>
//     </Routes>
//     </BrowserRouter>

//     </div>
//   )
// }

// export default App

import React from "react"
import Header from "./components/common/header/Header"
// import "./App.css"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom"
import Home from "./page/Home/Home"
import Culture from "./page/Culture/Culture"


const App = () => {
  return (
    <>
      <Router>
        
        <Header />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/Culture' element={<Culture />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

