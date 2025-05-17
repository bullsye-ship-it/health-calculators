"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 5046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MenuItem_MenuItem)
});

// UNUSED EXPORTS: overridesResolver

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(8587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: external "/home/fa064289/Documents/Ads/health-calculators/node_modules/react/index.js"
var index_js_ = __webpack_require__(541);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(5659);
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(771);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(1848);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(9770);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(5607);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(2850);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 9 modules
var ButtonBase = __webpack_require__(6360);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(2778);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(6852);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(8413);
;// ./node_modules/@mui/material/Divider/dividerClasses.js


function getDividerUtilityClass(slot) {
  return generateUtilityClass('MuiDivider', slot);
}
const dividerClasses = (0,generateUtilityClasses/* default */.A)('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
/* harmony default export */ const Divider_dividerClasses = (dividerClasses);
;// ./node_modules/@mui/material/ListItemIcon/listItemIconClasses.js


function getListItemIconUtilityClass(slot) {
  return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,generateUtilityClasses/* default */.A)('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
/* harmony default export */ const ListItemIcon_listItemIconClasses = (listItemIconClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(8081);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass_generateUtilityClass = __webpack_require__(1609);
;// ./node_modules/@mui/material/MenuItem/menuItemClasses.js


function getMenuItemUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiMenuItem', slot);
}
const menuItemClasses = (0,generateUtilityClasses/* default */.A)('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
/* harmony default export */ const MenuItem_menuItemClasses = (menuItemClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@mui/material/MenuItem/MenuItem.js
'use client';



const _excluded = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
















const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};
const useUtilityClasses = ownerState => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getMenuItemUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const MenuItemRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiMenuItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({}, theme.typography.body1, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap'
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: 'padding-box'
}, {
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${MenuItem_menuItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${MenuItem_menuItemClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${MenuItem_menuItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${MenuItem_menuItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  [`& + .${Divider_dividerClasses.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${Divider_dividerClasses.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses/* default */.A.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses/* default */.A.inset}`]: {
    paddingLeft: 36
  },
  [`& .${ListItemIcon_listItemIconClasses.root}`]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up('sm')]: {
    minHeight: 'auto'
  }
}, ownerState.dense && (0,esm_extends/* default */.A)({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, theme.typography.body2, {
  [`& .${ListItemIcon_listItemIconClasses.root} svg`]: {
    fontSize: '1.25rem'
  }
})));
const MenuItem = /*#__PURE__*/index_js_.forwardRef(function MenuItem(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiMenuItem'
  });
  const {
      autoFocus = false,
      component = 'li',
      dense = false,
      divider = false,
      disableGutters = false,
      focusVisibleClassName,
      role = 'menuitem',
      tabIndex: tabIndexProp,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const context = index_js_.useContext(ListContext/* default */.A);
  const childContext = index_js_.useMemo(() => ({
    dense: dense || context.dense || false,
    disableGutters
  }), [context.dense, dense, disableGutters]);
  const menuItemRef = index_js_.useRef(null);
  (0,useEnhancedEffect/* default */.A)(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  });
  const classes = useUtilityClasses(props);
  const handleRef = (0,useForkRef/* default */.A)(menuItemRef, ref);
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContext/* default */.A.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemRoot, (0,esm_extends/* default */.A)({
      ref: handleRef,
      role: role,
      tabIndex: tabIndex,
      component: component,
      focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
      className: (0,clsx/* default */.A)(classes.root, className)
    }, other, {
      ownerState: ownerState,
      classes: classes
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const MenuItem_MenuItem = (MenuItem);

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

/***/ 5531:
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4433);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1586);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5046);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5542);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8154);
/* harmony import */ var _components_common_CalculatorLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6476);
/* harmony import */ var _components_common_AdSlot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5076);
/* harmony import */ var _components_common_adConfig_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6306);







const activityLevels = [{
  label: 'Sedentary (little or no exercise)',
  value: 0
}, {
  label: 'Lightly active (light exercise/sports 1-3 days/week)',
  value: 0.3
}, {
  label: 'Moderately active (moderate exercise/sports 3-5 days/week)',
  value: 0.5
}, {
  label: 'Very active (hard exercise/sports 6-7 days a week)',
  value: 0.7
}];
const DailyWaterIntakeCalculator = () => {
  const {
    0: weight,
    1: setWeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(70);
  const {
    0: unit,
    1: setUnit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('kg');
  const {
    0: gender,
    1: setGender
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('male');
  const {
    0: activity,
    1: setActivity
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: water,
    1: setWater
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setError(null);
    if (weight <= 0) {
      setWater(null);
      setError('Please enter a valid, positive weight.');
      return;
    }
    // US National Academies: 3.7L/day for men, 2.7L/day for women (includes all fluids)
    // Adjust for weight and activity (add 0.3-0.7L for activity)
    const weightKg = unit === 'kg' ? weight : weight * 0.453592;
    let base = gender === 'male' ? 3.7 : 2.7;
    // Optionally, scale base by weight (e.g., 35ml/kg)
    // base = weightKg * 0.035;
    const total = base + activity;
    setWater(Number(total.toFixed(2)));
  }, [weight, unit, gender, activity]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Daily Water Intake Calculator | Hydration Needs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "Free online Daily Water Intake Calculator. Instantly estimate your daily hydration needs based on science-backed guidelines. Mobile-friendly, easy-to-use tool."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: "water intake calculator, hydration, daily water, health calculator, free online tool, wellness"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: "https://health-calculators-delta.vercel.app/calculators/daily-water-intake"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'name': 'Daily Water Intake Calculator',
    'description': 'Free online Daily Water Intake Calculator. Instantly estimate your daily hydration needs based on science-backed guidelines.',
    'mainEntity': {
      '@type': 'MedicalCondition',
      'name': 'Hydration Needs',
      'description': 'Hydration needs are the amount of water required for optimal health.'
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
  }, "Daily Water Intake Calculator \u2013 Hydration Needs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mb: 2
    }
  }, "Instantly estimate your daily hydration needs based on science-backed guidelines. Mobile-friendly, easy-to-use tool."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    label: "Weight",
    type: "number",
    fullWidth: true,
    value: weight,
    onChange: e => setWeight(Number(e.target.value)),
    error: !!error && weight <= 0,
    helperText: !!error && weight <= 0 ? 'Enter a valid weight' : ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, "Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    value: unit,
    label: "Unit",
    onChange: e => setUnit(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "kg"
  }, "kg"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "lbs"
  }, "lbs")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    value: gender,
    label: "Gender",
    onChange: e => setGender(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "male"
  }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "female"
  }, "Female")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, "Activity Level"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    value: activity,
    label: "Activity Level",
    onChange: e => setActivity(Number(e.target.value))
  }, activityLevels.map(level => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    key: level.value,
    value: level.value
  }, level.label)))))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    color: "error",
    sx: {
      mt: 2
    }
  }, error), water !== null && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h5",
    gutterBottom: true
  }, "Your Daily Water Requirement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
    variant: "h6",
    color: "primary"
  }, water, " liters/day"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common_CalculatorLinks__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    exclude: "/calculators/daily-water-intake"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyWaterIntakeCalculator);

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
//# sourceMappingURL=component---src-pages-calculators-daily-water-intake-tsx.js.map