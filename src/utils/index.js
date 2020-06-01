import axios from 'axios';
import {
  IPIFY_URL,
  IP_STACK_URL,
  IP_STACK_PARAMS,
  HEROKU_CORS_URL,
} from '../constants';

export const getCity = async () => {
  try {
    const ip = await (await axios.get(`${HEROKU_CORS_URL}/${IPIFY_URL}`)).data;
    console.log(ip);
    return await axios.get(
      `${HEROKU_CORS_URL}/${IP_STACK_URL}${ip}${IP_STACK_PARAMS}`
    );
  } catch (error) {
    return error;
  }
};

export const fetchData = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error;
  }
};
