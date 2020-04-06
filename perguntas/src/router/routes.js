export default function(store){
const routes = [{
    path: '/',
    component: () =>
        import ('layouts/Home.vue'),
    children: [
        { path: '', component: () => import ('pages/Home.vue') },
        { path: 'login', component: () =>  import ('pages/Login.vue') },
        { path: 'register', component: () => import ('pages/Register.vue') },
        { 
            path: 'perfil',  component: () => import ('pages/Perfil.vue'),
            beforeEnter: (to, from, next) => {
                if(store.getters["auth/getUserUid"]){
                    next()
                }else {
                    next('/login')
                }
            }
        }
    ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

    return routes;
}
// export default routes