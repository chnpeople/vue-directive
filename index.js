import Vue from 'vue';

function vHas() {
    Vue.directive('has',{
      bind: (el, binding, vnode) =>  {
      },
    
      inserted: (el, binding, vnode) => {
        let flag = Vue.prototype.$has();
        if (binding.value != flag) {
          el.parentNode.removeChild(el);
        }
      },
    
      update: (el, binding, vnode,oldVnode) => {
        
      },
    
      unbind: (el, binding, vnode) => {
      },
    });

    Vue.prototype.$has = function() {
      return JSON.parse(window.localStorage.getItem('login')) || undefined;
    }

  }
export default vHas;