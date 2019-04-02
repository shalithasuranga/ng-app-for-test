import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username;
  private password
  private error: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  login(): void {
    if(this.username == 'admin' && this.password == 'admin') 
      this.router.navigate(['/dashboard']);
    else
      this.error = true;
  }
}
