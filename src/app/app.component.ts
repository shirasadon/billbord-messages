import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bilbord';
  messegas:Observable<any>
  constructor(private firestore:AngularFirestore ){
this.messegas=firestore.collection('messeges').valueChanges()
  }
}
