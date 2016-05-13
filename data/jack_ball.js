define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/jack_b.png", w: 81, h: 82, row: 4, col: 2
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 14, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 13, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 14, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 13, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 44, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 46, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 41, action: 0, dvx: 0, dvy: 0, oid: 216, facing: 1
    }
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});