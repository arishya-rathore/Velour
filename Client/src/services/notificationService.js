import api from '../api';

export const getNotification = async ()=>{
    const getNotif = await api.get('/notifications');
    return getNotif.data;
}

export const markAsRead = async (id)=>{
    const read = await api.put(`/notifications/${id}`);
    return read.data;
} 

export const deleteNotification = async(id)=>{
    const dltNotif = await api.delete(`/notifications/${id}`);
    return dltNotif.data;
}