import React, { useState } from 'react';

import SelectPokemon from '../SelectPokemon/SelectPokemon'
import ListPokemon from '../ListPokemon/ListPokemon'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

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
      <SelectPokemon onAdd={addPokemon}/> 
      <ListPokemon onRemove={removePokemon} selectedPokemon={selectedPokemon}/>
    </div>
  )
  
}

export default App;
