import Vue from 'vue'
import App from './App'
import VueAxios from 'vue-axios'

import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import axios from './axios'
import en from './locales/en.json'
import es from './locales/es.json'
import VueI18n from 'vue-i18n'
import { defaultLocale, localeOptions, firebaseConfig } from './constants/config'
import Notifications from './components/Common/Notification'
import Breadcrumb from './components/Common/Breadcrumb'
import RefreshButton from './components/Common/RefreshButton'
import Colxx from './components/Common/Colxx'
import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import contentmenu from 'v-contextmenu'
import VueLineClamp from 'vue-line-clamp'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import VueScrollTo from 'vue-scrollto'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(VueI18n);

const messages = { en: en, es: es };
const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale;
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages
});

Vue.use(Notifications);
Vue.component('piaf-breadcrumb', Breadcrumb);
Vue.component('b-refresh-button', RefreshButton);
Vue.component('b-colxx', Colxx);
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);
Vue.use(require('vue-shortkey'));
Vue.use(contentmenu);
Vue.use(VueLineClamp, {
  importCss: true
})
Vue.use(VCalendar, {
  firstDayOfWeek: 2,
  formats: {
    title: 'MMM YY',
    weekdays: 'WW',
    navMonths: 'MMMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L'
  },
  datePickerShowDayPopover: false,
  popoverExpanded: true,
  popoverDirection: 'bottom'
});
Vue.use(VueScrollTo);

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

export default new Vue({
  i18n,
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
