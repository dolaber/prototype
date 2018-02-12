var dolaber = dolaber || {};

(function(dolaber, Athelete) {
  /**
   * A model to represent a baseball player
   * @param       {object} params the parameters to create the baseball player from
   * @constructor
   */
  function BaseballPlayer(params) {
    Athelete.call(this, params);
    this.position = params.position;
  }

  // Extend the Athelete class
  BaseballPlayer.prototype = Object.create(Athelete.prototype);

  dolaber.BaseballPlayer = BaseballPlayer;
})(dolaber, dolaber.Athelete);
