//extended standard
define({
	frontpage:
	{
		pic:'UI/frontpage.png',
		bg_color:'#10206c'
	},
	frontpage_dialog:
	{
		bg:'UI/frontpage_dialog_bg.png',
		pic:'UI/frontpage_dialog.png',
		x:263, y:240, width:282, height:118,
		item:
		[	//x,  y,   w,  h
			[38, 16, 196, 24], //game start
			[20, 45, 232, 26], //network game
			[14, 76, 244, 27]  //control settings
		]
	},
	settings:
	{
		pic:'UI/settings.png',
		bg_color:'#10206c',
		leftmost_column_bg_color:'#1e337a',
		leftmost_column_text_color:'#5a77d8',
		ok_button:
		{
			pic:'UI/ok_button.png',
			x:550, y:430, width:151, height:26,
			item:[[0,0,151,26]]
		}
	},
	network_game:
	{
		bg_color:'#10206c'
	},
	panel:
	{
		pic:'UI/panel.png',
		x: 5, y: 6,
		hpx: 57, hpy: 16, hpw: 125, hph: 10, mpx: 57, mpy: 36, mpw: 125, mph: 10,
		hp_light:'#FF8888', hp_bright: '#FF0000', hp_dark: '#6f081f', mp_bright: '#0000FF', mp_dark: '#1f086f',
		pane_width:198, pane_height:53,
		width:794, height:128
	},
	message_overlay:
	{
		pic:'UI/message_overlay.png',
		//      x, y, w, h
		pause:[ 0, 0,82,21],
		demo: [82, 0,70,21],
		loading:[152,0,125,21]
	},
	character_selection:
	{
		pic:'UI/character_selection.png',
		bg_color:'#000',
		box_width:120, box_height:116,
		posx:[ 147,300,453,606 ],
		posy:[ 93,213,234,256,   299,420,441,463 ],
		waiting: { pic:'UI/press_attack_to_join.png' },
		random: { pic:'UI/random.png' },
		numbers: { pic:'UI/12345.png' },
		text:
		{	//      blink1    blink2    static    computer
			color:['#afdcff','#1946ff','#ffffff','#ff9b9b'],
			box_width:120, box_height:18
		}
	},
	how_many_computer_players:
	{
		bg:'UI/how_many_computer_players.png',
		x:218, y:213, width:365, height:111,
		item_x:68, item_y:69, item_space:30, item_width:19, item_height:19,
		active_color:'#FFFFFF', inactive_color:'#5068c0'
	},
	vs_mode_dialog:
	{
		bg:'UI/dialog1.png',
		pic:'UI/vs_mode_dialog.png',
		x:3, y:3, width:304, height:165,
		item:
		[	//x, y,  w, h
			[89,13,126,21], //Fight!85ff85
			[61,35,186,21], //Reset All
			[37,60,235,21], //Reset Random
			[12,83,279,21], //Background
			[34,106,228,22],//Difficulty
			[98,132,111,18],//Exit
		],
		text:
		[
			[167,87,122,16],//Background-textarea
			[167,111,90,16],//Difficulty-textarea
		],
		text_color: '#9b9bff'
	},
	summary:
	{
		width:490,
		pic:'UI/summary.png',
		//     x,  y,  w, h
		head: [0,  0,490,59],
		body: [0, 59,490,46],
		foot: [0,105,490,31],
		icon: [12, 0, 40,45],
		time: [427,4, 50,18],
		time_color: '#ffffff',
		//                Name         Kill         Attack         HP Lost        MP Usage       Picking        Status  (lose)
		text:       [[45,0,50,46],[97,10,59,24],[161,10,59,24],[225,10,59,24],[289,10,59,24],[353,10,59,24],[417,10,59,24]],
		text_color: [  '#ffffff',   '#ffaaaa',    '#ffaaaa',     '#f0f0aa',     '#f0f0aa',     '#aaf5aa',     '#85ff85','#ff9898']
	}
});
