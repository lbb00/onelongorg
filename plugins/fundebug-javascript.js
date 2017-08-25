import Fundebug from 'fundebug-javascript'
import Vue from 'vue'
Fundebug.apikey = '63b37735bec8382649bd9f063669af579fe785293932aea060bcd995b3a5c8b3'
if (process.env.NODE_ENV === 'development') { // 开发环境
  Fundebug.silent = true
}
let formatComponentName = (vm) => {
  if (vm.$root === vm) return 'root'
  let name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name
  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options.__file ? ' at ' + vm.$options.__file : '')
}
Vue.config.errorHandler = function (err, vm, info) {
  let componentName = formatComponentName(vm)
  let propsData = vm.$options.propsData
  Fundebug.notifyError(err,
    {
      metaData:
      {
        componentName: componentName,
        propsData: propsData,
        info: info
      }
    })
}
