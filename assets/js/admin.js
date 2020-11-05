(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App'\n});\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/RawHtml.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/RawHtml.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_code_highlight_themes_duotone_sea_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-code-highlight/themes/duotone-sea.css */ \"./node_modules/vue-code-highlight/themes/duotone-sea.css\");\n/* harmony import */ var vue_code_highlight_themes_duotone_sea_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_code_highlight_themes_duotone_sea_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_code_highlight_themes_window_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-code-highlight/themes/window.css */ \"./node_modules/vue-code-highlight/themes/window.css\");\n/* harmony import */ var vue_code_highlight_themes_window_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_code_highlight_themes_window_css__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RawHtml',\n  props: ['content']\n});\n\n//# sourceURL=webpack:///./src/admin/components/RawHtml.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/SlidingPanel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/SlidingPanel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SlidingPanel'\n});\n\n//# sourceURL=webpack:///./src/admin/components/SlidingPanel.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/AbstractInput.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/AbstractInput.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  render(createElement) {\n    let childArray = [];\n\n    if (this.field.label) {\n      const label = createElement('label', {\n        attrs: {\n          for: this.field.label\n        },\n        // DOM properties\n        domProps: {\n          innerHTML: this.field.label\n        }\n      }, this.$slots.default);\n      childArray.push(label);\n    }\n\n    const input = createElement('input', {\n      attrs: this.field.attrs\n    }, this.$slots.default);\n    childArray.push(input);\n\n    if (this.field.description) {\n      const description = createElement('p', {\n        domProps: {\n          innerHTML: this.field.description\n        }\n      }, this.$slots.default);\n      childArray.push(description);\n    }\n\n    return createElement(this.field.wrapper, // tag name\n    childArray);\n  },\n\n  props: {\n    field: {\n      type: Object,\n      required: true\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/inputs/AbstractInput.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/BaseInput.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/BaseInput.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_components_inputs_Checkbox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/components/inputs/Checkbox.vue */ \"./src/admin/components/inputs/Checkbox.vue\");\n/* harmony import */ var admin_components_inputs_Textarea_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! admin/components/inputs/Textarea.vue */ \"./src/admin/components/inputs/Textarea.vue\");\n/* harmony import */ var admin_components_inputs_Input_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/components/inputs/Input.vue */ \"./src/admin/components/inputs/Input.vue\");\n/* harmony import */ var admin_components_inputs_Select_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/components/inputs/Select.vue */ \"./src/admin/components/inputs/Select.vue\");\n/* harmony import */ var admin_components_inputs_AbstractInput_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/components/inputs/AbstractInput.vue */ \"./src/admin/components/inputs/AbstractInput.vue\");\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'BaseInput',\n  props: ['field'],\n  components: {\n    Textarea: admin_components_inputs_Textarea_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Input: admin_components_inputs_Input_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Checkbox: admin_components_inputs_Checkbox_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    Select: admin_components_inputs_Select_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    AbstractInput: admin_components_inputs_AbstractInput_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/inputs/BaseInput.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Checkbox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Checkbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_defaultOpts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/defaultOpts.js */ \"./src/admin/utils/defaultOpts.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Checkbox',\n  props: ['field'],\n\n  created() {\n    if (!this.field.options.length) {\n      this.field.options = [{\n        label: \"Apple\",\n        value: 'apple',\n        is_required: false,\n        id: 1\n      }, {\n        label: \"Coconut\",\n        value: 'coconut',\n        is_required: false,\n        id: 2\n      }, {\n        label: \"Pineapple\",\n        value: 'pineapple',\n        is_required: false,\n        id: 3\n      }];\n    }\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Checkbox.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Input.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Input.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Input',\n  props: ['field']\n});\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Input.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Select.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Select.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_defaultOpts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/defaultOpts.js */ \"./src/admin/utils/defaultOpts.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Select',\n  props: ['field'],\n\n  created() {\n    /*if( !this.field.options.length ){\r\n    \tconsole.log('no options')\r\n    \tthis.field.options = [\r\n           { label: \"Apple\", value: 'apple', is_required: false, id: 1 },\r\n           { label: \"Coconut\", value: 'coconut', is_required: false, id: 2 },\r\n           { label: \"Pineapple\", value: 'pineapple', is_required: false, id: 3 },\r\n    \t]\r\n    }*/\n  }\n\n});\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Select.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Textarea.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Textarea.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Textarea',\n  props: ['field']\n});\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Textarea.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Base.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'BaseSettings',\n  props: {\n    value: {\n      type: Object,\n      required: true\n    }\n  },\n\n  data() {\n    return {};\n  },\n\n  methods: {\n    updateValue(item) {\n      console.log(this.value.label, key, value);\n      this.$store.dispatch('editField', {\n        item,\n        message\n      }); //EventBus.$emit(\"input\", { ...this.value, [key]: value });\n      //this.$emit(\"input\", { ...this.value, [key]: value });\n    }\n\n  },\n  components: {}\n});\n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Display.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Display.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DisplaySettings',\n  props: ['input'],\n\n  data() {\n    return {};\n  },\n\n  methods: {},\n  components: {}\n});\n\n//# sourceURL=webpack:///./src/admin/components/options/Display.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Options.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Options.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ \"./node_modules/vuedraggable/dist/vuedraggable.umd.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nlet idGlobal = 7;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'OptionsSettings',\n  props: ['input'],\n\n  data() {\n    return {\n      drag: false,\n      localOpts: []\n    };\n  },\n\n  methods: {\n    addElement() {\n      idGlobal = idGlobal + 1;\n      let option = {\n        label: \"\",\n        value: \"\",\n        id: idGlobal + 1,\n        is_required: false\n      }; //this.input.options.push(option)\n\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"EventBus\"].$emit('addedOptions', option);\n    },\n\n    deleteElement(option) {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"EventBus\"].$emit('deletedOptions', option);\n    }\n\n  },\n  computed: {\n    dragOptions() {\n      return {\n        animation: 200,\n        group: \"description\",\n        disabled: false,\n        ghostClass: \"ghost\"\n      };\n    }\n\n  },\n  components: {\n    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_1___default())\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/options/Options.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Panel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Panel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n/* harmony import */ var _Base_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.vue */ \"./src/admin/components/options/Base.vue\");\n/* harmony import */ var _Range_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Range.vue */ \"./src/admin/components/options/Range.vue\");\n/* harmony import */ var _Options_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Options.vue */ \"./src/admin/components/options/Options.vue\");\n/* harmony import */ var _Display_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Display.vue */ \"./src/admin/components/options/Display.vue\");\n/* harmony import */ var _Style_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style.vue */ \"./src/admin/components/options/Style.vue\");\n/* harmony import */ var admin_utils_defaultOpts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/utils/defaultOpts.js */ \"./src/admin/utils/defaultOpts.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Panel',\n\n  data() {\n    return {\n      field: {\n        wrapper: 'div',\n        attrs: {\n          name: '',\n          placeholder: ''\n        },\n        class: {},\n        options: {},\n        settings: {\n          base: false,\n          display: true,\n          options: false,\n          range: false,\n          style: true,\n          disabledInput: []\n        }\n      }\n    };\n  },\n\n  methods: {\n    deleteOpts(opt) {\n      this.field.options.splice(opt, 1);\n    },\n\n    save() {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$emit('saveField', this.field);\n    }\n\n  },\n\n  created() {\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$on('togglePanel', data => {\n      this.field = this.$store.getters.active(data.id); //this.field = data;\n      //this.field = Object.assign({}, this.field, data);\n      //Object.assign({}, this.field, data);\n\n      console.log(\"toggled\");\n    });\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$on('addedOptions', opt => {\n      this.field.options.push(opt);\n    });\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$on('deletedOptions', opt => {\n      this.field.options.splice(opt, 1);\n    });\n  },\n\n  components: {\n    DisplaySettings: _Display_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    OptionsSettings: _Options_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    StyleSettings: _Style_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    BaseSettings: _Base_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    RangeSettings: _Range_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/options/Panel.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Range.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Range.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'BaseSettings',\n  props: ['input'],\n\n  data() {\n    return {};\n  },\n\n  methods: {},\n  components: {}\n});\n\n//# sourceURL=webpack:///./src/admin/components/options/Range.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Style.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Style.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'StyleSettings',\n  props: ['input'],\n\n  data() {\n    return {};\n  },\n\n  methods: {},\n  components: {}\n});\n\n//# sourceURL=webpack:///./src/admin/components/options/Style.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Buttons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Buttons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ \"./node_modules/vuedraggable/dist/vuedraggable.umd.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'buttons',\n\n  data() {\n    return {\n      elm: ['ubi', 'toti', 'cico']\n    };\n  },\n\n  methods: {\n    dropItem(event, oev) {\n      console.log(event);\n      console.log(oev);\n    }\n\n  },\n  components: {\n    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/tests/Buttons.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Form.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Form.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ \"./node_modules/vuedraggable/dist/vuedraggable.umd.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'form-area',\n\n  data() {\n    return {\n      inputs: []\n    };\n  },\n\n  components: {\n    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())\n  },\n  methods: {\n    dropItem(i) {\n      console.log(i);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/tests/Form.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Page.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Page.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Buttons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons.vue */ \"./src/admin/components/tests/Buttons.vue\");\n/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue */ \"./src/admin/components/tests/Form.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'comments-list',\n\n  data() {\n    return {\n      items: []\n    };\n  },\n\n  components: {\n    Buttons: _Buttons_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    FormArea: _Form_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/tests/Page.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/FormArea.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/ui/FormArea.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuikit/lib/offcanvas */ \"./node_modules/vuikit/lib/offcanvas.js\");\n/* harmony import */ var vuikit_lib_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuikit/lib/label */ \"./node_modules/vuikit/lib/label.js\");\n/* harmony import */ var vuikit_lib_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuikit/lib/grid */ \"./node_modules/vuikit/lib/grid.js\");\n/* harmony import */ var vuikit_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuikit/lib/card */ \"./node_modules/vuikit/lib/card.js\");\n/* harmony import */ var vuikit_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuikit/lib/button */ \"./node_modules/vuikit/lib/button.js\");\n/* harmony import */ var admin_utils_fieldsDefinitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/utils/fieldsDefinitions.js */ \"./src/admin/utils/fieldsDefinitions.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuedraggable */ \"./node_modules/vuedraggable/dist/vuedraggable.umd.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n/* harmony import */ var admin_components_inputs_BaseInput_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! admin/components/inputs/BaseInput.vue */ \"./src/admin/components/inputs/BaseInput.vue\");\n/* harmony import */ var admin_components_ui_Preview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! admin/components/ui/Preview.vue */ \"./src/admin/components/ui/Preview.vue\");\n/* harmony import */ var admin_store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! admin/store.js */ \"./src/admin/store.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'FormArea',\n\n  data() {\n    return {\n      inputs: admin_utils_fieldsDefinitions_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      show: false,\n      rawHtml: '' //fields: this.$store.state.fields\n\n    };\n  },\n\n  methods: {\n    togglePanel(field) {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_7__[\"EventBus\"].$emit('togglePanel', field);\n      this.$store.commit(\"active\", field);\n    },\n\n    cloneDog(field) {\n      return { ...field,\n        id: this.idGlobal + 1\n      };\n    },\n\n    deleteElm(field) {\n      this.$store.commit(\"deleteField\", field); //this.form.splice(field, 1);\n\n      this.show = false;\n    },\n\n    onPrint() {\n      //console.log(this.$refs.formello.$el)\n      //console.log(document.getElementById('result'))\n      this.$nextTick(() => {\n        //let html = ''\n        //this.$refs.formello.forEach( (element, index) => {\n        //  html += element.firstChild.outerHTML\n        //})\n        //this.rawHtml = html.toString()\n        //this.rawHtml = document.getElementById('result').outerHTML\n        this.rawHtml = document.getElementById('result');\n      });\n    }\n\n  },\n\n  created() {\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_7__[\"EventBus\"].$on('input', data => {\n      console.log('data', data);\n    });\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_7__[\"EventBus\"].$on('showHtml', data => {\n      //console.log(document.getElementById('result'))\n      this.$nextTick(() => {\n        let html = '';\n        this.$refs.formello.forEach((element, index) => {\n          html += element.firstChild.outerHTML;\n        }); //this.rawHtml = html.toString()\n        //this.rawHtml = html\n\n        html = document.getElementById('result').childNodes;\n        let res = '';\n        html.forEach(element => {\n          console.log(element.getElementsByClassName('formello-field')[0].innerHTML);\n          res += element.getElementsByClassName('formello-field')[0].innerHTML;\n          res += '\\n';\n        });\n        this.rawHtml = res;\n      });\n    });\n  },\n\n  computed: {\n    idGlobal() {\n      return this.$store.state.fields.length;\n    },\n\n    fields: {\n      get() {\n        return this.$store.state.fields;\n      },\n\n      set(value) {\n        this.$store.dispatch(\"updateFields\", value);\n      }\n\n    }\n  },\n  components: {\n    VkLabel: vuikit_lib_label__WEBPACK_IMPORTED_MODULE_1__[\"Label\"],\n    VkGrid: vuikit_lib_grid__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"],\n    VkOffcanvas: vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__[\"Offcanvas\"],\n    VkOffcanvasClose: vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__[\"OffcanvasClose\"],\n    VkOffcanvasContent: vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__[\"OffcanvasContent\"],\n    VkCard: vuikit_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"Card\"],\n    VkButton: vuikit_lib_button__WEBPACK_IMPORTED_MODULE_4__[\"Button\"],\n    VkButtonLink: vuikit_lib_button__WEBPACK_IMPORTED_MODULE_4__[\"ButtonLink\"],\n    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_6___default()),\n    BaseInput: admin_components_inputs_BaseInput_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    Preview: admin_components_ui_Preview_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/ui/FormArea.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/Preview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/ui/Preview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuikit_lib_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuikit/lib/tabs */ \"./node_modules/vuikit/lib/tabs.js\");\n/* harmony import */ var vue_code_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-code-highlight */ \"./node_modules/vue-code-highlight/dist/vue-code-highlight.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Preview',\n  props: ['rawHtml'],\n  components: {\n    VueCodeHighlight: vue_code_highlight__WEBPACK_IMPORTED_MODULE_1__[\"component\"],\n    VkTabs: vuikit_lib_tabs__WEBPACK_IMPORTED_MODULE_0__[\"Tabs\"],\n    VkTabsItem: vuikit_lib_tabs__WEBPACK_IMPORTED_MODULE_0__[\"TabsItem\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/components/ui/Preview.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Forms.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Forms.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuikit/lib/offcanvas */ \"./node_modules/vuikit/lib/offcanvas.js\");\n/* harmony import */ var vuikit_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuikit/lib/tabs */ \"./node_modules/vuikit/lib/tabs.js\");\n/* harmony import */ var admin_utils_fieldsDefinitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/utils/fieldsDefinitions.js */ \"./src/admin/utils/fieldsDefinitions.js\");\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n/* harmony import */ var admin_components_ui_FormArea_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/components/ui/FormArea.vue */ \"./src/admin/components/ui/FormArea.vue\");\n/* harmony import */ var admin_components_options_Panel_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/components/options/Panel.vue */ \"./src/admin/components/options/Panel.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n //import { Label } from 'vuikit/lib/label'\n//import { Grid } from 'vuikit/lib/grid'\n//import { Card } from 'vuikit/lib/card'\n//import { Button, ButtonLink } from 'vuikit/lib/button'\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Settings',\n\n  data() {\n    return {\n      //inputs: fieldDefs,\n      show: false\n    };\n  },\n\n  methods: {\n    togglePanel(input) {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_3__[\"EventBus\"].$emit('togglePanel', input);\n      this.show = true;\n    },\n\n    print() {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_3__[\"EventBus\"].$emit('showHtml');\n    }\n\n  },\n\n  created() {\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_3__[\"EventBus\"].$on('togglePanel', data => {\n      this.show = true;\n    });\n    this.$on('hidden', data => {\n      console.log(\"data\");\n    });\n    this.$on('hidden', data => {\n      console.log(\"data\");\n    });\n  },\n\n  components: {\n    //VkLabel: Label,\n    //VkGrid: Grid,\n    VkOffcanvas: vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__[\"Offcanvas\"],\n    VkOffcanvasClose: vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__[\"OffcanvasClose\"],\n    VkOffcanvasContent: vuikit_lib_offcanvas__WEBPACK_IMPORTED_MODULE_0__[\"OffcanvasContent\"],\n    //VkCard: Card,\n    //VkButton: Button,\n    //VkButtonLink: ButtonLink,\n    FormArea: admin_components_ui_FormArea_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    VkTabs: vuikit_lib_tabs__WEBPACK_IMPORTED_MODULE_1__[\"Tabs\"],\n    VkTabsItem: vuikit_lib_tabs__WEBPACK_IMPORTED_MODULE_1__[\"TabsItem\"],\n    Panel: admin_components_options_Panel_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/pages/Forms.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n/* harmony import */ var admin_utils_fieldsDefinitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! admin/utils/fieldsDefinitions.js */ \"./src/admin/utils/fieldsDefinitions.js\");\n/* harmony import */ var admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/pages/Settings.vue */ \"./src/admin/pages/Settings.vue\");\n/* harmony import */ var admin_components_SlidingPanel_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/components/SlidingPanel.vue */ \"./src/admin/components/SlidingPanel.vue\");\n/* harmony import */ var admin_components_options_Panel_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/components/options/Panel.vue */ \"./src/admin/components/options/Panel.vue\");\n/* harmony import */ var admin_components_inputs_BaseInput_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! admin/components/inputs/BaseInput.vue */ \"./src/admin/components/inputs/BaseInput.vue\");\n/* harmony import */ var admin_components_RawHtml_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! admin/components/RawHtml.vue */ \"./src/admin/components/RawHtml.vue\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuedraggable */ \"./node_modules/vuedraggable/dist/vuedraggable.umd.js\");\n/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_7__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Home',\n\n  data() {\n    return {\n      showPanel: false,\n      msg: 'Welcome to Your Vue.js Admin App',\n      inputs: admin_utils_fieldsDefinitions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      form: [],\n      drag: false,\n      rawHtml: ''\n    };\n  },\n\n  methods: {\n    cloneDog(field) {\n      return { ...field,\n        id: this.idGlobal + 1\n      };\n    },\n\n    deleteElm(field) {\n      this.form.splice(field, 1);\n      this.showPanel = false;\n    },\n\n    onUpdate() {//here you have access to the update list via this.list...\n      //console.log('updated', this.form[0]);\n    },\n\n    onPrint() {\n      //console.log(this.$refs.formello.$el)\n      //console.log(document.getElementById('result'))\n      this.$nextTick(() => {\n        let html = '';\n        this.$refs.formello.forEach((element, index) => {\n          html += element.firstChild.outerHTML;\n        }); //this.rawHtml = html.toString()\n\n        this.rawHtml = document.getElementById('result').outerHTML;\n      });\n    },\n\n    togglePanel(input) {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$emit('togglePanel', input);\n      this.showPanel = true;\n    }\n\n  },\n\n  created() {\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$on('saveField', data => {\n      this.showPanel = false;\n    });\n  },\n\n  computed: {\n    idGlobal() {\n      return this.form.length;\n    }\n\n  },\n  components: {\n    Settings: admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    BaseInput: admin_components_inputs_BaseInput_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    SlidingPanel: admin_components_SlidingPanel_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    Panel: admin_components_options_Panel_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_7___default()),\n    RawHtml: admin_components_RawHtml_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! admin/utils/eventBus.js */ \"./src/admin/utils/eventBus.js\");\n/* harmony import */ var admin_components_tests_Page_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! admin/components/tests/Page.vue */ \"./src/admin/components/tests/Page.vue\");\n/* harmony import */ var admin_components_options_Panel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/components/options/Panel.vue */ \"./src/admin/components/options/Panel.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Settings',\n\n  data() {\n    return {\n      show: false,\n      form: [],\n      g: ''\n    };\n  },\n\n  methods: {\n    togglePanel(input) {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$emit('togglePanel', input);\n      this.show = true;\n    },\n\n    print() {\n      admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$emit('showHtml');\n    }\n\n  },\n\n  created() {\n    admin_utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"EventBus\"].$on('togglePanel', data => {\n      this.show = true;\n    });\n    this.$on('hidden', data => {\n      console.log(\"data\");\n    });\n  },\n\n  components: {\n    Page: admin_components_tests_Page_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".formello label {\\n  display: block;\\n  margin-bottom: 0.6em;\\n  font-weight: bold;\\n}\\n.formello .form-group {\\n  margin-bottom: 1em;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/SlidingPanel.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/SlidingPanel.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/components/SlidingPanel.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Options.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Options.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/components/options/Options.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Buttons.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Buttons.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/components/tests/Buttons.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Form.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Form.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/components/tests/Form.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/FormArea.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/ui/FormArea.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/components/ui/FormArea.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Forms.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Forms.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/pages/Forms.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Settings.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=template&id=3a030f38&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/App.vue?vue&type=template&id=3a030f38& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"vue-backend-app\" } },\n    [_c(\"h1\", [_vm._v(\"Backend App\")]), _vm._v(\" \"), _c(\"router-view\")],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/RawHtml.vue?vue&type=template&id=2eea3273&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/RawHtml.vue?vue&type=template&id=2eea3273& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"h2\", [_vm._v(\"vue-code-highlight example\")]),\n    _vm._v(\" \"),\n    _c(\"div\", [\n      _c(\"pre\", { staticClass: \"language-markup\" }, [\n        _vm._v(\"        \"),\n        _c(\"code\", [_vm._v(_vm._s(_vm.content))]),\n        _vm._v(\"\\n    \")\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/RawHtml.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/SlidingPanel.vue?vue&type=template&id=5e43eba6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/SlidingPanel.vue?vue&type=template&id=5e43eba6& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: \"slide\" } }, [\n    _c(\"div\", { staticClass: \"panel\" }, [_vm._t(\"content\")], 2)\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/SlidingPanel.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/BaseInput.vue?vue&type=template&id=19c72343&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/BaseInput.vue?vue&type=template&id=19c72343& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"formello-field\" },\n    [\n      _c(_vm.field.component, { tag: \"component\", attrs: { field: _vm.field } })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/BaseInput.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Checkbox.vue?vue&type=template&id=7a535ce9&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Checkbox.vue?vue&type=template&id=7a535ce9& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"label\", [_vm._v(_vm._s(_vm.field.label))]),\n      _vm._v(\" \"),\n      _vm._l(_vm.field.options, function(o, index) {\n        return _c(\"div\", [\n          _c(\"label\", [\n            _c(\"input\", {\n              staticClass: \"regular-text\",\n              attrs: { type: _vm.field.type, name: o.name }\n            }),\n            _vm._v(\n              \"\\n\\t\\t\\t\" + _vm._s(o.label ? o.label : o.prettyName) + \"\\n\\t\\t\"\n            )\n          ])\n        ])\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Checkbox.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Input.vue?vue&type=template&id=036b9814&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Input.vue?vue&type=template&id=036b9814& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _vm.field.label && _vm.field.type != \"hidden\" && _vm.field.type != \"submit\"\n      ? _c(\n          \"label\",\n          { class: _vm.field.class.label, attrs: { for: _vm.field.name } },\n          [_vm._v(_vm._s(_vm.field.label))]\n        )\n      : _vm._e(),\n    _vm._v(\" \"),\n    _c(\n      \"input\",\n      _vm._b({ class: _vm.field.class.input }, \"input\", _vm.field.attrs, false)\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"p\",\n      { staticClass: \"description\", class: _vm.field.class.description },\n      [_vm._v(_vm._s(_vm.field.description))]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Input.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Select.vue?vue&type=template&id=916645bc&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Select.vue?vue&type=template&id=916645bc& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"label\", [_vm._v(_vm._s(_vm.field.label))]),\n    _vm._v(\" \"),\n    _c(\n      \"select\",\n      {\n        staticClass: \"regular-text\",\n        attrs: { name: _vm.field.name, multiple: _vm.field.multiple }\n      },\n      _vm._l(_vm.field.options, function(o, index) {\n        return _c(\"option\", [_vm._v(_vm._s(o.label))])\n      }),\n      0\n    ),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"description\" }, [\n      _vm._v(_vm._s(_vm.field.description))\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Select.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Textarea.vue?vue&type=template&id=65b364e0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/inputs/Textarea.vue?vue&type=template&id=65b364e0& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"label\", [_vm._v(_vm._s(_vm.field.labels))]),\n    _vm._v(\" \"),\n    _c(\"textarea\", {\n      staticClass: \"regular-text\",\n      attrs: { name: _vm.field.name }\n    }),\n    _vm._v(\" \"),\n    _c(\"p\", { staticClass: \"description\" }, [\n      _vm._v(_vm._s(_vm.field.description))\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Textarea.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=template&id=271144d2&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Base.vue?vue&type=template&id=271144d2& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"formello\" }, [\n    _vm._v(_vm._s(_vm.value) + \"\\n  \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Label\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        staticClass: \"regular-text\",\n        attrs: { type: \"text\", name: \"label\" },\n        domProps: { value: _vm.value.label },\n        on: {\n          input: function($event) {\n            return _vm.updateValue($event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [_vm._v(\"The label\")])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Required\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        attrs: { type: \"checkbox\", name: \"label\" },\n        domProps: { value: _vm.value.attrs.required },\n        on: {\n          input: function($event) {\n            return _vm.updateValue($event.target.value)\n          }\n        }\n      })\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.value.attrs.required,\n            expression: \"value.attrs.required\"\n          }\n        ],\n        staticClass: \"form-group\"\n      },\n      [\n        _c(\"label\", [_vm._v(\"Required Message\")]),\n        _vm._v(\" \"),\n        _c(\"input\", {\n          staticClass: \"regular-text\",\n          attrs: { type: \"text\", name: \"label\" },\n          domProps: { value: _vm.value.message }\n        }),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"description\" }, [\n          _vm._v(\"The required message\")\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Default Value\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        staticClass: \"regular-text\",\n        attrs: { type: \"text\" },\n        domProps: { value: _vm.value.attrs.value }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [\n        _vm._v(\"The default value for your input\")\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Display.vue?vue&type=template&id=416749d1&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Display.vue?vue&type=template&id=416749d1& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"fieldset\", [\n    _c(\"legend\", [_vm._v(\"Display settings:\")]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: !_vm.input.settings.disabledInput.includes(\"placeholder\"),\n            expression: \"!input.settings.disabledInput.includes('placeholder')\"\n          }\n        ],\n        staticClass: \"form-group\"\n      },\n      [\n        _c(\"label\", [_vm._v(\"Placeholder\")]),\n        _vm._v(\" \"),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.input.attrs.placeholder,\n              expression: \"input.attrs.placeholder\"\n            }\n          ],\n          staticClass: \"regular-text\",\n          attrs: { type: \"text\" },\n          domProps: { value: _vm.input.attrs.placeholder },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.$set(_vm.input.attrs, \"placeholder\", $event.target.value)\n            }\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"description\" }, [\n          _vm._v(\"The placeholder inside your input\")\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: !_vm.input.settings.disabledInput.includes(\"message\"),\n            expression: \"!input.settings.disabledInput.includes('message')\"\n          }\n        ],\n        staticClass: \"form-group\"\n      },\n      [\n        _c(\"label\", [_vm._v(\"Help message\")]),\n        _vm._v(\" \"),\n        _c(\"textarea\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.input.description,\n              expression: \"input.description\"\n            }\n          ],\n          staticClass: \"regular-text\",\n          attrs: { name: \"description\", rows: \"5\" },\n          domProps: { value: _vm.input.description },\n          on: {\n            input: function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.$set(_vm.input, \"description\", $event.target.value)\n            }\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"description\" }, [\n          _vm._v(\"A description for your input\")\n        ])\n      ]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Display.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Options.vue?vue&type=template&id=72332ca6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Options.vue?vue&type=template&id=72332ca6& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"fieldset\",\n    [\n      _c(\"legend\", [_vm._v(\"Options:\")]),\n      _vm._v(_vm._s(_vm.input.options) + \"\\n  \"),\n      _c(\n        \"draggable\",\n        _vm._b(\n          {\n            on: {\n              start: function($event) {\n                _vm.drag = true\n              },\n              end: function($event) {\n                _vm.drag = false\n              }\n            }\n          },\n          \"draggable\",\n          _vm.dragOptions,\n          false\n        ),\n        [\n          _c(\n            \"transition-group\",\n            {\n              attrs: {\n                type: \"transition\",\n                name: !_vm.drag ? \"flip-list\" : null\n              }\n            },\n            _vm._l(_vm.input.options, function(o, index) {\n              return _c(\"div\", { key: o.id, staticClass: \"options-list\" }, [\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: o.value,\n                      expression: \"o.value\"\n                    }\n                  ],\n                  attrs: { type: \"text\", name: \"key\" },\n                  domProps: { value: o.value },\n                  on: {\n                    input: function($event) {\n                      if ($event.target.composing) {\n                        return\n                      }\n                      _vm.$set(o, \"value\", $event.target.value)\n                    }\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: o.label,\n                      expression: \"o.label\"\n                    }\n                  ],\n                  attrs: { type: \"text\", name: \"value\" },\n                  domProps: { value: o.label },\n                  on: {\n                    input: function($event) {\n                      if ($event.target.composing) {\n                        return\n                      }\n                      _vm.$set(o, \"label\", $event.target.value)\n                    }\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"input\", {\n                  directives: [\n                    {\n                      name: \"model\",\n                      rawName: \"v-model\",\n                      value: o.isChecked,\n                      expression: \"o.isChecked\"\n                    }\n                  ],\n                  attrs: { type: \"checkbox\", name: \"is_checked\" },\n                  domProps: {\n                    checked: Array.isArray(o.isChecked)\n                      ? _vm._i(o.isChecked, null) > -1\n                      : o.isChecked\n                  },\n                  on: {\n                    change: function($event) {\n                      var $$a = o.isChecked,\n                        $$el = $event.target,\n                        $$c = $$el.checked ? true : false\n                      if (Array.isArray($$a)) {\n                        var $$v = null,\n                          $$i = _vm._i($$a, $$v)\n                        if ($$el.checked) {\n                          $$i < 0 && _vm.$set(o, \"isChecked\", $$a.concat([$$v]))\n                        } else {\n                          $$i > -1 &&\n                            _vm.$set(\n                              o,\n                              \"isChecked\",\n                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))\n                            )\n                        }\n                      } else {\n                        _vm.$set(o, \"isChecked\", $$c)\n                      }\n                    }\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\n                  \"button\",\n                  {\n                    staticClass: \"button\",\n                    on: {\n                      click: function($event) {\n                        return _vm.deleteElement(index)\n                      }\n                    }\n                  },\n                  [_vm._v(\"delete\")]\n                )\n              ])\n            }),\n            0\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          staticClass: \"button button-primary\",\n          on: {\n            click: function($event) {\n              return _vm.addElement()\n            }\n          }\n        },\n        [_vm._v(\"Add\")]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Options.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Panel.vue?vue&type=template&id=5cc1885a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Panel.vue?vue&type=template&id=5cc1885a& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._v(\"\\n  Panel \" + _vm._s(_vm.field) + \"\\n  \"),\n      _c(\"base-settings\", {\n        model: {\n          value: _vm.field,\n          callback: function($$v) {\n            _vm.field = $$v\n          },\n          expression: \"field\"\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Panel.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Range.vue?vue&type=template&id=05a1b2e8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Range.vue?vue&type=template&id=05a1b2e8& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"formello\" }, [\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Min\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.input.attrs.min,\n            expression: \"input.attrs.min\"\n          }\n        ],\n        staticClass: \"regular-text\",\n        attrs: { type: \"text\" },\n        domProps: { value: _vm.input.attrs.min },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.input.attrs, \"min\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [_vm._v(\"The min value\")])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Max\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.input.attrs.max,\n            expression: \"input.attrs.max\"\n          }\n        ],\n        staticClass: \"regular-text\",\n        attrs: { type: \"text\" },\n        domProps: { value: _vm.input.attrs.max },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.input.attrs, \"max\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [_vm._v(\"The max value\")])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Step\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.input.attrs.step,\n            expression: \"input.attrs.step\"\n          }\n        ],\n        staticClass: \"regular-text\",\n        attrs: { type: \"text\" },\n        domProps: { value: _vm.input.attrs.step },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.input.attrs, \"step\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [\n        _vm._v(\"The incremental minimum step.\")\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Range.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Style.vue?vue&type=template&id=d4d29e00&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Style.vue?vue&type=template&id=d4d29e00& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"fieldset\", [\n    _c(\"legend\", [_vm._v(\"Style settings:\")]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Label class\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.input.class.label,\n            expression: \"input.class.label\"\n          }\n        ],\n        staticClass: \"regular-text\",\n        attrs: { type: \"text\" },\n        domProps: { value: _vm.input.class.label },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.input.class, \"label\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [\n        _vm._v(\"The placeholder inside your input\")\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Input class\")]),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.input.class.input,\n            expression: \"input.class.input\"\n          }\n        ],\n        staticClass: \"regular-text\",\n        attrs: { type: \"text\" },\n        domProps: { value: _vm.input.class.input },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.input.class, \"input\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [\n        _vm._v(\"The default value for your input\")\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"form-group\" }, [\n      _c(\"label\", [_vm._v(\"Description class\")]),\n      _vm._v(\" \"),\n      _c(\"textarea\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.input.class.description,\n            expression: \"input.class.description\"\n          }\n        ],\n        staticClass: \"regular-text\",\n        attrs: { name: \"description\", rows: \"5\" },\n        domProps: { value: _vm.input.class.description },\n        on: {\n          input: function($event) {\n            if ($event.target.composing) {\n              return\n            }\n            _vm.$set(_vm.input.class, \"description\", $event.target.value)\n          }\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\"p\", { staticClass: \"description\" }, [\n        _vm._v(\"A description for your input\")\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Style.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Buttons.vue?vue&type=template&id=03f5d613&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Buttons.vue?vue&type=template&id=03f5d613& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"draggable\",\n    {\n      staticClass: \"listgroup\",\n      attrs: { list: _vm.elm, sort: false },\n      on: {\n        dragover: function($event) {\n          $event.preventDefault()\n        },\n        drop: _vm.dropItem\n      }\n    },\n    _vm._l(_vm.elm, function(element, index) {\n      return _c(\"div\", { key: index }, [\n        _vm._v(\"\\n    succhia \" + _vm._s(element) + \"\\n  \")\n      ])\n    }),\n    0\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tests/Buttons.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Form.vue?vue&type=template&id=4ec2d9bc&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Form.vue?vue&type=template&id=4ec2d9bc& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"draggable\",\n    {\n      staticClass: \"dragArea\",\n      attrs: {\n        list: _vm.inputs,\n        sort: false,\n        group: { name: \"people\", pull: \"clone\", put: false }\n      },\n      on: { drop: _vm.dropItem }\n    },\n    _vm._l(_vm.inputs, function(element, index) {\n      return _c(\"div\", { key: index }, [\n        _vm._v(\"\\n    Stocazzo \" + _vm._s(element.label) + \"\\n  \")\n      ])\n    }),\n    0\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tests/Form.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Page.vue?vue&type=template&id=20c5e926&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/tests/Page.vue?vue&type=template&id=20c5e926& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [_c(\"buttons\"), _vm._v(\" \"), _c(\"form-area\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tests/Page.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/FormArea.vue?vue&type=template&id=471e6268&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/ui/FormArea.vue?vue&type=template&id=471e6268& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"vk-grid\", { staticClass: \"uk-child-width-expand@s\" }, [\n        _c(\n          \"div\",\n          [\n            _c(\n              \"vk-card\",\n              [\n                _c(\n                  \"draggable\",\n                  {\n                    attrs: {\n                      list: _vm.inputs,\n                      sort: false,\n                      group: { name: \"people\", pull: \"clone\", put: false },\n                      clone: _vm.cloneDog\n                    }\n                  },\n                  _vm._l(_vm.inputs, function(element, index) {\n                    return _c(\"vk-button\", { key: index }, [\n                      _vm._v(\n                        \"\\n            \" +\n                          _vm._s(element.label) +\n                          \" \" +\n                          _vm._s(element.required) +\n                          \"\\n          \"\n                      )\n                    ])\n                  }),\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"vk-grid\", { staticClass: \"uk-child-width-expand@s\" }, [\n        _c(\n          \"div\",\n          [\n            _c(\n              \"vk-card\",\n              [\n                _c(\n                  \"draggable\",\n                  {\n                    staticClass: \"dragArea list-group\",\n                    attrs: { group: \"people\", id: \"result\" },\n                    model: {\n                      value: _vm.fields,\n                      callback: function($$v) {\n                        _vm.fields = $$v\n                      },\n                      expression: \"fields\"\n                    }\n                  },\n                  _vm._l(_vm.fields, function(elm, index) {\n                    return _c(\n                      \"div\",\n                      {\n                        key: elm.id,\n                        ref: \"formello\",\n                        refInFor: true,\n                        staticClass: \"formello-wrapper\"\n                      },\n                      [\n                        _c(\"base-input\", { attrs: { field: elm } }),\n                        _vm._v(\n                          \"\\n          \" + _vm._s(elm.label) + \"\\n          \"\n                        ),\n                        elm.type == \"hidden\"\n                          ? _c(\"div\", { staticClass: \"hidden-field\" }, [\n                              _vm._v(\"HIDDEN FIELD\")\n                            ])\n                          : _vm._e(),\n                        _vm._v(\" \"),\n                        _c(\n                          \"span\",\n                          { staticClass: \"formello-tools\" },\n                          [\n                            _c(\"vk-icon-button\", {\n                              attrs: { icon: \"cog\", reset: \"true\" },\n                              on: {\n                                click: function($event) {\n                                  return _vm.togglePanel(elm)\n                                }\n                              }\n                            }),\n                            _vm._v(\" \"),\n                            _c(\"vk-icon-button\", {\n                              attrs: { icon: \"trash\" },\n                              on: {\n                                click: function($event) {\n                                  return _vm.deleteElm(index)\n                                }\n                              }\n                            })\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  }),\n                  0\n                )\n              ],\n              1\n            ),\n            _vm._v(\"\\n\" + _vm._s(_vm.fields) + \"\\n    \")\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          [\n            _c(\n              \"vk-card\",\n              [_c(\"preview\", { attrs: { rawHtml: _vm.rawHtml } })],\n              1\n            )\n          ],\n          1\n        )\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/ui/FormArea.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/Preview.vue?vue&type=template&id=1af35e86&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/ui/Preview.vue?vue&type=template&id=1af35e86& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"vk-tabs\",\n        [\n          _c(\"vk-tabs-item\", { attrs: { title: \"Preview\" } }, [\n            _c(\"iframe\", {\n              attrs: {\n                width: \"560\",\n                height: \"315\",\n                src: \"http://localhost/affiliateblog?hf_preview_form=926\",\n                frameborder: \"0\"\n              }\n            })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"vk-tabs-item\",\n            { attrs: { title: \"markup\" } },\n            [\n              _c(\"div\", [_vm._v(_vm._s(_vm.rawHtml))]),\n              _vm._v(\" \"),\n              _c(\"vue-code-highlight\", { attrs: { language: \"markup\" } }, [\n                _vm._v(\"\\n            \" + _vm._s(_vm.rawHtml) + \"\\n          \")\n              ])\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/components/ui/Preview.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Forms.vue?vue&type=template&id=5add32bb&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Forms.vue?vue&type=template&id=5add32bb& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"app-settings\" },\n    [\n      _c(\"button\", { on: { click: _vm.print } }, [_vm._v(\"cccc\")]),\n      _vm._v(\" \"),\n      _c(\n        \"vk-tabs\",\n        { attrs: { \"keep-alive\": \"\" } },\n        [\n          _c(\n            \"vk-tabs-item\",\n            { attrs: { title: \"form\" } },\n            [_c(\"form-area\")],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\"vk-tabs-item\", { attrs: { title: \"actions\" } }),\n          _vm._v(\" \"),\n          _c(\"vk-tabs-item\", { attrs: { title: \"advanced\", disabled: \"\" } })\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"vk-offcanvas-content\",\n        { staticClass: \"formello\" },\n        [\n          _c(\n            \"vk-offcanvas\",\n            {\n              staticClass: \"formello\",\n              attrs: { show: _vm.show, flipped: \"\", overlay: \"\", mode: \"push\" },\n              on: {\n                \"update:show\": function($event) {\n                  _vm.show = $event\n                }\n              }\n            },\n            [\n              _c(\"vk-offcanvas-close\", {\n                staticClass: \"close-button\",\n                on: {\n                  click: function($event) {\n                    _vm.show = false\n                  }\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"panel\")\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Forms.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"home\" },\n    [\n      _c(\n        \"h1\",\n        {\n          on: {\n            click: function($event) {\n              _vm.showPanel = !_vm.showPanel\n            }\n          }\n        },\n        [_vm._v(_vm._s(_vm.msg) + \" \" + _vm._s(_vm.showPanel))]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"h2\",\n        {\n          on: {\n            click: function($event) {\n              $event.preventDefault()\n              return _vm.onPrint()\n            }\n          }\n        },\n        [_vm._v(\"GET HTML\")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"sliding-panel\",\n        {\n          directives: [\n            {\n              name: \"show\",\n              rawName: \"v-show\",\n              value: _vm.showPanel,\n              expression: \"showPanel\"\n            }\n          ],\n          on: {\n            close: function($event) {\n              _vm.showPanel = false\n            }\n          }\n        },\n        [\n          _c(\n            \"div\",\n            { attrs: { slot: \"content\" }, slot: \"content\" },\n            [_c(\"panel\")],\n            1\n          )\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"toolbar\" },\n        [\n          _c(\n            \"draggable\",\n            {\n              staticClass: \"dragArea list-group\",\n              attrs: {\n                list: _vm.inputs,\n                sort: false,\n                group: { name: \"people\", pull: \"clone\", put: false },\n                clone: _vm.cloneDog\n              }\n            },\n            _vm._l(_vm.inputs, function(element, index) {\n              return _c(\n                \"div\",\n                { key: index, staticClass: \"list-group-item input-item\" },\n                [_vm._v(\"\\n        \" + _vm._s(element.label) + \"\\n      \")]\n              )\n            }),\n            0\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"forms\" },\n        [\n          _c(\n            \"draggable\",\n            {\n              staticClass: \"dragArea list-group\",\n              attrs: { list: _vm.form, group: \"people\", id: \"result\" },\n              on: { update: _vm.onUpdate }\n            },\n            _vm._l(_vm.form, function(elm, index) {\n              return _c(\n                \"div\",\n                {\n                  key: elm.id,\n                  ref: \"formello\",\n                  refInFor: true,\n                  staticClass: \"list-group-item formello\"\n                },\n                [\n                  _c(\"base-input\", { attrs: { field: elm } }),\n                  _vm._v(\" \"),\n                  _c(\"span\", { attrs: { id: \"tools\" } }, [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"button button-primary\",\n                        on: {\n                          click: function($event) {\n                            return _vm.togglePanel(elm)\n                          }\n                        }\n                      },\n                      [\n                        _c(\"span\", {\n                          staticClass: \"dashicons dashicons-admin-tools\"\n                        })\n                      ]\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"button button-primary\",\n                        on: {\n                          click: function($event) {\n                            return _vm.deleteElm(index)\n                          }\n                        }\n                      },\n                      [_c(\"span\", { staticClass: \"dashicons dashicons-trash\" })]\n                    )\n                  ])\n                ],\n                1\n              )\n            }),\n            0\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", [\n        _vm._v(_vm._s(_vm.form) + \" \"),\n        _c(\"h1\", [_vm._v(_vm._s(_vm.idGlobal))])\n      ]),\n      _vm._v(\" \"),\n      _c(\"raw-html\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.rawHtml,\n            expression: \"rawHtml\"\n          }\n        ],\n        attrs: { content: _vm.rawHtml }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"app-settings\" },\n    [\n      _c(\"button\", { on: { click: _vm.print } }, [_vm._v(\"cccc\")]),\n      _vm._v(\" \"),\n      _c(\"page\")\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=style&index=0&lang=less& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"22f60504\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/admin/App.vue":
/*!***************************!*\
  !*** ./src/admin/App.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3a030f38& */ \"./src/admin/App.vue?vue&type=template&id=3a030f38&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/admin/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/App.vue?");

