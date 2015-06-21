define({
  bmp: {
    file: [
      { "file": "sprite/effect0.png", w: 100, h: 75, row: 10, col: 1},
      { "file": "sprite/effect0.png", w: 60, h: 70, row: 10, col: 3}
    ]
  },

  effect_list: [
    { name: "small", frame: 10},
    { name: "big", frame: 0}
  ],

  frame: {
  0: { name: "big",
    pic: 0, wait: 0, next: 1, centerx: 51, centery: 40, sound: "1/006"
  },
  1: {
    pic: 1, wait: 0, next: 2, centerx: 51, centery: 40
  },
  2: {
    pic: 2, wait: 0, next: 3, centerx: 51, centery: 40
  },
  3: {
    pic: 3, wait: 0, next: 4, centerx: 51, centery: 40
  },
  4: {
    pic: 4, wait: 0, next: 1000, centerx: 51, centery: 40
  },

  10: { name: "small",
    pic: 20, wait: 0, next: 11, centerx: 30, centery: 34, sound: "1/001"
  },
  11: {
    pic: 21, wait: 0, next: 12, centerx: 30, centery: 34
  },
  12: {
    pic: 22, wait: 0, next: 13, centerx: 30, centery: 34
  },
  13: {
    pic: 23, wait: 0, next: 14, centerx: 30, centery: 34
  },
  14: {
    pic: 24, wait: 0, next: 1000, centerx: 30, centery: 34
  }
  }
});
