import axios from "axios";
import doenv from "dotenv";
doenv.config();

const API = axios.create({
  baseURL: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.APPID}&app_key=${process.env.APPKEY}`,
});

// export const
