import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppErrorHandler } from './common/app-error-handler';
import { MsiService } from './services/msi.service';
import { AppComponent } from './app.component';
import { MsiFormComponent } from './msi-form/msi-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MsiFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MsiService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
