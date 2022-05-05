import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent implements OnInit {
  message$:Observable<any[]>
  constructor(firestore: Firestore) {
    const collectio = collection(firestore, 'messeges');
    debugger;
    this.message$ = collectionData(collectio);
  }
 

  ngOnInit(): void {
  }

}
