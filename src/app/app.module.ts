import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AddMessageComponent } from './pages/add-message/add-message.component';
import { UpdateMessageComponent } from './pages/update-message/update-message.component';
import { MessageComponent } from './components/message/message.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent,
    UpdateMessageComponent,
    MessageComponent,
    MessagesContainerComponent,
    MessagesPageComponent
  ],
  imports: [
    
      AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
