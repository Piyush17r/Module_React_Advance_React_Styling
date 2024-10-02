// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddEditBlog from './pages/AddEditBlog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEditBlog />} />
        <Route path="/edit/:id" element={<AddEditBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
