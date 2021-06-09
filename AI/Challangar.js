define(function()
{
	function abs(x) {return x>0?x:-x;}
	function clr() {}
	function print(x)
	{
		//console.log('AI:'+x);
	}
	function AIscript(self,match,controller)
	{
		var stage_bound = 0,
			stage_clear = false,
			current_phase = 0,
			current_phase_count = 0,
			current_stage = 0,
			bg_width = match.background.width,
			bg_zwidth1 = match.background.zboundary[0],
			bg_zwidth2 = match.background.zboundary[1],
			mode = 0, //0: VS, 1: Stage, 2: 1on1, 3: 2on2, 4: Battle, 5: Demo, 6: Playback, 7: Quit
			difficulty = 0; //-1: CRAZY!, 0: difficult, 1: normal, 2: easy

		var target;
		var game_objects = match.scene.live;

		function rand(i)
		{
			return Math.floor(match.random()*i);
		}
		function loadTarget(i)
		{
			game_objects = match.get_living_object();
			if( game_objects[i])
			{
				target = game_objects[i];
				return target.AI.type();
			}
			return -1;
		}
		this.name = 'CHALLANGAR 1.0';
		this.designed_for = ['Dennis'];
		this.author = 'Zort';
// CHALLANGAR 1.0
// Designed for Dennis
// Usually beats standard Difficult AI
// Made by Zort




function targetward(hold){
   if (hold===undefined) hold=true;
   var y = (hold) ? 1 : 0;
   if (target.ps.x > self.ps.x) controller.keypress('right',1,y); else controller.keypress('left',1,y);
}

function targetwardz(hold){
   if (hold===undefined) hold=true;
   var y = (hold) ? 1 : 0;
   if (target.ps.z > self.ps.z) controller.keypress('down',1,y); else controller.keypress('up',1,y);
}

function max(a,b){ if (a>b) return a; else return b; }

function get_to(min_x,max_x,min_z,max_z){
   var dx = max(self.ps.x - max_x, min_x - self.ps.x);
   var dz = max(self.ps.z - max_z, min_z - self.ps.z);
   //var angle = atan2(var(dz), var(dx));
   var run = (dx > run_stop_distance || abs(self.ps.x - target.ps.x) < 100) ? 0 : 1;
   
   if (self.ps.x > max_x) {
	   controller.keypress('left',1,run);
	   if( run===0) controller.keypress('left',1,run);
   } else if (self.ps.x < min_x) {
	   controller.keypress('right',1,run);
	   if( run===0) controller.keypress('right',1,run);
   }
   
   if (self.ps.z > max_z) {
	   controller.keypress('up',1,run);
   } else if (self.ps.z < min_z) {
	   controller.keypress('down',1,run);
   }
}   

function dash_from_left(){
   // if there's no room from the left, go from the right
   if (target.ps.x < min_dash_dx) return false;
   // and conversely...
   if (bg_width - target.ps.x < min_dash_dx) return true;
   // otherwise, just go from whatever side's closer
   return (self.ps.x < target.ps.x);
}
function dash_from_top(){
   if (target.ps.z - bg_zwidth1 < min_dash_dz) return false;
   if (bg_zwidth2 - target.ps.z < min_dash_dz) return true;
   return (self.ps.z < target.ps.z);
}

function ready_to_dash(){
   // four acceptable regions to dash from
   var dx = abs(target.ps.x - self.ps.x);
   var dz = abs(target.ps.z - self.ps.z);
   return (self.state() == 0 || self.state() == 1 || self.state() == 2 ||
           self.frame.N == 215) &&
          (target.state() != 14 && target.AI.blink() < 2) && 
          ((min_dash_dx <= dx && dx <= max_dash_dx) &&
           (min_dash_dz <= dz && dz <= max_dash_dz) ||
           (facing_target() && self.state() == 2));
}

function facing_target(){
   return (self.AI.facing() && target.ps.x < self.ps.x) ||
          (!self.AI.facing() && target.ps.x > self.ps.x);
}

function about(x){ return x + rand(x/10) - x/20; }

var min_dash_dx;
var max_dash_dx;
var min_dash_dz;
var max_dash_dz;
var max_dash_blink;
var run_stop_distance;
var diagonal_run_angle; // not used due to lack of atan2

function id() {
   min_dash_dx = about(70);
   max_dash_dx = about(230);
   min_dash_dz = about(5);
   max_dash_dz = about(40);
   max_dash_blink = 5;
   run_stop_distance = about(30);
   diagonal_run_angle = 20.0; // not used due to lack of atan2

   controller.keypress('att',0,0); //reset keys
   controller.keypress('def',0,0);
   controller.keypress('jump',0,0);
   controller.keypress('up',0,0);
   controller.keypress('down',0,0);
   controller.keypress('left',0,0);
   controller.keypress('right',0,0);
   print(min_dash_dx);
   for (var i in game_objects) { //target
     if (loadTarget(i) == 0 && 
         target.uid != self.uid && 
         target.health.hp > 0 &&
         target.id < 100 && 
         target.team != self.team) {
         break;
     }
   }
   
   if (ready_to_dash()) {
      print("CHALLANGAR DEBUG: dashin'");
      if (self.state() == 2 && facing_target()) {
         controller.keypress('jump'); 
         controller.keypress('att');
         targetwardz();
      } else if (self.frame.N == 215) {
         print(" from flip");
         controller.keypress('jump');
         controller.keypress('att');
         targetwardz();
         targetward();
      } else if (self.state() == 2) {
         targetward(false);
         targetwardz(false);
      } else targetward(false);
   } else if (self.state() == 12) {
      print("CHALLANGAR DEBUG: flippin'");
      controller.keypress('jump');
   } else {
      print("CHALLANGAR DEBUG: getting into position");
      var min_x, max_x, min_z, max_z;
      if (dash_from_left()) {
         print(" (left, ");
         min_x = target.ps.x - max_dash_dx;
         max_x = target.ps.x - min_dash_dx;
      } else {
         print(" (right, ");
         min_x = target.ps.x + min_dash_dx;
         max_x = target.ps.x + max_dash_dx;
      }
      if (dash_from_top()) {
         print("top)");
         min_z = target.ps.z - max_dash_dz;
         max_z = target.ps.z - min_dash_dz;
      } else {
         print("bottom)");
         min_z = target.ps.z + min_dash_dz;
         max_z = target.ps.z + max_dash_dz;
      }
      get_to(min_x, max_x, min_z, max_z);
   }
   print("\n");
}
		this.TU = id;
	}
	AIscript.type = AIscript.prototype.type = 'AIscript';
	return AIscript;
});