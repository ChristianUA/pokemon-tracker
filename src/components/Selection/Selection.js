import React from 'react';
import Pokemon from '../Pokemon/Pokemon'

class PokedexEntry extends React.Component {
    render() {
        return (
            <Pokemon pokemon={this.props.pokemon} />
        )
    }
}

export default PokedexEntry