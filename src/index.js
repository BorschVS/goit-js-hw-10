import { fetchBreeds, refs, fetchCatByBreed } from './js/cat-api';
import optionTpl from './templates/option.hbs';
import catInfoTpl from './templates/cat-info.hbs';

fetchBreeds().then(articles => {
  markupOptions({ articles });
});

refs.select.addEventListener('change', markupBreedCard);

function markupOptions(breedList) {
  refs.select.insertAdjacentHTML('beforeend', optionTpl(breedList));
}

function markupBreedCard() {
  const selectedBreedId = refs.select[refs.select.selectedIndex].value;

  fetchCatByBreed(selectedBreedId).then(breed => {});

  //   refs.catBox.insertAdjacentHTML('beforeend', catInfoTpl(data));
}
