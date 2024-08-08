import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  SignUp:FormGroup;
constructor(private userService:UserService){

  this.SignUp = new FormGroup({
    name: new FormControl('', [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    EmailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    Address: new FormControl('', [Validators.required]),
    condition: new FormControl('', [Validators.required]),
  });
}
created() {
  debugger;
  if (this.SignUp.valid) {
    this.userService.addData(this.SignUp.value).subscribe(response => {
      console.log('Data successfully submitted:', response);
      this.SignUp.reset();
    }, error => {
      console.error('Error submitting data:', error);
    });
  }
}

}
