const fs = require("fs");
const chalk = require("chalk");
const { log } = require("console");

const addNote = function (title, body) {
  const notes = loadNote();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });
  console.log("Duplicate note:", duplicateNote);
  if (duplicateNote.length !== 0) {
    console.log(chalk.bgRed("Note title is Taken"));
  } else {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log(chalk.bgGreen("Note Added!"));
  }
};
//save Note

const saveNote = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("note.json", dataJson);
};

//load Note
const loadNote = function () {
  try {
    const dataBuffer = fs.readFileSync("note.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//remove note

const removeNote = function (title) {
  const notes = loadNote();
  const removeNote = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length !== removeNote.length) {
    saveNote(removeNote);
    console.log(chalk.bgGreen("Note removed"));
  } else {
    console.log(chalk.bgRed("No note founded"));
  }
  console.log("removeNote: ", removeNote);
};

//List Note title

const listNote = () => {
  const notes = loadNote();
  console.log(chalk.bgGreen("Your notes"));
  notes.forEach((note) => console.log(note.title));
};
// read note

const readNote = (title) => {
  const notes = loadNote();
  const noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(chalk.inverse(noteToRead.title));
    console.log(noteToRead.body);
  }
  else console.log(chalk.bgRed("title not exist"));
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
