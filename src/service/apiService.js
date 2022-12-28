import axios from 'axios';

export const sendRequest = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '31644219-2f7acda799c999752853da478';

  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
    q: query,
    key: API_KEY,
  });

  const { data } = await axios.get(`${BASE_URL}?${searchParams}`);
  return data;
};
