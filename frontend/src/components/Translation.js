import React, { useState } from 'react'
import axios from 'axios'

function Translation() {
    const [text, setText] = useState('');
    const [translatedTexts, setTranslatedTexts] = useState([])
    const [fromLanguage, setFromLanguage] = useState('en')
    const [toLanguage, setToLanguage] = useState('es')

    function translate() {
        axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
            .then(res => setTranslatedTexts(res.data.matches[0]))
            .catch(err => err ? console.log(err) : '')
    }

    return (
        <div className='container'>
            <div className='translation-options'>
                <select
                    className='translation-option'
                    onChange={e => setFromLanguage(e.target.value)}>
                    <option value='en'>English</option>
                    <option value='es'>Spanish</option>
                </select>
                <select
                    className='translation-option'
                    onChange={e => setToLanguage(e.target.value)}>
                    <option value='es'>Spanish</option>
                    <option value='en'>English</option>
                </select>
                <button
                    className='translation-option'
                    onClick={translate}>
                    Translate</button>
            </div>
            <textarea
                placeholder='Enter your text to translate (maximun length: 500 characters)'
                value={text}
                onChange={e => setText(e.target.value)}
                maxLength='500'
            ></textarea>
            {translatedTexts !== [] ?
                <>
                    <h2 className='translation-subtitle'>Results:</h2>
                    {translatedTexts.map(text => {
                        return <textarea
                            className='translation'
                            key={text.translation}
                            value={text.translation}
                            onChange={() => { }}
                        >
                        </textarea>
                    })}
                </>
                : <></>}
        </div>
    )
}

export default Translation
