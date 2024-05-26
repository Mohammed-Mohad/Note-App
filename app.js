const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// create add command

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body option",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// create a remove command

yargs.command({
  command: "remove",
  describe: "remove note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// list command

yargs.command({
  command: "list",
  describe: "list note",
  handler: (argv) => {
    notes.listNote();
  },
});

// create a Read command

yargs.command({
  command: "read",
  describe: "read a note",
  builder:{
    title:{
    describe: "note title",
    demandOption: true,
    type: 'string'
    }
  },
  handler: function (argv) {
   notes.readNote(argv.title)
  },
});

yargs.parse();
