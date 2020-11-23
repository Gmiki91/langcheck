import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'langcheck';
  input:string = "Your input will be displayed here";
  recording:boolean = false;
  constructor(private httpClient: HttpClient) {}

  record() {
    this.recording=true;
    this.httpClient.get<string>('http://127.0.0.1:5002/record').subscribe(data => {
      this.input=data;
    })
  }

  check() {
    this.recording=false;
    this.httpClient.get<string>('http://127.0.0.1:5002/check').subscribe(data => {
      this.input=data;
    })
  }
}
