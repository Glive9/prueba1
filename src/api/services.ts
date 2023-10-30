import axios from 'axios';

export const getProduct = (name: string) => {
    return axios.get(`https://fakestoreapi.com/${name}`);
}