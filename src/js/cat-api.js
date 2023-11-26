import axios from 'axios';

export const refs = {
  select: document.getElementById('js-breed-select'),
  catBox: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
};

const CAT_API_KEY =
  'live_z5HGDCAVfeUVvUbrElK6MIZcFxf6PwGEQlhAjbx6UM1SdPJ3iKxbWNG35CR0UMeQ';

axios.defaults.headers.common['x-api-key'] = CAT_API_KEY;

export const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .then(breeds => {
      return breeds;
    });
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0]);
};
