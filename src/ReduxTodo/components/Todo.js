import React ,{useState} from 'react';
import './todo.css';
import { addToDo,deleteToDo,removeToDo } from '../actions/index';
import { useSelector,useDispatch } from 'react-redux';
const Todo = () => {
  const [inputData,setInputData] = useState('');
  const list = useSelector((state) => state?.TodoReducer?.list)
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>
              Add your list here 
            </figcaption>
            <div className="addItems">
              <input type="text" placeholder="add items.." value={inputData} onChange={(e) => setInputData(e.target.value)} />
              <i className="fa fa-plus add-btn" onClick={() => dispatch(addToDo(inputData),setInputData(''))}> </i>
            </div>
            <div className="showItems">
              {
                 list.map((ele) => {
                 return(
                    <div className="eachItem" key={ele.id}>
                      <h1>{ele.data}</h1>
                      <i className="far fa-trash-alt add-btn" title="Delete item" onClick={() => dispatch(deleteToDo(ele.id))}></i>
                  </div>
                )})
              }
            </div>
            <div className="RemoveAll">
              <button className="btn effect04" data-sm-link-text="Remove all" onClick={() => dispatch(removeToDo())}><span>Check list</span></button>
            </div>
          </figure>
        </div>
      </div>
    </>
  )
}

export default Todo