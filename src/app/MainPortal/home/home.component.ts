import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SharedPortal/Services/api.service';
import { CartapiService } from 'src/app/SharedPortal/Services/cartapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productlist:any;


  constructor(private api:ApiService,
    private cartapi:CartapiService
    ) { }

  ngOnInit(): void {

    this.api.GetProduct().subscribe(res=>{
      this.productlist=res;
      this.productlist.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
        
      });


    })
  }

addtocart(item:any){
this.cartapi.AddToCArt(item);
}


}
