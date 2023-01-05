import axios from "axios";

export const formApi = axios.create({
  baseURL: 'http://194.67.119.159:3000'
});