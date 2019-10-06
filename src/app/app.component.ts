import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JBL Go Portable Wireless Bluetooth Speaker with Mic (Black)';

  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  
  constructor(private httpService: HttpClient)
  {}
  arrjbl:any [];
  topScores: any [];

 
  


  ngOnInit()
  {
    
    this.httpService.get('./assets/data.json').subscribe(data => {

      this.arrjbl=[data];
      this.topScores=data["topScores"]
      console.log(this.arrjbl.values);
      


      

 },
 
    
      (err: HttpErrorResponse) =>{
        console.log(err.message);
      })
    
}  

}
