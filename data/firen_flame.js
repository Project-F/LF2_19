define({
  bmp: {
    file: [
      {
        "file(0-17)": "sprite/firen_flame.png", w: 59, h: 63, row: 6, col: 3
      },
      {
        "file(18-33)": "sprite/firen_grd.png", w: 35, h: 49, row: 4, col: 4
      },
      {
        "file(34-48)": "sprite/firen_exp.png", w: 159, h: 159, row: 5, col: 3
      }
    ],
    weapon_hit_sound: "1/068",
    weapon_drop_sound: "1/068",
    weapon_broken_sound: "1/068"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 3, dvy: 0, centerx: 6, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "flying",
    pic: 1, state: 18, wait: 1, next: 2, dvx: 3, dvy: 0, centerx: 1, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  2: { name: "flying",
    pic: 2, state: 18, wait: 1, next: 3, dvx: 2, dvy: 0, centerx: 7, centery: 49, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 27, w: 34, h: 25, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  3: { name: "flying",
    pic: 3, state: 18, wait: 1, next: 4, dvx: 2, dvy: 0, centerx: 9, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 9, y: 32, w: 37, h: 23, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  4: { name: "flying",
    pic: 4, state: 18, wait: 1, next: 5, dvx: 2, dvy: 0, centerx: 4, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 4, y: 28, w: 40, h: 29, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  5: { name: "flying",
    pic: 5, state: 18, wait: 1, next: 6, dvx: 3, dvy: 0, centerx: 6, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 19, w: 44, h: 38, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  6: { name: "flying",
    pic: 6, state: 18, wait: 1, next: 7, dvx: 4, dvy: 0, centerx: 6, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 44, h: 42, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  7: { name: "flying",
    pic: 7, state: 18, wait: 1, next: 8, dvx: 4, dvy: 0, centerx: 12, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 10, y: 10, w: 43, h: 39, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  8: { name: "flying",
    pic: 8, state: 18, wait: 1, next: 9, dvx: 4, dvy: 0, centerx: 9, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 5, w: 46, h: 46, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  9: { name: "flying",
    pic: 9, state: 18, wait: 1, next: 100, dvx: 3, dvy: 0, centerx: 10, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 8, w: 44, h: 49, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  10: { name: "hiting",
    pic: 15, state: 18, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 15, state: 18, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 15, state: 18, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 44, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "ground_fire",
    pic: 18, state: 3003, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "ground_fire",
    pic: 19, state: 3003, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -1, y: 47, action: 54, dvx: 0, dvy: 0, oid: 211, facing: 0
    }
  },
  52: { name: "ground_fire",
    pic: 20, state: 3003, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 15, w: 36, h: 32, dvx: -1, dvy: -6, fall: 70, vrest: 20, bdefend: 3, injury: 20, effect: 20
    }
  },
  53: { name: "ground_fire",
    pic: 21, state: 3003, wait: 1, next: 54, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "ground_fire",
    pic: 22, state: 3003, wait: 1, next: 55, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "ground_fire",
    pic: 23, state: 3003, wait: 1, next: 56, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "ground_fire",
    pic: 24, state: 3003, wait: 1, next: 57, dvx: 0, dvy: 0, centerx: 16, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "ground_fire",
    pic: 25, state: 3003, wait: 1, next: 58, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 60, hit_d: 70, hit_j: 0
  },
  58: { name: "ground_fire",
    pic: 18, state: 3003, wait: 1, next: 59, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  59: { name: "ground_fire",
    pic: 19, state: 3003, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "ground_fire",
    pic: 26, state: 3003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "ground_fire",
    pic: 27, state: 3003, wait: 1, next: 72, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "ground_fire",
    pic: 28, state: 3003, wait: 1, next: 73, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "ground_fire",
    pic: 33, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "ground_fire",
    pic: 30, state: 3003, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "ground_fire",
    pic: 31, state: 3003, wait: 1, next: 76, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "ground_fire",
    pic: 32, state: 3003, wait: 1, next: 77, dvx: 0, dvy: 0, centerx: 16, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "flying",
    pic: 10, state: 18, wait: 1, next: 101, dvx: 3, dvy: 0, centerx: 5, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 5, w: 51, h: 48, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  101: { name: "flying",
    pic: 11, state: 18, wait: 1, next: 102, dvx: 2, dvy: 0, centerx: 3, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 2, y: 13, w: 54, h: 39, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  102: { name: "flying",
    pic: 12, state: 18, wait: 1, next: 103, dvx: 2, dvy: 0, centerx: 0, centery: 47, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 6, y: 6, w: 53, h: 30, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  103: { name: "flying",
    pic: 13, state: 18, wait: 1, next: 104, dvx: 2, dvy: 0, centerx: 4, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 7, w: 39, h: 22, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  104: { name: "flying",
    pic: 14, state: 18, wait: 1, next: 1000, dvx: 2, dvy: 0, centerx: 5, centery: 48, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 8, w: 31, h: 20, dvx: 10, dvy: -10, fall: 70, vrest: 300, bdefend: 16, injury: 85, effect: 21
    }
  },
  109: { name: "explosion",
    pic: 48, state: 3000, wait: 1, next: 110, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0
  },
  110: { name: "explosion",
    pic: 34, state: 18, wait: 1, next: 111, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 23, y: 36, w: 112, h: 110, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  111: { name: "explosion",
    pic: 35, state: 18, wait: 1, next: 112, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 20, y: 16, w: 122, h: 135, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  112: { name: "explosion",
    pic: 36, state: 18, wait: 1, next: 113, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 18, w: 127, h: 131, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  113: { name: "explosion",
    pic: 37, state: 18, wait: 1, next: 114, dvx: 0, dvy: 0, centerx: 78, centery: 148, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 16, w: 146, h: 132, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  114: { name: "explosion",
    pic: 38, state: 18, wait: 1, next: 115, dvx: 0, dvy: 0, centerx: 78, centery: 150, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 13, w: 137, h: 132, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  115: { name: "explosion",
    pic: 39, state: 18, wait: 1, next: 116, dvx: 0, dvy: 0, centerx: 78, centery: 155, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 14, w: 145, h: 117, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  116: { name: "explosion",
    pic: 40, state: 18, wait: 1, next: 117, dvx: 0, dvy: 0, centerx: 78, centery: 157, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  117: { name: "explosion",
    pic: 41, state: 18, wait: 1, next: 118, dvx: 0, dvy: 0, centerx: 78, centery: 164, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 15, y: 6, w: 128, h: 123, dvx: -12, dvy: -18, fall: 70, vrest: 300, bdefend: 16, injury: 125, zwidth: 37, effect: 22
    }
  },
  118: { name: "explosion",
    pic: 42, state: 18, wait: 1, next: 119, dvx: 0, dvy: 0, centerx: 78, centery: 171, hit_a: 0, hit_d: 0, hit_j: 0
  },
  119: { name: "explosion",
    pic: 43, state: 18, wait: 1, next: 120, dvx: 0, dvy: 0, centerx: 78, centery: 177, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "explosion",
    pic: 44, state: 18, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 76, centery: 172, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});