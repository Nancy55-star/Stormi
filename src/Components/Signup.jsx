import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {
  const[username,setUsername]=useState('')
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[password, setPassword] = useState('');

  //feedback system
  const[loading,setLoading]=useState('');
  const[success,setSuccess]=useState('')
  const[error,setError]=useState('')


  //fetching data
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setLoading('connecting...')
    try{
    const formData=new FormData();
    formData.append('username',username);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);

     //posting the data
     const response =await axios.post("https://Nancy55.pythonanywhere.com/api/signup",formData );
     setLoading('')
     setSuccess(response.data.success)

    }catch (error){
      setError(error.message)
    }

  }
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Signup Form</h1>
        {loading}
        {success}
        {error}
        <form onSubmit={handleSubmit}>
          {/**username input */}
          <input
            type="text"
            placeholder=" Enter Name"
            className="form-control"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
          />
          <br />
          {/**uemail input */}
          <input
            type="email"
            placeholder=" Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <br />
          {/**tel input */}
          <input
            type="tel"
            placeholder=" Enter Phone Number"
            className="form-control"
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}}
          />
          <br />
          {/**password input */}
          <input
            type="password"
            placeholder=" Enter Password"
            className="form-control"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <br />
          <button className="btn btn-dark text-white" type='submit'>Submit</button>
          <p>
            Already have an account?<Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
