"use strict";
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 3476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(126);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2471);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6990);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(296);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5542);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8154);
/* harmony import */ var _components_common_CalculatorLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6476);
/* harmony import */ var _components_common_AdSlot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5076);
/* harmony import */ var _components_common_adConfig_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6306);







const DEFAULT_CYCLE_LENGTH = 28;
const DEFAULT_PERIOD_LENGTH = 5;
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
const MenstruationCalculator = () => {
  const {
    0: lastPeriod,
    1: setLastPeriod
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: cycleLength,
    1: setCycleLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_CYCLE_LENGTH);
  const {
    0: periodLength,
    1: setPeriodLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(DEFAULT_PERIOD_LENGTH);
  const {
    0: submitted,
    1: setSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let nextPeriod = null;
  let ovulationStart = null;
  let ovulationEnd = null;
  let fertileDay = null;
  let currentCycleDay = null;
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
  const handleSubmit = e => {
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
      'url': 'https://health-calculators-delta.vercel.app/'
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Menstruation & Ovulation Calculator | Next Period & Fertile Days Predictor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "Free online Menstruation and Ovulation Calculator. Predict your next period, ovulation window, and fertile days. Learn about menstrual health and cycle tracking."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: "menstruation calculator, ovulation calculator, period calculator, next period, fertile days, menstrual health, women health, cycle tracker, fertility"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: "https://health-calculators-delta.vercel.app/calculators/menstruation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify(schemaData))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
      py: 8,
      px: 0,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row'
      },
      alignItems: {
        xs: 'stretch',
        md: 'flex-start'
      },
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: {
        xs: 'none',
        md: 'block'
      },
      minWidth: 180,
      maxWidth: 200,
      flex: '0 0 180px',
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_AdSlot__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, Object.assign({}, _components_common_adConfig_ts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.desktop.left, {
    position: "left"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    maxWidth: "sm",
    sx: {
      position: 'relative',
      zIndex: 1,
      p: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: {
        xs: 'block',
        md: 'none'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_AdSlot__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, Object.assign({}, _components_common_adConfig_ts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.mobile.top, {
    position: "top"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: {
        xs: 'block',
        md: 'none'
      }
    }
  }, _components_common_adConfig_ts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.mobile.inline.map((ad, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_AdSlot__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, Object.assign({
    key: ad.adUnitId
  }, ad, {
    position: `inline-${idx + 1}`
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    elevation: 3,
    sx: {
      p: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h1",
    component: "h1",
    gutterBottom: true,
    sx: {
      fontSize: {
        xs: 24,
        md: 32
      },
      fontWeight: 800,
      color: '#1976d2',
      textAlign: 'center',
      mb: 2
    }
  }, "Menstruation & Ovulation Calculator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h2",
    component: "h2",
    gutterBottom: true,
    sx: {
      fontSize: {
        xs: 20,
        md: 24
      },
      fontWeight: 600,
      color: '#22223b',
      mb: 2
    }
  }, "Predict Your Next Period, Ovulation Window & Fertile Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mb: 2
    }
  }, "Use this free online tool to estimate your next period, ovulation window, and most fertile days. Track your menstrual cycle for better health and fertility awareness."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Last Period Start Date",
    type: "date",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    },
    value: lastPeriod,
    onChange: e => {
      setLastPeriod(e.target.value);
      setSubmitted(false);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Average Cycle Length (days)",
    type: "number",
    fullWidth: true,
    value: cycleLength,
    onChange: e => {
      setCycleLength(Number(e.target.value));
      setSubmitted(false);
    },
    inputProps: {
      min: 20,
      max: 40
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Period Duration (days)",
    type: "number",
    fullWidth: true,
    value: periodLength,
    onChange: e => {
      setPeriodLength(Number(e.target.value));
      setSubmitted(false);
    },
    inputProps: {
      min: 2,
      max: 10
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    type: "submit",
    variant: "contained",
    color: "primary",
    fullWidth: true
  }, "Calculate")))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    severity: "error",
    sx: {
      mt: 2
    }
  }, error), submitted && !error && lastPeriod && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h3",
    component: "h3",
    gutterBottom: true,
    sx: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Results: Your Menstrual & Ovulation Dates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Next Period: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, nextPeriod ? formatDate(nextPeriod) : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Ovulation Window: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, ovulationStart ? formatDate(ovulationStart) : '-', " to ", ovulationEnd ? formatDate(ovulationEnd) : '-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Most Fertile Day: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, fertileDay ? formatDate(fertileDay) : '-')), currentCycleDay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Current Cycle Day: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, currentCycleDay))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    severity: "info",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Disclaimer:"), " This calculator is for informational purposes only and does not constitute medical advice. Cycle length and ovulation can vary. For concerns about your menstrual health, consult a healthcare provider."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_CalculatorLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    exclude: "/calculators/menstruation"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      display: {
        xs: 'none',
        md: 'block'
      },
      minWidth: 180,
      maxWidth: 200,
      flex: '0 0 180px',
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_AdSlot__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, Object.assign({}, _components_common_adConfig_ts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.desktop.right, {
    position: "right"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenstruationCalculator);

/***/ }),

/***/ 5076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6306);
const AdSlot=({adUnitId,size,position})=>{if(!_adConfig__WEBPACK_IMPORTED_MODULE_1__/* .SHOW_ADS */ .J)return null;const{0:adLoaded,1:setAdLoaded}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const adRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(window&&window.adsbygoogle&&adRef.current){try{(window.adsbygoogle=window.adsbygoogle||[]).push({});}catch(e){setAdLoaded(false);}}},[adUnitId,position]);if(!adLoaded)return null;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:adRef,className:`ad-slot ad-${position}`,style:{width:size[0],height:size[1],margin:'16px auto',display:'flex',alignItems:'center',justifyContent:'center',background:'#f5f5f5',borderRadius:8}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ins",{className:"adsbygoogle",style:{display:'block',width:size[0],height:size[1]},"data-ad-client":"ca-pub-xxxxxxxxxxxxxxxx"// <-- Replace with your AdSense publisher ID
,"data-ad-slot":adUnitId,"data-ad-format":"auto"}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdSlot);

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
const Layout=({children})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"Health Calculators - Your One-Stop Health Resource"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:"Calculate your health metrics with our easy-to-use calculators. BMI, Calorie, Body Fat, and more."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{async:true,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9562223688776063",crossOrigin:"anonymous"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{component:"main",sx:{minHeight:'100vh',display:'flex',flexDirection:'column'}},children));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 6306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   J: () => (/* binding */ SHOW_ADS)
/* harmony export */ });
const SHOW_ADS=false;const adConfig={desktop:{left:{adUnitId:'desktop-left-123',size:[160,600]},right:{adUnitId:'desktop-right-456',size:[160,600]}},mobile:{top:{adUnitId:'mobile-top-789',size:[320,100]},inline:[{adUnitId:'mobile-inline-1',size:[300,250]},{adUnitId:'mobile-inline-2',size:[300,250]}]}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adConfig);

