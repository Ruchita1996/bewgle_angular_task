import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)';
  
  constructor(private httpService: HttpClient)
  {}
  arrjbl:any [];

 
  


  ngOnInit()
  {
    this.httpService.get('./assets/data.json').subscribe(data => {

      this.arrjbl=[data];
      console.log(this.arrjbl.values);

      

 },
    
      (err: HttpErrorResponse) =>{
        console.log(err.message);
      }
    
    )
    
  }
  function() {

    var myJSONObject = 
      {
      "topScores":
          {
              "prod_1": 
              [
                  {"topic" : "Sound Quality"},
                  {"score" : "4.6"}
              ],
  
              "prod_2": 
              [
                  {"topic" : "Bass"},
                  {"score" : "4.2"}
              ],
              "prod_3": 
              [
                  {"topic" : "Design and Build"},
                  {"score" : "4.2"}
              ],
              "prod_4": 
              [
                  {"topic" : "Battery Backup"},
                  {"score" : "4.2"}
              ]
          }
      }
  
   
    }
  
}
