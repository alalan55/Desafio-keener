import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/style/global.scss'

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.requiresAuth)){
        if(!store.getters.loggedIn){
            next({
                path: '/login'
            })
        } else{
            next()
        }
    } else if(to.matched.some(record => record.meta.requiresVisitor)){
        if(store.getters.loggedIn){
            next({
                path: '/'
            })
        } else{
            next()
        }
    }
})


createApp(App).use(store).use(router).mount("#app");
