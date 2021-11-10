import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // })

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
    }),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit(){
    this.profileForm.value;
    //this.profileForm.value
  }

  update(){
    this.profileForm.patchValue({
      firstName: 'John',
      lastName: 'Wick'
    });
  }
  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }
  addHobb(){
    this.hobbies.push(this.fb.control(''));
  }

}
