import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.authService.register(this.email,this.password).then((res)=>{
      this._flashMessagesService.show('new user registered', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }).catch((e)=>{
      this._flashMessagesService.show(e.message, {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['/register']);
    })
  }


}
