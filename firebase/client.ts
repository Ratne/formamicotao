import {ref, uploadBytes, getDownloadURL, getBlob, listAll} from "firebase/storage"
import {db, storage} from "../firebaseConfig";
import {collection, getDocs, doc, onSnapshot} from "firebase/firestore";

export const uploadImage = (file: any, basePath: string = 'general') => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, 'images/'+basePath+'/'+file.name)
        uploadBytes(storageRef, file).then((snapshot) => {
            resolve(true)
        })
    })

}
const blobToBase64 = (blob: any) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}
export const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
export const downloadImage = (basePath: string = 'general') => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, 'gs://quiz-cane-legenda.appspot.com/'+basePath)
        const list: any[] = [];
        listAll(storageRef).then(res => {
            res.items.forEach(itemRef => {
                list.push({path: getDownloadURL(itemRef), name: itemRef.name})
            })
            Promise.all(list.map(ele => ele.path)).then(res => {
                resolve(res.map((ele, index) => ({
                    path: ele,
                    name: list[index].name
                })))
            })
        })

    })

}

export const downloadImageBase64 = (basePath: string = 'general') => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, 'gs://quiz-cane-legenda.appspot.com/'+basePath)
        const list: any[] = [];
        listAll(storageRef).then(res => {
            res.items.forEach(itemRef => {
                list.push({path: getBlob(itemRef), base: itemRef.toString(), name: itemRef.name})
            })
            Promise.all(list.map(ele => ele.path).map(el => new Promise(resolve =>{
                el.then((blob: any) => {
                    resolve(getBase64(blob))
                })


            }))).then(res => {

                resolve(res.map((ele, index) => ({
                    path: ele,
                    name: list[index].name
                })))
            })
        })

    })

}

export const getDataAfterQuery = async (data: any) => {
    const dataDocs = await getDocs(data);
    return  dataDocs.docs.map(entry => ({idDocument: entry.id, ...(entry.data() as any)}));
}

export const getDataByFirestore = async (collectionName: string) => {
    const data = collection(db, collectionName);
    return await getDataAfterQuery(data);
}
export const getDataByFirestoreMore = async (collectionName: string, docName: string) => {
    // const data = collection(db, collectionName+'/'+docName)
    // return await getDataAfterQuery(data);
    const promise = new Promise((resolve) => {
        onSnapshot(doc(db, collectionName, docName), (d) => {
            resolve({idDocument: d.id, ...(d.data() as any)})
        })
    })
    return  await promise;
}



export const getDataByQuery = async (query: () => any) => {
    const queryResult = query();
    return await getDataAfterQuery(queryResult);
}
