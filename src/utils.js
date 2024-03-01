import fs from "fs/promises";
import { constants } from 'fs'

export function randomInteger() {
    let rand = 1  + Math.random() * 2;
    return Math.floor(rand);
}

export const addFile = async (fileName, data='') => {
    await fs.appendFile(`${fileName}`, data, {flag: 'a'})
};

export const checkForAccessFile = (name) =>  fs.access(name, constants.F_OK)


