function openNav() {
  document
    .getElementsByClassName("nav-links")[0]
    .classList.remove("hidden-nav");
  document.getElementById("sideNav").style.width = "80%";
  document.body.style.backgroundColor = "rgb(0,0,0, 0.25)";
  document.getElementById("openBtn").style.display = "none";
  addEvent(document, "keydown", function (e) {
    if (e.keyCode === 27) {
      closeNav();
    }
  });
}

function closeNav() {
  document.getElementsByClassName("nav-links")[0].classList.add("hidden-nav");
  document.getElementById("sideNav").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("openBtn").style.display = "initial";
}

document.addEventListener("click", function (event) {
  var isClickInside = document
    .getElementById("backDrop")
    .contains(event.target);
  if (isClickInside) {
    closeNav();
  }
});

function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventName, callback);
  } else {
    element["on" + eventName] = callback;
  }
}