/***/ }),

/***/ "./src/admin/App.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/admin/App.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/App.vue?");

/***/ }),

/***/ "./src/admin/App.vue?vue&type=template&id=3a030f38&":
/*!**********************************************************!*\
  !*** ./src/admin/App.vue?vue&type=template&id=3a030f38& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3a030f38& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/App.vue?vue&type=template&id=3a030f38&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3a030f38___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/App.vue?");

/***/ }),

/***/ "./src/admin/components/RawHtml.vue":
/*!******************************************!*\
  !*** ./src/admin/components/RawHtml.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RawHtml_vue_vue_type_template_id_2eea3273___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawHtml.vue?vue&type=template&id=2eea3273& */ \"./src/admin/components/RawHtml.vue?vue&type=template&id=2eea3273&\");\n/* harmony import */ var _RawHtml_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawHtml.vue?vue&type=script&lang=js& */ \"./src/admin/components/RawHtml.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _RawHtml_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _RawHtml_vue_vue_type_template_id_2eea3273___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _RawHtml_vue_vue_type_template_id_2eea3273___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/RawHtml.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/RawHtml.vue?");

/***/ }),

/***/ "./src/admin/components/RawHtml.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/admin/components/RawHtml.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RawHtml_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./RawHtml.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/RawHtml.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RawHtml_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/RawHtml.vue?");

