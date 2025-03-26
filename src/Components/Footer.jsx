import React from 'react'
import image from './x.png'
import pic from './fb.png'
import photo from './in.png'


const FooterComponent=()=> {
  return (
    <div className="p-3">
      <section class="row justify-content-center">
        <div class="col-md-3 text-center">
          <div>
            <div>
              <h6 className="btn btn-dark ">ABOUT US</h6>
            </div>
            <div>
              <b>
                <p className="text-success">
                  Welcome to S&M, where skincare meets self-care.
                  We believe that beauty begins with healthy, radiant skin, and
                  our mission is to empower you to embrace your natural glow.
                  Our journey started with a simple idea: to create skincare
                  solutions that are as unique as you are.z
                </p>{" "}
              </b>
            </div>
            <div>
              <b>
                <p>
                  SHOP WITH US FOR HIGH QUALITY SKINCARE PRODUCTS..THANKYOU!
                </p>
              </b>
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div>
            <div>
              <h6 className="btn btn-dark ">LOCATION</h6>
            </div>
            <div>
              <b>
                <p className="text-success">
                  We are located in Rio ,on the third street Stormy's lane .You
                  can visit our stalls any day any time
                </p>
              </b>
            </div>
            <br />
            <div>
              <b>
                {" "}
                <p>THANKYOU FOR SHOPPING WITH US!!</p>
              </b>
            </div>
          </div>
        </div>
        <h5 class="text-dark "></h5>
        <center>
          <a href="#">
            <img src={image} alt="" />
          </a>

          <a href="#">
            <img src={pic} alt="" />
          </a>

          <a href="#">
            <img src={photo} alt="" />
          </a>

          <p>
            DON'T HESITATE TO CONTACT US ON ALL OF OUR SOCIAL MEDIA PLATFORMS
            <br />
            <b class="  text-dark">
              {" "}
              S&M SKIN CARE PRODUCTS DEVELOPED BY THIONG'O, &copy; 2025. ALL
              RIGHTS RESERVED.
            </b>
          </p>
        </center>
      </section>
    </div>
  );
}

export default FooterComponent;