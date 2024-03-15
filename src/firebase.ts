const firebaseConfig = {
  apiKey: "AIzaSyDoiAOoPYvHMOuxSQkw1P4DOyiM77XoGrg",
  authDomain: "bloom-landing-page.firebaseapp.com",
  projectId: "bloom-landing-page",
  storageBucket: "bloom-landing-page.appspot.com",
  messagingSenderId: "579632463321",
  appId: "1:579632463321:web:4ca55949759982dc782dc8",
};

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage bucket
const storage = getStorage(app);

// Get a reference to the image file in Firebase Storage
export const imageRef = ref(storage, "/aboutUsPhotos/aboutUs.png");

// Get the download URL of the image
getDownloadURL(imageRef)
  .then((url) => {
    console.log(url);
    // Use the image URL in your Vite project
    // const imgElement = document.createElement("img");
    // imgElement.src = url;
    // document.body.appendChild(imgElement);
  })
  .catch((error) => {
    console.error("Error getting download URL:", error);
  });


