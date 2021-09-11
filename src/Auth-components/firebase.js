import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCEYTvQg15qtr42ffYfLAs50hFoNp3ejFY",
    authDomain: "rss-feed-6e959.firebaseapp.com",
    projectId: "rss-feed-6e959",
    storageBucket: "rss-feed-6e959.appspot.com",
    messagingSenderId: "746225596072",
    appId: "1:746225596072:web:5bcb0cf853dc61383af49d",
    measurementId: "G-NRDKRVJ6QD"
  };

const app = initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth=firebase.auth();



  export {db,auth,firebase}