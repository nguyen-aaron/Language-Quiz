console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");
const gameOverSection = document.querySelector("#game-over-section");
const guessScreen = document.querySelector("#guess-screen");

console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);

let inputElem = document.querySelector("#guess");
console.log(inputElem);

let wordDict = {
  "english" : englishTile,
  "spanish" : spanishTile,
  "chinese" : chineseTile,
  "tagalog" : tagalogTile,
  "vietnamese" : vietnameseTile,
  "arabic" : arabicTile,
  "french" : frenchTile,
  "korean" : koreanTile,
  "russian" : russianTile
};

let solved = [];
let score = 0;

inputElem.addEventListener("change", () => {
  let guess = inputElem.value;
  guess = guess.toLowerCase();
  console.log(guess);

  if (guess in wordDict && score < 9 && solved.includes(guess) == false) {
    wordDict[guess].classList.remove("hidden-answer");
    solved.push(guess);
    score +=1;
    if (score == 9) {
      guessScreen.classList.add("hidden-screen");
      gameOverSection.classList.remove("hidden-screen");
    }
  }
  inputElem.value = "";
})