/***/ }),

/***/ "./src/admin/components/RawHtml.vue?vue&type=template&id=2eea3273&":
/*!*************************************************************************!*\
  !*** ./src/admin/components/RawHtml.vue?vue&type=template&id=2eea3273& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RawHtml_vue_vue_type_template_id_2eea3273___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RawHtml.vue?vue&type=template&id=2eea3273& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/RawHtml.vue?vue&type=template&id=2eea3273&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RawHtml_vue_vue_type_template_id_2eea3273___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RawHtml_vue_vue_type_template_id_2eea3273___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/RawHtml.vue?");

/***/ }),

/***/ "./src/admin/components/SlidingPanel.vue":
/*!***********************************************!*\
  !*** ./src/admin/components/SlidingPanel.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SlidingPanel_vue_vue_type_template_id_5e43eba6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlidingPanel.vue?vue&type=template&id=5e43eba6& */ \"./src/admin/components/SlidingPanel.vue?vue&type=template&id=5e43eba6&\");\n/* harmony import */ var _SlidingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlidingPanel.vue?vue&type=script&lang=js& */ \"./src/admin/components/SlidingPanel.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SlidingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlidingPanel.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/components/SlidingPanel.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SlidingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SlidingPanel_vue_vue_type_template_id_5e43eba6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SlidingPanel_vue_vue_type_template_id_5e43eba6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/SlidingPanel.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/SlidingPanel.vue?");

