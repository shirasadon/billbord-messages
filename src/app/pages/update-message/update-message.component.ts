import { MessagesContainerComponent } from './../../components/messages-container/messages-container.component';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { MessegService } from 'src/app/services/messeg.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss']
})
export class UpdateMessageComponent implements OnInit {
message:Message=new Message()


  constructor(  private messegService: MessegService,
    private route: ActivatedRoute) {
     
  
  }
  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.message =
    //     this.messegService.getMessagesBy(id) ?? new Message();
    // }
  }
 

}
