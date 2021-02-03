import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lottery-project-cc665-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;