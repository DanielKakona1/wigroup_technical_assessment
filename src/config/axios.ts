import axios from 'axios';

export const wiki = axios.create({
  baseURL: 'https://en.wikipedia.org/w/api.php?'
});
