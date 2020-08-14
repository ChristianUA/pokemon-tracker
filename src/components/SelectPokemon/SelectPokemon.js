import React from 'react';
import Pokemon from '../Pokemon/Pokemon'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PokedexEntry extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }

        this.search = this.search.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
    }

    search(event) {
        event.preventDefault()
        this.props.onSearch(this.state.term)
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value.toLowerCase() })
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="container p-4 m-4 border"> 
                    <h1 className="text-center">Select a Pokemon</h1>
                    <Form className="m-4 row justify-content-center" inline onSubmit={this.search}>
                        <Form.Control onChange={this.handleTermChange} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                    <div className="mb-4 row justify-content-center">
                        {
                            this.props.searchResults && 
                            <Pokemon 
                            isRemoval={false} 
                            pokemon={this.props.searchResults}
                            key={this.props.id}
                            onAdd={this.props.onAdd} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default PokedexEntry