import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import JsonToTypeScript from 'json-to-typescript';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {
  private url = "http://localhost:3000/api/laydsThietke";
  public data = [{id_thietke: 0, ten_mautk: "", hinhtk:"", noidungtk: ""}];
  constructor(private http: Http) {
    this.getDesign();
    this.getDatas();
   }

  getDatas(){
    return this.http.get(this.url)
    .map((res:Response) => res.json())
  }

  getDesign(){
    this.getDatas().subscribe(data => {
      console.log(data);
      this.data = data;

      for(let k of this.data){
        console.log("data have: " + k.noidungtk);
      }
    });
  }

  ngOnInit() {
  }
}
