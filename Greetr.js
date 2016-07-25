// immediatley invoked function //
(function(global, $) {

  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstname, lastName, language);
  }

  Greetr.prototype = {};
  
  Greetr.init = function(fistName, lastName, language) {

    //function constructor to build the object and give it three properties //
    //sets the value if you pass it in, otherwise sets defaults//
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    Self.language = language || 'en';

  }

}(window, jquery));
