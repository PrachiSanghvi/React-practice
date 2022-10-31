import React from 'react'
import { useParams } from 'react-router'
const User = () => {
  let param = useParams();
  let {name} = param;
  return (
    <div className="user-page-wrapper">
      {name ? <div>{name}'s page</div>:<div>Select User</div>}
      </div>
  )
}

export default User