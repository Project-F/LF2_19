define({
  bmp: {
    file: [
      {
        "file(0-99)": "sprite/broken.png", w: 27, h: 28, row: 10, col: 10
      },
      {
        "file(100-199)": "sprite/broken2.png", w: 27, h: 28, row: 10, col: 10
      }
    ]
  },
  broken_list: [
    { id:150, frame:0 }, //stone
    { id:150, frame:4 },
    { id:100, frame:10 }, //stick
    { id:100, frame:14 },
    { id:101, frame:20 }, //hoe
    { id:101, frame:24 },
    { id:101, frame:30 },
    { id:151, frame:40 }, //box
    { id:151, frame:44 },
    { id:151, frame:50 },
    { id:151, frame:54 },
    { id:121, frame:60 }, //baseball
    { id:122, frame:70 }, //milk
    { id:122, frame:74 },
    { id:122, frame:80 },
    { frame:101 }, //disappear
    { id:212, frame:120 }, //freeze_column
    { id:212, frame:125 },
    { id:212, frame:130 },
    { id:212, frame:135 },
    { id:302, frame:140 }, //burning_smoke
    { id:302, frame:141 },
    { id:302, frame:142 },
    { id:302, frame:143 },
    { id:213, frame:150 }, //ice_sword
    { id:213, frame:154 },
    { id:123, frame:160 }, //beer
    { id:123, frame:164 },
    { id:124, frame:170 }, //<
    { id:217, frame:174 }, //armour
    { id:218, frame:174 },
    { frame:399 } //dummy
  ],
  frame: {
  0: { name: "stone1",
    pic: 0, state: 9999, wait: 2, next: 1, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  1: { name: "stone2",
    pic: 1, state: 9999, wait: 2, next: 2, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  2: { name: "stone3",
    pic: 2, state: 9999, wait: 2, next: 3, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  3: { name: "stone4",
    pic: 3, state: 9999, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  4: { name: "sstone1",
    pic: 4, state: 9999, wait: 2, next: 5, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  5: { name: "sstone2",
    pic: 5, state: 9999, wait: 2, next: 6, dvx: 0, dvy: 0, centerx: 11, centery: 24, hit_a: 0, hit_d: 0, hit_j: 0
  },
  6: { name: "sstone3",
    pic: 6, state: 9999, wait: 2, next: 7, dvx: 0, dvy: 0, centerx: 16, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  7: { name: "sstone4",
    pic: 7, state: 9999, wait: 2, next: 4, dvx: 0, dvy: 0, centerx: 15, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  10: { name: "stick1",
    pic: 10, state: 9999, wait: 2, next: 11, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  11: { name: "stick2",
    pic: 11, state: 9999, wait: 2, next: 12, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  12: { name: "stick3",
    pic: 12, state: 9999, wait: 2, next: 13, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  13: { name: "stick4",
    pic: 13, state: 9999, wait: 2, next: 10, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  14: { name: "sstick1",
    pic: 14, state: 9999, wait: 2, next: 15, dvx: 0, dvy: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  15: { name: "sstick2",
    pic: 15, state: 9999, wait: 2, next: 16, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  16: { name: "sstick3",
    pic: 16, state: 9999, wait: 2, next: 17, dvx: 0, dvy: 0, centerx: 11, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  17: { name: "sstick4",
    pic: 17, state: 9999, wait: 2, next: 14, dvx: 0, dvy: 0, centerx: 13, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  20: { name: "hoe1",
    pic: 20, state: 9999, wait: 2, next: 21, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  21: { name: "hoe2",
    pic: 21, state: 9999, wait: 2, next: 22, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  22: { name: "hoe3",
    pic: 22, state: 9999, wait: 2, next: 23, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  23: { name: "hoe4",
    pic: 23, state: 9999, wait: 2, next: 20, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  24: { name: "s_hoe1",
    pic: 24, state: 9999, wait: 2, next: 25, dvx: 0, dvy: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  25: { name: "s_hoe2",
    pic: 25, state: 9999, wait: 2, next: 26, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  26: { name: "s_hoe3",
    pic: 26, state: 9999, wait: 2, next: 27, dvx: 0, dvy: 0, centerx: 11, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  27: { name: "s_hoe4",
    pic: 27, state: 9999, wait: 2, next: 24, dvx: 0, dvy: 0, centerx: 13, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  30: { name: "k_hoe1",
    pic: 30, state: 9999, wait: 2, next: 31, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  31: { name: "k_hoe2",
    pic: 31, state: 9999, wait: 2, next: 32, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  32: { name: "k_hoe3",
    pic: 32, state: 9999, wait: 2, next: 33, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  33: { name: "k_hoe4",
    pic: 33, state: 9999, wait: 2, next: 30, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  40: { name: "box01",
    pic: 40, state: 9999, wait: 2, next: 41, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  41: { name: "box02",
    pic: 41, state: 9999, wait: 2, next: 42, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  42: { name: "box03",
    pic: 42, state: 9999, wait: 2, next: 43, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  43: { name: "box04",
    pic: 43, state: 9999, wait: 2, next: 40, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  44: { name: "box11",
    pic: 44, state: 9999, wait: 2, next: 45, dvx: 0, dvy: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  45: { name: "box12",
    pic: 45, state: 9999, wait: 2, next: 46, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  46: { name: "box13",
    pic: 46, state: 9999, wait: 2, next: 47, dvx: 0, dvy: 0, centerx: 11, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  47: { name: "box14",
    pic: 47, state: 9999, wait: 2, next: 44, dvx: 0, dvy: 0, centerx: 13, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  50: { name: "box21",
    pic: 50, state: 9999, wait: 2, next: 51, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  51: { name: "box22",
    pic: 51, state: 9999, wait: 2, next: 52, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  52: { name: "box23",
    pic: 52, state: 9999, wait: 2, next: 53, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  53: { name: "box24",
    pic: 53, state: 9999, wait: 2, next: 50, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  54: { name: "box31",
    pic: 54, state: 9999, wait: 2, next: 55, dvx: 0, dvy: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  55: { name: "box32",
    pic: 55, state: 9999, wait: 2, next: 56, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  56: { name: "box33",
    pic: 56, state: 9999, wait: 2, next: 57, dvx: 0, dvy: 0, centerx: 11, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  57: { name: "box34",
    pic: 57, state: 9999, wait: 2, next: 54, dvx: 0, dvy: 0, centerx: 13, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  60: { name: "baseball1",
    pic: 60, state: 9999, wait: 2, next: 61, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  61: { name: "baseball2",
    pic: 61, state: 9999, wait: 2, next: 62, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  62: { name: "baseball3",
    pic: 62, state: 9999, wait: 2, next: 63, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  63: { name: "baseball4",
    pic: 63, state: 9999, wait: 2, next: 60, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  70: { name: "milk1",
    pic: 70, state: 9999, wait: 2, next: 71, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  71: { name: "milk2",
    pic: 71, state: 9999, wait: 2, next: 72, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  72: { name: "milk3",
    pic: 72, state: 9999, wait: 2, next: 73, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  73: { name: "milk4",
    pic: 73, state: 9999, wait: 2, next: 70, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  74: { name: "milk1",
    pic: 74, state: 9999, wait: 1, next: 75, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  75: { name: "milk2",
    pic: 75, state: 9999, wait: 4, next: 76, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  76: { name: "milk3",
    pic: 76, state: 9999, wait: 1, next: 77, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  77: { name: "milk4",
    pic: 77, state: 9999, wait: 2, next: 74, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  80: { name: "milk13",
    pic: 80, state: 9999, wait: 2, next: 81, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  81: { name: "milk23",
    pic: 81, state: 9999, wait: 2, next: 82, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  82: { name: "milk33",
    pic: 82, state: 9999, wait: 2, next: 83, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  83: { name: "milk43",
    pic: 83, state: 9999, wait: 2, next: 80, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  101: { name: "disappear",
    pic: 99, state: 9998, wait: 100, next: 0, dvx: 0, dvy: 0, centerx: 13, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  120: { name: "ice11",
    pic: 90, state: 9999, wait: 4, next: 121, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0, sound: '1/066'
  },
  121: { name: "ice21",
    pic: 91, state: 9999, wait: 4, next: 122, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  122: { name: "ice31",
    pic: 92, state: 9999, wait: 4, next: 123, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  123: { name: "ice41",
    pic: 93, state: 9999, wait: 4, next: 120, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  125: { name: "ice11",
    pic: 94, state: 9999, wait: 2, next: 126, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  126: { name: "ice21",
    pic: 95, state: 9999, wait: 2, next: 127, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  127: { name: "ice31",
    pic: 96, state: 9999, wait: 2, next: 128, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  128: { name: "ice41",
    pic: 97, state: 9999, wait: 2, next: 125, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  130: { name: "ice11",
    pic: 84, state: 9999, wait: 3, next: 131, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  131: { name: "ice21",
    pic: 85, state: 9999, wait: 3, next: 132, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  132: { name: "ice31",
    pic: 86, state: 9999, wait: 3, next: 133, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  133: { name: "ice41",
    pic: 87, state: 9999, wait: 3, next: 130, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  135: { name: "ice11",
    pic: 64, state: 9999, wait: 1, next: 136, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  136: { name: "ice21",
    pic: 65, state: 9999, wait: 1, next: 137, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  137: { name: "ice31",
    pic: 66, state: 9999, wait: 1, next: 138, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  138: { name: "ice41",
    pic: 67, state: 9999, wait: 1, next: 135, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  140: { name: "burning_smoke",
    pic: 8, state: 9999, wait: 1, next: 141, dvx: 0, dvy: -1, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  141: { name: "burning_smoke",
    pic: 9, state: 9999, wait: 1, next: 142, dvx: 0, dvy: -2, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  142: { name: "burning_smoke",
    pic: 18, state: 9999, wait: 1, next: 143, dvx: 0, dvy: -3, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  143: { name: "burning_smoke",
    pic: 19, state: 9999, wait: 1, next: 101, dvx: 0, dvy: -3, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  150: { name: "stick1",
    pic: 34, state: 9999, wait: 2, next: 151, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  151: { name: "stick2",
    pic: 35, state: 9999, wait: 2, next: 152, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  152: { name: "stick3",
    pic: 36, state: 9999, wait: 2, next: 153, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  153: { name: "stick4",
    pic: 37, state: 9999, wait: 2, next: 150, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  154: { name: "sstick1",
    pic: 38, state: 9999, wait: 2, next: 155, dvx: 0, dvy: 0, centerx: 17, centery: 25, hit_a: 0, hit_d: 0, hit_j: 0
  },
  155: { name: "sstick2",
    pic: 39, state: 9999, wait: 2, next: 156, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  156: { name: "sstick3",
    pic: 28, state: 9999, wait: 2, next: 157, dvx: 0, dvy: 0, centerx: 11, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  157: { name: "sstick4",
    pic: 29, state: 9999, wait: 2, next: 154, dvx: 0, dvy: 0, centerx: 13, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  160: { name: "beer1",
    pic: 100, state: 9999, wait: 2, next: 161, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  161: { name: "beer2",
    pic: 101, state: 9999, wait: 2, next: 162, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  162: { name: "beer3",
    pic: 102, state: 9999, wait: 2, next: 163, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  163: { name: "beer4",
    pic: 103, state: 9999, wait: 2, next: 160, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  164: { name: "beer1",
    pic: 110, state: 9999, wait: 1, next: 165, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  165: { name: "beer2",
    pic: 111, state: 9999, wait: 4, next: 166, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  166: { name: "beer3",
    pic: 112, state: 9999, wait: 1, next: 167, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  167: { name: "beer4",
    pic: 113, state: 9999, wait: 2, next: 164, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  170: { name: "<1",
    pic: 120, state: 9999, wait: 1, next: 171, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  171: { name: "<2",
    pic: 121, state: 9999, wait: 1, next: 172, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  172: { name: "<3",
    pic: 122, state: 9999, wait: 1, next: 173, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  173: { name: "<4",
    pic: 123, state: 9999, wait: 1, next: 170, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  174: { name: "armour1",
    pic: 48, state: 9999, wait: 1, next: 175, dvx: 0, dvy: 0, centerx: 10, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0
  },
  175: { name: "armour2",
    pic: 49, state: 9999, wait: 1, next: 176, dvx: 0, dvy: 0, centerx: 10, centery: 23, hit_a: 0, hit_d: 0, hit_j: 0
  },
  176: { name: "armour3",
    pic: 58, state: 9999, wait: 1, next: 177, dvx: 0, dvy: 0, centerx: 16, centery: 22, hit_a: 0, hit_d: 0, hit_j: 0
  },
  177: { name: "armour4",
    pic: 59, state: 9999, wait: 1, next: 174, dvx: 0, dvy: 0, centerx: 17, centery: 28, hit_a: 0, hit_d: 0, hit_j: 0
  },
  399: { name: "dummy",
    pic: 5, state: 0, wait: 2, next: 999, dvx: 0, dvy: 0, centerx: 13, centery: 27, hit_a: 0, hit_d: 0, hit_j: 0,
    bdy: {
      kind: 0, x: 1, y: 19, w: 46, h: 15
    }
  }
  }
});
