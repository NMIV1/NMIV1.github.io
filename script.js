
update();
setInterval(update, 2000)

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
  document.documentElement.style.setProperty("--bgColor", color + "44");
  document.documentElement.style.setProperty("--h1CardColor", color + "ff");

}

