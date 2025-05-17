"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 2783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(126);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4104);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(209);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(973);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2471);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5542);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8154);





const calculators = [{
  title: 'BMI Calculator',
  path: '/calculators/bmi',
  description: 'Calculate your Body Mass Index (BMI) to assess if you are at a healthy weight.'
}, {
  title: 'Calorie Calculator',
  path: '/calculators/calorie',
  description: 'Determine your daily calorie needs based on your activity level and goals.'
}, {
  title: 'Body Fat Calculator',
  path: '/calculators/body-fat',
  description: 'Estimate your body fat percentage using various measurement methods.'
}, {
  title: 'Protein Requirement Calculator',
  path: '/calculators/protein',
  description: 'Estimate your daily protein needs based on weight, activity, and goal.'
}, {
  title: 'Ideal Body Weight Calculator',
  path: '/calculators/ideal-body-weight',
  description: 'Find your ideal body weight using multiple science-backed formulas.'
}, {
  title: 'Basal Metabolic Rate (BMR) Calculator',
  path: '/calculators/bmr',
  description: 'Calculate your BMR using Mifflin-St Jeor, Harris-Benedict, or Katch-McArdle formulas.'
}, {
  title: 'Waist-to-Hip Ratio Calculator',
  path: '/calculators/waist-to-hip-ratio',
  description: 'Assess your health risk using the waist-to-hip ratio.'
}, {
  title: 'Daily Water Intake Calculator',
  path: '/calculators/daily-water-intake',
  description: 'Estimate your daily water needs based on science-backed guidelines.'
}, {
  title: 'Macro Nutrient Calculator',
  path: '/calculators/macro-nutrient',
  description: 'Calculate your daily macro requirements based on calorie intake.'
}, {
  title: 'Body Surface Area (BSA) Calculator',
  path: '/calculators/body-surface-area',
  description: 'Estimate your body surface area using Du Bois and Mosteller formulas.'
}, {
  title: 'Heart Rate Zone Calculator',
  path: '/calculators/heart-rate-zone',
  description: 'Find your heart rate training zones using the Karvonen formula.'
}, {
  title: 'Pregnancy Due Date Calculator',
  path: '/calculators/pregnancy-due-date',
  description: "Estimate your pregnancy due date using Naegele's rule."
}, {
  title: 'Child Growth Percentile Calculator',
  path: '/calculators/child-growth-percentile',
  description: "Estimate your child's height and weight percentiles."
}, {
  title: 'Menstruation & Ovulation Calculator',
  path: '/calculators/menstruation',
  description: 'Predict your next period, ovulation window, and fertile days.'
}];
const IndexPage = () => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: submitted,
    1: setSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the report to your backend or email service
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Health Calculators \u2013 Free Online Tools for Wellness, Fitness & Nutrition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "Free online health calculators for BMI, calories, body fat, macros, water intake, pregnancy, ovulation, and more. Instantly calculate your health metrics and optimize your wellness."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: "health calculators, BMI calculator, calorie calculator, body fat calculator, ovulation calculator, pregnancy calculator, fitness, nutrition, wellness, free online tools"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: "https://yourdomain.com/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Health Calculators',
    'url': 'https://yourdomain.com/',
    'description': 'Free online health calculators for wellness, fitness, and nutrition.'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
      py: 8,
      px: 0,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
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
        '0%, 100%': {
          transform: 'translateY(0)'
        },
        '50%': {
          transform: 'translateY(30px)'
        }
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    maxWidth: "lg",
    sx: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      textAlign: 'center',
      mb: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h1",
    component: "h1",
    gutterBottom: true,
    sx: {
      fontWeight: 800,
      letterSpacing: '-2px',
      color: '#22223b'
    }
  }, "Health Calculators \u2013 Free Online Tools for Wellness, Fitness & Nutrition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h2",
    color: "text.secondary",
    paragraph: true,
    sx: {
      fontWeight: 400,
      color: '#4b5563',
      fontSize: 20
    }
  }, "Instantly calculate your BMI, calories, macros, body fat, water intake, pregnancy, ovulation, and more. Trusted, science-backed calculators for your health journey.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    container: true,
    spacing: 4,
    justifyContent: "center"
  }, calculators.map((calculator, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    key: calculator.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    sx: {
      height: '100%',
      borderRadius: 5,
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(8px)',
      transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.045) rotate(-1deg)',
        boxShadow: '0 16px 40px 0 rgba(99, 102, 241, 0.18)',
        background: 'rgba(255,255,255,0.85)'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    component: gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: calculator.path,
    sx: {
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h5",
    component: "h2",
    gutterBottom: true,
    sx: {
      fontWeight: 700,
      color: '#3730a3'
    }
  }, calculator.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      fontWeight: 400
    }
  }, calculator.description)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    variant: "contained",
    color: "secondary",
    sx: {
      position: 'fixed',
      bottom: 32,
      right: 32,
      zIndex: 2000,
      borderRadius: '50%',
      minWidth: 0,
      width: 56,
      height: 56,
      fontSize: 32,
      boxShadow: 6
    },
    onClick: handleOpen,
    "aria-label": "Report an Issue"
  }, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    open: open,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    in: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      borderRadius: 3,
      boxShadow: 24,
      p: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "h6",
    gutterBottom: true
  }, "Report an Issue or Bug"), submitted ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    color: "success.main"
  }, "Thank you for your feedback!") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    label: "Your Email (optional)",
    type: "email",
    fullWidth: true,
    margin: "normal",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    label: "Describe the issue or bug",
    required: true,
    fullWidth: true,
    multiline: true,
    minRows: 3,
    margin: "normal",
    value: message,
    onChange: e => setMessage(e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    type: "submit",
    variant: "contained",
    color: "primary",
    sx: {
      mt: 2
    },
    fullWidth: true
  }, "Submit")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9067);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8154);
const Layout=({children})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"Health Calculators - Your One-Stop Health Resource"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:"Calculate your health metrics with our easy-to-use calculators. BMI, Calorie, Body Fat, and more."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{component:"main",sx:{minHeight:'100vh',display:'flex',flexDirection:'column'}},children));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map