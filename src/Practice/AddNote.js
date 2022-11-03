import React ,{useState} from 'react'

const AddNote = ({handleAddNote}) => {
  const [noteText,setNoteText] = useState("")
  const caracterLimit = 200;
  const handleChange = (e) => {
    if (caracterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("") 
    }
  }
  return (
    <div className="note new">
      <textarea name="" value={noteText} id="" cols="10" rows="8" placeholder="Type to add a note...." onChange={handleChange}></textarea>      
      <div className="notes-footer">
        <small>{caracterLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default AddNote