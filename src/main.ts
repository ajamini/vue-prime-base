import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';


import Tooltip from "primevue/tooltip";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
import StyleClass from "primevue/styleclass";
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

//import './assets/main.css';
import 'primevue/resources/primevue.min.css';   	//required: PrimeVue components
import 'primeicons/primeicons.css';	 				//required: PrimeIcons
import './App.scss';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import InputSwitch from "primevue/inputswitch";
import RadioButton from "primevue/radiobutton";

//your styles and overrides

const app = createApp(App)

app.use(router)

app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);
app.directive('styleclass', StyleClass);

app.component('RadioButton', RadioButton);
app.component('InputSwitch', InputSwitch);

app.mount('#app')
