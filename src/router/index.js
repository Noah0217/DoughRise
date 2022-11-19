import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        { path: "/register", component: () => import("../views/Register.vue") },
        
        
        

    ],
});

export default router;