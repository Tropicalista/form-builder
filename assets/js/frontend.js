(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend"],{

/***/ "./src/frontend/conditionality.js":
/*!****************************************!*\
  !*** ./src/frontend/conditionality.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nfunction getFieldValues(form, fieldName, evt) {\n  const values = [];\n  const inputs = form.querySelectorAll('input[name=\"' + fieldName + '\"], select[name=\"' + fieldName + '\"], textarea[name=\"' + fieldName + '\"], button[name=\"' + fieldName + '\"]');\n\n  for (let i = 0; i < inputs.length; i++) {\n    const input = inputs[i];\n    const type = input.type.toLowerCase();\n\n    if ((type === 'radio' || type === 'checkbox') && !input.checked) {\n      continue;\n    } // ignore buttons which are not clicked (in case there's more than one button with same name)\n\n\n    if (type === 'button' || type === 'submit' || input.tagName === 'BUTTON') {\n      if ((!evt || evt.target !== input) && form.dataset[fieldName] !== input.value) {\n        continue;\n      }\n\n      form.dataset[fieldName] = input.value;\n    }\n\n    values.push(input.value);\n  } // default to an empty string\n  // can be used to show or hide an element when a field is empty or has not been set\n  // Usage: data-show-if=\"FIELDNAME:\"\n\n\n  if (values.length === 0) {\n    values.push('');\n  }\n\n  return values;\n}\n\nfunction findForm(element) {\n  let bubbleElement = element;\n\n  while (bubbleElement.parentElement) {\n    bubbleElement = bubbleElement.parentElement;\n\n    if (bubbleElement.tagName === 'FORM') {\n      return bubbleElement;\n    }\n  }\n\n  return null;\n}\n\nfunction toggleElement(el, evt) {\n  const show = !!el.getAttribute('data-show-if');\n  const conditions = show ? el.getAttribute('data-show-if').split(':') : el.getAttribute('data-hide-if').split(':');\n  const fieldName = conditions[0];\n  const expectedValues = (conditions.length > 1 ? conditions[1] : '*').split('|');\n  const form = findForm(el);\n  const values = getFieldValues(form, fieldName, evt); // determine whether condition is met\n\n  let conditionMet = false;\n\n  for (let i = 0; i < values.length; i++) {\n    const value = values[i]; // condition is met when value is in array of expected values OR expected values contains a wildcard and value is not empty\n\n    conditionMet = expectedValues.indexOf(value) > -1 || expectedValues.indexOf('*') > -1 && value.length > 0;\n\n    if (conditionMet) {\n      break;\n    }\n  } // toggle element display\n\n\n  if (show) {\n    el.style.display = conditionMet ? '' : 'none';\n  } else {\n    el.style.display = conditionMet ? 'none' : '';\n  } // find all inputs inside this element and toggle [required] attr (to prevent HTML5 validation on hidden elements)\n\n\n  const inputs = el.querySelectorAll('input, select, textarea');\n  [].forEach.call(inputs, el => {\n    if ((conditionMet || show) && el.getAttribute('data-was-required')) {\n      el.required = true;\n      el.removeAttribute('data-was-required');\n    }\n\n    if ((!conditionMet || !show) && el.required) {\n      el.setAttribute('data-was-required', 'true');\n      el.required = false;\n    }\n  });\n} // evaluate conditional elements globally\n\n\nfunction evaluate() {\n  const elements = document.querySelectorAll('.hf-form [data-show-if], .hf-form [data-hide-if]');\n  [].forEach.call(elements, toggleElement);\n} // re-evaluate conditional elements for change events on forms\n\n\nfunction handleInputEvent(evt) {\n  if (!evt.target || !evt.target.form || evt.target.form.className.indexOf('hf-form') < 0) {\n    return;\n  }\n\n  const form = evt.target.form;\n  const elements = form.querySelectorAll('[data-show-if], [data-hide-if]');\n  [].forEach.call(elements, el => toggleElement(el, evt));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  init: function () {\n    document.addEventListener('click', handleInputEvent, true);\n    document.addEventListener('keyup', handleInputEvent, true);\n    document.addEventListener('change', handleInputEvent, true);\n    document.addEventListener('hf-refresh', evaluate, true);\n    window.addEventListener('load', evaluate);\n    evaluate();\n  }\n});\n\n//# sourceURL=webpack:///./src/frontend/conditionality.js?");

/***/ }),

