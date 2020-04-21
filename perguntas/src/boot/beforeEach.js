import { FirebaseApp } from 'boot/firebase'
import { Axios } from 'boot/axios'

export default async ({ router, store, Vue }) => {
  
  // const getUser = async (uid) => {
  //   let res = await Axios.get(`users/${uid}.json`)
  //   let { data } = res;
  //   store.dispatch("auth/setUser", data);
  // }
  
  router.beforeEach( async (to, from, next) => {
    if(localStorage.getItem("userUid")){
      store.dispatch("auth/setUserUid", localStorage.getItem("userUid") )
      await store.dispatch("auth/setUser", JSON.parse(localStorage.getItem("user")) )
    }else{
      await FirebaseApp.auth().onAuthStateChanged(async (user) => {      
        if(user){
          store.dispatch("auth/setUserUid", user.uid);
          await Axios.get(`users/${user.uid}.json`).then( response => {
              store.dispatch("auth/setUser", response.data);
            })
          }
        });
    }
    
    next()
  })
}