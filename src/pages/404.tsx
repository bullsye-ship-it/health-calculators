import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'gatsby';

const NotFoundPage: React.FC = () => (
  <Layout>
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h1" sx={{ fontWeight: 800, color: '#e11d48', mb: 2 }}>
        404 – Page Not Found
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Homepage
      </Button>
    </Box>
  </Layout>
);

export default NotFoundPage; 