import React from 'react';

import Pokemon from '../Pokemon/Pokemon'

class ListPokemon extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="container p-4 m-4 border"> 
                    <h1 className="text-center">Caught Pokemon</h1>
                    <div className="mb-4 row justify-content-center">
                        {
                            this.props.selectedPokemon && this.props.selectedPokemon.map(pokemon => {
                            return (
                                <Pokemon 
                                pokemon={pokemon}
                                key={pokemon.id}
                                isRemoval={true}
                                onRemove={this.props.onRemove} />
                            ) 
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ListPokemon