export const validateUsername = (username) => {
  if (username === '' || username.includes(' ')) {
    return false;
  }

  const pattern = /^[a-zA-Z0-9]*$/;

  if (username.match(pattern)) {
    return true;
  } else {
    return false;
  }
};
