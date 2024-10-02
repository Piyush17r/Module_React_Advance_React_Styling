import { createContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import Home from './pages/Home/Home';

const MyContext = createContext();

const router = createBrowserRouter([
  // Define your routes here
  {
  
    path: "/",
    element: <Home/>,  // Your Home component
  },
  {
    path: "/about",
    // element: <About />, // Your About component
  },
]);

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [isLogin, setIsLogin] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  const [openFilters, setOpenFilters] = useState(false);  

  useEffect(() => {
    getCartData(`http://localhost:5050/cartItems`); 
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login); 
  }, []); 
  
  const getCartData = async(url) => {
    try {
      const response = await axios.get(url);
      setCartItems(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Add to cart
  const addToCart = async (item) => {
    item.quantity = 1;
    try {
      const res = await axios.post("http://localhost:5050/cartItems", item);
      if (res !== undefined) {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };      

  // Remove from cart
  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr);
  };

  // Empty cart
  const emptyCart = () => {
    setCartItems([]);
  };

  // Sign in
  const signIn = () => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login); 
  };

  // Sign out
  const signOut = () => {
    localStorage.removeItem("isLogin"); 
    setIsLogin(false); 
  };

  const openFilterShop = () => {
    setOpenFilters(!openFilters);
  }; 

  const value = {
    cartItems,
    addToCart,
    removeItemsFromCart,
    emptyCart,
    isLogin,
    signOut,
    signIn, 
    windowWidth, 
    openFilters, 
    openFilterShop,
  };

  return (
    <>
      <MyContext.Provider value={value}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </MyContext.Provider>
    </>
  );
}

export default App; 
export { MyContext }; 
