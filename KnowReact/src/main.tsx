import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Lazy from './Concepts/Lazy/Lazy.tsx'
import SemanticHTML from './Concepts/SemanticHTML/SemanticHTML.tsx'
import NavBar from './Components/Navbar.tsx'
import Layout from './Layouts/DefaultLayout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>
      <Layout>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Concepts/Lazy" element={<Lazy />} />
            <Route path="/Concepts/SemanticHTML" element={<SemanticHTML />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
