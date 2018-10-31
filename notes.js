console.log('starting notes')

const fs = require('fs');

let fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}


const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }

  let duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => {
  const notes = fetchNotes()
  if (notes.length !== 0) return notes
}

const getNote = (title) => {
  const notes = fetchNotes()
  const singleNote = notes.filter((note) => note.title === title)
  return singleNote[0]
}

const deleteNote = (title) => {
  const notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}

const logCreateNote = (note) => {
  debugger
  return `---- \ntitle: ${note.title} \nbody: ${note.body}`
}

module.exports = {
  addNote,
  getAll,
  getNote,
  deleteNote,
  logCreateNote
}
