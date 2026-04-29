import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class Contact {


  private firebaseConfig = {
     apiKey: "AIzaSyAZqrCsGSQzG7pwyPOvgrN9PMe6t3v8ERo",
    projectId: "thedayfive-a719d"
  };

  private app: any;
  private db: any;

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(this.app);
  }
 
   async AddContact(name: string, email: string, query: string){
    try {
  const docRef = await addDoc(collection(this.db, "contact"), {
    contactInfo: {
      name,
      email,
      query
    }
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }
}


