import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
// import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })

export class AuthServices {
    constructor(
        // private firebaseServices: FirebaseService,
        public afAuth: AngularFireAuth) {}
    
    doLogin(email, password, router: Router){
        return new Promise<any>((resolve, reject)  => {
            firebase.auth().signInWithEmailAndPassword(email, password).
            then(
                res =>{ 
                    localStorage.setItem('sesion', res.toString());
                    router.navigateByUrl('/perfil');
                    resolve(res);},
                err => {
                    reject(err);
                    console.log("FALLO");

                })
        })
    }
}
