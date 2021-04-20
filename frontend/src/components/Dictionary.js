import React, { useState } from 'react'
import axios from 'axios'
import Result from './Result';

function Dictionary() {
    const [results, setResults] = useState([])
    const [word, setWord] = useState('')

    function searchWord() {
        axios.post('http://localhost:5000', {
            word
        })
            .then(res => {
                setResults(res.data[0].lexicalEntries)
            })
            .catch(err => {
                if (err) console.log(err)
            })
    };

    return (
        <main className='container'>
            <div className='search'>
                <input
                    className='search-input'
                    placeholder='Enter a word to look for'
                    type='text' value={word}
                    onChange={e => setWord(e.target.value)} />
                <button className='search-button'
                    onClick={searchWord}>
                    Search in dictionary
                    </button>
            </div>
            <div className='result'>
                {results.map(r => {
                    return <Result result={r} key={r.text + r.lexicalCategory.text} />})}
            </div>
        </main>
    )
}

export default Dictionary
