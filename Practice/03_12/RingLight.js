const RingLight = class {
  constructor(colour, radius, lightColour, lightFlickering) {
    this.colour = colour;
    this.radius = radius;
    this.light = {
      colour: lightColour,
      flickering: lightFlickering,
    };
  }

  adjustLightColour(c) {
    this.light.colour = c;
  }

  toggleFlicker(flickering) {
    this.light.flickering = flickering;
  }
};

export default RingLight;
