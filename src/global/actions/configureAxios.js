import Axios from "axios";

let isSet = false;

const configureAxios = () => {
    if (!isSet) {
        isSet = true;
        console.log('--------------------configureAxios');
        Axios.interceptors.request.use(async request => {
                console.log('>>>>>>>>>>>>', request);
                request.headers['Accept'] = 'application/json';
                request.headers['Content-Type'] = 'application/json';
                return Promise.resolve(request);
            }
        );
        Axios.interceptors.response.use(response => {
            console.log('<<<<<<<<<<<', response);
            return Promise.resolve(response);
        }, async error => {
            console.log('<<<<<<error<<<<<', error.response ? {...error.response} : {...error});//cancel and network error have no response
            return Promise.reject(error);

        })

    }
};

export default configureAxios
