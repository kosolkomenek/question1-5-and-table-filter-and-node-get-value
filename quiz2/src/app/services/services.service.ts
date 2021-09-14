import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url = 'https://api.publicapis.org/categories';
  constructor(private http: HttpClient) {}
  getConfig() {
    return this.http.get(this.url);
  }
}
