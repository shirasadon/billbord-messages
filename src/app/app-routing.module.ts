import { UpdateMessageComponent } from './pages/update-message/update-message.component';
import { AddMessageComponent } from './pages/add-message/add-message.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AddMessageComponent},
  {path:'add-message',component:AddMessageComponent},
  { path: 'update-message',component:UpdateMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
