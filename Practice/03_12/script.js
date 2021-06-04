/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import RingLight from "./RingLight.js";

const ringLight1 = new RingLight("black", 10, "orange", true);

console.log("RingLight object:", ringLight1);

console.log("Original light colour:", ringLight1.light.colour);
ringLight1.adjustLightColour("white");
console.log("After light colour:", ringLight1.light.colour);

console.log("Original flickering:", ringLight1.light.flickering);
ringLight1.toggleFlicker(false);
console.log("After flickering:", ringLight1.light.flickering);

console.log("After ring light:", ringLight1);
