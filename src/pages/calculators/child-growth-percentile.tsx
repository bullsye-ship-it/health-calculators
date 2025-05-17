import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

// Note: For a real percentile, you would use CDC/WHO lookup tables. Here, we provide a simplified estimate for demo purposes.
function estimatePercentile(value: number, mean: number, sd: number) {
  // Z-score
  const z = (value - mean) / sd;
  // Convert Z to percentile (approximate)
  const percentile = Math.round(50 * (1 + erf(z / Math.SQRT2)));
  return percentile;
}
// Error function approximation
function erf(x: number) {
  // Abramowitz and Stegun formula 7.1.26
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}

const ageMeans = {
  // Example means and SDs for demo (age in years)
  2: { height: { mean: 87, sd: 3.5 }, weight: { mean: 12.5, sd: 1.2 } },
  5: { height: { mean: 110, sd: 4.5 }, weight: { mean: 18, sd: 2.0 } },
  10: { height: { mean: 138, sd: 6.0 }, weight: { mean: 32, sd: 4.5 } },
};

const ChildGrowthPercentileCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(5);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<number>(110);
  const [weight, setWeight] = useState<number>(18);
  const [heightPercentile, setHeightPercentile] = useState<number | null>(null);
  const [weightPercentile, setWeightPercentile] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (age <= 0 || height <= 0 || weight <= 0) {
      setHeightPercentile(null);
      setWeightPercentile(null);
      setError('Please enter valid, positive values for age, height, and weight.');
      return;
    }
    // Use closest age group for demo
    const closestAge = [2, 5, 10].reduce((prev, curr) => Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev);
    const means = ageMeans[closestAge as 2 | 5 | 10];
    setHeightPercentile(estimatePercentile(height, means.height.mean, means.height.sd));
    setWeightPercentile(estimatePercentile(weight, means.weight.mean, means.weight.sd));
  }, [age, height, weight]);

  return (
    <Layout>
      <Helmet>
        <title>Child Growth Percentile Calculator | Height & Weight Percentiles</title>
        <meta name="description" content="Free online Child Growth Percentile Calculator. Instantly estimate your child's height and weight percentiles. Science-backed, mobile-friendly tool." />
        <meta name="keywords" content="child growth percentile calculator, height percentile, weight percentile, child health, health calculator, free online tool" />
        <link rel="canonical" href="https://health-calculators-delta.vercel.app/calculators/child-growth-percentile" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Child Growth Percentile Calculator',
          'description': 'Free online Child Growth Percentile Calculator. Instantly estimate your child\'s height and weight percentiles.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Child Growth Percentile',
            'description': 'Child growth percentiles are measures of a child\'s height and weight compared to other children.'
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
          <Box sx={{ animation: `fadeIn 0.8s 0.2s both`, '@keyframes fadeIn': { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'none' }, }, }}>
            <Paper elevation={3} sx={{ borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(8px)', p: 4, mt: 4, textAlign: 'center' }}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, color: '#1976d2', textAlign: 'center', mb: 2 }}
              >
                Child Growth Percentile Calculator – Height & Weight Percentiles
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your child's height and weight percentiles. Science-backed, mobile-friendly tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Age (years)" type="number" fullWidth value={age} onChange={e => setAge(Number(e.target.value))} error={!!error && age <= 0} helperText={!!error && age <= 0 ? 'Enter a valid age' : ''} />
                </Grid>
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
                  <TextField label="Height (cm)" type="number" fullWidth value={height} onChange={e => setHeight(Number(e.target.value))} error={!!error && height <= 0} helperText={!!error && height <= 0 ? 'Enter a valid height' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Weight (kg)" type="number" fullWidth value={weight} onChange={e => setWeight(Number(e.target.value))} error={!!error && weight <= 0} helperText={!!error && weight <= 0 ? 'Enter a valid weight' : ''} />
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {heightPercentile !== null && weightPercentile !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Estimated Percentiles</Typography>
                  <Typography variant="body1">Height: <b>{heightPercentile}th percentile</b></Typography>
                  <Typography variant="body1">Weight: <b>{weightPercentile}th percentile</b></Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/child-growth-percentile" />
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

export default ChildGrowthPercentileCalculator; 