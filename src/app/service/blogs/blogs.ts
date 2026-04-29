import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, addDoc } from "firebase/firestore";

 

@Injectable({
  providedIn: 'root',
})
export class Blogs {
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


  async getAllBlogs() {
    this.data = [];
    let _this = this;

    const querySnapshot = await getDocs(collection(this.db, "blog"));
    querySnapshot.forEach((doc) => {
      let blogsData: any = doc.data();
      blogsData.blogsInfo.id = doc.id;
      _this.data.push(blogsData);
    });
 
    return this.data;
  }

  async getBlogsById(id: any) {
    if(this.data.length == 0){
      await this.getAllBlogs();
    }
    return this.data.find((blogs: any) => blogs.blogsInfo.id == id);
  }

  async AddBlog(image: string, title: string, description: string, date: string){
    try {
  const docRef = await addDoc(collection(this.db, "blog"), {
    blogsInfo: {
       image,
       title,
       description,
       date
    }
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }
}
 
 