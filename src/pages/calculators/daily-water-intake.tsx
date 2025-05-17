import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const activityLevels = [
  { label: 'Sedentary (little or no exercise)', value: 0 },
  { label: 'Lightly active (light exercise/sports 1-3 days/week)', value: 0.3 },
  { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 0.5 },
  { label: 'Very active (hard exercise/sports 6-7 days a week)', value: 0.7 },
];

const DailyWaterIntakeCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(70);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(0);
  const [water, setWater] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (weight <= 0) {
      setWater(null);
      setError('Please enter a valid, positive weight.');
      return;
    }
    // US National Academies: 3.7L/day for men, 2.7L/day for women (includes all fluids)
    // Adjust for weight and activity (add 0.3-0.7L for activity)
    const weightKg = unit === 'kg' ? weight : weight * 0.453592;
    let base = gender === 'male' ? 3.7 : 2.7;
    // Optionally, scale base by weight (e.g., 35ml/kg)
    // base = weightKg * 0.035;
    const total = base + activity;
    setWater(Number(total.toFixed(2)));
  }, [weight, unit, gender, activity]);

  return (
    <Layout>
      <Helmet>
        <title>Daily Water Intake Calculator | Hydration Needs</title>
        <meta name="description" content="Free online Daily Water Intake Calculator. Instantly estimate your daily hydration needs based on science-backed guidelines. Mobile-friendly, easy-to-use tool." />
        <meta name="keywords" content="water intake calculator, hydration, daily water, health calculator, free online tool, wellness" />
        <link rel="canonical" href="https://health-calculators-delta.vercel.app/calculators/daily-water-intake" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Daily Water Intake Calculator',
          'description': 'Free online Daily Water Intake Calculator. Instantly estimate your daily hydration needs based on science-backed guidelines.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Hydration Needs',
            'description': 'Hydration needs are the amount of water required for optimal health.'
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
                Daily Water Intake Calculator – Hydration Needs
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your daily hydration needs based on science-backed guidelines. Mobile-friendly, easy-to-use tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Weight" type="number" fullWidth value={weight} onChange={e => setWeight(Number(e.target.value))} error={!!error && weight <= 0} helperText={!!error && weight <= 0 ? 'Enter a valid weight' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Unit</InputLabel>
                    <Select value={unit} label="Unit" onChange={e => setUnit(e.target.value as 'kg' | 'lbs')}>
                      <MenuItem value="kg">kg</MenuItem>
                      <MenuItem value="lbs">lbs</MenuItem>
                    </Select>
                  </FormControl>
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
                  <FormControl fullWidth>
                    <InputLabel>Activity Level</InputLabel>
                    <Select value={activity} label="Activity Level" onChange={e => setActivity(Number(e.target.value))}>
                      {activityLevels.map(level => (
                        <MenuItem key={level.value} value={level.value}>{level.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {water !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Daily Water Requirement</Typography>
                  <Typography variant="h6" color="primary">{water} liters/day</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/daily-water-intake" />
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

export default DailyWaterIntakeCalculator; 