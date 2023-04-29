import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
        facilis natus obcaecati tenetur blanditiis sit provident unde neque
        eligendi vitae.
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};

export default Terms;
