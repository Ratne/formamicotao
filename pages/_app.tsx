import '../styles/theme.scss'
import type {AppProps} from 'next/app'
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import httpData from "../shared/utils/httpData";
import LoaderFullScreen from "../shared/ui/loader/loaderFullscreen/LoaderFullScreen";
import ToastListError from "../shared/ui/toast/errors/toast/toastListError/ToastListError";
import store, {decrementN, incrementN, removeErrorMessage} from "../store/store";
import errorInterceptor from "../interceptors/errorInterceptor";
import successInterceptor from "../interceptors/successInterceptor";
import {setI18n} from "../shared/utils/languages/config/i18n";


axios.interceptors.response.use(successInterceptor, errorInterceptor);
axios.interceptors.request.use((config) => {
    incrementN();
    return config;
});
axios.interceptors.response.use(
    (config: any) => {
        decrementN();
        return config;
    },
    (err) => {
        decrementN()
        return Promise.reject(err);
    }
);

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    const [listErrors, setListErrors] = useState([])
    const [numberCall, setCallNumber] = useState(0)
    const [fixedLoad, setFixedLoad] = useState(false)
    const [initLanguage, setInitLanguage] = useState<boolean>(false)


    useEffect(() => {
        setI18n('it', () => setInitLanguage(true));
        store.functions.setListErrors = setListErrors;
        store.functions.setCallNumber = setCallNumber;
        store.functions.fixedLoad = setFixedLoad;
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        httpData.url = process.env.NEXT_PUBLIC_REACT_APP_URL || '';


    }, []);

    return <>
        <ToastListError list={listErrors} closeAction={(id) => removeErrorMessage(id as number)}/>
        <LoaderFullScreen show={!!numberCall || fixedLoad}/>
        <Component {...pageProps} />
    </>
}

export default MyApp
