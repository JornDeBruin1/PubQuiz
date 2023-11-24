import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import initGoogleAnalytics from './services/googleAnalyticsService';

const app = createApp(App);

app.use(router);

initGoogleAnalytics()

app.mount('#app');