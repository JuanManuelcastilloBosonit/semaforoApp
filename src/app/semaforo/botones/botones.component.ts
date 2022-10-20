import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Subject, Subscription, takeUntil, take } from 'rxjs';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html'
})
export class BotonesComponent implements OnInit {

  boton: string ="Apagado"
  colorP:string="Rojo"
  @Output() colores: EventEmitter<string[]>=new EventEmitter()
  @Output() colorSelected: EventEmitter<string>=new EventEmitter()

  colors:string[]=[
    'Rojo', 'Amarillo', 'Verde'
  ]
  
  constructor() { }

  ngOnInit(): void {
    this.colores.emit(this.colors)
  }
  intervalo=interval(1000)
  cambiarText(){
    if(this.boton==='Apagado'){
      this.boton='Encendido'
      this.intervalo.pipe(take(4)).subscribe((i)=>{
        this.colorP=this.colors[i]
        this.colorSelected.emit(this.colorP)
      })
    }else{
      this.boton='Apagado'
      this.colorP='apagado'
    }
    
  }

  emitirColor(){
    
    this.colorSelected.emit(this.colorP)
    console.log(this.colorP)
    
  }
  
}
