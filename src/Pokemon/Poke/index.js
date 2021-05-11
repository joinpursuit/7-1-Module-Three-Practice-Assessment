import React from 'react'

function Poke( {state}) {

        const {name, img, id} = state

        if(id === "404" ){
            return <h2>Pokemon not found! Try another name or ID number</h2>
        }else if(id === ""){
            return <h2>Use the search bar to find a Pokemon</h2>
        }else{

        return (
            <div>
                <h2>Name: {name}</h2>
                <img src={img} alt={`${name}`} style={{width:"250px", height:"250px"}}/>
                <h2>ID {id}</h2>
            </div>
        )
        }
}

export default Poke
