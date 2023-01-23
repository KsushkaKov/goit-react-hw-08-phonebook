const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUsername = state => state.auth.user;
const selectIsRefreshCurrentUser = state => state.auth.isRefreshUser;
const selectToken = state => state.auth.token;

const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
  selectIsRefreshCurrentUser,
  selectToken,
};

export default authSelectors;
