define({
  bmp: {
    file: [
      {
        "file(0-12)": "sprite/john_biscuit.png", w: 90, h: 20, row: 4, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 7, hit_d: 4, hit_j: 0, hit_Fa: 1,
    sound: "1/076",
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  1: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 7, hit_d: 4, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  2: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 7, hit_d: 4, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  3: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 7, hit_d: 4, hit_j: 0, hit_Fa: 1,
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  4: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 10,
    sound: "1/076",
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  5: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 10,
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  6: { name: "flying",
    pic: 2, state: 3006, wait: 1, next: 7, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 10,
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  7: { name: "flying",
    pic: 3, state: 3006, wait: 1, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 10,
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  },
  10: { name: "hiting",
    pic: 8, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 9, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 10, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 11, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 8, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 9, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 10, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 11, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 0, state: 3006, wait: 3, next: 1, dvx: -14, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 9, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 10, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 11, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "borning",
    pic: 4, state: 3000, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "borning",
    pic: 5, state: 3003, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "borning",
    pic: 6, state: 3003, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "borning",
    pic: 7, state: 3003, wait: 1, next: 44, dvx: 10, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 999, dvx: 18, dvy: 3, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 1, w: 74, h: 19, dvx: 14, fall: 70, vrest: 25, bdefend: 20, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 1, w: 74, h: 19
    }
  }
  }
});
