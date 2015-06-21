define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/weapon5.png", w: 48, h: 48, row: 10, col: 10
      }
    ],
    weapon_hp: 750,
    weapon_drop_hurt: 48,
    weapon_hit_sound: "1/038",
    weapon_drop_sound: "1/038",
    weapon_broken_sound: "1/038"
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 2, fall: 40, vrest: 10, bdefend: 16, injury: 40
    },
    2: {
      entry: "jump", dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 60
    },
    3: {
      entry: "run", dvx: 10, fall: 70, vrest: 10, bdefend: 16, injury: 85
    },
    4: {
      entry: "dash", dvx: 12, fall: 70, vrest: 20, bdefend: 60, injury: 100
    }
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  1: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 2, dvx: 0, dvy: 0, centerx: 24, centery: 32, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  2: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  3: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 23, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  4: { name: "in_the_sky",
    pic: 4, state: 1000, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  5: { name: "in_the_sky",
    pic: 5, state: 1000, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  6: { name: "in_the_sky",
    pic: 6, state: 1000, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  7: { name: "in_the_sky",
    pic: 7, state: 1000, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 23, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  8: { name: "in_the_sky",
    pic: 8, state: 1000, wait: 0, next: 9, dvx: 0, dvy: 0, centerx: 26, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  9: { name: "in_the_sky",
    pic: 9, state: 1000, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  10: { name: "in_the_sky",
    pic: 10, state: 1000, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 25, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  11: { name: "in_the_sky",
    pic: 11, state: 1000, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  12: { name: "in_the_sky",
    pic: 12, state: 1000, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 25, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  13: { name: "in_the_sky",
    pic: 13, state: 1000, wait: 0, next: 14, dvx: 0, dvy: 0, centerx: 25, centery: 32, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  14: { name: "in_the_sky",
    pic: 14, state: 1000, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  15: { name: "in_the_sky",
    pic: 15, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  20: { name: "on_hand",
    pic: 20, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 17, y: 2, w: 13, h: 44, fall: 20, bdefend: 16, injury: 789
    }
  },
  21: { name: "on_hand",
    pic: 21, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 41, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 15, y: 20, w: 12, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  22: { name: "on_hand",
    pic: 22, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 37, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 15, y: 21, w: 10, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  23: { name: "on_hand",
    pic: 23, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 9, y: 33, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 9, y: 25, w: 14, h: 13, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  24: { name: "on_hand",
    pic: 24, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 10, y: 29, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 8, y: 24, w: 18, h: 12, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  25: { name: "on_hand",
    pic: 25, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 23, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 6, y: 18, w: 24, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  26: { name: "on_hand",
    pic: 26, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 14, y: 15, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 12, y: 12, w: 16, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  27: { name: "on_hand",
    pic: 27, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 17, y: 13, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 12, y: 8, w: 14, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  28: { name: "on_hand",
    pic: 28, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 24, y: 11, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 9, w: 13, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  29: { name: "on_hand",
    pic: 29, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 13, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 18, y: 6, w: 14, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  30: { name: "on_hand",
    pic: 30, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 36, y: 16, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 12, w: 19, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  31: { name: "on_hand",
    pic: 31, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 37, y: 19, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 19, y: 15, w: 22, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  32: { name: "on_hand",
    pic: 32, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 37, y: 26, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 20, y: 20, w: 22, h: 12
    }
  },
  33: { name: "on_hand",
    pic: 33, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 38, y: 33, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 25, w: 20, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  34: { name: "on_hand",
    pic: 34, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 34, y: 36, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 22, y: 25, w: 17, h: 16, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  35: { name: "on_hand",
    pic: 35, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 40, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 40, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 19, y: 23, w: 13, h: 21, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  40: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 24, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  41: { name: "throwing",
    pic: 1, state: 1002, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  42: { name: "throwing",
    pic: 2, state: 1002, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 24, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  43: { name: "throwing",
    pic: 3, state: 1002, wait: 0, next: 44, dvx: 0, dvy: 0, centerx: 23, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  44: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 45, dvx: 0, dvy: 0, centerx: 24, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  45: { name: "throwing",
    pic: 5, state: 1002, wait: 0, next: 46, dvx: 0, dvy: 0, centerx: 24, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  46: { name: "throwing",
    pic: 6, state: 1002, wait: 0, next: 47, dvx: 0, dvy: 0, centerx: 24, centery: 39, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  47: { name: "throwing",
    pic: 7, state: 1002, wait: 0, next: 48, dvx: 0, dvy: 0, centerx: 23, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  48: { name: "throwing",
    pic: 8, state: 1002, wait: 0, next: 49, dvx: 0, dvy: 0, centerx: 25, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  49: { name: "throwing",
    pic: 9, state: 1002, wait: 0, next: 50, dvx: 0, dvy: 0, centerx: 25, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  50: { name: "throwing",
    pic: 10, state: 1002, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 25, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  51: { name: "throwing",
    pic: 11, state: 1002, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 25, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  52: { name: "throwing",
    pic: 12, state: 1002, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 25, centery: 37, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  53: { name: "throwing",
    pic: 13, state: 1002, wait: 0, next: 54, dvx: 0, dvy: 0, centerx: 25, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  54: { name: "throwing",
    pic: 14, state: 1002, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 25, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  55: { name: "throwing",
    pic: 15, state: 1002, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 24, centery: 36, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 16, y: 16, w: 19, h: 19, fall: 60, bdefend: 16, injury: 35
    },
    bdy: {
      kind: 0, x: 16, y: 16, w: 19, h: 19
    }
  },
  60: { name: "on_ground",
    pic: 2, state: 1003, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/038"
  },
  61: { name: "on_ground",
    pic: 5, state: 1003, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "on_ground",
    pic: 3, state: 1003, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 24, centery: 31, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/038"
  },
  63: { name: "on_ground",
    pic: 5, state: 1003, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "on_ground",
    pic: 4, state: 1004, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 33, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  },
  70: { name: "just_on_ground",
    pic: 2, state: 1003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 24, centery: 38, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/038"
  },
  71: { name: "just_on_on_ground",
    pic: 5, state: 1003, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 24, centery: 35, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "just_on_on_ground",
    pic: 3, state: 1003, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 24, centery: 34, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/038"
  },
  399: { name: "dummy",
    pic: 4, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 24, centery: 30, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  }
  }
});
