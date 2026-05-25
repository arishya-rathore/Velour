import api from '../api';

export const getOutfits = async ()=>{
    const fetch = await api.get('/outfits');
    return fetch.data;
}

export const createOutfit = async(data)=>{
    const create = await api.post('/outfits',data);
    return create.data;
}

export const updateOutfit = async(id,data)=>{
    const update = await api.put(`/outfits/${id}`,data);
    return update.data;
}

export const deleteOutfit = async (id)=>{
    const dlt = await api.delete(`/outfits/${id}`);
    return dlt.data;
}