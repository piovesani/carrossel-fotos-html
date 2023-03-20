const controls = document.querySelectorAll(".control-tec");
let currentTecnologia = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

if(currentTecnologia === 0){
  items.forEach((item) => item.classList.remove("current-tecnologia"));
  items[currentTecnologia].classList.add("current-tecnologia");
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentTecnologia -= 1;
    } else {
      currentTecnologia += 1;
    }

    if (currentTecnologia >= maxItems) {
      currentTecnologia = 0;
    }

    if (currentTecnologia < 0) {
      currentTecnologia = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-tecnologia"));

    items[currentTecnologia].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentTecnologia].classList.add("current-tecnologia");
    console.log(currentTecnologia)
  });
});

