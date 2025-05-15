import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS
import image from "./gettyimages-640031180-612x612.jpg";
import pic from "./download.jpeg";
import photo from "./beauty.jpeg";
import picture from "./download (3).jpeg";

const CarouselComponent = () => {
  return (
    <div>
      <section className="row">
        <div className="col-md-12">
          <div
            className="carousel slide"
            data-bs-ride="carousel"
            id="mycarousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image}
                  alt="CHANNEL"
                  className="d-block w-100 carousel-image"
                  style={{ height: "40vh", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={photo}
                  alt=""
                  className="d-block w-100 carousel-image"
                  style={{ height: "40vh", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={pic}
                  alt=""
                  className="d-block w-100  carousel-image"
                  style={{ height: "40vh", objectFit: "cover" }}
                />
              </div>
            </div>

            <a
              href="#mycarousel"
              data-bs-slide="prev"
              className="carousel-control-prev"
            >
              <span className="carousel-control-prev-icon bg-dark"></span>
            </a>

            <a
              href="#mycarousel"
              data-bs-slide="next"
              className="carousel-control-next"
            >
              <span className="carousel-control-next-icon bg-dark"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselComponent;
