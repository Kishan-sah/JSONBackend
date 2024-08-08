import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-put',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './put.component.html',
  styleUrl: './put.component.css'
})
export class PutComponent {
 

  EmpData:any[]=[];

  editForm: FormGroup;

  constructor(private userService: UserService) {
    this.editForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      condition: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  loadEmployeeData() {
    this.userService.fetchData().subscribe((res:any)=>{
      this.EmpData=res;
    })
  }
  updateEmployee(data:any) {
    debugger;
    this.editForm.patchValue({
      id: data.id,
      name: data.name,
      email: data.email,
      userName: data.userName,
      password: data.password,
      address: data.address,
      condition: data.condition
    });
    }

    save(){
      debugger;
      this.userService.UpdateData(this.editForm.value).subscribe((res:any)=>{
        this.editForm.reset();
        this.loadEmployeeData();
      })
}
}