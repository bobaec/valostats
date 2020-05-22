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

export const deleteTarget = (target) => {
  const arr = JSON.parse(localStorage.getItem('history'));
  const index = arr.indexOf(target);
  if (index !== -1) arr.splice(index, 1);
  window.localStorage.setItem('history', JSON.stringify(arr));
};
