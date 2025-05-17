import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const WaistToHipRatioCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [waist, setWaist] = useState<number>(80);
  const [hip, setHip] = useState<number>(90);
  const [ratio, setRatio] = useState<number | null>(null);
  const [risk, setRisk] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (waist <= 0 || hip <= 0) {
      setRatio(null);
      setRisk('');
      setError('Please enter valid, positive values for waist and hip.');
      return;
    }
    const r = waist / hip;
    setRatio(Number(r.toFixed(2)));
    // WHO guidelines
    if (gender === 'male') {
      setRisk(r > 0.90 ? 'Increased risk' : 'Low risk');
    } else {
      setRisk(r > 0.85 ? 'Increased risk' : 'Low risk');
    }
  }, [waist, hip, gender]);

  return (
    <Layout>
      <Helmet>
        <title>Waist-to-Hip Ratio Calculator | Health Risk Assessment</title>
        <meta name="description" content="Free online Waist-to-Hip Ratio Calculator. Instantly assess your health risk using your waist and hip measurements. Science-backed, mobile-friendly tool." />
        <meta name="keywords" content="waist to hip ratio calculator, health risk, body shape, health calculator, free online tool, wellness" />
        <link rel="canonical" href="https://health-calculators-delta.vercel.app/calculators/waist-to-hip-ratio" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Waist-to-Hip Ratio Calculator',
          'description': 'Free online Waist-to-Hip Ratio Calculator. Instantly assess your health risk using your waist and hip measurements.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Waist-to-Hip Ratio',
            'description': 'Waist-to-hip ratio is a measure of body fat distribution and health risk.'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Health Calculators',
            'url': 'https://health-calculators-delta.vercel.app/'
          }
        })}</script>
      </Helmet>
      {/* Responsive Ad Placement */}
      <Box sx={{
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
      }}>
        {/* Desktop Left Ad */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: 180, maxWidth: 200, flex: '0 0 180px', mt: 4 }}>
          <AdSlot {...adConfig.desktop.left} position="left" />
        </Box>
        {/* Main Content (with mobile ads) */}
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
          {/* Calculator Content */}
          <Box sx={{ animation: `fadeIn 0.8s 0.2s both`, '@keyframes fadeIn': { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'none' }, }, }}>
            <Paper elevation={3} sx={{ borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(8px)', p: 4, mt: 4, textAlign: 'center' }}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, color: '#1976d2', textAlign: 'center', mb: 2 }}
              >
                Waist-to-Hip Ratio Calculator – Health Risk Assessment
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly assess your health risk using your waist and hip measurements. Science-backed, mobile-friendly tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select value={gender} label="Gender" onChange={e => setGender(e.target.value as 'male' | 'female')}>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Waist (cm)" type="number" fullWidth value={waist} onChange={e => setWaist(Number(e.target.value))} error={!!error && waist <= 0} helperText={!!error && waist <= 0 ? 'Enter a valid waist' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Hip (cm)" type="number" fullWidth value={hip} onChange={e => setHip(Number(e.target.value))} error={!!error && hip <= 0} helperText={!!error && hip <= 0 ? 'Enter a valid hip' : ''} />
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {ratio !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Waist-to-Hip Ratio</Typography>
                  <Typography variant="h6" color="primary">{ratio}</Typography>
                  <Typography variant="subtitle1" sx={{ mt: 2 }}>Health Risk: {risk}</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/waist-to-hip-ratio" />
          </Box>
        </Container>
        {/* Desktop Right Ad */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: 180, maxWidth: 200, flex: '0 0 180px', mt: 4 }}>
          <AdSlot {...adConfig.desktop.right} position="right" />
        </Box>
      </Box>
    </Layout>
  );
};

export default WaistToHipRatioCalculator; 