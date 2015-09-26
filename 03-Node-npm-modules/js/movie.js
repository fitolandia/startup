var $ = require('jquery');
var Director = require('./director');

var Movie = function (title, duration) {
    this.movieObservers = [];
    this.title = title;
    this.duration = duration;
};

Movie.prototype = {
    constructor: Movie,

    play: function () {
        for (var i = 0; i < this.movieObservers.length; i++) {
            this.movieObservers[i].notifyPlaying(this);
        }
    },

    stop: function () {
        for (var i = 0; i < this.movieObservers.length; i++) {
            this.movieObservers[i].notifyStopped(this)
        }
    },

    get: function (attr) {
        return this[attr];
    },

    set: function (attr, value) {
        this[attr] = value;
    },

    subscribeObserver: function (observer) {
        this.movieObservers.push(observer);
    },

    unsubscribeObserver: function (observer) {
        this.movieObservers.splice(this.movieObservers.indexOf(observer), 1);
    }
};

module.exports = Movie;

var rocky = new Movie('Rocky IV', '1,5');
var sylvesterStallone = new Director('sylvester stallone');
sylvesterStallone.set('quotes', ['Cast is everything.', 'Do Lifes not about how hard of a hit you can give... its about how many you can take, and still keep moving forward ...']);
rocky.set('director', sylvesterStallone);
rocky.get('director').speak();
console.log(rocky);


var alien = new Movie('alien', '2,2');
var ridleyScott = new Director ('ridley scott');
ridleyScott.set('quotes', ['what are we gonna do?', 'Did IQs just drop sharply while I was away?']);
alien.set('director', ridleyScott);
alien.get('director').speak();
console.log(alien);


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


var person1 = new MovieOberver('Roberto');
var person2 = new MovieOberver('Juancito');


rocky.subscribeObserver(person1);
rocky.subscribeObserver(person2);

rocky.unsubscribeObserver(person2);

var DownloadableMovie = function () {};

DownloadableMovie.prototype = Movie.prototype;
DownloadableMovie.prototype.download = function () {
    console.log('downloading');
};

var downloadableMovie = new DownloadableMovie();
downloadableMovie.download();

var SocialMixin = function () {
    this.share = function (user) {
        console.log('Share this with ' + user.name);
    };

    this.like= function (person) {
        console.log(person.name + ' like this');
    };

    return this;
};

SocialMixin.call(Movie.prototype);

$(document).on('ready', function() {
    console.log("Root Loaded");
});



