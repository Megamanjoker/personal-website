import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { addMovie } from '../actions/movieActions';

class MovieModal extends Component {

    state = {
        modal: false,
        title: '',
        actor: '',
        year: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value, 
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const newMovie = {
            title: this.state.title,
            actor: this.state.actor,
            year: this.state.year
        }
        //add item via addItem action
        this.props.addMovie(newMovie);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Movie</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add new movie</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="movie">Movie</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter movie title"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="year"
                                    id="year"
                                    placeholder="Enter year"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="actor"
                                    id="actor"
                                    placeholder="Enter actor name"
                                    onChange={this.onChange}
                                />

                                
                            </FormGroup>
                            <Button color="dark" style={{ marginTop: '2rem'}} block>
                                    Add Movie
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    movie: state.movie
});

export default connect(mapStateToProps, { addMovie })(MovieModal);