import React, { useState } from 'react'
import axios from 'axios'
import Result from './Result';

function Dictionary() {
    const [result, setResult] = useState([])
    const [word, setWord] = useState('')

    function searchWord() {
        axios.post('http://localhost:5000', {
            word: word
        })
            .then(res => {
                console.log([res.data[0].lexicalEntries[0]])
                setResult([res.data[0].lexicalEntries[0]])
            })
            .catch(err => {
                if(err) console.log(err)
            })
    };

    return (
        <div>
            <input type='text' value={word} onChange={e => setWord(e.target.value)} />
            <button onClick={searchWord}>Search in dictionary</button>
            {result.map(r => <Result result={r} key={r.text}/>)}
        </div>
    )
}

export default Dictionary
