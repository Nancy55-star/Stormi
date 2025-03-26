import React, { useEffect, useState } from 'react'
import logo from'../logo.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 



const GetProducts = () => {
const[products,setProducts]=useState([])
const[search,setSearch]=useState("");
const img_url = "https://Nancy55.pythonanywhere.com/static/images/";
const navigate=useNavigate('')

const getProducts=async()=>{
  try{
const response= await axios.get('https://Nancy55.pythonanywhere.com/api/get_product_details')
setProducts(response.data.products)

  }catch(error){
  }
}
useEffect(()=>{
  getProducts()
},[]);
const filteredproducts=products.filter((product)=>
product.product_name.toLowerCase().includes(search.toLowerCase())
);
console.log(products)
  return (
    <div className="container-fluid row">
      <div className='d-flex justify-content-center mb-4'>
        <input type="text" placeholder="Search Skincare..." className='form-control w-50'
        value={search} onChange={(e)=>setSearch(e.target.value)}  
        style={{borderRadius:"20px",padding:"10px",textAlign:"center"}}
         />
          </div>
          <br />
      <h1>QUALITY SKIN CARE PRODUCTS</h1>

{filteredproducts.map((product,index)=>(
  <div className="col-md-3 mb-4" key={index}>
    <div className="card shadow p-2">
      <img src={img_url+product.product_photo} alt={product.product_photo}/>
      <div className="card-body">
        <h5 className="mt-2">{product.product_name}</h5>
        <p className="text-muted">{product.product_description}</p>
        <b className="text-warning">${product.product_cost}</b>
        <br />
        <button className="btn btn-dark mt-2 w-80 "onClick={()=>{navigate('/payment',{state:{product}})}}>Show Details</button>
      </div>
    </div>
  </div>
))}

  
    </div>
    




  );
};

export default GetProducts;