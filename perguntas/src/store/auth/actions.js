export function setUser({ commit }, payload) {
    if(payload.email) commit('setUserEmail', payload.email)
    if(payload.nome) commit('setUserNome', payload.nome)
    if(payload.photoURL) commit('setUserPhotoURL', payload.photoURL)
    if(payload.bio)commit('setUserBio', payload.bio)
    if(payload.trabalho)commit('setUserTrabalho', payload.trabalho)
    if(payload.website)commit('setUserWebsite', payload.website)
}

export function setUserUid({commit}, payload){
    commit('setUserUid', payload)
}