import { projectsModel } from "../models/projectsModel.js";
import { projectsView } from "../views/projectsView.js";

export function initProjects() {
  projectsView.render(projectsModel.getAll());
}