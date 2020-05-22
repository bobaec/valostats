export const addToLocalStorage = (username) => {
  let historyArr = JSON.parse(window.localStorage.getItem('history'))
    ? JSON.parse(window.localStorage.getItem('history'))
    : [];

  let caseInsensitive = username.toLowerCase();

  historyArr = historyArr.map((lowerCaseHistoryArr) => {
    return lowerCaseHistoryArr.toLowerCase();
  });

  if (!historyArr.includes(caseInsensitive)) {
    if (historyArr.length > 9) {
      historyArr.shift();
      historyArr.push(username);
      window.localStorage.setItem('history', JSON.stringify(historyArr));
    } else {
      historyArr.push(username);
      window.localStorage.setItem('history', JSON.stringify(historyArr));
    }
  }
};
