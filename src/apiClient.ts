import axios from "../node_modules/axios/index";
import { WATCHMOVIE_API } from "./constants.keys";

const axiosInstance = axios.create({
    baseURL: 'https://api.watchmode.com',
})

export default class APIClient {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = <T>() => {
        console.log('fetching from:', this.endpoint)
        return axiosInstance.get<T[]>(this.endpoint, {
            params: {
                apiKey: WATCHMOVIE_API
            }
        }).then(res => res.data)
    }
}