/***/ }),

/***/ "./src/admin/components/SlidingPanel.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/admin/components/SlidingPanel.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./SlidingPanel.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/SlidingPanel.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/SlidingPanel.vue?");

/***/ }),

/***/ "./src/admin/components/SlidingPanel.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./src/admin/components/SlidingPanel.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./SlidingPanel.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/SlidingPanel.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/components/SlidingPanel.vue?");

/***/ }),

/***/ "./src/admin/components/SlidingPanel.vue?vue&type=template&id=5e43eba6&":
/*!******************************************************************************!*\
  !*** ./src/admin/components/SlidingPanel.vue?vue&type=template&id=5e43eba6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_template_id_5e43eba6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SlidingPanel.vue?vue&type=template&id=5e43eba6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/SlidingPanel.vue?vue&type=template&id=5e43eba6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_template_id_5e43eba6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlidingPanel_vue_vue_type_template_id_5e43eba6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/SlidingPanel.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/AbstractInput.vue":
/*!*******************************************************!*\
  !*** ./src/admin/components/inputs/AbstractInput.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbstractInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractInput.vue?vue&type=script&lang=js& */ \"./src/admin/components/inputs/AbstractInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _AbstractInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/inputs/AbstractInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/inputs/AbstractInput.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/AbstractInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/admin/components/inputs/AbstractInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbstractInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./AbstractInput.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/AbstractInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AbstractInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/inputs/AbstractInput.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/BaseInput.vue":
