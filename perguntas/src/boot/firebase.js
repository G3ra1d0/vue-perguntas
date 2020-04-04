import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'


const config = {
  apiKey: "AIzaSyB4dPLYRTy7STrZYDNgzw9ZYsbeZ0Xu_qI",
  authDomain: "pergunta-resposta.firebaseapp.com",
  databaseURL: "https://pergunta-resposta.firebaseio.com",
  projectId: "pergunta-resposta",
  storageBucket: "pergunta-resposta.appspot.com",
  messagingSenderId: "816335695497",
  appId: "1:816335695497:web:17b5f5d9b8bb77cf01a058",
  measurementId: "G-RGC60764JJ"
}

Vue.prototype.$firebase = firebase.initializeApp(config)

