import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography, TextField, Grid } from '@mui/material';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet';
import CalculatorLinks from '../../components/common/CalculatorLinks';
import AdSlot from '../../components/common/AdSlot';
import adConfig from '../../components/common/adConfig.ts';

const PregnancyDueDateCalculator: React.FC = () => {
  const [lmp, setLmp] = useState<string>('');
  const [dueDate, setDueDate] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    if (!lmp) {
      setDueDate(null);
      return;
    }
    const lmpDate = new Date(lmp);
    if (isNaN(lmpDate.getTime())) {
      setDueDate(null);
      setError('Please enter a valid date for the last menstrual period.');
      return;
    }
    // Naegele's rule: add 280 days (40 weeks) to LMP
    const due = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000);
    setDueDate(due.toLocaleDateString());
  }, [lmp]);

  return (
    <Layout>
      <Helmet>
        <title>Pregnancy Due Date Calculator | Estimate Your Baby's Arrival</title>
        <meta name="description" content="Free online Pregnancy Due Date Calculator. Instantly estimate your due date using Naegele's rule. Science-backed, mobile-friendly tool." />
        <meta name="keywords" content="pregnancy due date calculator, due date, Naegele's rule, pregnancy calculator, health calculator, free online tool" />
        <link rel="canonical" href="https://yourdomain.com/calculators/pregnancy-due-date" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MedicalWebPage',
          'name': 'Pregnancy Due Date Calculator',
          'description': 'Free online Pregnancy Due Date Calculator. Instantly estimate your due date using Naegele\'s rule.',
          'mainEntity': {
            '@type': 'MedicalCondition',
            'name': 'Pregnancy Due Date',
            'description': 'Pregnancy due date is the estimated date when a baby is expected to be born.'
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
                Pregnancy Due Date Calculator – Estimate Your Baby's Arrival
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Instantly estimate your due date using Naegele's rule. Science-backed, mobile-friendly tool.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="First Day of Last Menstrual Period (LMP)"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={lmp}
                    onChange={e => setLmp(e.target.value)}
                    error={!!error}
                    helperText={error}
                  />
                </Grid>
              </Grid>
              {dueDate && !error && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" gutterBottom>Your Estimated Due Date</Typography>
                  <Typography variant="h6" color="primary">{dueDate}</Typography>
                </Box>
              )}
            </Paper>
            <CalculatorLinks exclude="/calculators/pregnancy-due-date" />
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

export default PregnancyDueDateCalculator; 