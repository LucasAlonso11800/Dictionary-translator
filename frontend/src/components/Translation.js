import React, { useState } from 'react';
import axios from 'axios';
import capitalize from './capitalizeFunction';

function Translation() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState({});
    const [fromLanguage, setFromLanguage] = useState('en');
    const [toLanguage, setToLanguage] = useState('es');

    function translate() {
        if(fromLanguage === toLanguage) return

        axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`)
            .then(res => setTranslatedText(res.data.matches[0]))
            .catch(err => {
                if (err) console.log(err)
            })
    };

    return (
        <div className='container'>
            <div className='translation-options'>
                <select
                    className='translation-option'
                    onChange={e => setFromLanguage(e.target.value)}>
                    <option value='en'>English</option>
                    <option value='es'>Spanish</option>
                    <option value='ge'>German</option>
                    <option value='it'>Italian</option>
                    <option value='fr'>French</option>
                    <option value='pt'>Portuguese</option>
                </select>
                <select
                    className='translation-option'
                    onChange={e => setToLanguage(e.target.value)}>
                    <option value='es'>Spanish</option>
                    <option value='en'>English</option>
                    <option value='de'>German</option>
                    <option value='it'>Italian</option>
                    <option value='fr'>French</option>
                    <option value='pt'>Portuguese</option>
                </select>
                <button
                    className='translation-option'
                    onClick={translate}>
                    Translate
                </button>
            </div>
            <textarea
                placeholder='Enter your text to translate (maximum length: 500 characters)'
                spellCheck='false'
                value={text}
                onChange={e => setText(e.target.value)}
                maxLength='500'
            ></textarea>
            {translatedText !== {} ?
                <>
                    <h2 className='translation-subtitle'>Results:</h2>
                    <textarea
                            className='translation'
                            key={translatedText.translation}
                            value={translatedText.translation ? capitalize(translatedText.translation) : ''}
                            onChange={() => { }}
                        >
                        </textarea>
                </>
                : <></>}
        </div>
    )
}

export default Translation
