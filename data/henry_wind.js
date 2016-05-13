define({
  bmp: {
    file: [
      {
        "file(0-23)": "sprite/henry_wind.png", w: 81, h: 82, row: 4, col: 6
      },
      {
        "file(24-29)": "sprite/henry_arrow2.png", w: 48, h: 48, row: 6, col: 1
      },
      {
        "file(30-35)": "sprite/rudolf_smoke.png", w: 79, h: 79, row: 6, col: 2
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3005, wait: 4, next: 1, dvx: 55, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 25, fall: 70, vrest: 20, bdefend: 60, injury: 80
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3005, wait: 3, next: 2, dvx: 55, dvy: 0, centerx: 35, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 4, w: 80, h: 75, dvx: 18, fall: 60, vrest: 20, bdefend: 36, injury: 55
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3005, wait: 2, next: 3, dvx: 55, dvy: 0, centerx: 36, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 1, w: 78, h: 78, dvx: 13, fall: 40, vrest: 20, bdefend: 16, injury: 20
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  3: { name: "flying",
    pic: 3, state: 3005, wait: 2, next: 1000, dvx: 55, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 3, w: 79, h: 75, dvx: 9, fall: 20, vrest: 20, bdefend: 16, injury: 5
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 0, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 39, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 1, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 47, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 2, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 57, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 3, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 67, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 2, next: 21, dvx: 0, dvy: 0, centerx: 51, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 59, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 54, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 54, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 46, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 2, next: 33, dvx: 0, dvy: 0, centerx: 41, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 37, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappearing",
    pic: 0, state: 3005, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 1, state: 3005, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 2, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "louis_start",
    pic: 1, state: 3001, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "louis_start",
    pic: 1, state: 3001, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "louis_start",
    pic: 1, state: 3001, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 53, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 83, y: 44, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 1
    }
  },
  53: { name: "louis_flying",
    pic: 0, state: 3005, wait: 2, next: 1, dvx: 55, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 25, fall: 70, vrest: 20, bdefend: 60, injury: 60
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  60: { name: "rodulf_smoke",
    pic: 30, state: 3001, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "rodulf_smoke",
    pic: 31, state: 3001, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "rodulf_smoke",
    pic: 32, state: 3001, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "rodulf_smoke",
    pic: 33, state: 3001, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "rodulf_smoke",
    pic: 34, state: 3001, wait: 1, next: 65, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  65: { name: "rodulf_smoke",
    pic: 35, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "rodulf_smoke",
    pic: 36, state: 3001, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "rodulf_smoke",
    pic: 37, state: 3001, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "rodulf_smoke",
    pic: 38, state: 3001, wait: 2, next: 73, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "rodulf_smoke",
    pic: 39, state: 3001, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "rodulf_smoke",
    pic: 40, state: 3001, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "rodulf_smoke",
    pic: 41, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "monk_start",
    pic: 1, state: 3001, wait: 2, next: 81, dvx: 0, dvy: 0, centerx: 28, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "monk_start",
    pic: 1, state: 3001, wait: 1, next: 82, dvx: 0, dvy: 0, centerx: 53, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 60, y: 44, action: 20, dvx: -3, dvy: 0, oid: 204, facing: 1
    }
  },
  82: { name: "monk_flying",
    pic: 0, state: 3005, wait: 2, next: 83, dvx: 40, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 5, w: 78, h: 73, dvx: 19, fall: 70, vrest: 20, bdefend: 60, injury: 50
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  83: { name: "monk_flying",
    pic: 0, state: 3005, wait: 3, next: 1000, dvx: 40, dvy: 0, centerx: 36, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 1, w: 78, h: 78, dvx: 12, fall: 60, vrest: 20, bdefend: 50, injury: 35
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  }
  }
});