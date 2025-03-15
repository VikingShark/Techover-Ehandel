import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WomenPage from './pages/WomenPage'
import HomePage from './pages/HomePage'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/women" element={<WomenPage />} />
    </Routes>
  </Router>
  )
}

export default App
