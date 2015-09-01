define({
  bmp: {
    file: [
      {
        "file(0-27)": "sprite/freeze_col.png", w: 109, h: 109, row: 7, col: 4
      },
      {
        "file(28-37)": "sprite/freeze_ww.png", w: 159, h: 159, row: 5, col: 2
      }
    ],
    weapon_hit_sound: "1/072",
    weapon_drop_sound: "1/072",
    weapon_broken_sound: "1/072"
  },
  frame: {
  0: { name: "column",
    pic: 0, state: 15, wait: 1, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 59, w: 42, h: 51, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 3, y: 59, w: 42, h: 51
    }
  },
  1: { name: "column",
    pic: 1, state: 15, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/072",
    itr: {
      kind: 0, x: 14, y: 7, w: 66, h: 101, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 14, y: 7, w: 66, h: 101
    }
  },
  2: { name: "column",
    pic: 2, state: 15, wait: 2, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 15, w: 70, h: 95, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 14, y: 15, w: 70, h: 95
    }
  },
  3: { name: "column",
    pic: 3, state: 15, wait: 4, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 15, w: 70, h: 95, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 18, y: 12, w: 66, h: 98
    }
  },
  4: { name: "column",
    pic: 4, state: 3000, wait: 3, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 6, y: 7, w: 74, h: 98, vrest: 1
    },
    bdy: {
      kind: 0, x: 6, y: 7, w: 74, h: 98
    }
  },
  5: { name: "column",
    pic: 5, state: 3000, wait: 175, next: 6, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 4, y: 13, w: 62, h: 95, vrest: 1
    },
    bdy: {
      kind: 0, x: 4, y: 13, w: 62, h: 95
    }
  },
  6: { name: "column",
    pic: 5, state: 13, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "hitting",
    pic: 6, state: 13, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hit",
    pic: 6, state: 13, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "rebounding",
    pic: 6, state: 13, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "disappear",
    pic: 6, state: 15, wait: 1, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "column",
    pic: 7, state: 15, wait: 1, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 3, y: 59, w: 42, h: 51, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 3, y: 59, w: 42, h: 51
    }
  },
  51: { name: "column",
    pic: 8, state: 15, wait: 2, next: 52, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/072",
    itr: {
      kind: 0, x: 12, y: 20, w: 57, h: 87, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 12, y: 20, w: 57, h: 87
    }
  },
  52: { name: "column",
    pic: 9, state: 15, wait: 2, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 14, y: 26, w: 65, h: 84, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 14, y: 26, w: 65, h: 84
    }
  },
  53: { name: "column",
    pic: 10, state: 15, wait: 4, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 23, w: 65, h: 84, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 4, y: 20, w: 68, h: 90
    }
  },
  54: { name: "column",
    pic: 11, state: 3000, wait: 3, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 11, y: 19, w: 66, h: 91, vrest: 1
    },
    bdy: {
      kind: 0, x: 11, y: 19, w: 66, h: 91
    }
  },
  55: { name: "column",
    pic: 12, state: 3000, wait: 175, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 13, y: 19, w: 64, h: 89, vrest: 1
    },
    bdy: {
      kind: 0, x: 13, y: 19, w: 64, h: 89
    }
  },
  56: { name: "column",
    pic: 13, state: 13, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "column",
    pic: 14, state: 15, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 83, w: 26, h: 25, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 16, y: 83, w: 26, h: 25
    }
  },
  61: { name: "column",
    pic: 15, state: 15, wait: 2, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/072",
    itr: {
      kind: 0, x: 23, y: 44, w: 41, h: 64, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 23, y: 44, w: 41, h: 64
    }
  },
  62: { name: "column",
    pic: 16, state: 15, wait: 2, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 17, y: 44, w: 54, h: 58, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 17, y: 44, w: 54, h: 58
    }
  },
  63: { name: "column",
    pic: 17, state: 15, wait: 4, next: 64, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 11, y: 27, w: 51, h: 79, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 60, effect: 30
    },
    bdy: {
      kind: 0, x: 10, y: 28, w: 54, h: 79
    }
  },
  64: { name: "column",
    pic: 18, state: 3000, wait: 3, next: 65, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 6, y: 29, w: 56, h: 78, vrest: 1
    },
    bdy: {
      kind: 0, x: 6, y: 29, w: 56, h: 78
    }
  },
  65: { name: "column",
    pic: 19, state: 3000, wait: 175, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 13, y: 30, w: 50, h: 75, vrest: 1
    },
    bdy: {
      kind: 0, x: 13, y: 30, w: 50, h: 75
    }
  },
  66: { name: "column",
    pic: 20, state: 13, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "column",
    pic: 21, state: 15, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 83, w: 26, h: 25, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 40, effect: 30
    },
    bdy: {
      kind: 0, x: 16, y: 83, w: 26, h: 25
    }
  },
  71: { name: "column",
    pic: 22, state: 15, wait: 2, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 111, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/072",
    itr: {
      kind: 0, x: 21, y: 62, w: 28, h: 48, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 40, effect: 30
    },
    bdy: {
      kind: 0, x: 21, y: 63, w: 26, h: 47
    }
  },
  72: { name: "column",
    pic: 23, state: 15, wait: 2, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 26, y: 55, w: 28, h: 57, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 40, effect: 30
    },
    bdy: {
      kind: 0, x: 25, y: 55, w: 30, h: 56
    }
  },
  73: { name: "column",
    pic: 24, state: 15, wait: 4, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 51, w: 38, h: 58, dvx: 7, dvy: -10, fall: 20, vrest: 50, bdefend: 16, injury: 40, effect: 30
    },
    bdy: {
      kind: 0, x: 19, y: 53, w: 38, h: 57
    }
  },
  74: { name: "column",
    pic: 25, state: 3000, wait: 3, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 20, y: 51, w: 35, h: 57, vrest: 1
    },
    bdy: {
      kind: 0, x: 19, y: 49, w: 36, h: 57
    }
  },
  75: { name: "column",
    pic: 26, state: 3000, wait: 175, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 14, x: 18, y: 51, w: 38, h: 58, vrest: 1
    },
    bdy: {
      kind: 0, x: 18, y: 51, w: 38, h: 58
    }
  },
  76: { name: "column",
    pic: 27, state: 13, wait: 1, next: 40, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 112, hit_a: 0, hit_d: 0, hit_j: 0
  },
  100: { name: "column_mother",
    pic: 6, state: 3000, wait: 1, next: 101, dvx: 4, dvy: 0, dvz: 0, centerx: 1, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "column_mother",
    pic: 6, state: 3005, wait: 5, next: 102, dvx: 6, dvy: 0, dvz: 0, centerx: 1, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -13, y: 5, action: 60, dvx: 0, dvy: 0, oid: 212, facing: 0
    }
  },
  102: { name: "column_mother",
    pic: 6, state: 3005, wait: 5, next: 103, dvx: 6, dvy: 0, dvz: 0, centerx: 1, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: -5, y: 5, action: 50, dvx: 0, dvy: 0, oid: 212, facing: 0
    }
  },
  103: { name: "column_mother",
    pic: 6, state: 3005, wait: 1, next: 1000, dvx: 6, dvy: 0, dvz: 0, centerx: 1, centery: 0, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 29, y: 5, action: 0, dvx: 0, dvy: 0, oid: 212, facing: 0
    }
  },
  150: { name: "whirlwind",
    pic: 28, state: 15, wait: 2, next: 151, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/073"
  },
  151: { name: "whirlwind",
    pic: 29, state: 15, wait: 2, next: 152, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 82, y: 144, action: 170, dvx: 0, dvy: 0, oid: 212, facing: 0
    }
  },
  152: { name: "whirlwind",
    pic: 30, state: 15, wait: 1, next: 153, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "whirlwind",
    pic: 31, state: 15, wait: 1, next: 154, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 15, x: 15, y: 21, w: 128, h: 170, dvx: -12, dvy: -18, fall: 70, vrest: 200, bdefend: 16, injury: 75, zwidth: 30
    }
  },
  154: { name: "whirlwind",
    pic: 32, state: 15, wait: 1, next: 155, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 15, x: 15, y: 21, w: 128, h: 170, dvx: -12, dvy: -18, fall: 70, vrest: 200, bdefend: 16, injury: 75, zwidth: 30
    }
  },
  155: { name: "whirlwind",
    pic: 33, state: 15, wait: 1, next: 156, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 15, x: 15, y: 21, w: 128, h: 170, dvx: -12, dvy: -18, fall: 70, vrest: 200, bdefend: 16, injury: 75, zwidth: 30
    }
  },
  156: { name: "whirlwind",
    pic: 34, state: 15, wait: 1, next: 157, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 15, x: 15, y: 21, w: 128, h: 170, dvx: -12, dvy: -18, fall: 70, vrest: 200, bdefend: 16, injury: 75, zwidth: 30
    }
  },
  157: { name: "whirlwind",
    pic: 35, state: 15, wait: 1, next: 154, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 50, hit_d: 158, hit_j: 0,
    itr: {
      kind: 15, x: 15, y: 21, w: 128, h: 170, dvx: -12, dvy: -18, fall: 70, vrest: 200, bdefend: 16, injury: 75, zwidth: 30
    }
  },
  158: { name: "whirlwind",
    pic: 36, state: 15, wait: 2, next: 159, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0
  },
  159: { name: "whirlwind",
    pic: 37, state: 15, wait: 2, next: 1000, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "whirlwind",
    pic: 6, state: 15, wait: 50, next: 1000, dvx: -2, dvy: 0, dvz: 0, centerx: 82, centery: 144, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 16, x: 15, y: 21, w: 128, h: 170, dvx: -12, dvy: -18, fall: 70, vrest: 100, bdefend: 16, injury: 75, zwidth: 30
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  }
  }
});
