const ENVIRONMENT = 'dev' //dev,  production

const BASE_URL = ENVIRONMENT === 'dev'
    ? 'http://127.0.0.1:8000/api'
    : 'https://usemicropay.formelo.com/api';

export const Endpoints = {
    auth: {
        //login: BASE_URL + '/auth/login',
        invite: BASE_URL + '/actions/invite',
        activate: BASE_URL + '/actions/activate',
        //register: BASE_URL + '/auth/register',
        //forgot: BASE_URL + '/auth/forgot',
        //change_credentials: BASE_URL + '/auth/change_credentials',
    },
    configuration: {
        mobility: BASE_URL + '/configurations/mobility.json'
    }
};