import chalk from "chalk"
import printNotes from "./function.js"

const print = printNotes("Hello world")

console.log(chalk.white.bgGreen.bold.italic(print))