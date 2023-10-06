import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './app.vue';

Vue.use(VueRouter);

/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    router: new VueRouter({ routes }),
    render: h => h(App),
});
