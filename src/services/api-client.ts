import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e4a380e7dd3b41d8a6eb08e6663fd404'
    }
})