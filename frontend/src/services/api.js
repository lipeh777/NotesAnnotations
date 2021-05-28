import axios from 'axios';

// pegando a api backend
const api = axios.create({
	baseURL: 'http://localhost:3737'
})

export default api;