import React from 'react'

function Berry({firmness, flavorList, berryName, key}) {
    const { name } = firmness
    const flavors = flavorList.map(flavor => {
        return <li>{flavor.flavor.name}</li>
    })

    return (
        <div className="berry-display" key={key}>
            <h2>{berryName}</h2>
            <h4>{name}</h4>
            <ul>
                {flavors}
            </ul>
        </div>
    )
}

export default Berry
