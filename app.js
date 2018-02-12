(function($) {
  // Creates a list item for the unordered list formatted to the person
  var createItem = function(p) {
    var li = $(document.createElement("LI"));
    li.attr("data-id", p.id);

    var container = $(document.createElement("DIV"));
    container.addClass("athelete");
    container.addClass(p.sport);
    container.appendTo(li);

    var name = $(document.createElement("SPAN"));
    name.addClass("name");
    name.text(p.getName());
    name.appendTo(container);

    var position = $(document.createElement("SPAN"));
    position.addClass("position");
    position.text(s.titleize(p.position));
    position.appendTo(container);

    return li;
  };

  //Create 2 lists of people separated by sport
  var partition = _.partition(people, function(person) {
    return person.sport == "basketball";
  });

  /** The start of basketball */
  var basketballPlayers = _.map(partition[0], function(person) {
    return new dolaber.BasketballPlayer(person);
  });

  var basketball = $("#basketball");

  var basketballLis = $([]);
  _.each(basketballPlayers, function(person) {
    basketballLis = basketballLis.add(createItem(person));
  });
  basketball.find("ul").append(basketballLis);

  // Create a search widget to filter the list
  var basketballSearch = basketball.find("input.search");
  var basketballOnSearch = function(passedItems) {
    basketball.find("li").hide();
    if (passedItems.length) {
      _.each(passedItems, function(item) {
        basketball.find('li[data-id="' + item.id + '"]').show();
      });
    }
  };
  basketballSearch.search({
    searchableAttributes: ["firstName", "lastName", "position"],
    list: basketballPlayers,
    onSearch: basketballOnSearch
  });
  /** The end of basketball */

  /** The start of baseball */
  var baseballPlayers = _.map(partition[1], function(person) {
    return new dolaber.BaseballPlayer(person);
  });

  var baseball = $("#baseball");

  var baseballLis = $([]);
  _.each(baseballPlayers, function(person) {
    baseballLis = baseballLis.add(createItem(person));
  });
  baseball.find("ul").append(baseballLis);

  // Create a search widget to filter the list
  var baseballSearch = baseball.find("input.search");
  var baseballOnSearch = function(passedItems) {
    baseball.find("li").hide();
    if (passedItems.length) {
      _.each(passedItems, function(item) {
        baseball.find('li[data-id="' + item.id + '"]').show();
      });
    }
  };
  baseballSearch.search({
    searchableAttributes: ["firstName", "lastName", "position"],
    list: baseballPlayers,
    onSearch: baseballOnSearch
  });
  /** The end of baseball */
})($);
