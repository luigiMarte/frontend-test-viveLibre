import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VeeValidate from "vee-validate";
import "vue2-toast/lib/toast.css";
import Toast from "vue2-toast";

Vue.use(Toast, {
  type: "center",
  duration: 3000,
  wordWrap: true,
  width: "150px",
});
Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
