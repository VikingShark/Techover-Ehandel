import { useState } from 'react'
import { Box } from '@mui/material'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import './App.css'

// Import Pages
import WomenPage from './pages/WomenPage'
import HomePage from './pages/HomePage'

// Import Layouts
import RootLayout from './layouts/RootLayout'





function App() {

  const routesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/women" element={<WomenPage />} />
    </Route>
  )

  const router = createBrowserRouter(routesFromElements)

  return (
    <>
    <Box>
      <RouterProvider router={router} />
    </Box>
    </>
  )
}

export default App
