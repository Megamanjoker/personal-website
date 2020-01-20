 
import React, { Component } from 'react';
import { Container, Row, Col, Card  } from 'reactstrap';
const axios = require("axios");



class Latest extends Component {

  constructor(props) {
    super(props);
    this.state = {
        movie:''
    };
}

    handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
 }

 getMovie = (e) => {
    const { movie } = this.state;
    e.preventDefault();
    console.log(this.state.movie)
    axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=64aaaf55`)
    .then(res => {
      console.log(res.data); 
    });
    console.log();
  }
  
  render() { 
    return (
        <div>
        <form onSubmit = {this.getMovie}> 
            <input type = 'text' placeholder = 'Search Movies' name="movie" value={this.state.movie} onChange={this.handleChange} ></input>
            <input type = 'submit' placeholder='Submit' value = 'Submit'></input>
        </form>
    </div>
    );
  }
}
export default Latest;
