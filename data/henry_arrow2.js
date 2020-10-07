define({
  bmp: {
    file: [
      {
        "file(0-23)": "sprite/henry_arrow2.png", w: 48, h: 47, row: 6, col: 2
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3006, wait: 1, next: 1, dvx: 22, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -1, y: 12, w: 51, h: 24, dvx: 20, fall: 70, vrest: 15, bdefend: 60, injury: 50, effect: 1
    },
    bdy: {
      kind: 0, x: -1, y: 12, w: 51, h: 24
    }
  },
  1: { name: "flying",
    pic: 1, state: 3006, wait: 1, next: 999, dvx: 22, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: [
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24, dvx: 20, fall: 70, vrest: 15, bdefend: 60, injury: 50, effect: 1
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24, dvx: 20, fall: 70, vrest: 15, bdefend: 60, injury: 50, effect: 1
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24, dvx: 20, fall: 70, vrest: 15, bdefend: 60, injury: 50, effect: 1
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24, dvx: 20, fall: 70, vrest: 15, bdefend: 60, injury: 50, effect: 1
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24, dvx: 20, fall: 70, vrest: 15, bdefend: 60, injury: 50, effect: 1
      }
    ],
    bdy: [
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24
      },
      {
        kind: 0, x: -1, y: 12, w: 51, h: 24
      }
    ]
  },
  10: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 8, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 9, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 8, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 9, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 62, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 8, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 9, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 19, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});