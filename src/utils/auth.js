import NetInfo from 'react-native';
import Endpoints from '../config/endpoints';

export const AuthUtils = {
    login: (data) => {
        return new Promise(async (resolve, reject) => {
            try {

                // const token = fetchToken();
                const endpoint = Endpoints.auth.login;
                let formData = new FormData();
                Object.keys(data).forEach(key => {
                    formData.append(key, data[key]);
                });
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formData,
                };
                try {
                    let response = await fetch(endpoint, options);
                    if (response.status === 200) {
                        const responseJSON = await response.json();
                        return resolve(responseJSON.data);
                    }
                    if (response.status >= 400 && response.status < 500) {
                        return reject({
                            status: response.status,
                            message: 'Incorrect Credentials'
                        });
                    }
                    if (response.status > 500) {
                        return reject({
                            status: response.status,
                            message: 'An error has occured and will be fixed'
                        });
                    }
                } catch (error) {
                    reject(error);
                }
            } catch (e) {
                alert(e.message);
                reject(e.message);
            }
        });
    },
    register: (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const endpoint = Endpoints.auth.register;
                let formData = new FormData();
                Object.keys(data).forEach(key => {
                    formData.append(key, data[key]);
                });
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formData,
                };
                try {
                    let response = await fetch(endpoint, options);
                    if (response.status < 300) {
                        const responseJson = await response.json();
                        return resolve(responseJson.data);
                    }
                    if (response.status >= 400 && response.status < 500) {
                        return reject({
                            status: response.status,
                            message: 'Incorrect Credentials'
                        });
                    }
                    if (response.status > 500) {
                        return reject({
                            status: response.status,
                            message: 'An error has occured and will be fixed'
                        });
                    }
                } catch (error) {
                    reject(error);
                }
            } catch (e) {
                alert(e.message);
                reject(e.message);
            }
        });
    },
    forgot: () => {
        return new Promise(async (resolve, reject) => {

        });
    },
    change_credentials: () => {
        return new Promise(async (resolve, reject) => {

        });
    }
};