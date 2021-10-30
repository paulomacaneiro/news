import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './service/newsapi.service';
import { EncurtadorPipe } from './encurtador.pipe';
import { TechNewsComponent } from './tech-news/tech-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    EncurtadorPipe,
    TechNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
