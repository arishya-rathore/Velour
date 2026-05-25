import api from '../api';

export const getWishlist = async ()=>{
    const fetch = await api.get('/wishlist');
    return fetch.data;
}

export const addToWishlist = async (data)=>{
    const addWish = await api.post('/wishlist',data);
    return addWish.data;
}

export const removeProduct = async (data)=>{
    const remove = await api.delete('/wishlist',{data});
    return remove.data;
}