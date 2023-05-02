gsap.registerPlugin(Draggable);

Draggable.create(".img", {
  onRelease() {
    console.log("x", this.x, "y", this.y);
  }
})
