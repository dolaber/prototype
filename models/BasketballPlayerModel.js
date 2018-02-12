var dolaber = dolaber || {};

(function(dolaber, Athelete) {
  /**
   * A model that represents a basketball player
   * @param       {object} params the parameters to create the basketball player from
   * @constructor
   */
  function BasketballPlayer(params) {
    Athelete.call(this, params);
    this.position = params.position;
  }
  // Extend the Athelete class
  BasketballPlayer.prototype = Object.create(Athelete.prototype);

  dolaber.BasketballPlayer = BasketballPlayer;
})(dolaber, dolaber.Athelete);
