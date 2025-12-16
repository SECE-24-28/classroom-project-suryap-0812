import axios from "axios"

const api =  axios.create({
    baseURL:"http://localhost:5000/api"
})

export default api

export const getCourses = () => api.get('/courses').then(res => res.data)
export const addCourses = (course) => api.post('/courses', course).then(res => res.data)
export const getUsers = () =>  api.get('/users').then(res => res.data)
export const addUsers = (user) => api.post('/users', user).then(res => res.data)
export const updateUsers = (id, user) => api.put(`/users/${id}`, user).then(res => res.data)
export const deleteUsers = (id) => api.delete(`/users/${id}`).then(res => res.data)