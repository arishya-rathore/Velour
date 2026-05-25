import api from '../api';

export const getCart = async ()=>{
    const cart = await api.get('/cart');
    return cart.data;
}

export const addToCart = async (data)=>{
    const add = await api.post('/cart',data);
    return add.data;
}

export const updateItem = async (data)=>{
    const update = await api.put('/cart',data);
    return update.data;
}

export const removeItem = async (data)=>{
    const remove = await api.delete('/cart',{data});
    return remove.data;
}