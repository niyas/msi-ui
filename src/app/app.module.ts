import { MsiService } from './services/msi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    MsiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
