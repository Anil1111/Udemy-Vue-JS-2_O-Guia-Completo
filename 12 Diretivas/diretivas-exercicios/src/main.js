import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	//bind(el, binding, vnode) {
	bind(el) { //Funciona do mesmo modo, os parametros binding e vnode são opcionais
		el.style.backgroundColor = 'lightgreen';
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
