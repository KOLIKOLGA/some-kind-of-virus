"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

let suggestPlay = confirm("Угадай число от 1 до 100");
if (suggestPlay) {
  function startGame(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1));
    function guessNumber() {
      let inputNumber = prompt("Введите число");
      if (inputNumber || inputNumber === "") {
        if (isNumber(inputNumber)) {
          inputNumber = Number(inputNumber);
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
          if (inputNumber == randomNum) {
            inputNumber = confirm(
              "Поздравляю, Вы угадали!!!\n Игра окончена. \n Хотите повторить игру?"
            );
            if (!inputNumber) {
              alert("Игра окончена");
            } else {
              startGame(1, 100);
            }
          }
        } else {
          guessNumber();
        }
      } else {
        alert("Игра окончена");
      }
    }
    guessNumber();
  }
  startGame(1, 100);
} else {
  alert("Игра окончена");
}