/***/ "./src/frontend/events.js":
/*!********************************!*\
  !*** ./src/frontend/events.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst listeners = {};\n\nfunction trigger(event, args) {\n  listeners[event] = listeners[event] || [];\n  listeners[event].forEach(f => f.apply(null, args));\n}\n\nfunction on(event, func) {\n  listeners[event] = listeners[event] || [];\n  listeners[event].push(func);\n}\n\nfunction off(event, func) {\n  listeners[event] = listeners[event] || [];\n  listeners[event] = listeners[event].filter(f => f !== func);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  trigger,\n  on,\n  off\n});\n\n//# sourceURL=webpack:///./src/frontend/events.js?");

/***/ }),

/***/ "./src/frontend/form-loading-indicator.js":
/*!************************************************!*\
  !*** ./src/frontend/form-loading-indicator.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction getButtonText(button) {\n  return button.innerHTML ? button.innerHTML : button.value;\n}\n\nfunction setButtonText(button, text) {\n  button.innerHTML ? button.innerHTML = text : button.value = text;\n}\n\nfunction Loader(formElement) {\n  this.form = formElement;\n  this.button = formElement.querySelector('input[type=\"submit\"], button[type=\"submit\"]');\n  this.loadingInterval = 0;\n  this.character = '\\u00B7';\n\n  if (this.button) {\n    this.originalButton = this.button.cloneNode(true);\n  }\n}\n\nLoader.prototype.setCharacter = function (c) {\n  this.character = c;\n};\n\nLoader.prototype.start = function () {\n  if (this.button) {\n    // loading text\n    const loadingText = this.button.getAttribute('data-loading-text');\n\n    if (loadingText) {\n      setButtonText(this.button, loadingText);\n      return;\n    } // Show AJAX loader\n\n\n    const styles = window.getComputedStyle(this.button);\n    this.button.style.width = styles.width;\n    setButtonText(this.button, this.character);\n    this.loadingInterval = window.setInterval(this.tick.bind(this), 500);\n  } else {\n    this.form.style.opacity = '0.5';\n  }\n};\n\nLoader.prototype.tick = function () {\n  // count chars, start over at 5\n  const text = getButtonText(this.button);\n  const loadingChar = this.character;\n  setButtonText(this.button, text.length >= 5 ? loadingChar : text + ' ' + loadingChar);\n};\n\nLoader.prototype.stop = function () {\n  if (this.button) {\n    this.button.style.width = this.originalButton.style.width;\n    const text = getButtonText(this.originalButton);\n    setButtonText(this.button, text);\n    window.clearInterval(this.loadingInterval);\n  } else {\n    this.form.style.opacity = '';\n  }\n};\n\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./src/frontend/form-loading-indicator.js?");

/***/ }),

