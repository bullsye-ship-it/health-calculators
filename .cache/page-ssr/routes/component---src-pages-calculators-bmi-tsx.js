"use strict";
exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 2232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bmi)
});

// EXTERNAL MODULE: external "/home/fa064289/Documents/Ads/health-calculators/node_modules/react/index.js"
var index_js_ = __webpack_require__(541);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(9067);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 2 modules
var Paper = __webpack_require__(538);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(4073);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(779);
// EXTERNAL MODULE: ./node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(4433);
// EXTERNAL MODULE: ./node_modules/@mui/material/Select/Select.js + 16 modules
var Select = __webpack_require__(1586);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 3 modules
var MenuItem = __webpack_require__(5046);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(8239);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slider/Slider.js + 6 modules
var Slider = __webpack_require__(9486);
// EXTERNAL MODULE: ./node_modules/@mui/material/TextField/TextField.js + 3 modules
var TextField = __webpack_require__(2471);
// EXTERNAL MODULE: ./node_modules/react-chartjs-2/dist/index.js
var dist = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/chart.js/dist/chart.js + 2 modules
var chart = __webpack_require__(106);
;// ./src/components/calculators/BmiCalculator.tsx
chart/* Chart */.t1.register(chart/* CategoryScale */.PP,chart/* LinearScale */.kc,chart/* PointElement */.FN,chart/* LineElement */.No,chart/* Title */.hE,chart/* Tooltip */.m_,chart/* Legend */.s$);const BmiCalculator=()=>{const{0:height,1:setHeight}=(0,index_js_.useState)(170);const{0:weight,1:setWeight}=(0,index_js_.useState)(70);const{0:unit,1:setUnit}=(0,index_js_.useState)('metric');const{0:result,1:setResult}=(0,index_js_.useState)(null);const{0:error,1:setError}=(0,index_js_.useState)(null);const calculateBMI=()=>{setError(null);if(height<=0||weight<=0){setResult(null);setError('Please enter valid, positive values for height and weight.');return;}let heightInMeters=unit==='metric'?height/100:height*0.0254;let weightInKg=unit==='metric'?weight:weight*0.453592;if(heightInMeters<=0){setResult(null);setError('Height must be greater than zero.');return;}const bmi=weightInKg/(heightInMeters*heightInMeters);if(!isFinite(bmi)||isNaN(bmi)){setResult(null);setError('Invalid BMI calculation. Please check your inputs.');return;}let category='';let healthyWeightRange={min:0,max:0};if(bmi<18.5){category='Underweight';}else if(bmi<25){category='Normal weight';}else if(bmi<30){category='Overweight';}else{category='Obese';}// Calculate healthy weight range
const minBMI=18.5;const maxBMI=24.9;healthyWeightRange={min:minBMI*(heightInMeters*heightInMeters),max:maxBMI*(heightInMeters*heightInMeters)};setResult({bmi:Number(bmi.toFixed(1)),category,healthyWeightRange});};(0,index_js_.useEffect)(()=>{calculateBMI();},[height,weight,unit]);const chartData={labels:['Underweight','Normal','Overweight','Obese'],datasets:[{label:'BMI Categories',data:[18.5,25,30,40],borderColor:'rgb(75, 192, 192)',tension:0.1}]};return/*#__PURE__*/index_js_default().createElement(Box/* default */.A,{sx:{maxWidth:800,mx:'auto',p:3}},/*#__PURE__*/index_js_default().createElement(Paper/* default */.A,{elevation:3,sx:{p:3}},/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"h4",gutterBottom:true},"BMI Calculator"),/*#__PURE__*/index_js_default().createElement(FormControl/* default */.A,{fullWidth:true,sx:{mb:2}},/*#__PURE__*/index_js_default().createElement(InputLabel/* default */.A,null,"Unit System"),/*#__PURE__*/index_js_default().createElement(Select/* default */.A,{value:unit,label:"Unit System",onChange:e=>setUnit(e.target.value)},/*#__PURE__*/index_js_default().createElement(MenuItem/* default */.A,{value:"metric"},"Metric (cm/kg)"),/*#__PURE__*/index_js_default().createElement(MenuItem/* default */.A,{value:"imperial"},"Imperial (in/lbs)"))),/*#__PURE__*/index_js_default().createElement(Grid/* default */.Ay,{container:true,spacing:3},/*#__PURE__*/index_js_default().createElement(Grid/* default */.Ay,{item:true,xs:12,md:6},/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{gutterBottom:true},"Height (",unit==='metric'?'cm':'inches',")"),/*#__PURE__*/index_js_default().createElement(Slider/* default */.Ay,{value:height,onChange:(_,value)=>setHeight(value),min:unit==='metric'?100:36,max:unit==='metric'?250:96,valueLabelDisplay:"auto"}),/*#__PURE__*/index_js_default().createElement(TextField/* default */.A,{fullWidth:true,type:"number",value:height,onChange:e=>setHeight(Number(e.target.value)),sx:{mt:1},error:!!error&&height<=0,helperText:!!error&&height<=0?'Enter a valid height':''})),/*#__PURE__*/index_js_default().createElement(Grid/* default */.Ay,{item:true,xs:12,md:6},/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{gutterBottom:true},"Weight (",unit==='metric'?'kg':'lbs',")"),/*#__PURE__*/index_js_default().createElement(Slider/* default */.Ay,{value:weight,onChange:(_,value)=>setWeight(value),min:unit==='metric'?30:66,max:unit==='metric'?200:440,valueLabelDisplay:"auto"}),/*#__PURE__*/index_js_default().createElement(TextField/* default */.A,{fullWidth:true,type:"number",value:weight,onChange:e=>setWeight(Number(e.target.value)),sx:{mt:1},error:!!error&&weight<=0,helperText:!!error&&weight<=0?'Enter a valid weight':''}))),error&&/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{color:"error",sx:{mt:2}},error),result&&/*#__PURE__*/index_js_default().createElement(Box/* default */.A,{sx:{mt:4}},/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"h5",gutterBottom:true},"Your Results"),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"h6",color:"primary"},"BMI: ",result.bmi),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"subtitle1",gutterBottom:true},"Category: ",result.category),/*#__PURE__*/index_js_default().createElement(Typography/* default */.A,{variant:"body1",gutterBottom:true},"Healthy Weight Range: ",result.healthyWeightRange.min.toFixed(1)," - ",result.healthyWeightRange.max.toFixed(1)," ",unit==='metric'?'kg':'lbs')),/*#__PURE__*/index_js_default().createElement(Box/* default */.A,{sx:{mt:4,height:300}},/*#__PURE__*/index_js_default().createElement(dist/* Line */.N1,{data:chartData,options:{responsive:true,scales:{y:{beginAtZero:true,title:{display:true,text:'BMI Value'}}}}}))));};/* harmony default export */ const calculators_BmiCalculator = (BmiCalculator);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/Container.js + 5 modules
var Container = __webpack_require__(126);
// EXTERNAL MODULE: ./src/components/layout/Layout.tsx
var Layout = __webpack_require__(5542);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(8154);
// EXTERNAL MODULE: ./src/components/common/CalculatorLinks.tsx
var CalculatorLinks = __webpack_require__(6476);
// EXTERNAL MODULE: ./src/components/common/AdSlot.tsx
var AdSlot = __webpack_require__(5076);
// EXTERNAL MODULE: ./src/components/common/adConfig.ts
var adConfig = __webpack_require__(6306);
;// ./src/pages/calculators/bmi.tsx








