import { FirebaseApp } from 'boot/firebase'

export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    FirebaseApp.auth().onAuthStateChanged((user) => {      
      if(user){
        store.dispatch("auth/setUser", user);
      }
      next()
    });
  })
}