 


import "./index.css";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="navbar">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browsebooks">Browse Books</Link></li>
        <li><Link to="/addbook">Add Book</Link></li>
      </ol>
    </div>
  );
}

export default Header;

