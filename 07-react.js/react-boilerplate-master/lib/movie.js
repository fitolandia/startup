var Movie = function (title, duration, director) {
    this.title = title;
    this.duration = duration;
    this.director = director;
};

Movie.prototype = {
    constructor: Movie,

    get: function (attr) {
        return this[attr];
    },

    set: function (attr, value) {
        this[attr] = value;
    }
};

module.exports = Movie;