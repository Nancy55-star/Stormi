import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("amount", product.product_cost);
      formData.append("phone", phone);
      //post data
      const response = await axios.post(
        "https://Nancy55.pythonanywhere.com/api/mpesa_payment",
        formData
      );
    } catch (error) {}
  };
  return (
    <div className="row justify-content-center mt-2">
      <h1 className="m-2">Make Mpesa Payment-LIPA NA MPESA</h1>
      <div className="shadow card col-md-6 p-2 btn btn-dark">
        <b>
          <h1 className="text-success">Pochi La Biashara</h1>
        </b>
        <b>
          <h3 className="text-secondary">{product.product_name}</h3>
        </b>
        <p className="text-danger">{product.product_cost}</p>
        <form action="" onSubmit={handlesubmit}>
          <input
            type="tel"
            placeholder="Enter 254*********"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit" className="btn btn-dark">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
