import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

cartdatalist:any = [];
productlist= new BehaviorSubject<any>([]);


  constructor(private http:HttpClient) { }

  GetProductData(){
    return this.cartdatalist.asObservable();
  }
  SetProductData(product:any){
    this.cartdatalist.push(...product);
    this.productlist.next(product)
  }


  AddToCArt(product:any){
    this.cartdatalist.push(product);
    this.productlist.next(this.cartdatalist);
    this.GetTotalAmount();
console.log(this.cartdatalist);

  }

  //get total amount

  GetTotalAmount(){
    let grandtotal =0;
  this.cartdatalist.map((a:any)=>{
    grandtotal += a.total;
  })
  }


//remove sing item from cart


RemoveCartData(product:any){
  this.cartdatalist.map((a:any, index:any)=>{
    if(product.id === a.id){
      this.cartdatalist.splice(index,1)
    }
  })

}

//remove all items from caart

RemoveAllCArt(product:any){
this.cartdatalist=[]
this.productlist.next(this.cartdatalist)
}






}
