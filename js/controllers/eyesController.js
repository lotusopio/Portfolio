import { eyesModel } from "../models/eyesModel.js";
import { eyesView } from "../views/eyesView.js";

export function initEyes() {
  document.addEventListener("mousemove", (e) => {
    const offset = eyesModel.getOffset(
      { x: e.clientX, y: e.clientY },
      eyesView.getCenter()
    );
    eyesView.render(offset);
  });
}