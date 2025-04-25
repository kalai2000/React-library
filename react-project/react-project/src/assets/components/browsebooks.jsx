
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './productitem';  
import { setBooks } from '../../store/productSlice';
 
import { Books } from './mockdata.js'; //   static books data
import "./index.css"
 

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  // Retrieve books from Redux state
  const reduxBooks = useSelector((state) => state.products); // ✅


  // On first render, load the static books into Redux if reduxBooks is empty
  useEffect(() => {
    if (reduxBooks.length === 0) {
      dispatch(setBooks(Books)); // Dispatch static books to Redux if no books in Redux
    }
  }, [dispatch, reduxBooks]);

   




  // Filter books based on search query
  const filteredBooks = reduxBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="browse-books">
      <h1>Browse Books</h1>

      {/* Search bar for filtering books */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title, author, or category"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>

      {/* Rendering filtered books */}
      <div className="booklist-container">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <ProductItem
              key={book.id} // Ensure each book has a unique key based on book.id
              bookdetails={book}
              onAddToCart={() => {}} // Placeholder for adding to cart
            />
          ))
        ) : (
          <p>No books found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;

 