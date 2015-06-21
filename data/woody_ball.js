define({
  bmp: {
    file: [
      {
        "file(0-11)": "sprite/woody_ball.png", w: 81, h: 82, row: 4, col: 4
      }
    ],
    weapon_hit_sound: "1/020",
    weapon_drop_sound: "1/020",
    weapon_broken_sound: "1/020"
  },
  frame: {
  0: { name: "flying",
    pic: 0, state: 3000, wait: 1, next: 1, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  1: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 2, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  2: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 3, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  3: { name: "flying",
    pic: 3, state: 3000, wait: 1, next: 4, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  4: { name: "flying",
    pic: 2, state: 3000, wait: 1, next: 5, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  5: { name: "flying",
    pic: 1, state: 3000, wait: 1, next: 999, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 51,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
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
      kind: 1, x: 41, y: 41, action: 90, dvx: 0, dvy: 0, oid: 206, facing: 1
    }
  },
  32: { name: "rebounding",
    pic: 6, state: 3003, wait: 1, next: 33, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "rebounding",
    pic: 7, state: 3003, wait: 1, next: 1000, dvx: 0, dvy: 0, centerx: 43, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 81, dvx: 17, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  81: { name: "flying",
    pic: 9, state: 3000, wait: 1, next: 82, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  82: { name: "flying",
    pic: 10, state: 3000, wait: 1, next: 83, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  83: { name: "flying",
    pic: 11, state: 3000, wait: 1, next: 84, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  84: { name: "flying",
    pic: 10, state: 3000, wait: 1, next: 85, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  85: { name: "flying",
    pic: 9, state: 3000, wait: 1, next: 80, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 49,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  90: { name: "flying",
    pic: 8, state: 3000, wait: 1, next: 91, dvx: 17, dvy: 0, centerx: 41, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  91: { name: "flying",
    pic: 9, state: 3000, wait: 1, next: 92, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  92: { name: "flying",
    pic: 10, state: 3000, wait: 1, next: 93, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  93: { name: "flying",
    pic: 11, state: 3000, wait: 1, next: 94, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  94: { name: "flying",
    pic: 10, state: 3000, wait: 1, next: 95, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  },
  95: { name: "flying",
    pic: 9, state: 3000, wait: 1, next: 90, dvx: 17, dvy: 0, centerx: 40, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 22, y: 27, w: 55, h: 27, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 16, injury: 45
    },
    bdy: {
      kind: 0, x: 22, y: 27, w: 55, h: 27
    }
  }
  }
});