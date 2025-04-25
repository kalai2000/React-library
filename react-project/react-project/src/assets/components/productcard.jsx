import './index.css';  

 


import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
        <img src={book.imageLink} alt={book.title} />
        <h3>{book.title}</h3>
        <p>₹{book.price}</p>
      </Link>
    </div>
  );
}

export default BookCard;

