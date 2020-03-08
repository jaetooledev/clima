import Vue from "vue";
import App from "./App.vue";
import VueDebounce from "vue-debounce";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueDebounce)

new Vue({
  render: h => h(App)
}).$mount("#app");
