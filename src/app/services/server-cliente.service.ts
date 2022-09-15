import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {

  Url = 'http://192.168.120.122:4000'

  constructor(private api: HttpClient) { }

  
  
}

