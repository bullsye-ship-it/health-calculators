import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const zones = [
  { label: 'Zone 1 (Very Light, 50-60%)', min: 0.5, max: 0.6 },
  { label: 'Zone 2 (Light, 60-70%)', min: 0.6, max: 0.7 },
  { label: 'Zone 3 (Moderate, 70-80%)', min: 0.7, max: 0.8 },
  { label: 'Zone 4 (Hard, 80-90%)', min: 0.8, max: 0.9 },
  { label: 'Zone 5 (Maximum, 90-100%)', min: 0.9, max: 1.0 },
];

const HeartRateZoneCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(30);
  const [resting, setResting] = useState<number>(60);
  const [max, setMax] = useState<number | null>(null);
  const [zoneValues, setZoneValues] = useState<{min: number, max: number}[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (age <= 0 || resting <= 0) {
      setMax(null);
      setZoneValues([]);
      setError('Please enter valid, positive values for age and resting heart rate.');
      return;
    }
    // Max HR: 220 - age
    const maxHR = 220 - age;
    setMax(maxHR);
    // Karvonen formula: Target = ((maxHR - resting) * %intensity) + resting
    const zonesArr = zones.map(z => ({
      min: Math.round(((maxHR - resting) * z.min) + resting),
      max: Math.round(((maxHR - resting) * z.max) + resting),
    }));
    setZoneValues(zonesArr);
  }, [age, resting]);

  return (
    <Layout>
      <Helmet>
        <title>Heart Rate Zone Calculator | Training & Fat Burn Zones</title>
        <meta name="description" content="Free online Heart Rate Zone Calculator. Instantly find your heart rate training zones for fat burn, cardio, and peak performance. Science-backed, mobile-friendly tool." />
        <meta name="keywords" content="heart rate zone calculator, training zones, fat burn, cardio, exercise, health calculator, free online tool" />
        <link rel="canonical" href="https://yourdomain.com/calculators/heart-rate-zone" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Heart Rate Zone Calculator',
          'description': 'Free online Heart Rate Zone Calculator. Instantly find your heart rate training zones for fat burn, cardio, and peak performance.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Heart Rate Zones',
            'description': 'Heart rate zones are ranges that guide exercise intensity for fat burn, cardio, and peak performance.'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Health Calculators',
            'url': 'https://yourdomain.com/'
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
                Heart Rate Zone Calculator – Training & Fat Burn Zones
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly find your heart rate training zones for fat burn, cardio, and peak performance. Science-backed, mobile-friendly tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Age" type="number" fullWidth value={age} onChange={e => setAge(Number(e.target.value))} error={!!error && age <= 0} helperText={!!error && age <= 0 ? 'Enter a valid age' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Resting Heart Rate" type="number" fullWidth value={resting} onChange={e => setResting(Number(e.target.value))} error={!!error && resting <= 0} helperText={!!error && resting <= 0 ? 'Enter a valid resting HR' : ''} />
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {max !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Max Heart Rate</Typography>
                  <Typography variant="h6" color="primary">{max} bpm</Typography>
                  <Typography variant="h5" sx={{ mt: 3 }}>Training Zones</Typography>
                  {zones.map((z, i) => (
                    <Typography key={z.label} variant="body1" sx={{ mt: 1 }}>
                      {z.label}: <b>{zoneValues[i]?.min} - {zoneValues[i]?.max} bpm</b>
                    </Typography>
                  ))}
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/heart-rate-zone" />
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

export default HeartRateZoneCalculator; 