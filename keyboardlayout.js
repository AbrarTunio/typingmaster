let gridrows = document.querySelectorAll(".grid-row");
let rows = [14, 13, 12, 11, 7];

index = 0;

values = [
  "e1234567890_=d",
  "tQWERTYUIOP[]",
  "cASDFGHJKL;e",
  "sZXCVBNM,./",
  "CWASACS",
];

rows.forEach((rowButtons) => {
  btnNumber = 1;
  currentValue = values[index];

  while (btnNumber <= rowButtons) {
    btn = document.createElement("button");
    valueList = currentValue.split("");
    btn.textContent = valueList[btnNumber - 1];
    gridrows[index].append(btn);
    btnNumber++;
  }
  index++;
});

let esc = gridrows[0].children[0];
esc.innerHTML = "ESC";
esc.classList.add("escape");

let del = gridrows[0].children[13];
del.innerHTML = "DEL";
del.classList.add("del");

let tab = gridrows[1].children[0];
tab.innerHTML = "TAB";
tab.classList.add("tab");

let caps = gridrows[2].children[0];
caps.innerHTML = "CAPS";
caps.classList.add("caps");

let ent = gridrows[2].children[11];
ent.innerHTML = "ENTER";
ent.classList.add("enter");

let shiftOne = gridrows[3].children[0];
shiftOne.innerHTML = "SHIFT";
shiftOne.classList.add("shiftOne");

let ctrlOne = gridrows[4].children[0];
ctrlOne.innerHTML = "CTRL";
ctrlOne.classList.add("ctrlOne");

let win = gridrows[4].children[1];
win.innerHTML = "WIN";
win.classList.add("win");

let altOne = gridrows[4].children[2];
altOne.innerHTML = "ALT";
altOne.classList.add("altOne");

let space = gridrows[4].children[3];
space.innerHTML = "SPACE";
space.classList.add("space");

let altTwo = gridrows[4].children[4];
altTwo.innerHTML = "ALT";
altTwo.classList.add("altTwo");

let ctrlTwo = gridrows[4].children[5];
ctrlTwo.innerHTML = "CTRL";
ctrlTwo.classList.add("ctrlTwo");

let shiftTwo = gridrows[4].children[6];
shiftTwo.innerHTML = "SHIFT";
shiftTwo.classList.add("shiftTwo");
