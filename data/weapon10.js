define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/weapon10.png", w: 58, h: 58, row: 10, col: 10
      }
    ],
    weapon_hp: 1200,
    weapon_drop_hurt: 200,
    weapon_hit_sound: "1/084",
    weapon_drop_sound: "1/084",
    weapon_broken_sound: "1/084"
  },
  frame: {
  0: { name: "in_the_sky",
    pic: 0, state: 2000, wait: 3, next: 1, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 21, w: 39, h: 39, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 60
    },
    bdy: {
      kind: 0, x: 8, y: 21, w: 39, h: 39
    }
  },
  1: { name: "in_the_sky",
    pic: 1, state: 2000, wait: 2, next: 2, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 21, w: 39, h: 39, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 60
    },
    bdy: {
      kind: 0, x: 8, y: 21, w: 39, h: 39
    }
  },
  2: { name: "in_the_sky",
    pic: 2, state: 2000, wait: 3, next: 3, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 21, w: 39, h: 39, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 60
    },
    bdy: {
      kind: 0, x: 8, y: 21, w: 39, h: 39
    }
  },
  3: { name: "in_the_sky",
    pic: 3, state: 2000, wait: 2, next: 4, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 21, w: 39, h: 39, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 60
    },
    bdy: {
      kind: 0, x: 8, y: 21, w: 39, h: 39
    }
  },
  4: { name: "in_the_sky",
    pic: 4, state: 2000, wait: 3, next: 5, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 21, w: 39, h: 39, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 60
    },
    bdy: {
      kind: 0, x: 8, y: 21, w: 39, h: 39
    }
  },
  5: { name: "in_the_sky",
    pic: 5, state: 2000, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 8, y: 21, w: 39, h: 39, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 60
    },
    bdy: {
      kind: 0, x: 8, y: 21, w: 39, h: 39
    }
  },
  10: { name: "on_hand",
    pic: 5, state: 2001, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    wpoint: {
      kind: 2, x: 29, y: 56, weaponact: 35, attacking: 0, cover: 0, dvx: 0, dvy: 0, dvz: 0
    }
  },
  20: { name: "on_ground",
    pic: 5, state: 2004, wait: 0, next: 0, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 13, y: 43, w: 31, h: 14
    }
  },
  21: { name: "just_on_ground",
    pic: 3, state: 2000, wait: 1, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    itr: {
      kind: 0, x: 19, y: 26, w: 21, h: 30, dvx: 5, dvy: -7, fall: 70, vrest: 17, bdefend: 30, injury: 60
    }
  },
  399: { name: "dummy",
    pic: 5, state: 0, wait: 2, next: 999, dvx: 0, dvy: 0, dvz: 0, centerx: 29, centery: 56, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 12, y: 42, w: 31, h: 14
    }
  }
  }
});
