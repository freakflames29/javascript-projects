let input = document.getElementById("tex");
let warn = document.getElementById("text");
input.addEventListener("keyup", function (e) {
  if (e.getModifierState("CapsLock")) {
    // warn.textContent = "shift is on";
    warn.style.display = "block";
  } else {
    warn.style.display = "none";
  }
});
