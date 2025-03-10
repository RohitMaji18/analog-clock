let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  //getting hours,min ,sec from DATE
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourrot = 30 * hh + mm / 2;
  let minrot = 6 * mm;
  let secrot = 6 * ss;

  hour.style.transform = `rotate(${hourrot}deg)`;
  min.style.transform = `rotate(${minrot}deg)`;
  sec.style.transform = `rotate(${secrot}deg)`;
}

setInterval(displayTime, 1000);
