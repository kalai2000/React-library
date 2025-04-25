 
import Productitem from "./productitem";
import { Link } from 'react-router-dom';
import "./index.css";

function ProductList({ booklist, onAddToCart, onCardClick }) {
  const handleCardClick = (data) => {
    console.log("Card clicked in ProductList:", data); // Check if the correct item is passed
    onCardClick(data); // Call the onCardClick function passed from App.js (optional, if you need to log data or handle it)
  };

  return (
    <div className="booklist-container">
      {booklist.map((data, index) => (
        <Link 
          key={index}
          to={`/book/${data.id}`} // Link to the book details page with the book ID in the URL
          className="product-link" 
        >
          <Productitem
            bookdetails={data}
            onAddToCart={onAddToCart}
            onClick={() => handleCardClick(data)} // Optional: You can still call this to log data if needed
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
