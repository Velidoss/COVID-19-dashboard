const api = async (path) => {
  const url = `https://api.covid19api.com/${path}`;
  const request = await fetch(url);
  return request.json();
};
export default api;
