export function selectIsLoggedIn(state) {
  return state.auth.isLoggedIn;
}

export function selectToken(state) {
  return state.auth.token;
}

export function selectAuth(state) {
  return state.auth;
}

export function selectUserName(state) {
  return state.auth.user.name;
}

export function selectIsRefreshing(state) {
  return state.auth.isRefreshing;
}
