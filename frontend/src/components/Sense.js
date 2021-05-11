import React from 'react';
import capitalize from './capitalizeFunction';

function Sense({ sense, entry }) {
    const { etymologies } = entry
    const { definitions, synonyms, examples } = sense;

    let filteredSynonyms = false;
    if (synonyms) filteredSynonyms = synonyms.filter(synonym => synonyms.indexOf(synonym) < 5)

    return (
        <div className='entry-main'>
            <p className='definition'><b>Definition: </b>{capitalize(definitions[0])}</p>
            <div className='word-data'>
                <p className='etimology'><b>Etimology: </b>{etymologies}</p>
            </div>
            <div className='word-use'>
                <div className='synonyms'>
                    <p className='subtitle'>Synonyms:</p>
                    {filteredSynonyms ? filteredSynonyms.map(s => <p key={s.text}>{capitalize(s.text)}</p>) : <p>No synonyms found</p>}
                </div>
                <div className='examples'>
                    <p className='subtitle'>Examples:</p>
                    {examples ? examples.map(example => <p key={example.text}>{capitalize(example.text)}</p>) : <p>No examples found</p>}
                </div>
            </div>
        </div>
    )
};

export default Sense;