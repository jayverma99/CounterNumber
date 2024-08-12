import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  type = 'password';
  number:any = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userId: new FormControl(''),
      password: new FormControl(''),
    });
    console.log(this.loginForm);

  }

  receivedNumber: number = 0;

  onNumberChange(newNumber: number) {
    this.receivedNumber = newNumber;
  }

  onSubmit(form: FormGroup) {
    let req = {
      EmailId : form.value.userId,
      Password : form.value.password
    }
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",req).subscribe((res:any)=>{
      console.log(res);
      

    })
    console.log('Valid?', form.valid); // true or false
    console.log('User Id', form.value.userId);
    console.log('password', form.value.password);
  }

  onClock(value) {
    if (value) {
      if (this.type == 'password') {
        this.type = 'text'
      } else if (this.type == 'text') {
        this.type = 'password'
      }
    }

  }

}
