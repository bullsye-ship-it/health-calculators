# Health Calculators Website

A modern, responsive website built with Gatsby.js that provides various health-related calculators including BMI, Calorie, and Body Fat calculators.

## Features

- 🏥 Multiple health calculators
- 📱 Responsive design
- 🎨 Modern UI with Material-UI
- 📊 Interactive charts
- 🔍 SEO optimized
- 🚀 Fast performance
- 📈 Analytics integration

## Tech Stack

- Gatsby.js
- TypeScript
- Material-UI
- Chart.js
- React Helmet
- Google Analytics

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/health-calculators.git
cd health-calculators
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run develop
# or
yarn develop
```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Project Structure

```
health-calculators/
├── src/
│   ├── components/
│   │   ├── calculators/
│   │   ├── layout/
│   │   └── common/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── public/
├── gatsby-config.ts
└── package.json
```

## Available Calculators

- BMI Calculator
- Calorie Calculator
- Body Fat Calculator

## Development

### Adding a New Calculator

1. Create a new component in `src/components/calculators/`
2. Add the calculator page in `src/pages/calculators/`
3. Update the navigation in `Layout.tsx`
4. Add the calculator to the homepage grid

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The site is configured for deployment on Netlify or Vercel. Simply connect your repository and the site will be automatically built and deployed.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the component library
- Chart.js for data visualization
- Gatsby.js for the static site generation 