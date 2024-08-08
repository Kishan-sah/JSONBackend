import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, 
  Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  SignUp:FormGroup;
constructor(private userService:UserService){
  this.SignUp = new FormGroup({
    name: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    condition: new FormControl('', [Validators.required]),
  });
}
created() {
  if (this.SignUp.valid) {
    this.userService.addData(this.SignUp.value).subscribe(
      (res:any)=>{
      this.SignUp.reset();
    })
  } } }

