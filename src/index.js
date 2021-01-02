import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color ="blue";
ReactDOM.render(
  <div>
    <h1 style = {customStyle} className="heading">My Favourite Makeup Styles</h1>

    <div>
      <img
        className="makeup-img"
        
        src="http://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/2916412/victorian_ladies.jpg?1348758863"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th?q=Makeup+Trends+in+the+Eary+1900s&dc=3&w=100&h=100&c=1&rs=1&dpr=1.25&pid=InlineBlock&mkt=en-GB&adlt=moderate&t=1&mw=240&sr=3&shs=2"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th/id/OIP.Gd6pBnEHqYaz9CsZ3BA1NwHaIY?w=204&h=231&c=7&o=5&dpr=1.25&pid=1.7"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th/id/OIP.SUOJ_I3T7GJ0pWnZ8D0KKwHaHe?w=191&h=193&c=7&o=5&dpr=1.25&pid=1.7"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th/id/OIP.PrCnIseei6V8XOZAez2NZgHaE8?w=252&h=180&c=7&o=5&dpr=1.25&pid=1.7"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th/id/OIP.VWvXLzQuYeKbGuST8Ot4EQAAAA?w=204&h=204&c=7&o=5&dpr=1.25&pid=1.7"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th?q=Italian+1970s+Makeup&dc=3&w=100&h=100&c=1&rs=1&dpr=1.25&pid=InlineBlock&mkt=en-GB&adlt=moderate&t=1&mw=240&sr=3&shs=2"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th?q=Madonna+1980s+Makeup&dc=3&w=100&h=100&c=1&rs=1&dpr=1.25&pid=InlineBlock&mkt=en-GB&adlt=moderate&t=1&mw=240&sr=3&shs=2"
      />
      <img
        className="makeup-img"
        src="https://th.bing.com/th/id/OIP.tG_ExJwykO6HFkudGYl84AAAAA?w=120&h=180&c=7&o=5&dpr=1.25&pid=1.7"
      />
    </div>
  </div>,

  document.getElementById("root")
);
