function useLocalStorage(type, data = null) {
  if (data !== null) {
    localStorage.setItem(type, JSON.stringify(data));
    return;
  }

  //get storage
  return JSON.parse(localStorage.getItem(type));
}
export default useLocalStorage;
