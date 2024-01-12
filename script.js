"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

function playGuessNumber() {
  let suggestPlay = confirm("Угадай число от 1 до 100");

  if (suggestPlay) {
    function startGame(min, max) {
      let randomNum = Math.floor(Math.random() * (max - min + 1));
      let count = 10;
      function guessNumber() {
        let inputNumber = prompt("Введите число");

        if (inputNumber || inputNumber === "") {
          if (isNumber(inputNumber)) {
            inputNumber = Number(inputNumber);
            if (count > 1) {
              count--;
              if (inputNumber > randomNum) {
                inputNumber = alert(
                  `Ваше число больше загаданного. У Вас осталось ${count} попыток.  Введите другое число `
                );
                guessNumber();
              }
              if (inputNumber < randomNum) {
                inputNumber = alert(
                  `Ваше число меньше загаданного. У Вас осталось  ${count} попыток. Введите другое число`
                );
                guessNumber();
              }
              if (inputNumber == randomNum) {
                inputNumber = confirm(
                  `
                  Поздравляю, Вы угадали!!!\n справились за ${10 - count} попыток \n Игра окончена. \n Хотите повторить игру?
                  `
                );
                if (!inputNumber) {
                  alert("Игра окончена");
                } else {
                  startGame(1, 100);
                }
              }
            } else {
              count = confirm("Попытки закончились.Хотите повторить игру?");
              if (!count) {
                count = alert("Игра окончена");
              } else {
                startGame(1, 100);
              }
            }
          } else {
            guessNumber();
          }
        } else {
          if (!inputNumber) {
            inputNumber = alert("Игра окончена? Серьёзно?");
          } else {
            startGame(1, 100);
          }
        }
      }

      guessNumber();
    }
    startGame(1, 100);
  } else {
    alert("Игра окончена");
  }
}
playGuessNumber();
