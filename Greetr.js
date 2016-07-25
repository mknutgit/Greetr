// immediatley invoked function //
(function(global, $) {

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'helllo',
    es: 'hola'
  };


  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  };

  Greetr.prototype = {

    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language)  === -1) {
        throw "Invalid language";
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    greet: function(formal) {
      var msg;

      // if undefined or null it will be cerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    }

    //jQuery method that accepts a jQuery selector and wether or not it is a formal greeting
    //sets up the greeting and updates whatever value it there
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (!selector) {
        throw 'Missing JQuery selector';
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;

    }

  };

  Greetr.init = function(firstName, lastName, language) {

    //function constructor to build the object and give it three properties //
    //sets the value if you pass it in, otherwise sets defaults//
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;


}(window, jQuery));
