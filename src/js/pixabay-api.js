import axios from 'axios';

export default function imageAPIRequest(imageName, page = 1) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      ...searchParams,
      q: imageName,
      page,
    },
  });
}

const searchParams = {
  key: '49304939-ceaf44514a8c7b1d4e36a4cf5',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: '15',
};
