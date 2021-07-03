define(function()
{
	function abs(x) {return x>0?x:-x;}
	function clr() {}
	function print(x)
	{
		console.log('AI:'+x);
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
		function updateTarget() {
			game_objects = match.get_living_object();
		}
		this.name = 'CRUSHER 1.0';
		this.designed_for = ['Davis'];
		this.author = 'YinYin';

// CRUSHER 1.0
// Designed for Davis
// Made by YinYin

//davisspecials
function ego(){
if(rand(22)+1>10*(difficulty)){
 //define variables
 var sfac = 2*(self.AI.facing()?1:0)-1;              //own direction (-1: left, 1: right)
 var tfac = 2*(target.AI.facing()?1:0)-1;           //target direction (-1: left, 1: right)
 var bfac = (self.AI.facing()?1:0)+(target.AI.facing()?1:0)-1;//both facing (-1: left, 0: against, 1: right)
 var stxd = self.ps.x-target.ps.x;           //x distance (left > 0 > right)
 var styd = self.ps.y-target.ps.y;          //y distance (above > 0 > below)
 var stzd = abs(self.ps.z-target.ps.z);    //z distance
 var dist = stxd*sfac;              //directional distance
 var tmp = target.health.mp;
 var smp = self.health.mp;

 if(self.health.bdefend>0&&frame(self.uid,110,111)&&range(0,80,dist)&&stzd<=13){controller.keyseq(['def','down','att']);return 1;}
 //no mp combo
 if (dist >= 0 && target.state() == 12 && styd > 60 && styd < 90){
  if (self.state() <= 1){if (stxd > 0){controller.keypress('left');}else {controller.keypress('right');}return 1;}//run
  else if (self.state() == 2){controller.keypress('att');return 1;}                           //attack
 }//grab combo
 if (self.frame.N == 121 && self.AI.ctimer() < 50){controller.keyseq(['def','down','att']);}
  //blasts
 if (target.id!=8&&dist >= 300 && stzd <= 40 && self.state() <= 1){DfA();}
 else if (dist > 700 && stzd <= 40 && self.frame.N >= 240 && self.frame.N <= 264){controller.keypress('att');}
 else if (self.frame.N >= 240 && self.frame.N <= 264){return 1;}
 //combo breaker
 if (stzd < 10 && dist < 75 && dist >= -5 && target.ps.y == 0 && (self.frame.N == 111 || self.state() == 8 || self.state() == 11 || self.state() == 16)){
  if (smp >= 225 && self.frame.N != 111){controller.keyseq(['def','up','att']);}else if (smp >= 75 && self.frame.N == 111 && (tmp < 193 || smp >= 293)){controller.keyseq(['def','down','att']);}else if (((target.frame.N >= 280 && target.frame.N <= 278 && smp >= 225) || tmp < 70) && (target.frame.N < 70 && target.frame.N > 72)){controller.keypress('def');}return 1;
 }//flip
 else if (self.state() == 12){
  if (target.frame.N == 301 || (target.frame.N >= 290 && target.frame.N <= 293) || target.frame.N == 75){controller.keypress('jump');}
 }//dash, roll
 else if (self.frame.N == 215 && self.health.bdefend >= 20){
  if (dist > 0 && target.frame.N < 290 && target.frame.N > 293){controller.keypress('jump');}else {controller.keypress('def');}
 }
 //facing
 if (bfac != 0 && self.state() == 7 && stzd < 10 && target.ps.y == 0){//defense
  if (sfac < 0){controller.keypress('left');}else {controller.keypress('right');}//turn
 }
 else if (stzd < 10 && dist < 0 && self.state() != 1 && self.state() != 7){//normal
  if (stxd > 0){controller.keypress('left');}else {controller.keypress('right');}//turn
 }
 //defending
 if (stzd < 10 && self.state() != 7 && target.state() == 3 && abs(dist) < 100 && target.ps.y == 0 && ((target.frame.N >= 280 && target.frame.N <= 278 && smp >= 225) || tmp < 70) && (target.frame.N < 70 && target.frame.N > 72)){controller.keypress('def');}//combos
 else if (stzd < 10 && dist < 70 && dist >= -5){
  if (target.health.hp > 0 && target.health.hp <= 114 && smp >= 225 && target.state() != 12 && target.state() != 7){controller.keyseq(['def','up','att']);return 1;}//finisher
  else if (self.frame.N == 39 && target.state() == 12){controller.keypress('jump');return 1;}                                                 //super combo
  else if ((self.frame.N == 278 || self.frame.N == 279) && tmp >= 225 && target.AI.shake() > 0){controller.keyseq(['def','up','att']);return 1;}           //safe combo
  else if ((target.state() == 16 || target.state() == 8) && smp >= 150 && (tmp < 193 || smp >= 293)){controller.keyseq(['def','down','att']);return 1;} //starter
  else if (target.state() == 16 && self.state() == 0 && tmp >= 225){if (stxd > 0){controller.keypress('left');}else {controller.keypress('right');}return 1;}    //grab
  else if ((self.frame.N == 281 || self.frame.N == 282) && target.state() == 12){if (smp >= 450){controller.keyseq(['def','up','att']);return 1;}       //doubleDstart
   else if (smp >= 100){controller.keypress('jump');return 1;}else if (stxd > 0){controller.keypress('left');}else {controller.keypress('right');}return 1;}                          //low mp start
  else if (target.health.hp > 0 && target.state() == 12 && styd > 90 && self.frame.N == 215 && smp >= 225){controller.keyseq(['def','up','att']);return 1;}  //var dragon
  else if ((target.frame.N == 181 || target.frame.N == 187) && target.health.hp > 0 && smp >= 225){controller.keyseq(['def','up','att']);return 1;}          //fall dragon
 }
 //opportunities
 if (self.state() == 5 || self.state() == 9 || (self.frame.N == 292 && styd < 7)){//dash,grab,leap attack
  if ((target.health.hp <= 138 || self.AI.ctimer() < 40) && self.state() == 9 && smp >= 300){controller.keyseq(['def','down','att']);}      //finisher
  else if ((target.health.hp <= 114 || self.AI.ctimer() < 40) && self.state() == 9 && smp >= 225){controller.keyseq(['def','up','att']);}//finisher
  else if (self.AI.ctimer() < 40 && self.state() == 9 && smp >= 75 && tmp < 225){controller.keyseq(['def','down','att']);return 1;}//end
  else {controller.keypress('att');}return 1;}                                                                  //attack
  else if (self.frame.N == 292 || frame(self.uid,85,109) || self.frame.N == 284){return 1;} //wait
 //var unwanted inputs
 if (self.AI.seqcheck(['def','right','att']) >= 2 || self.AI.seqcheck(['def','left','att']) >= 2 || self.AI.seqcheck(['def','up','att']) >= 2 || self.AI.seqcheck(['def','down','att']) >= 2 || self.AI.seqcheck(['def','up','jump']) >= 2){
  if (self.ps.z - target.ps.z < 0){controller.keypress('down');}else {controller.keypress('up');}
 }
}
 return 0;
}
//davisspecials

function id(){//main function
//add full object loading sequence
//create target selection
//create ego wrapper
//create moving functions/approaching/fleeing/waiting
   if(self.uid==-1)return;
   if(self.health.hp<=0)return;
   inputs();
   updateTarget();
   var o=get_objects();
   if(stage_clear){controller.keypress('right');controller.keypress('down');}
   else if(stall(o[0][0]))return;
   else if(rebound(o[0][0]))return;
   else if(dodge(o[0]))return;
   
   if(is_opponent(o[1][0])){
      loadTarget(o[1][0]);
      if(ego()==0&&target.health.hp>0){
         approach_opponent(o[1][0]);
         if(rand(22)+1>10*(difficulty))act(o[1][0]);
      }
   }
}

//oldstuff
function facing_against(){
   //true if self and target face opposite directions
   //add variable objects
   return (self.AI.facing()!=target.AI.facing())?true:false;
}
function DfA(){
   if(xdistance(self.uid,target.uid) > 0){controller.keyseq(['def','right','att']);}
   else{controller.keyseq(['def','left','att']);}
}
function frame(i,min,max){
   //true if between min and max
   if(!is_object(i)){return false;}
   return range(min,max,target.frame.N);
}
function act(o){
  if(target.state()!=14&&target.AI.blink()==0){
   //special moves, attacking, jumping, picking, combos, etc, ...
   if(target.state()!=3&&target.state()!=2&&target.frame.N!=213&&range(100,180+abs(self.ps.vx),abs(xdistance(self.uid,o)))&&range(0,40+abs(self.ps.vz),abs(zdistance(self.uid,o)))){
	 if(self.state()<=1){run();}
	 else if(self.state()==2){controller.keypress('jump');controller.keypress('att');}
   }
   else if(opponent_close(o)){attack();}
  }
}
function opponent_close(i){
   //true if opponent in range
   //pass object number and ranges
   return (loadTarget(i)==0&&range(0,80,abs(xdistance(self.uid,target.uid)))&&range(0,15,abs(zdistance(self.uid,target.uid))))?true:false;
}
function attack(){
   //attack towards target
   if(facing_distance(self.uid,target.uid)>0){turn();}
   if(target.state()==16){controller.keyseq(['def','down','att']);}
   else{controller.keypress('att',1,0);}
}
function facing_distance(s,t){
   //positive: target distance to the front
   return xdistance(s,t)*(2*(self.AI.facing()?1:0)-1);
}
function approach_opponent(o){
   //approach opponent, be aware of item?
   if(is_opponent(o)&&(target.state()==14||target.AI.blink())){
	  if(target.id==4||target.id==5){move_towards(o);}
      else{move_away(o);}
   }
   else if(!range(0,5,abs(zdistance(self.uid,o)))||!range(0,65,abs(xdistance(self.uid,o)))){
      if(self.state()<=1&&!range(0,300,abs(xdistance(self.uid,o)))&&facing_towards()){run();}
      else if(self.state()<=1&&!range(0,80,abs(xdistance(self.uid,o)))){move_above(o);}
	  else{move_towards(o);}
   }
}
function run(){
   //run forward
   if(self.AI.facing()==false){controller.keypress('right',1,0);}else{controller.keypress('left',1,0);}
}
function move_above(i){
   //walk above target i
   //add desired x and z distances
   if(!range(0,10+abs(self.ps.vx),abs(xdistance(self.uid,i)))){
      if(xdistance(self.uid,i)<0){controller.keypress('left',1,1);}else{controller.keypress('right',1,1);}
   }
   if(range(0,30+abs(self.ps.vz),abs(zdistance(self.uid,i)))){
      if(zdistance(self.uid,i)<0){controller.keypress('down',1,1);}else{controller.keypress('up',1,1);}
   }
}
function move_away(i){
   //walk away from target i
   //add desired x and z distances
      if(xdistance(self.uid,i)<0){controller.keypress('right',1,1);}else{controller.keypress('left',1,1);}
      if(zdistance(self.uid,i)<0){controller.keypress('down',1,1);}else{controller.keypress('up',1,1);}
}
function move_towards(i){
   //walk towards target i
   //add desired x and z distances
   if(!range(0,60+18*(difficulty-2)+abs(self.ps.vx),abs(xdistance(self.uid,i)))){
      if(xdistance(self.uid,i)<0){controller.keypress('left',1,1);}else{controller.keypress('right',1,1);}
   }
   if(!range(0,10+abs(self.ps.vz),abs(zdistance(self.uid,i)))){
      if(zdistance(self.uid,i)<0){controller.keypress('up',1,1);}else{controller.keypress('down',1,1);}
   }
}
function range(min,max,i){
   //true if i is between min and max
   //make frame use the same form
   return (i>=min&&i<=max)?true:false;
}
function xdistance(s,t){
   //x distance between s and t
   loadTarget(s);
   var sx=target.ps.x;
   loadTarget(t);
   var tx=target.ps.x;
   return tx-sx;
}
function zborder1(z){
   //z distance to the top
   return z-bg_zwidth1;
}
function zborder2(z){
   //z distance to the bottom
   return bg_zwidth2-z;
}
function zdistance(s,t){
   //z distance between s and t
   loadTarget(s);
   var sz=target.ps.z;
   loadTarget(t);
   var tz=target.ps.z;
   return tz-sz;
}
//oldstuff

function defend(i){//turn against i and defend
   if(!facing_against(i)){turn();}
   controller.keypress('def',1,0);
}

function forward(h){//press forward direction
   if(h===undefined) h=1;
   if(self.AI.facing()){controller.keypress('left',1,h);}else{controller.keypress('right',1,h);}
}

function towards(i,h){//move towards object i
   if(h===undefined) h=1;
   if(facing_towards(i)){forward(h);}else{turn();}
   if(self.ps.z<game_objects[i].ps.z)controller.keypress('down',1,h);
   else if(self.ps.z>game_objects[i].ps.z)controller.keypress('up',1,h);
}

function inputs(){//var inputs
   controller.keypress('up',0,0);controller.keypress('down',0,0);controller.keypress('left',0,0);controller.keypress('right',0,0);controller.keypress('def',0,0);controller.keypress('jump',0,0);controller.keypress('att',0,0);
}

function turn(){//press opposite direction
   if(self.AI.facing()){controller.keypress('right',1,0);}else{controller.keypress('left',1,0);}
}

function dodge(i){//dodge attack
   if(!is_reboundable(i[0])&&i[1]>=dodge_time(i)&&i[3]!=-1){
      if(is_chase(i[0])){towards(i[0],0);return true;}
      if((i[3]<self.ps.z||i[3]<=bg_zwidth1+15)&&i[3]<=bg_zwidth2-15)controller.keypress('down');
      else controller.keypress('up');
	  return true;
   }
   return false;
}

function facing_against(i){//check if facing against i
   if(has_direction(i))return (self.AI.facing()!=game_objects[i].AI.facing())?true:false;
   return facing_towards(i);
}

function facing_towards(i){//true if self faces target
   if( i===undefined)
     //true if self faces target
     //add variable objects
     return ((self.AI.facing()?-1:1)*xdistance(self.uid,target.uid)>0)?true:false;
   else   
     return ((self.AI.facing()?-1:1)*(self.ps.x-game_objects[i].ps.x)<0)?true:false;
}

function has_direction(i){//true if the object has an attack relevant direction
   if(game_objects[i].caught_throwinjury||game_objects[i].AI.frame(game_objects[i].AI.frame1()).state==18)return false;
   return true;
}

function has_gravity(i){//true if a character i has gravity
//add other object types - return gravity value instead
   return is_character(i)&&game_objects[i].ps.y<0;
}

function intersect(a,b){//check if spaces a and b intersect
 if(a[1]<b[0]||
  b[1]<a[0]||
  a[2]>b[3]||
  b[2]>a[3]||
  a[4]>b[5]||
  b[4]>a[5]||
  (a[0]==a[1]&&a[1]==a[2]&&a[2]==a[3]&&a[3]==a[4]&&a[4]==a[5])||
  (b[0]==b[1]&&b[1]==b[2]&&b[2]==b[3]&&b[3]==b[4]&&b[4]==b[5])){return false;}
 return true;
}

function is_character(i){//true if i is a character
   return (is_object(i)&&game_objects[i].AI.type()==0)?true:false;
}

function is_chase(i){//true if i is a chase
   if(!is_character(i)&&(game_objects[i].AI.frame(game_objects[i].AI.frame1()).hit_Fa==1||
      game_objects[i].AI.frame(game_objects[i].AI.frame1()).hit_Fa==2||
	  game_objects[i].AI.frame(game_objects[i].AI.frame1()).hit_Fa==3||
	  game_objects[i].AI.frame(game_objects[i].AI.frame1()).hit_Fa==4||
	  game_objects[i].AI.frame(game_objects[i].AI.frame1()).hit_Fa==10||
	  game_objects[i].AI.frame(game_objects[i].AI.frame1()).hit_Fa==12||
	  game_objects[i].AI.frame(game_objects[i].AI.frame1()).hit_Fa==14))return true;
   return false;
}

function is_object(i){//true if i is an object
   return game_objects[i];
}

function is_opponent(i){//true if i is a character
   return (is_character(i)&&game_objects[i].health.hp>0&&game_objects[i].team!=self.team)?true:false;
}

function is_reboundable(i){//true if i is reboundable
   return (is_object(i)&&!is_character(i)&&game_objects[i].AI.frame(game_objects[i].AI.frame1()).state==3000)?true:false;
}

function is_stoppable(i){//true if i is reboundable
   return (is_object(i)&&!is_character(i)&&game_objects[i].AI.frame(game_objects[i].AI.frame1()).state<=3000&&game_objects[i].AI.frame(game_objects[i].AI.frame1()).state!=1004&&game_objects[i].AI.frame(game_objects[i].AI.frame1()).state!=2004)?true:false;
}

function rebound(i){//stop/rebound projectiles
//pass on attack array
//replace time_till_impact with loaded object parameters
//create attack() function and item picking check
   //difficulty barrier
   if(rand(difficult2(0))>3)return false;
   //reboundable without risk
   if(is_stoppable(i)&&
   time_till_impact(i, self.uid)>attack_startup(self.uid,self.frame.N)&&
   time_till_impact(self.uid, get_attack_frame(self.uid,self.frame.N), i, -1)<attack_startup(self.uid,self.frame.N)){
      controller.keypress('att');return true;
   }
   return false;
}

function stall(i){//minimize damage
//pass on attack array
//replace time_till_impact with loaded object parameters
   //difficulty barrier
   if(rand(difficult2(0))>3)return false;
   //always flip to avoid throwinjury
   if(game_objects[self.uid].throwinjury&&(self.frame.N==182||self.frame.N==188)){controller.keypress('jump');return true;}
   else if(!is_object(i))return false;
   //determine reaction speed
   if(time_till_impact(i, self.uid)<=difficult(1)){
      //defend or roll
      if(self.state()<=2||self.frame.N==215){defend(i);return true;}
	  //flip
      if(self.frame.N==182||self.frame.N==188){controller.keypress('jump');return true;}
   }
   return false;
}

function attack_startup(o,f){//time it takes to perform a basic attack
   var t=0;
   if(get_attack_start(o,f)!=-1){
      for(var i = get_attack_start(o,f); i < 400; i=game_objects[o].AI.frame(i).next){
	     t+=game_objects[o].AI.frame(i).wait;
		 if(game_objects[o].AI.frame(i).itr_count>0&&game_objects[o].AI.frame(i).itrs[0].kind==0){
		    return t;
	     }
	  }
   }
   return 31;
}

function difficult(i){//translate difficulty into values: 0,2,4,6 or 1,3,5,7 or ...
   return 2*difficulty+2+i;
}
function difficult2(i){//translate difficulty into values: 0,4,16,36 or 1,9,25,49 or ...
   return difficult(i)*difficult(i);
}

function dodge_time(i){//returns time it takes to dodge
//somewhat imprecise, more z speeds to add
   var z=game_objects[self.uid].AI.frame(self.frame.N).dvz;
   if(self.state()<2)z=game_objects[self.uid].data.bmp.walking_speedz;
   else if(self.state()==2)z=game_objects[self.uid].data.bmp.running_speedz;
   for(var t = 0; t < 31; ++t){
      if(self.ps.z+z*4*t>i[3]+i[2])return t;
      if(self.ps.z-z*4*t<i[3]-i[2])return t;
   }
   return 31;
}

function get_attack_frame(o,f){//get attack frame for object o in frame f
   if(get_attack_start(o,f)!=-1){
      for(var i = get_attack_start(o,f); i < 400; i=game_objects[o].AI.frame(i).next){
		 if(game_objects[o].AI.frame(i).itr_count>0&&game_objects[o].AI.frame(i).itrs[0].kind==0){
		    return i;
	     }
	  }
   }
   return 0;
}

function get_attack_start(o,f){//get attack start for object o in frame f
//include random frame 65, super punch 70, weapon attacks
   if(game_objects[o].AI.weapon_type()==0){
      if(game_objects[o].AI.frame(f).state<=1)return 60;
      else if(game_objects[o].AI.frame(f).state==2)return 85;
      else if(game_objects[o].AI.frame(f).state==4)return 80;
      else if(game_objects[o].AI.frame(f).state==5)return 90;
   }
   return -1;
}

function square_distance(i,o){//returns squared distance between object i and o
   return(
   ((game_objects[i].ps.x-game_objects[o].ps.x)*(game_objects[i].ps.x-game_objects[o].ps.x))
   +((game_objects[i].ps.y-game_objects[o].ps.y)*(game_objects[i].ps.y-game_objects[o].ps.y))/3
   +3*((game_objects[i].ps.z-game_objects[o].ps.z)*(game_objects[i].ps.z-game_objects[o].ps.z)));
}

function time_till_impact(o,fo,x,fx){//returns time till impact of o in frame fo on x in frame fi
   if( x===undefined && fx===undefined)
   {
       x=fo;
       fo=game_objects[o].AI.frame1();
       fx=game_objects[x].AI.frame1();
   }
//remove when replaced with get_attack_info
   if(fo==-1)fo=game_objects[o].AI.frame1();
   if(fx==-1)fx=game_objects[x].AI.frame1();
   if(is_object(x)&&o!=x&&is_object(o)){
      if(game_objects[x].AI.frame(fx).bdy_count>0&&game_objects[x].itr.vrest[o]==0&&game_objects[x].AI.blink()<=1&&game_objects[o].AI.frame(fo).itr_count>0&&game_objects[o].itr.arest==0){
         for(var i = 0; i < game_objects[o].AI.frame(fo).itr_count; ++i){
	        if((game_objects[o].team!=game_objects[x].team||game_objects[o].AI.frame(fo).state()==18||game_objects[o].AI.frame(fo).state()==12)&&
			   (self.state()!=12||game_objects[o].AI.frame(fo).itrs[i].fall>=60)&&
			   game_objects[o].AI.frame(fo).itrs[i].kind!=1&&
		       game_objects[o].AI.frame(fo).itrs[i].kind!=2&&
			   (game_objects[o].throwinjury||
			   game_objects[o].AI.frame(fo).itrs[i].kind!=4)&&
			   ((game_objects[o].AI.weapon_holder() && game_objects[game_objects[o].AI.weapon_holder()].AI.frame(game_objects[game_objects[o].AI.weapon_holder()].AI.frame1()).wpoint.attacking)||
			   game_objects[o].AI.frame(fo).itrs[i].kind!=5)&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=6&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=7&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=8&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=14&&
		   	   game_objects[o].AI.frame(fo).itrs[i].effect!=4){
               for(var j = 0; j < game_objects[x].AI.frame(fx).bdy_count; ++j){
                  for(var t = 0; t < 31; ++t){
	                 if(intersect(bdy(x,j,fx,t),itr(o,i,fo,t)))return t;
   			      }
   			   }
            }
         }
      }
   }
   return 31;
}

function bdy(o,i,f,t){//get bdy i of object o in frame f at time t from now
   var r=[0,0,0,0,0,0];
   if(game_objects[o].AI.frame(f).bdy_count>i){
      r[game_objects[o].AI.facing()?1:0]= game_objects[o].ps.x +(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).bdys[i].x -(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).centerx;
      r[game_objects[o].AI.facing()?0:1]= game_objects[o].ps.x +(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).bdys[i].x +(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).bdys[i].w -(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).centerx;
      r[0]+=game_objects[o].ps.vx*t;
      r[1]+=game_objects[o].ps.vx*t;
      r[2]=game_objects[o].ps.y+game_objects[o].AI.frame(f).bdys[i].y-game_objects[o].AI.frame(f).centery;
      r[3]=game_objects[o].ps.y+game_objects[o].AI.frame(f).bdys[i].y+game_objects[o].AI.frame(f).bdys[i].h-game_objects[o].AI.frame(f).centery;
      r[2]+=game_objects[o].ps.vy*t+(has_gravity(o)?1.7:0)*t;
      r[3]+=game_objects[o].ps.vy*t+(has_gravity(o)?1.7:0)*t;
      r[4]=game_objects[o].ps.z +game_objects[o].ps.vz*t;
      r[5]=game_objects[o].ps.z +game_objects[o].ps.vz*t;
   }
   return r;
}

function get_attack_info(o,fo,x,fx){
   if( x===undefined && fx===undefined)
   {
      x=fo;
      fo=game_objects[o].AI.frame1();
      fx=game_objects[x].AI.frame1();
   }
   var a=[31,0,-1,14];
   if(fo==-1)fo=game_objects[o].AI.frame1();
   if(fx==-1)fx=game_objects[x].AI.frame1();
   if(is_object(x)&&o!=x&&is_object(o)){
      if(game_objects[x].AI.frame(fx).bdy_count>0&&game_objects[x].itr.vrest[o]==0&&game_objects[x].AI.blink()<=1&&game_objects[o].AI.frame(fo).itr_count>0&&game_objects[o].itr.arest==0){
         for(var i = 0; i < game_objects[o].AI.frame(fo).itr_count; ++i){
	        if((game_objects[o].team!=game_objects[x].team||game_objects[o].AI.frame(fo).state()==18||game_objects[o].AI.frame(fo).state()==12)&&
			   (self.state()!=12||game_objects[o].AI.frame(fo).itrs[i].fall>=60)&&
			   game_objects[o].AI.frame(fo).itrs[i].kind!=1&&
		       game_objects[o].AI.frame(fo).itrs[i].kind!=2&&
			   (game_objects[o].throwinjury||
			   game_objects[o].AI.frame(fo).itrs[i].kind!=4)&&
			   ((game_objects[o].AI.weapon_holder() && game_objects[game_objects[o].AI.weapon_holder()].AI.frame(game_objects[game_objects[o].AI.weapon_holder()].AI.frame1()).wpoint.attacking)||
			   game_objects[o].AI.frame(fo).itrs[i].kind!=5)&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=6&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=7&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=8&&
		   	   game_objects[o].AI.frame(fo).itrs[i].kind!=14&&
		   	   game_objects[o].AI.frame(fo).itrs[i].effect!=4){
               for(var j = 0; j < game_objects[x].AI.frame(fx).bdy_count; ++j){
                  for(var t = 0; t < 31; ++t){
	                 if(intersect(bdy(x,j,fx,t),itr(o,i,fo,t))){
					    a[0]=t;
						a[1]=game_objects[o].AI.frame(fo).itrs[i].injury;
						a[2]=game_objects[o].ps.z+game_objects[o].ps.vz*t;
						if(game_objects[o].AI.frame(fo).itrs[i].zwidth)a[3]=game_objects[o].AI.frame(fo).itrs[i].zwidth-1;
						return a;
					 }
   			      }
   			   }
            }
         }
      }
   }
   return a;
}

function get_objects(){//find all essential object numbers and parameters
//add more required parameters
   var o=[
   [-1,31,-1,-1,14],
   [-1,2147483647],
   [-1,2147483647],
   [-1,2147483647],
   ];
   //0,0: object first to hit
   var a=[31,-1,-1,14];
   //0,1: time till it hits
   //0,2: injury
   //0,3: z at impact
   //0,4: zwidth-1
   //1,0: closest opponent
   //1,1: closest opponent distance
   //2,0: second closest opponent
   //2,1: second closest opponent distance
   //3,0: weakest opponent
   //3,1: weakest opponent distance
   //4: closest boss
   //5: closest item
   //6: closest milk
   //7: closest beer
   //8: command frame
   for (var i in game_objects){
      if(is_object(i)){
	     a=get_attack_info(i,self.uid);
         if(a[0]<o[0][1]){o[0][0]=i;o[0][1]=a[0];o[0][2]=a[1];o[0][3]=a[2];o[0][4]=a[3];}
         else if(a[0]==o[0][1]&&a[1]<o[0][2]){o[0][0]=i;o[0][1]=a[0];o[0][2]=a[1];o[0][4]=a[3];}
		 if(is_opponent(i)&&square_distance(self.uid,i)<o[1][1]){o[1][1]=square_distance(self.uid,i);o[2][0]=o[1][0];o[1][0]=i;}
		 else if(is_opponent(i)&&square_distance(self.uid,i)<o[2][1]){o[2][1]=square_distance(self.uid,i);o[2][0]=i;}
		 if(is_opponent(i)&&game_objects[i].health.hp<o[3][1]){o[3][1]=game_objects[i].health.hp;o[3][0]=i;}
		 else if(is_opponent(i)&&game_objects[i].health.hp==o[3][1]){o[3][0]=-1;}
      }
   }
   return o;
}

function itr(o,i,f,t){//get itr i of object o in frame f at time t from now
   var r=[0,0,0,0,0,0];
   if(game_objects[o].AI.frame(f).itr_count>i){
      r[game_objects[o].AI.facing()?1:0]= game_objects[o].ps.x +(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).itrs[i].x -(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).centerx;
      r[game_objects[o].AI.facing()?0:1]= game_objects[o].ps.x +(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).itrs[i].x +(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).itrs[i].w -(game_objects[o].AI.facing()?-1:1)*game_objects[o].AI.frame(f).centerx;
      r[0]+=game_objects[o].ps.vx*t;
      r[1]+=game_objects[o].ps.vx*t;
      r[2]=game_objects[o].ps.y+game_objects[o].AI.frame(f).itrs[i].y-game_objects[o].AI.frame(f).centery;
      r[3]=game_objects[o].ps.y+game_objects[o].AI.frame(f).itrs[i].y+game_objects[o].AI.frame(f).itrs[i].h-game_objects[o].AI.frame(f).centery;
      r[2]+=game_objects[o].ps.vy*t+(has_gravity(o)?1.7:0)*t;
      r[3]+=game_objects[o].ps.vy*t+(has_gravity(o)?1.7:0)*t;
      var z=game_objects[o].AI.frame(f).itrs[i].zwidth;
      if(z==0)z=14;
      r[4]=game_objects[o].ps.z-z +game_objects[o].ps.vz*t;
      r[5]=game_objects[o].ps.z+z +game_objects[o].ps.vz*t;
   }
   return r;
}
		this.TU = id;
	}
	AIscript.type = AIscript.prototype.type = 'AIscript';
	return AIscript;
});
