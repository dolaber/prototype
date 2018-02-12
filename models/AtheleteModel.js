var dolaber = dolaber || {};
(function(dolaber, Person) {
  /**
   * A model to represent an athelete
   * @param       {object} params the parameters to create the athlete from
   * @constructor
   */
  function Athelete(params) {
    Person.call(this, params);
    this.sport = params.sport;
  }

  // Extend the Person class
  Athelete.prototype = Object.create(Person.prototype);

  dolaber.Athelete = Athelete;
})(dolaber, dolaber.Person);
