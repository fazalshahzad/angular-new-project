import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/SharedPortal/Services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalitemnumber:number=0;
 

  constructor(private cartApi:CartapiService) { }

  ngOnInit(): void {


    this.cartApi.GetProductData().subscribe((res: string | any[]) =>{
      this.totalitemnumber = res.length;
    })


  }

}
