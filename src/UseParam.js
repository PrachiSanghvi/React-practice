import React from 'react';
import { useParams , useLocation , useNavigate } from 'react-router';

const UseParam = () => {
  const {fname,lname} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      {fname  && lname && <div>Hello , {fname} {lname}</div>}
      <div className="">My location is {location.pathname}</div>

      {/* https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop */}
      {location.pathname === `/user/prachi/sanghvi` ? (<button onClick={ () => navigate(-1)}>Go back</button>): null }
    </div>
  )
}

export default UseParam