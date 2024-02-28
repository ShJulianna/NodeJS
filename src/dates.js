#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {addDate, getCurrentDate, subDate, validateArgs} from "./utils.js";



const runCommand = function ()  {
    yargs(hideBin(process.argv))
        .check((arg) => {
            if (validateArgs(arg)) {
                return true
            } else {
                throw Error("Invalid arguments")
            }
        })
        .usage('$0 <cmd> [args]')
        .command({
            command: 'current',
            desc: 'get current date',
            handler: (argv) => {
                getCurrentDate(Object.keys(argv)[1])
            }
        })
        .command({
            command: 'add',
            desc: 'add time',
            handler: (argv) => {
                addDate(Object.keys(argv)[1], argv[Object.keys(argv)[1]])
            }
        })
        .command({
            command: 'sub',
            desc: 'sub time',
            handler: (argv) => {
                subDate(Object.keys(argv)[1], argv[Object.keys(argv)[1]])
            }
        })
        .options("year", {
            alias: "y",
            type: "string",
            description: "текущий год"
        })
        .options("month", {
            alias: "m",
            type: "string",
            description: "текущий месяц"
        })
        .options("date", {
            alias: "d",
            type: "string",
            description: "дата в календарном месяце"
        })
        .help()
        .parse()

}


runCommand()
