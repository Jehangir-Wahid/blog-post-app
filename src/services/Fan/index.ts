import axios from "axios";

const Fan = axios.create({
    baseURL: "http://localhost:3001/fan/"
});

Fan.interceptors.request.use(
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

export default Fan