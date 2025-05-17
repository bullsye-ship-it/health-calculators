import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BmiResult {
  bmi: number;
  category: string;
  healthyWeightRange: {
    min: number;
    max: number;
  };
}

const BmiCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [result, setResult] = useState<BmiResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateBMI = (): void => {
    setError(null);
    if (height <= 0 || weight <= 0) {
      setResult(null);
      setError('Please enter valid, positive values for height and weight.');
      return;
    }
    let heightInMeters = unit === 'metric' ? height / 100 : height * 0.0254;
    let weightInKg = unit === 'metric' ? weight : weight * 0.453592;
    if (heightInMeters <= 0) {
      setResult(null);
      setError('Height must be greater than zero.');
      return;
    }
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    if (!isFinite(bmi) || isNaN(bmi)) {
      setResult(null);
      setError('Invalid BMI calculation. Please check your inputs.');
      return;
    }
    let category = '';
    let healthyWeightRange = { min: 0, max: 0 };
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    // Calculate healthy weight range
    const minBMI = 18.5;
    const maxBMI = 24.9;
    healthyWeightRange = {
      min: minBMI * (heightInMeters * heightInMeters),
      max: maxBMI * (heightInMeters * heightInMeters),
    };
    setResult({
      bmi: Number(bmi.toFixed(1)),
      category,
      healthyWeightRange,
    });
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight, unit]);

  const chartData = {
    labels: ['Underweight', 'Normal', 'Overweight', 'Obese'],
    datasets: [
      {
        label: 'BMI Categories',
        data: [18.5, 25, 30, 40],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          BMI Calculator
        </Typography>
        
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Unit System</InputLabel>
          <Select
            value={unit}
            label="Unit System"
            onChange={(e) => setUnit(e.target.value as 'metric' | 'imperial')}
          >
            <MenuItem value="metric">Metric (cm/kg)</MenuItem>
            <MenuItem value="imperial">Imperial (in/lbs)</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </Typography>
            <Slider
              value={height}
              onChange={(_, value) => setHeight(value as number)}
              min={unit === 'metric' ? 100 : 36}
              max={unit === 'metric' ? 250 : 96}
              valueLabelDisplay="auto"
            />
            <TextField
              fullWidth
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              sx={{ mt: 1 }}
              error={!!error && height <= 0}
              helperText={!!error && height <= 0 ? 'Enter a valid height' : ''}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </Typography>
            <Slider
              value={weight}
              onChange={(_, value) => setWeight(value as number)}
              min={unit === 'metric' ? 30 : 66}
              max={unit === 'metric' ? 200 : 440}
              valueLabelDisplay="auto"
            />
            <TextField
              fullWidth
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              sx={{ mt: 1 }}
              error={!!error && weight <= 0}
              helperText={!!error && weight <= 0 ? 'Enter a valid weight' : ''}
            />
          </Grid>
        </Grid>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {result && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Your Results
            </Typography>
            <Typography variant="h6" color="primary">
              BMI: {result.bmi}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Category: {result.category}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Healthy Weight Range: {result.healthyWeightRange.min.toFixed(1)} - {result.healthyWeightRange.max.toFixed(1)} {unit === 'metric' ? 'kg' : 'lbs'}
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 4, height: 300 }}>
          <Line data={chartData} options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'BMI Value'
                }
              }
            }
          }} />
        </Box>
      </Paper>
    </Box>
  );
};

export default BmiCalculator; 