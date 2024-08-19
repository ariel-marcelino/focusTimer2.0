import state from "./state.js";
import * as sounds from "./sounds.js";
import * as timer from "./timer.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
}

export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
}

export function plusFive() {
  const elMinutes = document.getElementById("minutes");

  let minutes = parseInt(elMinutes.textContent);

  minutes += 5;

  elMinutes.textContent = String(minutes).padStart(2, "0");
}

export function minusFive() {
  const elMinutes = document.getElementById("minutes");

  let minutes = parseInt(elMinutes.textContent);

  minutes -= 5;

  if (minutes < 0) {
    minutes = 0;
    alert("Ação para diminuir 5 minutos invalida ");
    return;
  }

  elMinutes.textContent = String(minutes).padStart(2, "0");
}

export function toggleMusicTree() {
  state.isMute = document.documentElement.classList.toggle("music-Tree");

  if (state.isMute) {
    sounds.btnTree.play();
    return;
  }

  sounds.btnTree.pause();
}
export function toggleMusicCloud() {
  state.isMute = document.documentElement.classList.toggle("music-Cloud");

  if (state.isMute) {
    sounds.btnCloud.play();
    return;
  }

  sounds.btnCloud.pause();
}
export function toggleMusicStore() {
  state.isMute = document.documentElement.classList.toggle("music-Store");
  if (state.isMute) {
    sounds.btnStore.play();
    return;
  }

  sounds.btnStore.pause();
}
export function toggleMusicFire() {
  state.isMute = document.documentElement.classList.toggle("music-Fire");
  if (state.isMute) {
    sounds.btnFire.play();
    return;
  }

  sounds.btnFire.pause();
}
