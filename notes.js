import chalk from "chalk"
import yargs from "yargs"
import {hideBin} from "yargs/helpers"

yargs(hideBin(process.argv)).command({
    command: "add",
    describe: 'Add a note',
    builder: {
        title:{
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a note! ' + argv.title,argv.body)
    }
}).parse()
yargs(hideBin(process.argv)).command({
    command: "remove",
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
}).parse()
yargs(hideBin(process.argv)).command({
    command: "list",
    describe: 'Listing out all note',
    handler: function () {
        console.log('Listing all notes!')
    }
}).parse()
yargs(hideBin(process.argv)).command({
    command: "read",
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
}).parse()