import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { ListComponent } from './components/list/list.component';
import { CommentDataService } from './services/comment-data/comment-data.service';
import { StarComponent } from './components/star/star.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CommentDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