/*!***************************************************!*\
  !*** ./src/admin/components/inputs/BaseInput.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseInput_vue_vue_type_template_id_19c72343___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=template&id=19c72343& */ \"./src/admin/components/inputs/BaseInput.vue?vue&type=template&id=19c72343&\");\n/* harmony import */ var _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=script&lang=js& */ \"./src/admin/components/inputs/BaseInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _BaseInput_vue_vue_type_template_id_19c72343___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _BaseInput_vue_vue_type_template_id_19c72343___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/inputs/BaseInput.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/inputs/BaseInput.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/BaseInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/admin/components/inputs/BaseInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseInput.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/BaseInput.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/inputs/BaseInput.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/BaseInput.vue?vue&type=template&id=19c72343&":
/*!**********************************************************************************!*\
  !*** ./src/admin/components/inputs/BaseInput.vue?vue&type=template&id=19c72343& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_19c72343___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BaseInput.vue?vue&type=template&id=19c72343& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/BaseInput.vue?vue&type=template&id=19c72343&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_19c72343___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_19c72343___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/BaseInput.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Checkbox.vue":
/*!**************************************************!*\
  !*** ./src/admin/components/inputs/Checkbox.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Checkbox_vue_vue_type_template_id_7a535ce9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=7a535ce9& */ \"./src/admin/components/inputs/Checkbox.vue?vue&type=template&id=7a535ce9&\");\n/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js& */ \"./src/admin/components/inputs/Checkbox.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Checkbox_vue_vue_type_template_id_7a535ce9___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Checkbox_vue_vue_type_template_id_7a535ce9___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/inputs/Checkbox.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Checkbox.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Checkbox.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/admin/components/inputs/Checkbox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Checkbox.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/inputs/Checkbox.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Checkbox.vue?vue&type=template&id=7a535ce9&":
