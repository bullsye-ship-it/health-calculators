import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Slider, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const activityLevels = [
  { label: 'Sedentary (little or no exercise)', value: 1.2 },
  { label: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375 },
  { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55 },
  { label: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725 },
  { label: 'Super active (very hard exercise & physical job)', value: 1.9 },
];

const CalorieCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [activity, setActivity] = useState<number>(1.2);
  const [calories, setCalories] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (age <= 0 || height <= 0 || weight <= 0) {
      setCalories(null);
      setError('Please enter valid, positive values for age, height, and weight.');
      return;
    }
    const bmr = gender === 'male'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * activity;
    setCalories(Math.round(tdee));
  }, [age, gender, height, weight, activity]);

  return (
    <Layout>
      <Helmet>
        <title>Calorie Calculator | Daily Calorie Needs & Weight Goals</title>
        <meta name="description" content="Free online Calorie Calculator. Instantly estimate your daily calorie needs for weight loss, maintenance, or gain. Science-backed, mobile-friendly tool." />
        <meta name="keywords" content="calorie calculator, daily calories, weight loss, weight gain, TDEE, BMR, health calculator, free online tool" />
        <link rel="canonical" href="https://health-calculators-delta.vercel.app/calculators/calorie" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Calorie Calculator',
          'description': 'Free online Calorie Calculator. Instantly estimate your daily calorie needs for weight loss, maintenance, or gain.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Caloric Needs',
            'description': 'Caloric needs are the number of calories required to maintain, lose, or gain weight.'
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
                Calorie Calculator – Daily Calorie Needs
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your daily calorie needs for weight loss, maintenance, or gain. Science-backed, mobile-friendly tool.
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
                  <Typography gutterBottom>Height (cm)</Typography>
                  <Slider value={height} onChange={(_, v) => setHeight(v as number)} min={100} max={250} valueLabelDisplay="auto" />
                  <TextField fullWidth type="number" value={height} onChange={e => setHeight(Number(e.target.value))} sx={{ mt: 1 }} error={!!error && height <= 0} helperText={!!error && height <= 0 ? 'Enter a valid height' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography gutterBottom>Weight (kg)</Typography>
                  <Slider value={weight} onChange={(_, v) => setWeight(v as number)} min={30} max={200} valueLabelDisplay="auto" />
                  <TextField fullWidth type="number" value={weight} onChange={e => setWeight(Number(e.target.value))} sx={{ mt: 1 }} error={!!error && weight <= 0} helperText={!!error && weight <= 0 ? 'Enter a valid weight' : ''} />
                </Grid>
                <Grid item xs={12}>
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
              {calories && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Estimated Daily Calories</Typography>
                  <Typography variant="h6" color="primary">{calories} kcal/day</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/calorie" />
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

export default CalorieCalculator; 