define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/louis_0.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/louis_1.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-209)": "sprite/louis_2.png", w: 79, h: 79, row: 10, col: 7
      }
    ],
    name: "Louis",
    head: "sprite/louis_f.png",
    small: "sprite/louis_s.png",
    walking_frame_rate: 3,
    walking_speed: 5,
    walking_speedz: 2.5,
    running_frame_rate: 3,
    running_speed: 9,
    running_speedz: 1.54,
    heavy_walking_speed: 3.7,
    heavy_walking_speedz: 1.85,
    heavy_running_speed: 6.2,
    heavy_running_speedz: 1,
    jump_height: -18.699999,
    jump_distance: 10,
    jump_distancez: 3.75,
    dash_height: -13.8,
    dash_distance: 17.5,
    dash_distancez: 5,
    rowing_height: -2,
    rowing_distance: 5
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 9, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 35
    },
    wpoint: {
      kind: 1, x: 34, y: 55, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 3, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 35
    },
    wpoint: {
      kind: 1, x: 34, y: 54, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 4, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 35
    },
    wpoint: {
      kind: 1, x: 34, y: 54, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 34
    },
    wpoint: {
      kind: 1, x: 33, y: 54, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 35
    },
    wpoint: {
      kind: 1, x: 33, y: 55, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 34
    },
    wpoint: {
      kind: 1, x: 33, y: 54, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 34
    },
    wpoint: {
      kind: 1, x: 32, y: 54, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    bpoint: {
      x: 44, y: 34
    },
    wpoint: {
      kind: 1, x: 32, y: 54, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 65
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bpoint: {
      x: 57, y: 39
    },
    wpoint: {
      kind: 1, x: 55, y: 52, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 57, y: 39
    },
    wpoint: {
      kind: 1, x: 40, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bpoint: {
      x: 57, y: 39
    },
    wpoint: {
      kind: 1, x: 33, y: 52, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 45, y: 35
    },
    wpoint: {
      kind: 1, x: 45, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 45, y: 35
    },
    wpoint: {
      kind: 1, x: 45, y: 21, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 45, y: 35
    },
    wpoint: {
      kind: 1, x: 45, y: 21, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 45, y: 35
    },
    wpoint: {
      kind: 1, x: 45, y: 21, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 15, w: 28, h: 64
    }
  },
  16: { name: "heavy_obj_run",
    pic: 125, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bpoint: {
      x: 57, y: 38
    },
    wpoint: {
      kind: 1, x: 54, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 34, y: 12, w: 31, h: 67
    }
  },
  17: { name: "heavy_obj_run",
    pic: 126, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 57, y: 38
    },
    wpoint: {
      kind: 1, x: 54, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 38, y: 15, w: 26, h: 65
    }
  },
  18: { name: "heavy_obj_run",
    pic: 127, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 49, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bpoint: {
      x: 57, y: 38
    },
    wpoint: {
      kind: 1, x: 54, y: 22, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 35, y: 13, w: 30, h: 68
    }
  },
  19: { name: "heavy_stop_run",
    pic: 128, state: 15, wait: 7, next: 999, dvx: 2, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    bpoint: {
      x: 34, y: 38
    },
    wpoint: {
      kind: 1, x: 30, y: 26, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 9, w: 38, h: 72
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 16, y: 32, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 20, w: 32, h: 60
    }
  },
  21: { name: "normal_weapon_atck",
    pic: 71, state: 3, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 24, y: 18, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 30, y: 19, w: 28, h: 61
    }
  },
  22: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 48, weaponact: 23, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 12, w: 33, h: 68
    }
  },
  23: { name: "normal_weapon_atck",
    pic: 73, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 59, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 74, state: 3, wait: 1, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 39, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 16, w: 29, h: 63
    }
  },
  26: { name: "normal_weapon_atck",
    pic: 75, state: 3, wait: 1, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 61, y: 38, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 16, w: 29, h: 63
    }
  },
  27: { name: "normal_weapon_atck",
    pic: 76, state: 3, wait: 1, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 63, y: 53, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 12, w: 31, h: 66
    }
  },
  28: { name: "normal_weapon_atck",
    pic: 77, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 12, y: 55, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 14, w: 29, h: 67
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 80, state: 3, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 14, y: 26, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 7, w: 32, h: 58
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 81, state: 3, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 28, y: 9, weaponact: 33, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 26, y: 7, w: 26, h: 39
      },
      {
        kind: 0, x: 13, y: 40, w: 24, h: 30
      }
    ]
  },
  32: { name: "jump_weapon_atck",
    pic: 82, state: 3, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 54, y: 43, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 83, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 53, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 84, state: 3, wait: 1, next: 36, dvx: 6, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 9, y: 32, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 15, w: 31, h: 65
    }
  },
  36: { name: "run_weapon_atck",
    pic: 85, state: 3, wait: 1, next: 37, dvx: 4, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 57, y: 24, weaponact: 34, attacking: 3, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 15, w: 34, h: 65
    }
  },
  37: { name: "run_weapon_atck",
    pic: 86, state: 3, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 62, weaponact: 24, attacking: 3, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 17, w: 34, h: 64
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 90, state: 3, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 15, y: 25, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 10, w: 35, h: 52
    }
  },
  41: { name: "dash_weapon_atck",
    pic: 91, state: 3, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 28, y: 8, weaponact: 33, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 21, y: 41, w: 25, h: 27
      },
      {
        kind: 0, x: 23, y: 8, w: 34, h: 33
      }
    ]
  },
  42: { name: "dash_weapon_atck",
    pic: 92, state: 3, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 43, weaponact: 24, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 47, y: 51, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 94, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 8, y: 33, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
  46: { name: "light_weapon_thw",
    pic: 95, state: 15, wait: 1, next: 47, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 53, y: 23, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 96, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 109, y: 60, weaponact: 35, attacking: 0, cover: 0, dvx: 19, dvy: -4, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 36, y: 14, w: 31, h: 52
      },
      {
        kind: 0, x: 17, y: 46, w: 37, h: 29
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 27, state: 15, wait: 4, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 19, w: 30, h: 62
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 28, state: 15, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 100, y: 27, weaponact: 10, attacking: 0, cover: 0, dvx: 9, dvy: -4, dvz: 2
    },
    bdy: [
      {
        kind: 0, x: 36, y: 13, w: 35, h: 54
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 3, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 8, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 9, w: 29, h: 54
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 35, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 27, y: 9, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 35, y: 10, w: 36, h: 23
      },
      {
        kind: 0, x: 15, y: 18, w: 30, h: 43
      }
    ]
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 99, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 10, state: 3, wait: 4, next: 61, dvx: 1, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 7
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 26, y: 37, w: 52, h: 14, dvx: 2, bdefend: 16, injury: 20
    },
    bdy: {
      kind: 0, x: 28, y: 12, w: 36, h: 68
    }
  },
  65: { name: "punch",
    pic: 12, state: 3, wait: 4, next: 66, dvx: 1, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 2, x: 16, y: 59, w: 35, h: 21, vrest: 7
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 27, h: 68
    }
  },
  66: { name: "punch",
    pic: 13, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    itr: {
      kind: 0, x: 29, y: 37, w: 47, h: 21, dvx: 2, bdefend: 16, injury: 20
    },
    bdy: {
      kind: 0, x: 22, y: 7, w: 41, h: 73
    }
  },
  70: { name: "super_punch",
    pic: 14, state: 3, wait: 2, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 25, y: 13, w: 25, h: 58
    }
  },
  71: { name: "super_punch",
    pic: 15, state: 3, wait: 2, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 24, y: 10, w: 31, h: 57
    }
  },
  72: { name: "super_punch",
    pic: 16, state: 3, wait: 2, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 34, y: 34, w: 44, h: 27, dvx: 12, fall: 70, arest: 75, bdefend: 60, injury: 55
    },
    bdy: {
      kind: 0, x: 30, y: 7, w: 28, h: 61
    }
  },
  73: { name: "super_punch",
    pic: 17, state: 3, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 39, y: 30, w: 29, h: 30, dvx: 12, fall: 70, arest: 75, bdefend: 60, injury: 55
    },
    bdy: {
      kind: 0, x: 33, y: 9, w: 36, h: 64
    }
  },
  74: { name: "super_punch",
    pic: 18, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 23, y: 14, w: 40, h: 67
    }
  },
  75: { name: "run_attack",
    pic: 105, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 20, y: 31, w: 16, h: 49
      },
      {
        kind: 0, x: 30, y: 11, w: 30, h: 66
      }
    ]
  },
  80: { name: "jump_attack",
    pic: 14, state: 3, wait: 2, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 25, y: 13, w: 25, h: 58
    }
  },
  81: { name: "jump_attack",
    pic: 15, state: 3, wait: 2, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 24, y: 10, w: 31, h: 57
    }
  },
  82: { name: "jump_attack",
    pic: 16, state: 3, wait: 2, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 32, y: 30, w: 47, h: 28, dvx: 12, fall: 70, arest: 75, bdefend: 60, injury: 45
    },
    bdy: {
      kind: 0, x: 23, y: 10, w: 37, h: 67
    }
  },
  83: { name: "jump_attack",
    pic: 17, state: 3, wait: 1, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 35, y: 30, w: 30, h: 30, dvx: 12, fall: 70, arest: 75, bdefend: 60, injury: 45
    },
    bdy: {
      kind: 0, x: 33, y: 9, w: 36, h: 64
    }
  },
  84: { name: "jump_attack",
    pic: 18, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 23, y: 13, w: 39, h: 66
    }
  },
  85: { name: "run_attack",
    pic: 100, state: 3, wait: 1, next: 86, dvx: 6, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 50,
    sound: "1/031",
    bdy: {
      kind: 0, x: 23, y: 9, w: 38, h: 71
    }
  },
  86: { name: "run_attack",
    pic: 101, state: 3, wait: 2, next: 87, dvx: 4, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 23, y: 12, w: 41, h: 68
    }
  },
  87: { name: "run_attack",
    pic: 102, state: 3, wait: 4, next: 88, dvx: 12, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 18, y: 30, w: 61, h: 31, dvx: 14, fall: 70, vrest: 7, bdefend: 16, injury: 65
    },
    bdy: [
      {
        kind: 0, x: 27, y: 15, w: 35, h: 64
      },
      {
        kind: 0, x: 15, y: 31, w: 21, h: 50
      }
    ]
  },
  88: { name: "run_attack",
    pic: 103, state: 3, wait: 2, next: 89, dvx: 12, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 17, y: 34, w: 55, h: 21, dvx: 14, fall: 70, vrest: 7, bdefend: 16, injury: 65
    },
    bdy: [
      {
        kind: 0, x: 18, y: 29, w: 27, h: 54
      },
      {
        kind: 0, x: 31, y: 12, w: 33, h: 65
      }
    ]
  },
  89: { name: "run_attack",
    pic: 104, state: 3, wait: 2, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: [
      {
        kind: 0, x: 32, y: 9, w: 35, h: 73
      },
      {
        kind: 0, x: 19, y: 34, w: 23, h: 46
      }
    ]
  },
  90: { name: "dash_attack",
    pic: 132, state: 15, wait: 1, next: 91, dvx: -1, dvy: -1, dvz: 0, centerx: 38, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
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
    pic: 132, state: 15, wait: 2, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 133, state: 15, wait: 2, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 134, state: 100, wait: 90, next: 216, dvx: 23, dvy: 2, dvz: 0, centerx: 31, centery: 73, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 28, y: 34, w: 57, h: 45, dvx: 12, fall: 70, vrest: 8, bdefend: 60, injury: 80
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
    pic: 135, state: 15, wait: 2, next: 95, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 136, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 49, state: 6, wait: 2, next: 105, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 7
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
    pic: 49, state: 6, wait: 2, next: 219, dvx: 9, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 59, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 7, x: 36, y: 54, w: 13, h: 25, vrest: 7
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
    pic: 56, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 235, hit_Fj: 247, hit_Uj: 275, hit_ja: 300,
    wpoint: {
      kind: 1, x: 46, y: 51, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 19, w: 38, h: 60
    }
  },
  111: { name: "defend",
    pic: 57, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 51, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 19, w: 42, h: 60
    }
  },
  112: { name: "broken_defend",
    pic: 46, state: 8, wait: 2, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 5, y: 32, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 6, y: 51, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 11, y: 60, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 7
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  115: { name: "picking_light",
    pic: 36, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 44, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 43, w: 33, h: 37
      },
      {
        kind: 0, x: 32, y: 24, w: 28, h: 28
      }
    ]
  },
  116: { name: "picking_heavy",
    pic: 36, state: 15, wait: 2, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 79, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 43, w: 33, h: 37
      },
      {
        kind: 0, x: 36, y: 26, w: 26, h: 25
      }
    ]
  },
  117: { name: "picking_heavy",
    pic: 36, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 70, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 24, y: 43, w: 33, h: 37
      },
      {
        kind: 0, x: 34, y: 19, w: 26, h: 37
      }
    ]
  },
  120: { name: "catching",
    pic: 51, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 71, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 55, y: 39, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: -260,
    cpoint: {
      kind: 1, x: 65, y: 39, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 57, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 51, state: 9, wait: 5, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 66, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 52, state: 9, wait: 3, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 64, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 56, y: 40, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  130: { name: "picked_caught",
    pic: 53, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 39, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 29, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  131: { name: "picked_caught",
    pic: 54, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 43, y: 39, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 32, y: 56, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 53, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  133: { name: "picked_caught",
    pic: 30, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 36
    },
    wpoint: {
      kind: 1, x: 35, y: 46, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 37, y: 28
    },
    wpoint: {
      kind: 1, x: 39, y: 39, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 31, y: 22
    },
    wpoint: {
      kind: 1, x: 34, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 27, y: 46
    },
    wpoint: {
      kind: 1, x: 36, y: 38, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  137: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 69, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 33, y: 68
    },
    wpoint: {
      kind: 1, x: 36, y: 75, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  138: { name: "picked_caught",
    pic: 35, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 34, y: 54
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
      kind: 1, x: 26, y: 50, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 41, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 38
    },
    wpoint: {
      kind: 1, x: 24, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 42, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 21, y: 38, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 43, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 18, y: 50, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  143: { name: "picked_caught",
    pic: 44, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 66
    },
    wpoint: {
      kind: 1, x: 43, y: 77, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 45, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 28, y: 51, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 33, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 13, y: 18, w: 46, h: 26, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 20, h: 18
    }
  },
  183: { name: "falling",
    pic: 33, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 33, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 32, y: 18, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 10, y: 38, w: 38, h: 21, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
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
      kind: 1, x: 35, y: 70, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 24, y: 47, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 24, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 21, y: 37, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 16, y: 51, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 18, y: 45, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 55, h: 68
    }
  },
  201: { name: "ice",
    pic: 9, state: 13, wait: 90, next: 202, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 55, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 18, y: 44, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 71, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 24, w: 35, h: 58
    }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 45, y: 72, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 26, w: 34, h: 56
    }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 51, y: 31
    },
    wpoint: {
      kind: 1, x: 39, y: 42, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 28, y: 3, w: 23, h: 65
      },
      {
        kind: 0, x: 18, y: 29, w: 48, h: 17
      }
    ]
  },
  213: { name: "dash",
    pic: 63, state: 5, wait: 8, next: 216, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 49, y: 32
    },
    wpoint: {
      kind: 1, x: 44, y: 41, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 43, y: 5, w: 23, h: 33
      },
      {
        kind: 0, x: 28, y: 29, w: 21, h: 33
      },
      {
        kind: 0, x: 18, y: 48, w: 27, h: 21
      }
    ]
  },
  214: { name: "dash",
    pic: 64, state: 5, wait: 8, next: 217, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 37, y: 34
    },
    wpoint: {
      kind: 1, x: 32, y: 41, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 20, y: 5, w: 27, h: 38
      },
      {
        kind: 0, x: 16, y: 37, w: 36, h: 22
      }
    ]
  },
  215: { name: "crouch",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    bpoint: {
      x: 48, y: 46
    },
    wpoint: {
      kind: 1, x: 44, y: 69, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 26, w: 31, h: 54
    }
  },
  216: { name: "dash",
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 48, y: 31
    },
    wpoint: {
      kind: 1, x: 43, y: 42, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      x: 36, y: 34
    },
    wpoint: {
      kind: 1, x: 31, y: 44, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 13, w: 29, h: 51
    }
  },
  218: { name: "stop_running",
    pic: 114, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    bpoint: {
      x: 37, y: 39
    },
    wpoint: {
      kind: 1, x: 18, y: 58, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 17, y: 25, w: 30, h: 55
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
      }
    ]
  },
  219: { name: "crouch2",
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 43, y: 69, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 36, w: 29, h: 44
    }
  },
  220: { name: "injured",
    pic: 120, state: 11, wait: 2, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 22, y: 58, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 17, w: 29, h: 61
    }
  },
  221: { name: "injured",
    pic: 121, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 56, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 15, y: 58, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 17, y: 56, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 26, y: 56, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 31, y: 57, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 120, state: 16, wait: 6, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 59, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 22, y: 56, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 30, y: 55, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 23, y: 56, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 7
    },
    bdy: {
      kind: 0, x: 29, y: 26, w: 37, h: 53
    }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  231: { name: "lying",
    pic: 44, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 74, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  232: { name: "throw_lying_man",
    pic: 27, state: 9, wait: 3, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 28, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 20, y: 26, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 15, w: 36, h: 65
    }
  },
  233: { name: "throw_lying_man",
    pic: 28, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 10, y: 28, w: 61, h: 28
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 28, state: 9, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 51, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  235: { name: "blastpush",
    pic: 115, state: 3, wait: 1, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    wpoint: {
      kind: 1, x: 38, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  236: { name: "blastpush",
    pic: 116, state: 3, wait: 2, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  237: { name: "blastpush",
    pic: 106, state: 3, wait: 2, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/097",
    wpoint: {
      kind: 1, x: 41, y: 47, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  238: { name: "blastpush",
    pic: 107, state: 3, wait: 1, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 73, y: 44, action: 50, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  239: { name: "blastpush",
    pic: 107, state: 3, wait: 1, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 1, y: 44, action: 51, dvx: 0, dvy: 0, oid: 204, facing: 1
    },
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  240: { name: "blastpush",
    pic: 108, state: 3, wait: 2, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  241: { name: "blastpush",
    pic: 109, state: 3, wait: 2, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  242: { name: "blastpush",
    pic: 119, state: 3, wait: 2, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  243: { name: "blastpush",
    pic: 129, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 47, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 14, w: 35, h: 64
      },
      {
        kind: 0, x: 13, y: 43, w: 39, h: 19
      }
    ]
  },
  245: { name: "1000foot",
    pic: 140, state: 3, wait: 1, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 47, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 14, w: 35, h: 64
    }
  },
  246: { name: "1000foot",
    pic: 141, state: 3, wait: 2, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 47, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 14, w: 35, h: 64
    }
  },
  247: { name: "1000foot",
    pic: 142, state: 3, wait: 1, next: 248, dvx: 2, dvy: 0, dvz: 0, centerx: 23, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0, mp: 50,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 34, y: 47, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 21, w: 44, h: 54
    }
  },
  248: { name: "1000foot",
    pic: 143, state: 3, wait: 1, next: 249, dvx: 8, dvy: 0, dvz: 0, centerx: 28, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 31, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 18, w: 53, h: 41
    }
  },
  249: { name: "1000foot",
    pic: 144, state: 3, wait: 1, next: 250, dvx: 12, dvy: 0, dvz: 0, centerx: 24, centery: 84, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 31, weaponact: 27, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 17, w: 43, h: 46
    }
  },
  250: { name: "1000foot",
    pic: 145, state: 3, wait: 2, next: 251, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 11, y: 31, w: 68, h: 27, dvx: 13, fall: 1, vrest: 7, bdefend: 5, injury: 20
    },
    bdy: {
      kind: 0, x: 13, y: 6, w: 41, h: 40
    }
  },
  251: { name: "1000foot",
    pic: 146, state: 3, wait: 2, next: 252, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/069",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 7, w: 45, h: 38
    }
  },
  252: { name: "1000foot",
    pic: 147, state: 3, wait: 2, next: 253, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 11, y: 31, w: 68, h: 27, dvx: 13, fall: 1, vrest: 7, bdefend: 5, injury: 20
    },
    bdy: {
      kind: 0, x: 9, y: 8, w: 45, h: 35
    }
  },
  253: { name: "1000foot",
    pic: 148, state: 3, wait: 2, next: 254, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/069",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 11, y: 31, w: 68, h: 27, dvx: 13, fall: 1, vrest: 7, bdefend: 5, injury: 20
    },
    bdy: {
      kind: 0, x: 10, y: 9, w: 44, h: 33
    }
  },
  254: { name: "1000foot",
    pic: 145, state: 3, wait: 2, next: 255, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 38, h: 37
    }
  },
  255: { name: "1000foot",
    pic: 146, state: 3, wait: 2, next: 256, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/069",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 11, y: 31, w: 68, h: 27, dvx: 13, fall: 1, vrest: 7, bdefend: 5, injury: 20
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 40, h: 35
    }
  },
  256: { name: "1000foot",
    pic: 147, state: 3, wait: 2, next: 257, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 8, w: 36, h: 37
    }
  },
  257: { name: "1000foot",
    pic: 148, state: 3, wait: 2, next: 258, dvx: 12, dvy: 0, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/069",
    wpoint: {
      kind: 1, x: 33, y: 31, weaponact: 29, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 9, y: 22, w: 81, h: 35, dvx: 17, dvy: -7, fall: 70, vrest: 7, bdefend: 60, injury: 30
    },
    bdy: {
      kind: 0, x: 9, y: 8, w: 40, h: 38
    }
  },
  258: { name: "1000foot",
    pic: 149, state: 3, wait: 2, next: 115, dvx: 5, dvy: 0, dvz: 0, centerx: 46, centery: 70, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 34, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 13, w: 48, h: 54
    }
  },
  260: { name: "c-throw",
    pic: 150, state: 9, wait: 2, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    cpoint: {
      kind: 1, x: 83, y: 45, cover: 10, vaction: 134, throwvz: -842150451, throwinjury: -842150451, dircontrol: -1
    },
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 28, y: 24, w: 99, h: 57, dvx: 14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 19, y: 13, w: 47, h: 67
    }
  },
  261: { name: "c-throw",
    pic: 151, state: 9, wait: 2, next: 262, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 75,
    cpoint: {
      kind: 1, x: 66, y: 59, injury: -20, cover: 11, vaction: 136, throwvz: -842150451, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 31, y: 45, weaponact: 29, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 12, w: 45, h: 65
    }
  },
  262: { name: "c-throw",
    pic: 152, state: 9, wait: 1, next: 263, dvx: 1, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: -4, y: 38, cover: 10, vaction: 133, throwvz: -842150451, throwinjury: -842150451, decrease: 10
    },
    wpoint: {
      kind: 1, x: 43, y: 43, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -48, y: 22, w: 107, h: 57, dvx: -14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 15, y: 12, w: 42, h: 70
    }
  },
  263: { name: "c-throw",
    pic: 153, state: 9, wait: 2, next: 264, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 12, y: 19, cover: 10, vaction: 144, throwvz: -842150451, throwinjury: -842150451, decrease: 10, dircontrol: -1
    },
    wpoint: {
      kind: 1, x: 53, y: 44, weaponact: 27, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -35, y: -19, w: 109, h: 60, dvx: -14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 23, y: 9, w: 42, h: 70
    }
  },
  264: { name: "c-throw",
    pic: 154, state: 9, wait: 2, next: 265, dvx: -2, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 71, y: 19, cover: 10, vaction: 142, throwvz: -842150451, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 41, y: 43, weaponact: 27, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 14, y: -16, w: 107, h: 67, dvx: 14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 16, y: 11, w: 41, h: 69
    }
  },
  265: { name: "c-throw",
    pic: 155, state: 9, wait: 1, next: 266, dvx: -1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 74, y: 53, cover: 11, vaction: 136, throwvz: -842150451, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 31, y: 47, weaponact: 29, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 18, y: 10, w: 106, h: 65, dvx: 14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 11, y: 11, w: 45, h: 69
    }
  },
  266: { name: "c-throw",
    pic: 155, state: 9, wait: 1, next: 267, dvx: -1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 261,
    cpoint: {
      kind: 1, x: 74, y: 53, cover: 11, vaction: 136, throwvz: -842150451, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 31, y: 47, weaponact: 29, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 16, y: 11, w: 108, h: 64, dvx: 14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 11, y: 11, w: 45, h: 69
    }
  },
  267: { name: "c-throw",
    pic: 151, state: 9, wait: 1, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 66, y: 57, cover: 11, vaction: 138, throwvz: -842150451, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 39, y: 48, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -15, y: 16, w: 119, h: 65, dvx: 14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 18, y: 11, w: 42, h: 68
    }
  },
  268: { name: "c-throw",
    pic: 152, state: 9, wait: 1, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: -5, y: 24, cover: 10, vaction: 141, throwvz: -842150451, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 41, y: 47, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -49, y: 0, w: 123, h: 55, dvx: -14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 9, y: 8, w: 49, h: 72
    }
  },
  269: { name: "c-throw",
    pic: 156, state: 9, wait: 1, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 9, y: 49, cover: 11, vaction: 181, throwvx: -16, throwvy: -8, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 48, y: 49, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  270: { name: "c-throw",
    pic: 156, state: 9, wait: 3, next: -999, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 49, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  275: { name: "r-catch",
    pic: 160, state: 9, wait: 3, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    wpoint: {
      kind: 1, x: 48, y: 49, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 12, w: 47, h: 68
    }
  },
  276: { name: "r-catch",
    pic: 161, state: 9, wait: 2, next: 277, dvx: 8, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 48, y: 49, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 21, y: 34, w: 40, h: 28, vrest: 7,
      catchingact: [279, 279], caughtact: [132, 132]
    },
    bdy: {
      kind: 0, x: 26, y: 10, w: 45, h: 72
    }
  },
  277: { name: "r-catch",
    pic: 162, state: 9, wait: 2, next: 278, dvx: 8, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 48, y: 49, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 21, y: 29, w: 43, h: 30, vrest: 7,
      catchingact: [279, 279], caughtact: [132, 132]
    },
    bdy: {
      kind: 0, x: 28, y: 12, w: 48, h: 65
    }
  },
  278: { name: "r-catch",
    pic: 161, state: 9, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    wpoint: {
      kind: 1, x: 48, y: 49, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 3, x: 21, y: 29, w: 43, h: 30, vrest: 7,
      catchingact: [279, 279], caughtact: [132, 132]
    },
    bdy: {
      kind: 0, x: 25, y: 12, w: 47, h: 68
    }
  },
  279: { name: "c-throw",
    pic: 150, state: 9, wait: 2, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 83, y: 43, vaction: 134, throwvz: -842150451, throwinjury: -842150451, dircontrol: -1
    },
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 18, y: 24, w: 103, h: 56, dvx: 14, fall: 70, vrest: 75, bdefend: 16, injury: 65
    },
    bdy: {
      kind: 0, x: 19, y: 13, w: 47, h: 67
    }
  },
  300: { name: "transform",
    pic: 170, state: 15, wait: 2, next: 301, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  301: { name: "transform",
    pic: 171, state: 15, wait: 2, next: 302, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  302: { name: "transform",
    pic: 172, state: 15, wait: 2, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 82, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  303: { name: "transform",
    pic: 173, state: 15, wait: 1, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 84, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/097",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  304: { name: "transform",
    pic: 174, state: 9996, wait: 3, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 84, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/020",
    opoint: {
      kind: 1, x: 73, y: 44, action: 50, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  305: { name: "transform",
    pic: 175, state: 15, wait: 3, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  306: { name: "transform",
    pic: 176, state: 15, wait: 2, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  307: { name: "transform",
    pic: 177, state: 15, wait: 2, next: 308, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  308: { name: "transform",
    pic: 178, state: 15, wait: 4, next: 309, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  309: { name: "transform",
    pic: 179, state: 15, wait: 3, next: 310, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  310: { name: "transform",
    pic: 180, state: 15, wait: 2, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  311: { name: "transform",
    pic: 181, state: 15, wait: 1, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  312: { name: "transform",
    pic: 182, state: 15, wait: 1, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  313: { name: "transform",
    pic: 183, state: 15, wait: 1, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  314: { name: "transform",
    pic: 184, state: 15, wait: 1, next: 315, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  315: { name: "transform",
    pic: 185, state: 15, wait: 1, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/083",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  316: { name: "transform",
    pic: 186, state: 15, wait: 2, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  317: { name: "transform",
    pic: 187, state: 15, wait: 2, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  318: { name: "transform",
    pic: 188, state: 15, wait: 5, next: 319, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  319: { name: "transform",
    pic: 188, state: 9995, wait: 10, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  320: { name: "transform",
    pic: 173, state: 15, wait: 1, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 84, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 1, y: 44, action: 51, dvx: 0, dvy: 0, oid: 204, facing: 1
    },
    wpoint: {
      kind: 1, x: 37, y: 46, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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