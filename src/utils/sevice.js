import axios from 'axios';

const service  = axios.create({
    baseURL: "http://127.0.0.1:3000", //process.env.BASE_URL,  // api的base_url
    timeout: 60000  // 请求超时时间
});

service.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

service.interceptors.response.use(response => {
    return Promise.resolve(response.data);
}, error => {
    return Promise.reject({
        err_code: error.response.status,
        err_msg: error.response.data.message
    });
});

const request = {
    install (Vue) {
        window.$http = {
            get (url, data) {
                data = data || {};
                return new Promise((resolve, reject) => {
                    service.get(url, {data}).then(response => {
                        resolve(response)
                    }).catch(error => {
                        reject(error);
                    });
                });
            },

            post (url, data) {
                return new Promise((resolve, reject) => {
                    service.post(url, data).then(response => {
                        resolve(response)
                    }).catch(error => {
                        reject(error);
                    });
                });
            }
        }
    }
}

export default request;