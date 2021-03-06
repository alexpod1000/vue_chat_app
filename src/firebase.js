import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


import { firebaseConfig } from './firebase_config.js';
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth();
export const storage = firebase.storage();
