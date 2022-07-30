import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/SharedPortal/Services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
producta:any =[];
allproducts:any=0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {
    this.cartapi.GetProductData().subscribe((res: any)=>{
      this.producta=res;
      this.allproducts=this.cartapi.GetTotalAmount();
    })
  }

}
