import React, { Component } from 'react';
import uuid from 'uuid';

class MovieList extends Component {
    state = {
        movies: [
            { id: uuid(), title: 'Superman', year: 2003, actor: 'Clark Kent' },
            { id: uuid(), title: 'Spider man', year: 2007, actor: 'Peter Parker' },
            { id: uuid(), title: 'The God father', year: 2002, actor: 'Al Pacino' },
            { id: uuid(), title: 'The Dark Night', year: 2001, actor: 'Christian Bale' }
        ]
    }
    render() {
        const { movies } = this.state;
        return(
            <div class="row">
                <div class="col s6">
                    <ul class="collection">
                        {movies.map(({id, title, actor, year}) => (
                        <li class="collection-item avatar">
                        <i class="material-icons circle red">play_arrow</i>
                        <span class="title"><b>{title}</b></span>
                        <span><p>{actor}</p><p>{year}</p></span>
                        <a href="#!" class="secondary-content"
                        onClick={() => {
                            this.setState(state => ({
                                movies: state.movies.filter(movie => movie.id != id)
                            }));
                        }}><i class="material-icons">delete</i></a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div class="col s6"></div>
                <div class="col s12"><a class="btn-floating btn-large waves-effect waves-light red"
                onClick={() => {
                    const title = prompt('Enter title');
                    const actor = prompt('Enter actor');
                    const year = prompt('Enter year');
                    if(title) {
                        this.setState(state => ({
                            movies: [...state.movies, { id: uuid(), title, year, actor }]
                        }));
                    }
                }}><i class="material-icons">add</i></a></div>
            </div>
        );
    }
}

export default MovieList;


