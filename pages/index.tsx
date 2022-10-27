import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {useState} from "react";
import {uploadImage} from "../firebase/client";
import Image from "next/image";
import store from "../store/store";
import {FormElements} from "../shared/bootstrap/form/FormElements";
import {useForm} from "../shared/utils/forms/useForm";
import BtnPrimary from "../shared/bootstrap/button/primary/BtnPrimary";
import BtnDanger from "../shared/bootstrap/button/danger/BtnDanger";
import BtnSecondary from "../shared/bootstrap/button/secondary/BtnSecondary";

const Home: NextPage = () => {
    const router = useRouter();
    const [index, setIndex] = useState(0);


    const saveForm = (event: any) => {
        event.preventDefault();


    }

    const structureFormAdd = [
        {
            name: 'pharmacies',
            type: 'textarea',
            label: 'Farmacia da escludere',
            dataElement: {type: 'text', placeholder: 'Testo da inserire'}
        },
    ]

    const structureForm = [
        {
            name: 'name',
            type: 'input',
            label: 'Nome',
            dataElement: {type: 'text', placeholder: 'Nome'}
        },
        {
            name: 'surname',
            type: 'input',
            label: 'Cognome',
            dataElement: {type: 'text', placeholder: 'Cognome'}
        },
        {
            name: 'email',
            type: 'input',
            label: 'Email',
            dataElement: {type: 'text', placeholder: 'Email'}
        },
        {
            name: 'phone',
            type: 'input',
            label: 'Cellulare',
            dataElement: {type: 'text', placeholder: 'Numero Cellulare'}
        }


    ]
    const submitForm = (event: any) => {
    }
    const validationForm = {
        name: {
            required: {
                params: {
                    name: 'Nome'
                }
            }
        },
        surname: {
            required: {
                params: {
                    name: 'Cognome'
                }
            }
        },
        email: {
            required: {
                params: {
                    name: 'Email'
                }
            }
        },
        phone: {
            required: {
                params: {
                    name: 'Telefono'
                }
            }
        },


    }

    const {dataForm, changeValue, submitAction, errors, isSubmit} = useForm(submitForm, validationForm)


    return (<div>
            <div className="navbar navbar-expand-lg navbar-dark bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-2">
                            <img
                                src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAABGCAYAAAAKCiBIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVCRjA4OEQ2OTk0MzExRUI4MjNCQjhCQzc0RTAxNEM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVCRjA4OEQ3OTk0MzExRUI4MjNCQjhCQzc0RTAxNEM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUJGMDg4RDQ5OTQzMTFFQjgyM0JCOEJDNzRFMDE0QzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUJGMDg4RDU5OTQzMTFFQjgyM0JCOEJDNzRFMDE0QzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz79RApAAAAgsklEQVR42uxd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' +
                                    'Vz/XHI2o/uhrwstGJ31zfA6dMjyDKvmzwUB1RoNhT21tB102IZemnsoutJT5U9keKqc2f7WXxvy1YLw8UeOw0A1n5AcLKX2hN2HKLl27/MFkeVz691ceR08MSKL8dBt9wIBvw/aGsH+M9yujC4FAgP7Xvn7N+L8l+Hq2/xdgACbllU1JRXF0AAAAAElFTkSuQmCC'}
                                height="36"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className={"row justify-content-center mb-4"}>
                    <h1 className={'text-center'}>Attenzione</h1>
                    <p className={'text-center'}>Riempi il modulo qui sotto e procedi a confermare la tua email</p>
                    <div className={"col-12 col-lg-7 col-md-10 bg-gray p-5 "}>
                        <form onSubmit={submitAction}>
                            <FormElements structure={structureForm} errors={errors} isSubmit={isSubmit}
                                          changeValue={changeValue} dataForm={
                                dataForm
                            }/>
                            <div className="row align-items-center">
                                <div className="col">
                                    <FormElements structure={structureFormAdd} errors={errors} isSubmit={isSubmit}
                                                  changeValue={changeValue} dataForm={
                                        dataForm
                                    }/>
                                </div>
                                <div className="col-auto">
                                    <div className={'btn-group gap-2 mt-2'}>
                                        <BtnDanger className={''}>
                                            -
                                        </BtnDanger>
                                        <BtnPrimary className={''}>
                                            +
                                        </BtnPrimary>
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-5 ">
                                <div className="col-12">
                                    <BtnPrimary type={'submit'} className={'w-100'}>
                                        Salva
                                    </BtnPrimary>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            <footer className="mt-auto bg-dark text-center text-lg-start bg-black">
                <div className="text-center text-white p-3"> © 2022
                    Copyright: <a className="text-white" target="_blank" href="https://farmamico.com/">Farmamico.com</a>
                </div>
            </footer>
        </div>
    )
}

export default Home
