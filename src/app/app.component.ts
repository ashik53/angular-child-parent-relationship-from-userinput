import { Component, ViewChild } from '@angular/core';
import {HelloComponent} from 'src/app/hello.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name: string;
  
  @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;



}//
