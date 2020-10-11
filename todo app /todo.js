// variables
const globl = document.getElementById("tasklist");

// addEventListener
eve();

function eve() {
  document.getElementById("for").addEventListener("submit", todo);
  globl.addEventListener("click", remv);
  document.addEventListener("DOMContentLoaded", rfromlocal);
}
function jio(txt) {
  var mon = document.getElementById("button");
  // mon.disabled=true;
  if (txt.value !== "") {
    mon.disabled = false;
  } else {
    mon.disabled = true;
  }
}

// function

function todo(e) {
  e.preventDefault();
  let task = document.getElementById("textarea").value;
  let newel = document.createElement("li");
  newel.classList = "lists";
  newel.textContent = task;
  let b = document.createElement("a");
  b.classList = "remove-todo";
  b.textContent = "Done";
  newel.appendChild(b);

  globl.appendChild(newel);
  stolocal(task);
}

//remove element
function remv(e) {
  if (e.target.classList.contains("remove-todo")) {
    e.target.parentElement.remove();
  }
  remfromlocal(e.target.parentElement.textContent);
  // remfromlocal(e.target.pa)
}

// save into localStorage
function stolocal(ta) {
  let tod = gfromlocal();
  tod.push(ta);
  localStorage.setItem("todo", JSON.stringify(tod));
}

function gfromlocal() {
  let arr;
  let mango = localStorage.getItem("todo");
  if (mango == null) {
    arr = [];
  } else {
    arr = JSON.parse(mango);
  }
  return arr;
}

// retrive form localStorage
function rfromlocal() {
  let r = gfromlocal();
  r.forEach(function (sexy) {
    let newel = document.createElement("li");
    newel.textContent = sexy;
    let b = document.createElement("a");
    b.classList = "remove-todo";
    b.textContent = "Done";
    newel.appendChild(b);

    globl.appendChild(newel);
  });
}

// remove from localStorage

function remfromlocal(task) {
  let rfl = gfromlocal();
  let b = task.substring(0, task.length - 4);
  console.log(b);
  rfl.forEach(function (el, index) {
    if (el == b) {
      rfl.splice(index, 1);
    }
  });
  localStorage.setItem("todo", JSON.stringify(rfl));
}

// checking if text is inputted then activate the button

// adding enter to button
let ent = document.getElementById("textarea");
ent.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    document.getElementById("button").click();
  }
});
