import React, { useEffect } from 'react'

function Translation() {

    useEffect(() => {
        axios.get("https://api.mymemory.translated.net/get?q=Let's try something more dificult!&langpair=en|es")
            .then(res => console.log(res.data.matches))
            .catch(err => err ? console.log(err) : '')
    }, [])
    return (
        <div>

        </div>
    )
}

export default Translation
