import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCv0ky8jGAneWY0yz2fuy3ab1IAn45k5Zw",
    authDomain: "uber-next-clone-df9a6.firebaseapp.com",
    projectId: "uber-next-clone-df9a6",
    storageBucket: "uber-next-clone-df9a6.appspot.com",
    messagingSenderId: "30727408212",
    appId: "1:30727408212:web:8df89025571180b2f63bc1",
    measurementId: "G-0X30PL3ZJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { app, provider, auth };