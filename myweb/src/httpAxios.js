import axios from 'axios';

const httpAxios=axios.create({
    baseURL:'http://localhost/backend_cdtt/public/api/',
    timeout:100000,
    headers:{'X-Custom-Header':'footbar'}
    
});
export default httpAxios;