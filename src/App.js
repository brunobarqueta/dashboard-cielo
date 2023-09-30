import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import initializeApp from './app/init';

const Layout = lazy(() => import('./containers/Layout'))

initializeApp()

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])


  return (
    <>
      <Router data-testid="App">
        <Routes>
          <Route path="/app/*" element={<Layout />} />
          <Route path="*" element={<Navigate to={"/app/dashboard"} replace />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
