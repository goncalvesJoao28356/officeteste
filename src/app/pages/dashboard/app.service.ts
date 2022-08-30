import { Injectable } from '@angular/core';

export class Product {
    ID: string;
    name: string;
    expanded?: boolean;
    categoryId?: string;
    icon?: string;
    price?: number;
}

var products: Product[] = [
    {
        ID: "1",
        name: "Stores",
        expanded: true
    }, {
        ID: "1_1",
        categoryId: "1",
        name: "Super Mart of the West",
        expanded: true
    }, {
        ID: "1_1_1",
        categoryId: "1_1",
        name: "Video Players",
		expanded: true
    }, {
        ID: "1_1_1_1",
        categoryId: "1_1_1",
        name: "HD Video Player",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/1.png",
        price: 220
    }, {
        ID: "1_1_1_2",
        categoryId: "1_1_1",
        name: "SuperHD Video Player",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/2.png",
        price: 270
    }, {
        ID: "1_1_2",
        categoryId: "1_1",
        name: "Televisions",
        expanded: true
    }, {
        ID: "1_1_2_1",
        categoryId: "1_1_2",
        name: "SuperLCD 42",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/7.png",
        price: 1200
    }, {
        ID: "1_1_2_2",
        categoryId: "1_1_2",
        name: "SuperLED 42",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/5.png",
        price: 1450
    }, {
        ID: "1_1_2_3",
        categoryId: "1_1_2",
        name: "SuperLED 50",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/4.png",
        price: 1600
    }, {
        ID: "1_1_2_4",
        categoryId: "1_1_2",
        name: "SuperLCD 55",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/6.png",
        price: 1750
    }, {
        ID: "1_1_2_5",
        categoryId: "1_1_2",
        name: "SuperLCD 70",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/9.png",
        price: 4000
    }, {
        ID: "1_1_3",
        categoryId: "1_1",
        name: "Monitors",
		expanded: true
    }, {
        ID: "1_1_3_1",
        categoryId: "1_1_3",
        name: "19\"",
		expanded: true
    }, {
        ID: "1_1_3_1_1",
        categoryId: "1_1_3_1",
        name: "DesktopLCD 19",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/10.png",
        price: 160
    }, {
        ID: "1_1_4",
        categoryId: "1_1",
        name: "Projectors",
		expanded: true
    }, {
        ID: "1_1_4_1",
        categoryId: "1_1_4",
        name: "Projector Plus",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/14.png",
        price: 550
    }, {
        ID: "1_1_4_2",
        categoryId: "1_1_4",
        name: "Projector PlusHD",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/15.png",
        price: 750
    },
	{
        ID: "2",
        name: "Stores",
        expanded: true
    }, {
        ID: "2_1",
        categoryId: "2",
        name: "Super Mart of the West",
        expanded: true
    }, {
        ID: "2_1_1",
        categoryId: "2_1",
        name: "Video Players",
		expanded: true
    }, {
        ID: "2_1_1_1",
        categoryId: "2_1_1",
        name: "HD Video Player",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/1.png",
        price: 220
    }, {
        ID: "2_1_1_2",
        categoryId: "2_1_1",
        name: "SuperHD Video Player",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/2.png",
        price: 270
    }, {
        ID: "2_1_2",
        categoryId: "2_1",
        name: "Televisions",
        expanded: true
    }, {
        ID: "2_1_2_1",
        categoryId: "2_1_2",
        name: "SuperLCD 42",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/7.png",
        price: 1200
    }, {
        ID: "2_1_2_2",
        categoryId: "2_1_2",
        name: "SuperLED 42",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/5.png",
        price: 1450
    }, {
        ID: "2_1_2_3",
        categoryId: "2_1_2",
        name: "SuperLED 50",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/4.png",
        price: 1600
    }, {
        ID: "2_1_2_4",
        categoryId: "2_1_2",
        name: "SuperLCD 55",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/6.png",
        price: 1750
    }, {
        ID: "2_1_2_5",
        categoryId: "2_1_2",
        name: "SuperLCD 70",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/9.png",
        price: 4000
    }, {
        ID: "2_1_3",
        categoryId: "2_1",
        name: "Monitors",
		expanded: true
    }, {
        ID: "2_1_3_1",
        categoryId: "2_1_3",
        name: "19\"",
		expanded: true
    }, {
        ID: "2_1_3_1_1",
        categoryId: "2_1_3_1",
        name: "DesktopLCD 19",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/10.png",
        price: 160
    }, {
        ID: "2_1_4",
        categoryId: "2_1",
        name: "Projectors",
		expanded: true
    }, {
        ID: "2_1_4_1",
        categoryId: "2_1_4",
        name: "Projector Plus",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/14.png",
        price: 550
    }, {
        ID: "2_1_4_2",
        categoryId: "2_1_4",
        name: "Projector PlusHD",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/15.png",
        price: 750
    },
	{
        ID: "3",
        name: "Stores",
        expanded: true
    }, {
        ID: "3_1",
        categoryId: "3",
        name: "Super Mart of the West",
        expanded: true
    }, {
        ID: "3_1_1",
        categoryId: "3_1",
        name: "Video Players",
		expanded: true
    }, {
        ID: "3_1_1_1",
        categoryId: "3_1_1",
        name: "HD Video Player",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/1.png",
        price: 220
    }, {
        ID: "3_1_1_2",
        categoryId: "3_1_1",
        name: "SuperHD Video Player",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/2.png",
        price: 270
    }, {
        ID: "3_1_2",
        categoryId: "3_1",
        name: "Televisions",
        expanded: true
    }, {
        ID: "3_1_2_1",
        categoryId: "3_1_2",
        name: "SuperLCD 42",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/7.png",
        price: 1200
    }, {
        ID: "3_1_2_2",
        categoryId: "3_1_2",
        name: "SuperLED 42",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/5.png",
        price: 1450
    }, {
        ID: "3_1_2_3",
        categoryId: "3_1_2",
        name: "SuperLED 50",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/4.png",
        price: 1600
    }, {
        ID: "3_1_2_4",
        categoryId: "3_1_2",
        name: "SuperLCD 55",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/6.png",
        price: 1750
    }, {
        ID: "3_1_2_5",
        categoryId: "3_1_2",
        name: "SuperLCD 70",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/9.png",
        price: 4000
    }, {
        ID: "3_1_3",
        categoryId: "3_1",
        name: "Monitors",
		expanded: true
    }, {
        ID: "3_1_3_1",
        categoryId: "3_1_3",
        name: "19\"",
		expanded: true
    }, {
        ID: "3_1_3_1_1",
        categoryId: "3_1_3_1",
        name: "DesktopLCD 19",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/10.png",
        price: 160
    }, {
        ID: "3_1_4",
        categoryId: "3_1",
        name: "Projectors",
		expanded: true
    }, {
        ID: "3_1_4_1",
        categoryId: "3_1_4",
        name: "Projector Plus",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/14.png",
        price: 550
    }, {
        ID: "3_1_4_2",
        categoryId: "3_1_4",
        name: "Projector PlusHD",
        icon: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/15.png",
        price: 750
    }
];

@Injectable()
export class Service {
    getProducts(): Product[] {
        return products;
    }
}
