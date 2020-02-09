import axios from 'axios';
import { IPIFY_URL, IP_STACK_URL, IP_STACK_PARAMS } from '../constants';

export const getCity = async () => {
  try {
    const ip = await (await axios.get(IPIFY_URL)).data;
    return await axios.get(`${IP_STACK_URL}${ip}${IP_STACK_PARAMS}`);
  } catch (error) {
    return error;
  }
};

export const fetchData = async url => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error;
  }
};
