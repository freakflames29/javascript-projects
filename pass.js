function show() {
  let x = document.getElementById("pas");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
