#!/usr/bin/env node


import * as readline from 'readline/promises';

const RANDOM_NUMBER = Math.round(Math.random() * 101)

const checkInput = (number) => {
    if (RANDOM_NUMBER > number) {
        console.log("Больше")
        return false;
    } else if (RANDOM_NUMBER < number) {
        console.log("Меньше")
        return false;
    } else {
            console.log(`Отгадано число ${number}`)
        return true;
    }
}
const startGame = function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line',  (line) => {
       if (Number.isNaN(Number(line))) {
           console.log("Введите число")
       }
       else  if (checkInput(line)) {
              rl.close()
          }
    })
}
console.log("Загадано число в диапазоне от 0 до 100")
startGame()