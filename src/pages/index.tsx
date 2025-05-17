import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, Modal, Button, TextField, Fade, Backdrop } from '@mui/material';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import { Helmet } from 'react-helmet';

const calculators = [
  { title: 'BMI Calculator', path: '/calculators/bmi', description: 'Calculate your Body Mass Index (BMI) to assess if you are at a healthy weight.' },
  { title: 'Calorie Calculator', path: '/calculators/calorie', description: 'Determine your daily calorie needs based on your activity level and goals.' },
  { title: 'Body Fat Calculator', path: '/calculators/body-fat', description: 'Estimate your body fat percentage using various measurement methods.' },
  { title: 'Protein Requirement Calculator', path: '/calculators/protein', description: 'Estimate your daily protein needs based on weight, activity, and goal.' },
  { title: 'Ideal Body Weight Calculator', path: '/calculators/ideal-body-weight', description: 'Find your ideal body weight using multiple science-backed formulas.' },
  { title: 'Basal Metabolic Rate (BMR) Calculator', path: '/calculators/bmr', description: 'Calculate your BMR using Mifflin-St Jeor, Harris-Benedict, or Katch-McArdle formulas.' },
  { title: 'Waist-to-Hip Ratio Calculator', path: '/calculators/waist-to-hip-ratio', description: 'Assess your health risk using the waist-to-hip ratio.' },
  { title: 'Daily Water Intake Calculator', path: '/calculators/daily-water-intake', description: 'Estimate your daily water needs based on science-backed guidelines.' },
  { title: 'Macro Nutrient Calculator', path: '/calculators/macro-nutrient', description: 'Calculate your daily macro requirements based on calorie intake.' },
  { title: 'Body Surface Area (BSA) Calculator', path: '/calculators/body-surface-area', description: 'Estimate your body surface area using Du Bois and Mosteller formulas.' },
  { title: 'Heart Rate Zone Calculator', path: '/calculators/heart-rate-zone', description: 'Find your heart rate training zones using the Karvonen formula.' },
  { title: 'Pregnancy Due Date Calculator', path: '/calculators/pregnancy-due-date', description: "Estimate your pregnancy due date using Naegele's rule." },
  { title: 'Child Growth Percentile Calculator', path: '/calculators/child-growth-percentile', description: "Estimate your child's height and weight percentiles." },
  { title: 'Menstruation & Ovulation Calculator', path: '/calculators/menstruation', description: 'Predict your next period, ovulation window, and fertile days.' },
];

const IndexPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the report to your backend or email service
  };

  return (
    <Layout>
      <Helmet>
        <title>Health Calculators – Free Online Tools for Wellness, Fitness & Nutrition</title>
        <meta name="description" content="Free online health calculators for BMI, calories, body fat, macros, water intake, pregnancy, ovulation, and more. Instantly calculate your health metrics and optimize your wellness." />
        <meta name="keywords" content="health calculators, BMI calculator, calorie calculator, body fat calculator, ovulation calculator, pregnancy calculator, fitness, nutrition, wellness, free online tools" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Health Calculators',
          'url': 'https://yourdomain.com/',
          'description': 'Free online health calculators for wellness, fitness, and nutrition.'
        })}</script>
      </Helmet>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
          py: 8,
          px: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background shape */}
        <Box
          sx={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: 340,
            height: 340,
            background: 'radial-gradient(circle at 60% 40%, #6366f1 0%, #a5b4fc 100%)',
            opacity: 0.18,
            borderRadius: '50%',
            zIndex: 0,
            animation: 'float 8s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(30px)' },
            },
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 800, letterSpacing: '-2px', color: '#22223b' }}>
              Health Calculators – Free Online Tools for Wellness, Fitness & Nutrition
            </Typography>
            <Typography variant="h2" color="text.secondary" paragraph sx={{ fontWeight: 400, color: '#4b5563', fontSize: 20 }}>
              Instantly calculate your BMI, calories, macros, body fat, water intake, pregnancy, ovulation, and more. Trusted, science-backed calculators for your health journey.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {calculators.map((calculator, idx) => (
              <Grid item xs={12} sm={6} md={4} key={calculator.path}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 5,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                    background: 'rgba(255, 255, 255, 0.65)',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.045) rotate(-1deg)',
                      boxShadow: '0 16px 40px 0 rgba(99, 102, 241, 0.18)',
                      background: 'rgba(255,255,255,0.85)',
                    },
                  }}
                >
                  <CardActionArea component={Link} to={calculator.path} sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#3730a3' }}>
                        {calculator.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 400 }}>
                        {calculator.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Floating Report Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 2000,
            borderRadius: '50%',
            minWidth: 0,
            width: 56,
            height: 56,
            fontSize: 32,
            boxShadow: 6,
          }}
          onClick={handleOpen}
          aria-label="Report an Issue"
        >
          !
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500 }}
        >
          <Fade in={open}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
            }}>
              <Typography variant="h6" gutterBottom>Report an Issue or Bug</Typography>
              {submitted ? (
                <Typography color="success.main">Thank you for your feedback!</Typography>
              ) : (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Your Email (optional)"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Describe the issue or bug"
                    required
                    fullWidth
                    multiline
                    minRows={3}
                    margin="normal"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
                  <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
                    Submit
                  </Button>
                </form>
              )}
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Layout>
  );
};

export default IndexPage; 