import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { 

  }


 public getConfig() {
  return this.http.get('http://13.233.179.158:7070/delicious-food-api/additional-charges/get-chargres');
}


}