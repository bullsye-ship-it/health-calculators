import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Slider, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const activityLevels = [
  { label: 'Sedentary (little or no exercise)', value: 0.8 },
  { label: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.0 },
  { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.2 },
  { label: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.5 },
  { label: 'Athlete/Bodybuilder', value: 2.0 },
];

const goals = [
  { label: 'Maintenance', value: 1 },
  { label: 'Muscle Gain', value: 1.2 },
  { label: 'Weight Loss', value: 1.4 },
];

const ProteinCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(70);
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [activity, setActivity] = useState<number>(1.0);
  const [goal, setGoal] = useState<number>(1);
  const [protein, setProtein] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (weight <= 0) {
      setProtein(null);
      setError('Please enter a valid, positive weight.');
      return;
    }
    // Convert lbs to kg if needed
    const weightKg = unit === 'kg' ? weight : weight * 0.453592;
    // ISSN & US Guidelines: 0.8g/kg (sedentary) up to 2.0g/kg (athlete/bodybuilder)
    // Adjust for goal
    const proteinGrams = weightKg * activity * goal;
    setProtein(Math.round(proteinGrams));
  }, [weight, unit, activity, goal]);

  return (
    <Layout>
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
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#3730a3' }}>
                Protein Requirement Calculator
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                This calculator uses recommendations from the <b>International Society of Sports Nutrition (ISSN)</b> and <b>US Dietary Guidelines</b> to estimate daily protein needs based on your weight, activity level, and goal. Results are estimates and not a substitute for professional medical advice.
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
                    <InputLabel>Activity Level</InputLabel>
                    <Select value={activity} label="Activity Level" onChange={e => setActivity(Number(e.target.value))}>
                      {activityLevels.map(level => (
                        <MenuItem key={level.value} value={level.value}>{level.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Goal</InputLabel>
                    <Select value={goal} label="Goal" onChange={e => setGoal(Number(e.target.value))}>
                      {goals.map(g => (
                        <MenuItem key={g.value} value={g.value}>{g.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {protein !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Daily Protein Requirement</Typography>
                  <Typography variant="h6" color="primary">{protein} grams</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/protein" />
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

export default ProteinCalculator; 