/*!*********************************************************************************!*\
  !*** ./src/admin/components/inputs/Checkbox.vue?vue&type=template&id=7a535ce9& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_7a535ce9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=template&id=7a535ce9& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Checkbox.vue?vue&type=template&id=7a535ce9&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_7a535ce9___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_7a535ce9___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Checkbox.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Input.vue":
/*!***********************************************!*\
  !*** ./src/admin/components/inputs/Input.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Input_vue_vue_type_template_id_036b9814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=036b9814& */ \"./src/admin/components/inputs/Input.vue?vue&type=template&id=036b9814&\");\n/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ \"./src/admin/components/inputs/Input.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Input_vue_vue_type_template_id_036b9814___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Input_vue_vue_type_template_id_036b9814___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/inputs/Input.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Input.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Input.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/admin/components/inputs/Input.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Input.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/inputs/Input.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Input.vue?vue&type=template&id=036b9814&":
/*!******************************************************************************!*\
  !*** ./src/admin/components/inputs/Input.vue?vue&type=template&id=036b9814& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_036b9814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=template&id=036b9814& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Input.vue?vue&type=template&id=036b9814&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_036b9814___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_036b9814___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Input.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Select.vue":
/*!************************************************!*\
  !*** ./src/admin/components/inputs/Select.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Select_vue_vue_type_template_id_916645bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=916645bc& */ \"./src/admin/components/inputs/Select.vue?vue&type=template&id=916645bc&\");\n/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ \"./src/admin/components/inputs/Select.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Select_vue_vue_type_template_id_916645bc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Select_vue_vue_type_template_id_916645bc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/inputs/Select.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Select.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Select.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/admin/components/inputs/Select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Select.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/inputs/Select.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Select.vue?vue&type=template&id=916645bc&":
/*!*******************************************************************************!*\
  !*** ./src/admin/components/inputs/Select.vue?vue&type=template&id=916645bc& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_916645bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=template&id=916645bc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Select.vue?vue&type=template&id=916645bc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_916645bc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_916645bc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Select.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Textarea.vue":
/*!**************************************************!*\
  !*** ./src/admin/components/inputs/Textarea.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Textarea_vue_vue_type_template_id_65b364e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textarea.vue?vue&type=template&id=65b364e0& */ \"./src/admin/components/inputs/Textarea.vue?vue&type=template&id=65b364e0&\");\n/* harmony import */ var _Textarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textarea.vue?vue&type=script&lang=js& */ \"./src/admin/components/inputs/Textarea.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Textarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Textarea_vue_vue_type_template_id_65b364e0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Textarea_vue_vue_type_template_id_65b364e0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/inputs/Textarea.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Textarea.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Textarea.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/admin/components/inputs/Textarea.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Textarea.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Textarea.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/inputs/Textarea.vue?");

/***/ }),

/***/ "./src/admin/components/inputs/Textarea.vue?vue&type=template&id=65b364e0&":
/*!*********************************************************************************!*\
  !*** ./src/admin/components/inputs/Textarea.vue?vue&type=template&id=65b364e0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_template_id_65b364e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Textarea.vue?vue&type=template&id=65b364e0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/inputs/Textarea.vue?vue&type=template&id=65b364e0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_template_id_65b364e0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Textarea_vue_vue_type_template_id_65b364e0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/inputs/Textarea.vue?");

/***/ }),

/***/ "./src/admin/components/options/Base.vue":
/*!***********************************************!*\
  !*** ./src/admin/components/options/Base.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Base_vue_vue_type_template_id_271144d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.vue?vue&type=template&id=271144d2& */ \"./src/admin/components/options/Base.vue?vue&type=template&id=271144d2&\");\n/* harmony import */ var _Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.vue?vue&type=script&lang=js& */ \"./src/admin/components/options/Base.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Base_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.vue?vue&type=style&index=0&lang=less& */ \"./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Base_vue_vue_type_template_id_271144d2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Base_vue_vue_type_template_id_271144d2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/options/Base.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?");

/***/ }),

/***/ "./src/admin/components/options/Base.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/admin/components/options/Base.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?");

/***/ }),

/***/ "./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************!*\
  !*** ./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=style&index=0&lang=less& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=style&index=0&lang=less&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?");

/***/ }),

/***/ "./src/admin/components/options/Base.vue?vue&type=template&id=271144d2&":
/*!******************************************************************************!*\
  !*** ./src/admin/components/options/Base.vue?vue&type=template&id=271144d2& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_template_id_271144d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Base.vue?vue&type=template&id=271144d2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Base.vue?vue&type=template&id=271144d2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_template_id_271144d2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_template_id_271144d2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Base.vue?");

/***/ }),

/***/ "./src/admin/components/options/Display.vue":
/*!**************************************************!*\
  !*** ./src/admin/components/options/Display.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Display_vue_vue_type_template_id_416749d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display.vue?vue&type=template&id=416749d1& */ \"./src/admin/components/options/Display.vue?vue&type=template&id=416749d1&\");\n/* harmony import */ var _Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display.vue?vue&type=script&lang=js& */ \"./src/admin/components/options/Display.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Display_vue_vue_type_template_id_416749d1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Display_vue_vue_type_template_id_416749d1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/options/Display.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/options/Display.vue?");

/***/ }),

/***/ "./src/admin/components/options/Display.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/admin/components/options/Display.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Display.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Display.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/options/Display.vue?");

/***/ }),

/***/ "./src/admin/components/options/Display.vue?vue&type=template&id=416749d1&":
/*!*********************************************************************************!*\
  !*** ./src/admin/components/options/Display.vue?vue&type=template&id=416749d1& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_416749d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Display.vue?vue&type=template&id=416749d1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Display.vue?vue&type=template&id=416749d1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_416749d1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_416749d1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Display.vue?");

/***/ }),

/***/ "./src/admin/components/options/Options.vue":
/*!**************************************************!*\
  !*** ./src/admin/components/options/Options.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Options_vue_vue_type_template_id_72332ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.vue?vue&type=template&id=72332ca6& */ \"./src/admin/components/options/Options.vue?vue&type=template&id=72332ca6&\");\n/* harmony import */ var _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.vue?vue&type=script&lang=js& */ \"./src/admin/components/options/Options.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Options_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/components/options/Options.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Options_vue_vue_type_template_id_72332ca6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Options_vue_vue_type_template_id_72332ca6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/options/Options.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/options/Options.vue?");

/***/ }),

/***/ "./src/admin/components/options/Options.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/admin/components/options/Options.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Options.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/options/Options.vue?");

/***/ }),

/***/ "./src/admin/components/options/Options.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./src/admin/components/options/Options.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Options.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/components/options/Options.vue?");

/***/ }),

/***/ "./src/admin/components/options/Options.vue?vue&type=template&id=72332ca6&":
/*!*********************************************************************************!*\
  !*** ./src/admin/components/options/Options.vue?vue&type=template&id=72332ca6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_72332ca6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=template&id=72332ca6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Options.vue?vue&type=template&id=72332ca6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_72332ca6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_72332ca6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Options.vue?");

/***/ }),

/***/ "./src/admin/components/options/Panel.vue":
/*!************************************************!*\
  !*** ./src/admin/components/options/Panel.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Panel_vue_vue_type_template_id_5cc1885a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel.vue?vue&type=template&id=5cc1885a& */ \"./src/admin/components/options/Panel.vue?vue&type=template&id=5cc1885a&\");\n/* harmony import */ var _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.vue?vue&type=script&lang=js& */ \"./src/admin/components/options/Panel.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Panel_vue_vue_type_template_id_5cc1885a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Panel_vue_vue_type_template_id_5cc1885a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/options/Panel.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/options/Panel.vue?");

/***/ }),

/***/ "./src/admin/components/options/Panel.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/admin/components/options/Panel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Panel.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/options/Panel.vue?");

/***/ }),

/***/ "./src/admin/components/options/Panel.vue?vue&type=template&id=5cc1885a&":
/*!*******************************************************************************!*\
  !*** ./src/admin/components/options/Panel.vue?vue&type=template&id=5cc1885a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5cc1885a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panel.vue?vue&type=template&id=5cc1885a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Panel.vue?vue&type=template&id=5cc1885a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5cc1885a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_5cc1885a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Panel.vue?");

/***/ }),

/***/ "./src/admin/components/options/Range.vue":
/*!************************************************!*\
  !*** ./src/admin/components/options/Range.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Range_vue_vue_type_template_id_05a1b2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Range.vue?vue&type=template&id=05a1b2e8& */ \"./src/admin/components/options/Range.vue?vue&type=template&id=05a1b2e8&\");\n/* harmony import */ var _Range_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Range.vue?vue&type=script&lang=js& */ \"./src/admin/components/options/Range.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Range_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Range_vue_vue_type_template_id_05a1b2e8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Range_vue_vue_type_template_id_05a1b2e8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/options/Range.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/options/Range.vue?");

/***/ }),

/***/ "./src/admin/components/options/Range.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/admin/components/options/Range.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Range_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Range.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Range.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Range_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/options/Range.vue?");

/***/ }),

/***/ "./src/admin/components/options/Range.vue?vue&type=template&id=05a1b2e8&":
/*!*******************************************************************************!*\
  !*** ./src/admin/components/options/Range.vue?vue&type=template&id=05a1b2e8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Range_vue_vue_type_template_id_05a1b2e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Range.vue?vue&type=template&id=05a1b2e8& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Range.vue?vue&type=template&id=05a1b2e8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Range_vue_vue_type_template_id_05a1b2e8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Range_vue_vue_type_template_id_05a1b2e8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Range.vue?");

/***/ }),

