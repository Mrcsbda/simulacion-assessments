import axios from "axios";


export const projectsApi = axios.create({
    baseURL: "https://miniback-proyectos.onrender.com/"
})