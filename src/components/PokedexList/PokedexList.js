import React from 'react';
import PokedexEntry from '../PokedexEntry/PokedexEntry'

class PokedexList extends React.Component {
    render() {
        console.log(this.props.searchResults)
        return (
            <div className="pokedex-list">
                <PokedexEntry pokemon={this.props.searchResults} />
            </div>
        )
    }
}

export default PokedexList