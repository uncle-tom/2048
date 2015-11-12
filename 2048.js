$(document).ready(function() {
  var grid = new Grid();
  grid.draw_grid();
  grid.generate_kvadrat();
  grid.generate_kvadrat();
  grid.draw_grid();

  window.onkeydown = function(e) {
  	console.log(e.keyCode);
    if ( e.keyCode == 37 ) {
      grid.move_left();
  	  grid.draw_grid();
    } else if ( e.keyCode == 39 ) {
    	console.log('move_right');
      grid.move_right();
  	  grid.draw_grid();
    }
    else if ( e.keyCode == 38 ) {
    	console.log('move_top');
      grid.move_top();
  	  grid.draw_grid();
    }
    else if ( e.keyCode == 40 ) {
    	console.log('move_top');
      grid.move_bottom();
  	  grid.draw_grid();
    }
  }
})