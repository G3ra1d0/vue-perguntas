import { FirebaseApp } from 'boot/firebase'
import { Axios } from 'boot/axios'

export default async ({ router, store, Vue }) => {
  
  // const getUser = async (uid) => {
  //   let res = await Axios.get(`users/${uid}.json`)
  //   let { data } = res;
  //   store.dispatch("auth/setUser", data);
  // }
  
  router.beforeEach((to, from, next) => {
    FirebaseApp.auth().onAuthStateChanged((user) => {      
      if(user){
        store.dispatch("auth/setUserUid", user.uid);
        Axios.get(`users/${user.uid}.json`).then(response => {
            store.dispatch("auth/setUser", response.data);
            next()
        })
      }else{
        next()
      }
    });
  })
}