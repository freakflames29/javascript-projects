let x = document.getElementById("text");
x.addEventListener("keyup", function (e) {
  if (e.keyCode == 65) {
    document.getElementById("btn").click();
  }
});
