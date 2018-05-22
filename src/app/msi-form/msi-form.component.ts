import { FormsModule } from '@angular/forms';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { MsiService } from './../services/msi.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'msi-form',
  templateUrl: './msi-form.component.html',
  styleUrls: ['./msi-form.component.css']
})
export class MsiFormComponent {
  message: string;
  constructor(private service: MsiService) { }

  onSubmit(frmMsi: any) {
    let payload = frmMsi.value;
    this.service.create(payload)
      .subscribe(
        newMsi => {
          this.message = "Msi data saved successfully";
          frmMsi.reset();
          this.resetMessage();
        },
        (error: AppError) => {
          if(error instanceof BadInput) {
            console.log('Bad request');
          }
          else throw error;
        }
      )
  }

  resetMessage() {
    setTimeout(() => {
      this.message = ""
    }, 4000);
  }

}
