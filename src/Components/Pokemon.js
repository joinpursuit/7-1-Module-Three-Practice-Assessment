import React, { Component } from 'react';
import axios from 'axios'

class Pokemon extends Component {
   state = {
      searchPokemon: '',
      allPokemons: {},
      isError: false
   }

   handleChange = (e) => {
      this.setState({searchPokemon: e.target.value})
   }

   handleSubmit = async (e) => {
      const { searchPokemon } = this.state
      e.preventDefault()
      try {
         const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
         console.log(data.results)
         this.setState({ allPokemons: data, searchPokemon: '', isError: false })
      } catch (error) {
         this.setState({ allPokemons: {}, searchPokemon: '', isError: true })
      }

   }

   render() {
      const { searchPokemon, allPokemons, isError } = this.state

      return (
         <div>
            <h1>Search for a Pokemon</h1>
            <form  onSubmit={this.handleSubmit} action="">
               <input value={searchPokemon} 
               onChange={this.handleChange} 
               type="text" 
               placeholder='Find Your Pokemon' />
            <button>Submit</button>
            </form>
            
            {allPokemons.name ?
            (<div> 
            <h1>Name: {allPokemons.name}</h1>
            <img src={allPokemons.sprites.front_default} alt="" />
            <p>ID {allPokemons.id}</p>
               </div>) 
               : null} {isError ? <h1>Pokemon not found!</h1> : null}
         </div>
      );
   }
}

export default Pokemon;