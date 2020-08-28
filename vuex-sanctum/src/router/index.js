//import vue
import Vue from 'vue'

//import vue router
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
//use vue router on vue
Vue.use(VueRouter)
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

//create object instance vue router
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ( /* webpackChunkName: "Auth" */ "@/views/home/Index"),
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "Auth" */ "@/views/auth/Index"),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () =>
                import ( /* webpackChunkName: "Auth" */ "@/views/dashboard/Index"),
        },
        {
            path: '/user',
            name: 'user',
            component: () =>
                import ( /* webpackChunkName: "Auth" */ "@/views/user/Index"),
        },
        {
            path: '/user/create',
            name: 'create',
            component: () =>
                import ( /* webpackChunkName: "Auth" */ "@/views/user/Create"),
        },
        {
            path: '/user/show/:id',
            name: 'show',
            component: () =>
                import ( /* webpackChunkName: "Auth" */ "@/views/user/Show"),
        }, {
            path: '/user/edit/:id',
            name: 'edit',
            component: () =>
                import ( /* webpackChunkName: "Auth" */ "@/views/user/Edit"),
        },
    ],
    mode: 'history'
})

export default router