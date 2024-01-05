"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

function startGame() {
  let b = confirm("Угадай число от 1 до 100");
  if (b) {
    function one(min, max) {
      let randomNum = Math.floor(Math.random() * (max - min + 1));

      function two() {
        let a = +prompt("Введите число");

        function three() {
          if (a > randomNum) {
            a = prompt("Ваше число больше загаданного. Введите другое число");

            if (a) {
              three();
            } else {
              alert("До свидания");
            }
          }
          if (a < randomNum) {
            a = prompt("Ваше число меньше загаданного. Введите другое число");
            if (a) {
              three();
            } else {
              alert("До свидания");
            }
          }
          if (a === randomNum) {
            a = confirm("Вы угадали! Хотите повторить?");
            if (a) {
              one(1, 100);
            } else {
              alert("До свидания");
              a = randomNum;
            }
          }
        }
        three();
      }
      two();
    }
    one(1, 100);
  } else {
    alert("До свидания");
  }
}
startGame();
