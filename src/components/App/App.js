import React, { useState } from 'react';

import SelectPokemon from '../SelectPokemon/SelectPokemon'
import ListPokemon from '../ListPokemon/ListPokemon'

const App = (props) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (newPokemon) => {
    if (selectedPokemon.some(pokemon => pokemon.id === newPokemon.id)) {
      console.log('Already exists!');
    } else {
      setSelectedPokemon((prev) => [newPokemon, ...prev]);
    }
  };

  const removePokemon = (pokemonIdToRemove) => {
    setSelectedPokemon((prev) => prev.filter((pokemon) => pokemon.id !== pokemonIdToRemove));
  };

  return (
    <div className="App">
      <SelectPokemon onAdd={addPokemon}/> 
      <ListPokemon onRemove={removePokemon} selectedPokemon={selectedPokemon}/>
    </div>
  )
  
}

export default App;
