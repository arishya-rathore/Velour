import api from '../api';

export const getOrders = async ()=>{
    const fetch = await api.get('/orders');
    return fetch.data;
}

export const getOrderById = async (id)=>{
    const getOrder = await api.get(`/orders/${id}`);
    return getOrder.data; 
}

export const createOrder = async (data)=>{
    const create = await api.post('/orders',data);
    return create.data;
}

export const updateOrderStatus = async (id,data)=>{
    const update = await api.put(`/orders/${id}`,data);
    return update.data;
}

export const cancelOrder = async (id)=>{
    const dlt = await api.delete(`/orders/${id}`);
    return dlt.data;
}