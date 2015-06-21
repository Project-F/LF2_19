define({
  bmp: {
    file: [
      { "file": "sprite/effect0.png", w: 100, h: 69, row: 10, col: 3},
      { "file": "sprite/effect0.png", w: 60, h: 51, row: 10, col: 5}
    ]
  },

  effect_list: [
    { name: "small", frame: 10},
    { name: "big", frame: 0}
  ],

  frame: {
  0: { name: "big",
    pic: 21, wait: 0, next: 1, centerx: 49, centery: 28, sound: '1/033'
  },
  1: {
    pic: 22, wait: 0, next: 2, centerx: 49, centery: 28
  },
  2: {
    pic: 23, wait: 0, next: 3, centerx: 49, centery: 28
  },
  3: {
    pic: 24, wait: 0, next: 4, centerx: 49, centery: 28
  },
  4: {
    pic: 25, wait: 0, next: 1000, centerx: 49, centery: 28
  },

  10: { name: "small",
    pic: 70, wait: 0, next: 11, centerx: 28, centery: 27, sound: '1/032'
  },
  11: {
    pic: 71, wait: 0, next: 12, centerx: 28, centery: 27
  },
  12: {
    pic: 72, wait: 0, next: 13, centerx: 28, centery: 27
  },
  13: {
    pic: 73, wait: 0, next: 14, centerx: 28, centery: 27
  },
  14: {
    pic: 74, wait: 0, next: 1000, centerx: 28, centery: 27
  }
  }
});
