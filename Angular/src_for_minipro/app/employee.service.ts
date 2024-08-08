import { Injectable } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'node:diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url : string;
  employee : Employee;
  employeeArr:Employee[];

  constructor(private http:HttpClient) {
    this.url = "http://localhost:3004/employees";
    this.employee = new Employee();
    this.employeeArr=[];
    
   }

  insertEmployee(employee : Employee){
    this.http.post<Employee>(this.url,employee).subscribe();
    return"New Player Joined This Club";
  }

  updateEmployee(employee : Employee){
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return"Player Details Updated";
  }

  deleteEmployee(empId : number){
    this.http.delete<Employee>(this.url+"/"+empId).subscribe();
    return"Player Leaved From the Club";
  }

  findEmployee(empId : number){
    this.http.get<Employee>(this.url+"/"+empId).subscribe(data => this.employee = data);
    return this.employee;
  }

  findAll(){
    this.http.get<Employee[]>(this.url).subscribe( data => this.employeeArr = data);
    return this.employeeArr;
  }


}
