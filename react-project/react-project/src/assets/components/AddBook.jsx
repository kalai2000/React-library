 



import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/productSlice';
import React, { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null); // Use this to store the file
  const [imagePreview, setImagePreview] = useState(''); // State for image preview
  const dispatch = useDispatch();

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Create an image preview using FileReader
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the preview
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the image file
    let imageUrl = '';
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        imageUrl = reader.result; // The base64 image data URL
        const newBook = {
          id: crypto.randomUUID(),
          title,
          author,
          description,
          imageUrl,
        };

        // Dispatch the addProduct action to add the new book to Redux state
        dispatch(addProduct(newBook));
        console.log('New book added:', newBook);

        // Clear the form
        setTitle('');
        setAuthor('');
        setDescription('');
        setImageFile(null); // Reset the file input
        setImagePreview(''); // Reset the preview
      };
      reader.readAsDataURL(imageFile); // Convert file to base64 string
    } else {
      const newBook = {
        id: crypto.randomUUID(),
        title,
        author,
        description,
        imageUrl: '', // Handle case if no image is uploaded
      };

      dispatch(addProduct(newBook));
      console.log('New book added:', newBook);

      // Clear the form
      setTitle('');
      setAuthor('');
      setDescription('');
      setImageFile(null);
      setImagePreview('');
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}  
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*" // Ensure the file input only accepts image files
            onChange={handleFileChange} // Handle the file selection
          />
          {/* Display Image Preview */}
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" className="preview-image"  width="200px" height="300px"/>
            </div>
          )}
        </div>

        {/* Book Title */}
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Author */}
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;


