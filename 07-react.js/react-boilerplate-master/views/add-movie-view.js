var React = require('react');
var StoreMovie = require('../components/store-movie');
var Input = require('../components/input');
var FormGroup = require('../components/form-group');
var Button = require('../components/button');
var Movie = require('../lib/movie');
var MovieTable = require('../components/movie-table');
var _ = require('lodash');

var AddMovieView = React.createClass({
    getInitialState: function () {
        return {
            duration: '',
            title: '',
            director: '',
            movies: []
        };
    },

    render: function() {
        return(
            <div>
                <StoreMovie/>
                <Input label="Title " onChange={this.handleInputChange.bind(this, 'title')}/>
                <Input label="Duration " onChange={this.handleInputChange.bind(this, 'duration')}/>
                <Input label="Director " onChange={this.handleInputChange.bind(this, 'director')}/>
                <Button {...this.getButtonProps()}>Add Movie</Button>
                <MovieTable movies={this.state.movies} onDeleteMovie={this.handleDeleteMovie}/>
            </div>
        );
    },

    getButtonProps: function () {
        return {
            onClick: this.handleAddMovie
        }
    },

    handleInputChange: function (type, event) {
        var newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    },

    handleAddMovie: function () {
        var movie = new Movie(this.state.title, this.state.duration, this.state.director);
        var movies = this.state.movies;

        movies.push(movie);

        this.setState({ movies: movies });
    },

    handleDeleteMovie: function (index) {
        var movies = this.state.movies;

        movies.splice(index, 1);

        this.setState({movies: movies});
    }
});

module.exports = AddMovieView;

