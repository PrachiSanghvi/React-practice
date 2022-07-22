import react, {useState} from "react";
import './Todolist.css';

const TODOLIST = () => {
  const [inputList,setIputList]= useState("");
  const [items,setItems] = useState([]);

  const itemEvets = (e) => {
    setIputList(e.target.value)
  }

  const listOfItems = () => {
    if (!inputList) {
      
    } else {
      const allInputData = { id: new Date().getTime().toString(), name:inputList }
      setItems((oldItemArray) => {
        return [...oldItemArray,allInputData];
      })
    }
    setIputList("");
  }

  const deleteItem = (index) => {
    const updateItems = items.filter((arrayEle) => {
      return index != arrayEle.id;
  })
    setItems(updateItems)
  }


  const editItem = () => {
    console.log("edited item");
  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>TODO LIST</h1>
          <br/>
          <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvets} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemValue) => {
              return (
                <div className="todo_style" key={itemValue.id}>
                  <span className="del-btn" onClick={() => deleteItem(itemValue.id)}> D </span>
                  <li key={itemValue.id} id={itemValue.id} onClick={deleteItem}>{itemValue.name}</li>
                  <span className="edit-btn" onClick={() => editItem(itemValue.id)}> E </span><br/>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default TODOLIST;

