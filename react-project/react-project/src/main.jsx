 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
 
import App from './App.jsx';  
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome icons
import { Provider } from 'react-redux';  
import store from './store'; // Import your Redux store
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing

const rootElement = document.getElementById('root');  
const root = createRoot(rootElement); // Create the root for React rendering

// Render the App wrapped with Redux Provider and BrowserRouter for routing
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>   
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

