import React,{useState} from 'react';
import './Note.css'
import {MdDeleteForever} from 'react-icons/md';
import {MdBorderColor} from 'react-icons/md';
const Note = ({id,text,date,handleDeleteNote ,handleUpdateNote }) => {
  const [displayForm,setForm] = useState(false)

  // Update Note
  const handleEdit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const text = e.target.children[0].value;
    handleUpdateNote(id,text,date);
    setForm(false)
  }
  return (
    <div className="note">
      <span>{text}</span>
      <div className="notes-footer">
        <small>{date}</small>
        <MdBorderColor className="update-icon" size="1.3em" onClick={() => setForm(!displayForm)}/>
        <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id)}/>
      </div>
      {/* Edit on Click update data form open */}
      <form onSubmit={handleEdit} className={`${displayForm ? "show" : "hide" }`}>
        <input placeholder="title" required={true} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Note