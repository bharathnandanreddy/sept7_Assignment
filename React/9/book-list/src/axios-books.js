import axios from 'axios'
const instance= axios.create({
    baseURL:'https://project-react-burger.firebaseio.com/'
});

export default instance;