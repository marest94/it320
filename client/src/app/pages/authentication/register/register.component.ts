import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  basicInfoGroup: FormGroup;
  locationGroup: FormGroup;
  profileGroup: FormGroup;
  detailsGroup: FormGroup;
  men = false;
  women = false;


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.basicInfoGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      reEmail: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]

    });
    this.locationGroup = this._formBuilder.group({
      country: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.profileGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    });
    this.detailsGroup = this._formBuilder.group({
      details: ['', Validators.required],
      education: ['', Validators.required],
      status: ['', Validators.required],
      hobbies: ['', Validators.required],
      likes: ['', Validators.required],
      dislikes: ['', Validators.required]
    });
  }
}



