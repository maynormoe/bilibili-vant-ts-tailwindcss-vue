import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Field, CellGroup } from 'vant';

import App from './App.vue';
import Router from "@/router";

import '@/assets/css/tailwindcss.css';
import 'vant/lib/index.css';

import { Search } from 'vant';

import http from '@/http';

const app = createApp(App);

app.use(createPinia());
app.use(Router);
app.use(Field);
app.use(CellGroup);
app.use(Search);

app.config.globalProperties.$http = http;

app.mount('#app');
