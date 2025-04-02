import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WomenPage, {getProducts} from './pages/WomenPage'
import HomePage from './pages/HomePage'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WomenPage2 from './pages/WomenPage2'

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/women" element={<WomenPage />} loader={getProducts} />
      <Route path="/women2" element={<WomenPage2 />} loader={getProducts}/>
    </Routes>
  </Router>
  )
}

export default App
