import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment'
import { ReactiveFormsModule } from '@angular/forms'
import { MessageFormComponent } from './message-form/message-form.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
