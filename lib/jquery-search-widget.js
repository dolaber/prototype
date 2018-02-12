/**
 * A widget to search a list and return the matched items
 * @param  {Object} $ jQuery
 */

(function($) {
  var widget = {
    options: {
      searchableAttributes: [],
      list: [],
      onSearch: undefined
    },
    _create: function() {
      var _this = this;
      this.element.on("input", function() {
        _this._search($(this).val());
      });
    },

    /**
     * Searches the list for the input string and returns the list, it is debounced for performance
     * @param  {string} input the input string to search for
     * @return {array}       the list of passed items
     */
    _search: _.debounce(function(input) {
      var regex = new RegExp(input, "i");
      var _this = this;
      var passedElements = _.filter(this.options.list, function(item) {
        for (var searchableAttribute in _this.options.searchableAttributes) {
          if (
            !_.isUndefined(
              item[_this.options.searchableAttributes[searchableAttribute]]
            ) &&
            _.isString(
              item[_this.options.searchableAttributes[searchableAttribute]]
            ) &&
            item[_this.options.searchableAttributes[searchableAttribute]].match(
              regex
            )
          ) {
            return true;
          }
        }
        return false;
      });

      // Call the resulting function if it exsists
      if (_.isFunction(this.options.onSearch)) {
        this.options.onSearch(passedElements);
      }
    }, 200)
  };

  $.widget("dolaber.search", widget);
})($);
