import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const BodyFatCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(25);
  const [height, setHeight] = useState<number>(170);
  const [neck, setNeck] = useState<number>(38);
  const [waist, setWaist] = useState<number>(80);
  const [hip, setHip] = useState<number>(90);
  const [bodyFat, setBodyFat] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (height <= 0 || neck <= 0 || waist <= 0 || (gender === 'female' && hip <= 0)) {
      setBodyFat(null);
      setError('Please enter valid, positive values for all measurements.');
      return;
    }
    let bf = 0;
    if (gender === 'male') {
      if (waist - neck <= 0) {
        setBodyFat(null);
        setError('Waist must be greater than neck.');
        return;
      }
      bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      if (waist + hip - neck <= 0) {
        setBodyFat(null);
        setError('Waist + hip must be greater than neck.');
        return;
      }
      bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
    }
    setBodyFat(Number(bf.toFixed(1)));
  }, [gender, age, height, neck, waist, hip]);

  return (
    <Layout>
      <Helmet>
        <title>Body Fat Calculator | Body Fat Percentage & Health</title>
        <meta name="description" content="Free online Body Fat Calculator. Instantly estimate your body fat percentage using science-backed methods. Mobile-friendly, easy-to-use tool." />
        <meta name="keywords" content="body fat calculator, body fat percentage, health calculator, free online tool, fitness, wellness" />
        <link rel="canonical" href="https://health-calculators-delta.vercel.app/calculators/body-fat" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Body Fat Calculator',
          'description': 'Free online Body Fat Calculator. Instantly estimate your body fat percentage using science-backed methods.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Body Fat Percentage',
            'description': 'Body fat percentage is the proportion of fat in your body compared to everything else.'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Health Calculators',
            'url': 'https://health-calculators-delta.vercel.app/'
          }
        })}</script>
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
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, color: '#1976d2', textAlign: 'center', mb: 2 }}
              >
                Body Fat Calculator – Body Fat Percentage
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your body fat percentage using science-backed methods. Mobile-friendly, easy-to-use tool.
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
                  <TextField label="Age" type="number" fullWidth value={age} onChange={e => setAge(Number(e.target.value))} error={!!error && age <= 0} helperText={!!error && age <= 0 ? 'Enter a valid age' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Height (cm)" type="number" fullWidth value={height} onChange={e => setHeight(Number(e.target.value))} error={!!error && height <= 0} helperText={!!error && height <= 0 ? 'Enter a valid height' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Neck (cm)" type="number" fullWidth value={neck} onChange={e => setNeck(Number(e.target.value))} error={!!error && neck <= 0} helperText={!!error && neck <= 0 ? 'Enter a valid neck circumference' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Waist (cm)" type="number" fullWidth value={waist} onChange={e => setWaist(Number(e.target.value))} error={!!error && waist <= 0} helperText={!!error && waist <= 0 ? 'Enter a valid waist circumference' : ''} />
                </Grid>
                {gender === 'female' && (
                  <Grid item xs={12} sm={6}>
                    <TextField label="Hip (cm)" type="number" fullWidth value={hip} onChange={e => setHip(Number(e.target.value))} error={!!error && hip <= 0} helperText={!!error && hip <= 0 ? 'Enter a valid hip circumference' : ''} />
                  </Grid>
                )}
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {bodyFat !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Estimated Body Fat</Typography>
                  <Typography variant="h6" color="primary">{bodyFat}%</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/body-fat" />
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

export default BodyFatCalculator; 