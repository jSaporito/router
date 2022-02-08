import React from "react";
import {Link} from 'react-router-dom'


const Missing = () => {
  return (
  <main className="Missing">
      <h2>Page not found</h2>
      <p>Well, That's Sad 😢</p>
      <p>
        <Link to='/'>
          visit our Home Page
        </Link>
      </p>
  </main>
  );
};

export default Missing;
