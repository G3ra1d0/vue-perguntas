import Vue from 'vue'
import axios from 'axios'

const Axios = axios.create({
  baseURL:  'https://pergunta-resposta.firebaseio.com/'
})

Vue.prototype.$axios = Axios

export { Axios }
