import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root',
})
export class Identity {
  private firebaseConfig = {
    apiKey: "AIzaSyAZqrCsGSQzG7pwyPOvgrN9PMe6t3v8ERo",
    projectId: "thedayfive-a719d"
  };

  private app: any;

  constructor(private router: Router) {
    this.app = initializeApp(this.firebaseConfig);
  }

  login(email: string, password: string) {
    const auth = getAuth(this.app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login successful:', user);
        this.router.navigate(['/account']);
      }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login failed:', errorCode, errorMessage);
      }
      );
  }

  register(email: string, password: string) {
    const auth = getAuth(this.app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Registration successful:', user);
        
      }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Registration failed:', errorCode, errorMessage);
      }
      );
  }

  getCurrentUserEmail(): Promise<string | null> {
  const auth = getAuth(this.app);

  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.email);
      } else {
        resolve(null);
      }
    });
  });
}
}

