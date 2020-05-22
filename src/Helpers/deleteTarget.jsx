export const deleteTarget = (target) => {
  const arr = JSON.parse(localStorage.getItem('history'));
  const index = arr.indexOf(target);
  if (index !== -1) arr.splice(index, 1);
  window.localStorage.setItem('history', JSON.stringify(arr));
};
