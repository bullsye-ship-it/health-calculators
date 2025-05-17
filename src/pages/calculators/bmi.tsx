import React from 'react';
import BmiCalculator from '../../components/calculators/BmiCalculator';
import { Box, Container, Paper } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const BmiPage: React.FC = () => (
  <Layout>
    <Helmet>
      <title>BMI Calculator | Body Mass Index Chart & Health Categories</title>
      <meta name="description" content="Free online BMI Calculator. Instantly calculate your Body Mass Index, see your BMI category, and learn about healthy weight ranges. Science-backed, mobile-friendly tool." />
      <meta name="keywords" content="BMI calculator, body mass index, BMI chart, healthy weight, obesity, underweight, health calculator, free online tool" />
      <link rel="canonical" href="https://health-calculators-delta.vercel.app/calculators/bmi" />
    </Helmet>
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
        py: 8,
        px: 0,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'stretch', md: 'flex-start' },
        justifyContent: 'center',
      }}
    >
      {/* Desktop Left Ad */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: 180, maxWidth: 200, flex: '0 0 180px', mt: 4 }}>
        <AdSlot {...adConfig.desktop.left} position="left" />
      </Box>
      {/* SVG Watermark Background - silhouettes, subtle and centered at the bottom */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: { xs: 120, md: 180 }, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', pointerEvents: 'none', zIndex: 0, opacity: 0.08 }}>
        <svg width="480" height="120" viewBox="0 0 480 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 480 }}>
          {/* Man silhouette */}
          <path d="M60 80 Q55 100 65 100 Q75 100 70 80 Q80 70 70 60 Q80 50 70 40 Q80 30 70 20 Q60 10 50 20 Q40 30 50 40 Q40 50 50 60 Q40 70 50 80 Q45 100 55 100 Q65 100 60 80 Z" fill="#555" />
          {/* Woman silhouette */}
          <path d="M160 80 Q155 100 165 100 Q175 100 170 80 Q180 70 170 60 Q180 50 170 40 Q180 30 170 20 Q160 10 150 20 Q140 30 150 40 Q140 50 150 60 Q140 70 150 80 Q145 100 155 100 Q165 100 160 80 Z" fill="#888" />
          {/* Girl silhouette */}
          <ellipse cx="260" cy="60" rx="18" ry="40" fill="#aaa" />
          <ellipse cx="260" cy="30" rx="10" ry="12" fill="#aaa" />
          {/* Boy silhouette */}
          <ellipse cx="360" cy="60" rx="18" ry="40" fill="#bbb" />
          <ellipse cx="360" cy="30" rx="10" ry="12" fill="#bbb" />
        </svg>
      </Box>
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, p: 0 }}>
        {/* Mobile Top Ad */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <AdSlot {...adConfig.mobile.top} position="top" />
        </Box>
        {/* Mobile Inline Ads */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          {adConfig.mobile.inline.map((ad, idx) => (
            <AdSlot key={ad.adUnitId} {...ad} position={`inline-${idx+1}`} />
          ))}
        </Box>
        <Box
          sx={{
            animation: `fadeIn 0.8s 0.2s both`,
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(40px)' },
              to: { opacity: 1, transform: 'none' },
            },
          }}
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: 5,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
              background: 'rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(8px)',
              p: 4,
              mt: 4,
            }}
          >
            <BmiCalculator />
            <CalculatorLinks exclude="/calculators/bmi" />
          </Paper>
        </Box>
      </Container>
      {/* Desktop Right Ad */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: 180, maxWidth: 200, flex: '0 0 180px', mt: 4 }}>
        <AdSlot {...adConfig.desktop.right} position="right" />
      </Box>
    </Box>
  </Layout>
);

export default BmiPage; 