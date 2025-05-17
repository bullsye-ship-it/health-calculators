import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, MenuItem, FormControl, InputLabel, Select, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const formulas = [
  { label: 'Du Bois', value: 'dubois' },
  { label: 'Mosteller', value: 'mosteller' },
];

const BodySurfaceAreaCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [selectedFormula, setSelectedFormula] = useState<string>('dubois');
  const [bsa, setBsa] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (height <= 0 || weight <= 0) {
      setBsa(null);
      setError('Please enter valid, positive values for height and weight.');
      return;
    }
    // Convert to cm and kg if needed
    const h = unit === 'cm' ? height : height * 2.54;
    const w = weightUnit === 'kg' ? weight : weight * 0.453592;
    let result = 0;
    switch (selectedFormula) {
      case 'dubois':
        result = 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425);
        break;
      case 'mosteller':
        result = Math.sqrt((h * w) / 3600);
        break;
      default:
        result = 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425);
    }
    setBsa(Number(result.toFixed(2)));
  }, [height, weight, unit, weightUnit, selectedFormula]);

  return (
    <Layout>
      <Helmet>
        <title>Body Surface Area (BSA) Calculator | Du Bois & Mosteller</title>
        <meta name="description" content="Free online Body Surface Area (BSA) Calculator. Instantly estimate your BSA using Du Bois and Mosteller formulas. Science-backed, mobile-friendly tool." />
        <meta name="keywords" content="body surface area calculator, BSA, Du Bois, Mosteller, health calculator, free online tool" />
        <link rel="canonical" href="https://yourdomain.com/calculators/body-surface-area" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Body Surface Area (BSA) Calculator',
          'description': 'Free online Body Surface Area (BSA) Calculator. Instantly estimate your BSA using Du Bois and Mosteller formulas.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Body Surface Area',
            'description': 'Body surface area (BSA) is the measured or calculated surface of a human body.'
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
                Body Surface Area (BSA) Calculator – Du Bois & Mosteller
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your body surface area using Du Bois and Mosteller formulas. Science-backed, mobile-friendly tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Height" type="number" fullWidth value={height} onChange={e => setHeight(Number(e.target.value))} error={!!error && height <= 0} helperText={!!error && height <= 0 ? 'Enter a valid height' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Height Unit</InputLabel>
                    <Select value={unit} label="Height Unit" onChange={e => setUnit(e.target.value as 'cm' | 'in')}>
                      <MenuItem value="cm">cm</MenuItem>
                      <MenuItem value="in">in</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Weight" type="number" fullWidth value={weight} onChange={e => setWeight(Number(e.target.value))} error={!!error && weight <= 0} helperText={!!error && weight <= 0 ? 'Enter a valid weight' : ''} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Weight Unit</InputLabel>
                    <Select value={weightUnit} label="Weight Unit" onChange={e => setWeightUnit(e.target.value as 'kg' | 'lbs')}>
                      <MenuItem value="kg">kg</MenuItem>
                      <MenuItem value="lbs">lbs</MenuItem>
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
              {bsa !== null && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Body Surface Area</Typography>
                  <Typography variant="h6" color="primary">{bsa} m²</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/body-surface-area" />
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

export default BodySurfaceAreaCalculator; 