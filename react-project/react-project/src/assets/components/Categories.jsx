 

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; //   this file contains our styles

function Categories() {
  return (
    <div className="category-section">
      <h3>Categories</h3>
      <ul className="categories">
        <li>
          <Link to="/category/Fiction">Fiction</Link>
        </li>
        <li>
          <Link to="/category/Non-Fiction">Non-Fiction</Link>
        </li>
        <li>
          <Link to="/category/Science">Science</Link>
        </li>
        <li>
          <Link to="/category/History">History</Link>
        </li>
        <li>
          <Link to="/category/Fantasy">Fantasy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;

