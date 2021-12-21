import { firebaseApp } from "../library/firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

import {ContactFormValues} from "../pages/contact";

export async function sendForm(data: ContactFormValues, onSuccess?: () => void, onError?: () => void) {
  return await addDoc(collection(firestore, "contact"), data)
    .then(onSuccess)
    .catch(onError);
}