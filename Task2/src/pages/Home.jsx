// pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setBlogs(response.data.slice(0, 4)); // Only 4 items for simplicity
  };

  const deleteBlog = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: 20 }}>React CRUD & Material UI</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: 20 }}>
        <Button variant="contained" color="primary" onClick={() => navigate('/add')}>
          Add Blog
        </Button>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          style={{ width: '300px' }}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs
              .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
              .map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>{blog.title}</TableCell>
                  <TableCell>{blog.body}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => navigate(`/edit/${blog.id}`)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => deleteBlog(blog.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
