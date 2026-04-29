import { Injectable } from '@angular/core';
import { getFirestore, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class Events {


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
 
   async AddEvent(name: string, time: string, date: string, email: string, type: string, guests: string, details: string){
    try {
  const docRef = await addDoc(collection(this.db, "event"), {
    eventInfo: {
      name,
      time,
      date,
      email,
      type,
      guests,
      details
    }
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }

  async getEventsByEmail(useremail: string) {
    try {
      const q = query(
        collection(this.db, "event"),
        where("eventInfo.email", "==", useremail)
      );
  
      const querySnapshot = await getDocs(q);
  
      const event: any[] = [];
  
      querySnapshot.forEach((doc) => {
        event.push({
          id: doc.id,
          ...doc.data()
        });
      });
  
      return event;
    } catch (error) {
      console.error("Error fetching events:", error);
      return [];
    }
  }
}


