/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  changeName: function (name) {
    this.name = name;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  adjustVolume: function (volume) {
    this.volume = volume;
  },
  changeColor: function (color) {
    this.color = color;
  },
  adjustPocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
  },
};

console.log("Object before:", backpack);

console.log("Name before:", backpack.name);
backpack.changeName("Today's backpack");
console.log("Name after:", backpack.name);

console.log("Straps before:", backpack.strapLength);
backpack.newStrapLength(10, 10);
console.log("Straps after:", backpack.strapLength);

console.log("Volume before:", backpack.volume);
backpack.adjustVolume(10);
console.log("Volume after:", backpack.volume);

console.log("Color before:", backpack.color);
backpack.changeColor("Pink");
console.log("Color after:", backpack.color);

console.log("PocketNum before:", backpack.pocketNum);
backpack.adjustPocketNum(4);
console.log("PocketNum after:", backpack.pocketNum);

console.log("Object after:", backpack);
