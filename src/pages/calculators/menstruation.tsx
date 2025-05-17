import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Grid, Alert, Container } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const DEFAULT_CYCLE_LENGTH = 28;
const DEFAULT_PERIOD_LENGTH = 5;

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

const MenstruationCalculator: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(DEFAULT_CYCLE_LENGTH);
  const [periodLength, setPeriodLength] = useState<number>(DEFAULT_PERIOD_LENGTH);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  let nextPeriod: Date | null = null;
  let ovulationStart: Date | null = null;
  let ovulationEnd: Date | null = null;
  let fertileDay: Date | null = null;
  let currentCycleDay: number | null = null;

  if (lastPeriod) {
    const last = new Date(lastPeriod);
    nextPeriod = addDays(last, cycleLength);
    ovulationStart = addDays(last, cycleLength - 18);
    ovulationEnd = addDays(last, cycleLength - 12);
    fertileDay = addDays(last, cycleLength - 14);
    const today = new Date();
    currentCycleDay = Math.floor((today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    if (currentCycleDay < 1) currentCycleDay = null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!lastPeriod) {
      setError('Please enter the start date of your last period.');
      return;
    }
    if (cycleLength < 20 || cycleLength > 40) {
      setError('Cycle length should be between 20 and 40 days.');
      return;
    }
    if (periodLength < 2 || periodLength > 10) {
      setError('Period duration should be between 2 and 10 days.');
      return;
    }
    setSubmitted(true);
  };

  // JSON-LD Schema for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'name': 'Menstruation & Ovulation Calculator',
    'description': 'Free online Menstruation and Ovulation Calculator. Predict your next period, ovulation window, and fertile days. Learn about menstrual health and cycle tracking.',
    'mainEntity': {
      '@type': 'MedicalCondition',
      'name': 'Menstrual Cycle',
      'alternateName': 'Ovulation',
      'description': 'The menstrual cycle is the regular natural change that occurs in the female reproductive system. This calculator helps predict period and ovulation dates for cycle tracking and fertility awareness.'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Health Calculators',
      'url': 'https://yourdomain.com/'
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Menstruation & Ovulation Calculator | Next Period & Fertile Days Predictor</title>
        <meta name="description" content="Free online Menstruation and Ovulation Calculator. Predict your next period, ovulation window, and fertile days. Learn about menstrual health and cycle tracking." />
        <meta name="keywords" content="menstruation calculator, ovulation calculator, period calculator, next period, fertile days, menstrual health, women health, cycle tracker, fertility" />
        <link rel="canonical" href="https://yourdomain.com/calculators/menstruation" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
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
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, color: '#1976d2', textAlign: 'center', mb: 2 }}
            >
              Menstruation & Ovulation Calculator
            </Typography>
            <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 600, color: '#22223b', mb: 2 }}>
              Predict Your Next Period, Ovulation Window & Fertile Days
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Use this free online tool to estimate your next period, ovulation window, and most fertile days. Track your menstrual cycle for better health and fertility awareness.
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Last Period Start Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={lastPeriod}
                    onChange={e => { setLastPeriod(e.target.value); setSubmitted(false); }}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Average Cycle Length (days)"
                    type="number"
                    fullWidth
                    value={cycleLength}
                    onChange={e => { setCycleLength(Number(e.target.value)); setSubmitted(false); }}
                    inputProps={{ min: 20, max: 40 }}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Period Duration (days)"
                    type="number"
                    fullWidth
                    value={periodLength}
                    onChange={e => { setPeriodLength(Number(e.target.value)); setSubmitted(false); }}
                    inputProps={{ min: 2, max: 10 }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Calculate
                  </Button>
                </Grid>
              </Grid>
            </form>
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            {submitted && !error && lastPeriod && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h3" component="h3" gutterBottom sx={{ fontSize: 20, fontWeight: 700 }}>
                  Results: Your Menstrual & Ovulation Dates
                </Typography>
                <Typography>Next Period: <b>{nextPeriod ? formatDate(nextPeriod) : '-'}</b></Typography>
                <Typography>Ovulation Window: <b>{ovulationStart ? formatDate(ovulationStart) : '-'} to {ovulationEnd ? formatDate(ovulationEnd) : '-'}</b></Typography>
                <Typography>Most Fertile Day: <b>{fertileDay ? formatDate(fertileDay) : '-'}</b></Typography>
                {currentCycleDay && (
                  <Typography>Current Cycle Day: <b>{currentCycleDay}</b></Typography>
                )}
              </Box>
            )}
            <Alert severity="info" sx={{ mt: 4 }}>
              <b>Disclaimer:</b> This calculator is for informational purposes only and does not constitute medical advice. Cycle length and ovulation can vary. For concerns about your menstrual health, consult a healthcare provider.
            </Alert>
            <CalculatorLinks exclude="/calculators/menstruation" />
          </Paper>
        </Container>
        {/* Desktop Right Ad */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: 180, maxWidth: 200, flex: '0 0 180px', mt: 4 }}>
          <AdSlot {...adConfig.desktop.right} position="right" />
        </Box>
      </Box>
    </Layout>
  );
};

export default MenstruationCalculator; 