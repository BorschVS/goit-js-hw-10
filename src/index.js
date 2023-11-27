import { fetchBreeds, refs, fetchCatByBreed } from './js/cat-api';
import optionTpl from './templates/option.hbs';
import catInfoTpl from './templates/cat-info.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '250px',

  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  timeout: 2000,

  failure: {
    background: '#acacac',
    textColor: '#fff',
    childClassName: 'notiflix-notify-failure',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
});

showLoader();

fetchBreeds().then(articles => {
  markupOptions({ articles });
  hideLoader();
});

refs.select.addEventListener('change', markupBreedCard);

function markupOptions(breedList) {
  refs.select.insertAdjacentHTML('beforeend', optionTpl(breedList));
}

function markupBreedCard() {
  const selectedBreedId = refs.select[refs.select.selectedIndex].value;
  showLoader();

  refs.catBox.innerHTML = '';

  fetchCatByBreed(selectedBreedId)
    .then(breed => {
      return breed;
    })
    .then(breed => {
      refs.catBox.insertAdjacentHTML('beforeend', catInfoTpl(breed));
      hideLoader();
    })
    .catch(err => Notify.failure('Something went wrong:('))
    .finally(hideLoader);
}

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}
