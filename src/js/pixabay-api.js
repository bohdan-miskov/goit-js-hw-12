import axios from 'axios';

const searchParams = {
  key: import.meta.env.VITE_API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: '15',
};

export default async function imageAPIRequest(imageName, page = 1) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      ...searchParams,
      q: imageName,
      page,
    },
  });

  return response.data;
}
