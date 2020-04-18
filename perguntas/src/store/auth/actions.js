export function setUser({ commit }, payload) {
    commit('setUserEmail', payload.email)
    commit('setUserNome', payload.nome)
    commit('setUserPhotoURL', payload.photoURL)
    commit('setUserBio', payload.bio)
    commit('setUserTrabalho', payload.trabalho)
    commit('setUserWebsite', payload.website)
}

export function setUserUid({commit}, payload){
    commit('setUserUid', payload)
}