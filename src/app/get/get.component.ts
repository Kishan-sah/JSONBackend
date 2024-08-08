import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit {
  empData:any[]=[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  loadEmployeeData() {

    this.userService.fetchData().subscribe((res:any)=>{
      this.empData= res;
    })
  }
}