// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0XehBsYQ9FzJCj4_O0zbOYtJ4PTsd9OI",
  authDomain: "chocoloco-auth.firebaseapp.com",
  projectId: "chocoloco-auth",
  storageBucket: "chocoloco-auth.appspot.com",
  messagingSenderId: "624942149283",
  appId: "1:624942149283:web:d2d8f0aa979a00c8ab5916",
  measurementId: "G-2FJ3M1TEW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); /* Инициализация firebase хранилища с определенным id конфига */
const auth = getAuth(app); /* Информация об аутентификации пользователя */
const analytics = getAnalytics(app); /* Аналитика, она пока нам не нужна */
const provider = new GoogleAuthProvider(); /* Авторизация через google */
const providerFacebook = new FacebookAuthProvider(); /* Авторизация через google */
const database = getFirestore(app); /* Информация об хранилище */

export { auth, provider, database, providerFacebook } /* Экспортируем нужные нам функции для проекта */