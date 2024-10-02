// pages/AddEditBlog.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Container } from '@mui/material';

const AddEditBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setTitle(response.data.title);
    setBody(response.data.body);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body };

    if (id) {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, blog);
    } else {
      await axios.post('https://jsonplaceholder.typicode.com/posts', blog);
    }

    navigate('/');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 40 }}>
      <h2>{id ? 'Edit Blog' : 'Add Blog'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
          {id ? 'Update' : 'Add'} Blog
        </Button>
      </form>
    </Container>
  );
};

export default AddEditBlog;
