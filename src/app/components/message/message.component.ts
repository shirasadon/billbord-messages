
import { Component, OnInit,Input } from '@angular/core';
import { Message } from 'src/app/classes/message';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor() { }
 @Input()message:Message=new Message()
  ngOnInit(): void {
  }

}
