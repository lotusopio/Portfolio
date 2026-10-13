export const eyesModel = {
  maxOffset: 12, // máximo que se mueve el iris, en px
  sensitivity: 15, // más alto = se mueve más suave

  getOffset(mouse, center) {
    const dx = mouse.x - center.x;
    const dy = mouse.y - center.y;
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(this.maxOffset, Math.hypot(dx, dy) / this.sensitivity);
    return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
  },
};