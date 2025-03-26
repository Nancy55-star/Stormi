import React from 'react'

function ContactUs() {
  return (
   <center> <div class="col-md-4">
      <h4 class="text-center">CONTACT US AT</h4>
      <form>
        <input
          type="email"
          placeholder="Enter Your Email"
          class="form-control mb-3"
          required
        />
        <textarea
          class="form-control mb-3"
          rows="5"
          placeholder="Leave a Comment"
          required
        ></textarea>
        <input type="submit" value="Send Message" class="btn btn-dark w-100" />
      </form>
    </div></center>
  );
}

export default ContactUs;