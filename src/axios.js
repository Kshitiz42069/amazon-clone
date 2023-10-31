import axios from "axios";

const instance = axios.create({
    baseURL:'...' //API url (Cloud Function)
})

export default instance;
