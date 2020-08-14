import React from 'react';
import Pokedex from 'pokedex-promise-v2'

import SelectPokemon from '../SelectPokemon/SelectPokemon'
import ListPokemon from '../ListPokemon/ListPokemon'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = { 
      pokedex: new Pokedex(),
      searchResults: [],
      selectedPokemon: []
    }

    this.search = this.search.bind(this)
    this.addPokemon = this.addPokemon.bind(this)
    this.removePokemon = this.removePokemon.bind(this)
  }

  search(term) {
    this.state.pokedex.getPokemonByName(term).then((response) => {
      console.log(response)
      this.setState({
        searchResults: response
      })
    }, networkError => {
      console.log('Request failed!')
    })
  }

  addPokemon(pokemon) {
    let list = this.state.selectedPokemon;
    if (list.find(savedPokemon => savedPokemon.id === pokemon.id)) {
      return;
    }
    list.push(pokemon);
    this.setState({selectedPokemon: list});
  }

  removePokemon(pokemon) {
    let list = this.state.selectedPokemon;
    list = list.filter(currentPokemon => currentPokemon.id !== pokemon.id);
    this.setState({selectedPokemon: list});
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home">Pokemon Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <SelectPokemon onAdd={this.addPokemon} onSearch={this.search} searchResults={this.state.searchResults} /> 
        <ListPokemon onRemove={this.removePokemon} selectedPokemon={this.state.selectedPokemon}/>
      </div>
    )
  } 
}

export default App;
