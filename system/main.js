var edid_houre = document.querySelectorAll("select"),
  Clock = document.querySelector("h1"),
  History = document.querySelector(".hh"),
  But_Alarm = document.querySelector(".btn_Alerm"),
  stop_Alerm = document.querySelector(".stop_Alerm"),
  Alarm = document.querySelector(".mm"),
  ul = document.querySelector("ul"),
  clos = document.querySelector(".btnX");
var AlermTime = [];
ringtone = new Audio("./WhatsApp Audio 2023-01-01 at 16.28.35.mpeg");
var hours = () => {
  for (var i = 12; i > 0; i--) {
    var hours = i < 10 ? "0" + i : i;
    var option = `<option value="${hours}" id="opion">${hours}</option>`;
    // option.document.getElementById("option").innerHTML = i;
    edid_houre[0].firstElementChild.insertAdjacentHTML("afterend", option);
  }
};
hours();

var minut = () => {
  for (var i = 59; i >= 0; i--) {
    var hours = i < 10 ? "0" + i : i;

    var option = `<option value="${hours}">${hours}</option>`;
    edid_houre[1].firstElementChild.insertAdjacentHTML("afterend", option);
  }
};
minut();
var PMAM = () => {
  for (var i = 2; i > 0; i--) {
    var PMAM = i == 1 ? "AM" : "PM";
    var option = `<option value="${PMAM}">${PMAM}</option>`;
    edid_houre[2].firstElementChild.insertAdjacentHTML("afterend", option);
  }
};
PMAM();

setInterval(() => {
  var Data = new Date();
  var h = Data.getHours(),
    m = Data.getMinutes(),
    s = Data.getSeconds(),
    FY = Data.getFullYear(),
    Mo = Data.getMonth() + 1,
    D = Data.getDate(),
    ampm = "PM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  h = h == 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  History.innerHTML = `${FY}/${Mo}/${D}`;
  Clock.innerHTML = `${h}:${m}:${s} ${ampm}`;
  if (AlermTime.includes(`${h}:${m} ${ampm}`)) {
    ringtone.play();
    ringtone.loop = true;
    AlermTime[AlermTime.indexOf(`${h}:${m} ${ampm}`)] = "";

    console.log("You");
  }
}, 1000);
var SetAlarm = () => {
  var time = `${edid_houre[0].value}:${edid_houre[1].value} ${edid_houre[2].value}`;
  // if (
  //   time.includes("Hour") ||
  //   time.includes("Minute") ||
  //   time.includes("AM/PM")
  // ) {
  //   return alert("int Clock");
  // }
  AlermTime.push(time);
  // console.log(time);
  // But_Alarm.innerHTML = "Clear Alerm";
  // Alarm.innerHTML = time;
  // for (var i = 0; i < h2.length; i++) {
  //   var element = document.createElement("h2");
  // }
};

var Array_Alarm = () => {
  ul.innerHTML = "";
  for (let i = 0; i < AlermTime.length; i++) {
    // var clos =document
    if (AlermTime[i] === "") {
      continue;
    }
    var li = `<li>${AlermTime[i]} <Button type="" onclick="delet(${i})"  class='btnX'>❌</Button> </li>;`;

    ul.innerHTML += li;
    // clos.addEventListener("click", () => {
    //   AlermTime[i] = "";
    //   Array_Alarm();
    // });
  }
};
var delet = (i) => {
  AlermTime[i] = "";
  Array_Alarm();
};
// Array_Alarm();
But_Alarm.addEventListener("click", SetAlarm);
But_Alarm.addEventListener("click", Array_Alarm);
stop_Alerm.addEventListener("click", () => {
  ringtone.pause();
    Array_Alarm();

});
