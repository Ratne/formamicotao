import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {useState} from "react";
import {uploadImage} from "../firebase/client";
import Image from "next/image";
import store from "../store/store";
import {FormElements} from "../shared/bootstrap/form/FormElements";
import {useForm} from "../shared/utils/forms/useForm";
import BtnPrimary from "../shared/bootstrap/button/primary/BtnPrimary";

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

    const structureForm = [{
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
    const validationForm =
    {
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


    return (
<div className="container">
        <div className={"row justify-content-center mb-4"}>
            <div className={"col-12 col-lg-6 col-md-10 bg-gray px-5 "}>
                <form onSubmit={submitAction}>
                <FormElements structure={structureForm} errors={errors} isSubmit={isSubmit} changeValue={changeValue} dataForm={
                    dataForm
                }/>
                    <div className="row">
                    <div className="col-10">
                    <FormElements structure={structureFormAdd} errors={errors} isSubmit={isSubmit} changeValue={changeValue} dataForm={
                        dataForm
                    }/>
                    </div>
                        <div className="col-2">
                            <p>aaa</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12 text-end">

                        <button type={'button'} className={'btn'}>
                            Aggiungi
                        </button>
                    </div>

                    <div className="col-12">
                        <BtnPrimary type={'submit'} className={'w-100 mb-2'}>
                            Salva
                        </BtnPrimary>
                    </div>
                    </div>
                </form>
            </div>


        </div>
</div>
    )
}

export default Home
