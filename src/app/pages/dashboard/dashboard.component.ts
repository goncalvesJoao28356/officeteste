import { Component, OnInit } from '@angular/core';
import { Product, Service } from './app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [Service]
})
export class DashboardComponent implements OnInit {

  products: Product[];
    currentItem: Product;

    constructor(service: Service) {
        this.products = service.getProducts();
        this.currentItem = this.products[0];
    }
	
	ngOnInit() {}
	
    selectItem(e) {
        this.currentItem = e.itemData;
    }

}


