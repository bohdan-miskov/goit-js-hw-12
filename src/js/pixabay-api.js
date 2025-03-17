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
  key: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: '15',
};
