import axios from "axios";


const API_BASE = "http://localhost:8090/api";
// http://localhost:8090/api/send/link

export const postAPI = async (url, data) => {
    try {
        const response = await axios.post(`${API_BASE}${url}`, data);
        return response.data;
    } catch (error) {
        console.error("POST API Error:", error);
        throw error;
    }
};