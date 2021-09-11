import axios from "axios";




const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:3002/' 
  
});

//example 'http://localhost:3000/'
export default instance;