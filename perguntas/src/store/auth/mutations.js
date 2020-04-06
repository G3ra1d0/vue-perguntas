/*
export function someMutation (state) {
}
*/
export function setUser(state, payload) {
    state.user = payload
}
export function setUserUid(state, payload) {
    state.user.uid = payload
}
export function setUserEmail(state, payload) {
    state.user.email = payload
}
export function setUserNome(state, payload) {
    state.user.nome = payload
}
export function setUserPhotoURL(state, payload) {
    state.user.photoURL = payload
}