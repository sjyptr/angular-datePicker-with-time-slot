import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
declare var $: any;
$.datetimepicker.setLocale('en');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  allowdates = [];
  myForm: FormGroup;
  allowtimes: any = [];
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    // FORM
    this.allowdates = ['24.09.2021', '23.09.2021'];
    this.allowtimes = ['12:00', '13:00', '15:00'];
    this.myForm = this.fb.group({
      date: [''],
    });

    $('#datetimepicker').datetimepicker({
      inline: true,
      lang: 'en',
      allowDates: this.allowdates,
      formatDate: 'd.m.Y',
      allowTimes: this.allowtimes,

      onChangeDateTime: (dateText) => {
        this.myForm.controls['date'].setValue(dateText);
        console.log(dateText.toLocaleString());

        // console.log('00-0-90-90-', new Date(dateText), inst)
      },
    });
  }
}
