define({
  bmp: {
    file: [
      {
        "file(0-23)": "sprite/john_ball.png", w: 81, h: 82, row: 8, col: 6
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 18, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 9, fall: 70, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 18, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 9, fall: 70, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 5, dvx: 18, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 9, fall: 70, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 4, dvx: 18, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 9, fall: 70, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  4: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 5, dvx: 18, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 9, fall: 70, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  5: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 18, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 9, fall: 70, vrest: 10, bdefend: 16, injury: 55
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: -10, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: -10, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: -10, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: -10, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 8, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 9, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 10, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 11, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 12, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 13, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 19, y: 41, action: 0, dvx: 0, dvy: 0, oid: 200, facing: 1
    }
  },
  32: { name: "rebounding",
    pic: 14, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 15, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 19, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "stars",
    pic: 16, state: 3002, wait: 3, next: 41, dvx: 0, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/049"
  },
  41: { name: "stars",
    pic: 17, state: 3002, wait: 3, next: 42, dvx: 0, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 39, action: 44, dvx: 0, dvy: 0, oid: 200, facing: 0
    }
  },
  42: { name: "stars",
    pic: 18, state: 3002, wait: 3, next: 43, dvx: 0, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "stars",
    pic: 19, state: 3002, wait: 3, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "stars",
    pic: 20, state: 3002, wait: 2, next: 45, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "stars",
    pic: 21, state: 3002, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "stars",
    pic: 22, state: 3002, wait: 2, next: 47, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "stars",
    pic: 23, state: 3002, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "healball",
    pic: 24, state: 3002, wait: 3, next: 51, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    itr: {
      kind: 8, x: 25, y: 13, w: 32, h: 34, dvx: 40, injury: 100
    }
  },
  51: { name: "healball",
    pic: 25, state: 3002, wait: 3, next: 52, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 39, action: 42, dvx: 0, dvy: 0, oid: 200, facing: 0
    },
    itr: {
      kind: 8, x: 25, y: 13, w: 32, h: 34, dvx: 40, injury: 100
    }
  },
  52: { name: "healball",
    pic: 26, state: 3002, wait: 3, next: 53, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 39, action: 44, dvx: 0, dvy: 0, oid: 200, facing: 0
    },
    itr: {
      kind: 8, x: 25, y: 13, w: 32, h: 34, dvx: 40, injury: 100
    }
  },
  53: { name: "healball",
    pic: 28, state: 3002, wait: 3, next: 54, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    itr: {
      kind: 8, x: 25, y: 13, w: 32, h: 34, dvx: 40, injury: 100
    }
  },
  54: { name: "healball",
    pic: 27, state: 3002, wait: 3, next: 51, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 9, hit_d: 55, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 39, action: 42, dvx: 0, dvy: 0, oid: 200, facing: 0
    },
    itr: {
      kind: 8, x: 25, y: 13, w: 32, h: 34, dvx: 40, injury: 100
    }
  },
  55: { name: "healball",
    pic: 29, state: 3002, wait: 2, next: 56, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "healball",
    pic: 30, state: 3002, wait: 1, next: 57, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "healball",
    pic: 31, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 40, centery: 26, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "forcefield",
    pic: 32, state: 3002, wait: 2, next: 61, dvx: 0, dvy: 0, centerx: 41, centery: 44, hit_a: 3, hit_d: 67, hit_j: 0,
    itr: {
      kind: 9, x: 46, y: 30, w: 10, h: 32, dvx: 10, vrest: 8, injury: 40, fall: 70
    }
  },
  61: { name: "forcefield",
    pic: 33, state: 3002, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 41, centery: 45, hit_a: 3, hit_d: 67, hit_j: 0,
    itr: {
      kind: 9, x: 41, y: 21, w: 19, h: 47, dvx: 10, vrest: 8, injury: 40, fall: 70
    }
  },
  62: { name: "forcefield",
    pic: 34, state: 3002, wait: 1, next: 63, dvx: 0, dvy: 0, centerx: 35, centery: 41, hit_a: 3, hit_d: 67, hit_j: 0,
    sound: "1/051",
    itr: {
      kind: 9, x: 33, y: 15, w: 26, h: 55, dvx: 10, vrest: 8, injury: 40, fall: 70
    }
  },
  63: { name: "forcefield",
    pic: 35, state: 3002, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 3, hit_d: 67, hit_j: 0,
    itr: {
      kind: 9, x: 38, y: 16, w: 21, h: 53, dvx: 10, vrest: 8, injury: 40, fall: 70
    }
  },
  64: { name: "forcefield_dp",
    pic: 36, state: 3002, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 3, hit_d: 67, hit_j: 0,
    itr: {
      kind: 9, x: 36, y: 14, w: 23, h: 55, dvx: 10, vrest: 8, injury: 40, fall: 70
    }
  },
  65: { name: "forcefield",
    pic: 35, state: 3002, wait: 1, next: 62, dvx: 0, dvy: 0, centerx: 37, centery: 41, hit_a: 3, hit_d: 67, hit_j: 0,
    itr: {
      kind: 9, x: 36, y: 14, w: 23, h: 54, dvx: 10, vrest: 8, injury: 40, fall: 70
    }
  },
  67: { name: "forcefield_dp",
    sound: "1/053",
    pic: 37, state: 3002, wait: 2, next: 68, dvx: 0, dvy: 0, centerx: 39, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0
  },
  68: { name: "forcefield_dp",
    pic: 38, state: 3002, wait: 2, next: 69, dvx: 0, dvy: 0, centerx: 33, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0
  },
  69: { name: "forcefield_dp",
    pic: 39, state: 3002, wait: 2, next: 1000, dvx: 0, dvy: 0, centerx: 33, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0
  }
  }
});
