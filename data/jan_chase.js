define({
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/jan_chase.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-11)": "sprite/jan_chaseb.png", w: 25, h: 25, row: 4, col: 1
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    bdy: {
      kind: 0, x: 28, y: 30, w: 27, h: 26
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 60, injury: 40
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 60, injury: 40
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 40, hit_a: 7, hit_d: 3, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 60, injury: 40
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 56, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 58, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 8, state: 3005, wait: 2, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "tail",
    pic: 9, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "tail",
    pic: 10, state: 3005, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "tail",
    pic: 11, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 13, centery: 13, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 6
  },
  52: { name: "start",
    pic: 100, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 4, state: 3001, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    sound: "1/020",
    pic: 5, state: 3001, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "hiting_ground",
    pic: 6, state: 3001, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "hiting_ground",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 56, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});