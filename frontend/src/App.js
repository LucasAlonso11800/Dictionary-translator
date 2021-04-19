import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [img, setImg] = useState()
    useEffect(() => {
        axios.post('http://localhost:5000')
            .then(res => {
                console.log(res.data)
            })
    }, []);

    return (
        <div>
            <img src={img} style={{width: '5em', height: '5em'}}/>
        </div>
    )
}

export default App;
