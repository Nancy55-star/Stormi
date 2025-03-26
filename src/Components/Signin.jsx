import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  //feedback system
  const[loading,setLoading]=useState('');
  const[success,setSuccess]=useState('');
  const[error,setError]=useState('');
  const navigate=useNavigate()

//posting data
const handleSubmit=async (e)=>{
  e.preventDefault();
  try{
    const formData=new FormData();
    formData.append('email',email);
    formData.append('password',password);
    const response= await axios.post('https://Nancy55.pythonanywhere.com/api/signin',formData);
    if(response.data.user){
      
    setLoading("");
    console.log("Res"+response.data.message);
    setSuccess(response.data.message);
    navigate("/")
    }else{
      setSuccess(response.data.message)
    }
    


  }catch(error){
    setError(error.message);

  }

}
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Signin Form</h1>
        {loading}
        {success}
        {error}

        <form action="" onSubmit={handleSubmit}>
          {/**email input*/ }
          <input type="email" 
          placeholder="Enter email" 
          className="form-control"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}/>
           <br />
         <input type="password" 
          placeholder="Enter Password"
          className="form-control"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}/>
          <br />

          <button 
          class="btn btn-dark px-4 py-2 rounded-pill shadow-lg " type="submit">
            Sign in
          </button>
          <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>

        </form>

      </div>
     
    </div>
  );
}

export default Signin;