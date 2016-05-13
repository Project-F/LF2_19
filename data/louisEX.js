define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/louisEX_0.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/louisEX_1.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-209)": "sprite/louisEX_2.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(210-251)": "sprite/louisEX_3.png", w: 118, h: 79, row: 6, col: 7
      },
      {
        "file(252-252)": "sprite/louisEX_4.png", w: 79, h: 124, row: 1, col: 1
      }
    ],
    name: "LouisEX",
    head: "sprite/louisEX_f.png",
    small: "sprite/louisEX_s.png",
    walking_frame_rate: 3,
    walking_speed: 6.2,
    walking_speedz: 2.6,
    running_frame_rate: 3,
    running_speed: 14,
    running_speedz: 1.7,
    heavy_walking_speed: 5,
    heavy_walking_speedz: 2.5,
    heavy_running_speed: 12,
    heavy_running_speedz: 1.6,
    jump_height: -18.699999,
    jump_distance: 14,
    jump_distancez: 3.75,
    dash_height: -13.8,
    dash_distance: 20,
    dash_distancez: 5,
    rowing_height: -2,
    rowing_distance: 6
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 9, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 35
    },
    wpoint: {
      kind: 1, x: 20, y: 51, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 37, h: 68
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 20, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 8, w: 39, h: 70
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 6, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 20, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 8, w: 38, h: 70
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 20, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 7, w: 40, h: 71
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 35
    },
    wpoint: {
      kind: 1, x: 20, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 8, y: 8, w: 37, h: 71
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 20, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 35, h: 70
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 20, y: 48, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 35, h: 69
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 20, y: 48, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 9, y: 8, w: 36, h: 70
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bpoint: {
      x: 38, y: 39
    },
    wpoint: {
      kind: 1, x: 14, y: 50, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 46, y: 37, w: 33, h: 26, dvx: 13, fall: 40, vrest: 11, bdefend: 20, injury: 15, effect: 1
    },
    bdy: {
      kind: 0, x: 6, y: 10, w: 44, h: 69
    }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 38, y: 39
    },
    wpoint: {
      kind: 1, x: 14, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 46, y: 37, w: 33, h: 26, dvx: 13, fall: 40, vrest: 11, bdefend: 20, injury: 15, effect: 1
    },
    bdy: {
      kind: 0, x: 7, y: 9, w: 41, h: 71
    }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bpoint: {
      x: 38, y: 39
    },
    wpoint: {
      kind: 1, x: 14, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 46, y: 37, w: 33, h: 26, dvx: 13, fall: 40, vrest: 11, bdefend: 20, injury: 15, effect: 1
    },
    bdy: {
      kind: 0, x: 7, y: 11, w: 37, h: 69
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 30, y: 35
    },
    wpoint: {
      kind: 1, x: 19, y: 17, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 41, h: 71
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 30, y: 35
    },
    wpoint: {
      kind: 1, x: 19, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 6, y: 6, w: 40, h: 73
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 19, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 6, w: 41, h: 74
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 30, y: 34
    },
    wpoint: {
      kind: 1, x: 19, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 10, w: 32, h: 68
    }
  },
  16: { name: "heavy_obj_run",
    pic: 125, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bpoint: {
      x: 30, y: 36
    },
    wpoint: {
      kind: 1, x: 22, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 11, w: 34, h: 71
    }
  },
  17: { name: "heavy_obj_run",
    pic: 126, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 16, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 29, y: 36
    },
    wpoint: {
      kind: 1, x: 21, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 7, w: 29, h: 73
    }
  },
  18: { name: "heavy_obj_run",
    pic: 127, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 17, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bpoint: {
      x: 29, y: 36
    },
    wpoint: {
      kind: 1, x: 21, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 8, w: 33, h: 71
    }
  },
  19: { name: "heavy_stop_run",
    pic: 128, state: 15, wait: 4, next: 999, dvx: 2, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    bpoint: {
      x: 30, y: 35
    },
    wpoint: {
      kind: 1, x: 18, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 39, h: 69
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 1, next: 22, dvx: 4, dvy: 0, dvz: 0, centerx: 25, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 13, y: 18, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 8, w: 35, h: 70
    }
  },
  22: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 53, y: 53, weaponact: 23, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 12, w: 33, h: 68
    }
  },
  23: { name: "normal_weapon_atck",
    pic: 73, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 56, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 10, w: 31, h: 70
      },
      {
        kind: 0, x: 25, y: 61, w: 17, h: 18
      }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 74, state: 3, wait: 1, next: 27, dvx: 4, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 39, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 16, w: 29, h: 63
    }
  },
  27: { name: "normal_weapon_atck",
    pic: 76, state: 3, wait: 1, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 50, y: 55, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 12, w: 31, h: 66
    }
  },
  28: { name: "normal_weapon_atck",
    pic: 77, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 10, y: 51, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 14, w: 29, h: 67
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 80, state: 3, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 14, y: 11, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 6, y: 4, w: 33, h: 68
    }
  },
  32: { name: "jump_weapon_atck",
    pic: 82, state: 3, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 53, y: 47, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 32, w: 33, h: 43
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  33: { name: "jump_weapon_atck",
    pic: 83, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 19, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 49, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 32, w: 33, h: 43
      },
      {
        kind: 0, x: 26, y: 9, w: 26, h: 37
      }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 84, state: 3, wait: 1, next: 37, dvx: 6, dvy: 0, dvz: 0, centerx: 25, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 12, y: 19, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 15, w: 31, h: 65
    }
  },
  37: { name: "run_weapon_atck",
    pic: 86, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 62, y: 55, weaponact: 24, attacking: 3, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 17, w: 34, h: 64
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 90, state: 3, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 12, y: 14, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 6, y: 0, w: 36, h: 71
    }
  },
  42: { name: "dash_weapon_atck",
    pic: 92, state: 3, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 53, y: 47, weaponact: 24, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 16, y: 33, w: 30, h: 41
      },
      {
        kind: 0, x: 27, y: 13, w: 30, h: 33
      }
    ]
  },
  43: { name: "dash_weapon_atck",
    pic: 93, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 48, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 18, y: 44, w: 29, h: 30
      },
      {
        kind: 0, x: 23, y: 13, w: 31, h: 37
      }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 94, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 12, y: 19, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 15, w: 34, h: 65
      },
      {
        kind: 0, x: 9, y: 36, w: 17, h: 18
      }
    ]
  },
  47: { name: "light_weapon_thw",
    pic: 96, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 109, y: 60, weaponact: 35, attacking: 0, cover: 0, dvx: 29, dvy: -4, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 37, y: 11, w: 34, h: 57
      },
      {
        kind: 0, x: 17, y: 46, w: 37, h: 29
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 27, state: 15, wait: 2, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 14, y: 16, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 7, w: 40, h: 71
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 28, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 100, y: 27, weaponact: 10, attacking: 0, cover: 0, dvx: 21, dvy: -4, dvz: 2
    },
    bdy: [
      {
        kind: 0, x: 18, y: 50, w: 37, h: 27
      },
      {
        kind: 0, x: 31, y: 11, w: 42, h: 48
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 3, next: 54, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 12, y: 11, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 9, w: 29, h: 54
    }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 99, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 75, y: 65, weaponact: 23, attacking: 0, cover: 0, dvx: 16, dvy: 8, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 22, y: 15, w: 38, h: 38
      },
      {
        kind: 0, x: 15, y: 45, w: 29, h: 26
      }
    ]
  },
  55: { name: "weapon_drink",
    pic: 137, state: 17, wait: 3, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/042",
    wpoint: {
      kind: 1, x: 55, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 12, w: 37, h: 67
    }
  },
  56: { name: "weapon_drink",
    pic: 138, state: 17, wait: 3, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 25, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 20, w: 36, h: 59
    }
  },
  57: { name: "weapon_drink",
    pic: 139, state: 17, wait: 3, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 25, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 17, w: 32, h: 63
    }
  },
  58: { name: "weapon_drink",
    pic: 138, state: 17, wait: 3, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 13, w: 36, h: 65
    }
  },
  60: { name: "punch",
    pic: 210, state: 3, wait: 1, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 7
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  61: { name: "punch",
    pic: 211, state: 3, wait: 1, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 28, y: 27, w: 84, h: 24, dvx: 2, fall: 25, bdefend: 30, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 12, y: 9, w: 52, h: 68
    }
  },
  62: { name: "punch",
    pic: 212, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 11, y: 8, w: 54, h: 68
    }
  },
  65: { name: "punch",
    pic: 213, state: 3, wait: 1, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 16, y: 59, w: 35, h: 21, vrest: 7
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  66: { name: "punch",
    pic: 214, state: 3, wait: 1, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 25, y: 41, w: 87, h: 28, dvx: 2, fall: 25, bdefend: 30, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 11, y: 10, w: 50, h: 70
    }
  },
  67: { name: "punch",
    pic: 215, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 11, y: 10, w: 49, h: 67
    }
  },
  70: { name: "super_punch",
    pic: 153, state: 9, wait: 2, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 58, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 13, y: 30, w: 57, h: 28
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  75: { name: "run_attack",
    pic: 15, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 9, w: 41, h: 71
    }
  },
  80: { name: "up_spear",
    pic: 222, state: 9, wait: 2, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 30, y: 5, w: 86, h: 49, dvx: 14, fall: 70, vrest: 12, bdefend: 60, injury: 70, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 13, y: 9, w: 45, h: 47
      },
      {
        kind: 0, x: 15, y: 53, w: 47, h: 26
      }
    ]
  },
  81: { name: "up_spear",
    pic: 223, state: 9, wait: 2, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 25, y: 21, w: 84, h: 60, dvx: 14, fall: 70, vrest: 12, bdefend: 60, injury: 70, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 12, y: 13, w: 42, h: 41
      },
      {
        kind: 0, x: 3, y: 46, w: 51, h: 33
      }
    ]
  },
  82: { name: "up_spear",
    pic: 224, state: 9, wait: 2, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 60, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -2, y: 43, w: 41, h: 35, dvx: -7, fall: 70, vrest: 12, bdefend: 60, injury: 55
    },
    bdy: [
      {
        kind: 0, x: 46, y: 10, w: 46, h: 45
      },
      {
        kind: 0, x: 39, y: 54, w: 47, h: 26
      }
    ]
  },
  83: { name: "up_spear",
    pic: 225, state: 9, wait: 3, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 63, y: 50, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 5, w: 43, h: 75
    }
  },
  84: { name: "up_spear",
    pic: 226, state: 9, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 56, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 63, y: 47, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 8, w: 38, h: 71
    }
  },
  85: { name: "run_attack",
    pic: 10, state: 3, wait: 2, next: 86, dvx: 6, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, mp: 30,
    sound: "1/031",
    bdy: {
      kind: 0, x: 18, y: 11, w: 40, h: 68
    }
  },
  86: { name: "run_attack",
    pic: 11, state: 3, wait: 1, next: 87, dvx: 4, dvy: 0, dvz: 0, centerx: 29, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 12, y: 5, w: 37, h: 74
    }
  },
  87: { name: "run_attack",
    pic: 12, state: 3, wait: 2, next: 88, dvx: 16, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 12, y: 19, w: 68, h: 41, dvx: 26, fall: 70, vrest: 10, bdefend: 60, injury: 80
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 48, h: 70
    }
  },
  88: { name: "run_attack",
    pic: 13, state: 3, wait: 1, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 25, w: 58, h: 34, dvx: 22, fall: 70, vrest: 10, bdefend: 60, injury: 70
    },
    bdy: {
      kind: 0, x: 16, y: 8, w: 40, h: 70
    }
  },
  89: { name: "run_attack",
    pic: 14, state: 3, wait: 2, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 16, y: 9, w: 41, h: 71
    }
  },
  90: { name: "dash_attack",
    pic: 132, state: 15, wait: 2, next: 92, dvx: -2, dvy: 0, dvz: 0, centerx: 30, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0, mp: 40,
    sound: "1/031",
    bdy: [
      {
        kind: 0, x: 19, y: 8, w: 27, h: 61
      },
      {
        kind: 0, x: 11, y: 31, w: 43, h: 22
      }
    ]
  },
  91: { name: "dash_attack",
    pic: 132, state: 15, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 19, y: 16, w: 28, h: 53
      },
      {
        kind: 0, x: 10, y: 32, w: 46, h: 20
      }
    ]
  },
  92: { name: "dash_attack",
    pic: 133, state: 15, wait: 1, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 27, y: 11, w: 25, h: 55
      },
      {
        kind: 0, x: 22, y: 25, w: 39, h: 31
      }
    ]
  },
  93: { name: "dash_attack",
    pic: 134, state: 100, wait: 90, next: 216, dvx: 25, dvy: 2, dvz: 0, centerx: 19, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 28, y: 34, w: 57, h: 45, dvx: 14, dvy: 5, fall: 70, vrest: 8, bdefend: 60, injury: 85
    },
    bdy: [
      {
        kind: 0, x: 29, y: 19, w: 39, h: 45
      },
      {
        kind: 0, x: 16, y: 38, w: 36, h: 29
      }
    ]
  },
  94: { name: "dash_attack",
    pic: 135, state: 15, wait: 2, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 42, y: 24, w: 32, h: 52
      },
      {
        kind: 0, x: 18, y: 50, w: 47, h: 28
      }
    ]
  },
  95: { name: "dash_attack",
    pic: 136, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 38, y: 24, w: 24, h: 55
      },
      {
        kind: 0, x: 15, y: 46, w: 34, h: 32
      }
    ]
  },
  100: { name: "rowing",
    pic: 66, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 36, y: 42, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  101: { name: "rowing",
    pic: 65, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 71, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  102: { name: "rowing",
    pic: 58, state: 6, wait: 2, next: 103, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 75, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 7
    }
  },
  103: { name: "rowing",
    pic: 59, state: 6, wait: 2, next: 104, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 45, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 7
    }
  },
  104: { name: "rowing",
    pic: 49, state: 6, wait: 2, next: 105, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 68, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 34, y: 41, w: 13, h: 26, vrest: 7
    }
  },
  105: { name: "rowing",
    pic: 58, state: 6, wait: 2, next: 219, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 74, weaponact: 22, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 7
    }
  },
  106: { name: "rowing",
    pic: 59, state: 6, wait: 2, next: 219, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 7
    }
  },
  107: { name: "rowing",
    pic: 49, state: 6, wait: 2, next: 219, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 67, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 34, y: 47, w: 12, h: 22, vrest: 7
    }
  },
  108: { name: "rowing",
    pic: 117, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 37, y: 34, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  109: { name: "rowing",
    pic: 118, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 44, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 56, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    wpoint: {
      kind: 1, x: 43, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 19, w: 38, h: 60
    }
  },
  111: { name: "defend",
    pic: 57, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Da: 240,
    wpoint: {
      kind: 1, x: 42, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 19, w: 42, h: 60
    }
  },
  112: { name: "broken_defend",
    pic: 46, state: 8, wait: 2, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 5, y: 36, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 7
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  113: { name: "broken_defend",
    pic: 47, state: 8, wait: 2, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 14, y: 54, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 7
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  114: { name: "broken_defend",
    pic: 48, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 50, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 7
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  115: { name: "picking_light",
    pic: 36, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 28, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 18, y: 42, w: 34, h: 43
      },
      {
        kind: 0, x: 16, y: 19, w: 33, h: 25
      }
    ]
  },
  116: { name: "picking_heavy",
    pic: 36, state: 15, wait: 1, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 15, y: 47, w: 36, h: 31
      },
      {
        kind: 0, x: 13, y: 17, w: 40, h: 38
      }
    ]
  },
  117: { name: "picking_heavy",
    pic: 36, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 70, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 10, y: 16, w: 37, h: 37
      },
      {
        kind: 0, x: 13, y: 52, w: 32, h: 28
      }
    ]
  },
  120: { name: "catching",
    pic: 51, state: 9, wait: 1, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 60, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: -260,
    cpoint: {
      kind: 1, x: 60, y: 39, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 65, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 51, state: 9, wait: 4, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 60, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 52, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 64, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 5, w: 32, h: 71
    }
  },
  130: { name: "picked_caught",
    pic: 54, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 39, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 46, y: 48, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  131: { name: "picked_caught",
    pic: 53, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 43, y: 39, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 22, y: 56, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  132: { name: "picked_caught",
    pic: 55, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 41, y: 39, fronthurtact: 131, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 44, y: 47, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  133: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 35, y: 36
    },
    wpoint: {
      kind: 1, x: 35, y: 48, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 37, y: 35
    },
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 31, y: 34
    },
    wpoint: {
      kind: 1, x: 34, y: 44, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 38, y: 58
    },
    wpoint: {
      kind: 1, x: 36, y: 38, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  137: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 64
    },
    wpoint: {
      kind: 1, x: 36, y: 75, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  138: { name: "picked_caught",
    pic: 35, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 28, y: 58
    },
    wpoint: {
      kind: 1, x: 33, y: 70, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  139: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 40, y: 36
    },
    wpoint: {
      kind: 1, x: 44, y: 42, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 41, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 38
    },
    wpoint: {
      kind: 1, x: 43, y: 47, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 42, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 36, y: 52, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 43, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 38, y: 61, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  143: { name: "picked_caught",
    pic: 44, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 66
    },
    wpoint: {
      kind: 1, x: 47, y: 73, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 45, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 48, y: 65, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 21, y: 14, w: 29, h: 44, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 25, y: 25, w: 21, h: 20
    }
  },
  181: { name: "falling",
    pic: 31, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 39, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 15, y: 11, w: 42, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 35, y: 30, w: 27, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 22, y: 20, w: 24, h: 23
    }
  },
  182: { name: "falling",
    pic: 32, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 51, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 20, h: 18
    }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 34, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 25, y: 40, w: 26, h: 20, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 22, y: 30, w: 27, h: 21
    }
  },
  184: { name: "falling",
    pic: 34, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  185: { name: "falling",
    pic: 35, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 63, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 38, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 12, w: 36, h: 50, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 31, y: 24, w: 25, h: 23
    }
  },
  187: { name: "falling",
    pic: 41, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 49, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 33, y: 6, w: 26, h: 46, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 26, y: 43, w: 21, h: 29, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 28, y: 27, w: 24, h: 26
    }
  },
  188: { name: "falling",
    pic: 42, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 53, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 14, y: 29, w: 58, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 30, y: 31, w: 24, h: 21
    }
  },
  189: { name: "falling",
    pic: 43, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 62, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 24, y: 27, w: 26, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 37, y: 45, w: 31, h: 28, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 30, y: 39, w: 23, h: 21
    }
  },
  190: { name: "falling",
    pic: 44, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 76, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  191: { name: "falling",
    pic: 45, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 49, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  200: { name: "ice",
    pic: 8, state: 15, wait: 2, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 55, h: 68
    }
  },
  201: { name: "ice",
    pic: 9, state: 13, wait: 90, next: 202, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 48, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 14, x: 8, y: 6, w: 67, h: 73, vrest: 1
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    }
  },
  202: { name: "ice",
    pic: 8, state: 15, wait: 1, next: 182, dvx: -4, dvy: -3, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    }
  },
  203: { name: "fire",
    pic: 78, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 70, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  204: { name: "fire",
    pic: 79, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 70, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  205: { name: "fire",
    pic: 88, state: 18, wait: 1, next: 206, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 70, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  206: { name: "fire",
    pic: 89, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 70, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  207: { name: "tired",
    pic: 69, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 64, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 44, y: 28, w: 22, h: 37
      },
      {
        kind: 0, x: 28, y: 47, w: 28, h: 35
      }
    ]
  },
  210: { name: "jump",
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 29, y: 68, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 23, w: 30, h: 59
    }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 29, y: 68, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 20, w: 31, h: 61
    }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 37, y: 26
    },
    wpoint: {
      kind: 1, x: 16, y: 44, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 13, y: -2, w: 29, h: 76
      },
      {
        kind: 0, x: 18, y: 29, w: 48, h: 17
      }
    ]
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 38, y: 31
    },
    wpoint: {
      kind: 1, x: 14, y: 41, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 0, w: 36, h: 29
      },
      {
        kind: 0, x: 11, y: 29, w: 40, h: 24
      },
      {
        kind: 0, x: 9, y: 49, w: 27, h: 28
      }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 30, y: 31
    },
    wpoint: {
      kind: 1, x: 17, y: 52, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 15, y: 4, w: 37, h: 46
      },
      {
        kind: 0, x: 25, y: 37, w: 27, h: 32
      }
    ]
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    bpoint: {
      x: 32, y: 45
    },
    wpoint: {
      kind: 1, x: 26, y: 72, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 31, h: 54
    }
  },
  216: { name: "dash",
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 39, y: 30
    },
    wpoint: {
      kind: 1, x: 16, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 35, y: 8, w: 27, h: 27
      },
      {
        kind: 0, x: 16, y: 30, w: 39, h: 37
      }
    ]
  },
  217: { name: "dash",
    pic: 113, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 30, y: 29
    },
    wpoint: {
      kind: 1, x: 16, y: 47, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 13, w: 29, h: 51
    }
  },
  218: { name: "stop_running",
    pic: 114, state: 15, wait: 3, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    bpoint: {
      x: 39, y: 38
    },
    wpoint: {
      kind: 1, x: 16, y: 50, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 11, w: 44, h: 71
    }
  },
  219: { name: "crouch2",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 28, y: 71, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  220: { name: "injured",
    pic: 120, state: 11, wait: 2, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 27, y: 58, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 17, w: 29, h: 61
    }
  },
  221: { name: "injured",
    pic: 121, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 53, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 32, y: 16, w: 27, h: 63
      },
      {
        kind: 0, x: 22, y: 37, w: 26, h: 42
      }
    ]
  },
  222: { name: "injured",
    pic: 123, state: 11, wait: 2, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 47, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 11, y: 24, w: 39, h: 31
      },
      {
        kind: 0, x: 25, y: 53, w: 40, h: 27
      }
    ]
  },
  223: { name: "injured",
    pic: 124, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 56, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 12, y: 23, w: 40, h: 37
      },
      {
        kind: 0, x: 27, y: 56, w: 36, h: 24
      }
    ]
  },
  224: { name: "injured",
    pic: 130, state: 11, wait: 2, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 46, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 32, y: 18, w: 28, h: 60
      },
      {
        kind: 0, x: 52, y: 38, w: 20, h: 19
      }
    ]
  },
  225: { name: "injured",
    pic: 131, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 52, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 120, state: 16, wait: 6, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 24, y: 57, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 7
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 42, h: 58
    }
  },
  227: { name: "injured",
    pic: 122, state: 16, wait: 6, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 53, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 7
    },
    bdy: {
      kind: 0, x: 28, y: 24, w: 39, h: 57
    }
  },
  228: { name: "injured",
    pic: 121, state: 16, wait: 6, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 51, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 7
    },
    bdy: {
      kind: 0, x: 28, y: 23, w: 37, h: 58
    }
  },
  229: { name: "injured",
    pic: 122, state: 16, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 54, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 7
    },
    bdy: {
      kind: 0, x: 29, y: 26, w: 37, h: 53
    }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  231: { name: "lying",
    pic: 44, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  232: { name: "throw_lying_man",
    pic: 27, state: 9, wait: 3, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 28, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 5, y: 14, w: 42, h: 63
    }
  },
  233: { name: "throw_lying_man",
    pic: 28, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 19, throwvy: -10, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 8, w: 40, h: 52
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 28, state: 9, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 25, y: 15, w: 39, h: 46
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  239: { name: "up_spear",
    pic: 252, state: 9, wait: 1, next: 250, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 124, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 96, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 20, y: 19, w: 86, h: 62, dvx: 2, dvy: -10, fall: 70, vrest: 75, bdefend: 60, injury: 60, effect: 1
      },
      {
        kind: 0, x: 75, y: 59, w: 11, h: 64, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
      }
    ],
    bdy: {
      kind: 0, x: 28, y: 58, w: 43, h: 65
    }
  },
  240: { name: "up_spear",
    pic: 140, state: 9, wait: 1, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/097",
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
    },
    bdy: [
      {
        kind: 0, x: 12, y: 7, w: 41, h: 50
      },
      {
        kind: 0, x: 14, y: 54, w: 30, h: 28
      }
    ]
  },
  241: { name: "up_spear",
    pic: 141, state: 9, wait: 1, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
    },
    bdy: {
      kind: 0, x: 13, y: 10, w: 34, h: 70
    }
  },
  242: { name: "up_spear",
    pic: 142, state: 9, wait: 1, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 11, y: 31, w: 68, h: 39, dvx: 2, dvy: -13, fall: 60, vrest: 9, bdefend: 60, injury: 40
      },
      {
        kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
      }
    ],
    bdy: [
      {
        kind: 0, x: 11, y: 7, w: 33, h: 49
      },
      {
        kind: 0, x: 13, y: 55, w: 29, h: 26
      }
    ]
  },
  243: { name: "up_spear",
    pic: 143, state: 9, wait: 1, next: 244, dvx: 2, dvy: 0, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 7, y: 1, w: 64, h: 56, dvx: 2, dvy: -13, fall: 60, vrest: 9, bdefend: 60, injury: 40
      },
      {
        kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
      }
    ],
    bdy: [
      {
        kind: 0, x: 6, y: 8, w: 38, h: 50
      },
      {
        kind: 0, x: 12, y: 51, w: 29, h: 27
      }
    ]
  },
  244: { name: "up_spear",
    pic: 144, state: 9, wait: 1, next: 245, dvx: 2, dvy: 0, dvz: 0, centerx: 31, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
    },
    bdy: [
      {
        kind: 0, x: 16, y: 7, w: 35, h: 48
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  245: { name: "up_spear",
    pic: 145, state: 9, wait: 1, next: 246, dvx: 2, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
    },
    bdy: [
      {
        kind: 0, x: 22, y: 7, w: 42, h: 55
      },
      {
        kind: 0, x: 30, y: 52, w: 28, h: 27
      }
    ]
  },
  246: { name: "up_spear",
    pic: 146, state: 9, wait: 1, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
    },
    bdy: [
      {
        kind: 0, x: 30, y: 10, w: 35, h: 46
      },
      {
        kind: 0, x: 28, y: 55, w: 44, h: 23
      }
    ]
  },
  247: { name: "up_spear",
    pic: 147, state: 9, wait: 1, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 41, y: 50, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
      },
      {
        kind: 0, x: -4, y: 1, w: 26, h: 41, dvx: -6, fall: 70, vrest: 12, bdefend: 60, injury: 30, effect: 1
      }
    ],
    bdy: [
      {
        kind: 0, x: 10, y: 8, w: 37, h: 50
      },
      {
        kind: 0, x: 9, y: 54, w: 46, h: 26
      }
    ]
  },
  248: { name: "up_spear",
    pic: 148, state: 9, wait: 1, next: 249, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 50, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
      },
      {
        kind: 0, x: -2, y: 22, w: 38, h: 46, dvx: -6, fall: 70, vrest: 12, bdefend: 60, injury: 30, effect: 1
      }
    ],
    bdy: [
      {
        kind: 0, x: 24, y: 14, w: 45, h: 42
      },
      {
        kind: 0, x: 20, y: 52, w: 47, h: 27
      }
    ]
  },
  249: { name: "up_spear",
    pic: 149, state: 9, wait: 1, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 27, y: 50, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
      },
      {
        kind: 0, x: 3, y: 0, w: 79, h: 72, dvx: 2, dvy: -10, fall: 70, vrest: 12, bdefend: 60, injury: 60, effect: 1
      }
    ],
    bdy: [
      {
        kind: 0, x: 3, y: 11, w: 34, h: 43
      },
      {
        kind: 0, x: 1, y: 52, w: 43, h: 30
      }
    ]
  },
  250: { name: "up_spear",
    pic: 150, state: 9, wait: 1, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 59, y: 50, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 0, x: 60, y: 8, w: 14, h: 70, dvx: 12, fall: 70, vrest: 7, bdefend: 16, injury: 45, effect: 4
      },
      {
        kind: 0, x: 6, y: 1, w: 40, h: 73, dvx: -6, fall: 70, vrest: 12, bdefend: 60, injury: 30, effect: 1
      }
    ],
    bdy: [
      {
        kind: 0, x: 33, y: 13, w: 32, h: 48
      },
      {
        kind: 0, x: 22, y: 54, w: 55, h: 26
      }
    ]
  },
  251: { name: "up_spear",
    pic: 151, state: 9, wait: 1, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 16, y: 13, w: 39, h: 43
      },
      {
        kind: 0, x: 23, y: 54, w: 36, h: 26
      }
    ]
  },
  252: { name: "up_spear",
    pic: 152, state: 9, wait: 1, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 19, y: 13, w: 33, h: 50
      },
      {
        kind: 0, x: 15, y: 59, w: 47, h: 20
      }
    ]
  },
  253: { name: "up_spear",
    pic: 153, state: 9, wait: 1, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 59, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 37, y: 13, w: 36, h: 43
      },
      {
        kind: 0, x: 33, y: 52, w: 41, h: 27
      }
    ]
  },
  254: { name: "up_spear",
    pic: 216, state: 9, wait: 1, next: 255, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/054",
    wpoint: {
      kind: 1, x: 40, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 30, y: 5, w: 86, h: 49, dvx: 14, fall: 70, vrest: 12, bdefend: 60, injury: 70, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 13, y: 9, w: 45, h: 47
      },
      {
        kind: 0, x: 15, y: 53, w: 47, h: 26
      }
    ]
  },
  255: { name: "up_spear",
    pic: 217, state: 9, wait: 1, next: 256, dvx: 2, dvy: 0, dvz: 0, centerx: 22, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 25, y: 21, w: 84, h: 60, dvx: 14, fall: 70, vrest: 12, bdefend: 60, injury: 70, effect: 1
    },
    bdy: [
      {
        kind: 0, x: 12, y: 13, w: 42, h: 41
      },
      {
        kind: 0, x: 3, y: 46, w: 51, h: 33
      }
    ]
  },
  256: { name: "up_spear",
    pic: 218, state: 9, wait: 1, next: 257, dvx: 2, dvy: 0, dvz: 0, centerx: 57, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 67, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -2, y: 43, w: 41, h: 35, dvx: -7, fall: 70, vrest: 12, bdefend: 60, injury: 55
    },
    bdy: [
      {
        kind: 0, x: 46, y: 10, w: 46, h: 45
      },
      {
        kind: 0, x: 39, y: 54, w: 47, h: 26
      }
    ]
  },
  257: { name: "up_spear",
    pic: 219, state: 9, wait: 2, next: 258, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 66, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 5, w: 43, h: 75
    }
  },
  258: { name: "up_spear",
    pic: 220, state: 9, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 63, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 45, y: 8, w: 38, h: 71
    }
  },
  260: { name: "air_push",
    pic: 100, state: 9, wait: 1, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    sound: "1/097",
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 9, w: 41, h: 70
    }
  },
  261: { name: "air_push",
    pic: 101, state: 9, wait: 3, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 5, w: 44, h: 74
    }
  },
  262: { name: "air_push",
    pic: 102, state: 9, wait: 1, next: 263, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 83, y: 44, action: 20, dvx: -5, dvy: 0, oid: 204, facing: 1
    },
    wpoint: {
      kind: 1, x: 30, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 6, w: 42, h: 73
    }
  },
  263: { name: "air_push",
    pic: 103, state: 9, wait: 4, next: 264, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 77, hit_a: 260, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 73, y: 44, action: 0, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 34, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 8, w: 43, h: 71
    }
  },
  264: { name: "air_push",
    pic: 104, state: 9, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 77, hit_a: 260, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 8, w: 46, h: 70
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  }
  }
});