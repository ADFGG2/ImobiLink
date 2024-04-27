import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

const AuthService = {

    async SalvarToken(token) {
        await AsyncStorage.setItem("@jwt", token);
    },
    async PegarToken() {
        return localStorage.getItem("jwt");
    },
    async PegarDadosLogados(){
        const token = await AsyncStorage.getItem("@jwt");
        const userData = jwtDecode(token);
        return userData;
    },

    async VerificarSeUsuarioEstaLogado() {
        const token = await AsyncStorage.getItem("@jwt");
        if (!token) { return false }

        const userData = jwtDecode(token);
        const dataAtual = Date.parse(new Date()) / 1000;

        if (dataAtual > userData.exp) {
            await AsyncStorage.removeItem("@jwt");
            return false;
        }

        return true;
    },
    async Sair() {
        return await AsyncStorage.removeItem("@jwt");
    }
}

export default AuthService;