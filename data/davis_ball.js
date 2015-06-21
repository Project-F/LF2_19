define({
  bmp: {
    file: [
      {
        "file(0-23)": "sprite/davis_ball.png", w: 81, h: 46, row: 4, col: 6
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 4, dvy: 0, centerx: 56, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 5, dvy: 0, centerx: 53, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  2: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 3, dvx: 7, dvy: 0, centerx: 56, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  3: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 4, dvx: 9, dvy: 0, centerx: 52, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  4: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 5, dvx: 10, dvy: 0, centerx: 53, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  5: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 6, dvx: 13, dvy: 0, centerx: 52, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  6: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 7, dvx: 16, dvy: 0, centerx: 53, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  7: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 8, dvx: 18, dvy: 0, centerx: 53, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  8: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 9, dvx: 20, dvy: 0, centerx: 55, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  9: { name: "flying",
    pic: 9, state: 3000, wait: 1, next: 8, dvx: 20, dvy: 0, centerx: 55, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  10: { name: "hiting",
    pic: 4, state: 3001, wait: 1, next: 11, dvx: 0, dvy: 0, centerx: 55, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "hiting",
    pic: 5, state: 3001, wait: 1, next: 12, dvx: 0, dvy: 0, centerx: 52, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "hiting",
    pic: 6, state: 3001, wait: 1, next: 13, dvx: 0, dvy: 0, centerx: 46, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "hiting",
    pic: 7, state: 3001, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 4, state: 3002, wait: 1, next: 21, dvx: 0, dvy: 0, centerx: 58, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hit",
    pic: 5, state: 3002, wait: 1, next: 22, dvx: 0, dvy: 0, centerx: 54, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hit",
    pic: 6, state: 3002, wait: 1, next: 23, dvx: 0, dvy: 0, centerx: 51, centery: 21, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hit",
    pic: 7, state: 3002, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 42, state: 3003, wait: 1, next: 31, dvx: 0, dvy: 0, centerx: 56, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "rebounding",
    pic: 5, state: 3003, wait: 1, next: 32, dvx: 0, dvy: 0, centerx: 51, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 19, y: 23, action: 7, dvx: 0, dvy: 0, oid: 207, facing: 1
    }
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 52, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 45, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappearing",
    pic: 4, state: 3004, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 54, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "disappearing",
    pic: 5, state: 3004, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 56, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "disappearing",
    pic: 6, state: 3004, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 46, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "dflying",
    pic: 0, state: 3000, wait: 1, next: 51, dvx: 4, dvy: 0, centerx: 56, centery: 22, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  51: { name: "dflying",
    pic: 1, state: 3000, wait: 1, next: 52, dvx: 5, dvy: 0, centerx: 53, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  52: { name: "dflying",
    pic: 0, state: 3000, wait: 1, next: 53, dvx: 7, dvy: 0, centerx: 56, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  53: { name: "dflying",
    pic: 1, state: 3000, wait: 1, next: 54, dvx: 9, dvy: 0, centerx: 53, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  54: { name: "dflying",
    pic: 2, state: 3000, wait: 1, next: 55, dvx: 10, dvy: 0, centerx: 54, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  55: { name: "dflying",
    pic: 3, state: 3000, wait: 1, next: 56, dvx: 13, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  56: { name: "dflying",
    pic: 2, state: 3000, wait: 1, next: 57, dvx: 16, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  57: { name: "dflying",
    pic: 3, state: 3000, wait: 1, next: 58, dvx: 18, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  58: { name: "dflying",
    pic: 8, state: 3000, wait: 1, next: 59, dvx: 20, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  59: { name: "dflying",
    pic: 9, state: 3000, wait: 1, next: 58, dvx: 20, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  60: { name: "uflying",
    pic: 0, state: 3000, wait: 1, next: 61, dvx: 4, dvy: 0, centerx: 56, centery: 22, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  61: { name: "uflying",
    pic: 1, state: 3000, wait: 1, next: 62, dvx: 5, dvy: 0, centerx: 53, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  62: { name: "uflying",
    pic: 0, state: 3000, wait: 1, next: 63, dvx: 7, dvy: 0, centerx: 56, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  63: { name: "uflying",
    pic: 1, state: 3000, wait: 1, next: 64, dvx: 9, dvy: 0, centerx: 53, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  64: { name: "uflying",
    pic: 2, state: 3000, wait: 1, next: 65, dvx: 10, dvy: 0, centerx: 54, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  65: { name: "uflying",
    pic: 3, state: 3000, wait: 1, next: 66, dvx: 13, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  66: { name: "uflying",
    pic: 2, state: 3000, wait: 1, next: 67, dvx: 16, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  67: { name: "uflying",
    pic: 3, state: 3000, wait: 1, next: 68, dvx: 18, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  68: { name: "uflying",
    pic: 8, state: 3000, wait: 1, next: 69, dvx: 20, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  },
  69: { name: "uflying",
    pic: 9, state: 3000, wait: 1, next: 68, dvx: 20, dvy: 0, centerx: 55, centery: 23, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 26, y: 12, w: 45, h: 24, dvx: 7, fall: 20, arest: 6, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 45, h: 24
    }
  }
  }
});
