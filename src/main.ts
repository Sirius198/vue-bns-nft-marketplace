import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import './assets/css/icons.css'
import DefaultLayout from './layouts/Default.vue';
import Toast, {POSITION} from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from './store';

const app = createApp(App).use(router).use(store);
app.component('DefaultLayout', DefaultLayout);
app.use(Toast, {
    position: POSITION.TOP_RIGHT
});
app.mount('#app');
