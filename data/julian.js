define({
  bmp: {
    file: [
      {
        "file(0-49)": "sprite/julian_0.png", w: 79, h: 99, row: 10, col: 5
      },
      {
        "file(50-63)": "sprite/julian_1.png", w: 109, h: 99, row: 7, col: 2
      },
      {
        "file(64-113)": "sprite/julian_2.png", w: 79, h: 99, row: 10, col: 5
      }
    ],
    name: "Julian",
    head: "sprite/julian_f.png",
    small: "sprite/julian_s.png",
    walking_frame_rate: 3,
    walking_speed: 5.8,
    walking_speedz: 2.4,
    running_frame_rate: 3,
    running_speed: 12,
    running_speedz: 1.5,
    heavy_walking_speed: 5.2,
    heavy_walking_speedz: 2.1,
    heavy_running_speed: 10.3,
    heavy_running_speedz: 1.3,
    jump_height: -17.299999,
    jump_distance: 11,
    jump_distancez: 3.8,
    dash_height: -11,
    dash_distance: 19,
    dash_distancez: 5,
    rowing_height: -2,
    rowing_distance: 5
  },
  frame: {
  0: { name: "standing",
    pic: 0, state: 0, wait: 10, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 61, y: 69, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  1: { name: "standing",
    pic: 1, state: 0, wait: 4, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 61, y: 68, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  2: { name: "standing",
    pic: 2, state: 0, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 61, y: 67, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  3: { name: "standing",
    pic: 3, state: 0, wait: 8, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 62, y: 67, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  4: { name: "standing",
    pic: 2, state: 0, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 61, y: 67, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  5: { name: "walking",
    pic: 4, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 61, y: 69, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 31, y: 10, w: 57, h: 89,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  6: { name: "walking",
    pic: 5, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 61, y: 68, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 33, y: 11, w: 59, h: 90,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  7: { name: "walking",
    pic: 6, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 61, y: 67, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 32, y: 9, w: 60, h: 92,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  8: { name: "walking",
    pic: 7, state: 1, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 62, y: 67, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 1, x: 32, y: 6, w: 63, h: 96,
      catchingact: [120, 120], caughtact: [130, 130]
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  9: { name: "running",
    pic: 26, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 73, y: 47, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  10: { name: "running",
    pic: 27, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 62, y: 59, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  11: { name: "running",
    pic: 28, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 44, y: 65, weaponact: 23, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  12: { name: "heavy_obj_walk",
    pic: 30, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 18, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 13, w: 63, h: 86
    }
  },
  13: { name: "heavy_obj_walk",
    pic: 31, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 17, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 14, w: 60, h: 85
    }
  },
  14: { name: "heavy_obj_walk",
    pic: 32, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 17, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 10, w: 60, h: 91
    }
  },
  15: { name: "heavy_obj_walk",
    pic: 33, state: 1, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 17, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 7, w: 62, h: 93
    }
  },
  16: { name: "heavy_obj_run",
    pic: 34, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/003",
    wpoint: {
      kind: 1, x: 58, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 7, w: 63, h: 90
    }
  },
  17: { name: "heavy_obj_run",
    pic: 35, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 12, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 11, w: 64, h: 88
    }
  },
  18: { name: "heavy_obj_run",
    pic: 36, state: 2, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/004",
    wpoint: {
      kind: 1, x: 48, y: 13, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 7, w: 59, h: 93
    }
  },
  19: { name: "heavy_stop_run",
    pic: 41, state: 15, wait: 7, next: 999, dvx: 2, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 50, y: 20, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 9, w: 55, h: 90
    }
  },
  20: { name: "normal_weapon_atck",
    pic: 37, state: 15, wait: 2, next: 21, dvx: 3, dvy: 0, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 13, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  21: { name: "normal_weapon_atck",
    pic: 38, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 58, y: 67, weaponact: 24, attacking: 1, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 4, y: 15, w: 56, h: 86
    }
  },
  25: { name: "normal_weapon_atck",
    pic: 37, state: 15, wait: 2, next: 21, dvx: 3, dvy: 0, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 13, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  30: { name: "jump_weapon_atck",
    pic: 37, state: 3, wait: 1, next: 31, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 14, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 13, w: 47, h: 85
    }
  },
  31: { name: "jump_weapon_atck",
    pic: 39, state: 3, wait: 1, next: 32, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 58, y: 68, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  32: { name: "jump_weapon_atck",
    pic: 39, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 65, weaponact: 25, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  35: { name: "run_weapon_atck",
    pic: 37, state: 15, wait: 3, next: 36, dvx: 3, dvy: 0, dvz: 0, centerx: 31, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 13, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  36: { name: "run_weapon_atck",
    pic: 38, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 58, y: 68, weaponact: 24, attacking: 2, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 4, y: 15, w: 56, h: 86
    }
  },
  40: { name: "dash_weapon_atck",
    pic: 37, state: 3, wait: 1, next: 41, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 101, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 51, y: 13, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 13, w: 47, h: 85
    }
  },
  41: { name: "dash_weapon_atck",
    pic: 39, state: 3, wait: 1, next: 42, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 57, y: 68, weaponact: 24, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  42: { name: "dash_weapon_atck",
    pic: 39, state: 3, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 65, weaponact: 25, attacking: 4, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 32, w: 44, h: 67
      },
      {
        kind: 0, x: 29, y: 12, w: 26, h: 38
      }
    ]
  },
  45: { name: "light_weapon_thw",
    pic: 37, state: 15, wait: 3, next: 46, dvx: 0, dvy: 0, dvz: 0, centerx: 31, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 12, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 9, w: 59, h: 91
    }
  },
  46: { name: "light_weapon_thw",
    pic: 38, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 24, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 109, y: 60, weaponact: 35, attacking: 0, cover: 0, dvx: 24, dvy: -4, dvz: 3
    },
    bdy: {
      kind: 0, x: 4, y: 15, w: 56, h: 86
    }
  },
  50: { name: "heavy_weapon_thw",
    pic: 37, state: 15, wait: 3, next: 51, dvx: 0, dvy: 0, dvz: 0, centerx: 30, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 14, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 4, w: 59, h: 97
    }
  },
  51: { name: "heavy_weapon_thw",
    pic: 38, state: 15, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 26, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 101, y: 47, weaponact: 10, attacking: 0, cover: 0, dvx: 17, dvy: -4, dvz: 2
    },
    bdy: {
      kind: 0, x: 12, y: 16, w: 50, h: 84
    }
  },
  52: { name: "sky_lgt_wp_thw",
    pic: 37, state: 15, wait: 3, next: 53, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 52, y: 12, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 8, w: 44, h: 88
    }
  },
  53: { name: "sky_lgt_wp_thw",
    pic: 39, state: 15, wait: 1, next: 54, dvx: 0, dvy: -2, dvz: 0, centerx: 37, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/008",
    wpoint: {
      kind: 1, x: 59, y: 69, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 14, w: 46, h: 80
    }
  },
  54: { name: "sky_lgt_wp_thw",
    pic: 39, state: 15, wait: 9, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 107, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 80, y: 78, weaponact: 23, attacking: 0, cover: 0, dvx: 16, dvy: 8, dvz: 3
    },
    bdy: {
      kind: 0, x: 13, y: 17, w: 48, h: 85
    }
  },
  55: { name: "weapon_drink",
    pic: 46, state: 17, wait: 3, next: 56, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    sound: "1/042",
    wpoint: {
      kind: 1, x: 51, y: 30, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 12, w: 37, h: 67
    }
  },
  56: { name: "weapon_drink",
    pic: 47, state: 17, wait: 3, next: 57, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 29, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 20, w: 36, h: 59
    }
  },
  57: { name: "weapon_drink",
    pic: 48, state: 17, wait: 3, next: 58, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 28, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 17, w: 32, h: 63
    }
  },
  58: { name: "weapon_drink",
    pic: 47, state: 17, wait: 3, next: 55, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 999, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 29, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 16, y: 13, w: 36, h: 65
    }
  },
  60: { name: "punch",
    pic: 10, state: 3, wait: 2, next: 61, dvx: 2, dvy: 0, dvz: 0, centerx: 36, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 11, y: 79, w: 65, h: 28, vrest: 1
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  61: { name: "punch",
    pic: 11, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 35, y: 36, w: 46, h: 26, dvx: 2, fall: 25, vrest: 8, bdefend: 30, injury: 35
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  65: { name: "punch",
    pic: 12, state: 3, wait: 2, next: 66, dvx: 2, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 2, x: 8, y: 78, w: 65, h: 31, vrest: 1
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  66: { name: "punch",
    pic: 13, state: 3, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 33, y: 67, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 32, y: 37, w: 48, h: 31, dvx: 2, fall: 25, vrest: 8, bdefend: 30, injury: 35
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  70: { name: "super",
    pic: 15, state: 3, wait: 1, next: 71, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  71: { name: "super",
    pic: 16, state: 3, wait: 1, next: 72, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  72: { name: "super",
    pic: 17, state: 3, wait: 1, next: 73, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  73: { name: "super",
    pic: 18, state: 3, wait: 1, next: 74, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  74: { name: "super",
    pic: 19, state: 3, wait: 1, next: 75, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 34, y: 18, w: 41, h: 58, dvx: 7, dvy: 9, fall: 70, vrest: 10, bdefend: 60, injury: 60
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  75: { name: "super",
    pic: 29, state: 3, wait: 4, next: 76, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 70, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 43, y: 47, w: 34, h: 25, dvx: 7, dvy: 9, fall: 70, vrest: 10, bdefend: 60, injury: 60
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  76: { name: "super",
    pic: 10, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 33, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  79: { name: "singlong",
    pic: 25, state: 3, wait: 9, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 27, centery: 99, hit_a: 80, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 59, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 6, y: 16, w: 48, h: 75
    }
  },
  80: { name: "jump_attack",
    pic: 76, state: 3, wait: 3, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 59, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 13, w: 54, h: 76
    }
  },
  81: { name: "jump_attack",
    pic: 50, state: 3, wait: 20, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 25, y: 58, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 37, y: 56, w: 65, h: 32, dvx: 13, dvy: -4, fall: 70, vrest: 10, bdefend: 60, injury: 60
    },
    bdy: {
      kind: 0, x: 12, y: 13, w: 56, h: 73
    }
  },
  85: { name: "run_attack",
    pic: 51, state: 3, wait: 4, next: 300, dvx: 0, dvy: 0, dvz: 0, centerx: 60, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 67, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  86: { name: "singlong",
    pic: 21, state: 3, wait: 1, next: 87, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 34, y: 2, w: 41, h: 97, dvx: 7, dvy: -13, fall: 70, vrest: 10, bdefend: 60, injury: 80
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  87: { name: "singlong",
    pic: 22, state: 3, wait: 1, next: 88, dvx: 0, dvy: -7, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  88: { name: "singlong",
    pic: 23, state: 3, wait: 2, next: 89, dvx: 0, dvy: 0, dvz: 0, centerx: 22, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 1, y: 6, w: 65, h: 118, dvx: 7, dvy: -8, fall: 70, vrest: 10, bdefend: 60, injury: 60
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  89: { name: "singlong",
    pic: 24, state: 3, wait: 2, next: 79, dvx: 0, dvy: 0, dvz: 0, centerx: 20, centery: 99, hit_a: 80, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 31, y: 64, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  90: { name: "dash_attack",
    pic: 76, state: 3, wait: 3, next: 81, dvx: 0, dvy: 0, dvz: 0, centerx: 32, centery: 95, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 46, y: 59, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 13, w: 54, h: 76
    }
  },
  91: { name: "dash_attack",
    pic: 50, state: 3, wait: 20, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    wpoint: {
      kind: 1, x: 25, y: 58, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 37, y: 56, w: 65, h: 32, dvx: 13, dvy: -4, fall: 70, vrest: 10, bdefend: 60, injury: 80
    },
    bdy: {
      kind: 0, x: 12, y: 13, w: 56, h: 73
    }
  },
  100: { name: "rowing",
    pic: 55, state: 6, wait: 2, next: 101, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 106, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 59, y: 66, weaponact: 32, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  101: { name: "rowing",
    pic: 39, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 68, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  102: { name: "rowing",
    pic: 78, state: 6, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 3, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/030",
    wpoint: {
      kind: 1, x: 28, y: 60, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  103: { name: "rowing",
    pic: 49, state: 6, wait: 10, next: 104, dvx: 10, dvy: 0, dvz: 3, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 39, y: 99, action: 240, dvx: 0, dvy: 0, oid: 52, facing: 0
    },
    wpoint: {
      kind: 1, x: 28, y: 60, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  104: { name: "rowing",
    pic: 77, state: 6, wait: 3, next: 105, dvx: 0, dvy: 0, dvz: 1, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 28, y: 60, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  105: { name: "rowing",
    pic: 78, state: 6, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 1, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 106, hit_Fa: 260,
    wpoint: {
      kind: 1, x: 28, y: 60, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  106: { name: "rowing",
    pic: 78, state: 6, wait: 1, next: 103, dvx: 0, dvy: 0, dvz: 3, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 25,
    sound: "1/030",
    wpoint: {
      kind: 1, x: 28, y: 60, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  108: { name: "rowing",
    pic: 54, state: 6, wait: 3, next: 109, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 105, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 55, y: 59, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  109: { name: "rowing",
    pic: 67, state: 6, wait: 6, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 63, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  110: { name: "defend",
    pic: 42, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 34, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 55, y: 38, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  111: { name: "defend",
    pic: 42, state: 7, wait: 12, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, hit_Fa: 260, hit_Ua: 235, hit_Fj: 280, hit_Uj: 310, hit_ja: 106,
    wpoint: {
      kind: 1, x: 55, y: 38, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 9, w: 52, h: 94
    }
  },
  112: { name: "broken_defend",
    pic: 66, state: 8, wait: 1, next: 113, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 62, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 6, w: 53, h: 94
    }
  },
  113: { name: "broken_defend",
    pic: 67, state: 8, wait: 2, next: 114, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 65, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 6, w: 57, h: 92
    }
  },
  114: { name: "broken_defend",
    pic: 69, state: 8, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 65, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 10, w: 54, h: 90
    }
  },
  115: { name: "picking_light",
    pic: 14, state: 15, wait: 4, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 38, y: 72, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 22, w: 52, h: 75
    }
  },
  116: { name: "picking_heavy",
    pic: 14, state: 15, wait: 1, next: 117, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 42, y: 98, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 23, w: 49, h: 75
    }
  },
  117: { name: "picking_heavy",
    pic: 14, state: 15, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 42, y: 84, weaponact: 10, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 22, w: 49, h: 78
    }
  },
  120: { name: "catching",
    pic: 44, state: 9, wait: 2, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/015",
    cpoint: {
      kind: 1, x: 67, y: 39, vaction: 131, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 43, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 17, y: 13, w: 49, h: 89
    }
  },
  121: { name: "catching",
    pic: 43, state: 9, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 61, y: 49, vaction: 130, aaction: 122, taction: -232, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: -7
    },
    wpoint: {
      kind: 1, x: 27, y: 59, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 11, w: 54, h: 84
    }
  },
  122: { name: "catching",
    pic: 44, state: 9, wait: 3, next: 123, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 66, y: 51, vaction: 130, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 7
    },
    wpoint: {
      kind: 1, x: 36, y: 59, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 10, w: 52, h: 86
    }
  },
  123: { name: "catching",
    pic: 45, state: 9, wait: 3, next: 121, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/014",
    cpoint: {
      kind: 1, x: 56, y: 49, injury: 15, vaction: 132, throwvz: -842150451, hurtable: 1, throwinjury: -842150451, decrease: 3
    },
    wpoint: {
      kind: 1, x: 37, y: 62, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 4, w: 52, h: 92
    }
  },
  130: { name: "picked_caught",
    pic: 68, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 42, y: 60, fronthurtact: 132, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 28, y: 54, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  131: { name: "picked_caught",
    pic: 69, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 54, y: 56, fronthurtact: 132, backhurtact: 132
    },
    wpoint: {
      kind: 1, x: 49, y: 58, weaponact: 30, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  132: { name: "picked_caught",
    pic: 69, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 51, y: 58, fronthurtact: 131, backhurtact: 131
    },
    wpoint: {
      kind: 1, x: 50, y: 57, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 26, y: 14, w: 28, h: 66
    }
  },
  133: { name: "picked_caught",
    pic: 64, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 44, y: 47
    },
    wpoint: {
      kind: 1, x: 35, y: 51, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  134: { name: "picked_caught",
    pic: 65, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 35, y: 51
    },
    wpoint: {
      kind: 1, x: 35, y: 45, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  135: { name: "picked_caught",
    pic: 54, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 51, y: 39
    },
    wpoint: {
      kind: 1, x: 51, y: 63, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  136: { name: "picked_caught",
    pic: 55, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 49, y: 46
    },
    wpoint: {
      kind: 1, x: 55, y: 59, weaponact: 33, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    }
  },
  137: { name: "picked_caught",
    pic: 56, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 43, y: 73
    },
    wpoint: {
      kind: 1, x: 55, y: 86, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  138: { name: "picked_caught",
    pic: 54, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 43
    },
    wpoint: {
      kind: 1, x: 50, y: 66, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  139: { name: "picked_caught",
    pic: 74, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 40
    },
    wpoint: {
      kind: 1, x: 22, y: 62, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  140: { name: "picked_caught",
    pic: 75, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 63
    },
    wpoint: {
      kind: 1, x: 28, y: 57, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  141: { name: "picked_caught",
    pic: 57, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 59, y: 56
    },
    wpoint: {
      kind: 1, x: 41, y: 58, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  142: { name: "picked_caught",
    pic: 58, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 46, y: 51
    },
    wpoint: {
      kind: 1, x: 44, y: 56, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  143: { name: "picked_caught",
    pic: 59, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 45, y: 86
    },
    wpoint: {
      kind: 1, x: 56, y: 90, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  144: { name: "picked_caught",
    pic: 58, state: 10, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 44, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 2, x: 50, y: 63
    },
    wpoint: {
      kind: 1, x: 40, y: 60, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  180: { name: "falling",
    pic: 64, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 101, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 56, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 17, y: 39, w: 35, h: 31, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 23, y: 45, w: 22, h: 21
    }
  },
  181: { name: "falling",
    pic: 65, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 103, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 50, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 12, y: 33, w: 29, h: 23, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 20, y: 45, w: 33, h: 27, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 20, y: 41, w: 26, h: 22
    }
  },
  182: { name: "falling",
    pic: 54, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 54, y: 64, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 33, y: 37, w: 39, h: 30, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 37, y: 38, w: 27, h: 24
    }
  },
  183: { name: "falling",
    pic: 55, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 94, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 53, y: 63, weaponact: 33, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: [
      {
        kind: 4, x: 55, y: 32, w: 27, h: 19, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      },
      {
        kind: 4, x: 30, y: 37, w: 36, h: 32, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
      }
    ],
    bdy: {
      kind: 0, x: 38, y: 40, w: 26, h: 22
    }
  },
  184: { name: "falling",
    pic: 56, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 54, centery: 90, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 59, y: 89, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  185: { name: "falling",
    pic: 54, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 55, centery: 87, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 50, y: 64, weaponact: 31, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  186: { name: "falling",
    pic: 74, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 20, y: 62, weaponact: 34, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 19, y: 37, w: 42, h: 36, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 31, y: 47, w: 25, h: 24
    }
  },
  187: { name: "falling",
    pic: 75, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 102, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 27, y: 56, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 22, y: 26, w: 41, h: 57, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 25, y: 49, w: 25, h: 22
    }
  },
  188: { name: "falling",
    pic: 57, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 51, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 53, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 4, x: 34, y: 29, w: 35, h: 32, dvx: 2, fall: 70, vrest: 20, bdefend: 10, injury: 30
    },
    bdy: {
      kind: 0, x: 42, y: 38, w: 26, h: 23
    }
  },
  189: { name: "falling",
    pic: 58, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 83, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 45, y: 54, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
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
    pic: 59, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 92, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 63, y: 91, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  191: { name: "falling",
    pic: 57, state: 12, wait: 3, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 53, centery: 76, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 55, weaponact: 25, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  200: { name: "ice",
    pic: 8, state: 15, wait: 2, next: 201, dvx: 0, dvy: 0, dvz: 0, centerx: 46, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 39, y: 58, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 12, y: 15, w: 61, h: 84
    }
  },
  201: { name: "ice",
    pic: 9, state: 13, wait: 90, next: 202, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 10, y: 65, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 14, x: 8, y: 12, w: 66, h: 86, vrest: 1
    },
    bdy: {
      kind: 0, x: 8, y: 12, w: 66, h: 86
    }
  },
  202: { name: "ice",
    pic: 8, state: 15, wait: 1, next: 182, dvx: -4, dvy: -3, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 37, y: 60, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 8, y: 6, w: 67, h: 73
    }
  },
  203: { name: "fire",
    pic: 61, state: 18, wait: 1, next: 204, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  204: { name: "fire",
    pic: 60, state: 18, wait: 1, next: 203, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  205: { name: "fire",
    pic: 61, state: 18, wait: 1, next: 206, dvx: 0, dvy: 0, dvz: 0, centerx: 48, centery: 97, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 47, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  206: { name: "fire",
    pic: 60, state: 18, wait: 1, next: 205, dvx: 0, dvy: 0, dvz: 0, centerx: 57, centery: 91, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: 22, y: 35, w: 26, h: 19, dvx: -6, dvy: -6, fall: 70, vrest: 10, bdefend: 16, injury: 30, effect: 20
    },
    bdy: {
      kind: 0, x: 22, y: 35, w: 26, h: 19
    }
  },
  207: { name: "tired",
    pic: 69, state: 15, wait: 2, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
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
    pic: 14, state: 4, wait: 2, next: 211, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 73, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 19, w: 53, h: 83
    }
  },
  211: { name: "jump",
    pic: 14, state: 4, wait: 2, next: 212, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/017",
    wpoint: {
      kind: 1, x: 40, y: 73, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 20, w: 52, h: 80
    }
  },
  212: { name: "jump",
    pic: 25, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 63, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 22, y: 5, w: 37, h: 84
    }
  },
  213: { name: "jump",
    pic: 25, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 62, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 18, y: 1, w: 37, h: 92
    }
  },
  214: { name: "jump",
    pic: 25, state: 4, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 63, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 19, y: 5, w: 38, h: 88
    }
  },
  215: { name: "crouch",
    pic: 14, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 36, y: 74, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 22, w: 50, h: 76
    }
  },
  218: { name: "stop_running",
    pic: 40, state: 15, wait: 6, next: 999, dvx: 1, dvy: 0, dvz: 0, centerx: 26, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/009",
    wpoint: {
      kind: 1, x: 53, y: 59, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 16, y: 8, w: 47, h: 92
      },
      {
        kind: 0, x: 45, y: 47, w: 16, h: 32
      }
    ]
  },
  219: { name: "crouch2",
    pic: 14, state: 15, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/012",
    wpoint: {
      kind: 1, x: 38, y: 73, weaponact: 23, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 21, w: 53, h: 77
    }
  },
  220: { name: "injured",
    pic: 66, state: 11, wait: 2, next: 221, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: 64, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 27, y: 16, w: 38, h: 85
    }
  },
  221: { name: "injured",
    pic: 67, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 55, y: 57, weaponact: 22, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 18, y: 16, w: 47, h: 85
      },
      {
        kind: 0, x: 22, y: 37, w: 26, h: 42
      }
    ]
  },
  222: { name: "injured",
    pic: 69, state: 11, wait: 2, next: 223, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 60, y: 54, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 14, w: 45, h: 83
    }
  },
  223: { name: "injured",
    pic: 68, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 58, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 15, w: 50, h: 78
    }
  },
  224: { name: "injured",
    pic: 69, state: 11, wait: 2, next: 225, dvx: 0, dvy: 0, dvz: 0, centerx: 45, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 59, y: 55, weaponact: 20, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 13, y: 14, w: 45, h: 83
    }
  },
  225: { name: "injured",
    pic: 68, state: 11, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 35, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 60, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 14, y: 15, w: 50, h: 78
    }
  },
  226: { name: "injured",
    pic: 69, state: 16, wait: 6, next: 227, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 59, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 26, y: 24, w: 41, h: 74
    }
  },
  227: { name: "injured",
    pic: 67, state: 16, wait: 6, next: 228, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 57, y: 57, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 23, y: 22, w: 46, h: 77
    }
  },
  228: { name: "injured",
    pic: 66, state: 16, wait: 6, next: 229, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 69, y: 62, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 23, y: 11, w: 43, h: 86
    }
  },
  229: { name: "injured",
    pic: 67, state: 16, wait: 6, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 58, y: 55, weaponact: 21, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 6, x: 6, y: 12, w: 85, h: 68, vrest: 1
    },
    bdy: {
      kind: 0, x: 18, y: 12, w: 49, h: 87
    }
  },
  230: { name: "lying",
    pic: 56, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 52, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 90, weaponact: 32, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  231: { name: "lying",
    pic: 59, state: 14, wait: 30, next: 219, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 96, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 62, y: 92, weaponact: 24, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  232: { name: "throw_lying_man",
    pic: 37, state: 9, wait: 3, next: 233, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    cpoint: {
      kind: 1, x: 37, y: 8, vaction: 135, throwvz: -842150451, throwinjury: -842150451, dircontrol: 1
    },
    wpoint: {
      kind: 1, x: 30, y: 21, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 29, y: 25, w: 41, h: 74
    }
  },
  233: { name: "throw_lying_man",
    pic: 38, state: 9, wait: 1, next: 234, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/007",
    cpoint: {
      kind: 1, x: 72, y: 53, vaction: 181, throwvx: 13, throwvy: -7, throwvz: 3, throwinjury: 30
    },
    wpoint: {
      kind: 1, x: 56, y: 65, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: [
      {
        kind: 0, x: 7, y: 15, w: 53, h: 84
      },
      {
        kind: 0, x: 19, y: 56, w: 30, h: 24
      }
    ]
  },
  234: { name: "throw_lying_man",
    pic: 38, state: 9, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 56, y: 65, weaponact: 25, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 9, y: 15, w: 46, h: 83
    }
  },
  235: { name: "singlong",
    pic: 20, state: 3, wait: 1, next: 86, dvx: 10, dvy: 0, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 40, y: 69, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 10, y: 10, w: 64, h: 90
    }
  },
  240: { name: "shadow",
    pic: 78, state: 15, wait: 25, next: 241, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  241: { name: "shadow",
    pic: 80, state: 15, wait: 2, next: 242, dvx: 0, dvy: 0, dvz: 0, centerx: 41, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  242: { name: "shadow",
    pic: 79, state: 15, wait: 2, next: 243, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  243: { name: "shadow",
    pic: 80, state: 15, wait: 2, next: 244, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  244: { name: "shadow",
    pic: 78, state: 15, wait: 2, next: 245, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  245: { name: "shadow",
    pic: 81, state: 15, wait: 2, next: 246, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  246: { name: "shadow",
    pic: 82, state: 15, wait: 2, next: 247, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  247: { name: "shadow",
    pic: 81, state: 15, wait: 2, next: 248, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  248: { name: "shadow",
    pic: 78, state: 15, wait: 2, next: 249, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  249: { name: "shadow",
    pic: 70, state: 15, wait: 2, next: 250, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  250: { name: "shadow",
    pic: 71, state: 15, wait: 2, next: 251, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  251: { name: "shadow",
    pic: 72, state: 15, wait: 2, next: 1000, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0
  },
  260: { name: "ball",
    pic: 84, state: 3, wait: 3, next: 261, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0, mp: 10,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  261: { name: "ball",
    pic: 85, state: 3, wait: 0, next: 262, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/091",
    opoint: {
      kind: 1, x: 60, y: 50, action: 100, dvx: 15, dvy: 0, oid: 228, facing: 0
    },
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  262: { name: "ball",
    pic: 86, state: 3, wait: 1, next: 263, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 276, hit_j: 276, mp: -10,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  263: { name: "ball",
    pic: 87, state: 3, wait: 1, next: 264, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0, mp: 10,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  264: { name: "ball",
    pic: 88, state: 3, wait: 0, next: 265, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/091",
    opoint: {
      kind: 1, x: 60, y: 50, action: 100, dvx: 15, dvy: 0, oid: 228, facing: 0
    },
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  265: { name: "ball",
    pic: 89, state: 3, wait: 1, next: 266, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  266: { name: "ball",
    pic: 90, state: 3, wait: 1, next: 267, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 276, hit_j: 276, mp: -10,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  267: { name: "ball",
    pic: 91, state: 3, wait: 1, next: 268, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  268: { name: "ball",
    pic: 92, state: 3, wait: 0, next: 269, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/091",
    opoint: {
      kind: 1, x: 60, y: 50, action: 100, dvx: 15, dvy: 0, oid: 228, facing: 0
    },
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  269: { name: "ball",
    pic: 93, state: 3, wait: 1, next: 270, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 276, hit_j: 276, mp: -10,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  270: { name: "ball",
    pic: 103, state: 3, wait: 1, next: 271, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  271: { name: "ball",
    pic: 102, state: 3, wait: 0, next: 272, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/091",
    opoint: {
      kind: 1, x: 60, y: 50, action: 100, dvx: 15, dvy: 0, oid: 228, facing: 0
    },
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  272: { name: "ball",
    pic: 101, state: 3, wait: 1, next: 273, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 276, hit_j: 276, mp: -10,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  273: { name: "ball",
    pic: 100, state: 3, wait: 1, next: 274, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  274: { name: "ball",
    pic: 99, state: 3, wait: 0, next: 275, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/091",
    opoint: {
      kind: 1, x: 60, y: 50, action: 100, dvx: 15, dvy: 0, oid: 228, facing: 0
    },
    wpoint: {
      kind: 1, x: 35, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  275: { name: "ball",
    pic: 98, state: 3, wait: 1, next: 276, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 263, hit_d: 276, hit_j: 276, hit_Fa: 263, mp: -10,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  276: { name: "ball_end",
    pic: 97, state: 3, wait: 3, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 42, centery: 98, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 41, y: 59, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  280: { name: "big_ball",
    pic: 94, state: 3, wait: 3, next: 281, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0, mp: 125,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  281: { name: "big_ball",
    pic: 95, state: 3, wait: 0, next: 282, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  282: { name: "big_ball",
    pic: 96, state: 3, wait: 0, next: 283, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  283: { name: "big_ball",
    pic: 95, state: 3, wait: 0, next: 284, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  284: { name: "big_ball",
    pic: 96, state: 3, wait: 0, next: 285, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  285: { name: "big_ball",
    pic: 95, state: 3, wait: 0, next: 286, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  286: { name: "big_ball",
    pic: 96, state: 3, wait: 0, next: 287, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  287: { name: "big_ball",
    pic: 95, state: 3, wait: 0, next: 288, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  288: { name: "big_ball",
    pic: 96, state: 3, wait: 0, next: 289, dvx: 0, dvy: 0, dvz: 0, centerx: 38, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  289: { name: "big_ball",
    pic: 104, state: 3, wait: 0, next: 290, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/019",
    opoint: {
      kind: 1, x: 90, y: 50, action: 0, dvx: 15, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  290: { name: "big_ball",
    pic: 105, state: 3, wait: 0, next: 291, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  291: { name: "big_ball",
    pic: 106, state: 3, wait: 5, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 43, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 20, y: 10, w: 43, h: 89
    }
  },
  300: { name: "run_attack",
    pic: 52, state: 3, wait: 0, next: 301, dvx: 15, dvy: 0, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/031",
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -1, y: 38, w: 108, h: 40, dvx: 25, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 90
    },
    bdy: {
      kind: 0, x: 7, y: 19, w: 71, h: 82
    }
  },
  301: { name: "run_attack",
    pic: 53, state: 3, wait: 0, next: 302, dvx: 15, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -1, y: 38, w: 108, h: 40, dvx: 25, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 90
    },
    bdy: {
      kind: 0, x: 7, y: 19, w: 71, h: 82
    }
  },
  302: { name: "run_attack",
    pic: 52, state: 3, wait: 0, next: 303, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -1, y: 38, w: 108, h: 40, dvx: 25, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 90
    },
    bdy: {
      kind: 0, x: 7, y: 19, w: 71, h: 82
    }
  },
  303: { name: "run_attack",
    pic: 53, state: 3, wait: 0, next: 304, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -1, y: 38, w: 108, h: 40, dvx: 25, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 90
    },
    bdy: {
      kind: 0, x: 7, y: 19, w: 71, h: 82
    }
  },
  304: { name: "run_attack",
    pic: 52, state: 3, wait: 0, next: 305, dvx: 0, dvy: 0, dvz: 0, centerx: 28, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -1, y: 38, w: 108, h: 40, dvx: 25, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 90
    },
    bdy: {
      kind: 0, x: 7, y: 19, w: 71, h: 82
    }
  },
  305: { name: "run_attack",
    pic: 53, state: 3, wait: 0, next: 306, dvx: 0, dvy: 0, dvz: 0, centerx: 25, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 32, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    itr: {
      kind: 0, x: -1, y: 38, w: 108, h: 40, dvx: 25, dvy: -9, fall: 70, vrest: 8, bdefend: 60, injury: 90
    },
    bdy: {
      kind: 0, x: 7, y: 19, w: 71, h: 82
    }
  },
  306: { name: "run_attack",
    pic: 62, state: 3, wait: 4, next: 307, dvx: 0, dvy: 0, dvz: 0, centerx: 36, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 11, y: 24, w: 73, h: 76
    }
  },
  307: { name: "run_attack",
    pic: 63, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 37, centery: 99, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 34, y: 62, weaponact: 31, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  310: { name: "explosion",
    pic: 107, state: 3, wait: 1, next: 311, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0, mp: 100,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  311: { name: "explosion",
    pic: 108, state: 3, wait: 0, next: 312, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  312: { name: "explosion",
    pic: 107, state: 3, wait: 1, next: 313, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  313: { name: "explosion",
    pic: 108, state: 3, wait: 0, next: 314, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  314: { name: "explosion",
    pic: 109, state: 3, wait: 1, next: 315, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  315: { name: "explosion",
    pic: 108, state: 3, wait: 0, next: 316, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  316: { name: "explosion",
    pic: 109, state: 3, wait: 1, next: 317, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  317: { name: "explosion",
    pic: 108, state: 3, wait: 0, next: 318, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    sound: "1/018",
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  318: { name: "explosion",
    pic: 110, state: 3, wait: 8, next: 319, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    opoint: {
      kind: 1, x: 40, y: 100, action: 40, dvx: 0, dvy: 0, oid: 229, facing: 0
    },
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  319: { name: "explosion",
    pic: 110, state: 3, wait: 7, next: 320, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  320: { name: "explosion",
    pic: 110, state: 3, wait: 7, next: 321, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  321: { name: "explosion",
    pic: 111, state: 3, wait: 2, next: 322, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  322: { name: "explosion",
    pic: 112, state: 3, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 40, centery: 100, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 1, x: 35, y: 62, weaponact: 30, attacking: 0, cover: 1, dvx: 0, dvy: 0, dvz: 0
    },
    bdy: {
      kind: 0, x: 15, y: 27, w: 70, h: 71
    }
  },
  399: { name: "dummy",
    pic: 0, state: 0, wait: 1, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 39, centery: 81, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 21, y: 18, w: 43, h: 62
    }
  }
  }
});