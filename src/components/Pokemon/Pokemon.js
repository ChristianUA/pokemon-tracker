import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

class Pokemon extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <Card bg='light' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pokemon &&
                        pokemon.sprites &&
                        pokemon.sprites.front_default} />
                <Card.Body>
                    <Card.Header>{pokemon.name && pokemon.name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}</Card.Header>
                    <ListGroup variant="flush">
                        {pokemon.stats && pokemon.stats.map(stat => {
                            return (
                                <ListGroup.Item>{stat.stat.name.toUpperCase()} - {stat.base_stat}</ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                    <Button variant="primary">Catch!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Pokemon