import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const activityLevels = [
  { label: 'Sedentary (little/no exercise)', value: 1.2 },
  { label: 'Lightly active (1–3 days/week)', value: 1.375 },
  { label: 'Moderately active (3–5 days/week)', value: 1.55 },
  { label: 'Very active (6–7 days/week)', value: 1.725 },
  { label: 'Extra active (twice/day workouts)', value: 1.9 },
];

const goals = [
  { label: 'Fat Loss (20% deficit)', value: 'fat_loss', adjustment: -0.2 },
  { label: 'Maintenance', value: 'maintenance', adjustment: 0 },
  { label: 'Muscle Gain (15% surplus)', value: 'muscle_gain', adjustment: 0.15 },
];

const MacroNutrientCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(30);
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.55);
  const [goal, setGoal] = useState(goals[0].value);
  const [macros, setMacros] = useState<{carbs: number, protein: number, fat: number, calories: number, proteinCals: number, fatCals: number, carbCals: number} | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (weight <= 0 || height <= 0 || age <= 0) {
      setMacros(null);
      setError('Please enter valid, positive values for age, weight, and height.');
      return;
    }
    // Step 1: BMR (Mifflin-St Jeor)
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr += gender === 'male' ? 5 : -161;
    // Step 2: TDEE
    const tdee = bmr * activity;
    // Step 3: Goal adjustment
    const goalObj = goals.find(g => g.value === goal) || goals[0];
    const calories = Math.round(tdee * (1 + goalObj.adjustment));
    // Step 4: Macros
    // Protein: 2g/kg for active (activity >= 1.55), else 1.6g/kg
    const proteinPerKg = activity >= 1.55 ? 2 : 1.6;
    const protein = weight * proteinPerKg;
    const proteinCals = protein * 4;
    // Fat: 0.8g/kg
    const fat = weight * 0.8;
    const fatCals = fat * 9;
    // Carbs: remaining calories
    const carbCals = Math.max(calories - (proteinCals + fatCals), 0);
    const carbs = carbCals / 4;
    setMacros({
      carbs: Math.round(carbs),
      protein: Math.round(protein),
      fat: Math.round(fat),
      calories,
      proteinCals: Math.round(proteinCals),
      fatCals: Math.round(fatCals),
      carbCals: Math.round(carbCals),
    });
  }, [age, weight, height, gender, activity, goal]);

  return (
    <Layout>
      <Helmet>
        <title>Macro Nutrient Calculator | Daily Carbs, Protein, Fat</title>
        <meta name="description" content="Free online Macro Nutrient Calculator. Instantly estimate your daily carbs, protein, and fat needs based on your calorie intake. Science-backed, mobile-friendly tool." />
        <meta name="keywords" content="macro calculator, macro nutrients, carbs, protein, fat, health calculator, free online tool, fitness, nutrition" />
        <link rel="canonical" href="https://health-calculators-delta.vercel.app/calculators/macro-nutrient" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Macro Nutrient Calculator',
          'description': 'Free online Macro Nutrient Calculator. Instantly estimate your daily carbs, protein, and fat needs based on your calorie intake.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Macronutrient Requirements',
            'description': 'Macronutrient requirements are the amounts of carbs, protein, and fat needed for optimal health.'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Health Calculators',
            'url': 'https://health-calculators-delta.vercel.app/'
          }
        })}</script>
      </Helmet>
      {/* Responsive Ad Placement */}
      {/* Desktop: Left/Right ads, Mobile: Top and Inline ads */}
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
                Macro Nutrient Calculator – Daily Carbs, Protein, Fat
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your daily carbs, protein, and fat needs based on your body and goals. Science-backed, mobile-friendly tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Age (years)" type="number" fullWidth value={age} onChange={e => setAge(Number(e.target.value))} error={!!error && age <= 0} helperText={!!error && age <= 0 ? 'Enter a valid age' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Body Weight (kg)" type="number" fullWidth value={weight} onChange={e => setWeight(Number(e.target.value))} error={!!error && weight <= 0} helperText={!!error && weight <= 0 ? 'Enter a valid weight' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Height (cm)" type="number" fullWidth value={height} onChange={e => setHeight(Number(e.target.value))} error={!!error && height <= 0} helperText={!!error && height <= 0 ? 'Enter a valid height' : ''} />
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
                      {activityLevels.map(a => (
                        <MenuItem key={a.value} value={a.value}>{a.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Goal</InputLabel>
                    <Select value={goal} label="Goal" onChange={e => setGoal(e.target.value)}>
                      {goals.map(g => (
                        <MenuItem key={g.value} value={g.value}>{g.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {macros && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Daily Macro Requirements</Typography>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body1">Protein: <b>{macros.protein} g</b> ({macros.proteinCals} kcal)</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body1">Fat: <b>{macros.fat} g</b> ({macros.fatCals} kcal)</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body1">Carbohydrates: <b>{macros.carbs} g</b> ({macros.carbCals} kcal)</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" sx={{ mt: 2 }}>Total Calories: <b>{macros.calories} kcal</b></Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
                    Disclaimer: Actual needs may differ. This is a generic calculation only. For personalized advice, consult a registered dietitian or healthcare professional.<br/>
                    Methodology: Mifflin-St Jeor Equation for BMR, activity multiplier for TDEE, goal adjustment, and evidence-based macro allocation (see ISSN, IOM, USDA guidelines).
                  </Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/macro-nutrient" />
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

export default MacroNutrientCalculator; 