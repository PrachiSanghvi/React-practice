import { nanoid } from 'nanoid'
import React, { useState , useEffect } from 'react'
import Search from './Component/Search'
import NoteList from './Component/NoteList'
import Header from './Component/Header'
const ReactNote = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Please enter your shopping list',
      date: '15/4/22'
    },
    {
      id: nanoid(),
      text: 'Please enter your Morning Routine',
      date: '16/4/22'
    },
    {
      id: nanoid(),
      text: 'Please enter your Wishlist',
      date: '17/4/22'
    }
  ])

  const [searchText, setSearchText] = useState('');
  const [darkMode,setDarkMode] = useState(false)

  // This useEffect will call when first time refresh
  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes)
    }
  },[])

  //Use effect used to update a notelist after any modification
  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((noteList) => noteList.id !== id)
    setNotes(newNotes)
  }

  const updateNote = (id,text,date) => {
    const updatedNote = notes.find(note => note.id === id)
    updatedNote.id = id;
    updatedNote.text = text;
    updatedNote.date = date;
  // Have question that now notes update here
    setNotes([...notes]);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="reactnote-container">
      <Header handleToogleDartMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>	note.text.toLowerCase().includes(searchText.toLowerCase()))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}	
        handleUpdateNote={updateNote} />
    </div>
    </div>
  )
}

export default ReactNote