import{initializeApp} from 'firebase/app';
const firebase = initializeApp({
    apiKey: "AIzaSyCNbCBIQ-E9kuFR6XpWAKlw7DRiwY8TMmo",
    authDomain: "firstjs-5674b.firebaseapp.com",
    projectId: "firstjs-5674b",
    storageBucket: "firstjs-5674b.appspot.com",
    messagingSenderId: "878484993281",
    appId: "1:878484993281:web:8835fac2f81aa52d4b9700"
}); 






const oderref =document.getElementById("oderref");
const deliverytype = document.getElementById("deliverytype");
const pickupadd = document.getElementById("pickupadd");
const mobilenum =document.getElementById("mobilenum");
const receiver =document.getElementById("receiver"); 

const database= firstbase.database();