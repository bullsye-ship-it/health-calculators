import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'gatsby';

const calculators = [
  { title: 'BMI Calculator', path: '/calculators/bmi' },
  { title: 'Calorie Calculator', path: '/calculators/calorie' },
  { title: 'Body Fat Calculator', path: '/calculators/body-fat' },
  { title: 'Protein Requirement Calculator', path: '/calculators/protein' },
  { title: 'Ideal Body Weight Calculator', path: '/calculators/ideal-body-weight' },
  { title: 'Basal Metabolic Rate (BMR) Calculator', path: '/calculators/bmr' },
  { title: 'Waist-to-Hip Ratio Calculator', path: '/calculators/waist-to-hip-ratio' },
  { title: 'Daily Water Intake Calculator', path: '/calculators/daily-water-intake' },
  { title: 'Macro Nutrient Calculator', path: '/calculators/macro-nutrient' },
  { title: 'Body Surface Area (BSA) Calculator', path: '/calculators/body-surface-area' },
  { title: 'Heart Rate Zone Calculator', path: '/calculators/heart-rate-zone' },
  { title: 'Pregnancy Due Date Calculator', path: '/calculators/pregnancy-due-date' },
  { title: 'Child Growth Percentile Calculator', path: '/calculators/child-growth-percentile' },
  { title: 'Menstruation & Ovulation Calculator', path: '/calculators/menstruation' },
];

const CalculatorLinks: React.FC<{ exclude?: string }> = ({ exclude }) => (
  <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
    <Typography variant="h2" component="h2" sx={{ fontSize: 22, fontWeight: 700, mb: 2, textAlign: 'center' }}>
      More Health Calculators
    </Typography>
    <List sx={{ width: '100%', maxWidth: 400, mx: 'auto', p: 0 }}>
      {calculators.filter(c => c.path !== exclude).map(calc => (
        <ListItem key={calc.path} disablePadding sx={{ justifyContent: 'center' }}>
          <ListItemText sx={{ textAlign: 'center' }}>
            <Link to={calc.path} style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 500 }}>
              {calc.title}
            </Link>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default CalculatorLinks; 