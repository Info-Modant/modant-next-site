import {firebaseApp} from "../library/firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import jessicaDay from 'dayjs';
import {ContactFormValues} from "../pages/contact";

const firestore = getFirestore(firebaseApp);

function generateId() {
  return jessicaDay().format('DD-MM-YY_HH-mm-ss')
}

export async function sendForm(data: ContactFormValues, onSuccess?: () => void, onError?: () => void) {
  return await setDoc(doc(firestore, "contact", generateId()), data)
    .then(onSuccess)
    .catch(onError);
}