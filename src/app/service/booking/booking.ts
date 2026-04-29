import { Injectable } from '@angular/core';
import { getFirestore, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class Booking {


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
 
   async AddBooking(name: string, order: string, time: string, date: string, email: string){
    try {
  const docRef = await addDoc(collection(this.db, "bookings"), {
    book: {
      name,
      order,
      time,
      date,
      email
    }
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }


  async getBookingsByEmail(useremail: string) {
  try {
    const q = query(
      collection(this.db, "bookings"),
      where("book.email", "==", useremail)
    );

    const querySnapshot = await getDocs(q);

    const bookings: any[] = [];

    querySnapshot.forEach((doc) => {
      bookings.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
}
}

