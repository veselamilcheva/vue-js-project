//custom axios instance
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://axios-e67a0.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'somethingelsecustom';

export default instance
