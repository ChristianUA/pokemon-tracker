import React from 'react';
import Pokedex from 'pokedex-promise-v2'

import SearchBar from '../SearchBar/SearchBar';
import PokedexEntry from '../Selection/Selection';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = { 
      pokedex: new Pokedex(),
      searchResults: []
    }

    this.search = this.search.bind(this)
  }

  search(term) {
    this.state.pokedex.getPokemonByName(term).then((response) => {
      console.log(response);
      this.setState({
        searchResults: response
      })
    }, networkError => {
      console.log('Request failed!');
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <PokedexEntry pokemon={this.state.searchResults} />
      </div>
    )
  } 
}

export default App;
