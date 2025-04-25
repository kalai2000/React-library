 
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBooks } from './store/productSlice'; // Correct import
import Header from './assets/components/header.jsx';
import NotFound from "./assets/components/notfound.jsx";

// Your local book data
const localData = [
  // Add your local data here
  // Example:
  // { id: 1, title: 'Book 1', category: 'fiction' },
  // { id: 2, title: 'Book 2', category: 'non-fiction' },
  // { id: 3, title: 'Book 3', category: 'science' }
];

import HomePage from './assets/components/homepage.jsx';
import BrowseBooks from './assets/components/BrowseBooks.jsx';
import AddBook from './assets/components/AddBook.jsx';
import CategoryBooks from './assets/components/CategoryBooks.jsx';
import ProductDetails from './assets/components/ProductDetails.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while loading the page.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBooks(localData)); // Push local data to Redux store
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browsebooks" element={<BrowseBooks />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/book/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;




