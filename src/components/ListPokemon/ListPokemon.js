import React from 'react';

import Pokemon from '../Pokemon/Pokemon'

const ListPokemon = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="container p-4 m-4 border"> 
                <h1 className="text-center">Caught Pokemon</h1>
                <div className="mb-4 row justify-content-center">
                    {
                        props.selectedPokemon && props.selectedPokemon.map((pokemon) => {
                        return (
                            <Pokemon 
                            pokemon={pokemon}
                            key={pokemon.id}
                            isRemoval={true}
                            onRemove={props.onRemove} />
                        ) 
                        }) 
                    }
                </div>
            </div>
        </div>
    )
}

export default ListPokemon