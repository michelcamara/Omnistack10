import axios from 'axios';

const api = axios.create({
  //No dispositivo: http://172.16.13.43:3333
  //No emulador iOS: localhost 
  //Emulador android: localhost ou 10.0.2.2

  baseURL: 'http://172.16.13.43:3333',
});

export default api;