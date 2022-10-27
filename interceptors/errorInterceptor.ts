import {addErrorMessage} from "../store/store";


export default (err: any) => {
    if(err && err.response && err.response.data && err.response.data.message){
        addErrorMessage(err.response.data.message);
    }
    return Promise.reject(err);
}
