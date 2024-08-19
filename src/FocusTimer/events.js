import * as el from "./elements.js";
import * as actions from "./action.js";

export function registerControls() {
  controls.addEventListener("click", event => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });

  sounds.addEventListener("click", event => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}
