import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, addDoc } from "firebase/firestore";

 

@Injectable({
  providedIn: 'root',
})
export class Menus {
  data: any = []

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


  async getAllMenus() {
    this.data = [];
    let _this = this;

    const querySnapshot = await getDocs(collection(this.db, "menus"));
    querySnapshot.forEach((doc) => {
      let menusData: any = doc.data();
      menusData.userInfo.id = doc.id;
      _this.data.push(menusData);
    });
   
    return this.data;
  }

  async getMenusById(id: any) {
    if(this.data.length == 0){
      await this.getAllMenus();
    }
    return this.data.find((menus: any) => menus.userInfo.id == id);
  }

  async Addmenus(name: string, description: string, picture: string, price: string, allergens: string){
    try {
  const docRef = await addDoc(collection(this.db, "menus"), {
    userInfo: {
       name,
       description,
       picture,
       price,
       allergens
    }
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }
}
 