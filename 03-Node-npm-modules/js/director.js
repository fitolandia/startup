var Director = function (name) {
  this.name = name;
  this.quotes = [];
};

Director.prototype = {
  constructor: Director,
  speak: function () {
    //console.log(this.name + ' says: ' + this.quotes.join(', '));
    for (var i = 0; i < this.quotes.length; i++) {
      console.log(this.name + ' says: ' + this.quotes[i]);
    }
  },
  set: function (attr, value) {
    this[attr] = value;
  }
};

module.exports = Director;