/*
export function someAction (context) {
}
*/

export function setUser({ commit }, payload) {
    // emailVerified = user.emailVerified;
    commit('setUserUid', payload.uid)
    commit('setUserEmail', payload.email)
    commit('setUserNome', payload.displayName)
    commit('setUserPhotoURL', payload.photoURL)
}