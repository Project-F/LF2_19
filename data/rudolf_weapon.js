define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/rudolf_weapon.png", w: 48, h: 48, row: 10, col: 10
      }
    ],
    weapon_hp: 1000,
    weapon_drop_hurt: 70,
    weapon_hit_sound: "1/027",
    weapon_drop_sound: "1/026",
    weapon_broken_sound: "1/026"
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 2, fall: 20, vrest: 10, bdefend: 12, injury: 30, effect: 1
    },
    2: {
      entry: "jump", dvx: 7, fall: 20, vrest: 10, bdefend: 12, injury: 30, effect: 1
    },
    3: {
      entry: "run", dvx: 10, fall: 20, vrest: 10, bdefend: 12, injury: 30, effect: 1
    },
    4: {
      entry: "dash", dvx: 12, fall: 60, vrest: 20, bdefend: 60, injury: 30, effect: 1
    }
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  1: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 2, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  2: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  3: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  4: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  5: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  6: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  7: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  8: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 9, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  9: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  10: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  11: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  12: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  13: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 14, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  14: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  15: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 24, centery: 40
  },
  20: { name: "on_hand",
    pic: 20, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 24, y: 40
    },
    itr: {
      kind: 5, x: 17, y: 2, w: 13, h: 44, fall: 20, bdefend: 16, injury: 789
    }
  },
  21: { name: "on_hand",
    pic: 21, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 17, y: 41
    },
    itr: [
      {
        kind: 5, x: 23, y: 2, w: 13, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 15, y: 20, w: 12, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  22: { name: "on_hand",
    pic: 22, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 12, y: 37
    },
    itr: [
      {
        kind: 5, x: 13, y: 29, w: 9, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 28, y: 5, w: 14, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 19, y: 18, w: 14, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  23: { name: "on_hand",
    pic: 23, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 9, y: 33
    },
    itr: [
      {
        kind: 5, x: 33, y: 15, w: 13, h: 11, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 19, y: 18, w: 15, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 9, y: 25, w: 14, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  24: { name: "on_hand",
    pic: 24, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 10, y: 29
    },
    itr: {
      kind: 5, x: 7, y: 23, w: 42, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  25: { name: "on_hand",
    pic: 25, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 12, y: 23
    },
    itr: [
      {
        kind: 5, x: 6, y: 18, w: 24, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 22, y: 25, w: 23, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  26: { name: "on_hand",
    pic: 26, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 14, y: 15
    },
    itr: [
      {
        kind: 5, x: 26, y: 27, w: 16, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 9, y: 10, w: 15, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 17, y: 20, w: 16, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  27: { name: "on_hand",
    pic: 27, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 17, y: 13
    },
    itr: [
      {
        kind: 5, x: 12, y: 8, w: 14, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 19, y: 22, w: 15, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  28: { name: "on_hand",
    pic: 28, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 24, y: 11
    },
    itr: {
      kind: 5, x: 18, y: 8, w: 13, h: 39, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  29: { name: "on_hand",
    pic: 29, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 29, y: 13
    },
    itr: [
      {
        kind: 5, x: 18, y: 6, w: 14, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 11, y: 25, w: 16, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  30: { name: "on_hand",
    pic: 30, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 36, y: 16
    },
    itr: [
      {
        kind: 5, x: 8, y: 32, w: 18, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 27, y: 11, w: 12, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 16, y: 22, w: 16, h: 12, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  31: { name: "on_hand",
    pic: 31, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 37, y: 19
    },
    itr: [
      {
        kind: 5, x: 19, y: 15, w: 22, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 0, y: 25, w: 28, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  32: { name: "on_hand",
    pic: 32, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 37, y: 26
    },
    itr: {
      kind: 5, x: 0, y: 19, w: 42, h: 16
    }
  },
  33: { name: "on_hand",
    pic: 33, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 38, y: 33
    },
    itr: [
      {
        kind: 5, x: 3, y: 15, w: 22, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 19, y: 22, w: 21, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  34: { name: "on_hand",
    pic: 34, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 34, y: 36
    },
    itr: [
      {
        kind: 5, x: 26, y: 27, w: 11, h: 12, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 5, y: 5, w: 17, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 14, y: 18, w: 17, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  35: { name: "on_hand",
    pic: 35, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    wpoint: {
      kind: 2, x: 29, y: 40
    },
    itr: [
      {
        kind: 5, x: 9, y: 1, w: 14, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 18, y: 17, w: 14, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  40: { name: "throwing",
    pic: 1, state: 1002, wait: 1, next: 41, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 25, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  41: { name: "throwing",
    pic: 2, state: 1002, wait: 1, next: 42, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  42: { name: "throwing",
    pic: 3, state: 1002, wait: 1, next: 43, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  43: { name: "throwing",
    pic: 0, state: 1002, wait: 1, next: 44, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  44: { name: "throwing",
    pic: 1, state: 1002, wait: 1, next: 45, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  45: { name: "throwing",
    pic: 2, state: 1002, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  46: { name: "throwing",
    pic: 3, state: 1002, wait: 1, next: 47, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  47: { name: "throwing",
    pic: 0, state: 1002, wait: 1, next: 46, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  48: { name: "throwing",
    pic: 1, state: 1002, wait: 1, next: 49, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  49: { name: "throwing",
    pic: 2, state: 1002, wait: 1, next: 50, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  50: { name: "throwing",
    pic: 3, state: 1002, wait: 1, next: 51, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  51: { name: "throwing",
    pic: 0, state: 1002, wait: 1, next: 52, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  52: { name: "throwing",
    pic: 1, state: 1002, wait: 1, next: 53, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  53: { name: "throwing",
    pic: 2, state: 1002, wait: 1, next: 54, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  54: { name: "throwing",
    pic: 3, state: 1002, wait: 1, next: 55, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  55: { name: "throwing",
    pic: 0, state: 1002, wait: 1, next: 40, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    itr: {
      kind: 0, x: 3, y: 4, w: 40, h: 39, dvx: 2, fall: 20, bdefend: 12, injury: 22, effect: 1
    },
    bdy: {
      kind: 0, x: 3, y: 4, w: 40, h: 39
    }
  },
  60: { name: "on_ground",
    pic: 1, state: 1003, wait: 0, next: 61, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    sound: "1/026"
  },
  61: { name: "on_ground",
    pic: 2, state: 9998, wait: 0, next: 62, dvx: 0, dvy: 0, centerx: 24, centery: 36
  },
  62: { name: "on_ground",
    pic: 3, state: 1003, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 24, centery: 34,
    sound: "1/026"
  },
  63: { name: "on_ground",
    pic: 0, state: 1003, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 24, centery: 35
  },
  64: { name: "on_ground",
    pic: 0, state: 9998, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 29,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  },
  70: { name: "just_on_ground",
    pic: 1, state: 1003, wait: 0, next: 71, dvx: 0, dvy: 0, centerx: 24, centery: 40,
    sound: "1/026",
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, bdefend: 16, arest: 16
    }
  },
  71: { name: "just_on_on_ground",
    pic: 2, state: 9998, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 24, centery: 36,
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, bdefend: 16, arest: 16
    }
  },
  72: { name: "just_on_on_ground",
    pic: 3, state: 1003, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 24, centery: 34,
    itr: {
      kind: 0, x: 1, y: 19, w: 46, h: 15, dvx: 2, fall: 40, bdefend: 16, arest: 16
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 29,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  }
  }
});