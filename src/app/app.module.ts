import { UploadFileService } from './upload-file.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './category.service';
import { FormUploadComponent } from './app-form-upload/app-form-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUploadComponent,

  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
  providers: [UploadFileService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
