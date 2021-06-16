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
            var dir=1; // Direction     0:left  1:right
            var DIR = ['left','right','up','down']; //number to direction mapping
            var target; //target opponent to chase after
            var action = ['attack', 'escape', 'defend', 'skill'];
            var status = ['standing', 'lying', 'jumping', 'dashing', 'walking', 'attacking', 'hurting']; // self.state
            var skill = false;
            var running = true;
            const CHASE_DIST = 180;

            this.TU = function()
            {	//this is the main AI routine that will be called once every 2 or 3 TU
                // console.log(self.state())
                var hp_percent = self.health.hp/self.health.hp_full;
                var mp_percent = self.health.mp/self.health.mp_full;
                // update_status();
                if( cc%100===0) //load a new target once in a while
                    load_target();
                var dx = target.ps.x-self.ps.x; // distance between me n target (x)
                var dz = target.ps.z-self.ps.z; // distance between me n target (z)
                const dist_target = distance(target);
                if (cc%5==0){
                    if (dist_target.shortest > CHASE_DIST) {
                        run_to_target(DIR[dist_target.horizontal], DIR[dist_target.diagonal]);
                    } else if (dist_target.shortest > CHASE_DIST/2 && dist_target.shortest <= CHASE_DIST) {
                        if (abs(dist_target.dz)>20) {
                            controller.keypress(DIR[dist_target.horizontal==1?0:1]);
                            controller.keypress(DIR[dist_target.horizontal]);
                            // adjust_diagonal(DIR[dist_target.diagonal]);
                        } else {
                            console.log('Inside');
                            if (self.state() == 2) {
                                controller.keypress('att');
                            } else {
                                controller.keypress(DIR[dist_target.horizontal==1?0:1]);
                            }
                        }
                    } else {
                        if (abs(dist_target.dz) < 10) {
                            skill_jumping_sword(DIR[dist_target.horizontal]);
                        } else {
                            console.log('Diagonal');
                            controller.keypress(DIR[dist_target.diagonal], 1);
                        }
                    }
                } else if( cc%10===0) {
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
                var game_objects = match.scene.live; //list of living object in scene
                for (var i in game_objects)
                {
                    var obj = game_objects[i];
                    if( obj.type==='character' &&
                        obj.team!==self.team)
                    {
                        var dx = obj.ps.x-self.ps.x;
                        var dz = obj.ps.z-self.ps.z;
                        targets.push({
                            dist: distance(obj).shortest,
                            obj: obj
                        });
                    }
                }
                targets.sort(function(a,b){
                    return a.dist-b.dist; //sort according to distance
                });
                if( rand(2)===0)
                    target = targets[rand(targets.length)].obj; //select a random opponent as target
                else
                    target = targets[0].obj; //select the closest opponent
            }
            function distance(obj) {
                var dx = obj.ps.x-self.ps.x;
                var dz = obj.ps.z-self.ps.z;
                var dy = obj.ps.y-self.ps.y;
                var shortest = Math.sqrt(dx*dx+dz*dz);
                return {
                    horizontal: dx<0?0:1,
                    diagonal: dz<0?2:3,
                    dx,
                    dy,
                    dz,
                    shortest,
                }
            }
            // ++++++++++++++++++Status Check++++++++++++++++++
            function update_status() {
                console.log(self.state());
            }

            // ++++++++++++++++++++++skill set++++++++++++++++++++
            // ----------------Basic Skill---------------------
            // V or ^ : Stop Action
            // >> or <<: Dash
            // TODO: to solve diagonal movement
            function adjust_diagonal(dir_diagonal) {
                controller.keypress(dir_diagonal,1); //press 1st time
            }
            function run_to_target(dir_horizontal, dir_diagonal) {
                controller.key(dir_horizontal,0);
                controller.keypress(dir_horizontal); //press 1st time
                controller.keypress(dir_horizontal); //press 2nd time, run!
            }
            // -----------------Shuriken/Ninja Star---------------
            // AAA: weapon_continuous
            // D>A: weapon_5
            
            function star_continuous(dir) { // OK
                controller.keyseq([dir,'att', 'att', 'att']);
                // controller.keypress(DIR[dir]);
                // controller.keypress('att');
                // controller.keypress('att');
                // controller.keypress('att');
            }
            function star_5(dir) { // OK
                controller.keyseq(['def', dir, 'att']);
                // controller.keypress('def');
                // controller.keypress(DIR[dir]);
                // controller.keypress('att');
            }
            // -----------------Sword Skills-----------------
            // Remark::Cannot perform in 3 TU
            // JA: Standing Jumping Sword
            // >>JA: Dashing Jumping Sword
            // D>J: Skill Jumping Sword
            
            function standing_jumping_sword(dir, status) {
                if (skill && status != 'jumping') {
                    controller.keypress('jump');
                } else if (skill && status == 'jumping'){
                    controller.keyseq([dir, 'att']);
                } else {
                    skill = false;
                }
                // controller.keypress('jump');
                // controller.keypress(DIR[dir]);
                // controller.keypress('att');
            }
            function dashing_jumping_sword(dir) { //given in dashing state
                controller.keyseq(['jump', 'att']);
                // controller.keypress('jump');
                // controller.keypress('att');
            }
            function skill_jumping_sword(dir) { // OK
                controller.keyseq(['def', dir, 'jump']);
                // controller.keypress('def');
                // controller.keypress(DIR[dir]);
                // controller.keypress('jump');
            }
            // -----------------Special Skill------------------
            // DVJ: +man
            // D^J: Disappear
            
            function add_man() {
                controller.keyseq(['def', DIR[3], 'jump']);
                // controller.keypress('def');
                // controller.keypress(DIR[3]);
                // controller.keypress('jump');
            }
            function disappear() {
                controller.keyseq(['def', DIR[2], 'jump']);
                // controller.keypress('def');
                // controller.keypress(DIR[2]);
                // controller.keypress('jump');
            }
            // -----------------Catch Skill----------------------
            // AAA -> > -> >A  : catch and throw
            // AAA -> > -> DJA : catch and transform
            function catch_throw(dir) {
                controller.keyseq([DIR[dir], DIR[dir], 'att']);
                // controller.keypress(DIR[dir]);
            }
            function catch_transform() {
                controller.keyseq([DIR[dir], 'def', 'jump', 'att']);
            }
        }
        AIscript.type = AIscript.prototype.type = 'AIscript'; //must define a type
        return AIscript;
    });
    