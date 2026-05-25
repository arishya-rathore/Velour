import api from '../api';

export const getAddresses = async ()=>{
    const adds = await api.get('/address');
    return adds.data;
}

export const addAddress = async (data)=>{
    const addNew = await api.post('/address',data);
    return addNew.data;
}

export const updateAddress = async (id,data)=>{
    const update = await api.put(`/address/${id}`,data);
    return update.data;
}

export const remAddress = async (id)=>{
    const dltAdd = await api.delete(`/address/${id}`);
    return dltAdd.data;
}

export const defAddress = async (id)=>{
    const defAdd = await api.put(`/address/${id}/default`);
    return defAdd.data;
}