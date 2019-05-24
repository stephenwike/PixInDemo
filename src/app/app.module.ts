import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { PixinService } from './pixin.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PixinService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
