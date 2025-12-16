import React from 'react'
import './App.css'
import HomePage from './pages/HomePage' //importerer HomePage-komponenten
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom' //provides routing funcionality
import AnimalListPage from './pages/AnimalListPage' 
/*import { Container } from 'react-bootstrap' */
import NavMenu from './shared/NavMenu'


function App() { //funksjonelt komponent kalt "App", som returnerer et jsx-komponent <div> med klassenavnet App. Denne div-en bruker det importerte <HomePage />-komponentet. 
  return (
    <>
    <Router>
    <NavMenu />
    <div className="app-container">
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/animals" element={<AnimalListPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
      </Router>
    </>
  )
}
export default App
