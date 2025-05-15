import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "./carousel";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showNoResults, setShowNoResults] = useState(false);
  const [searching, setSearching] = useState(false);
  const img_url = "https://Nancy55.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://Nancy55.pythonanywhere.com/api/get_product_details"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    let timeout;
    if (search && filteredProducts.length === 0) {
      setShowNoResults(false);
      setSearching(true);
      timeout = setTimeout(() => {
        setSearching(false);
        setShowNoResults(true);
      }, 5000); // wait 5 seconds before showing "not available"
    } else {
      setSearching(false);
      setShowNoResults(false);
    }

    return () => clearTimeout(timeout);
  }, [search, filteredProducts]);

  return (
    <div className="container-fluid row">
      <div className="container mt-4">
        <h1 className="text-center">S&M</h1>
        <CarouselComponent />
      </div>

      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Search Skincare..."
          className="form-control w-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ borderRadius: "20px", padding: "10px", textAlign: "center" }}
        />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center w-100 mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading products...</span>
          </div>
        </div>
      ) : searching ? (
        <div className="d-flex justify-content-center w-100 mt-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Searching...</span>
          </div>
        </div>
      ) : showNoResults ? (
        <div className="d-flex justify-content-center w-100 mt-5">
          <p className="text-danger fs-5">Oops! Product not available.</p>
        </div>
      ) : (
        filteredProducts.map((product) => (
          <div
            className="col-md-3 mb-4"
            key={product.id || product.product_name}
          >
            <div className="card shadow p-2">
              <img
                className="img-fluid"
                src={img_url + product.product_photo}
                alt={product.product_photo}
              />
              <div className="card-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <p className="text-muted">{product.product_description}</p>
                <b className="text-warning">${product.product_cost}</b>
                <br />
                <button
                  className="btn btn-dark mt-2 w-80"
                  onClick={() => {
                    navigate("/payment", { state: { product } });
                  }}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GetProducts;
