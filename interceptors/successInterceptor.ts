import { addSuccessMessage} from "../store/store";

export default (config: any) => {
    if(config && config.data && config.data.message){
        addSuccessMessage(config.data.message);
    }
    return config;
}
