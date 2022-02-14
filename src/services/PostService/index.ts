import axios from "axios";

const PostService = axios.create({
    baseURL: "http://localhost:3001/post/"
});

PostService.interceptors.request.use(
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

export default PostService