import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent, BoardComponent } from './components';
import { GameComponent, HomeComponent } from './pages';
import { ApiService } from './services';
import { ErrorHandler } from './interceptors';
@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    BoardComponent,
    GameComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandler, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
