import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import initGoogleAnalytics from './services/googleAnalyticsService';
import { getPerformance } from "firebase/performance";


const app = createApp(App);

app.use(router);

initGoogleAnalytics()
const perf = getPerformance(app);


app.mount('#app');