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
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

