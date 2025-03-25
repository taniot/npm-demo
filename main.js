//commonjs
const axios = require('axios');
// esm
// import axios from "axios";

/*
creato la cartella di progetto
npm init => npm init -y
npm install axios => salvato tutti i files in node_modules
const axios = require('axios');
*/

// console.log(axios);

// axios.

const url = 'https://jsonplaceholder.typicode.com/posts';

axios.get(url).then(response => console.log(response));





//go live -> live server

//locale-funziona senza connessione a internet
//http://127.0.0.1:3000 => img http://www.classe142.it/demo.jpg

//127.0.0.1:8000