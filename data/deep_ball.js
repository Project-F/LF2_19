define({
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/deep_ball.png", w: 81, h: 82, row: 4, col: 2
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 15, dvy: 0, centerx: 40, centery: 41, hit_a: 50, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 15, dvy: 0, centerx: 35, centery: 41, hit_a: 50, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 3, dvx: 15, dvy: 0, centerx: 36, centery: 41, hit_a: 50, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 4, dvx: 15, dvy: 0, centerx: 37, centery: 41, hit_a: 50, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  4: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 5, dvx: 15, dvy: 0, centerx: 40, centery: 41, hit_a: 50, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  5: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 15, dvy: 0, centerx: 40, centery: 41, hit_a: 50, hit_d: 40, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 55, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 38, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 33, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 39, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 31, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 38, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappearing",
    pic: 5, state: 3004, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 6, state: 3004, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 7, state: 3004, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});
