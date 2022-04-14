import axios from 'axios';

const api= axios.create({
  baseURL:'http://localhost:3010/api'
})
//////////////////////////pass the above  and using api obj as created
export const insertAlbum = payload =>{api.post(`/music`,payload)}
export const getAllAlbums = ()=>{ return api.get(`/music`)};
export const getAlbumById = id => api.get(`/music/${id}`)
export const updateAlbumById = (id,payload) =>{return api.put(`/music/${id}`,payload)}
export const deleteAlbumById = id =>api.delete(`/music/${id}`)

const apis = {
  insertAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbumById,
  deleteAlbumById
}

export default apis;