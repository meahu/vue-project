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

    debugger
    if (response.status === 200) {

    } else {

    }
    return response;
}, error => {
    debugger
    return Promise.reject(error);
});

const request = {
    install (Vue) {
        Vue.prototype.$http = {
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