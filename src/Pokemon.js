import {useState} from 'react'

export default function Pokemon() {
    const [search, searchResult] = useState('Use the search bar to find a Pokemon')
    return (
        <div>
            <h1>Search for a Pokemon</h1>
            <input
                type="text"
                placeholder='Find Your Pokemon' />
            <button
                type='submit'> Submit </button>
            <div>{search}</div>
        </div>
    )
}
