define({
  bmp: {
    file: [
      {
        "file(0-23)": "sprite/jan_chaseh.png", w: 81, h: 82, row: 4, col: 3
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 2, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 3, hit_d: 1, hit_j: 0, hit_Fa: 4
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 40, hit_a: 3, hit_d: 1, hit_j: 0, hit_Fa: 4
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 2, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 43, hit_a: 3, hit_d: 2, hit_j: 0, hit_Fa: 4
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 45, hit_a: 3, hit_d: 3, hit_j: 0, hit_Fa: 4,
    opoint: {
      kind: 1, x: 43, y: 45, action: 40, dvx: 0, dvy: 0, oid: 219, facing: -2
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
    pic: 50, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 50, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 50, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 50, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 58, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 1, state: 3000, wait: 3, next: 31, dvx: -14, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 2, state: 3000, wait: 3, next: 1, dvx: -14, dvy: 0, dvz: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 41, action: 20, dvx: 0, dvy: 0, oid: 219, facing: 1
    }
  },
  40: { name: "star",
    pic: 8, state: 3005, wait: 2, next: 41, dvx: 3, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "star",
    pic: 9, state: 3005, wait: 2, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "star",
    pic: 10, state: 3005, wait: 2, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "star",
    pic: 11, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "start",
    pic: 50, state: 3005, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "start",
    pic: 50, state: 3005, wait: 1, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 5
  },
  52: { name: "start",
    pic: 50, state: 3005, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "star",
    pic: 8, state: 3005, wait: 2, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "star",
    sound: "1/049",
    pic: 9, state: 3005, wait: 2, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "star",
    pic: 10, state: 3005, wait: 2, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "star",
    pic: 11, state: 3005, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "star2",
    pic: 4, state: 3005, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "star2",
    pic: 5, state: 3005, wait: 0, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "star2",
    pic: 6, state: 3005, wait: 0, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "star2",
    pic: 7, state: 3005, wait: 0, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});