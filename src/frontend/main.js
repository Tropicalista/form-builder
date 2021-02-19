//const Bouncer = require('formbouncerjs')
import prefiller from './form-prefiller.js'
import conditionality from './conditionality.js'
import './polyfills/custom-event.js'
import events from './events.js'
const Loader = require('./form-loading-indicator.js')
import Bouncer from 'formbouncerjs'

const vars = window.formello_vars || { ajax_url: window.location.href }

var loader;

function cleanFormMessages (formEl) {
  const messageElements = formEl.querySelectorAll('.formello-message');
  [].forEach.call(messageElements, (el) => {
    el.parentNode.removeChild(el)
  })
}

function addFormMessage (formEl, obj) {
  var type = obj.message.type
  var text = obj.message.text

  const txtElement = document.createElement('p')
  txtElement.className = 'formello-message formello-message-' + type
  txtElement.innerHTML = text // uses innerHTML because we allow some HTML strings in the message settings
  txtElement.role = 'alert'

  if( obj.error ){
    const list = document.createElement('ul')
    for (var key in obj.error ) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild( document.createTextNode( key + ': ' + obj.error[key] ) );

        // Add it to the list:
        list.appendChild(item);
    }

    txtElement.appendChild(list)
  }


  const wrapperElement = formEl.querySelector('.formello-messages') || formEl
  wrapperElement.appendChild(txtElement)
}

function handleSubmitEvents (e) {
  const formEl = e.target
  if (formEl.className.indexOf('formello-form') < 0) {
    loader.stop()
    return
  }

  // always prevent default (because regular submit doesn't work for Formello Forms)
  e.preventDefault()
  submitForm(formEl)
}

function submitForm (formEl) {
  cleanFormMessages(formEl)
  emitEvent('submit', formEl)

  const formData = new FormData(formEl);

  let request = new XMLHttpRequest()
  request.onreadystatechange = createRequestHandler(formEl)
  request.open('POST', vars.ajax_url, true)
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  request.send(formData)
  request = null
}

function emitEvent (eventName, element) {
  // browser event API: formElement.on('formello-success', ..)
  element.dispatchEvent(new CustomEvent('formello-' + eventName))

  // custom events API: formello_forms.on('success', ..)
  events.trigger(eventName, [element])
}

function createRequestHandler (formEl) {

  return function () {
    // are we done?
    if (this.readyState === 4) {
      let response
      loader.stop()

      if (this.status >= 200 && this.status < 400) {
        try {
          response = JSON.parse(this.responseText)
        } catch (error) {
          console.log('Formello: failed to parse AJAX response.\n\nError: "' + error + '"')
          return
        }

        emitEvent('submitted', formEl)

        if (response.error) {
          emitEvent('error', formEl)
        } else {
          emitEvent('success', formEl)
        }

        // Should we redirect?
        if (response.redirect_url) {
          window.location = response.redirect_url
          //return
        }

        // Show form message
        if (response.message) {
          addFormMessage(formEl, response)
          emitEvent('message', formEl)
        }

        // Should we hide form?
        if (response.hide_form) {
          formEl.querySelector('.formello-fields-wrap').style.display = 'none'
        }

        // clear form
        if (!response.error) {
          formEl.reset()
        }
      } else {
        // Server error :(
        console.log(this.responseText)
      }
    }
  }
}

function showFiles(e){
    var input = e.target
    var list = document.createElement("ul");
    var output = input.parentNode.insertBefore(list, input.nextSibling)

    var children = "";
    for (var i = 0; i < input.files.length; ++i) {
        children += '<li>' + input.files.item(i).name + '</li>';
    }
    list.innerHTML = children
}

var inputFiles = document.querySelectorAll('input[type=file]')

for (var i = 0; i < inputFiles.length; i++) {
    inputFiles[i].addEventListener('change', showFiles, false);
}

document.addEventListener('bouncerFormValid', function (e) {
  e.preventDefault()

  this.spinner = e.target.querySelector('#formello-spinner')

  if(this.spinner){
    this.spinner.style.display = 'inline'
  }

  loader = new Loader(e.target)
  loader.start()

  if( formello_vars.formello_settings.recaptcha_enabled ){
    grecaptcha.reset();
    grecaptcha.execute().then(function(){
      handleSubmitEvents(e)
    });
  }else{
    handleSubmitEvents(e)
  }

}, false)

var bouncer = new Bouncer('form', {
  messages: formello_vars.formello_settings.validation.messages,
  disableSubmit: true
})

conditionality.init()
prefiller.init()

if( formello_vars.formello_settings.has_date ){
  flatpickr('input[type=date]')
}

// recaptcha callback
window.enableBtn = function(e){}

window.formello_forms = {
  on: events.on,
  off: events.off,
  submit: submitForm
}
