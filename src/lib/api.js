export const fetchAPI = async (path) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
  const result = await response.json();

  return result;
};
