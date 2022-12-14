import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/style.css'
import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/tailwind-light/theme.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount('#app')

