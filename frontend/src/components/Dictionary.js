import React, { useState } from 'react'
import axios from 'axios'
import Result from './Result';

function Dictionary() {
    const [results, setResults] = useState([])
    const [word, setWord] = useState('')
    const [language, setLanguage] = useState('en-gb')

    function searchWord() {
        axios.post('http://localhost:5000', {
            word,
            language
        })
            .then(res => {
                setResults(res.data[0].lexicalEntries)
            })
            .catch(err => {
                if (err) console.log(err)
            })
    };

    return (
        <div className='container'>
            <div className='search'>
                <input
                    className='search-input'
                    placeholder={language === 'en-gb' ? 'Enter a word to look for' : 'Ingresa una palabra para buscarla'}
                    type='text' value={word}
                    onChange={e => setWord(e.target.value)} />
                <select
                    className='search-lang'
                    onChange={e => setLanguage(e.target.value)}>
                    <option value='en-gb'>English</option>
                    <option value='es'>Spanish</option>
                </select>
                <button className='search-button'
                    onClick={searchWord}>
                    Search in dictionary
                </button>
            </div>
            <div className='result'>
                {results.map(r => {
                    return <Result result={r} key={r.text + r.lexicalCategory.text} />
                })}
            </div>
        </div>
    )
}

export default Dictionary
