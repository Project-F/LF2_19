define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/weapon7.png", w: 69, h: 69, row: 10, col: 4
      }
    ],
    weapon_hp: 200,
    weapon_drop_hurt: 35,
    weapon_hit_sound: "1/023",
    weapon_drop_sound: "1/023",
    weapon_broken_sound: "1/066"
  },
  weapon_strength_list: {
    1: {
      entry: "normal", dvx: 2, fall: 40, vrest: 10, bdefend: 16, injury: 30, effect: 3
    },
    2: {
      entry: "jump", dvx: 7, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 3
    },
    3: {
      entry: "run", dvx: 10, fall: 70, vrest: 10, bdefend: 16, injury: 40, effect: 3
    },
    4: {
      entry: "dash", dvx: 12, fall: 70, vrest: 20, bdefend: 60, injury: 40, effect: 3
    }
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 1000, wait: 0, next: 1, dvx: 0, dvy: 0, centerx: 35, centery: 59, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 13, y: 18, w: 46, h: 43
    }
  },
  1: { name: "in_the_sky",
    pic: 1, state: 1000, wait: 0, next: 2, dvx: 0, dvy: 0, centerx: 32, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 10, y: 16, w: 46, h: 45
    }
  },
  2: { name: "in_the_sky",
    pic: 2, state: 1000, wait: 0, next: 3, dvx: 0, dvy: 0, centerx: 29, centery: 59, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 14, y: 21, w: 39, h: 43
    }
  },
  3: { name: "in_the_sky",
    pic: 3, state: 1000, wait: 0, next: 4, dvx: 0, dvy: 0, centerx: 33, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 18, y: 16, w: 40, h: 38
    }
  },
  4: { name: "in_the_sky",
    pic: 4, state: 1000, wait: 0, next: 5, dvx: 0, dvy: 0, centerx: 32, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 12, y: 14, w: 51, h: 41
    }
  },
  5: { name: "in_the_sky",
    pic: 5, state: 1000, wait: 0, next: 6, dvx: 0, dvy: 0, centerx: 29, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 11, y: 18, w: 44, h: 40
    }
  },
  6: { name: "in_the_sky",
    pic: 6, state: 1000, wait: 0, next: 7, dvx: 0, dvy: 0, centerx: 31, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 17, y: 22, w: 41, h: 38
    }
  },
  7: { name: "in_the_sky",
    pic: 7, state: 1000, wait: 0, next: 8, dvx: 0, dvy: 0, centerx: 36, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 24, w: 34, h: 38
    }
  },
  8: { name: "in_the_sky",
    pic: 8, state: 1000, wait: 0, next: 9, dvx: 0, dvy: 0, centerx: 35, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 17, y: 9, w: 38, h: 47
    }
  },
  9: { name: "in_the_sky",
    pic: 9, state: 1000, wait: 0, next: 10, dvx: 0, dvy: 0, centerx: 33, centery: 60, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 36, h: 44
    }
  },
  10: { name: "in_the_sky",
    pic: 10, state: 1000, wait: 0, next: 11, dvx: 0, dvy: 0, centerx: 35, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 17, y: 17, w: 36, h: 41
    }
  },
  11: { name: "in_the_sky",
    pic: 11, state: 1000, wait: 0, next: 12, dvx: 0, dvy: 0, centerx: 37, centery: 61, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 19, y: 22, w: 36, h: 36
    }
  },
  12: { name: "in_the_sky",
    pic: 12, state: 1000, wait: 0, next: 13, dvx: 0, dvy: 0, centerx: 36, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 15, y: 18, w: 39, h: 32
    }
  },
  13: { name: "in_the_sky",
    pic: 13, state: 1000, wait: 0, next: 14, dvx: 0, dvy: 0, centerx: 34, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 13, y: 19, w: 44, h: 37
    }
  },
  14: { name: "in_the_sky",
    pic: 14, state: 1000, wait: 0, next: 15, dvx: 0, dvy: 0, centerx: 36, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 25, y: 21, w: 34, h: 37
    }
  },
  15: { name: "in_the_sky",
    pic: 15, state: 1000, wait: 0, next: 999, dvx: 0, dvy: 0, centerx: 37, centery: 61, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 26, w: 32, h: 34
    }
  },
  20: { name: "on_hand",
    pic: 20, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 35, centery: 59, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 34, y: 66, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 29, y: 1, w: 15, h: 78, fall: 20, bdefend: 16, injury: 789
    }
  },
  21: { name: "on_hand",
    pic: 21, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 33, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 26, y: 63, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 38, y: 5, w: 18, h: 34, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 20, y: 35, w: 22, h: 40, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  22: { name: "on_hand",
    pic: 22, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 29, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 16, y: 57, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 8, y: 44, w: 28, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 40, y: 9, w: 21, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 26, y: 26, w: 22, h: 21, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  23: { name: "on_hand",
    pic: 23, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 32, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 12, y: 49, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 44, y: 23, w: 25, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 25, y: 31, w: 27, h: 14, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 3, y: 40, w: 28, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  24: { name: "on_hand",
    pic: 24, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 35, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 8, y: 38, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: -3, y: 32, w: 73, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  25: { name: "on_hand",
    pic: 25, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 32, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 10, y: 29, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 2, y: 20, w: 31, h: 18, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 29, y: 34, w: 38, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  26: { name: "on_hand",
    pic: 26, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 29, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 14, y: 17, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 24, y: 27, w: 19, h: 23, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 35, y: 42, w: 26, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 7, y: 12, w: 26, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  27: { name: "on_hand",
    pic: 27, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 33, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 26, y: 12, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 17, y: 2, w: 25, h: 33, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 30, y: 30, w: 25, h: 41, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  28: { name: "on_hand",
    pic: 28, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 34, centery: 50, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 35, y: 5, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: 26, y: -9, w: 18, h: 78, dvx: 8, fall: 20, bdefend: 16, injury: 789
    }
  },
  29: { name: "on_hand",
    pic: 29, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 33, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 44, y: 13, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 32, y: 2, w: 21, h: 34, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 22, y: 29, w: 18, h: 45, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  30: { name: "on_hand",
    pic: 30, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 33, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 54, y: 20, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 9, y: 43, w: 25, h: 22, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 37, y: 11, w: 27, h: 19, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 28, y: 25, w: 21, h: 20, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  31: { name: "on_hand",
    pic: 31, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 32, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 61, y: 31, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 30, y: 27, w: 44, h: 15, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 2, y: 39, w: 42, h: 17, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  32: { name: "on_hand",
    pic: 32, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 29, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 62, y: 38, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 5, x: -3, y: 27, w: 76, h: 19
    }
  },
  33: { name: "on_hand",
    pic: 33, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 33, centery: 55, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 61, y: 48, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 2, y: 20, w: 38, h: 20, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 27, y: 30, w: 45, h: 28, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  34: { name: "on_hand",
    pic: 34, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 34, centery: 51, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 54, y: 57, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 33, y: 37, w: 35, h: 29, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 7, y: 10, w: 25, h: 24, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 20, y: 25, w: 26, h: 18, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  35: { name: "on_hand",
    pic: 35, state: 1001, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 34, centery: 53, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 47, y: 63, weaponact: 0, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 5, x: 17, y: 3, w: 22, h: 32, dvx: 8, fall: 20, bdefend: 16, injury: 789
      },
      {
        kind: 5, x: 30, y: 30, w: 26, h: 44, dvx: 8, fall: 20, bdefend: 16, injury: 789
      }
    ]
  },
  40: { name: "throwing",
    pic: 0, state: 1002, wait: 0, next: 41, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  41: { name: "throwing",
    pic: 1, state: 1002, wait: 0, next: 42, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  42: { name: "throwing",
    pic: 2, state: 1002, wait: 0, next: 43, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  43: { name: "throwing",
    pic: 3, state: 1002, wait: 0, next: 44, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  44: { name: "throwing",
    pic: 4, state: 1002, wait: 0, next: 45, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  45: { name: "throwing",
    pic: 5, state: 1002, wait: 0, next: 46, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  46: { name: "throwing",
    pic: 6, state: 1002, wait: 0, next: 47, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  47: { name: "throwing",
    pic: 7, state: 1002, wait: 0, next: 48, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  48: { name: "throwing",
    pic: 8, state: 1002, wait: 0, next: 49, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  49: { name: "throwing",
    pic: 9, state: 1002, wait: 0, next: 50, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  50: { name: "throwing",
    pic: 10, state: 1002, wait: 0, next: 51, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  51: { name: "throwing",
    pic: 11, state: 1002, wait: 0, next: 52, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  52: { name: "throwing",
    pic: 12, state: 1002, wait: 0, next: 53, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  53: { name: "throwing",
    pic: 13, state: 1002, wait: 0, next: 54, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  54: { name: "throwing",
    pic: 14, state: 1002, wait: 0, next: 55, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  55: { name: "throwing",
    pic: 15, state: 1002, wait: 0, next: 40, dvx: 0, dvy: 0, centerx: 35, centery: 58, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 16, w: 49, h: 47, dvx: 8, fall: 70, bdefend: 16, injury: 40, effect: 3
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 49, h: 49
    }
  },
  60: { name: "on_ground",
    pic: 2, state: 1003, wait: 1, next: 61, dvx: 0, dvy: 0, centerx: 36, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/023"
  },
  61: { name: "on_ground",
    pic: 5, state: 1003, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 31, centery: 43, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "on_ground",
    pic: 3, state: 1003, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 34, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/023"
  },
  63: { name: "on_ground",
    pic: 5, state: 1003, wait: 1, next: 64, dvx: 0, dvy: 0, centerx: 32, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0
  },
  64: { name: "on_ground",
    pic: 4, state: 1004, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 35, centery: 41, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 3, y: 31, w: 72, h: 17
    }
  },
  70: { name: "just_on_ground",
    pic: 2, state: 1003, wait: 1, next: 71, dvx: 0, dvy: 0, centerx: 37, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/023",
    itr: {
      kind: 0, x: 16, y: 15, w: 39, h: 46, dvx: 2, fall: 40, arest: 16, bdefend: 16
    }
  },
  71: { name: "just_on_on_ground",
    pic: 5, state: 1003, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 33, centery: 45, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 7, y: 31, w: 51, h: 21, dvx: 2, fall: 40, arest: 16, bdefend: 16
    }
  },
  72: { name: "just_on_on_ground",
    pic: 3, state: 1003, wait: 2, next: 64, dvx: 0, dvy: 0, centerx: 35, centery: 46, hit_a: 0, hit_d: 0, hit_j: 0, sound: "1/023",
    itr: {
      kind: 0, x: 10, y: 29, w: 52, h: 23, dvx: 2, fall: 40, arest: 16, bdefend: 16
    }
  },
  399: { name: "dummy",
    pic: 4, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, centerx: 30, centery: 44, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  }
  }
});
