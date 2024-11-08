import './App.css'
import {HashRouter, Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  // Landing Page (List of projects)

  // Individual Project Page

  return (
    <HashRouter>
      <Navbar/>
      <Hero/>
      <Projects/>
    </HashRouter>
  )
}

export default App
