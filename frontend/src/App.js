import './App.css';
import React from 'react'

import Navbar from './components/Navbar';
import Dictionary from './components/Dictionary';

function App() {
    return (
        <div className="background">
            <Navbar />
            <Dictionary />
        </div>
    )
}

export default App;
