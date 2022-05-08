import { UpdateMessageComponent } from './../../pages/update-message/update-message.component';
import { Component, OnInit,
  Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Message } from 'src/app/classes/message';
import { MessegService } from 'src/app/services/messeg.service';


@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent  {
  messages$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const collectio = collection(firestore, 'bilboard-messages');
    debugger;
    this.messages$ = collectionData(collectio);
  }
 
}


