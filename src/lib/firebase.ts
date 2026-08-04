import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// In a real Vite app, importing from outside src can sometimes be an issue,
// but we'll try to import it directly. If it fails, we can fetch it.
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export const submitContactMessage = async (name: string, email: string, message: string) => {
  try {
    const docRef = await addDoc(collection(db, 'messages'), {
      name,
      email,
      message,
      createdAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};
