import axios from 'axios';

var apiKey = '803b3f5cbb8e033ce69e114c370cad70';
var oauthToken =
  '389a35ce910852e1d98eef5589e4b5c239378b38171973fb6ee2fca59495667b';

const instance = axios.create({
  baseURL: `https://api.trello.com/1/tokens/${token}?key=${key}`,
});

export default instance;
