 
import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, FormGroup, Input  } from 'reactstrap';
import TextField from "@material-ui/core/TextField";
const axios = require("axios");




class Latest extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userSearchTerm: "",
        movies:[]
    };
}

    // When user types, match the value to state
  onInputChange = e => {
    this.setState({ userSearchTerm: e.target.value });
  };

  // On submitting the input, grab the API
  onInputSubmit = e => {
    e.preventDefault();

    const movieName = this.state.userSearchTerm;
    const KEY = "130f3a1104460b002b3c3e6dfd661f36";

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${movieName}&page=2`)
    .then(res => {
        console.log("res is ------", res)
        this.setState({ movies: res.data.results });
      });
    };
  
  render() { 
    return (
        <div>
            <Form onSubmit={this.onInputSubmit}>
            <FormGroup>
            <Input
                type="search"
                name="search"
                
                placeholder="Search for a movie and hit enter..."
                onChange={this.onInputChange}
            />
            </FormGroup>
            </Form>
            <ul>
            {this.state.movies.map(movie => (
                <li key={movie.id}>{movie.original_title}</li>
            ))}
            </ul>
        </div>
    );
  }
}
export default Latest;
