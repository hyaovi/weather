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
    const location = await axios.get(
      `${HEROKU_CORS_URL}/${IP_STACK_URL}${ip}${IP_STACK_PARAMS}`
    );
    return { err: false, data: location.data };
  } catch (error) {
    return { error, err: true };
  }
};

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return { err: false, data: response.data };
  } catch (error) {
    return { error, err: true };
  }
};
export const timeConverter = (dt = 1560343627) => {
  let date = new Date(dt * 1000);
  return {
    date,
    dateString: date.toDateString(),
    time: date.toLocaleTimeString(),
  };
};
