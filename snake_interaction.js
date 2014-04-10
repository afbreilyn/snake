$(document).ready(function() {
  $(".board").append(Board.render());
  $("body").click(function(event) {
    Board.snake.move();
    $(".board").empty().append(Board.render());
  })
});