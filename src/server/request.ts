import axios from "axios";
import { message } from 'antd';
import { TOKEN } from "@/components/const";
import { Cookies } from 'js-cookie';

const request  = axios.create({
    baseURL:'https://ap-vodiy-parfum-backend.up.railway.app/api/v1/',
    timeout:10000,
    headers: {
        Authorization:`Bearer ${Cookies.get(TOKEN)}`
    }
})

request.interceptors.response.use(response => response , (err) => {
    message.error((err.response.data.message))
    return Promise.reject(err)
})

export default request;