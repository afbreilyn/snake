(function(root) {

  var Snakes = root.Snakes = (root.Snakes || {});

  var Snake = Snakes.Snake = function(){
    this.segments = [[10,10], [10,11], [10,12], [10,13]];
    this.dir = "S";
  };

  Snake.prototype.move = function() {
    var head = this.segments[0];

    if (this.dir === "N") {
      var newHead = [head[0], head[1] - 1];
    } else if (this.dir === "E") {
      var newHead = [head[0] + 1, head[1]];
    } else if (this.dir === "S") {
      var newHead = [head[0], head[1] + 1];
    } else if (this.dir === "W") {
      var newHead = [head[0] -1, head[1]];
    };

    this.segments.unshift(newHead);
    this.segments.pop();

    // key('a', function(){ alert('you pressed a!') });
  };

  Snake.prototype.turn = function(turn){
    this.dir = turn;
  };

  Snake.prototype.checkWrap = function () {
  };



})(this);