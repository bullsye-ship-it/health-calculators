"use strict";
exports.id = 435;
exports.ids = [435];
exports.modules = {

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

/***/ }),

/***/ 9831:
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
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5542);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8154);
/* harmony import */ var _components_common_CalculatorLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6476);
/* harmony import */ var _components_common_AdSlot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5076);
/* harmony import */ var _components_common_adConfig_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6306);







const zones = [{
  label: 'Zone 1 (Very Light, 50-60%)',
  min: 0.5,
  max: 0.6
}, {
  label: 'Zone 2 (Light, 60-70%)',
  min: 0.6,
  max: 0.7
}, {
  label: 'Zone 3 (Moderate, 70-80%)',
  min: 0.7,
  max: 0.8
}, {
  label: 'Zone 4 (Hard, 80-90%)',
  min: 0.8,
  max: 0.9
}, {
  label: 'Zone 5 (Maximum, 90-100%)',
  min: 0.9,
  max: 1.0
}];
const HeartRateZoneCalculator = () => {
  const {
    0: age,
    1: setAge
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(30);
  const {
    0: resting,
    1: setResting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(60);
  const {
    0: max,
    1: setMax
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: zoneValues,
    1: setZoneValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setError(null);
    if (age <= 0 || resting <= 0) {
      setMax(null);
      setZoneValues([]);
      setError('Please enter valid, positive values for age and resting heart rate.');
      return;
    }
    // Max HR: 220 - age
    const maxHR = 220 - age;
    setMax(maxHR);
    // Karvonen formula: Target = ((maxHR - resting) * %intensity) + resting
    const zonesArr = zones.map(z => ({
      min: Math.round((maxHR - resting) * z.min + resting),
      max: Math.round((maxHR - resting) * z.max + resting)
    }));
    setZoneValues(zonesArr);
  }, [age, resting]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Heart Rate Zone Calculator | Training & Fat Burn Zones"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "Free online Heart Rate Zone Calculator. Instantly find your heart rate training zones for fat burn, cardio, and peak performance. Science-backed, mobile-friendly tool."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: "heart rate zone calculator, training zones, fat burn, cardio, exercise, health calculator, free online tool"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: "https://health-calculators-delta.vercel.app/calculators/heart-rate-zone"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'name': 'Heart Rate Zone Calculator',
    'description': 'Free online Heart Rate Zone Calculator. Instantly find your heart rate training zones for fat burn, cardio, and peak performance.',
    'mainEntity': {
      '@type': 'MedicalCondition',
      'name': 'Heart Rate Zones',
      'description': 'Heart rate zones are ranges that guide exercise intensity for fat burn, cardio, and peak performance.'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Health Calculators',
      'url': 'https://health-calculators-delta.vercel.app/'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      animation: `fadeIn 0.8s 0.2s both`,
      '@keyframes fadeIn': {
        from: {
          opacity: 0,
          transform: 'translateY(40px)'
        },
        to: {
          opacity: 1,
          transform: 'none'
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    elevation: 3,
    sx: {
      borderRadius: 5,
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(8px)',
      p: 4,
      mt: 4,
      textAlign: 'center'
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
  }, "Heart Rate Zone Calculator \u2013 Training & Fat Burn Zones"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mb: 2
    }
  }, "Instantly find your heart rate training zones for fat burn, cardio, and peak performance. Science-backed, mobile-friendly tool."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Age",
    type: "number",
    fullWidth: true,
    value: age,
    onChange: e => setAge(Number(e.target.value)),
    error: !!error && age <= 0,
    helperText: !!error && age <= 0 ? 'Enter a valid age' : ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Resting Heart Rate",
    type: "number",
    fullWidth: true,
    value: resting,
    onChange: e => setResting(Number(e.target.value)),
    error: !!error && resting <= 0,
    helperText: !!error && resting <= 0 ? 'Enter a valid resting HR' : ''
  }))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    color: "error",
    sx: {
      mt: 2
    }
  }, error), max !== null && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h5",
    gutterBottom: true
  }, "Your Max Heart Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h6",
    color: "primary"
  }, max, " bpm"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h5",
    sx: {
      mt: 3
    }
  }, "Training Zones"), zones.map((z, i) => {
    var _zoneValues$i, _zoneValues$i2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      key: z.label,
      variant: "body1",
      sx: {
        mt: 1
      }
    }, z.label, ": ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, (_zoneValues$i = zoneValues[i]) === null || _zoneValues$i === void 0 ? void 0 : _zoneValues$i.min, " - ", (_zoneValues$i2 = zoneValues[i]) === null || _zoneValues$i2 === void 0 ? void 0 : _zoneValues$i2.max, " bpm"));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_CalculatorLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    exclude: "/calculators/heart-rate-zone"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartRateZoneCalculator);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-calculators-heart-rate-zone-tsx.js.map