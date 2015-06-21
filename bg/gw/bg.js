define({
  name: "The Great Wall",
  width: 2400, zboundary: [326, 477],
  shadow: "bg/gw/s.png", shadowsize: [37, 9],
  layer: [
    {
      pic: "bg/gw/sky.png",
      transparency: 0, width: 800, x: 0, y: 128, tile:1
    },
    {
      pic: "bg/gw/hill1.png",
      transparency: 1, width: 1204, x: 0, y: 142
    },
    {
      pic: "bg/gw/hill2.png",
      transparency: 1, width: 1204, x: 800, y: 142
    },
    {
      pic: "bg/gw/road1.png",
      transparency: 1, width: 2330, x: 0, y: 171
    },
    {
      pic: "bg/gw/road2.png",
      transparency: 1, width: 2400, x: 235, y: 256, loop: 93
    },
    {
      pic: "bg/gw/s.png",
      rect: 37770, x: 0, y: 324, width: 794, height: 157, tile:1
    },
    {
      pic: "bg/gw/road3.png",
      transparency: 0, width: 2600, x: 0, y: 481, loop: 104
    }
  ]
});
