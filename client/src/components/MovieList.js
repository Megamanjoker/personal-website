import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies, deleteMovie } from '../actions/movieActions';
import propTypes from 'prop-types';

class MovieList extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    onDeleteClick(id){
        this.props.deleteMovie(id);
    }

    render() {
        const { movies } = this.props.movie;
        return(
            <div class="row">
                <div class="col s6">
                <h3>Your must watch movies list</h3>
                    <ul class="collection">
                        {movies.map(({_id, title, actor, year}) => (
                        <li class="collection-item avatar">
                        <i class="material-icons circle red">play_arrow</i>
                        <span class="title"><b>{title}</b></span>
                        <span><p>{actor}</p><p>{year}</p></span>
                        <a class="secondary-content"
                        onClick={this.onDeleteClick.bind(this, _id)}><i class="material-icons">delete</i></a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div class="col s6"></div>   
                
            </div>
        );
    }
}

MovieList.propTypes = {
    getMovies: propTypes.func.isRequired,
    movie: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movie: state.movie
});

export default connect(mapStateToProps, { getMovies, deleteMovie })(MovieList);


