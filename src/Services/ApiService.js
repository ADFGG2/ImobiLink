import axios from "axios";
import AuthService from "./AuthService";

function createHeader() {
    const jwt = AuthService.PegarToken();
    if (jwt) {
        return {
            headers: {
                Authorization: 'Bearer ' + jwt
            }
        }
    }
}

const baseUrl = "https://localhost:44374/api";

const ApiService = {

    async Get(endpoint) {
        const headers = createHeader();
        
        const response = await axios.get(baseUrl + endpoint, headers);
        return response;
    },

    async Post(endpoint, body) {
        const headers = createHeader();

        const response = await axios.post(baseUrl + endpoint, body, headers);
        return response;
    }
};

export default ApiService;
