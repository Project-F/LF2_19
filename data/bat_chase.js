define({
  bmp: {
    file: [
      {
        "file(0-23)": "sprite/bat_chase.png", w: 81, h: 82, row: 4, col: 2
      }
    ],
    weapon_hit_sound: "1/088",
    weapon_drop_sound: "1/088",
    weapon_broken_sound: "1/088"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 39, hit_a: 7, hit_d: 0, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 43, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 44, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  3: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 45, hit_a: 7, hit_d: 3, hit_j: 0, hit_Fa: 12,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 4, fall: 20, vrest: 15, bdefend: 16, injury: 30
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 3, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    sound: "1/087",
    pic: 3, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 8
  },
  52: { name: "start",
    pic: 3, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});