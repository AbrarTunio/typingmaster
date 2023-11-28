keys = document.querySelectorAll("button");
buttons = document.querySelectorAll(".selection");
start = document.getElementById("start");
stp = document.getElementById("stop");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.getAttribute("id") == "top") {
      series = "qwerpoiuty";
      letterList = series.split("");
      callback(letterList);
    } else if (btn.getAttribute("id") == "home") {
      series = "asdf;lkjgh";
      letterList = series.split("");
      callback(letterList);
    } else if (btn.getAttribute("id") == "bottom") {
      series = "zxcv.,mnb";
      letterList = series.split("");
      callback(letterList);
    }
  });
});

function callback(letterList) {
  randomIndex = Math.floor(Math.random() * letterList.length);

  keys.forEach((key) => {
    switch (key.innerText.toLowerCase()) {
      case letterList[randomIndex]:
        key.classList.add("dim");
        setTimeout(() => {
          key.classList.remove("dim");
        }, 1500);
    }
  });
}

count = 1;
start.addEventListener("click", () => {
  if (count % 2 != 0) {
    myInterval = setInterval(() => {
      callback(letterList);
    }, 2000);
    count++;
    start.innerText = "Stop";
    start.style.backgroundColor = "rgb(255, 44, 72)";
  } else {
    clearInterval(myInterval);
    count++;
    start.innerText = "Start";
    start.style.backgroundColor = "rgb(18, 186, 122)";
  }
});
