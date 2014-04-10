(function(root) {
  var Snakes = root.Snakes = (root.Snakes || {});

  var Board = Snakes.Board = function() {
    this.snake = new Snakes.Snake();
  };

  Board.WIDTH = 50;
  Board.HEIGHT = 20;

  Board.makeGrid = function () {
    return _.times(Board.HEIGHT, function (i) {
      return _.times(Board.WIDTH, function (j) {
        return null;
      });
    });
  };

  Board.prototype.render = function() {
    var grid = Board.makeGrid();
    var renderString = "";

    _(this.snake.segments).each(function(seg){
      grid[seg[1]][seg[0]] = "S";
    });

    _(grid).each(function(row){
      _(row).each(function(el){
        if (el === null) {
          renderString += ".";
        } else {
          renderString += el;
        };
      });
      renderString += "<br>"
    });
    return renderString;

  };



})(this);

var Board = new Snakes.Board();