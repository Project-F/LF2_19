define({
  bmp: {
    file: [
      {
        "file(0-69)": "sprite/rudolf_0.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(70-139)": "sprite/rudolf_1.png", w: 79, h: 79, row: 10, col: 7
      },
      {
        "file(140-149)": "sprite/rudolf_2.png", w: 149, h: 87, row: 5, col: 2
      },
      {
        "file(150-155)": "sprite/rudolf_3.png", w: 94, h: 64, row: 6, col: 1
      }
    ],
    name: "Rudolf",
    head: "sprite/rudolf_f.png",
    small: "sprite/rudolf_s.png",
    walking_frame_rate: 3,
    walking_speed: 6,
    walking_speedz: 2.5,
    running_frame_rate: 3,
    running_speed: 13,
    running_speedz: 1.6,
    heavy_walking_speed: 4.2,
    heavy_walking_speedz: 1.85,
    heavy_running_speed: 7,
    heavy_running_speedz: 1,
    jump_height: -16.299999,
    jump_distance: 10,
    jump_distancez: 3.75,
    dash_height: -10,
    dash_distance: 18,
    dash_distancez: 5,
    rowing_height: -2,
    rowing_distance: 5
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 4, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 44, y: 36
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 4, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 45, y: 36
    },
    wpoint: {
      kind: 1, x: 47, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 4, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 45, y: 35
    },
    wpoint: {
      kind: 1, x: 47, y: 48, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 42, y: 35
    },
    wpoint: {
      kind: 1, x: 44, y: 47, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 42, y: 36
    },
    wpoint: {
      kind: 1, x: 44, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 22, y: 13, w: 34, h: 64
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 41, y: 36
    },
    wpoint: {
      kind: 1, x: 43, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 23, y: 12, w: 33, h: 67
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 43, y: 36
    },
    wpoint: {
      kind: 1, x: 45, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 24, y: 11, w: 34, h: 67
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    bpoint: {
      x: 45, y: 36
    },
    wpoint: {
      kind: 1, x: 47, y: 46, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 40, y: 16, w: 25, h: 65,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 26, y: 12, w: 34, h: 65
    }
  },
  9: { name: "running",
    pic: 20, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bpoint: {
      x: 55, y: 51
    },
    wpoint: {
      kind: 1, x: 46, y: 54, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  10: { name: "running",
    pic: 21, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 55, y: 53
    },
    wpoint: {
      kind: 1, x: 46, y: 55, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  11: { name: "running",
    pic: 22, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bpoint: {
      x: 56, y: 54
    },
    wpoint: {
      kind: 1, x: 46, y: 56, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 19, w: 38, h: 60
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 23, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 42, y: 37
    },
    wpoint: {
      kind: 1, x: 40, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 12, w: 38, h: 71
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 24, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 41, y: 37
    },
    wpoint: {
      kind: 1, x: 39, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 13, w: 36, h: 69
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 25, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 43, y: 37
    },
    wpoint: {
      kind: 1, x: 41, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 11, w: 38, h: 70
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 26, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 44, y: 37
    },
    wpoint: {
      kind: 1, x: 42, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 11, w: 38, h: 72
    }
  },
  16: { name: "heavy_obj_run",
    pic: 125, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    bpoint: {
      x: 38, y: 38
    },
    wpoint: {
      kind: 1, x: 36, y: 24, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 10, w: 30, h: 68
    }
  },
  17: { name: "heavy_obj_run",
    pic: 126, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 42, y: 36
    },
    wpoint: {
      kind: 1, x: 40, y: 23, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 10, w: 31, h: 68
    }
  },
  18: { name: "heavy_obj_run",
    pic: 127, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    bpoint: {
      x: 43, y: 38
    },
    wpoint: {
      kind: 1, x: 41, y: 25, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 15, w: 37, h: 63
    }
  },
  19: { name: "heavy_stop_run",
    pic: 128, state: 15, wait: 7, next: 999, dvx: 2, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    bpoint: {
      x: 39, y: 43
    },
    wpoint: {
      kind: 1, x: 44, y: 30, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 16, w: 38, h: 63
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 70, state: 3, wait: 1, next: 21, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 16, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 14, w: 34, h: 65
    }
  },
  21: { name: "normal_weapon_atck",
    pic: 71, state: 3, wait: 1, next: 22, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 38, y: 19, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 12, w: 28, h: 67
    }
  },
  22: { name: "normal_weapon_atck",
    pic: 72, state: 3, wait: 1, next: 23, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 52, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 7, y: 12, w: 40, h: 68
    }
  },
  23: { name: "normal_weapon_atck",
    pic: 73, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 59, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 9, y: 12, w: 34, h: 69
      },
      {
        kind: 0, x: 25, y: 61, w: 17, h: 18
      }
    ]
  },
  25: { name: "normal_weapon_atck",
    pic: 74, state: 3, wait: 1, next: 26, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 39, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 8, w: 33, h: 72
    }
  },
  26: { name: "normal_weapon_atck",
    pic: 75, state: 3, wait: 1, next: 27, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 53, y: 42, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 12, w: 27, h: 67
    }
  },
  27: { name: "normal_weapon_atck",
    pic: 76, state: 3, wait: 1, next: 28, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 48, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 15, w: 32, h: 64
    }
  },
  28: { name: "normal_weapon_atck",
    pic: 77, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 15, y: 52, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 32, h: 60
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 80, state: 3, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 84, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 24, y: 15, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 13, w: 28, h: 58
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 81, state: 3, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 37, y: 16, weaponact: 33, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 23, y: 10, w: 23, h: 45
      },
      {
        kind: 0, x: 13, y: 38, w: 24, h: 33
      }
    ]
  },
  32: { name: "jump_weapon_atck",
    pic: 82, state: 3, wait: 1, next: 33, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 86, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 49, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 83, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 55, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 71, state: 3, wait: 1, next: 36, dvx: 6, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 20, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 15, w: 31, h: 65
    }
  },
  36: { name: "run_weapon_atck",
    pic: 72, state: 3, wait: 1, next: 37, dvx: 4, dvy: 0, dvz: 0, centerx: 26, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 42, y: 52, weaponact: 22, attacking: 3, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 15, w: 29, h: 63
    }
  },
  37: { name: "run_weapon_atck",
    pic: 73, state: 0, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 36, y: 60, weaponact: 24, attacking: 3, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 17, w: 26, h: 61
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 80, state: 3, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 21, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 16, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 15, w: 27, h: 56
    }
  },
  41: { name: "dash_weapon_atck",
    pic: 81, state: 3, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 34, y: 14, weaponact: 33, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 32, w: 33, h: 45
      },
      {
        kind: 0, x: 23, y: 8, w: 34, h: 33
      }
    ]
  },
  42: { name: "dash_weapon_atck",
    pic: 82, state: 3, wait: 1, next: 43, dvx: 0, dvy: 0, dvz: 0, centerx: 18, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 54, y: 48, weaponact: 24, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 32, w: 33, h: 45
      },
      {
        kind: 0, x: 27, y: 13, w: 30, h: 33
      }
    ]
  },
  43: { name: "dash_weapon_atck",
    pic: 83, state: 3, wait: 8, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 55, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 8, y: 32, w: 33, h: 45
      },
      {
        kind: 0, x: 23, y: 13, w: 31, h: 37
      }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 94, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 20, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 54, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 22, w: 32, h: 57
    }
  },
  47: { name: "light_weapon_thw",
    pic: 96, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 102, y: 60, weaponact: 35, attacking: 0, cover: 0, dvx: 19, dvy: -4, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 10, y: 38, w: 54, h: 21
      },
      {
        kind: 0, x: 26, y: 55, w: 32, h: 26
      }
    ]
  },
  50: { name: "heavy_weapon_thw",
    pic: 27, state: 15, wait: 4, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 24, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 14, w: 37, h: 66
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 28, state: 15, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 99, y: 42, weaponact: 10, attacking: 0, cover: 0, dvx: 9, dvy: -4, dvz: 2
    },
    bdy: [
      {
        kind: 0, x: 8, y: 39, w: 61, h: 23
      },
      {
        kind: 0, x: 21, y: 22, w: 39, h: 57
      }
    ]
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 97, state: 15, wait: 3, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 11, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 12, w: 34, h: 52
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 98, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 25, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 39, y: 12, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 7, w: 31, h: 66
    }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 99, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 75, y: 65, weaponact: 23, attacking: 0, cover: 0, dvx: 16, dvy: 8, dvz: 3
    },
    bdy: [
      {
        kind: 0, x: 27, y: 22, w: 36, h: 34
      },
      {
        kind: 0, x: 3, y: 37, w: 34, h: 26
      }
    ]
  },
  55: { name: "weapon_drink",
    pic: 105, state: 17, wait: 3, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/042",
    wpoint: {
      kind: 1, x: 60, y: 26, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 12, w: 37, h: 67
    }
  },
  56: { name: "weapon_drink",
    pic: 106, state: 17, wait: 3, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 25, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 20, w: 36, h: 59
    }
  },
  57: { name: "weapon_drink",
    pic: 107, state: 17, wait: 3, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 24, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 17, w: 32, h: 63
    }
  },
  58: { name: "weapon_drink",
    pic: 106, state: 17, wait: 3, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 25, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 13, w: 36, h: 65
    }
  },
  59: { name: "punch",
    pic: 13, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 24, y: 13, w: 33, h: 66
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 3, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 15,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: {
      kind: 0, x: 23, y: 15, w: 31, h: 63
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 2, next: 62, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    bdy: {
      kind: 0, x: 28, y: 14, w: 29, h: 63
    }
  },
  62: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 63, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 75, y: 57, action: 40, dvx: 19, dvy: -3, oid: 202, facing: 0
    },
    bdy: {
      kind: 0, x: 26, y: 16, w: 30, h: 64
    }
  },
  63: { name: "punch",
    pic: 13, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 64, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 23, y: 12, w: 32, h: 69
    }
  },
  64: { name: "punch",
    pic: 14, state: 3, wait: 2, next: 66, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 15,
    bdy: {
      kind: 0, x: 24, y: 12, w: 30, h: 66
    }
  },
  65: { name: "punch",
    pic: 10, state: 3, wait: 3, next: 61, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 15,
    itr: {
      kind: 2, x: 21, y: 57, w: 37, h: 24, vrest: 1
    },
    bdy: {
      kind: 0, x: 22, y: 18, w: 32, h: 60
    }
  },
  66: { name: "punch",
    pic: 15, state: 3, wait: 3, next: 67, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 75, y: 57, action: 40, dvx: 18, dvy: -2, oid: 202, facing: 0
    },
    bdy: {
      kind: 0, x: 24, y: 15, w: 30, h: 65
    }
  },
  67: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 68, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 28, y: 15, w: 27, h: 64
    }
  },
  68: { name: "punch",
    pic: 14, state: 3, wait: 2, next: 69, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 15,
    bdy: {
      kind: 0, x: 27, y: 15, w: 32, h: 62
    }
  },
  69: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 59, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 75, y: 57, action: 40, dvx: 17, dvy: -1, oid: 202, facing: 0
    },
    bdy: {
      kind: 0, x: 25, y: 13, w: 32, h: 66
    }
  },
  70: { name: "super_punch",
    pic: 132, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 14, y: 14, w: 30, h: 66
    }
  },
  71: { name: "super_punch",
    pic: 133, state: 3, wait: 2, next: 72, dvx: 4, dvy: 0, dvz: 0, centerx: 27, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 45, y: 9, w: 36, h: 51, dvx: -3, dvy: -4, fall: 1, injury: 10, effect: 1
    },
    bdy: {
      kind: 0, x: 4, y: 16, w: 39, h: 61
    }
  },
  72: { name: "super_punch",
    pic: 134, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: -1, y: 6, w: 76, h: 36, dvx: -3, dvy: -4, fall: 1, injury: 10, effect: 1
    },
    bdy: {
      kind: 0, x: 22, y: 17, w: 28, h: 62
    }
  },
  73: { name: "super_punch",
    pic: 135, state: 3, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 26, y: 14, w: 31, h: 64
    }
  },
  74: { name: "super_punch",
    pic: 136, state: 3, wait: 2, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 46, y: 13, w: 32, h: 64, dvx: 7, dvy: -4, fall: 70, bdefend: 60, injury: 65, effect: 1
    },
    bdy: {
      kind: 0, x: 13, y: 14, w: 29, h: 64
    }
  },
  75: { name: "super_punch",
    pic: 137, state: 3, wait: 1, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 0, y: 47, w: 62, h: 31, dvx: 7, dvy: -4, fall: 70, bdefend: 60, injury: 65, effect: 1
    },
    bdy: {
      kind: 0, x: 14, y: 9, w: 39, h: 70
    }
  },
  76: { name: "super_punch",
    pic: 138, state: 3, wait: 1, next: 77, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 11, w: 39, h: 67
    }
  },
  77: { name: "super_punch",
    pic: 139, state: 3, wait: 2, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 50, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 27, y: 13, w: 39, h: 66
    }
  },
  78: { name: "super_punch",
    pic: 129, state: 3, wait: 2, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 22, y: 17, w: 46, h: 63
    }
  },
  79: { name: "super_punch",
    pic: 119, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/027",
    bdy: {
      kind: 0, x: 21, y: 15, w: 42, h: 64
    }
  },
  80: { name: "jump_attack",
    pic: 67, state: 3, wait: 1, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 18, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 12, y: 12, w: 30, h: 63
    }
  },
  81: { name: "jump_attack",
    pic: 68, state: 3, wait: 1, next: 82, dvx: 0, dvy: 0, dvz: 0, centerx: 18, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 27, y: 8, w: 53, h: 40, dvx: -2, dvy: -2, fall: 20, arest: 15, bdefend: 60, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 8, y: 15, w: 34, h: 60
    }
  },
  82: { name: "jump_attack",
    pic: 69, state: 3, wait: 1, next: 83, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 77, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 5, y: 2, w: 75, h: 22, dvx: -2, dvy: -2, fall: 20, arest: 15, bdefend: 60, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 25, y: 13, w: 32, h: 64
    }
  },
  83: { name: "jump_attack",
    pic: 29, state: 3, wait: 1, next: 84, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 28, y: 4, w: 35, h: 70
    }
  },
  84: { name: "jump_attack",
    pic: 39, state: 3, wait: 1, next: 118, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 42, y: 6, w: 37, h: 62, dvx: 1, fall: 60, arest: 15, bdefend: 60, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 10, y: 8, w: 34, h: 67
    }
  },
  85: { name: "run_attack",
    pic: 140, state: 3, wait: 1, next: 86, dvx: 12, dvy: 0, dvz: 0, centerx: 36, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 34, w: 50, h: 52
    }
  },
  86: { name: "run_attack",
    pic: 141, state: 3, wait: 1, next: 87, dvx: 12, dvy: 0, dvz: 0, centerx: 28, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    itr: {
      kind: 0, x: 56, y: 31, w: 66, h: 48, dvx: -4, dvy: -4, injury: 45, effect: 1
    },
    bdy: {
      kind: 0, x: 14, y: 33, w: 49, h: 51
    }
  },
  87: { name: "run_attack",
    pic: 142, state: 3, wait: 1, next: 88, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 56, y: 31, w: 66, h: 48, dvx: -4, dvy: -4, injury: 45, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 34, w: 51, h: 48
    }
  },
  88: { name: "run_attack",
    pic: 143, state: 3, wait: 1, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 13, y: 30, w: 81, h: 53, dvx: 10, dvy: -7, fall: 70, vrest: 15, bdefend: 60, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 27, y: 34, w: 49, h: 52
    }
  },
  89: { name: "run_attack",
    pic: 144, state: 3, wait: 6, next: 78, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 36, w: 45, h: 49
    }
  },
  90: { name: "dash_attack",
    pic: 145, state: 3, wait: 1, next: 91, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 34, w: 50, h: 52
    }
  },
  91: { name: "dash_attack",
    pic: 146, state: 3, wait: 1, next: 92, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/029",
    bdy: {
      kind: 0, x: 29, y: 28, w: 53, h: 52
    }
  },
  92: { name: "dash_attack",
    pic: 147, state: 3, wait: 1, next: 93, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    itr: {
      kind: 0, x: 53, y: 24, w: 54, h: 55, dvx: 10, dvy: -7, fall: 70, vrest: 15, bdefend: 60, injury: 75, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 34, w: 51, h: 48
    }
  },
  93: { name: "dash_attack",
    pic: 148, state: 3, wait: 1, next: 94, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 53, y: 24, w: 54, h: 55, dvx: 10, dvy: -7, fall: 70, vrest: 15, bdefend: 60, injury: 75, effect: 1
    },
    bdy: {
      kind: 0, x: 27, y: 34, w: 49, h: 52
    }
  },
  94: { name: "dash_attack",
    pic: 149, state: 3, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 85, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 32, y: 36, w: 45, h: 49
    }
  },
  95: { name: "dash_defend",
    pic: 111, state: 7, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 21, y: 27, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 14, y: 19, w: 28, h: 36
      },
      {
        kind: 0, x: 28, y: 37, w: 24, h: 34
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
      kind: 1, x: 28, y: 69, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  102: { name: "rowing",
    pic: 16, state: 6, wait: 1, next: 103, dvx: 12, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    sound: "1/030",
    wpoint: {
      kind: 1, x: 44, y: 57, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  103: { name: "rowing",
    pic: 17, state: 6, wait: 1, next: 104, dvx: 12, dvy: 0, dvz: 0, centerx: 39, centery: 80, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    wpoint: {
      kind: 1, x: 45, y: 57, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  104: { name: "rowing",
    pic: 37, state: 6, wait: 4, next: 105, dvx: 15, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    wpoint: {
      kind: 1, x: 49, y: 57, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  105: { name: "rowing",
    pic: 37, state: 6, wait: 1, next: 106, dvx: 15, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    wpoint: {
      kind: 1, x: 49, y: 56, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  106: { name: "rowing",
    pic: 18, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    wpoint: {
      kind: 1, x: 50, y: 57, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  107: { name: "rowing",
    pic: 19, state: 6, wait: 1, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    wpoint: {
      kind: 1, x: 47, y: 57, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  108: { name: "rowing",
    pic: 117, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 62, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 36, y: 36, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  109: { name: "rowing",
    pic: 118, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fj: 274,
    wpoint: {
      kind: 1, x: 17, y: 49, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 56, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 285, hit_Fj: 273, hit_Uj: 250, hit_Dj: 260, hit_ja: 295,
    wpoint: {
      kind: 1, x: 39, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 19, w: 38, h: 60
    }
  },
  111: { name: "defend",
    pic: 57, state: 7, wait: 0, next: 110, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 43, y: 52, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 19, w: 42, h: 60
    }
  },
  112: { name: "broken_defend",
    pic: 46, state: 8, wait: 2, next: 113, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  113: { name: "broken_defend",
    pic: 47, state: 8, wait: 2, next: 114, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 50, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  114: { name: "broken_defend",
    pic: 48, state: 8, wait: 2, next: 999, dvx: -2, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 38, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: -9, y: 16, w: 85, h: 65, vrest: 1
    },
    bdy: {
      kind: 0, x: 5, y: 17, w: 64, h: 65
    }
  },
  115: { name: "picking_light",
    pic: 36, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 40, y: 75, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 30, w: 33, h: 49
    }
  },
  116: { name: "picking_heavy",
    pic: 36, state: 15, wait: 2, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 41, y: 79, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 27, w: 31, h: 52
    }
  },
  117: { name: "picking_heavy",
    pic: 36, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 75, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 30, w: 33, h: 48
    }
  },
  118: { name: "jump_attack",
    pic: 49, state: 3, wait: 1, next: 119, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 39, w: 67, h: 38, dvx: 1, fall: 60, arest: 15, bdefend: 60, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 21, y: 8, w: 37, h: 68
    }
  },
  119: { name: "jump_attack",
    pic: 59, state: 3, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 27, y: 8, w: 39, h: 71
    }
  },
  120: { name: "catching",
    pic: 51, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 40, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  121: { name: "catching",
    pic: 50, state: 9, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, hit_ja: 235,
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 45, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  122: { name: "catching",
    pic: 51, state: 9, wait: 5, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 41, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  123: { name: "catching",
    pic: 52, state: 9, wait: 3, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 58, y: 38, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 43, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 29, y: 55, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 27, y: 52, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 22, y: 43, weaponact: 26, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 43, y: 44, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 31, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 32, y: 35
    },
    wpoint: {
      kind: 1, x: 41, y: 33, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 32, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 38, y: 33
    },
    wpoint: {
      kind: 1, x: 32, y: 54, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 33, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 34, y: 44
    },
    wpoint: {
      kind: 1, x: 36, y: 38, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  137: { name: "picked_caught",
    pic: 34, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 71, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 68
    },
    wpoint: {
      kind: 1, x: 25, y: 75, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  138: { name: "picked_caught",
    pic: 35, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 34, y: 54
    },
    wpoint: {
      kind: 1, x: 33, y: 69, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  139: { name: "picked_caught",
    pic: 40, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 40, y: 36
    },
    wpoint: {
      kind: 1, x: 23, y: 45, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 41, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 36, y: 38
    },
    wpoint: {
      kind: 1, x: 24, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 42, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 40
    },
    wpoint: {
      kind: 1, x: 26, y: 41, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 43, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 25, y: 65, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  143: { name: "picked_caught",
    pic: 44, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 74, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 66
    },
    wpoint: {
      kind: 1, x: 40, y: 76, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 45, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 55
    },
    wpoint: {
      kind: 1, x: 26, y: 58, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  180: { name: "falling",
    pic: 30, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 33, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 33, y: 53, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 40, y: 37, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  185: { name: "falling",
    pic: 35, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 33, y: 71, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 40, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 23, y: 46, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 42, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 25, y: 38, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 26, y: 66, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 41, y: 76, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  191: { name: "falling",
    pic: 45, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 26, y: 58, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 108, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  204: { name: "fire",
    pic: 109, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 46, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  205: { name: "fire",
    pic: 110, state: 18, wait: 1, next: 206, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  206: { name: "fire",
    pic: 111, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 30, y: 33, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
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
    pic: 60, state: 4, wait: 1, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 67, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 28, w: 36, h: 52
    }
  },
  211: { name: "jump",
    pic: 61, state: 4, wait: 1, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 50, y: 69, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 28, w: 34, h: 52
    }
  },
  212: { name: "jump",
    pic: 62, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 46, y: 30
    },
    wpoint: {
      kind: 1, x: 48, y: 40, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      x: 54, y: 37
    },
    wpoint: {
      kind: 1, x: 49, y: 44, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      x: 32, y: 27
    },
    wpoint: {
      kind: 1, x: 41, y: 35, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 49, y: 71, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 28, w: 36, h: 51
    }
  },
  216: { name: "dash",
    pic: 112, state: 5, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bpoint: {
      x: 52, y: 36
    },
    wpoint: {
      kind: 1, x: 45, y: 40, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      x: 29, y: 29
    },
    wpoint: {
      kind: 1, x: 36, y: 35, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 13, w: 29, h: 51
    }
  },
  218: { name: "stop_running",
    pic: 114, state: 15, wait: 5, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    bpoint: {
      x: 43, y: 44
    },
    wpoint: {
      kind: 1, x: 44, y: 52, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 60, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 50, y: 73, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 30, w: 33, h: 49
    }
  },
  220: { name: "injured",
    pic: 120, state: 11, wait: 2, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 47, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 17, w: 29, h: 61
    }
  },
  221: { name: "injured",
    pic: 121, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 41, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
      kind: 1, x: 42, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 130, state: 11, wait: 2, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 40, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 25, y: 18, w: 31, h: 61
    }
  },
  225: { name: "injured",
    pic: 131, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 43, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 24, y: 18, w: 35, h: 63
    }
  },
  226: { name: "injured",
    pic: 120, state: 16, wait: 6, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 46, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 27, y: 22, w: 42, h: 58
    }
  },
  227: { name: "injured",
    pic: 122, state: 16, wait: 6, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 47, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 24, w: 39, h: 57
    }
  },
  228: { name: "injured",
    pic: 121, state: 16, wait: 6, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 48, y: 47, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 28, y: 23, w: 37, h: 58
    }
  },
  229: { name: "injured",
    pic: 122, state: 16, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 49, y: 46, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 29, y: 26, w: 37, h: 53
    }
  },
  230: { name: "lying",
    pic: 34, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 72, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 25, y: 74, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  231: { name: "lying",
    pic: 44, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 75, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 75, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  232: { name: "throw_lying_man",
    pic: 27, state: 9, wait: 3, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 28, y: 9, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 42, y: 48, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 15, w: 36, h: 65
    }
  },
  233: { name: "throw_lying_man",
    pic: 28, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 46, y: 52, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
    pic: 28, state: 9, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 52, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
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
  235: { name: "transform",
    pic: 90, state: 9, wait: 3, next: 236, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 150,
    sound: "1/063",
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 47, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  236: { name: "transform",
    pic: 91, state: 9, wait: 3, next: 237, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 47, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  237: { name: "transform",
    pic: 92, state: 9, wait: 3, next: 238, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 47, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  238: { name: "transform",
    pic: 93, state: 9, wait: 3, next: 239, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    opoint: {
      kind: 1, x: 41, y: 70, action: 70, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    cpoint: {
      kind: 1, x: 61, y: 39, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451
    },
    wpoint: {
      kind: 1, x: 47, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  239: { name: "transform",
    pic: 93, state: 9, wait: 1, next: 240, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 72, y: 80, vaction: 181, throwvx: 8, throwvy: -3, throwinjury: -1
    },
    wpoint: {
      kind: 1, x: 47, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  240: { name: "transform",
    pic: 93, state: 9, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 49, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 15, w: 28, h: 65
    }
  },
  245: { name: "transform_b",
    pic: 100, state: 9, wait: 1, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  246: { name: "transform_b",
    pic: 101, state: 9, wait: 1, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    opoint: {
      kind: 1, x: 41, y: 70, action: 70, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  247: { name: "transform_b",
    pic: 102, state: 9, wait: 1, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  248: { name: "transform_b",
    pic: 103, state: 9, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  250: { name: "disappear",
    pic: 85, state: 15, wait: 3, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 350,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  251: { name: "disappear",
    pic: 84, state: 15, wait: 2, next: 252, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  252: { name: "disappear",
    pic: 85, state: 15, wait: 2, next: 253, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  253: { name: "disappear",
    pic: 84, state: 15, wait: 1, next: 254, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  254: { name: "disappear",
    pic: 85, state: 15, wait: 1, next: 255, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  255: { name: "disappear",
    pic: 84, state: 15, wait: 1, next: 256, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  256: { name: "disappear",
    pic: 85, state: 15, wait: 1, next: 257, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 41, y: 70, action: 60, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  257: { name: "disappear",
    pic: 84, state: 15, wait: 1, next: 1280, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  260: { name: "+man",
    pic: 85, state: 15, wait: 3, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 350,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  261: { name: "+man",
    pic: 84, state: 15, wait: 2, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/062",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  262: { name: "+man",
    pic: 85, state: 15, wait: 2, next: 263, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  263: { name: "+man",
    pic: 84, state: 15, wait: 1, next: 264, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  264: { name: "+man",
    pic: 78, state: 15, wait: 1, next: 265, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  265: { name: "+man",
    pic: 79, state: 15, wait: 1, next: 266, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  266: { name: "+man",
    pic: 88, state: 15, wait: 1, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  267: { name: "+man",
    pic: 86, state: 15, wait: 2, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  268: { name: "+man",
    pic: 89, state: 15, wait: 1, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  269: { name: "+man",
    pic: 87, state: 15, wait: 1, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  270: { name: "+man",
    pic: 88, state: 15, wait: 1, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  271: { name: "+man",
    pic: 79, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 79, action: 0, dvx: 0, dvy: 0, oid: 5, facing: 20
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  273: { name: "jump_sword",
    pic: 22, state: 3, wait: 1, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 78, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 60, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 30, w: 52, h: 46
    }
  },
  274: { name: "jump_sword",
    pic: 150, state: 3, wait: 1, next: 275, dvx: 13, dvy: -7, dvz: 0, centerx: 40, centery: 59, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 46, y: 37, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 7, w: 44, h: 57
    }
  },
  275: { name: "jump_sword",
    pic: 150, state: 3, wait: 2, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 37, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 6, w: 43, h: 56
    }
  },
  276: { name: "jump_sword",
    pic: 151, state: 3, wait: 1, next: 277, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/028",
    wpoint: {
      kind: 1, x: 31, y: 37, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 39, y: 19, w: 55, h: 44, dvx: 2, fall: 60, vrest: 15, bdefend: 16, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 4, y: 3, w: 61, h: 56
    }
  },
  277: { name: "jump_sword",
    pic: 152, state: 3, wait: 1, next: 278, dvx: 0, dvy: 0, dvz: 0, centerx: 23, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 41, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 33, y: 1, w: 49, h: 38, dvx: 2, fall: 60, vrest: 15, bdefend: 16, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 5, y: 8, w: 56, h: 53
    }
  },
  278: { name: "jump_sword",
    pic: 153, state: 3, wait: 1, next: 279, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 57, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 42, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 17, y: 5, w: 54, h: 24, dvx: 2, fall: 60, vrest: 15, bdefend: 16, injury: 35, effect: 1
    },
    bdy: {
      kind: 0, x: 29, y: 7, w: 51, h: 56
    }
  },
  279: { name: "jump_sword",
    pic: 154, state: 3, wait: 1, next: 280, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 41, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 5, w: 50, h: 59
    }
  },
  280: { name: "jump_sword",
    pic: 155, state: 3, wait: 1, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 52, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 44, y: 38, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 8, w: 47, h: 56
    }
  },
  281: { name: "jump_sword",
    pic: 150, state: 3, wait: 7, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 54, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/027",
    wpoint: {
      kind: 1, x: 50, y: 41, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 6, w: 49, h: 57
    }
  },
  285: { name: "punch",
    pic: 10, state: 3, wait: 3, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    wpoint: {
      kind: 1, x: 46, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 15, w: 31, h: 63
    }
  },
  286: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 46, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 28, y: 14, w: 29, h: 63
    }
  },
  287: { name: "punch",
    pic: 12, state: 3, wait: 1, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 16, w: 30, h: 64
    }
  },
  288: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 75, y: 57, action: 40, dvx: 17, dvy: -3, oid: 202, facing: 50
    },
    wpoint: {
      kind: 1, x: 46, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 12, w: 32, h: 69
    }
  },
  289: { name: "punch",
    pic: 13, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 285, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 51, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 23, y: 12, w: 32, h: 69
    }
  },
  295: { name: "transform",
    pic: 103, state: 500, wait: 3, next: 296, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  296: { name: "transform",
    pic: 102, state: 9, wait: 2, next: 297, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/063",
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  297: { name: "transform",
    pic: 101, state: 9, wait: 1, next: 298, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/061",
    opoint: {
      kind: 1, x: 41, y: 70, action: 70, dvx: 0, dvy: 0, oid: 204, facing: 0
    },
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  298: { name: "transform",
    pic: 100, state: 501, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 49, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 79, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  }
  }
});