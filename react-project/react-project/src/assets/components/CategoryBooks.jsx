 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Books } from './mockdata';  // static books
import ProductItem from './productitem'; //  
import "./index.css";

const CategoryBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  const reduxBooks = useSelector((state) => state.products);

  useEffect(() => {
    const combinedBooks = [
      ...Books,
      ...reduxBooks.filter((reduxBook) => !Books.some((book) => book.id === reduxBook.id))
    ];

    const filteredBooks = combinedBooks.filter(
      (book) => book.category?.toLowerCase() === category?.toLowerCase()
    );

    setBooks(filteredBooks);
  }, [category, reduxBooks]);

  return (
    <div className="category-books">
      <h2>Books in {category.charAt(0).toUpperCase() + category.slice(1)} Category</h2>
      <div className="card-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <ProductItem key={book.id} bookdetails={book} />
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBooks;


