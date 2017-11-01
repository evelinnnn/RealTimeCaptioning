import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
// import { StatusComponent } from './components/status/status.component';
import { SocketioComponent } from './components/socketio/socketio.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    // StatusComponent,
    SocketioComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
