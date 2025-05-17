import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'gatsby';

const GatewayTimeoutPage: React.FC = () => (
  <Layout>
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h1" sx={{ fontWeight: 800, color: '#e11d48', mb: 2 }}>
        504 – Gateway Timeout
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        The server took too long to respond. Please try again later.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Homepage
      </Button>
    </Box>
  </Layout>
);

export default GatewayTimeoutPage; 