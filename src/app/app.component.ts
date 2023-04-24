import { Component } from '@angular/core';
import {Product} from "./product.module"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name:string="Danny";
  age:number=22;
  img:string='https://source.unsplash.com/random';
  btnState:boolean=true;

  person={
    name:"Pedro",
    age:22,
    avatar:'https://source.unsplash.com/random'
  }
  
  names: string[] = ["Nicolas", "Pedro", "Cesarinho",]
  newName = ""
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]


  toggleButton(){
    this.btnState=!this.btnState;
  }

  addAge(){
    if(this.person.age<101){
      this.person.age++;
    }

  }

  restAge(){
    if(this.person.age>0){
      this.person.age--;

    }

  }

  addName(){

    this.names.push(this.newName);
    this.newName = "";

  }
  deleteName(index: number){

    this.names.splice(index, 1);

  }


onScroll(event: Event){
const element = event.target as HTMLElement;
console.log(element.scrollTop)
}
}

