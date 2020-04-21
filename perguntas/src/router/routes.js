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
            beforeEnter: async (to, from, next) => {
                if(localStorage.getItem("userUid")){
                  store.dispatch("auth/setUserUid", localStorage.getItem("userUid") )
                  await store.dispatch("auth/setUser", localStorage.getItem("user") )
                  next()
                }else if(store.getters["auth/getUserUid"]){
                    next()
                }else {
                    next('/login')
                }
            }
        },
        { 
            path: 'pergunta/nova', component: () => import ('pages/NovaPergunta.vue'),
            beforeEnter: (to, from, next) => {
                if(store.getters["auth/getUserUid"]){
                    next()
                }else {
                    next('/login')
                }
            } 
        },
        { path: 'pergunta/:id', component: () => import ('pages/Pergunta.vue')}
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