import React from 'react'
import { useNavigate } from 'react-router-dom';
import pic from'./images.jpeg'

const NotFound = () => {
   const navigate=useNavigate();
  return (
    <div>
      <h1>The url you entered was not found</h1>
      <img src={pic}></img>

      <br /><br />
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-success "
      >
      
        Return Home
      </button>
    </div>
  );
}

export default NotFound