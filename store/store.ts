const store: any = {
    data: {
      listErrors: [],
      callNumber: 0,
      fixedLoad: false
    },
    functions: {
        setListErrors: (data: any[]) => {},
        setCallNumber: (data: any[]) => {},
        fixedLoad: (data: boolean) => {}
    }
}

export const addErrorMessage = (title: string) => {
    store.data.listErrors = [...store.data.listErrors, {
        title,
        type: 'error',
        id: Date.now() * Math.round(Math.random() * 100)
    }]
    store.functions.setListErrors(store.data.listErrors)
}
export const addSuccessMessage = (title: string) => {
    store.data.listErrors =  [...store.data.listErrors, {
        title,
        type: 'success',
        id: Date.now() * Math.round(Math.random() * 100)
    }]
    store.functions.setListErrors(store.data.listErrors)
}

export const removeErrorMessage = (id:number) => {
    store.data.listErrors = store.data.listErrors.filter((ele: any) => ele.id !== id);
    store.functions.setListErrors(store.data.listErrors);
}

export const incrementN = () => {
    store.data.callNumber = store.data.callNumber +1;
    store.functions.setCallNumber(store.data.callNumber)
}
export const decrementN = () => {
    store.data.callNumber = store.data.callNumber > 0? store.data.callNumber -1 : 0;
    store.functions.setCallNumber(store.data.callNumber)
}

export default store;
