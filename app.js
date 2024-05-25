const chalk = require('chalk')
const yargs = require('yargs')
const getMessage = require("./notes.js")

// create add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Body option",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log("Title: ", yargs.argv.title);
        console.log("Body: ", argv.body);
    }
})

// create a remove command

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function(){
        console.log("Removed a note");
    }
})

// create a Read command

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log("reading...");
    }
})

yargs.parse()

console.log("Hello world!");
