import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Pokemon extends React.Component {
    constructor(props) {
        super(props)

        this.addPokemon = this.addPokemon.bind(this);
        this.removePokemon = this.removePokemon.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <Button variant="danger" onClick={this.removePokemon}>Release!</Button>
            // return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }
        return <Button variant="primary" onClick={this.addPokemon}>Catch!</Button>
        // return <button className="Track-action" onClick={this.addTrack}>+</button>;
    }

    addPokemon() {
        this.props.onAdd(this.props.pokemon);
    }

    removePokemon() {
        this.props.onRemove(this.props.pokemon);
    }

    render() {
        const pokemon = this.props.pokemon;
        return (
            <Card className='m-4' bg='dark' style={{ width: '30rem' }}>
                <Row noGutters={true} >
                    <Col xs="4">
                        <img height="160" width="160" alt={pokemon && pokemon.name} src={pokemon &&
                                pokemon.sprites &&
                                pokemon.sprites.front_default} ></img>
                    </Col>
                    <Col md="auto"> 
                        <Card.Body>
                            <h1 className='text-white'>
                                {pokemon.name && pokemon.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} 
                            </h1>
                            {this.renderAction()}
                        </Card.Body>
                    </Col>
                </Row>
                
            </Card>
        )
    }
}

export default Pokemon