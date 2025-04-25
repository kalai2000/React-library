 


import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import "./index.css";

function ProductDetails() {
  const { id } = useParams();
  console.log(id)

  // Ensure id is compared as string to avoid mismatches
  const book = useSelector((state) => {
    
    return state.products.find((item) => item.id.toString() === id);
  });
   
  const products = useSelector((state) => state.products);
   
  

  // Scroll to top when component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!book) {
    return <div className="product-details"><p>Loading book details or book not found...</p></div>;
  }

  return (
    <div className="product-details">
      <img src={book.imageLink} alt={book.title} />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Country:</strong> {book.country}</p>
      <p><strong>Language:</strong> {book.language}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Published Year:</strong> {book.year}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p>
        <strong>More Info:</strong>{' '}
        <a href={book.link} target="_blank" rel="noopener noreferrer">
          Wikipedia
        </a>
      </p>
    </div>
  );
}

export default ProductDetails;
