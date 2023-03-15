import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';

export default function Router() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
        </Routes>
    </div>
    )
}