/***/ "./src/admin/components/options/Style.vue":
/*!************************************************!*\
  !*** ./src/admin/components/options/Style.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Style_vue_vue_type_template_id_d4d29e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style.vue?vue&type=template&id=d4d29e00& */ \"./src/admin/components/options/Style.vue?vue&type=template&id=d4d29e00&\");\n/* harmony import */ var _Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style.vue?vue&type=script&lang=js& */ \"./src/admin/components/options/Style.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Style_vue_vue_type_template_id_d4d29e00___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Style_vue_vue_type_template_id_d4d29e00___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/options/Style.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/options/Style.vue?");

/***/ }),

/***/ "./src/admin/components/options/Style.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/admin/components/options/Style.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Style.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Style.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/options/Style.vue?");

/***/ }),

/***/ "./src/admin/components/options/Style.vue?vue&type=template&id=d4d29e00&":
/*!*******************************************************************************!*\
  !*** ./src/admin/components/options/Style.vue?vue&type=template&id=d4d29e00& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_template_id_d4d29e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Style.vue?vue&type=template&id=d4d29e00& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/options/Style.vue?vue&type=template&id=d4d29e00&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_template_id_d4d29e00___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Style_vue_vue_type_template_id_d4d29e00___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/options/Style.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Buttons.vue":
/*!************************************************!*\
  !*** ./src/admin/components/tests/Buttons.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Buttons_vue_vue_type_template_id_03f5d613___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons.vue?vue&type=template&id=03f5d613& */ \"./src/admin/components/tests/Buttons.vue?vue&type=template&id=03f5d613&\");\n/* harmony import */ var _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons.vue?vue&type=script&lang=js& */ \"./src/admin/components/tests/Buttons.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Buttons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/components/tests/Buttons.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Buttons_vue_vue_type_template_id_03f5d613___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Buttons_vue_vue_type_template_id_03f5d613___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/tests/Buttons.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/tests/Buttons.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Buttons.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/admin/components/tests/Buttons.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Buttons.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Buttons.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/tests/Buttons.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Buttons.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./src/admin/components/tests/Buttons.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Buttons.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Buttons.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/components/tests/Buttons.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Buttons.vue?vue&type=template&id=03f5d613&":
/*!*******************************************************************************!*\
  !*** ./src/admin/components/tests/Buttons.vue?vue&type=template&id=03f5d613& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_03f5d613___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Buttons.vue?vue&type=template&id=03f5d613& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Buttons.vue?vue&type=template&id=03f5d613&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_03f5d613___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_03f5d613___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tests/Buttons.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Form.vue":
/*!*********************************************!*\
  !*** ./src/admin/components/tests/Form.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_vue_vue_type_template_id_4ec2d9bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=4ec2d9bc& */ \"./src/admin/components/tests/Form.vue?vue&type=template&id=4ec2d9bc&\");\n/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ \"./src/admin/components/tests/Form.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/components/tests/Form.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Form_vue_vue_type_template_id_4ec2d9bc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Form_vue_vue_type_template_id_4ec2d9bc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/tests/Form.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/tests/Form.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/admin/components/tests/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Form.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/tests/Form.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Form.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./src/admin/components/tests/Form.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Form.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/components/tests/Form.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Form.vue?vue&type=template&id=4ec2d9bc&":
/*!****************************************************************************!*\
  !*** ./src/admin/components/tests/Form.vue?vue&type=template&id=4ec2d9bc& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4ec2d9bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=4ec2d9bc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Form.vue?vue&type=template&id=4ec2d9bc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4ec2d9bc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_4ec2d9bc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tests/Form.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Page.vue":
/*!*********************************************!*\
  !*** ./src/admin/components/tests/Page.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Page_vue_vue_type_template_id_20c5e926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.vue?vue&type=template&id=20c5e926& */ \"./src/admin/components/tests/Page.vue?vue&type=template&id=20c5e926&\");\n/* harmony import */ var _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.vue?vue&type=script&lang=js& */ \"./src/admin/components/tests/Page.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Page_vue_vue_type_template_id_20c5e926___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Page_vue_vue_type_template_id_20c5e926___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/tests/Page.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/tests/Page.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Page.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/admin/components/tests/Page.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Page.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/tests/Page.vue?");

/***/ }),

/***/ "./src/admin/components/tests/Page.vue?vue&type=template&id=20c5e926&":
/*!****************************************************************************!*\
  !*** ./src/admin/components/tests/Page.vue?vue&type=template&id=20c5e926& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_20c5e926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page.vue?vue&type=template&id=20c5e926& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/tests/Page.vue?vue&type=template&id=20c5e926&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_20c5e926___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page_vue_vue_type_template_id_20c5e926___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/tests/Page.vue?");

/***/ }),

/***/ "./src/admin/components/ui/FormArea.vue":
/*!**********************************************!*\
  !*** ./src/admin/components/ui/FormArea.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FormArea_vue_vue_type_template_id_471e6268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormArea.vue?vue&type=template&id=471e6268& */ \"./src/admin/components/ui/FormArea.vue?vue&type=template&id=471e6268&\");\n/* harmony import */ var _FormArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormArea.vue?vue&type=script&lang=js& */ \"./src/admin/components/ui/FormArea.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _FormArea_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormArea.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/components/ui/FormArea.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _FormArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _FormArea_vue_vue_type_template_id_471e6268___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _FormArea_vue_vue_type_template_id_471e6268___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/ui/FormArea.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/ui/FormArea.vue?");

/***/ }),

/***/ "./src/admin/components/ui/FormArea.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/admin/components/ui/FormArea.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormArea.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/FormArea.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/ui/FormArea.vue?");

/***/ }),

/***/ "./src/admin/components/ui/FormArea.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./src/admin/components/ui/FormArea.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormArea.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/FormArea.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/components/ui/FormArea.vue?");

/***/ }),

/***/ "./src/admin/components/ui/FormArea.vue?vue&type=template&id=471e6268&":
/*!*****************************************************************************!*\
  !*** ./src/admin/components/ui/FormArea.vue?vue&type=template&id=471e6268& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_template_id_471e6268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormArea.vue?vue&type=template&id=471e6268& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/FormArea.vue?vue&type=template&id=471e6268&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_template_id_471e6268___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormArea_vue_vue_type_template_id_471e6268___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/ui/FormArea.vue?");

/***/ }),

/***/ "./src/admin/components/ui/Preview.vue":
/*!*********************************************!*\
  !*** ./src/admin/components/ui/Preview.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Preview_vue_vue_type_template_id_1af35e86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=1af35e86& */ \"./src/admin/components/ui/Preview.vue?vue&type=template&id=1af35e86&\");\n/* harmony import */ var _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview.vue?vue&type=script&lang=js& */ \"./src/admin/components/ui/Preview.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Preview_vue_vue_type_template_id_1af35e86___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Preview_vue_vue_type_template_id_1af35e86___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/components/ui/Preview.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/components/ui/Preview.vue?");

/***/ }),

/***/ "./src/admin/components/ui/Preview.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/admin/components/ui/Preview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./Preview.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/Preview.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/components/ui/Preview.vue?");

/***/ }),

/***/ "./src/admin/components/ui/Preview.vue?vue&type=template&id=1af35e86&":
/*!****************************************************************************!*\
  !*** ./src/admin/components/ui/Preview.vue?vue&type=template&id=1af35e86& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_1af35e86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Preview.vue?vue&type=template&id=1af35e86& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/ui/Preview.vue?vue&type=template&id=1af35e86&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_1af35e86___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_1af35e86___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/components/ui/Preview.vue?");

/***/ }),

/***/ "./src/admin/main.js":
/*!***************************!*\
  !*** ./src/admin/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/admin/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/admin/router/index.js\");\n/* harmony import */ var _utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/admin-menu-fix */ \"./src/admin/utils/admin-menu-fix.js\");\n/* harmony import */ var vuikit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuikit */ \"./node_modules/vuikit/dist/vuikit.esm.js\");\n/* harmony import */ var _vuikit_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vuikit/icons */ \"./node_modules/@vuikit/icons/dist/vuikit-icons.esm.js\");\n/* harmony import */ var _vuikit_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vuikit/theme */ \"./node_modules/@vuikit/theme/dist/vuikit.css\");\n/* harmony import */ var _vuikit_theme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vuikit_theme__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue_code_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-code-highlight */ \"./node_modules/vue-code-highlight/dist/vue-code-highlight.esm.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ \"./src/admin/store.js\");\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuikit__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_vuikit_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_code_highlight__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n/* eslint-disable no-new */\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: '#formello-app',\n  store: _store__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  router: _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}); // fix the admin menu for the slug \"vue-app\"\n\nObject(_utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('formello');\n\n//# sourceURL=webpack:///./src/admin/main.js?");

/***/ }),

/***/ "./src/admin/pages/Forms.vue":
/*!***********************************!*\
  !*** ./src/admin/pages/Forms.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Forms_vue_vue_type_template_id_5add32bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms.vue?vue&type=template&id=5add32bb& */ \"./src/admin/pages/Forms.vue?vue&type=template&id=5add32bb&\");\n/* harmony import */ var _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms.vue?vue&type=script&lang=js& */ \"./src/admin/pages/Forms.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Forms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/pages/Forms.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Forms_vue_vue_type_template_id_5add32bb___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Forms_vue_vue_type_template_id_5add32bb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/Forms.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/Forms.vue?");

/***/ }),

/***/ "./src/admin/pages/Forms.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/admin/pages/Forms.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Forms.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/Forms.vue?");

/***/ }),

/***/ "./src/admin/pages/Forms.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************!*\
  !*** ./src/admin/pages/Forms.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Forms.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/pages/Forms.vue?");

/***/ }),

/***/ "./src/admin/pages/Forms.vue?vue&type=template&id=5add32bb&":
/*!******************************************************************!*\
  !*** ./src/admin/pages/Forms.vue?vue&type=template&id=5add32bb& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_5add32bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Forms.vue?vue&type=template&id=5add32bb& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Forms.vue?vue&type=template&id=5add32bb&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_5add32bb___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Forms_vue_vue_type_template_id_5add32bb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Forms.vue?");

/***/ }),

