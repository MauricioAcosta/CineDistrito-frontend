import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class QueryService {
  inputNupre: string;
  apiURL: string = environment.url;
  constructor(private httpClient: HttpClient) {
  }
}
