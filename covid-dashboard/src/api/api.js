const api = async (url) => {
  const request = await fetch(url);
  return request.json();
};
export default api;
