import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = new FormControl('');

  constructor(private router: Router ) { }

  ngOnInit() {
  }


  login(){
    this.router.navigate(['/home']);
  }
}
