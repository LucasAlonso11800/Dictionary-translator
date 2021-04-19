import React, { useState } from 'react'
import axios from 'axios'
import Entry from './Entry';

function Dictionary() {
    const [entries, setEntries] = useState([])
    const [word, setWord] = useState('')

    function searchWord() {
        axios.post('http://localhost:5000', {
            word: word
        })
            .then(res => {
                console.log(res.data)
                setEntries(res.data)
            })
            .catch(err => {
                if(err) console.log(err)
            })
    };

    return (
        <div>
            <input type='text' value={word} onChange={e => setWord(e.target.value)} />
            <button onClick={searchWord}>Search in dictionary</button>
            {entries.map(entry => <Entry entry={entry} />)}
        </div>
    )
}

export default Dictionary
