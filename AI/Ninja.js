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
            var dir_up=2; // Direction      2:up    3:down
            var DIR = ['left','right','up','down']; //number to direction mapping
            var target; //target opponent to chase after
            var ACT = ['nothing', 'attack', 'chase', 'defend', 'skill', 'jump'];
            var action_list = [];
            var is_throw_weapon = false;
            var temp_cc = -1;
            const CHASE_DIST = 180;

            this.TU = function()
            {	//this is the main AI routine that will be called once every 2 or 3 TU
                // console.log(self.state())
                // update_status();
                if (cc%100===0) { //load a new target once in a while
                    load_target();
                    // console.log('Loading New target: ', target); // Status report
                }
                if (target == null) {
                    reset_all_key();
                    return;
                }
                const dist_target = distance(target); // information between me and target (dx, dy, dz, horizontal / diagonal index)
                const mp_percent = 100 * self.health.mp/self.health.mp_full; // personal info analysis
                if (cc%101 == 0) {
                    if (mp_percent > 70) {
                        if (rand(10) % 2 == 0) {
                            dir = reset_key(dir, dist_target.horizontal);
                            dir_up = reset_key(dir_up, dist_target.diagonal);
                            disappear();
                        } else if ((rand(10) % 2 == 1)) {
                            
                            dir = reset_key(dir, dist_target.horizontal);
                            dir_up = reset_key(dir_up, dist_target.diagonal);
                            add_man();
                        }
                    }
                }
                if (target.state() == 14 && dist_target.shortest < CHASE_DIST * 1.5) { // enermy lying -> do nothing
                    dir = reset_key(dir, dist_target.horizontal==1?0:1);
                    dir_up = reset_key(dir_up, dist_target.diagonal);
                    run_to_target(DIR[dir], DIR[dir_up]);
                    dir_up = reset_key(dir_up, dist_target.diagonal);
                    cc ++;
                    return;
                }
                if (self.hold.obj) { // holding weapon -> throw it
                    throw_weapon(dist_target.horizontal, cc);
                    cc ++;
                    return;
                }
                // reset
                if (cc%3==0){
                    dir = reset_key(dir, dist_target.horizontal);
                    dir_up = reset_key(dir_up, dist_target.diagonal);
                    // controller.key('left', 1) // go 'left'/'up' in normal speed
                    // controller.key('up', 1) // go 'left'/'up' in normal speed
                    // controller.keypress('up') // go 'left' in slow speed || siu yi ma bei 
                    // controller.keypress('left', 0, 0) // No Move
                    // controller.keypress('left', 0, 1) // No Move
                    // controller.keypress('left', 1, 1) // go 'left' in normal speed

                    // Far: chase
                    // Moderate: 
                        // on same horizontal plane: Range attack (Star)
                        // dz > some value (no attackable): adjust distance
                    // Close: Attack
                        // Mostly Sword attack
                    if (dist_target.shortest > CHASE_DIST) {
                        // :::Target is so far away
                        // ---Run to Target!!!! CHASE
                        // console.log('Chase: ', DIR[dir], DIR[dir_up]);  // Status report
                        if (check_being_attack() != 999) {
                            dir_up = reset_key(dir_up, dir_up);
                            run_to_target(DIR[dir], DIR[dir_up]);
                            if (check_being_attack == 5) {
                                controller.keypress('jump');
                            }
                            update_action_list(ACT[2]);
                        } else {
                            run_to_target(DIR[dir], DIR[dir_up]);
                            update_action_list(ACT[2]);
                        }
                    } else if (dist_target.shortest > CHASE_DIST/2 && dist_target.shortest <= CHASE_DIST) {
                        // :::Target is in moderate range 
                        if (abs(dist_target.dz)>20) {
                            // ^ V move to get to enermy
                            // console.log('Moderate: ', dir_up); // Status report
                            walk(dir, dir_up);
                            update_action_list(ACT[2]);
                        } else {
                            // < > move to get to enermy
                            // console.log('Moderate', dir); // Status report
                            controller.key(DIR[dir],1);
                            controller.key(DIR[dir],0);
                            // perform running sword attact (run -> att)
                            if (self.state() == 2) {
                                controller.keypress('att');
                                update_action_list(ACT[1]);
                            } else {
                                // if i am in normal situation
                                if (self.state() in [0, 1, 2, 5, 6]) { // stand, walk, run, dash, row
                                    if (mp_percent > 70) {
                                        // console.log('5Star')
                                        star_5(dir);
                                        update_action_list(ACT[4]);
                                        
                                    } else if (mp_percent > 40) {
                                        if (rand(2)==0) {
                                            controller.keypress('att');
                                            update_action_list(ACT[1]);
                                        } else {
                                            controller.keypress('jump');
                                            update_action_list(ACT[5]);
                                        }
                                    } else {
                                        skill_jumping_sword(DIR[dist_target.horizontal]);
                                        update_action_list(ACT[4]);
                                    }
                                } else {
                                    if (rand(2) == 0) {
                                        controller.keypress('def');
                                        update_action_list(ACT[3]);
                                        
                                    } else {
                                        skill_jumping_sword(DIR[dist_target.horizontal]);
                                        update_action_list(ACT[4]);
                                    }
                                }
                            }
                        }
                    } else {
                        // :::Target is near me
                        if (abs(dist_target.dz) < 10) {
                            // console.log('Close', dir);  // Status report
                            if (self.ps.dir != dir) {
                                controller.key(DIR[dir],0);
                                controller.key(DIR[dir],1);
                            }
                            controller.keypress('att');
                            update_action_list(ACT[1]);
                        } else {
                            // console.log('Close', dir_up); // Status report
                            controller.key(DIR[dir_up], 0);
                            dir_up = dist_target.diagonal
                            controller.key(DIR[dir_up], 1);
                            update_action_list(ACT[2]);
                            
                        }
                    }
                } else if( cc%10===0) {
                    // :::Do it in longer frequency
                    // console.log('random Act'); // Status report
                    var act = rand(4); //get a random number from [0,1,2,3]
                    controller.key(DIR[dir], 0);
                    switch (act)
                    {
                        case 0: break; //do nothing
                        case 1: controller.keypress('def'); update_action_list(ACT[3]); break;
                        case 2: controller.keypress('jump'); update_action_list(ACT[5]); break;
                        case 3: controller.keypress('att'); update_action_list(ACT[1]); break;
                    }
                }
                cc++;
                // console.log('Action: ', action_list)
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
                var all_dead = true;
                var game_objects = match.get_living_object(); //list of living object in scene
                for (var i in game_objects)
                {
                    var obj = game_objects[i];
                    if( obj.type==='character' &&
                        obj.team!==self.team)
                    {
                        if (obj.health.hp > 0) {
                            all_dead = false;
                            targets.push({
                                dist: distance(obj).shortest,
                                obj: obj
                            });
                        }
                    }
                }
                targets.sort(function(a,b){
                    return a.dist-b.dist; //sort according to distance
                });
                if (all_dead) {
                    target = null;
                } else if( rand(2)===0)
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
            function update_action_list(push) {
                if (push == 0) {
                    return;
                }
                if (action_list.length == 5) {
                    action_list.shift();
                    action_list.push(push);
                } else {
                    action_list.push(push);
                }
            }
            function reset_key(dir, x) {
                controller.key(DIR[dir], 0);
                return x
            }
            function reset_all_key() {
                controller.key(DIR[0], 0);
                controller.key(DIR[1], 0);
                controller.key(DIR[2], 0);
                controller.key(DIR[3], 0);
            }
            // ++++++++++++++++++++++skill set++++++++++++++++++++
            // ----------------Basic Skill---------------------
            // V or ^ : Stop Action
            // >> or <<: Dash
            // TODO: to solve diagonal movement
            function throw_weapon(dir, current_cc) {
                if (temp_cc == -1) {
                    temp_cc = current_cc;
                }
                if (current_cc>temp_cc+10){
                    is_throw_weapon = true;
                }
                if (is_throw_weapon) {
                    controller.keypress(DIR[dir], 1, 1);
                    controller.keypress('att');
                    is_throw_weapon = false;
                    temp_cc = -1;
                } else {
                    controller.keypress(DIR[dir]);
                    controller.keypress(DIR[dir]);
                    return;
                }
            }
            function run_to_target(dir_horizontal, dir_diagonal) {
                controller.key(dir_horizontal,1); //press 2nd time, run!
                controller.keypress(dir_horizontal); //press 1st time
                controller.keypress(dir_horizontal); //press 2nd time, run!
                controller.key(dir_diagonal,1); //press 2nd time, run!
            }
            function walk(dir, dir_up) {
                controller.key(DIR[dir],1);
                controller.key(DIR[dir_up],1);
            }
            function check_being_attack() {
                var living = match.scene.live;
                var enermy_attack = [];
                for (const obj in living) {
                    if (living[obj].type == 'specialattack' && living[obj].team != self.team){
                        enermy_attack.push(living[obj]);
                    }
                }
                if (enermy_attack.length > 0) {
                    const dist_attack = distance(enermy_attack[0]);
                    if (abs(dist_attack.shortest) < CHASE_DIST + 500) {
                        if (abs(dist_attack.dz) < 0 && abs(dist_attack.dz) > -50) { // i am below ball
                            if (dir_up == 2) { // i running up
                                dir_up = 3; // change to run down
                            }
                            return 0
                        } else if (abs(dist_attack.dz) > 0 && abs(dist_attack.dz) < 50) { // i am above ball
                            if (dir_up == 3) { // i running down
                                dir_up = 2; // change to run up
                            }
                            return 0
                        }
                    }
                }
                return 999;
            }
            function check_throw() {
                const length = action_list.length;
                if (length >= 3) {
                    if (action_list[length-1] == ACT[1]
                        && action_list[length-2] == ACT[1]
                        && action_list[length-3] == ACT[1])
                    {
                        return true;
                    }
                }
                return false;
            }
            // -----------------Shuriken/Ninja Star---------------
            // AAA: weapon_continuous
            // D>A: weapon_5
            function star_5(dir) { // OK
                controller.keypress('def');
                controller.keypress(DIR[dir]);
                controller.keypress('att');
            }
            // -----------------Sword Skills-----------------
            // D>J: Skill Jumping Sword
            function skill_jumping_sword(dir) { // OK
                controller.keyseq(['def', dir, 'jump']);
            }
            // -----------------Special Skill------------------
            // DVJ: +man
            // D^J: Disappear
            
            function add_man() {
                controller.keyseq(['def', DIR[3], 'jump']);
            }
            function disappear() {
                controller.keyseq(['def', DIR[2], 'jump']);
            }
            // -----------------Catch Skill----------------------
            // AAA -> > -> >A  : catch and throw
            // AAA -> > -> DJA : catch and transform
            function catch_target(dir) {
                controller.keyseq([DIR[dir], DIR[dir], 'att']);
            }
            function catch_transform() {
                controller.keyseq([DIR[dir], 'def', 'jump', 'att']);
            }
        }
        AIscript.type = AIscript.prototype.type = 'AIscript'; //must define a type
        return AIscript;
    });
    