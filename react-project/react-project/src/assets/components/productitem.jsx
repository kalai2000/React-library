 
import "./index.css";
import { useNavigate } from 'react-router-dom';

function ProductItem({ bookdetails }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${bookdetails.id}`);
  };

  // Prioritize uploaded images, then mock data, then fallback
  const resolveImage = (book) => {
    return book.imageUrl || book.imageLink || "https://via.placeholder.com/150";
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img
        src={resolveImage(bookdetails)}
        alt={bookdetails.title}
        className="product-image"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/150"; // Fallback on error
        }}
      />
      <h2>{bookdetails.title}</h2>
      <p>Author: {bookdetails.author}</p>
      <p>Category: {bookdetails.category}</p>
    </div>
  );
}

export default ProductItem;
