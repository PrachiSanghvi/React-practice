import { useSelector, useDispatch } from "react-redux";
import { getUsersFetch } from "../actions/index";

const ShowUserData = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.getUserReducer.users);
  return (
    <div>
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <div>Users : {users.map((user => (<div>{user.name}</div>)))}</div>
    </div>
  )
}

export default ShowUserData;