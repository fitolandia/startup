var React = require('react');
var _= require('lodash');

var Button = require('../components/button');

var MovieTable = React.createClass ({

    propTypes: {
        movies: React.PropTypes.array,
        onDeleteMovie: React.PropTypes.func,
        onEditMovie: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            movies: []
        };
    },

    render: function () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Movie title</th>
                        <th>Movie Director</th>
                        <th>Movie Duration</th>
                    </tr>

                </thead>
                <tbody>
                    {this.props.movies.map(this.renderMovies)}
                </tbody>
            </table>
        )
    },

    renderMovies: function (movie, index) {
        return (
            <tr key={index}>
                <td>{movie.title}</td>
                <td>min {movie.duration}</td>
                <td>{movie.director}</td>
                <td>
                    <Button>Modify</Button>
                </td>
                <td>
                    <Button onClick={this.props.onDeleteMovie.bind(this, index)}>Delete</Button>
                </td>
            </tr>
        );
    }
});

module.exports = MovieTable;
