const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getToken = state => state.auth.token;

const getIsGetCurrentUser = state => state.auth.isGetCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getToken,
  getIsGetCurrentUser,
};

export default authSelectors;
