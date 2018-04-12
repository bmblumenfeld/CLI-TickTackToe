const blessed = require('blessed')

const screen = blessed.screen({
	smartCSR: true,
	dockBorders: true,
})

screen.title = 'Tic Tac Toe'

var box = blessed.box({
  top: '15%',
  left: 'center',
  width: '100%',
  height: '10%',
  content: 'Welcome to Tic Tac Toe. Toggle a sqaure with its respective number. Dont be a sore loser. EJOY!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});

screen.append(box)
 

var table = blessed.table({
	top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: 'magenta'
    },
    hover: {
      bg: 'green'
    }
  }
})


  table.setData([
    [ '1',  '2', '3'  ],
    [ '4', '5' , '6' ],
    [ '7', '8', '9' ]
  ]);

screen.append(table);

var turn = 1
var used = {}

// var board = [0,0,0,0,0,0,0,0,0]
var board = 
		[
			[ '1',  '2', '3'  ],
	    [ '4', '5' , '6' ],
	    [ '7', '8', '9' ]
  	]

// box.key('enter', function(ch, key) {
//   box.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
//   box.setLine(1, 'bar');
//   box.insertLine(1, 'foo');
//   screen.render();
// });

screen.key(['1','2','3','4','5','6','7','8','9'], function(ch,key){
	if (turn && !used[key+'']) {
	table.setData()
  screen.render();	
  turn = 0
	} else if (!turn && !used[key+'']){
	table.setData([
			[ 'o',  '2', '3'  ],
	    [ '4', '5' , '6' ],
	    [ '7', '8', '9' ]
  	])
  screen.render();	
	
  turn = 1
	}
	used['1'] = true
})

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

table.focus();

screen.render();


