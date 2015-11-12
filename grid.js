// [
//   [0,0,0,0],
//   [0,1,0,0],
//   [0,0,1,0],
//   [0,0,0,0]
// ]

function Grid(){
	this.grid = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

	var ctx = $('#main_canvas')[0].getContext('2d');
  var WIDTH_KVADRAT = 100;
  var HEIGHT_KVADRAT =100;
  var PADDING = 25;
  var COLORS = ["orange", "blue", "gold", "red"]

	this.generate_kvadrat = function() {
	  var x = parseInt(Math.random() * 4);
	  var y = parseInt(Math.random() * 4);
	  	var color = COLORS[parseInt(Math.random() * 2)];
	  if(this.grid[x][y] == 0) {
	  	this.grid[x][y] = color;
	  } else {
	  	x = parseInt(Math.random() * 4);
	  	y = parseInt(Math.random() * 4);
	  	this.grid[x][y] = color;
	  }
	}

  this.move_left = function() {
  	for(var i=1; i < 4; i++) {
  		for (var j=0; j<4; j++) {
  			if(this.grid[i][j] != 0) {
  				for(var z = i - 1; z > -1; z -= 1) {
  					if(this.grid[z][j] == 0) {
  						this.grid[z][j] = this.grid[z + 1][j];
  						this.grid[z + 1][j] = 0;
  					}
  				}
  			}
  		}
  	}
  }

  this.move_right = function() {
  	for(var i=2; i > -1; i--) {
  		for (var j=0; j<4; j++) {
  			if(this.grid[i][j] != 0) {
  				for(var z = i + 1; z < 4; z += 1) {
  					if(this.grid[z][j] == 0) {
  						this.grid[z][j] = this.grid[z-1][j];
  						this.grid[z-1][j] = 0;
  					}
  				}
  			}
  		}
  	}
  }

  this.move_top = function() {
  	for(var i=0; i<4; i++) {
  		for (var j=1; j<4; j++) {
  			if(this.grid[i][j] != 0) {
  				for(var z = j - 1; z > -1; z -= 1) {
  					if(this.grid[i][z] == 0) {
  						this.grid[i][z] = this.grid[i][z + 1];
  						this.grid[i][z + 1] = 0;
  					}
  				}
  			}
  		}
  	}
  }

  this.move_bottom = function() {
  	for(var i=0; i<4; i++) {
  		for (var j=2; j > -1; j--) {
  			if(this.grid[i][j] != 0) {
  				for(var z = j + 1; z < 4; z += 1) {
  					if(this.grid[i][z] == 0) {
  						this.grid[i][z] = this.grid[i][z - 1];
  						this.grid[i][z - 1] = 0;
  					}
  				}
  			}
  		}
  	}
  }

	this.draw_grid = function() {
		console.log(this.grid)
	  for (var i=0; i<4; i++) {
  	  for (var j=0; j<4; j++) {
  		  //ctx.strokeStyle = COLORS[j];
  		  var x = PADDING+(105*i),
  			  y = PADDING+(105*j);

  			if(this.grid[i][j] == 0){
  				ctx.fillStyle = 'white';
  				ctx.fillRect(x, y, WIDTH_KVADRAT, HEIGHT_KVADRAT);
  		    ctx.strokeRect(x, y, WIDTH_KVADRAT, HEIGHT_KVADRAT);
  			} else {
  				ctx.fillStyle = this.grid[i][j];
  		  	ctx.fillRect(x, y, WIDTH_KVADRAT, HEIGHT_KVADRAT);
  		  }  		  
  	  }
    }
	}
}