import React from 'react'

function Result({ result }) {
    const entries = result.entries;
    const phrases = result.phrases;
    const category = result.lexicalCategory;
    
    return (
        <div>
            {entries.map(entry => {
                return (
                    <>
                        <p>{entry.etymologies}</p>
                        {entry.senses.map(sense => {
                            console.log(sense.synonyms)
                            return (
                                <>
                                <p>{sense.definitions[0]}</p> 
                                {sense.synonyms ? sense.synonyms.map(s => <p>{s.text}</p>) : <></>}
                                </>
                                )         
                        })}
                        <p>{category.text}</p>
                        <p>Expressions</p>
                        <ul>
                            {phrases.map(phrase => {
                                return <li>{phrase.text}</li>
                            })}
                        </ul>
                        <p>Pronunciation: {entry.pronunciations[0].phoneticSpelling}</p>
                        <audio src={entry.pronunciations[0].audiofile} />
                    </>
                )
            })}
        </div>
    )
}

export default Result
