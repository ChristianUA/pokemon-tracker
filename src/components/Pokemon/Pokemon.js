import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Pokemon = (props) => {
    const pokemon = props.pokemon;

    const addPokemon = () => {
        props.onAdd(pokemon);
    }

    const removePokemon = () => {
        props.onRemove(pokemon.id);
    }

    const renderAction = () => {
        if (props.isRemoval) {
            return <Button variant="danger" onClick={removePokemon}>Release!</Button>
        }
        return <Button variant="primary" onClick={addPokemon}>Catch!</Button>
    }

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
                        {renderAction()}
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )

}

export default Pokemon