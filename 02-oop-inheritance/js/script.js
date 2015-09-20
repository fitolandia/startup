var  Movie = function(title, director, duration) {
    this.movieObservers = [];
    this.title = title;
    this.director = director;
    this.duration = duration;
};

Movie.prototype = {
    constructor: Movie,

    play: function() {
        for (var i = 0; i < this.movieObservers.length; i ++) {
            this.movieObservers[i].notifyPlaying(this);
        }
    },

    stop: function() {
        for (var i = 0; i < this.movieObservers.length; i ++) {
            this.movieObservers[i].notifyStopped(this)
        }
    },

    get: function(attr) {
        return this[attr];
    },

    set: function(attr, value) {
        this[attr] = value;
    },

    subscribeObserver: function (observer) {
        this.movieObservers.push(observer);
    },

    unsubscribeObserver: function (observer) {
        this.movieObservers.splice(this.movieObservers.indexOf(observer), 1);
    }
};

var MovieOberver = function (name) {
    this.name = name;
};

MovieOberver.prototype = {
    constructor: MovieOberver,

    notifyPlaying: function (Movie) {
        console.log(this.name + ' says: ' + Movie.title + ' is playing');
    },

    notifyStopped: function (Movie) {
        console.log(this.name + ' says: ' + Movie.title + ' stopped');
    }
};

var rocky = new Movie('Rocky IV', 'Sylvester Stallone', '1,5');
var person1 = new MovieOberver('Roberto');
var person2 = new MovieOberver('Juancito');

rocky.subscribeObserver(person1);
rocky.subscribeObserver(person2);

rocky.unsubscribeObserver(person2);

var DownloadableMovie = function () {};

DownloadableMovie.prototype = Movie.prototype;
DownloadableMovie.prototype.download = function () {console.log('downloading')};

var downloadableMovie = new DownloadableMovie();
downloadableMovie.download();
