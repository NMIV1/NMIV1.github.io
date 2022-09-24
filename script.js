
var aboutText = "Hello My name is Nathan and this is my about about about abouta" +
  "bout about about about about about about aboutabout aboutabout about about about" +
  "about about about about about about about about";
const gallery = document.getElementById("gallery");

update();
setInterval(update, 2000);

gallery.style.display = "none";

function getRandomColor(opacity) {
  var characters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * characters.length)];
  }
  return color + opacity;
}

function update() {
  let color = getRandomColor("");
  document.documentElement.style.setProperty("--bgColor", color + "55");
  document.documentElement.style.setProperty("--h1CardColor", color + "ff");
}

function toggleShow() {

  if ( gallery.style.display == "none") {
    gallery.style.display = "block";
  } else {
    gallery.style.display = "none";
  }
}

