import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dictionary from './components/Dictionary';
import Translation from './components/Translation';

function App() {
    return (
        <div className="background">
            <Router>
                <Navbar />
                <Route path='/' exact component={Dictionary} />
                <Route path='/translation' component={Translation} />
            </Router>
        </div>
    )
}

export default App;
