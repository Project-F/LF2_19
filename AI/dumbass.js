/*	dumbass
	the most basic AI script that is purely for demonstration
 */
define(function()
{
	function AIscript(self,match,controller) //a javascript class
	{
		//constructor
		//  self - the character being controlled
		//  match -to know what's happening in the game
		//  controller - press keys on this controller
		//states
		var cc=0; //counter
		var dir=1;
		var DIR = ['left','right','up','down']; //number to direction mapping
		var target; //target opponent to chase after
		
		this.TU = function()
		{	//this is the main AI routine that will be called once every 2 or 3 TU
			if( cc%100===0) //load a new target once in a while
				load_target();
			var dx = target.ps.x-self.ps.x;
			var dz = target.ps.z-self.ps.z;
			if( ((dx>0?1:-1)===self.dirh() && abs(dx)<200 && abs(dz)<10 && (self.state()===2 || self.state()===5))
			//if target is in front of me and he is in range and I am running or dashing
			 || (abs(dx)<50 && abs(dz)<10)) //or if I am very close to target
			if( target.state()!==14) //and if he is not lying
			{
				controller.keypress(DIR[dx>0?1:0]); //change direction
				controller.keypress('att'); //attack!
				return; //exit this function
			}
			if( cc%5===0) //do something periodically
			{
				var chase;
				if( self.health.hp>150) //if I have enough health
					chase = true; //chase
				else
					chase = false; //flight
				if( abs(dx)<200) //not very far away
				{	//if chasing, walk towards him
					controller.key(DIR[dir],0); //keyup- release the previous key
					if( rand(3)===0) //30% chance of doing so
						dir = rand(4); //have random direction, wander around
					else if( abs(dx)>abs(dz)) //x distance is greater than z distance
						dir = dx>0===chase?1:0;  //go to right if target is on the right
					else
						dir = dz>0===chase?3:2;  //go to down if target is below
					controller.key(DIR[dir],1); //keydown only- hold the direction key
				}
				else
				{	//run towards him
					controller.key(DIR[dir],0); //keyup
					dir = dx>0?1:0;
					controller.keypress(DIR[dir]); //press 1st time
					controller.keypress(DIR[dir]); //press 2nd time, run!
				}
			}
			if( cc%10===0) //less frequently
			{
				var act = rand(4); //get a random number from [0,1,2,3]
				switch (act)
				{
					case 0: break; //do nothing
					case 1: controller.keypress('def'); break;
					case 2: controller.keypress('jump'); break;
					case 3: controller.keypress('att'); break;
				}
			}
			cc++;
		}
		
		//utility functions
		function abs(x) {return x>0?x:-x;}
		function rand(i)
		{	//extremely important: one must get a pseudo random number from match for the sake of determinism
			return Math.floor(match.random()*i); //return a random integer from 0 to i-1 (inclusive)
		}
		function load_target()
		{
			var targets = [];
			var game_objects = match.get_living_object(); //list of living object in scene
			for (var i in game_objects)
			{
				var obj = game_objects[i];
				if( obj.type==='character' &&
					obj.team!==self.team)
				{
					var dx = obj.ps.x-self.ps.x;
					var dz = obj.ps.z-self.ps.z;
					targets.push({
						dist:Math.sqrt(dx*dx+dz*dz),
						obj:obj
					});
				}
			}
			targets.sort(function(a,b){
				return a.dist-b.dist; //sort according to distance
			});
			if( rand(2)===0)
				target = targets[rand(targets.length)].obj; //select a random opponent as target
			else
				target = targets[0]?targets[0].obj:null; //select the closest opponent
		}
	}
	AIscript.type = AIscript.prototype.type = 'AIscript'; //must define a type
	return AIscript;
});