/***/ "./src/frontend/main.js":
/*!******************************!*\
  !*** ./src/frontend/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _conditionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionality.js */ \"./src/frontend/conditionality.js\");\n/* harmony import */ var _polyfills_custom_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills/custom-event.js */ \"./src/frontend/polyfills/custom-event.js\");\n/* harmony import */ var _polyfills_custom_event_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfills_custom_event_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ \"./src/frontend/events.js\");\n\n\n\n\nconst Loader = __webpack_require__(/*! ./form-loading-indicator.js */ \"./src/frontend/form-loading-indicator.js\");\n\nconst vars = window.hf_js_vars || {\n  ajax_url: window.location.href\n};\n\nfunction cleanFormMessages(formEl) {\n  const messageElements = formEl.querySelectorAll('.hf-message');\n  [].forEach.call(messageElements, el => {\n    el.parentNode.removeChild(el);\n  });\n}\n\nfunction addFormMessage(formEl, message) {\n  const txtElement = document.createElement('p');\n  txtElement.className = 'hf-message hf-message-' + message.type;\n  txtElement.innerHTML = message.text; // uses innerHTML because we allow some HTML strings in the message settings\n\n  txtElement.role = 'alert';\n  const wrapperElement = formEl.querySelector('.hf-messages') || formEl;\n  wrapperElement.appendChild(txtElement);\n}\n\nfunction handleSubmitEvents(e) {\n  const formEl = e.target;\n\n  if (formEl.className.indexOf('hf-form') < 0) {\n    return;\n  } // always prevent default (because regular submit doesn't work for HTML Forms)\n\n\n  e.preventDefault();\n  submitForm(formEl);\n}\n\nfunction submitForm(formEl) {\n  cleanFormMessages(formEl);\n  emitEvent('submit', formEl);\n  const formData = new FormData(formEl);\n  [].forEach.call(formEl.querySelectorAll('[data-was-required=true]'), function (el) {\n    formData.append('_was_required[]', el.getAttribute('name'));\n  });\n  let request = new XMLHttpRequest();\n  request.onreadystatechange = createRequestHandler(formEl);\n  request.open('POST', vars.ajax_url, true);\n  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');\n  request.send(formData);\n  request = null;\n}\n\nfunction emitEvent(eventName, element) {\n  // browser event API: formElement.on('hf-success', ..)\n  element.dispatchEvent(new CustomEvent('hf-' + eventName)); // custom events API: html_forms.on('success', ..)\n\n  _events_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].trigger(eventName, [element]);\n}\n\nfunction createRequestHandler(formEl) {\n  const loader = new Loader(formEl);\n  loader.start();\n  return function () {\n    // are we done?\n    if (this.readyState === 4) {\n      let response;\n      loader.stop();\n\n      if (this.status >= 200 && this.status < 400) {\n        try {\n          response = JSON.parse(this.responseText);\n        } catch (error) {\n          console.log('HTML Forms: failed to parse AJAX response.\\n\\nError: \"' + error + '\"');\n          return;\n        }\n\n        emitEvent('submitted', formEl);\n\n        if (response.error) {\n          emitEvent('error', formEl);\n        } else {\n          emitEvent('success', formEl);\n        } // Show form message\n\n\n        if (response.message) {\n          addFormMessage(formEl, response.message);\n          emitEvent('message', formEl);\n        } // Should we hide form?\n\n\n        if (response.hide_form) {\n          formEl.querySelector('.hf-fields-wrap').style.display = 'none';\n        } // Should we redirect?\n\n\n        if (response.redirect_url) {\n          window.location = response.redirect_url;\n        } // clear form\n\n\n        if (!response.error) {\n          formEl.reset();\n        }\n      } else {\n        // Server error :(\n        console.log(this.responseText);\n      }\n    }\n  };\n}\n\ndocument.addEventListener('submit', handleSubmitEvents, false); // useCapture=false to ensure we bubble upwards (and thus can cancel propagation)\n\n_conditionality_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\nprefiller.init();\nwindow.html_forms = {\n  on: _events_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on,\n  off: _events_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].off,\n  submit: submitForm\n};\n\n//# sourceURL=webpack:///./src/frontend/main.js?");

/***/ }),

/***/ "./src/frontend/polyfills/custom-event.js":
/*!************************************************!*\
  !*** ./src/frontend/polyfills/custom-event.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* window.CustomEvent polyfill for IE */\n(function () {\n  if (typeof window.CustomEvent === 'function') return false;\n\n  function CustomEvent(event, params) {\n    params = params || {\n      bubbles: false,\n      cancelable: false,\n      detail: undefined\n    };\n    var evt = document.createEvent('CustomEvent');\n    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n    return evt;\n  }\n\n  CustomEvent.prototype = window.Event.prototype;\n  window.CustomEvent = CustomEvent;\n})();\n\n//# sourceURL=webpack:///./src/frontend/polyfills/custom-event.js?");

/***/ })

},[["./src/frontend/main.js","runtime"]]]);