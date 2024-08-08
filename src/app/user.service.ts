import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:3000/EmployeeData';

  addData(data: any){
    
    return this.http.post('http://localhost:3000/EmployeeData', data);
  }

  fetchData() {
  
    return this.http.get('http://localhost:3000/EmployeeData');
  }

  UpdateData(data: any) {
    debugger;
    return this.http.put(`${this.baseUrl}/${data.id}`, data);
  }

  DeleteData(data: any) {
    debugger;
    return this.http.delete(`${this.baseUrl}/${data}`);
  }

}
