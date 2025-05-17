import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const formulas = [
  { label: 'Devine', value: 'devine' },
  { label: 'Robinson', value: 'robinson' },
  { label: 'Miller', value: 'miller' },
  { label: 'Hamwi', value: 'hamwi' },
];

const IdealBodyWeightCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(170);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [selectedFormula, setSelectedFormula] = useState<string>('devine');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (height <= 0) {
      setResult(null);
      setError('Please enter a valid, positive height.');
      return;
    }
    // Convert height to inches if needed
    const heightInInches = unit === 'cm' ? height / 2.54 : height;
    let ibw = 0;
    const base = gender === 'male' ? 50 : 45.5;
    const baseInches = 60; // 5 feet
    switch (selectedFormula) {
      case 'devine':
        ibw = base + 2.3 * (heightInInches - baseInches);
        break;
      case 'robinson':
        ibw = (gender === 'male')
          ? 52 + 1.9 * (heightInInches - baseInches)
          : 49 + 1.7 * (heightInInches - baseInches);
        break;
      case 'miller':
        ibw = (gender === 'male')
          ? 56.2 + 1.41 * (heightInInches - baseInches)
          : 53.1 + 1.36 * (heightInInches - baseInches);
        break;
      case 'hamwi':
        ibw = (gender === 'male')
          ? 48 + 2.7 * (heightInInches - baseInches)
          : 45.5 + 2.2 * (heightInInches - baseInches);
        break;
      default:
        ibw = base + 2.3 * (heightInInches - baseInches);
    }
    setResult(Math.round(ibw));
  }, [height, gender, unit, selectedFormula]);

  return (
    <Layout>
      <Helmet>
        <title>Ideal Body Weight Calculator | Science-Backed Formulas</title>
        <meta name="description" content="Free online Ideal Body Weight Calculator. Instantly estimate your ideal weight using multiple science-backed formulas. Mobile-friendly, easy-to-use tool." />
        <meta name="keywords" content="ideal body weight calculator, healthy weight, science-backed, health calculator, free online tool" />
        <link rel="canonical" href="https://yourdomain.com/calculators/ideal-body-weight" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Ideal Body Weight Calculator',
          'description': 'Free online Ideal Body Weight Calculator. Instantly estimate your ideal weight using multiple science-backed formulas.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Ideal Body Weight',
            'description': 'Ideal body weight is the optimal weight recommended for health and longevity.'
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
          <Box sx={{ animation: `fadeIn 0.8s 0.2s both`, '@keyframes fadeIn': { from: { opacity: 0, transform: 'translateY(40px)' }, to: { opacity: 1, transform: 'none' }, }, }}>
            <Paper elevation={3} sx={{ borderRadius: 5, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(8px)', p: 4, mt: 4, textAlign: 'center' }}>
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, color: '#1976d2', textAlign: 'center', mb: 2 }}
              >
                Ideal Body Weight Calculator – Science-Backed Formulas
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your ideal weight using multiple science-backed formulas. Mobile-friendly, easy-to-use tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Height" type="number" fullWidth value={height} onChange={e => setHeight(Number(e.target.value))} error={!!error && height <= 0} helperText={!!error && height <= 0 ? 'Enter a valid height' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Unit</InputLabel>
                    <Select value={unit} label="Unit" onChange={e => setUnit(e.target.value as 'cm' | 'in')}>
                      <MenuItem value="cm">cm</MenuItem>
                      <MenuItem value="in">in</MenuItem>
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
                    <InputLabel>Formula</InputLabel>
                    <Select value={selectedFormula} label="Formula" onChange={e => setSelectedFormula(e.target.value)}>
                      {formulas.map(f => (
                        <MenuItem key={f.value} value={f.value}>{f.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              {result !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Ideal Body Weight</Typography>
                  <Typography variant="h6" color="primary">{result} kg</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/ideal-body-weight" />
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

export default IdealBodyWeightCalculator; 