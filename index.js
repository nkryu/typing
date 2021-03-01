const h1 = document.querySelector("h1");
const target = document.getElementById("target");
const result = document.getElementById("result");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

const color = document.getElementById("color");
const sports = document.getElementById("sports");
const animal = document.getElementById("animal");

const menus = [color, sports, animal];

const colorWords = [
  "red",
  "blue",
  "pink",
  "green",
  "yellow",
  "orange",
  "skyblue",
  "white",
  "black",
  "silver",
];
const sportsWords = [
  "soccer",
  "baseball",
  "basketball",
  "tennis",
  "golf",
  "ski",
  "dance",
  "volleball",
  "swimming",
  "boxing",
];
const animalWords = [
  "dog",
  "cat",
  "rabbit",
  "horse",
  "bat",
  "zebra",
  "gorilla",
  "mouse",
  "panda",
  "pig",
];

let word;
let loc = 0;
let startTime;

btn.addEventListener("click", select);

function select() {
  btn.classList.add("none");
  target.textContent = "Select!!";
  color.textContent = "color";
  sports.textContent = "sports";
  animal.textContent = "animal";
  menus.forEach((menu) => {
    menu.classList.add("border");
    
    menu.addEventListener("click", () => {
      ul.classList.add("none");
      h1.textContent = menu.textContent;
      startTime = Date.now();
      setWord(menu)
    });
  });

}


function setWord(menu) {
  if(menu === color){
    random(colorWords);
  }else if(menu === sports){
    random(sportsWords);
  }else if(menu === animal){
    random(animalWords);
  }
}
function random(words){
  word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  target.textContent = word;
  loc = 0;
}






document.addEventListener("keydown", (e) => {
  if (e.key !== word[loc]) {
    return;
  }
  
  //substring()番目から後ろの文字列を取り出す。
  loc++;
  target.textContent =word.substring(loc);

  if (loc === word.length) {
    if (colorWords.length === 0) {
      finished();
    } else if (sportsWords.length === 0) {
      finished();
    } else if (animalWords.length === 0) {
      finished();
    }else if(h1.textContent === "color"){
      random(colorWords);
    }else if(h1.textContent === "sports"){
      random(sportsWords);
    }else if(h1.textContent === "animal"){
      random(animalWords);
    }
  } 
  
});


function finished() {
  const endTime = ((Date.now() - startTime) / 1000).toFixed(2);
  result.textContent = `Finished! ${endTime}seconds! `;
  target.textContent = "";
}