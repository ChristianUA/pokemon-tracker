import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

class SearchBar extends React.Component {
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
        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <Navbar className="justify-content-center" bg="light" expand="lg">
                <Form  onSubmit={this.search}>
                    <Form.Row>
                        <Col>
                            <Form.Control onChange={this.handleTermChange} type="text" placeholder="Find Pokemon" />
                        </Col>
                        <Col>
                            <Button variant="outline-success">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Navbar>
        )
    }
}

export default SearchBar