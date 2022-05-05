
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from '../classes/message';
// import { HttpClient } from '@angular/common/http';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
// const baseUrl = 'http://localhost:53367/api/reports';
@Injectable({
  providedIn: 'root'
})
export class MessegService {
// messege$:Observable<any>
// constructor(firestore: Firestore) {
//   const collectio = collection(firestore, 'messeges');
//   debugger;
//   this.messege$ = collectionData(collectio);
// }
//  constructor(private http: HttpClient){}
// create(data:any): Observable<any> {
//   return this.http.post(baseUrl, data);
// }
constructor(private firestore: Firestore) { }

addMessege(messege:Message) {
  const messegeRef = collection(this.firestore, 'bilboard-messages'); 
  return addDoc(messegeRef, messege);
}

getMessages(): Observable<any[]> {
  const messegeRef = collection(this.firestore, 'bilboard-messages');
  return collectionData(messegeRef,{ idField: 'id' }) as Observable<any[]>;
}
}
