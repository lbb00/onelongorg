import Vue from 'vue'
import Fundebug from 'fundebug-javascript'
Fundebug.apikey = '63b37735bec8382649bd9f063669af579fe785293932aea060bcd995b3a5c8b3'
Vue.config.errorHandler = (err, vm) => {
  let componentName = Vue.util.formatComponentName(vm)
  let propsData = vm.$options.propsData
  Fundebug.notifyError(err, {
    metaData: {
      componentName: componentName,
      propsData: propsData
    }
  })
}
/* fundebug test */
// Fundebug.notify('Test', 'Hello Fundebug!')
