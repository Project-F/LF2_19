define({
  bmp: {
    file: [
      {
        "file(0-7)": "sprite/firzen_chasef.png", w: 81, h: 82, row: 4, col: 2
      },
      {
        "file(8-19)": "sprite/firzen_up.png", w: 35, h: 49, row: 4, col: 3
      },
      {
        "file(20-23)": "sprite/firzen_up3.png", w: 81, h: 82, row: 4, col: 1
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 5, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 26, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    bdy: {
      kind: 0, x: 33, y: 21, w: 23, h: 28
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 5, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 36, hit_a: 7, hit_d: 1, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 20, injury: 40, effect: 2
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 5, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 48, hit_a: 7, hit_d: 2, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 29, y: 27, w: 36, h: 39, dvx: 3, fall: 70, vrest: 15, bdefend: 20, injury: 40, effect: 2
    },
    bdy: {
      kind: 0, x: 30, y: 28, w: 34, h: 36
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 45, hit_a: 7, hit_d: 3, hit_j: 0, hit_Fa: 7,
    itr: {
      kind: 0, x: 22, y: 22, w: 39, h: 38, dvx: 3, fall: 70, vrest: 15, bdefend: 20, injury: 40, effect: 2
    },
    bdy: {
      kind: 0, x: 21, y: 22, w: 40, h: 39
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 44, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 44, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "tail",
    pic: 12, state: 3005, wait: 0, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "tail",
    pic: 13, state: 3005, wait: 0, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "tail",
    pic: 14, state: 3005, wait: 0, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "tail",
    pic: 15, state: 3005, wait: 1, next: 44, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "tail",
    pic: 16, state: 3005, wait: 1, next: 45, dvx: 0, dvy: 0, dvz: 0, centerx: 18, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "tail",
    pic: 17, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 8, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 20, y: 40, action: 70, dvx: 0, dvy: 0, oid: 219, facing: 0
    }
  },
  51: { name: "start",
    pic: 9, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "start",
    pic: 10, state: 3005, wait: 1, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 20, y: 40, action: 70, dvx: 0, dvy: 0, oid: 219, facing: 1
    }
  },
  53: { name: "start",
    pic: 9, state: 3005, wait: 0, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "start",
    pic: 10, state: 3005, wait: 0, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 20, y: 40, action: 70, dvx: 0, dvy: 0, oid: 219, facing: 0
    }
  },
  55: { name: "start",
    pic: 11, state: 3005, wait: 0, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "start",
    pic: 10, state: 3005, wait: 0, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 20, y: 40, action: 70, dvx: 0, dvy: 0, oid: 219, facing: 1
    }
  },
  57: { name: "start",
    pic: 11, state: 3005, wait: 0, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  58: { name: "start",
    pic: 11, state: 3005, wait: 0, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 15, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 17, y: 10, action: 70, dvx: 0, dvy: 0, oid: 221, facing: 1
    }
  },
  59: { name: "start",
    pic: 50, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 15, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 9
  },
  60: { name: "hiting_ground",
    pic: 4, state: 3001, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 42, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "hiting_ground",
    pic: 5, state: 3001, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020"
  },
  62: { name: "hiting_ground",
    pic: 6, state: 3001, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 61, action: 50, dvx: 0, dvy: 0, oid: 211, facing: 1
    }
  },
  63: { name: "hiting_ground",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "explosion",
    pic: 20, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "explosion",
    pic: 21, state: 3005, wait: 1, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "explosion",
    pic: 22, state: 3005, wait: 1, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "explosion",
    pic: 23, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "disaster1",
    pic: 50, state: 3005, wait: 10, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 11
  },
  81: { name: "disaster2",
    pic: 50, state: 3005, wait: 10, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 9
  }
  }
});