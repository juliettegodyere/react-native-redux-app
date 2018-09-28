const ENVIRONMENT = 'https://api.github.com' //dev,  production

const BASE_URL = 'https://api.github.com';

export const Endpoints = {
    auth: {
        users: BASE_URL + '/users?since=135',
        singleUser: BASE_URL + '/users:username',
        //follower: BASE_URL + '/users/octocat/following',
        //register: BASE_URL + '/auth/register',
        //forgot: BASE_URL + '/auth/forgot',
        //change_credentials: BASE_URL + '/auth/change_credentials',
    },
    configuration: {
        mobility: BASE_URL + '/configurations/mobility.json'
    }
};
