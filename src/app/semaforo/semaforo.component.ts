import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent  {

  constructor() { }

  colores!: string[]
  colorSelected: string=""

  getColores($event:string[]){
    this.colores=$event;
    console.log(this.colores)
  }
  getColorSeleccted($event:string){
    this.colorSelected=$event;
    console.log("Color seleccionado "+$event)
  }

}