const BmiPage = () => /*#__PURE__*/index_js_default().createElement(Layout/* default */.A, null, /*#__PURE__*/index_js_default().createElement(Helmet.Helmet, null, /*#__PURE__*/index_js_default().createElement("title", null, "BMI Calculator | Body Mass Index Chart & Health Categories"), /*#__PURE__*/index_js_default().createElement("meta", {
  name: "description",
  content: "Free online BMI Calculator. Instantly calculate your Body Mass Index, see your BMI category, and learn about healthy weight ranges. Science-backed, mobile-friendly tool."
}), /*#__PURE__*/index_js_default().createElement("meta", {
  name: "keywords",
  content: "BMI calculator, body mass index, BMI chart, healthy weight, obesity, underweight, health calculator, free online tool"
}), /*#__PURE__*/index_js_default().createElement("link", {
  rel: "canonical",
  href: "https://health-calculators-delta.vercel.app/calculators/bmi"
})), /*#__PURE__*/index_js_default().createElement(Box/* default */.A, {
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
}, /*#__PURE__*/index_js_default().createElement(Box/* default */.A, {
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
}, /*#__PURE__*/index_js_default().createElement(AdSlot/* default */.A, Object.assign({}, adConfig/* default */.A.desktop.left, {
  position: "left"
}))), /*#__PURE__*/index_js_default().createElement(Box/* default */.A, {
  sx: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: {
      xs: 120,
      md: 180
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    pointerEvents: 'none',
    zIndex: 0,
    opacity: 0.08
  }
}, /*#__PURE__*/index_js_default().createElement("svg", {
  width: "480",
  height: "120",
  viewBox: "0 0 480 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    width: '100%',
    maxWidth: 480
  }
}, /*#__PURE__*/index_js_default().createElement("path", {
  d: "M60 80 Q55 100 65 100 Q75 100 70 80 Q80 70 70 60 Q80 50 70 40 Q80 30 70 20 Q60 10 50 20 Q40 30 50 40 Q40 50 50 60 Q40 70 50 80 Q45 100 55 100 Q65 100 60 80 Z",
  fill: "#555"
}), /*#__PURE__*/index_js_default().createElement("path", {
  d: "M160 80 Q155 100 165 100 Q175 100 170 80 Q180 70 170 60 Q180 50 170 40 Q180 30 170 20 Q160 10 150 20 Q140 30 150 40 Q140 50 150 60 Q140 70 150 80 Q145 100 155 100 Q165 100 160 80 Z",
  fill: "#888"
}), /*#__PURE__*/index_js_default().createElement("ellipse", {
  cx: "260",
  cy: "60",
  rx: "18",
  ry: "40",
  fill: "#aaa"
}), /*#__PURE__*/index_js_default().createElement("ellipse", {
  cx: "260",
  cy: "30",
  rx: "10",
  ry: "12",
  fill: "#aaa"
}), /*#__PURE__*/index_js_default().createElement("ellipse", {
  cx: "360",
  cy: "60",
  rx: "18",
  ry: "40",
  fill: "#bbb"
}), /*#__PURE__*/index_js_default().createElement("ellipse", {
  cx: "360",
  cy: "30",
  rx: "10",
  ry: "12",
  fill: "#bbb"
}))), /*#__PURE__*/index_js_default().createElement(Container/* default */.A, {
  maxWidth: "sm",
  sx: {
    position: 'relative',
    zIndex: 1,
    p: 0
  }
}, /*#__PURE__*/index_js_default().createElement(Box/* default */.A, {
  sx: {
    display: {
      xs: 'block',
      md: 'none'
    }
  }
}, /*#__PURE__*/index_js_default().createElement(AdSlot/* default */.A, Object.assign({}, adConfig/* default */.A.mobile.top, {
  position: "top"
}))), /*#__PURE__*/index_js_default().createElement(Box/* default */.A, {
  sx: {
    display: {
      xs: 'block',
      md: 'none'
    }
  }
}, adConfig/* default */.A.mobile.inline.map((ad, idx) => /*#__PURE__*/index_js_default().createElement(AdSlot/* default */.A, Object.assign({
  key: ad.adUnitId
}, ad, {
  position: `inline-${idx + 1}`
})))), /*#__PURE__*/index_js_default().createElement(Box/* default */.A, {
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
}, /*#__PURE__*/index_js_default().createElement(Paper/* default */.A, {
  elevation: 3,
  sx: {
    borderRadius: 5,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(8px)',
    p: 4,
    mt: 4
  }
}, /*#__PURE__*/index_js_default().createElement(calculators_BmiCalculator, null), /*#__PURE__*/index_js_default().createElement(CalculatorLinks/* default */.A, {
  exclude: "/calculators/bmi"
})))), /*#__PURE__*/index_js_default().createElement(Box/* default */.A, {
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
}, /*#__PURE__*/index_js_default().createElement(AdSlot/* default */.A, Object.assign({}, adConfig/* default */.A.desktop.right, {
  position: "right"
})))));
/* harmony default export */ const bmi = (BmiPage);

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
//# sourceMappingURL=component---src-pages-calculators-bmi-tsx.js.map