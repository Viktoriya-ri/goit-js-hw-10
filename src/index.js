import { fetchBreeds, fetchCatByBreed } from './cat-api';
import './styles.css';
import 'slim-select/dist/slimselect.css';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

const ref = {
  select: document.querySelector('.breed-select'),
  divCatInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

const { select, divCatInfo, loader, error } = ref;

loader.classList.replace('loader', 'is-hidden');
divCatInfo.classList.add('is-hidden');
ErrorEvent.classList.add('is-hidden');

