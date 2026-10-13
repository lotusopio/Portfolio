export const eyesView = {
  character: document.querySelector(".character"),
  iris: document.querySelector(".iris-layer"),

  getCenter() {
    const r = this.character.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  },

  render({ x, y }) {
    this.iris.style.transform = `translate(${x}px, ${y}px)`;
  },
};