export function isLogged(state) {
  return state.auth.isLoggedIn;
}

export function selectToken(state) {
  return state.auth.token;
}

export function selectAuth(state) {
  return state.auth;
}

export function getState(state) {
  return state;
}

export function getName(state) {
  return state.auth.user.name;
}
