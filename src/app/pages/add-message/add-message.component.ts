import { MessegService } from 'src/app/services/messeg.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent  {
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
}