/***/ }),

/***/ 6476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9799);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2794);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2241);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
const calculators=[{title:'BMI Calculator',path:'/calculators/bmi'},{title:'Calorie Calculator',path:'/calculators/calorie'},{title:'Body Fat Calculator',path:'/calculators/body-fat'},{title:'Protein Requirement Calculator',path:'/calculators/protein'},{title:'Ideal Body Weight Calculator',path:'/calculators/ideal-body-weight'},{title:'Basal Metabolic Rate (BMR) Calculator',path:'/calculators/bmr'},{title:'Waist-to-Hip Ratio Calculator',path:'/calculators/waist-to-hip-ratio'},{title:'Daily Water Intake Calculator',path:'/calculators/daily-water-intake'},{title:'Macro Nutrient Calculator',path:'/calculators/macro-nutrient'},{title:'Body Surface Area (BSA) Calculator',path:'/calculators/body-surface-area'},{title:'Heart Rate Zone Calculator',path:'/calculators/heart-rate-zone'},{title:'Pregnancy Due Date Calculator',path:'/calculators/pregnancy-due-date'},{title:'Child Growth Percentile Calculator',path:'/calculators/child-growth-percentile'},{title:'Menstruation & Ovulation Calculator',path:'/calculators/menstruation'}];const CalculatorLinks=({exclude})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{sx:{mt:6,display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{variant:"h2",component:"h2",sx:{fontSize:22,fontWeight:700,mb:2,textAlign:'center'}},"More Health Calculators"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{sx:{width:'100%',maxWidth:400,mx:'auto',p:0}},calculators.filter(c=>c.path!==exclude).map(calc=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay,{key:calc.path,disablePadding:true,sx:{justifyContent:'center'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{sx:{textAlign:'center'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:calc.path,style:{textDecoration:'none',color:'#1976d2',fontWeight:500}},calc.title))))));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalculatorLinks);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-calculators-menstruation-tsx.js.map