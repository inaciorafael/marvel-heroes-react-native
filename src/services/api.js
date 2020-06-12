import axios from 'axios';

//Api fora de uso.

const timestamp = '1591973320';
const publicKey = 'd62b527212e4a7dd96ba389cbf7a6605';
const md5 = '9990b6e3a26d4d34884be2443a416b18';

const api = axios.create({
    baseURL: `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5}`
})

export default api;