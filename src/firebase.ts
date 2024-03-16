import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCObTYlS9YyhdH90BiykF2xImv0BFniNJQ',
  authDomain: 'bloom-test-ec336.firebaseapp.com',
  projectId: 'bloom-test-ec336',
  storageBucket: 'bloom-test-ec336.appspot.com',
  messagingSenderId: '680429712227',
  appId: '1:680429712227:web:dc0e17425478c97ed01956',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Storage bucket
const storage = getStorage(app);

// Get a reference to the image file in Firebase Storage
// export const imageRef = ref(storage, '/aboutUsPhotos/aboutUs.png');

export async function getImageUrl(imagePath: string): Promise<string> {
  try {
    const imageRef = ref(storage, imagePath);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error('Error getting image URL:', error);
    throw error;
  }
}

// Get the download URL of the image
// getDownloadURL(imageRef)
//   .then((url) => {
//     console.log(url);
//     // Use the image URL in your Vite project
//     // const imgElement = document.createElement("img");
//     // imgElement.src = url;
//     // document.body.appendChild(imgElement);
//   })
//   .catch((error) => {
//     console.error('Error getting download URL:', error);
//   });


