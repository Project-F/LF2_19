// CHALLANGAR 1.0
// Designed for Dennis
// Usually beats standard Difficult AI
// Made by Zort




void targetward(bool hold) {
   int y = (hold) ? 1 : 0;
   if (target.x > self.x) right(1,y); else left(1,y);
}
void targetward() {
   targetward(true);
}

void targetwardz(bool hold) {
   int y = (hold) ? 1 : 0;
   if (target.z > self.z) down(1,y); else up(1,y);
}
void targetwardz() {
   targetwardz(true);
}

int max(int a, int b) { if (a>b) return a; else return b; }

void get_to(int min_x, int max_x, int min_z, int max_z) {
   int dx = max(self.x - max_x, min_x - self.x);
   int dz = max(self.z - max_z, min_z - self.z);
   //int angle = atan2(float(dz), float(dx));
   int run = (dx > run_stop_distance || abs(self.x - target.x) < 100) ? 0 : 1;
   
   if (self.x > max_x) left(1,run);
   else if (self.x < min_x) right(1,run);
   
   if (self.z > max_z) up(1,run);
   else if (self.z < min_z) down(1,run);
}   

bool dash_from_left() {
   // if there's no room from the left, go from the right
   if (target.x < min_dash_dx) return false;
   // and conversely...
   if (bg_width - target.x < min_dash_dx) return true;
   // otherwise, just go from whatever side's closer
   return (self.x < target.x);
}
bool dash_from_top() {
   if (target.z - bg_zwidth1 < min_dash_dz) return false;
   if (bg_zwidth2 - target.z < min_dash_dz) return true;
   return (self.z < target.z);
}

bool ready_to_dash() {
   // four acceptable regions to dash from
   int dx = abs(target.x - self.x);
   int dz = abs(target.z - self.z);
   return (self.state == 0 || self.state == 1 || self.state == 2 ||
           self.frame == 215) &&
          (target.state != 14 && target.blink < 2) && 
          ((min_dash_dx <= dx && dx <= max_dash_dx) &&
           (min_dash_dz <= dz && dz <= max_dash_dz) ||
           (facing_target() && self.state == 2));
}

bool facing_target() {
   return (self.facing && target.x < self.x) ||
          (!self.facing && target.x > self.x);
}

int about(int x) { return x + rand(x/10) - x/20; }

int min_dash_dx;
int max_dash_dx;
int min_dash_dz;
int max_dash_dz;
int max_dash_blink;
int run_stop_distance;
float diagonal_run_angle; // not used due to lack of atan2

void id() {
   min_dash_dx = about(70);
   max_dash_dx = about(230);
   min_dash_dz = about(5);
   max_dash_dz = about(40);
   max_dash_blink = 5;
   run_stop_distance = about(30);
   diagonal_run_angle = 20.0; // not used due to lack of atan2

   A(0,0); //reset keys
   D(0,0);
   J(0,0);
   up(0,0);
   down(0,0);
   left(0,0);
   right(0,0);
   print(min_dash_dx);
   for (int i = 0; i < 400; i++) { //target
     if (loadTarget(i) == 0 && 
         target.num != self.num && 
         target.hp > 0 &&
         target.id < 100 && 
         target.team != self.team) {
         break;
     }
   }
   
   if (ready_to_dash()) {
      print("CHALLANGAR DEBUG: dashin'");
      if (self.state == 2 && facing_target()) {
         J(); 
         A();
         targetwardz();
      } else if (self.frame == 215) {
         print(" from flip");
         J();
         A();
         targetwardz();
         targetward();
      } else if (self.state == 2) {
         targetward(false);
         targetwardz(false);
      } else targetward(false);
   } else if (self.state == 12) {
      print("CHALLANGAR DEBUG: flippin'");
      J();
   } else {
      print("CHALLANGAR DEBUG: getting into position");
      int min_x, max_x, min_z, max_z;
      if (dash_from_left()) {
         print(" (left, ");
         min_x = target.x - max_dash_dx;
         max_x = target.x - min_dash_dx;
      } else {
         print(" (right, ");
         min_x = target.x + min_dash_dx;
         max_x = target.x + max_dash_dx;
      }
      if (dash_from_top()) {
         print("top)");
         min_z = target.z - max_dash_dz;
         max_z = target.z - min_dash_dz;
      } else {
         print("bottom)");
         min_z = target.z + min_dash_dz;
         max_z = target.z + max_dash_dz;
      }
      get_to(min_x, max_x, min_z, max_z);
   }
   print("\n");
}