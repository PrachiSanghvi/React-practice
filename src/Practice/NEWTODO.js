import React , { useState } from 'react'

const NEWTODO = () => {
  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([])

  const listOfItems = () => {
    if (!inputList) {
      
    } else {
      const allInputData = {id: new Date().getTime().toString() , name : inputList }
      setItems((oldItemArray) => {
        return [...oldItemArray,allInputData]
      })
    }
    setInputList("")
  }

  const itemChangeEvent = (e) => {
    setInputList(e.target.value)
  }

  const deleteItem = (index) => {
    const updateItems = items.filter((arrayEle) => {
      return index != arrayEle.id
    })
    setItems(updateItems);
  }

  const editItem = () => {
    console.log("edit item");
  }

  return (
    <div>
      <h2>NEWTODO</h2>
      <div>
        <input placeholder="Add a item" className="" type="text" onChange={itemChangeEvent}/>
        <button className="add-item" onClick={listOfItems}>ADD</button>
      </div>
      <div className="notes-list">
          {items.map((val) => {
            return (
              <div>
                <span className="del-btn" onClick={() => deleteItem(val.id)}>Delete</span>
                <div key={val.id}>{val.name}</div>
                <span className="edit-btn" onClick={() => editItem(val.id)}>Edit</span>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default NEWTODO;