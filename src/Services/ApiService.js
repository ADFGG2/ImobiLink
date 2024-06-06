import axios from "axios";
import AuthService from "./AuthService";

async function createHeader() {
    const jwt = await AuthService.PegarToken();
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
        const headers = await createHeader();
        
        const response = await axios.get(baseUrl + endpoint, headers );
        return response;
    },

    async Post(endpoint, body) {
        const headers = await createHeader();

        const response = await axios.post(baseUrl + endpoint, body, headers);
        return response;
    }
};

export default ApiService;
