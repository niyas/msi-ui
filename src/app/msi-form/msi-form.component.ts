import { Component } from '@angular/core';

@Component({
  selector: 'msi-form',
  templateUrl: './msi-form.component.html',
  styleUrls: ['./msi-form.component.css']
})
export class MsiFormComponent {

  constructor() { }

  submit(msi) {
    console.log(msi.value)
  }

}
