import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId
};

export const app = initializeApp(firebaseConfig);





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAyTtP8vnsYsk3uNO8RSwgnfsr92hd-XNY",
//   authDomain: "next-js-c38e9.firebaseapp.com",
//   databaseURL: "https://next-js-c38e9-default-rtdb.firebaseio.com",
//   projectId: "next-js-c38e9",
//   storageBucket: "next-js-c38e9.appspot.com",
//   messagingSenderId: "481050342270",
//   appId: "1:481050342270:web:1780ada897568d720c792f",
//   measurementId: "G-QVXL36CDKE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);