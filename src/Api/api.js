import axios from 'axios';

export default axios.create({
    baseURL : "http://localhost:3000/api",
    headers : {
        'Content-Type': 'application/json' // met le header par défaut pour toutes les requêtes
    }
});