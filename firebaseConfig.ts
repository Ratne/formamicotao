// Import the functions you need from the SDKs you need
// import admin from "firebase-admin"
import { initializeApp } from "firebase-admin/app";
// import {getFirestore} from "firebase-admin/firestore"
import {getDatabase} from "firebase-admin/database";
import {cert} from "firebase-admin/app";
// var serviceAccount = require("./admarketing-ea14b-firebase-adminsdk-aia4r-a3c27ac9b2.json");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// if (!admin.apps.length) {
//     admin.initializeApp({
//         credential: admin.credential.cert(serviceAccount)
//     });
// }

const firebaseConfig = {
    apiKey: "AIzaSyBYVh9FjoMTQrHkU1oxjv4L2iQETo23nSQ",
    authDomain: "damianomarinelli-c2624.firebaseapp.com",
    projectId: "damianomarinelli-c2624",
    storageBucket: "damianomarinelli-c2624.appspot.com",
    messagingSenderId: "921435717961",
    appId: "1:921435717961:web:55ce01f0bf8a4b28dfda98"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const database = getFirestore()


import { initializeApp as initialize } from 'firebase/app';
import {  getFirestore as getFireStore2 } from 'firebase/firestore';
import {getStorage} from "firebase/storage";


// TODO: Replace the following with your app's Firebase project configuration


export const app = initialize(firebaseConfig);
export const db = getFireStore2(app)
export const storage = getStorage(app, 'gs://quiz-cane-legenda.appspot.com');


// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
// import "firebase/compat/storage"
//
// if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig)
// }
//
// export {firebase}
