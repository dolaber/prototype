var dolaber = dolaber || {};

(function(dolaber) {
  /**
   * A model to represent a person
   * @param       {object} params the parameters to create a person from
   * @constructor
   */
  function Person(params) {
    this.id = params && !_.isUndefined(params.id) ? params.id : undefined;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }

  /**
   * Gets a persons full name
   * @return {[string]} the full name of a person
   */
  Person.prototype.getName = function() {
    var temp = [this.firstName, this.lastName];
    temp = temp.join(" ");
    temp.trim();
    return temp;
  };

  dolaber.Person = Person;
})(dolaber);
