import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

courseName: string ="Angular DAda";

  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
      

        if(this.courseName == "TypeScript")
        {
        this.courseName = "Shreyas";
        }
        else if(this.courseName == "Angular DAda")
        {
        this.courseName = "Typescript";
        }

    }

    title = 'product details';
  productCode = 'PROD_P001';
  productName = 'Apple MPTT2 MacBook Pro';
  productPrice = 217021;
  purchaseDate = '1/17/2018';
  productTax = '0.1';
  productRating = 4.92;

product: Object = {
    'productCode': 'PROD_P001', 'productName': 'Laptop', 'productPrice': 25000,
    'purchaseDate': '5/12/2017', 'productTax': '0.1', 'productRating': 4.53
  };

  productRatings: number[] = [4, 3, 2, 4, 1];
  productMapping: { [k: string]: string } =
  { '=4': ' # - Excellent', '=3': ' # - Good', '=2': '# - Average', 'other': ' # - Very Bad' };

message: string;
  messageMap: any = { 'en': 'Good Morning', 'fr': 'Bonjour', 'es': 'Buenos dÃƒÂ­as', 'de': 'Guten Morgen' };



sortoption: string = "";
  productsList: any = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Lenovo K5 Note', price: 10000 },
    { productName: 'Nokia 6', price: 15000 },
    { productName: 'Vivo V5 Plus', price: 26000 }
  ];

  }