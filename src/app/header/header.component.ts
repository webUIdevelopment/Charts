import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  greeting: string[];



  // Inject HttpClient into your component or service.
 constructor(private http: HttpClient) {}

 ngOnInit(): void {
   // Making the HTTP Request
   this.http
    .get('https://hello-world-lb.cedarteam.net/ping')
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.greeting = data['greeting'];
      console.log(data);
    })
 }
}
