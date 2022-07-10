'use strict';
let sicretMumbers = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Перезагрузка
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.guess-message').textContent = 'Почни вгадувати';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('.question').textContent = '???';
  sicretMumbers = Math.trunc(Math.random() * 20 + 1);
});

//Start Games
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  //No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введіть число';
  } else if (guessingNumber === sicretMumbers) {
    // Player win
    document.querySelector('.guess-message').textContent = 'Правильно';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').style.width = '30rem';
    document.querySelector('.question').textContent = sicretMumbers;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Big litera
  } else if (guessingNumber > sicretMumbers + 5 && score > 1) {
    document.querySelector('.guess-message').textContent = 'Занабто велике';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessingNumber > sicretMumbers && score > 1) {
    document.querySelector('.guess-message').textContent =
      'Більше чим потрібно';
    score--;
    document.querySelector('.score').textContent = score;
    // Littl litera
  } else if (guessingNumber < sicretMumbers - 5 && score > 1) {
    document.querySelector('.guess-message').textContent = 'Занабто мале';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessingNumber < sicretMumbers && score > 1) {
    document.querySelector('.guess-message').textContent =
      'Меньше чим потрібно';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.guess-message').textContent = 'Ви проіграли!';
    document.querySelector('.score').textContent = 0;
  }
});
