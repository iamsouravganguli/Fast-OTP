const axios = require('axios');

class SMSGateway {
    constructor() { };

    async post(method = "", url = "", params = {}, headers = {}, data = {}) {
        try {
            const response = await axios.request({
                method: method,
                url: url,
                params: params,
                headers: headers,
                data: data
            });
            // console.log(response.data);
            return response.data;

        } catch (error) {
            throw error
        }
    }
};

module.exports = sms = new SMSGateway();