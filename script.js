"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

function startGame(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1));
  let suggestPlay = confirm("Угадай число от 1 до 100");
  if (suggestPlay) {
    function guessNumber() {
      let inputNumber = prompt("Введите число");

      if (inputNumber || inputNumber === "") {
        if (isNumber(inputNumber)) {
          if (inputNumber > randomNum) {
            inputNumber = alert(
              "Ваше число больше загаданного. Введите другое число"
            );
            guessNumber();
          }
          if (inputNumber < randomNum) {
            inputNumber = alert(
              "Ваше число меньше загаданного. Введите другое число"
            );
            guessNumber();
          }
          if (inputNumber === randomNum) {
            inputNumber = alert("Поздравляю, Вы угадали!!! Игра окончена");
          }
        } else {
          guessNumber();
        }
      } else {
        alert("Игра окончена");
      }
    }
    guessNumber();
  } else {
    alert("Игра окончена");
  }
}
startGame(1, 100);
