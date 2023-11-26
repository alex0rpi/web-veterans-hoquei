// Local storage of info (temporary while not hooked up to backend)
// Later this will become a database fetcher.
export const fetchData = (key: string): string => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : {};

  //* Method parse takes a JSON string and transforms it into a JavaScript object
  //* The opposite to parse is stringify, which takes a JavaScript object and transforms it into a JSON string.
};
