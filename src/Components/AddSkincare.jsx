import axios from "axios";
import React, { useState } from "react";

function AddProducts() {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_description", product_description);
      formData.append("product_cost", product_cost);
      formData.append("product_photo", product_photo);

      const response = await axios.post(
        "https://Nancy55.pythonanywhere.com/api/add_product",
        formData
      );
      if (response.data.message) {
        setLoading("");
        setSuccess(response.data.success);
        setProductName("");
        setProductDescription("");
        setProductCost("");
        setProductPhoto("");
      }
    } catch (error) {
      setError(error.message);
      setLoading("");
      setSuccess("");
    }
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Add Products</h1>
        {loading}
        {success}
        {error}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Product Name"
            className="form-control"
            value={product_name}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type=" text area"
            placeholder="Enter Product Description"
            className="form-control"
            value={product_description}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Enter Product Cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => {
              setProductCost(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="file"
            placeholder="productphoto"
            className="form-control"
            onChange={(e) => {
              setProductPhoto(e.target.files[0]);
            }}
          />{" "}
          <br />
          <button
            type="submit"
            class="btn btn-dark px-4 py-2 rounded-pill shadow-lg"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
