import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.directive('celsius', {
    bind: function (el, binding, vnode) {
        el.innerHTML = `${Math.round(binding['value'])}&#8451;`
    }
});

document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        store,
        render: h => h(App)
    }).$mount('#app');
});