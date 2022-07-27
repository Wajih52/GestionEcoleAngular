import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  Search(event: any){
    console.log(event.target.value);
    let obj={
      search: event.target.value
    }
    this.http.post('http://localhost:3000/absences/search',obj).subscribe((res)=>
    {
      this.data=res;
      console.log(res);
     
    }
    
    );
   
  }


}
