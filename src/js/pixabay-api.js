import axios from 'axios';

const searchParams = {
  key: '49304939-ceaf44514a8c7b1d4e36a4cf5',
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
