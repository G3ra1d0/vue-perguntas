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
export function setUserBio(state, payload) {
    state.user.bio = payload
}
export function setUserTrabalho(state, payload) {
    state.user.trabalho = payload
}
export function setUserWebsite(state, payload) {
    state.user.website = payload
}