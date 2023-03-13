import axios from "axios";
import { axiosInstance } from "../config/axiosInstance";
export async function getWeatherData(city:string) {
  const response = await axiosInstance.post('/weather',{city});
  console.log(response.data);
  
  return response.data;

}
