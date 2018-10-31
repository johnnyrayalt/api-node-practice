console.log('starting app')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs');

const notes = require('./notes')

const argv = yargs.argv
const command = process.argv[2]

console.log('command: ', command);
console.log('yargs: ', argv)

// ADD
if (command === 'add') {

  const note = notes.addNote(argv.title, argv.body)

  const message = note ?
    'note created \n' + notes.logCreateNote(note) :
    `Note with title "${argv.title}" not found not found`

  console.log(message)

// READ
} else if (command === 'read') {

  const note = notes.getNote(argv.title)

  const message = note ?
    'note found \n' + notes.logCreateNote(note) :
    `Note with title "${argv.title}" not found not found`

  console.log(message)

// READ ALL
} else if (command === 'list') {
  const allNotes = notes.getAll()

  const message = allNotes ?
    allNotes :
    'there are no notes yet'

  console.log(message);

// UPDATE
} else if (command === 'update'){
  console.log('updating note')

//DELETE
} else if (command === 'delete'){

  const noteDeleted = notes.deleteNote(argv.title)

  const message = noteDeleted ?
    'note was deleted' :
    'note not found'

  console.log(message)

} else {
  console.log('command not recognized')
}
