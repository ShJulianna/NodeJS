//1-орел, 2 - решка
//1- выигрыш, 0 - проигрыш

import {addFile, randomInteger } from "./utils.js";


import * as readline from 'readline/promises';
import yargs from "yargs";
import {hideBin} from "yargs/helpers";


const result = randomInteger()

const fileName = yargs(hideBin(process.argv)).argv

const checkInput = async (number) => {
    if (result === number) {
        await addFile(fileName["_"][0], '1').catch((err) => {throw Error(err)})
        console.log(`Выигрыш! Результат: ${result}`)
    } else {
        await addFile(fileName["_"][0], '0').catch((err) => {throw Error(err)})
        console.log(`Проигрыш! Результат: ${result}`)
    }
}

const startGame = function () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('line',  (line) => {
        if (Number.isNaN(Number(line)) || (line !== '1' && line !== '2')) {
            console.log("Введите число 1 или 2")
        }
        else  {
            checkInput(Number(line)).catch(() => {throw Error(err)})
            rl.close()
        }
    })
}
console.log("Загадано число 1 или 2")
startGame()