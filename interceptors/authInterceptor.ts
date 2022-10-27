import httpData from "../shared/utils/httpData";

export default (config: any) => {
  if (httpData.other.token)
    config.headers.Authorization = "Bearer " + httpData.other.token;
  return config;
};
