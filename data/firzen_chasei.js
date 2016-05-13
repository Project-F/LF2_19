define({
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/firzen_chasei.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-19)": "sprite/firzen_up2.png", w: 35, h: 49, row: 4, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    bdy: {
      kind: 0, x: 29, y: 33, w: 23, h: 21
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 42, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 20, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 26, y: 27, w: 36, h: 30
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 29, y: 27, w: 36, h: 39, dvx: 3, fall: 70, vrest: 15, bdefend: 20, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 30, y: 28, w: 34, h: 36
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 0, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 7, hit_d: 4, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 20, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  4: { name: "flying",
    pic: 2, state: 3000, wait: 0, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 43, hit_a: 7, hit_d: 3, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 29, y: 27, w: 36, h: 39, dvx: 3, fall: 70, vrest: 15, bdefend: 20, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 30, y: 28, w: 34, h: 36
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 10, state: 3005, wait: 0, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "tail",
    pic: 11, state: 3005, wait: 0, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "tail",
    pic: 12, state: 3005, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "tail",
    pic: 13, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "tail",
    pic: 12, state: 3005, wait: 1, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 18, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "tail",
    pic: 13, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "hiting_ground",
    pic: 4, state: 3001, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    pic: 5, state: 3001, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  62: { name: "hiting_ground",
    pic: 6, state: 3001, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 73, action: 70, dvx: 0, dvy: 0, oid: 212, facing: 0
    }
  },
  63: { name: "hiting_ground",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});