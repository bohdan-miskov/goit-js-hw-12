import axios from 'axios';

export default function imageAPIRequest(imageName) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      q: imageName,
      ...searchParams,
    },
  });
}

const searchParams = {
  key: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};
