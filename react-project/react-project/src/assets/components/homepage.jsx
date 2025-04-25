
import React from 'react';
import { useSelector } from 'react-redux';
import { Books } from './mockdata'; // static books
import ProductItem from './productitem';
import Categories from "./Categories"

const HomePage = () => {
  const reduxBooks = useSelector((state) => state.products); // get from Redux
   

  const allBooks = [
    ...Books,
    ...reduxBooks.filter((reduxBook) => !Books.some((book) => book.id === reduxBook.id))
  ];
   

  return (
    <div className="homepage">
      <h1>📚 Welcome to the Book Store</h1>

      <div className="booklist-container">
        <Categories/> 
        {allBooks.length > 0 ? (
          allBooks.map((book) => (
            <ProductItem
              key={book.id}
              bookdetails={book}
              onAddToCart={() => {}}
            />
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;


