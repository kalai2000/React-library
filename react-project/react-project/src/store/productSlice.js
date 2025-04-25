 
// import { createSlice } from '@reduxjs/toolkit';

// const productSlice = createSlice({
//   name: 'products',
//   initialState: [],
//   reducers: {
//     setBooks: (state, action) => {
//       return action.payload; // Replaces all books with the provided payload
//     },
//     addProduct: (state, action) => {
//       state.push(action.payload); // Adds a new product/book to the state
//     },
//   },
// });

// // Export the setBooks action and the reducer
// export const { setBooks, addProduct } = productSlice.actions;
// export default productSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setBooks: (state, action) => {
      return action.payload; // Replaces all books with the provided payload
    },
    addProduct: (state, action) => {
      const newProduct = action.payload;

      // Check if the product already exists by comparing the id
      const productExists = state.some((product) => product.id === newProduct.id);

      if (!productExists) {
        state.push(newProduct); // Adds the new product if it doesn't exist already
      } else {
        console.log('Product already exists in the list');
      }
    },
  },
});

// Export the actions
export const { setBooks, addProduct } = productSlice.actions;
export default productSlice.reducer;


