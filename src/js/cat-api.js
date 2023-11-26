import axios from 'axios';

export const refs = {
  select: document.getElementById('js-breed-select'),
  catBox: document.querySelector('.cat-info'),
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
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
};

// export const currentBreed = () => {
//   return axios.get(
//     `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`
//   );
// };

// return articles.forEach(article => {
//   const optionEl = document.createElement('option');
//   optionEl.value = article.id;
//   optionEl.textContent = article.name;
//   refs.select.appendChild(optionEl);
// });
