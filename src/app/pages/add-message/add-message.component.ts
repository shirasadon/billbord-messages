import { MessegService } from 'src/app/services/messeg.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { Observable } from 'rxjs';
import { Form, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent  {
  updateStatus=false;
  messageToEdit=Message

message:Message= {
 message:"",
   date:new Date(),
   IsSeen:false
}
constructor(private MessegService:MessegService){}
// submitted=false
// savemessege(): void {
//   const data = {
//     messege: this.billbord.message,
//     date:this.billbord.date,
//     isseen:this.billbord.isseen,
// }
// this.MessegService.create(data)
// .subscribe(
//   response => {
//     console.log(response);
//     this.submitted = true;
//   },
//   error => {
//     console.log(error);
//   });
 

 onSubmit(form: NgForm) {
  this.MessegService.addMessege(form.value).
    then(() => form.reset());
}
editMode(message:any,value:NgForm){
  this.updateStatus=!this.updateStatus
  
}
updateUser(userKey, value){
  value.nameToSearch = value.name.toLowerCase();
  return this.db.collection('users').doc(userKey).set(value);
}
}