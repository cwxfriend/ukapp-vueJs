'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import filters from './filters';
import routerMap from './routers';
import FastClick from 'fastclick';
import session from './biz/sessionControlBiz'

Vue.use(VueRouter);
var se = new session();

$.ajaxSettings.crossDomain = true;

//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

router.beforeEach((transition) => {
   if (transition.to.auth) {
       if (se.secCheck()) {
           transition.next();
       } else {
           var redirect = encodeURIComponent(transition.to.path);
           transition.redirect('/login');
       }
   } else {
       transition.next();
   }
});

let app = Vue.extend({});
routerMap(router);

router.start(app, "#app");
