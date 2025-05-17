import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const formulas = [
  { label: 'Mifflin-St Jeor', value: 'mifflin' },
  { label: 'Harris-Benedict', value: 'harris' },
  { label: 'Katch-McArdle (requires body fat %)', value: 'katch' },
];

const BmrCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [bodyFat, setBodyFat] = useState<number>(20);
  const [selectedFormula, setSelectedFormula] = useState<string>('mifflin');
  const [bmr, setBmr] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (age <= 0 || height <= 0 || weight <= 0) {
      setBmr(null);
      setError('Please enter valid, positive values for age, height, and weight.');
      return;
    }
    let result = 0;
    switch (selectedFormula) {
      case 'mifflin':
        result = gender === 'male'
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;
        break;
      case 'harris':
        result = gender === 'male'
          ? 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age
          : 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age;
        break;
      case 'katch':
        if (bodyFat <= 0 || bodyFat >= 70) {
          setBmr(null);
          setError('Please enter a valid body fat percentage (1-69).');
          return;
        }
        const leanMass = weight * (1 - bodyFat / 100);
        result = 370 + 21.6 * leanMass;
        break;
      default:
        result = gender === 'male'
          ? 10 * weight + 6.25 * height - 5 * age + 5
          : 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setBmr(Math.round(result));
  }, [age, gender, height, weight, bodyFat, selectedFormula]);

  return (
    <Layout>
      <Helmet>
        <title>BMR Calculator | Basal Metabolic Rate & Energy Needs</title>
        <meta name="description" content="Free online BMR Calculator. Instantly estimate your Basal Metabolic Rate and daily energy needs using science-backed formulas. Mobile-friendly tool." />
        <meta name="keywords" content="BMR calculator, basal metabolic rate, energy needs, calorie calculator, health calculator, free online tool" />
        <link rel="canonical" href="https://yourdomain.com/calculators/bmr" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'BMR Calculator',
          'description': 'Free online BMR Calculator. Instantly estimate your Basal Metabolic Rate and daily energy needs using science-backed formulas.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Basal Metabolic Rate',
            'description': 'BMR is the number of calories your body needs at rest.'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Health Calculators',
            'url': 'https://yourdomain.com/'
          }
        })}</script>
      </Helmet>
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
                BMR Calculator – Basal Metabolic Rate
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your Basal Metabolic Rate and daily energy needs using science-backed formulas. Mobile-friendly tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Age" type="number" fullWidth value={age} onChange={e => setAge(Number(e.target.value))} error={!!error && age <= 0} helperText={!!error && age <= 0 ? 'Enter a valid age' : ''} />
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
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Formula</InputLabel>
                    <Select value={selectedFormula} label="Formula" onChange={e => setSelectedFormula(e.target.value)}>
                      {formulas.map(f => (
                        <MenuItem key={f.value} value={f.value}>{f.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {selectedFormula === 'katch' && (
                  <Grid item xs={12} sm={6}>
                    <TextField label="Body Fat %" type="number" fullWidth value={bodyFat} onChange={e => setBodyFat(Number(e.target.value))} error={!!error && (bodyFat <= 0 || bodyFat >= 70)} helperText={!!error && (bodyFat <= 0 || bodyFat >= 70) ? 'Enter a valid body fat % (1-69)' : ''} />
                  </Grid>
                )}
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {bmr !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Basal Metabolic Rate</Typography>
                  <Typography variant="h6" color="primary">{bmr} kcal/day</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/bmr" />
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

export default BmrCalculator; 