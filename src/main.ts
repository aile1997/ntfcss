import { createApp } from 'vue'
import '../src/assets/js/rem.js'
import '../src/assets/css/common.css'
import '../src/assets/css/initial.css'

import pluginObject from './plugins/plugins_object'

import 'normalize.css'

import App from './App.vue'
import router from './router'
import store from './store'

import reqLess from '@/utils/reqLess'

const app = createApp(App).use(store).use(router)

app.config.globalProperties.$req = reqLess
app.mount('#app')
app.use(pluginObject)
