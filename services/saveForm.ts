import http from "../shared/utils/http";

export const saveFormData = (data : any) => http.post('saveSubmit', data )
