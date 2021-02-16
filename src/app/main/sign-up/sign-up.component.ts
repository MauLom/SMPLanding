import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userName ="";
  public userSurname =""
  public userPass = "";
  public userSex = "";
  public userBirthDate;
  public noAsadores =0;


  public sexualidades = [
    {value: 'male', viewValue: 'Masculino'},
    {value: 'female', viewValue: 'Femenino'},
    {value: 'undefined', viewValue: 'No binario'},
    {value: 'undefined', viewValue: 'Prefiero no compartir'},
  ];


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(
    public firestore: AngularFirestore,
    public firebaseRTDB: AngularFireDatabase,
    public firebaseAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {

  }


  crearUsuarios(name, surname, pass, sex, birthDate, email, noAsadores) {
    
    this.firebaseAuth.createUserWithEmailAndPassword(email, pass)
      .then(
        user => {
          this.firebaseRTDB.database.ref('users/'+ user.user.uid).set({
            name: name,
            surname: surname,
            sex: sex,
            birthDate: birthDate,
            email: email,
            noAsadores: noAsadores,
            profilePicture: ""
          })
        })
      .catch(
        error => {
          console.log("Error", error)
        })
  }

}
