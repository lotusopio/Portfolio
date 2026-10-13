import { profileModel } from "../models/profileModel.js";
import { profileView } from "../views/profileView.js";

export function initProfile() {
  profileView.render(profileModel);
}