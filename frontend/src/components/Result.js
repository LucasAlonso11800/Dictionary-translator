import React from 'react'

function Result({ result }) {

    function capitalize(word) {
        const firstLetter = word.substring(0, 1).toUpperCase();
        const rest = word.substring(1);
        return firstLetter + rest
    };

    const entries = result.entries;
    const category = result.lexicalCategory.text;

    return (
        <div className='entry'>
            <h2 className='entry-title'>{capitalize(result.text)} - {category}</h2>
            {entries.map(entry => {
                return (
                    <div className='entry-content' key={entry.text}>
                        {entry.senses.map(sense => {
                            return (
                                <div className='entry-main'>
                                    <p className='definition'><b>Definition: </b>{capitalize(sense.definitions[0])}</p>
                                    <div className='word-data'>
                                        <p className='etimology'><b>Etimology: </b>{entry.etymologies}</p>
                                        {entry.pronunciation ?
                                            <div className='word-fonetic'>
                                                <p><b>Pronunciation:</b> {entry.pronunciations[0].phoneticSpelling}</p>
                                                <audio controls='on'>
                                                    <source src={entry.pronunciations[0].audiofile}></source>
                                                </audio>
                                            </div>
                                            : ''}
                                    </div>
                                    <div className='word-use'>
                                        <div className='synonyms'>
                                            <p className='subtitle'>Synonyms:</p>
                                            {sense.synonyms !== undefined ?
                                                sense.synonyms
                                                    .filter(el => {
                                                        if (sense.synonyms.indexOf(el) < 5) {
                                                            return el
                                                        }
                                                        return undefined
                                                    })
                                                    .map(s => <p key={s.text}>{capitalize(s.text)}</p>) :
                                                <p>No synonyms found</p>}
                                        </div>
                                        <div className='examples'>
                                            <p className='subtitle'>Examples:</p>
                                            {sense.examples !== undefined ? sense.examples.map(example => <p key={example.text}>{capitalize(example.text)}</p>) : <p>No examples found</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Result
