import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ ChangeDetectorRef } from '@angular/core';

import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends QuotesService implements OnInit {
  title = 'quotes-list';

  public quotes: Array<object>;

  ngOnInit(){
    this.getQuotes().subscribe(response => {
      this.quotes = response
    }, error => {
      console.log(error)
    })
  }

  public getRandomColors():string{
    let rgb = []
    for(let i = 0; i< 3; i++){
      rgb.push(Math.floor(Math.random() * 255))
    } 
    return `rgba(${rgb.join(',')}, 0.5)`;
  }

  handleShowModal(item: object):void {
    console.log(item)
  }

}
