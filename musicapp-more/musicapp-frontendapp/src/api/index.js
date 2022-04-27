import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api",
});

//////////////////////////pass the above  and using api obj as created
export const insertAlbum = (payload) => api.post(`/music`, payload);
export const getAllAlbums = () => api.get(`/music`);
export const getAllAlbumById = (id) => api.get(`/music/${id}`);
export const updateAlbumById = (id, payload) =>
    api.put(`/music/${id}`, payload);
export const deleteAlbumById = (id) => api.delete(`/music/${id}`);

const apis = {
    insertAlbum,
    getAllAlbums,
    getAllAlbumById,
    updateAlbumById,
    deleteAlbumById,
};

export default apis;
