//1- выигрыш, 0 - проигрыш



import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import fs from "fs";

const fileName = yargs(hideBin(process.argv)).argv

const countResult = (arr) => {
    let win = 0;
    let loses = 0;
    arr.map(res => {
        res === '1' ? win++ : loses++;
    })
    console.log(`общее количество партий: ${arr.length}`)
    console.log(`выигрышей: ${win}, проигрышей: ${loses}`)
    console.log(`процентное соотношение выигранных партий: ${ win / arr.length *100} %`)
}
fs.readFile(fileName["_"][0], 'utf8', (err, data) => {
    if (err) {
        throw Error("Error")
    }
    countResult(data.split(""))
})


