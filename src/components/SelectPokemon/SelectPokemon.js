import React, { useState } from 'react';
import Pokedex from 'pokedex-promise-v2'

import Pokemon from '../Pokemon/Pokemon'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SelectPokemon = (props) => {    
    const pokedex = new Pokedex();

    const [term, setTerm] = useState("");

    const handleTermChange = ({ target }) => {
        setTerm(target.value.toLowerCase());
    }

    const [searchResults, setSearchResults] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        pokedex.getPokemonByName(term)
        .then((response) => {
            setSearchResults(response)
            setTerm("");
        })
        .catch((error) => {
            setSearchResults(null);
        });
    }

    const onAdd = (pokemon) => {
        props.onAdd(pokemon);
        setSearchResults(null);
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="container p-4 m-4 border"> 
                <h1 className="text-center">Select a Pokemon</h1>
                <Form className="m-4 row justify-content-center" inline onSubmit={handleSubmit}>
                    <Form.Control value={term} onChange={handleTermChange} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button type="submit" variant="outline-success">Search</Button>
                </Form>
                <div className="mb-4 row justify-content-center">
                    {
                        !searchResults ? <div> No Results Found </div> : <Pokemon isRemoval={false} pokemon={searchResults} key={searchResults.id} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

export default SelectPokemon