/***/ "./src/admin/pages/Home.vue":
/*!**********************************!*\
  !*** ./src/admin/pages/Home.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=9e5983fa& */ \"./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&\");\n/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ \"./src/admin/pages/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/Home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

/***/ }),

/***/ "./src/admin/pages/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/admin/pages/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

/***/ }),

/***/ "./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&":
/*!*****************************************************************!*\
  !*** ./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=9e5983fa& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Home.vue?vue&type=template&id=9e5983fa&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_9e5983fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Home.vue?");

/***/ }),

/***/ "./src/admin/pages/Settings.vue":
/*!**************************************!*\
  !*** ./src/admin/pages/Settings.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Settings_vue_vue_type_template_id_e4dc4572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=e4dc4572& */ \"./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&\");\n/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ \"./src/admin/pages/Settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&lang=css& */ \"./src/admin/pages/Settings.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Settings_vue_vue_type_template_id_e4dc4572___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Settings_vue_vue_type_template_id_e4dc4572___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/admin/pages/Settings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?");

/***/ }),

/***/ "./src/admin/pages/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/admin/pages/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?");

/***/ }),

/***/ "./src/admin/pages/Settings.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./src/admin/pages/Settings.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-0!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?");

/***/ }),

/***/ "./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&":
/*!*********************************************************************!*\
  !*** ./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_e4dc4572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=e4dc4572& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/pages/Settings.vue?vue&type=template&id=e4dc4572&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_e4dc4572___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_e4dc4572___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/admin/pages/Settings.vue?");

/***/ }),

/***/ "./src/admin/router/index.js":
/*!***********************************!*\
  !*** ./src/admin/router/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var admin_pages_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! admin/pages/Home.vue */ \"./src/admin/pages/Home.vue\");\n/* harmony import */ var admin_pages_Forms_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! admin/pages/Forms.vue */ \"./src/admin/pages/Forms.vue\");\n/* harmony import */ var admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! admin/pages/Settings.vue */ \"./src/admin/pages/Settings.vue\");\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  routes: [{\n    path: '/',\n    name: 'Home',\n    component: admin_pages_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/forms',\n    name: 'Forms',\n    component: admin_pages_Forms_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, {\n    path: '/settings',\n    name: 'Settings',\n    component: admin_pages_Settings_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }]\n}));\n\n//# sourceURL=webpack:///./src/admin/router/index.js?");

/***/ }),

/***/ "./src/admin/store.js":
/*!****************************!*\
  !*** ./src/admin/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Store({\n  strict: true,\n  state: {\n    fields: [],\n    active: false\n  },\n  mutations: {\n    active(state, active) {\n      state.active = active;\n    },\n\n    flush(state) {\n      state.fields = [];\n    },\n\n    updateFields: (state, payload) => {\n      state.fields = payload;\n    },\n    updateField: (state, payload) => {\n      state.fields = payload;\n    },\n    deleteField: (state, payload) => {\n      const i = state.fields.map(item => item.id).indexOf(payload);\n      state.fields.splice(i, 1);\n    }\n  },\n  actions: {\n    updateFields: ({\n      commit\n    }, payload) => {\n      commit(\"updateFields\", payload);\n    }\n  },\n  getters: {\n    active: state => id => {\n      return state.fields.find(field => field.id === id);\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/admin/store.js?");

/***/ }),

/***/ "./src/admin/utils/admin-menu-fix.js":
/*!*******************************************!*\
  !*** ./src/admin/utils/admin-menu-fix.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * As we are using hash based navigation, hack fix\r\n * to highlight the current selected menu\r\n *\r\n * Requires jQuery\r\n */\nfunction menuFix(slug) {\n  var $ = jQuery;\n  let menuRoot = $('#toplevel_page_' + slug);\n  let currentUrl = window.location.href;\n  let currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));\n  menuRoot.on('click', 'a', function () {\n    var self = $(this);\n    $('ul.wp-submenu li', menuRoot).removeClass('current');\n\n    if (self.hasClass('wp-has-submenu')) {\n      $('li.wp-first-item', menuRoot).addClass('current');\n    } else {\n      self.parents('li').addClass('current');\n    }\n  });\n  $('ul.wp-submenu a', menuRoot).each(function (index, el) {\n    if ($(el).attr('href') === currentPath) {\n      $(el).parent().addClass('current');\n      return;\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menuFix);\n\n//# sourceURL=webpack:///./src/admin/utils/admin-menu-fix.js?");

/***/ }),

/***/ "./src/admin/utils/defaultOpts.js":
/*!****************************************!*\
  !*** ./src/admin/utils/defaultOpts.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  label: \"Apple\",\n  value: 'apple',\n  is_required: false,\n  id: 1\n}, {\n  label: \"Coconut\",\n  value: 'coconut',\n  is_required: false,\n  id: 2\n}, {\n  label: \"Pineapple\",\n  value: 'pineapple',\n  is_required: false,\n  id: 3\n}]);\n\n//# sourceURL=webpack:///./src/admin/utils/defaultOpts.js?");

/***/ }),

/***/ "./src/admin/utils/eventBus.js":
/*!*************************************!*\
  !*** ./src/admin/utils/eventBus.js ***!
  \*************************************/
/*! exports provided: EventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventBus\", function() { return EventBus; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\nconst EventBus = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/admin/utils/eventBus.js?");

/***/ }),

/***/ "./src/admin/utils/fieldsDefinitions.js":
/*!**********************************************!*\
  !*** ./src/admin/utils/fieldsDefinitions.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst defaultOpts = {\n  attrs: {\n    type: 'text',\n    name: '',\n    value: ''\n  },\n  class: {},\n  settings: {\n    base: true,\n    display: true,\n    options: false,\n    style: true,\n    display: true,\n    range: false,\n    disabledInput: []\n  },\n  options: [{\n    label: \"Apple\",\n    value: 'apple',\n    is_required: false,\n    id: 1\n  }, {\n    label: \"Coconut\",\n    value: 'coconut',\n    is_required: false,\n    id: 2\n  }, {\n    label: \"Pineapple\",\n    value: 'pineapple',\n    is_required: false,\n    id: 3\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: 'Input',\n  tag: 'input',\n  attrs: {\n    type: 'text',\n    placeholder: 'stocazzo',\n    name: '',\n    value: ''\n  },\n  label: 'Input Text',\n  settings: defaultOpts.settings,\n  class: defaultOpts.class\n}, {\n  tag: 'input',\n  component: 'Input',\n  label: 'Email',\n  attrs: {\n    type: 'email',\n    ...defaultOpts.attrs\n  },\n  settings: defaultOpts.settings,\n  class: defaultOpts.class\n}, {\n  type: 'hidden',\n  component: 'Input',\n  label: 'Hidden',\n  attrs: { ...defaultOpts.attrs,\n    type: 'hidden'\n  },\n  settings: { ...defaultOpts.settings,\n    disabledInput: ['label', 'message', 'required', 'placeholder'],\n    display: false,\n    style: false\n  },\n  class: defaultOpts.class\n}, {\n  component: 'Input',\n  label: 'Submit',\n  attrs: { ...defaultOpts.attrs,\n    type: 'submit'\n  },\n  settings: { ...defaultOpts.settings,\n    disabledInput: ['label', 'message', 'required', 'placeholder'],\n    display: false,\n    style: false\n  },\n  class: defaultOpts.class\n}, {\n  component: 'Input',\n  label: 'URL',\n  attrs: { ...defaultOpts.attrs,\n    type: 'url'\n  },\n  settings: defaultOpts.settings,\n  class: defaultOpts.class\n}, {\n  type: 'date',\n  component: 'Input',\n  label: 'Date',\n  attrs: { ...defaultOpts.attrs,\n    type: 'date'\n  },\n  settings: defaultOpts.settings,\n  class: defaultOpts.class\n}, {\n  component: 'Input',\n  label: 'Number',\n  attrs: { ...defaultOpts.attrs,\n    type: 'number',\n    min: 0,\n    max: 10,\n    step: 1\n  },\n  settings: { ...defaultOpts.settings,\n    range: true\n  },\n  class: defaultOpts.class\n}, {\n  tag: 'input',\n  component: 'Input',\n  label: 'Range',\n  attrs: { ...defaultOpts.attrs,\n    type: 'range',\n    min: 0,\n    max: 10,\n    step: 1\n  },\n  settings: { ...defaultOpts.settings,\n    disabledInput: ['placeholder'],\n    range: true\n  },\n  class: defaultOpts.class\n}, {\n  component: 'Select',\n  label: 'Select',\n  attrs: {\n    name: ''\n  },\n  options: [...defaultOpts.options],\n  settings: { ...defaultOpts.settings,\n    base: true,\n    options: true,\n    disabledInput: ['placeholder']\n  },\n  class: defaultOpts.class\n}, {\n  type: 'select',\n  component: 'Select',\n  label: 'Multiple Select',\n  multiple: true,\n  options: [],\n  settings: { ...defaultOpts.settings,\n    base: true,\n    options: true,\n    disabledInput: ['label', 'placeholder']\n  }\n}, {\n  type: 'checkbox',\n  component: 'Checkbox',\n  label: 'Checkbox',\n  label: 'Checkbox',\n  options: [],\n  settings: { ...defaultOpts.settings,\n    base: true,\n    options: true,\n    disabledInput: ['label', 'placeholder']\n  }\n}, {\n  type: 'radio',\n  component: 'Checkbox',\n  label: 'Radio list',\n  options: [],\n  settings: { ...defaultOpts.settings,\n    base: true,\n    options: true,\n    disabledInput: ['label', 'placeholder']\n  }\n}, {\n  type: 'textarea',\n  component: 'Textarea',\n  label: 'Textarea',\n  settings: defaultOpts.settings,\n  class: defaultOpts.class\n}]);\n\n//# sourceURL=webpack:///./src/admin/utils/fieldsDefinitions.js?");

/***/ })

},[["./src/admin/main.js","runtime","vendors"]]]);