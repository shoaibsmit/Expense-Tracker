// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyC2Pax_A-UK4TjsT7Lf0o6xbfUWgpebXOU",
//   authDomain: "nextjs-saylani-batch-11.firebaseapp.com",
//   projectId: "nextjs-saylani-batch-11",
//   storageBucket: "nextjs-saylani-batch-11.appspot.com",
//   messagingSenderId: "967652255821",
//   appId: "1:967652255821:web:bd9aebf82904c782f65404"
// };

// export const app = initializeApp(firebaseConfig)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyTtP8vnsYsk3uNO8RSwgnfsr92hd-XNY",
  authDomain: "next-js-c38e9.firebaseapp.com",
  databaseURL: "https://next-js-c38e9-default-rtdb.firebaseio.com",
  projectId: "next-js-c38e9",
  storageBucket: "next-js-c38e9.appspot.com",
  messagingSenderId: "481050342270",
  appId: "1:481050342270:web:1780ada897568d720c792f",
  measurementId: "G-QVXL36CDKE"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);