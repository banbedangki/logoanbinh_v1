import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import JsonToTypeScript from 'json-to-typescript';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  private url = "http://localhost:3000/api/layGioithieu";
  public data = [{id_gioithieu: 0, ten_gioithieu: "", noidung: ""}];
  //getData:any = [];
  
  constructor(private http: Http) {
    this.getAbouts();
    this.getInfos();
    //this.getArrdata();
   }
  getInfos(){
    return this.http.get(this.url)
    .map((res:Response) => res.json())
  }
 
  getAbouts(){  
    this.getInfos().subscribe(data => {
      //console.log(data);
      this.data = data;
    
      // for ( let k of this.data){
      //  // console.log("data is components: " + k.ten_demuc);
      //   //this.getData.push(k.ten_gioithieu+"");        
      // }  
      setTimeout (() => {
        //if(!runOneTime) {
          $("#slider4").responsiveSlides({
            auto: true,
            pager:true,
            nav:false,
            speed: 500,
            namespace: "callbacks",
            before: function () {
              $('.events').append("<li>before event fired.</li>");
            },
            after: function () {
              $('.events').append("<li>after event fired.</li>");
            }
            });
       // }
        //runOneTime = true;
      }, 1);
      
    })
  }

  // getArrdata(){

  //   for(var i of this.getData){
  //     console.log("componentes: " + i);
  //     console.log(this.getData.length);
  //   }
  // }
  ngOnInit() {
    
  }

  ngAfterViewInit() {
 
        
  }

}
