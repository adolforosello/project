//Event
var Event = function(transmiter) {
  this.subject = transmiter;
  this.observers = [];
};

Event.prototype = {
  suscript: function(observer) {
    this.observers.push(observer);
  },
  notify: function() {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i](this.subject);
    }
  }
};
