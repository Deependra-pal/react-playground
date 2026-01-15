import React from "react";

const Section = () => {
  return (
    <div className="section">
      <h2>Welcome to Delicious Coffee !</h2>
      <div className="images">
        <img src="https://images.unsplash.com/photo-1742482805774-215f6f88509c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGNrJTIwbW9kZWwlMjBnaXJsJTIwd2l0aCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D"></img>
        <img
          src="https://images.unsplash.com/photo-1661570766209-5ada847e565b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxkZWxpY2lvdXMlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D"
          alt=""
        ></img>
        <img
          src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
          alt=""
        ></img>
      </div>
      <p>
        We are passionate about bringing the most delicious and ethically
        sourced coffee beans from around the world. Our coffee is roasted to
        perfection to bring out the unique flavors and aromas of each bean
        origin.
      </p>
      <h3>Our Featured Coffees</h3>

      <ul>
        <li>
          <p>
            <b>Ethiopian Yirgacheffe:</b> Bright and floral with citrus notes.{" "}
          </p>
        </li>

        <li>
          <p>
            <b>Sumatran Mandhelling:</b> Earthy and full-bodied with chocolate
            undertones.
          </p>
        </li>

        <li>
          <p>
            <b>Colombian Supermo:</b> Well-balanced and smooth with caramel
            sewwtness.
          </p>
        </li>
      </ul>
      <p>
        Learn more about our brewing process, our commitment to sustainability,
        and our team of coffee experts on our <a href="#">About Us</a> page.
      </p>
      <p id="last">Thank you for choosing Delicious Coffee !</p>
    </div>
  );
};

export default Section;
