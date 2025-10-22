import { getFirestore } from 'firebase/firestore';
import { getFirebaseApp } from './firebaseConfig';

export const firestore = getFirestore(getFirebaseApp());
