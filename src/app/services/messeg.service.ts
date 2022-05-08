
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
  // private message: Message[]=new Message()
constructor(private firestore: Firestore) { }

addMessege(messege:Message) {
  const messegeRef = collection(this.firestore, 'bilboard-messages'); 
  return addDoc(messegeRef, messege);
}

getMessages(): Observable<any[]> {
  const messegeRef = collection(this.firestore, 'bilboard-messages');
  return collectionData(messegeRef,{ idField: 'id' }) as Observable<any[]>;
}

// getMessagesBy(id: string): Message | undefined {
//   return this.message.find((message) => message.id === id);
// }
// updateMessage(_id:any, message:string, date:Date) {
//   this.db.doc(`User/${_id}`).update({message:message,date:date});
//  }
}