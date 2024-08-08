import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

  EmpData:any[]=[];

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  loadEmployeeData() {
    this.userService.fetchData().subscribe((res: any) => {
      this.EmpData = res;
    });
  }

  DeleteEmployee(data:any){
    const confirmation = window.confirm(`Are you sure you want to delete the Employee?`);
  if (confirmation){
    this.userService.DeleteData(data).subscribe((res:any)=>{
      this.loadEmployeeData();
    })
  }
  }

}
