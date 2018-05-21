import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { MsiService } from './../services/msi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'msi-form',
  templateUrl: './msi-form.component.html',
  styleUrls: ['./msi-form.component.css']
})
export class MsiFormComponent {

  constructor(private service: MsiService) { }

  submit(msi) {
    console.log(msi.value)
  }

  createMsi(msi: any) {
    let payload = msi.value;
    this.service.create(payload)
      .subscribe(
        newMsi => {
          console.log(newMsi);
        },
        (error: AppError) => {
          if(error instanceof BadInput) {
            console.log('Bad request');
          }
          else throw error;
        }
      )
  }

}
