import axios from "axios";

const AuthService = axios.create({
    baseURL: "http://localhost:3001/auth/",
    headers : {
        "Content-Type":"application/json",
    }
});

AuthService.interceptors.request.use(
    async (config: any) => {
        const token = await localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default AuthService