import axios from "axios";
import { axiosInstance } from "../config/axiosInstance";
export async function getWeatherData() {
  const response = await axiosInstance.get('/weather');
  console.log(response.data);
  
  return response.data;

}
