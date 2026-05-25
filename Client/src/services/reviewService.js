import api from '../api';

export const getReviews = async (productId)=>{
    const get = await api.get(`/review/${productId}`);
    return get.data;
}
export const addReviews = async (productId,data)=>{
    const add = await api.post(`/review/${productId}`,data);
    return add.data;
}
export const remReviews = async (id)=>{
    const remove = await api.delete(`/review/${id}`);
    return remove.data;
}