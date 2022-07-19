import axios from 'axios'

export default {
    baseUrl: 'http://localhost:8000/api/',
    config: {
        headers: {'Accept': 'application/json'}
    },

    getBaseUrl() {
        return this.baseUrl;
    },

    async get(url, params) {
        url = this.baseUrl + url;
        let config = this.config;
        config.params = params;

        return axios.get(url, config)
    },

    async post(url, params) {
        url = this.baseUrl + url;

        return axios.post(url, params, this.config)
    },
}