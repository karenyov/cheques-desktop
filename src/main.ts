import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import VueTheMask from 'vue-the-mask'
import money from 'v-money'

import vuetify from "./plugins/vuetify";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}

  router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
      const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];
  
      const context = {
        from,
       next,
        router,
        to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

new Vue({
  router,
  store,
  vuetify,
  VueTheMask,
  money,
  render: (h) => h(App),
}).$mount("#app");
