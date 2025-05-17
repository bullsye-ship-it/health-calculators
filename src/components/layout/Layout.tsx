import React from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Health Calculators - Your One-Stop Health Resource</title>
        <meta name="description" content="Calculate your health metrics with our easy-to-use calculators. BMI, Calorie, Body Fat, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9562223688776063"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout; 