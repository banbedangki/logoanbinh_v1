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
  private url = "http://localhost:8080/gioithieu";
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
      var self = this;

      let promise = new Promise(function(resolve, reject) {
            var element = $("#slider4").responsiveSlides({
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
            if(element.length !== 0) {
              resolve(element);
            }
      });

      promise.then(function(elm) {
        self.data = data;
      });

      // setTimeout (() => {
      //   //if(!runOneTime) {
      //     $("#slider4").responsiveSlides({
      //       auto: true,
      //       pager:true,
      //       nav:false,
      //       speed: 500,
      //       namespace: "callbacks",
      //       before: function () {
      //         $('.events').append("<li>before event fired.</li>");
      //       },
      //       after: function () {
      //         $('.events').append("<li>after event fired.</li>");
      //       }
      //       });
      //  // }
      //   //runOneTime = true;
      // }, 2000);

    })
  }

  ngOnInit() {

  }

  ngAfterViewInit() {


  }

}
