import React from 'react';
import Sense from './Sense';
import capitalize from './capitalizeFunction';

function Result({ result }) {
    const { entries } = result;
    const category = result.lexicalCategory.text;

    return (
        <div className='entry'>
            <h2 className='entry-title'>{capitalize(result.text)} - {category}</h2>
            {entries.map(entry => {
                return (
                    <div className='entry-content'>
                        {entry.senses.map(sense => <Sense sense={sense} entry={entry} key={sense.id}/>)}
                    </div>
                )
            })}
        </div>
    )
};

export default Result;
